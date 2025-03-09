// src/pages/docs/components/steps.tsx
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Steps, Step } from "@/components/ui/Steps";
import { Callout } from "@/components/docs/Callout";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Steps", href: "/docs/components/steps", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Numbered Steps", href: "#numbered-steps" },
  { title: "Bullet Steps", href: "#bullet-steps" },
  { title: "Accordion Style", href: "#accordion-style" },
  { title: "All Expanded", href: "#all-expanded" },
  { title: "Advanced Content", href: "#advanced-content" },
  { title: "API Reference", href: "#api-reference" },
];

const StepsPage: NextPage = () => {
  const [accordionActiveStep, setAccordionActiveStep] = useState(0);

  // Example code snippets
  const installCode = `npm install`;

  const basicUsageCode = `import { Steps, Step } from "@/components/ui/Steps"

export function StepsExample() {
  return (
    <Steps>
      <Step
        title="Step 1"
        content="This is the content for step 1."
      />
      <Step
        title="Step 2"
        content="This is the content for step 2."
      />
      <Step
        title="Step 3"
        content="This is the content for step 3."
      />
    </Steps>
  )
}`;

  const numberedStepsCode = `import { Steps, Step } from "@/components/ui/Steps"

export function NumberedStepsExample() {
  return (
    <Steps variant="numbered">
      <Step
        title="Install dependencies"
        content={
          <div>
            <p>Install the required dependencies for your project:</p>
            <pre><code>npm install @radix-ui/react-tabs</code></pre>
          </div>
        }
      />
      <Step
        title="Copy and paste the code"
        content={
          <div>
            <p>Copy and paste the following code into your project.</p>
          </div>
        }
      />
      <Step
        title="Update import paths"
        content={
          <div>
            <p>Update the import paths to match your project setup.</p>
          </div>
        }
      />
    </Steps>
  )
}`;

  const bulletStepsCode = `import { Steps, Step } from "@/components/ui/Steps"

export function BulletStepsExample() {
  return (
    <Steps variant="bullets">
      <Step
        title="Plan your project"
        content="Define requirements and create a project plan"
        completed
      />
      <Step
        title="Set up development environment"
        content="Install required tools and configure your environment"
        completed
      />
      <Step
        title="Develop features"
        content="Implement the core features of your application"
        active
      />
      <Step
        title="Test and deploy"
        content="Test thoroughly and deploy to production"
      />
    </Steps>
  )
}`;

  const accordionStepsCode = `import { useState } from "react"
import { Steps, Step } from "@/components/ui/Steps"

export function AccordionStepsExample() {
  const [activeStep, setActiveStep] = useState(0)
  
  return (
    <Steps
      activeStep={activeStep}
      onStepChange={setActiveStep}
      expandAll={false}
    >
      <Step
        title="Step 1"
        content="Content for step 1"
      />
      <Step
        title="Step 2"
        content="Content for step 2"
      />
      <Step
        title="Step 3"
        content="Content for step 3"
      />
    </Steps>
  )
}`;

  const expandedStepsCode = `import { Steps, Step } from "@/components/ui/Steps"

export function ExpandedStepsExample() {
  return (
    <Steps expandAll>
      <Step
        title="Step 1"
        content="Content for step 1"
        completed
      />
      <Step
        title="Step 2"
        content="Content for step 2"
        active
      />
      <Step
        title="Step 3"
        content="Content for step 3"
      />
    </Steps>
  )
}`;

  const advancedContentCode = `import { Steps, Step } from "@/components/ui/Steps"

export function AdvancedContentExample() {
  return (
    <Steps activeStep={1}>
      <Step
        title="Select options"
        content={
          <div>
            <p>Choose from the available options:</p>
            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-primary">Option 1</button>
              <button className="btn btn-secondary">Option 2</button>
              <button className="btn btn-secondary">Option 3</button>
            </div>
          </div>
        }
        completed
      />
      <Step
        title="Fill in the form"
        content={
          <div>
            <p>Please provide the following information:</p>
            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        }
      />
      <Step
        title="Confirm details"
        content="Review and confirm your details before proceeding."
      />
    </Steps>
  )
}`;

  // Props for the API reference
  const stepsProps = [
    {
      name: "activeStep",
      type: "number",
      defaultValue: "0",
      description: "The active step index (0-based) - used in accordion mode",
    },
    {
      name: "expandAll",
      type: "boolean",
      defaultValue: "false",
      description: "Whether to expand all steps by default",
    },
    {
      name: "variant",
      type: '"numbered" | "bullets"',
      defaultValue: '"numbered"',
      description: "The visual variant of the steps",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS class name for styling",
    },
    {
      name: "onStepChange",
      type: "(index: number) => void",
      description: "Callback function when step changes in accordion mode",
    },
  ];

  const stepProps = [
    {
      name: "title",
      type: "React.ReactNode",
      description: "The title of the step",
    },
    {
      name: "content",
      type: "React.ReactNode",
      description: "The content of the step (optional)",
    },
    {
      name: "completed",
      type: "boolean",
      defaultValue: "false",
      description: "Whether the step is completed",
    },
    {
      name: "active",
      type: "boolean",
      description: "Whether the step is currently active",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS class name for styling",
    },
  ];

  return (
    <>
      <Head>
        <title>Steps - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Steps"
        description="A component for displaying a sequence of steps with expandable content."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Steps"
      >
        {/* Installation */}
        <section id="installation" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="mb-4">
            The Steps component is included in RadialBoot UI and requires no additional dependencies.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{installCode}</code>
            </pre>
          </div>

          <p className="mb-4">
            Also, ensure you've imported the steps styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx or your CSS importer
import "../styles/components/steps.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Steps component consists of a parent <code>Steps</code> component and child <code>Step</code> components.
            Each step can have a title and optional content.
          </p>

          <ComponentPreview
            code={{ jsx: basicUsageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <Steps>
                <Step
                  title="Step 1"
                  content="This is the content for step 1."
                />
                <Step
                  title="Step 2"
                  content="This is the content for step 2."
                />
                <Step
                  title="Step 3"
                  content="This is the content for step 3."
                />
              </Steps>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="numbered-steps" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Numbered Steps</h3>
            <p className="mb-4">
              The default variant displays numbered steps with circles.
            </p>
            <ComponentPreview
              code={{ jsx: numberedStepsCode }}
              title="Numbered Steps"
            >
              <div className="p-4 border rounded">
                <Steps>
                  <Step
                    title="Install dependencies"
                    content={
                      <div>
                        <p>Install the required dependencies for your project:</p>
                        <pre className="bg-light p-2 mt-2 rounded"><code>npm install @radix-ui/react-tabs</code></pre>
                      </div>
                    }
                  />
                  <Step
                    title="Copy and paste the code"
                    content={
                      <div>
                        <p>Copy and paste the following code into your project.</p>
                      </div>
                    }
                  />
                  <Step
                    title="Update import paths"
                    content={
                      <div>
                        <p>Update the import paths to match your project setup.</p>
                      </div>
                    }
                  />
                </Steps>
              </div>
            </ComponentPreview>
          </div>
          
          <div id="bullet-steps" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Bullet Steps</h3>
            <p className="mb-4">
              You can use bullet points instead of numbers.
            </p>
            <ComponentPreview
              code={{ jsx: bulletStepsCode }}
              title="Bullet Steps"
            >
              <div className="p-4 border rounded">
                <Steps variant="bullets">
                  <Step
                    title="Plan your project"
                    content="Define requirements and create a project plan"
                    completed
                  />
                  <Step
                    title="Set up development environment"
                    content="Install required tools and configure your environment"
                    completed
                  />
                  <Step
                    title="Develop features"
                    content="Implement the core features of your application"
                    active
                  />
                  <Step
                    title="Test and deploy"
                    content="Test thoroughly and deploy to production"
                  />
                </Steps>
              </div>
            </ComponentPreview>
          </div>
          
          <div id="accordion-style" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Accordion Style</h3>
            <p className="mb-4">
              Only the active step is expanded, and users can click to navigate between steps.
            </p>
            <ComponentPreview
              code={{ jsx: accordionStepsCode }}
              title="Accordion Style"
            >
              <div className="p-4 border rounded">
                <Steps
                  activeStep={accordionActiveStep}
                  onStepChange={setAccordionActiveStep}
                >
                  <Step
                    title="Step 1"
                    content="This is the content for step 1. Click on other steps to navigate."
                  />
                  <Step
                    title="Step 2"
                    content="This is the content for step 2. This step is expanded when active."
                  />
                  <Step
                    title="Step 3"
                    content="This is the content for step 3. The active step's circle has the theme color."
                  />
                </Steps>
              </div>
            </ComponentPreview>
          </div>
          
          <div id="all-expanded" className="mb-8">
            <h3 className="text-xl font-medium mb-4">All Expanded</h3>
            <p className="mb-4">
              All steps can be expanded by default.
            </p>
            <ComponentPreview
              code={{ jsx: expandedStepsCode }}
              title="All Expanded"
            >
              <div className="p-4 border rounded">
                <Steps expandAll>
                  <Step
                    title="Step 1"
                    content="This is the content for step 1."
                    completed
                  />
                  <Step
                    title="Step 2"
                    content="This is the content for step 2."
                    active
                  />
                  <Step
                    title="Step 3"
                    content="This is the content for step 3."
                  />
                </Steps>
              </div>
            </ComponentPreview>
          </div>
          
          <div id="advanced-content" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Advanced Content</h3>
            <p className="mb-4">
              Steps can contain complex content including forms, buttons, and other components.
            </p>
            <ComponentPreview
              code={{ jsx: advancedContentCode }}
              title="Advanced Content Example"
            >
              <div className="p-4 border rounded">
                <Steps activeStep={1}>
                  <Step
                    title="Select options"
                    content={
                      <div>
                        <p>Choose from the available options:</p>
                        <div className="d-flex gap-3 mt-3">
                          <button className="btn btn-primary">Option 1</button>
                          <button className="btn btn-secondary">Option 2</button>
                          <button className="btn btn-secondary">Option 3</button>
                        </div>
                      </div>
                    }
                    completed
                  />
                  <Step
                    title="Fill in the form"
                    content={
                      <div>
                        <p>Please provide the following information:</p>
                        <form className="mt-3">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                              type="text" 
                              className="form-control"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                              type="email" 
                              className="form-control"
                              placeholder="Enter your email"
                            />
                          </div>
                          <button type="button" className="btn btn-success">
                            Submit
                          </button>
                        </form>
                      </div>
                    }
                  />
                  <Step
                    title="Confirm details"
                    content="Review and confirm your details before proceeding."
                  />
                </Steps>
              </div>
            </ComponentPreview>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Steps</h3>
            <p className="mb-4">
              The container component for all steps.
            </p>
            <PropsTable componentName="Steps" props={stepsProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Step</h3>
            <p className="mb-4">
              The individual step component.
            </p>
            <PropsTable componentName="Step" props={stepProps} />
          </div>

          <Callout type="info" title="Usage Notes">
            <ul className="list-disc pl-5 mb-0">
              <li>When <code>expandAll</code> is <code>true</code>, all steps are expanded and the indicators use a default color.</li>
              <li>When <code>expandAll</code> is <code>false</code> (accordion mode), only the active step is expanded and its indicator uses the theme color.</li>
              <li>The <code>active</code> and <code>completed</code> props can be used to control the visual state of each step.</li>
              <li>The <code>content</code> prop is optional - you can have steps without content.</li>
            </ul>
          </Callout>
        </section>

        <Pagination
          prev={{
            title: "Select",
            href: "/docs/components/select",
          }}
          next={{
            title: "Tabs",
            href: "/docs/components/tabs",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default StepsPage;