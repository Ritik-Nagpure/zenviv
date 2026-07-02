// src/components/layout/Section/index.tsx
'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'white' | 'gray' | 'purple' | 'transparent';
  id?: string;
  as?: 'section' | 'div' | 'article';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  padding = 'lg',
  background = 'default',
  id,
  as: Component = 'section',
}) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-4 sm:py-6',
    md: 'py-8 sm:py-12',
    lg: 'py-12 sm:py-16 lg:py-20',
    xl: 'py-16 sm:py-20 lg:py-28',
  };

  const backgroundClasses = {
    default: 'bg-transparent',
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800/50',
    purple: 'bg-purple-50 dark:bg-purple-900/20',
    transparent: 'bg-transparent',
  };

  return (
    <Component
      id={id}
      className={cn(
        'w-full',
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Section;