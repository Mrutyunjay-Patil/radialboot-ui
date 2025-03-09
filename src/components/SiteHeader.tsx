// src/components/SiteHeader.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { MobileNav } from '@/components/MobileNav';
import { SearchDialog } from '@/components/docs/SearchDialog';

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

const mainNav: NavItem[] = [
  { title: 'Docs', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Blocks', href: '/blocks' },
  { title: 'Charts', href: '/charts' },
  { title: 'Themes', href: '/themes' },
  { title: 'Colors', href: '/colors' },
];

export function SiteHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="site-header-container container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <MobileNav />
          
          <Link href="/" className="flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              <span className="font-bold">radialboot/ui</span>
          </Link>
          
          <nav className="desktop-nav hidden md:flex gap-6">
            {mainNav.map((item) => (
              <Link href={item.href} key={item.href} className={`text-sm font-medium transition-colors ${
                router.pathname.startsWith(item.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}>
                  {item.title}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden md:block relative">
            <SearchDialog />
          </div>
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/yourusername/radialboot-ui" 
            target="_blank" 
            rel="noreferrer" 
            className="rounded-full w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          
          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}