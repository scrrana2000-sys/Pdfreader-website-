import React from 'react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { CONFIG } from '../config/constants';
import {
  FileText,
  Github,
  Shield,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Page Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              About the Application
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About PDF Reader
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              PDF Reader is a lightweight Android application focused on making everyday PDF reading simple and convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Purpose & Philosophy
              </h2>
              <p>
                PDF Reader is developed to provide a straightforward, dependable reading experience for Android users. Many modern document viewers suffer from bloated interfaces, mandatory cloud accounts, and complex workflows that complicate simple tasks.
              </p>
              <p>
                Our philosophy is centered on utility and privacy: you open a PDF stored on your device or received in your downloads, read it with comfortable zoom and navigation, search for relevant text, bookmark important sections, and close it without hassle.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What the App Does
              </h2>
              <p>
                PDF Reader focuses strictly on core reading and local organization capabilities:
              </p>
              <ul className="space-y-2.5 pl-1">
                {[
                  'Browse and open PDF files stored on device storage or SD cards',
                  'Smooth, high-performance page navigation and thumbnail scrubbing',
                  'Fluid multi-touch pinch-to-zoom for fine print and diagrams',
                  'In-document text search to pinpoint key terms quickly',
                  'Bookmarks for recurring reference points and chapters',
                  'Passage highlights and personal study notes',
                  'Fast access to recent and favorite documents',
                  'Standard Android system share integration for exporting files',
                  'Comfortable night mode for reduced eye strain in low-light environments',
                  'Automated local PDF discovery across storage directories',
                  'Transparent ad-supported free experience with optional ad-free upgrade where applicable',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Privacy-First Architecture
              </h2>
              <p>
                Because documents often contain sensitive personal records, contracts, study papers, or internal manuals, PDF Reader operates on a local-first principle. Your PDF document contents are processed on your device and are not uploaded to our own servers for ordinary reading functionality.
              </p>
              <p>
                To support maintenance and sustainability, standard industry SDKs are utilized: Firebase Analytics for usage measurement, Firebase Crashlytics for diagnosing bugs, and Google Mobile Ads (AdMob) for display advertising. Detailed disclosures are available on our dedicated Privacy Policy page.
              </p>
            </div>
          </div>

          {/* Quick Technical Fact Sheet */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Technical Summary</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-slate-500 block">Application Name</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {CONFIG.APP_NAME}
                </span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5">
                <span className="text-slate-500 block">Package Identifier</span>
                <code className="font-mono text-blue-600 dark:text-blue-400 font-medium">
                  {CONFIG.PACKAGE_NAME}
                </code>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5">
                <span className="text-slate-500 block">Platform</span>
                <span className="text-slate-800 dark:text-slate-200">Android</span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5">
                <span className="text-slate-500 block">Target Architecture</span>
                <span className="text-slate-800 dark:text-slate-200">{CONFIG.ARCHITECTURES}</span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5">
                <span className="text-slate-500 block">Source Code Repository</span>
                <a
                  href={CONFIG.GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline mt-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/download" variant="primary" size="sm" className="w-full">
                Get PDF Reader
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
