import {
  Flower2,
  Sprout,
  SprayCan,
  Shrub,
  LeafyGreen,
  Scissors,
  Layers,
  Trash2,
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
  email: "adam@snappyworks.com.au",
  address: "Geelong, Victoria",
  hours: "Mon–Sat: 7am – 6pm",
  abn: "",
  yearFounded: 2024,
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────

export type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mowing", href: "/services/mowing", description: "Regular lawn mowing for a pristine finish" },
      { label: "Weeding", href: "/services/weeding", description: "Thorough weed removal and bed care" },
      { label: "Edging", href: "/services/edging", description: "Crisp, clean edges along paths and beds" },
      { label: "Pressure Cleaning", href: "/services/pressure-cleaning", description: "Restore driveways, paths and patios" },
      { label: "Hedge Trimming", href: "/services/hedge-trimming", description: "Expert shaping and maintenance" },
      { label: "Garden Tidy", href: "/services/garden-tidy", description: "Complete garden care and tidying" },
      { label: "Mulching & Landscaping", href: "/services/mulching-landscaping", description: "Mulch, soil and garden bed work" },
      { label: "Rubbish Removal", href: "/services/rubbish-removal", description: "Green waste and garden rubbish cleared" },
      { label: "All Services", href: "/services" },
    ],
  },
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

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
    slug: "mowing",
    title: "Mowing",
    shortDescription: "Regular mowing to keep your lawn looking pristine all year round.",
    description:
      "Our professional lawn mowing service keeps your grass at the perfect height with clean edges and striped finishes. We handle lawns of all sizes across Geelong, from compact courtyards to sprawling properties.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1734303023481-7508b5c9f1ff?w=800&q=80",
  },
  {
    slug: "weeding",
    title: "Weeding",
    shortDescription: "Thorough weed removal to keep your garden beds healthy and tidy.",
    description:
      "We remove weeds by the root, apply mulch, and maintain garden beds so your plants can thrive. Regular weeding prevents pest problems and keeps your outdoor areas looking their best.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1652339961527-e6baae619661?w=800&q=80",
  },
  {
    slug: "edging",
    title: "Edging",
    shortDescription: "Crisp, clean edges along paths, driveways and garden beds.",
    description:
      "Sharp edging transforms the look of your lawn and garden. We use professional line trimmers and edging tools to create clean, defined borders along paths, driveways, garden beds and fence lines — giving your property that finished, well-maintained look.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1627740283098-1c544d3a479d?w=800&q=80",
  },
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortDescription: "High-pressure cleaning for driveways, paths, patios and more.",
    description:
      "Our professional pressure cleaning restores driveways, paths, patios, decks and exterior walls to like-new condition. We remove built-up grime, moss, mould and stains safely and efficiently.",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1652087084805-e9814bd1a8c1?w=800&q=80",
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming",
    shortDescription: "Expert shaping and trimming to keep hedges neat and well-maintained.",
    description:
      "From formal box hedges to native screening plants, we trim and shape your hedges for a clean, professional look. Regular trimming promotes thick, healthy growth and enhances your property's kerb appeal.",
    icon: Shrub,
    image: "https://images.unsplash.com/photo-1729938825151-483cda78c513?w=800&q=80",
  },
  {
    slug: "garden-tidy",
    title: "Garden Tidy",
    shortDescription: "Comprehensive garden care including pruning, tidying and seasonal clean-ups.",
    description:
      "Our garden tidy service covers everything your outdoor space needs — pruning, deadheading, leaf removal, bed tidying and seasonal clean-ups. We create a custom plan tailored to your garden's unique needs so it always looks its best.",
    icon: LeafyGreen,
    image: "https://images.unsplash.com/photo-1541870132-3a6c34afa5f8?w=800&q=80",
  },
  {
    slug: "mulching-landscaping",
    title: "Mulching & Landscaping",
    shortDescription: "Professional mulching, soil work and garden bed landscaping.",
    description:
      "Transform your garden with fresh mulch, quality soil and professional bed preparation. Mulching suppresses weeds, retains moisture and gives your garden a polished finish. We also handle small-scale landscaping projects including garden bed creation, reshaping and plant installation.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1766189790526-b699899d1013?w=800&q=80",
  },
  {
    slug: "rubbish-removal",
    title: "Rubbish Removal",
    shortDescription: "Green waste and garden rubbish cleared and disposed of responsibly.",
    description:
      "We handle all green waste and garden rubbish removal — from branches and clippings to old pots, broken pavers and general garden debris. Everything is cleared, loaded and disposed of responsibly so you don't have to lift a finger.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1693257845823-e49b416de52a?w=800&q=80",
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────

export type Testimonial = {
  name: string
  location: string
  text: string
  rating: number
  service?: string
  date?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Newtown, Geelong",
    text: "SnappyWorks transformed our backyard from an overgrown mess into a beautiful space we actually enjoy spending time in. Professional, punctual, and the results speak for themselves.",
    rating: 5,
    service: "garden-tidy",
    date: "2025-11",
  },
  {
    name: "James T.",
    location: "Belmont, Geelong",
    text: "We've been using SnappyWorks for regular lawn mowing and hedge trimming for over a year now. Always reliable, always a great result. Highly recommend!",
    rating: 5,
    service: "mowing",
    date: "2025-10",
  },
  {
    name: "Linda K.",
    location: "Highton, Geelong",
    text: "The pressure cleaning on our driveway was incredible — it looks brand new. The team was friendly and finished faster than expected. Will definitely book again.",
    rating: 5,
    service: "pressure-cleaning",
    date: "2025-09",
  },
  {
    name: "Mark D.",
    location: "North Geelong",
    text: "Great communication from start to finish. They gave us an honest quote and delivered exactly what they promised. Our garden has never looked better.",
    rating: 5,
    service: "garden-tidy",
    date: "2025-08",
  },
  {
    name: "Rachel W.",
    location: "Grovedale, Geelong",
    text: "I was dreading tackling our garden after years of neglect. SnappyWorks' clean-up service was exactly what we needed. Friendly team and amazing transformation!",
    rating: 5,
    service: "rubbish-removal",
    date: "2025-07",
  },
  {
    name: "Tom B.",
    location: "Torquay",
    text: "Consistent, quality work every fortnight. They even send a reminder before each visit. It's the little things that make a big difference. Top service!",
    rating: 5,
    service: "mowing",
    date: "2025-06",
  },
  {
    name: "Angela C.",
    location: "Waurn Ponds, Geelong",
    text: "Had the whole front yard mulched and edged — looks absolutely fantastic. The team was quick, tidy and left everything spotless. Worth every cent.",
    rating: 5,
    service: "mulching-landscaping",
    date: "2025-10",
  },
  {
    name: "David H.",
    location: "Armstrong Creek",
    text: "We moved into a new build with a blank yard. SnappyWorks helped us with mulching, edging and ongoing mowing. Couldn't be happier with how it's all come together.",
    rating: 5,
    service: "mulching-landscaping",
    date: "2025-09",
  },
  {
    name: "Karen P.",
    location: "Leopold",
    text: "Best gardening team in Geelong, hands down. They're always on time, do a brilliant job on our hedges and leave the yard cleaner than they found it.",
    rating: 5,
    service: "hedge-trimming",
    date: "2025-08",
  },
  {
    name: "Steve R.",
    location: "Lara",
    text: "Had a massive pile of green waste and old garden junk that had been sitting for months. SnappyWorks cleared the lot in a couple of hours. Legends!",
    rating: 5,
    service: "rubbish-removal",
    date: "2025-07",
  },
  {
    name: "Fiona G.",
    location: "Norlane",
    text: "The edging along our driveway and paths made such a difference to the overall look of the property. It's these small details that really matter. Great job!",
    rating: 5,
    service: "edging",
    date: "2025-06",
  },
  {
    name: "Chris W.",
    location: "Mount Duneed",
    text: "We use SnappyWorks for regular weeding and garden tidy services. Our garden has never been healthier. Reliable, friendly and genuinely passionate about what they do.",
    rating: 5,
    service: "weeding",
    date: "2025-05",
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
  { value: "5★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "Same Day", label: "Quotes Available" },
  { value: "Geelong‑Wide", label: "Service Coverage" },
] as const

// ─── Certifications / Trust Signals ─────────────────────────────────────────

export type Certification = {
  label: string
  description: string
}

export const CERTIFICATIONS: Certification[] = [
  { label: "Fully Insured", description: "Public liability insurance for complete peace of mind" },
  { label: "ABN Registered", description: "Legitimate, registered Australian business" },
  { label: "WorkSafe Compliant", description: "Meeting all workplace health and safety standards" },
  { label: "Eco-Friendly", description: "Sustainable practices and responsible waste disposal" },
  { label: "Licensed & Qualified", description: "Professional training and industry qualifications" },
  { label: "Local & Independent", description: "Proudly Geelong-owned and operated" },
]

// ─── Service Packages ───────────────────────────────────────────────────────

export type ServicePackage = {
  name: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: "Essential",
    description: "Perfect for regular lawn and garden upkeep on residential properties.",
    features: [
      "Lawn mowing & edging",
      "Garden bed weeding",
      "Path & driveway blowing",
      "Green waste removal",
      "Fortnightly or monthly visits",
    ],
  },
  {
    name: "Premium",
    description: "Comprehensive care for homeowners who want their garden looking its absolute best.",
    features: [
      "Everything in Essential",
      "Hedge trimming & shaping",
      "Mulching top-ups",
      "Seasonal pruning",
      "Priority scheduling",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Commercial",
    description: "Tailored maintenance plans for businesses, body corporates and property managers.",
    features: [
      "Custom service schedule",
      "Multi-property management",
      "Pressure cleaning included",
      "Landscape maintenance",
      "Compliance reporting",
      "Dedicated account manager",
    ],
  },
]

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

export type FAQ = {
  question: string
  answer: string
  category?: string
}

export const FAQS: FAQ[] = [
  {
    question: "What areas do you service?",
    answer: "We service Geelong and surrounding suburbs including Newtown, Highton, Belmont, Grovedale, North Geelong, Norlane, Torquay, Lara, and more. Contact us to check if we cover your area.",
    category: "General",
  },
  {
    question: "How do I get a quote?",
    answer: "You can request a free quote through our website, give us a call, or send us an email. We'll usually get back to you within 24 hours with a detailed, no-obligation quote.",
    category: "Pricing",
  },
  {
    question: "Do you offer regular maintenance plans?",
    answer: "Yes! We offer weekly, fortnightly and monthly maintenance plans tailored to your garden's needs. Regular clients enjoy priority booking and consistent pricing.",
    category: "Scheduling",
  },
  {
    question: "Do I need to be home during the service?",
    answer: "Not at all. As long as we have access to the areas that need work, we can complete the job while you're out. We'll send you a message when we're done.",
    category: "General",
  },
  {
    question: "What happens if it rains on my scheduled day?",
    answer: "If the weather prevents us from completing the job safely and to our usual standard, we'll reschedule at the earliest convenient time — no extra charge.",
    category: "Scheduling",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we carry full public liability insurance for your peace of mind. We can provide a certificate of currency upon request.",
    category: "General",
  },
]

// ─── Service-Specific FAQs ──────────────────────────────────────────────────

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  mowing: [
    { question: "How often should I get my lawn mowed?", answer: "In Geelong's climate, most lawns benefit from mowing every 1–2 weeks during spring and summer, and every 3–4 weeks in autumn and winter. We'll recommend a schedule based on your grass type.", category: "Mowing" },
    { question: "Do you mow in wet weather?", answer: "We avoid mowing in heavy rain as it can damage the lawn and leave an uneven finish. If your scheduled day is rained out, we'll reschedule at no extra cost.", category: "Mowing" },
    { question: "Can you mow nature strips and large properties?", answer: "Absolutely. We handle everything from small courtyards to large acreage properties, including nature strips and common areas.", category: "Mowing" },
  ],
  weeding: [
    { question: "How do you prevent weeds from coming back?", answer: "We remove weeds by the root and recommend mulching to suppress regrowth. For persistent weeds, we can apply eco-friendly treatments and set up a regular maintenance plan.", category: "Weeding" },
    { question: "Do you use chemicals for weed control?", answer: "We prefer manual removal and organic methods wherever possible. If herbicides are needed, we use targeted, eco-friendly products that are safe for pets and children.", category: "Weeding" },
    { question: "Can you weed around delicate plants?", answer: "Yes — our team is experienced in working carefully around established plants, seedlings and delicate garden beds without causing damage.", category: "Weeding" },
  ],
  edging: [
    { question: "What's the difference between edging and mowing?", answer: "Mowing cuts the grass across your lawn, while edging creates clean, defined borders along paths, driveways, garden beds and fence lines. Edging is the finishing touch that makes your lawn look professionally maintained.", category: "Edging" },
    { question: "How often should edging be done?", answer: "We recommend edging every 2–4 weeks during the growing season. It can be bundled with your regular mowing service for a polished result every visit.", category: "Edging" },
    { question: "Do you edge around garden beds and fence lines?", answer: "Yes, we edge along all borders — paths, driveways, garden beds, fence lines and nature strips. We use professional line trimmers for a precise finish.", category: "Edging" },
  ],
  "pressure-cleaning": [
    { question: "What surfaces can you pressure clean?", answer: "We clean concrete driveways, pavers, timber and composite decks, patios, exterior walls, fences, retaining walls and more. We adjust the pressure and technique for each surface type.", category: "Pressure Cleaning" },
    { question: "Will pressure cleaning damage my surfaces?", answer: "No — we use the correct pressure settings and nozzles for each surface type. Our team is trained to deliver a thorough clean without causing damage to your property.", category: "Pressure Cleaning" },
    { question: "How often should I get my driveway pressure cleaned?", answer: "Most driveways benefit from a clean every 12–18 months. High-traffic areas or shaded surfaces prone to moss and mould may need cleaning more frequently.", category: "Pressure Cleaning" },
  ],
  "hedge-trimming": [
    { question: "When is the best time to trim hedges?", answer: "Most hedges in Geelong can be trimmed year-round, but the ideal time is late spring and late summer. We'll advise on the best schedule based on your hedge species.", category: "Hedge Trimming" },
    { question: "Can you reduce the height of overgrown hedges?", answer: "Yes, we can reduce height and width on most hedge varieties. For heavily overgrown hedges, we may recommend a staged approach to keep the plants healthy.", category: "Hedge Trimming" },
    { question: "Do you remove the hedge clippings?", answer: "Yes — all clippings and green waste are collected and removed as part of the service. We leave your property tidy.", category: "Hedge Trimming" },
  ],
  "garden-tidy": [
    { question: "What does a garden tidy include?", answer: "A garden tidy typically includes pruning, deadheading, leaf and debris removal, bed tidying, light weeding and a general clean-up of your outdoor areas. We tailor the scope to your garden's needs.", category: "Garden Tidy" },
    { question: "Can I book a one-off garden tidy?", answer: "Absolutely. We offer both one-off tidy-ups and regular maintenance plans. One-off services are great for pre-sale preparation, post-winter clean-ups or getting on top of a neglected garden.", category: "Garden Tidy" },
    { question: "Do you provide ongoing garden maintenance plans?", answer: "Yes — we create custom maintenance plans based on your garden's size, plant types and your preferences. Plans can include mowing, edging, weeding, pruning and seasonal tidy-ups.", category: "Garden Tidy" },
  ],
  "mulching-landscaping": [
    { question: "What type of mulch do you use?", answer: "We typically use high-quality, locally sourced bark mulch or eucalyptus mulch. We can also supply sugar cane, pea straw or decorative gravels depending on your preference and garden needs.", category: "Mulching & Landscaping" },
    { question: "How deep should mulch be applied?", answer: "We apply mulch at 50–75mm depth for optimal weed suppression and moisture retention. We keep mulch away from plant stems and tree trunks to prevent rot.", category: "Mulching & Landscaping" },
    { question: "Can you create new garden beds?", answer: "Yes — we handle garden bed creation from scratch, including edging, soil preparation, mulching and planting. We can work with your ideas or suggest designs suited to Geelong's climate.", category: "Mulching & Landscaping" },
  ],
  "rubbish-removal": [
    { question: "What types of garden waste do you remove?", answer: "We remove all green waste including branches, clippings, leaves, weeds, old mulch, dead plants and general garden debris. We also handle old pots, broken pavers and small amounts of soil or rubble.", category: "Rubbish Removal" },
    { question: "Do you dispose of waste responsibly?", answer: "Yes — all green waste is taken to licensed facilities for composting or recycling. We're committed to responsible disposal and minimising landfill wherever possible.", category: "Rubbish Removal" },
    { question: "Can I combine rubbish removal with other services?", answer: "Absolutely. Many clients bundle rubbish removal with a garden tidy or mulching service. It's a great way to get a complete garden transformation in one visit.", category: "Rubbish Removal" },
  ],
}

// ─── Service Areas ──────────────────────────────────────────────────────────

export type ServiceArea = {
  name: string
  slug: string
  description: string
  postcode: string
  nearbyAreas: string[]
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Geelong CBD",
    slug: "geelong-cbd",
    description: "Servicing homes and businesses in the heart of Geelong. From compact courtyards to commercial properties, we keep Geelong CBD outdoor spaces looking sharp and well-maintained all year round.",
    postcode: "3220",
    nearbyAreas: ["newtown", "belmont", "highton"],
  },
  {
    name: "Newtown",
    slug: "newtown",
    description: "Newtown is one of Geelong's most established suburbs with beautiful period homes and mature gardens. Our team understands the unique needs of Newtown gardens — from heritage hedges to modern landscaping.",
    postcode: "3220",
    nearbyAreas: ["geelong-cbd", "highton", "belmont"],
  },
  {
    name: "Highton",
    slug: "highton",
    description: "With a mix of established and newer homes, Highton gardens range from large family blocks to low-maintenance modern yards. We provide reliable mowing, edging, hedging and garden maintenance across Highton.",
    postcode: "3216",
    nearbyAreas: ["newtown", "belmont", "grovedale", "waurn-ponds"],
  },
  {
    name: "Belmont",
    slug: "belmont",
    description: "Belmont's leafy streets and family homes deserve gardens that look their best. We offer the full range of gardening services to Belmont residents — from regular mowing to complete garden transformations.",
    postcode: "3216",
    nearbyAreas: ["geelong-cbd", "newtown", "highton", "grovedale"],
  },
  {
    name: "Grovedale",
    slug: "grovedale",
    description: "A growing suburb with plenty of new builds and established homes, Grovedale is one of our busiest service areas. We help Grovedale homeowners keep their gardens tidy, healthy and looking great.",
    postcode: "3216",
    nearbyAreas: ["belmont", "highton", "waurn-ponds", "armstrong-creek"],
  },
  {
    name: "Waurn Ponds",
    slug: "waurn-ponds",
    description: "From the leafy streets near Deakin University to the newer estates, Waurn Ponds gardens need regular care to thrive. We offer tailored maintenance plans to suit every Waurn Ponds property.",
    postcode: "3216",
    nearbyAreas: ["highton", "grovedale", "armstrong-creek", "mount-duneed"],
  },
  {
    name: "North Geelong",
    slug: "north-geelong",
    description: "North Geelong's established homes and industrial surrounds mean gardens need regular attention to stay looking their best. We provide reliable mowing, edging and garden tidy services across North Geelong.",
    postcode: "3215",
    nearbyAreas: ["geelong-cbd", "corio", "norlane", "belmont"],
  },
  {
    name: "Norlane",
    slug: "norlane",
    description: "We proudly service Norlane with affordable, quality gardening services. From regular lawn mowing to garden clean-ups and pressure cleaning, our team keeps Norlane properties neat and tidy.",
    postcode: "3214",
    nearbyAreas: ["corio", "north-geelong", "geelong-cbd", "lara"],
  },
  {
    name: "Torquay",
    slug: "torquay",
    description: "Torquay's surf coast lifestyle deserves a garden to match. We service Torquay homes with regular mowing, edging, hedging and pressure cleaning — keeping outdoor spaces as relaxed and beautiful as the town itself.",
    postcode: "3228",
    nearbyAreas: ["armstrong-creek", "mount-duneed", "grovedale"],
  },
  {
    name: "Lara",
    slug: "lara",
    description: "Lara's mix of rural properties and suburban estates means gardens come in all shapes and sizes. We handle everything from large acreage mowing to detailed garden tidy services across Lara.",
    postcode: "3212",
    nearbyAreas: ["corio", "geelong-cbd", "leopold"],
  },
  {
    name: "Corio",
    slug: "corio",
    description: "We proudly service homes across Corio with affordable, reliable gardening services. Whether you need regular mowing or a one-off garden clean-up, our team is here to help.",
    postcode: "3214",
    nearbyAreas: ["lara", "north-geelong", "norlane", "geelong-cbd"],
  },
  {
    name: "Leopold",
    slug: "leopold",
    description: "Leopold sits between Geelong and the Bellarine, with a growing community of families and retirees. We offer regular garden maintenance, mulching and landscaping to keep Leopold properties looking their best.",
    postcode: "3224",
    nearbyAreas: ["geelong-cbd", "north-geelong", "corio", "lara"],
  },
  {
    name: "Armstrong Creek",
    slug: "armstrong-creek",
    description: "As one of Geelong's fastest-growing suburbs, Armstrong Creek is full of new homes with fresh gardens that need care. We help new homeowners establish and maintain beautiful outdoor spaces from day one.",
    postcode: "3217",
    nearbyAreas: ["grovedale", "waurn-ponds", "mount-duneed", "torquay"],
  },
  {
    name: "Mount Duneed",
    slug: "mount-duneed",
    description: "Mount Duneed's new estates feature modern homes with gardens ready to grow. We offer everything from initial mulching and landscaping to ongoing lawn care and garden maintenance.",
    postcode: "3217",
    nearbyAreas: ["armstrong-creek", "waurn-ponds", "torquay"],
  },
]

