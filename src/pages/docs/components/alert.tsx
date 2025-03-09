// src/pages/docs/components/alert.tsx
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { EnhancedDocsLayout } from "@/components/layouts/EnhancedDocsLayout";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button/button";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { Callout } from "@/components/docs/Callout";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pagination } from "@/components/docs/Pagination";
import { Info, AlertTriangle, CheckCircle, AlertCircle, Bell } from "lucide-react";

// Define AlertPosition type here to avoid import issues
type AlertPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right" 
  | "static";

const breadcrumbs = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Alert", href: "/docs/components/alert", current: true },
];

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Variants", href: "#variants" },
  { title: "With Icon", href: "#with-icon" },
  { title: "Dismissible", href: "#dismissible" },
  { title: "Themed", href: "#themed" },
  { title: "Sizing", href: "#sizing" },
  { title: "Positioning", href: "#positioning" },
  { title: "Auto-dismiss", href: "#auto-dismiss" },
  { title: "API Reference", href: "#api-reference" },
];

const AlertPage: NextPage = () => {
  // State for showing positioned alerts
  const [alerts, setAlerts] = useState<Array<{
    id: string;
    position: AlertPosition;
    variant: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }>>([]);

  // Function to show an alert at a specific position with a specific variant
  const showAlert = (position: AlertPosition, variant: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    // Select icon based on variant
    let icon;
    let title = `${position.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
    
    if (variant === 'success') {
      icon = <CheckCircle className="h-4 w-4" />;
      title = `${title} Success`;
    } else if (variant === 'warning') {
      icon = <AlertTriangle className="h-4 w-4" />;
      title = `${title} Warning`;
    } else if (variant === 'danger') {
      icon = <AlertCircle className="h-4 w-4" />;
      title = `${title} Error`;
    } else if (variant === 'info') {
      icon = <Info className="h-4 w-4" />;
      title = `${title} Info`;
    } else if (variant === 'themed') {
      icon = <Bell className="h-4 w-4" />;
      title = `${title} Notification`;
    } else {
      icon = <Info className="h-4 w-4" />;
      title = `${title} Alert`;
    }

    setAlerts(prev => [
      ...prev,
      {
        id,
        position,
        variant,
        icon,
        title,
        description: `This ${variant} alert appears in the ${position} position and will disappear after 2 seconds.`
      }
    ]);

    // Auto remove after 2 seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, 2000);
  };

  // Example code snippets
  const installCode = `npx radialboot-ui add alert`;

  const usageCode = {
    jsx: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert";

<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    This is an important message that you should know about.
  </AlertDescription>
</Alert>`,
  };

  // Props for the API reference
  const alertProps = [
    {
      name: "variant",
      type: '"default" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "themed"',
      defaultValue: "default",
      description: "Controls the visual style of the alert.",
    },
    {
      name: "sizing",
      type: '"default" | "sm" | "lg"',
      defaultValue: "default",
      description: "Controls the size of the alert.",
    },
    {
      name: "icon",
      type: "ReactNode",
      description: "Optional icon to display at the start of the alert.",
    },
    {
      name: "showClose",
      type: "boolean",
      defaultValue: "false",
      description: "Whether to show a close button.",
    },
    {
      name: "onClose",
      type: "() => void",
      description:
        "Function called when the close button is clicked or timeout expires.",
    },
    {
      name: "position",
      type: '"static" | "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
      defaultValue: "static",
      description: "Position of the alert on the screen.",
    },
    {
      name: "timeout",
      type: "number",
      description:
        "Time in milliseconds before the alert auto-dismisses. If not set, the alert will stay visible until manually closed.",
    },
  ];

  return (
    <>
      <Head>
        <title>Alert - RadialBoot UI</title>
      </Head>
      <EnhancedDocsLayout
        title="Alert"
        description="Displays important messages and feedback to users."
        breadcrumbs={breadcrumbs}
        tableOfContents={tableOfContents}
        gitHubUrl="https://github.com/yourusername/radialboot-ui/tree/main/src/components/ui/Alert"
      >
        {/* Display any positioned alerts */}
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            position={alert.position}
            icon={alert.icon}
            showClose={true}
          >
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}

        {/* Installation */}
        <section className="mb-12" id="installation">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="mb-4">Install the component from your command line.</p>

          <div className="my-4 relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{installCode}</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12" id="usage">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="mb-4">
            The Alert component is used to display important messages to the
            user. Alerts can be used to provide contextual feedback messages for
            typical user actions.
          </p>

          <ComponentPreview
            title="Basic Example"
            code={{
              jsx: usageCode.jsx,
            }}
          >
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                This is an important message that you should know about.
              </AlertDescription>
            </Alert>
          </ComponentPreview>

          <p className="mt-4">
            The Alert component is built with accessibility in mind and follows WAI-ARIA guidelines.
            It includes appropriate ARIA roles and attributes to ensure screen readers can properly
            announce alerts.
          </p>
        </section>

        {/* Examples */}
        <section className="mb-12" id="examples">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>

          <div className="space-y-8">
            <div id="variants">
              <h3 className="text-xl font-medium mb-4">Variants</h3>
              <p className="mb-4">
                Use different variants to convey different meanings. The Alert component
                comes with several predefined variants that you can use to indicate different states.
              </p>

              <div className="space-y-4">
                <Alert variant="default">
                  <AlertTitle>Primary Alert</AlertTitle>
                  <AlertDescription>
                    This is a primary alert — check it out!
                  </AlertDescription>
                </Alert>

                <Alert variant="secondary">
                  <AlertTitle>Secondary Alert</AlertTitle>
                  <AlertDescription>
                    This is a secondary alert — check it out!
                  </AlertDescription>
                </Alert>

                <Alert variant="success">
                  <AlertTitle>Success Alert</AlertTitle>
                  <AlertDescription>
                    This is a success alert — check it out!
                  </AlertDescription>
                </Alert>

                <Alert variant="danger">
                  <AlertTitle>Danger Alert</AlertTitle>
                  <AlertDescription>
                    This is a danger alert — check it out!
                  </AlertDescription>
                </Alert>

                <Alert variant="warning">
                  <AlertTitle>Warning Alert</AlertTitle>
                  <AlertDescription>
                    This is a warning alert — check it out!
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>
                    This is an info alert — check it out!
                  </AlertDescription>
                </Alert>
              </div>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `<Alert variant="default">
  <AlertTitle>Primary Alert</AlertTitle>
  <AlertDescription>This is a primary alert — check it out!</AlertDescription>
</Alert>

<Alert variant="secondary">
  <AlertTitle>Secondary Alert</AlertTitle>
  <AlertDescription>This is a secondary alert — check it out!</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success Alert</AlertTitle>
  <AlertDescription>This is a success alert — check it out!</AlertDescription>
</Alert>

<Alert variant="danger">
  <AlertTitle>Danger Alert</AlertTitle>
  <AlertDescription>This is a danger alert — check it out!</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning Alert</AlertTitle>
  <AlertDescription>This is a warning alert — check it out!</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Info Alert</AlertTitle>
  <AlertDescription>This is an info alert — check it out!</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="with-icon">
              <h3 className="text-xl font-medium mb-4">With Icon</h3>
              <p className="mb-4">
                Add icons to alerts to help them stand out and improve visual hierarchy.
                Icons are aligned properly with the alert title to create a clean and professional look.
              </p>

              <div className="space-y-4">
                <Alert variant="info" icon={<Info className="h-4 w-4" />}>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This alert has an icon to attract attention.
                  </AlertDescription>
                </Alert>

                <Alert
                  variant="warning"
                  icon={<AlertTriangle className="h-4 w-4" />}
                >
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    This is a warning with an icon.
                  </AlertDescription>
                </Alert>

                <Alert
                  variant="success"
                  icon={<CheckCircle className="h-4 w-4" />}
                >
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Operation completed successfully.
                  </AlertDescription>
                </Alert>

                <Alert
                  variant="danger"
                  icon={<AlertCircle className="h-4 w-4" />}
                >
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `import { Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

<Alert variant="info" icon={<Info className="h-4 w-4" />}>
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This alert has an icon to attract attention.</AlertDescription>
</Alert>

<Alert variant="warning" icon={<AlertTriangle className="h-4 w-4" />}>
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>This is a warning with an icon.</AlertDescription>
</Alert>

<Alert variant="success" icon={<CheckCircle className="h-4 w-4" />}>
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>

<Alert variant="danger" icon={<AlertCircle className="h-4 w-4" />}>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="dismissible">
              <h3 className="text-xl font-medium mb-4">Dismissible</h3>
              <p className="mb-4">
                Add a close button to allow users to dismiss the alert. This is particularly
                useful for non-critical messages that don't require user action.
              </p>

              <Alert
                variant="info"
                icon={<Info className="h-4 w-4" />}
                showClose={true}
                onClose={() => alert("Alert closed")}
              >
                <AlertTitle>Dismissible Alert</AlertTitle>
                <AlertDescription>
                  Click the X button to dismiss this alert.
                </AlertDescription>
              </Alert>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `<Alert 
  variant="info" 
  icon={<Info className="h-4 w-4" />} 
  showClose={true}
  onClose={() => console.log('Alert closed')}
>
  <AlertTitle>Dismissible Alert</AlertTitle>
  <AlertDescription>Click the X button to dismiss this alert.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="themed">
              <h3 className="text-xl font-medium mb-4">Themed</h3>
              <p className="mb-4">
                Use the themed variant to automatically use the current theme's
                colors. This alert will adapt to any theme in your application,
                and will also respect light/dark mode preferences.
              </p>

              <Alert variant="themed" icon={<Bell className="h-4 w-4" />}>
                <AlertTitle>Themed Alert</AlertTitle>
                <AlertDescription>
                  This alert uses the current theme's colors and adapts to light/dark mode.
                </AlertDescription>
              </Alert>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `import { Bell } from 'lucide-react';

<Alert variant="themed" icon={<Bell className="h-4 w-4" />}>
  <AlertTitle>Themed Alert</AlertTitle>
  <AlertDescription>This alert uses the current theme's colors and adapts to light/dark mode.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="sizing">
              <h3 className="text-xl font-medium mb-4">Sizing</h3>
              <p className="mb-4">
                Alerts come in different sizes to fit your design needs.
              </p>

              <div className="space-y-4">
                <Alert variant="info" sizing="sm" icon={<Info className="h-3 w-3" />}>
                  <AlertTitle>Small Alert</AlertTitle>
                  <AlertDescription>
                    This is a small-sized alert with less padding.
                  </AlertDescription>
                </Alert>

                <Alert variant="info" icon={<Info className="h-4 w-4" />}>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is the default-sized alert.
                  </AlertDescription>
                </Alert>

                <Alert variant="info" sizing="lg" icon={<Info className="h-5 w-5" />}>
                  <AlertTitle>Large Alert</AlertTitle>
                  <AlertDescription>
                    This is a large-sized alert with more padding.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `<Alert variant="info" sizing="sm" icon={<Info className="h-3 w-3" />}>
  <AlertTitle>Small Alert</AlertTitle>
  <AlertDescription>This is a small-sized alert with less padding.</AlertDescription>
</Alert>

<Alert variant="info" icon={<Info className="h-4 w-4" />}>
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is the default-sized alert.</AlertDescription>
</Alert>

<Alert variant="info" sizing="lg" icon={<Info className="h-5 w-5" />}>
  <AlertTitle>Large Alert</AlertTitle>
  <AlertDescription>This is a large-sized alert with more padding.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="positioning">
              <h3 className="text-xl font-medium mb-4">Positioning</h3>
              <p className="mb-4">
                Position alerts in different corners of the screen. This is particularly
                useful for notifications and toast messages that need to be displayed
                momentarily without interrupting the user's workflow.
              </p>

              <p className="mb-2">Click the buttons below to see different alerts appear in different positions:</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                <Button onClick={() => showAlert("top-left", "info")} variant="themed">
                  Top Left
                </Button>
                <Button onClick={() => showAlert("top-center", "success")} variant="themed">
                  Top Center
                </Button>
                <Button onClick={() => showAlert("top-right", "warning")} variant="themed">
                  Top Right
                </Button>
                <Button onClick={() => showAlert("bottom-left", "danger")} variant="themed">
                  Bottom Left
                </Button>
                <Button onClick={() => showAlert("bottom-center", "secondary")} variant="themed">
                  Bottom Center
                </Button>
                <Button onClick={() => showAlert("bottom-right", "themed")} variant="themed">
                  Bottom Right
                </Button>
              </div>

              <Callout type="info" title="Position and Z-index">
                Positioned alerts have a high z-index (1050) to ensure they appear above other content. 
                They are also limited in width to provide a better user experience.
              </Callout>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `import { useState } from 'react';
import { Info, CheckCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

// Inside your component
const [alerts, setAlerts] = useState([]);

// Show a positioned alert
const showPositionedAlert = () => {
  const id = Math.random().toString(36).substring(2, 9);
  
  setAlerts((prev) => [
    ...prev, 
    {
      id,
      position: "top-right",
      variant: "success",
    }
  ]);
  
  // Remove after 3 seconds
  setTimeout(() => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, 3000);
};

// Render the button and any active alerts
return (
  <>
    {alerts.map((alert) => (
      <Alert
        key={alert.id}
        variant={alert.variant}
        position={alert.position}
        icon={<CheckCircle className="h-4 w-4" />}
        showClose={true}
      >
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
    ))}
    
    <Button onClick={showPositionedAlert}>
      Show Positioned Alert
    </Button>
  </>
);`,
                  }}
                />
              </div>
            </div>

            <div id="auto-dismiss">
              <h3 className="text-xl font-medium mb-4">Auto-dismiss</h3>
              <p className="mb-4">
                Set a timeout for the alert to automatically dismiss. This is useful for
                temporary notifications that don't require user action.
              </p>

              <Button
                onClick={() => {
                  const id = Math.random().toString(36).substring(2, 9);
                  setAlerts((prev) => [
                    ...prev, 
                    {
                      id,
                      position: "top-right",
                      variant: "success",
                      icon: <CheckCircle className="h-4 w-4" />,
                      title: "Auto-dismiss Alert",
                      description: "This alert will disappear after 3 seconds."
                    }
                  ]);

                  // Auto remove after 3 seconds
                  setTimeout(() => {
                    setAlerts((prev) =>
                      prev.filter((alert) => alert.id !== id)
                    );
                  }, 3000);
                }}
                variant="themed"
              >
                Show Auto-dismiss Alert (3s)
              </Button>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `<Alert 
  variant="success" 
  icon={<CheckCircle className="h-4 w-4" />} 
  timeout={5000} // 5 seconds
  position="bottom-right"
>
  <AlertTitle>Auto-dismiss Alert</AlertTitle>
  <AlertDescription>This alert will dismiss itself after 5 seconds.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>

              <p className="mt-4">
                You can combine the timeout with the <code>onClose</code> prop to perform
                actions when the alert is automatically dismissed:
              </p>

              <div className="mt-2">
                <ComponentPreview
                  code={{
                    jsx: `<Alert 
  variant="info" 
  timeout={3000}
  onClose={() => console.log('Alert auto-dismissed after 3 seconds')}
>
  <AlertTitle>Auto-dismiss with Callback</AlertTitle>
  <AlertDescription>This alert will trigger a callback when dismissed.</AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>

            <div id="custom-content">
              <h3 className="text-xl font-medium mb-4">Custom Content</h3>
              <p className="mb-4">
                Alerts can contain more than just text. You can add buttons, links,
                or other interactive elements.
              </p>

              <Alert 
                variant="info"
                icon={<Info className="h-4 w-4" />}
                showClose={true}
              >
                <AlertTitle>Account Verification</AlertTitle>
                <AlertDescription className="mt-2">
                  <p className="mb-2">Please verify your email address to continue using all features.</p>
                  <div className="mt-3 d-flex gap-2">
                    <Button size="sm" variant="themed">Verify Email</Button>
                    <Button size="sm" variant="outline">Remind Me Later</Button>
                  </div>
                </AlertDescription>
              </Alert>

              <div className="mt-4">
                <ComponentPreview
                  code={{
                    jsx: `<Alert 
  variant="info"
  icon={<Info className="h-4 w-4" />}
  showClose={true}
>
  <AlertTitle>Account Verification</AlertTitle>
  <AlertDescription className="mt-2">
    <p className="mb-2">Please verify your email address to continue using all features.</p>
    <div className="mt-3 d-flex gap-2">
      <Button size="sm" variant="themed">Verify Email</Button>
      <Button size="sm" variant="outline">Remind Me Later</Button>
    </div>
  </AlertDescription>
</Alert>`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference">
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>

          <div className="space-y-8">
            <PropsTable componentName="Alert" props={alertProps} />

            <div>
              <h3 className="text-xl font-medium mb-2">AlertTitle</h3>
              <p>
                Used to display the title of the alert. Accepts all standard
                HTML heading attributes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">AlertDescription</h3>
              <p>
                Used to display the description of the alert. Accepts all
                standard HTML div attributes.
              </p>
            </div>
          </div>
        </section>

        <Pagination
          prev={{
            title: "Accordion",
            href: "/docs/components/accordion",
          }}
          next={{
            title: "Button",
            href: "/docs/components/button",
          }}
        />
      </EnhancedDocsLayout>
    </>
  );
};

export default AlertPage;