// src/components/docs/Callout.tsx
import React from 'react';
import { AlertCircle, Info, AlertTriangle, CheckCircle } from 'lucide-react';

type CalloutType = 'default' | 'info' | 'warning' | 'error' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const typeIcons = {
  default: Info,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
};

const typeStyles = {
  default: 'bg-muted text-foreground',
  info: 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100',
  warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',
  error: 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100',
  success: 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',
};

export function Callout({ type = 'default', title, children }: CalloutProps) {
  const Icon = typeIcons[type];
  const style = typeStyles[type];

  return (
    <div className={`callout my-6 rounded-md p-4 ${style}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className="h-5 w-5" />
        </div>
        <div className="ml-3">
          {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}