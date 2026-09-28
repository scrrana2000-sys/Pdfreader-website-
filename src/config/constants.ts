/**
 * Configuration & App Constants for PDF Reader Website
 *
 * Update these constants before deploying to production.
 * Replace the placeholder values with your actual Google Play URL,
 * privacy contact email, developer name, and live website URL.
 */

export const CONFIG = {
  // Application details
  APP_NAME: 'PDF Reader',
  PACKAGE_NAME: 'pdf.reader.scr',
  TAGLINE: 'Read PDFs. Simply.',
  SUBTITLE: 'A fast, simple PDF reader designed to help you read, organize and manage your documents on Android.',
  TRUST_STATEMENT: 'Your PDFs stay on your device for local reading and management.',

  // External Links & Placeholders
  GOOGLE_PLAY_URL: 'GOOGLE_PLAY_URL_PLACEHOLDER',
  GITHUB_REPO_URL: 'https://github.com/scrrana2000-sys/pdfreader',
  GITHUB_ISSUES_URL: 'https://github.com/scrrana2000-sys/pdfreader/issues',
  SITE_URL: 'SITE_URL_PLACEHOLDER',

  // Contact & Legal Placeholders
  PRIVACY_CONTACT_EMAIL: 'PRIVACY_CONTACT_EMAIL_PLACEHOLDER',
  SUPPORT_EMAIL: 'SUPPORT_EMAIL_PLACEHOLDER',
  DEVELOPER_NAME: 'DEVELOPER_NAME_PLACEHOLDER',

  // Android requirements
  MIN_ANDROID_VERSION: 'Android 8.0 (API level 26) or higher',
  ARCHITECTURES: 'Universal (arm64-v8a, armeabi-v7a, x86, x86_64)',
  CURRENT_YEAR: 2026,
  LAST_UPDATED: 'September 2026',
} as const;

export type ConfigType = typeof CONFIG;
