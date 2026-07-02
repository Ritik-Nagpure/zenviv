// src/components/layout/Footer/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../Container';
import { FooterLinks } from './FooterLinks';
import { cn } from '@/lib/cn';

interface FooterProps {
  variant?: 'default' | 'simple' | 'minimal';
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  const renderSimpleFooter = () => (
    <div className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>© {currentYear} Zenviv. All rights reserved.</p>
    </div>
  );

  const renderMinimalFooter = () => (
    <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-600 dark:text-gray-400 md:flex-row">
      <p>© {currentYear} Zenviv</p>
      <div className="flex gap-6">
        <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400">
          Terms
        </Link>
        <Link href="/cookies" className="hover:text-purple-600 dark:hover:text-purple-400">
          Cookies
        </Link>
      </div>
    </div>
  );

  const renderDefaultFooter = () => (
    <>
      <div className=" py-12 sm:grid-cols-2 lg:grid-cols-4">
        <FooterLinks />
      </div>
      <div className="border-t border-gray-200 py-6 dark:border-gray-800">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400 md:flex-row">
          <p>© {currentYear} Zenviv. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-purple-600 dark:hover:text-purple-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <footer
      className={cn(
        'border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
        className
      )}
    >
      <Container>
        {variant === 'simple' && renderSimpleFooter()}
        {variant === 'minimal' && renderMinimalFooter()}
        {variant === 'default' && renderDefaultFooter()}
      </Container>
    </footer>
  );
};

export default Footer;