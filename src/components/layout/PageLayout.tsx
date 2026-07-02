// src/components/layout/PageLayout.tsx
'use client';

import React, { ReactNode } from 'react';
import { Container } from './Container';
import { Section } from './Section';
import { Grid } from './Grid';
import { cn } from '@/lib/cn';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  showBreadcrumb?: boolean;
  actions?: ReactNode;
  sidebar?: ReactNode;
  sidebarPosition?: 'left' | 'right';
  withContainer?: boolean;
  withSection?: boolean;
  fullWidth?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  className = '',
  containerClassName = '',
  showBreadcrumb = false,
  actions,
  sidebar,
  sidebarPosition = 'right',
  withContainer = true,
  withSection = true,
  fullWidth = false,
}) => {
  const renderBreadcrumb = () => {
    // TODO: Implement breadcrumb logic based on pathname
    return (
      <nav className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 dark:text-white">Current Page</span>
      </nav>
    );
  };

  const renderHeader = () => {
    if (!title && !subtitle && !actions) return null;
    
    return (
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          {title && (
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </div>
    );
  };

  const content = (
    <>
      {showBreadcrumb && renderBreadcrumb()}
      {renderHeader()}
      <div className={cn('flex flex-col gap-6', sidebar && 'lg:flex-row')}>
        {sidebar && sidebarPosition === 'left' && (
          <aside className="w-full lg:w-72 lg:flex-shrink-0">
            {sidebar}
          </aside>
        )}
        <div className={cn('flex-1', fullWidth ? 'w-full' : 'min-w-0')}>
          {children}
        </div>
        {sidebar && sidebarPosition === 'right' && (
          <aside className="w-full lg:w-72 lg:flex-shrink-0">
            {sidebar}
          </aside>
        )}
      </div>
    </>
  );

  if (!withContainer && !withSection) {
    return <div className={cn('flex-1', className)}>{content}</div>;
  }

  if (withContainer && !withSection) {
    return (
      <Container className={cn('flex-1', containerClassName)}>
        <div className={className}>{content}</div>
      </Container>
    );
  }

  return (
    <Section className={cn('flex-1', className)}>
      <Container className={containerClassName}>{content}</Container>
    </Section>
  );
};

export default PageLayout;