import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { DocsLayout } from "@/components/layouts/DocsLayout";
import {
  Select,
  MultiSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  MultiSelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button/button";

const tableOfContents = [
  { title: "Installation", href: "#installation" },
  { title: "Usage", href: "#usage" },
  { title: "Examples", href: "#examples" },
  { title: "Multiple Select", href: "#multiple-select" },
  { title: "API Reference", href: "#api-reference" },
];

const SelectPage: NextPage = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  return (
    <>
      <Head>
        <title>Select - RadialBoot UI</title>
      </Head>
      <DocsLayout tableOfContents={tableOfContents}>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Select</h1>
            <p className="text-xl text-muted-foreground">
              Displays a list of options for the user to pick from—triggered by
              a button.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div style={{ maxWidth: "250px" }}>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-bold mt-8">
            Installation
          </h2>
          <p>Install the component from your command line.</p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npx radialboot-ui add select</code>
            </pre>
            <Button
              variant="ghost"
              size="icon"
              className="position-absolute top-2 end-2"
              aria-label="Copy code"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>

          <p className="mb-4">Install the following dependencies:</p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>npm install @radix-ui/react-select</code>
            </pre>
            <Button
              variant="ghost"
              size="icon"
              className="position-absolute top-2 end-2"
              aria-label="Copy code"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>

          <h2 id="usage" className="text-2xl font-bold mt-8">
            Usage
          </h2>
          <p>
            Use the Select component to provide users with a list of options to
            choose from.
          </p>

          <div className="my-4 position-relative">
            <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
              <code>{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"

<div style={{ maxWidth: '250px' }}>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>`}</code>
            </pre>
            <Button
              variant="ghost"
              size="icon"
              className="position-absolute top-2 end-2"
              aria-label="Copy code"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>

          <h2 id="examples" className="text-2xl font-bold mt-8">
            Examples
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Basic Select</h3>
              <p className="mb-4">A simple select with a placeholder.</p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: "250px" }}>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Grouped Options</h3>
              <p className="mb-4">Group related options with labels.</p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: "250px" }}>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <SelectItem value="carrot">Carrot</SelectItem>
                        <SelectItem value="potato">Potato</SelectItem>
                        <SelectItem value="tomato">Tomato</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Disabled Options</h3>
              <p className="mb-4">
                Disable specific options that are unavailable.
              </p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: "250px" }}>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange" disabled>
                        Orange (Out of Stock)
                      </SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Scrollable Select</h3>
              <p className="mb-4">
                Handle long lists with scrolling capabilities.
              </p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: "250px" }}>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>North America</SelectLabel>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time (MST)
                        </SelectItem>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="akst">
                          Alaska Standard Time (AKST)
                        </SelectItem>
                        <SelectItem value="hst">
                          Hawaii Standard Time (HST)
                        </SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Europe & Africa</SelectLabel>
                        <SelectItem value="gmt">
                          Greenwich Mean Time (GMT)
                        </SelectItem>
                        <SelectItem value="cet">
                          Central European Time (CET)
                        </SelectItem>
                        <SelectItem value="eet">
                          Eastern European Time (EET)
                        </SelectItem>
                        <SelectItem value="west">
                          Western European Summer Time (WEST)
                        </SelectItem>
                        <SelectItem value="cat">
                          Central Africa Time (CAT)
                        </SelectItem>
                        <SelectItem value="eat">
                          East Africa Time (EAT)
                        </SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Asia</SelectLabel>
                        <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                        <SelectItem value="ist">
                          India Standard Time (IST)
                        </SelectItem>
                        <SelectItem value="cst_china">
                          China Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="jst">
                          Japan Standard Time (JST)
                        </SelectItem>
                        <SelectItem value="kst">
                          Korea Standard Time (KST)
                        </SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Australia & Pacific</SelectLabel>
                        <SelectItem value="awst">
                          Australian Western Standard Time (AWST)
                        </SelectItem>
                        <SelectItem value="acst">
                          Australian Central Standard Time (ACST)
                        </SelectItem>
                        <SelectItem value="aest">
                          Australian Eastern Standard Time (AEST)
                        </SelectItem>
                        <SelectItem value="nzst">
                          New Zealand Standard Time (NZST)
                        </SelectItem>
                        <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Multiple Select section */}
            <div id="multiple-select">
              <h3 className="text-xl font-medium mb-4">Multiple Select</h3>
              <p className="mb-4">
                Allow users to select multiple options. The dropdown stays open
                until closed manually, and options can be toggled on/off.
              </p>
              <div className="p-6 border rounded-lg">
                <div style={{ maxWidth: "250px" }}>
                  <MultiSelect
                    value={selectedValues}
                    onValueChange={(values) => {
                      const newValues = Array.isArray(values)
                        ? values
                        : [values];
                      setSelectedValues(newValues);
                    }}
                  >
                    <SelectTrigger multiple={true}>
                      <MultiSelectValue
                        selectedValues={selectedValues}
                        placeholder="Select fruits"
                        displayLimit={2}
                      />
                    </SelectTrigger>
                    <SelectContent multiple={true}>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple" multiple={true}>
                          Apple
                        </SelectItem>
                        <SelectItem value="banana" multiple={true}>
                          Banana
                        </SelectItem>
                        <SelectItem value="blueberry" multiple={true}>
                          Blueberry
                        </SelectItem>
                        <SelectItem value="grapes" multiple={true}>
                          Grapes
                        </SelectItem>
                        <SelectItem value="pineapple" multiple={true}>
                          Pineapple
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </MultiSelect>

                  <div className="mt-4 text-sm">
                    <p>
                      Selected:{" "}
                      {selectedValues.length
                        ? selectedValues.join(", ")
                        : "None"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-4 position-relative">
                <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                  <code>{`import { useState } from 'react';
import {
  MultiSelect,
  MultiSelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/Select";

// Inside your component
const [selectedValues, setSelectedValues] = useState<string[]>([]);

<MultiSelect
  value={selectedValues}
  onValueChange={(values) => {
    // Handle values as an array
    setSelectedValues(Array.isArray(values) ? values : [values]);
  }}
>
  <SelectTrigger multiple={true}>
    <MultiSelectValue 
      selectedValues={selectedValues}
      placeholder="Select fruits"
      displayLimit={2}
    />
  </SelectTrigger>
  <SelectContent multiple={true}>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple" multiple={true}>Apple</SelectItem>
      <SelectItem value="banana" multiple={true}>Banana</SelectItem>
      <SelectItem value="blueberry" multiple={true}>Blueberry</SelectItem>
      <SelectItem value="grapes" multiple={true}>Grapes</SelectItem>
      <SelectItem value="pineapple" multiple={true}>Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</MultiSelect>`}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="position-absolute top-2 end-2"
                  aria-label="Copy code"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </div>
            </div>

            <h2 id="api-reference" className="text-2xl font-bold mt-8">
              API Reference
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Select</h3>
                <p className="mb-2">
                  The root component that contains all select parts for single
                  selection.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>defaultValue</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>value</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>onValueChange</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          function
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>open</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>onOpenChange</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          function
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">MultiSelect</h3>
                <p className="mb-2">
                  The root component that enables multiple selection.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>defaultValue</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string[]
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>value</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string[]
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>onValueChange</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          function
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>open</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>onOpenChange</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          function
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">SelectTrigger</h3>
                <p className="mb-2">
                  The button that opens the select dropdown.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>asChild</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>multiple</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">SelectValue</h3>
                <p className="mb-2">
                  The component that displays the selected value.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>placeholder</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">SelectContent</h3>
                <p className="mb-2">
                  The component that contains the select items.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>position</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          "item" | "popper"
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>multiple</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">SelectItem</h3>
                <p className="mb-2">
                  The component that contains the select items.
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted font-medium">Props</div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm">
                      <div>value</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          string
                        </code>
                      </div>
                      <div>Required</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>disabled</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 font-mono text-sm mt-4">
                      <div>multiple</div>
                      <div className="col-span-2">
                        <code className="bg-muted px-1 py-0.5 rounded">
                          boolean
                        </code>
                      </div>
                      <div>Optional</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default SelectPage;
