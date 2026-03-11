import Link from "next/link"
import { LinkButton } from "@/components/ui/link-button"
import { ArrowLeftIcon, SearchIcon } from "lucide-react"
import { SERVICES } from "@/lib/constants"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <LinkButton href="/" size="lg">
            <ArrowLeftIcon className="mr-1 size-4" />
            Back to Home
          </LinkButton>
          <LinkButton href="/quote" size="lg" variant="outline">
            Get a Free Quote
          </LinkButton>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/services"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/areas"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Service Areas
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Our Work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
