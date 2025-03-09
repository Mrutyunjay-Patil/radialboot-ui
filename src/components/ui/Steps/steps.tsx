// src/components/ui/Steps/steps.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StepProps {
  /** Title of the step */
  title: React.ReactNode;
  /** Content of the step (optional) */
  content?: React.ReactNode;
  /** Whether the step is completed (optional) */
  completed?: boolean;
  /** Whether the step is currently active (optional) */
  active?: boolean;
  /** Custom class name for the step */
  className?: string;
}

export interface StepsProps {
  /** The active step index (0-based) - used in accordion mode */
  activeStep?: number;
  /** Whether to expand all steps by default */
  expandAll?: boolean;
  /** Whether to use bullets instead of numbers */
  variant?: "numbered" | "bullets";
  /** Custom class name for the steps container */
  className?: string;
  /** The steps to render */
  children: React.ReactNode;
  /** Optional onStepChange handler for accordion mode */
  onStepChange?: (index: number) => void;
}

const StepsContext = React.createContext<{
  activeStep: number;
  expandAll: boolean;
  variant: "numbered" | "bullets";
  setActiveStep: (index: number) => void;
  stepCount: number;
  totalSteps: number;
}>({
  activeStep: 0,
  expandAll: false,
  variant: "numbered",
  setActiveStep: () => {},
  stepCount: 0,
  totalSteps: 0,
});

export const Step = React.forwardRef<
  HTMLDivElement,
  StepProps & React.HTMLAttributes<HTMLDivElement>
>(({ title, content, className, completed, active, ...props }, ref) => {
  const { activeStep, expandAll, variant, setActiveStep, stepCount, totalSteps } = React.useContext(StepsContext);
  const stepIndex = React.useRef<number>(-1);
  
  // Get the step index based on the DOM position
  const stepRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (stepRef.current) {
      const parent = stepRef.current.parentElement;
      if (parent) {
        const children = Array.from(parent.children);
        stepIndex.current = children.indexOf(stepRef.current);
      }
    }
  }, []);
  
  // Determine if this step is active based on index or active prop
  const isActive = active !== undefined 
    ? active 
    : stepIndex.current === activeStep;
    
  // Determine if this step should be expanded
  const isExpanded = expandAll || isActive;
  
  // Determine if this is the last step
  const isLastStep = stepIndex.current === totalSteps - 1;
  
  return (
    <div
      ref={(node) => {
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
        stepRef.current = node;
      }}
      className={cn(
        "steps-item",
        isActive && "steps-item-active",
        completed && "steps-item-completed",
        isLastStep && "steps-item-last",
        className
      )}
      {...props}
    >
      <div 
        className={cn(
          "steps-header d-flex align-items-start gap-3", 
          !expandAll && "steps-header-clickable"
        )}
        onClick={() => {
          if (!expandAll && stepIndex.current !== -1) {
            setActiveStep(stepIndex.current);
          }
        }}
      >
        <div 
          className={cn(
            "steps-indicator d-flex align-items-center justify-content-center flex-shrink-0",
            isActive && "steps-indicator-active",
            completed && "steps-indicator-completed",
            variant === "bullets" && "steps-indicator-bullet",
            // Remove static indicator class that was overriding colors
            // expandAll && "steps-indicator-static"
          )}
        >
          {variant === "numbered" && (stepIndex.current + 1)}
          {variant === "bullets" && completed && (
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="steps-indicator-check"
            >
              <path 
                d="M3.5 6L5 7.5L8.5 4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          )}
        </div>
        <div className="steps-title fw-medium">
          {title}
        </div>
      </div>
      
      {content && (
        <div 
          className={cn(
            "steps-content ps-5 ms-3 mt-2 position-relative",
            !isExpanded && "steps-content-collapsed"
          )}
        >
          <div className="steps-content-inner">
            {content}
          </div>
        </div>
      )}
    </div>
  );
});
Step.displayName = "Step";

export const Steps = React.forwardRef<
  HTMLDivElement,
  StepsProps & React.HTMLAttributes<HTMLDivElement>
>(({
  activeStep = 0,
  expandAll = false,
  variant = "numbered",
  className,
  children,
  onStepChange,
  ...props
}, ref) => {
  // Count the number of steps
  const [stepCount, setStepCount] = React.useState(0);
  const [totalSteps, setTotalSteps] = React.useState(0);
  
  React.useEffect(() => {
    // Count the number of Step components
    const count = React.Children.count(children);
    setStepCount(count);
    setTotalSteps(count);
  }, [children]);
  
  // Track the active step internally if not controlled
  const [internalActiveStep, setInternalActiveStep] = React.useState(activeStep);
  
  // Update internal state when activeStep prop changes
  React.useEffect(() => {
    setInternalActiveStep(activeStep);
  }, [activeStep]);
  
  // Handle step change
  const handleStepChange = React.useCallback((index: number) => {
    setInternalActiveStep(index);
    if (onStepChange) {
      onStepChange(index);
    }
  }, [onStepChange]);
  
  return (
    <StepsContext.Provider 
      value={{ 
        activeStep: internalActiveStep, 
        expandAll, 
        variant,
        setActiveStep: handleStepChange,
        stepCount,
        totalSteps
      }}
    >
      <div 
        ref={ref} 
        className={cn("steps-container", className)} 
        {...props}
      >
        {children}
      </div>
    </StepsContext.Provider>
  );
});
Steps.displayName = "Steps";