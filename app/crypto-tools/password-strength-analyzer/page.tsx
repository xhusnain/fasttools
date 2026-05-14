import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PasswordAnalyzerTool } from "@/components/crypto-tools/password-analyzer"

const toolConfig = createToolConfig({
  toolName: "Password Strength Analyzer",
  description:
    "Estimate password strength, entropy, and practical resistance against common attack patterns.",
  metaTitle: "Password Strength Checker — Test Password Security & Entropy Free (2026)",
  metaDescription:
    "Free password strength checker. Test any password for security strength, entropy bits, estimated crack time, and common pattern detection. Check if your password is strong enough.",
  path: "/crypto-tools/password-strength-analyzer",

  header: {
    title: "Password Strength Checker & Entropy Analyzer",
    description:
      "Test any password to see its strength rating, entropy score (bits), estimated crack time, and detected weaknesses. Checks for common patterns, dictionary words, keyboard walks, repeated characters, and known breached passwords. All analysis runs locally — your password never leaves your browser.",
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
      "Check how strong your password is with this free password strength analyzer. Type any password to instantly see its security rating (very weak to very strong), entropy score in bits, estimated time to crack at various attack speeds, and specific weaknesses detected. The analyzer checks for common patterns including keyboard walks (qwerty, asdf), repeated characters, sequential numbers (123456), dictionary words, l33t substitutions (p@ssw0rd), and passwords found in known breach databases. Understand why your password is weak and get actionable improvement suggestions. All analysis runs entirely in your browser — your password is never transmitted to any server.",

    howToSteps: [
      "Type or paste a password into the analyzer field.",
      "Review the strength rating, entropy score, and estimated crack time.",
      "Check the detected weaknesses — patterns, dictionary words, and known breaches.",
      "Improve the password based on suggestions and retest until it reaches your target strength.",
    ],

    features: [
      "Password strength rating from very weak to very strong with entropy (bits)",
      "Estimated crack time at offline attack speeds (10B guesses/sec)",
      "Pattern detection: keyboard walks, sequences, repeats, and dictionary words",
      "l33t speak substitution detection (p@ssw0rd, h4ck3r)",
      "Client-side analysis — password never sent to any server",
    ],

    useCases: [
      "Testing password strength before creating accounts or credentials",
      "Validating password policy requirements for enterprise security teams",
      "Training employees on what makes passwords weak vs strong",
      "Evaluating candidate passwords before storing in password managers",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Modern password security is about resistance to realistic attacks, not just checking if a password has uppercase, lowercase, numbers, and symbols. A password like "P@ssw0rd1!" meets most complexity requirements but is trivially cracked because it follows a predictable pattern. This analyzer focuses on what actually matters: entropy (randomness), length, absence of common patterns, and resistance to dictionary and brute-force attacks.
        </p>
        <p>
          Entropy is measured in bits — each bit doubles the number of possible combinations an attacker must try. A password with 40 bits of entropy has about 1 trillion combinations; 80 bits has about 10^24 combinations. Aim for 80+ bits for important accounts. The best approach is a long passphrase of 4–6 random words (e.g., "correct horse battery staple") or a random string generated by a password manager.
        </p>
      </div>
    ),

    proTip:
      "Use passphrases of 4–6 random dictionary words (16+ characters) for passwords you need to remember. Use a password manager with 20+ character random strings for everything else. Never reuse passwords across services.",

    faqs: [
      {
        question: "How many bits of entropy is considered a strong password?",
        answer:
          "60+ bits is good for most online accounts. 80+ bits is strong for sensitive accounts. 100+ bits is very strong. For reference, a random 12-character alphanumeric password has ~71 bits of entropy.",
      },
      {
        question: "Is a complex short password better than a long simple one?",
        answer:
          "No. Length is more important than complexity. 'correct-horse-battery-staple' (28 chars, lowercase only) is far stronger than 'P@ss1!' (6 chars, all character types) because it has exponentially more combinations.",
      },
      {
        question: "Why is 'P@ssw0rd1!' rated as weak?",
        answer:
          "It follows the most common password pattern: capitalize first letter, substitute @ for a, 0 for o, add a number and symbol at the end. Attackers check these l33t speak substitutions first in dictionary attacks.",
      },
      {
        question: "Is my password sent to a server for checking?",
        answer:
          "No. All password analysis runs entirely in your browser using JavaScript. Your password never leaves your device and is not stored anywhere.",
      },
      {
        question: "Should I use a password manager instead of memorizing passwords?",
        answer:
          "Yes. Use a password manager (1Password, Bitwarden, KeePass) to generate and store unique random passwords for every account. Memorize only your master password — make it a strong passphrase.",
      },
      {
        question: "How often should I change my passwords?",
        answer:
          "NIST 2024 guidelines recommend against forced periodic password changes. Change passwords only when you suspect compromise, a service reports a breach, or you find password reuse across accounts.",
      },
    ],

    relatedTools: [
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Bcrypt Hash Generator", href: "/crypto-tools/bcrypt" },
      { name: "BIP39 Mnemonic Generator", href: "/crypto-tools/bip39-generator" },
      { name: "TOTP / OTP Generator", href: "/crypto-tools/otp-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Hash Text (SHA-256)", href: "/crypto-tools/hash-text" },
      { name: "Auth Generator (HTTP)", href: "/web-tools/auth-generator" },
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
