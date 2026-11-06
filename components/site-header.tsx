"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Logo from "@/components/logo"
import { site, waLink } from "@/lib/site"

export default function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

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

      <header
        className={`sticky top-0 z-50 border-b bg-ivory/95 backdrop-blur-xl transition-[box-shadow,border-color] duration-300 ${
          scrolled ? "border-rule shadow-[0_14px_34px_-30px_rgba(43,42,40,0.7)]" : "border-transparent"
        }`}
      >
        <div
          className={`container-x flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-[3.9rem]" : "h-[4.5rem]"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center border border-rule text-maroon transition-colors hover:border-gold hover:text-gold-ink lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full origin-top border-b border-rule bg-ivory shadow-[0_24px_50px_-30px_rgba(43,42,40,0.5)] transition-all duration-200 lg:hidden ${
            menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <nav className="container-x py-3" aria-label="Mobile navigation">
            <ul className="divide-y divide-rule">
              {site.nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[52px] items-center justify-between gap-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                        active ? "text-maroon" : "text-charcoal hover:text-maroon"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className={`h-4 w-4 ${active ? "text-gold-ink" : "text-ink-muted/50"}`} />
                    </Link>
                  </li>
                )
              })}
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex min-h-[52px] items-center justify-between gap-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-maroon"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-maroon" />
                    {site.phoneDisplay}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted/50" />
                </a>
              </li>
            </ul>
            <div className="pb-4 pt-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-wa w-full px-4 py-3.5 text-[0.62rem]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp par join karo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
