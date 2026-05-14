import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HashText } from "@/components/crypto-tools/hash-text"

const toolConfig = createToolConfig({
  toolName: "Hash Text Generator",
  description:
    "Generate cryptographic hashes from text with common digest algorithms for integrity and verification workflows.",
  metaTitle: "Hash Generator Online — MD5, SHA-1, SHA-256, SHA-512 Hash Text Free (2026)",
  metaDescription:
    "Free online hash generator. Create MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text instantly. Verify file integrity, generate checksums, and compare hash digests.",
  path: "/crypto-tools/hash-text",

  header: {
    title: "Online Hash Generator — MD5, SHA-256, SHA-512",
    description:
      "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes from any text input. Compare hash digests for data integrity verification, checksum validation, and security workflows. All hashing runs locally in your browser.",
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
      "Generate cryptographic hashes from any text with this free online hash generator. Supports all major hash algorithms: MD5 (128-bit), SHA-1 (160-bit), SHA-256 (256-bit), SHA-384 (384-bit), and SHA-512 (512-bit). Type or paste text to instantly see the hash digest in hexadecimal format. Use hash values for data integrity verification, checksum comparison, password hashing preparation, webhook signature debugging, and API authentication testing. SHA-256 produces a 64-character hex string and is the recommended algorithm for new projects. All hashing runs locally in your browser — your text is never sent to any server.",

    howToSteps: [
      "Enter or paste the text you want to hash into the input field.",
      "Select the hash algorithm — SHA-256 recommended for most use cases.",
      "View the generated hash digest in hexadecimal format instantly.",
      "Copy the hash value for use in checksums, API signatures, or integrity verification.",
    ],

    features: [
      "MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hash algorithms",
      "Real-time hash generation as you type",
      "Hexadecimal output format for all algorithms",
      "One-click copy for quick integration into code and configs",
      "Client-side hashing — no data transmitted to servers",
    ],

    useCases: [
      "Generating checksums for file and content integrity verification",
      "Creating hash digests for API webhook signature debugging",
      "Comparing SHA-256 hashes across different programming languages",
      "Preparing password hash inputs for bcrypt or PBKDF2 workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Cryptographic hash functions are one-way transformations — they convert input text into a fixed-length digest that cannot be reversed. Unlike encryption, hashing does not use a key and cannot recover the original text. The same input always produces the same hash (deterministic), but even a single character change produces a completely different output (avalanche effect).
        </p>
        <p>
          MD5 and SHA-1 are considered cryptographically broken for security purposes but remain useful for non-security checksums. SHA-256 and SHA-512 (part of the SHA-2 family) are the recommended algorithms for integrity verification, digital signatures, and security-sensitive applications in 2026.
        </p>
      </div>
    ),

    proTip:
      "Use SHA-256 or SHA-512 for all new security workflows. MD5 and SHA-1 have known collision vulnerabilities — only use them for backward compatibility or non-security checksums.",

    faqs: [
      {
        question: "What is the difference between MD5, SHA-1, and SHA-256?",
        answer:
          "MD5 produces a 128-bit (32-char) hash, SHA-1 produces 160-bit (40-char), and SHA-256 produces 256-bit (64-char). MD5 and SHA-1 have known collision vulnerabilities; SHA-256 is recommended for security.",
      },
      {
        question: "Is hashing the same as encryption?",
        answer:
          "No. Hashing is a one-way function — you cannot recover the original text from a hash. Encryption is reversible with the correct key.",
      },
      {
        question: "Can I reverse a SHA-256 hash to get the original text?",
        answer:
          "No. Cryptographic hashes are designed to be irreversible. You can only verify by hashing the same input and comparing results.",
      },
      {
        question: "Why does changing one character completely change the hash?",
        answer:
          "This is called the avalanche effect — a core property of secure hash functions. Even adding a space or changing case produces a completely different digest.",
      },
      {
        question: "Is MD5 still safe to use?",
        answer:
          "MD5 is broken for security purposes (collision attacks exist). It is still used for non-security checksums like file download verification, but use SHA-256 for anything security-related.",
      },
      {
        question: "Which hash algorithm should I use for passwords?",
        answer:
          "Do not use plain SHA-256 or MD5 for passwords. Use dedicated password hashing algorithms like bcrypt, Argon2, or PBKDF2 that include salting and configurable work factors.",
      },
      {
        question: "Is my text sent to a server when I generate a hash?",
        answer:
          "No. All hashing runs locally in your browser using JavaScript. Your text never leaves your device.",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Bcrypt Hash Generator", href: "/crypto-tools/bcrypt" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
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
