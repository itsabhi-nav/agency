import { createSiteSchema } from "@/lib/seo/schema"
import { serializeJsonLd } from "@/lib/seo-utils/validation"

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(createSiteSchema()) }}
    />
  )
}
