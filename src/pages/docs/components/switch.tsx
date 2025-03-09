import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Callout } from "@/components/docs/Callout";
import { 
  SwitchDemo,
  SwitchForm
} from "@/examples/SwitchExample";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Switch", href: "/docs/components/switch", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Basic Switch", href: "#basic-switch" },
  { title: "Form Integration", href: "#form-integration" },
  { title: "API Reference", href: "#api-reference" },
];

const SwitchPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-switch`;

  const usageCode = `import { Switch } from "@/components/ui/Switch"
import { Label } from "@/components/ui/Label"

export function MyComponent() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`;

  const basicSwitchCode = `import { Switch } from "@/components/ui/Switch"
import { Label } from "@/components/ui/Label"

export function SwitchDemo() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
} from "@/components/ui/Form"
import { Switch } from "@/components/ui/Switch"

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

export function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-100">
        <div>
          <h3 className="mb-4 fs-4 fw-medium">Email Notifications</h3>
          <div className="d-flex flex-column gap-3">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="d-flex flex-row align-items-center justify-content-between rounded border p-3">
                  <div className="d-flex flex-column gap-1">
                    <FormLabel className="fs-5">
                      Marketing emails
                    </FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem className="d-flex flex-row align-items-center justify-content-between rounded border p-3">
                  <div className="d-flex flex-column gap-1">
                    <FormLabel className="fs-5">Security emails</FormLabel>
                    <FormDescription>
                      Receive emails about your account security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" variant="themed" className="mt-4">Submit</Button>
      </form>
    </Form>
  )
}`;

  // Props for the API reference
  const switchProps = [
    {
      name: "checked",
      type: "boolean",
      description: "The controlled checked state of the switch",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "The default checked state when uncontrolled",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Function called when the checked state changes",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents the user from interacting with the switch",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description: "When true, indicates that the user must check the switch before the form can be submitted",
    }
  ];

  return (
    <>
      <Head>
        <title>Switch - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Switch"
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
            Also, ensure you've imported the switch styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/switch.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Switch component is built on top of Radix UI's Switch primitive with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <div className="d-flex align-items-center gap-2">
                <Switch id="usage-demo" />
                <Label htmlFor="usage-demo">Airplane Mode</Label>
              </div>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="basic-switch" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Basic Switch</h3>
            <p className="mb-4">
              A simple switch with a label.
            </p>
            <ComponentPreview
              code={{ jsx: basicSwitchCode }}
              title="Basic Switch"
            >
              <div className="p-4 border rounded">
                <SwitchDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="form-integration" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Form Integration</h3>
            <p className="mb-4">
              Using a switch with React Hook Form for form integration.
            </p>
            <ComponentPreview
              code={{ jsx: formCode }}
              title="Form Integration"
            >
              <div className="p-4 border rounded">
                <SwitchForm />
              </div>
            </ComponentPreview>

            <Callout type="info" title="Form Integration">
              This example uses React Hook Form with Zod for form validation. For more comprehensive form examples,
              see the <a href="/docs/components/form" className="text-primary">Form</a> documentation.
            </Callout>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="mb-4">
            The Switch component accepts the following props:
          </p>

          <PropsTable componentName="Switch" props={switchProps} />
        </section>

        <Pagination
          prev={{
            title: "Radio Group",
            href: "/docs/components/radioGroup",
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

export default SwitchPage;