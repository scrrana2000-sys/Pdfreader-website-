import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  kicker?: string;
  title?: string;
  description?: string;
  centered?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  containerClassName = '',
  kicker,
  title,
  description,
  centered = false,
  children,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        {(kicker || title || description) && (
          <div
            className={`mb-12 md:mb-16 ${
              centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
            }`}
          >
            {kicker && (
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
