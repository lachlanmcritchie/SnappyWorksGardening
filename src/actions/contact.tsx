"use server"

import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { resend } from "@/lib/resend"
import { ContactNotificationEmail } from "@/components/emails/contact-notification"

type ActionResult =
  | { success: true }
  | { success: false; error: string }

export async function submitContactAction(
  data: ContactFormData
): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Please check your input and try again." }
  }

  const validData = parsed.data
  const contactEmail =
    process.env.CONTACT_EMAIL ?? "hello@snappyworkgardening.com.au"

  try {
    await resend.emails.send({
      from: "SnappyWorks Gardening <noreply@snappyworkgardening.com.au>",
      to: contactEmail,
      replyTo: validData.email,
      subject: `Contact Form: ${validData.name}`,
      react: <ContactNotificationEmail data={validData} />,
    })

    return { success: true }
  } catch {
    return {
      success: false,
      error:
        "Failed to send your message. Please try again or call us directly.",
    }
  }
}
