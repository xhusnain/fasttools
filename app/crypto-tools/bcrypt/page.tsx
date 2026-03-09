import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { BcryptGenerator } from "@/components/crypto-tools/bcrypt-generator"

const toolConfig = createToolConfig({
  toolName: "Bcrypt Generator",
  description:
    "Generate and verify bcrypt password hashes with configurable work factor settings.",
  metaTitle: "Bcrypt Hash Generator & Verifier Online — Hash Passwords Free (2026)",
  metaDescription:
    "Free online bcrypt hash generator and verifier. Hash passwords with configurable salt rounds (cost factor 4–16). Verify plaintext against bcrypt hashes. Industry-standard password hashing.",
  path: "/crypto-tools/bcrypt",

  header: {
    title: "Bcrypt Password Hash Generator & Verifier",
    description:
      "Generate bcrypt password hashes with adjustable cost factor (salt rounds 4–16) and verify plaintext passwords against existing bcrypt hashes. The industry-standard password hashing algorithm used by Node.js, Python, Ruby, and PHP frameworks. All hashing runs in your browser.",
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
    definition:
      "A Bcrypt Hash Generator is a free tool that hashes passwords using the bcrypt algorithm and verifies plaintext passwords against existing bcrypt hashes.",
    quickAnswer:
      "Enter a password and select a cost factor (10–12 recommended) to generate a bcrypt hash. To verify, paste a password and a bcrypt hash to check if they match. Used for secure password storage.",
    keyTakeaways: [
      "Bcrypt is a password hashing function designed to be slow — resistant to brute force",
      "Cost factor (salt rounds) controls computational difficulty: 10 = ~100ms, 12 = ~400ms",
      "Each hash includes a random salt — same password produces different hashes",
      "Output format: $2b$[cost]$[22-char salt][31-char hash]",
      "Industry standard for password storage in web applications",
    ],
    overview:
      "Generate bcrypt password hashes and verify passwords against existing hashes with this free online tool. Bcrypt is the industry-standard password hashing algorithm used by Express.js, Django, Ruby on Rails, Laravel, and Spring Boot for secure credential storage. Set the cost factor (salt rounds) from 4 to 16 — higher values increase computation time exponentially, making brute-force attacks impractical. Each hash automatically includes a unique random salt, so the same password produces different hashes every time. Use the verifier to check if a plaintext password matches a stored bcrypt hash during development and QA testing.",

    howToSteps: [
      "Enter the password you want to hash in the input field.",
      "Set the cost factor (10–12 recommended for production, 4–6 for fast testing).",
      "Click Generate to create the bcrypt hash — copy it for your database seed or auth config.",
      "Switch to Verify mode to check if a plaintext password matches an existing bcrypt hash.",
    ],

    features: [
      "Bcrypt hash generation with adjustable cost factor (salt rounds 4–16)",
      "Password verification — check plaintext against existing bcrypt hashes",
      "Automatic random salt generation (built into every bcrypt hash)",
      "Output in standard $2b$ format compatible with all bcrypt libraries",
      "Client-side hashing — passwords never sent to any server",
    ],

    useCases: [
      "Generating password hashes for database seed files and user migrations",
      "Verifying bcrypt hashes during login flow development and debugging",
      "Testing cost factor performance to balance security and login speed",
      "Comparing bcrypt output across Node.js, Python, and PHP implementations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Bcrypt is deliberately slow by design — it uses a configurable cost factor that doubles computation time with each increment. At cost factor 10, hashing takes ~100ms; at 12, ~400ms; at 14, ~1.6 seconds. This intentional slowness makes brute-force password cracking impractical even with modern GPUs. Each bcrypt hash includes a built-in random salt, eliminating rainbow table attacks entirely.
        </p>
        <p>
          The bcrypt hash format is <code>$2b$[cost]$[22-char salt][31-char hash]</code>. The $2b$ prefix identifies the algorithm version, making hashes self-describing and portable across languages. Bcrypt remains the recommended default for password hashing in 2026, with Argon2 as an alternative for applications that need memory-hard resistance against ASIC attacks.
        </p>
      </div>
    ),

    proTip:
      "Use cost factor 12 for production in 2026 — it provides ~400ms hash time that is imperceptible to users but makes brute-force attacks 4x slower than cost factor 10. Increase by 1 every 2–3 years as hardware improves.",

    faqs: [
      {
        question: "What cost factor (salt rounds) should I use for bcrypt?",
        answer:
          "Use 10–12 for production web applications in 2026. Cost factor 10 takes ~100ms, 12 takes ~400ms. Each increment doubles the time. Use 4–6 for unit tests to keep test suites fast.",
      },
      {
        question: "Why does the same password produce different bcrypt hashes?",
        answer:
          "Bcrypt automatically generates a unique random salt for each hash. The salt is embedded in the hash output, so verification still works — bcrypt extracts the salt during comparison.",
      },
      {
        question: "Is bcrypt better than SHA-256 for passwords?",
        answer:
          "Yes. SHA-256 is too fast for password hashing — attackers can try billions of guesses per second. Bcrypt is intentionally slow and includes automatic salting, making it far more resistant to brute-force attacks.",
      },
      {
        question: "What is the difference between bcrypt and Argon2?",
        answer:
          "Bcrypt is CPU-hard (slow to compute). Argon2 is both CPU-hard and memory-hard, making it more resistant to GPU and ASIC attacks. Bcrypt is more widely supported; Argon2 is newer and recommended for high-security applications.",
      },
      {
        question: "Can I verify a bcrypt hash from another programming language?",
        answer:
          "Yes. Bcrypt hashes are portable across languages. A hash generated in Node.js can be verified in Python, PHP, Ruby, or any language with a bcrypt library, as long as the $2b$ format is used.",
      },
      {
        question: "Should I store plaintext passwords in my database?",
        answer:
          "Never. Always hash passwords with bcrypt (or Argon2) before storage. Even if your database is breached, attackers cannot recover plaintext passwords from properly hashed values.",
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
