import React from 'react';
import { Section } from '../components/common/Section';
import { GooglePlayButton } from '../components/common/GooglePlayButton';
import { Button } from '../components/common/Button';
import { CONFIG } from '../config/constants';
import {
  Smartphone,
  Shield,
  Download,
  CheckCircle2,
  Github,
  HardDrive,
  Cpu,
  Info,
} from 'lucide-react';

export const DownloadPage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Page Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Smartphone className="w-4 h-4" />
            <span>Android Release Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Download PDF Reader
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Lightweight, fast, and privacy-focused local document reading for Android devices.
          </p>
        </div>
      </section>

      {/* Main Download Section */}
      <Section centered>
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Google Play Listing
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Use the Google Play button below to open the listing for the PDF Reader Android app.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-2 flex flex-col items-center">
            <GooglePlayButton size="lg" />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
              Package: {CONFIG.PACKAGE_NAME}
            </p>
          </div>

          {/* Technical Requirements Breakdown */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3 text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              System Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 block">Required Android Version</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {CONFIG.MIN_ANDROID_VERSION}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 block">Hardware Architectures</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {CONFIG.ARCHITECTURES}
                </span>
              </div>
            </div>
          </div>

          {/* Open Source / GitHub info */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 bg-blue-50/50 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/40">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
              <span>Developer &amp; source code repository available on GitHub</span>
            </div>
            <a
              href={CONFIG.GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline shrink-0"
            >
              View Repository →
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};
