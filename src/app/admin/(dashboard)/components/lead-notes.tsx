"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { addLeadNote } from "../../actions"
import type { LeadNote } from "@/lib/db/schema"
import { toast } from "sonner"

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date)
}

export function LeadNotes({
  leadId,
  notes,
}: {
  leadId: number
  notes: LeadNote[]
}) {
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const content = formData.get("content") as string
    if (!content.trim()) return

    startTransition(async () => {
      const result = await addLeadNote(leadId, content)
      if (result.success) {
        form.reset()
        toast.success("Note added")
      } else {
        toast.error(result.error)
      }
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Notes</h3>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          name="content"
          placeholder="Add a note..."
          className="min-h-[60px]"
          required
        />
        <Button type="submit" size="sm" disabled={isPending} className="self-end">
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add"}
        </Button>
      </form>

      {notes.length === 0 ? (
        <p className="text-sm text-muted-foreground">No notes yet.</p>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <div key={note.id} className="rounded-lg border p-3">
              <p className="text-sm">{note.content}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{note.author}</span>
                <span>&middot;</span>
                <span>{formatDateTime(note.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
