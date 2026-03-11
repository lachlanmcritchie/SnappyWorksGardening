"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MenuIcon, PhoneCallIcon, ChevronDownIcon } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { NAV_LINKS, BUSINESS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { LogoWordmark } from "@/components/logo"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LogoWordmark />
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-1 p-2 md:w-[480px] md:grid-cols-2">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink
                              href={child.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none"
                            >
                              <div className="text-sm font-medium leading-none text-foreground">
                                {child.label}
                              </div>
                              {child.description && (
                                <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {child.description}
                                </p>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      "inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-muted",
                      pathname === link.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <PhoneCallIcon className="size-4" />
            {BUSINESS.phone}
          </a>
          <Link href="/quote" className={cn(buttonVariants())}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <MenuIcon className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm">
            <SheetHeader>
              <SheetTitle>{BUSINESS.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedMobile(
                            expandedMobile === link.href ? null : link.href
                          )
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                          pathname.startsWith(link.href)
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={cn(
                            "size-4 transition-transform",
                            expandedMobile === link.href && "rotate-180"
                          )}
                        />
                      </button>
                      {expandedMobile === link.href && (
                        <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted",
                                pathname === child.href
                                  ? "font-medium text-foreground"
                                  : "text-muted-foreground"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                        pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="my-3 h-px bg-border" />
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-muted-foreground"
              >
                <PhoneCallIcon className="size-4" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "mt-2")}
              >
                Get a Free Quote
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
