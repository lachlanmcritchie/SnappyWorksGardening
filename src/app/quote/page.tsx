import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { QuoteForm } from "@/components/forms/quote-form"

export const metadata: Metadata = {
  title: "Get a Free Quote",
  alternates: { canonical: "/quote" },
  description:
    "Request a free, no-obligation quote for gardening services in Geelong. Lawn mowing, hedge trimming, pressure cleaning, weeding and more.",
}

export default function QuotePage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
        imageAlt="Beautiful garden with flowers"
        eyebrow="Free Quote"
        title="Get a Free Quote"
        description="Fill out the form below and we'll get back to you within 24 hours with a detailed, no-obligation quote."
      />

      <QuoteForm />
    </>
  )
}
