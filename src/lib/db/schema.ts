import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core"

export const leadSourceEnum = pgEnum("lead_source", ["contact", "quote"])

export const leadStatusEnum = pgEnum("lead_status", [
  "new",
  "contacted",
  "quoted",
  "won",
  "lost",
])

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
})

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  source: leadSourceEnum("source").notNull(),
  status: leadStatusEnum("status").notNull().default("new"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  suburb: text("suburb"),
  service: text("service"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
})

export const leadNotes = pgTable("lead_notes", {
  id: serial("id").primaryKey(),
  leadId: integer("lead_id")
    .notNull()
    .references(() => leads.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  author: text("author").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
})

export type User = typeof users.$inferSelect
export type Lead = typeof leads.$inferSelect
export type LeadNote = typeof leadNotes.$inferSelect
export type NewLead = typeof leads.$inferInsert
export type NewLeadNote = typeof leadNotes.$inferInsert
