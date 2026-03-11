import { ArrowRightIcon, PhoneCallIcon } from "lucide-react"
import { LinkButton, AnchorButton } from "@/components/ui/link-button"
import { BUSINESS } from "@/lib/constants"

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Transform Your Garden?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Get in touch today for a free, no-obligation quote. We&apos;ll have
            your outdoor spaces looking their best in no time.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:px-0">
            <LinkButton
              href="/quote"
              size="lg"
              className="h-12 w-full border-primary-foreground/20 bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90 sm:w-auto"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-1 size-4" />
            </LinkButton>
            <AnchorButton
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              variant="outline"
              size="lg"
              className="h-12 w-full border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              <PhoneCallIcon className="mr-1 size-4" />
              Call Us Now
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  )
}
