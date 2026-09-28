import React from 'react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { FeatureCard } from '../components/common/FeatureCard';
import { HeroMockup } from '../components/home/HeroMockup';
import { GooglePlayButton } from '../components/common/GooglePlayButton';
import { HOME_PRIMARY_FEATURES, HOW_IT_WORKS_STEPS } from '../data/features';
import { CONFIG } from '../config/constants';
import {
  Shield,
  Smartphone,
  HardDrive,
  BarChart3,
  Bug,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle background ambient gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
                <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Android Document Utility</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="font-mono text-slate-500">{CONFIG.PACKAGE_NAME}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Read PDFs. Simply.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {CONFIG.SUBTITLE}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Button href="/download" size="lg" variant="primary">
                  Get PDF Reader
                </Button>
                <Button href="/features" size="lg" variant="secondary">
                  Explore Features
                </Button>
              </div>

              {/* Trust & Privacy Statement */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{CONFIG.TRUST_STATEMENT}</span>
              </div>
            </div>

            {/* Right Column: Abstract PDF Reader Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section
        id="features"
        kicker="Core Capabilities"
        title="Designed for everyday reading"
        description="Clean, reliable tools to open, view, annotate, and organize documents on your Android device."
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_PRIMARY_FEATURES.map(feature => (
            <FeatureCard key={feature.id} feature={feature} detailed />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/features" variant="outline" size="md">
            View All App Features & Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section
        kicker="Workflow"
        title="How it works"
        description="Get started with your local documents in three straightforward steps."
        centered
        className="bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Privacy Section */}
      <Section
        kicker="Transparency & Trust"
        title="Your documents, your device."
        description="Clear, honest details regarding data processing, local document storage, and third-party developer SDKs."
      >
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fact 1: Local PDF Storage */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Local Document Processing
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  PDF Reader is designed primarily for local PDF reading and document management. Document contents are not intentionally uploaded to our own servers for ordinary reading functionality.
                </p>
              </div>
            </div>

            {/* Fact 2: Firebase Analytics */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Usage Analytics
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The app may use Firebase Analytics for product usage measurement and interface improvement. Analytics SDKs process relevant device data according to Google policies.
                </p>
              </div>
            </div>

            {/* Fact 3: Crashlytics */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <Bug className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Crash Diagnostics
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The app may use Firebase Crashlytics to diagnose crashes, unhandled exceptions, and technical stability issues across different Android OEM devices.
                </p>
              </div>
            </div>

            {/* Fact 4: Google AdMob */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                  Ad-Supported Free Tier
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The app may use Google Mobile Ads / AdMob to serve advertisements. Advertising SDKs may process advertising identifiers and device data under Google's advertising policies.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We do not make misleading claims of absolute zero-data collection. Review our complete legal policy for full disclosure.
            </p>
            <Button href="/privacy-policy" variant="primary" size="md">
              Read Privacy Policy
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section Teaser */}
      <Section
        kicker="About the App"
        title="Built for focus and convenience"
        description="PDF Reader is a lightweight Android application focused on making everyday PDF reading simple and convenient."
        centered
      >
        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          <p>
            Whether reviewing work contracts, studying lecture notes, or consulting offline technical manuals, PDF Reader focuses on essential document utilities: smooth page navigation, pinch-to-zoom, in-document search, bookmarks, and night mode.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Button href="/about" variant="outline" size="md">
              Learn More About PDF Reader
            </Button>
            <Button href={CONFIG.GITHUB_REPO_URL} isExternal variant="ghost" size="md">
              View on GitHub
            </Button>
          </div>
        </div>
      </Section>

      {/* Download Section */}
      <Section
        id="download"
        className="bg-blue-600/5 dark:bg-blue-950/20 border-t border-slate-200/80 dark:border-slate-800/80"
        centered
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get PDF Reader for Android
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Install PDF Reader directly to your device and enjoy fast, private local document reading.
          </p>

          <div className="pt-2 flex flex-col items-center">
            <GooglePlayButton />

            <div
              id="play-store-note"
              className="mt-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 max-w-md text-left"
            >
              <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                Release Information:
              </p>
              <p>
                Store link is configured via <code className="font-mono text-blue-600">GOOGLE_PLAY_URL_PLACEHOLDER</code>. Downloadable builds and source commits can also be verified on our official GitHub repository.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
