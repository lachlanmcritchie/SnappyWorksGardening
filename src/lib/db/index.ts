import { neon } from "@neondatabase/serverless"
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http"
import * as schema from "./schema"

let _db: NeonHttpDatabase<typeof schema> | null = null

export function getDb() {
  if (!_db) {
    if (!process.env.POSTGRES_URL) {
      throw new Error(
        "POSTGRES_URL environment variable is required. Run: vercel env pull .env.local"
      )
    }
    const sql = neon(process.env.POSTGRES_URL)
    _db = drizzle(sql, { schema })
  }
  return _db
}

// Convenience getter for use in server actions and pages
export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_target, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop]
  },
})
