"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

/**
 * Separator Component
 * 
 * A versatile component used to visually or semantically separate content.
 * Supports horizontal and vertical orientations, and integrates with the theme system.
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    /**
     * Optional variant style of the separator
     */
    variant?: "default" | "dashed" | "thick" | "thin" | "themed";
  }
>(
  (
    { 
      className, 
      orientation = "horizontal", 
      decorative = true, 
      variant = "default",
      ...props 
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "separator",
        "themed-separator",
        orientation === "horizontal" ? "separator-horizontal" : "separator-vertical",
        variant !== "default" && `separator-${variant}`,
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };