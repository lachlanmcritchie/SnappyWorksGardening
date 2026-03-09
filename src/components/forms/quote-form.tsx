"use client"

import { useState, useTransition } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircleIcon, LoaderIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { quoteFormSchema, type QuoteFormData } from "@/lib/schemas"
import { submitQuoteAction } from "@/actions/quote"
import { SERVICES, BUSINESS } from "@/lib/constants"

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      suburb: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(data: QuoteFormData) {
    setServerError(null)
    startTransition(async () => {
      const result = await submitQuoteAction(data)
      if (result.success) {
        setSubmitted(true)
      } else {
        setServerError(result.error)
      }
    })
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircleIcon className="size-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Quote Request Sent!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thanks for reaching out. We&apos;ll review your request and get back
            to you within 24 hours with a detailed quote.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We&apos;ve sent a confirmation to your email. Need something urgent?
            Call us at{" "}
            <a
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              className="font-medium text-primary underline"
            >
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {serverError && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {serverError}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Smith"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0400 000 000"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="suburb">Suburb</Label>
            <Input
              id="suburb"
              placeholder="e.g. Newtown, Highton, Belmont"
              {...register("suburb")}
            />
            {errors.suburb && (
              <p className="text-sm text-destructive">
                {errors.suburb.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Service Required</Label>
            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((service) => (
                      <SelectItem key={service.slug} value={service.slug}>
                        {service.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.service && (
              <p className="text-sm text-destructive">
                {errors.service.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell Us About the Job</Label>
            <Textarea
              id="message"
              placeholder="Describe what you need — property size, specific areas, any special requirements..."
              rows={5}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <LoaderIcon className="mr-2 size-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Quote Request"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            We&apos;ll respond within 24 hours. Your information is never
            shared with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}
