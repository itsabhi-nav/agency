import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.join)

export default function HowToJoinStripchatPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.join.title}
        description={publicSeoPages.join.description}
        path={publicSeoPages.join.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.join.title} path={publicSeoPages.join.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">How to join Stripchat from India</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            This guide is for adults 18+. It explains the joining process, current platform verification,
            privacy choices and the information you should confirm before using an independent agency.
          </p>
          <ol className="mt-10 space-y-7">
            {[
              ["Check eligibility", "You must meet the Stripchat platform age and identity requirements. Your current documents and profile details should belong to you."],
              ["Complete official platform registration", "Create or access the account through the official Stripchat platform. Never share your password or OTP with an agency or third party."],
              ["Complete KYC yourself", "Identity verification is a platform security step. Use only official channels and keep copies of documents you submit."],
              ["Set privacy before going live", "Review stage name, face coverage, geolocation and profile visibility options. No setting can guarantee complete anonymity."],
              ["Confirm agency terms", "Agree only after checking joining fees, payout schedule, deductions, written records and account ownership."],
              ["Start with platform rules and support", "Learn prohibited content, age/location rules and blocking reasons before broadcasting."],
            ].map(([title, body], index) => (
              <li key={title} className="border-l-2 border-gold pl-5">
                <p className="font-display text-xl text-maroon-deep">{index + 1}. {title}</p>
                <p className="mt-2 leading-relaxed text-ink-muted">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 border border-gold/30 bg-white p-6">
            <h2 className="font-display text-2xl text-maroon-deep">Need guidance in Hindi?</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Read the <Link href="/guides/stripchat-account-kaise-banaye" className="text-maroon underline">account creation guide</Link>,
              <Link href="/guides/stripchat-creator-privacy" className="text-maroon underline"> privacy guide</Link>, or
              <Link href="/apply" className="text-maroon underline"> ask about independent agency support</Link>.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
