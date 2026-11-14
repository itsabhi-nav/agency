import { createPageSchema } from "@/lib/seo/schema"
import { serializeJsonLd } from "@/lib/seo-utils/validation"

export default function PageStructuredData({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(createPageSchema({ name, description, path })) }}
    />
  )
}
