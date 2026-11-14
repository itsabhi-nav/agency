import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import ScrollProgress from "@/components/scroll-progress"
import Ga from "@/components/ga"
import JsonLd from "@/components/json-ld"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://stripchatagency.in"),
  title: {
    default: "Stripchat India Agency · Verified Stripchat creator agency in India",
    template: "%s · Stripchat India Agency",
  },
  description:
    "India ki verified Stripchat agency. Girls aur couples ke liye ghar se live streaming, weekly bank payment, face cover allowed aur 100% privacy. Registration free.",
  keywords:
    "Stripchat India agency, verified Stripchat agency, live streaming job for girls, work from home for women, online earning, webcam job India, couples live streaming",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stripchat India Agency · Verified Stripchat creator agency in India",
    description:
      "Verified Stripchat agency. Weekly payment, face cover allowed aur 100% privacy. Girls aur couples ke liye free registration.",
    url: "https://stripchatagency.in",
    siteName: "Stripchat India Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/brand/hero-heart.jpg",
        width: 1200,
        height: 630,
        alt: "Stripchat India Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripchat India Agency · Verified Stripchat creator agency",
    description:
      "Verified Stripchat agency. Weekly payment, face cover allowed aur 100% privacy. Free registration.",
    images: ["/images/brand/hero-heart.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Search Console verification: ye value me apna code daal dena
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
