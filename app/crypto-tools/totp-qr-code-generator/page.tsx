import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OtpGenerator } from "@/components/crypto-tools/otp-generator"

const toolConfig = createToolConfig({
  toolName: "TOTP QR Code Generator",
  description:
    "Generate otpauth TOTP QR codes and setup URIs for authenticator apps using RFC 6238 settings.",
  metaTitle: "TOTP QR Code Generator - otpauth 2FA Setup QR",
  metaDescription:
    "Free TOTP QR code generator for Google Authenticator, Authy, 1Password, and Bitwarden. Create otpauth setup URI, Base32 secret, and live OTP codes.",
  path: "/crypto-tools/totp-qr-code-generator",

  header: {
    title: "TOTP QR Code Generator",
    description:
      "Create a standard otpauth:// TOTP setup QR code for authenticator apps, then verify the live 6-digit code with the same secret.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
    { label: "TOTP QR Code Generator", href: "/crypto-tools/totp-qr-code-generator" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "TOTP QR code generator for otpauth setup URIs, Base32 secrets, authenticator app enrollment, and 2FA testing.",
    alternateName: [
      "OTP QR Code Generator",
      "otpauth QR Generator",
      "2FA QR Code Generator",
      "Google Authenticator QR Code Generator",
      "Authenticator QR Generator",
      "TOTP Setup QR Generator",
      "MFA QR Code Generator",
    ],
    featureList: [
      "Generate otpauth://totp setup URI",
      "Render QR codes for authenticator apps",
      "Generate Base32 TOTP secrets",
      "Live 6 or 8-digit OTP code preview",
      "SHA-1, SHA-256, SHA-512 support",
      "100% browser-based secret handling",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A TOTP QR Code Generator creates an otpauth:// setup URI and QR code that authenticator apps can scan to enroll a time-based one-time password secret.",
    quickAnswer:
      "Enter an issuer, account name, and secret, or generate a new Base32 secret. The tool creates a scannable TOTP QR code and live OTP code for Google Authenticator, Authy, 1Password, Bitwarden, and other RFC 6238 apps.",
    keyTakeaways: [
      "Creates otpauth://totp setup QR codes for 2FA enrollment",
      "Compatible with Google Authenticator, Authy, Microsoft Authenticator, 1Password, Bitwarden, Aegis, and FreeOTP",
      "Supports standard 6-digit, 30-second TOTP settings",
      "Can also test SHA-256, SHA-512, 8-digit, and custom period settings",
      "Secrets are generated and rendered in the browser and are not uploaded",
    ],
    overview:
      "Use this TOTP QR code generator when you are building, testing, or debugging two-factor authentication enrollment. A TOTP QR code is just a visual encoding of an otpauth:// URI containing the issuer, account name, Base32 secret, algorithm, digit count, and time period. Scan the QR with an authenticator app, then compare the live code shown by the app with the code generated here to confirm your 2FA setup is correct.",

    howToSteps: [
      "Enter the issuer or app name that should appear in the authenticator app.",
      "Enter the account label, such as a username or email address.",
      "Generate a Base32 secret or paste an existing test secret.",
      "Scan the generated QR code with Google Authenticator, Authy, 1Password, Bitwarden, or another TOTP app.",
      "Compare the live OTP code and countdown to confirm the setup works.",
    ],

    features: [
      "otpauth:// URI generation",
      "TOTP QR code rendering",
      "Base32 secret generation",
      "Live OTP code verification",
      "Previous/current/next code windows for clock drift debugging",
      "No server upload for generated secrets",
    ],

    useCases: [
      "Testing 2FA enrollment screens during app development",
      "Creating a QR code from an existing Base32 TOTP secret",
      "Debugging authenticator app setup issues",
      "Validating issuer, label, period, digit count, and algorithm settings",
      "QA testing login flows that require rotating OTP codes",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is Inside A TOTP QR Code?</h3>
          <p>
            The QR code contains an otpauth URI, usually in this format: otpauth://totp/Issuer:account?secret=BASE32SECRET&amp;issuer=Issuer&amp;algorithm=SHA1&amp;digits=6&amp;period=30. Authenticator apps read that URI and store the secret locally.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Safe Testing Guidance</h3>
          <p>
            Use generated test secrets for development and QA. Do not paste production 2FA secrets from real accounts into online tools unless your security policy explicitly allows it. For production apps, generate secrets server-side and show the QR only to the enrolled user.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Mismatch Causes</h3>
          <p>
            If codes do not match, check device time sync first. Then verify the Base32 secret, issuer/account label, algorithm, digit count, and period. Most consumer authenticator apps expect SHA-1, 6 digits, and 30-second windows.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For maximum compatibility, use SHA-1, 6 digits, and a 30-second period unless your application specifically requires a different setting.",

    faqs: [
      {
        question: "What apps can scan this TOTP QR code?",
        answer:
          "Google Authenticator, Authy, Microsoft Authenticator, 1Password, Bitwarden, Aegis, FreeOTP, and most apps that support the otpauth:// URI scheme can scan standard TOTP QR codes.",
      },
      {
        question: "Is a TOTP QR code the same as an OTP QR code?",
        answer:
          "Usually yes in common search usage. Technically, TOTP is a time-based OTP standard, while OTP is the broader category. Most authenticator QR codes are TOTP QR codes.",
      },
      {
        question: "Does this upload my secret to a server?",
        answer:
          "No. The QR generation and OTP calculation run in your browser. For real production secrets, still follow your organization's policy and prefer server-side enrollment flows.",
      },
      {
        question: "Can I use this for Google Authenticator?",
        answer:
          "Yes. Use the default SHA-1, 6-digit, 30-second settings for best Google Authenticator compatibility.",
      },
      {
        question: "Why does my scanned authenticator code not match?",
        answer:
          "Most mismatches come from clock drift, wrong Base32 secret, SHA-1 vs SHA-256 mismatch, 6 vs 8 digit mismatch, or using a non-30-second period.",
      },
    ],

    relatedTools: [
      { name: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TotpQrCodeGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<OtpGenerator />)} />
}
