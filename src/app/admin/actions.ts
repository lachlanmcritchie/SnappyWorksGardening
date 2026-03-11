"use server"

import { db } from "@/lib/db"
import { leads, leadNotes } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { auth } from "@/lib/auth"

type ActionResult = { success: true } | { success: false; error: string }

async function getSessionOrThrow() {
  const session = await auth()
  if (!session?.user) throw new Error("Unauthorized")
  return session
}

export async function updateLeadStatus(
  leadId: number,
  status: "new" | "contacted" | "quoted" | "won" | "lost"
): Promise<ActionResult> {
  try {
    await getSessionOrThrow()
    await db
      .update(leads)
      .set({ status, updatedAt: new Date() })
      .where(eq(leads.id, leadId))
    revalidatePath("/admin/leads")
    revalidatePath(`/admin/leads/${leadId}`)
    return { success: true }
  } catch {
    return { success: false, error: "Failed to update status" }
  }
}

export async function addLeadNote(
  leadId: number,
  content: string
): Promise<ActionResult> {
  try {
    const session = await getSessionOrThrow()
    await db.insert(leadNotes).values({
      leadId,
      content,
      author: session.user?.name ?? session.user?.email ?? "Admin",
    })
    revalidatePath(`/admin/leads/${leadId}`)
    return { success: true }
  } catch {
    return { success: false, error: "Failed to add note" }
  }
}

export async function deleteLeadNote(noteId: number): Promise<ActionResult> {
  try {
    await getSessionOrThrow()
    await db.delete(leadNotes).where(eq(leadNotes.id, noteId))
    revalidatePath("/admin/leads")
    return { success: true }
  } catch {
    return { success: false, error: "Failed to delete note" }
  }
}

export async function deleteLead(leadId: number): Promise<ActionResult> {
  try {
    await getSessionOrThrow()
    await db.delete(leads).where(eq(leads.id, leadId))
    revalidatePath("/admin/leads")
    return { success: true }
  } catch {
    return { success: false, error: "Failed to delete lead" }
  }
}
