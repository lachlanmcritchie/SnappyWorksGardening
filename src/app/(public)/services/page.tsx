import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRightIcon,
  MessageSquareText,
  ClipboardCheck,
  PartyPopper,
  HomeIcon,
  BuildingIcon,
} from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { SERVICES, FAQS } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { TrustBadges } from "@/components/sections/trust-badges"
import { ServicePackages } from "@/components/sections/service-packages"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
  description:
    "Explore our full range of gardening services including mowing, edging, hedge trimming, pressure cleaning, weeding, mulching, landscaping and rubbish removal in Geelong.",
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55?w=1920&q=80"
        imageAlt="Professional garden maintenance in Geelong"
        eyebrow="Our Services"
        title="Everything Your Garden Needs"
        description="Professional outdoor maintenance services for residential and commercial properties across Geelong. Tailored plans, honest pricing, outstanding results."
      />

      {/* Services Detail */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              const isReversed = index % 2 === 1
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24"
                >
                  <div
                    className="grid items-center gap-10 lg:grid-cols-2"
                  >
                    {/* Image */}
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                        isReversed ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
                    </div>

                    {/* Content */}
                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <LinkButton href="/quote" size="lg" className="mt-6">
                        Get a Quote
                        <ArrowRightIcon className="ml-1 size-4" />
                      </LinkButton>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Serve
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Residential & Commercial
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you&apos;re a homeowner or a property manager, we have a
              service plan that fits.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HomeIcon className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Residential</h3>
              <p className="mt-2 text-muted-foreground">
                Keep your home looking its best with regular garden care tailored
                to your property and lifestyle.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Family homes and townhouses</li>
                <li>• Rental properties and investment homes</li>
                <li>• New builds and established gardens</li>
                <li>• Holiday homes and Airbnb properties</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BuildingIcon className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Commercial</h3>
              <p className="mt-2 text-muted-foreground">
                Professional outdoor maintenance that keeps your business
                premises looking sharp and well-maintained.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Office parks and retail spaces</li>
                <li>• Body corporates and strata properties</li>
                <li>• Real estate and property management</li>
                <li>• Schools, childcare and community facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicePackages />

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Simple Steps
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MessageSquareText,
                step: "01",
                title: "Get in Touch",
                description:
                  "Request a free quote online or give us a call. Tell us what you need and we'll take it from there.",
              },
              {
                icon: ClipboardCheck,
                step: "02",
                title: "We Visit & Quote",
                description:
                  "We'll assess the job on-site (if needed) and provide a clear, upfront quote — no hidden costs.",
              },
              {
                icon: PartyPopper,
                step: "03",
                title: "Job Done",
                description:
                  "We complete the work to the highest standard, clean up and leave your outdoor space looking amazing.",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="relative rounded-xl border border-border bg-card p-6 text-center"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
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
