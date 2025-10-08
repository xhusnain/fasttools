import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JWTDecoder } from "@/components/jwt-decoder"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free JWT Decoder | Decode JSON Web Tokens (JWT) Online | FastTools",
  description:
    "Decode JWT header and payload safely in your browser. Inspect claims, alg, exp/iat, and base64url content. Great for debugging auth.",
  keywords: [
    // Primary Keywords (20)
    "jwt decoder",
    "free jwt decoder",
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
    
    // Secondary Keywords (20)
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
    "free jwt decoder",
    "jwt decoder online",
    "jwt parser online",
    "json web token decoder online",
    "jwt header payload online",
    "base64url decode online",
    "jwt alg online",
    "jwt exp iat nbf online",
    "jwt aud iss sub online",
    "jwt claims inspector online",
    
    // Long-tail Keywords (20)
    "free online jwt decoder",
    "best jwt decoder online",
    "jwt decoder with live preview",
    "free jwt decoder tool online",
    "online jwt decoder free",
    "jwt decoder online free",
    "decode jwt free online",
    "jwt parser free online",
    "json web token decoder free online",
    "jwt header payload free online",
    "base64url decode free online",
    "jwt alg free online",
    "jwt exp iat nbf free online",
    "jwt aud iss sub free online",
    "jwt claims inspector free online",
    "jwt signature free online",
    "jwt verification note free online",
    "jwks free online",
    "jws free online",
    "jwe free online",
    
    // Additional SEO Keywords
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
    "free jwt decoder",
    "jwt decoder online",
    "jwt parser online",
    "json web token decoder online",
    "jwt header payload online",
    "base64url decode online",
    "jwt alg online",
    "jwt exp iat nbf online",
    "jwt aud iss sub online",
    "jwt claims inspector online",
    "jwt signature online",
    "jwt verification note online",
    "jwks online",
    "jws online",
    "jwe online",
    "oidc id token online",
    "oauth access token online",
    "auth debugging online",
    "jwt tools online",
    "jwt online free",
    "developer jwt online",
    "decode id token online",
    "jwt payload viewer online",
    "jwt header viewer online",
    "jwt base64 online",
    "jwt security online",
    "jwt validation online",
    "jwt revoke online",
    "jwt best practices online",
    "free jwt decoder online",
    "jwt decoder free",
    "jwt parser free",
    "json web token decoder free",
    "jwt header payload free",
    "base64url decode free",
    "jwt alg free",
    "jwt exp iat nbf free",
    "jwt aud iss sub free",
    "jwt claims inspector free",
    "jwt signature free",
    "jwt verification note free",
    "jwks free",
    "jws free",
    "jwe free",
    "oidc id token free",
    "oauth access token free",
    "auth debugging free",
    "jwt tools free",
    "jwt online free",
    "developer jwt free",
    "decode id token free",
    "jwt payload viewer free",
    "jwt header viewer free",
    "jwt base64 free",
    "jwt security free",
    "jwt validation free",
    "jwt revoke free",
    "jwt best practices free"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/jwt-decoder" },
  openGraph: {
    title: "Free JWT Decoder | Decode JSON Web Tokens (JWT) Online | FastTools",
    description: "Decode JWT header and payload safely in your browser. Inspect claims, alg, exp/iat, and base64url content. Great for debugging auth.",
    url: "https://fasttools.store/dev-tools/jwt-decoder",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free JWT Decoder - Decode JSON Web Tokens (JWT) Online",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JWT Decoder | Decode JSON Web Tokens (JWT) Online | FastTools",
    description: "Decode JWT header and payload safely in your browser. Inspect claims, alg, exp/iat, and base64url content. Great for debugging auth.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "JWT Decoder",
      alternateName: "JSON Web Token Decoder",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/dev-tools/jwt-decoder",
      description:
        "Developer tool to decode JWT header and payload in the browser for debugging.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Decode header/payload", 
        "Base64URL", 
        "Claims viewer",
        "JWT inspection",
        "Token debugging",
        "Authentication tools",
        "Security analysis",
        "OAuth debugging",
        "OIDC support",
        "Token validation"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/dev-tools/jwt-decoder",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "jwt decoder, free jwt decoder, decode jwt, jwt parser, json web token decoder, jwt header payload, base64url decode",
      about: {
        "@type": "Thing",
        name: "JWT and Authentication",
        description: "Free online tools for JWT decoding, authentication debugging, and token inspection"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">JWT Decoder</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Decode and inspect JWT tokens to view header, payload, and signature
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <JWTDecoder />
        
        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Decode JWTs</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste your JWT; we split header, payload, and signature.</li>
            <li>Header and payload are base64url‑decoded for easy reading.</li>
            <li>We don't verify signatures; use your server or JWKS for verification.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Security Notes</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Never paste secrets or production tokens you don't control.</li>
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
