// src/components/ui/Breadcrumb/breadcrumb.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumb
 * 
 * A navigation component that helps users understand where they are in a website's hierarchy.
 */
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ className, ...props }, ref) => (
  <nav 
    ref={ref} 
    aria-label="breadcrumb" 
    className={cn("breadcrumb-nav", className)}
    {...props} 
  />
));
Breadcrumb.displayName = "Breadcrumb";

/**
 * BreadcrumbList
 * 
 * The container for breadcrumb items.
 */
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "breadcrumb d-flex flex-wrap align-items-center gap-2",
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

/**
 * BreadcrumbItem
 * 
 * Individual breadcrumb items that make up the breadcrumb trail.
 */
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("breadcrumb-item d-inline-flex align-items-center", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

/**
 * BreadcrumbLink
 * 
 * A navigational link within the breadcrumb.
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={cn("breadcrumb-link transition-colors", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

/**
 * BreadcrumbPage
 * 
 * The current page indicator in the breadcrumb - typically the last item.
 */
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("breadcrumb-page text-body fw-normal", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

/**
 * BreadcrumbSeparator
 * 
 * Visual separator between breadcrumb items.
 */
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("breadcrumb-separator", className)}
    {...props}
  >
    {children ?? <ChevronRight className="breadcrumb-separator-icon" />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

/**
 * BreadcrumbEllipsis
 * 
 * A component to represent collapsed breadcrumb items.
 * Displays a dropdown on desktop and a drawer on mobile for nested items.
 */
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("breadcrumb-ellipsis d-inline-flex align-items-center justify-content-center", className)}
    {...props}
  >
    <MoreHorizontal className="breadcrumb-ellipsis-icon" />
    <span className="visually-hidden">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};