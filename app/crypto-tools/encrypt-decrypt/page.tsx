import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { EncryptDecryptTool } from "@/components/crypto-tools/encrypt-decrypt"

const toolConfig = createToolConfig({
  toolName: "Text Encrypt Decrypt",
  description:
    "Encrypt and decrypt text using common symmetric algorithms for development and interoperability testing.",
  metaTitle: "Text Encrypt Decrypt Online — AES-256 Encryption & Decryption Free (2026)",
  metaDescription:
    "Free online text encryption and decryption tool. Encrypt text with AES-256, TripleDES, or RC4 using a password. Decrypt ciphertext back to plaintext instantly in your browser.",
  path: "/crypto-tools/encrypt-decrypt",

  header: {
    title: "Online Text Encrypt & Decrypt Tool",
    description:
      "Encrypt text with AES-256, TripleDES, or RC4 using a password key. Decrypt ciphertext back to plaintext instantly. All encryption runs locally in your browser — no data sent to servers. Supports Base64-encoded output for safe sharing.",
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
    definition:
      "An Encrypt/Decrypt Tool is a free tool that encrypts text using AES, DES, or other symmetric algorithms with a password, and decrypts ciphertext back to plaintext.",
    quickAnswer:
      "Enter your text and a password, select an encryption algorithm (AES-256 recommended), and click encrypt. To decrypt, paste the ciphertext and enter the same password. All operations run in your browser.",
    keyTakeaways: [
      "AES-256 is the industry standard for symmetric encryption",
      "Encryption requires a password/key — keep it secret and stored safely",
      "Ciphertext is Base64-encoded for safe text transmission",
      "Decryption requires the exact same password and algorithm used for encryption",
      "All encryption/decryption runs locally — no data sent to servers",
    ],
    overview:
      "Encrypt and decrypt text online with this free browser-based tool. Choose from AES-256 (industry standard), TripleDES, or RC4 symmetric encryption algorithms. Enter your plaintext and a password key to generate Base64-encoded ciphertext. Switch to decrypt mode, paste the ciphertext and the same password, and recover the original text instantly. All cryptographic operations run entirely in your browser using the Web Crypto API — no data is transmitted to any server. Ideal for developers testing encryption features, verifying ciphertext interoperability across platforms, and learning symmetric cryptography concepts.",

    howToSteps: [
      "Enter your plaintext message and choose an encryption algorithm (AES-256 recommended).",
      "Set a strong password key and click Encrypt to generate Base64-encoded ciphertext.",
      "Switch to Decrypt mode, paste the ciphertext, and enter the same password to recover plaintext.",
      "Copy the encrypted or decrypted output for use in your application, API, or testing workflow.",
    ],

    features: [
      "AES-256, TripleDES, and RC4 symmetric encryption algorithms",
      "Password-based key derivation for encrypt and decrypt operations",
      "Base64-encoded ciphertext output for safe text transmission",
      "Client-side only — no data sent to servers, fully private",
      "Instant encrypt/decrypt toggle for round-trip verification testing",
    ],

    useCases: [
      "Testing AES encryption and decryption in web applications",
      "Verifying ciphertext compatibility across programming languages",
      "Encrypting sensitive text before sharing via email or messaging",
      "Learning symmetric cryptography concepts with live examples",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          This text encryption tool uses symmetric algorithms where the same password encrypts and decrypts data. AES-256 (Advanced Encryption Standard with 256-bit keys) is the recommended choice — it is used by governments, banks, and enterprises worldwide for protecting classified and sensitive data.
        </p>
        <p>
          For production systems, combine encryption with proper key management (AWS KMS, HashiCorp Vault), transport security (TLS), and access controls. This tool is designed for development testing, learning, and quick verification — not as a replacement for managed cryptographic infrastructure.
        </p>
      </div>
    ),

    proTip:
      "Always use AES-256 for new projects — TripleDES and RC4 are legacy algorithms with known weaknesses. Test round-trip encrypt/decrypt with known test vectors before deploying.",

    faqs: [
      {
        question: "What is AES-256 encryption?",
        answer:
          "AES-256 is the Advanced Encryption Standard with a 256-bit key, the industry standard for symmetric encryption used by governments and enterprises worldwide.",
      },
      {
        question: "Is my data safe using this encryption tool?",
        answer:
          "Yes. All encryption and decryption runs locally in your browser using the Web Crypto API. No data is sent to any server.",
      },
      {
        question: "Why does decryption fail with the correct password?",
        answer:
          "Common causes include algorithm mismatch (encrypting with AES but decrypting with TripleDES), modified ciphertext, or extra whitespace in the password.",
      },
      {
        question: "What is the difference between AES, TripleDES, and RC4?",
        answer:
          "AES-256 is the modern standard with strong security. TripleDES applies DES three times (slower, legacy). RC4 is a stream cipher considered insecure for new applications.",
      },
      {
        question: "Can I encrypt files with this tool?",
        answer:
          "This tool encrypts text strings only. For file encryption, use dedicated tools like GPG, OpenSSL, or your operating system's built-in encryption features.",
      },
      {
        question: "Is the encrypted output safe to share?",
        answer:
          "Yes, ciphertext is safe to share publicly — it cannot be decrypted without the password. However, always share the password through a separate secure channel.",
      },
      {
        question: "Should I use this for production encryption?",
        answer:
          "Use it for development testing and learning. Production systems should use managed key infrastructure (AWS KMS, Azure Key Vault) with proper key rotation and access controls.",
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
