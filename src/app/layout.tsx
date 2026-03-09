import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://snappyworkgardening.com.au"),
  title: {
    default: "SnappyWorks Gardening | Professional Gardening Services Geelong",
    template: "%s | SnappyWorks Gardening",
  },
  description:
    "Professional gardening and outdoor maintenance services in Geelong, Victoria. Lawn mowing, hedge trimming, pressure cleaning, weeding and more. Get a free quote today.",
  keywords: [
    "gardening services Geelong",
    "lawn mowing Geelong",
    "hedge trimming Geelong",
    "pressure cleaning Geelong",
    "garden maintenance Geelong",
    "landscaping Geelong",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SnappyWorks Gardening | Professional Gardening Services Geelong",
    description:
      "Professional gardening and outdoor maintenance services in Geelong, Victoria. Get a free quote today.",
    type: "website",
    locale: "en_AU",
    url: "https://snappyworkgardening.com.au",
    siteName: "SnappyWorks Gardening",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnappyWorks Gardening | Professional Gardening Services Geelong",
    description:
      "Professional gardening and outdoor maintenance services in Geelong, Victoria. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
