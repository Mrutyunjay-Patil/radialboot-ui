// scripts/generateCssImports.js
const fs = require('fs');
const path = require('path');

// Paths
const COMPONENTS_CSS_DIR = path.join(__dirname, '../src/styles/components');
const CSS_IMPORTER_PATH = path.join(__dirname, '../src/lib/cssImporter.ts');

function generateCssImports() {
  try {
    // Read all CSS files in the components directory
    const cssFiles = fs.readdirSync(COMPONENTS_CSS_DIR)
      .filter(file => file.endsWith('.css'))
      .sort();
    
    console.log(`Found ${cssFiles.length} component CSS files`);
    
    // Read the current importer file
    let importerContent = fs.readFileSync(CSS_IMPORTER_PATH, 'utf8');
    
    // Generate import statements
    const importStatements = cssFiles
      .map(file => `import "../styles/components/${file}";`)
      .join('\n');
    
    // Update the import statements section
    const newImporterContent = importerContent.replace(
      /\/\/ Import all component styles\n(import "\.\.\/styles\/components\/.*\.css";\n)*/,
      `// Import all component styles\n${importStatements}\n`
    );
    
    // Update the importComponentStyles function
    const componentListString = cssFiles
      .map(file => `    "${file}"`)
      .join(',\n');
    
    const finalContent = newImporterContent.replace(
      /return \[\n(.*?)\n  \]/s,
      `return [\n${componentListString}\n  ]`
    );
    
    // Write updated content back to file
    fs.writeFileSync(CSS_IMPORTER_PATH, finalContent);
    
    console.log('✅ CSS importer file updated successfully');
  } catch (error) {
    console.error('Error generating CSS imports:', error);
  }
}

generateCssImports();