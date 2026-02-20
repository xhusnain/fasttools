import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const JWTDecoder = dynamic(
  () => import("@/components/dev-tools/jwt-decoder").then((mod) => mod.JWTDecoder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JWT Decoder",
  description:
    "Decode and inspect JSON Web Tokens for authentication debugging and implementation checks.",
  metaTitle: "JWT Decoder (Header, Payload, Signature)",
  metaDescription:
    "Decode JWT tokens in-browser to inspect header and payload fields for auth debugging and integration workflows.",
  path: "/dev-tools/jwt-decoder",
  keywords: [
    "jwt decoder",
    "decode jwt",
    "jwt token debugger",
    "jwt payload viewer",
    "jwt header parser",
  ],

  header: {
    title: "JWT Decoder",
    description:
      "Inspect token structure and claims quickly during authentication development.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Decode JWT tokens and inspect claim data for auth debugging workflows.",
    featureList: [
      "JWT segment decoding",
      "Header and payload inspection",
      "Claim visibility",
      "Debugging utility workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this decoder to inspect JWT header and payload data while debugging authentication, authorization, and API session workflows.",

    howToSteps: [
      "Paste a JWT string into the decoder input.",
      "Review decoded header and payload sections.",
      "Inspect claim fields such as issuer, audience, and expiry.",
      "Use findings to validate token generation and verification logic.",
    ],

    features: [
      "JWT decoding workflow",
      "Header/payload inspection",
      "Claim-level visibility",
      "Auth debugging support",
      "Browser-based analysis utility",
    ],

    useCases: [
      "Auth integration troubleshooting",
      "Token claim validation",
      "Session expiry debugging",
      "API security QA workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JWT debugging pages perform best when they separate token inspection
          from security assumptions. This page is optimized for that practical
          engineering intent.
        </p>
        <p>
          Decoding is helpful for visibility, but token trust decisions must
          still rely on proper signature verification in your backend.
        </p>
      </div>
    ),

    proTip:
      "Never treat decoded payload data as trusted unless signature verification and claim validation are completed server-side.",

    faqs: [
      {
        question: "Does decoding verify token signature validity?",
        answer:
          "Decoding reveals token contents, but signature verification must be performed explicitly in your auth pipeline.",
      },
      {
        question: "Can I inspect expired tokens?",
        answer:
          "Yes. Decoding still shows claim data even when token expiry has passed.",
      },
      {
        question: "Is it safe to paste production tokens?",
        answer:
          "Use caution and avoid exposing sensitive data. Follow your organization’s credential-handling policies.",
      },
      {
        question: "What claims should I check first?",
        answer:
          "Common checks include issuer, audience, subject, not-before, issued-at, and expiration values.",
      },
      {
        question: "Can this help with auth library debugging?",
        answer:
          "Yes. It is often used to compare generated tokens against expected claim structures.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JwtDecoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JWTDecoder />
        </div>
      )}
    />
  )
}
