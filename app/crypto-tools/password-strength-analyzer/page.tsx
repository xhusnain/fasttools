import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PasswordAnalyzerTool } from "@/components/crypto-tools/password-analyzer"

const toolConfig = createToolConfig({
  toolName: "Password Strength Analyzer",
  description:
    "Estimate password strength, entropy, and practical resistance against common attack patterns.",
  metaTitle: "Password Strength Analyzer & Entropy Checker",
  metaDescription:
    "Analyze password strength with entropy and attack-resistance indicators. Use it to improve credential quality and policy alignment.",
  path: "/crypto-tools/password-strength-analyzer",
  keywords: [
    "password strength analyzer",
    "password entropy checker",
    "password security test",
    "strong password tool",
    "password quality checker",
  ],

  header: {
    title: "Password Strength Analyzer",
    description:
      "Evaluate password quality using entropy-style indicators and practical security checks.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    {
      label: "Password Strength Analyzer",
      href: "/crypto-tools/password-strength-analyzer",
    },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Analyze password strength and improvement opportunities using modern security heuristics.",
    alternateName: ["Password Checker", "Password Entropy Tool"],
    featureList: [
      "Strength analysis",
      "Entropy-style indicators",
      "Pattern and reuse guidance",
      "Credential hardening support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Password Strength Analyzer is a free tool that evaluates password security by checking length, complexity, entropy, and known breach databases.",
    quickAnswer:
      "Type a password to instantly see its strength rating, entropy score, estimated crack time, and specific improvement suggestions. The tool checks for common patterns, dictionary words, and known breached passwords.",
    keyTakeaways: [
      "Rates password strength from very weak to very strong",
      "Calculates entropy (bits) — 80+ bits is considered strong",
      "Estimates time to crack using brute force at various speeds",
      "Detects common patterns: keyboard walks, repeated characters, dictionary words",
      "All analysis runs locally — your password is never sent to any server",
    ],
    overview:
      "This analyzer helps you evaluate password quality before credential rollout. It provides practical indicators for length, complexity patterns, and estimated resilience to common cracking approaches.",

    howToSteps: [
      "Enter a candidate password in the analyzer field.",
      "Review strength and entropy-style indicators.",
      "Identify weak patterns such as repeats, sequences, or predictable substitutions.",
      "Revise and retest until the password meets your target quality bar.",
    ],

    features: [
      "Password quality scoring",
      "Entropy-oriented strength indicators",
      "Weak-pattern detection guidance",
      "Clear improvement feedback",
      "Fast retest workflow",
    ],

    useCases: [
      "Credential policy onboarding",
      "User training and awareness",
      "Internal security QA",
      "Pre-deployment password standards checks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Effective password checks focus on resistance to realistic attacks,
          not just symbol count. Length, unpredictability, and uniqueness are
          typically stronger predictors than rigid composition rules alone.
        </p>
        <p>
          This page is optimized for direct utility: test a password, identify
          weak characteristics, and improve it with immediate feedback.
        </p>
      </div>
    ),

    proTip:
      "Prefer long passphrases with unique wording and avoid reused credentials across services.",

    faqs: [
      {
        question: "What makes a password strong?",
        answer:
          "Strong passwords are long, unique, and hard to guess from common words, patterns, or personal information.",
      },
      {
        question: "Is complexity alone enough?",
        answer:
          "No. Complexity helps, but length and uniqueness are often more important for practical resistance.",
      },
      {
        question: "Should I reuse strong passwords across accounts?",
        answer:
          "No. Reuse creates cross-account risk when one service is compromised.",
      },
      {
        question: "Can this replace a password manager?",
        answer:
          "It complements password managers by helping evaluate candidate passwords, but does not replace credential storage tooling.",
      },
      {
        question: "Does this detect all attack methods?",
        answer:
          "It provides practical estimates and heuristics, not exhaustive guarantees against every attack scenario.",
      },
    ],

    relatedTools: [
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PasswordStrengthAnalyzerPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PasswordAnalyzerTool />
        </div>
      )}
    />
  )
}
