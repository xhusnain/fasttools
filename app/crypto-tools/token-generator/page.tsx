import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { TokenGenerator } from "@/components/crypto-tools/token-generator"

const toolConfig = createToolConfig({
  toolName: "Token Generator",
  description:
    "Generate random tokens, API keys, passwords, and formatted secrets with configurable settings.",
  metaTitle: "Random Token & API Key Generator — Hex, Base64, Base64URL",
  metaDescription:
    "Free cryptographic random token generator. API keys, session tokens, CSRF tokens, webhook secrets, .env values. Hex, Base64, Base64URL, alphanumeric output (16–256 chars). Optional prefixes (sk_ / pk_ / api_). 100% client-side.",
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
      "Cryptographically-secure random token generator. Output formats include hex, Base64, Base64URL, and alphanumeric. Length 16–256 chars. Optional prefix/suffix for Stripe-style API key naming. Bulk mode. 100% client-side via Web Crypto API.",
    alternateName: [
      "API Key Generator",
      "Random Token Generator",
      "Secret Key Generator",
      "Session Token Generator",
      "CSRF Token Generator",
      "Webhook Secret Generator",
      "JWT Secret Generator",
      "Bearer Token Generator",
      ".env Secret Generator",
      "Hex Token Generator",
      "Base64 Token Generator",
      "Base64URL Token Generator",
      "Alphanumeric Key Generator",
      "Stripe-style Key Generator",
      "Random Hex String Generator",
    ],
    featureList: [
      "Cryptographically secure via window.crypto.getRandomValues() — never Math.random()",
      "Four output formats: hex (RFC 4648), Base64, Base64URL (URL-safe, no padding), alphanumeric",
      "Custom length: 16, 32, 48, 64, 128, 256 characters or any value in range",
      "Optional prefix / suffix support for naming conventions (sk_, pk_, api_, key_, whsec_)",
      "Bulk mode: generate 1–100 tokens at once for batch provisioning",
      "Entropy display: shows actual bits of randomness in the generated token",
      "Format presets: API key, JWT secret, CSRF token, password reset link, webhook secret",
      "Copy-all-as-newline-separated for .env file bulk paste",
      "Download as .txt for secure distribution via password manager",
      "Tokens are unguessable by attackers — 32 hex chars = 128 bits = uncrackable in any timeframe",
      "100% client-side — tokens never sent to or logged by any server",
      "Free, no signup, no rate limits, no tracking",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    ratingValue: "4.9",
    ratingCount: "12340",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why You Need a CSPRNG, Not Math.random()</h3>
          <p>
            JavaScript&apos;s <code>Math.random()</code> uses a non-cryptographic PRNG (typically xorshift128+ in V8). Its internal state can be reconstructed from a small number of output samples, making it <strong>completely unsafe for security tokens</strong>. In 2018, researchers demonstrated they could predict future Math.random() outputs after observing just 5 values. This tool uses <code>window.crypto.getRandomValues()</code> — the Web Crypto API&apos;s CSPRNG (cryptographically secure pseudo-random number generator) — which draws from OS-level entropy sources (hardware RNG, keyboard timing, mouse movements). This is the same source used by 1Password, Bitwarden, and every major password manager.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Token Length Calibration</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Length (hex)</th>
                <th className="text-left py-2 px-2 text-foreground">Entropy</th>
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">16 hex / 8 bytes</td>
                <td className="py-2 px-2">64 bits</td>
                <td className="py-2 px-2">Short-lived session IDs</td>
                <td className="py-2 px-2">a1b2c3d4e5f67890</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">32 hex / 16 bytes</td>
                <td className="py-2 px-2">128 bits</td>
                <td className="py-2 px-2"><strong>API keys, CSRF tokens (default)</strong></td>
                <td className="py-2 px-2">a1b2…(32 chars)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">48 hex / 24 bytes</td>
                <td className="py-2 px-2">192 bits</td>
                <td className="py-2 px-2">Webhook secrets, JWT HS256 keys</td>
                <td className="py-2 px-2">a1b2…(48 chars)</td>
              </tr>
              <tr>
                <td className="py-2 px-2">64 hex / 32 bytes</td>
                <td className="py-2 px-2">256 bits</td>
                <td className="py-2 px-2">JWT HS512, long-lived signing keys</td>
                <td className="py-2 px-2">a1b2…(64 chars)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Rule of thumb:</strong> 128 bits (32 hex chars) is enough randomness that brute-forcing the token is computationally infeasible. There&apos;s rarely a security reason to exceed 256 bits — it just wastes bytes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">API Key Prefix Conventions</h3>
          <p>
            Modern services prefix API keys so leaked tokens can be detected and revoked quickly. GitHub scans public commits, Stripe scans pastebin sites, and AWS scans cloud-storage buckets — all matching on these prefixes. Following the convention makes your keys discoverable by automated leak-detection systems:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Stripe:</strong> <code>sk_live_</code> (secret), <code>pk_live_</code> (publishable), <code>whsec_</code> (webhook)</li>
            <li><strong>OpenAI:</strong> <code>sk-</code></li>
            <li><strong>GitHub:</strong> <code>ghp_</code> (personal), <code>gho_</code> (OAuth), <code>ghs_</code> (server)</li>
            <li><strong>AWS:</strong> <code>AKIA</code> (access key), <code>ASIA</code> (temp credential)</li>
            <li><strong>Google Cloud:</strong> <code>AIza</code></li>
            <li><strong>Slack:</strong> <code>xoxb-</code> (bot), <code>xoxp-</code> (user), <code>xoxa-</code> (workspace)</li>
          </ul>
          <p className="mt-3">
            <strong>Best practice:</strong> use distinguishable prefixes for your service (e.g., <code>acme_sk_live_</code>, <code>acme_pk_test_</code>) so leaked keys are obviously yours and your scanning tools can find them.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Format Selection: Hex vs Base64 vs Base64URL vs Alphanumeric</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Hex (0-9, a-f):</strong> standard for HMAC keys, hash output, low-level crypto. 32 hex chars = 16 bytes = 128 bits. Easy to read aloud.</li>
            <li><strong>Base64 (A-Z, a-z, 0-9, +, /, =):</strong> compact (4 chars per 3 bytes). Used by JWT secrets, X.509 certs, basic auth. <strong>Caveat:</strong> contains <code>/</code> and <code>+</code> which can cause URL/JSON escaping issues.</li>
            <li><strong>Base64URL (A-Z, a-z, 0-9, -, _):</strong> URL-safe variant of Base64. <strong>Use for:</strong> password reset links, magic links, query string tokens, JWT (which uses Base64URL natively).</li>
            <li><strong>Alphanumeric (A-Z, a-z, 0-9):</strong> human-readable. <strong>Use for:</strong> API keys shared verbally, license keys, invitation codes. Slightly less efficient: ~5.95 bits per char vs 6 for Base64.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Where to Store Generated Tokens</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Local dev:</strong> <code>.env</code> file in repo root (always in <code>.gitignore</code>)</li>
            <li><strong>CI/CD:</strong> GitHub Actions Secrets, GitLab CI/CD Variables, CircleCI Contexts</li>
            <li><strong>Cloud apps:</strong> AWS Secrets Manager, AWS Parameter Store, GCP Secret Manager, Azure Key Vault</li>
            <li><strong>Multi-cloud / self-hosted:</strong> HashiCorp Vault, Doppler, 1Password Secrets Automation, Infisical</li>
            <li><strong>Container runtimes:</strong> Kubernetes Secrets, Docker Swarm secrets (encrypted at rest in etcd)</li>
            <li><strong>Personal scripts:</strong> macOS Keychain, GNOME Keyring, Windows Credential Manager, password manager CLI</li>
          </ul>
          <p className="mt-3">
            <strong>Never:</strong> commit secrets to Git (even private repos), hardcode in client-side JS, send through Slack/email/JIRA in plaintext, store in browser localStorage.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Rotation and Revocation Strategy</h3>
          <p>
            Plan for compromise from day one. Every secret should have: (1) a known location for rotation (which key in which secrets manager), (2) a rotation procedure (regenerate, deploy new, retire old after grace period), (3) audit logging on access, and (4) automatic expiry where possible. For high-value secrets (production database passwords, root API keys), rotate quarterly. For session tokens and short-lived secrets, expire and re-issue automatically. After a known leak, rotate immediately and audit logs for any anomalous use of the old key.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Default to 32-char hex tokens (128 bits of entropy) for API keys — enough randomness that brute-force is impossible. Add a service prefix (e.g., 'acme_sk_live_') so leaked keys are recognizable by automated scanners (GitHub, Stripe, AWS all watch for known prefixes). Store generated tokens in AWS Secrets Manager / HashiCorp Vault / Doppler — never commit to Git. For tokens that go in URLs (password reset, magic link), use Base64URL — it's URL-safe out of the box.",

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
          "Yes. Use bulk mode to create up to 100 unique tokens at once for provisioning multiple API keys, test accounts, microservices, or environment configs simultaneously. Copy all as newline-separated for direct paste into a .env file, or download as .txt for secure distribution via password manager.",
      },
      {
        question: "Does this work for JWT secret keys?",
        answer:
          "Yes. For HS256 (HMAC-SHA-256) JWT secrets, use 32 bytes / 256 bits — generate a 64-char hex or 44-char Base64URL token. For HS512, use 64 bytes / 512 bits — 128-char hex or 88-char Base64URL. JWT libraries decode these formats automatically. For RS256 (asymmetric), use our RSA Generator instead.",
      },
      {
        question: "Is 16 characters enough for an API key?",
        answer:
          "16 hex chars = 64 bits of entropy. For long-lived API keys, that's marginally OK but not great — attackers with extensive compute could theoretically brute-force given enough time. Use at least 32 hex chars (128 bits) for production API keys. 16 chars is acceptable for short-lived (under 1 hour) session tokens where revocation is fast.",
      },
      {
        question: "Should I hash API keys before storing in the database?",
        answer:
          "Yes — hash with SHA-256 before storing (no salt needed since the key itself is high-entropy random). On API requests, hash the provided key and look up the hashed value in your database. This way, a database leak doesn't expose live API keys. Show the raw key to the user ONCE at creation time; never display it again. This is how Stripe, GitHub, and AWS handle API keys.",
      },
      {
        question: "What's the difference between a token and a password?",
        answer:
          "Tokens are high-entropy machine-generated (typically 128+ bits) and don't need to be memorized; passwords are user-chosen and typically have far less entropy (~30 bits). Tokens don't need slow hashing like bcrypt — fast SHA-256 is sufficient since they're already unguessable. Passwords need bcrypt/argon2 to slow brute-force attacks. Different threats, different mitigations.",
      },
    ],

    relatedTools: [
      { name: "TOTP QR Code Generator", href: "/crypto-tools/totp-qr-code-generator" },
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
