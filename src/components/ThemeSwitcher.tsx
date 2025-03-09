// src/components/ThemeSwitcher.tsx
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, ChevronDown } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  const themes = [
    { id: 'onyx', name: 'Onyx' },
    { id: 'fog', name: 'Fog' },
    { id: 'graphite', name: 'Graphite' },
    { id: 'sandstone', name: 'Sandstone' },
    { id: 'steel', name: 'Steel' },
  ];

  return (
    <div className="flex items-center gap-2 relative">
      {/* Mode toggler */}
      <button
        onClick={toggleMode}
        className="rounded-md w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent"
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
      
      {/* Theme selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
        >
          <span>Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 z-10 min-w-[160px] p-1 rounded-md border bg-popover shadow-md">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`w-full text-left rounded-sm px-2 py-1.5 text-sm ${
                  theme === t.id
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};