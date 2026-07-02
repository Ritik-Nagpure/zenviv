// src/components/shared/UserMenu.tsx
'use client';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';
import { useAuth } from '@/hooks/useAuth';

interface UserMenuProps {
  user?: any;
  className?: string;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  className = '',
}) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Profile', href: '/profile', icon: UserIcon },
    { label: 'My Orders', href: '/orders', icon: ShoppingBagIcon },
    { label: 'Wishlist', href: '/wishlist', icon: HeartIcon },
    { label: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <Menu as="div" className={cn('relative', className)}>
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
              {user?.firstName?.[0] || user?.email?.[0] || 'U'}
            </div>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.firstName || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user?.email || 'user@example.com'}
                </p>
              </div>

              <div className="py-1">
                {menuItems.map((item) => (
                  <Menu.Item key={item.label}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                          active
                            ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                            : 'text-gray-700 dark:text-gray-300'
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>

              <div className="border-t border-gray-100 dark:border-gray-700 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={cn(
                        'flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 transition-colors dark:text-red-400',
                        active && 'bg-red-50 dark:bg-red-900/20'
                      )}
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default UserMenu;