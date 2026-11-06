import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock,
  EyeOff,
  Headset,
  Heart,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  Wallet,
  X,
} from "lucide-react"
import SiteHeader from "@/components/site-header"
import WhatsAppIcon from "@/components/whatsapp-icon"
import SiteFooter from "@/components/site-footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Reveal from "@/components/reveal"
import FaqAccordion from "@/components/faq-accordion"
import ApplyForm from "@/components/apply-form"
import EarningsEstimator from "@/components/earnings-estimator"
import QuickQuestions from "@/components/quick-questions"
import {
  comparison,
  faqs,
  milestones,
  privacyPoints,
  requirements,
  site,
  steps,
  switchPoints,
  trustPoints,
  videos,
  waLink,
  whyUs,
} from "@/lib/site"

const requirementIcons = {
  age: BadgeCheck,
  phone: Smartphone,
  clock: Clock,
} as const

const whyIcons = {
  verified: BadgeCheck,
  shield: ShieldCheck,
  wallet: Wallet,
  headset: Headset,
} as const

const privacyIcons = [EyeOff, UserRound, MapPin, Home]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-maroon-deep">
          <div className="hero-veil absolute inset-0" aria-hidden="true" />
          <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="glow-gold pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] opacity-60" aria-hidden="true" />

          <div className="container-x relative grid items-center gap-14 pb-16 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-24 lg:pt-20">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 border border-gold/35 bg-gold/[0.07] px-4 py-2">
                <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-gold text-gold" />
                <span className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  India ki verified Stripchat agency
                </span>
              </div>

              <h1 className="display-1 mt-7 text-ivory">
                Ghar se live ho.
                <br />
                <span className="display-italic">₹30k–₹90k</span>
                <br />
                har mahine kamao.
              </h1>

              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ivory/65 sm:text-[1.08rem]">
                Ghar se ya kahin se bhi — sirf 2–3 ghante, mobile aur internet. Koi investment nahi, koi target
                nahi. Face cover karke bhi kaam kar sakti hain, poori privacy ke saath.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa px-5 py-4 text-[0.62rem] sm:px-7 sm:text-[0.68rem]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp par join karo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link href="/apply" className="btn-base btn-ghost px-6 py-4 text-[0.66rem]">
                  Apply form bharo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-ivory/55"
                  >
                    <Check className="h-3 w-3 text-gold" />
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-gold/20 pt-6">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold-bright">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <p className="text-[0.72rem] leading-relaxed text-ivory/45">
                  Free registration · Koi joining fee nahi · Reply within 24 hours
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto max-w-[27rem] lg:max-w-[30rem]">
                <div className="figure-frame relative">
                  <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-maroon-deep">
                    <Image
                      src="/videos/creator-promo-poster.jpg"
                      alt="Ghar ka live streaming setup — phone aur ring light"
                      fill
                      priority
                      sizes="(max-width: 1024px) 88vw, 460px"
                      className="object-cover object-[center_38%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/10 to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-gold/40 bg-maroon-deep/80 px-3 py-1.5 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-gold-bright" />
                      <span className="font-label text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-ivory">
                        Ghar ka setup
                      </span>
                    </div>

                    <div className="absolute inset-x-4 bottom-4 border border-gold/30 bg-maroon-deep/85 px-4 py-3 backdrop-blur-md">
                      <p className="font-label text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
                        Sirf itna chahiye
                      </p>
                      <p className="mt-1 font-display text-lg leading-none text-ivory">
                        Ek phone. Ek ring light.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="seal absolute -right-3 -top-4 h-24 w-24 sm:-right-6 sm:h-28 sm:w-28">
                  <div>
                    <p className="font-display text-2xl leading-none sm:text-[1.8rem]">₹0</p>
                    <p className="mt-1 font-label text-[0.44rem] font-bold uppercase tracking-[0.14em] sm:text-[0.48rem]">
                      Joining fee
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center font-label text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-ivory/35">
                18+ only · Verified creators · Free registration
              </p>
            </Reveal>
          </div>
        </section>

        {/* STAT RIBBON */}
        <section className="border-y border-gold/25 bg-maroon" aria-label="At a glance">
          <div className="container-x">
            <div className="grid grid-cols-2 divide-x divide-gold/15 sm:grid-cols-4">
              {site.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-6 text-center sm:py-7">
                  <p className="font-display text-[1.6rem] leading-none text-gold-bright sm:text-[1.9rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-label text-[0.54rem] font-semibold uppercase tracking-[0.16em] text-ivory/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="border-t border-gold/10 py-3 text-center text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-ivory/30">
              *Income indicative hai — aapke time aur consistency par depend karti hai.
            </p>
          </div>
        </section>

        <QuickQuestions />

        {/* REQUIREMENTS */}
        <section id="requirements" className="section-ivory section-pad paper-texture relative overflow-hidden">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow eyebrow-center">Bas itna chahiye</p>
              <h2 className="display-2 mt-5 text-maroon-deep">Koi degree nahi. Koi paisa nahi.</h2>
              <p className="lead mt-4">
                Teen simple cheezein. Baaki sab — account, training, privacy — hum sambhalte hain.
              </p>
            </Reveal>

            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <div className="relative flex h-full flex-col justify-between overflow-hidden bg-maroon-deep p-7 text-ivory sm:p-9">
                  <div className="glow-gold pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-40" aria-hidden="true" />
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 border border-gold/35 px-3 py-1.5 font-label text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                      <Sparkles className="h-3 w-3" />
                      No investment
                    </span>
                    <p className="mt-8 font-display text-[4.5rem] leading-none text-gold-bright">₹0</p>
                    <p className="mt-2 font-label text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ivory/55">
                      Joining fee · Setup · Training
                    </p>
                    <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
                      Hum tabhi kamate hain jab aap kamati hain. Koi hidden charge, koi advance payment nahi.
                    </p>
                  </div>

                  <div className="relative mt-8 border-t border-gold/20 pt-5">
                    <div className="flex items-center gap-2.5 font-label text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      Free registration · 30 second
                    </div>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-wa btn-wrap mt-5 w-full px-5 py-3.5 text-[0.62rem]"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp par shuru karo
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="grid content-start gap-4">
                {requirements.map((item, index) => {
                  const Icon = requirementIcons[item.icon as keyof typeof requirementIcons]
                  return (
                    <Reveal key={item.title} delay={index * 80}>
                      <div className="card-luxe flex items-start gap-5 p-6 sm:p-7">
                        <span className="font-display text-[2.1rem] leading-none text-gold/50">0{index + 1}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2.5">
                            <Icon className="h-4 w-4 text-maroon" />
                            <h3 className="font-display text-[1.25rem] text-maroon-deep">{item.title}</h3>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}

                <Reveal delay={240}>
                  <div className="flex flex-col gap-4 border border-gold/30 bg-ivory-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 text-maroon">
                        <EyeOff className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-display text-[1.05rem] text-maroon-deep">
                          Niqab, hijab ya mask? Bilkul allowed.
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                          Couple ya lesbian creators bhi welcome — dono ki age 18+ aur ID zaroori.
                        </p>
                      </div>
                    </div>
                    <a
                      href={waLink("Hi! Face cover karke kaam kar sakti hoon? Please guide karo.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-wa-outline shrink-0 px-4 py-3 text-[0.58rem]"
                    >
                      Poocho
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="section-charcoal section-pad relative overflow-hidden">
          <div className="glow-gold pointer-events-none absolute -right-40 top-0 h-96 w-96 opacity-20" aria-hidden="true" />
          <div className="container-x relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow eyebrow-center text-gold">Video</p>
              <h2 className="display-2 mt-5 text-ivory">Dekho, kaam kaisa hai.</h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ivory/60">
                Do chhoti videos — setup aur kamai ka pura process, bina lambe lecture ke.
              </p>
            </Reveal>

            <div className="hide-scrollbar -mx-[1.15rem] mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[1.15rem] pb-3 sm:mx-auto sm:mt-12 sm:grid sm:max-w-3xl sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0">
              {videos.map((video, index) => (
                <Reveal
                  key={video.src}
                  delay={index * 90}
                  className="w-[70vw] max-w-[19rem] shrink-0 snap-center sm:w-auto sm:max-w-none"
                >
                  <figure className="mx-auto w-full">
                    <div className="border border-gold/25 bg-maroon-deep p-2">
                      <div className="relative aspect-[9/16] bg-black">
                        <video
                          src={video.src}
                          poster={video.poster}
                          controls
                          playsInline
                          preload="none"
                          className="h-full w-full object-cover"
                        >
                          Aapka browser video support nahi karta.
                        </video>
                      </div>
                    </div>
                    <figcaption className="mt-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-display text-[1.05rem] text-ivory">{video.label}</p>
                        <span className="shrink-0 border border-gold/30 px-2.5 py-1 font-label text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                          {video.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-[0.82rem] leading-relaxed text-ivory/50">{video.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-3 text-center font-label text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-ivory/30 sm:hidden">
              Swipe karke dono videos dekho →
            </p>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-col items-center gap-4 text-center">
                <a
                  href={waLink("Hi! Maine website par video dekhi. Mujhe live streaming shuru karni hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa px-5 py-4 text-[0.62rem] sm:px-7 sm:text-[0.68rem]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp par join karo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="font-label text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ivory/35">
                  Free registration · Koi target nahi · 18+ only
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STEPS */}
        <section id="how-it-works" className="section-lift section-pad relative overflow-hidden">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow eyebrow-center">Sirf 3 step</p>
              <h2 className="display-2 mt-5 text-maroon-deep">Shuru karna itna easy hai.</h2>
              <p className="lead mt-4">
                Koi interview nahi. Koi form ka jhanjhat nahi. Bas WhatsApp par ek message — baaki hum guide karenge.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <div className="card-luxe flex h-full flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ivory-2 font-display text-xl text-maroon">
                        {item.step}
                      </span>
                      <span className="border border-rule px-3 py-1 font-label text-[0.54rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        {item.meta}
                      </span>
                    </div>
                    <h3 className="display-3 mt-6 text-maroon-deep">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa px-5 py-4 text-[0.62rem] sm:px-7 sm:text-[0.68rem]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp par shuru karo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Free registration · Reply within 24 hours
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EARNINGS */}
        <section id="earnings" className="section-ivory section-pad relative overflow-hidden">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow eyebrow-center">Kamai</p>
              <h2 className="display-2 mt-5 text-maroon-deep">Jitna time doge, utna zyada kamaoge.</h2>
              <p className="lead mt-4">Koi target nahi. Apne time par live jao. Payment har week bank mein.</p>
            </Reveal>

            <EarningsEstimator />

            <Reveal delay={180}>
              <div className="mt-6 flex flex-col items-start justify-between gap-5 border border-rule bg-white/60 p-5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 text-maroon">
                    <Wallet className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-label text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-maroon">
                      Payment har week · Seedha bank mein
                    </p>
                    <p className="mt-1 max-w-2xl text-[0.72rem] leading-relaxed text-ink-muted">
                      *Ye income indicative hai. Actual kamai aapke live hours, consistency aur audience par depend
                      karti hai. Ye guarantee nahi hai.
                    </p>
                  </div>
                </div>
                <a
                  href={waLink("Hi! Mujhe apne time ke hisaab se earning plan jaanna hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa-outline shrink-0 px-5 py-3 text-[0.6rem]"
                >
                  Apna plan poocho
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="section-maroon section-pad relative overflow-hidden">
          <div className="glow-gold pointer-events-none absolute -right-40 top-0 h-[26rem] w-[26rem] opacity-30" aria-hidden="true" />
          <div className="container-x relative">
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <Reveal className="relative">
                <div className="figure-frame relative">
                  <div className="image-zoom relative aspect-[16/9] overflow-hidden bg-maroon-deep">
                    <Image
                      src={site.images.funClub}
                      alt="Stripchat official fun club visual — your prices, your rules"
                      fill
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent" />
                  </div>
                </div>
                <p className="mt-4 text-center font-label text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-ivory/40">
                  Your rules · Your privacy
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p className="eyebrow text-gold-bright">Privacy &amp; safety</p>
                <h2 className="display-2 mt-5 text-ivory">Aapki pehchaan, aapke control mein.</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ivory/65">
                  Face chhupana ho ya poora private rehna — settings aapke haath mein hain. Aapki real details public
                  nahi hoti.
                </p>

                <div className="mt-8 space-y-5">
                  {privacyPoints.map((point, index) => {
                    const Icon = privacyIcons[index]
                    return (
                      <div key={point.title} className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <h3 className="font-display text-[1.08rem] text-ivory">{point.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-ivory/55">{point.body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <a
                  href={waLink("Hi! Mujhe privacy aur safety ke baare mein jaanna hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-9 px-6 py-3.5 text-[0.62rem]"
                >
                  Privacy ke baare mein poocho
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SWITCH */}
        <section className="section-lift section-pad relative overflow-hidden">
          <div className="container-x">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <Reveal>
                <p className="eyebrow">Agency switch</p>
                <h2 className="display-2 mt-5 text-maroon-deep">Dusri agency ya app se pareshan ho?</h2>
                <p className="lead mt-4">
                  Agar neeche wali koi bhi problem hai, humse baat karo. Switch karna easy hai — purana account safe,
                  naya account strong.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {switchPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 border border-rule bg-white/70 p-4">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                      <span className="text-[0.82rem] leading-relaxed text-charcoal">{point}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={waLink("Hi! Main dusri agency/app se pareshan hoon. Mujhe switch karna hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-8 px-6 py-3.5 text-[0.62rem]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp par baat karo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative overflow-hidden border border-gold/30 bg-maroon-deep p-7 text-ivory shadow-[0_30px_70px_-45px_rgba(78,18,28,0.9)] sm:p-9">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold via-gold-bright to-gold" />
                  <span className="inline-flex items-center gap-2 border border-gold/35 px-3 py-1.5 font-label text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                    <Sparkles className="h-3 w-3" />
                    Switch offer
                  </span>
                  <p className="mt-6 font-display text-[2.6rem] leading-[1.02] text-ivory sm:text-[3.1rem]">
                    3x income
                    <span className="display-italic block">ka mauka*</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/65">
                    Chamet, Hiyaa, Zeep Live ya kisi bhi app se aa rahi hain? Hum aapko Stripchat par properly shift
                    karte hain — sahi token rate, safe account aur weekly payment ke saath.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Sahi token rate — kam cut nahi",
                      "Account rules ke saath, block ka risk kam",
                      "Weekly payment, seedha bank mein",
                      "Hindi mein proper guidance",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-ivory/80">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-gold/20 pt-4 text-[0.64rem] leading-relaxed text-ivory/35">
                    *3x ka matlab aapki purani income se zyada potential. Result aapke time, audience aur consistency
                    par depend karta hai. Guarantee nahi.
                  </p>

                  <a
                    href={waLink("Hi! Main switch offer ke baare mein jaanna chahti hoon.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-wa btn-wrap mt-5 w-full px-5 py-3.5 text-[0.62rem]"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Switch ke liye baat karo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DIFFERENCE / WHY US */}
        <section className="section-charcoal section-pad relative overflow-hidden">
          <div className="glow-gold pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] opacity-20" aria-hidden="true" />
          <div className="container-x relative">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
              <Reveal>
                <div className="figure-frame relative">
                  <div className="image-zoom relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <Image
                      src={site.images.awards}
                      alt="Official Stripchat creator awards — 100K to 2M followers"
                      fill
                      sizes="(max-width: 1024px) 90vw, 520px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="font-label text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                        Official Stripchat creator awards
                      </p>
                      <p className="mt-1 font-display text-xl text-ivory">100K se 2M+ followers tak.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="eyebrow text-gold">Kyun hum</p>
                <h2 className="display-2 mt-5 text-ivory">Agency aisi, jispe bharosa kar sako.</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ivory/60">
                  Verified, transparent aur creator-first. Koi hidden charge nahi, koi pressure nahi.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyUs.map((item, index) => {
                    const Icon = whyIcons[item.icon as keyof typeof whyIcons]
                    return (
                      <Reveal key={item.title} delay={index * 70}>
                        <div className="flex h-full items-start gap-4 border border-gold/20 bg-ivory/[0.04] p-5">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <h3 className="font-display text-[1.05rem] leading-snug text-ivory">{item.title}</h3>
                            <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ivory/55">{item.body}</p>
                          </div>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>

                <a
                  href={waLink("Hi! Mujhe apni agency ke baare mein aur jaanna hai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-wa mt-7 px-6 py-3.5 text-[0.62rem]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp par baat karo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            </div>

            {/* Comparison */}
            <div className="mt-16 sm:mt-20">
              <Reveal className="text-center">
                <p className="eyebrow eyebrow-center text-gold">Difference</p>
                <h3 className="display-3 mt-4 text-ivory">Purani agency vs hum.</h3>
              </Reveal>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                <Reveal>
                  <div className="compare-old h-full p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3 border-b border-ivory/15 pb-4">
                      <h4 className="font-display text-[1.15rem] text-ivory/85">{comparison.old.title}</h4>
                      <span className="font-label text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-ivory/35">
                        Before
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3.5">
                      {comparison.old.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[0.84rem] leading-relaxed">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-ivory/20 text-ivory/35">
                            <X className="h-3 w-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <div className="compare-new h-full p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3 border-b border-gold/20 pb-4">
                      <h4 className="font-display text-[1.15rem] text-ivory">{comparison.us.title}</h4>
                      <span className="font-label text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                        After
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3.5">
                      {comparison.us.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[0.84rem] leading-relaxed text-ivory/80">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                            <Check className="h-3 w-3" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <span className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-charcoal font-label text-[0.54rem] font-semibold uppercase tracking-[0.1em] text-gold-bright sm:grid">
                  vs
                </span>
              </div>
            </div>

            {/* Milestones */}
            <div className="mt-16 sm:mt-20">
              <Reveal className="text-center">
                <p className="eyebrow eyebrow-center text-gold">Milestones</p>
                <h3 className="display-3 mt-4 text-ivory">Creators ke saath, har milestone par.</h3>
              </Reveal>

              <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {milestones.map((item, index) => (
                  <Reveal key={item.src} delay={index * 60}>
                    <div className="award-tile">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.src}
                          alt={`Stripchat creator milestone — ${item.label}`}
                          fill
                          sizes="(max-width: 1024px) 45vw, 280px"
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                        <p className="font-display text-xl leading-none text-gold-bright">{item.value}</p>
                        <p className="mt-1 font-label text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-ivory/60">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-5 text-center text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ivory/30">
                Official Stripchat creator milestone awards
              </p>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="section-deep relative overflow-hidden py-14 sm:py-16">
          <div className="container-x">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
              <Reveal>
                <p className="eyebrow text-gold">Platform</p>
                <h2 className="display-3 mt-3 text-ivory">Duniya ka #1 adult live platform.</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/60">
                  Stripchat 10+ saal se live hai, 500M+ monthly visitors ke saath. Matlab aapke paas global audience
                  ka access hai — ghar baithe.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid grid-cols-3 gap-6 border-t border-gold/20 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  {[
                    { value: "10+", label: "Years live" },
                    { value: "500M+", label: "Monthly visitors" },
                    { value: "#1", label: "Adult live platform" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-[1.7rem] leading-none text-gold-bright">{stat.value}</p>
                      <p className="mt-2 font-label text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-ivory/40">
                        {stat.label}
                      </p>
                    </div>
                  ))}
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
                <h2 className="display-2 mt-5 text-maroon-deep">Sawaal? Yahan jawab.</h2>
                <p className="lead mt-4">
                  Jo sabse zyada poocha jata hai. Aur kuch ho toh seedha WhatsApp par message karo.
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
                <div className="mt-7 flex items-center gap-2.5 font-label text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {site.hours}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <FaqAccordion items={faqs} tone="light" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section id="apply" className="section-deep relative overflow-hidden">
          <Image
            src={site.images.community}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/95 via-maroon-deep/90 to-maroon-deep" />
          <div className="container-x relative py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 border border-gold/35 px-4 py-2 font-label text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  <Heart className="h-3 w-3 fill-current" />
                  Aapka pehla step
                </span>
                <h2 className="display-2 mt-6 text-ivory">
                  Bas 2 sawaal.
                  <br />
                  <span className="display-italic">Phir WhatsApp.</span>
                </h2>
                <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-ivory/60">
                  Naam aur city bharo. Hum WhatsApp par baat karke pura process samjhayenge — account, training,
                  privacy aur payment. Koi paisa nahi lagega.
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Koi joining fee nahi — ₹0",
                    "Account aur training free",
                    "Face cover / mask allowed",
                    "Payment weekly, bank mein",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-ivory/70">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-bright">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-4 border-t border-gold/20 pt-6">
                  <div className="seal h-16 w-16 shrink-0">
                    <div>
                      <p className="font-display text-lg leading-none">₹0</p>
                      <p className="mt-0.5 font-label text-[0.4rem] font-bold uppercase tracking-[0.1em]">Fee</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-label text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
                      Free &amp; confidential
                    </p>
                    <p className="mt-1 text-[0.72rem] leading-relaxed text-ivory/45">
                      Aapki details sirf hum tak. Reply within 24 hours.
                    </p>
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="mt-2 inline-flex items-center gap-1.5 font-label text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-ivory/50 transition-colors hover:text-gold-bright"
                    >
                      <Phone className="h-3 w-3" />
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <ApplyForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
