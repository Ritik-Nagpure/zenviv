// src/components/shared/ThemeSwitcher.tsx
'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';

interface ThemeSwitcherProps {
  className?: string;
  variant?: 'icon' | 'button' | 'toggle';
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
  variant = 'icon',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          'rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200',
          className
        )}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
        'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
        className
      )}
    >
      {isDark ? (
        <>
          <SunIcon className="h-4 w-4" />
          Light Mode
        </>
      ) : (
        <>
          <MoonIcon className="h-4 w-4" />
          Dark Mode
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;