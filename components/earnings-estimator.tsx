"use client"

import { useState } from "react"
import { ArrowUpRight, Clock3, Sparkles, TrendingUp, Wallet } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { waLink } from "@/lib/site"

const plans = [
  { hours: 2, min: 30000, max: 40000, label: "Part-time" },
  { hours: 3, min: 35000, max: 48000, label: "Part-time" },
  { hours: 4, min: 45000, max: 60000, label: "Regular" },
  { hours: 5, min: 55000, max: 72000, label: "Regular" },
  { hours: 6, min: 65000, max: 82000, label: "Full-time" },
  { hours: 7, min: 72000, max: 88000, label: "Full-time" },
  { hours: 8, min: 78000, max: 90000, label: "Full-time" },
]

const presets = [0, 2, 4]

const inr = (value: number) => `₹${value.toLocaleString("en-IN")}`

export default function EarningsEstimator() {
  const [index, setIndex] = useState(2)
  const plan = plans[index]
  const fill = (index / (plans.length - 1)) * 100

  const message = `Hi! Main daily ${plan.hours} ghante live ja sakti hoon (${plan.label}). Earning plan aur process guide karo.`

  return (
    <div className="mt-12 overflow-hidden border border-rule bg-white shadow-[0_30px_80px_-60px_rgba(43,42,40,0.5)]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Controls */}
        <div className="p-6 sm:p-9">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-maroon">
              <Clock3 className="h-4 w-4" />
            </span>
            <div>
              <p className="font-label text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                Apna time chuno
              </p>
              <p className="font-display text-[1.15rem] leading-tight text-maroon-deep">Kitne ghante daily?</p>
            </div>
          </div>

          <div className="mt-8 flex items-end justify-between gap-4">
            <p className="font-display text-[3.1rem] leading-none text-maroon-deep">
              {plan.hours}
              <span className="mt-1 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-muted sm:ml-1.5 sm:mt-0 sm:inline">
                ghante / din
              </span>
            </p>
            <span className="mb-1 shrink-0 border border-gold/40 bg-gold/[0.08] px-3 py-1 font-label text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-gold-ink">
              {plan.label}
            </span>
          </div>

          <div className="mt-5">
            <input
              type="range"
              min={0}
              max={plans.length - 1}
              step={1}
              value={index}
              onChange={(event) => setIndex(Number(event.target.value))}
              aria-label="Daily live hours"
              aria-valuetext={`${plan.hours} ghante daily, ${plan.label}`}
              className="range-luxe w-full"
              style={{ ["--fill" as string]: `${fill}%` }}
            />
            <div className="mt-3 flex justify-between font-label text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-ink-muted/70">
              {plans.map((item) => (
                <span key={item.hours}>{item.hours}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {presets.map((preset) => {
              const active = index === preset
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setIndex(preset)}
                  aria-pressed={active}
                  className={`min-h-[46px] border px-2 py-2.5 font-label text-[0.52rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    active
                      ? "border-maroon bg-maroon text-ivory"
                      : "border-rule bg-ivory-2 text-ink-muted hover:border-gold hover:text-maroon"
                  }`}
                >
                  {plans[preset].label}
                  <span className="mt-0.5 block text-[0.46rem] opacity-70">{plans[preset].hours} ghante</span>
                </button>
              )
            })}
          </div>

          <p className="mt-6 flex items-start gap-2 text-[0.68rem] leading-relaxed text-ink-muted">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-ink" />
            Koi target nahi. Jitna time doge, utna zyada potential — apne comfort se decide karo.
          </p>
        </div>

        {/* Result */}
        <div className="section-deep relative flex flex-col justify-between overflow-hidden p-6 sm:p-9">
          <div className="glow-gold pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-40" aria-hidden="true" />

          <div className="relative" aria-live="polite">
            <p className="font-label text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Andaza / month*
            </p>
            <p key={plan.hours} className="pop-in mt-3 font-display text-[2.15rem] leading-none text-ivory sm:text-[2.6rem]">
              {inr(plan.min)}
              <span className="mx-1 text-ivory/35">–</span>
              {inr(plan.max)}
            </p>
            <p className="mt-2 text-[0.78rem] text-ivory/55">
              {plan.hours} ghante daily · {plan.label}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="border border-gold/20 bg-ivory/[0.04] p-3.5">
                <p className="flex items-center gap-1.5 font-label text-[0.48rem] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                  <Wallet className="h-3 w-3 text-gold" />
                  Weekly
                </p>
                <p className="mt-1.5 whitespace-nowrap font-display text-[0.92rem] leading-tight text-gold-bright">
                  {inr(Math.round(plan.min / 4))}–{inr(Math.round(plan.max / 4))}
                </p>
              </div>
              <div className="border border-gold/20 bg-ivory/[0.04] p-3.5">
                <p className="flex items-center gap-1.5 font-label text-[0.48rem] font-semibold uppercase tracking-[0.14em] text-ivory/45">
                  <TrendingUp className="h-3 w-3 text-gold" />
                  Payment
                </p>
                <p className="mt-1.5 font-display text-[1.05rem] leading-tight text-gold-bright">Bank transfer</p>
              </div>
            </div>
          </div>

          <div className="relative mt-7">
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-wa btn-wrap w-full px-4 py-3.5 text-[0.6rem] sm:text-[0.64rem]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Is plan par baat karo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-center text-[0.6rem] leading-relaxed text-ivory/35">
              *Indicative hai — actual income time, consistency aur audience par depend karti hai.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
