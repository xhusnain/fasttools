import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HashText } from "@/components/crypto-tools/hash-text"

const toolConfig = createToolConfig({
  toolName: "Hash Text Generator",
  description:
    "Generate cryptographic hashes from text with common digest algorithms for integrity and verification workflows.",
  metaTitle: "Hash Text Generator (MD5, SHA-1, SHA-256, SHA-512)",
  metaDescription:
    "Create text hashes instantly with popular digest algorithms. Useful for integrity checks, signature inputs, and development testing.",
  path: "/crypto-tools/hash-text",
  keywords: [
    "hash text generator",
    "sha256 generator",
    "md5 hash generator",
    "sha512 hash",
    "text digest tool",
  ],

  header: {
    title: "Hash Text Generator",
    description:
      "Generate message digests quickly for integrity checks and security workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Hash Text", href: "/crypto-tools/hash-text" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate text hashes using common cryptographic digest algorithms.",
    alternateName: ["SHA Generator", "Digest Calculator", "Hash Calculator"],
    featureList: [
      "Multi-algorithm hash output",
      "Instant digest calculation",
      "Copy-ready values",
      "Text integrity workflow support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Hash Text Tool is a free tool that generates cryptographic hash values (MD5, SHA-1, SHA-256, SHA-512) from any text input for integrity verification and checksums.",
    quickAnswer:
      "Enter text and select a hash algorithm to instantly generate the hash digest. Compare hashes to verify data integrity. Supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512.",
    keyTakeaways: [
      "Generates MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes",
      "Hash functions are one-way — you cannot reverse a hash to get the original text",
      "SHA-256 produces a 64-character hex string from any input",
      "MD5 and SHA-1 are considered weak — use SHA-256 or SHA-512 for security",
      "Same input always produces the same hash (deterministic)",
    ],
    overview:
      "This tool converts text into digest values for integrity and verification workflows. It is useful for development checks, payload validation prep, and consistent hash comparisons.",

    howToSteps: [
      "Enter the text input you want to hash.",
      "Choose output formatting options if available.",
      "Review generated digests for supported algorithms.",
      "Copy the needed digest into your implementation or test workflow.",
    ],

    features: [
      "Hash generation across common algorithms",
      "Instant updates from text input",
      "Copy workflow for development speed",
      "Useful for checksum and verification tasks",
      "Simple browser-based utility",
    ],

    useCases: [
      "File/content integrity checks",
      "Preparing signature and HMAC payload inputs",
      "Debugging API auth and webhook flows",
      "Comparing known test vectors",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Hashing is a one-way transformation used for integrity and many
          security-adjacent workflows. It is not the same as encryption and does
          not provide reversible confidentiality.
        </p>
        <p>
          This page is designed for rapid utility intent: paste text, get
          digests, compare values, and continue implementation.
        </p>
      </div>
    ),

    proTip:
      "Use modern SHA-2/SHA-3 families for new security-sensitive workflows and avoid legacy hashes where collision resistance matters.",

    faqs: [
      {
        question: "Is hashing the same as encryption?",
        answer:
          "No. Hashing is one-way and used for integrity/verification, while encryption is reversible with a key.",
      },
      {
        question: "When should I use SHA-256?",
        answer:
          "SHA-256 is a common baseline for integrity and signing workflows and is widely supported across platforms.",
      },
      {
        question: "Can I recover original text from a hash?",
        answer:
          "No. Secure cryptographic hashes are designed to be one-way.",
      },
      {
        question: "Why do two different inputs produce different hashes?",
        answer:
          "Cryptographic hash functions are highly sensitive to input changes, including whitespace and casing.",
      },
      {
        question: "Is MD5 suitable for security tasks?",
        answer:
          "MD5 may still appear in legacy contexts, but stronger algorithms are recommended for modern security-sensitive use.",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HashTextPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HashText />
        </div>
      )}
    />
  )
}
