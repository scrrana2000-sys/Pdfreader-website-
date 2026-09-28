import React from 'react';
import { Link } from '../../context/RouterContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  children,
  onClick,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-5 py-3 rounded-xl gap-2.5 shadow-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100',
    outline:
      'border border-slate-300 hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:hover:bg-slate-800/60 dark:text-slate-200',
    ghost:
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/50',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal || href.startsWith('http') ? '_blank' : undefined}
          rel={isExternal || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={onClick as any}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} onClick={onClick as any}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
