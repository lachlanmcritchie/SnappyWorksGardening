"use server"

import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { resend } from "@/lib/resend"
import { ContactNotificationEmail } from "@/components/emails/contact-notification"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

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
    process.env.CONTACT_EMAIL ?? "adam@snappyworks.com.au"

  try {
    await resend.emails.send({
      from: "SnappyWorks Gardening <noreply@snappyworks.com.au>",
      to: contactEmail,
      replyTo: validData.email,
      subject: `Contact Form: ${validData.name}`,
      react: <ContactNotificationEmail data={validData} />,
    })

    // Save lead to database (non-blocking — email is the critical path)
    try {
      await db.insert(leads).values({
        source: "contact",
        status: "new",
        name: validData.name,
        email: validData.email,
        message: validData.message,
      })
    } catch (e) {
      console.error("Failed to save contact lead to database:", e)
    }

    return { success: true }
  } catch {
    return {
      success: false,
      error:
        "Failed to send your message. Please try again or call us directly.",
    }
  }
}
