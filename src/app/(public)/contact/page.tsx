import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon, ClockIcon, MapPinHouseIcon } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ContactForm } from "@/components/forms/contact-form"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { CONTACT_INFO, FAQS, SERVICE_AREAS } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with SnappyWorks Gardening. Call us, email us or visit our contact page for a free gardening quote in Geelong.",
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1766229034500-0d9a6f55fd33?w=1920&q=80"
        imageAlt="Well-maintained garden landscape"
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Have a question or ready to book? We'd love to hear from you. Reach out via phone, email or request a quote online."
      />

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              )
              if (item.href) {
                return (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                )
              }
              return <div key={item.label}>{content}</div>
            })}
          </div>

          {/* Response Promise */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ClockIcon className="size-4 text-primary" />
            We respond to all enquiries within 2 hours during business hours.
          </div>

          {/* Quote CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Ready for a Free Quote?
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Tell us about your garden and we&apos;ll get back to you with a
              detailed, no-obligation quote — often the same day.
            </p>
            <LinkButton href="/quote" size="lg" className="mt-6">
              Request a Quote
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>

          {/* Service Areas */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-6 text-center text-xl font-bold text-foreground">
              Areas We Service
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  <MapPinHouseIcon className="size-3" />
                  {area.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/areas"
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                View all service areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Common Questions
            </h2>
          </div>
          <Accordion className="mt-10">
            {FAQS.slice(0, 4).map((faq, i) => (
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
    </>
  )
}
