/**
 * Production configuration for the PDF Reader website.
 *
 * The public hosting URL is detected from the browser at runtime. A deployment
 * may optionally provide VITE_SITE_URL at build time for canonical metadata.
 */

const configuredSiteUrl =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL
    ? import.meta.env.VITE_SITE_URL
    : '';

export const CONFIG = {
  APP_NAME: 'PDF Reader',
  PACKAGE_NAME: 'pdf.reader.scr',
  TAGLINE: 'Read PDFs. Simply.',
  SUBTITLE:
    'A fast, simple PDF reader designed to help you read, organize and manage your documents on Android.',
  TRUST_STATEMENT:
    'Your PDFs stay on your device for local reading and management.',

  // Google Play listing URL for package pdf.reader.scr.
  // This becomes active once the application listing is publicly available.
  GOOGLE_PLAY_URL:
    'https://play.google.com/store/apps/details?id=pdf.reader.scr',

  GITHUB_REPO_URL: 'https://github.com/scrrana2000-sys/pdfreader',
  GITHUB_ISSUES_URL: 'https://github.com/scrrana2000-sys/pdfreader/issues',

  // Optional at build time; runtime hosting origin is used when omitted.
  SITE_URL: configuredSiteUrl,

  PRIVACY_CONTACT_EMAIL: 'radhachawan01@gmail.com',
  SUPPORT_EMAIL: 'radhachawan01@gmail.com',
  DEVELOPER_NAME: 'Siddhanth Singh',

  // Synchronized with the Android app's minSdk = 24.
  MIN_ANDROID_VERSION: 'Android 7.0 (API level 24) or higher',
  ARCHITECTURES:
    'No specific ABI restriction is declared by the app configuration',

  CURRENT_YEAR: 2026,
  LAST_UPDATED: 'September 2026',
} as const;

export type ConfigType = typeof CONFIG;
