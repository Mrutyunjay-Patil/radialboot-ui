// src/components/docs/PropsTable.tsx
import React from 'react';

interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  componentName: string;
  props: PropDefinition[];
}

export function PropsTable({ componentName, props }: PropsTableProps) {
  return (
    <div className="my-6 overflow-hidden border rounded-lg">
      <div className="px-4 py-2 border-b bg-muted">
        <h3 className="font-mono text-sm font-medium">{componentName} Props</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm">
              <th className="px-4 py-3 font-medium">Prop</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Default</th>
              <th className="px-4 py-3 font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {props.map((prop) => (
              <tr key={prop.name} className="text-sm">
                <td className="px-4 py-3 font-mono whitespace-nowrap">
                  {prop.name}
                  {prop.required && (
                    <span className="ml-1 text-red-500">*</span>
                  )}
                </td>
                <td className="px-4 py-3 font-mono whitespace-nowrap text-muted-foreground">
                  {prop.type}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {prop.defaultValue ? prop.defaultValue : "-"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}