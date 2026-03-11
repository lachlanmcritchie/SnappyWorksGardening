import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBanner } from "@/components/sections/cta-banner"
import { FAQS, SERVICE_FAQS, SERVICES } from "@/lib/constants"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  alternates: { canonical: "/faq" },
  description:
    "Find answers to common questions about SnappyWorks Gardening services in Geelong. Pricing, scheduling, service areas, insurance and more.",
}

export default function FaqPage() {
  // Collect all service FAQs grouped by service name
  const serviceFaqSections = SERVICES.filter(
    (s) => SERVICE_FAQS[s.slug] && SERVICE_FAQS[s.slug].length > 0
  ).map((service) => ({
    title: service.title,
    faqs: SERVICE_FAQS[service.slug],
  }))

  // Full FAQ schema including all questions
  const allFaqs = [
    ...FAQS,
    ...Object.values(SERVICE_FAQS).flat(),
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1698521620533-4ccf55a057b1?w=1920&q=80"
        imageAlt="Frequently asked questions about gardening services"
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about our gardening services in Geelong. Can't find your answer? Get in touch."
      />

      {/* General FAQs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            General Questions
          </h2>
          <Accordion className="mt-8">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`general-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      {serviceFaqSections.map((section) => (
        <section key={section.title} className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {section.title}
            </h2>
            <Accordion className="mt-8">
              {section.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`${section.title}-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  )
}
