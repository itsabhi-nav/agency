import { seoConfig } from "@/lib/seo/config"
import { canonicalUrl } from "@/lib/seo/canonical"
import { createBreadcrumbItems, createBreadcrumbSchema } from "@/lib/seo-utils/breadcrumbs"

export function createSiteSchema() {
  const organizationId = `${canonicalUrl("/")}#organization`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: seoConfig.name,
        alternateName: "Stripchat India",
        url: seoConfig.origin,
        logo: {
          "@type": "ImageObject",
          url: canonicalUrl("/logo.png"),
        },
        image: seoConfig.shareImage,
        description: seoConfig.description,
        ...(seoConfig.contactEmail ? { email: seoConfig.contactEmail } : {}),
        telephone: seoConfig.contactPhone,
        areaServed: {
          "@type": "Country",
          name: seoConfig.serviceArea.name,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: seoConfig.contactPhone,
          ...(seoConfig.contactEmail ? { email: seoConfig.contactEmail } : {}),
          availableLanguage: ["Hindi", "English"],
          areaServed: seoConfig.serviceArea.countryCode,
        },
        ...(seoConfig.socialProfiles.length ? { sameAs: [...seoConfig.socialProfiles] } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl("/")}#website`,
        url: seoConfig.origin,
        name: seoConfig.name,
        alternateName: "Stripchat India",
        inLanguage: [...seoConfig.alternateLanguages],
        publisher: { "@id": organizationId },
      },
    ],
  }
}

export function createPageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = canonicalUrl(path)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: [...seoConfig.alternateLanguages],
    isPartOf: { "@id": `${canonicalUrl("/")}#website` },
    about: { "@id": `${canonicalUrl("/")}#organization` },
    ...(path === "/" ? {} : { breadcrumb: createBreadcrumbSchema(createBreadcrumbItems(path, name)) }),
  }
}
