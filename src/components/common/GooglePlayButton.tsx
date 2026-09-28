import React from 'react';
import { CONFIG } from '../../config/constants';

interface GooglePlayButtonProps {
  className?: string;
  size?: 'md' | 'lg';
}

export const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({
  className = '',
  size = 'lg',
}) => {
  const isPlaceholder = CONFIG.GOOGLE_PLAY_URL === 'GOOGLE_PLAY_URL_PLACEHOLDER';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      e.preventDefault();
      // Informative user feedback without invasive window.alert
      const el = document.getElementById('play-store-note');
      if (el) {
        el.classList.remove('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        alert(
          'Google Play release link is currently configured as a placeholder (GOOGLE_PLAY_URL_PLACEHOLDER). You can update this in src/config/constants.ts once published.'
        );
      }
    }
  };

  return (
    <div className="inline-flex flex-col items-center">
      <a
        href={isPlaceholder ? '#download-notice' : CONFIG.GOOGLE_PLAY_URL}
        target={isPlaceholder ? undefined : '_blank'}
        rel={isPlaceholder ? undefined : 'noopener noreferrer'}
        onClick={isPlaceholder ? handleClick : undefined}
        className={`inline-flex items-center gap-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl border border-slate-700/80 shadow-md hover:shadow-lg transition-all active:scale-[0.98] select-none ${
          size === 'lg' ? 'px-6 py-3.5' : 'px-4 py-2.5'
        } ${className}`}
        aria-label="Get PDF Reader on Google Play"
      >
        {/* Google Play Vector Icon */}
        <svg className={size === 'lg' ? 'w-7 h-7' : 'w-5 h-5'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.609 1.813c-.312.336-.49.83-.49 1.455v17.464c0 .625.178 1.119.49 1.455l.078.07 9.808-9.808v-.23L3.687 2.422l-.078.071z"
            fill="#00E5FF"
          />
          <path
            d="M17.067 15.792l-3.572-3.573v-.231l3.573-3.572.083.048 4.227 2.402c1.206.685 1.206 1.808 0 2.493l-4.227 2.402-.084.03z"
            fill="#FFD700"
          />
          <path
            d="M13.495 12.219l-9.886 9.886c.414.44 1.1.492 1.884.047l11.574-6.574-3.572-3.359z"
            fill="#FF334B"
          />
          <path
            d="M13.495 11.781l3.572-3.36-11.574-6.573C4.709 1.393 4.023 1.454 3.609 1.895l9.886 9.886z"
            fill="#00E676"
          />
        </svg>

        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase font-medium tracking-wider text-slate-400">
            GET IT ON
          </span>
          <span className={`${size === 'lg' ? 'text-lg' : 'text-sm'} font-semibold font-sans tracking-tight`}>
            Google Play
          </span>
        </div>
      </a>

      {isPlaceholder && (
        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
          Package: {CONFIG.PACKAGE_NAME}
        </span>
      )}
    </div>
  );
};
