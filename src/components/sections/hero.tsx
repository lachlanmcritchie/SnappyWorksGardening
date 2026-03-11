import Image from "next/image"
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react"
import { LinkButton, AnchorButton } from "@/components/ui/link-button"
import { BUSINESS } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1610843191564-fce681daf430?w=1920&q=80"
        alt="Professional lawn mowing service in Geelong"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="inline-block size-1.5 rounded-full bg-green-400" />
            Professional Gardening Across Geelong
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Garden,{" "}
            <span className="text-green-300">Done Right</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Professional gardening and outdoor maintenance services across
            Geelong. From regular lawn mowing to complete garden transformations
            — we make your outdoor spaces shine.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton
              href="/quote"
              size="lg"
              className="h-12 w-full bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90 sm:w-auto"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
            <AnchorButton
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              variant="outline"
              size="lg"
              className="h-12 w-full border-white/30 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              <PhoneCallIcon className="mr-1 size-4" />
              Call {BUSINESS.phone}
            </AnchorButton>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-sm font-medium text-white/60">
            Fully Insured · Eco-Friendly · Free Quotes · Geelong-Wide
          </p>
        </div>
      </div>
    </section>
  )
}
