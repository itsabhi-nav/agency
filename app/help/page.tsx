import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import SiteHeader from "@/components/site-header"
import WhatsAppIcon from "@/components/whatsapp-icon"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Reveal from "@/components/reveal"
import FaqAccordion from "@/components/faq-accordion"
import { faqs, privacyPoints, site, switchPoints, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Madad — Help & safety",
  description:
    "Stripchat India Agency se baat karo. WhatsApp, call ya email. Privacy, safety, payment aur agency switch se judi madad. 18+ only.",
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />

      <main id="main">
        {/* HERO / CONTACT */}
        <section className="section-deep relative overflow-hidden">
          <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="glow-gold pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] opacity-50" aria-hidden="true" />
          <div className="glow-gold pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] opacity-30" aria-hidden="true" />

          <div className="container-x relative pb-16 pt-12 sm:pt-16 lg:pb-24">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 border border-gold/35 bg-gold/[0.07] px-4 py-2">
                <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-gold text-gold" />
                <span className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                  Daily available · Hindi support
                </span>
              </div>
              <h1 className="display-1 mt-6 text-ivory">
                Baat karo.
                <br />
                <span className="display-italic">Koi pressure nahi.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ivory/65">
                Payment, privacy, safety ya agency switch — jo bhi sawaal ho, seedha poocho. Real insaan reply karega.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: WhatsAppIcon,
                  title: "WhatsApp",
                  body: "Sabse fast. Message karo, turant reply.",
                  action: "Chat karo",
                  href: waLink(),
                },
                {
                  icon: Phone,
                  title: "Call",
                  body: site.phoneDisplay,
                  action: "Call karo",
                  href: `tel:${site.phoneRaw}`,
                },
                {
                  icon: Mail,
                  title: "Email",
                  body: site.email,
                  action: "Mail karo",
                  href: `mailto:${site.email}`,
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="card-dark h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold-bright">
                      <item.icon className="h-4.5 w-4.5" />
                    </span>
                    <h2 className="font-display mt-5 text-[1.2rem] text-ivory">{item.title}</h2>
                    <p className="mt-1.5 break-words text-sm text-ivory/55">{item.body}</p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-5 inline-flex items-center gap-1.5 font-label text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-gold-bright transition-colors hover:text-ivory"
                    >
                      {item.action}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <div className="mt-6 flex items-center gap-2.5 font-label text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ivory/40">
                <Clock className="h-3.5 w-3.5 text-gold" />
                {site.hours}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SAFETY */}
        <section className="section-ivory section-pad relative overflow-hidden">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <p className="eyebrow">Safety &amp; privacy</p>
                <h2 className="display-2 mt-5 text-maroon-deep">Aap safe ho. Bas.</h2>
                <p className="lead mt-4">
                  Aapki real identity, number aur address public nahi hote. Face cover, stage name aur geo-block —
                  sab available hai.
                </p>
                <div className="mt-7 border border-gold/30 bg-ivory-2 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
                    <p className="text-xs leading-relaxed text-ink-muted">
                      Hum kabhi OTP, bank password ya joining fee nahi maangte. Koi aisa maange toh turant humein
                      report karo.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {privacyPoints.map((point) => (
                    <div key={point.title} className="card-white p-5">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-6 w-6 place-items-center rounded-full border border-gold/50 text-maroon">
                          <Check className="h-3 w-3" />
                        </span>
                        <h3 className="font-display text-[0.98rem] leading-snug text-maroon-deep">{point.title}</h3>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">{point.body}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={waLink("Hi! Mujhe privacy settings ke baare mein jaanna hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-6 px-6 py-3.5 text-[0.62rem]"
                >
                  Privacy ke baare mein poocho
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SWITCH */}
        <section className="section-maroon section-pad relative overflow-hidden">
          <div className="glow-gold pointer-events-none absolute -left-40 top-10 h-96 w-96 opacity-30" aria-hidden="true" />
          <div className="container-x relative">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <p className="eyebrow text-gold-bright">Agency switch</p>
                <h2 className="display-2 mt-5 text-ivory">Purani agency se pareshan ho?</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ivory/65">
                  Low token rate, late payment, work pressure ya block ka dar — in sab ka solution hai. Switch karo,
                  tension chhodo.
                </p>
                <a
                  href={waLink("Hi! Main agency switch karna chahti hoon. Please guide karo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-8 px-6 py-3.5 text-[0.62rem]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp par baat karo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>

              <Reveal delay={100}>
                <ul className="space-y-3">
                  {switchPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 border border-gold/20 bg-ivory/[0.04] p-4"
                    >
                      <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-bright" />
                      <span className="text-sm leading-relaxed text-ivory/75">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2.5 border border-gold/30 bg-gold/[0.07] p-4 font-label text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold-bright">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  Purana account safe, naya account strong.
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-lift section-pad relative overflow-hidden">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <Reveal>
                <p className="eyebrow">FAQ</p>
                <h2 className="display-2 mt-5 text-maroon-deep">Sab jawab, simple bhasha mein.</h2>
                <p className="lead mt-4">
                  Phir bhi kuch clear na ho toh WhatsApp par message karo — hum step-by-step samjhayenge.
                </p>
                <a
                  href={waLink("Hi! Mera ek sawaal hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-7 px-6 py-3.5 text-[0.62rem]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp par poocho
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>

              <Reveal delay={100}>
                <FaqAccordion items={faqs} tone="light" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-deep relative overflow-hidden py-16 sm:py-20">
          <div className="glow-gold pointer-events-none absolute -right-32 top-0 h-96 w-96 opacity-30" aria-hidden="true" />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal>
              <p className="eyebrow eyebrow-center text-gold">Ready ho?</p>
              <h2 className="display-3 mt-4 text-ivory">Bas ek message. Baaki hum sambhalte hain.</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ivory/60">
                Free registration, Hindi guidance aur weekly payment — bina kisi pressure ke.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa px-6 py-3.5 text-[0.64rem]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp par join karo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link href="/apply" className="btn-base btn-ghost px-6 py-3.5 text-[0.62rem]">
                  Apply form bharo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <p className="mt-5 font-label text-[0.54rem] font-semibold uppercase tracking-[0.16em] text-ivory/35">
                Free registration · 18+ only · 100% private
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
