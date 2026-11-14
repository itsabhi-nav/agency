"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect, useRef } from "react"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export default function Ga() {
  const pathname = usePathname()
  const ready = useRef(false)
  const lastPath = useRef<string | null>(null)

  // Queue hamesha pehle se ready rakho, phir config bhejo.
  // Script kabhi load ho, queue order kabhi bhi ho, pageview miss nahi hoga.
  useEffect(() => {
    if (!GA_ID) return

    window.dataLayer = window.dataLayer || []
    if (!window.gtag) {
      // gtag.js sirf `arguments` object process karta hai, plain array nahi
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments)
      }
    }

    if (lastPath.current === pathname) return

    if (!ready.current) {
      ready.current = true
      window.gtag?.("js", new Date())
    }
    lastPath.current = pathname
    window.gtag?.("config", GA_ID, { page_path: pathname })
  }, [pathname])

  if (!GA_ID) return null

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  )
}
