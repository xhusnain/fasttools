import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Bip39GeneratorTool } from "@/components/crypto-tools/bip39-generator"

const toolConfig = createToolConfig({
  toolName: "BIP39 Generator",
  description:
    "Generate and validate BIP39 mnemonic seed phrases for compatible wallet workflows.",
  metaTitle: "BIP39 Generator & Mnemonic Checker (12/24 Words)",
  metaDescription:
    "Create BIP39 mnemonic phrases and validate seed words for wallet recovery workflows. Supports common lengths and practical verification use.",
  path: "/crypto-tools/bip39-generator",
  keywords: [
    "bip39 generator",
    "mnemonic generator",
    "seed phrase generator",
    "bip39 checker",
    "wallet recovery phrase",
  ],

  header: {
    title: "BIP39 Generator",
    description:
      "Generate and validate mnemonic seed phrases for crypto wallet backup workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "BIP39 Generator", href: "/crypto-tools/bip39-generator" },
  ],

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "Generate and validate BIP39 mnemonic phrases with configurable length and language support.",
    alternateName: ["BIP39 Mnemonic Generator", "Seed Phrase Checker"],
    featureList: [
      "Mnemonic generation",
      "Mnemonic validation",
      "Entropy view",
      "Passphrase input",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "This tool helps you generate BIP39 mnemonic phrases and validate existing phrases for recovery readiness. It is intended for wallet setup checks, backup testing, and compatibility workflows.",

    howToSteps: [
      "Select phrase length and language options.",
      "Generate a mnemonic phrase and record it securely offline.",
      "Optionally test validation by pasting an existing phrase.",
      "Use verification results to confirm phrase structure before wallet setup.",
    ],

    features: [
      "BIP39-compatible phrase generation",
      "Mnemonic validation workflow",
      "Support for common phrase lengths",
      "Entropy and passphrase-aware tooling",
      "Fast browser-based checks",
    ],

    useCases: [
      "Wallet initialization and backup checks",
      "Recovery-readiness validation",
      "Developer testing of wallet import flows",
      "Education and training in seed phrase handling",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          BIP39 defines mnemonic phrases used to derive wallet seed data in many
          ecosystems. Correct handling is critical because phrase loss or
          exposure directly impacts fund access.
        </p>
        <p>
          This page is structured for practical use: generate, verify, and
          validate phrase formatting before you proceed to wallet operations.
        </p>
      </div>
    ),

    proTip:
      "Treat generated phrases like high-value credentials: store offline, avoid screenshots, and test recovery procedures before funding wallets.",

    faqs: [
      {
        question: "What is BIP39?",
        answer:
          "BIP39 is a standard for mnemonic phrases used to represent seed data for wallet key derivation.",
      },
      {
        question: "Can I generate both 12-word and 24-word phrases?",
        answer:
          "Yes. The tool supports standard phrase lengths commonly used in wallet setups.",
      },
      {
        question: "Does validation guarantee wallet compatibility?",
        answer:
          "Validation checks mnemonic structure. Final compatibility still depends on the target wallet and derivation path settings.",
      },
      {
        question: "Should I keep seed phrases online?",
        answer:
          "No. Best practice is secure offline storage with controlled physical access.",
      },
      {
        question: "Can I use this for recovery testing?",
        answer:
          "Yes. It is useful for pre-checking phrases before attempting wallet recovery flows.",
      },
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Bip39GeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <Bip39GeneratorTool />
        </div>
      )}
    />
  )
}
