import { Hero } from "@/components/sections/hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { HowItWorks } from "@/components/sections/how-it-works"
import { AboutPreview } from "@/components/sections/about-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <AboutPreview />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
