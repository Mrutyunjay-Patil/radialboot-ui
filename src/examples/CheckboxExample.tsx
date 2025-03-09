"use client"

import { Checkbox } from "@/components/ui/Checkbox"
import { Label } from "@/components/ui/Label"
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
import Link from "next/link"

// Basic Checkbox
export function CheckboxDemo() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Checkbox id="terms" aria-labelledby="terms-label" />
      <Label htmlFor="terms" id="terms-label" className="mb-0">
        Accept terms and conditions
      </Label>
    </div>
  )
}

// Checkbox With Text
export function CheckboxWithText() {
  return (
    <div className="d-flex align-items-start gap-2">
      <Checkbox id="terms1" className="mt-1" aria-labelledby="terms1-label terms1-description" />
      <div>
        <Label htmlFor="terms1" id="terms1-label" className="mb-0">
          Accept terms and conditions
        </Label>
        <p className="form-text" id="terms1-description">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

// Disabled Checkbox
export function CheckboxDisabled() {
  return (
    <div className="d-flex align-items-center gap-2">
      <Checkbox id="terms2" disabled aria-labelledby="terms2-label" />
      <Label htmlFor="terms2" id="terms2-label" className="peer-disabled mb-0">
        Accept terms and conditions
      </Label>
    </div>
  )
}

// Form with Single Checkbox
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
}

// Form with Multiple Checkboxes
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
}

// Traditional Form Check Example
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
}

// Inline Checkboxes
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
}