import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import Logo from "@/components/logo"
import { site, waLink } from "@/lib/site"

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-maroon-deep pb-24 text-ivory sm:pb-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/30" aria-hidden="true" />
      <div className="glow-gold pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 opacity-40" aria-hidden="true" />

      <div className="container-x relative py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-start">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/65">
              Stripchat ke official rules par chalne wali India ki verified creator agency. 18+ women aur
              couples ke liye safe aur private live streaming, proper guidance ke saath.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-wa px-5 py-3 text-[0.66rem]"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp par join karo
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="btn-base btn-ghost px-5 py-3 text-[0.66rem]"
              >
                <Phone className="h-3.5 w-3.5" />
                Call karo
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold/80">
                Pages
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/apply", label: "Apply" },
                  { href: "/help", label: "Madad / Help" },
                  { href: "/guides/how-to-become-model", label: "Creator joining guide" },
                  { href: "/guides/how-to-join-stripchat", label: "How to join Stripchat" },
                  { href: "/guides/stripchat-account-kaise-banaye", label: "Stripchat account guide" },
                  { href: "/guides/stripchat-creator-privacy", label: "Creator privacy guide" },
                  { href: "/guides/choose-stripchat-agency", label: "Choose a Stripchat agency" },
                  { href: "/stripchat-india", label: "Stripchat India" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm text-ivory/70 transition-colors hover:text-gold-bright"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold/80">
                Contact
              </h3>
              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="flex min-h-[44px] items-center gap-2.5 text-sm text-ivory/70 transition-colors hover:text-gold-bright"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" />
                    {site.phoneDisplay}
                  </a>
                </li>
                {site.email ? (
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex min-h-[44px] items-center gap-2.5 text-sm text-ivory/70 transition-colors hover:text-gold-bright"
                    >
                      <Mail className="h-3.5 w-3.5 text-gold" />
                      {site.email}
                    </a>
                  </li>
                ) : null}
                <li className="text-[0.72rem] leading-relaxed text-ivory/45">{site.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border border-gold/20 bg-ivory/[0.03] p-5 text-[0.8rem] leading-relaxed text-ivory/55 sm:p-6 sm:text-[0.72rem] sm:text-ivory/45">
          <strong className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold/80">
            Important:
          </strong>{" "}
          Ye website sirf 18 saal ya usse zyada age ki women ke liye hai. Stripchat ek adult live-streaming platform
          hai. Hum ek independent creator management agency hain. Website par dikhayi gayi income indicative
          hai aur aapke time, consistency aur audience par depend karti hai. Ye income guarantee nahi hai. Kabhi bhi kisi ko
          OTP, bank password ya paisa mat bhejiye.
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-gold/15 pt-6 text-[0.66rem] uppercase tracking-[0.12em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Stripchat India Agency. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Applications open across India
          </p>
        </div>
      </div>
    </footer>
  )
}
