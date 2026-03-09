import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { LinkButton } from "@/components/ui/link-button"

export function ServicesGrid() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From routine lawn care to one-off garden clean-ups, we offer a full
            range of professional outdoor services.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Icon badge */}
                  <div className="absolute -bottom-4 left-4 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Learn more
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <LinkButton href="/services" variant="outline" size="lg">
            View All Services
            <ArrowRightIcon className="ml-1 size-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
