// src/components/docs/ComponentSource.tsx
import React, { useState } from 'react';
import { File, Folder } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface ComponentFile {
  name: string;
  code: string;
  language: string;
}

interface ComponentSourceProps {
  src: string;
  files: ComponentFile[];
}

export function ComponentSource({ src, files }: ComponentSourceProps) {
  const [activeFile, setActiveFile] = useState(0);
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted p-4 border-b">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Folder className="h-4 w-4" />
          <span>{src}</span>
        </div>
      </div>
      
      <div className="flex border-b">
        {files.map((file, index) => (
          <button
            key={file.name}
            className={`px-4 py-2 text-sm flex items-center gap-2 ${
              activeFile === index
                ? 'text-foreground border-b-2 border-primary font-medium'
                : 'text-muted-foreground'
            }`}
            onClick={() => setActiveFile(index)}
          >
            <File className="h-4 w-4" />
            {file.name}
          </button>
        ))}
      </div>
      
      <div className="bg-muted">
        <CodeBlock 
          code={files[activeFile].code} 
          language={files[activeFile].language} 
          fileName={files[activeFile].name}
        />
      </div>
    </div>
  );
}