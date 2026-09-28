import React, { useEffect } from 'react';
import { CONFIG } from '../../config/constants';
import { useRouter } from '../../context/RouterContext';

export const SEOStructuredData: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    const scriptId = 'structured-data-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const currentOrigin =
      typeof window !== 'undefined'
        ? window.location.origin
        : CONFIG.SITE_URL;

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': `${currentOrigin}/#app`,
          name: CONFIG.APP_NAME,
          operatingSystem: 'Android',
          applicationCategory: 'ProductivityApplication',
          description:
            'A fast, simple PDF reader designed to help you read, organize and manage your documents on Android.',
          featureList: [
            'Browse and open PDF files stored on the device',
            'PDF reader',
            'Smooth PDF page navigation',
            'Pinch-to-zoom',
            'Search inside PDF',
            'Bookmarks',
            'Highlights',
            'Notes',
            'Share PDF',
            'Recent documents',
            'Favorite documents',
            'Night mode / reading mode',
            'Local PDF scanning and document discovery',
            'PDF import',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${currentOrigin}/#website`,
          url: currentOrigin,
          name: CONFIG.APP_NAME,
          description:
            'Official website for the PDF Reader Android application. Fast, simple, and privacy-focused local PDF reading.',
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData, null, 2);
  }, [currentPath]);

  return null;
};
