// src/components/layout/Header/Logo.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface LogoProps {
  variant?: 'default' | 'dashboard' | 'landing';
  className?: string;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
  withText = true,
}) => {
  const logoSize = variant === 'dashboard' ? 'h-8 w-8' : 'h-10 w-10';

  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600',
          logoSize
        )}
      >
        <span className="text-lg font-bold text-white">Z</span>
      </div>
      {withText && (
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Zenviv
          {variant === 'dashboard' && (
            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              Dashboard
            </span>
          )}
        </span>
      )}
    </Link>
  );
};

export default Logo;