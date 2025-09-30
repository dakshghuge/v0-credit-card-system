import Link from "next/link"

const rows = [
  {
    id: 1,
    username: "akr305",
    fullName: "Anuj Kumar",
    email: "ak@gmail.com",
    mobile: "1234567891",
    regDate: "2021-06-18 18:22:33",
  },
]

export default function SubAdminsPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">Manage Sub Admins</h1>
      <div className="rounded-md border bg-white">
        <div className="border-b px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <button className="px-2 py-1 rounded bg-muted">Copy</button>
            <button className="px-2 py-1 rounded bg-muted">CSV</button>
            <button className="px-2 py-1 rounded bg-muted">Excel</button>
            <button className="px-2 py-1 rounded bg-muted">PDF</button>
            <button className="px-2 py-1 rounded bg-muted">Print</button>
            <button className="px-2 py-1 rounded bg-muted">Column visibility</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="[&>th]:px-3 [&>th]:py-2 text-left">
                <th>#</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email ID</th>
                <th>Mobile Number</th>
                <th>Reg. Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-3 py-2">{r.id}</td>
                  <td className="px-3 py-2">{r.username}</td>
                  <td className="px-3 py-2">{r.fullName}</td>
                  <td className="px-3 py-2">{r.email}</td>
                  <td className="px-3 py-2">{r.mobile}</td>
                  <td className="px-3 py-2">{r.regDate}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-3">
                      <Link href="#" className="text-brand">
                        ✏️
                      </Link>
                      <Link href="#" className="text-brand">
                        🔒
                      </Link>
                      <Link href="#" className="text-brand">
                        🗑️
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
