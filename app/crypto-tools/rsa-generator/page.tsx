import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { RsaGeneratorTool } from "@/components/crypto-tools/rsa-generator"

const toolConfig = createToolConfig({
  toolName: "RSA Key Pair Generator",
  description:
    "Generate RSA public/private key pairs for encryption, signing, and interoperability testing.",
  metaTitle: "RSA Key Pair Generator — 2048 / 3072 / 4096-bit Keys in PEM",
  metaDescription:
    "Free RSA key pair generator. Create 2048, 3072, or 4096-bit RSA public + private keys in PEM (PKCS#8 / SPKI) format for JWT RS256, SSH, TLS, S/MIME. Browser-native via Web Crypto API — private key never leaves your device.",
  path: "/crypto-tools/rsa-generator",

  header: {
    title: "RSA Key Pair Generator — Public & Private Keys",
    description:
      "Generate RSA public and private key pairs in standard PEM format (PKCS#8). Choose 2048-bit or 4096-bit key size for JWT RS256 signing, SSH authentication, TLS/SSL certificates, and file encryption. Keys are generated in your browser using the Web Crypto API — private keys never leave your machine.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate RSA key pairs (2048 / 3072 / 4096 bit) in PEM format (PKCS#8 private + SPKI public). Browser-native via Web Crypto API. 100% client-side, private key never transmitted.",
    alternateName: [
      "RSA Key Generator",
      "Public Private Key Generator",
      "RSA 4096 Generator",
      "PEM Key Generator",
      "JWT RS256 Key Generator",
    ],
    featureList: [
      "Three key sizes: 2048-bit (standard), 3072-bit (NIST recommended), 4096-bit (high-security)",
      "Standard PEM output — PKCS#8 for private, SPKI (X.509 SubjectPublicKeyInfo) for public",
      "Works with OpenSSL, Node.js crypto, Python cryptography, Java JCA, Go crypto/rsa, and JWT RS256 libraries",
      "Web Crypto API generation with public exponent fixed to F4 (65537)",
      "One-click copy and download as private.pem / public.pem",
      "Browser-only generation — the private key never leaves memory or reaches a server",
      "Free, no signup, no rate limits, no tracking",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support (Chrome, Edge, Safari, Firefox)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An RSA Key Generator is a free tool that creates RSA public/private key pairs in PEM format for use in encryption, digital signatures, and SSH authentication.",
    quickAnswer:
      "Select a key size (2048 or 4096 bits) and click generate. Download the public and private keys in PEM format. Use them for SSH, TLS certificates, JWT signing, or file encryption.",
    keyTakeaways: [
      "Generates RSA key pairs in standard PEM format",
      "Supports 2048-bit and 4096-bit key sizes",
      "2048-bit is the minimum recommended for security",
      "4096-bit provides stronger security but slower operations",
      "Keys are generated in your browser — private key never leaves your machine",
    ],
    overview:
      "Generate an RSA key pair online at 2048, 3072, or 4096-bit strength, output in standard PEM format (PKCS#8 private, SPKI public). Common uses include JWT RS256/RS512 signing, TLS certificates for development, and S/MIME. The public key encrypts and verifies; the private key decrypts and signs. Generation happens entirely in your browser through the Web Crypto API — the private key is never transmitted anywhere. Copy or download both halves for use with OpenSSL, Node.js, Python, Java, or Go.",

    howToSteps: [
      "Select key size: 2048-bit (standard) or 4096-bit (higher security, slower operations).",
      "Click Generate to create the RSA key pair in PEM format.",
      "Copy the public key for sharing and the private key for secure storage.",
      "Use the keys in your JWT signing, SSH config, TLS setup, or encryption workflow.",
    ],

    features: [
      "2048-bit and 4096-bit RSA key pair generation",
      "Standard PEM format output (PKCS#8) compatible with OpenSSL",
      "Separate public key (SPKI) and private key (PKCS#8) display",
      "Browser-based generation via Web Crypto API — private key never leaves your device",
      "One-click copy for quick integration into code, configs, and .pem files",
    ],

    useCases: [
      "Generating RSA keys for JWT RS256 token signing in authentication systems",
      "Creating SSH key pairs for server access and Git authentication",
      "Generating test certificates for TLS/SSL development and staging environments",
      "Testing RSA encryption and decryption across Node.js, Python, and Java implementations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What RSA Is and Why It&apos;s Still Everywhere</h3>
          <p>
            RSA (Rivest–Shamir–Adleman, published 1977) is the original practical public-key cryptosystem. Its security comes from the mathematical difficulty of <strong>factoring large semi-prime numbers</strong> — given <code>n = p × q</code> where p and q are large primes, recovering p and q from n is currently believed to require sub-exponential time. RSA still dominates TLS certificate signing, JWT RS256 tokens, S/MIME email encryption, and SSH keys despite slower competitors emerging. <strong>Why it persists:</strong> universal library support, decades of cryptanalysis without practical breaks, hardware acceleration in modern CPUs, and a mature ecosystem of PKI tooling.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Key Size Selection</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Key size</th>
                <th className="text-left py-2 px-2 text-foreground">Security bits</th>
                <th className="text-left py-2 px-2 text-foreground">NIST status</th>
                <th className="text-left py-2 px-2 text-foreground">Typical use</th>
                <th className="text-left py-2 px-2 text-foreground">Relative speed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">1024-bit</td>
                <td className="py-2 px-2">~80 bits</td>
                <td className="py-2 px-2 text-red-500">Deprecated (since 2014)</td>
                <td className="py-2 px-2">Legacy only — do not use</td>
                <td className="py-2 px-2">Fast</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">2048-bit</td>
                <td className="py-2 px-2">~112 bits</td>
                <td className="py-2 px-2 text-green-500">Acceptable through 2030</td>
                <td className="py-2 px-2">JWT, TLS, most APIs</td>
                <td className="py-2 px-2">Baseline</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">3072-bit</td>
                <td className="py-2 px-2">~128 bits</td>
                <td className="py-2 px-2 text-green-500">Recommended for new systems</td>
                <td className="py-2 px-2">Long-lived signing keys</td>
                <td className="py-2 px-2">~2× slower</td>
              </tr>
              <tr>
                <td className="py-2 px-2">4096-bit</td>
                <td className="py-2 px-2">~140 bits</td>
                <td className="py-2 px-2 text-green-500">High-security future-proofing</td>
                <td className="py-2 px-2">Root CAs, long-term archive</td>
                <td className="py-2 px-2">~4× slower</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Recommendation:</strong> 2048-bit is the right default for almost everyone — fast enough for per-request signing, secure through at least 2030. Choose 3072 or 4096 for keys that will be deployed for 10+ years (root CAs, long-lived TLS certs) or where compliance policy demands it.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">PKCS#8 vs PKCS#1 vs OpenSSH Format</h3>
          <p>
            The tool outputs <strong>PKCS#8</strong> (private) and <strong>SPKI</strong> (public), the modern standards used by every current cryptographic library. The keys begin with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><code>-----BEGIN PRIVATE KEY-----</code> = PKCS#8 (this tool&apos;s output, also <code>openssl genpkey</code>&apos;s default)</li>
            <li><code>-----BEGIN RSA PRIVATE KEY-----</code> = PKCS#1 (older <code>openssl genrsa</code> output)</li>
            <li><code>-----BEGIN OPENSSH PRIVATE KEY-----</code> = OpenSSH proprietary, used by ssh-keygen</li>
            <li><code>-----BEGIN PUBLIC KEY-----</code> = SPKI (this tool&apos;s public output)</li>
            <li><code>-----BEGIN RSA PUBLIC KEY-----</code> = PKCS#1 public</li>
          </ul>
          <p className="mt-3">
            Convert between formats with OpenSSL: <code>openssl rsa -in pkcs8.pem -traditional -out pkcs1.pem</code> (PKCS#8 → PKCS#1) or <code>ssh-keygen -p -m PEM -f id_rsa</code> (OpenSSH → PEM).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">RSA vs Ed25519 / ECDSA — When to Choose Which</h3>
          <p>
            <strong>Ed25519</strong> (Edwards curve, RFC 8032) is the modern default for SSH keys and is increasingly preferred for new signing applications. A 256-bit Ed25519 key provides ~128 bits of security (equivalent to RSA-3072) with much smaller signatures (64 bytes vs 384 for RSA-3072) and faster operations.{" "}
            <strong>ECDSA P-256</strong> is the NIST-approved elliptic-curve alternative, used in TLS 1.3 cipher suites and JWT ES256.{" "}
            <strong>When to choose RSA:</strong> when interoperating with legacy systems, when you need encryption (RSA-OAEP) in addition to signing, when your platform mandates RSA (some government / banking systems), or when JWT compatibility requires RS256.{" "}
            <strong>When to choose Ed25519 / ECDSA:</strong> new SSH keys, modern TLS, performance-sensitive signing, embedded devices, anywhere &quot;new green-field&quot; applies.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Production Key Management</h3>
          <p>
            Keys generated in any browser tool — including this one — are <strong>fine for development, JWT signing in non-critical apps, and learning</strong>. For production keys protecting payments, user data, infrastructure access, or compliance-sensitive workloads, use:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Cloud KMS:</strong> AWS KMS, Google Cloud KMS, Azure Key Vault — keys never leave the KMS</li>
            <li><strong>Hardware Security Modules (HSMs):</strong> AWS CloudHSM, YubiHSM, Thales</li>
            <li><strong>Secrets managers:</strong> HashiCorp Vault, AWS Secrets Manager, Doppler</li>
            <li><strong>Never commit private keys to Git.</strong> Use <code>git-secrets</code> pre-commit hooks or scan with TruffleHog</li>
            <li><strong>Rotate signing keys</strong> per your policy — typically every 1–2 years; immediately on suspected compromise</li>
            <li><strong>Restrict file permissions</strong> for private keys: <code>chmod 600 private.pem</code></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Quantum Computing Caveat</h3>
          <p>
            A sufficiently large quantum computer running <strong>Shor&apos;s algorithm</strong> could factor RSA keys in polynomial time, breaking RSA entirely. As of today, no such computer exists, and credible estimates place practical attacks at least 10–15 years away. <strong>For high-stakes long-term secrets</strong> (intelligence, multi-decade legal documents), the &quot;harvest-now-decrypt-later&quot; risk is real — adversaries could store encrypted RSA traffic today and decrypt it once quantum hardware arrives. NIST has standardized post-quantum algorithms (ML-KEM / Kyber, ML-DSA / Dilithium) that you may want to hybrid-deploy alongside RSA for forward secrecy. For typical web app JWT signing or session keys, RSA-2048 is fine for the foreseeable future.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use 2048-bit keys for JWT signing and API authentication (fast enough for per-request signing). Use 4096-bit keys for long-lived TLS certificates and high-security signing requirements. Consider Ed25519 for new SSH key generation — it is faster and more secure than RSA.",

    faqs: [
      {
        question: "Should I use 2048-bit or 4096-bit RSA keys?",
        answer:
          "2048-bit is the minimum recommended by NIST and sufficient for most applications. Use 4096-bit for high-security requirements, long-lived certificates, or when compliance policy requires it. 4096-bit keys are ~4x slower for signing operations.",
      },
      {
        question: "Is it safe to generate RSA keys in a browser?",
        answer:
          "Yes for development and testing. The Web Crypto API provides cryptographically secure key generation. For production keys protecting sensitive data or infrastructure, use dedicated tools like OpenSSL or cloud HSM services.",
      },
      {
        question: "What is the difference between RSA and Ed25519?",
        answer:
          "RSA is older and more widely supported. Ed25519 (elliptic curve) is newer, faster, and provides equivalent security with much smaller keys (256-bit vs 2048-bit). Ed25519 is now preferred for SSH keys; RSA remains standard for TLS and JWT.",
      },
      {
        question: "Why does my private key fail to import in my application?",
        answer:
          "Common causes: wrong key format (PKCS#1 vs PKCS#8), missing BEGIN/END markers, line break differences (CRLF vs LF), or algorithm mismatch (expecting EC key but getting RSA). Check your library’s expected format.",
      },
      {
        question: "How should I store RSA private keys in production?",
        answer:
          "Use a secrets manager (AWS Secrets Manager, HashiCorp Vault, Doppler), cloud KMS (AWS KMS, GCP KMS, Azure Key Vault), or HSM (AWS CloudHSM, YubiHSM). Never commit private keys to Git. For application configs, use environment variables or encrypted config files with restricted file permissions (chmod 600).",
      },
      {
        question: "Can I use this RSA key for SSH?",
        answer:
          "Not directly — OpenSSH uses a different key format. Generate the RSA key here, save the PEM private key to a file, then convert: `ssh-keygen -p -m PEM -f your-key.pem` then `ssh-keygen -y -f your-key.pem > your-key.pub` to get the ssh-rsa public key. Easier path: just use `ssh-keygen -t ed25519` directly on your machine for new SSH keys.",
      },
      {
        question: "Is 2048-bit RSA still safe?",
        answer:
          "Yes. NIST SP 800-57 marks 2048-bit RSA as acceptable through 2030. There is no known practical attack faster than the General Number Field Sieve, which would take billions of CPU-years for a 2048-bit key. For keys with a planned lifetime past 2030, upgrade to 3072-bit.",
      },
      {
        question: "What's the public exponent and why is it always 65537?",
        answer:
          "The public exponent (e) is part of the public key used during encryption and signature verification. F4 = 2^16 + 1 = 65537 is the universal standard because: it's prime (required for RSA), it has only two set bits making encryption/verification very fast, and it's large enough to avoid certain low-exponent attacks. The tool always uses 65537. Custom exponents like 3 are dangerous (Bleichenbacher's attack); never use them.",
      },
      {
        question: "Why does my generated private key start with 'BEGIN PRIVATE KEY' instead of 'BEGIN RSA PRIVATE KEY'?",
        answer:
          "Because the tool outputs PKCS#8 format (the modern standard), not PKCS#1 (the older format). Most current libraries accept both. To convert PKCS#8 to PKCS#1: `openssl rsa -in private.pem -traditional -out private-pkcs1.pem`. The OpenSSL `-traditional` flag forces the older PKCS#1 format.",
      },
      {
        question: "Can I use this for JWT signing with jose / jsonwebtoken?",
        answer:
          "Yes — directly. Copy the private key (in PKCS#8 PEM) and use it with jsonwebtoken `jwt.sign(payload, privateKey, { algorithm: 'RS256' })` or jose `new SignJWT(payload).setProtectedHeader({alg: 'RS256'}).sign(privateKeyObject)`. Share the public key with services that need to verify. PyJWT and jose-jwt in Python accept the same format with `jwt.encode(payload, private_key, algorithm='RS256')`.",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RsaGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RsaGeneratorTool />
        </div>
      )}
    />
  )
}