// ─── Gallery ────────────────────────────────────────────────────────────────

export type GalleryItem = {
  title: string
  description: string
  service: string
  location: string
  beforeImage: string
  afterImage: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Complete Lawn Transformation",
    description: "Overgrown lawn restored with mowing, edging and a fresh mulch border.",
    service: "mowing",
    location: "Newtown",
    beforeImage: "https://images.unsplash.com/photo-1761819620447-10593214fdc7?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1628340981113-fe1949fe5cc0?w=800&q=80",
  },
  {
    title: "Driveway Pressure Clean",
    description: "Years of grime, moss and oil stains removed from a concrete driveway.",
    service: "pressure-cleaning",
    location: "Belmont",
    beforeImage: "https://images.unsplash.com/photo-1619171136829-48f171e0bc7e?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?w=800&q=80",
  },
  {
    title: "Hedge Shaping & Reduction",
    description: "Overgrown hedges shaped and reduced to a neat, uniform height.",
    service: "hedge-trimming",
    location: "Highton",
    beforeImage: "https://images.unsplash.com/photo-1599574358415-57bbcc13d9a8?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1685712811378-72818dc2f56a?w=800&q=80",
  },
  {
    title: "Garden Bed Mulching",
    description: "Fresh bark mulch applied to garden beds after thorough weeding and edging.",
    service: "mulching-landscaping",
    location: "North Geelong",
    beforeImage: "https://images.unsplash.com/photo-1683343162359-b2bf96829422?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1759577085348-7b7d9fb537a4?w=800&q=80",
  },
  {
    title: "Full Garden Clean-Up",
    description: "Neglected backyard cleared of rubbish, weeds removed and beds restored.",
    service: "rubbish-removal",
    location: "Grovedale",
    beforeImage: "https://images.unsplash.com/photo-1590408463533-cb1b9267a177?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1634316888962-75074307f81c?w=800&q=80",
  },
  {
    title: "Lawn Edging Detail",
    description: "Clean, crisp edging along paths and garden beds for a polished finish.",
    service: "edging",
    location: "Armstrong Creek",
    beforeImage: "https://images.unsplash.com/photo-1731082686849-d2e0a4d2c70c?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1768407313789-0eccf91f67ca?w=800&q=80",
  },
  {
    title: "Garden Bed Weeding",
    description: "Overgrown garden beds cleared of persistent weeds, mulched and restored to health.",
    service: "weeding",
    location: "Torquay",
    beforeImage: "https://images.unsplash.com/photo-1555228408-a0cbf9e8b1f0?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1764046860592-9931f0869fc6?w=800&q=80",
  },
  {
    title: "Seasonal Garden Tidy",
    description: "Full garden tidy including pruning, deadheading, leaf removal and bed clean-up.",
    service: "garden-tidy",
    location: "Leopold",
    beforeImage: "https://images.unsplash.com/photo-1636428974581-f697271fa873?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1659918978928-2e7e05cdb75c?w=800&q=80",
  },
]

