import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import {
  Fingerprint,
  Hash,
  Key,
  Lock,
  Shield,
  ShieldCheck,
  UserRound,
} from "lucide-react"

const cryptoTools = [
  {
    title: "UUID Generator",
    description:
      "Generate UUID versions including random and time-ordered formats for apps and databases.",
    href: "/crypto-tools/uuid-generator",
    icon: Fingerprint,
  },
  {
    title: "ULID Generator",
    description:
      "Create lexicographically sortable 128-bit IDs suitable for ordered database inserts.",
    href: "/crypto-tools/ulid-generator",
    icon: Hash,
  },
  {
    title: "Password Generator",
    description:
      "Strong passwords & passphrases with entropy meter, HIBP breach check, and bulk generation. Cryptographically secure.",
    href: "/crypto-tools/password-generator",
    icon: Key,
  },
  {
    title: "Token Generator",
    description:
      "Generate secure random tokens, API keys, PINs, and formatted secrets.",
    href: "/crypto-tools/token-generator",
    icon: Key,
  },
  {
    title: "OTP Code Generator",
    description:
      "Generate RFC 6238-compatible TOTP codes and setup QR values for authenticator apps.",
    href: "/crypto-tools/otp-generator",
    icon: Shield,
  },
  {
    title: "Bcrypt Generator",
    description:
      "Hash and verify passwords with bcrypt using configurable cost factors.",
    href: "/crypto-tools/bcrypt",
    icon: ShieldCheck,
  },
  {
    title: "Hash Text",
    description:
      "Generate message digests with MD5, SHA families, and related algorithms.",
    href: "/crypto-tools/hash-text",
    icon: Fingerprint,
  },
  {
    title: "Text Encrypt/Decrypt",
    description:
      "Encrypt and decrypt plain text using common symmetric algorithms.",
    href: "/crypto-tools/encrypt-decrypt",
    icon: Lock,
  },
  {
    title: "BIP39 Generator",
    description:
      "Generate and validate mnemonic seed phrases for compatible crypto wallets.",
    href: "/crypto-tools/bip39-generator",
    icon: Key,
  },
  {
    title: "HMAC Generator",
    description:
      "Create keyed signatures for webhook verification and signed request workflows.",
    href: "/crypto-tools/hmac-generator",
    icon: Shield,
  },
  {
    title: "RSA Key Pair Generator",
    description:
      "Generate RSA public/private key pairs for encryption and signing workflows.",
    href: "/crypto-tools/rsa-generator",
    icon: Lock,
  },
  {
    title: "Password Analyzer",
    description:
      "Estimate password strength and entropy with modern security guidance.",
    href: "/crypto-tools/password-strength-analyzer",
    icon: UserRound,
  },
]

const toolConfig = createToolConfig({
  toolName: "Crypto Tools",
  description:
    "Free browser-based cryptography and security tools for hashing, token generation, encryption, keys, and password analysis.",
  metaTitle: "Crypto Tools: UUID, ULID, Tokens, Hashing, Keys",
  metaDescription:
    "Security-focused crypto tools for developers and teams: UUID/ULID generators, token and OTP tools, bcrypt/hash/HMAC, RSA keys, BIP39, and password analysis.",
  path: "/crypto-tools",

  schemaOptions: {
    itemList: {
      name: "Crypto Tools Collection",
      description:
        "A collection of online cryptography and security utilities for developers and security teams.",
      items: cryptoTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Crypto Tools",
    description:
      "Practical browser tools for secure generation, hashing, encryption, verification, and credential analysis.",
    titleSize: "large",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [{ label: "Crypto Tools", href: "/crypto-tools" }],

  content: {
    overview:
      "This category is built for utility intent: generate secure values, validate cryptographic outputs, and move quickly during implementation or debugging. Each tool is task-focused and designed for immediate use in developer and security workflows.",

    features: [
      "Client-side execution for standard text/key workflows",
      "Focused pages for hashing, key generation, and identifier utilities",
      "Structured how-to guidance and FAQ coverage",
      "Cross-linking between related security tasks",
      "No-install workflows suitable for quick validation",
    ],

    useCases: [
      "Developer setup and API integration testing",
      "Webhook signature verification",
      "Authentication and password-hardening workflows",
      "Database ID strategy (UUID/ULID) evaluation",
      "Security QA and implementation checks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Security-tool SERPs usually favor pages that combine immediate utility
          with implementation clarity. This category focuses on that pattern by
          prioritizing direct interaction and concise, standards-aware guidance.
        </p>
        <p>
          Instead of broad promotional content, each page is organized around
          practical outcomes: generate, verify, export, and apply securely in a
          real build workflow.
        </p>
      </div>
    ),

    faqs: [
      {
        question: "Who is this crypto tools category for?",
        answer:
          "Developers, DevOps teams, security engineers, QA analysts, and technically inclined users who need reliable cryptographic utilities.",
      },
      {
        question: "Are these tools suitable for production workflows?",
        answer:
          "They are suitable for generation, testing, and validation workflows. Final production controls should still follow your security policy and key-management standards.",
      },
      {
        question: "Do I need to install anything to use these tools?",
        answer:
          "No. The tools are browser-based and designed for quick usage without local package installation.",
      },
      {
        question: "How should I choose between UUID and ULID?",
        answer:
          "UUID is widely supported across systems, while ULID offers lexicographic time ordering that can improve some database insert/index patterns.",
      },
      {
        question: "Can these tools help with webhook and API signing checks?",
        answer:
          "Yes. HMAC, token, and hashing tools are commonly used for API and webhook validation workflows.",
      },
    ],

    relatedTools: [
      { name: "Web Tools", href: "/web-tools" },
      { name: "Developer Tools", href: "/dev-tools" },
      { name: "AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CryptoToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cryptoTools.map((tool) => (
            <GToolCard
              key={`crypto-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
