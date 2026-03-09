import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { SERVICES, FAQS, SITE_URL } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { CtaBanner } from "@/components/sections/cta-banner"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | SnappyWorks Gardening`,
      description: service.description,
      type: "website",
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: service.image, width: 800, height: 600, alt: service.title }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = service.icon

  // Service-specific JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "SnappyWorks Gardening",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Geelong",
    },
    image: service.image,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Icon className="size-7" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {service.description}
            </p>
            <LinkButton
              href="/quote"
              size="lg"
              className="mt-8 h-12 px-6 text-base"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                What&apos;s Included
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-8 space-y-4">
                {getServiceBenefits(service.slug).map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={`${service.title} service in Geelong`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Get in Touch",
                description:
                  "Request a free quote online or give us a call. Tell us about your garden and what you need.",
              },
              {
                step: "2",
                title: "We Quote & Schedule",
                description:
                  "We provide a clear, upfront quote and book a time that works for you — no hidden costs.",
              },
              {
                step: "3",
                title: "Job Done",
                description:
                  "We complete the work to the highest standard, clean up and leave your space looking amazing.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

function getServiceBenefits(slug: string): string[] {
  const benefits: Record<string, string[]> = {
    "lawn-mowing": [
      "Professional-grade mowers for a clean, even cut",
      "Edging along paths, driveways and garden beds",
      "Clippings collected and removed",
      "Regular weekly, fortnightly or monthly schedules",
      "Lawns of all sizes — from courtyard to acreage",
    ],
    weeding: [
      "Thorough removal of weeds by the root",
      "Garden bed tidying and reshaping",
      "Mulch application to suppress future weed growth",
      "Safe, eco-friendly weed management",
      "Regular maintenance plans available",
    ],
    "pressure-cleaning": [
      "Driveways, paths, patios and decks restored",
      "Exterior walls, fences and retaining walls cleaned",
      "Moss, mould and grime removal",
      "Professional-grade equipment for fast results",
      "Safe cleaning methods for all surface types",
    ],
    "hedge-trimming": [
      "Formal and informal hedge shaping",
      "Height reduction and width control",
      "Native screening plant maintenance",
      "Green waste removed and disposed of",
      "Regular trimming schedules to maintain shape",
    ],
    "garden-maintenance": [
      "Pruning, deadheading and plant health checks",
      "Mulching and fertilising",
      "Seasonal clean-ups (spring, autumn)",
      "Custom maintenance plans for your garden",
      "Expert advice on plant care and garden health",
    ],
    "garden-clean-ups": [
      "Overgrown areas cleared and tidied",
      "Green waste removal and disposal",
      "Garden bed restoration and mulching",
      "Pre-sale and rental property preparation",
      "One-off or ongoing clean-up services",
    ],
  }
  return benefits[slug] ?? [
    "Professional service from experienced team",
    "Fully insured for your peace of mind",
    "Free, no-obligation quotes",
    "Serving Geelong and surrounding suburbs",
  ]
}
