import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.india)

export default function StripchatIndiaPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.india.title}
        description={publicSeoPages.india.description}
        path={publicSeoPages.india.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.india.title} path={publicSeoPages.india.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">Stripchat India Agency</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Independent Hindi-speaking guidance for adults 18+ who are researching Stripchat account setup,
            privacy, rules and creator support in India.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              ["/guides/how-to-join-stripchat", "How to join Stripchat", "Eligibility, official registration and safe agency terms"],
              ["/guides/stripchat-account-kaise-banaye", "Account kaise banaye", "Hindi step-by-step account setup guide"],
              ["/guides/stripchat-creator-privacy", "Creator privacy", "Face, location, profile and identity safety"],
              ["/help", "Help and support", "Payment, switching agencies and account questions"],
            ].map(([href, title, body]) => (
              <Link key={href} href={href} className="border border-gold/25 bg-white p-6 transition-colors hover:border-gold">
                <h2 className="font-display text-xl text-maroon-deep">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
