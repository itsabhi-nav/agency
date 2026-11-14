import { faqs, site } from "@/lib/site"

const BASE = "https://stripchatagency.in"

const organization = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${BASE}/#organization`,
  name: site.name,
  alternateName: "Stripchat India Agency",
  url: BASE,
  logo: `${BASE}/logo.png`,
  image: `${BASE}/images/brand/hero-heart.jpg`,
  description:
    "India ki verified Stripchat creator agency. Girls aur couples ke liye ghar se live streaming, weekly bank payment aur privacy-first guidance.",
  email: site.email,
  telephone: `+${site.phoneRaw}`,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  availableLanguage: ["en", "hi"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "02:00",
  },
  sameAs: [BASE],
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: site.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${BASE}/#organization` },
}

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

export default function JsonLd() {
  const data = [organization, website, faqPage]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
