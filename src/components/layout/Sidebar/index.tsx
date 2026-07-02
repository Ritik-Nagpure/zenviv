// src/components/layout/Sidebar/index.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import {
  HomeIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  className = '',
  collapsed = false,
  onToggle,
}) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard', icon: <HomeIcon className="h-5 w-5" /> },
    { label: 'Communities', href: '/communities', icon: <UsersIcon className="h-5 w-5" />, badge: 5 },
    { label: 'Feed', href: '/feed', icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />, badge: 12 },
    { label: 'Webinars', href: '/webinars', icon: <VideoCameraIcon className="h-5 w-5" /> },
    { label: 'Merchandise', href: '/merchandise', icon: <ShoppingBagIcon className="h-5 w-5" /> },
    { label: 'Profile', href: '/profile', icon: <UserIcon className="h-5 w-5" /> },
    { label: 'Settings', href: '/settings', icon: <Cog6ToothIcon className="h-5 w-5" /> },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-900',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex h-full flex-col overflow-y-auto">
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800">
          {!isCollapsed && (
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Zenviv
            </span>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                )}
              >
                <span className="flex h-5 w-5 items-center justify-center">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="ml-3 flex-1">{item.label}</span>
                )}
                {!isCollapsed && item.badge && (
                  <span className="ml-auto inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    {item.badge}
                  </span>
                )}
                {isCollapsed && item.badge && (
                  <span className="absolute right-0 top-0 -mr-1 -mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-xs font-medium text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile (Bottom) */}
        {!isCollapsed && (
          <div className="border-t border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  john@zenviv.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;