import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { RsaGeneratorTool } from "@/components/crypto-tools/rsa-generator"

const toolConfig = createToolConfig({
  toolName: "RSA Key Pair Generator",
  description:
    "Generate RSA public/private key pairs for encryption, signing, and interoperability testing.",
  metaTitle: "RSA Key Pair Generator Online — Generate 2048/4096-bit Keys in PEM Free (2026)",
  metaDescription:
    "Free online RSA key pair generator. Create 2048-bit or 4096-bit RSA public and private keys in PEM format. Use for JWT signing, SSH keys, TLS certificates, and encryption testing.",
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
      "Generate RSA key pairs in PEM-compatible formats for development and integration workflows.",
    alternateName: ["RSA Generator", "Public Private Key Generator"],
    featureList: [
      "RSA key pair generation",
      "Common key-size options",
      "PEM-style output workflow",
      "Copy/export utility",
    ],
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
      "2048-bit is the minimum recommended for security in 2026",
      "4096-bit provides stronger security but slower operations",
      "Keys are generated in your browser — private key never leaves your machine",
    ],
    overview:
      "Generate RSA public and private key pairs online with this free tool. Create 2048-bit or 4096-bit RSA keys in standard PEM format (PKCS#8) for JWT RS256/RS512 signing, SSH authentication, TLS/SSL certificate generation, S/MIME email encryption, and file encryption. The public key encrypts data and verifies signatures; the private key decrypts data and creates signatures. Both keys are generated entirely in your browser using the Web Crypto API — the private key is never transmitted to any server. Copy or download keys directly for use in Node.js, Python, Java, Go, or OpenSSL workflows.",

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
        <p>
          RSA (Rivest–Shamir–Adleman) is the most widely deployed public-key cryptosystem, used for digital signatures, key exchange, and encryption. The security of RSA relies on the mathematical difficulty of factoring large prime numbers. A 2048-bit RSA key has ~112 bits of security strength, while 4096-bit provides ~140 bits — both are considered safe through 2030+ by NIST guidelines.
        </p>
        <p>
          For production use, store private keys in hardware security modules (HSMs), cloud KMS services (AWS KMS, Google Cloud KMS, Azure Key Vault), or encrypted key stores. Never commit private keys to source code repositories. Rotate keys according to your organization’s security policy — typically every 1–2 years for signing keys.
        </p>
      </div>
    ),

    proTip:
      "Use 2048-bit keys for JWT signing and API authentication (fast enough for per-request signing). Use 4096-bit keys for long-lived TLS certificates and high-security signing requirements. Consider Ed25519 for new SSH key generation — it is faster and more secure than RSA.",

    faqs: [
      {
        question: "Should I use 2048-bit or 4096-bit RSA keys?",
        answer:
          "2048-bit is the minimum recommended by NIST in 2026 and sufficient for most applications. Use 4096-bit for high-security requirements, long-lived certificates, or when compliance policy requires it. 4096-bit keys are ~4x slower for signing operations.",
      },
      {
        question: "Can I use these RSA keys for JWT signing (RS256)?",
        answer:
          "Yes. Copy the private key to sign JWTs with RS256, RS384, or RS512 algorithms. Share the public key with services that need to verify the tokens. Standard PEM format works with jsonwebtoken (Node.js), PyJWT (Python), and all major JWT libraries.",
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
          "Use a secrets manager (AWS Secrets Manager, HashiCorp Vault), cloud KMS, or HSM. Never commit private keys to Git repositories. For application configs, use environment variables or encrypted config files with restricted file permissions (chmod 600).",
      },
    ],

    relatedTools: [
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Hash Text (SHA-256/512)", href: "/crypto-tools/hash-text" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "Bcrypt Hash Generator", href: "/crypto-tools/bcrypt" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "DNS / SSL Checker", href: "/web-tools/dns-ssl-checker" },
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
