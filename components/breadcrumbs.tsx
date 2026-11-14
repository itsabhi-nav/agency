import Link from "next/link"
import { createBreadcrumbItems } from "@/lib/seo-utils/breadcrumbs"

export default function Breadcrumbs({ name, path }: { name: string; path: string }) {
  const items = createBreadcrumbItems(path, name)

  return (
    <nav aria-label="Breadcrumb" className="font-label text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ivory/45">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1

          return (
            <li key={item.url} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isCurrentPage ? (
                <span aria-current="page" className="text-ivory/70">
                  {item.name}
                </span>
              ) : (
                <Link href={path === "/" ? "/" : item.url} className="transition-colors hover:text-gold-bright">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
