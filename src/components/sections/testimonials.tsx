import { StarIcon, MessageSquareQuote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just take our word for it — here&apos;s what Geelong
            locals have to say about our work.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((testimonial, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <MessageSquareQuote className="mb-3 size-8 text-primary/20" />
              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <StarIcon
                    key={j}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
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
      </div>
    </section>
  )
}
