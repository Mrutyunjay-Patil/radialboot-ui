// src/components/docs/Pagination.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationLink {
  title: string;
  href: string;
  description?: string;
}

interface PaginationProps {
  prev?: PaginationLink;
  next?: PaginationLink;
}

export function Pagination({ prev, next }: PaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border-t mt-16 pt-8 gap-4">
      {prev ? (
        <Link href={prev.href} className="group flex flex-col items-start gap-1 w-full sm:w-auto">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous</span>
            </div>
            <span className="text-lg font-medium">{prev.title}</span>
            {prev.description && (
              <span className="text-sm text-muted-foreground hidden md:inline">
                {prev.description}
              </span>
            )}
        </Link>
      ) : (
        <div />
      )}
      
      {next ? (
        <Link href={next.href} className="group flex flex-col items-end gap-1 w-full sm:w-auto">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Next</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <span className="text-lg font-medium">{next.title}</span>
            {next.description && (
              <span className="text-sm text-muted-foreground hidden md:inline">
                {next.description}
              </span>
            )}
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}