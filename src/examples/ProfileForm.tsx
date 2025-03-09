"use client"

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
  FormMessage,
} from "@/components/ui/Form"

// Define the form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).optional(),
  notifications: z.boolean().default(false),
})

// Define the type for our form values
type FormValues = z.infer<typeof formSchema>

export function ProfileForm() {
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      notifications: false,
    },
  })

  // Define the submit handler
  function onSubmit(values: FormValues) {
    // This would be where you handle the form submission
    console.log(values)
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container mt-4">
        <h2 className="mb-4">Profile Information</h2>
        
        {/* Username field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input 
                  type="text"
                  className="form-control themed-input" 
                  placeholder="johndoe"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input 
                  type="email"
                  className="form-control themed-input" 
                  placeholder="john.doe@example.com"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                We&apos;ll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Bio field */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <textarea 
                  className="form-control themed-input" 
                  placeholder="Tell us about yourself"
                  rows={3}
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Maximum 160 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Notifications checkbox */}
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem>
              <div className="form-check mt-3">
                <FormControl>
                  <input
                    type="checkbox"
                    className="form-check-input themed-checkbox"
                    id="notifications"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="form-check-label themed-check-label" htmlFor="notifications">
                  Receive email notifications
                </FormLabel>
                <FormDescription>
                  We&apos;ll send you updates about your account activity.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        {/* Submit button */}
        <div className="mt-4">
          <Button type="submit" variant="themed">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  )
}