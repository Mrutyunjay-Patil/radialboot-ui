// src/pages/docs/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { DocsLayout } from '@/components/layouts/DocsLayout';

const tableOfContents = [
  { title: 'Open Code', href: '#open-code' },
  { title: 'Composition', href: '#composition' },
  { title: 'Distribution', href: '#distribution' },
  { title: 'Beautiful Defaults', href: '#beautiful-defaults' },
  { title: 'AI-Ready', href: '#ai-ready' },
];

const IntroductionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Introduction - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Introduction</h1>
            <p className="text-xl text-muted-foreground">
              radialboot/ui is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code.
            </p>
          </div>

          <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md">
            <p className="font-medium">This is not a component library. It is how you build your component library.</p>
          </div>

          <p>
            You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.
          </p>

          <p>
            This approach works well until you need to customize a component to fit your design system or require one that isn&apos;t included in the library. 
            <strong> Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.</strong>
          </p>

          <p>
            This is what radialboot/ui aims to solve. It is built around the following principles:
          </p>

          <div className="space-y-6">
            <div id="open-code">
              <h3 className="text-xl font-bold">Open Code</h3>
              <p>The top layer of your component code is open for modification.</p>
            </div>

            <div id="composition">
              <h3 className="text-xl font-bold">Composition</h3>
              <p>Every component uses a common, composable interface, making them predictable.</p>
            </div>

            <div id="distribution">
              <h3 className="text-xl font-bold">Distribution</h3>
              <p>A flat-file schema and command-line tool make it easy to distribute components.</p>
            </div>

            <div id="beautiful-defaults">
              <h3 className="text-xl font-bold">Beautiful Defaults</h3>
              <p>Carefully chosen default styles, so you get great design out-of-the-box.</p>
            </div>

            <div id="ai-ready">
              <h3 className="text-xl font-bold">AI-Ready</h3>
              <p>Open code for LLMs to read, understand, and improve.</p>
            </div>
          </div>

          <h2 id="open-code" className="text-2xl font-bold mt-8">Open Code</h2>
          <p>
            radialboot/ui hands you the actual component code. You have full control to customize and extend the components to your needs. This means:
          </p>
          {/* Add more content as needed */}
        </div>
      </DocsLayout>
    </>
  );
};

export default IntroductionPage;