import Link from "next/link"
import { MapPinHouseIcon, ArrowRightIcon } from "lucide-react"
import { SERVICE_AREAS } from "@/lib/constants"
import { LinkButton } from "@/components/ui/link-button"

export function ServiceAreasPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Service Areas
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Servicing All of Geelong
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional gardening services across {SERVICE_AREAS.length} suburbs in the greater Geelong region.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <MapPinHouseIcon className="size-3.5" />
              {area.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <LinkButton href="/areas" variant="outline">
            View All Service Areas
            <ArrowRightIcon className="ml-1 size-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
