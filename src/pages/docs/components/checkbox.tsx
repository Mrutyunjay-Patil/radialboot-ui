// src/pages/docs/components/checkbox.tsx
import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Callout } from "@/components/docs/Callout";
import { 
  CheckboxDemo, 
  CheckboxWithText,
  CheckboxDisabled,
  CheckboxReactHookFormSingle,
  CheckboxReactHookFormMultiple,
  CheckboxBootstrapStyle,
  CheckboxInline
} from "@/examples/CheckboxExample";
import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";

// IMPORTANT: Do not use dynamic values in breadcrumbs to avoid hydration issues
const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Checkbox", href: "/docs/components/checkbox", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Basic Checkbox", href: "#basic-checkbox" },
  { title: "With Text", href: "#with-text" },
  { title: "Disabled", href: "#disabled" },
  { title: "Bootstrap Style", href: "#bootstrap-style" },
  { title: "Inline Checkboxes", href: "#inline-checkboxes" },
  { title: "Form Integration", href: "#form-integration" },
  { title: "Multiple Selection", href: "#multiple-selection" },
  { title: "API Reference", href: "#api-reference" },
];

const CheckboxPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-checkbox lucide-react`;

  const usageCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function MyComponent() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Checkbox id="accept" />
      <Label htmlFor="accept">Accept terms</Label>
    </div>
  )
}`;

  const basicCheckboxCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function CheckboxDemo() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">
        Accept terms and conditions
      </Label>
    </div>
  )
}`;

  const withTextCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function CheckboxWithText() {
  return (
    <div className="d-flex align-items-start gap-2">
      <Checkbox id="terms1" />
      <div>
        <Label htmlFor="terms1">
          Accept terms and conditions
        </Label>
        <p className="form-text">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}`;

  const disabledCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function CheckboxDisabled() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Checkbox id="terms2" disabled />
      <Label htmlFor="terms2" className="peer-disabled">
        Accept terms and conditions
      </Label>
    </div>
  )
}`;

  const bootstrapStyleCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function CheckboxBootstrapStyle() {
  return (
    <div>
      <div className="form-check">
        <Checkbox id="check1" />
        <Label htmlFor="check1" className="form-check-label">
          Default checkbox
        </Label>
      </div>
      <div className="form-check">
        <Checkbox id="check2" disabled />
        <Label htmlFor="check2" className="form-check-label peer-disabled">
          Disabled checkbox
        </Label>
      </div>
    </div>
  )
}`;

  const inlineCode = `import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"

export function CheckboxInline() {
  return (
    <div>
      <div className="form-check form-check-inline">
        <Checkbox id="inlineCheck1" />
        <Label htmlFor="inlineCheck1" className="form-check-label">
          1
        </Label>
      </div>
      <div className="form-check form-check-inline">
        <Checkbox id="inlineCheck2" />
        <Label htmlFor="inlineCheck2" className="form-check-label">
          2
        </Label>
      </div>
      <div className="form-check form-check-inline">
        <Checkbox id="inlineCheck3" disabled />
        <Label htmlFor="inlineCheck3" className="form-check-label peer-disabled">
          3 (disabled)
        </Label>
      </div>
    </div>
  )
}`;

  const formCode = `"use client"

import { Checkbox } from "@/components/ui/Checkbox"
import { Button } from "@/components/ui/Button/button"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel
} from "@/components/ui/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"

export function CheckboxReactHookFormSingle() {
  // Define schema
  const FormSchema = z.object({
    mobile: z.boolean().default(false).optional(),
  })

  // Initialize form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
    },
  })

  // Submit handler
  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-100">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="border rounded p-3 mb-3">
              <div className="d-flex align-items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel>
                    Use different settings for my mobile devices
                  </FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the{" "}
                    <Link href="/examples/forms">mobile settings</Link> page.
                  </FormDescription>
                </div>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" variant="themed">Submit</Button>
      </form>
    </Form>
  )
}`;

  const multipleCode = `"use client"

import { Checkbox } from "@/components/ui/Checkbox"
import { Button } from "@/components/ui/Button/button"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export function CheckboxReactHookFormMultiple() {
  // Define items
  const items = [
    { id: "recents", label: "Recents" },
    { id: "home", label: "Home" },
    { id: "applications", label: "Applications" },
    { id: "desktop", label: "Desktop" },
    { id: "downloads", label: "Downloads" },
    { id: "documents", label: "Documents" },
  ] as const

  // Define schema
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  })

  // Initialize form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  })

  // Submit handler
  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-100">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-3">
                <FormLabel className="fs-5">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="d-flex align-items-start gap-2 mb-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="fw-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
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
  const checkboxProps = [
    {
      name: "checked",
      type: "boolean",
      description: "The controlled checked state of the checkbox",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "The default checked state when uncontrolled",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean | 'indeterminate') => void",
      description: "Function called when the checked state changes",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents the user from interacting with the checkbox",
    },
    {
      name: "id",
      type: "string",
      description: "The ID to use for the checkbox, usually used with a label",
    },
    {
      name: "name",
      type: "string",
      description: "The name of the checkbox, used when submitting a form",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description: "When true, indicates that the user must check the checkbox before the form can be submitted",
    },
  ];

  return (
    <>
      <Head>
        <title>Checkbox - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Checkbox"
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
            Also, ensure you've imported the checkbox styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/checkbox.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Checkbox component is built on top of Radix UI's checkbox primitive with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <div className="d-flex align-items-center gap-2">
                <Checkbox id="usage-demo" />
                <Label htmlFor="usage-demo">Accept terms</Label>
              </div>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="basic-checkbox" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Basic Checkbox</h3>
            <p className="mb-4">
              A simple checkbox with a label.
            </p>
            <ComponentPreview
              code={{ jsx: basicCheckboxCode }}
              title="Basic Checkbox"
            >
              <div className="p-4 border rounded">
                <CheckboxDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="with-text" className="mb-8">
            <h3 className="text-xl font-medium mb-4">With Text</h3>
            <p className="mb-4">
              A checkbox with a label and descriptive text.
            </p>
            <ComponentPreview
              code={{ jsx: withTextCode }}
              title="Checkbox With Text"
            >
              <div className="p-4 border rounded">
                <CheckboxWithText />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="disabled" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Disabled</h3>
            <p className="mb-4">
              A disabled checkbox.
            </p>
            <ComponentPreview
              code={{ jsx: disabledCode }}
              title="Disabled Checkbox"
            >
              <div className="p-4 border rounded">
                <CheckboxDisabled />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="bootstrap-style" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Bootstrap Style</h3>
            <p className="mb-4">
              Using the traditional Bootstrap form-check layout.
            </p>
            <ComponentPreview
              code={{ jsx: bootstrapStyleCode }}
              title="Bootstrap Style Checkbox"
            >
              <div className="p-4 border rounded">
                <CheckboxBootstrapStyle />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="inline-checkboxes" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Inline Checkboxes</h3>
            <p className="mb-4">
              Group checkboxes on the same horizontal row.
            </p>
            <ComponentPreview
              code={{ jsx: inlineCode }}
              title="Inline Checkboxes"
            >
              <div className="p-4 border rounded">
                <CheckboxInline />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="form-integration" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Form Integration</h3>
            <p className="mb-4">
              Using a checkbox with React Hook Form for single value toggling.
            </p>
            <ComponentPreview
              code={{ jsx: formCode }}
              title="Form Integration"
            >
              <div className="p-4 border rounded">
                <CheckboxReactHookFormSingle />
              </div>
            </ComponentPreview>

            <Callout type="info" title="Form Integration">
              This example uses React Hook Form with Zod for form validation. For more comprehensive form examples,
              see the <a href="/docs/components/form" className="text-primary">Form</a> documentation.
            </Callout>
          </div>
          
          <div id="multiple-selection" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Multiple Selection</h3>
            <p className="mb-4">
              Using checkboxes for multiple selections in a form.
            </p>
            <ComponentPreview
              code={{ jsx: multipleCode }}
              title="Multiple Selection"
            >
              <div className="p-4 border rounded">
                <CheckboxReactHookFormMultiple />
              </div>
            </ComponentPreview>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="mb-4">
            The Checkbox component is built on Radix UI's Checkbox primitive and accepts the following props:
          </p>

          <PropsTable componentName="Checkbox" props={checkboxProps} />

          <p className="mt-4">
            For accessibility purposes, you should always pair checkboxes with a Label component.
          </p>
        </section>

        <Pagination
          prev={{
            title: "Label",
            href: "/docs/components/label",
          }}
          next={{
            title: "Radio",
            href: "/docs/components/radio",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default CheckboxPage;