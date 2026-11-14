import { parseSiteOrigin, validateInternalPath } from "@/lib/seo-utils/validation"

const configuredSiteUrl = process.env.SITE_URL?.trim() || "https://stripchatagency.in"

export const siteUrl = parseSiteOrigin(configuredSiteUrl)
export const siteOrigin = siteUrl.origin

export function canonicalUrl(path = "/"): string {
  validateInternalPath(path)
  return new URL(path, siteUrl).toString()
}
