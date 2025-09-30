"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getApplications, type Application, deleteApplication } from "@/lib/applications"

export default function CCApplicationList() {
  const [applications, setApplications] = useState<Application[]>([])

  useEffect(() => {
    setApplications(getApplications())
  }, [])

  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">Credit Card Applications</h1>
      <div className="rounded-md border bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr className="[&>th]:px-3 [&>th]:py-2 text-left">
              <th>Application Number</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-4 text-center text-muted-foreground">
                  No applications found. Submit a new application to see it here.
                </td>
              </tr>
            )}
            {applications.map((a) => (
              <tr key={a.id} className="border-t">
                <td className="px-3 py-2">{a.applicationNumber}</td>
                <td className="px-3 py-2">{a.fullName}</td>
                <td className="px-3 py-2">{a.email}</td>
                <td className="px-3 py-2">{a.applicationStatus}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/cc-application/${a.id}`}
                      className="text-brand underline-offset-4 hover:underline"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        const ok = confirm("Are you sure you want to delete this application?")
                        if (!ok) return
                        deleteApplication(a.id)
                        setApplications((prev) => prev.filter((x) => x.id !== a.id))
                        alert("Application deleted.")
                      }}
                      className="underline-offset-4 hover:underline text-red-600"
                      aria-label={`Delete application ${a.applicationNumber}`}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
