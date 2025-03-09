// scripts/add-component.js
import fs from 'fs';
import path from 'path';

// Get component name from command line args
const componentName = process.argv[2];
if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

// Create directory structure
const componentDir = path.join(__dirname, '..', 'src', 'components', 'ui', componentName.toLowerCase());
fs.mkdirSync(componentDir, { recursive: true });

// Read templates
const componentTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'component-template.txt'), 'utf8');
const indexTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'index-template.txt'), 'utf8');
const stylesTemplate = fs.readFileSync(path.join(__dirname, '..', 'templates', 'styles-template.txt'), 'utf8');

// Replace placeholders
const filledComponentTemplate = componentTemplate.replace(/COMPONENT_NAME/g, componentName);

// Create files
fs.writeFileSync(path.join(componentDir, `${componentName.toLowerCase()}.tsx`), filledComponentTemplate);
fs.writeFileSync(path.join(componentDir, 'index.tsx'), indexTemplate.replace(/COMPONENT_NAME/g, componentName.toLowerCase()));
fs.writeFileSync(path.join(componentDir, 'styles.css'), stylesTemplate.replace(/COMPONENT_NAME/g, componentName.toLowerCase()));

// Create global styles directory if it doesn't exist
const globalStylesDir = path.join(__dirname, '..', 'src', 'styles', 'components');
if (!fs.existsSync(globalStylesDir)) {
  fs.mkdirSync(globalStylesDir, { recursive: true });
}

// Copy styles to global styles
fs.writeFileSync(path.join(globalStylesDir, `${componentName.toLowerCase()}.css`), stylesTemplate.replace(/COMPONENT_NAME/g, componentName.toLowerCase()));

console.log(`✅ Successfully created ${componentName} component`);
console.log(`📁 Location: src/components/ui/${componentName.toLowerCase()}/`);
console.log(`🎨 Styles: src/styles/components/${componentName.toLowerCase()}.css`);
console.log(`📝 Don't forget to import the styles in _app.tsx`);