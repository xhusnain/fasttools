import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { EncryptDecryptTool } from "@/components/crypto-tools/encrypt-decrypt"

const toolConfig = createToolConfig({
  toolName: "Text Encrypt Decrypt",
  description:
    "Encrypt and decrypt text using common symmetric algorithms for development and interoperability testing.",
  metaTitle: "Text Encrypt Decrypt — AES-256, TripleDES & RC4 in Your Browser",
  metaDescription:
    "Free online text encrypt / decrypt tool. AES-256, TripleDES, or RC4 with password-derived key, Base64-encoded ciphertext output. Encrypt sensitive messages, decrypt with the same key — 100% client-side, no upload, no signup.",
  path: "/crypto-tools/encrypt-decrypt",

  header: {
    title: "Online Text Encrypt & Decrypt Tool",
    description:
      "Encrypt text with AES-256, TripleDES, or RC4 using a password key. Decrypt ciphertext back to plaintext instantly. All encryption runs locally in your browser — no data sent to servers. Supports Base64-encoded output for safe sharing.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Encrypt and decrypt plain text using AES-256, TripleDES, or RC4 with password-derived key. Output is Base64-encoded for safe text transmission. 100% client-side via Web Crypto API.",
    alternateName: [
      "AES Encrypt Decrypt Online",
      "AES-256 Encryption Tool",
      "Text Encryption Tool",
      "Password-Based Encryption Tool",
      "Symmetric Encryption Tool",
      "TripleDES Encrypt Decrypt",
      "RC4 Encryption Tool",
      "Base64 Cipher Tool",
      "Online AES Encryptor",
      "Online AES Decryptor",
      "CryptoJS AES Tool",
      "AES Online Calculator",
      "Decrypt AES Ciphertext",
      "Encrypt Message with Password",
      "Symmetric Cipher Online",
    ],
    featureList: [
      "AES-256 encryption (industry standard, used by governments and banks)",
      "TripleDES (3DES) encryption for legacy system interop",
      "RC4 stream cipher for testing legacy protocols (not for new use)",
      "Password-based key derivation via PBKDF2 with salt and iteration count",
      "Base64-encoded ciphertext output safe for email, JSON, URLs",
      "Instant round-trip encrypt → decrypt for end-to-end verification",
      "Switch direction with one click to confirm key correctness",
      "Compatible with CryptoJS / Node.js crypto / Python pycryptodome output",
      "Show/hide password toggle to prevent shoulder-surfing while pasting keys",
      "Copy ciphertext or download as .txt",
      "100% client-side — your plaintext, password, and ciphertext never leave your browser",
      "Free, no signup, no rate limit, no tracking",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An Encrypt/Decrypt Tool is a free tool that encrypts text using AES, DES, or other symmetric algorithms with a password, and decrypts ciphertext back to plaintext.",
    quickAnswer:
      "Enter your text and a password, select an encryption algorithm (AES-256 recommended), and click encrypt. To decrypt, paste the ciphertext and enter the same password. All operations run in your browser.",
    keyTakeaways: [
      "AES-256 is the industry standard for symmetric encryption",
      "Encryption requires a password/key — keep it secret and stored safely",
      "Ciphertext is Base64-encoded for safe text transmission",
      "Decryption requires the exact same password and algorithm used for encryption",
      "All encryption/decryption runs locally — no data sent to servers",
    ],
    overview:
      "Encrypt and decrypt text online with this free browser-based tool. Choose from AES-256 (industry standard), TripleDES, or RC4 symmetric encryption algorithms. Enter your plaintext and a password key to generate Base64-encoded ciphertext. Switch to decrypt mode, paste the ciphertext and the same password, and recover the original text instantly. All cryptographic operations run entirely in your browser using the Web Crypto API — no data is transmitted to any server. Ideal for developers testing encryption features, verifying ciphertext interoperability across platforms, and learning symmetric cryptography concepts.",

    howToSteps: [
      "Enter your plaintext message and choose an encryption algorithm (AES-256 recommended).",
      "Set a strong password key and click Encrypt to generate Base64-encoded ciphertext.",
      "Switch to Decrypt mode, paste the ciphertext, and enter the same password to recover plaintext.",
      "Copy the encrypted or decrypted output for use in your application, API, or testing workflow.",
    ],

    features: [
      "AES-256, TripleDES, and RC4 symmetric encryption algorithms",
      "Password-based key derivation for encrypt and decrypt operations",
      "Base64-encoded ciphertext output for safe text transmission",
      "Client-side only — no data sent to servers, fully private",
      "Instant encrypt/decrypt toggle for round-trip verification testing",
    ],

    useCases: [
      "Testing AES encryption and decryption in web applications",
      "Verifying ciphertext compatibility across programming languages",
      "Encrypting sensitive text before sharing via email or messaging",
      "Learning symmetric cryptography concepts with live examples",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why AES-256 Is the Default</h3>
          <p>
            <strong>AES (Advanced Encryption Standard)</strong> was selected by NIST in 2001 after a five-year public competition among cryptographers worldwide. The 256-bit key variant is approved for U.S. government classified data up to <strong>TOP SECRET</strong> level, used by every modern bank for transactional encryption, embedded in TLS 1.3 cipher suites, and the default in disk-encryption systems (BitLocker, FileVault, LUKS). After 20+ years of public cryptanalysis, no practical attack against AES-256 exists — the best known attack reduces the effective key strength by only ~2 bits, leaving 254 bits of security (still computationally infeasible). Choose AES-256 unless you have a specific compatibility reason to choose otherwise.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why TripleDES and RC4 Exist Here</h3>
          <p>
            <strong>TripleDES (3DES)</strong> applies the DES cipher three times with two or three different keys (effective key strength 112 bits). It&apos;s been deprecated by NIST for new applications since 2017 due to the <strong>Sweet32 attack</strong> (practical collision attack on 64-bit block ciphers). Reason to use it here: <strong>interoperability with legacy systems</strong> — older payment terminals, government databases, and embedded firmware still encrypt with 3DES.{" "}
            <strong>RC4</strong> is a stream cipher that was used in TLS 1.0 / WEP and is now considered cryptographically broken — biases in the keystream allow recovery of plaintext after ~16 million ciphertexts (the Bar-Mizrahi attack). Reason to use it here: <strong>red-team testing</strong> and decrypting captured legacy traffic. <strong>Do not use RC4 for new applications.</strong>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Password-Based Encryption Works (PBKDF2)</h3>
          <p>
            Human passwords are low-entropy (typically 20–40 bits) and unsuitable as direct AES keys (which need 128 or 256 bits of randomness). The tool uses <strong>PBKDF2 (Password-Based Key Derivation Function 2)</strong> to stretch your password into a strong key: it hashes the password combined with a random <em>salt</em> tens of thousands of times. The salt prevents rainbow-table attacks; the iteration count makes brute-force attacks computationally expensive. The derived key is then used as the AES / 3DES / RC4 key. <strong>Implication:</strong> a 12-character random password gives roughly 80 bits of entropy after PBKDF2 stretching — strong against any realistic offline attack. A weak password like &quot;password123&quot; is still weak after PBKDF2 — use the <a href="/crypto-tools/password-generator" className="text-primary underline">Password Generator</a> for keys.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">CryptoJS-Compatible Ciphertext</h3>
          <p>
            The Base64 output format follows the <strong>OpenSSL-compatible &quot;Salted__&quot;</strong> envelope that CryptoJS, OpenSSL, and most language libraries (Python pycryptodome, Go cipher, Ruby OpenSSL) produce by default. This means ciphertext generated here can be decrypted with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><code>openssl enc -d -aes-256-cbc -base64 -in ciphertext.txt -k password</code></li>
            <li><code>CryptoJS.AES.decrypt(ciphertext, password).toString(CryptoJS.enc.Utf8)</code> in JavaScript</li>
            <li><code>Crypto.Cipher.AES</code> via pycryptodome in Python (with PBKDF2 key derivation)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When NOT to Use This Tool</h3>
          <p>
            This tool is excellent for: <strong>encrypting messages</strong> to send via email/Slack, <strong>testing encryption integrations</strong>, <strong>decoding ciphertext</strong> shared by colleagues, <strong>learning cryptography</strong> with live examples, and <strong>verifying interop</strong> with backend code. It is <strong>not</strong> appropriate for: encrypting files (use GPG, age, or 7-Zip), protecting passwords at rest in a database (use bcrypt / argon2 — see our <a href="/crypto-tools/bcrypt" className="text-primary underline">Bcrypt tool</a>), production end-to-end encryption (use Signal Protocol or libsodium), or storing encrypted secrets in code (use AWS KMS, HashiCorp Vault, or a managed secret manager).
          </p>
        </div>
      </div>
    ),

    proTip:
      "Always pick AES-256 for new encryption tasks. Use a strong random password (16+ characters from our Password Generator) rather than a memorized phrase — short passwords are weak even after PBKDF2 stretching. Share ciphertext and password through SEPARATE channels (e.g., ciphertext via email, password via Signal). And always test round-trip encrypt→decrypt with the exact same algorithm + password before relying on it.",

    faqs: [
      {
        question: "What is AES-256 encryption?",
        answer:
          "AES-256 is the Advanced Encryption Standard with a 256-bit key, the industry standard for symmetric encryption used by governments and enterprises worldwide.",
      },
      {
        question: "Is my data safe using this encryption tool?",
        answer:
          "Yes. All encryption and decryption runs locally in your browser using the Web Crypto API. No data is sent to any server.",
      },
      {
        question: "Why does decryption fail with the correct password?",
        answer:
          "Common causes include algorithm mismatch (encrypting with AES but decrypting with TripleDES), modified ciphertext, or extra whitespace in the password.",
      },
      {
        question: "What is the difference between AES, TripleDES, and RC4?",
        answer:
          "AES-256 is the modern standard with strong security. TripleDES applies DES three times (slower, legacy). RC4 is a stream cipher considered insecure for new applications.",
      },
      {
        question: "Can I encrypt files with this tool?",
        answer:
          "This tool encrypts text strings only. For file encryption, use dedicated tools like GPG, OpenSSL, or your operating system's built-in encryption features.",
      },
      {
        question: "Is the encrypted output safe to share?",
        answer:
          "Yes, ciphertext is safe to share publicly — it cannot be decrypted without the password. However, always share the password through a separate secure channel.",
      },
      {
        question: "Should I use this for production encryption?",
        answer:
          "Use it for development testing, ad-hoc message encryption, and learning. Production systems handling user data at scale should use managed key infrastructure (AWS KMS, Azure Key Vault, HashiCorp Vault) with proper key rotation, audit logging, and access controls. The cryptographic primitives are the same; what differs is the operational rigor around key storage and access management.",
      },
      {
        question: "Can I decrypt ciphertext I encrypted with OpenSSL or CryptoJS?",
        answer:
          "Yes — the tool uses the same OpenSSL-compatible 'Salted__' envelope format that CryptoJS, OpenSSL, pycryptodome, and most language libraries produce by default. Paste your Base64 ciphertext, select the same algorithm, enter the same password, and click decrypt. Compatibility is verified against reference implementations.",
      },
      {
        question: "What if the password contains special characters?",
        answer:
          "Special characters work fine — the password is UTF-8 encoded before being passed to PBKDF2. Just be careful when copy/pasting passwords from terminals or password managers that might strip whitespace or transform characters (e.g., curly quotes from Word documents). Use the show-password toggle to verify the password looks exactly the same in both encrypt and decrypt steps.",
      },
      {
        question: "Why does my ciphertext look completely different each time I encrypt the same text?",
        answer:
          "Because the tool generates a fresh random salt and IV (initialization vector) for every encryption, even with the same plaintext and password. This is correct behavior — it prevents an attacker who sees two ciphertexts from knowing they encrypt the same plaintext. Decryption still works because the salt/IV are bundled into the 'Salted__' Base64 envelope.",
      },
      {
        question: "Is AES-256 quantum-resistant?",
        answer:
          "Symmetric algorithms like AES are believed to be resistant to quantum computers in the sense that Grover's algorithm only provides a square-root speedup — AES-256 retains roughly 128 bits of effective security against a quantum attacker. This is still considered secure. The bigger quantum concern is asymmetric algorithms (RSA, ECDSA) which Shor's algorithm breaks. So AES-256 is fine for long-term encryption; pair it with a post-quantum KEM (Kyber, etc.) if you need quantum-safe key exchange.",
      },
    ],

    relatedTools: [
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Image Steganography", href: "/security-tools/image-steganography" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function EncryptDecryptPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <EncryptDecryptTool />
        </div>
      )}
    />
  )
}
