import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JWTDecoder } from "@/components/jwt-decoder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "JWT Decoder — Decode JSON Web Tokens (JWT) Online | SmartToolboxes",
  description:
    "Decode JWT header and payload safely in your browser. Inspect claims, alg, exp/iat, and base64url content. Great for debugging auth.",
  keywords: [
    "jwt decoder",
    "decode jwt",
    "jwt parser",
    "json web token decoder",
    "jwt header payload",
    "base64url decode",
    "jwt alg",
    "jwt exp iat nbf",
    "jwt aud iss sub",
    "jwt claims inspector",
    "jwt signature",
    "jwt verification note",
    "jwks",
    "jws",
    "jwe",
    "oidc id token",
    "oauth access token",
    "auth debugging",
    "jwt tools",
    "jwt online",
    "developer jwt",
    "decode id token",
    "jwt payload viewer",
    "jwt header viewer",
    "jwt base64",
    "jwt security",
    "jwt validation",
    "jwt revoke",
    "jwt best practices",
    "free jwt decoder"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/dev-tools/jwt-decoder" },
  openGraph: {
    title: "JWT Decoder — Decode JSON Web Tokens",
    description: "Inspect JWT header and payload safely in the browser.",
    url: "https://www.smarttoolboxes.com/dev-tools/jwt-decoder",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "JWT Decoder", description: "Decode and inspect JWTs online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "JWT Decoder",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/dev-tools/jwt-decoder",
      description:
        "Developer tool to decode JWT header and payload in the browser for debugging.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Decode header/payload", "Base64URL", "Claims viewer"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function JWTDecoderPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">JWT Decoder</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Decode and inspect JWT tokens to view header, payload, and signature
          </p>
        </div>

        <JWTDecoder />

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Decode JWTs</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste your JWT; we split header, payload, and signature.</li>
            <li>Header and payload are base64url‑decoded for easy reading.</li>
            <li>We don’t verify signatures; use your server or JWKS for verification.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Security Notes</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Never paste secrets or production tokens you don’t control.</li>
            <li>Decoding is not verification—check signature and issuer on the backend.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/regex-tester">Regex Tester</Link></li>
            <li><Link href="/dev-tools/json-to-csv">JSON to CSV</Link></li>
            <li><Link href="/dev-tools/markdown-previewer">Markdown Previewer</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
