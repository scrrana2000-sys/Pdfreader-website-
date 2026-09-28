import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 8080);
const distDir = path.join(__dirname, 'dist');

app.disable('x-powered-by');

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/robots.txt', (req, res) => {
  const origin = getPublicOrigin(req);
  res.type('text/plain').send(
    'User-agent: *\n' +
    'Allow: /\n' +
    `Sitemap: ${origin}/sitemap.xml\n`,
  );
});

app.get('/sitemap.xml', (req, res) => {
  const origin = getPublicOrigin(req);
  const pages = ['/', '/features', '/about', '/download', '/privacy-policy', '/terms', '/contact'];
  const today = new Date().toISOString().slice(0, 10);
  const entries = pages
    .map(
      (page) =>
        `  <url><loc>${origin}${page}</loc><lastmod>${today}</lastmod></url>`,
    )
    .join('\n');

  res.type('application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
  );
});

app.use(express.static(distDir));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`PDF Reader website listening on port ${port}`);
});

function getPublicOrigin(req) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL;
  if (configured) return configured.replace(/\/$/, '');

  const forwardedProto = req.headers['x-forwarded-proto'];
  const proto =
    typeof forwardedProto === 'string'
      ? forwardedProto.split(',')[0].trim()
      : req.protocol;

  return `${proto}://${req.get('host')}`;
}
