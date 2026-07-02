// src/components/layout/Header/DesktopNavigation.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface DesktopNavigationProps {
  variant?: 'default' | 'dashboard' | 'landing';
  className?: string;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  variant = 'default',
  className = '',
}) => {
  const pathname = usePathname();

  const navItems: NavItem[] = variant === 'dashboard'
    ? [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Communities', href: '/communities' },
        { label: 'Feed', href: '/feed' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Merchandise', href: '/merchandise' },
      ]
    : variant === 'landing'
    ? [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Communities', href: '/communities' },
        { label: 'Feed', href: '/feed' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Merchandise', href: '/merchandise' },
        { label: 'About', href: '/about' },
      ];

  return (
    <nav className={cn('items-center gap-6', className)}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400',
              isActive
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-700 dark:text-gray-300'
            )}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;