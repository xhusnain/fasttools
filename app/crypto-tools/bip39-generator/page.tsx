import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Bip39GeneratorTool } from "@/components/crypto-tools/bip39-generator"

const toolConfig = createToolConfig({
  toolName: "BIP39 Generator",
  description:
    "Generate and validate BIP39 mnemonic seed phrases for compatible wallet workflows.",
  metaTitle: "BIP39 Mnemonic Generator — 12 / 24 Word Seed Phrase + Validator",
  metaDescription:
    "Free BIP39 mnemonic seed phrase generator and validator. Create 12-word (128-bit) or 24-word (256-bit) recovery phrases for Bitcoin, Ethereum, Solana & every BIP39 wallet. Checksum validation, optional passphrase, 100% client-side.",
  path: "/crypto-tools/bip39-generator",

  header: {
    title: "BIP39 Mnemonic Seed Phrase Generator",
    description:
      "Create a new 12 or 24-word mnemonic, or validate an existing one with checksum verification. Words are drawn from the standard 2048-word BIP39 English wordlist, generated entirely in your browser — nothing ever leaves your device.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "BIP39 Generator", href: "/crypto-tools/bip39-generator" },
  ],

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "Generate and validate BIP39 mnemonic phrases with configurable length (12/15/18/21/24 words), checksum verification, and optional BIP39 passphrase (25th word) support. 100% client-side via Web Crypto API.",
    alternateName: [
      "BIP39 Mnemonic Generator",
      "Seed Phrase Generator",
      "Recovery Phrase Generator",
      "BIP39 Validator",
      "Mnemonic Checker",
    ],
    featureList: [
      "12 / 15 / 18 / 21 / 24 word mnemonic generation (128–256-bit entropy)",
      "Standard 2048-word BIP39 English wordlist (matches every spec-compliant wallet)",
      "Checksum validation: detects typos and wrong word order before wallet recovery",
      "Cryptographically secure via window.crypto.getRandomValues() (CSPRNG)",
      "Optional BIP39 passphrase (25th word) support",
      "View raw entropy in hex (debug or restore from external entropy)",
      "Works with any BIP39 / BIP44 wallet across Bitcoin, Ethereum, Solana, and other chains",
      "100% client-side — nothing touches our servers; works offline once loaded",
      "Free, no signup, no ads, no telemetry",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A BIP39 Mnemonic Generator is a free tool that creates cryptographic seed phrases (12 or 24 words) for cryptocurrency wallet backup and recovery following the BIP39 standard.",
    quickAnswer:
      "Select word count (12 or 24) and click generate to create a BIP39 mnemonic phrase. The phrase can be used to back up and restore cryptocurrency wallets. Store it offline — never share it.",
    keyTakeaways: [
      "Generates 12-word (128-bit) or 24-word (256-bit) mnemonic phrases",
      "Follows the BIP39 standard used by Bitcoin, Ethereum, and most crypto wallets",
      "Words are drawn from a standardized 2048-word English wordlist",
      "The last word includes a checksum for error detection",
      "Generated in your browser using cryptographic randomness — never transmitted",
    ],
    overview:
      "Generate a BIP39 mnemonic seed phrase in your browser, at 12-word (128-bit) or 24-word (256-bit) strength. The output follows the same standard used by MetaMask, Ledger, Trezor, Trust Wallet, and Phantom, so it works across Bitcoin, Ethereum, Solana, and every BIP39-compatible chain. The last word encodes a checksum, and the Validate tab recomputes it — useful for catching a transcription error before you attempt wallet recovery. Everything runs on cryptographic randomness (window.crypto.getRandomValues) with zero network requests. Important: a freshly generated phrase controls a brand-new, empty wallet. No tool can produce a phrase linked to existing funds, and any site claiming otherwise is a scam.",

    howToSteps: [
      "Select the word count: 12 words (128-bit entropy) or 24 words (256-bit entropy).",
      "Click Generate to create a new BIP39 mnemonic phrase with cryptographic randomness.",
      "Write down the seed phrase on paper and store it securely offline — never digitally.",
      "Use the Validate tab to verify an existing phrase's checksum before wallet recovery.",
    ],

    features: [
      "Five mnemonic lengths: 12, 15, 18, 21, or 24 words (128–256 bits of entropy)",
      "Cryptographically secure generation via window.crypto.getRandomValues() — never Math.random()",
      "Checksum validation tab: paste an existing phrase to verify word order and detect typos",
      "Optional BIP39 passphrase (25th word) support",
      "Raw entropy view in hex for restoring from external sources or debugging derivation",
      "100% client-side — nothing leaves your browser",
    ],

    useCases: [
      "Setting up a fresh multi-chain wallet with a new backup phrase",
      "Validating an existing mnemonic before importing into a hardware wallet (Ledger / Trezor)",
      "Generating throwaway test wallets for dApp development, smart contract testing, or QA",
      "Learning how HD wallets derive private keys (BIP32 / BIP44 derivation)",
      "Migrating between wallet apps — validate the checksum here before importing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a BIP39 Mnemonic?</h3>
          <p>
            BIP39 (Bitcoin Improvement Proposal 39) is a standard published in 2013 that defines how to encode cryptographic seeds as human-readable word sequences. A wallet generates 128–256 bits of random entropy, appends a SHA-256-derived checksum, splits the result into 11-bit chunks, and looks up each chunk in a fixed 2048-word English wordlist. The result is a 12, 15, 18, 21, or 24-word phrase that encodes a master seed from which all wallet private keys, addresses, and accounts are deterministically derived (via BIP32 / BIP44). The same seed phrase recovers the same wallet across any BIP39-compliant app — MetaMask, Ledger, Trezor, Phantom, Trust Wallet, and hundreds of others.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">12 Words vs 24 Words: Which Should You Use?</h3>
          <p>
            <strong>12 words = 128 bits of entropy.</strong> Already infeasible to brute-force — 2<sup>128</sup> ≈ 3.4×10<sup>38</sup> possibilities. Even at one trillion guesses per second across a billion GPUs, it would take far longer than the age of the universe.{" "}
            <strong>24 words = 256 bits of entropy.</strong> Strictly stronger and required by some hardware wallets (e.g., Ledger Nano X default, Coldcard) and recommended for post-quantum threat models (Grover&apos;s algorithm halves effective security, so 256 → 128 bits of quantum resistance). Practical guidance: <strong>12 words is fine for most hot wallets and day-to-day crypto.</strong> Use 24 words for long-term cold storage, generational wealth, or hardware wallets where you have the option.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Optional 25th Word (BIP39 Passphrase)</h3>
          <p>
            BIP39 supports an optional passphrase — sometimes called the &quot;25th word&quot; or &quot;extension word&quot; — that combines with your seed phrase via PBKDF2-HMAC-SHA512 (2048 iterations) to produce a completely different master seed. Even if an attacker steals your physical 12 / 24-word phrase, they cannot access funds without also knowing the passphrase. Trade-off: lose the passphrase = lose all funds, with no recovery. Best practice: memorize a strong but rememberable passphrase, or write it on a separate sheet stored in a separate physical location.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How to Store a Seed Phrase Securely</h3>
          <p>
            Your seed phrase is the <em>master key to every wallet derived from it</em>. Anyone who reads it can drain every account. <strong>Never store digitally:</strong> no cloud, no email, no screenshots, no password managers, no notes apps, no photos. Plaintext storage on any internet-connected device is the #1 cause of crypto theft. <strong>Best practices:</strong> write the phrase on acid-free paper or stamp it onto stainless-steel plates (Cryptosteel, Billfodl, Trezor Keep Metal); store in a fireproof safe, safety-deposit box, or geographically distributed secure locations. Test recovery with a small balance before funding the wallet. Consider Shamir Secret Sharing (SLIP39) or multisig for amounts you cannot afford to lose.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Checksum Validation Matters</h3>
          <p>
            The last word of a BIP39 phrase encodes a checksum derived from a SHA-256 hash of the entropy — 4 bits of checksum for a 12-word phrase, 8 bits for 24 words. When you validate a mnemonic, the tool recomputes that hash and compares — if a single word is misspelled or in the wrong position, the checksum fails. Use the Validate tab <strong>before</strong> attempting wallet recovery with a written or hardware-displayed phrase. A failed checksum is almost always a transcription error; a passing checksum confirms the phrase is structurally valid (though it cannot prove it&apos;s the &quot;right&quot; phrase for a specific wallet — only the wallet&apos;s addresses can confirm that).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">A New Phrase Is Always an Empty Wallet</h3>
          <p>
            Generating a mnemonic creates the keys to a wallet that has never been used — it holds nothing until you send funds to one of its addresses. It is mathematically infeasible for any generator to land on a phrase that already controls someone else&apos;s funds (the odds are below 1 in 2<sup>128</sup>). Be wary of sites or videos promising phrases tied to funded wallets, and never type a phrase that someone else gave you into a wallet — both are common theft schemes. A real seed phrase should be created by you, seen only by you, and stored offline.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use 24-word phrases for high-value wallets (256-bit entropy vs 128-bit). Write the phrase on acid-free paper or stamp on stainless steel — never store digitally. Test wallet recovery with a small balance before depositing significant funds.",

    faqs: [
      {
        question: "Is this BIP39 generator safe to use?",
        answer:
          "Yes. The tool runs 100% client-side using window.crypto.getRandomValues() — the browser's cryptographically secure random number generator (CSPRNG). Your seed phrase is generated in your browser's memory and is never transmitted to any server. You can verify this by opening DevTools → Network tab while generating: there are zero outgoing requests. For maximum security, use the tool on an air-gapped device (load the page, disconnect from the internet, then generate).",
      },
      {
        question: "What is a BIP39 mnemonic seed phrase?",
        answer:
          "A BIP39 mnemonic is a set of 12, 15, 18, 21, or 24 English words that encodes the master seed for a cryptocurrency wallet. It is used to back up and restore all accounts and private keys derived from that seed. The same mnemonic works across any BIP39-compatible wallet — MetaMask, Ledger, Trezor, Trust Wallet, Phantom, and hundreds more.",
      },
      {
        question: "Which wallets support BIP39 seed phrases?",
        answer:
          "Nearly all modern wallets: MetaMask, Ledger, Trezor, Trust Wallet, Exodus, Phantom (Solana), and most Bitcoin, Ethereum, and multi-chain wallets follow the BIP39 standard.",
      },
      {
        question: "Can I recover my wallet with just the seed phrase?",
        answer:
          "Yes, if the wallet uses BIP39 derivation. Enter your seed phrase in any compatible wallet to restore all accounts. You may also need the derivation path (e.g., m/44'/60'/0'/0 for Ethereum).",
      },
      {
        question: "How should I store my seed phrase securely?",
        answer:
          "Write it on paper or stamp it on metal (fire/water resistant). Store in a safe, safety deposit box, or secure location. Never store digitally — no cloud, no photos, no password managers.",
      },
      {
        question: "What happens if someone finds my seed phrase?",
        answer:
          "They can restore your wallet and access all funds. If you suspect your seed phrase is compromised, immediately transfer all assets to a new wallet with a freshly generated seed phrase.",
      },
      {
        question: "Is a 24-word seed phrase more secure than 12 words?",
        answer:
          "Yes, mathematically — 24 words = 256 bits of entropy vs 12 words = 128 bits. But 128 bits is already infeasible to brute-force with any current or foreseeable technology. The practical difference: 24 words is required for some hardware wallets and post-quantum threat models; 12 words is fine for most Bitcoin and Ethereum use. Both protect against the same realistic attacks (theft of physical device, social engineering, malware) — those are mitigated by storage practices, not seed length."
      },
      {
        question: "Can this generate a seed phrase for a wallet that already has funds?",
        answer:
          "No — and neither can any other tool. A generated phrase corresponds to a brand-new wallet with a zero balance. The keyspace is 2^128 or larger, so stumbling onto a funded wallet is mathematically impossible in practice. Sites advertising funded phrases, 'wallet cracking', or phrase lists are scams designed to steal from you (often by having you deposit funds into a wallet the scammer also controls). Never import a phrase you did not generate yourself."
      },
      {
        question: "Can I add a BIP39 passphrase for extra protection?",
        answer:
          "Yes — BIP39 allows an optional passphrase (sometimes called the '25th word' or 'extension word') that combines with your seed phrase via PBKDF2-HMAC-SHA512 (2048 iterations) to produce a completely different master seed. Even if someone steals your physical seed phrase, they can't access funds without also knowing the passphrase. Most hardware wallets (Ledger, Trezor, Coldcard) support this. Use a passphrase you can remember — losing it means the funds are unrecoverable."
      },
      {
        question: "What's the difference between a seed phrase and a private key?",
        answer:
          "A seed phrase is the master input from which thousands of private keys are deterministically derived (via BIP32 / BIP44 hierarchical derivation). A private key controls a single address. Knowing the seed phrase gives you every private key in the wallet (all chains, all accounts, all addresses); knowing one private key only gives you control of one address. This is why seed phrases are far more sensitive than individual private keys.",
      },
      {
        question: "Can I use a BIP39 phrase across different cryptocurrencies?",
        answer:
          "Yes — that's the whole point of BIP39 + BIP44. The same seed phrase generates Bitcoin addresses (m/44'/0'), Ethereum addresses (m/44'/60'), Solana addresses (m/44'/501'), and addresses for every other chain using their respective derivation paths. Multi-chain wallets like Trust Wallet and Phantom automatically handle this. You can also import the same phrase into MetaMask (for Ethereum / EVM chains) and Phantom (for Solana) simultaneously.",
      },
      {
        question: "What happens if I lose my BIP39 passphrase but still have the seed phrase?",
        answer:
          "The funds in the passphrase-protected wallet are unrecoverable. The seed phrase alone unlocks a different wallet (a decoy or empty one if you only used the passphrase-protected wallet). There is no 'forgot passphrase' recovery — that's the security feature. Best practice: write the passphrase on a separate sheet stored in a separate physical location, or memorize a strong but rememberable passphrase.",
      },
      {
        question: "Is iancoleman.io/bip39 safer than this tool?",
        answer:
          "Both use the same standard. The trustworthy way to generate seed phrases is on an air-gapped device — load the page, disconnect from the internet, and only then generate. This tool, like iancoleman's, runs entirely in your browser using window.crypto.getRandomValues(). You can verify zero network calls in DevTools → Network. For high-value wallets, prefer a hardware wallet's built-in generator (Ledger, Trezor, Coldcard) — those use isolated secure elements that never expose the seed to a general-purpose OS.",
      },
      {
        question: "Why are BIP39 wordlists only 2048 words?",
        answer:
          "2048 = 2^11, so each word encodes exactly 11 bits of entropy. The list was carefully chosen so the first 4 letters of each word are unique (allowing typing/recovery devices to accept the prefix) and no two words sound alike. The English wordlist is the standard; other languages exist (Japanese, Spanish, Chinese, etc.) but English is the most widely supported across wallets.",
      },
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Strength Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Bip39GeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <Bip39GeneratorTool />
        </div>
      )}
    />
  )
}
