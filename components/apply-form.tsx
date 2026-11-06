"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, CheckCircle2, Lock, ShieldCheck } from "lucide-react"
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

  const buildMessage = () =>
    [
      "Hi Stripchat India Agency! Mujhe live streaming kaam karna hai.",
      "",
      `Naam: ${form.name.trim()}`,
      `City: ${form.city.trim()}`,
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

    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  if (sent) {
    return (
      <div className="card-white flex min-h-[430px] flex-col items-center justify-center p-8 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/50 bg-gold/15 text-gold-ink">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="display-3 mt-6 text-maroon-deep">Bas ek step baaki!</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          WhatsApp khul gaya hai — bas <strong className="font-bold text-maroon-deep">Send</strong> dabaiye. Agar
          nahi khula, neeche button se dobara try karein.
        </p>
        <a
          href={waLink(buildMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-wa mt-7 px-6 py-3.5 text-[0.66rem]"
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
          className="mt-5 font-label text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink-muted underline underline-offset-4 hover:text-maroon"
        >
          Details badalni hain
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-white p-6 sm:p-8" noValidate>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-label text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
            Free registration
          </p>
          <h3 className="display-3 mt-3 text-maroon-deep">Bas 2 sawaal</h3>
        </div>
        <span className="rounded-[2px] border border-gold/40 px-3 py-1.5 font-label text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
          18+
        </span>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
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

      <label className="mt-5 flex cursor-pointer items-start gap-3 border border-rule bg-ivory-2 p-3.5">
        <input
          type="checkbox"
          checked={age}
          onChange={(e) => {
            setAge(e.target.checked)
            if (error) setError("")
          }}
          className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#6e1b27]"
          required
        />
        <span className="text-[0.8rem] leading-relaxed text-ink-muted">
          Main <strong className="font-bold text-maroon-deep">18 saal ya usse zyada</strong> hoon aur WhatsApp par
          baat karne ke liye ready hoon.
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="mt-4 border border-maroon/30 bg-maroon/[0.06] px-4 py-3 text-sm font-semibold text-maroon"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-base btn-wa btn-wrap mt-5 w-full px-4 py-4 text-[0.64rem] sm:px-6 sm:text-[0.72rem]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp par bhejo
        <ArrowUpRight className="hidden h-4 w-4 min-[360px]:block" />
      </button>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
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
