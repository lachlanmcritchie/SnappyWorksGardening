import Link from "next/link"
import { PhoneCallIcon, MailIcon, MapPinHouseIcon } from "lucide-react"
import { BUSINESS, SERVICES, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">SW</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional gardening and outdoor maintenance services for homes
              and businesses across Geelong and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <PhoneCallIcon className="size-4 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MailIcon className="size-4 shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinHouseIcon className="size-4 shrink-0" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
