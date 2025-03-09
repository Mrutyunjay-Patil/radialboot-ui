// src/components/layouts/EnhancedDocsLayout.tsx
import React from 'react';
import { DocsLayout } from './DocsLayout';
import { Breadcrumbs } from '@/components/docs/Breadcrumbs';

interface EnhancedDocsLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  breadcrumbs: {
    label: string;
    href: string;
    current?: boolean;
  }[];
  tableOfContents?: {
    title: string;
    href: string;
  }[];
  gitHubUrl?: string;
  editUrl?: string;
}

export function EnhancedDocsLayout({
  children,
  title,
  description,
  breadcrumbs,
  tableOfContents,
  gitHubUrl,
  editUrl,
}: EnhancedDocsLayoutProps) {
  return (
    <DocsLayout tableOfContents={tableOfContents}>
      <div className="space-y-6">
        <div className="mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
        
        {(gitHubUrl || editUrl) && (
          <div className="flex items-center space-x-2 text-sm">
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                View on GitHub
              </a>
            )}
            {gitHubUrl && editUrl && (
              <span className="text-muted-foreground">•</span>
            )}
            {editUrl && (
              <a
                href={editUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Edit this page
              </a>
            )}
          </div>
        )}
        
        <div className="docs-content">
          {children}
        </div>
        
        <div className="border-t pt-6 mt-16">
          <p className="text-sm text-muted-foreground">
            Built with RadialBoot UI. The source code is available on{" "}
            <a
              href="https://github.com/yourusername/radialboot-ui"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </DocsLayout>
  );
}