import React from 'react';
import { Section } from '../components/common/Section';
import { CONFIG } from '../config/constants';
import { Shield, Mail, ExternalLink, Calendar, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <article className="space-y-4">
      {/* Policy Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Shield className="w-4 h-4" />
              <span>Legal Disclosures</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: {CONFIG.LAST_UPDATED}</span>
              </span>
              <span>·</span>
              <span>Package: <code className="font-mono text-slate-700 dark:text-slate-300">{CONFIG.PACKAGE_NAME}</code></span>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* 1. Introduction */}
          <section id="section-1" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how <strong>PDF Reader</strong> ("we", "us", or "our") handles information when you use our mobile application on Android. We respect your privacy and are committed to transparency regarding how data is processed, what stays on your device, and how third-party services operate within the application.
            </p>
            <p>
              By installing and using PDF Reader, you acknowledge the practices described in this policy. If you do not agree with this policy, please do not use the application.
            </p>
          </section>

          {/* 2. App and Developer Identification */}
          <section id="section-2" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              2. App and Developer Identification
            </h2>
            <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1 text-xs sm:text-sm">
              <p><strong>Application Name:</strong> {CONFIG.APP_NAME}</p>
              <p><strong>Package Name:</strong> {CONFIG.PACKAGE_NAME}</p>
              <p><strong>Developer / Publisher:</strong> {CONFIG.DEVELOPER_NAME}</p>
              <p><strong>Source Repository:</strong> {CONFIG.GITHUB_REPO_URL}</p>
            </div>
          </section>

          {/* 3. Information Stored Locally on the Device */}
          <section id="section-3" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              3. Information Stored Locally on the Device
            </h2>
            <p>
              PDF Reader is built on a local-first architecture. The core reading, bookmarking, and document indexing features are designed to operate directly on your Android device without requiring an online account or profile registration.
            </p>
          </section>

          {/* 4. PDF Documents */}
          <section id="section-4" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              4. PDF Documents
            </h2>
            <p>
              Your PDF documents remain on your device. The content, text, images, and attachments within your PDF files are parsed and rendered locally on your device for viewing. PDF document contents are not intentionally uploaded or transmitted to our own servers for ordinary reading functionality.
            </p>
          </section>

          {/* 5. Bookmarks */}
          <section id="section-5" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              5. Bookmarks
            </h2>
            <p>
              When you bookmark a page inside a document, the page reference and document path are stored locally within the application's private app data storage on your device. We do not sync bookmarks to remote servers operated by us.
            </p>
          </section>

          {/* 6. Highlights */}
          <section id="section-6" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              6. Highlights
            </h2>
            <p>
              Highlights you apply to document content are processed and recorded within the local application database or document cache on your device, enabling you to review highlighted passages when reopening the document.
            </p>
          </section>

          {/* 7. Notes */}
          <section id="section-7" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              7. Notes
            </h2>
            <p>
              Personal notes and text annotations entered into the application are stored locally on your device. They remain under your direct control and are not sent to our servers.
            </p>
          </section>

          {/* 8. Preferences */}
          <section id="section-8" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              8. Preferences
            </h2>
            <p>
              User configuration settings—such as night mode preference, default zoom level, page view mode, and recent document history—are stored locally using Android's standard preferences mechanism (such as SharedPreferences or DataStore).
            </p>
          </section>

          {/* 9. Firebase Analytics */}
          <section id="section-9" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              9. Firebase Analytics
            </h2>
            <p>
              The app may use <strong>Firebase Analytics</strong> (provided by Google LLC) to measure anonymous aggregated app usage patterns, screen views, and user interaction trends. This information helps us understand which features are helpful and where navigation can be improved. Firebase Analytics may collect pseudo-anonymous identifiers and standard telemetry data governed by Google's Privacy Policy.
            </p>
          </section>

          {/* 10. Firebase Crashlytics */}
          <section id="section-10" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              10. Firebase Crashlytics
            </h2>
            <p>
              The app may use <strong>Firebase Crashlytics</strong> (provided by Google LLC) to diagnose unexpected errors, unhandled exceptions, and application crashes. In the event of a crash, Crashlytics records diagnostic technical reports (such as stack traces, device model, operating system version, and general state at the time of failure) to facilitate bug fixes and performance improvements.
            </p>
          </section>

          {/* 11. Google AdMob / Advertising */}
          <section id="section-11" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              11. Google AdMob / Advertising
            </h2>
            <p>
              PDF Reader offers an ad-supported free experience. The app may integrate <strong>Google Mobile Ads (AdMob)</strong> to serve advertisements. Google AdMob and its advertising partners may use advertising identifiers (such as Android Advertising ID), cookies, and device telemetry to display, measure, and personalize ads in accordance with your device settings and Google's advertising policies.
            </p>
            <p>
              You can review or reset your advertising ID and opt out of personalized ads via your Android device system settings (under <em>Google &gt; Ads</em>).
            </p>
          </section>

          {/* 12. Permissions */}
          <section id="section-12" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              12. Android Permissions
            </h2>
            <p>
              To perform its primary document functions, the app may request specific Android system permissions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Storage / Media Permissions:</strong> Required to locate, discover, read, and display PDF documents stored on internal storage or external SD cards, as well as to save exported files.
              </li>
              <li>
                <strong>Internet Access:</strong> Utilized exclusively by third-party developer SDKs (Firebase Analytics, Crashlytics, and AdMob) for telemetry, crash diagnostics, and ad retrieval.
              </li>
            </ul>
          </section>

          {/* 13. Data Sharing */}
          <section id="section-13" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              13. Data Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal document contents to third parties. We share diagnostic, analytics, and advertising telemetry only with established third-party service providers (Google LLC for Firebase and AdMob) as necessary to maintain, improve, and support the application.
            </p>
          </section>

          {/* 14. Data Retention */}
          <section id="section-14" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              14. Data Retention
            </h2>
            <p>
              Local data (bookmarks, recent lists, notes, and preferences) is retained on your device for as long as the application remains installed, or until you clear the application's storage data via Android device settings. Third-party telemetry collected by Firebase and AdMob is retained in accordance with Google's respective data retention policies.
            </p>
          </section>

          {/* 15. Data Deletion */}
          <section id="section-15" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              15. Data Deletion
            </h2>
            <p>
              You maintain full authority over data stored on your device. You can immediately remove all locally stored preferences, bookmarks, and document metadata at any time by clearing the application storage via <em>Settings &gt; Apps &gt; PDF Reader &gt; Storage &gt; Clear Storage / Clear Data</em>, or by uninstalling the application.
            </p>
          </section>

          {/* 16. Security */}
          <section id="section-16" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              16. Security
            </h2>
            <p>
              We take reasonable administrative and technical precautions to safeguard the integrity of the application. However, please be aware that no mobile operating system or electronic transmission over the internet is completely infallible. We encourage users to maintain up-to-date Android security patches on their devices.
            </p>
          </section>

          {/* 17. Children's Privacy */}
          <section id="section-17" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              17. Children's Privacy
            </h2>
            <p>
              PDF Reader is a general document utility and is not knowingly directed at children under the age of 13 (or under 16 in certain jurisdictions). We do not knowingly solicit or collect personally identifiable information from children.
            </p>
          </section>

          {/* 18. Third-Party Services */}
          <section id="section-18" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              18. Third-Party Services
            </h2>
            <p>
              The application incorporates third-party services that have their own independent privacy policies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Firebase Privacy &amp; Security</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Google AdMob Privacy Disclosures</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </section>

          {/* 19. Changes to this Privacy Policy */}
          <section id="section-19" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              19. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect modifications in our application features, legal compliance requirements, or third-party SDK updates. Changes take effect immediately upon posting to this official website. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 20. Contact / Privacy Inquiries */}
          <section id="section-20" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              20. Contact / Privacy Inquiries
            </h2>
            <p>
              If you have any questions, clarifications, or feedback regarding this Privacy Policy or our document handling practices, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>
                  Privacy Inquiries:{' '}
                  <code className="font-mono text-blue-600 dark:text-blue-400 font-medium">
                    {CONFIG.PRIVACY_CONTACT_EMAIL}
                  </code>
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Privacy and legal inquiries can be sent to <a href="mailto:radhachawan01@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">radhachawan01@gmail.com</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
