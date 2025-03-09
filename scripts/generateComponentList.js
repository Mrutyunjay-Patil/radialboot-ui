// scripts/generateComponentList.js
const fs = require('fs');
const path = require('path');

// Paths to scan
const COMPONENTS_DIR = path.join(__dirname, '../src/components/ui');
const COMPONENTS_DOCS_DIR = path.join(__dirname, '../src/pages/docs/components');
const OUTPUT_PATH = path.join(__dirname, '../src/data/componentList.json');

function generateComponentList() {
  try {
    // Get all component directories from the UI folder
    const componentDirs = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    // Get all documentation files
    const docFiles = fs.readdirSync(COMPONENTS_DOCS_DIR)
      .filter(file => file.endsWith('.tsx'))
      .map(file => file.replace('.tsx', ''));
    
    // Generate component list based on available docs
    const componentList = docFiles.map(name => {
      // Convert filename to PascalCase for title (you may want to enhance this)
      const title = name.charAt(0).toUpperCase() + name.slice(1);
      
      // Special case for acronyms or specific naming conventions
      const formattedTitle = title
        .replace('Alertdialog', 'AlertDialog')
        .replace('Aspectratio', 'AspectRatio');
      
      return {
        title: formattedTitle,
        href: `/docs/components/${name}`,
        // Optional: detect if component was recently added
        isNew: false
      };
    });
    
    // Sort alphabetically
    componentList.sort((a, b) => a.title.localeCompare(b.title));
    
    // Save to JSON file
    fs.writeFileSync(
      OUTPUT_PATH,
      JSON.stringify(componentList, null, 2)
    );
    
    console.log(`✅ Generated component list with ${componentList.length} components`);
  } catch (error) {
    console.error('Error generating component list:', error);
  }
}

// Execute the function
generateComponentList();