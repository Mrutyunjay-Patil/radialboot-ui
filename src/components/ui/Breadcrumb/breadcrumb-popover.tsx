// src/components/ui/Breadcrumb/breadcrumb-popover.tsx
import * as React from "react";
import { MoreHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbPopoverProps {
  items: {
    href: string;
    label: string;
  }[];
  className?: string;
}

/**
 * BreadcrumbDropdown
 * 
 * A dropdown component for desktop that shows collapsed breadcrumb items when clicking the ellipsis.
 */
export const BreadcrumbDropdown = React.forwardRef<
  HTMLDivElement,
  BreadcrumbPopoverProps
>(({ items, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="position-relative">
      <span
        role="button"
        className={cn("breadcrumb-ellipsis d-inline-flex align-items-center justify-content-center", className)}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <MoreHorizontal className="breadcrumb-ellipsis-icon" />
        <span className="visually-hidden">More breadcrumb items</span>
      </span>

      <div
        ref={ref}
        className={cn(
          "breadcrumb-dropdown",
          isOpen ? "show" : "",
          className
        )}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="breadcrumb-dropdown-item"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
});
BreadcrumbDropdown.displayName = "BreadcrumbDropdown";

/**
 * BreadcrumbDrawer
 * 
 * A drawer component for mobile that shows collapsed breadcrumb items when clicking the ellipsis.
 */
export const BreadcrumbDrawer = ({
  items,
  className,
  ...props
}: BreadcrumbPopoverProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <span
        role="button"
        className={cn("breadcrumb-ellipsis d-inline-flex d-md-none align-items-center justify-content-center", className)}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <MoreHorizontal className="breadcrumb-ellipsis-icon" />
        <span className="visually-hidden">More breadcrumb items</span>
      </span>

      <div
        className={cn(
          "breadcrumb-drawer-backdrop",
          isOpen ? "show" : ""
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={cn(
          "breadcrumb-drawer",
          isOpen ? "show" : "",
          className
        )}
      >
        <div className="breadcrumb-drawer-header">
          <span className="breadcrumb-drawer-title">Navigation</span>
          <button
            className="breadcrumb-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X />
          </button>
        </div>

        <div className="breadcrumb-drawer-content">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="breadcrumb-drawer-item"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
BreadcrumbDrawer.displayName = "BreadcrumbDrawer";

/**
 * BreadcrumbEllipsisWithItems
 * 
 * A combined component that shows a dropdown on desktop and a drawer on mobile.
 */
export const BreadcrumbEllipsisWithItems = ({
  items,
  className,
  ...props
}: BreadcrumbPopoverProps) => {
  return (
    <>
      {/* Desktop dropdown */}
      <div className="d-none d-md-block">
        <BreadcrumbDropdown items={items} className={className} {...props} />
      </div>
      
      {/* Mobile drawer */}
      <div className="d-block d-md-none">
        <BreadcrumbDrawer items={items} className={className} {...props} />
      </div>
    </>
  );
};
BreadcrumbEllipsisWithItems.displayName = "BreadcrumbEllipsisWithItems";