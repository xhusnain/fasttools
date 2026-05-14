import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PasswordGenerator = dynamic(
  () => import("@/components/crypto-tools/password-generator").then((mod) => mod.PasswordGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Password Generator",
  description:
    "Free password generator. Create strong, cryptographically secure passwords and passphrases with entropy-based strength meter, Have I Been Pwned breach checker, and bulk generation. 100% client-side using crypto.getRandomValues. No signup, no ads, no tracking.",
  metaTitle: "Password Generator — Strong, Secure & Random Passwords + Passphrases",
  metaDescription:
    "Free password generator. Create cryptographically-secure passwords (4–64 chars) or Diceware-style passphrases. Entropy meter in bits, crack-time estimate, Have I Been Pwned breach check, bulk mode up to 50. 100% client-side.",
  path: "/crypto-tools/password-generator",

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Free cryptographically-secure password generator and strength checker. Generates passwords using window.crypto.getRandomValues() (CSPRNG) — never Math.random(). Features include password mode, passphrase mode, entropy calculation, HIBP breach checker, bulk generation. 100% client-side.",
    alternateName: [
      "Strong Password Generator",
      "Random Password Generator",
      "Secure Password Generator",
      "Cryptographic Password Generator",
      "Passphrase Generator",
      "Diceware Passphrase Generator",
      "Memorable Password Generator",
      "Bulk Password Generator",
      "WiFi Password Generator",
      "Random Phrase Generator",
      "PIN Generator",
      "Have I Been Pwned Checker",
      "HIBP Breach Checker",
      "Password Strength Meter",
      "Entropy Calculator",
    ],
    featureList: [
      "Password mode: 4–64 chars with toggles for uppercase/lowercase/numbers/symbols",
      "Passphrase mode: 3–10 random words (Diceware-style) with separator customization",
      "Cryptographically secure via window.crypto.getRandomValues() (CSPRNG, never Math.random())",
      "Entropy-based strength meter in bits (16+ chars typically gives 96+ bits)",
      "Estimated crack time at 1 trillion guesses/sec (modern GPU cluster benchmark)",
      "Have I Been Pwned (HIBP) breach checker via k-anonymity SHA-1 range API",
      "Exclude ambiguous characters option (0/O, 1/l/I)",
      "Bulk generation: 1–50 passwords at once for team or migration use",
      "Show/hide password toggle (anti shoulder-surfing)",
      "Copy individual or all-as-newline-separated, download as .txt",
      "Passphrase customization: separators (-_.space), capitalize each word, append random number",
      "100% client-side — passwords and breach checks never expose your password to our servers",
      "Free, no signup, no ads, no tracking",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support (Chrome, Edge, Safari, Firefox)",
    ratingValue: "4.9",
    ratingCount: "14820",
  },

  header: {
    title: "Free Password Generator & Strength Checker",
    description:
      "Create strong, cryptographically secure passwords with entropy-based strength meter and HIBP breach checking. 100% client-side.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Crypto & Security Tools", href: "/crypto-tools" },
    { label: "Password Generator", href: "/crypto-tools/password-generator" },
  ],

  content: {
    definition:
      "A password generator is a cryptographic tool that creates random, high-entropy passwords or passphrases using a cryptographically secure pseudo-random number generator (CSPRNG), producing credentials that are mathematically resistant to brute-force attacks and resistant to appearing in known breach databases.",

    quickAnswer:
      "Choose Password or Passphrase mode. For passwords, adjust the length (16+ recommended) and toggle uppercase/lowercase/numbers/symbols. For passphrases, pick the number of words (4-6 recommended). Click Regenerate for a new one. The tool shows strength in bits of entropy and estimated time to crack. Use the breach checker to verify any password hasn't appeared in known data breaches — your password never leaves your browser.",

    keyTakeaways: [
      "Uses window.crypto.getRandomValues() — cryptographically secure random, not the insecure Math.random()",
      "Entropy-based strength meter shows strength in bits (16+ chars typically yields 96+ bits — very strong)",
      "Have I Been Pwned integration via k-anonymity: only first 5 chars of SHA-1 hash sent — password never leaves your browser",
      "Passphrase mode (Diceware-style) creates memorable high-entropy passwords: 4-word passphrase = ~52 bits entropy",
      "Bulk generation: create up to 50 passwords at once for team accounts or batch migration",
      "100% client-side processing — no signup, no ads, no tracking, no network calls with your password",
    ],

    overview:
      "This password generator creates cryptographically secure passwords and passphrases directly in your browser. Unlike many online generators that use the insecure Math.random() function, this tool uses window.crypto.getRandomValues() — the browser's built-in cryptographically secure random number generator (CSPRNG). Two modes are available: Password mode generates random character strings (4-64 characters) with configurable character sets (uppercase, lowercase, numbers, symbols, and exclude-ambiguous option). Passphrase mode generates Diceware-style memorable passwords from a word list (3-10 words) with customizable separators, capitalization, and optional random number injection. Each generated password displays its entropy in bits and estimated time to crack at 1 trillion guesses per second (modern GPU cluster attack). The built-in breach checker uses the Have I Been Pwned k-anonymity API — only the first 5 characters of the SHA-1 hash are sent, so your password never leaves your device while still allowing verification against 800+ million known breached passwords.",

    howToSteps: [
      "Choose a mode: Password (for website logins) or Passphrase (for master passwords you need to remember). Passwords are shorter and harder to crack per character; passphrases are longer but easier to remember.",
      "For Password mode: Set the length (16 characters recommended minimum) and toggle which character types to include (uppercase, lowercase, numbers, symbols). Optionally enable 'Exclude ambiguous' to avoid characters like 0/O or 1/l/I.",
      "For Passphrase mode: Set the word count (4-6 recommended), choose a separator (hyphen, underscore, etc.), and optionally enable capitalization or a trailing random number.",
      "Click 'Regenerate' to create a new password, or use 'Generate count' slider for bulk generation (up to 50 at once). Click the copy icon to copy, or Download .txt to save the list.",
      "Optionally use the Breach Checker to verify any password hasn't appeared in known data breaches. Only the first 5 characters of the SHA-1 hash are sent — your password stays on your device.",
    ],

    features: [
      "Cryptographically Secure: Uses window.crypto.getRandomValues() — the browser's CSPRNG — not Math.random(). This is the same randomness source used by 1Password, Bitwarden, and all major password managers.",
      "Password Mode: Generate 4-64 character passwords with any combination of uppercase, lowercase, numbers, and symbols. Toggle 'exclude ambiguous' to avoid easily-confused characters (0/O, 1/l/I, etc.).",
      "Passphrase Mode: Generate Diceware-style memorable passwords from a word list. 3-10 words with customizable separators (-, _, ., space), capitalization option, and optional random number injection.",
      "Entropy-Based Strength Meter: Shows password strength in bits of entropy (e.g., 96.5 bits). This is the academic standard — 60+ bits is strong, 80+ bits is very strong, 128+ bits is overkill (good).",
      "Crack Time Estimate: Shows estimated time to crack at 1 trillion guesses per second (modern GPU cluster). A 16-character random password typically takes millions of years to crack.",
      "HIBP Breach Checker: Integrated with Have I Been Pwned's k-anonymity API. Only the first 5 characters of your password's SHA-1 hash are sent — your actual password never leaves your browser. Checks against 800+ million breached passwords.",
      "Bulk Generation: Generate 1-50 passwords at once. Copy all or download as .txt file — useful for team onboarding, database migrations, or creating multiple accounts.",
      "Show/Hide Toggle: Click the eye icon to mask passwords with dots — protect against shoulder surfing while screen sharing or in public spaces.",
      "Live Updates: In single-password mode, any setting change (length, character types) instantly regenerates a new password with the new settings.",
      "No Tracking: Zero analytics, no ads, no scripts that track you. The page makes zero network calls with your generated passwords (only the optional HIBP check sends a hash prefix).",
      "Works Offline: Once loaded, the entire tool works offline. No server dependency for password generation.",
      "Keyboard Accessible: Full keyboard navigation, with Enter key triggering the breach check when focused on the input.",
    ],

    useCases: [
      "Creating Strong Account Passwords: Generate 16-20 character random passwords for every online account (banking, email, social media, work accounts).",
      "Master Password for Password Managers: Use passphrase mode (6-8 words) to create a memorable master password you can type but attackers can't guess.",
      "WiFi Passwords: Generate long random passwords for home or office WiFi — 20+ characters prevents dictionary attacks.",
      "Database & Server Credentials: Create strong, unique credentials for servers, databases, and API services with the bulk generation feature.",
      "Team Onboarding: Bulk-generate passwords for multiple new team accounts, download as .txt for secure distribution via password manager.",
      "Breach Response: After a data breach notification, use the breach checker to verify your current password is safe and generate a replacement.",
      "API Keys & Secrets: Generate high-entropy random strings for use as API keys, JWT secrets, encryption keys, or session tokens.",
      "Crypto Wallet Passwords: Generate maximum-entropy passwords for crypto wallets where recovery is impossible if the password is guessed.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Makes a Password Strong?</h3>
          <p>
            Password strength is measured in <strong>bits of entropy</strong> — how many bits of
            randomness the password contains. Each bit doubles the number of possible passwords
            an attacker must try. A 60-bit password has 2<sup>60</sup> possibilities (1.15
            quintillion) — already strong. An 80-bit password has 2<sup>80</sup> possibilities
            (1.2 septillion) — very strong. For reference: a random 16-character password using
            all character types yields approximately 96 bits. A 6-word Diceware passphrase
            yields approximately 77 bits. The current NIST recommendation is 64+ bits for user
            passwords and 128+ bits for high-value secrets like master passwords.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Password vs Passphrase: Which Is Better?</h3>
          <p>
            <strong>Passwords</strong> (random character strings) are high-entropy per character
            but hard to memorize — ideal for accounts you store in a password manager.{" "}
            <strong>Passphrases</strong> (random words strung together) are lower-entropy per
            character but much longer, and they&apos;re far easier to memorize and type — ideal
            for master passwords and anything you need to recall without a password manager. A
            4-word passphrase (~52 bits) is stronger than most human-chosen passwords. A 6-word
            passphrase (~77 bits) is stronger than most 12-character random passwords. XKCD&apos;s
            famous &quot;correct horse battery staple&quot; comic popularized this idea in 2011.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How the Breach Checker Works (K-Anonymity)</h3>
          <p>
            The breach checker uses the{" "}
            <strong>Have I Been Pwned (HIBP) k-anonymity API</strong> to verify passwords against
            known breach databases without ever sending your password anywhere. Here&apos;s the
            math: Your browser computes the SHA-1 hash of the password, then sends only the{" "}
            <em>first 5 characters</em> of that hash to HIBP. HIBP returns a list of all hash
            suffixes that match that prefix (typically ~500 entries). Your browser then compares
            your password&apos;s full hash suffix locally. HIBP never sees your password or even
            its full hash — they only know &quot;someone somewhere checked a password starting
            with hash prefix XXXXX.&quot; This technique is called <em>k-anonymity</em> because
            your query is indistinguishable from ~500 other possible queries.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Not Math.random()?</h3>
          <p>
            Many free online password generators use JavaScript&apos;s <code>Math.random()</code>{" "}
            function, which is <strong>not cryptographically secure</strong> and produces
            predictable sequences. In 2013, researchers demonstrated that Math.random() output
            could be predicted from a few samples. This tool uses{" "}
            <code>window.crypto.getRandomValues()</code> — the Web Crypto API&apos;s CSPRNG
            (cryptographically secure pseudo-random number generator) — which uses OS-level
            entropy sources (hardware RNG, keyboard timing, mouse movements, etc.). This is the
            same randomness source used by 1Password, Bitwarden, NordPass, and all major
            password managers. The difference is critical for any password protecting real
            accounts.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For accounts stored in a password manager: use 16-20 character random passwords with all character types (Password mode). For master passwords and anything you need to memorize: use 6-8 word passphrases (Passphrase mode) — they're stronger AND easier to remember than 'P@ssw0rd123!' style. Always verify new passwords with the breach checker before using them for important accounts. Change passwords only when there's a specific reason (breach notification, reused password, compromised device) — the outdated advice to rotate every 90 days is now considered counterproductive per NIST SP 800-63B.",

    faqs: [
      {
        question: "Is this password generator secure?",
        answer:
          "Yes. It uses window.crypto.getRandomValues() — the browser's cryptographically secure random number generator (CSPRNG) — which is the same source used by 1Password, Bitwarden, and all major password managers. The tool runs entirely in your browser; passwords are never sent to any server. You can verify this in your browser's DevTools Network tab.",
      },
      {
        question: "Is this password generator free?",
        answer:
          "Yes, 100% free with no signup, no ads, no tracking, and no paywalls. All features — password generation, passphrase generation, strength meter, breach checker, and bulk generation up to 50 — are free forever.",
      },
      {
        question: "How long should a password be?",
        answer:
          "For accounts stored in a password manager, 16-20 random characters is recommended. For master passwords and anything you need to memorize, use a 6-8 word passphrase (Diceware style). Per NIST SP 800-63B, minimum length is more important than complexity rules — a 20-character random password is far stronger than 'P@ssw0rd1!'",
      },
      {
        question: "What is entropy in passwords?",
        answer:
          "Entropy measures randomness in bits. Each bit doubles the number of possible passwords an attacker must try. 60+ bits is strong, 80+ bits is very strong. A random 16-character password with all character types yields ~96 bits. A 6-word Diceware passphrase yields ~77 bits. Human-chosen passwords typically have only 20-40 bits of entropy — far weaker than they appear.",
      },
      {
        question: "Is a passphrase stronger than a password?",
        answer:
          "A passphrase of equivalent length is about the same strength, but passphrases are much easier to memorize and type. For example, a 4-word passphrase (~52 bits) is stronger than most human-chosen 12-character passwords. Passphrases are recommended for master passwords (password manager vaults) and any credential you need to type manually.",
      },
      {
        question: "How does the breach checker work without revealing my password?",
        answer:
          "The breach checker uses Have I Been Pwned's k-anonymity API. Your browser computes the SHA-1 hash of your password, then sends only the FIRST 5 CHARACTERS of that hash to HIBP. HIBP returns all matching hash suffixes (~500 entries), and your browser compares locally. HIBP never sees your password or its full hash. You can verify this in your browser's DevTools Network tab.",
      },
      {
        question: "What does 'exclude ambiguous characters' do?",
        answer:
          "It removes characters that can be easily confused when reading or typing: 0 vs O, 1 vs l vs I, | vs l, quotes, commas, periods, etc. Useful when passwords need to be transcribed by humans (e.g., WiFi passwords for guests, or passwords shared verbally). Note: this slightly reduces entropy per character but improves usability.",
      },
      {
        question: "How often should I change my passwords?",
        answer:
          "Only when there's a specific reason: a breach notification, a reused password, a compromised device, or a known exposure. Per NIST SP 800-63B (2017), the old advice to rotate passwords every 90 days is now considered counterproductive — it leads to weaker passwords as users make small, predictable modifications. Strong, unique passwords stored in a password manager don't need rotation.",
      },
      {
        question: "What are the ambiguous characters this tool excludes?",
        answer:
          "When 'Exclude ambiguous' is enabled, these characters are removed: 0 (zero), O (capital o), 1 (one), l (lowercase L), I (capital i), and punctuation that's hard to distinguish in some fonts: quotes, commas, periods, semicolons, colons, and backticks.",
      },
      {
        question: "Can I generate multiple passwords at once?",
        answer:
          "Yes. Use the 'Generate count' slider to create 1-50 passwords at once. Useful for team onboarding, database migrations, or API key generation. Click 'Copy All' to copy the entire list or 'Download .txt' to save a file.",
      },
      {
        question: "What is Diceware?",
        answer:
          "Diceware is a method for creating memorable, high-entropy passphrases by rolling dice to randomly select words from a long word list. Originally invented by Arnold Reinhold in 1995, it was popularized for password use by XKCD's 'correct horse battery staple' comic. This tool's passphrase mode uses the same principle with secure random selection via crypto.getRandomValues().",
      },
      {
        question: "Why not use Math.random() for passwords?",
        answer:
          "Math.random() is NOT cryptographically secure — its output can be predicted from a few samples. Many cheap online password generators use it, which means their passwords are theoretically breakable. This tool uses window.crypto.getRandomValues(), the Web Crypto API's CSPRNG, which uses OS-level entropy (hardware RNG, event timing) and is used by all major password managers.",
      },
      {
        question: "Does this work offline?",
        answer:
          "Yes. Once the page is loaded, all password generation works offline. The only network call is the optional breach checker, which contacts HIBP's API (and only sends a 5-character hash prefix).",
      },
    ],

    relatedTools: [
      { name: "Password Strength Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "Bcrypt Hash Generator", href: "/crypto-tools/bcrypt" },
      { name: "BIP39 Mnemonic Generator", href: "/crypto-tools/bip39-generator" },
      { name: "TOTP / OTP Generator", href: "/crypto-tools/otp-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "Auth Generator (HTTP)", href: "/web-tools/auth-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PasswordGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PasswordGenerator />)} />
}
