import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import ScrollProgress from "@/components/scroll-progress"
import Ga from "@/components/ga"
import JsonLd from "@/components/json-ld"
import { seoConfig } from "@/lib/seo/config"
import { createSiteMetadata } from "@/lib/seo/metadata"
import "./globals.css"

export const metadata: Metadata = createSiteMetadata()

export const viewport: Viewport = {
  themeColor: "#4e121c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={seoConfig.language}>
      <body className="font-sans antialiased">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-black"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollProgress />
        <Ga />
      </body>
    </html>
  )
}
