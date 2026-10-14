# Ariven.lt

Ariven – plėvelės klijavimas. Svetainės šaltinio kodas.

## Kaip veikia
```
src/app.jsx + src/index.html + public/   →   npm run build   →   dist/   →   Hostinger public_html
```

Build sukompiliuoja JSX, prerenderina puslapį į statinį HTML (Google mato visą turinį), įrašo DUK schemą ir sitemap datą.

## Vietinis darbas
```
npm install
npm run dev        # http://localhost:8080
```

## Publikavimas
GitHub → **Actions** → **Publikuoti į Hostinger** → **Run workflow**.
Reikalingi GitHub Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
