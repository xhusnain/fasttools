import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HmacGeneratorTool } from "@/components/crypto-tools/hmac-generator"

const toolConfig = createToolConfig({
  toolName: "HMAC Generator",
  description:
    "Generate keyed message authentication codes for signed requests, webhooks, and API verification workflows.",
  metaTitle: "HMAC Generator Online — HMAC-SHA256 & SHA512 Signature Calculator Free (2026)",
  metaDescription:
    "Free online HMAC generator. Calculate HMAC-SHA256, HMAC-SHA512, and HMAC-MD5 signatures with your message and secret key. Verify webhook signatures from Stripe, GitHub, and Slack.",
  path: "/crypto-tools/hmac-generator",

  header: {
    title: "HMAC Signature Generator & Calculator",
    description:
      "Generate HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, and HMAC-MD5 signatures from a message and secret key. Verify webhook signatures from Stripe, GitHub, Slack, and Shopify. Output in hex or Base64 format. Essential for API request signing, webhook payload verification, and message authentication.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate HMAC signatures from input data and secret keys across common hash algorithms.",
    alternateName: ["HMAC Calculator", "HMAC SHA256 Generator"],
    featureList: [
      "HMAC generation",
      "Algorithm selection",
      "Hex/base64 output support",
      "Webhook verification helper",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HMAC Generator is a free tool that creates Hash-based Message Authentication Codes using a secret key and a hash algorithm to verify data integrity and authenticity.",
    quickAnswer:
      "Enter a message and secret key, select a hash algorithm (SHA-256, SHA-512, etc.), and get the HMAC output instantly. Use it for API authentication, webhook verification, and message integrity checks.",
    keyTakeaways: [
      "HMAC combines a secret key with a hash function for authentication",
      "Supports SHA-1, SHA-256, SHA-384, SHA-512, and MD5 algorithms",
      "Used by APIs (AWS, Stripe, GitHub) for request signing and webhook verification",
      "HMAC is more secure than plain hashing — it prevents length extension attacks",
      "Output is a fixed-length hex string regardless of input size",
    ],
    overview:
      "Calculate HMAC (Hash-based Message Authentication Code) signatures with this free online tool. Enter your message payload and secret key, select the hash algorithm (HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, or HMAC-MD5), and generate the signature in hex or Base64 format. HMAC is the standard mechanism for API request signing and webhook payload verification used by Stripe, GitHub, Slack, Shopify, AWS, and most modern APIs. Use this tool to debug signature mismatches, verify webhook payloads, test API authentication implementations, and compare HMAC outputs across programming languages (Node.js, Python, Go, PHP).",

    howToSteps: [
      "Paste the exact message or webhook payload body — whitespace and encoding must match exactly.",
      "Enter the shared secret key provided by your API service (Stripe webhook secret, GitHub secret, etc.).",
      "Select the hash algorithm (HMAC-SHA256 is most common) and output format (hex or Base64).",
      "Compare the generated HMAC signature with the one in your webhook header or API response.",
    ],

    features: [
      "HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, and HMAC-MD5 algorithms",
      "Hex and Base64 output format selection",
      "Exact payload input for precise webhook signature reproduction",
      "One-click copy for comparing with API headers and webhook signatures",
      "Client-side computation — secret keys never transmitted to any server",
    ],

    useCases: [
      "Verifying Stripe, GitHub, Slack, and Shopify webhook signatures",
      "Debugging API request signing for AWS Signature v4 and custom HMAC auth",
      "Testing HMAC implementations across Node.js, Python, Go, and PHP",
      "Validating message integrity for secure inter-service communication",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HMAC combines a secret key with a hash function to produce a signature that verifies both the integrity and authenticity of a message. Unlike plain hashing (SHA-256 alone), HMAC prevents length extension attacks and ensures that only parties with the shared secret can generate valid signatures. HMAC-SHA256 produces a 64-character hex string regardless of input size.
        </p>
        <p>
          The most common cause of HMAC signature mismatches is payload canonicalization — extra whitespace, different line endings (CRLF vs LF), or JSON key ordering can change the signature even when the content appears identical. Always use the raw request body bytes for webhook verification, not a parsed-and-re-serialized version.
        </p>
      </div>
    ),

    proTip:
      "When webhook signatures don't match, check these in order: (1) raw body vs parsed body, (2) encoding (UTF-8), (3) algorithm (SHA-256 vs SHA-1), (4) hex vs Base64 output format, (5) secret key encoding (plain text vs hex-decoded).",

    faqs: [
      {
        question: "What is the difference between HMAC and plain SHA-256 hashing?",
        answer:
          "Plain SHA-256 hashes only the message — anyone can compute it. HMAC-SHA256 requires a secret key, so only parties with the key can generate or verify the signature. HMAC also prevents length extension attacks.",
      },
      {
        question: "How do I verify a Stripe webhook signature?",
        answer:
          "Use the Stripe webhook signing secret (whsec_...) as the key, the raw request body as the message, and HMAC-SHA256 with hex output. Compare with the signature in the Stripe-Signature header.",
      },
      {
        question: "Why does my HMAC signature not match the expected value?",
        answer:
          "Common causes: using parsed JSON instead of raw body bytes, wrong encoding (UTF-8 vs ASCII), wrong algorithm (SHA-256 vs SHA-1), hex vs Base64 mismatch, or extra whitespace/newlines in the payload.",
      },
      {
        question: "Which HMAC algorithm should I use?",
        answer:
          "HMAC-SHA256 is the standard for most modern APIs (Stripe, GitHub, Shopify). HMAC-SHA512 offers more bits but is slower. HMAC-SHA1 is legacy but still used by some older APIs. Avoid HMAC-MD5 for new implementations.",
      },
      {
        question: "Is HMAC secure for API authentication?",
        answer:
          "Yes. HMAC is a proven, standardized mechanism for message authentication used in production by AWS, Stripe, GitHub, and thousands of APIs. Use a strong random secret key and always use constant-time comparison to prevent timing attacks.",
      },
      {
        question: "Can I use HMAC for password hashing?",
        answer:
          "No. HMAC is fast by design, making it unsuitable for password hashing. Use dedicated password hashing algorithms like bcrypt or Argon2 that include deliberate computational slowness and salting.",
      },
    ],

    relatedTools: [
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HmacGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HmacGeneratorTool />
        </div>
      )}
    />
  )
}
