/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/#how-it-works", permanent: true },
      { source: "/why-join", destination: "/#faq", permanent: true },
      { source: "/requirements", destination: "/#requirements", permanent: true },
      { source: "/faq", destination: "/help#faq", permanent: true },
      { source: "/contact", destination: "/help", permanent: true },
      { source: "/privacy", destination: "/help", permanent: true },
      { source: "/terms", destination: "/help", permanent: true },
    ]
  },
}

export default nextConfig
