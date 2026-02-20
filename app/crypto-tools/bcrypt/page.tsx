import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { BcryptGenerator } from "@/components/crypto-tools/bcrypt-generator"

const toolConfig = createToolConfig({
  toolName: "Bcrypt Generator",
  description:
    "Generate and verify bcrypt password hashes with configurable work factor settings.",
  metaTitle: "Bcrypt Generator & Verifier (Online, Free)",
  metaDescription:
    "Create bcrypt password hashes and verify matches with adjustable cost factor. Useful for authentication testing and secure password workflows.",
  path: "/crypto-tools/bcrypt",
  keywords: [
    "bcrypt generator",
    "bcrypt hash",
    "bcrypt verifier",
    "password hashing tool",
    "bcrypt cost factor",
  ],

  header: {
    title: "Bcrypt Generator",
    description:
      "Hash and verify passwords with bcrypt using practical cost-factor controls.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Generate and verify bcrypt hashes for secure password storage workflows.",
    alternateName: ["Bcrypt Hash Generator", "Bcrypt Verifier"],
    featureList: [
      "Bcrypt hash generation",
      "Hash verification",
      "Adjustable cost factor",
      "Copy-ready output",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to generate bcrypt hashes for password storage and to verify plaintext/hash matches during testing. It is useful for backend auth workflows, migration checks, and implementation QA.",

    howToSteps: [
      "Enter the plaintext password or test value.",
      "Set the bcrypt cost factor based on your target security/performance profile.",
      "Generate a hash and copy it into your auth flow or seed data.",
      "Use the verify section to test whether a plaintext value matches a stored hash.",
    ],

    features: [
      "Bcrypt hash generation with work-factor control",
      "Built-in hash verification",
      "Useful for auth implementation testing",
      "Fast copy-and-retest workflow",
      "Browser-based utility for quick checks",
    ],

    useCases: [
      "Login/password auth development",
      "Migration testing from legacy hash schemes",
      "QA validation of auth endpoints",
      "Security training and demonstrations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Bcrypt remains a common password-hashing baseline because it is
          intentionally slow and tunable. The tunable cost factor helps teams
          adapt to hardware changes over time.
        </p>
        <p>
          This page is optimized for utility intent: quickly generate hashes,
          verify matches, and move back into application code with minimal
          friction.
        </p>
      </div>
    ),

    proTip:
      "Benchmark cost-factor settings in your own deployment environment to balance login latency and brute-force resistance.",

    faqs: [
      {
        question: "What is bcrypt used for?",
        answer:
          "Bcrypt is primarily used for password hashing because it is adaptive and designed to resist fast brute-force attacks.",
      },
      {
        question: "Should I store plaintext passwords?",
        answer:
          "No. Passwords should be hashed with a secure algorithm such as bcrypt (or alternatives like Argon2) before storage.",
      },
      {
        question: "What does cost factor mean in bcrypt?",
        answer:
          "Cost factor controls computational work. Higher values increase hash time and attack resistance.",
      },
      {
        question: "Can I verify existing bcrypt hashes here?",
        answer:
          "Yes. Use the verification section to compare a plaintext input against a bcrypt hash.",
      },
      {
        question: "Is bcrypt still relevant?",
        answer:
          "Yes, bcrypt is still widely used. Teams may also evaluate newer options like Argon2 depending on requirements.",
      },
    ],

    relatedTools: [
      { name: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BcryptPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BcryptGenerator />
        </div>
      )}
    />
  )
}
