// src/components/docs/ComponentPreview.tsx
import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';

interface PreviewProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code: {
    jsx: string;
    css?: string;
  };
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
}: PreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'css'>('preview');
  
  return (
    <div className="border rounded-lg overflow-hidden mb-8">
      {(title || description) && (
        <div className="p-4 border-b">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <div className="border-b bg-muted">
        <div className="flex">
          <button
            className={`px-4 py-2 text-sm ${
              activeTab === 'preview'
                ? 'text-foreground border-b-2 border-primary font-medium'
                : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeTab === 'code'
                ? 'text-foreground border-b-2 border-primary font-medium'
                : 'text-muted-foreground'
            }`}
            onClick={() => setActiveTab('code')}
          >
            JSX
          </button>
          {code.css && (
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === 'css'
                  ? 'text-foreground border-b-2 border-primary font-medium'
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
          )}
        </div>
      </div>
      
      <div>
        {activeTab === 'preview' && (
          <div className="p-6 bg-background flex items-center justify-center">
            <div className="w-full">{children}</div>
          </div>
        )}
        
        {activeTab === 'code' && (
          <div className="bg-muted">
            <CodeBlock code={code.jsx} language="tsx" />
          </div>
        )}
        
        {activeTab === 'css' && code.css && (
          <div className="bg-muted">
            <CodeBlock code={code.css} language="css" />
          </div>
        )}
      </div>
    </div>
  );
}