import type { Metadata } from "next"
import Image from "next/image"
import {
  ClockCheck,
  Award,
  MapPinHouse,
  HandCoins,
} from "lucide-react"
import { STATS } from "@/lib/constants"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Testimonials } from "@/components/sections/testimonials"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SnappyWorks Gardening — Geelong's trusted local gardening and outdoor maintenance team. Our story, values and commitment to quality.",
  alternates: { canonical: "/about" },
}

const VALUES = [
  {
    icon: ClockCheck,
    title: "Reliability",
    description:
      "We show up on time, every time. You can count on us to deliver consistent, quality results.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We take pride in every job, no matter how big or small. Your garden deserves the best.",
  },
  {
    icon: MapPinHouse,
    title: "Local",
    description:
      "Born and raised in Geelong, we know the local climate, soils and plants inside out.",
  },
  {
    icon: HandCoins,
    title: "Fair Pricing",
    description:
      "Honest, upfront quotes with no hidden fees. Great value for professional results.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
        imageAlt="Lush green garden in Geelong"
        eyebrow="About Us"
        title="Your Local Garden Care Team"
        description="Passionate about gardens. Committed to quality. Proud to serve Geelong."
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
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
                  SnappyWorks Gardening was born from a love of the outdoors and
                  a desire to help Geelong homeowners make the most of their
                  gardens. What started as a one-person operation has grown into
                  a trusted local team serving hundreds of happy customers.
                </p>
                <p>
                  We believe everyone deserves a beautiful outdoor space — and
                  that professional garden care shouldn&apos;t be complicated or
                  overpriced. That&apos;s why we focus on delivering reliable,
                  high-quality work with honest, upfront pricing.
                </p>
                <p>
                  Whether it&apos;s a regular lawn mow, a full garden clean-up
                  or anything in between, we treat every property like it&apos;s
                  our own. That&apos;s the SnappyWorks difference.
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
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-4">
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

      <Testimonials />
      <CtaBanner />
    </>
  )
}
