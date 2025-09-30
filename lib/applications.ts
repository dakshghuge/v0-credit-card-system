export interface Application {
  id: string
  applicationNumber: string
  fullName: string
  email: string
  mobileNumber: string
  fatherName: string
  address: string
  state: string
  city: string
  pincode: string
  occupationType: string
  monthlyIncome: string
  pancard: string
  addressProof: string
  applicationStatus: "Wait for approval" | "Accepted" | "Rejected"
  applicationDate: string
  remark: string
  maxLimit: string
}

const STORAGE_KEY = "ccams-applications"

export function getApplications(): Application[] {
  if (typeof window === "undefined") return []
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveApplication(app: Application) {
  const apps = getApplications()
  apps.push(app)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps))
}

export function getApplicationById(id: string): Application | null {
  const apps = getApplications()
  return apps.find((a) => a.id === id) || null
}

export function findApplicationByNumberOrEmail(value: string): Application | null {
  const apps = getApplications()
  const input = value.trim()
  const inputLower = input.toLowerCase()
  return (
    apps.find(
      (a) =>
        a.applicationNumber === input || // exact match for application number
        a.email.toLowerCase() === inputLower, // case-insensitive email match
    ) || null
  )
}

export function updateApplication(id: string, updates: Partial<Application>) {
  const apps = getApplications()
  const idx = apps.findIndex((a) => a.id === id)
  if (idx === -1) return
  apps[idx] = { ...apps[idx], ...updates }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps))
}

export function deleteApplication(id: string) {
  const apps = getApplications()
  const next = apps.filter((a) => a.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

export function generateApplicationNumber(): string {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`
}
