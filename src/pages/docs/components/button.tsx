// src/pages/docs/components/button.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import { Button } from '@/components/ui/Button/button';
import { 
  ChevronRight, 
  Mail, 
  Download, 
  Trash, 
  Github,
  ArrowRight,
  Plus,
  Check,
  X
} from 'lucide-react';
import { useState } from 'react';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'Variants', href: '#variants' },
  { title: 'Sizes', href: '#sizes' },
  { title: 'With Icons', href: '#with-icons' },
  { title: 'Icon Position', href: '#icon-position' },
  { title: 'Loading State', href: '#loading-state' },
  { title: 'Ripple Effect', href: '#ripple-effect' },
  { title: 'As Child', href: '#as-child' },
  { title: 'Themed', href: '#themed' },
  { title: 'Common Use Cases', href: '#common-use-cases' },
  { title: 'API Reference', href: '#api-reference' },
];

const ButtonPage: NextPage = () => {
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  
  const handleLoadingClick = (id: string) => {
    setLoading(prev => ({ ...prev, [id]: true }));
    
    // Simulate an async operation
    setTimeout(() => {
      setLoading(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };
  
  return (
    <>
      <Head>
        <title>Button - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Button</h1>
            <p className="text-xl text-muted-foreground">
              A versatile button component that allows users to take actions and make choices.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="d-flex flex-wrap gap-2">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add button</code>
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
            Use the Button component for clickable actions in forms, dialogs, and more.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { Button } from "@/components/ui/Button/button"

// Basic button
<Button>Click me</Button>

// Button variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="themed">Themed</Button>

// Button sizes
<Button size="default">Default Size</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>

// Button with icon
<Button>
  <Mail className="me-2" />
  Login with Email
</Button>

// Loading state
<Button isLoading>Processing</Button>

// Disabled state
<Button disabled>Unavailable</Button>`}</code>
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
              <p className="mb-4">Different button styles for various contexts and emphasis levels.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
            </div>

            <div id="sizes">
              <h3 className="text-xl font-medium mb-4">Sizes</h3>
              <p className="mb-4">Buttons come in different sizes to fit various layouts.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
            
            <div id="with-icons">
              <h3 className="text-xl font-medium mb-4">With Icons</h3>
              <p className="mb-4">Buttons can include icons for better visual cues.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button>
                    <Mail className="me-2" size={16} />
                    Email
                  </Button>
                  <Button variant="secondary">
                    <Download className="me-2" size={16} />
                    Download
                  </Button>
                  <Button variant="destructive">
                    <Trash className="me-2" size={16} />
                    Delete
                  </Button>
                  <Button variant="outline">
                    <Github className="me-2" size={16} />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="icon-position">
              <h3 className="text-xl font-medium mb-4">Icon Position</h3>
              <p className="mb-4">Place icons on either side of the button text.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button>
                    <ChevronRight className="me-2" size={16} />
                    Left Icon
                  </Button>
                  <Button iconPosition="right">
                    Right Icon
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="loading-state">
              <h3 className="text-xl font-medium mb-4">Loading State</h3>
              <p className="mb-4">Show a loading indicator while an action is being processed.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button 
                    isLoading={loading.button1} 
                    onClick={() => handleLoadingClick('button1')}
                  >
                    {loading.button1 ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button 
                    variant="secondary"
                    isLoading={loading.button2} 
                    onClick={() => handleLoadingClick('button2')}
                  >
                    {loading.button2 ? 'Submitting...' : 'Submit Form'}
                  </Button>
                  <Button 
                    variant="outline"
                    isLoading={loading.button3} 
                    onClick={() => handleLoadingClick('button3')}
                  >
                    {loading.button3 ? 'Loading...' : 'Load Data'}
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="ripple-effect">
              <h3 className="text-xl font-medium mb-4">Ripple Effect</h3>
              <p className="mb-4">Add a subtle ripple effect for tactile feedback.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button withRipple variant="default">
                    With Ripple Effect
                  </Button>
                  <Button withRipple variant="secondary">
                    Secondary with Ripple
                  </Button>
                  <Button withRipple variant="outline">
                    Outline with Ripple
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="as-child">
              <h3 className="text-xl font-medium mb-4">As Child</h3>
              <p className="mb-4">Use the button's styles with other elements.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>Link with Button Style</a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="themed">
              <h3 className="text-xl font-medium mb-4">Themed</h3>
              <p className="mb-4">Use theme-aware button styling that adapts to your current theme.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="themed">
                    Themed Button
                  </Button>
                  <Button variant="themed" size="sm">
                    Small Themed
                  </Button>
                  <Button variant="themed" size="lg">
                    Large Themed
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="combinations">
              <h3 className="text-xl font-medium mb-4">Feature Combinations</h3>
              <p className="mb-4">Combine different button features for complex interactions.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <Button 
                    variant="themed"
                    iconPosition="right"
                    withRipple
                  >
                    Next Step
                    <ArrowRight size={16} />
                  </Button>
                  
                  <Button 
                    variant="success"
                    isLoading={loading.comboButton} 
                    onClick={() => handleLoadingClick('comboButton')}
                    iconPosition="left"
                  >
                    {loading.comboButton ? 'Saving...' : (
                      <>
                        <Check size={16} />
                        Confirm
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="destructive"
                    withRipple
                    size="lg"
                  >
                    <Trash size={16} />
                    Delete Permanently
                  </Button>
                </div>
              </div>
            </div>
            
            <div id="common-use-cases">
              <h3 className="text-xl font-medium mb-4">Common Use Cases</h3>
              <p className="mb-4">Examples of buttons in typical application scenarios.</p>
              <div className="p-6 border rounded-lg">
                <div className="mb-4">
                  <h5>Form Actions</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <Button variant="primary">Submit</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5>Dialog Buttons</h5>
                  <div className="p-4 border rounded">
                    <h6>Confirm Deletion</h6>
                    <p className="mb-3">Are you sure you want to delete this item? This action cannot be undone.</p>
                    <div className="d-flex gap-2 justify-content-end">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5>Action Buttons</h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <Button size="sm" variant="ghost">
                      <Plus size={16} />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <X size={16} />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Mail size={18} />
                    </Button>
                    <Button variant="link">View Details</Button>
                    <Button variant="secondary" iconPosition="right">
                      View All
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Button</h3>
              <p className="mb-2">The Button component for user actions and navigation.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>variant</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "themed"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>size</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "sm" | "lg" | "icon"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>asChild</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>iconPosition</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"left" | "right"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>isLoading</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>withRipple</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">buttonVariants</h3>
              <p className="mb-2">A function to generate button class names.</p>
              <div className="my-4 relative">
                <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                  <code>{`// Example usage
import { buttonVariants } from "@/components/ui/Button/button"

<a 
  href="/dashboard" 
  className={buttonVariants({ variant: "outline", size: "lg" })}
>
  Go to Dashboard
</a>`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 border rounded-lg bg-muted">
            <h3 className="text-xl font-medium mb-4">Accessibility Considerations</h3>
            <ul className="space-y-2">
              <li>
                <strong>Use semantic markup</strong> - The <code>asChild</code> prop allows you to maintain proper semantics while using Button styles.
              </li>
              <li>
                <strong>Provide text alternatives</strong> - Always include descriptive text for icon-only buttons or use aria-label.
              </li>
              <li>
                <strong>State indication</strong> - Loading states and disabled states are visually distinct and properly set aria attributes.
              </li>
              <li>
                <strong>Color contrast</strong> - All button variants maintain WCAG AA compliance for color contrast.
              </li>
              <li>
                <strong>Focus management</strong> - Buttons have clear focus states for keyboard navigation.
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-medium mb-4">Design Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Do</h4>
                <ul className="space-y-2">
                  <li>Use a primary button for the main action</li>
                  <li>Keep button text concise and action-oriented</li>
                  <li>Use appropriate variants based on importance</li>
                  <li>Include icons that enhance the button's meaning</li>
                  <li>Use loading states for async operations</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Don't</h4>
                <ul className="space-y-2">
                  <li>Use multiple primary buttons in the same section</li>
                  <li>Write lengthy text in buttons</li>
                  <li>Use destructive variants for non-destructive actions</li>
                  <li>Add unnecessary icons that don't convey meaning</li>
                  <li>Disable buttons without explaining why</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default ButtonPage;