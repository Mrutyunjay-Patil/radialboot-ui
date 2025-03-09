// src/components/docs/Breadcrumbs.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
            )}
            
            {item.current ? (
              <span className="text-sm font-medium text-muted-foreground">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}