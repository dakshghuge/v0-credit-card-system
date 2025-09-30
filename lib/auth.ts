// NOTE: client-only helpers; safe-guard window usage

export type Role = "user" | "admin"

const STORAGE_AUTH = "auth"
const STORAGE_ROLE = "auth_role"

function hasWindow() {
  return typeof window !== "undefined"
}

export function login(role: Role) {
  if (!hasWindow()) return
  localStorage.setItem(STORAGE_AUTH, "true")
  localStorage.setItem(STORAGE_ROLE, role)
}

export function logout() {
  if (!hasWindow()) return
  localStorage.removeItem(STORAGE_AUTH)
  localStorage.removeItem(STORAGE_ROLE)
}

export function isLoggedIn() {
  if (!hasWindow()) return false
  return localStorage.getItem(STORAGE_AUTH) === "true"
}

export function getRole(): Role | null {
  if (!hasWindow()) return null
  const r = localStorage.getItem(STORAGE_ROLE)
  return r === "user" || r === "admin" ? r : null
}

export function hasRole(required: Role) {
  if (!hasWindow()) return false
  return isLoggedIn() && getRole() === required
}

export function getNextFromLocation(defaultPath: string) {
  if (!hasWindow()) return defaultPath
  const url = new URL(window.location.href)
  const next = url.searchParams.get("next")
  return next || defaultPath
}
