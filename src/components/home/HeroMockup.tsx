import React, { useState } from 'react';
import {
  Search,
  Bookmark,
  Moon,
  Sun,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Highlighter,
  FileText,
  Share2,
} from 'lucide-react';

export const HeroMockup: React.FC = () => {
  const [docNightMode, setDocNightMode] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(14);
  const totalPages = 82;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 15, 145));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 15, 85));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Subtle outer glow */}
      <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/15 to-indigo-500/15 blur-xl -z-10 dark:from-blue-500/10 dark:to-indigo-500/10" />

      {/* Android Device Mockup Frame */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-slate-900 border-4 border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100">
        {/* Device speaker & camera hole punch */}
        <div className="flex justify-between items-center px-6 py-1 text-[11px] font-medium text-slate-400 select-none">
          <span>09:41</span>
          <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-700/80 mx-auto" />
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-slate-300 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* App Shell */}
        <div className={`mt-2 rounded-2xl overflow-hidden border transition-colors duration-200 ${
          docNightMode
            ? 'bg-slate-950 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}>
          {/* Top Android App Bar */}
          <div className={`px-3 py-2.5 flex items-center justify-between border-b text-xs transition-colors ${
            docNightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 min-w-0">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="truncate">
                <p className="font-semibold text-xs truncate">Research_Report_2026.pdf</p>
                <p className="text-[10px] text-slate-500">2.4 MB · Local Document</p>
              </div>
            </div>

            {/* Quick Actions in App Bar */}
            <div className="flex items-center gap-1 shrink-0 text-slate-600 dark:text-slate-300">
              <button
                onClick={() => setDocNightMode(!docNightMode)}
                title="Toggle Reading Mode"
                aria-label="Toggle Reading Mode"
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {docNightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                title="Bookmark Page"
                aria-label="Bookmark Page"
                className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    isBookmarked ? 'fill-blue-600 text-blue-600' : 'text-slate-400'
                  }`}
                />
              </button>
              <div className="p-1.5 text-slate-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Document Content Viewport */}
          <div className="relative p-5 sm:p-6 overflow-hidden min-h-[300px] flex flex-col justify-between select-none">
            {/* Visual Document Layout */}
            <div
              className="space-y-3 transition-transform duration-150 origin-top"
              style={{ transform: `scale(${zoomLevel / 100})` }}
            >
              {/* Document Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                <div className="h-4 w-40 bg-blue-600/80 rounded" />
                <div className="h-2.5 w-24 bg-slate-300 dark:bg-slate-700 rounded mt-1.5" />
              </div>

              {/* Sample Paragraph with Highlight */}
              <div className="space-y-1.5 text-xs">
                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-2.5 w-11/12 bg-slate-200 dark:bg-slate-800 rounded" />
                
                {/* Visual Highlight Feature */}
                <div className="p-1.5 rounded bg-yellow-200/70 dark:bg-yellow-900/40 border border-yellow-300 dark:border-yellow-700/50">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-900 dark:text-amber-200">
                    <Highlighter className="w-3 h-3 shrink-0" />
                    <span>Highlighted: Offline document indexing verified</span>
                  </div>
                </div>

                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-2.5 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>

              {/* Sample Document Chart/Table Layout */}
              <div className={`p-3 rounded-xl border ${
                docNightMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    Figure 2: Performance Summary
                  </span>
                  <span className="text-[10px] text-blue-600 font-mono">100% Local</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-slate-800 dark:text-slate-100">0.0 ms</p>
                    <p className="text-[9px] text-slate-500">Cloud Delay</p>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-blue-600">Native</p>
                    <p className="text-[9px] text-slate-500">Android API</p>
                  </div>
                  <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-emerald-600">On-Device</p>
                    <p className="text-[9px] text-slate-500">Storage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Zoom & Controls Overlay */}
            <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-200/70 dark:border-slate-800 text-xs">
              {/* Page Navigator */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevPage}
                  aria-label="Previous Page"
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono font-medium px-1.5 text-slate-600 dark:text-slate-300">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  aria-label="Next Page"
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Pinch / Zoom level indicator */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleZoomOut}
                  aria-label="Zoom Out"
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono px-1 text-slate-500">{zoomLevel}%</span>
                <button
                  onClick={handleZoomIn}
                  aria-label="Zoom In"
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom App Navigation / Scrub Bar */}
          <div className={`px-4 py-2 flex items-center justify-between border-t text-[11px] ${
            docNightMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100/70 border-slate-200 text-slate-600'
          }`}>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Device Storage
            </span>
            <div className="flex items-center gap-3">
              <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-blue-500" />
              <MoreVertical className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Android Navigation Bar Pill */}
        <div className="py-2 flex justify-center">
          <div className="w-24 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};
