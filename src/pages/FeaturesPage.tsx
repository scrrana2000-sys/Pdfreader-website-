import React, { useState } from 'react';
import { Section } from '../components/common/Section';
import { FeatureCard } from '../components/common/FeatureCard';
import { Button } from '../components/common/Button';
import { ALL_APP_FEATURES } from '../data/features';
import { CONFIG } from '../config/constants';
import { Shield, Sparkles, Filter } from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFeatures =
    activeCategory === 'all'
      ? ALL_APP_FEATURES
      : ALL_APP_FEATURES.filter(f => f.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'core', label: 'Core Viewing' },
    { id: 'tools', label: 'Tools & Annotation' },
    { id: 'organization', label: 'Document Organization' },
    { id: 'display', label: 'Display & Experience' },
  ];

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Capabilities Overview
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              PDF Reader Features
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every tool and utility included in the PDF Reader Android application, designed specifically for convenient on-device document workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-fit border border-slate-200/80 dark:border-slate-800">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Features */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map(feature => (
            <FeatureCard key={feature.id} feature={feature} detailed />
          ))}
        </div>

        {/* Feature Explanations & Device Security Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-300">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>On-Device Execution Guarantee</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Document parsing, keyword search, bookmarks, and page rendering take place locally on your phone or tablet. Your private files are not transmitted to custom remote storage servers.
              </p>
            </div>
            <Button href="/download" variant="primary" size="md" className="shrink-0">
              Download PDF Reader
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
