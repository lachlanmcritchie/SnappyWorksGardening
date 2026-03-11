import type { Metadata } from "next"
import { BUSINESS, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
  description: `Terms of service for ${BUSINESS.name}. Read our terms and conditions for gardening services in Geelong.`,
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="prose prose-neutral mx-auto max-w-3xl px-4 text-foreground sm:px-6 lg:px-8 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:text-muted-foreground [&_li]:text-muted-foreground">
          <h2>1. Services</h2>
          <p>
            {BUSINESS.name} provides professional gardening and outdoor
            maintenance services across Geelong, Victoria and surrounding
            suburbs. Services are provided subject to these terms and any
            specific agreement made at the time of booking.
          </p>

          <h2>2. Quotes & Pricing</h2>
          <p>
            All quotes are provided free of charge and are valid for 30 days
            from the date of issue unless otherwise stated. Prices are in
            Australian dollars and include GST where applicable. We reserve the
            right to adjust pricing if the scope of work differs from the
            original quote.
          </p>

          <h2>3. Bookings & Scheduling</h2>
          <p>
            Bookings are confirmed once we have agreed on the scope of work and
            a date has been set. We will make every effort to attend at the
            scheduled time. In the event of severe weather or unforeseen
            circumstances, we will reschedule at no additional cost.
          </p>

          <h2>4. Cancellations</h2>
          <p>
            We ask for at least 24 hours&apos; notice for cancellations. Repeated
            no-shows or late cancellations may result in a cancellation fee.
          </p>

          <h2>5. Access & Safety</h2>
          <p>
            Customers are responsible for ensuring we have safe access to the
            areas requiring work. Please secure pets and remove any hazards
            before our arrival. We reserve the right to decline or stop work if
            we determine conditions are unsafe.
          </p>

          <h2>6. Payment</h2>
          <p>
            Payment is due upon completion of the work unless otherwise agreed.
            We accept bank transfer and cash. For regular maintenance plans,
            invoices are issued at the agreed frequency.
          </p>

          <h2>7. Liability & Insurance</h2>
          <p>
            {BUSINESS.name} holds public liability insurance. We take reasonable
            care to avoid damage to your property. Any concerns about damage
            must be reported within 48 hours of the service. We are not liable
            for pre-existing damage, hidden hazards, or damage to unhealthy
            plants.
          </p>

          <h2>8. Green Waste</h2>
          <p>
            Unless otherwise agreed, green waste generated during our services
            will be removed from the property. Additional fees may apply for
            large volumes of waste.
          </p>

          <h2>9. Satisfaction Guarantee</h2>
          <p>
            We strive for 100% customer satisfaction. If you are not happy with
            any aspect of our work, please contact us within 48 hours and we
            will make it right.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. The latest version will
            always be available on our website.
          </p>

          <h2>11. Contact</h2>
          <p>For any questions about these terms, please contact us:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Email: {BUSINESS.email}</li>
            <li>Phone: {BUSINESS.phone}</li>
            <li>
              Website:{" "}
              <a
                href={SITE_URL}
                className="text-primary underline"
              >
                {SITE_URL}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
