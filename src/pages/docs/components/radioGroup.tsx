// src/pages/docs/components/radio-group.tsx
import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Callout } from "@/components/docs/Callout";
import { 
  RadioGroupDemo, 
  RadioGroupInline,
  RadioGroupDisabled,
  RadioGroupForm
} from "@/examples/RadioGroupExample";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Label } from "@/components/ui/Label";

// IMPORTANT: Do not use dynamic values in breadcrumbs to avoid hydration issues
const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Radio Group", href: "/docs/components/radioGroup", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Basic Radio Group", href: "#basic-radio-group" },
  { title: "Inline Layout", href: "#inline-layout" },
  { title: "Disabled", href: "#disabled" },
  { title: "Form Integration", href: "#form-integration" },
  { title: "API Reference", href: "#api-reference" },
];

const RadioGroupPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-radio-group`;

  const usageCode = `import { Label } from "@/components/ui/Label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"

export function MyComponent() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}`;

  const basicRadioGroupCode = `import { Label } from "@/components/ui/Label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="radio-group-stack">
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`;

  const inlineRadioGroupCode = `import { Label } from "@/components/ui/Label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"

export function RadioGroupInline() {
  return (
    <RadioGroup defaultValue="credit" className="radio-group-inline">
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="credit" id="payment1" />
        <Label htmlFor="payment1">Credit Card</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="debit" id="payment2" />
        <Label htmlFor="payment2">Debit Card</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="paypal" id="payment3" />
        <Label htmlFor="payment3">PayPal</Label>
      </div>
    </RadioGroup>
  )
}`;

  const disabledRadioGroupCode = `import { Label } from "@/components/ui/Label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"

export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="option-one" className="radio-group-stack" disabled>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-one" id="option1" />
        <Label htmlFor="option1" className="peer-disabled">Option One</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-two" id="option2" />
        <Label htmlFor="option2" className="peer-disabled">Option Two</Label>
      </div>
    </RadioGroup>
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"

export function RadioGroupForm() {
  // Define schema
  const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),
  })

  // Initialize form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
          name="type"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="radio-group-stack"
                >
                  <FormItem className="d-flex align-items-center gap-2 mb-1">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="fw-normal mb-0">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="d-flex align-items-center gap-2 mb-1">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="fw-normal mb-0">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="d-flex align-items-center gap-2 mb-1">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="fw-normal mb-0">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
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
  const radioGroupProps = [
    {
      name: "defaultValue",
      type: "string",
      description: "The default value for the radio group",
    },
    {
      name: "value",
      type: "string",
      description: "The controlled value for the radio group",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Function called when the value changes",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents interaction with all radio items in the group",
    },
    {
      name: "name",
      type: "string",
      description: "The name of the radio group, used when submitting a form",
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: "false",
      description: "When true, indicates that the user must select a radio option before the form can be submitted",
    },
  ];

  const radioGroupItemProps = [
    {
      name: "value",
      type: "string",
      description: "The value for this radio item",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents interaction with this radio item",
    },
    {
      name: "id",
      type: "string",
      description: "The ID for this radio item, used with a label",
    },
  ];

  return (
    <>
      <Head>
        <title>Radio Group - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Radio Group"
        description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/RadioGroup"
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
            Also, ensure you've imported the radio group styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/radio-group.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The RadioGroup component is built on top of Radix UI's RadioGroup primitive with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <RadioGroup defaultValue="option-one" className="radio-group-stack">
                <div className="d-flex align-items-center gap-2">
                  <RadioGroupItem value="option-one" id="demo-option-one" />
                  <Label htmlFor="demo-option-one">Option One</Label>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <RadioGroupItem value="option-two" id="demo-option-two" />
                  <Label htmlFor="demo-option-two">Option Two</Label>
                </div>
              </RadioGroup>
            </div>
          </ComponentPreview>

          <Callout type="info" title="Accessibility">
            Always pair radio buttons with labels for better accessibility. Use the <code>htmlFor</code> attribute on 
            the label to associate it with the radio button's ID.
          </Callout>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="basic-radio-group" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Basic Radio Group</h3>
            <p className="mb-4">
              A simple stacked radio group with three options.
            </p>
            <ComponentPreview
              code={{ jsx: basicRadioGroupCode }}
              title="Basic Radio Group"
            >
              <div className="p-4 border rounded">
                <RadioGroupDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="inline-layout" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Inline Layout</h3>
            <p className="mb-4">
              Radio buttons can be arranged horizontally using the <code>radio-group-inline</code> class.
            </p>
            <ComponentPreview
              code={{ jsx: inlineRadioGroupCode }}
              title="Inline Radio Group"
            >
              <div className="p-4 border rounded">
                <RadioGroupInline />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="disabled" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Disabled</h3>
            <p className="mb-4">
              You can disable the entire radio group or individual radio buttons.
            </p>
            <ComponentPreview
              code={{ jsx: disabledRadioGroupCode }}
              title="Disabled Radio Group"
            >
              <div className="p-4 border rounded">
                <RadioGroupDisabled />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="form-integration" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Form Integration</h3>
            <p className="mb-4">
              Using radio buttons with React Hook Form for form validation.
            </p>
            <ComponentPreview
              code={{ jsx: formCode }}
              title="Form Integration"
            >
              <div className="p-4 border rounded">
                <RadioGroupForm />
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
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">RadioGroup</h3>
            <p className="mb-4">
              The RadioGroup component is built on Radix UI's RadioGroup primitive and accepts the following props:
            </p>
            <PropsTable componentName="RadioGroup" props={radioGroupProps} />
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-4">RadioGroupItem</h3>
            <p className="mb-4">
              The RadioGroupItem component represents an individual radio button in the group:
            </p>
            <PropsTable componentName="RadioGroupItem" props={radioGroupItemProps} />
          </div>

          <p className="mt-4">
            For accessibility and usability, always use a <code>Label</code> component with each radio button.
          </p>
        </section>

        <Pagination
          prev={{
            title: "Checkbox",
            href: "/docs/components/checkbox",
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

export default RadioGroupPage;