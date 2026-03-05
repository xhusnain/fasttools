import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { TokenGenerator } from "@/components/crypto-tools/token-generator"

const toolConfig = createToolConfig({
  toolName: "Token Generator",
  description:
    "Generate random tokens, API keys, passwords, and formatted secrets with configurable settings.",
  metaTitle: "Token Generator for API Keys, Passwords, and Secrets",
  metaDescription:
    "Create secure random tokens with custom length, charset, and formatting. Useful for API keys, test secrets, and credential workflows.",
  path: "/crypto-tools/token-generator",
  keywords: [
    "token generator",
    "api key generator",
    "random secret generator",
    "secure token tool",
    "password token generator",
  ],

  header: {
    title: "Token Generator",
    description:
      "Generate secure random values for authentication, integration, and testing workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Token Generator", href: "/crypto-tools/token-generator" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Generate random tokens and keys with customizable format and character controls.",
    alternateName: ["API Key Generator", "Random Token Maker"],
    featureList: [
      "Token presets",
      "Custom length and charset",
      "Prefix/suffix formatting",
      "Bulk regeneration workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Token Generator is a free tool that creates secure random tokens in hex, Base64, or alphanumeric format for use as API keys, session tokens, and secret keys.",
    quickAnswer:
      "Select the token format (hex, Base64, alphanumeric), choose the length, and click generate. Copy the token for use in API keys, CSRF tokens, or password reset links. Uses cryptographically secure randomness.",
    keyTakeaways: [
      "Generates cryptographically secure random tokens",
      "Multiple formats: hex, Base64, Base64URL, and alphanumeric",
      "Configurable token length from 16 to 256 characters",
      "Suitable for API keys, session tokens, CSRF tokens, and secrets",
      "Uses Web Crypto API — all generation runs securely in your browser",
    ],
    overview:
      "Use this tool to create secure random tokens for API auth, environment variables, test fixtures, and credential setup. It supports both preset formats and custom generation controls.",

    howToSteps: [
      "Select a preset (API key, password, PIN, hex, or custom).",
      "Set length and character options for your security policy.",
      "Apply optional prefixes, suffixes, or grouping rules.",
      "Generate, copy, and store values in your secure secret-management workflow.",
    ],

    features: [
      "Preset and custom token generation",
      "Length and charset controls",
      "Formatting options for prefixes/suffixes",
      "Quick regenerate and copy flow",
      "Useful for dev, QA, and integration tasks",
    ],

    useCases: [
      "API credential provisioning",
      "Temporary secrets for testing",
      "Session-token simulation",
      "Ops scripts and automation setup",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Token generators rank best when they provide immediate, configurable
          output and avoid unnecessary friction. This page is optimized around
          that utility pattern.
        </p>
        <p>
          For production usage, generated values should be stored in proper
          secret-management systems with rotation, access control, and audit
          practices.
        </p>
      </div>
    ),

    proTip:
      "Use separate token scopes per environment and rotate credentials regularly to limit exposure impact.",

    faqs: [
      {
        question: "Can I generate API keys with prefixes?",
        answer:
          "Yes. You can apply prefixes and other formatting options for compatibility with your internal conventions.",
      },
      {
        question: "What token length should I choose?",
        answer:
          "Length depends on your policy and threat model. Longer random tokens generally improve resistance to guessing attacks.",
      },
      {
        question: "Can this generate hex-format secrets?",
        answer:
          "Yes. Presets and custom settings support common hex-like secret workflows.",
      },
      {
        question: "Should generated tokens be stored in code?",
        answer:
          "No. Store secrets in environment managers or secure vault systems instead of source code.",
      },
      {
        question: "Is this useful for test data?",
        answer:
          "Yes. It is commonly used to produce realistic random credentials for QA and integration testing.",
      },
    ],

    relatedTools: [
      { name: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TokenGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TokenGenerator />
        </div>
      )}
    />
  )
}
