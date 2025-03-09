// src/components/layouts/MainLayout.tsx
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SiteHeader } from '../SiteHeader';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="onyx" defaultMode="light">
      <div className="relative min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
    </ThemeProvider>
  );
}