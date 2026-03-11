/**
 * Seed script to create the first admin user.
 *
 * Usage:
 *   npx tsx scripts/seed-admin.ts
 *
 * Environment variables required:
 *   POSTGRES_URL - Neon/Vercel Postgres connection string
 *
 * You will be prompted for name, email, and password.
 */

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import bcrypt from "bcryptjs"
import * as readline from "readline"
import * as schema from "../src/lib/db/schema"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()))
  })
}

async function main() {
  if (!process.env.POSTGRES_URL) {
    console.error("Error: POSTGRES_URL environment variable is required.")
    console.error("Run: vercel env pull .env.local")
    process.exit(1)
  }

  const sql = neon(process.env.POSTGRES_URL)
  const db = drizzle(sql, { schema })

  console.log("\n--- Create Admin User ---\n")

  const name = await ask("Name: ")
  const email = await ask("Email: ")
  const password = await ask("Password: ")

  if (!name || !email || !password) {
    console.error("All fields are required.")
    process.exit(1)
  }

  if (password.length < 8) {
    console.error("Password must be at least 8 characters.")
    process.exit(1)
  }

  const passwordHash = await bcrypt.hash(password, 12)
  const id = crypto.randomUUID()

  await db.insert(schema.users).values({
    id,
    name,
    email,
    passwordHash,
  })

  console.log(`\nAdmin user created successfully!`)
  console.log(`  Email: ${email}`)
  console.log(`  Login at: /admin/login\n`)

  rl.close()
}

main().catch((err) => {
  console.error("Error:", err)
  process.exit(1)
})
