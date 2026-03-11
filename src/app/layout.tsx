import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Outfit } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "800"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

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
    "edging Geelong",
    "mulching Geelong",
    "rubbish removal Geelong",
    "garden tidy Geelong",
    "lawn care Geelong",
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
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
