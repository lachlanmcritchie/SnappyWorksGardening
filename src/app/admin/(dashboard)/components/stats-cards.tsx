import { Card } from "@/components/ui/card"
import { Users, UserPlus, TrendingUp, CalendarDays } from "lucide-react"

interface StatsCardsProps {
  total: number
  newLeads: number
  wonLeads: number
  thisMonth: number
}

export function StatsCards({ total, newLeads, wonLeads, thisMonth }: StatsCardsProps) {
  const conversionRate = total > 0 ? Math.round((wonLeads / total) * 100) : 0

  const stats = [
    {
      label: "Total Leads",
      value: total,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "New Leads",
      value: newLeads,
      icon: UserPlus,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      label: "Conversion Rate",
      value: `${conversionRate}%`,
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "This Month",
      value: thisMonth,
      icon: CalendarDays,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
