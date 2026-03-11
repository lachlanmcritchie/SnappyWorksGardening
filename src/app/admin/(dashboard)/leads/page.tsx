import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { desc, eq, and, or, ilike, sql, gte } from "drizzle-orm"
import { StatsCards } from "../components/stats-cards"
import { LeadFilters } from "../components/lead-filters"
import { LeadsTable } from "../components/leads-table"
import { Suspense } from "react"

interface SearchParams {
  status?: string
  source?: string
  q?: string
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const { status, source, q } = params

  // Build filter conditions
  const conditions = []
  if (status && status !== "all") {
    conditions.push(eq(leads.status, status as "new" | "contacted" | "quoted" | "won" | "lost"))
  }
  if (source && source !== "all") {
    conditions.push(eq(leads.source, source as "contact" | "quote"))
  }
  if (q) {
    conditions.push(
      or(
        ilike(leads.name, `%${q}%`),
        ilike(leads.email, `%${q}%`),
        ilike(leads.suburb, `%${q}%`)
      )
    )
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined

  // Fetch leads and stats in parallel
  const now = new Date()
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const [allLeads, statsResult] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(whereClause)
      .orderBy(desc(leads.createdAt)),
    db
      .select({
        total: sql<number>`count(*)::int`,
        newLeads: sql<number>`count(*) filter (where ${leads.status} = 'new')::int`,
        wonLeads: sql<number>`count(*) filter (where ${leads.status} = 'won')::int`,
        thisMonth: sql<number>`count(*) filter (where ${leads.createdAt} >= ${firstOfMonth})::int`,
      })
      .from(leads),
  ])

  const stats = statsResult[0] ?? { total: 0, newLeads: 0, wonLeads: 0, thisMonth: 0 }

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold">Leads</h1>
        <p className="text-sm text-muted-foreground">
          Manage and track all incoming enquiries
        </p>
      </div>

      <StatsCards
        total={stats.total}
        newLeads={stats.newLeads}
        wonLeads={stats.wonLeads}
        thisMonth={stats.thisMonth}
      />

      <Suspense>
        <LeadFilters />
      </Suspense>

      <LeadsTable leads={allLeads} />
    </div>
  )
}
