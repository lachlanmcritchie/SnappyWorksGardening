import {
  Flower2,
  Sprout,
  SprayCan,
  Shrub,
  LeafyGreen,
  Recycle,
  PhoneCall,
  Mail,
  MapPinHouse,
  CalendarClock,
  type LucideIcon,
} from "lucide-react"

// ─── Site ────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://snappyworkgardening.com.au"

// ─── Business Info ───────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "SnappyWorks Gardening",
  tagline: "Professional Gardening Services in Geelong",
  phone: "0438 539 044",
  email: "hello@snappyworkgardening.com.au",
  address: "Geelong, Victoria",
  hours: "Mon–Sat: 7am – 6pm",
  abn: "",
  yearFounded: 2024,
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

// ─── Services ────────────────────────────────────────────────────────────────

export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: LucideIcon
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing",
    shortDescription: "Regular mowing to keep your lawn looking pristine all year round.",
    description:
      "Our professional lawn mowing service keeps your grass at the perfect height with clean edges and striped finishes. We handle lawns of all sizes across Geelong, from compact courtyards to sprawling properties.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
  },
  {
    slug: "weeding",
    title: "Garden Weeding",
    shortDescription: "Thorough weed removal to keep your garden beds healthy and tidy.",
    description:
      "We remove weeds by the root, apply mulch, and maintain garden beds so your plants can thrive. Regular weeding prevents pest problems and keeps your outdoor areas looking their best.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortDescription: "High-pressure cleaning for driveways, paths, patios and more.",
    description:
      "Our professional pressure cleaning restores driveways, paths, patios, decks and exterior walls to like-new condition. We remove built-up grime, moss, mould and stains safely and efficiently.",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming",
    shortDescription: "Expert shaping and trimming to keep hedges neat and well-maintained.",
    description:
      "From formal box hedges to native screening plants, we trim and shape your hedges for a clean, professional look. Regular trimming promotes thick, healthy growth and enhances your property's kerb appeal.",
    icon: Shrub,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    shortDescription: "Comprehensive garden care including pruning, mulching and tidying.",
    description:
      "Our full garden maintenance service covers pruning, mulching, fertilising, plant health checks and seasonal clean-ups. We create a custom maintenance plan tailored to your garden's unique needs.",
    icon: LeafyGreen,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
  {
    slug: "garden-clean-ups",
    title: "Garden Clean-Ups",
    shortDescription: "One-off clean-ups for overgrown or neglected outdoor areas.",
    description:
      "Whether you're preparing for a sale, moving into a new home, or just need a fresh start — our garden clean-up service tackles overgrown areas, removes green waste and transforms neglected spaces.",
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string
  location: string
  text: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Newtown, Geelong",
    text: "SnappyWorks transformed our backyard from an overgrown mess into a beautiful space we actually enjoy spending time in. Professional, punctual, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Belmont, Geelong",
    text: "We've been using SnappyWorks for regular lawn mowing and hedge trimming for over a year now. Always reliable, always a great result. Highly recommend!",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Highton, Geelong",
    text: "The pressure cleaning on our driveway was incredible — it looks brand new. The team was friendly and finished faster than expected. Will definitely book again.",
    rating: 5,
  },
  {
    name: "Mark D.",
    location: "Ocean Grove",
    text: "Great communication from start to finish. They gave us an honest quote and delivered exactly what they promised. Our garden has never looked better.",
    rating: 5,
  },
  {
    name: "Rachel W.",
    location: "Grovedale, Geelong",
    text: "I was dreading tackling our garden after years of neglect. SnappyWorks' clean-up service was exactly what we needed. Friendly team and amazing transformation!",
    rating: 5,
  },
  {
    name: "Tom B.",
    location: "Torquay",
    text: "Consistent, quality work every fortnight. They even send a reminder before each visit. It's the little things that make a big difference. Top service!",
    rating: 5,
  },
]

// ─── Contact Info Items ──────────────────────────────────────────────────────

export const CONTACT_INFO = [
  { icon: PhoneCall, label: "Phone", value: BUSINESS.phone, href: `tel:${BUSINESS.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: MapPinHouse, label: "Service Area", value: "Geelong & Surrounding Suburbs", href: null },
  { icon: CalendarClock, label: "Hours", value: BUSINESS.hours, href: null },
] as const

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS = [
  { value: "500+", label: "Happy Customers" },
  { value: "2,000+", label: "Jobs Completed" },
  { value: "5★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
] as const

// ─── Values ──────────────────────────────────────────────────────────────────

export const VALUES = [
  {
    title: "Reliability",
    description: "We show up on time, every time. You can count on us to deliver consistent, quality results.",
  },
  {
    title: "Quality",
    description: "We take pride in every job, no matter how big or small. Your garden deserves the best.",
  },
  {
    title: "Local",
    description: "Born and raised in Geelong, we know the local climate, soils and plants inside out.",
  },
  {
    title: "Fair Pricing",
    description: "Honest, upfront quotes with no hidden fees. Great value for professional results.",
  },
] as const

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQS = [
  {
    question: "What areas do you service?",
    answer: "We service Geelong and surrounding suburbs including Newtown, Highton, Belmont, Grovedale, Ocean Grove, Torquay, Lara, and more. Contact us to check if we cover your area.",
  },
  {
    question: "How do I get a quote?",
    answer: "You can request a free quote through our website, give us a call, or send us an email. We'll usually get back to you within 24 hours with a detailed, no-obligation quote.",
  },
  {
    question: "Do you offer regular maintenance plans?",
    answer: "Yes! We offer weekly, fortnightly and monthly maintenance plans tailored to your garden's needs. Regular clients enjoy priority booking and consistent pricing.",
  },
  {
    question: "Do I need to be home during the service?",
    answer: "Not at all. As long as we have access to the areas that need work, we can complete the job while you're out. We'll send you a message when we're done.",
  },
  {
    question: "What happens if it rains on my scheduled day?",
    answer: "If the weather prevents us from completing the job safely and to our usual standard, we'll reschedule at the earliest convenient time — no extra charge.",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we carry full public liability insurance for your peace of mind. We can provide a certificate of currency upon request.",
  },
] as const

// ─── Service Areas ──────────────────────────────────────────────────────────

export const SERVICE_AREAS = [
  "Geelong CBD",
  "Newtown",
  "Highton",
  "Belmont",
  "Grovedale",
  "Waurn Ponds",
  "Ocean Grove",
  "Torquay",
  "Lara",
  "Corio",
  "Leopold",
  "Clifton Springs",
  "Drysdale",
  "Armstrong Creek",
  "Mount Duneed",
] as const
