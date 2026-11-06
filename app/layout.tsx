import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ScrollProgress from "@/components/scroll-progress"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://stripchatagency.in"),
  title: {
    default: "Stripchat India Agency — Ghar se live ho, paise kamao",
    template: "%s · Stripchat India Agency",
  },
  description:
    "18+ women ke liye verified Stripchat agency. Ghar se live streaming, free registration, weekly payment, face cover allowed aur 100% privacy. WhatsApp par 30 second mein join karo.",
  keywords:
    "Stripchat India agency, live streaming job for girls, work from home for women, online earning, webcam job India, Stripchat agency",
  openGraph: {
    title: "Stripchat India Agency — Ghar se live ho, paise kamao",
    description:
      "Free registration, weekly payment aur 100% privacy. 18+ women ke liye verified Stripchat agency. WhatsApp par join karo.",
    type: "website",
    locale: "en_IN",
    images: ["/images/brand/hero-heart.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

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
    <html lang="en-IN">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-black"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollProgress />
        <Analytics />
      </body>
    </html>
  )
}
