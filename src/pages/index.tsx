import type { NextPage } from 'next';
import Head from 'next/head';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/Button/button';

const Home: NextPage = () => {
  const { theme, mode, toggleMode } = useTheme();
  
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
        
        <div className="mb-4">
          <h2>Current Theme</h2>
          <p>Theme: <strong>{theme}</strong> | Mode: <strong>{mode}</strong></p>
          <Button variant="themed" onClick={toggleMode}>Toggle Dark/Light Mode</Button>
        </div>
        
        <div className="mb-5">
          <h2>Sample Button</h2>
          <Button onClick={() => alert('Button clicked!')}>
            Click Me!
          </Button>
        </div>
        
        <div className="mb-5">
          <h2>Sample Accordion</h2>
          <Accordion type="multiple">
            {accordionItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.header}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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