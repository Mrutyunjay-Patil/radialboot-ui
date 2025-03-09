"use client"

import { Input } from "@/components/ui/Input"
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
import { Label } from "@/components/ui/Label"

// Basic Input
export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}

// Input with Label
export function InputWithLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

// Disabled Input
export function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" />
}

// File Input
export function InputFile() {
  return (
    <div className="mb-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}

// Input with Button
export function InputWithButton() {
  return (
    <div className="d-flex">
      <Input type="email" placeholder="Email" className="me-2" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}

// Input with Form and Validation
export function InputForm() {
  // Define schema
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  // Initialize form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
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
}

// Input Sizes
export function InputSizes() {
  return (
    <div className="d-flex flex-column gap-3">
      <Input className="form-control-sm" placeholder="Small Input" />
      <Input placeholder="Default Input" />
      <Input className="form-control-lg" placeholder="Large Input" />
    </div>
  )
}