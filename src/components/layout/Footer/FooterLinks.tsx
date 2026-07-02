// src/components/layout/Footer/FooterLinks.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface FooterLinksProps {
  className?: string;
}

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ className = '' }) => {
  const sections: FooterSection[] = [
    {
      title: 'Platform',
      links: [
        { label: 'Communities', href: '/communities' },
        { label: 'Feed', href: '/feed' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Merchandise', href: '/merchandise' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Community Guidelines', href: '/guidelines' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
  ];

  return (
    <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;