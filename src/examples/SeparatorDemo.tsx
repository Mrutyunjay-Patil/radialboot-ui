// src/examples/SeparatorDemo.tsx
import React from 'react';
import { Separator } from '@/components/ui/Separator';

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="d-flex align-items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" style={{ height: '20px' }} />
        <div>Docs</div>
        <Separator orientation="vertical" style={{ height: '20px' }} />
        <div>Source</div>
      </div>
    </div>
  );
}