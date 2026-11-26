import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.account)

export default function StripchatAccountGuidePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.account.title}
        description={publicSeoPages.account.description}
        path={publicSeoPages.account.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.account.title} path={publicSeoPages.account.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">Stripchat account kaise banaye?</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Neeche diya process sirf adults 18+ ke liye educational guidance hai. Real account aur identity
            verification official Stripchat website ya app par hi complete karein.
          </p>
          <section className="mt-10 space-y-8">
            {[
              ["Age aur eligibility check", "Pehle platform ki current 18+ eligibility aur geographic restrictions confirm karein."],
              ["Official account open karein", "Official domain par creator/account option chunein. Email, phone aur password ki details apni personal contact information se rakhein."],
              ["Identity verification kijiye", "Aapko apni valid identity aur required verification details deni ho sakti hain. Agency ko ID passwords, OTP ya unnecessary copies na dein."],
              ["Profile aur privacy set karein", "Stage name, profile photo, location, face reveal aur visibility options platform ke current controls ke mutabik set karein."],
              ["Rules aur payout samjhein", "Streaming se pehle prohibited content, payment terms, account ownership aur payout process padhein."],
            ].map(([title, body]) => (
              <article key={title}>
                <h2 className="font-display text-2xl text-maroon-deep">{title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </section>
          <p className="mt-10 leading-relaxed text-ink-muted">
            Joining aur registration ke process ke liye <Link href="/guides/how-to-join-stripchat" className="text-maroon underline">English step-by-step guide</Link>,
            <Link href="/guides/stripchat-creator-privacy" className="text-maroon underline"> privacy guide</Link> aur
            <Link href="/help" className="text-maroon underline"> agency support page</Link> dekhein.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
