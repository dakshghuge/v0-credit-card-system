"use client"

import { useEffect, useState } from "react"
import { hasRole } from "../../lib/auth"

type Props = {
  requiredRole: "user" | "admin"
}

/**
 * Place this at the top of pages that need protection.
 * It will redirect to the correct login with ?next=<current path>.
 */
export default function AuthGuard({ requiredRole }: Props) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const ok = hasRole(requiredRole)
    if (!ok) {
      const current = window.location.pathname + window.location.search
      const loginPath = requiredRole === "admin" ? "/auth/admin-login" : "/auth/user-login"
      const url = `${loginPath}?next=${encodeURIComponent(current)}`
      window.location.replace(url)
      return
    }
    setChecked(true)
  }, [requiredRole])

  // We don't render a blocker UI; page will show if authorized.
  return null
}
