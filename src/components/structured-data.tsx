import { BUSINESS, SERVICES, FAQS, SITE_URL } from "@/lib/constants"

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geelong",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    foundingDate: `${BUSINESS.yearFounded}`,
    openingHours: "Mo-Sa 07:00-18:00",
    areaServed: {
      "@type": "City",
      name: "Geelong",
      containedInPlace: {
        "@type": "State",
        name: "Victoria",
      },
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
    // Only include aggregateRating once verified Google reviews exist
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5",
    //   reviewCount: "500",
    // },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
