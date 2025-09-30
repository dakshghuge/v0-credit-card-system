"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    if (typeof window !== "undefined") {
      localStorage.setItem("ccams-auth", "1")
      const params = new URLSearchParams(window.location.search)
      const next = params.get("next") || "/apply"
      setTimeout(() => router.push(next), 50)
      return
    }
    router.push("/apply")
  }

  return (
    <main className="py-10">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Admin Login</h1>
        <form onSubmit={onSubmit} className="grid gap-4 bg-card p-6 rounded-md border">
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="admin@example.com" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Signing in…" : "Sign in"}
          </Button>
          <p className="text-sm text-center">
            No account?{" "}
            <Link href="/auth/signup" className="text-brand underline-offset-4 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}
