// src/components/MobileNav.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const navItems = [
  { title: 'Docs', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Blocks', href: '/blocks' },
  { title: 'Charts', href: '/charts' },
  { title: 'Themes', href: '/themes' },
  { title: 'Colors', href: '/colors' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Close the mobile nav when route changes
  React.useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <button
        className="mobile-nav-toggle md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
      
      {/* Overlay */}
      <div 
        className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="flex flex-col space-y-4 py-4">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} className={`text-lg font-medium px-4 py-2 rounded-md ${
                router.pathname.startsWith(item.href)
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}>
                {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="border-t my-6"></div>
        
        <div className="px-4 py-2">
          <h4 className="text-sm font-medium mb-3">Getting Started</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Introduction
              </Link>
            </li>
            <li>
              <Link href="/docs/installation" className="text-sm text-muted-foreground hover:text-foreground">
                  Installation
              </Link>
            </li>
            <li>
              <Link href="/docs/theming" className="text-sm text-muted-foreground hover:text-foreground">
                  Theming
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="px-4 py-2">
          <h4 className="text-sm font-medium mb-3">Components</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/docs/components/accordion" className="text-sm text-muted-foreground hover:text-foreground">
                  Accordion
              </Link>
            </li>
            <li>
              <Link href="/docs/components/button" className="text-sm text-muted-foreground hover:text-foreground">
                  Button
              </Link>
            </li>
            {/* Add more component links as needed */}
          </ul>
        </div>
      </div>
    </>
  );
}