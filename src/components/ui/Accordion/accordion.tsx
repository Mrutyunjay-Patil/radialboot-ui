// src\components\ui\Accordion\accordion.tsx
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className = "", ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("accordion", className)}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("accordion-item themed-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Header className="accordion-header">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "accordion-button themed-accordion-button",
        "[&[data-state='closed']]:collapsed",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown 
        className="ms-auto transition-transform duration-200 themed-chevron" 
        style={{ transform: "var(--chevron-transform, rotate(0deg))" }}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = "", children, ...props }, ref) => {
  // Use state to manage Bootstrap classes properly
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  
  // Sync Radix UI state with our local state
  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-state') {
          const state = (mutation.target as HTMLElement).getAttribute('data-state');
          setIsOpen(state === 'open');
          
          // Update chevron rotation style
          const header = (mutation.target as HTMLElement).closest('.accordion-item')?.querySelector('.accordion-button');
          if (header) {
            if (state === 'open') {
              (header as HTMLElement).style.setProperty('--chevron-transform', 'rotate(180deg)');
            } else {
              (header as HTMLElement).style.setProperty('--chevron-transform', 'rotate(0deg)');
            }
          }
        }
      });
    });
    
    if (contentRef.current) {
      observer.observe(contentRef.current, { attributes: true });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <AccordionPrimitive.Content
      ref={(node) => {
        // Merge refs
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
        contentRef.current = node;
      }}
      className={cn(
        "accordion-collapse collapse themed-accordion-content",
        isOpen ? "show" : "",
        className
      )}
      {...props}
    >
      <div className="accordion-body themed-accordion-body">{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };