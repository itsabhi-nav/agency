import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.choosingAgency)

const checks = [
  {
    title: "Revenue share",
    question: "What percentage do you receive?",
    why: "Ask for the exact creator share for tips, private shows, fan clubs and other earnings. Ask whether the agency changes the split later.",
  },
  {
    title: "Payouts",
    question: "When and how will you be paid?",
    why: "Confirm the payout day, minimum threshold, bank/transfer method, currency, deductions and what evidence appears in the payment record.",
  },
  {
    title: "Account ownership",
    question: "Who controls the creator account?",
    why: "Confirm whether the account email, recovery methods and profile belong to you. Never accept an agency-controlled password or off-platform account transfer.",
  },
  {
    title: "Exit policy",
    question: "Can you leave and keep the account?",
    why: "Get the notice period, handover process, remaining payout rules and account ownership terms in writing before joining.",
  },
  {
    title: "Privacy and document safety",
    question: "How are identity and recordings handled?",
    why: "Ask what is recorded, where documents are stored, who can access CCTV or changing areas, and whether any recording is permitted without consent.",
  },
]

export default function ChooseStripchatAgencyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.choosingAgency.title}
        description={publicSeoPages.choosingAgency.description}
        path={publicSeoPages.choosingAgency.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-4xl">
          <Breadcrumbs name={publicSeoPages.choosingAgency.title} path={publicSeoPages.choosingAgency.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">How to choose a Stripchat agency in India</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Popularity and income screenshots are not a safe basis for an agency decision. Adults 18+ should compare
            revenue terms, payouts, ownership, exit conditions and privacy before signing.
          </p>

          <div className="mt-10 space-y-5">
            {checks.map((check, index) => (
              <article key={check.title} className="border border-gold/25 bg-white p-6 sm:p-7">
                <p className="font-label text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Check {index + 1}
                </p>
                <h2 className="mt-3 font-display text-2xl text-maroon-deep">{check.title}</h2>
                <p className="mt-3 font-semibold text-maroon">{check.question}</p>
                <p className="mt-2 leading-relaxed text-ink-muted">{check.why}</p>
              </article>
            ))}
          </div>

          <section className="mt-10 border-l-2 border-gold pl-6">
            <h2 className="font-display text-2xl text-maroon-deep">Get every answer in writing</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Do not share OTPs or passwords. Do not send original documents to informal accounts. Confirm platform
              approval and payment rules directly with the platform. Compare at least two agencies and keep a copy
              of your agreement, account credentials and payout records.
            </p>
          </section>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/guides/how-to-join-stripchat" className="btn-base border border-maroon px-5 py-3 text-[0.62rem] text-maroon">
              Joining guide
            </Link>
            <Link href="/guides/stripchat-creator-privacy" className="btn-base border border-maroon px-5 py-3 text-[0.62rem] text-maroon">
              Privacy guide
            </Link>
            <Link href="/apply" className="btn-base btn-wa px-5 py-3 text-[0.62rem]">
              Ask about agency terms
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
