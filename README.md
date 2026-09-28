# PDF Reader – Official Android App Website

Official marketing and legal landing website for the Android application **PDF Reader** (`pdf.reader.scr`).

## 1. Project Purpose

This project is a fast, responsive, mobile-first, static-friendly website built to present the PDF Reader Android application. It provides:
- Core features and capabilities of the Android PDF Reader application
- Transparency regarding on-device local document processing
- Clear legal disclosures (Privacy Policy and Terms & Conditions)
- Support resources, troubleshooting FAQs, and GitHub issue tracker links
- Official Google Play store download access

**Android App Details:**
- **App Name:** PDF Reader
- **Package ID:** `pdf.reader.scr`
- **Source Repository:** [https://github.com/scrrana2000-sys/pdfreader](https://github.com/scrrana2000-sys/pdfreader)

---

## 2. Configuration

All editable constants, URLs, emails, and developer details are centrally maintained in a single configuration file:

📁 **`src/config/constants.ts`**

When preparing the website for public deployment, replace the following values:

| Constant Name | Current Value | Description |
| :--- | :--- | :--- |
| `GOOGLE_PLAY_URL` | `https://play.google.com/store/apps/details?id=pdf.reader.scr` | Official listing URL for package `pdf.reader.scr`; it becomes live when the Play listing is publicly available. |
| `PRIVACY_CONTACT_EMAIL` | `radhachawan01@gmail.com` | Privacy and legal inquiries |
| `SUPPORT_EMAIL` | `radhachawan01@gmail.com` | Customer support and feedback |
| `DEVELOPER_NAME` | `Siddhanth Singh` | Developer / publisher name |
| `SITE_URL` | Runtime origin or `VITE_SITE_URL` | Public hosting origin used for canonical URLs, robots.txt, and sitemap.xml. |

> **SEO:** The production Express server generates `robots.txt` and `sitemap.xml` dynamically from the public request origin. Set `SITE_URL` or `VITE_SITE_URL` only when a fixed canonical host is required.

---

## 3. Local Development

To run the website locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Build Command

To create an optimized production build:

```bash
npm run build
```

This compiles TypeScript, processes Tailwind CSS, and outputs the production-ready static assets to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 5. Deployment Options

The frontend is built with React, Vite, and Tailwind CSS. The repository also includes a small Express server for production hosting on services such as Cloud Run.

### Cloud Run / Node hosting
The repository includes `server.js`, an Express production server, SPA fallback routing, a `/api/health` endpoint, and runtime-generated `robots.txt` and `sitemap.xml`. Use `npm run build` followed by `npm start`.

### Static hosting (Vercel / Netlify / Cloudflare Pages)
- Connect the GitHub repository.
- Build command: `npm run build`
- Output directory: `dist`
- Configure the host to rewrite unknown routes to `/index.html`.

### Vercel / Netlify / Cloudflare Pages
- Connect your GitHub repository.
- Build command: `npm run build`
- Output directory: `dist`
- Configure SPA rewrite rule (redirect `/*` to `/index.html` with status 200).

---

## 6. Directory Structure

```text
├── index.html                   # HTML entry point with meta tags & noscript fallback
├── metadata.json                # Project identity & capabilities
├── package.json                 # Dependencies & scripts
├── public/
│   ├── favicon.svg              # Vector PDF document favicon
│   ├── robots.txt               # Search engine directives
├── src/
│   ├── components/
│   │   ├── common/              # Button, Section, FeatureCard, GooglePlayButton, SEO
│   │   ├── home/                # HeroMockup (abstract Android PDF interface)
│   │   └── layout/              # Navbar, Footer
│   ├── config/
│   │   └── constants.ts         # Central production configuration
│   ├── context/
│   │   ├── RouterContext.tsx     # Lightweight client-side router & dynamic SEO tags
│   │   └── ThemeContext.tsx      # Dark / Light theme toggle & persistence
│   ├── data/
│   │   └── features.ts          # Complete 16-feature metadata & workflow steps
│   ├── pages/
│   │   ├── AboutPage.tsx        # /about page
│   │   ├── ContactPage.tsx      # /contact page with FAQs & support links
│   │   ├── DownloadPage.tsx     # /download page with Google Play CTA
│   │   ├── FeaturesPage.tsx     # /features page with category filters
│   │   ├── HomePage.tsx         # / homepage
│   │   ├── PrivacyPolicyPage.tsx # /privacy-policy complete legal disclosures
│   │   └── TermsPage.tsx        # /terms complete conditions of use
│   ├── App.tsx                  # Root component & page router
│   ├── index.css                # Tailwind CSS v4 styling & dark theme tokens
│   └── main.tsx                 # React entry point
├── server.js                   # Express production server and SEO endpoints
├── .github/workflows/ci.yml    # Typecheck + production build verification
└── tsconfig.json
```

---

## 7. License

Licensed under the Apache License, Version 2.0.
