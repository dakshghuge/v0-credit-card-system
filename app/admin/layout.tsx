"use client"

import type React from "react"
import AdminSidebar from "@/components/admin/sidebar"
import AuthGuard from "@/components/auth/auth-guard"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Protect entire admin section for admin role */}
      <AuthGuard requiredRole="admin" />
      <div className="flex">
        <AdminSidebar />
        <section className="flex-1 min-w-0">
          <div className="border-b px-6 py-4 bg-white">
            <div className="text-sm text-muted-foreground">Home / Dashboard</div>
          </div>
          <div className="p-6">{children}</div>
        </section>
      </div>
    </>
  )
}
