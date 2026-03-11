import { db } from "@/lib/db"
import { leads, leadNotes } from "@/lib/db/schema"
import { eq, desc } from "drizzle-orm"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { LinkButton } from "@/components/ui/link-button"
import { ArrowLeft, Mail, Phone, MapPin, Wrench, Calendar, MessageSquare } from "lucide-react"
import { LeadStatusSelect } from "./lead-status-select"
import { LeadNotes } from "../../components/lead-notes"
import { DeleteLeadButton } from "./delete-lead-button"

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date)
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const leadId = parseInt(id, 10)
  if (isNaN(leadId)) notFound()

  const [lead] = await db
    .select()
    .from(leads)
    .where(eq(leads.id, leadId))
    .limit(1)

  if (!lead) notFound()

  const notes = await db
    .select()
    .from(leadNotes)
    .where(eq(leadNotes.leadId, leadId))
    .orderBy(desc(leadNotes.createdAt))

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
      <div className="flex items-center gap-4">
        <LinkButton variant="ghost" size="sm" href="/admin/leads">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back
        </LinkButton>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">{lead.name}</h1>
          <p className="text-sm text-muted-foreground capitalize">
            {lead.source} form submission
          </p>
        </div>
        <LeadStatusSelect leadId={lead.id} currentStatus={lead.status} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Contact Info
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href={`mailto:${lead.email}`} className="hover:underline">
                {lead.email}
              </a>
            </div>
            {lead.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${lead.phone}`} className="hover:underline">
                  {lead.phone}
                </a>
              </div>
            )}
            {lead.suburb && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                {lead.suburb}
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4 space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Details
          </h3>
          <div className="space-y-2">
            {lead.service && (
              <div className="flex items-center gap-2 text-sm">
                <Wrench className="h-4 w-4 text-muted-foreground" />
                <span className="capitalize">{lead.service.replace(/-/g, " ")}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              {formatDateTime(lead.createdAt)}
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Message
        </h3>
        <p className="text-sm whitespace-pre-wrap">{lead.message}</p>
      </Card>

      <Card className="p-4">
        <LeadNotes leadId={lead.id} notes={notes} />
      </Card>

      <div className="flex justify-end border-t pt-4">
        <DeleteLeadButton leadId={lead.id} />
      </div>
    </div>
  )
}
