import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/seo/canonical"

export function createCrawlerPolicy(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: canonicalUrl("/sitemap.xml"),
  }
}
