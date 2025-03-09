"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className = "", ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn("alert-dialog-overlay themed-overlay", className)}
    {...props}
  />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    size?: "sm" | "md" | "lg" | "xl" | "fullscreen";
    variant?: "default" | "bordered" | "elevated" | "themed";
    animation?: "fast" | "normal" | "slow";
  }
>(({ 
  className = "", 
  size = "md", 
  variant = "default",
  animation = "normal",
  ...props 
}, ref) => {
  // Generate size class
  const sizeClass = size === "fullscreen" 
    ? "modal-fullscreen" 
    : size !== "md" ? `modal-${size}` : "";
  
  // Generate variant class
  const variantClass = variant !== "default" ? `alert-dialog-${variant}` : "";
  
  // Animation speed class
  const animationClass = animation !== "normal" ? `alert-dialog-animation-${animation}` : "";
  
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay className={animationClass} />
      <div className={cn("modal-dialog modal-dialog-centered", sizeClass)}>
        <AlertDialogPrimitive.Content
          ref={ref}
          className={cn(
            "alert-dialog-content modal-content themed-dialog-content",
            variantClass,
            animationClass,
            className
          )}
          {...props}
        />
      </div>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "alert-dialog-header modal-header themed-dialog-header",
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "alert-dialog-footer modal-footer themed-dialog-footer",
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & {
    icon?: React.ReactNode;
  }
>(({ className = "", icon, children, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      "alert-dialog-title modal-title themed-dialog-title",
      icon ? "d-flex align-items-center gap-2" : "",
      className
    )}
    {...props}
  >
    {icon && <span className="alert-dialog-icon">{icon}</span>}
    {children}
  </AlertDialogPrimitive.Title>
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className = "", ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(
      "alert-dialog-description themed-dialog-description",
      className
    )}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & {
    variant?: "primary" | "danger" | "success" | "secondary" | "warning" | "info" | "themed";
  }
>(({ className = "", variant = "primary", ...props }, ref) => {
  // Generate the appropriate button class based on variant
  const buttonClass = variant === "themed" ? "btn-themed" : `btn-${variant}`;
  
  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={cn(
        "btn alert-dialog-action themed-dialog-action",
        buttonClass,
        className
      )}
      {...props}
    />
  );
});
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className = "", ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      "btn btn-outline-secondary alert-dialog-cancel themed-dialog-cancel",
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};