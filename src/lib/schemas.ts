import { z } from "zod"

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  suburb: z.string().min(2, "Please enter your suburb"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide some details about the job"),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide some details"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
