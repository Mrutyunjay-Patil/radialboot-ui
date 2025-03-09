// src/components/docs/ExampleCard.tsx
import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

interface ExampleCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  language?: string;
}

export function ExampleCard({
  title,
  description,
  children,
  code,
  language = 'tsx',
}: ExampleCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="example-card">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            className="text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide code' : 'View code'}
          </button>
        </div>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="example-card-preview">
        {children}
      </div>
      {showCode && (
        <div className="example-card-code">
          <CodeBlock code={code} language={language} />
        </div>
      )}
    </div>
  );
}