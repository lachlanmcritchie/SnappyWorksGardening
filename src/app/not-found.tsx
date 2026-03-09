import { LinkButton } from "@/components/ui/link-button"
import { ArrowLeftIcon } from "lucide-react"

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
        <LinkButton href="/" size="lg" className="mt-8">
          <ArrowLeftIcon className="mr-1 size-4" />
          Back to Home
        </LinkButton>
      </div>
    </section>
  )
}
