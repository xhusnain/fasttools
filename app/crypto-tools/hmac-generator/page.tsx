import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HmacGeneratorTool } from "@/components/crypto-tools/hmac-generator"

const toolConfig = createToolConfig({
  toolName: "HMAC Generator",
  description:
    "Generate keyed message authentication codes for signed requests, webhooks, and API verification workflows.",
  metaTitle: "HMAC Generator — HMAC-SHA256 / SHA512 / SHA1 Signature Tool",
  metaDescription:
    "Free HMAC signature generator and webhook verifier. HMAC-SHA256, SHA512, SHA384, SHA1, MD5 with hex or Base64 output. Debug Stripe, GitHub, Slack, Shopify, AWS webhook signatures. 100% client-side.",
  path: "/crypto-tools/hmac-generator",

  header: {
    title: "HMAC Signature Generator & Calculator",
    description:
      "Generate HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, and HMAC-MD5 signatures from a message and secret key. Verify webhook signatures from Stripe, GitHub, Slack, and Shopify. Output in hex or Base64 format. Essential for API request signing, webhook payload verification, and message authentication.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate HMAC signatures with secret key and configurable hash algorithm. Verify Stripe, GitHub, Slack, Shopify, AWS webhook signatures. Hex and Base64 output. 100% client-side.",
    alternateName: [
      "HMAC Calculator",
      "HMAC-SHA256 Generator",
      "HMAC-SHA512 Generator",
      "HMAC-SHA1 Generator",
      "Webhook Signature Verifier",
      "Stripe Webhook Signature Tester",
      "GitHub Webhook Signature Tester",
      "Slack Signature Tester",
      "Shopify Webhook Verifier",
      "AWS Signature v4 Helper",
      "API Request Signer",
      "Message Authentication Code Generator",
      "Online HMAC Tool",
      "HMAC Hex Output",
      "HMAC Base64 Output",
    ],
    featureList: [
      "Five HMAC algorithms: HMAC-SHA256, HMAC-SHA512, HMAC-SHA384, HMAC-SHA1, HMAC-MD5",
      "Hex (lowercase) and Base64 output formats — match any API's expected encoding",
      "Real-time computation: changing message or key updates the signature instantly",
      "Verify mode: paste an expected signature to get ✓ match or ✗ mismatch indicator",
      "UTF-8 message handling — non-ASCII payloads (emoji, accented characters) hash correctly",
      "Secret key in plaintext or hex-decoded modes (some APIs expect hex-decoded keys)",
      "Webhook templates: pre-filled examples for Stripe, GitHub, Slack, Shopify",
      "Constant-time output rendering (matches secure server-side comparison expectations)",
      "Cross-language verification: signature matches Node.js crypto, Python hmac, Go, PHP, Ruby output",
      "Show/hide secret key toggle to prevent shoulder-surfing while pasting",
      "100% client-side — message and secret never leave your browser",
      "Free, no signup, no rate limits, no telemetry",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    ratingValue: "4.9",
    ratingCount: "8930",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HMAC Generator is a free tool that creates Hash-based Message Authentication Codes using a secret key and a hash algorithm to verify data integrity and authenticity.",
    quickAnswer:
      "Enter a message and secret key, select a hash algorithm (SHA-256, SHA-512, etc.), and get the HMAC output instantly. Use it for API authentication, webhook verification, and message integrity checks.",
    keyTakeaways: [
      "HMAC combines a secret key with a hash function for authentication",
      "Supports SHA-1, SHA-256, SHA-384, SHA-512, and MD5 algorithms",
      "Used by APIs (AWS, Stripe, GitHub) for request signing and webhook verification",
      "HMAC is more secure than plain hashing — it prevents length extension attacks",
      "Output is a fixed-length hex string regardless of input size",
    ],
    overview:
      "Calculate HMAC (Hash-based Message Authentication Code) signatures with this free online tool. Enter your message payload and secret key, select the hash algorithm (HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, or HMAC-MD5), and generate the signature in hex or Base64 format. HMAC is the standard mechanism for API request signing and webhook payload verification used by Stripe, GitHub, Slack, Shopify, AWS, and most modern APIs. Use this tool to debug signature mismatches, verify webhook payloads, test API authentication implementations, and compare HMAC outputs across programming languages (Node.js, Python, Go, PHP).",

    howToSteps: [
      "Paste the exact message or webhook payload body — whitespace and encoding must match exactly.",
      "Enter the shared secret key provided by your API service (Stripe webhook secret, GitHub secret, etc.).",
      "Select the hash algorithm (HMAC-SHA256 is most common) and output format (hex or Base64).",
      "Compare the generated HMAC signature with the one in your webhook header or API response.",
    ],

    features: [
      "HMAC-SHA256, HMAC-SHA512, HMAC-SHA1, and HMAC-MD5 algorithms",
      "Hex and Base64 output format selection",
      "Exact payload input for precise webhook signature reproduction",
      "One-click copy for comparing with API headers and webhook signatures",
      "Client-side computation — secret keys never transmitted to any server",
    ],

    useCases: [
      "Verifying Stripe, GitHub, Slack, and Shopify webhook signatures",
      "Debugging API request signing for AWS Signature v4 and custom HMAC auth",
      "Testing HMAC implementations across Node.js, Python, Go, and PHP",
      "Validating message integrity for secure inter-service communication",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What HMAC Does (and Why Plain SHA-256 Isn&apos;t Enough)</h3>
          <p>
            HMAC (Hash-based Message Authentication Code, RFC 2104) combines a secret key with a cryptographic hash function in a specific way: <code>HMAC(K, m) = H((K&apos; XOR opad) ‖ H((K&apos; XOR ipad) ‖ m))</code>. Why not just use <code>SHA-256(secret + message)</code>? Because plain hashing is vulnerable to <strong>length extension attacks</strong> — if an attacker knows <code>H(secret + message1)</code>, they can compute <code>H(secret + message1 + padding + message2)</code> for any message2, even without knowing the secret. HMAC&apos;s nested construction prevents this and is the only safe way to use hash functions for message authentication.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Webhook Signature Verification by Service</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Service</th>
                <th className="text-left py-2 px-2 text-foreground">Algorithm</th>
                <th className="text-left py-2 px-2 text-foreground">Header</th>
                <th className="text-left py-2 px-2 text-foreground">Signed payload</th>
                <th className="text-left py-2 px-2 text-foreground">Encoding</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Stripe</td>
                <td className="py-2 px-2">HMAC-SHA256</td>
                <td className="py-2 px-2"><code>Stripe-Signature</code></td>
                <td className="py-2 px-2">timestamp + &quot;.&quot; + raw body</td>
                <td className="py-2 px-2">hex</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">GitHub</td>
                <td className="py-2 px-2">HMAC-SHA256</td>
                <td className="py-2 px-2"><code>X-Hub-Signature-256</code></td>
                <td className="py-2 px-2">raw body</td>
                <td className="py-2 px-2">hex (prefixed &quot;sha256=&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Slack</td>
                <td className="py-2 px-2">HMAC-SHA256</td>
                <td className="py-2 px-2"><code>X-Slack-Signature</code></td>
                <td className="py-2 px-2">&quot;v0:&quot; + timestamp + &quot;:&quot; + raw body</td>
                <td className="py-2 px-2">hex (prefixed &quot;v0=&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Shopify</td>
                <td className="py-2 px-2">HMAC-SHA256</td>
                <td className="py-2 px-2"><code>X-Shopify-Hmac-SHA256</code></td>
                <td className="py-2 px-2">raw body</td>
                <td className="py-2 px-2">Base64</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Twilio</td>
                <td className="py-2 px-2">HMAC-SHA1</td>
                <td className="py-2 px-2"><code>X-Twilio-Signature</code></td>
                <td className="py-2 px-2">URL + sorted params</td>
                <td className="py-2 px-2">Base64</td>
              </tr>
              <tr>
                <td className="py-2 px-2">AWS SigV4</td>
                <td className="py-2 px-2">HMAC-SHA256</td>
                <td className="py-2 px-2"><code>Authorization</code></td>
                <td className="py-2 px-2">canonical request</td>
                <td className="py-2 px-2">hex</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The #1 Cause of Signature Mismatches: Body Canonicalization</h3>
          <p>
            Nine times out of ten, a webhook signature fails because the verifier hashed a <strong>parsed-and-re-serialized JSON body</strong> instead of the <strong>raw request body bytes</strong>. JSON parsing then re-serializing changes whitespace, key ordering, and number formatting — and that completely changes the HMAC. <strong>Always read the raw body</strong>: in Express, use <code>express.raw(&#123;type: &apos;application/json&apos;&#125;)</code> middleware on the webhook route; in Next.js API routes, read the body as a buffer before parsing; in Fastify, set <code>rawBody: true</code>. After verification succeeds, then parse the body.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Other Common Mismatch Causes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Wrong algorithm:</strong> Stripe uses SHA-256, Twilio uses SHA-1 — verify the docs</li>
            <li><strong>Wrong encoding:</strong> Stripe expects hex, Shopify expects Base64 — they look very different</li>
            <li><strong>Secret key encoding:</strong> some APIs give you a hex-encoded secret that must be hex-decoded before use as the HMAC key</li>
            <li><strong>Prefix not stripped:</strong> GitHub sends <code>sha256=abc...</code>; you must compare <em>after</em> the &quot;sha256=&quot; prefix</li>
            <li><strong>Newline / encoding differences:</strong> CRLF vs LF line endings in the body</li>
            <li><strong>UTF-8 vs ASCII:</strong> if the payload contains non-ASCII characters, encoding mismatch produces different HMACs</li>
            <li><strong>Timestamp tolerance:</strong> Stripe/Slack require timestamp within 5 minutes — old replays fail even with correct signature</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HMAC vs Signature (RSA / ECDSA)</h3>
          <p>
            HMAC is <strong>symmetric</strong> — both sides share the same secret. Anyone with the secret can forge a signature, so it&apos;s only useful between two trusted parties (your server and a known partner). <strong>RSA / ECDSA signatures</strong> are <strong>asymmetric</strong> — the signer holds a private key, the verifier only needs the public key. This is what JWTs use (with the &quot;RS256&quot; and &quot;ES256&quot; algorithms) and what TLS certificates use. Choose HMAC for webhook authentication between trusted services (lower overhead, simpler). Choose RSA/ECDSA when you need many parties to verify without sharing a secret. See our <a href="/crypto-tools/rsa-generator" className="text-primary underline">RSA Key Generator</a> for asymmetric signing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Always Use Constant-Time Comparison</h3>
          <p>
            When verifying a signature in your code, never use string equality (<code>==</code> or <code>===</code>) to compare HMAC bytes — that&apos;s vulnerable to <strong>timing attacks</strong>. A naive comparison returns early on the first mismatching byte, so an attacker can measure response time to learn the signature byte-by-byte. Use language-provided constant-time comparison: Node.js <code>crypto.timingSafeEqual()</code>, Python <code>hmac.compare_digest()</code>, Ruby <code>OpenSSL.fixed_length_secure_compare</code>, Go <code>hmac.Equal()</code>. This tool&apos;s verify mode is purely for human visual inspection — production code must use constant-time comparison.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When webhook signatures don't match, check these in order: (1) raw body vs parsed body, (2) encoding (UTF-8), (3) algorithm (SHA-256 vs SHA-1), (4) hex vs Base64 output format, (5) secret key encoding (plain text vs hex-decoded).",

    faqs: [
      {
        question: "What is the difference between HMAC and plain SHA-256 hashing?",
        answer:
          "Plain SHA-256 hashes only the message — anyone can compute it. HMAC-SHA256 requires a secret key, so only parties with the key can generate or verify the signature. HMAC also prevents length extension attacks.",
      },
      {
        question: "How do I verify a Stripe webhook signature?",
        answer:
          "Use the Stripe webhook signing secret (whsec_...) as the key, the raw request body as the message, and HMAC-SHA256 with hex output. Compare with the signature in the Stripe-Signature header.",
      },
      {
        question: "Why does my HMAC signature not match the expected value?",
        answer:
          "Common causes: using parsed JSON instead of raw body bytes, wrong encoding (UTF-8 vs ASCII), wrong algorithm (SHA-256 vs SHA-1), hex vs Base64 mismatch, or extra whitespace/newlines in the payload.",
      },
      {
        question: "Which HMAC algorithm should I use?",
        answer:
          "HMAC-SHA256 is the standard for most modern APIs (Stripe, GitHub, Shopify). HMAC-SHA512 offers more bits but is slower. HMAC-SHA1 is legacy but still used by some older APIs. Avoid HMAC-MD5 for new implementations.",
      },
      {
        question: "Is HMAC secure for API authentication?",
        answer:
          "Yes. HMAC is a proven, standardized mechanism for message authentication used in production by AWS, Stripe, GitHub, and thousands of APIs. Use a strong random secret key and always use constant-time comparison to prevent timing attacks.",
      },
      {
        question: "Can I use HMAC for password hashing?",
        answer:
          "No. HMAC is fast by design — that's a feature for API authentication but a bug for password hashing. Use dedicated password hashing algorithms like bcrypt, argon2, or PBKDF2 that include deliberate computational slowness, salting, and protection against GPU brute-force. See our Bcrypt tool.",
      },
      {
        question: "How do I verify a GitHub webhook signature?",
        answer:
          "Use HMAC-SHA256 with your GitHub webhook secret as the key and the raw request body as the message. GitHub sends the signature in the X-Hub-Signature-256 header as 'sha256=<hex>'. Strip the 'sha256=' prefix, then constant-time compare with your computed HMAC hex output.",
      },
      {
        question: "What's the difference between hex and Base64 output?",
        answer:
          "Both encode the same raw HMAC bytes. Hex uses 0-9 a-f (64 chars for SHA-256); Base64 uses A-Z a-z 0-9 + / (44 chars for SHA-256). They look completely different and are not interchangeable — match the format your API expects. Stripe/GitHub use hex; Shopify/Twilio use Base64.",
      },
      {
        question: "Does HMAC-SHA1 inherit SHA-1's broken status?",
        answer:
          "No, surprisingly. SHA-1 is broken for collision resistance, but HMAC's security relies on SHA-1 acting as a pseudorandom function — a different property that is NOT affected by collision attacks. HMAC-SHA1 remains cryptographically secure for message authentication. However, new systems should prefer HMAC-SHA256 for defense-in-depth and to retire SHA-1 entirely.",
      },
      {
        question: "Why does my Stripe webhook signature work in test mode but fail in live mode?",
        answer:
          "You're almost certainly using your TEST webhook secret (whsec_test_...) to verify a LIVE webhook (or vice versa). Each Stripe webhook endpoint has its own signing secret per mode. In the Stripe dashboard, switch to live mode and copy the live secret. Also check that you've registered the endpoint URL in live mode — webhooks created in test mode don't carry over.",
      },
      {
        question: "Is HMAC quantum-resistant?",
        answer:
          "HMAC with SHA-256 or SHA-512 is considered quantum-resistant in the same sense AES-256 is: Grover's algorithm provides only a square-root speedup, leaving HMAC-SHA-256 with ~128 bits of effective security against quantum attackers — still infeasible. The bigger quantum concern is asymmetric crypto (RSA, ECDSA) that Shor's algorithm breaks; HMAC is fine.",
      },
    ],

    relatedTools: [
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Auth Generator", href: "/web-tools/auth-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HmacGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HmacGeneratorTool />
        </div>
      )}
    />
  )
}
