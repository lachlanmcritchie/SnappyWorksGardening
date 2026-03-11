import Link from "next/link"
import { ChevronRightIcon, HomeIcon } from "lucide-react"

export type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `https://snappyworkgardening.com.au${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {allItems.map((item, i) => {
              const isLast = i === allItems.length - 1
              return (
                <li key={item.href} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRightIcon className="size-3.5 text-muted-foreground/50" />
                  )}
                  {isLast ? (
                    <span className="font-medium text-foreground">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                    >
                      {i === 0 && <HomeIcon className="size-3.5" />}
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
