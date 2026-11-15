import { ImageResponse } from "next/og"
import { seoConfig } from "@/lib/seo/config"

export const alt =
  "Stripchat India Agency — training support and rules guidance for account safety; adults 18+"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"
const domainLabel = seoConfig.url.host

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          background: "linear-gradient(115deg, #18080b 0%, #4e121c 58%, #8f1728 100%)",
          color: "#fffaf2",
          padding: "72px 86px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -210,
            width: 620,
            height: 620,
            border: "2px solid rgba(232, 192, 119, 0.2)",
            borderRadius: 310,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -30,
            top: -140,
            width: 480,
            height: 480,
            border: "1px solid rgba(255, 250, 242, 0.12)",
            borderRadius: 240,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: 850 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#f0d7a4",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            STRIPCHAT <span style={{ color: "#fffaf2" }}>INDIA AGENCY</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 54,
              color: "#f0d7a4",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Training support · Rules guidance for account safety
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontSize: 68,
              fontWeight: 750,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            <span>Start with guidance</span>
            <span style={{ color: "#f0d7a4" }}>that puts you first.</span>
          </div>
          <div style={{ display: "flex", marginTop: 30, color: "rgba(255, 250, 242, 0.78)", fontSize: 25 }}>
            Privacy · Platform guidance · Adults 18+ only
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 48,
              color: "rgba(255, 250, 242, 0.6)",
              fontSize: 20,
              letterSpacing: 1,
            }}
          >
            {domainLabel}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
