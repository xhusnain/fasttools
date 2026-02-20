import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { EncryptDecryptTool } from "@/components/crypto-tools/encrypt-decrypt"

const toolConfig = createToolConfig({
  toolName: "Text Encrypt Decrypt",
  description:
    "Encrypt and decrypt text using common symmetric algorithms for development and interoperability testing.",
  metaTitle: "Text Encrypt/Decrypt Tool (AES, TripleDES, RC4)",
  metaDescription:
    "Encrypt and decrypt text with algorithm and key controls. Useful for secure-message demos, compatibility checks, and integration testing.",
  path: "/crypto-tools/encrypt-decrypt",
  keywords: [
    "text encrypt decrypt",
    "aes encryption tool",
    "online text decryption",
    "encrypt string online",
    "cipher tool",
  ],

  header: {
    title: "Text Encrypt/Decrypt",
    description:
      "Test encryption and decryption workflows quickly with configurable algorithm settings.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Encrypt and decrypt plain text using configurable symmetric cryptography options.",
    alternateName: ["Text Encryption Tool", "AES Encrypt Decrypt"],
    featureList: [
      "Encryption and decryption",
      "Multiple algorithm modes",
      "Key input controls",
      "Copy-ready output",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to encrypt plain text and decrypt ciphertext during application testing and interoperability checks. It is useful for development, not a substitute for managed key infrastructure in production systems.",

    howToSteps: [
      "Choose an algorithm and enter the plaintext you want to protect.",
      "Provide a key and generate encrypted output.",
      "Switch to decrypt mode and test ciphertext recovery with the same key.",
      "Copy outputs for integration, troubleshooting, or QA validation.",
    ],

    features: [
      "Symmetric encryption/decryption workflow",
      "Algorithm selection controls",
      "Key visibility toggles for safer entry",
      "Immediate output for test loops",
      "Simple browser-based cryptography checks",
    ],

    useCases: [
      "Application encryption feature testing",
      "Troubleshooting ciphertext interoperability",
      "Training and demos for cryptography basics",
      "Pre-integration checks for secure text pipelines",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Encryption tool pages in search perform best when they clearly separate
          practical utility from security guarantees. This page prioritizes that
          clarity: it supports fast testing while avoiding misleading claims.
        </p>
        <p>
          For production use, pair cryptography with robust key management,
          access control, and transport security rather than relying on a
          standalone utility workflow.
        </p>
      </div>
    ),

    proTip:
      "Use modern algorithms and strong key handling policies for production systems, then validate round-trip behavior with known test vectors.",

    faqs: [
      {
        question: "Can I use this tool for AES encryption?",
        answer:
          "Yes. The tool supports common symmetric options including AES and lets you test encryption/decryption behavior.",
      },
      {
        question: "Is browser encryption enough for production security?",
        answer:
          "It is useful for testing and demos. Production security still requires managed key lifecycle, secure storage, and policy controls.",
      },
      {
        question: "Why does decryption fail with the same text?",
        answer:
          "Failures usually come from mismatched key/algorithm or modified ciphertext formatting between steps.",
      },
      {
        question: "Can I share encrypted output safely?",
        answer:
          "You can share ciphertext, but key exchange and storage must be handled securely to maintain confidentiality.",
      },
      {
        question: "Does this replace a full cryptography library?",
        answer:
          "No. It is a utility for quick checks, while production systems should rely on vetted libraries and architecture-level controls.",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function EncryptDecryptPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <EncryptDecryptTool />
        </div>
      )}
    />
  )
}
