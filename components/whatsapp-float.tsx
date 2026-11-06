"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, HelpCircle, Phone } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { site, waLink } from "@/lib/site"

export default function WhatsAppFloat() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Apply page already has the form as its main CTA.
  if (pathname === "/apply") return null

  return (
    <>
      {/* Mobile: sticky join bar, appears after the hero */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-maroon-deep/97 px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl transition-transform duration-300 sm:hidden ${
          visible ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[2px] bg-wa px-4 py-2.5 text-white shadow-[0_10px_24px_-18px_rgba(11,107,56,0.9)] active:scale-[0.99]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.12em]">
                WhatsApp par join karo
              </span>
              <span className="mt-0.5 text-[0.54rem] font-medium text-white/75">Free · 30 second · 18+</span>
            </span>
            <ArrowUpRight className="hidden h-4 w-4 shrink-0 min-[360px]:block" />
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            aria-label="Call us"
            className="grid h-[52px] w-11 shrink-0 place-items-center rounded-[2px] border border-gold/40 text-gold-bright active:scale-[0.97]"
          >
            <Phone className="h-[18px] w-[18px]" />
          </a>
          <Link
            href="/help"
            aria-label="Madad / Help"
            className="grid h-[52px] w-11 shrink-0 place-items-center rounded-[2px] border border-gold/40 text-gold-bright active:scale-[0.97]"
          >
            <HelpCircle className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </div>

      {/* Desktop: floating WhatsApp button */}
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
          Free · 30 second · WhatsApp par baat karo
        </span>
      </a>
    </>
  )
}
