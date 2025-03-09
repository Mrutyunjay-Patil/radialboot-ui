import { NextPage } from "next";
import Head from "next/head";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Callout } from "@/components/docs/Callout";
import { 
  TabsDemo,
  VerticalTabs,
  TabsWithDisabled
} from "@/examples/TabsExample";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Tabs", href: "/docs/components/tabs", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Basic Tabs", href: "#basic-tabs" },
  { title: "Vertical Tabs", href: "#vertical-tabs" },
  { title: "Disabled Tabs", href: "#disabled-tabs" },
  { title: "API Reference", href: "#api-reference" },
];

const TabsPage: NextPage = () => {
  const installCode = `npm install @radix-ui/react-tabs`;

  const usageCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

export function MyComponent() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}`;

  const basicTabsCode = `import { Button } from "@/components/ui/Button/button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-100" style={{ maxWidth: "400px" }}>
      <TabsList className="grid w-100 grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Account</h5>
            <p className="card-subtitle text-muted">
              Make changes to your account here. Click save when you're done.
            </p>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="mb-3">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <div className="card-footer">
            <Button>Save changes</Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Password</h5>
            <p className="card-subtitle text-muted">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="mb-3">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>
          <div className="card-footer">
            <Button>Save password</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}`;

  const verticalTabsCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

export function VerticalTabs() {
  return (
    <Tabs defaultValue="profile" className="tabs-vertical w-100">
      <TabsList className="border-end">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-3 border rounded">
        <h4>Profile Settings</h4>
        <p>Manage your profile information.</p>
      </TabsContent>
      <TabsContent value="account" className="p-3 border rounded">
        <h4>Account Settings</h4>
        <p>Manage your account preferences.</p>
      </TabsContent>
      <TabsContent value="security" className="p-3 border rounded">
        <h4>Security Settings</h4>
        <p>Manage your security options and devices.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-3 border rounded">
        <h4>Notification Settings</h4>
        <p>Manage how you receive notifications.</p>
      </TabsContent>
    </Tabs>
  );
}`;

  const disabledTabsCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

export function TabsWithDisabled() {
  return (
    <Tabs defaultValue="active" className="w-100">
      <TabsList className="w-100">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="inactive">Inactive</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-3 border rounded mt-3">
        <p>This is the active tab content.</p>
      </TabsContent>
      <TabsContent value="inactive" className="p-3 border rounded mt-3">
        <p>This is the inactive tab content.</p>
      </TabsContent>
      <TabsContent value="disabled" className="p-3 border rounded mt-3">
        <p>This content should not be accessible.</p>
      </TabsContent>
    </Tabs>
  );
}`;

  // Props for the API reference
  const tabsProps = [
    {
      name: "defaultValue",
      type: "string",
      description: "The value of the tab that should be active when initially rendered",
    },
    {
      name: "value",
      type: "string",
      description: "The controlled value of the currently active tab",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Function called when the active tab changes",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultValue: "horizontal",
      description: "The orientation of the tabs",
    },
    {
      name: "dir",
      type: '"ltr" | "rtl"',
      description: "The reading direction of the tabs",
    },
    {
      name: "activationMode",
      type: '"automatic" | "manual"',
      defaultValue: "automatic",
      description: "Whether tabs are activated automatically on focus or manually",
    }
  ];

  const tabsListProps = [
    {
      name: "loop",
      type: "boolean",
      defaultValue: "true",
      description: "When true, keyboard navigation will loop from last tab to first, and vice versa",
    }
  ];

  const tabsTriggerProps = [
    {
      name: "value",
      type: "string",
      description: "The unique identifier of the tab",
      required: true
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "When true, prevents the user from interacting with the tab"
    }
  ];

  const tabsContentProps = [
    {
      name: "value",
      type: "string", 
      description: "The unique identifier of the tab that this content relates to",
      required: true
    },
    {
      name: "forceMount",
      type: "boolean",
      description: "Force mounting when true. Useful for animating in/out"
    }
  ];

  return (
    <>
      <Head>
        <title>Tabs - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Tabs"
        description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Tabs"
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
            Also, ensure you've imported the tabs styles in your _app.tsx file:
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>// In _app.tsx
import "../styles/components/tabs.css";</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section id="usage" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Tabs component is built on top of Radix UI's Tabs primitive with enhanced styling and accessibility.
          </p>

          <ComponentPreview
            code={{ jsx: usageCode }}
            title="Basic Usage"
          >
            <div className="p-4 border rounded">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
              </Tabs>
            </div>
          </ComponentPreview>
        </section>

        {/* Examples */}
        <section id="examples" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          
          <div id="basic-tabs" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Basic Tabs</h3>
            <p className="mb-4">
              A simple tabs component with content cards in each tab panel.
            </p>
            <ComponentPreview
              code={{ jsx: basicTabsCode }}
              title="Basic Tabs"
            >
              <div className="p-4 border rounded">
                <TabsDemo />
              </div>
            </ComponentPreview>
          </div>
          
          <div id="vertical-tabs" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Vertical Tabs</h3>
            <p className="mb-4">
              Tabs can be oriented vertically for side navigation layouts.
            </p>
            <ComponentPreview
              code={{ jsx: verticalTabsCode }}
              title="Vertical Tabs"
            >
              <div className="p-4 border rounded">
                <VerticalTabs />
              </div>
            </ComponentPreview>

            <Callout type="info" title="Vertical Layout">
              Use the <code>tabs-vertical</code> class on the Tabs component to create a vertical tabs layout.
            </Callout>
          </div>
          
          <div id="disabled-tabs" className="mb-8">
            <h3 className="text-xl font-medium mb-4">Disabled Tabs</h3>
            <p className="mb-4">
              Individual tabs can be disabled to prevent user interaction.
            </p>
            <ComponentPreview
              code={{ jsx: disabledTabsCode }}
              title="Disabled Tabs"
            >
              <div className="p-4 border rounded">
                <TabsWithDisabled />
              </div>
            </ComponentPreview>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Tabs</h3>
            <p className="mb-4">
              The main Tabs container component.
            </p>
            <PropsTable componentName="Tabs" props={tabsProps} />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">TabsList</h3>
            <p className="mb-4">
              The container for the tab triggers.
            </p>
            <PropsTable componentName="TabsList" props={tabsListProps} />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">TabsTrigger</h3>
            <p className="mb-4">
              The button that activates its associated content.
            </p>
            <PropsTable componentName="TabsTrigger" props={tabsTriggerProps} />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">TabsContent</h3>
            <p className="mb-4">
              The content that's associated with a tab trigger.
            </p>
            <PropsTable componentName="TabsContent" props={tabsContentProps} />
          </div>
        </section>

        <Pagination
          prev={{
            title: "Switch",
            href: "/docs/components/switch",
          }}
          next={{
            title: "Tooltip",
            href: "/docs/components/tooltip",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default TabsPage;