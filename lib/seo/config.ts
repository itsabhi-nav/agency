import { site } from "@/lib/site"
import { canonicalUrl, siteOrigin, siteUrl } from "@/lib/seo/canonical"

export const seoConfig = {
  name: site.name,
  description:
    "Creator onboarding and Hindi-language guidance for adults in India, including platform, privacy and application support.",
  origin: siteOrigin,
  url: siteUrl,
  language: "hi-Latn-IN",
  alternateLanguages: ["hi-Latn-IN", "en-IN"],
  openGraphLocale: "en_IN",
  shareImage: canonicalUrl("/opengraph-image"),
  shareImageAlt: "Stripchat India Agency — creator onboarding and Hindi support for adults 18+",
  ...(site.email ? { contactEmail: site.email } : {}),
  contactPhone: site.phoneRaw,
  serviceArea: {
    name: "India",
    countryCode: "IN",
  },
  socialProfiles: [],
} as const

export const publicSeoPages = {
  home: {
    path: "/",
    title: "Stripchat Agency in India | Creator Guidance & Apply",
    description:
      "Looking for a Stripchat agency in India? Explore creator onboarding, platform guidance, privacy options, requirements and how to apply. Hindi support for adults 18+.",
  },
  apply: {
    path: "/apply",
    title: "Apply to Join",
    description:
      "Start the free application for adults 18+. Review the requirements, share basic details and speak with the Stripchat India Agency team on WhatsApp.",
  },
  help: {
    path: "/help",
    title: "Creator Safety & Support",
    description:
      "Find answers about creator privacy, safety, payment and changing agencies, or contact the Stripchat India Agency team by WhatsApp or phone. 18+ only.",
  },
} as const

export const indexablePublicRoutes = Object.values(publicSeoPages)
