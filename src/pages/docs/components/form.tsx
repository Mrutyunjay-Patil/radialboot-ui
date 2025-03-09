// src/pages/docs/components/form.tsx
import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { Callout } from "@/components/docs/Callout";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { ProfileForm } from "@/examples/ProfileForm";

// IMPORTANT: Do not use dynamic values in breadcrumbs to avoid hydration issues
const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Form", href: "/docs/components/form", current: true },
];

const tableOfContents = [
  { title: "Introduction", href: "#introduction" },
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Form Schema", href: "#form-schema" },
  { title: "Form Fields", href: "#form-fields" },
  { title: "Validation", href: "#validation" },
  { title: "Examples", href: "#examples" },
  { title: "Basic Form", href: "#basic-form" },
  { title: "API Reference", href: "#api-reference" },
];

const FormPage: NextPage = () => {
  // Example code snippets
  const installCode = `npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod`;

  const schemaCode = `import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
})`;

  const usageCode = `"use client"

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

// Define your form schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

// Create your form component
export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input className="form-control themed-input" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="themed" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  )
}`;

  // Props for the API reference
  const formFieldProps = [
    {
      name: "name",
      type: "string",
      description: "The name of the form field.",
    },
    {
      name: "control",
      type: "Control<TFieldValues>",
      description: "The form control instance from react-hook-form.",
    },
    {
      name: "render",
      type: "({ field, fieldState, formState }) => React.ReactElement",
      description: "A render function for your form field.",
    },
  ];

  return (
    <>
      <Head>
        <title>Form - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Form"
        description="Building accessible forms with React Hook Form and Zod validation."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Form"
      >
        {/* Introduction */}
        <section id="introduction" className="mb-10">
          <p className="lead">
            Forms are one of the most common elements in web applications, but also one of the most complex.
            RadialBoot UI provides a set of form components that help you build accessible, 
            validatable forms with React Hook Form and Zod.
          </p>

          <Callout type="info" title="Features">
            <ul className="list-disc ps-4 mb-0">
              <li>Composable form components</li>
              <li>Client-side validation with Zod</li>
              <li>Accessible form controls with proper ARIA attributes</li>
              <li>Support for all Bootstrap form controls</li>
              <li>Theming support with dark/light mode compatibility</li>
            </ul>
          </Callout>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="mb-4">
            To use the Form component, you'll need to install the following dependencies:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{installCode}</code>
            </pre>
          </div>

          <p className="mb-4">
            Also, ensure you've imported the form styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/form.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The form components are built on top of React Hook Form and use Zod for form validation.
            Here's a basic example:
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Form Example"
          >
            <div className="p-4 border rounded">
              <form className="mb-0">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input className="form-control themed-input" placeholder="shadcn" />
                  <div className="form-text">This is your public display name.</div>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </ComponentPreview>
        </section>

        {/* Form Schema */}
        <section id="form-schema" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Form Schema</h2>
          <p className="mb-4">
            We use Zod to define the shape and validation rules of your form. 
            This provides type safety and automatic validation.
          </p>

          <ComponentPreview
            code={{ jsx: schemaCode }}
            title="Zod Schema Example"
          >
            <div className="p-4 border rounded">
              <pre className="mb-0 bg-light p-3 rounded">
                <code>{`// Zod schema for form validation
{
  username: string().min(2),
  email: string().email(),
  bio: string().max(160).optional()
}`}</code>
              </pre>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="basic-form" className="mb-6">
            <h3 className="text-xl font-medium mb-4">Profile Form</h3>
            <p className="mb-4">
              This example shows a complete profile form with various field types and validation.
            </p>

            <div className="p-4 border rounded-lg">
              <ProfileForm />
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">FormField</h3>
            <p className="mb-4">
              The main component for creating form fields with React Hook Form.
            </p>
            <PropsTable componentName="FormField" props={formFieldProps} />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Form Components</h3>
            <p className="mb-4">
              The Form component provides several sub-components for building your forms:
            </p>
            <ul className="list-group mb-4">
              <li className="list-group-item"><code>Form</code> - Wrapper for your form (uses FormProvider from react-hook-form)</li>
              <li className="list-group-item"><code>FormItem</code> - Container for each form field</li>
              <li className="list-group-item"><code>FormLabel</code> - Label for your form field</li>
              <li className="list-group-item"><code>FormControl</code> - Wrapper for your form control with proper accessibility attributes</li>
              <li className="list-group-item"><code>FormDescription</code> - Optional description text for your form field</li>
              <li className="list-group-item"><code>FormMessage</code> - Displays validation errors</li>
            </ul>
          </div>
        </section>

        <Pagination
          prev={{
            title: "Dropdown",
            href: "/docs/components/dropdown",
          }}
          next={{
            title: "Input",
            href: "/docs/components/input",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default FormPage;