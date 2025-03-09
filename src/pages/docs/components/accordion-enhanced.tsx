// src/pages/docs/components/accordion-enhanced.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { EnhancedDocsLayout } from '@/components/layouts/EnhancedDocsLayout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { Callout } from '@/components/docs/Callout';
import { PropsTable } from '@/components/docs/PropsTable';
import { ComponentSource } from '@/components/docs/ComponentSource';
import { Pagination } from '@/components/docs/Pagination';
import { FrameworkTabs } from '@/components/docs/FrameworkTabs';
import { EnhancedCodeBlock } from '@/components/docs/EnhancedCodeBlock';

const breadcrumbs = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Accordion', href: '/docs/components/accordion', current: true },
];

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'Single Item Open', href: '#single-item' },
  { title: 'Multiple Items Open', href: '#multiple-items' },
  { title: 'API Reference', href: '#api-reference' },
];

const AccordionPage: NextPage = () => {
  // Example code snippets
  const installCode = `npx radialboot-ui add accordion`;
  
  const usageCode = {
    jsx: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    css: `.accordion {
  width: 100%;
}

.accordion-item {
  border-bottom: 1px solid hsl(var(--border));
}

.accordion-trigger {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  font-weight: 500;
  text-align: left;
}

.accordion-content {
  overflow: hidden;
  padding: 0 1rem 1rem 1rem;
}`,
  };

  const frameworkExamples = [
    {
      name: 'React',
      language: 'tsx',
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    },
    {
      name: 'Next.js',
      language: 'tsx',
      code: `'use client'
 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    },
  ];
  
  const accordionDemo1 = (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
  
  const accordionDemo2 = (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          This accordion allows multiple sections to be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Try opening this while the first section is still open.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
  
  // Props for the API reference
  const accordionProps = [
    {
      name: 'type',
      type: '"single" | "multiple"',
      required: true,
      description: 'Determines whether one or multiple items can be open at the same time.',
    },
    {
      name: 'collapsible',
      type: 'boolean',
      defaultValue: 'false',
      description: 'When type is "single", allows closing content when clicking the trigger for an open item.',
    },
    {
      name: 'defaultValue',
      type: 'string | string[]',
      description: 'The value of the item(s) to be open when initially rendered. Use with type="single" or type="multiple".',
    },
  ];
  
  const accordionItemProps = [
    {
      name: 'value',
      type: 'string',
      required: true,
      description: 'A unique identifier for the accordion item.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'When true, prevents the user from interacting with the accordion item.',
    },
  ];

  return (
    <>
      <Head>
        <title>Accordion - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Accordion"
        editUrl="https://github.com/yourusername/radialboot-ui/edit/main/src/pages/docs/components/accordion.tsx"
      >
        {/* Installation */}
        <section className="mb-12" id="installation">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="mb-4">
            Install the component from your command line.
          </p>
          
          <div className="my-4 relative">
            <EnhancedCodeBlock code={installCode} language="bash" />
          </div>
        </section>
        
        {/* Usage */}
        <section className="mb-12" id="usage">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            Use the Accordion component to organize content into collapsible sections.
          </p>
          
          <FrameworkTabs examples={frameworkExamples} defaultFramework="React" />
          
          <Callout type="info" title="Accessibility">
            This component adheres to the{' '}
            <a 
              href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" 
              target="_blank" 
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              WAI-ARIA Accordion Pattern
            </a>.
          </Callout>
        </section>
        
        {/* Examples */}
        <section className="mb-12" id="examples">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div className="space-y-8">
            <div id="single-item">
              <ComponentPreview
                title="Single Item Open"
                description="Only one item can be open at a time. Clicking an open item will close it."
                code={{
                  jsx: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  {/* More accordion items */}
</Accordion>`,
                }}
              >
                {accordionDemo1}
              </ComponentPreview>
            </div>
            
            <div id="multiple-items">
              <ComponentPreview
                title="Multiple Items Open"
                description="Multiple items can be open at the same time."
                code={{
                  jsx: `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      This accordion allows multiple sections to be open at once.
    </AccordionContent>
  </AccordionItem>
  {/* More accordion items */}
</Accordion>`,
                }}
              >
                {accordionDemo2}
              </ComponentPreview>
            </div>
          </div>
        </section>
        
        {/* API Reference */}
        <section id="api-reference">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          
          <div className="space-y-8">
            <PropsTable componentName="Accordion" props={accordionProps} />
            <PropsTable componentName="AccordionItem" props={accordionItemProps} />
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Source Code</h3>
            <ComponentSource 
              src="components/ui/Accordion" 
              files={[
                { 
                  name: "accordion.tsx", 
                  code: `// This is a simplified version of the actual code
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

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`,
                  language: "tsx" 
                },
                { 
                  name: "styles.css", 
                  code: `.accordion {
  width: 100%;
}

.accordion-item {
  border-bottom: 1px solid hsl(var(--border));
}

/* More CSS styles */`,
                  language: "css" 
                }
              ]} 
            />
          </div>
        </section>
        
        <Pagination
          prev={{
            title: 'Getting Started',
            href: '/docs',
            description: 'Learn about RadialBoot UI',
          }}
          next={{
            title: 'Button',
            href: '/docs/components/button',
            description: 'Interactive button component',
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default AccordionPage;