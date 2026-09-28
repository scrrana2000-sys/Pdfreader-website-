import React from 'react';
import {
  BookOpen,
  Compass,
  ZoomIn,
  Search,
  Bookmark,
  Highlighter,
  Star,
  Share2,
  Moon,
  FolderSearch,
  FolderOpen,
  FileUp,
  Sparkles,
  ShieldCheck,
  Download,
  Shield,
  CheckCircle2,
  FileText,
  LucideProps,
} from 'lucide-react';
import { FeatureItem } from '../../data/features';

const iconMap: Record<string, React.FC<LucideProps>> = {
  BookOpen,
  Compass,
  ZoomIn,
  Search,
  Bookmark,
  Highlighter,
  Star,
  Share2,
  Moon,
  FolderSearch,
  FolderOpen,
  FileUp,
  Sparkles,
  ShieldCheck,
  Download,
  Shield,
  BookCheck: CheckCircle2,
  FileText,
};

export const DynamicIcon: React.FC<{ name: string; className?: string; size?: number }> = ({
  name,
  className = 'w-5 h-5',
  size = 20,
}) => {
  const IconComponent = iconMap[name] || FileText;
  return <IconComponent className={className} size={size} aria-hidden="true" />;
};

interface FeatureCardProps {
  feature: FeatureItem;
  detailed?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, detailed = false }) => {
  return (
    <div className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-md">
      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500">
        <DynamicIcon name={feature.iconName} size={22} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">
        {feature.title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        {feature.shortDescription}
      </p>

      {detailed && feature.fullDescription && (
        <p className="text-xs text-slate-500 dark:text-slate-500 leading-normal border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-auto">
          {feature.fullDescription}
        </p>
      )}
    </div>
  );
};
