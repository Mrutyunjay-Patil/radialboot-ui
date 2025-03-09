import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'API Reference', href: '#api-reference' },
];

const AlertDialogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alert Dialog - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Alert Dialog</h1>
            <p className="text-xl text-muted-foreground">
              A modal dialog that interrupts the user with important content and expects a response.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <AlertDialog>
              <AlertDialogTrigger className="btn btn-primary">
                Open Alert Dialog
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add alert-dialog</code>
            </pre>
            <button className="absolute top-2 right-2 p-2 rounded-md text-muted-foreground hover:text-foreground">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <h2 id="usage" className="text-2xl font-bold mt-8">Usage</h2>
          <p>
            Use the Alert Dialog component to interrupt the user flow with important information that requires acknowledgment.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog"

<AlertDialog>
  <AlertDialogTrigger className="btn btn-primary">Open Alert</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}</code>
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
              <h3 className="text-xl font-medium mb-4">Button Variants</h3>
              <p className="mb-4">Use different button variants to match the action's purpose.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-primary">
                      Primary
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                        <AlertDialogDescription>
                          This demonstrates the primary button variant.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="primary">
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-danger">
                      Danger
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="danger">
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-success">
                      Success
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Success Action</AlertDialogTitle>
                        <AlertDialogDescription>
                          This demonstrates the success button variant.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="success">
                          Complete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Dialog Sizes</h3>
              <p className="mb-4">Choose different dialog sizes based on the amount of content.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-primary">
                      Small Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Small Dialog</AlertDialogTitle>
                        <AlertDialogDescription>
                          This is a small dialog for quick confirmations.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-primary">
                      Large Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent size="lg">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Large Dialog</AlertDialogTitle>
                        <AlertDialogDescription>
                          This is a large dialog for more complex content or forms.
                          It provides more space for detailed information and can support
                          longer text or additional elements.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Themed Styling</h3>
              <p className="mb-4">Use themed variants to automatically match your current theme.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-primary">
                      Themed Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent variant="themed">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Theme-Aware Dialog</AlertDialogTitle>
                        <AlertDialogDescription>
                          This dialog uses your current theme's colors for styling,
                          automatically adapting to light and dark modes.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="themed">Confirm with Theme</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-danger">
                      Dark Mode Optimized
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Dark Mode Enhanced</AlertDialogTitle>
                        <AlertDialogDescription>
                          This dialog has improved contrast in dark mode with subtle separators
                          and optimized colors for better visibility.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <div className="px-3">
                        <p className="text-sm mb-4">
                          Try switching to dark mode to see how this dialog adapts. In dark mode,
                          dialogs have:
                        </p>
                        <ul className="list-disc ps-4 text-sm">
                          <li>Improved contrast with subtle borders</li>
                          <li>Optimized shadow effects</li>
                          <li>Better text readability</li>
                          <li>Theme-specific color adjustments</li>
                        </ul>
                      </div>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                        <AlertDialogAction>Got It</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">With Icons</h3>
              <p className="mb-4">Add icons to titles for visual cues and better context.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex flex-wrap gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-danger">
                      Delete Warning
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle 
                          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                        >
                          Warning: Destructive Action
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. All associated data will be permanently removed.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="danger">Delete Permanently</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <AlertDialog>
                    <AlertDialogTrigger className="btn btn-outline-success">
                      Completion Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle 
                          icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                        >
                          Complete Your Subscription
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Confirm your subscription to start your free trial immediately.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Not Now</AlertDialogCancel>
                        <AlertDialogAction variant="success">Start Free Trial</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialog</h3>
              <p className="mb-2">The root component that wraps your alert dialog.</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogTrigger</h3>
              <p className="mb-2">The button that triggers the dialog to open.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>asChild</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogContent</h3>
              <p className="mb-2">Contains the content of your alert dialog.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>forceMount</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">boolean</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>size</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"sm" | "md" | "lg" | "xl" | "fullscreen"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>variant</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"default" | "bordered" | "elevated" | "themed"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>animation</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"fast" | "normal" | "slow"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogHeader</h3>
              <p className="mb-2">Contains the title and description of your alert dialog.</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogFooter</h3>
              <p className="mb-2">Contains the action buttons of your alert dialog.</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogTitle</h3>
              <p className="mb-2">The title of your alert dialog.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>icon</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">ReactNode</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogDescription</h3>
              <p className="mb-2">The description of your alert dialog.</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogAction</h3>
              <p className="mb-2">The confirm button for your alert dialog.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>variant</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">"primary" | "danger" | "success" | "secondary" | "warning" | "info" | "themed"</code>
                    </div>
                    <div>Optional</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDialogCancel</h3>
              <p className="mb-2">The cancel button for your alert dialog.</p>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default AlertDialogPage;