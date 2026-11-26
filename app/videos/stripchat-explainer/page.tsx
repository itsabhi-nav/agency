import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { canonicalUrl } from "@/lib/seo/canonical"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"
import { serializeJsonLd } from "@/lib/seo-utils/validation"

export const metadata = createPageMetadata(publicSeoPages.explainerVideo)

export default function ExplainerVideoPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Kaam kaise hota hai?",
    description:
      "A Hindi explainer for adults about account setup, creator work and agency support.",
    thumbnailUrl: canonicalUrl("/videos/stripchat-explainer-poster.jpg"),
    contentUrl: canonicalUrl("/videos/stripchat-explainer.mp4"),
  }

  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.explainerVideo.title}
        description={publicSeoPages.explainerVideo.description}
        path={publicSeoPages.explainerVideo.path}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(videoSchema) }}
      />
      <SiteHeader />
      <main id="main" className="section-ivory section-pad">
        <div className="container-x max-w-3xl">
          <Breadcrumbs
            name={publicSeoPages.explainerVideo.title}
            path={publicSeoPages.explainerVideo.path}
          />
          <h1 className="display-2 mt-8 text-maroon-deep">Stripchat creator kaam kaise hota hai?</h1>
          <p className="mt-5 leading-relaxed text-ink-muted">
            Account setup, eligibility, privacy aur agency support ka short Hindi overview. Adults 18+ only.
          </p>
          <video
            src="/videos/stripchat-explainer.mp4"
            poster="/videos/stripchat-explainer-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="mt-8 max-h-[42rem] w-full border border-gold/25 bg-black"
          >
            Aapka browser video support nahi karta.
          </video>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
