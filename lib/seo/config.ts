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
  terms: {
    path: "/terms",
    title: "Website Terms",
    description:
      "Terms for using the Stripchat India Agency website, including eligibility, earnings information and responsible use.",
  },
  explainerVideo: {
    path: "/videos/stripchat-explainer",
    title: "How Stripchat Creator Work Works",
    description:
      "A Hindi explainer video for adults about account setup, creator work and agency support.",
  },
  join: {
    path: "/guides/how-to-join-stripchat",
    title: "How to Join Stripchat from India",
    description:
      "Step-by-step guidance for adults in India on Stripchat account joining, eligibility, KYC, privacy and independent agency support.",
  },
  account: {
    path: "/guides/stripchat-account-kaise-banaye",
    title: "Stripchat Account Kaise Banaye",
    description:
      "Adults 18+ ke liye Stripchat account banane, identity verification, privacy settings aur safe registration process ki Hindi guide.",
  },
  privacy: {
    path: "/guides/stripchat-creator-privacy",
    title: "Stripchat Creator Privacy Guide for India",
    description:
      "Learn about stage names, face privacy, profile visibility, location safety and privacy limits before joining Stripchat.",
  },
  india: {
    path: "/stripchat-india",
    title: "Stripchat India Agency",
    description:
      "Hindi-speaking Stripchat creator guidance and agency support for adults in India, including account setup, privacy and payments.",
  },
  choosingAgency: {
    path: "/guides/choose-stripchat-agency",
    title: "How to Choose a Stripchat Agency in India",
    description:
      "A transparent checklist for adults comparing Stripchat agencies in India: revenue share, payments, account ownership, exit terms and privacy.",
  },
} as const

export const indexablePublicRoutes = Object.values(publicSeoPages)
