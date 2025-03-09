import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button/button';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'API Reference', href: '#api-reference' },
];

const AvatarPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avatar - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Avatar</h1>
            <p className="text-xl text-muted-foreground">
              An image element with a fallback for representing the user.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="d-flex align-items-center gap-4">
              <Avatar>
                <AvatarImage src="/api/placeholder/40/40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/invalid-image.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add avatar</code>
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
            Use the Avatar component to represent a user with an image and a text fallback.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

<Avatar>
  <AvatarImage src="/path/to/image.jpg" alt="User name" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}</code>
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
            <div>
              <h3 className="text-xl font-medium mb-4">Sizes</h3>
              <p className="mb-4">Different sizes to match your design requirements.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex align-items-center gap-4">
                  <Avatar className="avatar-sm">
                    <AvatarFallback>XS</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar className="avatar-lg">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <Avatar className="avatar-xl">
                    <AvatarFallback>XL</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Status Indicator</h3>
              <p className="mb-4">Add status indicators to show user state.</p>
              <div className="p-6 border rounded-lg">
                <div className="d-flex align-items-center gap-4">
                  <div className="position-relative">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="avatar-status avatar-status-online"></span>
                  </div>
                  <div className="position-relative">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" alt="User" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <span className="avatar-status avatar-status-busy"></span>
                  </div>
                  <div className="position-relative">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" alt="User" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <span className="avatar-status avatar-status-away"></span>
                  </div>
                  <div className="position-relative">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" alt="User" />
                      <AvatarFallback>WL</AvatarFallback>
                    </Avatar>
                    <span className="avatar-status avatar-status-offline"></span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Avatar Group</h3>
              <p className="mb-4">Group avatars together to represent a team or group.</p>
              <div className="p-6 border rounded-lg">
                <div className="avatar-group">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" alt="User 1" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" alt="User 2" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" alt="User 3" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>+3</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Avatar</h3>
              <p className="mb-2">The root component for displaying an avatar.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
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
              <h3 className="text-xl font-medium mb-2">AvatarImage</h3>
              <p className="mb-2">The image component for displaying a user image.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>src</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">string</code>
                    </div>
                    <div>Required</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                    <div>alt</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">string</code>
                    </div>
                    <div>Required</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AvatarFallback</h3>
              <p className="mb-2">The fallback element displayed when the image fails to load.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>delayMs</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">number</code>
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

export default AvatarPage;