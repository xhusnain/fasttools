import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "FastTools — Free Online Tools"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f10 0%, #1a1a1d 50%, #2a1f0a 100%)",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: "900",
            }}
          >
            FT
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              letterSpacing: "-0.02em",
            }}
          >
            FastTools
          </div>
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "1000px",
            letterSpacing: "-0.02em",
            marginBottom: "30px",
          }}
        >
          Every Free Tool You Need, In One Place
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "#a3a3a3",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Calculators · Converters · Image · PDF · Crypto · SEO · Social · Dev
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "24px",
            color: "#f97316",
            fontWeight: "600",
          }}
        >
          fasttools.store
        </div>
      </div>
    ),
    { ...size }
  )
}
