import type { Metadata } from "next"
import Link from "next/link"
import { MapPinHouseIcon, ArrowRightIcon } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBanner } from "@/components/sections/cta-banner"
import { SERVICE_AREAS, SERVICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Service Areas",
  alternates: { canonical: "/areas" },
  description:
    "SnappyWorks Gardening services Geelong and surrounding suburbs including Newtown, Highton, Belmont, North Geelong, Norlane, Torquay and more. Find gardening services near you.",
}

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas", href: "/areas" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1572534382957-f16792f46259?w=1920&q=80"
        imageAlt="Gardening services across Geelong suburbs"
        eyebrow="Service Areas"
        title="Servicing All of Geelong"
        description="Professional gardening and outdoor maintenance across Geelong and surrounding suburbs. Find your area below."
      />

      {/* Areas Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Areas We Service
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide all {SERVICES.length} of our gardening services across {SERVICE_AREAS.length} suburbs in the Geelong region.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPinHouseIcon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground">
                      {area.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {area.description.split(".")[0]}.
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      View services
                      <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Services Available in Every Area
            </h2>
            <p className="mt-4 text-muted-foreground">
              All of our professional gardening services are available across every suburb we service.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{service.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
