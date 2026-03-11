"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { LayoutDashboard, LogOut, ExternalLink, MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/logo"

const navItems = [
  { href: "/admin/leads", label: "Leads", icon: LayoutDashboard },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <>
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname.startsWith(item.href)
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="border-t p-3 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          View Website
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 px-3 text-sm text-muted-foreground hover:text-foreground"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b bg-card px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <LogoIcon className="size-7" />
          <p className="text-sm font-semibold">SnappyWorks</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </Button>
      </div>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <div className="flex flex-col border-b bg-card md:hidden">
          {sidebarContent}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-60 flex-col border-r bg-card md:flex">
        <div className="flex items-center gap-2 border-b px-4 py-4">
          <LogoIcon className="size-8" />
          <div>
            <p className="text-sm font-semibold">SnappyWorks</p>
            <p className="text-xs text-muted-foreground">CRM Dashboard</p>
          </div>
        </div>
        {sidebarContent}
      </aside>
    </>
  )
}
