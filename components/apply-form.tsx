"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Check, CheckCircle2, Lock, ShieldCheck } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { waLink } from "@/lib/site"

const initialForm = {
  name: "",
  city: "",
}

export default function ApplyForm() {
  const [form, setForm] = useState(initialForm)
  const [age, setAge] = useState(false)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  const update = (key: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (error) setError("")
  }

  const message = [
    "Hi Stripchat India Agency! Mujhe live streaming kaam karna hai.",
    "",
    `Naam: ${form.name.trim() || "—"}`,
    `City: ${form.city.trim() || "—"}`,
    "Age: 18+ confirmed",
    "",
    "Please guide karo.",
  ].join("\n")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name.trim()) {
      setError("Apna naam likhiye.")
      return
    }
    if (!form.city.trim()) {
      setError("Apna city likhiye.")
      return
    }
    if (!age) {
      setError("Aage badhne ke liye 18+ confirm karna zaroori hai.")
      return
    }

    window.open(waLink(message), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card-white flex min-h-[460px] flex-col items-center justify-center p-7 text-center sm:p-9">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-wa/40 bg-wa/10 text-wa-deep">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="display-3 mt-6 text-maroon-deep">Bas ek step baaki!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          WhatsApp khul gaya hai — bas <strong className="font-bold text-maroon-deep">Send</strong> dabaiye. Agar nahi
          khula, neeche wale button se dobara try karein.
        </p>

        <div className="mt-6 w-full max-w-sm border border-rule bg-ivory-2 p-3 text-left">
          <p className="font-label text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-gold-ink">
            Aapka message
          </p>
          <p className="mt-2 whitespace-pre-line text-[0.78rem] leading-relaxed text-charcoal/80">{message}</p>
        </div>

        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-wa mt-6 w-full max-w-sm px-6 py-3.5 text-[0.66rem]"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp dobara kholo
        </a>
        <button
          type="button"
          onClick={() => {
            setSent(false)
            setForm(initialForm)
            setAge(false)
          }}
          className="mt-5 font-label text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted underline underline-offset-4 hover:text-maroon"
        >
          Details badalni hain
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-white p-5 sm:p-8" noValidate>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-label text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
            Free registration
          </p>
          <h3 className="display-3 mt-2.5 text-maroon-deep">Bas 2 sawaal</h3>
        </div>
        <span className="rounded-[2px] border border-gold/40 px-3 py-1.5 font-label text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
          18+
        </span>
      </div>

      {/* Step indicator */}
      <div className="mt-5 flex items-center gap-2.5">
        <span className="flex items-center gap-1.5 border border-maroon bg-maroon px-2.5 py-1 font-label text-[0.48rem] font-semibold uppercase tracking-[0.12em] text-ivory">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-gold text-maroon-deep">
            <Check className="h-2.5 w-2.5" />
          </span>
          1 · Details
        </span>
        <span className="h-px flex-1 bg-rule" />
        <span className="flex items-center gap-1.5 border border-rule px-2.5 py-1 font-label text-[0.48rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-rule text-[0.5rem]">2</span>
          WhatsApp
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="apply-name" className="field-label">
            Aapka naam
          </label>
          <input
            id="apply-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jaise: Riya"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="field-input"
            required
          />
        </div>

        <div>
          <label htmlFor="apply-city" className="field-label">
            City
          </label>
          <input
            id="apply-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="Jaise: Delhi"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className="field-input"
            required
          />
        </div>
      </div>

      <label className="mt-4 flex min-h-[52px] cursor-pointer items-start gap-3 border border-rule bg-ivory-2 p-3.5">
        <input
          type="checkbox"
          checked={age}
          onChange={(e) => {
            setAge(e.target.checked)
            if (error) setError("")
          }}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#6e1b27]"
          required
        />
        <span className="text-[0.8rem] leading-relaxed text-ink-muted">
          Main <strong className="font-bold text-maroon-deep">18 saal ya usse zyada</strong> hoon aur WhatsApp par
          baat karne ke liye ready hoon.
        </span>
      </label>

      {/* Live WhatsApp preview */}
      <div className="mt-4 border border-rule bg-[#e9f5e4] p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-1.5 font-label text-[0.46rem] font-semibold uppercase tracking-[0.14em] text-wa-deep">
            <WhatsAppIcon className="h-3 w-3" />
            WhatsApp par ye message jayega
          </p>
          <span className="font-label text-[0.44rem] font-semibold uppercase tracking-[0.12em] text-charcoal/35">
            Live preview
          </span>
        </div>
        <p className="mt-2 whitespace-pre-line text-[0.76rem] leading-relaxed text-charcoal/80">{message}</p>
      </div>

      {error && (
        <p
          role="alert"
          className="pop-in mt-4 border border-maroon/30 bg-maroon/[0.06] px-4 py-3 text-sm font-semibold text-maroon"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-base btn-wa btn-wrap mt-4 w-full px-4 py-4 text-[0.64rem] sm:px-6 sm:text-[0.72rem]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp par bhejo
        <ArrowUpRight className="hidden h-4 w-4 min-[360px]:block" />
      </button>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3 w-3 text-gold-ink" /> 100% private
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3 text-gold-ink" /> No joining fee
        </span>
        <span>Reply within 24 hrs</span>
      </div>
    </form>
  )
}
