/** Utility to merge CSS class names (filters out falsy values). Similar to shadcn/ui's cn utility. */
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
