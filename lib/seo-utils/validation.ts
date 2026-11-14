export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue | undefined }

export function parseSiteOrigin(value: string): URL {
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error(`Invalid SITE_URL "${value}". Set SITE_URL to the site's HTTPS origin, for example https://example.com.`)
  }

  const isLocalhost = url.hostname === "localhost" || url.hostname === "127.0.0.1"
  if (
    (url.protocol !== "https:" && !(isLocalhost && url.protocol === "http:")) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(`Invalid SITE_URL "${value}". Use an HTTPS origin without a path, query, or fragment.`)
  }

  return url
}

export function validateInternalPath(path: string): void {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("?") || path.includes("#")) {
    throw new Error(`Invalid canonical path "${path}". Use a local path without a query or fragment.`)
  }
}

export function serializeJsonLd(data: JsonLdValue): string {
  const serialized = JSON.stringify(data)
  if (!serialized) {
    throw new Error("Unable to serialize structured data.")
  }

  return serialized.replace(/</g, "\\u003c")
}
