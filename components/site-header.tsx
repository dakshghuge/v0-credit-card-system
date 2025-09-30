"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/check-status", label: "Check Status" },
  { href: "/apply", label: "Apply" },
  { href: "/admin", label: "Admin" },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header>
      {/* Utility bar */}
      <div className="bg-dark text-white text-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-6">
            <span>+1 234567890</span>
            <a href="mailto:ccadmin@test.in" className="underline-offset-4 hover:underline">
              ccadmin@test.in
            </a>
          </div>
          <div className="flex items-center gap-3 opacity-80">
            <span className="sr-only">Social icons</span>
            <div aria-hidden className="w-5 h-5 rounded-sm bg-white/20" />
            <div aria-hidden className="w-5 h-5 rounded-sm bg-white/20" />
            <div aria-hidden className="w-5 h-5 rounded-sm bg-white/20" />
            <div aria-hidden className="w-5 h-5 rounded-sm bg-white/20" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="flex flex-col items-center gap-2 py-4">
            <Link href="/" className="text-center">
              <span className="block text-lg font-semibold tracking-wide">
                CREDIT CARD <span className="text-gold">Application Management System</span>
              </span>
            </Link>
            <ul className="flex items-center gap-6 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-brand transition-colors",
                      pathname === item.href ? "text-brand font-medium" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
