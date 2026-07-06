import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HashText } from "@/components/crypto-tools/hash-text"

const toolConfig = createToolConfig({
  toolName: "Hash Text Generator",
  description:
    "Generate cryptographic hashes from text with common digest algorithms for integrity and verification workflows.",
  metaTitle: "Hash Generator — MD5, SHA-1, SHA-256, SHA-384, SHA-512 Online",
  metaDescription:
    "Free hash generator. MD5, SHA-1, SHA-256, SHA-384, SHA-512 digests in hex from any text. Real-time, 100% client-side via Web Crypto API. Compare hashes for integrity, webhook signatures, checksums.",
  path: "/crypto-tools/hash-text",

  header: {
    title: "Online Hash Generator — MD5, SHA-256, SHA-512",
    description:
      "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes from any text input. Compare hash digests for data integrity verification, checksum validation, and security workflows. All hashing runs locally in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Hash Text", href: "/crypto-tools/hash-text" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate cryptographic text hashes (MD5, SHA-1, SHA-256, SHA-384, SHA-512) in hex format. Real-time computation via Web Crypto API. 100% client-side.",
    alternateName: [
      "SHA-256 Generator",
      "SHA-512 Generator",
      "MD5 Generator",
      "SHA-1 Generator",
      "SHA-384 Generator",
      "Online Hash Calculator",
      "Text Digest Generator",
      "Checksum Generator",
      "Hash Function Tool",
      "Webhook Signature Debugger",
      "File Hash Verifier",
      "MD5 Online",
      "SHA256 Online",
      "Crypto Hash Tool",
      "One-Way Hash Tool",
    ],
    featureList: [
      "Five hash algorithms: MD5, SHA-1, SHA-256, SHA-384, SHA-512 — all in parallel",
      "Real-time computation: every keystroke regenerates all five digests instantly",
      "Hexadecimal output (lowercase) — matches OpenSSL, Node.js crypto, Python hashlib output",
      "One-click copy per algorithm — paste straight into Postman, curl, or test fixtures",
      "Compare-mode: paste an expected hash to see ✓ match or ✗ mismatch indicator",
      "UTF-8 input handling — emoji and non-ASCII text hash correctly",
      "Cross-language verification: hash matches Python, Node.js, Go, Ruby, PHP, Java output",
      "Hex character count shown — instant verification of digest length (MD5=32, SHA-256=64)",
      "Web Crypto API for SHA family (browser-native, fast); pure-JS MD5 / SHA-1 for legacy",
      "Empty-string hash shortcut (useful for HMAC zero-length verification)",
      "100% client-side — your text never leaves your browser",
      "Free, no signup, no rate limit",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Hash Text Tool is a free tool that generates cryptographic hash values (MD5, SHA-1, SHA-256, SHA-512) from any text input for integrity verification and checksums.",
    quickAnswer:
      "Enter text and select a hash algorithm to instantly generate the hash digest. Compare hashes to verify data integrity. Supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512.",
    keyTakeaways: [
      "Generates MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes",
      "Hash functions are one-way — you cannot reverse a hash to get the original text",
      "SHA-256 produces a 64-character hex string from any input",
      "MD5 and SHA-1 are considered weak — use SHA-256 or SHA-512 for security",
      "Same input always produces the same hash (deterministic)",
    ],
    overview:
      "Generate cryptographic hashes from any text with this free online hash generator. Supports all major hash algorithms: MD5 (128-bit), SHA-1 (160-bit), SHA-256 (256-bit), SHA-384 (384-bit), and SHA-512 (512-bit). Type or paste text to instantly see the hash digest in hexadecimal format. Use hash values for data integrity verification, checksum comparison, password hashing preparation, webhook signature debugging, and API authentication testing. SHA-256 produces a 64-character hex string and is the recommended algorithm for new projects. All hashing runs locally in your browser — your text is never sent to any server.",

    howToSteps: [
      "Enter or paste the text you want to hash into the input field.",
      "Select the hash algorithm — SHA-256 recommended for most use cases.",
      "View the generated hash digest in hexadecimal format instantly.",
      "Copy the hash value for use in checksums, API signatures, or integrity verification.",
    ],

    features: [
      "MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hash algorithms",
      "Real-time hash generation as you type",
      "Hexadecimal output format for all algorithms",
      "One-click copy for quick integration into code and configs",
      "Client-side hashing — no data transmitted to servers",
    ],

    useCases: [
      "Generating checksums for file and content integrity verification",
      "Creating hash digests for API webhook signature debugging",
      "Comparing SHA-256 hashes across different programming languages",
      "Preparing password hash inputs for bcrypt or PBKDF2 workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a Cryptographic Hash?</h3>
          <p>
            A cryptographic hash function is a one-way transformation: it takes input of any size and produces a fixed-length output (the <em>digest</em>) such that (1) the same input always produces the same digest — <strong>deterministic</strong>; (2) even a single character change in the input produces a completely different digest — <strong>avalanche effect</strong>; (3) it&apos;s computationally infeasible to find an input that produces a specific digest — <strong>preimage resistance</strong>; and (4) it&apos;s infeasible to find two inputs that produce the same digest — <strong>collision resistance</strong>. Unlike encryption, hashing does not use a key and cannot be reversed to recover the original text.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Algorithm Comparison</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Algorithm</th>
                <th className="text-left py-2 px-2 text-foreground">Digest size</th>
                <th className="text-left py-2 px-2 text-foreground">Hex length</th>
                <th className="text-left py-2 px-2 text-foreground">Security status</th>
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">MD5</td>
                <td className="py-2 px-2">128 bits</td>
                <td className="py-2 px-2">32 chars</td>
                <td className="py-2 px-2 text-red-500">Broken (collisions)</td>
                <td className="py-2 px-2">Non-security checksums only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">SHA-1</td>
                <td className="py-2 px-2">160 bits</td>
                <td className="py-2 px-2">40 chars</td>
                <td className="py-2 px-2 text-red-500">Deprecated (SHAttered 2017)</td>
                <td className="py-2 px-2">Legacy systems (Git, old TLS)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">SHA-256</td>
                <td className="py-2 px-2">256 bits</td>
                <td className="py-2 px-2">64 chars</td>
                <td className="py-2 px-2 text-green-500">Secure</td>
                <td className="py-2 px-2">Default for new systems, Bitcoin, TLS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">SHA-384</td>
                <td className="py-2 px-2">384 bits</td>
                <td className="py-2 px-2">96 chars</td>
                <td className="py-2 px-2 text-green-500">Secure</td>
                <td className="py-2 px-2">TLS 1.3 cipher suites</td>
              </tr>
              <tr>
                <td className="py-2 px-2">SHA-512</td>
                <td className="py-2 px-2">512 bits</td>
                <td className="py-2 px-2">128 chars</td>
                <td className="py-2 px-2 text-green-500">Secure</td>
                <td className="py-2 px-2">Long-term integrity, post-quantum-margin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>File integrity verification:</strong> compare published SHA-256 against your local computation when downloading software (Linux ISOs, Docker images, open-source binaries)</li>
            <li><strong>Webhook signature debugging:</strong> Stripe, Slack, GitHub use HMAC-SHA256; hash the raw payload locally to verify signatures</li>
            <li><strong>API content addressing:</strong> derive cache keys, S3 ETags, IPFS CIDs by hashing payloads</li>
            <li><strong>Git commit / object IDs:</strong> Git uses SHA-1 (transitioning to SHA-256); hash a blob to verify content</li>
            <li><strong>Password reset tokens:</strong> hash a secret + email + timestamp to produce non-guessable one-time tokens</li>
            <li><strong>Deduplication:</strong> store one copy of identical content addressed by its hash</li>
            <li><strong>Blockchain:</strong> Bitcoin uses double-SHA-256 for block hashes; Ethereum uses Keccak-256</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why MD5 and SHA-1 Are Broken</h3>
          <p>
            In 2004, Wang et al. demonstrated <strong>practical MD5 collisions</strong> (two different inputs producing the same digest); by 2008, researchers forged a fake SSL certificate using an MD5 collision. In February 2017, Google&apos;s <strong>SHAttered attack</strong> produced the first practical SHA-1 collision, costing roughly 6,500 CPU-years (or several weeks of GPU compute). Once a collision is feasible, an attacker can substitute malicious content with the same hash as legitimate content — breaking digital signatures, certificate trust, and integrity checks. <strong>SHA-256 and SHA-512 remain unbroken</strong> after 20+ years of cryptanalysis. <strong>MD5 and SHA-1 are still safe</strong> as non-security checksums (download integrity against accidental corruption) but should never be used in security contexts.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Don&apos;t Use Plain Hashes for Passwords</h3>
          <p>
            A common mistake: storing user passwords as <code>SHA-256(password)</code>. This is <strong>not safe</strong>. SHA-256 is designed to be fast — an attacker with a leaked database can compute billions of guesses per second on a GPU. Use a <strong>slow, salted password hashing function</strong> instead: <strong>bcrypt</strong> (battle-tested, ~10-12 ms per hash), <strong>argon2</strong> (modern winner of the 2015 Password Hashing Competition), or <strong>PBKDF2</strong> (FIPS-approved). See our <a href="/crypto-tools/bcrypt" className="text-primary underline">Bcrypt Generator</a> for password hashing.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For security-sensitive applications (signatures, integrity, content addressing), always use SHA-256 or SHA-512. MD5 and SHA-1 are fine for non-security checksums (file download verification, dedup keys, cache keys). Never use plain SHA hashes for passwords — use bcrypt or argon2. When debugging webhook signatures (Stripe, Slack, GitHub), make sure you hash the RAW request body, not the parsed JSON — JSON re-serialization changes whitespace and breaks the signature.",

    faqs: [
      {
        question: "What is the difference between MD5, SHA-1, and SHA-256?",
        answer:
          "MD5 produces a 128-bit (32-char) hash, SHA-1 produces 160-bit (40-char), and SHA-256 produces 256-bit (64-char). MD5 and SHA-1 have known collision vulnerabilities; SHA-256 is recommended for security.",
      },
      {
        question: "Is hashing the same as encryption?",
        answer:
          "No. Hashing is a one-way function — you cannot recover the original text from a hash. Encryption is reversible with the correct key.",
      },
      {
        question: "Can I reverse a SHA-256 hash to get the original text?",
        answer:
          "No. Cryptographic hashes are designed to be irreversible. You can only verify by hashing the same input and comparing results.",
      },
      {
        question: "Why does changing one character completely change the hash?",
        answer:
          "This is called the avalanche effect — a core property of secure hash functions. Even adding a space or changing case produces a completely different digest.",
      },
      {
        question: "Is MD5 still safe to use?",
        answer:
          "MD5 is broken for security purposes (collision attacks exist). It is still used for non-security checksums like file download verification, but use SHA-256 for anything security-related.",
      },
      {
        question: "Which hash algorithm should I use for passwords?",
        answer:
          "Do not use plain SHA-256 or MD5 for passwords. Use dedicated password hashing algorithms like bcrypt, Argon2, or PBKDF2 that include salting and configurable work factors.",
      },
      {
        question: "Is my text sent to a server when I generate a hash?",
        answer:
          "No. All hashing runs locally in your browser using the Web Crypto API (for SHA family) or in-page JavaScript (for MD5). Your text never leaves your device. You can verify zero network calls in DevTools → Network.",
      },
      {
        question: "Will the hash here match what Node.js / Python / OpenSSL produces?",
        answer:
          "Yes — exactly. The output is standard lowercase hexadecimal. SHA-256('hello') = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824 — identical in this tool, in `openssl dgst -sha256`, in Node.js `crypto.createHash('sha256').update('hello').digest('hex')`, and in Python `hashlib.sha256(b'hello').hexdigest()`.",
      },
      {
        question: "Why are my hashes different when I add a newline at the end?",
        answer:
          "Because a newline is part of the input. SHA-256('hello') and SHA-256('hello\\n') are completely different. This trips up developers who compare a hash from `echo hello | sha256sum` (which adds a trailing newline) with a hash from a string literal in code. Use `echo -n hello | sha256sum` or `printf hello | sha256sum` to exclude the newline.",
      },
      {
        question: "Can I hash a file with this tool?",
        answer:
          "This tool hashes text input. For file hashing, use `sha256sum file.iso` on Linux/Mac, `Get-FileHash file.iso` in PowerShell, or `certutil -hashfile file.iso SHA256` on Windows. The output is the same hex digest format — you can paste it here in compare-mode to verify integrity.",
      },
      {
        question: "How long is a SHA-256 hash?",
        answer:
          "SHA-256 produces a 256-bit digest, which is 32 bytes, displayed as 64 hexadecimal characters (since each hex char = 4 bits). Other lengths: MD5 = 32 hex chars, SHA-1 = 40 chars, SHA-384 = 96 chars, SHA-512 = 128 chars. If your hash isn't exactly one of these lengths, something is wrong (encoding mismatch, truncation, or wrong algorithm).",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HashTextPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HashText />
        </div>
      )}
    />
  )
}
