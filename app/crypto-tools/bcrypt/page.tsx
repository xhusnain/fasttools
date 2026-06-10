import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { BcryptGenerator } from "@/components/crypto-tools/bcrypt-generator"

const toolConfig = createToolConfig({
  toolName: "Bcrypt Generator",
  description:
    "Generate and verify bcrypt password hashes with configurable work factor settings.",
  metaTitle: "Bcrypt Hash Generator & Verifier — $2b$ Password Hashing Online",
  metaDescription:
    "Free bcrypt password hash generator and verifier. Configurable cost factor (4–16 rounds), auto-salted $2b$ output. Verify plaintext against existing bcrypt hashes. 100% client-side, compatible with Node, Python, PHP, Ruby.",
  path: "/crypto-tools/bcrypt",

  header: {
    title: "Bcrypt Password Hash Generator & Verifier",
    description:
      "Generate bcrypt password hashes with adjustable cost factor (salt rounds 4–16) and verify plaintext passwords against existing bcrypt hashes. The industry-standard password hashing algorithm used by Node.js, Python, Ruby, and PHP frameworks. All hashing runs in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Bcrypt password hash generator + verifier with configurable cost factor (4–16) and auto-generated random salt. $2b$ format output compatible with every bcrypt library. 100% client-side.",
    alternateName: [
      "Bcrypt Generator",
      "Bcrypt Verifier",
      "Password Hash Generator",
      "Bcrypt Online Tool",
      "$2b$ Hash Generator",
      "Bcrypt Hash Checker",
      "Bcrypt Test Tool",
      "Node.js Bcrypt Compatible",
      "Laravel Bcrypt Compatible",
      "Django bcrypt Hasher",
      "Rails BCrypt Compatible",
      "Salted Password Hash",
      "Slow Hash Tool",
      "Login Auth Hash Generator",
      "Bcrypt Cost Factor Tester",
    ],
    featureList: [
      "Generate bcrypt hash with cost factor 4–16 (10–12 recommended for production)",
      "Verify mode: paste plaintext + existing hash to check match",
      "Automatic CSPRNG-generated random salt — no manual salting required",
      "Standard $2b$ format output compatible with every bcrypt library",
      "Same hash works in Node.js (bcrypt, bcryptjs), Python (passlib, bcrypt), PHP (password_hash), Ruby (bcrypt-ruby), Java (jbcrypt), Go (golang.org/x/crypto/bcrypt)",
      "Cost factor benchmark: shows actual hash time for your device (helps calibrate production cost)",
      "Show/hide password toggle to prevent shoulder-surfing",
      "Copy hash to clipboard with one click — paste into database seed files, .env, or test fixtures",
      "Bcrypt 72-byte password length limit clearly indicated (longer passwords are silently truncated)",
      "Cost factor warning: cost 4–6 only for tests, 10–12 for production, 13+ for high-value secrets",
      "100% client-side — passwords and hashes never sent to any server",
      "Free, no signup, no rate limit, no telemetry",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Bcrypt Hash Generator is a free tool that hashes passwords using the bcrypt algorithm and verifies plaintext passwords against existing bcrypt hashes.",
    quickAnswer:
      "Enter a password and select a cost factor (10–12 recommended) to generate a bcrypt hash. To verify, paste a password and a bcrypt hash to check if they match. Used for secure password storage.",
    keyTakeaways: [
      "Bcrypt is a password hashing function designed to be slow — resistant to brute force",
      "Cost factor (salt rounds) controls computational difficulty: 10 = ~100ms, 12 = ~400ms",
      "Each hash includes a random salt — same password produces different hashes",
      "Output format: $2b$[cost]$[22-char salt][31-char hash]",
      "Industry standard for password storage in web applications",
    ],
    overview:
      "Generate bcrypt password hashes and verify passwords against existing hashes with this free online tool. Bcrypt is the industry-standard password hashing algorithm used by Express.js, Django, Ruby on Rails, Laravel, and Spring Boot for secure credential storage. Set the cost factor (salt rounds) from 4 to 16 — higher values increase computation time exponentially, making brute-force attacks impractical. Each hash automatically includes a unique random salt, so the same password produces different hashes every time. Use the verifier to check if a plaintext password matches a stored bcrypt hash during development and QA testing.",

    howToSteps: [
      "Enter the password you want to hash in the input field.",
      "Set the cost factor (10–12 recommended for production, 4–6 for fast testing).",
      "Click Generate to create the bcrypt hash — copy it for your database seed or auth config.",
      "Switch to Verify mode to check if a plaintext password matches an existing bcrypt hash.",
    ],

    features: [
      "Bcrypt hash generation with adjustable cost factor (salt rounds 4–16)",
      "Password verification — check plaintext against existing bcrypt hashes",
      "Automatic random salt generation (built into every bcrypt hash)",
      "Output in standard $2b$ format compatible with all bcrypt libraries",
      "Client-side hashing — passwords never sent to any server",
    ],

    useCases: [
      "Generating password hashes for database seed files and user migrations",
      "Verifying bcrypt hashes during login flow development and debugging",
      "Testing cost factor performance to balance security and login speed",
      "Comparing bcrypt output across Node.js, Python, and PHP implementations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Bcrypt Is the Default Password Hash</h3>
          <p>
            Bcrypt (published 1999 by Niels Provos and David Mazières) was the first widely-deployed password hashing function designed around the principle of <strong>deliberate slowness</strong>. Unlike SHA-256 or MD5 — which are designed to be fast — bcrypt uses a configurable work factor (the &quot;cost&quot;) that doubles computation time with each increment. This intentional slowness makes brute-force password cracking impractical even with modern GPUs. Every major framework defaults to bcrypt: Django (since 1.4), Express.js (via bcrypt / bcryptjs), Laravel (Hash::make), Ruby on Rails (has_secure_password), Spring Boot (BCryptPasswordEncoder), Symfony, ASP.NET Core. After 25+ years of cryptanalysis, no practical attack against bcrypt exists.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Bcrypt Hash Format Anatomy</h3>
          <p>The bcrypt hash format is a self-contained string with all parameters embedded:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`$2b$12$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
↑   ↑   ↑                      ↑
ver cost salt (22 chars)        hash (31 chars)`}</code>
          </pre>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>$2a$ / $2b$ / $2y$:</strong> algorithm version. $2b$ is current standard (since 2014). $2a$ is older but still safe. $2y$ is a PHP-specific fix for a 2011 bug.</li>
            <li><strong>cost:</strong> work factor, 4–31. Each increment doubles the time. 12 = 2<sup>12</sup> = 4096 rounds.</li>
            <li><strong>salt:</strong> 22 chars of base64-encoded 128-bit random salt</li>
            <li><strong>hash:</strong> 31 chars of base64-encoded 184-bit hash output</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cost Factor Calibration</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Cost</th>
                <th className="text-left py-2 px-2 text-foreground">Rounds</th>
                <th className="text-left py-2 px-2 text-foreground">Hash time (modern server CPU)</th>
                <th className="text-left py-2 px-2 text-foreground">Recommended use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">4</td>
                <td className="py-2 px-2">16</td>
                <td className="py-2 px-2">~1ms</td>
                <td className="py-2 px-2">Unit tests only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">10</td>
                <td className="py-2 px-2">1,024</td>
                <td className="py-2 px-2">~50–100ms</td>
                <td className="py-2 px-2">Low-traffic apps, legacy default</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">12</td>
                <td className="py-2 px-2">4,096</td>
                <td className="py-2 px-2">~200–400ms</td>
                <td className="py-2 px-2"><strong>Production default</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">14</td>
                <td className="py-2 px-2">16,384</td>
                <td className="py-2 px-2">~1.5s</td>
                <td className="py-2 px-2">High-security, infrequent login</td>
              </tr>
              <tr>
                <td className="py-2 px-2">16</td>
                <td className="py-2 px-2">65,536</td>
                <td className="py-2 px-2">~6s</td>
                <td className="py-2 px-2">Master keys, root passwords</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Calibration rule:</strong> pick the highest cost that keeps the 95th-percentile login time under your latency budget. For consumer apps, target ~300ms per hash (cost 12 on most server CPUs). For internal admin apps, you can afford 1–2 seconds (cost 13–14). <strong>Increase cost by 1 every 2–3 years</strong> as hardware improves (Moore&apos;s law slowdown notwithstanding).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Bcrypt&apos;s 72-Byte Password Limit</h3>
          <p>
            Bcrypt silently truncates passwords longer than 72 bytes (~72 ASCII characters or fewer if the password contains multi-byte UTF-8). This means a 100-character passphrase has the same security as its first 72 characters — and even worse, two passwords identical in the first 72 bytes will hash to the same value. <strong>Mitigation:</strong> pre-hash the password with SHA-256 before passing to bcrypt: <code>bcrypt(sha256(password))</code> — this normalizes any password length to 64 bytes (within the limit) and is what Dropbox, Auth0, and several major platforms do. <strong>Caveat:</strong> only use SHA-256 pre-hashing (not base64) because base64-encoded SHA-256 is 88 bytes — back over the limit.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Bcrypt vs Argon2 vs scrypt vs PBKDF2</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Algorithm</th>
                <th className="text-left py-2 px-2 text-foreground">CPU-hard?</th>
                <th className="text-left py-2 px-2 text-foreground">Memory-hard?</th>
                <th className="text-left py-2 px-2 text-foreground">Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">bcrypt</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Mildly (4 KB)</td>
                <td className="py-2 px-2">Battle-tested default; safe choice</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">argon2id</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Yes (GB-scale)</td>
                <td className="py-2 px-2">2015 PHC winner; modern best choice</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">scrypt</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Solid, less ubiquitous than bcrypt/argon2</td>
              </tr>
              <tr>
                <td className="py-2 px-2">PBKDF2</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2">FIPS-required; weakest of the four</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Recommendation:</strong> use <strong>argon2id</strong> for new projects if your stack supports it; use <strong>bcrypt</strong> if you need maximum compatibility or are already in a bcrypt ecosystem. Migrate from PBKDF2 if possible.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Production Login Flow</h3>
          <p>
            On signup: <code>const hash = await bcrypt.hash(password, 12); db.users.insert(&#123;email, hash&#125;);</code>. On login: <code>const ok = await bcrypt.compare(password, db.users.find(email).hash);</code>. Never store the plaintext password. Never compare hashes with == — bcrypt.compare uses constant-time internally to prevent timing attacks. Implement rate-limiting on login endpoints (e.g., 5 attempts per IP per 10 minutes) to make even high-cost bcrypt brute-forcing impossible online. Add 2FA / WebAuthn / passkeys for high-value accounts.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use cost factor 12 as your production default — it gives ~200-400ms hash time on modern server CPUs (imperceptible to users) while being 4x more expensive than the legacy default of 10. Bump the cost by +1 every 2–3 years as hardware improves. For passwords longer than 72 bytes, pre-hash with raw SHA-256 (not base64) before bcrypt to avoid silent truncation.",

    faqs: [
      {
        question: "What cost factor (salt rounds) should I use for bcrypt?",
        answer:
          "Use 10–12 for production web applications. Cost factor 10 takes ~100ms, 12 takes ~400ms. Each increment doubles the time. Use 4–6 for unit tests to keep test suites fast.",
      },
      {
        question: "Why does the same password produce different bcrypt hashes?",
        answer:
          "Bcrypt automatically generates a unique random salt for each hash. The salt is embedded in the hash output, so verification still works — bcrypt extracts the salt during comparison.",
      },
      {
        question: "Is bcrypt better than SHA-256 for passwords?",
        answer:
          "Yes. SHA-256 is too fast for password hashing — attackers can try billions of guesses per second. Bcrypt is intentionally slow and includes automatic salting, making it far more resistant to brute-force attacks.",
      },
      {
        question: "What is the difference between bcrypt and Argon2?",
        answer:
          "Bcrypt is CPU-hard (slow to compute). Argon2 is both CPU-hard and memory-hard, making it more resistant to GPU and ASIC attacks. Bcrypt is more widely supported; Argon2 is newer and recommended for high-security applications.",
      },
      {
        question: "Can I verify a bcrypt hash from another programming language?",
        answer:
          "Yes. Bcrypt hashes are portable across languages. A hash generated in Node.js can be verified in Python, PHP, Ruby, or any language with a bcrypt library, as long as the $2b$ format is used.",
      },
      {
        question: "Should I store plaintext passwords in my database?",
        answer:
          "Never. Always hash passwords with bcrypt (or Argon2) before storage. Even if your database is breached, attackers cannot recover plaintext passwords from properly hashed values. Plaintext password storage is a top-10 OWASP vulnerability and a guaranteed compliance failure (PCI DSS, HIPAA, GDPR, SOC 2).",
      },
      {
        question: "Does bcrypt have a 72-byte password length limit?",
        answer:
          "Yes — bcrypt silently truncates passwords longer than 72 bytes. A 100-character passphrase has the same security as its first 72 characters. To support longer passwords, pre-hash with raw SHA-256 before bcrypt: bcrypt(sha256(password)). Use the raw 32-byte digest, NOT base64 (which would be 88 bytes — back over the limit).",
      },
      {
        question: "What's the difference between $2a$, $2b$, and $2y$ bcrypt versions?",
        answer:
          "$2a$ was the original version. $2y$ was a PHP-specific fix for a 2011 bug. $2b$ is the corrected modern version (since 2014) and is what every current library produces. All three versions verify correctly across libraries — you can verify a $2a$ hash with a $2b$ library. New hashes should always use $2b$.",
      },
      {
        question: "How do I migrate from PBKDF2 / SHA-256 / MD5 to bcrypt without forcing password resets?",
        answer:
          "Use a lazy migration: on each successful login, after verifying the password against the old hash, re-hash with bcrypt and update the database. Mark each user record with which scheme its current hash uses. Over time (~6-12 months), most active users migrate naturally. After a cutoff date, force a password reset for any user still on the legacy scheme. This avoids angering users with a forced mass reset.",
      },
      {
        question: "Is it safe to generate bcrypt hashes in a browser?",
        answer:
          "Yes for development, testing, generating database seed data, and learning. The salt uses window.crypto.getRandomValues() — cryptographically secure. For production password hashing of real user passwords, do it server-side so the password never leaves the secure server boundary (HTTPS-decrypted body → bcrypt → discard plaintext).",
      },
    ],

    relatedTools: [
      { name: "Password Strength Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BcryptPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BcryptGenerator />
        </div>
      )}
    />
  )
}
