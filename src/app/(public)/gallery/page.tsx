import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBanner } from "@/components/sections/cta-banner"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Our Work",
  alternates: { canonical: "/gallery" },
  description:
    "See before and after photos of our gardening work across Geelong. Lawn mowing, hedge trimming, pressure cleaning, mulching and garden transformations.",
}

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1646794874930-7749b35d606f?w=1920&q=80"
        imageAlt="Before and after garden transformations"
        eyebrow="Our Work"
        title="See the Transformation"
        description="Real results from real Geelong gardens. Browse our before and after gallery to see the SnappyWorks difference."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
