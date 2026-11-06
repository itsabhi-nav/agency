import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  href?: string
  compact?: boolean
  className?: string
  tone?: "light" | "dark"
}

export default function Logo({ href = "/", compact = false, className = "", tone = "light" }: LogoProps) {
  const dark = tone === "dark"

  const content = (
    <span className={`group flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden border border-gold/50 bg-maroon-deep p-[3px] transition-transform duration-300 group-hover:scale-[1.04] sm:h-10 sm:w-10">
        <Image src="/logo.png" alt="" fill sizes="40px" className="object-cover" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1rem] font-semibold tracking-[0.1em] sm:text-[1.15rem] sm:tracking-[0.14em] ${
              dark ? "text-ivory" : "text-maroon"
            }`}
          >
            STRIPCHAT
          </span>
          <span
            className={`mt-1 font-label text-[0.46rem] font-semibold tracking-[0.26em] sm:text-[0.52rem] sm:tracking-[0.34em] ${
              dark ? "text-gold-bright/80" : "text-gold-ink"
            }`}
          >
            INDIA AGENCY
          </span>
        </span>
      )}
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} aria-label="Stripchat India Agency — home" className="inline-flex">
      {content}
    </Link>
  )
}
