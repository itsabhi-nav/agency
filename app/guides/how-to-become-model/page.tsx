import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import PageStructuredData from "@/components/page-structured-data"
import SiteFooter from "@/components/site-footer"
import SiteHeader from "@/components/site-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import { publicSeoPages } from "@/lib/seo/config"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata(publicSeoPages.guide)

export default function CreatorGuidePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageStructuredData
        name={publicSeoPages.guide.title}
        description={publicSeoPages.guide.description}
        path={publicSeoPages.guide.path}
      />
      <SiteHeader />
      <main id="main">
        <section className="section-deep relative overflow-hidden">
          <div className="container-x relative pb-16 pt-10 sm:py-16">
            <Breadcrumbs name={publicSeoPages.guide.title} path={publicSeoPages.guide.path} />
            <div className="mt-8 max-w-3xl">
              <p className="eyebrow text-gold-bright">Creator guide · 18+ only</p>
              <h1 className="display-2 mt-5 text-ivory">India mein Stripchat creator kaise banein?</h1>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ivory/65">
                Stripchat ek adult live-streaming platform hai. Agar aap creator ke roop mein join karne
                ke baare mein soch rahe hain, toh apply karne se pehle eligibility, privacy aur payment
                terms samajhna zaroori hai.
              </p>
            </div>
          </div>
        </section>

        <section className="section-ivory section-pad">
          <div className="container-x max-w-3xl space-y-10 text-ink-muted">
            <div>
              <h2 className="font-display text-2xl text-maroon-deep">1. Eligibility aur platform rules check karein</h2>
              <p className="mt-3 leading-relaxed">
                Yeh service sirf 18 saal ya usse zyada age ke adults ke liye hai. Platform ki current
                eligibility, identity verification aur content rules uske official sources par check karein.
                Registration se pehle apne liye applicable legal aur tax requirements bhi samajh lein.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-maroon-deep">2. Agency se application aur support samjhein</h2>
              <p className="mt-3 leading-relaxed">
                Hamare <Link href="/apply" className="text-maroon underline underline-offset-2">agency application form</Link> se
                naam aur city ke saath WhatsApp par baat shuru kar sakte hain. Yeh platform ka official
                registration form nahi hai. Account banane, verification aur available guidance ke current
                steps agency aur platform se confirm karein.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-maroon-deep">3. Privacy aur safety ke options dekhein</h2>
              <p className="mt-3 leading-relaxed">
                Public profile par kya dikhega, stage name, face cover aur location controls ke kya options
                hain, aur unki limitations kya hain, yeh pehle poochhein. Online content record ya share ho
                sakta hai; koi privacy setting complete anonymity ki guarantee nahi deti. OTP ya bank password
                kisi ko share na karein.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-maroon-deep">4. Payment aur agreement samjhein</h2>
              <p className="mt-3 leading-relaxed">
                Agency se payout schedule, fees, deductions aur records ke baare mein poochhein. Agreement
                aur platform ki payment terms padhein, aur agency change karne ke rules bhi samajh lein.
                Earnings aur payout ki guarantee nahi hoti.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-maroon-deep">Sawaal hain?</h2>
              <p className="mt-3 leading-relaxed">
                Privacy, payment ya agency switch ke liye <Link href="/help" className="text-maroon underline underline-offset-2">help page</Link> par
                contact options aur support information dekhein.
              </p>
              <Link href="/apply" className="btn-base btn-wa mt-6 px-6 py-3.5 text-[0.62rem]">
                Agency ko apply karein <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
