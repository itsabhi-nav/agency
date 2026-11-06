import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, Lock, MessageCircle, ShieldCheck } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ApplyForm from "@/components/apply-form"
import { site, steps, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Apply — 30 second",
  description:
    "Stripchat India Agency ke saath free registration. Bas naam aur city bharo — WhatsApp par baat karke aage badhein. 18+ only, koi joining fee nahi.",
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />

      <main id="main" className="relative overflow-hidden">
        <section className="section-deep relative overflow-hidden">
          <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="glow-gold pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] opacity-50" aria-hidden="true" />
          <div className="glow-gold pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] opacity-30" aria-hidden="true" />

          <div className="container-x relative pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-label text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ivory/45 transition-colors hover:text-gold-bright"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>

            <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
              <div className="min-w-0 lg:pt-4">
                <div className="inline-flex items-center gap-2.5 border border-gold/35 bg-gold/[0.07] px-4 py-2">
                  <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-gold text-gold" />
                  <span className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                    30 second · Free registration
                  </span>
                </div>

                <h1 className="display-2 mt-6 text-ivory">
                  Bas 2 sawaal.
                  <br />
                  <span className="display-italic">Phir WhatsApp.</span>
                </h1>

                <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-ivory/65">
                  Naam aur city bharo. Hum WhatsApp par baat karke pura process samjhayenge — account, training,
                  privacy aur payment. Koi paisa nahi lagega.
                </p>

                <ul className="mt-8 hidden space-y-3.5 sm:block">
                  {[
                    "Koi joining fee nahi — ₹0",
                    "Account aur training free",
                    "Face cover / mask allowed",
                    "Payment weekly, bank mein",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ivory/75">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 hidden border border-gold/20 bg-ivory/[0.03] p-4 sm:block">
                  <div className="flex items-start gap-3">
                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p className="text-xs leading-relaxed text-ivory/55">
                      Aapki details sirf hum tak. WhatsApp ke alawa kahin share nahi hoti. 18+ only.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-label text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ivory/40">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" /> 100% confidential
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-3.5 w-3.5 text-gold" /> Reply within 24 hrs
                  </span>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 hidden items-center gap-1.5 font-label text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ivory/45 underline underline-offset-4 transition-colors hover:text-gold-bright sm:inline-flex"
                >
                  Form nahi bharna? Seedha WhatsApp kholo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <div className="mt-10 hidden border-t border-gold/20 pt-6 lg:block">
                  <p className="font-label text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
                    Bas ye 3 cheezein
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    {["18+ aur valid ID", "Smartphone + internet", "2–3 ghante daily"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 text-[0.8rem] text-ivory/60">
                        <Check className="h-3 w-3 text-gold" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <ApplyForm />
                <div className="mx-auto mt-10 hidden w-full max-w-[20rem] lg:block">
                  <div className="figure-frame">
                    <div className="relative aspect-square overflow-hidden bg-maroon-deep">
                      <Image
                        src={site.images.hero}
                        alt="Official Stripchat India Agency"
                        fill
                        sizes="380px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center font-label text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-ivory/35">
                    Official Stripchat India Agency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lift border-t border-rule py-14 sm:py-16">
          <div className="container-x">
            <p className="text-center font-label text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              Aage kya hoga?
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="card-white flex items-start gap-4 p-5">
                  <span className="font-display text-[1.6rem] leading-none text-gold/50">{item.step}</span>
                  <div>
                    <p className="font-display text-[1.02rem] text-maroon-deep">{item.title}</p>
                    <p className="mt-1 font-label text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                      {item.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-ink-muted">
              Questions? Call{" "}
              <a href={`tel:${site.phoneRaw}`} className="font-bold text-maroon underline underline-offset-2">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
