// src/components/layouts/DocsLayout.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { ChevronDown } from 'lucide-react';
import componentList from '@/data/componentList.json';

interface NavItem {
  title: string;
  href: string;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

// Base navigation sections
const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'components.json', href: '/docs/components-json' },
      { title: 'Theming', href: '/docs/theming' },
      { title: 'Dark mode', href: '/docs/dark-mode' },
      { title: 'CLI', href: '/docs/cli' },
      { title: 'Monorepo', href: '/docs/monorepo' },
      { title: 'Tailwind v4', href: '/docs/tailwind-v4', isNew: true },
      { title: 'Next.js 15 + React 19', href: '/docs/nextjs-15' },
      { title: 'Typography', href: '/docs/typography' },
      { title: 'Open in v0', href: '/docs/open-in-v0' },
      { title: 'Blocks', href: '/docs/blocks' },
      { title: 'Figma', href: '/docs/figma' },
      { title: 'Changelog', href: '/docs/changelog' },
    ],
  },
  {
    title: 'Installation',
    items: [
      { title: 'Next.js', href: '/docs/installation/nextjs' },
      { title: 'Vite', href: '/docs/installation/vite' },
      { title: 'Laravel', href: '/docs/installation/laravel' },
      { title: 'React Router', href: '/docs/installation/react-router', isNew: true },
      { title: 'Remix', href: '/docs/installation/remix' },
      { title: 'Astro', href: '/docs/installation/astro' },
      { title: 'Tanstack Start', href: '/docs/installation/tanstack-start', isNew: true },
      { title: 'Manual', href: '/docs/installation/manual' },
    ],
  },
  {
    title: 'Components',
    items: componentList as NavItem[],
  },
];

const NavLink = ({ href, title, isNew }: NavItem) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`block py-1.5 text-sm transition-colors ${
        isActive
          ? 'font-medium text-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}>
        {title}
        {isNew && (
          <span className="ms-2 badge badge-sm badge-primary">
            New
          </span>
        )}
    </Link>
  );
};

interface DocsLayoutProps {
  children: React.ReactNode;
  tableOfContents?: {
    title: string;
    href: string;
  }[];
}

export function DocsLayout({ children, tableOfContents }: DocsLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="docs-layout container mx-auto flex flex-col md:flex-row">
      {/* Mobile navigation toggle */}
      <div className="md:hidden flex items-center justify-between py-4 border-b">
        <span className="font-medium">Documentation</span>
        <button
          className="p-2"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle navigation menu"
        >
          <ChevronDown 
            className={`h-5 w-5 transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`docs-sidebar md:w-64 flex-shrink-0 border-r pr-4 py-8 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto ${
          mobileNavOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="relative">
          <nav className="space-y-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <h4 className="font-medium text-sm mb-2">{section.title}</h4>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <NavLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="docs-content flex-1 py-8 px-4 md:px-6">
        <div className="max-w-3xl">
          {children}
        </div>
      </main>

      {/* Table of Contents Sidebar */}
      {tableOfContents && (
        <aside className="hidden xl:block w-64 pl-8 py-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <TableOfContents items={tableOfContents} />
        </aside>
      )}
    </div>
  );
}