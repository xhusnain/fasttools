import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JWTDecoder } from "@/components/jwt-decoder"

export const metadata: Metadata = {
  title: "JWT Decoder - Decode JWT Tokens Online | ToolifyHub",
  description:
    "Free online JWT decoder tool. Decode and inspect JWT tokens to view header, payload, and signature. Perfect for developers debugging authentication.",
  keywords: "JWT decoder, JSON web token decoder, JWT parser, decode JWT, JWT debugger, token decoder",
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
          <h2 className="text-2xl font-bold mt-8 mb-4">About JWT Decoder</h2>
          <p className="text-muted-foreground leading-relaxed">
            JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two
            parties. This tool helps you decode JWT tokens to inspect their contents without verification. Perfect for
            debugging authentication issues and understanding token structure.
          </p>
        </div>
      </div>
    </div>
  )
}
