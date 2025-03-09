// src/components/docs/CodeBlock.tsx
import React, { useState } from 'react';

interface CodeBlockProps {
  language?: string;
  code: string;
  fileName?: string;
}

export function CodeBlock({ language = 'tsx', code, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block relative">
      {fileName && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/80">
          <div className="text-sm text-muted-foreground">{fileName}</div>
        </div>
      )}
      <pre className="language-typescript p-4 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        className="copy-button"
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}