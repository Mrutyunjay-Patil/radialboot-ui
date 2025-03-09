"use client"

import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input" // Assuming you already have this component

export function LabelDemo() {
  return (
    <div>
      <div className="mb-3">
        <Label htmlFor="terms" className="d-flex align-items-center gap-2">
          <input type="checkbox" className="form-check-input" id="terms" />
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}

export function LabelWithInput() {
  return (
    <div className="mb-3">
      <Label htmlFor="email">Your email address</Label>
      <Input type="email" id="email" placeholder="example@example.com" />
    </div>
  )
}

export function RequiredLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="name" className="required">Full name</Label>
      <Input type="text" id="name" required />
    </div>
  )
}

export function DisabledLabel() {
  return (
    <div className="mb-3">
      <Label htmlFor="disabled-input" className="peer-disabled">Disabled field</Label>
      <Input type="text" id="disabled-input" disabled />
    </div>
  )
}