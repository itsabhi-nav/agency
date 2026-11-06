"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Phone } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Logo from "@/components/logo"
import { site, waLink } from "@/lib/site"

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <>
      <div className="relative z-40 bg-maroon-deep">
        <div className="container-x flex h-9 items-center justify-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory/70 sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="pulse-dot relative inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold text-gold" />
            <span>
              18+ only <span className="mx-1.5 text-gold/40">·</span> Free registration
              <span className="mx-1.5 text-gold/40">·</span> Verified agency
            </span>
          </p>
          <span className="hidden items-center gap-1.5 text-gold-bright sm:flex">
            Applications open <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule bg-ivory/95 backdrop-blur-xl">
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-label relative pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-maroon" : "text-ink-muted hover:text-maroon"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <Link
              href="/apply"
              className="hidden font-label text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-maroon transition-colors hover:text-gold-ink min-[360px]:inline sm:hidden"
            >
              Apply
            </Link>
            <a
              href={`tel:${site.phoneRaw}`}
              className="hidden items-center gap-2 font-label text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-maroon xl:flex"
            >
              <Phone className="h-3.5 w-3.5 text-maroon" />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-wa px-3.5 py-3 text-[0.62rem] sm:px-5 sm:text-[0.64rem]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Join on WhatsApp</span>
              <span className="sm:hidden">Join</span>
              <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
