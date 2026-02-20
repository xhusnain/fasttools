import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OtpGenerator } from "@/components/crypto-tools/otp-generator"

const toolConfig = createToolConfig({
  toolName: "OTP Code Generator",
  description:
    "Generate RFC 6238 TOTP codes with secret and QR setup support for authenticator workflows.",
  metaTitle: "OTP Code Generator (TOTP + QR Setup)",
  metaDescription:
    "Generate TOTP codes and setup values for authenticator apps. Useful for 2FA testing, integration checks, and support workflows.",
  path: "/crypto-tools/otp-generator",
  keywords: [
    "otp code generator",
    "totp generator",
    "2fa code generator",
    "totp qr code",
    "authenticator setup",
  ],

  header: {
    title: "OTP Code Generator",
    description:
      "Generate time-based one-time passwords (TOTP) and setup values for 2FA workflows.",
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
    overview:
      "Use this tool to generate TOTP codes and setup values used by authenticator apps. It is useful for 2FA integration testing, account-recovery support checks, and implementation troubleshooting.",

    howToSteps: [
      "Input or generate a base32 secret key.",
      "Review current and adjacent time-window OTP values.",
      "Use the setup QR/URI with your authenticator app when needed.",
      "Validate codes in your target login or integration flow.",
    ],

    features: [
      "RFC 6238 time-based code generation",
      "Setup secret and QR workflow support",
      "Current/next-window visibility",
      "Useful for auth QA and support cases",
      "Fast browser-based generation",
    ],

    useCases: [
      "2FA integration development",
      "Authenticator app setup checks",
      "Support troubleshooting for OTP mismatch",
      "Security testing of login flows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOTP uses shared secrets and time windows to generate short-lived
          verification codes. It is a common multi-factor mechanism across
          consumer and enterprise systems.
        </p>
        <p>
          This page is optimized for utility and troubleshooting workflows: set
          secret, generate code, compare against your system, and verify timing
          assumptions.
        </p>
      </div>
    ),

    proTip:
      "When OTP validation fails, verify device clock sync and period settings first, then confirm secret encoding and issuer/account labels.",

    faqs: [
      {
        question: "What standard does this OTP generator follow?",
        answer:
          "It follows TOTP behavior aligned with RFC 6238 workflows used by common authenticator apps.",
      },
      {
        question: "Can I use this for Google Authenticator setup tests?",
        answer:
          "Yes. The setup URI/QR workflow can be used for compatibility checks with authenticator apps.",
      },
      {
        question: "Why does my OTP code expire quickly?",
        answer:
          "TOTP codes are intentionally short-lived and rotate on fixed time intervals for security.",
      },
      {
        question: "Why does my app show a different code?",
        answer:
          "Differences usually come from clock drift, mismatched secret values, or period/digit configuration mismatches.",
      },
      {
        question: "Can this replace a full authenticator app?",
        answer:
          "It is useful for testing and troubleshooting, while production user flows usually rely on dedicated authenticator apps.",
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
