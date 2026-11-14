import type { MetadataRoute } from "next"
import { canonicalUrl } from "@/lib/seo/canonical"
import { indexablePublicRoutes } from "@/lib/seo/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePublicRoutes.map(({ path }) => ({ url: canonicalUrl(path) }))
}
