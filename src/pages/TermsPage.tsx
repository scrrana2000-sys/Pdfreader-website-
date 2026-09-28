import React from 'react';
import { Section } from '../components/common/Section';
import { CONFIG } from '../config/constants';
import { FileCheck, Mail, Calendar } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <article className="space-y-4">
      {/* Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <FileCheck className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: {CONFIG.LAST_UPDATED}</span>
              </span>
              <span>·</span>
              <span>Developer: <code className="font-mono text-slate-700 dark:text-slate-300">{CONFIG.DEVELOPER_NAME}</code></span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* 1. Acceptance */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using the <strong>PDF Reader</strong> mobile application (the "App") provided by <strong>{CONFIG.DEVELOPER_NAME}</strong> ("Developer", "we", "us", or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must immediately uninstall and discontinue all use of the App.
            </p>
          </section>

          {/* 2. App Usage & License */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              2. App Usage &amp; License
            </h2>
            <p>
              Subject to your compliance with these Terms, you are granted a non-exclusive, non-transferable, revocable, limited license to download, install, and use PDF Reader on Android devices that you own or control, solely for your personal, non-commercial, or internal business document viewing purposes.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code of the binary release, except to the extent permitted by applicable open-source licenses;</li>
              <li>Bypass or attempt to defeat any security features, technical restrictions, or advertising mechanisms in the App;</li>
              <li>Use the App to view, distribute, or process material that violates any applicable law, intellectual property right, or regulation.</li>
            </ul>
          </section>

          {/* 3. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              3. Intellectual Property
            </h2>
            <p>
              The App, including its visual design, branding, logo, code architecture, and documentation, is protected by copyright, trademark, and other applicable laws. You retain complete ownership of and responsibility for any PDF documents, annotations, notes, and content that you open or create using the App.
            </p>
          </section>

          {/* 4. Third-Party Services */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              4. Third-Party Services
            </h2>
            <p>
              The App integrates third-party services and software development kits (SDKs), including Google Firebase (Analytics and Crashlytics) and Google AdMob. Your interaction with these third-party services is subject to their respective terms of service and privacy disclosures. We do not endorse and are not liable for the content, privacy practices, or availability of third-party networks.
            </p>
          </section>

          {/* 5. Advertising & In-App Upgrades */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              5. Advertising &amp; Ad-Free Upgrades
            </h2>
            <p>
              The free version of PDF Reader is supported by advertisements served through Google Mobile Ads (AdMob). Where available, an ad-free premium experience may be offered. In-app upgrades or transactions, if provided, are processed through the Google Play billing system in accordance with Google Play's Terms of Service.
            </p>
          </section>

          {/* 6. Availability & Updates */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              6. Availability &amp; Updates
            </h2>
            <p>
              We strive to ensure regular stability and compatibility with evolving versions of the Android operating system. However, we do not warrant that the App will always be available, uninterrupted, or compatible with every specific Android device or custom OEM firmware. Updates, bug fixes, and feature enhancements may be released periodically via Google Play or our source repository.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p>
              THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE APPLICATION.
            </p>
          </section>

          {/* 8. Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              8. Changes to These Terms
            </h2>
            <p>
              We reserve the right to amend or replace these Terms at any time. When revised terms are published, the "Last Updated" date will reflect the revision. Continued use of the App following any changes indicates your agreement to the new Terms.
            </p>
          </section>

          {/* 9. Contact */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              9. Contact Information
            </h2>
            <p>
              For legal inquiries, copyright notices, or questions concerning these Terms &amp; Conditions, please reach out via:
            </p>
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1 text-xs sm:text-sm">
              <p><strong>Developer:</strong> {CONFIG.DEVELOPER_NAME}</p>
              <p><strong>Email:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">{CONFIG.SUPPORT_EMAIL}</code></p>
              <p><strong>Repository:</strong> {CONFIG.GITHUB_REPO_URL}</p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
