"use client"

import type React from "react"
import { findApplicationByNumberOrEmail } from "@/lib/applications"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckStatusPage() {
  const [status, setStatus] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("[v0] Check status submitted")
    const formData = new FormData(e.currentTarget)
    const query = String(formData.get("appNo") || "").trim()

    if (!query) {
      setStatus(null)
      return
    }

    const app = findApplicationByNumberOrEmail(query)
    if (app) {
      setStatus(app.applicationStatus)
    } else {
      setStatus("Application not found")
    }
  }

  return (
    <main className="py-10">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-semibold text-center mb-8">Check Status</h1>
        <form onSubmit={onSubmit} className="grid gap-4 bg-card p-6 rounded-md border">
          <div className="grid gap-1.5">
            <Label htmlFor="appNo">Application Number or Email</Label>
            <Input id="appNo" name="appNo" placeholder="Enter application number or email" required />
          </div>
          <Button type="submit" className="self-start">
            Check
          </Button>
        </form>

        {status && (
          <div className="mt-6 rounded-md border p-4">
            <p>
              Current Status: <strong>{status}</strong>
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
