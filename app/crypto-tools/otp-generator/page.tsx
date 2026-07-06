import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OtpGenerator } from "@/components/crypto-tools/otp-generator"

const toolConfig = createToolConfig({
  toolName: "OTP Code Generator",
  description:
    "Generate RFC 6238 TOTP codes with secret and QR setup support for authenticator workflows.",
  metaTitle: "TOTP / OTP Generator — 2FA Code, QR Setup, RFC 6238",
  metaDescription:
    "Free TOTP / OTP generator. Live 6 or 8-digit codes (SHA-1 / SHA-256 / SHA-512), otpauth:// QR setup for Google Authenticator, Authy, 1Password, Bitwarden. RFC 6238 / RFC 4226 compliant. 100% client-side, no signup.",
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
      "Generate RFC 6238-compatible TOTP codes (and RFC 4226 HOTP) with otpauth:// setup URI, QR code, and live countdown. Configurable algorithm (SHA-1/256/512), digit count (6/8), and time period.",
    alternateName: [
      "TOTP Generator",
      "OTP Code Generator",
      "2FA Code Generator",
      "Google Authenticator Generator",
      "Authy Code Generator",
      "RFC 6238 TOTP Generator",
      "Time-based One-Time Password Generator",
      "HOTP Generator",
      "otpauth URI Generator",
      "2FA QR Code Generator",
      "Authenticator Secret Generator",
      "MFA Code Generator",
      "OATH TOTP Tester",
      "Two-Factor Auth Tester",
      "TOTP Debugger",
    ],
    featureList: [
      "RFC 6238 TOTP generation with live 30-second countdown timer",
      "Configurable hash algorithm: SHA-1 (default), SHA-256, or SHA-512",
      "Configurable digit count: 6 (standard) or 8 (high-precision)",
      "Configurable period: 15 / 30 / 60 seconds (most services use 30s)",
      "Previous, current, and next time-window codes shown for clock-drift debugging",
      "otpauth:// URI generation in standard issuer:account format",
      "QR code rendering compatible with Google Authenticator, Authy, Microsoft Authenticator, 1Password, Bitwarden, FreeOTP, Aegis",
      "Generate cryptographically secure Base32 secret in-browser via crypto.getRandomValues()",
      "RFC 4226 HOTP (counter-based) mode for hardware-token testing",
      "Side-by-side: scan once into Authy/Google Authenticator, watch codes match in real-time",
      "100% client-side — secret never sent to a server, verifiable in DevTools Network tab",
      "Free, no signup, no rate limits, no ads",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How TOTP Works (RFC 6238)</h3>
          <p>
            TOTP combines a shared secret key (Base32-encoded) with the current Unix timestamp divided by a time period (typically 30 seconds) to produce a counter value <code>T = floor((current_time - T0) / period)</code>. The tool then computes <code>HMAC(secret, T)</code>, truncates the result via dynamic offset to a 31-bit integer, and takes that integer modulo 10<sup>6</sup> (or 10<sup>8</sup>) to produce a 6 or 8-digit code. Both the server and the authenticator app perform this calculation independently — if the codes match, authentication succeeds. The standard allows for a ±1 window tolerance (server accepts the previous and next code as well) to handle minor clock drift between devices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">otpauth:// URI Anatomy</h3>
          <p>
            When you scan a 2FA QR code, it encodes an <strong>otpauth:// URI</strong> in this format: <code>otpauth://totp/Issuer:account@example.com?secret=BASE32SECRET&amp;issuer=Issuer&amp;algorithm=SHA1&amp;digits=6&amp;period=30</code>. The <code>Issuer:account</code> path is what appears in your authenticator app as the entry name. The query parameters tell the app how to compute codes — most apps default to SHA-1 / 6 digits / 30 seconds if those parameters are omitted (matching Google Authenticator&apos;s original 2010 implementation). For HOTP, the URI uses <code>otpauth://hotp/...</code> with a <code>counter=</code> parameter instead of <code>period=</code>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">SHA-1 vs SHA-256 vs SHA-512</h3>
          <p>
            <strong>SHA-1</strong> is the universal default — every authenticator app supports it, and it&apos;s what Google Authenticator originally implemented. Despite SHA-1 being deprecated for collision-resistance applications (TLS, digital signatures), <strong>HMAC-SHA1 remains cryptographically secure</strong> for TOTP because HMAC&apos;s security relies on PRF behavior, not collision resistance. <strong>SHA-256</strong> and <strong>SHA-512</strong> are stronger algorithms used by some enterprise systems (e.g., Microsoft Authenticator Premium, some banking 2FA). <strong>Compatibility caveat:</strong> if you select SHA-256 or SHA-512, the authenticator app must also support that algorithm — Google Authenticator (the original Android version pre-2020) and many older apps only support SHA-1.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Debugging &quot;Invalid Code&quot; Errors</h3>
          <p>
            When 2FA codes don&apos;t match, check in this order:
            <strong>(1) Device clock sync</strong> — open Settings → Date &amp; Time and enable Automatic / NTP. Even 30 seconds of drift will desync codes.{" "}
            <strong>(2) Base32 secret encoding</strong> — Base32 is case-insensitive but padding (=) and lowercase variations cause silent failures.{" "}
            <strong>(3) Hash algorithm mismatch</strong> — SHA-1 vs SHA-256 produce completely different codes from the same secret.{" "}
            <strong>(4) Time period</strong> — most services use 30 seconds; some use 60.{" "}
            <strong>(5) Digit count</strong> — 6 vs 8 digits.{" "}
            <strong>(6) Counter desync (HOTP only)</strong> — if you press &quot;next code&quot; in your app more than the server expects, codes drift permanently.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">TOTP vs WebAuthn / Passkeys</h3>
          <p>
            TOTP is a <strong>shared-secret</strong> system — both the server and your authenticator app know the same Base32 secret. This means TOTP is <strong>vulnerable to phishing</strong> (an attacker who tricks you into typing a code into a fake login page can replay it within 30 seconds) and to <strong>server-side database breaches</strong> (if an attacker steals the secret, they can generate codes forever). <strong>WebAuthn / passkeys</strong> use public-key cryptography — the server only stores a public key, and the private key never leaves your device. Best practice for high-value accounts: use passkeys / WebAuthn as the primary 2FA, with TOTP as a backup. For everything else, TOTP is dramatically better than SMS-based 2FA (which is vulnerable to SIM-swap attacks).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <p>
            Developers building 2FA into their app use this to <strong>test setup flows</strong> end-to-end without needing a real authenticator app. QA teams use the previous / current / next window display to <strong>debug clock-drift bugs</strong> in TOTP verification code. Support teams use it to <strong>recover stuck accounts</strong> where a user has the secret but lost their authenticator app. Security researchers and red teams use it to <strong>verify TOTP implementations</strong> against RFC 6238 reference vectors.
          </p>
        </div>
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
      {
        question: "How do I generate an OTP QR code?",
        answer:
          "Enter your service name and secret (or click 'generate random secret') above. The tool produces a QR code following the standard otpauth://totp/Issuer:account?secret=BASE32SECRET&issuer=Issuer URI format. Scan it with Google Authenticator, Authy, 1Password, Bitwarden, or any RFC 6238 TOTP authenticator. The same code can be entered manually if scanning isn't possible — useful for cross-device setup."
      },
      {
        question: "Can I generate a TOTP QR code for Google Authenticator?",
        answer:
          "Yes. The QR code uses the otpauth:// URI scheme that Google Authenticator, Authy, Microsoft Authenticator, 1Password, Bitwarden, and Aegis all support. Just scan and the account is added. The tool defaults to 6-digit codes with a 30-second period (the standard Google uses), but you can change to 8 digits or 60-second period for compatibility with services that require those settings."
      },
      {
        question: "What's the difference between HOTP and TOTP?",
        answer:
          "HOTP (HMAC-based One-Time Password, RFC 4226) generates codes from a counter that increments each use — the server and client must stay in sync. TOTP (Time-based, RFC 6238) generates codes from the current Unix time divided by a period (usually 30 seconds) — no counter sync needed. Google Authenticator and most modern apps use TOTP. HOTP is rare today but still seen in hardware tokens (YubiKey OATH-HOTP mode)."
      },
      {
        question: "Is the secret stored anywhere?",
        answer:
          "No. The secret generation and QR-code rendering both happen client-side in your browser. Nothing is sent to a server. The secret only leaves your browser when YOU choose to scan it into an authenticator app — which is encrypted at rest in that app. You can verify zero network calls in DevTools → Network.",
      },
      {
        question: "Why does Google Authenticator show 'Invalid code' even though the secret is correct?",
        answer:
          "The #1 cause is device clock drift. Open Settings → Date & Time and enable 'Set automatically' (NTP sync). The #2 cause is algorithm mismatch — Google Authenticator only supports SHA-1 by default; if the service is using SHA-256 you'll get invalid-code errors even with the right secret. Use this tool's algorithm dropdown to confirm which one the service expects.",
      },
      {
        question: "What's the maximum 'safe' clock drift for TOTP?",
        answer:
          "Most servers accept the current code plus the previous and next 30-second window (±1 step), giving ~60 seconds of drift tolerance. Some strict implementations only accept the current window (no tolerance). If you're consistently seeing rejected codes, your device clock is off by 30+ seconds — sync it via NTP.",
      },
      {
        question: "Can I export my Google Authenticator secrets to use here?",
        answer:
          "Yes. Open Google Authenticator → menu → Transfer accounts → Export accounts. It produces a QR code containing an otpauth-migration:// URI with all your secrets. Decode that QR (you can use our QR Code Reader tool) to extract each Base32 secret, then paste it here. Useful when migrating from Google Authenticator to Authy, 1Password, or a hardware key.",
      },
      {
        question: "Is this tool RFC 6238 compliant?",
        answer:
          "Yes. The generated codes match the official RFC 6238 reference test vectors exactly (you can verify with the standard test secret '12345678901234567890' and known timestamps). Compatible with every spec-compliant TOTP implementation: GitHub, AWS, Google, Microsoft, Cloudflare, and thousands of others.",
      },
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "AI QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "BIP39 Passphrase Generator", href: "/crypto-tools/bip39-generator" },
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
