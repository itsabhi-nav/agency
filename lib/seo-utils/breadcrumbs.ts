import { canonicalUrl } from "@/lib/seo/canonical"

export type BreadcrumbItem = {
  name: string
  url: string
}

export function createBreadcrumbItems(path: string, pageName: string): BreadcrumbItem[] {
  if (path === "/") {
    return [{ name: pageName, url: canonicalUrl("/") }]
  }

  return [
    { name: "Home", url: canonicalUrl("/") },
    { name: pageName, url: canonicalUrl(path) },
  ]
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
