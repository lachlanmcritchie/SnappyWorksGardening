import { ShieldCheckIcon, BuildingIcon, HardHatIcon, LeafIcon, AwardIcon, MapPinIcon } from "lucide-react"
import { CERTIFICATIONS } from "@/lib/constants"

const icons = [ShieldCheckIcon, BuildingIcon, HardHatIcon, LeafIcon, AwardIcon, MapPinIcon]

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-muted/30 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-8 sm:gap-y-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={cert.label}
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:gap-2 sm:text-sm"
                title={cert.description}
              >
                <Icon className="size-3.5 text-primary sm:size-4" />
                {cert.label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
