import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRightIcon, MapPinHouseIcon, CheckCircleIcon } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SERVICES, SERVICE_AREAS, FAQS, SITE_URL, BUSINESS } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  if (!area) return {}

  return {
    title: `Gardening Services in ${area.name}`,
    description: `Professional gardening services in ${area.name}, Geelong. Mowing, edging, hedge trimming, pressure cleaning, mulching and more. Get a free quote today.`,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: {
      title: `Gardening Services in ${area.name} | SnappyWorks Gardening`,
      description: `Professional gardening services in ${area.name}. Get a free quote today.`,
      type: "website",
      url: `${SITE_URL}/areas/${slug}`,
    },
  }
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  if (!area) notFound()

  const nearbyAreaObjects = SERVICE_AREAS.filter((a) =>
    area.nearbyAreas.includes(a.slug)
  )

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: `Professional gardening services in ${area.name}, Geelong`,
    url: `${SITE_URL}/areas/${slug}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      postalCode: area.postcode,
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gardening Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Service Areas", href: "/areas" },
          { label: area.name, href: `/areas/${area.slug}` },
        ]}
      />

      <PageHero
        image="https://images.unsplash.com/photo-1598817368048-c2948b983acf?w=1920&q=80"
        imageAlt={`Gardening services in ${area.name}`}
        eyebrow={area.name}
        title={`Gardening Services in ${area.name}`}
        description={`Professional lawn care, garden maintenance and outdoor services for ${area.name} homes and businesses.`}
      />

      {/* About Area */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Your Local Gardening Team in {area.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {area.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                <MapPinHouseIcon className="size-3.5" />
                {area.name}, {area.postcode}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Offer
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services Available in {area.name}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why {area.name} Residents Choose SnappyWorks
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                `Local team that knows ${area.name} gardens and soil conditions`,
                "Fully insured with public liability coverage",
                "Free, no-obligation quotes within 24 hours",
                "Reliable weekly, fortnightly or monthly scheduling",
                "All green waste removed and disposed of responsibly",
                "Consistent, professional results every visit",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-foreground">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <LinkButton href="/quote" size="lg" className="mt-8">
              Get a Free Quote in {area.name}
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyAreaObjects.length > 0 && (
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Nearby Service Areas
            </h2>
            <p className="mt-2 text-muted-foreground">
              We also service these suburbs near {area.name}.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyAreaObjects.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPinHouseIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{nearby.name}</h3>
                    <span className="text-sm text-muted-foreground">{nearby.postcode}</span>
                  </div>
                  <ArrowRightIcon className="ml-auto size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion className="mt-10">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
