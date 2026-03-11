import { AdminSidebar } from "./components/admin-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <div className="min-w-0 flex-1 overflow-auto">{children}</div>
    </div>
  )
}
