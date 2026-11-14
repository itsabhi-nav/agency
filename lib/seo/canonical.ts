import { parseSiteOrigin, validateInternalPath } from "@/lib/seo-utils/validation"

const configuredSiteUrl = process.env.SITE_URL?.trim()
const defaultSiteUrl =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000"

const siteUrlInput = configuredSiteUrl || defaultSiteUrl

if (!siteUrlInput) {
  throw new Error(
    "SITE_URL is required for production builds. Set it to the HTTPS origin of a domain your organization controls.",
  )
}

export const siteUrl = parseSiteOrigin(siteUrlInput)
export const siteOrigin = siteUrl.origin

export function canonicalUrl(path = "/"): string {
  validateInternalPath(path)
  return new URL(path, siteUrl).toString()
}
