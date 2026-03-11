import { ClipboardList, Truck, Sparkles } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { ArrowRightIcon } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Request a Quote",
    description:
      "Tell us about your property online or by phone. It's free, fast and no obligation.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "We Come to You",
    description:
      "We assess the job and give you a clear, upfront price. No hidden fees, no surprises.",
    icon: Truck,
  },
  {
    number: "3",
    title: "Enjoy Your Space",
    description:
      "We do the work, clean up and leave your outdoor space looking its absolute best.",
    icon: Sparkles,
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple Process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting your garden sorted is easy. Here&apos;s how we work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute top-14 right-[calc(16.67%+1rem)] left-[calc(16.67%+1rem)] hidden h-0.5 bg-border md:block" />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
                  <Icon className="size-6" />
                </div>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <LinkButton href="/quote" size="lg">
            Get Your Free Quote
            <ArrowRightIcon className="ml-1 size-4" />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
