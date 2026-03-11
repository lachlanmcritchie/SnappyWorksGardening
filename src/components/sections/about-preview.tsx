import Image from "next/image"
import { ArrowRightIcon, CircleCheckBig } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"

export function AboutPreview() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1759497860802-9cba5782b455?w=800&q=80"
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
              We built SnappyWorks Gardening on a simple promise: deliver
              reliable, high-quality garden care with honest pricing and
              genuine attention to detail. Every property we work on gets
              the same level of care — because your garden deserves nothing less.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Fully insured and locally owned",
                "Residential and commercial services",
                "Consistent results, every visit",
                "Same-day quotes and flexible scheduling",
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
      </div>
    </section>
  )
}
