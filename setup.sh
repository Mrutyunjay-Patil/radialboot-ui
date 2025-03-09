#!/usr/bin/env bash
# finalize_setup.sh
# This script finalizes your RadialBoot UI project setup by creating sample pages with full content.
# It sets up a landing page that showcases your components and a documentation page with MDX.
#
# Run this script from the project root.
#
# Enjoy your new project setup! 🚀

set -e

echo "📄 Setting up sample Home page (src/pages/index.tsx)..."
cat > src/pages/index.tsx << 'EOF'
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';

const Home: NextPage = () => {
  const accordionItems = [
    { header: 'First Item', content: 'Content for the first item.' },
    { header: 'Second Item', content: 'Content for the second item.' },
    { header: 'Third Item', content: 'Content for the third item.' }
  ];

  return (
    <>
      <Head>
        <title>RadialBoot UI - Bootstrap + Radix UI</title>
        <meta name="description" content="A component library built with Bootstrap and Radix UI" />
      </Head>
      <main className="container py-5">
        <h1 className="mb-4">Welcome to RadialBoot UI</h1>
        <p className="lead">This is a Bootstrap + Radix UI component library scaffold.</p>
        <div className="mb-5">
          <h2>Sample Button</h2>
          <Button variant="primary" onClick={() => alert('Button clicked!')}>
            Click Me!
          </Button>
        </div>
        <div className="mb-5">
          <h2>Sample Accordion</h2>
          <Accordion items={accordionItems} />
        </div>
        <div className="mb-5">
          <h2>Documentation</h2>
          <p>
            Check out our documentation for more components and usage examples. 
            Navigate to <a href="/docs">/docs</a> for detailed instructions.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
EOF

echo "✅ Home page created at src/pages/index.tsx"

echo "📄 Setting up sample Documentation page (src/pages/docs/index.mdx)..."
mkdir -p src/pages/docs
cat > src/pages/docs/index.mdx << 'EOF'
import { Button } from '@/components/ui/Button';

# RadialBoot UI Documentation

Welcome to the documentation for **RadialBoot UI**, a component library built with Bootstrap and Radix UI.

## Components Overview

### Button Component

The Button component is a simple, customizable button built using Bootstrap's button classes. Example:

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>

### Accordion Component

The Accordion component leverages Radix UI for interactive behavior and Bootstrap for styling. Here’s how you can use it:

```jsx
import { Accordion } from '@/components/ui/Accordion';

const items = [
  { header: 'Section 1', content: 'Details of section 1.' },
  { header: 'Section 2', content: 'Details of section 2.' }
];

<Accordion items={items} />
