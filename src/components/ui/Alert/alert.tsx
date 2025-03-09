"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Types for position and timeout
export type AlertPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right" 
  | "static";

const alertVariants = cva(
  "alert position-relative rounded border p-3 mb-3 themed-alert",
  {
    variants: {
      variant: {
        default: "alert-primary border-primary/50 bg-primary/10 text-primary-foreground",
        secondary: "alert-secondary border-secondary/50 bg-secondary/10 text-secondary-foreground",
        success: "alert-success border-success/50 bg-success/10 text-success-foreground",
        danger: "alert-danger border-destructive/50 bg-destructive/10 text-destructive",
        warning: "alert-warning border-warning/50 bg-warning/10 text-warning-foreground",
        info: "alert-info border-info/50 bg-info/10 text-info-foreground",
        light: "alert-light border-light/50 bg-light text-light-foreground",
        dark: "alert-dark border-dark/50 bg-dark/10 text-dark-foreground",
        themed: "alert-themed", // Fixed themed variant class name
      },
      sizing: {
        default: "p-3",
        sm: "p-2 text-sm",
        lg: "p-4",
      },
      position: {
        static: "w-100",
        "top-left": "position-fixed top-0 start-0 m-3 alert-animated max-w-sm z-50",
        "top-center": "position-fixed top-0 start-50 translate-middle-x m-3 alert-animated max-w-sm z-50",
        "top-right": "position-fixed top-0 end-0 m-3 alert-animated max-w-sm z-50",
        "bottom-left": "position-fixed bottom-0 start-0 m-3 alert-animated max-w-sm z-50",
        "bottom-center": "position-fixed bottom-0 start-50 translate-middle-x m-3 alert-animated max-w-sm z-50",
        "bottom-right": "position-fixed bottom-0 end-0 m-3 alert-animated max-w-sm z-50",
      },
    },
    defaultVariants: {
      variant: "default",
      sizing: "default",
      position: "static",
    },
  }
);

// Interface for the Alert component props
export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  onClose?: () => void;
  showClose?: boolean;
  timeout?: number;
  position?: AlertPosition;
}

// Main Alert component
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className = "", 
    children, 
    variant, 
    sizing, 
    position = "static",
    icon, 
    onClose, 
    showClose = false, 
    timeout,
    ...props 
  }, ref) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
      if (timeout && timeout > 0) {
        const timer = setTimeout(() => {
          setVisible(false);
          if (onClose) onClose();
        }, timeout);
        
        return () => clearTimeout(timer);
      }
    }, [timeout, onClose]);

    if (!visible) return null;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant, sizing, position }), 
          icon ? "has-icon" : "",
          showClose ? "has-close" : "",
          className
        )}
        {...props}
      >
        <div className="d-flex align-items-start">
          {icon && <div className="alert-icon flex-shrink-0 me-2">{icon}</div>}
          <div className="flex-grow-1">
            {children}
          </div>
          {/* Moved close button inside the flex container to properly position it */}
          {showClose && (
            <button
              type="button"
              className="btn-close flex-shrink-0 ms-2 mt-1"
              aria-label="Close"
              onClick={() => {
                setVisible(false);
                if (onClose) onClose();
              }}
            ></button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

// Alert Title component
const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 fw-medium lh-sm", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

// Alert Description component
const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("fs-6 [&_p]:lh-base", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
