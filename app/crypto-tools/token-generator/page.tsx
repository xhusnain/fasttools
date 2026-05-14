import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { TokenGenerator } from "@/components/crypto-tools/token-generator"

const toolConfig = createToolConfig({
  toolName: "Token Generator",
  description:
    "Generate random tokens, API keys, passwords, and formatted secrets with configurable settings.",
  metaTitle: "Random Token Generator — Generate API Keys & Secure Tokens Free (2026)",
  metaDescription:
    "Free random token generator. Create secure API keys, passwords, CSRF tokens, and secret keys in hex, Base64, or alphanumeric format. Cryptographically secure with custom length and charset.",
  path: "/crypto-tools/token-generator",

  header: {
    title: "Secure Random Token & API Key Generator",
    description:
      "Generate cryptographically secure random tokens for API keys, session tokens, CSRF tokens, password reset links, and secret keys. Choose hex, Base64, Base64URL, or alphanumeric format with custom length from 16 to 256 characters. Uses the Web Crypto API for true randomness.",
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
      "Generate cryptographically secure random tokens with this free online tool. Create API keys, session tokens, CSRF tokens, password reset links, webhook secrets, and environment variable values. Choose from multiple formats: hexadecimal, Base64, Base64URL, and alphanumeric. Set custom token length from 16 to 256 characters, add prefixes (like sk_, pk_, api_), and generate in bulk. All tokens are created using the Web Crypto API (crypto.getRandomValues) for true cryptographic randomness — no pseudo-random fallback. Perfect for developers setting up authentication, provisioning test credentials, or generating .env file secrets.",

    howToSteps: [
      "Select a token format: hex, Base64, Base64URL, or alphanumeric.",
      "Set the desired length (32–64 characters recommended for API keys).",
      "Add an optional prefix like sk_ or api_ for key identification.",
      "Click Generate, copy the token, and store it in your secrets manager or .env file.",
    ],

    features: [
      "Cryptographically secure randomness via Web Crypto API",
      "Hex, Base64, Base64URL, and alphanumeric output formats",
      "Custom length from 16 to 256 characters",
      "Prefix and suffix support for API key naming conventions (sk_, pk_, api_)",
      "Bulk generation for provisioning multiple secrets at once",
    ],

    useCases: [
      "Generating API keys and webhook signing secrets for web applications",
      "Creating CSRF tokens and session identifiers for authentication systems",
      "Producing secure .env file values for database passwords and JWT secrets",
      "Generating test credentials for QA, staging, and integration environments",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Secure token generation requires true cryptographic randomness, not Math.random(). This tool uses the Web Crypto API (crypto.getRandomValues) which provides cryptographically strong random values suitable for security-sensitive applications like API keys and session tokens.
        </p>
        <p>
          For production use, store generated tokens in a proper secrets manager (AWS Secrets Manager, HashiCorp Vault, Doppler) with rotation policies and audit logging. Never commit secrets to source code repositories — use environment variables or encrypted config files instead.
        </p>
      </div>
    ),

    proTip:
      "Use 32+ character tokens for API keys and 64+ characters for signing secrets. Add prefixes like sk_ (secret key) or pk_ (public key) so leaked tokens can be quickly identified and revoked.",

    faqs: [
      {
        question: "Are these tokens truly random and secure?",
        answer:
          "Yes. Tokens are generated using the Web Crypto API (crypto.getRandomValues) which provides cryptographically secure pseudo-random numbers, not Math.random().",
      },
      {
        question: "What token length should I use for API keys?",
        answer:
          "32 characters in hex format provides 128 bits of entropy, suitable for most API keys. Use 64+ characters for signing secrets and HMAC keys.",
      },
      {
        question: "Can I add a prefix like sk_ to generated tokens?",
        answer:
          "Yes. You can add custom prefixes and suffixes to match naming conventions like Stripe (sk_live_), OpenAI (sk-), or your own format.",
      },
      {
        question: "Which format should I use: hex, Base64, or alphanumeric?",
        answer:
          "Hex is standard for HMAC keys and signing secrets. Base64 is compact for JWTs and cookies. Alphanumeric is human-readable for API keys shared with users.",
      },
      {
        question: "Should I store generated tokens in source code?",
        answer:
          "Never. Store secrets in environment variables, .env files (gitignored), or a secrets manager like AWS Secrets Manager or HashiCorp Vault.",
      },
      {
        question: "Can I generate multiple tokens at once?",
        answer:
          "Yes. Use bulk generation to create multiple unique tokens for provisioning multiple API keys, test accounts, or environment configs simultaneously.",
      },
    ],

    relatedTools: [
      { name: "OTP / TOTP Generator", href: "/crypto-tools/otp-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "ULID Generator", href: "/crypto-tools/ulid-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Auth Generator (HTTP)", href: "/web-tools/auth-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
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
