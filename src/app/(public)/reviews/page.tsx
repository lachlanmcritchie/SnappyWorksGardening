import type { Metadata } from "next"
import { StarIcon, MessageSquareQuote } from "lucide-react"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBanner } from "@/components/sections/cta-banner"
import { TESTIMONIALS, STATS, BUSINESS, SITE_URL } from "@/lib/constants"
import { LinkButton } from "@/components/ui/link-button"

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  alternates: { canonical: "/reviews" },
  description:
    "Read what Geelong homeowners say about SnappyWorks Gardening. 5-star rated gardening services with hundreds of happy customers across Geelong.",
}

export default function ReviewsPage() {
  const avgRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1)

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: String(TESTIMONIALS.length),
      bestRating: "5",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      reviewBody: t.text,
      ...(t.date && { datePublished: `${t.date}-01` }),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1674049405746-94d3c13dfe5e?w=1920&q=80"
        imageAlt="Happy customers with well-maintained gardens"
        eyebrow="Reviews"
        title="What Our Customers Say"
        description="Don't just take our word for it — hear from Geelong homeowners who trust SnappyWorks with their gardens."
      />

      {/* Stats Bar */}
      <section className="border-b border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <MessageSquareQuote className="absolute right-4 top-4 size-8 text-primary/10" />
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon
                      key={j}
                      className={`size-4 ${
                        j < testimonial.rating
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Happy with our service? We&apos;d love to hear from you.
            </p>
            <LinkButton href="/contact" variant="outline" className="mt-4">
              Leave a Review
            </LinkButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
