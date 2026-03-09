import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OtpGenerator } from "@/components/crypto-tools/otp-generator"

const toolConfig = createToolConfig({
  toolName: "OTP Code Generator",
  description:
    "Generate RFC 6238 TOTP codes with secret and QR setup support for authenticator workflows.",
  metaTitle: "TOTP OTP Generator — Generate 2FA Codes & QR Setup Free (2026)",
  metaDescription:
    "Free TOTP/OTP code generator. Generate time-based one-time passwords for Google Authenticator, Authy, and 2FA apps. Create QR setup codes and test two-factor authentication implementations.",
  path: "/crypto-tools/otp-generator",

  header: {
    title: "TOTP / OTP Code Generator for Two-Factor Authentication",
    description:
      "Generate RFC 6238 time-based one-time passwords (TOTP) for two-factor authentication testing. Create setup QR codes for Google Authenticator, Authy, Microsoft Authenticator, and other 2FA apps. Configure secret keys, time periods, digit count, and hash algorithms (SHA-1, SHA-256, SHA-512).",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Generate RFC 6238-compatible TOTP codes with setup URI and QR representation.",
    alternateName: ["TOTP Generator", "2FA OTP Generator"],
    featureList: [
      "TOTP code generation",
      "Setup secret handling",
      "QR setup support",
      "Time-window code display",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An OTP Generator is a free tool that creates one-time passwords and TOTP/HOTP codes for two-factor authentication testing and development.",
    quickAnswer:
      "Enter a secret key or generate one to create time-based (TOTP) or counter-based (HOTP) one-time passwords. The 6-digit code refreshes every 30 seconds. Useful for testing 2FA implementations.",
    keyTakeaways: [
      "Generates TOTP (time-based) and HOTP (counter-based) one-time passwords",
      "Standard 6-digit codes that refresh every 30 seconds (TOTP)",
      "Compatible with Google Authenticator, Authy, and other 2FA apps",
      "Uses HMAC-SHA1, SHA256, or SHA512 algorithms per RFC 6238",
      "Useful for developers testing 2FA integration in their applications",
    ],
    overview:
      "Generate TOTP (Time-based One-Time Password) codes and 2FA setup QR codes with this free online tool. Enter or generate a Base32 secret key, configure the time period (default 30 seconds), digit count (6 or 8), and hash algorithm (SHA-1, SHA-256, SHA-512), then see the current OTP code with a live countdown timer. Create otpauth:// setup URIs and QR codes compatible with Google Authenticator, Authy, Microsoft Authenticator, 1Password, and other TOTP apps. Essential for developers building two-factor authentication into web and mobile applications, QA teams testing 2FA login flows, and support teams debugging OTP mismatch issues.",

    howToSteps: [
      "Enter an existing Base32 secret key, or click Generate to create a new one.",
      "Configure settings: time period (30s default), digits (6), and hash algorithm (SHA-1).",
      "View the current TOTP code with countdown timer, plus previous and next window codes.",
      "Scan the QR code with Google Authenticator or Authy to verify your 2FA implementation works.",
    ],

    features: [
      "RFC 6238 TOTP code generation with live countdown timer",
      "QR code and otpauth:// URI generation for authenticator app setup",
      "Configurable secret key, time period, digit count, and hash algorithm",
      "Current, previous, and next time window code display for drift debugging",
      "Compatible with Google Authenticator, Authy, Microsoft Authenticator, and 1Password",
    ],

    useCases: [
      "Testing two-factor authentication implementations in web and mobile apps",
      "Generating TOTP setup QR codes for authenticator app enrollment flows",
      "Debugging OTP mismatch issues caused by clock drift or configuration errors",
      "Validating 2FA backup and recovery workflows during security audits",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOTP (RFC 6238) works by combining a shared secret key with the current Unix timestamp divided by a time period (typically 30 seconds), then computing an HMAC hash and truncating it to produce a 6-digit code. Both the server and the authenticator app perform the same calculation independently — if the codes match, authentication succeeds. The standard allows for a ±1 window tolerance to handle minor clock drift.
        </p>
        <p>
          The most common 2FA configuration uses SHA-1 with 6 digits and a 30-second period — this is what Google Authenticator defaults to. Some services use SHA-256 or SHA-512 for enhanced security, and 8-digit codes for lower collision probability. When debugging OTP mismatches, always check: (1) device clock accuracy, (2) Base32 secret encoding, (3) algorithm and digit count match between server and app.
        </p>
      </div>
    ),

    proTip:
      "When 2FA codes don't match, check in this order: (1) device clock sync (NTP), (2) Base32 secret encoding (padding, case), (3) hash algorithm (SHA-1 vs SHA-256), (4) time period (30s vs 60s), (5) digit count (6 vs 8). Most Google Authenticator issues are clock drift.",

    faqs: [
      {
        question: "How does TOTP two-factor authentication work?",
        answer:
          "TOTP combines a shared secret key with the current time (divided into 30-second windows) using HMAC to generate a short-lived 6-digit code. Both the authenticator app and server compute the same code independently — if they match, login succeeds.",
      },
      {
        question: "Which authenticator apps are compatible with this tool?",
        answer:
          "All TOTP-compatible apps: Google Authenticator, Authy, Microsoft Authenticator, 1Password, Bitwarden, FreeOTP, and any app that supports otpauth:// URIs and RFC 6238.",
      },
      {
        question: "Why does my authenticator show a different code than this tool?",
        answer:
          "Common causes: clock drift (sync your device time via NTP), wrong secret key encoding, algorithm mismatch (SHA-1 vs SHA-256), different time period (30s vs 60s), or digit count mismatch (6 vs 8 digits).",
      },
      {
        question: "What is the difference between TOTP and HOTP?",
        answer:
          "TOTP is time-based — codes change every 30 seconds. HOTP is counter-based — codes change only when the counter increments. TOTP is more common because it doesn't require counter synchronization between devices.",
      },
      {
        question: "Can I use this to set up 2FA for my own application?",
        answer:
          "Yes. Generate a Base32 secret, create a QR code with the otpauth:// URI, let users scan it with their authenticator app, and verify codes on your server using a TOTP library (speakeasy for Node.js, pyotp for Python).",
      },
      {
        question: "Is TOTP secure enough for production authentication?",
        answer:
          "Yes. TOTP is a proven standard used by Google, GitHub, AWS, and most major services. For highest security, combine TOTP with phishing-resistant methods like WebAuthn/passkeys as a primary factor.",
      },
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function OtpGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <OtpGenerator />
        </div>
      )}
    />
  )
}
