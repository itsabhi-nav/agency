import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.privacy)

export default function StripchatPrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.privacy.title}
        description={publicSeoPages.privacy.description}
        path={publicSeoPages.privacy.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.privacy.title} path={publicSeoPages.privacy.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">Stripchat creator privacy guide for India</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Privacy settings can reduce exposure, but they cannot guarantee anonymity. Check current platform
            controls and use safe recording, identity and location practices before every broadcast.
          </p>
          <section className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Stage name", "Use a separate creator name and avoid public surnames, school, employer or home details."],
              ["Face and mask options", "Check whether face cover, mask or crop settings meet platform rules for your region."],
              ["Location privacy", "Do not show landmarks, vehicle numbers, street names or real-time location."],
              ["Profile and social links", "Avoid cross-linking personal accounts. Review tagged posts and saved profile information."],
              ["Recording safety", "Streaming content may be recorded or screenshotted; settings do not prevent every external copy."],
              ["Document security", "Share identity documents only through official platform KYC, never over informal WhatsApp requests."],
            ].map(([title, body]) => (
              <article key={title} className="border border-gold/25 bg-white p-6">
                <h2 className="font-display text-xl text-maroon-deep">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </section>
          <p className="mt-10 leading-relaxed text-ink-muted">
            Start with <Link href="/guides/how-to-join-stripchat" className="text-maroon underline">how to join Stripchat</Link>,
            then use the <Link href="/help" className="text-maroon underline">support page</Link> for privacy questions.
          </p>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
