// src/components/docs/EnhancedCodeBlock.tsx
import React, { useState, useEffect } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { createCodeBlock } from '@/lib/syntax-highlighter';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
}

export function EnhancedCodeBlock({
  code,
  language = 'tsx',
  fileName,
  showLineNumbers = false,
}: CodeBlockProps) {
  const { mode } = useTheme();
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function highlight() {
      try {
        setIsLoading(true);
        const html = await createCodeBlock(code, language, mode === 'dark');
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
      } finally {
        setIsLoading(false);
      }
    }

    highlight();
  }, [code, language, mode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block relative rounded-md overflow-hidden">
      {fileName && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{fileName}</span>
          </div>
        </div>
      )}
      
      <div className="relative">
        {isLoading ? (
          <div className="p-4 bg-muted animate-pulse h-32"></div>
        ) : (
          <div 
            className={`p-4 overflow-x-auto ${showLineNumbers ? 'line-numbers' : ''}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        )}
        
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-accent transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}