// src/lib/cssImporter.ts
/**
 * This module dynamically generates imports for all component CSS files
 * to be used in _app.tsx
 */

// Import core styles
import "../styles/globals.css";
import "../styles/themes.css";
import "../styles/docs.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import all component styles
import "../styles/components/accordion.css";
import "../styles/components/alert.css";
import "../styles/components/alertDialog.css";
import "../styles/components/aspectRatio.css";
import "../styles/components/avatar.css";
import "../styles/components/button.css";
import "../styles/components/badge.css";
import "../styles/components/breadcrumb.css";
import "../styles/components/form.css";
import "../styles/components/input.css";
import "../styles/components/label.css";
import "../styles/components/checkbox.css";
import "../styles/components/radioGroup.css";
import "../styles/components/select.css";
import "../styles/components/separator.css";
import "../styles/components/switch.css";
import "../styles/components/tabs.css";
import "../styles/components/steps.css";

// Add new component CSS imports here
// The importComponentStyles function can be used in scripts to generate this file

/**
 * This function is meant to be used by build scripts to generate the imports above
 * It is not used at runtime
 */
export function importComponentStyles() {
  // This is a placeholder function for scripts to find and update this file
  return [
    "accordion.css",
    "alert.css",
    "alertDialog.css",
    "aspectRatio.css",
    "avatar.css",
    "button.css",
    "badge.css",
    "breadcrumb.css",
    "form.css",
    "input.css",
    "label.css",
    "checkbox.css",
    "radioGroup.css",
    "select.css",
    "separator.css",
    "switch.css",
    "tabs.css",
    "steps.css",
  ];
}