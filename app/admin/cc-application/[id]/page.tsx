"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { getApplicationById, updateApplication, type Application, deleteApplication } from "@/lib/applications"
import { useRouter } from "next/navigation"

export default function ApplicationDetails({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Application | null>(null)
  const [remark, setRemark] = useState("")
  const [status, setStatus] = useState<Application["applicationStatus"]>("Wait for approval")
  const router = useRouter()

  useEffect(() => {
    const app = getApplicationById(params.id)
    if (!app) return
    setData(app)
    setRemark(app.remark)
    setStatus(app.applicationStatus)
  }, [params.id])

  if (data === null) {
    return (
      <div className="grid gap-4">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    )
  }

  if (!data) return notFound()

  const entries: [string, string][] = [
    ["Application Number", data.applicationNumber],
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["MobileNumber", data.mobileNumber],
    ["Father's Name", data.fatherName],
    ["Address", data.address],
    ["State", data.state],
    ["City", data.city],
    ["Pincode", data.pincode],
    ["OccupationType", data.occupationType],
    ["Monthly Income", data.monthlyIncome],
    ["Pancard", data.pancard],
    ["Address Proof", data.addressProof],
    ["Application Status", data.applicationStatus],
    ["Application Date", data.applicationDate],
    ["Remark", data.remark],
    ["Maximum Limit", data.maxLimit],
  ]

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault()
    updateApplication(params.id, {
      remark,
      applicationStatus: status,
    })
    alert("Application updated!")
    setData((prev) => (prev ? { ...prev, remark, applicationStatus: status } : null))
  }

  function handleDelete() {
    const ok = confirm("Are you sure you want to delete this application?")
    if (!ok) return
    deleteApplication(params.id)
    alert("Application deleted.")
    router.push("/admin/cc-application")
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">View Credit Card Application Details</h1>

      <div className="rounded-md border overflow-hidden bg-white">
        <div className="border-b px-4 py-3 font-medium text-center">User Details</div>
        <div className="divide-y">
          {entries.map(([k, v]) => (
            <div key={k} className="grid md:grid-cols-2">
              <div className="px-4 py-3 border-r font-medium bg-muted">{k}</div>
              <div className="px-4 py-3">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleUpdate} className="rounded-md border bg-white p-4 grid gap-3">
        <label className="text-sm font-medium">Remark :</label>
        <textarea
          className="min-h-24 rounded-md border p-2"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
        <label className="text-sm font-medium">Status :</label>
        <select
          className="rounded-md border p-2 w-56"
          value={status}
          onChange={(e) => setStatus(e.target.value as Application["applicationStatus"])}
        >
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Wait for approval">Wait for approval</option>
        </select>
        <div className="flex items-center gap-3">
          <button type="submit" className="self-start mt-2 rounded bg-brand text-white px-4 py-2">
            Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="self-start mt-2 underline-offset-4 hover:underline text-red-600"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}
