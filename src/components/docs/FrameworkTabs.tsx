// src/components/docs/FrameworkTabs.tsx
import React from 'react';
import { Tabs } from './Tabs';
import { EnhancedCodeBlock } from './EnhancedCodeBlock';

interface CodeExample {
  language: string;
  code: string;
}

interface FrameworkExample {
  name: string;
  language: string;
  code: string;
  additionalFiles?: CodeExample[];
}

interface FrameworkTabsProps {
  examples: FrameworkExample[];
  defaultFramework?: string;
}

export function FrameworkTabs({ examples, defaultFramework }: FrameworkTabsProps) {
  // Find default tab index, or default to first
  const defaultTab = defaultFramework 
    ? examples.findIndex(ex => ex.name.toLowerCase() === defaultFramework.toLowerCase())
    : 0;
  
  const formattedExamples = examples.map((example) => ({
    id: example.name.toLowerCase(),
    label: example.name,
    content: (
      <div className="space-y-4">
        <EnhancedCodeBlock 
          code={example.code} 
          language={example.language} 
          fileName={`${example.name.toLowerCase()}.${example.language}`}
          showLineNumbers
        />
        
        {example.additionalFiles && example.additionalFiles.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <h4 className="text-sm font-medium mb-2">Additional Files</h4>
            <div className="space-y-4">
              {example.additionalFiles.map((file, index) => (
                <EnhancedCodeBlock
                  key={index}
                  code={file.code}
                  language={file.language}
                  fileName={`additional-${index + 1}.${file.language}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <Tabs 
      tabs={formattedExamples} 
      defaultTabId={formattedExamples[defaultTab]?.id} 
    />
  );
}