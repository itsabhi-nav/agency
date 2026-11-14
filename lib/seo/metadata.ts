import type { Metadata } from "next"
import { publicSeoPages, seoConfig } from "@/lib/seo/config"
import { canonicalUrl } from "@/lib/seo/canonical"

const defaultRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
}

export function createSiteMetadata(): Metadata {
  const home = publicSeoPages.home

  return {
    metadataBase: seoConfig.url,
    title: {
      default: home.title,
      template: "%s · Stripchat India Agency",
    },
    description: home.description,
    alternates: {
      canonical: canonicalUrl("/"),
    },
    openGraph: {
      title: home.title,
      description: home.description,
      url: canonicalUrl("/"),
      siteName: seoConfig.name,
      type: "website",
      locale: seoConfig.openGraphLocale,
      images: [
        {
          url: seoConfig.shareImage,
          width: 1200,
          height: 630,
          alt: seoConfig.shareImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: [seoConfig.shareImage],
    },
    robots: defaultRobots,
    ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          verification: {
            google: process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
  }
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const canonical = canonicalUrl(path)
  const socialTitle = `${title} | ${seoConfig.name}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: seoConfig.name,
      type: "website",
      locale: seoConfig.openGraphLocale,
      images: [
        {
          url: seoConfig.shareImage,
          width: 1200,
          height: 630,
          alt: seoConfig.shareImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [seoConfig.shareImage],
    },
    robots: defaultRobots,
  }
}
