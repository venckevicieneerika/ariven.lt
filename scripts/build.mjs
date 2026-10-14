// Build: public/ + src/ -> dist/ (ready for Hostinger public_html).
// 1) copies static files, 2) compiles src/app.jsx, 3) prerenders the page to static HTML
//    so Googlebot sees all content without JavaScript, 4) fills FAQ schema + sitemap date.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { build } from 'esbuild';
import puppeteer from 'puppeteer';
import { startServer } from './serve.mjs';

const DIST = path.resolve('dist');
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync('public', DIST, { recursive: true });

await build({
  entryPoints: ['src/app.jsx'],
  outfile: path.join(DIST, 'js/app.js'),
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  minify: true,
  target: 'es2018',
  charset: 'utf8',
  legalComments: 'none',
});

const template = fs.readFileSync('src/index.html', 'utf8');
if (!template.includes('<!--PRERENDER-->')) throw new Error('src/index.html: trūksta <!--PRERENDER--> žymos');
fs.writeFileSync(path.join(DIST, 'index.html'), template);

const today = new Date().toISOString().slice(0, 10);
const sm = path.join(DIST, 'sitemap.xml');
fs.writeFileSync(sm, fs.readFileSync(sm, 'utf8').replaceAll('__LASTMOD__', today));

// Prerender in headless Chrome
const server = await startServer(0);
const port = server.address().port;
const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const errors = [];
try {
  const page = await browser.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#ariven-root h1', { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1200));
  const { html, faq } = await page.evaluate(() => {
    const root = document.getElementById('ariven-root');
    root.querySelectorAll('img').forEach((i) => {
      i.setAttribute('decoding', 'async');
      if (i.closest('.hero') || i.closest('.nav')) { i.removeAttribute('loading'); i.setAttribute('fetchpriority', 'high'); }
      else i.setAttribute('loading', 'lazy');
    });
    const faq = [...root.querySelectorAll('.faq-item')].map((it) => ({
      q: it.querySelector('.faq-q span')?.textContent.trim(),
      a: it.querySelector('.faq-a__inner')?.textContent.trim(),
    })).filter((x) => x.q && x.a);
    return { html: root.innerHTML, faq };
  });
  if (errors.length) throw new Error('Puslapio klaidos:\n' + errors.join('\n'));
  const clean = html.replace(/ is-visible| is-armed/g, '');
  const h1 = (clean.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) throw new Error(`Turi būti lygiai viena H1 antraštė, rasta: ${h1}`);
  const ld = faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }));
  const out = template
    .replace('<!--PRERENDER-->', clean)
    .replace('"__FAQ__"', JSON.stringify(ld).replace(/</g, '\\u003c'))
    // ?v=<hash>, kad naršyklės po kiekvieno pakeitimo parsisiųstų naują CSS/JS (talpykla 30 d.)
    .replace(/(href|src)="((?:css|js)\/[^"?]+)"/g, (m, attr, file) => {
      const hash = crypto.createHash('md5').update(fs.readFileSync(path.join(DIST, file))).digest('hex').slice(0, 8);
      return `${attr}="${file}?v=${hash}"`;
    });
  fs.writeFileSync(path.join(DIST, 'index.html'), out);
  console.log(`✓ dist/ paruoštas · ${Math.round(out.length / 1024)} KB index.html · ${faq.length} DUK · sitemap ${today}`);
} finally {
  await browser.close();
  server.close();
}
