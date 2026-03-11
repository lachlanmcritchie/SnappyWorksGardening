import type { Metadata } from "next"
import { ShieldCheckIcon, ClockIcon, StarIcon, MapPinIcon } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { QuoteForm } from "@/components/forms/quote-form"
import { Testimonials } from "@/components/sections/testimonials"

export const metadata: Metadata = {
  title: "Get a Free Quote",
  alternates: { canonical: "/quote" },
  description:
    "Request a free, no-obligation quote for gardening services in Geelong. Mowing, edging, weeding, hedge trimming, pressure cleaning, mulching, landscaping and rubbish removal.",
}

const trustSignals = [
  { icon: ClockIcon, text: "Same-day quotes available" },
  { icon: ShieldCheckIcon, text: "Fully insured" },
  { icon: StarIcon, text: "5-star rated" },
  { icon: MapPinIcon, text: "Geelong-wide service" },
]

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Get a Quote", href: "/quote" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1719591433194-f6d4028f1d31?w=1920&q=80"
        imageAlt="Beautiful garden with flowers"
        eyebrow="Free Quote"
        title="Get a Free Quote"
        description="Fill out the form below and we'll get back to you within 24 hours with a detailed, no-obligation quote."
      />

      {/* Trust Signals */}
      <div className="border-b border-border bg-muted/30 py-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
          {trustSignals.map((signal) => {
            const Icon = signal.icon
            return (
              <span
                key={signal.text}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Icon className="size-4 text-primary" />
                {signal.text}
              </span>
            )
          })}
        </div>
      </div>

      <QuoteForm />

      <Testimonials />
    </>
  )
}
