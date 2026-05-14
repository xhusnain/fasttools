import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Bip39GeneratorTool } from "@/components/crypto-tools/bip39-generator"

const toolConfig = createToolConfig({
  toolName: "BIP39 Generator",
  description:
    "Generate and validate BIP39 mnemonic seed phrases for compatible wallet workflows.",
  metaTitle: "BIP39 Mnemonic Generator — Generate 12/24 Word Seed Phrases Free (2026)",
  metaDescription:
    "Free BIP39 mnemonic seed phrase generator. Create 12-word or 24-word recovery phrases for Bitcoin, Ethereum, and crypto wallets. Validate existing seed phrases with checksum verification.",
  path: "/crypto-tools/bip39-generator",

  header: {
    title: "BIP39 Mnemonic Seed Phrase Generator",
    description:
      "Generate 12-word or 24-word BIP39 mnemonic seed phrases for Bitcoin, Ethereum, Solana, and other cryptocurrency wallets. Validate existing seed phrases with checksum verification. Words are drawn from the standard 2048-word BIP39 English wordlist. Generated entirely in your browser — seed phrases never leave your device.",
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
      "Generate and validate BIP39 mnemonic phrases with configurable length and language support.",
    alternateName: ["BIP39 Mnemonic Generator", "Seed Phrase Checker"],
    featureList: [
      "Mnemonic generation",
      "Mnemonic validation",
      "Entropy view",
      "Passphrase input",
    ],
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
      "Generate BIP39 mnemonic seed phrases with this free online tool. Create 12-word (128-bit entropy) or 24-word (256-bit entropy) recovery phrases compatible with Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and all BIP39-compatible cryptocurrency wallets including MetaMask, Ledger, Trezor, and Trust Wallet. Words are selected from the standardized 2048-word BIP39 English wordlist with the last word serving as a checksum for error detection. Validate existing seed phrases to verify correct word order and checksum before wallet recovery. All generation uses cryptographic randomness in your browser — seed phrases are never transmitted to any server.",

    howToSteps: [
      "Select the word count: 12 words (128-bit entropy) or 24 words (256-bit entropy).",
      "Click Generate to create a new BIP39 mnemonic phrase with cryptographic randomness.",
      "Write down the seed phrase on paper and store it securely offline — never digitally.",
      "Use the Validate tab to verify an existing phrase's checksum before wallet recovery.",
    ],

    features: [
      "12-word (128-bit) and 24-word (256-bit) BIP39 mnemonic generation",
      "Checksum validation for existing seed phrases",
      "Standard 2048-word BIP39 English wordlist",
      "Compatible with MetaMask, Ledger, Trezor, Trust Wallet, and all BIP39 wallets",
      "Client-side generation with Web Crypto API — phrases never leave your browser",
    ],

    useCases: [
      "Generating backup seed phrases for new cryptocurrency wallet setup",
      "Validating existing mnemonic phrases before wallet recovery or migration",
      "Testing BIP39 wallet import flows during cryptocurrency app development",
      "Learning about HD wallet key derivation and mnemonic encoding standards",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          BIP39 (Bitcoin Improvement Proposal 39) defines a standard for encoding cryptographic seeds as human-readable word sequences. A 12-word phrase represents 128 bits of entropy, while a 24-word phrase represents 256 bits. The words come from a fixed 2048-word English wordlist, and the last word includes a checksum derived from the SHA-256 hash of the entropy — allowing wallets to detect typos during recovery.
        </p>
        <p>
          Your seed phrase is the master key to all cryptocurrency wallets derived from it. Anyone who knows your seed phrase can access your funds. Never store seed phrases in cloud storage, email, screenshots, or password managers. Write them on paper or stamp them on metal, and store in a secure physical location. Test your recovery process with a small amount before funding the wallet.
        </p>
      </div>
    ),

    proTip:
      "Use 24-word phrases for high-value wallets (256-bit entropy vs 128-bit). Write the phrase on acid-free paper or stamp on stainless steel — never store digitally. Test wallet recovery with a small balance before depositing significant funds.",

    faqs: [
      {
        question: "What is a BIP39 mnemonic seed phrase?",
        answer:
          "A BIP39 mnemonic is a set of 12 or 24 English words that encodes the master seed for a cryptocurrency wallet. It is used to back up and restore all accounts and private keys derived from that seed.",
      },
      {
        question: "Is 12 words or 24 words more secure?",
        answer:
          "24 words provides 256-bit entropy vs 128-bit for 12 words. Both are practically uncrackable, but 24 words offers a higher security margin for high-value wallets and long-term storage.",
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
        question: "How do I generate a 12-word seed phrase?",
        answer:
          "Select 12 words from the strength dropdown above and click generate. The tool uses your browser's cryptographically-secure random number generator (window.crypto.getRandomValues()) to produce 128 bits of entropy, then encodes that entropy into 12 words from the standard BIP39 English wordlist. A 12-word phrase has ~128 bits of security — strong enough that brute-forcing it would take longer than the age of the universe."
      },
      {
        question: "Is a 24-word seed phrase more secure than 12 words?",
        answer:
          "Yes, mathematically — 24 words = 256 bits of entropy vs 12 words = 128 bits. But 128 bits is already infeasible to brute-force with any current or foreseeable technology. The practical difference: 24 words is required for some hardware wallets and post-quantum threat models; 12 words is fine for most Bitcoin and Ethereum use. Both protect against the same realistic attacks (theft of physical device, social engineering, malware) — those are mitigated by storage practices, not seed length."
      },
      {
        question: "Is this a BIP39 mnemonic / mnemonic seed phrase generator?",
        answer:
          "Yes. The tool generates a BIP39-spec mnemonic phrase — also called a 'seed phrase', 'recovery phrase', 'mnemonic seed phrase', or '12/24 word phrase'. All these terms refer to the same standard (Bitcoin Improvement Proposal 39) used by Bitcoin, Ethereum, Solana, and most other cryptocurrency wallets to encode a master private key as human-readable words."
      },
      {
        question: "Can I add a BIP39 passphrase for extra protection?",
        answer:
          "Yes — BIP39 allows an optional passphrase (sometimes called the '25th word' or 'extension word') that combines with your seed phrase to produce a completely different wallet. Even if someone steals your physical seed phrase, they can't access funds without also knowing the passphrase. Most hardware wallets support this. Use a passphrase you can remember — losing it means the funds are unrecoverable."
      }
    ],

    relatedTools: [
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Password Strength Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "Hash Text (SHA-256/512)", href: "/crypto-tools/hash-text" },
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
