"use client"

import { useRouter } from "next/navigation"
import ApplyForm from "@/components/apply-form"
import { Button } from "@/components/ui/button"
import AuthGuard from "@/components/auth/auth-guard"
import { logout as doLogout } from "@/lib/auth"

export default function ApplyPage() {
  const router = useRouter()

  function logout() {
    doLogout()
    router.replace("/auth/user-login")
  }

  return (
    <main>
      {/* Protect this page for user role */}
      <AuthGuard requiredRole="user" />
      {/* Hero background similar to home but focused on the form */}
      <section
        className="w-full"
        style={{
          backgroundImage: "url('/images/apply-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Apply for Credit Card</h1>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
          <div className="grid md:grid-cols-[420px,1fr] gap-8 items-start">
            <ApplyForm />
            <div className="bg-black/40 text-white rounded-md p-6">
              <h2 className="text-lg font-semibold mb-3">Benefits of Credit Cards</h2>
              <ul className="list-disc pl-5 space-y-2 text-white/90">
                <li>Easy access to credit</li>
                <li>EMI facility</li>
                <li>Flexible credit and offers</li>
                <li>Record of expenses</li>
                <li>Purchase protection</li>
                <li>Most accepted method of payment</li>
                <li>Make travel easy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
