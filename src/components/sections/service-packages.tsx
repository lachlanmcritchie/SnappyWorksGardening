import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { LinkButton } from "@/components/ui/link-button"
import { SERVICE_PACKAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function ServicePackages() {
  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Packages
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Flexible Service Plans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the level of care that suits your property. All plans include
            a free initial consultation and same-day quoting.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col rounded-xl border bg-card p-8",
                pkg.highlighted
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              )}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <LinkButton
                href="/quote"
                variant={pkg.highlighted ? "default" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                Request a Quote
                <ArrowRightIcon className="ml-1 size-4" />
              </LinkButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
