import { ArrowUpRight } from "lucide-react"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { waLink } from "@/lib/site"

const questions = [
  {
    label: "Face cover allowed?",
    message: "Hi! Face cover / mask / niqab karke live ja sakti hoon? Please guide karo.",
  },
  {
    label: "Payment kab milti hai?",
    message: "Hi! Payment weekly kaise milti hai? Pura process batao.",
  },
  {
    label: "Couple / lesbian?",
    message: "Hi! Couple ya lesbian creators kaam kar sakte hain? Rules batao.",
  },
  {
    label: "Agency switch",
    message: "Hi! Main purani agency se switch karna chahti hoon. Help karo.",
  },
  {
    label: "Sirf 2 ghante?",
    message: "Hi! Main sirf 2 ghante daily de sakti hoon. Kya ye possible hai?",
  },
]

export default function QuickQuestions() {
  return (
    <section className="border-b border-rule bg-ivory-2 py-7 sm:py-8" aria-label="Quick WhatsApp questions">
      <div className="container-x">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-wa/10 text-wa-deep">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            <p className="text-[0.82rem] leading-snug text-ink-muted">
              <span className="font-display text-[1.02rem] text-maroon-deep">Turant jawab chahiye?</span>
              <span className="hidden sm:inline"> Seedha WhatsApp par poocho —</span>
            </p>
          </div>

          <div className="hide-scrollbar -mx-[1.15rem] flex snap-x gap-2 overflow-x-auto px-[1.15rem] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {questions.map((question) => (
              <a
                key={question.label}
                href={waLink(question.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] shrink-0 snap-start items-center gap-1.5 border border-rule bg-white px-3.5 py-2.5 font-label text-[0.56rem] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-wa/50 hover:bg-wa/[0.06] hover:text-wa-deep"
              >
                {question.label}
                <ArrowUpRight className="h-3 w-3 text-gold-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
