import { site } from "@/lib/site"
import { canonicalUrl, siteOrigin, siteUrl } from "@/lib/seo/canonical"

export const seoConfig = {
  name: site.name,
  description:
    "Creator onboarding, training support and platform-rules guidance for account safety for adults in India.",
  origin: siteOrigin,
  url: siteUrl,
  language: "hi-Latn-IN",
  alternateLanguages: ["hi-Latn-IN", "en-IN"],
  openGraphLocale: "en_IN",
  shareImage: canonicalUrl("/opengraph-image"),
  shareImageAlt:
    "Stripchat India Agency — training support and rules guidance for account safety; adults 18+",
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
      "Looking for a Stripchat agency in India? Explore creator onboarding, training support, platform-rules guidance for account safety, privacy options and how to apply. Adults 18+.",
  },
  apply: {
    path: "/apply",
    title: "Apply as a Stripchat Creator in India",
    description:
      "Interested in joining Stripchat as a creator in India? Adults 18+ can apply to the agency and ask about registration, privacy and next steps.",
  },
  help: {
    path: "/help",
    title: "Creator Privacy, Payment & Agency Support",
    description:
      "Ask about Stripchat creator privacy settings, payments and changing agencies. Contact the India agency for guidance and support for adults 18+.",
  },
  guide: {
    path: "/guides/how-to-become-model",
    title: "How to Become a Stripchat Creator in India",
    description:
      "Learn what to consider before applying as an adult Stripchat creator in India, including eligibility, privacy, payments and agency support.",
  },
} as const

export const indexablePublicRoutes = Object.values(publicSeoPages)
