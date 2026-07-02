// src/components/layout/AppLayout.tsx
'use client';

import React, { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar';
import { Container } from './Container';
import { usePathname } from 'next/navigation';

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  showFooter?: boolean;
  className?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  showSidebar = false,
  showFooter = true,
  className = '',
}) => {
  const pathname = usePathname();
  
  // Check if current route is auth page (hide header/footer)
  const isAuthPage = pathname?.startsWith('/auth') || pathname?.startsWith('/login') || pathname?.startsWith('/register');
  
  // Check if current route is dashboard
  const isDashboard = pathname?.startsWith('/dashboard') || pathname?.startsWith('/profile');

  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      {/* Header - hidden on auth pages */}
      {!isAuthPage && <Header variant={isDashboard ? 'dashboard' : 'default'} />}
      
      <div className="flex flex-1">
        {/* Sidebar - shown when enabled */}
        {showSidebar && <Sidebar />}
        
        {/* Main Content */}
        <Container
          as="main"
          className={`flex-1 ${showSidebar ? 'ml-0 lg:ml-64' : ''} ${isAuthPage ? 'flex items-center justify-center' : ''}`}
        >
          <div className="py-4 md:py-6 lg:py-8">
            {children}
          </div>
        </Container>
      </div>
      
      {/* Footer - hidden on auth pages */}
      {!isAuthPage && showFooter && <Footer />}
    </div>
  );
};

export default AppLayout;