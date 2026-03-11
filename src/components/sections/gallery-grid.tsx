import Image from "next/image"
import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { GALLERY_ITEMS, SERVICES } from "@/lib/constants"

interface GalleryGridProps {
  limit?: number
  showHeader?: boolean
}

export function GalleryGrid({ limit, showHeader = true }: GalleryGridProps) {
  const items = limit ? GALLERY_ITEMS.slice(0, limit) : GALLERY_ITEMS

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See the difference professional garden care makes. Here are some of
              our recent transformations across Geelong.
            </p>
          </div>
        )}

        <div className={`${showHeader ? "mt-14" : ""} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {items.map((item) => {
            const service = SERVICES.find((s) => s.slug === item.service)
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.afterImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {service && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                      {service.title}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPinIcon className="size-3.5" />
                    {item.location}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {limit && GALLERY_ITEMS.length > limit && (
          <div className="mt-12 text-center">
            <LinkButton href="/gallery" variant="outline" size="lg">
              View All Projects
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  )
}
