// src/components/ui/Badge/badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * badgeVariants:
 * This configuration uses Bootstrap classes to mimic the Tailwind-styled variants from shadcn/ui.
 * 
 * The `themed` variant applies colors from the active global theme (Onyx, Fog, Graphite, Sandstone, Steel).
 * 
 * Variants:
 * - default: Bootstrap badge-primary
 * - secondary: badge-secondary
 * - destructive: badge-danger
 * - outline: badge with border and transparent background
 * - success: badge-success
 * - warning: badge-warning
 * - info: badge-info
 * - light: badge-light
 * - dark: badge-dark
 * - themed: Uses CSS variables from the active theme
 */
const badgeVariants = cva(
  "badge d-inline-flex align-items-center rounded-pill fw-semibold",
  {
    variants: {
      variant: {
        default: "badge-primary",
        secondary: "badge-secondary",
        destructive: "badge-danger",
        outline: "badge-outline",
        success: "badge-success",
        warning: "badge-warning",
        info: "badge-info",
        light: "badge-light",
        dark: "badge-dark",
        themed: "badge-themed",
      },
      size: {
        default: "", // Default size
        sm: "badge-sm",
        lg: "badge-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional flag to make the badge dismissible
   */
  dismissible?: boolean;
  /**
   * Callback function when dismissible badge is closed
   */
  onDismiss?: () => void;
}

/**
 * Badge component
 * 
 * A small component for displaying status, counts, or labels.
 */
function Badge({ 
  className, 
  variant, 
  size,
  dismissible = false,
  onDismiss,
  children, 
  ...props 
}: BadgeProps) {
  // State to track if the badge is visible (for dismissible badges)
  const [visible, setVisible] = React.useState(true);

  // Handle dismiss click
  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  // If dismissed, don't render anything
  if (dismissible && !visible) {
    return null;
  }

  // Determine if we need a white close button based on variant
  // Use useEffect to check document after component is mounted
  const [needsWhiteCloseButton, setNeedsWhiteCloseButton] = React.useState(
    variant === 'default' || 
    variant === 'secondary' || 
    variant === 'destructive' || 
    variant === 'success' || 
    variant === 'dark'
  );
  
  React.useEffect(() => {
    // Check for dark mode only on the client side
    if (variant === 'themed') {
      setNeedsWhiteCloseButton(!document.body.classList.contains('dark'));
    }
  }, [variant]);

  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
      {dismissible && (
        <button
          type="button"
          className={`btn-close ${needsWhiteCloseButton ? 'btn-close-white' : ''} ms-1`}
          aria-label="Close"
          onClick={handleDismiss}
          style={{ fontSize: '0.5rem' }}
        />
      )}
    </div>
  );
}

export { Badge, badgeVariants };