// src/components/layout/Header/Header.tsx
'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { HeaderActions } from './HeaderActions';
import { Container } from '../Container';
import { cn } from '@/lib/cn';

interface HeaderProps {
  variant?: 'default' | 'dashboard' | 'landing';
  className?: string;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  variant = 'default',
  className = '',
  transparent = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80',
        transparent && 'border-transparent bg-transparent backdrop-blur-none dark:border-transparent dark:bg-transparent',
        className
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant={variant} />

          {/* Desktop Navigation */}
          <DesktopNavigation variant={variant} className="hidden md:flex" />

          {/* Right Actions */}
          <HeaderActions
            variant={variant}
            onMobileToggle={toggleMobileMenu}
            isMobileOpen={isMobileMenuOpen}
          />
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        variant={variant}
      />
    </header>
  );
};

export default Header;