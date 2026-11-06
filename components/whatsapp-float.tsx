"use client"

import { usePathname } from "next/navigation"
import { ArrowUpRight, Phone } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { site, waLink } from "@/lib/site"

export default function WhatsAppFloat() {
  const pathname = usePathname()

  // Apply page already has the form as its main CTA.
  if (pathname === "/apply") return null

  return (
    <>
      {/* Mobile: always-visible sticky join bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-maroon-deep/97 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-[2px] bg-wa px-5 py-3.5 font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_-18px_rgba(11,107,56,0.9)] active:scale-[0.99]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            WhatsApp par join karo
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            aria-label="Call us"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-[2px] border border-gold/40 text-gold-bright"
          >
            <Phone className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      {/* Desktop: always-visible compact floating button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp par baat karo"
        title="WhatsApp par baat karo"
        className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full border border-wa-deep/40 bg-wa text-white shadow-[0_18px_40px_-18px_rgba(11,107,56,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-wa-deep sm:grid"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-wa-bright/30" />
        <WhatsAppIcon className="relative h-[22px] w-[22px]" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-gold/40 bg-maroon-deep px-3 py-2 font-label text-[0.54rem] font-semibold uppercase tracking-[0.16em] text-gold-bright group-hover:block">
          WhatsApp par baat karo
        </span>
      </a>
    </>
  )
}
