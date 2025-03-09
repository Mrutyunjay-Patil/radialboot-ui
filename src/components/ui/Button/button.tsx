// src/components/ui/Button/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * buttonVariants:
 * This configuration uses Bootstrap classes to mimic the Tailwind-styled variants from shadcn/ui.
 * 
 * The `themed` variant applies colors from the active global theme (Onyx, Fog, Graphite, Sandstone, Steel).
 * 
 * Variants:
 * - default: Bootstrap btn-primary
 * - destructive: btn-danger
 * - outline: btn-outline-secondary (styled for better contrast)
 * - secondary: btn-secondary
 * - ghost: btn-light
 * - link: btn-link
 * - themed: Uses CSS variables from the active theme
 * 
 * Sizes:
 * - default: Custom padding (py-2 px-4)
 * - sm: Uses Bootstrap's btn-sm
 * - lg: Uses Bootstrap's btn-lg
 * - icon: Uses a custom class (btn-icon)
 */
const buttonVariants = cva(
  "btn d-inline-flex align-items-center justify-content-center gap-2 text-nowrap rounded fs-6 fw-medium",
  {
    variants: {
      variant: {
        default: "btn-primary",
        destructive: "btn-danger",
        outline: "btn-outline-secondary",
        secondary: "btn-secondary",
        ghost: "btn-light",
        link: "btn-link",
        themed: "btn-custom", // Uses CSS variables from the active theme
      },
      size: {
        default: "",
        sm: "btn-sm",
        lg: "btn-lg",
        icon: "btn-icon",
      },
      iconPosition: {
        left: "",
        right: "btn-icon-right"
      },
      isLoading: {
        true: "btn-loading", 
        false: ""
      },
      withRipple: {
        true: "btn-with-ripple",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "left",
      isLoading: false,
      withRipple: false
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   * This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: boolean;
  
  /**
   * Position of the icon relative to the button text
   */
  iconPosition?: "left" | "right";
  
  /**
   * Shows a loading spinner and disables the button
   */
  isLoading?: boolean;
  
  /**
   * Adds a ripple effect when the button is clicked
   */
  withRipple?: boolean;
}

/**
 * Button component
 * 
 * A customizable button component that supports various styles, sizes, and states.
 * Can be rendered as a different element using the asChild prop.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    iconPosition,
    isLoading,
    withRipple,
    asChild = false, 
    disabled,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Combine disabled and isLoading
    const isDisabled = disabled || isLoading;
    
    return (
      <Comp
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            iconPosition,
            isLoading,
            withRipple,
            className 
          })
        )}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };