import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OtpGenerator } from "@/components/crypto-tools/otp-generator"

const toolConfig = createToolConfig({
  toolName: "OTP Code Generator",
  description:
    "Free otp code generator. totp generator, totp qr code generator. Time-based OTP for 2FA. verification code generator for gmail. otp generation algorithm. No signup.",
  metaTitle: "OTP Code Generator - Free TOTP Generator, QR Code | 2FA",
  metaDescription:
    "Free otp code generator. totp generator with totp qr code generator. Time-based OTP for multi-factor authentication. verification code generator for gmail. No signup.",
  path: "/crypto-tools/otp-generator",

  header: {
    title: "OTP code generator",
    description:
      "Generate and validate time-based OTP (one time password) for multi-factor authentication.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Free otp code generator. totp generator, totp qr code generator. Time-based OTP for 2FA.",
    alternateName: ["TOTP Generator", "OTP Generator", "Free OTP Code Generator"],
    featureList: [
      "totp generator",
      "totp qr code generator",
      "Time-based OTP",
      "otp generation algorithm",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Free otp code generator. totp generator and totp qr code generator for time-based one-time passwords (RFC 6238). Use as verification code generator for gmail, 2FA, Google Authenticator. otp generation algorithm runs in browser. free otp code generator, no signup.",

    howToSteps: [
      "Enter or generate a base32 secret. Use the refresh button for a new secret.",
      "View current, previous, and next OTP. Countdown shows time until next code.",
      "Scan the totp qr code generator output with Google Authenticator or similar apps.",
    ],

    features: [
      "totp generator: RFC 6238 time-based OTP",
      "totp qr code generator: Scan with Google Authenticator, Authy",
      "Previous, current, next OTP display",
      "Countdown timer until next code",
      "Secret in hex, epoch, iteration (otp generation algorithm details)",
      "100% client-side, no data sent",
    ],

    useCases: [
      "free otp code generator: Generate TOTP codes without an authenticator app.",
      "totp generator: Test or validate TOTP setup. otp-generator npm alternative in browser.",
      "totp qr code generator: Create QR code for authenticator app setup.",
      "verification code generator for gmail: Same algorithm as Google 2FA.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          This free otp code generator implements the totp generator algorithm (RFC
          6238). It produces time-based one-time passwords used by Google
          Authenticator, Authy, and other 2FA apps. The totp qr code generator
          creates a scannable QR code for easy setup. Use as a verification code
          generator for gmail-style 2FA or otp-generator npm alternative in the
          browser. otp generation algorithm: HMAC-SHA1(secret, time_counter).
        </p>
      </div>
    ),

    proTip:
      "Keep your secret safe. Anyone with the secret can generate the same OTP codes. Use the totp qr code generator to add to Google Authenticator.",

    faqs: [
      {
        question: "How to create an OTP code?",
        answer:
          "Enter a base32 secret (A-Z, 2-7) or click regenerate. This free otp code generator shows the current OTP. Same totp generator algorithm as Google Authenticator. totp qr code generator creates a QR to scan into your app.",
      },
      {
        question: "How to generate random OTP?",
        answer:
          "TOTP codes are deterministic from secret + time—not random. Use the refresh button to generate a new secret. Each secret produces different OTPs. This free otp code generator supports the standard otp generation algorithm.",
      },
      {
        question: "What is my 6 digit OTP number?",
        answer:
          "The 6-digit OTP is shown as 'Current OTP' when you enter a valid secret. It updates every 30 seconds. Same format as verification code generator for gmail 2FA.",
      },
      {
        question: "How to get OTP secret?",
        answer:
          "Click the refresh icon to generate a new base32 secret. Or enter one from your 2FA setup. Use the totp qr code generator to create a QR for authenticator apps.",
      },
      {
        question: "Is this a free otp code generator?",
        answer:
          "Yes. Free otp code generator, totp generator, totp qr code generator. 100% client-side. No signup. Use as otp-generator npm alternative or verification code generator for gmail testing.",
      },
    ],

    additionalContent: [
      {
        heading: "totp generator — RFC 6238",
        content:
          "This totp generator implements RFC 6238 (Time-based One-Time Password). Same otp generation algorithm as Google Authenticator. free otp code generator with totp qr code generator. Use for 2FA testing or as otp-generator npm alternative.",
      },
      {
        heading: "totp qr code generator",
        content:
          "The totp qr code generator produces a Key URI (otpauth://totp/...) QR code. Scan with Google Authenticator, Authy, or similar. verification code generator for gmail uses the same format.",
      },
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Auth Header Generator", href: "/web-tools/auth-generator" },
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
