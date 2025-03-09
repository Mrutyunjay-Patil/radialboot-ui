// src/components/docs/SearchDialog.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface SearchResult {
  title: string;
  href: string;
  description: string;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  // Mock search results for demonstration
  const mockResults: SearchResult[] = [
    {
      title: 'Introduction',
      href: '/docs',
      description: 'Learn about radialboot/ui',
    },
    {
      title: 'Button',
      href: '/docs/components/button',
      description: 'Interactive button component',
    },
    {
      title: 'Accordion',
      href: '/docs/components/accordion',
      description: 'A vertically stacked set of interactive headings',
    },
    // Add more mock results
  ];

  // Handle keyboard shortcut to open search dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }
    
    // Simple search function for demonstration
    const filteredResults = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
  }, [searchQuery]);

  // Handle selecting a result
  const handleSelectResult = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  // Search trigger component
  const SearchTrigger = () => (
    <button
      className="flex items-center gap-2 text-sm text-muted-foreground rounded-md border border-input px-3 py-1.5 bg-background hover:bg-accent/50 w-60"
      onClick={() => setOpen(true)}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
      >
        <path
          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>Search documentation...</span>
      <span className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</span>
    </button>
  );

  return (
    <>
      <SearchTrigger />
      
      {/* Search Dialog */}
      {open && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-xl">
            {/* Search header */}
            <div className="flex items-center border-b px-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-muted-foreground"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 py-3 px-2 bg-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                className="text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setOpen(false)}
              >
                Esc
              </button>
            </div>
            
            {/* Search results */}
            <div className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && searchQuery !== '' ? (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  No results found.
                </div>
              ) : (
                <ul>
                  {results.map((result) => (
                    <li key={result.href}>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-accent/50 flex flex-col"
                        onClick={() => handleSelectResult(result.href)}
                      >
                        <span className="font-medium">{result.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {result.description}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}