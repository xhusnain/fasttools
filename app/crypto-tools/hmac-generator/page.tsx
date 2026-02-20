import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HmacGeneratorTool } from "@/components/crypto-tools/hmac-generator"

const toolConfig = createToolConfig({
  toolName: "HMAC Generator",
  description:
    "Generate keyed message authentication codes for signed requests, webhooks, and API verification workflows.",
  metaTitle: "HMAC Generator (SHA-256, SHA-512, MD5)",
  metaDescription:
    "Create HMAC signatures with your message and secret key. Useful for webhook verification and API request signing workflows.",
  path: "/crypto-tools/hmac-generator",
  keywords: [
    "hmac generator",
    "hmac sha256",
    "webhook signature generator",
    "api signing tool",
    "hmac calculator",
  ],

  header: {
    title: "HMAC Generator",
    description:
      "Generate keyed signatures for API authentication and webhook verification.",
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
    overview:
      "Use this tool to generate HMAC signatures from a payload and secret key. It helps validate webhook payload signing, test API auth flows, and troubleshoot signature mismatches.",

    howToSteps: [
      "Enter the payload/message exactly as it is sent in your integration.",
      "Enter the shared secret key used by your service.",
      "Select the hash algorithm and output format.",
      "Generate and compare the signature with your application output.",
    ],

    features: [
      "Keyed signature generation",
      "Multiple hash algorithm options",
      "Hex/Base64 output workflows",
      "Copy-friendly signature output",
      "Useful for webhook and API auth debugging",
    ],

    useCases: [
      "Webhook signature verification",
      "API request signing tests",
      "Integration debugging for auth mismatches",
      "Cross-language cryptographic parity checks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HMAC combines a secret key with a hash function to verify message
          authenticity and integrity. It is widely used in webhooks and signed
          API request flows.
        </p>
        <p>
          Correct canonicalization matters: whitespace, encoding, and line breaks
          can change signatures even when content appears visually identical.
        </p>
      </div>
    ),

    proTip:
      "When signatures do not match, first verify payload canonicalization and encoding before rotating keys or changing algorithms.",

    faqs: [
      {
        question: "What is HMAC used for?",
        answer:
          "HMAC is used to verify that data came from a trusted source and was not modified in transit.",
      },
      {
        question: "Can I use this for webhook verification?",
        answer:
          "Yes. It is commonly used to reproduce webhook signatures and compare with received headers.",
      },
      {
        question: "Why do HMAC outputs differ across systems?",
        answer:
          "Differences usually come from payload normalization, encoding, algorithm mismatch, or key discrepancies.",
      },
      {
        question: "Is HMAC the same as a plain hash?",
        answer:
          "No. HMAC requires a secret key, while plain hashes do not provide key-based authenticity guarantees.",
      },
      {
        question: "Which output format should I use?",
        answer:
          "Use the format expected by your target service, typically hex or base64.",
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
