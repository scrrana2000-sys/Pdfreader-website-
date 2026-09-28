# PDF Reader – Official Android App Website

Official marketing, support, and legal website for the Android application **PDF Reader** (`pdf.reader.scr`).

## Project

The site is built with React, TypeScript, Vite, and Tailwind CSS. It includes:

- Home, Features, About, Download, Contact, Privacy Policy, and Terms pages
- Responsive dark/light theme
- SEO metadata and structured data
- Dynamic `robots.txt` and `sitemap.xml` from the production server
- Static-friendly frontend with SPA route fallback
- Production health endpoint at `/api/health`
- GitHub Actions verification for typecheck and production build

## Production configuration

Edit `src/config/constants.ts` for application-specific values.

| Setting | Value |
| --- | --- |
| App name | PDF Reader |
| Package ID | `pdf.reader.scr` |
| Developer | Siddhanth Singh |
| Privacy / support email | radhachawan01@gmail.com |
| Google Play URL | `https://play.google.com/store/apps/details?id=pdf.reader.scr` |
| Android minimum | Android 7.0 (API 24) or higher |

The website automatically uses the deployed request origin for canonical URLs and the SEO endpoints. Set `SITE_URL` or `VITE_SITE_URL` only when you need a fixed canonical hostname.

The Google Play URL is the standard listing URL for package `pdf.reader.scr`; it should be treated as live only after the app is publicly available on Google Play.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Production server

Build the frontend and start the Express server:

```bash
npm run build
npm start
```

The server listens on `PORT` when provided, otherwise port `8080`.

Routes provided by the server:

- `/api/health`
- `/robots.txt`
- `/sitemap.xml`
- SPA routes such as `/privacy-policy`

## Deployment

### Cloud Run / Node hosting

Use the repository as the source, run `npm install` during the build phase, run `npm run build`, and start with `npm start`. The included Express server handles SPA routing and generates SEO endpoints dynamically.

### Static hosting

For Vercel, Netlify, or Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Rewrite unknown application routes to `/index.html`

The built frontend is otherwise static.

## Legal pages

The Privacy Policy is available at `/privacy-policy`.

The policy discloses local document processing, Firebase Analytics, Firebase Crashlytics, Google AdMob, permissions, data sharing, retention, deletion, third-party services, and privacy contact information.

## Source repositories

Website:
https://github.com/scrrana2000-sys/Pdfreader-website-

Android app:
https://github.com/scrrana2000-sys/pdfreader

## License

Licensed under the Apache License, Version 2.0.
