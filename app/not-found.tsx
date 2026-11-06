import Link from "next/link"
import { ArrowUpRight, Heart, Home, MessageCircle } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { waLink } from "@/lib/site"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main id="main" className="section-deep relative flex min-h-[70vh] items-center overflow-hidden py-20">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="glow-gold pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 opacity-40" aria-hidden="true" />
        <div className="container-x relative text-center">
          <p className="font-display text-[6rem] leading-none text-gold/20 sm:text-[9rem]">404</p>
          <div className="-mt-6 sm:-mt-10">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold-bright">
              <Heart className="h-6 w-6" />
            </span>
            <h1 className="display-2 mt-6 text-ivory">
              Ye page live nahi hai.
              <br />
              <span className="display-italic">Par aap ho sakti ho.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ivory/55">
              Link galat ho sakta hai ya page move ho gaya. Chalo wapas home chalein — ya seedha humse baat karein.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-base btn-rose px-6 py-3.5 text-[0.64rem]">
                <Home className="h-3.5 w-3.5" />
                Back to home
              </Link>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-ghost px-5 py-3.5 text-[0.62rem]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp us
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
