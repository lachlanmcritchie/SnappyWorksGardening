import { cn } from "@/lib/utils"

interface LogoIconProps {
  className?: string
}

/**
 * Compact icon mark — "SW" with vine underline on a green badge.
 * Used for favicon-size contexts, admin sidebar, etc.
 */
export function LogoIcon({ className }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-primary" />

      {/* SW text */}
      <text
        x="16"
        y="19"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="white"
      >
        SW
      </text>

      {/* Vine underline curve */}
      <path
        d="M7 24 Q12 21, 16 23 Q20 25, 25 22"
        fill="none"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Small leaf accent */}
      <path
        d="M25 22 Q26.5 19.5, 27 20 Q26 21.5, 25 22Z"
        fill="white"
        opacity="0.8"
      />
    </svg>
  )
}

interface LogoWordmarkProps {
  className?: string
}

/**
 * Full wordmark — "SnappyWorks" with vine divider and "GARDENING" subtitle.
 * Used in navbar and footer.
 */
export function LogoWordmark({ className }: LogoWordmarkProps) {
  return (
    <div className={cn("inline-flex flex-col items-start", className)}>
      {/* Brand name */}
      <div className="flex items-baseline font-[var(--font-outfit)] text-xl font-extrabold leading-none tracking-tight">
        <span className="text-foreground">Snappy</span>
        <span className="text-[#5a9a7a] dark:text-[#a5d6a7]">Works</span>
      </div>

      {/* Vine divider */}
      <svg
        viewBox="0 0 120 12"
        className="mt-0.5 h-2.5 w-[120px]"
        aria-hidden="true"
      >
        {/* Wavy vine */}
        <path
          d="M2 6 Q15 11, 30 6 Q45 1, 60 6 Q75 11, 90 6 Q105 1, 118 6"
          fill="none"
          className="stroke-[#5a9a7a] dark:stroke-[#81C784]"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Leaf 1 */}
        <path
          d="M28 8 Q25 4, 29 3 Q31 6, 28 8Z"
          className="fill-[#66BB6A] dark:fill-[#a5d6a7]"
        />
        {/* Leaf 2 */}
        <path
          d="M62 4 Q59 0, 63 -1 Q65 2, 62 4Z"
          className="fill-[#5a9a7a] dark:fill-[#81C784]"
        />
        {/* Leaf 3 */}
        <path
          d="M92 8 Q89 4, 93 3 Q95 6, 92 8Z"
          className="fill-[#66BB6A] dark:fill-[#a5d6a7]"
          opacity="0.8"
        />
      </svg>

      {/* Subtitle with leaf accents */}
      <div className="mt-px flex items-center justify-center gap-1">
        {/* Left leaf */}
        <svg
          viewBox="0 0 10 10"
          className="h-2.5 w-2.5"
          aria-hidden="true"
        >
          <path
            d="M8 2 Q5 0, 2 3 Q1 5, 2 7 Q4 5, 6 4 Q8 3, 8 2Z"
            className="fill-[#66BB6A] dark:fill-[#a5d6a7]"
          />
          <path
            d="M2 7 Q5 4.5, 8 2"
            fill="none"
            className="stroke-[#5a9a7a] dark:stroke-[#81C784]"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </svg>

        <span className="font-[var(--font-outfit)] text-[0.55rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Gardening
        </span>

        {/* Right leaf (mirrored) */}
        <svg
          viewBox="0 0 10 10"
          className="h-2.5 w-2.5"
          aria-hidden="true"
        >
          <path
            d="M2 2 Q5 0, 8 3 Q9 5, 8 7 Q6 5, 4 4 Q2 3, 2 2Z"
            className="fill-[#66BB6A] dark:fill-[#a5d6a7]"
          />
          <path
            d="M8 7 Q5 4.5, 2 2"
            fill="none"
            className="stroke-[#5a9a7a] dark:stroke-[#81C784]"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
