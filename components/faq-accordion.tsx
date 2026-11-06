"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

type Item = { q: string; a: string }

type FaqAccordionProps = {
  items: Item[]
  tone?: "dark" | "light"
  defaultOpen?: number | null
}

export default function FaqAccordion({ items, tone = "light", defaultOpen = 0 }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const light = tone === "light"

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div
            key={`${item.q}-${index}`}
            className={`overflow-hidden rounded-[2px] border transition-colors ${
              light
                ? isOpen
                  ? "border-gold/60 bg-white"
                  : "border-rule bg-white/60 hover:border-gold/40"
                : isOpen
                  ? "border-gold/50 bg-ivory/[0.06]"
                  : "border-gold/20 bg-ivory/[0.025] hover:border-gold/40"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span
                className={`font-display text-[1.02rem] font-medium leading-snug sm:text-[1.1rem] ${
                  light ? "text-maroon-deep" : "text-ivory"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-[2px] border transition-colors ${
                  light
                    ? isOpen
                      ? "border-maroon bg-maroon text-ivory"
                      : "border-rule text-maroon"
                    : isOpen
                      ? "border-gold bg-gold text-maroon-deep"
                      : "border-gold/40 text-gold-bright"
                }`}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6 ${
                    light ? "text-ink-muted" : "text-ivory/65"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
