"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    console.log("[v0] Signup submitted")
    await new Promise((r) => setTimeout(r, 600))
    router.push("/auth/login")
  }

  return (
    <main className="py-10">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Create User Account</h1>
        <form onSubmit={onSubmit} className="grid gap-4 bg-card p-6 rounded-md border">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating…" : "Sign up"}
          </Button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-brand underline-offset-4 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}
