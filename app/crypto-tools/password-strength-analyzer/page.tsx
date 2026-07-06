import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PasswordAnalyzerTool } from "@/components/crypto-tools/password-analyzer"

const toolConfig = createToolConfig({
  toolName: "Password Strength Analyzer",
  description:
    "Estimate password strength, entropy, and practical resistance against common attack patterns.",
  metaTitle: "Password Strength Checker — Entropy, Crack Time & Breach Test",
  metaDescription:
    "Free password strength checker. Real-time entropy in bits, estimated crack time (online, GPU, ASIC), pattern detection (keyboard walks, l33t, dictionary). HIBP breach check via k-anonymity. 100% client-side, never logged.",
  path: "/crypto-tools/password-strength-analyzer",

  header: {
    title: "Password Strength Checker & Entropy Analyzer",
    description:
      "Test any password to see its strength rating, entropy score (bits), estimated crack time, and detected weaknesses. Checks for common patterns, dictionary words, keyboard walks, repeated characters, and known breached passwords. All analysis runs locally — your password never leaves your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    {
      label: "Password Strength Analyzer",
      href: "/crypto-tools/password-strength-analyzer",
    },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Password strength analyzer with entropy calculation, estimated crack time, pattern detection (keyboard walks, dictionary, l33t), and Have I Been Pwned breach check. 100% client-side.",
    alternateName: [
      "Password Strength Tester",
      "Password Entropy Calculator",
      "Password Security Checker",
      "Password Cracker Time Estimator",
      "Password Quality Tester",
      "Have I Been Pwned Checker",
      "HIBP Breach Lookup",
      "Password Audit Tool",
      "How Strong Is My Password",
      "Bit Strength Calculator",
      "Zxcvbn Password Analyzer",
      "Dictionary Attack Tester",
      "Password Pattern Detector",
      "L33t Speak Detector",
      "Master Password Tester",
    ],
    featureList: [
      "Real-time strength rating (very weak → very strong) updated on every keystroke",
      "Entropy in bits, computed against actual character set used (not naïve max-pool)",
      "Estimated crack time at four attack speeds: online (100/sec), online-bcrypt (10/sec), offline-GPU (10B/sec), offline-ASIC (100B/sec)",
      "Pattern detection: keyboard walks (qwerty, asdf, 1qaz2wsx), sequential numbers, repeated chars, dates",
      "Dictionary detection: common passwords, English words, names, dates",
      "L33t-speak substitution detection (p@ssw0rd, h4ck3r, $ecur3) — attackers check these first",
      "Have I Been Pwned (HIBP) breach check via k-anonymity (only 5-char SHA-1 prefix sent)",
      "Specific weakness explanations: 'starts with capital + ends with number + symbol = common pattern'",
      "Improvement suggestions tailored to the specific weaknesses detected",
      "zxcvbn-style realistic scoring (not naïve length × complexity)",
      "Show/hide password toggle",
      "100% client-side strength analysis — only HIBP check sends a 5-char hash prefix",
      "Free, no signup, no logs",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Password Strength Analyzer is a free tool that evaluates password security by checking length, complexity, entropy, and known breach databases.",
    quickAnswer:
      "Type a password to instantly see its strength rating, entropy score, estimated crack time, and specific improvement suggestions. The tool checks for common patterns, dictionary words, and known breached passwords.",
    keyTakeaways: [
      "Rates password strength from very weak to very strong",
      "Calculates entropy (bits) — 80+ bits is considered strong",
      "Estimates time to crack using brute force at various speeds",
      "Detects common patterns: keyboard walks, repeated characters, dictionary words",
      "All analysis runs locally — your password is never sent to any server",
    ],
    overview:
      "Check how strong your password is with this free password strength analyzer. Type any password to instantly see its security rating (very weak to very strong), entropy score in bits, estimated time to crack at various attack speeds, and specific weaknesses detected. The analyzer checks for common patterns including keyboard walks (qwerty, asdf), repeated characters, sequential numbers (123456), dictionary words, l33t substitutions (p@ssw0rd), and passwords found in known breach databases. Understand why your password is weak and get actionable improvement suggestions. All analysis runs entirely in your browser — your password is never transmitted to any server.",

    howToSteps: [
      "Type or paste a password into the analyzer field.",
      "Review the strength rating, entropy score, and estimated crack time.",
      "Check the detected weaknesses — patterns, dictionary words, and known breaches.",
      "Improve the password based on suggestions and retest until it reaches your target strength.",
    ],

    features: [
      "Password strength rating from very weak to very strong with entropy (bits)",
      "Estimated crack time at offline attack speeds (10B guesses/sec)",
      "Pattern detection: keyboard walks, sequences, repeats, and dictionary words",
      "l33t speak substitution detection (p@ssw0rd, h4ck3r)",
      "Client-side analysis — password never sent to any server",
    ],

    useCases: [
      "Testing password strength before creating accounts or credentials",
      "Validating password policy requirements for enterprise security teams",
      "Training employees on what makes passwords weak vs strong",
      "Evaluating candidate passwords before storing in password managers",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why &quot;P@ssw0rd1!&quot; Is Weak Despite Meeting Complexity Rules</h3>
          <p>
            Modern password security is about <strong>resistance to realistic attacks</strong>, not just checking if a password has uppercase, lowercase, numbers, and symbols. A password like <code>P@ssw0rd1!</code> meets most complexity requirements but is cracked in seconds by any password-cracking tool because it follows the most predictable pattern in human-chosen passwords: <em>(capitalized common word) + (l33t substitution) + (number) + (special char)</em>. Attackers use rule-based attacks (hashcat&apos;s rockyou-30000.rule, OneRuleToRuleThemAll, etc.) that apply these exact transformations to wordlists. The first 100 million human-chosen &quot;complex&quot; passwords are tried in under a minute on a modern GPU. <strong>True strength comes from unpredictability, not complexity rules.</strong>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Entropy and Crack Time Tiers</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Entropy</th>
                <th className="text-left py-2 px-2 text-foreground">Combinations</th>
                <th className="text-left py-2 px-2 text-foreground">Online (100/sec)</th>
                <th className="text-left py-2 px-2 text-foreground">Offline GPU (10B/sec)</th>
                <th className="text-left py-2 px-2 text-foreground">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">20 bits</td>
                <td className="py-2 px-2">~1M</td>
                <td className="py-2 px-2">3 hours</td>
                <td className="py-2 px-2">Instant</td>
                <td className="py-2 px-2 text-red-500">Trivial</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">40 bits</td>
                <td className="py-2 px-2">~1T</td>
                <td className="py-2 px-2">350 years</td>
                <td className="py-2 px-2">2 minutes</td>
                <td className="py-2 px-2 text-red-500">Weak</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">60 bits</td>
                <td className="py-2 px-2">~10<sup>18</sup></td>
                <td className="py-2 px-2">millennia</td>
                <td className="py-2 px-2">3.6 years</td>
                <td className="py-2 px-2 text-orange-500">Moderate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">80 bits</td>
                <td className="py-2 px-2">~10<sup>24</sup></td>
                <td className="py-2 px-2">millennia</td>
                <td className="py-2 px-2">3.8M years</td>
                <td className="py-2 px-2 text-green-500">Strong</td>
              </tr>
              <tr>
                <td className="py-2 px-2">100+ bits</td>
                <td className="py-2 px-2">~10<sup>30</sup></td>
                <td className="py-2 px-2">universe age</td>
                <td className="py-2 px-2">universe age</td>
                <td className="py-2 px-2 text-green-500">Very strong</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Target:</strong> 60+ bits for low-stakes online accounts, 80+ bits for important accounts, 100+ bits for master passwords / crypto wallets. <strong>Practical examples:</strong> a random 12-char alphanumeric password = ~71 bits; a 6-word passphrase = ~77 bits; a 20-char random password with all character types = ~120 bits.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Length Beats Complexity</h3>
          <p>
            <code>correct-horse-battery-staple</code> (28 chars, all lowercase) provides <strong>~44 bits of entropy</strong> from word selection alone — stronger than <code>Tr0ub4dor&amp;3</code> (12 chars with all character types, only ~28 bits). This is XKCD&apos;s famous insight: <strong>length compounds exponentially while complexity adds linearly</strong>. Each extra character doubles the search space (when added at the end of a random string); each extra character class only multiplies the per-character pool by a small factor (lowercase: 26 → adding numbers: 36 → adding uppercase: 62 → adding symbols: ~95). For passwords you must memorize, prefer <strong>length via random words</strong>. For passwords stored in a password manager, prefer <strong>length and full character set</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Patterns Attackers Check First</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Dictionary words:</strong> all of English, common Spanish/French/German, names, brand names — millions of guesses</li>
            <li><strong>Common passwords:</strong> top 10,000 leaked passwords (rockyou.txt + breach lists) — tried in milliseconds</li>
            <li><strong>L33t substitutions:</strong> p→@, o→0, a→4, e→3, i→1, s→$ — applied to dictionary words</li>
            <li><strong>Capitalization patterns:</strong> first letter capital, last letter capital, alternating caps</li>
            <li><strong>Append patterns:</strong> word + number (1-9999), word + year (1900-2030), word + symbol (! @ # $)</li>
            <li><strong>Keyboard walks:</strong> qwerty, qaz2wsx, 1qaz2wsx, asdf, zxcv — patterns made by your fingers on the keyboard</li>
            <li><strong>Sequences:</strong> 123456, abcdef, 1234abcd, 0987654321</li>
            <li><strong>Repeated chars:</strong> aaa, 111, password111, 12121212</li>
            <li><strong>Dates:</strong> 19xx-20xx years, MM/DD/YYYY, DDMMYYYY, common birthdays</li>
          </ul>
          <p className="mt-3">
            This analyzer detects all of these and downgrades the rating accordingly — that&apos;s why <code>P@ssw0rd1!</code> rates weak even though it satisfies typical &quot;3 of 4 character classes + 8 chars&quot; policies.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Online vs Offline Attack Speeds</h3>
          <p>
            <strong>Online attacks</strong> (the attacker hits your login form) are rate-limited: 100 attempts/sec is generous; most services lock out after 5–10 failed attempts. For online attacks, even a weak password is &quot;safe&quot; — but you cannot assume your password will only face online attacks.{" "}
            <strong>Offline attacks</strong> (the attacker stole the database) can run at <strong>billions of guesses per second</strong> using GPU clusters: 10B/sec for fast hashes (SHA-256, MD5); 100B/sec for ASIC-optimized algorithms; ~100/sec for bcrypt-cost-12 (which is why bcrypt matters).{" "}
            <strong>You should always assume an offline attack will eventually happen</strong> (database breaches are common). Aim for entropy that resists 10B/sec offline attacks for at least the password&apos;s expected lifetime — that means 80+ bits.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HIBP Breach Check</h3>
          <p>
            <strong>Have I Been Pwned</strong> (haveibeenpwned.com, maintained by Troy Hunt) maintains a database of 850+ million passwords from public data breaches. The analyzer queries HIBP using <strong>k-anonymity</strong>: your browser hashes the password with SHA-1, sends only the <em>first 5 chars</em> of that hash, and HIBP returns all ~500 matching hash suffixes. Your browser compares locally. <strong>HIBP never sees your password or its full hash</strong> — they only know &quot;someone somewhere checked a password starting with hash prefix XXXXX.&quot; If your password appears in any breach, replace it immediately even if it&apos;s strong on paper — attackers have it.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Beyond Passwords: 2FA, Passkeys, Password Managers</h3>
          <p>
            Even a perfectly strong password can be phished, keylogged, or leaked. Defense in depth:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Password manager</strong> (1Password, Bitwarden, KeePassXC) — eliminates password reuse; you only memorize the master password</li>
            <li><strong>2FA via TOTP</strong> (our <a href="/crypto-tools/otp-generator" className="text-primary underline">OTP Generator</a>) — protects against credential stuffing from breaches</li>
            <li><strong>Passkeys / WebAuthn</strong> — phishing-resistant; replaces passwords with public-key cryptography</li>
            <li><strong>Unique password per service</strong> — limits the blast radius of any single breach</li>
            <li><strong>Master password</strong> = a strong passphrase you actually memorize, used only as your password manager unlock</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "For passwords you must memorize: use a 6-word passphrase (~77 bits, easy to type, hard to crack). For everything else: use a password manager with 20+ char random strings (120+ bits). Always check new passwords against the HIBP breach database — even strong passwords are compromised if they appear in a breach. Add 2FA / passkeys on high-value accounts (email, bank, password manager) — a strong password alone is not enough against phishing.",

    faqs: [
      {
        question: "How many bits of entropy is considered a strong password?",
        answer:
          "60+ bits is good for most online accounts. 80+ bits is strong for sensitive accounts. 100+ bits is very strong. For reference, a random 12-character alphanumeric password has ~71 bits of entropy.",
      },
      {
        question: "Is a complex short password better than a long simple one?",
        answer:
          "No. Length is more important than complexity. 'correct-horse-battery-staple' (28 chars, lowercase only) is far stronger than 'P@ss1!' (6 chars, all character types) because it has exponentially more combinations.",
      },
      {
        question: "Why is 'P@ssw0rd1!' rated as weak?",
        answer:
          "It follows the most common password pattern: capitalize first letter, substitute @ for a, 0 for o, add a number and symbol at the end. Attackers check these l33t speak substitutions first in dictionary attacks.",
      },
      {
        question: "Is my password sent to a server for checking?",
        answer:
          "No. All password analysis runs entirely in your browser using JavaScript. Your password never leaves your device and is not stored anywhere.",
      },
      {
        question: "Should I use a password manager instead of memorizing passwords?",
        answer:
          "Yes. Use a password manager (1Password, Bitwarden, KeePass) to generate and store unique random passwords for every account. Memorize only your master password — make it a strong passphrase.",
      },
      {
        question: "How often should I change my passwords?",
        answer:
          "Per NIST SP 800-63B, the long-standing advice to change passwords every 90 days is now considered counterproductive — it leads to weaker passwords as users make small predictable modifications. Change passwords ONLY when: (1) a service reports a breach, (2) you suspect compromise on your device, (3) you discover password reuse with a breached account. Strong, unique passwords don't need rotation.",
      },
      {
        question: "What does it mean if my password is in a breach?",
        answer:
          "It means the password has appeared in at least one publicly leaked database — which means attackers have it on their lists. Credential-stuffing attacks systematically try breached passwords against every major service. Replace the password immediately, even if it scores 'strong' on entropy. Strong + breached = compromised.",
      },
      {
        question: "Is 'correct horse battery staple' really safe?",
        answer:
          "The PHRASE itself is famous (from XKCD #936) so attackers explicitly include it in wordlists. But the METHOD — picking 4-6 truly random words from a large list — is sound. Use Diceware to generate fresh random word combinations. Six random Diceware words give ~77 bits of entropy — strong against any offline attack.",
      },
      {
        question: "What's a good length for a master password?",
        answer:
          "For a password manager master password: aim for 80–100+ bits of entropy. That's a 7-8 word Diceware passphrase (~90-100 bits) or a 16+ character random string. The master password is the one weak point of any password manager — invest in making it both strong AND memorable so you never need to write it down.",
      },
      {
        question: "Is online or offline attack the real threat?",
        answer:
          "Always design against offline attacks. Online attacks are rate-limited (5-10 attempts before lockout). Offline attacks happen after database breaches — and at that point, an attacker runs billions of guesses per second on a GPU cluster. Every database breach starts as 'this won't happen' and ends with passwords on hashcat. Assume your hash will eventually be leaked; pick a password that survives offline cracking.",
      },
    ],

    relatedTools: [
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "BIP39 Passphrase Generator", href: "/crypto-tools/bip39-generator" },
      { name: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PasswordStrengthAnalyzerPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PasswordAnalyzerTool />
        </div>
      )}
    />
  )
}
