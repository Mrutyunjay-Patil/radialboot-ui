// src/pages/docs/components/badge.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import { Badge } from '@/components/ui/Badge/badge';
import { Button } from '@/components/ui/Button/button';
import { useState } from 'react';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'Variants', href: '#variants' },
  { title: 'Sizes', href: '#sizes' },
  { title: 'With Icons', href: '#with-icons' },
  { title: 'Dismissible', href: '#dismissible' },
  { title: 'Themed', href: '#themed' },
  { title: 'API Reference', href: '#api-reference' },
];

const BadgePage: NextPage = () => {
  const [badges, setBadges] = useState([
    { id: 1, text: "Badge 1" },
    { id: 2, text: "Badge 2" },
    { id: 3, text: "Badge 3" }
  ]);

  const handleDismiss = (id: number) => {
    setBadges(prev => prev.filter(badge => badge.id !== id));
  };

  return (
    <>
      <Head>
        <title>Badge - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Badge</h1>
            <p className="text-xl text-muted-foreground">
              A small component for displaying status, counts, or labels.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="d-flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add badge</code>
            </pre>
            <Button 
              variant="ghost" 
              size="icon" 
              className="position-absolute top-2 end-2"
              aria-label="Copy code"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>

          <h2 id="usage" className="text-2xl font-bold mt-8">Usage</h2>
          <p>
            Use the Badge component to highlight status, show counts, or label content.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { Badge } from "@/components/ui/Badge/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</code>
            </pre>
            <Button 
              variant="ghost" 
              size="icon" 
              className="position-absolute top-2 end-2"
              aria-label="Copy code"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>

          <h2 id="examples" className="text-2xl font-bold mt-8">Examples</h2>
          
          <div className="space-y-8">
            <div id="variants">
              <h3 className="text-xl font-medium mb-4">Variants</h3>
              <p className="mb-4">Different variants to convey different meanings.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="light">Light</Badge>
                  <Badge variant="dark">Dark</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </div>

            <div id="sizes">
              <h3 className="text-xl font-medium mb-4">Sizes</h3>
              <p className="mb-4">Badges come in different sizes.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <Badge size="sm">Small</Badge>
                  <Badge>Default</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </div>
            
            <div id="with-icons">
              <h3 className="text-xl font-medium mb-4">With Icons</h3>
              <p className="mb-4">Badges can include icons for better visual cues.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Badge>
                    <span className="icon me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                      </svg>
                    </span>
                    Info
                  </Badge>
                  <Badge variant="success">
                    <span className="icon me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </span>
                    Success
                  </Badge>
                  <Badge variant="warning">
                    <span className="icon me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </span>
                    Warning
                  </Badge>
                  <Badge variant="destructive">
                    <span className="icon me-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                      </svg>
                    </span>
                    Error
                  </Badge>
                </div>
              </div>
            </div>
            
            <div id="dismissible">
              <h3 className="text-xl font-medium mb-4">Dismissible</h3>
              <p className="mb-4">Badges can be made dismissible.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  {badges.map(badge => (
                    <Badge 
                      key={badge.id} 
                      variant="info" 
                      dismissible 
                      onDismiss={() => handleDismiss(badge.id)}
                    >
                      {badge.text}
                    </Badge>
                  ))}
                </div>
                {badges.length === 0 && (
                  <Button 
                    onClick={() => setBadges([
                      { id: 1, text: "Badge 1" },
                      { id: 2, text: "Badge 2" },
                      { id: 3, text: "Badge 3" }
                    ])}
                    variant="outline"
                    className="mt-3"
                  >
                    Reset Badges
                  </Button>
                )}
              </div>
            </div>
            
            <div id="themed">
              <h3 className="text-xl font-medium mb-4">Themed</h3>
              <p className="mb-4">Use the themed variant to match your current theme.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Badge variant="themed">Themed Badge</Badge>
                  <Badge variant="themed" size="lg">Themed Large</Badge>
                </div>
              </div>
            </div>
            
            <div id="usage-examples">
              <h3 className="text-xl font-medium mb-4">Usage Examples</h3>
              <p className="mb-4">Common use cases for badges.</p>
              <div className="p-6 border rounded-lg">
                <div className="mb-4">
                  <h5>In Buttons</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <Button>
                      Notifications <Badge variant="light" className="ms-2">5</Badge>
                    </Button>
                    <Button variant="secondary">
                      Messages <Badge variant="light" className="ms-2">12</Badge>
                    </Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5>Status Indicators</h5>
                  <div className="d-flex flex-wrap gap-3 mt-2 align-items-center">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="fw-medium">System Status:</div>
                      <Badge variant="success">Operational</Badge>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="fw-medium">API Status:</div>
                      <Badge variant="warning">Degraded</Badge>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="fw-medium">Database:</div>
                      <Badge variant="destructive">Down</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5>Feature Labels</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <Badge variant="info">New</Badge>
                    <Badge variant="secondary">Beta</Badge>
                    <Badge variant="outline">Deprecated</Badge>
                    <Badge variant="warning">Experimental</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Badge</h3>
              <p className="mb-2">The Badge component displays a small label.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>variant</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "light" | "dark" | "themed"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>size</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "sm" | "lg"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>dismissible</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>onDismiss</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">() => void</code>
                    </div>
                    <div>Optional</div>
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

export default BadgePage;