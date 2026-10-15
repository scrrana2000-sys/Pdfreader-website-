import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { CONFIG } from '../config/constants';

export type AppRoute = '/' | '/features' | '/about' | '/privacy-policy' | '/terms' | '/contact' | '/download';

interface RouteMetadata {
  title: string;
  description: string;
  canonicalPath: string;
}

export const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'PDF Reader – Simple PDF Reading for Android',
    description: 'PDF Reader is a simple Android app for reading, searching, bookmarking, highlighting and managing PDF documents.',
    canonicalPath: '/',
  },
  '/features': {
    title: 'PDF Reader Features – Fast Document Viewer for Android',
    description: 'Explore all features of PDF Reader for Android: smooth navigation, pinch-to-zoom, search, bookmarks, highlights, night mode, and local file discovery.',
    canonicalPath: '/features',
  },
  '/about': {
    title: 'About PDF Reader – Lightweight Android Document App',
    description: 'Learn about PDF Reader, a lightweight Android application focused on making everyday PDF reading simple and convenient.',
    canonicalPath: '/about',
  },
  '/privacy-policy': {
    title: 'PDF Reader Privacy Policy',
    description: 'Official Privacy Policy for the PDF Reader Android application. Disclosures on local storage, Firebase Analytics, Crashlytics, and Google AdMob.',
    canonicalPath: '/privacy-policy',
  },
  '/terms': {
    title: 'PDF Reader Terms & Conditions',
    description: 'Terms and conditions for using the PDF Reader Android application.',
    canonicalPath: '/terms',
  },
  '/contact': {
    title: 'PDF Reader Support',
    description: 'Get support, report issues, and inquire about the PDF Reader Android app.',
    canonicalPath: '/contact',
  },
  '/download': {
    title: 'Download PDF Reader for Android',
    description: 'Get PDF Reader for Android from Google Play. Lightweight, fast, and privacy-focused local document reading.',
    canonicalPath: '/download',
  },
};

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { replace?: boolean }) => void;
  metadata: RouteMetadata;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(path: string): string {
  if (!path || path === '') return '/';
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '');

  const knownRoutes: string[] = [
    '/features',
    '/about',
    '/privacy-policy',
    '/terms',
    '/contact',
    '/download',
  ];

  for (const route of knownRoutes) {
    if (clean.endsWith(route)) {
      return route;
    }
  }

  return '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const updateMetaTags = useCallback((path: string) => {
    const meta = ROUTE_METADATA[path] || ROUTE_METADATA['/'];

    // Update document title
    document.title = meta.title;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', meta.description);

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    const origin = typeof window !== 'undefined' ? window.location.origin : CONFIG.SITE_URL;
    ogUrl.setAttribute('content', `${origin}${meta.canonicalPath}`);

    // Update Twitter Title & Desc
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twTitle) {
      twTitle = document.createElement('meta');
      twTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twTitle);
    }
    twTitle.setAttribute('content', meta.title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twDesc) {
      twDesc = document.createElement('meta');
      twDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twDesc);
    }
    twDesc.setAttribute('content', meta.description);

    // Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${origin}${meta.canonicalPath}`);
  }, []);

  const navigate = useCallback(
    (targetPath: string, options?: { replace?: boolean }) => {
      const route = normalizePath(targetPath);
      const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL)
        ? import.meta.env.BASE_URL.replace(/\/+$/, '')
        : '';
      const fullPath = targetPath.startsWith('/') ? `${baseUrl}${targetPath}` : targetPath;

      if (options?.replace) {
        window.history.replaceState({}, '', fullPath);
      } else {
        window.history.pushState({}, '', fullPath);
      }
      setCurrentPath(route);
      updateMetaTags(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [updateMetaTags],
  );

  useEffect(() => {
    const handlePopState = () => {
      const route = normalizePath(window.location.pathname);
      setCurrentPath(route);
      updateMetaTags(route);
    };

    window.addEventListener('popstate', handlePopState);
    updateMetaTags(currentPath);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath, updateMetaTags]);

  const metadata = ROUTE_METADATA[currentPath] || ROUTE_METADATA['/'];

  return (
    <RouterContext.Provider value={{ currentPath, navigate, metadata }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; className?: string }
> = ({ href, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // If external link or modified click (Ctrl/Cmd/middle click), allow default behavior
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
