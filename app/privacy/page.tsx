import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.privacyPolicy)

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.privacyPolicy.title}
        description={publicSeoPages.privacyPolicy.description}
        path={publicSeoPages.privacyPolicy.path}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs name={publicSeoPages.privacy.title} path={publicSeoPages.privacy.path} />
          <h1 className="display-2 mt-8 text-maroon-deep">Privacy policy</h1>
          <div className="mt-8 space-y-7 leading-relaxed text-ink-muted">
            <section>
              <h2 className="font-display text-2xl text-maroon-deep">Information you choose to provide</h2>
              <p className="mt-3">
                Our website application and WhatsApp contact options may collect the name, city and message you provide.
                Share only information that is necessary for guidance. Do not send passwords or one-time passwords.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-maroon-deep">Identity documents</h2>
              <p className="mt-3">
                Identity verification belongs in the official platform KYC process. Do not send original ID documents,
                OTPs or bank passwords through informal chats. Any legitimate document request should identify the
                purpose and the authorized recipient in writing.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-maroon-deep">Payments and account access</h2>
              <p className="mt-3">
                Creators should retain account recovery access and should not give passwords to an agency or operator.
                Payment and account-ownership terms should be confirmed directly in the platform and in a written agreement.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-maroon-deep">Analytics and technical data</h2>
              <p className="mt-3">
                Basic server and analytics records may be used to operate the website, measure traffic and prevent misuse.
                Third-party features linked from the website may have their own privacy practices.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-maroon-deep">Questions</h2>
              <p className="mt-3">
                Use the agency help page to ask how enquiry or support information is handled before sharing personal details.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
