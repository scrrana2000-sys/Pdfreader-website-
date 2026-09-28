import React, { useState } from 'react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { CONFIG } from '../config/constants';
import {
  Mail,
  Github,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  MessageSquare,
  Shield,
  Smartphone,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How do I grant document access on Android 11, 12, 13, and 14+?',
    answer:
      'On newer Android versions, Google enforces Scoped Storage. When you first launch PDF Reader or tap "Browse Documents", Android will prompt you to select your documents or grant access to the relevant folder. Your documents remain local on your device.',
  },
  {
    question: 'Are my PDF documents uploaded to the cloud?',
    answer:
      'No. PDF Reader operates as a local document viewer. PDF contents are parsed and rendered directly on your Android device. Files are not uploaded to remote servers operated by us for normal reading.',
  },
  {
    question: 'How can I enable Night Mode / Dark Reading Mode?',
    answer:
      'When viewing any PDF document, tap the reading mode / moon icon in the top toolbar to switch between standard day mode and comfortable low-light night mode.',
  },
  {
    question: 'How do I report a bug or crash?',
    answer:
      'You can submit technical bug reports directly on our official GitHub Issues tracker, or contact us via our support email. If the app encounters an unhandled crash, diagnostic data is captured by Firebase Crashlytics to help us release a fix.',
  },
  {
    question: 'How do I remove ads from the app?',
    answer:
      'Where applicable, an ad-free premium upgrade option is offered within the application settings, processed securely through Google Play.',
  },
];

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Support &amp; Inquiries
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Need help with PDF Reader?
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              We're here to assist with questions regarding application features, troubleshooting on your Android device, or privacy policies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Support Email */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Email Support
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                For general support, feedback, and user assistance.
              </p>
              <div className="pt-1">
                <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400 block truncate">
                  {CONFIG.SUPPORT_EMAIL}
                </code>
              </div>
            </div>
            <div className="pt-4 text-xs text-slate-400">
              Configured via <span className="font-mono">SUPPORT_EMAIL_PLACEHOLDER</span>
            </div>
          </div>

          {/* Card 2: GitHub Issues */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                GitHub Issue Tracker
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Report crashes, reproducibility logs, and technical bugs directly to the repository.
              </p>
              <div className="pt-1">
                <a
                  href={CONFIG.GITHUB_ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Issues on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="pt-4 text-xs text-slate-400">
              Repository: <span className="font-mono">scrrana2000-sys/pdfreader</span>
            </div>
          </div>

          {/* Card 3: Google Play Support */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Google Play Store Support
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Check store listing reviews, official release notes, and developer contact on Google Play.
              </p>
              <div className="pt-1">
                <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-300 block truncate">
                  {CONFIG.GOOGLE_PLAY_URL}
                </code>
              </div>
            </div>
            <div className="pt-4 text-xs text-slate-400">
              Configured via <span className="font-mono">GOOGLE_PLAY_URL_PLACEHOLDER</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Quick answers to common questions about permissions, files, and updates.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base text-slate-900 dark:text-white focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};
