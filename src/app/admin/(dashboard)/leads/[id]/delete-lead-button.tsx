"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"
import { deleteLead } from "../../../actions"
import { toast } from "sonner"

export function DeleteLeadButton({ leadId }: { leadId: number }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  function handleDelete() {
    if (!confirm("Are you sure you want to delete this lead? This cannot be undone.")) {
      return
    }

    startTransition(async () => {
      const result = await deleteLead(leadId)
      if (result.success) {
        toast.success("Lead deleted")
        router.push("/admin/leads")
      } else {
        toast.error(result.error)
      }
    })
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="mr-1 h-4 w-4 animate-spin" />
      ) : (
        <Trash2 className="mr-1 h-4 w-4" />
      )}
      Delete Lead
    </Button>
  )
}
