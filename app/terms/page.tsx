import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.terms)

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.terms.title}
        description={publicSeoPages.terms.description}
        path={publicSeoPages.terms.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.terms.title} path={publicSeoPages.terms.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">Website terms</h1>
          <div className="mt-8 space-y-6 leading-relaxed text-ink-muted">
            <p>This website provides creator onboarding guidance and agency support information for adults aged 18 or older.</p>
            <p>Joining the Stripchat platform is subject to platform eligibility, identity verification and current rules. This website is not an official Stripchat registration or payment portal.</p>
            <p>Fees, earnings, payouts and income figures are not guaranteed and may vary by location, content, schedule and audience.</p>
            <p>Do not share passwords, OTPs, bank credentials or identity documents outside the official platform verification process. Request the latest terms and payout conditions before signing an agreement.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
