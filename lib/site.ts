export const site = {
  name: "Stripchat India Agency",
  brand: "STRIPCHAT",
  brandSub: "INDIA AGENCY",
  phoneDisplay: "+91 87009 55207",
  phoneRaw: "+918700955207",
  email: "info@stripchatagency.in",
  whatsapp: "https://wa.me/918700955207",
  applyMessage: "Hi! Mujhe Stripchat par live streaming kaam karna hai. Please guide karo.",
  hours: "Mon–Sun · 9:00 AM – 2:00 AM IST",
  nav: [
    { href: "/", label: "Home" },
    { href: "/apply", label: "Apply" },
    { href: "/help", label: "Madad" },
  ],
  stats: [
    { value: "₹30k–90k", label: "Monthly earning*" },
    { value: "Weekly", label: "Payment" },
    { value: "₹0", label: "Joining fee" },
    { value: "18+", label: "Only" },
  ],
  images: {
    hero: "/images/brand/hero-heart.jpg",
    funClub: "/images/brand/fun-club.jpg",
    community: "/images/brand/community-heart.jpg",
    crystal: "/images/brand/award-crystal.jpg",
    boxes: "/images/brand/award-boxes.jpg",
    awards: "/images/brand/award-set.jpg",
    tenYears: "/images/brand/ten-years.jpg",
    milestone: "/images/brand/milestone.jpg",
  },
}

export function waLink(message = site.applyMessage) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const trustPoints = ["Free joining", "Weekly payment", "Face cover allowed", "100% private"]

export const videos = [
  {
    src: "/videos/stripchat-explainer.mp4",
    poster: "/videos/stripchat-explainer-poster.jpg",
    label: "Kaam kaise hota hai?",
    duration: "1 min",
    caption: "Stripchat par account, kamai aur payout — simple Hindi mein.",
  },
  {
    src: "/videos/creator-promo.mp4",
    poster: "/videos/creator-promo-poster.jpg",
    label: "Ghar ka setup",
    duration: "20 sec",
    caption: "Ek phone, ek ring light aur internet — bas itna hi chahiye.",
  },
]

export const requirements = [
  {
    icon: "age",
    title: "18+ aur ID",
    body: "Aadhaar, PAN ya koi bhi government ID. Age verify hote hi shuru.",
  },
  {
    icon: "phone",
    title: "Smartphone + internet",
    body: "Achhi camera wala phone aur stable internet. Laptop ho toh aur bhi better.",
  },
  {
    icon: "clock",
    title: "2–3 ghante",
    body: "Apne time par live jao. Koi fixed shift nahi, koi target nahi.",
  },
]

export const steps = [
  {
    step: "01",
    title: "WhatsApp par message karo",
    body: "Neeche wale button se seedha WhatsApp khulega. Bas 'Hi' bhejo — hum turant reply karenge.",
    meta: "30 second",
  },
  {
    step: "02",
    title: "Account + free training",
    body: "Hum sahi tarike se account banayenge, privacy settings karenge aur aapko live jaana sikhayenge.",
    meta: "1–2 din",
  },
  {
    step: "03",
    title: "Live jao, weekly payment lo",
    body: "Apne ghar se live jao. Jitna time doge, utna zyada kamaoge. Payment har week bank mein.",
    meta: "Har week",
  },
]

export const earnings = [
  {
    time: "2–3 ghante / din",
    range: "₹30,000–₹45,000",
    label: "Part-time",
    note: "College, ghar ya job ke saath",
  },
  {
    time: "4–5 ghante / din",
    range: "₹50,000–₹70,000",
    label: "Regular",
    note: "Sabse popular routine",
  },
  {
    time: "6+ ghante / din",
    range: "₹70,000–₹90,000+",
    label: "Full-time",
    note: "Zyada time, zyada kamai",
  },
]

export const privacyPoints = [
  {
    title: "Face cover, mask, niqab ya hijab",
    body: "Aapka face chhupa hua rahega. Sirf aapki marzi — koi pressure nahi.",
  },
  {
    title: "Stage name, real name nahi",
    body: "Public profile par sirf aapka stage name dikhega. Real ID sirf verification ke liye.",
  },
  {
    title: "Apna city / state block karo",
    body: "Geo-block se aapke area ke log aapki profile nahi dekh payenge.",
  },
  {
    title: "Family aur friends se private",
    body: "Aapki personal details, number aur address public nahi hote.",
  },
]

