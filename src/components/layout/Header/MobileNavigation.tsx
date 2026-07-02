// src/components/layout/Header/MobileNavigation.tsx
'use client';

import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'default' | 'dashboard' | 'landing';
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  variant = 'default',
}) => {
  const pathname = usePathname();

  const navItems = variant === 'dashboard'
    ? [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Communities', href: '/communities' },
        { label: 'Feed', href: '/feed' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Merchandise', href: '/merchandise' },
        { label: 'Profile', href: '/profile' },
        { label: 'Settings', href: '/settings' },
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
        { label: 'Profile', href: '/profile' },
      ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-900">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                          Menu
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                          onClick={onClose}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={onClose}
                              className={cn(
                                'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                                isActive
                                  ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNavigation;