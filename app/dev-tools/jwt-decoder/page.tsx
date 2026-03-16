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
  metaTitle: "Fast JWT Decoder — Decode JSON Web Tokens Online Free (2026)",
  metaDescription:
    "Fast JWT decoder and token inspector. Paste a JWT token to instantly decode header, payload, and signature. Free fast JWT tool — check expiration, inspect claims, debug authentication. No secret key needed.",
  path: "/dev-tools/jwt-decoder",

  header: {
    title: "Fast JWT Decoder & Token Inspector",
    description:
      "Fast JWT decoder — decode any JSON Web Token instantly to inspect its header (algorithm, type), payload (claims like sub, iss, exp), and signature. Check token expiration, debug OAuth and API authentication — no secret key required.",
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
    definition:
      "A fast JWT decoder is a free tool that instantly decodes JSON Web Tokens to display the header, payload, and signature components without verifying the token. Built for speed — paste and decode in milliseconds.",
    quickAnswer:
      "Use this fast JWT decoder — paste a JWT token to instantly decode and view its header (algorithm, type), payload (claims like sub, iat, exp), and signature. Fast JWT inspection with expiration status checking. No secret key required for decoding.",
    keyTakeaways: [
      "Decodes JWT header, payload, and signature instantly",
      "Shows all standard claims: iss, sub, aud, exp, iat, nbf, jti",
      "Checks if the token is expired based on the exp claim",
      "JWTs use Base64URL encoding — decoding does not require a secret",
      "Common algorithms: HS256 (symmetric), RS256 (asymmetric), ES256 (ECDSA)",
    ],
    overview:
      "Fast JWT decoder — decode any JWT token instantly with this free online tool. Paste a JSON Web Token to see its three decoded segments — header (algorithm and token type), payload (all claims including issuer, subject, audience, expiration), and signature. This fast JWT tool checks whether the token is expired based on the exp claim and highlights timing issues. Useful for debugging OAuth2 flows, API authentication, session management, and any system that uses JWTs. All decoding runs locally in your browser — no data sent to any server.",

    howToSteps: [
      "Copy the JWT token string from your API response, browser DevTools, or auth logs.",
      "Paste the token into the decoder input field above.",
      "Review the decoded header (algorithm, type) and payload (all claims with values).",
      "Check the expiration status and use the decoded data to debug your authentication flow.",
    ],

    features: [
      "Instant JWT header, payload, and signature decoding",
      "Token expiration check with human-readable timestamps",
      "Support for HS256, RS256, ES256, and other JWT algorithms",
      "All standard claims displayed: iss, sub, aud, exp, iat, nbf, jti",
      "100% client-side — no token data leaves your browser",
      "Copy decoded JSON output with one click",
    ],

    useCases: [
      "Debug OAuth2 and OpenID Connect authentication flows",
      "Inspect API access tokens and refresh tokens during development",
      "Verify JWT claims (issuer, audience, scopes) match expected values",
      "Troubleshoot token expiration and session timeout issues",
      "Compare tokens across environments (dev, staging, production)",
    ],

    aboutTool:
      "JSON Web Tokens (JWTs) are the standard for API authentication, OAuth2, and session management. A JWT has three Base64URL-encoded segments separated by dots: header.payload.signature. The header contains the signing algorithm (HS256, RS256, ES256). The payload contains claims — key-value pairs like issuer (iss), subject (sub), audience (aud), and expiration (exp). This decoder parses and displays all three segments without requiring the signing secret. Important: decoding reveals token contents but does NOT verify the signature. Always verify signatures server-side before trusting token data.",

    proTip:
      "When debugging auth issues, first check the exp claim to rule out token expiration, then verify iss and aud match your expected values. If using RS256, the kid (key ID) in the header tells you which public key to use for verification.",

    faqs: [
      {
        question: "What is a JWT token and how does it work?",
        answer:
          "A JSON Web Token (JWT) is a compact, URL-safe token used for authentication and authorization. It has three parts: header (algorithm info), payload (claims/data), and signature (verification hash). The header and payload are Base64URL encoded and can be decoded without a secret key.",
      },
      {
        question: "Does decoding a JWT verify its signature?",
        answer:
          "No. Decoding only reveals the token contents. Signature verification requires the signing secret (HS256) or public key (RS256/ES256) and must be done server-side. Never trust decoded data without verification.",
      },
      {
        question: "Is it safe to paste production JWT tokens here?",
        answer:
          "All decoding runs locally in your browser — no data is sent to any server. However, follow your organization’s security policies regarding token handling and avoid sharing tokens in insecure contexts.",
      },
      {
        question: "What do the JWT claims (iss, sub, exp, aud) mean?",
        answer:
          "iss = issuer (who created the token), sub = subject (user ID), exp = expiration time, aud = audience (intended recipient), iat = issued at, nbf = not before, jti = JWT ID (unique identifier).",
      },
      {
        question: "Can I decode expired JWT tokens?",
        answer:
          "Yes. Expired tokens decode normally — the decoder shows all claims including the expiration timestamp. This is useful for debugging why authentication failed after a session timeout.",
      },
      {
        question: "What is the difference between HS256 and RS256?",
        answer:
          "HS256 uses a shared secret key for both signing and verification (symmetric). RS256 uses a private key to sign and a public key to verify (asymmetric). RS256 is more common in production APIs because the public key can be shared safely.",
      },
      {
        question: "Is this JWT decoder free?",
        answer:
          "Yes. Completely free, runs locally in your browser, and has no usage limits or registration requirements.",
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
