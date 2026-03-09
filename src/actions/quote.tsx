"use server"

import { quoteFormSchema, type QuoteFormData } from "@/lib/schemas"
import { resend } from "@/lib/resend"
import { QuoteNotificationEmail } from "@/components/emails/quote-notification"
import { QuoteConfirmationEmail } from "@/components/emails/quote-confirmation"
import { SERVICES } from "@/lib/constants"

type ActionResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> }

export async function submitQuoteAction(
  data: QuoteFormData
): Promise<ActionResult> {
  const parsed = quoteFormSchema.safeParse(data)
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!fieldErrors[key]) fieldErrors[key] = []
      fieldErrors[key].push(issue.message)
    }
    return { success: false, error: "Validation failed", fieldErrors }
  }

  const validData = parsed.data
  const service = SERVICES.find((s) => s.slug === validData.service)
  const serviceName = service?.title ?? validData.service

  const contactEmail =
    process.env.CONTACT_EMAIL ?? "hello@snappyworkgardening.com.au"

  try {
    // Send notification to business owner and confirmation to customer in parallel
    await Promise.all([
      resend.emails.send({
        from: "SnappyWorks Gardening <noreply@snappyworkgardening.com.au>",
        to: contactEmail,
        replyTo: validData.email,
        subject: `New Quote Request: ${serviceName} - ${validData.name}`,
        react: <QuoteNotificationEmail data={validData} />,
      }),
      resend.emails.send({
        from: "SnappyWorks Gardening <noreply@snappyworkgardening.com.au>",
        to: validData.email,
        subject: "We've received your quote request - SnappyWorks Gardening",
        react: <QuoteConfirmationEmail data={validData} />,
      }),
    ])

    return { success: true }
  } catch {
    return {
      success: false,
      error:
        "Failed to send your request. Please try again or call us directly.",
    }
  }
}
