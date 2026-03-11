"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPinHouseIcon } from "lucide-react"
import { GALLERY_ITEMS, SERVICES } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all")

  const filtered =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.service === filter)

  const serviceFilters = SERVICES.filter((s) =>
    GALLERY_ITEMS.some((g) => g.service === s.slug)
  )

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all",
            filter === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/30"
          )}
        >
          All Projects
        </button>
        {serviceFilters.map((service) => (
          <button
            key={service.slug}
            onClick={() => setFilter(service.slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              filter === service.slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/30"
            )}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
          >
            {/* Before/After Images */}
            <div className="grid grid-cols-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.beforeImage}
                  alt={`Before: ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.afterImage}
                  alt={`After: ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute bottom-2 right-2 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  After
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPinHouseIcon className="size-3.5" />
                {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No projects found for this filter.
        </p>
      )}
    </>
  )
}
