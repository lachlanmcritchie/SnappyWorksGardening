import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRightIcon, MessageSquareText, ClipboardCheck, PartyPopper } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { PageHero } from "@/components/sections/page-hero"
import { SERVICES, FAQS } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { CtaBanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
  description:
    "Explore our full range of gardening services including lawn mowing, hedge trimming, pressure cleaning, weeding and garden maintenance in Geelong.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1920&q=80"
        imageAlt="Professional garden maintenance in Geelong"
        eyebrow="Our Services"
        title="Everything Your Garden Needs"
        description="Professional outdoor maintenance services tailored to Geelong homes and businesses. No job too big or small."
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
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
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

      {/* How It Works */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Simple Steps
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: MessageSquareText,
                title: "Get in Touch",
                description:
                  "Request a free quote online or give us a call. Tell us what you need and we'll take it from there.",
              },
              {
                icon: ClipboardCheck,
                title: "We Visit & Quote",
                description:
                  "We'll assess the job on-site (if needed) and provide a clear, upfront quote — no hidden costs.",
              },
              {
                icon: PartyPopper,
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
