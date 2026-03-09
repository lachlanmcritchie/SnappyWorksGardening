import Image from "next/image"
import { ArrowRightIcon, CircleCheckBig } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { STATS } from "@/lib/constants"

export function AboutPreview() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
              alt="Professional gardener maintaining a beautiful lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Geelong&apos;s Trusted Garden Care Professionals
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              SnappyWorks Gardening was founded with a simple mission: to deliver
              reliable, high-quality garden care that Geelong homeowners can
              count on. We treat every property like it&apos;s our own.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Fully insured and locally owned",
                "Experienced, friendly team",
                "Consistent results, every visit",
                "Flexible scheduling to suit you",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <CircleCheckBig className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <LinkButton href="/about" size="lg" className="mt-8">
              Learn More About Us
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
