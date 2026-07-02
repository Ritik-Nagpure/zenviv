// src/components/layout/Header/HeaderActions.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { ThemeSwitcher } from '@/components/shared/ThemeSwitcher';
import { UserMenu } from '@/components/shared/UserMenu';
import { SearchBar } from '@/components/shared/SearchBar';
import { NotificationsBell } from '@/components/shared/NotificationsBell';
import { CartIcon } from '@/components/shared/CartIcon';
import { Button } from '@/components/ui/Button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';

interface HeaderActionsProps {
  variant?: 'default' | 'dashboard' | 'landing';
  onMobileToggle: () => void;
  isMobileOpen: boolean;
  className?: string;
}

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  variant = 'default',
  onMobileToggle,
  isMobileOpen,
  className = '',
}) => {
  const { user, isAuthenticated } = useAuth();
  const { theme } = useTheme();

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="flex items-center gap-2">
          <NotificationsBell />
          <CartIcon />
          <UserMenu user={user} />
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <Link href="/auth/login">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Search - hidden on dashboard */}
      {variant !== 'dashboard' && (
        <SearchBar className="hidden lg:block" />
      )}
      
      {/* Theme Switcher */}
      <ThemeSwitcher />
      
      {/* Auth / User Actions */}
      {variant === 'landing' ? (
        <div className="flex items-center gap-2">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="primary" size="sm">
              Start Free
            </Button>
          </Link>
        </div>
      ) : (
        renderAuthButtons()
      )}

      {/* Mobile Menu Toggle */}
      <button
        onClick={onMobileToggle}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 md:hidden"
        aria-expanded={isMobileOpen}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default HeaderActions;