"use client"

import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LeadStatusBadge } from "./lead-status-badge"
import { Badge } from "@/components/ui/badge"
import type { Lead } from "@/lib/db/schema"
import { Mail, Phone } from "lucide-react"

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date)
}

export function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
        <p className="text-muted-foreground">No leads found</p>
        <p className="text-sm text-muted-foreground">
          Leads will appear here when customers submit forms on your website.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell>
                <Link
                  href={`/admin/leads/${lead.id}`}
                  className="font-medium hover:underline"
                >
                  {lead.name}
                </Link>
                {lead.suburb && (
                  <p className="text-xs text-muted-foreground">{lead.suburb}</p>
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1 text-sm">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    {lead.email}
                  </span>
                  {lead.phone && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      {lead.phone}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {lead.service ? (
                  <span className="text-sm capitalize">
                    {lead.service.replace(/-/g, " ")}
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs capitalize">
                  {lead.source}
                </Badge>
              </TableCell>
              <TableCell>
                <LeadStatusBadge status={lead.status} />
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {formatDate(lead.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
