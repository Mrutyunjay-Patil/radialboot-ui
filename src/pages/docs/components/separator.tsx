import { NextPage } from "next";
import Head from "next/head";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/Button/button";

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Horizontal Separator", href: "#horizontal-separator" },
  { title: "Vertical Separator", href: "#vertical-separator" },
  { title: "Navigation Example", href: "#navigation-example" },
  { title: "Styled Separators", href: "#styled-separators" },
  { title: "API Reference", href: "#api-reference" },
];

const SeparatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Separator - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Separator</h1>
            <p className="text-xl text-muted-foreground">
              Visually or semantically separates content.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">
                  An open-source UI component library.
                </p>
              </div>
              <Separator className="my-4"/>
              <div className="d-flex align-items-center text-sm" style={{ height: "30px" }}>
                <div>Blog</div>
                <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                <div>Docs</div>
                <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                <div>Source</div>
              </div>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add separator</code>
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

          <p className="mb-4">Install the following dependencies:</p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npm install @radix-ui/react-separator</code>
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
            Use the Separator component to create a visual or semantic separation between sections of content.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { Separator } from "@/components/ui/Separator"

// Horizontal separator (default)
<Separator />

// Vertical separator
<Separator orientation="vertical" />

// With custom margin
<Separator className="my-4" />`}</code>
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
            <div id="horizontal-separator">
              <h3 className="text-xl font-medium mb-4">Horizontal Separator</h3>
              <p className="mb-4">A simple horizontal separator with custom margin.</p>
              <div className="p-6 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Section Title</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the content for section one.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Another Section</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the content for section two.
                  </p>
                </div>
              </div>
            </div>

            <div id="vertical-separator">
              <h3 className="text-xl font-medium mb-4">Vertical Separator</h3>
              <p className="mb-4">Use a vertical separator to create columns or separate inline elements.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex align-items-center text-sm" style={{ height: "30px" }}>
                  <div>Profile</div>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <div>Settings</div>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <div>Messages</div>
                </div>
              </div>
            </div>
            
            <div id="navigation-example">
              <h3 className="text-xl font-medium mb-4">Navigation Example</h3>
              <p className="mb-4">Using separators in navigation interfaces.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex align-items-center text-sm" style={{ height: "30px" }}>
                  <a href="#" className="text-primary">Home</a>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <a href="#" className="text-muted-foreground">Products</a>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <a href="#" className="text-muted-foreground">Services</a>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <a href="#" className="text-muted-foreground">About</a>
                  <Separator orientation="vertical" style={{ height: "20px", margin: "0 12px" }} />
                  <a href="#" className="text-muted-foreground">Contact</a>
                </div>
              </div>
            </div>

            <div id="styled-separators">
              <h3 className="text-xl font-medium mb-4">Styled Separators</h3>
              <p className="mb-4">Different styles of separators for various design needs.</p>
              <div className="p-6 border rounded-lg">
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium">Default Separator</p>
                    <Separator />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Dashed Separator</p>
                    <Separator variant="dashed" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Thick Separator</p>
                    <Separator variant="thick" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Thin Separator</p>
                    <Separator variant="thin" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Themed Separator</p>
                    <Separator variant="themed" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Gradient Separator</p>
                    <Separator className="separator-gradient" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Section Separator</p>
                    <Separator className="separator-section" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Accent Separator</p>
                    <Separator className="separator-accent" />
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">With Spacing Utilities</p>
                    <Separator className="separator-sm" />
                    <p className="text-xs text-muted-foreground mt-1">Small (0.25rem)</p>
                    
                    <Separator className="separator-md mt-3" />
                    <p className="text-xs text-muted-foreground mt-1">Medium (0.5rem)</p>
                    
                    <Separator className="separator-lg mt-3" />
                    <p className="text-xs text-muted-foreground mt-1">Large (1rem)</p>
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-medium">Animated Separator</p>
                    <Separator className="separator-animated" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Separator</h3>
              <p className="mb-2">The Separator component visually or semantically separates content.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>orientation</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"horizontal" | "vertical"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>variant</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "dashed" | "thick" | "thin" | "themed"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>decorative</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>className</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">string</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">CSS Classes</h3>
              <p className="mb-2">The Separator component supports these additional CSS classes for styling:</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">CSS Classes</div>
                <div className="p-4">
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Class</th>
                        <th className="text-left pb-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-dashed</code></td>
                        <td>Creates a dashed separator</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-thick</code></td>
                        <td>Creates a thicker separator (2px)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-thin</code></td>
                        <td>Creates a thinner separator (0.5px)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-themed</code></td>
                        <td>Uses the primary theme color</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-gradient</code></td>
                        <td>Creates a gradient effect (fades at edges)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-section</code></td>
                        <td>Creates a prominent section divider</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-accent</code></td>
                        <td>Uses accent color from current theme</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-sm</code></td>
                        <td>Small margin (0.25rem)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-md</code></td>
                        <td>Medium margin (0.5rem)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-lg</code></td>
                        <td>Large margin (1rem)</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-2"><code className="bg-muted px-1 py-0.5 rounded">separator-animated</code></td>
                        <td>Adds an entrance animation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default SeparatorPage;