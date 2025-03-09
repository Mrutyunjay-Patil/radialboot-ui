// src/pages/docs/components/accordion.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'API Reference', href: '#api-reference' },
];

const AccordionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accordion - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Accordion</h1>
            <p className="text-xl text-muted-foreground">
              A vertically stacked set of interactive headings that each reveal a section of content.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <Accordion type="single" collapsible defaultValue="item-1">
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
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add accordion</code>
            </pre>
            <button className="absolute top-2 right-2 p-2 rounded-md text-muted-foreground hover:text-foreground">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <h2 id="usage" className="text-2xl font-bold mt-8">Usage</h2>
          <p>
            Use the Accordion component to organize content into collapsible sections.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Content for section 1
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
            <button className="absolute top-2 right-2 p-2 rounded-md text-muted-foreground hover:text-foreground">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <h2 id="examples" className="text-2xl font-bold mt-8">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Multiple</h3>
              <p className="mb-4">Allow multiple items to be open at the same time.</p>
              <div className="p-6 border rounded-lg">
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>First Section</AccordionTrigger>
                    <AccordionContent>
                      This accordion allows multiple sections to be open at once.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Second Section</AccordionTrigger>
                    <AccordionContent>
                      Try opening this while the first section is still open.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Accordion</h3>
              <p className="mb-2">Contains all accordion items.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>type</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">single | multiple</code>
                    </div>
                    <div>Required</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default AccordionPage;