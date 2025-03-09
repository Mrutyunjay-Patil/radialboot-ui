"use client"

import React, { useState, useEffect } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface SelectProps extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'onValueChange'> {
  multiple?: boolean;
  onValueChange?: (value: string | string[]) => void;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectProps
>(({ multiple = false, ...props }, ref) => {
  return <SelectPrimitive.Root {...props} />;
});
Select.displayName = "Select";

const SelectGroup = SelectPrimitive.Group

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    className={cn("select-value", className)}
    {...props}
  />
))

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    multiple?: boolean;
  }
>(({ className, children, multiple = false, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "form-control d-flex align-items-center justify-content-between select-trigger themed-select-trigger",
      multiple && "select-trigger-multiple",
      className
    )}
    {...props}
  >
    <div className="flex-grow-1 text-truncate">{children}</div>
    <SelectPrimitive.Icon asChild>
      {multiple ? (
        <ChevronsUpDown className="select-icon ms-2 flex-shrink-0" />
      ) : (
        <ChevronDown className="select-icon ms-2 flex-shrink-0" />
      )}
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "d-flex cursor-default align-items-center justify-content-center py-1 select-scroll-button",
      className
    )}
    {...props}
  >
    <ChevronUp className="select-scroll-icon" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "d-flex cursor-default align-items-center justify-content-center py-1 select-scroll-button",
      className
    )}
    {...props}
  >
    <ChevronDown className="select-scroll-icon" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    multiple?: boolean;
  }
>(({ className, children, position = "popper", multiple = false, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "select-content themed-select-content",
        position === "popper" && "select-content-popper",
        multiple && "select-multiple",
        className
      )}
      position={position}
      sideOffset={5}
      align="start"
      avoidCollisions={true}
      collisionPadding={10}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "select-viewport",
          position === "popper" && "select-viewport-popper"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("select-label py-1 px-2 fw-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    multiple?: boolean;
  }
>(({ className, children, multiple = false, value, ...props }, ref) => {
  // Create a string version of children for tooltip if needed
  const childText = React.useMemo(() => {
    if (typeof children === 'string') return children;
    if (typeof children === 'number') return children.toString();
    return '';
  }, [children]);

  // Get the current selected values from context
  const isInContext = typeof window !== 'undefined' && document.getElementById('multi-select-context');
  const contextElement = isInContext ? document.getElementById('multi-select-context') : null;
  
  // Check if this item is selected by examining parent elements
  const checkIfSelected = () => {
    let isSelected = false;
    try {
      // Access the closest SelectItem element to get its data-state
      if (ref && 'current' in ref && ref.current) {
        isSelected = ref.current.getAttribute('data-state') === 'checked';
      }
    } catch (e) {
      console.error('Failed to determine selection state:', e);
    }
    return isSelected;
  };

  // Check if item is selected to use in styling
  const isItemSelected = checkIfSelected();

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "select-item position-relative cursor-pointer rounded py-1 px-2 themed-select-item",
        multiple && "select-item-multiple",
        className
      )}
      title={childText}
      value={value}
      {...props}
      onSelect={multiple ? (e) => {
        // For multiple selection, we need to prevent the default closing behavior
        e.preventDefault();
        return false;
      } : undefined}
    >
      <div className="select-item-container d-flex align-items-center w-100">
        <div className="select-item-icon-container">
          <SelectPrimitive.ItemIndicator>
            <Check className="select-check-icon" />
          </SelectPrimitive.ItemIndicator>
        </div>

        <SelectPrimitive.ItemText className="select-item-text">
          {children}
        </SelectPrimitive.ItemText>
      </div>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("dropdown-divider my-1 select-separator", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

/**
 * MultiSelect Component with improved checkbox selection
 */
const MultiSelect = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  Omit<SelectProps, 'multiple'>
>(({ value, defaultValue, onValueChange, ...props }, ref) => {
  // Track selected values for UI consistency
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array.isArray(value) ? value : 
    value ? [value as string] : 
    Array.isArray(defaultValue) ? defaultValue : 
    defaultValue ? [defaultValue as string] : []
  );
  
  // Force the select to stay open after selection in multiple mode
  const handleOpenChange = (open: boolean) => {
    if (props.onOpenChange) {
      // If trying to close after a selection, keep it open
      if (!open && selectedValues.length > 0) {
        props.onOpenChange(true);
        return;
      }
      props.onOpenChange(open);
    }
  };
  
  // Handle item selection/deselection
  const handleValueChange = (newValue: string) => {
    if (!onValueChange) return;
    
    let updatedValues: string[];
    
    // Toggle the value in or out of the selection
    if (selectedValues.includes(newValue)) {
      updatedValues = selectedValues.filter(v => v !== newValue);
    } else {
      updatedValues = [...selectedValues, newValue];
    }
    
    // Update local state first for immediate UI feedback
    setSelectedValues(updatedValues);
    
    // Notify parent component
    onValueChange(updatedValues);
  };
  
  // Keep local state in sync with incoming props
  useEffect(() => {
    if (value !== undefined) {
      const valueArray = Array.isArray(value) ? value : value ? [value as string] : [];
      setSelectedValues(valueArray);
    }
  }, [value]);
  
  return (
    <SelectPrimitive.Root
      {...props}
      onValueChange={handleValueChange}
      onOpenChange={handleOpenChange}
      value={undefined} // Important: let component handle value internally
      open={props.open !== undefined ? props.open : undefined}
    >
      {props.children}
    </SelectPrimitive.Root>
  );
});
MultiSelect.displayName = "MultiSelect";

interface MultiSelectValueProps {
  selectedValues: string[];
  placeholder?: string;
  displayLimit?: number;
  className?: string;
}

/**
 * A specialized value component for MultiSelect that displays selected items as pills or comma-separated list
 */
const MultiSelectValue: React.FC<MultiSelectValueProps> = ({ 
    selectedValues = [], 
    placeholder = "Select items", 
    displayLimit = 2,
    className 
  }) => {
    if (!selectedValues.length) {
      return <SelectValue placeholder={placeholder} />;
    }
  
    // When too many items are selected, show a summary with count
    if (selectedValues.length > displayLimit) {
      return (
        <div className={cn("d-flex align-items-center justify-content-between w-100", className)}>
          <span className="text-truncate">{`${selectedValues.length} items selected`}</span>
        </div>
      );
    }
  
    // For a few selected values, show a comma-separated list instead of pills
    return (
      <div className={cn("select-value-text text-truncate", className)}>
        {selectedValues.join(", ")}
      </div>
    );
  };

export {
  Select,
  MultiSelect,
  MultiSelectValue,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}