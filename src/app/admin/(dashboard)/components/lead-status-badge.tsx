import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const statusConfig = {
  new: { label: "New", className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
  contacted: { label: "Contacted", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  quoted: { label: "Quoted", className: "bg-purple-100 text-purple-800 hover:bg-purple-100" },
  won: { label: "Won", className: "bg-green-100 text-green-800 hover:bg-green-100" },
  lost: { label: "Lost", className: "bg-red-100 text-red-800 hover:bg-red-100" },
} as const

export function LeadStatusBadge({ status }: { status: string }) {
  const config = statusConfig[status as keyof typeof statusConfig] ?? {
    label: status,
    className: "",
  }

  return (
    <Badge variant="secondary" className={cn("text-xs font-medium", config.className)}>
      {config.label}
    </Badge>
  )
}
