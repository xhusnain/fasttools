import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { RsaGeneratorTool } from "@/components/crypto-tools/rsa-generator"

const toolConfig = createToolConfig({
  toolName: "RSA Key Pair Generator",
  description:
    "Generate RSA public/private key pairs for encryption, signing, and interoperability testing.",
  metaTitle: "RSA Key Pair Generator (2048/4096 PEM)",
  metaDescription:
    "Create RSA key pairs in browser-friendly workflows for testing and implementation checks. Supports common key sizes and export usage.",
  path: "/crypto-tools/rsa-generator",
  keywords: [
    "rsa key generator",
    "rsa public private key",
    "pem key generator",
    "rsa 2048 generator",
    "rsa 4096 tool",
  ],

  header: {
    title: "RSA Key Pair Generator",
    description:
      "Generate public/private RSA keys for signing and encryption workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate RSA key pairs in PEM-compatible formats for development and integration workflows.",
    alternateName: ["RSA Generator", "Public Private Key Generator"],
    featureList: [
      "RSA key pair generation",
      "Common key-size options",
      "PEM-style output workflow",
      "Copy/export utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to generate RSA key pairs for development and interoperability testing. It supports common key sizes and output handling for integration with signing and encryption pipelines.",

    howToSteps: [
      "Select the RSA key size required for your use case.",
      "Generate a new key pair and review public/private outputs.",
      "Copy or export keys to your test environment.",
      "Validate encryption/signing operations in your target stack.",
    ],

    features: [
      "RSA public/private pair generation",
      "Common key-size controls",
      "Output ready for integration testing",
      "Copy-friendly developer workflow",
      "Browser utility for quick key tasks",
    ],

    useCases: [
      "JWT and signature workflow testing",
      "TLS and certificate lab checks",
      "Service-to-service auth experiments",
      "Developer onboarding and cryptography demos",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          RSA remains widely used for signing and key exchange workflows across
          enterprise systems. Correct key management is essential even when key
          generation itself is straightforward.
        </p>
        <p>
          This page emphasizes practical implementation intent: generate keys,
          validate behavior, and integrate safely into your test or staging
          environment.
        </p>
      </div>
    ),

    proTip:
      "Use production-grade key storage and rotation policies; treat generated private keys as sensitive credentials.",

    faqs: [
      {
        question: "What key size should I use?",
        answer:
          "2048-bit keys are a common baseline, while 4096-bit may be used when policy requires higher margins.",
      },
      {
        question: "Can I use generated keys for JWT signing tests?",
        answer:
          "Yes. RSA key pairs are commonly used in signing and verification test flows.",
      },
      {
        question: "Is browser generation suitable for production key management?",
        answer:
          "It is useful for development and testing. Production keys should follow your organization’s secure key lifecycle controls.",
      },
      {
        question: "Why do imported keys fail in my framework?",
        answer:
          "Failures are often due to formatting, algorithm mismatch, or incompatible key container/encoding expectations.",
      },
      {
        question: "Can I reuse one RSA key pair everywhere?",
        answer:
          "Avoid over-reuse. Segment keys by environment and use case to reduce blast radius.",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RsaGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RsaGeneratorTool />
        </div>
      )}
    />
  )
}