export const switchPoints = [
  "Token rate kam mil raha hai?",
  "Payment late aa rahi hai ya cut ho rahi hai?",
  "Work pressure ya target ka tension hai?",
  "Account block ho gaya ya warning aa rahi hai?",
]

export const whyUs = [
  {
    icon: "verified",
    title: "Verified agency",
    body: "Written agreement, proper guidance aur real support. Koi hidden charge nahi.",
  },
  {
    icon: "shield",
    title: "Account safe rehta hai",
    body: "Rules ke saath account banate hain — ek chhoti galti se account block nahi hota.",
  },
  {
    icon: "wallet",
    title: "Weekly, transparent payment",
    body: "Payment seedha bank account mein. Har week ka clear record.",
  },
  {
    icon: "headset",
    title: "Hindi mein daily support",
    body: "WhatsApp par real insaan. Technical help se motivation tak.",
  },
]

export const faqs = [
  {
    q: "Kya mujhe pehle se experience chahiye?",
    a: "Nahi. Complete beginner bhi start kar sakti hai. Hum account banana, lighting, camera angle aur baat karne ka tarika — sab free sikhate hain.",
  },
  {
    q: "Kya joining ke liye paise lagte hain?",
    a: "Bilkul nahi. Registration, training aur setup free hai. Koi joining fee, koi investment nahi. Hum tabhi kamate hain jab aap kamati hain.",
  },
  {
    q: "Payment kab aur kaise milti hai?",
    a: "Payment weekly hoti hai aur seedha aapke bank account mein aati hai. Har payment ka record milta hai — koi hidden cut nahi.",
  },
  {
    q: "Kya main face chhupa kar live ja sakti hoon?",
    a: "Haan. Mask, niqab, hijab ya face cover — aapki marzi. Aap stage name bhi use kar sakti hain aur apna city geo-block kar sakti hain.",
  },
  {
    q: "Kya ye safe aur legal hai?",
    a: "Ye 18+ adult platform hai. Age verification aur ID check hota hai. Aapki real details public nahi hoti. Hum poora process rules ke according karte hain.",
  },
  {
    q: "Couple ya lesbian creators kaam kar sakti hain?",
    a: "Haan. Couples aur female-female creators dono welcome hain. Dono ki age 18+ aur valid ID honi chahiye.",
  },
  {
    q: "Mera account block ho jayega?",
    a: "Hum account sahi tarike se banate hain aur rules batate hain, isliye block ka risk kam hota hai. Phir bhi koi dikkat aaye toh hum support karte hain.",
  },
  {
    q: "Kitna time dena hota hai?",
    a: "2–3 ghante se shuru kar sakti hain. Koi target nahi. Jitna time aur consistency doge, utna better result milega.",
  },
]

export const marqueeItems = [
  "Verified agency",
  "Free registration",
  "Weekly payout",
  "No target",
  "Face cover allowed",
  "Hindi support",
  "18+ only",
]

export const comparison = {
  old: {
    title: "Purani agency / app",
    points: [
      "Token rate kam, hidden cuts",
      "Payment late ya adhoori",
      "Joining ke naam par charges",
      "Message ka reply nahi",
      "Face reveal ka pressure",
      "Block ka constant dar",
    ],
  },
  us: {
    title: "Stripchat India Agency",
    points: [
      "Sahi token rate, clear record",
      "Weekly payment, seedha bank",
      "₹0 joining fee",
      "Hindi support, daily reply",
      "Face cover, mask, niqab allowed",
      "Rules-based setup, safe account",
    ],
  },
}

export const milestones = [
  {
    src: "/images/brand/award-boxes.jpg",
    value: "100K+",
    label: "Follower award",
  },
  {
    src: "/images/brand/award-crystal.jpg",
    value: "1.5M",
    label: "Follower award",
  },
  {
    src: "/images/brand/ten-years.jpg",
    value: "10 yrs",
    label: "Live together",
  },
  {
    src: "/images/brand/milestone.jpg",
    value: "2M",
    label: "Creator milestone",
  },
]
