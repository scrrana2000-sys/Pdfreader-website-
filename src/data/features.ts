export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'core' | 'tools' | 'organization' | 'display';
  badge?: string;
}

export const HOME_PRIMARY_FEATURES: FeatureItem[] = [
  {
    id: 'pdf-reader',
    title: 'PDF Reader',
    shortDescription: 'Open and read PDF documents comfortably on your Android device.',
    fullDescription: 'Clean, distraction-free document viewer engineered for readability across various screen sizes and resolutions.',
    iconName: 'BookOpen',
    category: 'core',
  },
  {
    id: 'fast-navigation',
    title: 'Fast Navigation',
    shortDescription: 'Move through pages quickly and easily.',
    fullDescription: 'Smooth page transitions, instant thumbnail scrubbing, and direct jump-to-page navigation for large documents.',
    iconName: 'Compass',
    category: 'core',
  },
  {
    id: 'pinch-to-zoom',
    title: 'Pinch to Zoom',
    shortDescription: 'Zoom into document content for comfortable reading.',
    fullDescription: 'Fluid multi-touch zooming allows you to magnify fine print, architectural diagrams, charts, and detailed text effortlessly.',
    iconName: 'ZoomIn',
    category: 'display',
  },
  {
    id: 'pdf-search',
    title: 'PDF Search',
    shortDescription: 'Find text inside supported PDF documents.',
    fullDescription: 'Locate key terms, headings, and phrases instantly inside searchable text PDFs with highlighted occurrences.',
    iconName: 'Search',
    category: 'tools',
  },
  {
    id: 'bookmarks',
    title: 'Bookmarks',
    shortDescription: 'Save important pages for quick access.',
    fullDescription: 'Pin crucial reference pages, book chapters, or report sections and return to them anytime with a single tap.',
    iconName: 'Bookmark',
    category: 'organization',
  },
  {
    id: 'highlights-notes',
    title: 'Highlights & Notes',
    shortDescription: 'Mark important content and add personal notes.',
    fullDescription: 'Annotate key passages and attach personal study or work notes right where you need them.',
    iconName: 'Highlighter',
    category: 'tools',
  },
  {
    id: 'recent-favorites',
    title: 'Recent & Favorites',
    shortDescription: 'Quickly access documents you recently opened or marked as favorites.',
    fullDescription: 'Maintain a clean history of active reading materials and star frequently visited files for immediate retrieval.',
    iconName: 'Star',
    category: 'organization',
  },
  {
    id: 'share-pdfs',
    title: 'Share PDFs',
    shortDescription: "Share PDF documents using Android's standard sharing options.",
    fullDescription: "Seamlessly dispatch files via email, messaging apps, nearby share, or Bluetooth using Android's native system share sheet.",
    iconName: 'Share2',
    category: 'tools',
  },
  {
    id: 'night-mode',
    title: 'Night Mode',
    shortDescription: 'Use a darker reading experience in suitable environments.',
    fullDescription: 'Comfortable dark theme and inverted reading contrast designed to reduce eye strain in low-light environments.',
    iconName: 'Moon',
    category: 'display',
  },
  {
    id: 'local-document-discovery',
    title: 'Local Document Discovery',
    shortDescription: 'Find PDF documents available on your device.',
    fullDescription: 'Automatically scans local storage and download folders to assemble your PDF files into an organized list.',
    iconName: 'FolderSearch',
    category: 'organization',
  },
];

export const ALL_APP_FEATURES: FeatureItem[] = [
  ...HOME_PRIMARY_FEATURES,
  {
    id: 'browse-open',
    title: 'Browse & Open Stored PDFs',
    shortDescription: 'Browse files directly from internal storage or external SD cards.',
    fullDescription: 'Supports Android system file pickers and direct file system navigation to open documents from any accessible storage directory.',
    iconName: 'FolderOpen',
    category: 'core',
  },
  {
    id: 'pdf-import',
    title: 'PDF Import',
    shortDescription: 'Open PDFs from downloads, chat apps, and browser attachments.',
    fullDescription: 'Registers as an intent handler for MIME type application/pdf, allowing you to launch documents directly from third-party apps.',
    iconName: 'FileUp',
    category: 'core',
  },
  {
    id: 'ad-supported',
    title: 'Ad-Supported Free Tier',
    shortDescription: 'Full access to essential PDF viewing features at no cost.',
    fullDescription: 'Supported by non-intrusive mobile advertising powered by Google Mobile Ads (AdMob) so everyone can read documents freely.',
    iconName: 'Sparkles',
    category: 'display',
  },
  {
    id: 'ad-free-tier',
    title: 'Premium Ad-Free Experience',
    shortDescription: 'Optional ad-free reading environment where available.',
    fullDescription: 'An upgraded reading workflow with zero commercial interruptions for focused work, study, and research.',
    iconName: 'ShieldCheck',
    category: 'display',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Install PDF Reader',
    description: 'Download the lightweight app onto your Android device from Google Play.',
    iconName: 'Download',
  },
  {
    step: '02',
    title: 'Allow Document Access',
    description: 'Grant the required storage or document selection permission to discover and open PDFs on your device.',
    iconName: 'Shield',
  },
  {
    step: '03',
    title: 'Open, Read & Organize',
    description: 'Read smoothly, search text, highlight passages, bookmark pages, and manage your recent files locally.',
    iconName: 'BookCheck',
  },
];
