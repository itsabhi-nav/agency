import type { MetadataRoute } from "next"

const BASE = "https://stripchatagency.in"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/help`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
