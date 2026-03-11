import type { Metadata } from "next"
import { BUSINESS, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use and protect your personal information.`,
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="prose prose-neutral mx-auto max-w-3xl px-4 text-foreground sm:px-6 lg:px-8 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:text-muted-foreground [&_li]:text-muted-foreground">
          <h2>1. Information We Collect</h2>
          <p>
            When you contact us or request a quote, we may collect the following
            personal information:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Property address or suburb</li>
            <li>Details about the services you require</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Respond to your enquiries and provide quotes</li>
            <li>Deliver the gardening services you request</li>
            <li>Communicate with you about bookings and scheduling</li>
            <li>Send service reminders (with your consent)</li>
            <li>Improve our services and website</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade or share your personal information with third
            parties, except as required by law or with service providers who
            assist in operating our business (e.g. email delivery services).
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from
            unauthorised access, modification or disclosure. However, no method
            of electronic transmission or storage is 100% secure.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience.
            Cookies are small files stored on your device that help us
            understand how you use our site. You can disable cookies in your
            browser settings.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Under Australian Privacy law, you have the right to access, correct
            or delete the personal information we hold about you. To make a
            request, please contact us.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us:
          </p>
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
