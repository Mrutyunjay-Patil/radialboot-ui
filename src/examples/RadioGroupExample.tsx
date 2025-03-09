"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
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

// Basic Radio Group
export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="default" id="r1" aria-labelledby="r1-label" />
        <Label htmlFor="r1" id="r1-label" className="mb-0">Default</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" aria-labelledby="r2-label" />
        <Label htmlFor="r2" id="r2-label" className="mb-0">Comfortable</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="compact" id="r3" aria-labelledby="r3-label" />
        <Label htmlFor="r3" id="r3-label" className="mb-0">Compact</Label>
      </div>
    </RadioGroup>
  )
}

// Inline Radio Group
export function RadioGroupInline() {
  return (
    <RadioGroup defaultValue="credit" inline>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="credit" id="payment1" aria-labelledby="payment1-label" />
        <Label htmlFor="payment1" id="payment1-label" className="mb-0">Credit Card</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="debit" id="payment2" aria-labelledby="payment2-label" />
        <Label htmlFor="payment2" id="payment2-label" className="mb-0">Debit Card</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="paypal" id="payment3" aria-labelledby="payment3-label" />
        <Label htmlFor="payment3" id="payment3-label" className="mb-0">PayPal</Label>
      </div>
    </RadioGroup>
  )
}

// Disabled Radio Group
export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-one" id="option1" aria-labelledby="option1-label" />
        <Label htmlFor="option1" id="option1-label" className="mb-0 peer-disabled">Option One</Label>
      </div>
      <div className="d-flex align-items-center gap-2">
        <RadioGroupItem value="option-two" id="option2" aria-labelledby="option2-label" />
        <Label htmlFor="option2" id="option2-label" className="mb-0 peer-disabled">Option Two</Label>
      </div>
    </RadioGroup>
  )
}

// Form Integration
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
}