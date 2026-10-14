# Ariven.lt – instrukcijos Claude Code

Vieno puslapio svetainė (lietuvių kalba). React 18 per UMD (be bundlerio), JSX kompiliuojamas esbuild, puslapis prerenderinamas į statinį HTML dėl SEO. Talpinimas: Hostinger Premium (Apache, `public_html`).

## Struktūra
- `src/app.jsx` – visas svetainės turinys ir logika (tekstai, sekcijos, galerija, DUK, forma). Dauguma pakeitimų daromi čia.
- `src/index.html` – `<head>`: title, meta, Open Graph, JSON-LD. `<!--PRERENDER-->` ir `"__FAQ__"` žymų netrinti.
- `public/css/main.css` – svetainės stiliai. `public/css/ds.css`, `public/js/ds.js` – Ariven dizaino sistema (komponentai Button, Tag, ServiceCard…).
- `public/img/` – nuotraukos (WebP, iki 1200 px). Naujas nuotraukas konvertuoti į WebP ir įrašyti dydį į `public/js/img-size.js`.
- `public/.htaccess`, `robots.txt`, `sitemap.xml`, `404.html` – serverio ir SEO failai.
- `scripts/build.mjs` → `dist/` (tai, kas keliama į Hostinger).

## Komandos
- `npm install` – vieną kartą.
- `npm run dev` – build + peržiūra http://localhost:8080
- `npm run build` – tik build į `dist/`.

## Taisyklės
- Nekeisti dizaino, spalvų, šriftų, animacijų ir išdėstymo be savininkės leidimo.
- Tekstai lietuviškai, kreipinys „Jūs / Jūsų“ didžiąja raide. Be emoji.
- Kontaktai: +370 650 30672, info@ariven.lt. Formos: Formspree (`mrpbqadb`).
- Neišgalvoti paslaugų, adresų, atsiliepimų ar įvertinimų.
- Puslapyje turi būti tiksliai viena H1 (build tai tikrina).
- Pakeitus DUK, schema atsinaujina automatiškai per build.
- Niekada nepublikuoti be prašymo: publikavimas tik per GitHub Actions „Publikuoti į Hostinger“.
