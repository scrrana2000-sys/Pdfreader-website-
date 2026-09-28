/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SEOStructuredData } from './components/common/SEO';
import { Button } from './components/common/Button';

// Page components
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { DownloadPage } from './pages/DownloadPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/features':
        return <FeaturesPage />;
      case '/about':
        return <AboutPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/contact':
        return <ContactPage />;
      case '/download':
        return <DownloadPage />;
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-md">
              The requested page could not be located. You can return to our homepage or explore features.
            </p>
            <div className="pt-2 flex gap-3">
              <Button href="/" variant="primary">
                Return Home
              </Button>
              <Button href="/features" variant="outline">
                Explore Features
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      <SEOStructuredData />
      <Navbar />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
