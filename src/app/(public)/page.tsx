import { Hero } from "@/components/sections/hero"
import { TrustBadges } from "@/components/sections/trust-badges"
import { ServicesGrid } from "@/components/sections/services-grid"
import { HowItWorks } from "@/components/sections/how-it-works"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview"
import { AboutPreview } from "@/components/sections/about-preview"
import { StatsBar } from "@/components/sections/stats-bar"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <GalleryGrid limit={3} />
      <HowItWorks />
      <ServiceAreasPreview />
      <AboutPreview />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
