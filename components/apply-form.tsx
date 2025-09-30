"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { saveApplication, generateApplicationNumber } from "@/lib/applications"

export default function ApplyForm() {
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const now = new Date().toISOString().replace("T", " ").substring(0, 19)
    const appNumber = generateApplicationNumber()

    saveApplication({
      id: appNumber,
      applicationNumber: appNumber,
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      mobileNumber: formData.get("phone") as string,
      fatherName: formData.get("father") as string,
      address: formData.get("address") as string,
      state: formData.get("state") as string,
      city: formData.get("city") as string,
      pincode: formData.get("pincode") as string,
      occupationType: formData.get("occupation") as string,
      monthlyIncome: formData.get("income") as string,
      pancard: "Uploaded (demo)",
      addressProof: "Uploaded (demo)",
      applicationStatus: "Wait for approval",
      applicationDate: now,
      remark: "Not Updated Yet",
      maxLimit: "Not Updated Yet",
    })

    alert(`Your application number is ${appNumber}.`)

    await new Promise((r) => setTimeout(r, 600))
    setSubmitting(false)
    router.push("/check-status")
  }

  return (
    <form onSubmit={onSubmit} className="bg-brand text-white rounded-md p-6 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4">APPLY FOR CREDIT CARD</h3>

      <div className="grid gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="fullName" className="text-white/90">
            Full Name
          </Label>
          <Input id="fullName" name="fullName" placeholder="Full Name" className="bg-white text-black" required />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="email" className="text-white/90">
            Your mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your mail"
            className="bg-white text-black"
            required
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="phone" className="text-white/90">
            Phone number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g., +91 98765 43210"
            className="bg-white text-black"
            pattern="^\+?[0-9\s-]{7,15}$"
            required
          />
          <p className="text-xs text-white/80">Include country code (e.g., +1 for US, +91 for India).</p>
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="father" className="text-white/90">
            Father's Name
          </Label>
          <Input id="father" name="father" placeholder="Father's Name" className="bg-white text-black" />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="address" className="text-white/90">
            Enter Address
          </Label>
          <Textarea id="address" name="address" placeholder="Enter Address" className="bg-white text-black min-h-16" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="state" className="text-white/90">
              State
            </Label>
            <Input id="state" name="state" placeholder="State" className="bg-white text-black" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="city" className="text-white/90">
              City
            </Label>
            <Input id="city" name="city" placeholder="City" className="bg-white text-black" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="pincode" className="text-white/90">
              Pincode
            </Label>
            <Input id="pincode" name="pincode" placeholder="Pincode" className="bg-white text-black" />
          </div>
          <div className="grid gap-1.5">
            <Label className="text-white/90">Occupation type</Label>
            <Select name="occupation">
              <SelectTrigger className="bg-white text-black">
                <SelectValue placeholder="Choose Occupation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried</SelectItem>
                <SelectItem value="self-employed">Self-employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="income" className="text-white/90">
            Enter Monthly Income
          </Label>
          <Input
            id="income"
            name="income"
            type="number"
            placeholder="Enter Monthly Income"
            className="bg-white text-black"
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="pan" className="text-white/90">
            Upload Pan Card
          </Label>
          <Input id="pan" name="pan" type="file" className="bg-white text-black file:cursor-pointer" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="addressProof" className="text-white/90">
            Upload Address Proof
          </Label>
          <Input
            id="addressProof"
            name="addressProof"
            type="file"
            className="bg-white text-black file:cursor-pointer"
          />
        </div>

        <Button type="submit" className="bg-gold text-black hover:opacity-90" disabled={submitting}>
          {submitting ? "Submitting…" : "APPLY"}
        </Button>
      </div>
    </form>
  )
}
