import { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@/components/ui/Button/button';
import { DocsLayout } from '@/components/layouts/DocsLayout';
import { AspectRatio } from '@/components/ui/AspectRatio/aspectRatio';

const tableOfContents = [
  { title: 'Installation', href: '#installation' },
  { title: 'Usage', href: '#usage' },
  { title: 'Examples', href: '#examples' },
  { title: 'API Reference', href: '#api-reference' },
];

const AspectRatioPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aspect Ratio - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Aspect Ratio</h1>
            <p className="text-xl text-muted-foreground">
              Displays content within a desired ratio.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div style={{ maxWidth: '500px' }}>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/api/placeholder/800/450"
                  alt="Placeholder image"
                  className="rounded w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </AspectRatio>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">Installation</h2>
          <p>
            Install the component from your command line.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add aspect-ratio</code>
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
            Use the Aspect Ratio component to ensure content is displayed at the desired aspect ratio.
          </p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import { AspectRatio } from "@/components/ui/AspectRatio"

<div style={{ maxWidth: '500px' }}>
  <AspectRatio ratio={16 / 9}>
    <img
      src="/path/to/your-image.jpg"
      alt="Image description"
      className="rounded w-100 h-100"
      style={{ objectFit: 'cover' }}
    />
  </AspectRatio>
</div>`}</code>
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
              <h3 className="text-xl font-medium mb-4">Square (1:1)</h3>
              <p className="mb-4">Perfect for profile pictures and thumbnails.</p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: '300px' }}>
                  <AspectRatio ratio={1 / 1} className="aspect-ratio-bordered">
                    <img
                      src="/api/placeholder/300/300"
                      alt="Profile picture placeholder"
                      className="rounded w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Widescreen (21:9)</h3>
              <p className="mb-4">Cinematic format for video content.</p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: '700px' }}>
                  <AspectRatio ratio={21 / 9}>
                    <img
                      src="/api/placeholder/700/300"
                      alt="Cinematic landscape placeholder"
                      className="rounded w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Video Content</h3>
              <p className="mb-4">Embed videos with responsive aspect ratio.</p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: '500px' }}>
                  <AspectRatio ratio={16 / 9} className="aspect-ratio-bordered">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0 w-100 h-100"
                    ></iframe>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>

          <h2 id="api-reference" className="text-2xl font-bold mt-8">API Reference</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">AspectRatio</h3>
              <p className="mb-2">Displays content within a desired ratio.</p>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-muted font-medium">Props</div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                    <div>ratio</div>
                    <div className="col-span-2">
                      <code className="bg-muted px-1 py-0.5 rounded">number</code>
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

export default AspectRatioPage;