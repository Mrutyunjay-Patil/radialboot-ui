// src/pages/docs/components/input.tsx
import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Callout } from "@/components/docs/Callout";
import { 
  InputDemo, 
  InputWithLabel, 
  InputDisabled,
  InputFile,
  InputWithButton,
  InputForm,
  InputSizes
} from "@/examples/InputExample";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Input", href: "/docs/components/input", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Default", href: "#default" },
  { title: "With Label", href: "#with-label" },
  { title: "File Input", href: "#file-input" },
  { title: "Disabled", href: "#disabled" },
  { title: "With Button", href: "#with-button" },
  { title: "Form Integration", href: "#form-integration" },
  { title: "Input Sizes", href: "#input-sizes" },
  { title: "API Reference", href: "#api-reference" },
];

const InputPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-slot`;

  const usageCode = `import { Input } from "@/components/ui/Input"

export function MyComponent() {
  return <Input type="email" placeholder="Email" />
}`;

  const defaultInputCode = `import { Input } from "@/components/ui/Input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`;

  const withLabelCode = `import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"

export function InputWithLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`;

  const fileInputCode = `import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"

export function InputFile() {
  return (
    <div className="mb-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}`;

  const disabledInputCode = `import { Input } from "@/components/ui/Input"

export function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" />
}`;

  const inputWithButtonCode = `import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button/button"

export function InputWithButton() {
  return (
    <div className="d-flex">
      <Input type="email" placeholder="Email" className="me-2" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}`;

  const inputSizesCode = `import { Input } from "@/components/ui/Input"

export function InputSizes() {
  return (
    <div className="d-flex flex-column gap-3">
      <Input className="form-control-sm" placeholder="Small Input" />
      <Input placeholder="Default Input" />
      <Input className="form-control-lg" placeholder="Large Input" />
    </div>
  )
}`;

  const formCode = `"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-100">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4">
          <Button type="submit" variant="themed">Submit</Button>
        </div>
      </form>
    </Form>
  )
}`;

  // Props for the API reference
  const inputProps = [
    {
      name: "type",
      type: "string",
      defaultValue: "text",
      description: "The type of the input field (e.g., text, email, password, file, etc.)",
    },
    {
      name: "className",
      type: "string",
      description: "Additional CSS classes to apply to the input",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents the user from interacting with the input",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text that appears in the input when it has no value",
    },
  ];

  return (
    <>
      <Head>
        <title>Input - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Input"
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
            Also, ensure you've imported the input styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/input.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Input component is a wrapper around the HTML input element with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <InputDemo />
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="default" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <p className="mb-4">
              A basic input field with placeholder text.
            </p>
            <ComponentPreview
              code={{ jsx: defaultInputCode }}
              title="Default Input"
            >
              <div className="p-4 border rounded">
                <InputDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="with-label" className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Label</h3>
            <p className="mb-4">
              An input field with an associated label for better accessibility.
            </p>
            <ComponentPreview
              code={{ jsx: withLabelCode }}
              title="Input with Label"
            >
              <div className="p-4 border rounded">
                <InputWithLabel />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="file-input" className="mb-8">
            <h3 className="text-xl font-medium mb-4">File Input</h3>
            <p className="mb-4">
              A file input for uploading files.
            </p>
            <ComponentPreview
              code={{ jsx: fileInputCode }}
              title="File Input"
            >
              <div className="p-4 border rounded">
                <InputFile />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="disabled" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Disabled</h3>
            <p className="mb-4">
              A disabled input field.
            </p>
            <ComponentPreview
              code={{ jsx: disabledInputCode }}
              title="Disabled Input"
            >
              <div className="p-4 border rounded">
                <InputDisabled />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="with-button" className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Button</h3>
            <p className="mb-4">
              An input field with an adjacent button, useful for search forms, newsletter signups, etc.
            </p>
            <ComponentPreview
              code={{ jsx: inputWithButtonCode }}
              title="Input with Button"
            >
              <div className="p-4 border rounded">
                <InputWithButton />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="input-sizes" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Input Sizes</h3>
            <p className="mb-4">
              Input fields come in different sizes to suit various design needs.
            </p>
            <ComponentPreview
              code={{ jsx: inputSizesCode }}
              title="Input Sizes"
            >
              <div className="p-4 border rounded">
                <InputSizes />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="form-integration" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Form Integration</h3>
            <p className="mb-4">
              The Input component integrates seamlessly with React Hook Form and Zod for validation.
            </p>
            <ComponentPreview
              code={{ jsx: formCode }}
              title="Form Integration"
            >
              <div className="p-4 border rounded">
                <InputForm />
              </div>
            </ComponentPreview>

            <Callout type="info" title="Validation">
              This example uses React Hook Form with Zod for form validation. For more comprehensive form examples,
              see the <a href="/docs/components/form" className="text-primary">Form</a> documentation.
            </Callout>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="mb-4">
            The Input component accepts all standard HTML input attributes along with the following props:
          </p>

          <PropsTable componentName="Input" props={inputProps} />

          <p className="mt-4">
            Since the Input component extends the HTML input element, all standard input properties
            (e.g., id, name, min, max, step, required, etc.) are also supported.
          </p>
        </section>

        <Pagination
          prev={{
            title: "Form",
            href: "/docs/components/form",
          }}
          next={{
            title: "Select",
            href: "/docs/components/select",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default InputPage;