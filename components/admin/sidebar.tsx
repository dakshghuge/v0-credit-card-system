"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const items = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/sub-admins", label: "Sub-Admins" },
  { href: "/admin/cc-application", label: "CC Application" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/account-settings", label: "Account Settings" },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-60 shrink-0 bg-dark text-white min-h-[calc(100vh-120px)]">
      <div className="px-4 py-4 font-semibold border-b border-white/10">CCAMS | Admin</div>
      <nav className="px-2 py-3">
        <ul className="grid gap-1">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={cn(
                  "block rounded-sm px-3 py-2 text-sm hover:bg-white/10",
                  pathname === it.href && "bg-white/10",
                )}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
