import type { Metadata } from "next"
import Image from "next/image"
import {
  ClockCheck,
  Award,
  MapPinHouse,
  HandCoins,
  ShieldCheck,
  Leaf,
} from "lucide-react"
import { CERTIFICATIONS } from "@/lib/constants"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PageHero } from "@/components/sections/page-hero"
import { StatsBar } from "@/components/sections/stats-bar"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Testimonials } from "@/components/sections/testimonials"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SnappyWorks Gardening — Geelong's trusted local gardening and outdoor maintenance professionals. Our story, values and commitment to quality.",
  alternates: { canonical: "/about" },
}

const VALUES = [
  {
    icon: ClockCheck,
    title: "Reliability",
    description:
      "We show up on time, communicate clearly, and deliver consistent results you can count on — visit after visit.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We take pride in every job, using professional equipment and proven techniques to achieve the best possible result.",
  },
  {
    icon: MapPinHouse,
    title: "Local Knowledge",
    description:
      "Based in Geelong, we understand the local climate, soils and plant species — so your garden gets the right care.",
  },
  {
    icon: HandCoins,
    title: "Fair Pricing",
    description:
      "Honest, upfront quotes with no hidden fees. We believe professional garden care should be accessible to everyone.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?w=1920&q=80"
        imageAlt="Lush green garden in Geelong"
        eyebrow="About Us"
        title="Built on Quality, Driven by Results"
        description="We're a Geelong-based gardening company with a passion for transforming outdoor spaces and a commitment to doing things properly."
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1663697317598-319f0b5ef8b4?w=800&q=80"
                alt="Beautiful garden maintained by SnappyWorks Gardening"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  SnappyWorks Gardening was founded with a clear vision: to
                  bring professional-grade garden care to homes and businesses
                  across the Geelong region — with the personal touch and
                  accountability that only a local operator can provide.
                </p>
                <p>
                  We believe everyone deserves a beautiful outdoor space, and
                  that professional garden care shouldn&apos;t be complicated or
                  overpriced. That&apos;s why we focus on delivering reliable,
                  high-quality work with honest, upfront pricing and clear
                  communication from start to finish.
                </p>
                <p>
                  Whether it&apos;s a regular lawn mow, a full garden
                  transformation, or ongoing commercial maintenance — we bring
                  the same level of care, professionalism and attention to detail
                  to every single job. That&apos;s the SnappyWorks difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide every decision we make and every property we
              work on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Credentials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Professional Standards You Can Trust
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => {
              const icons = [ShieldCheck, ShieldCheck, ShieldCheck, Leaf, Award, MapPinHouse]
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={cert.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
