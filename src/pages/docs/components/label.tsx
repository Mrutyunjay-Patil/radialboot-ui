// src/pages/docs/components/label.tsx
import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { 
  LabelDemo, 
  LabelWithInput,
  RequiredLabel,
  DisabledLabel
} from "@/examples/LabelExample";
import { Label } from "@/components/ui/Label";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Label", href: "/docs/components/label", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "With Checkbox", href: "#with-checkbox" },
  { title: "With Input", href: "#with-input" },
  { title: "Required Fields", href: "#required-fields" },
  { title: "Disabled State", href: "#disabled-state" },
  { title: "API Reference", href: "#api-reference" },
];

const LabelPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-label`;

  const usageCode = `import { Label } from "@/components/ui/Label"

export function MyComponent() {
  return <Label htmlFor="email">Your email address</Label>
}`;

  const withCheckboxCode = `import { Label } from "@/components/ui/Label"

export function LabelDemo() {
  return (
    <div>
      <div className="mb-3">
        <Label htmlFor="terms" className="d-flex align-items-center gap-2">
          <input type="checkbox" className="form-check-input" id="terms" />
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}`;

  const withInputCode = `import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"

export function LabelWithInput() {
  return (
    <div className="mb-3">
      <Label htmlFor="email">Your email address</Label>
      <Input type="email" id="email" placeholder="example@example.com" />
    </div>
  )
}`;

  const requiredLabelCode = `import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"

export function RequiredLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="name" className="required">Full name</Label>
      <Input type="text" id="name" required />
    </div>
  )
}`;

  const disabledLabelCode = `import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"

export function DisabledLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="disabled-input" className="peer-disabled">Disabled field</Label>
      <Input type="text" id="disabled-input" disabled />
    </div>
  )
}`;

  // Props for the API reference
  const labelProps = [
    {
      name: "htmlFor",
      type: "string",
      description: "The ID of the element the label is associated with",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the label",
    },
    {
      name: "required",
      type: "string",
      description: "Add this class to show a required indicator (*) after the label text",
    },
  ];

  return (
    <>
      <Head>
        <title>Label - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Label"
        description="Renders an accessible label associated with controls."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Label"
      >
        {/* Installation */}
        <section id="installation" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="mb-4">
            Install the required dependencies:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{installCode}</code>
            </pre>
          </div>

          <p className="mb-4">
            Also, ensure you've imported the label styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/label.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Label component is a wrapper around the HTML label element with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <Label htmlFor="demo">Your email address</Label>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="with-checkbox" className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Checkbox</h3>
            <p className="mb-4">
              A label can be used with checkboxes for improved accessibility and user experience.
            </p>
            <ComponentPreview
              code={{ jsx: withCheckboxCode }}
              title="Label with Checkbox"
            >
              <div className="p-4 border rounded">
                <LabelDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="with-input" className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Input</h3>
            <p className="mb-4">
              Labels are commonly used with input fields to describe what information is expected.
            </p>
            <ComponentPreview
              code={{ jsx: withInputCode }}
              title="Label with Input"
            >
              <div className="p-4 border rounded">
                <LabelWithInput />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="required-fields" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Required Fields</h3>
            <p className="mb-4">
              Add the `required` class to show an asterisk (*) after the label text, indicating that the field is required.
            </p>
            <ComponentPreview
              code={{ jsx: requiredLabelCode }}
              title="Required Label"
            >
              <div className="p-4 border rounded">
                <RequiredLabel />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="disabled-state" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Disabled State</h3>
            <p className="mb-4">
              When associated with a disabled form control, the label will automatically appear disabled.
            </p>
            <ComponentPreview
              code={{ jsx: disabledLabelCode }}
              title="Disabled Label"
            >
              <div className="p-4 border rounded">
                <DisabledLabel />
              </div>
            </ComponentPreview>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="mb-4">
            The Label component accepts all standard HTML label attributes along with the following:
          </p>

          <PropsTable componentName="Label" props={labelProps} />

          <p className="mt-4">
            Since the Label component extends the HTML label element, all standard label properties
            (e.g., htmlFor, form, etc.) are also supported.
          </p>
        </section>

        <Pagination
          prev={{
            title: "Input",
            href: "/docs/components/input",
          }}
          next={{
            title: "Checkbox",
            href: "/docs/components/checkbox",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default LabelPage;