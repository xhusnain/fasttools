import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Bip39GeneratorTool } from "@/components/crypto-tools/bip39-generator"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "BIP39 Passphrase Generator",
    description: "Generate secure BIP39 mnemonic phrases and seed codes online. Convert entropy to mnemonic and verify recovery phrases. 100% client-side security.",
    metaTitle: "BIP39 Generator - Secure Mnemonic Code & Seed Phrase Tool",
    metaDescription: "Generate secure BIP39 mnemonic phrases and seed codes online. Convert entropy to mnemonic and verify recovery phrases. 100% client-side security.",
    path: "/crypto-tools/bip39-generator",
    keywords: [
        "BIP39 generator",
        "mnemonic code converter",
        "seed phrase generator",
        "crypto seed generator",
        "online bip39 tool",
        "entropy to mnemonic",
        "bitcoin seed phrase"
    ],
    heroImage: "/images/bip39-generator-hero.png",

    header: {
        title: "BIP39 Passphrase Generator - Ultimate Seed Tool",
        description: "Generate, verify, and secure your cryptocurrency wallets with our advanced BIP39 mnemonic generator. Supports 12 & 24 words, multiple languages, and custom entropy.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue", // Using blue to match the tech/crypto vibe
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "BIP39 Generator", href: "/crypto-tools/bip39-generator" },
    ],

    content: {
        overview: "The **BIP39 Passphrase Generator** is an essential tool for cryptocurrency users. It allows you to generate distinct **mnemonic phrases** (also known as seed phrases) based on the BIP39 standard. These phrases are the master keys to your crypto wallets, enabling you to recover funds on any compatible device. Our tool is built with a strict **privacy-first** approach: all generation happens offline in your browser window.",

        howToSteps: [
            "**Select Length**: Choose between **12 words** (128-bit security) or **24 words** (256-bit security, recommended for cold storage).",
            "**Choose Language**: Select your preferred language (English, Spanish, French, etc.) from the dropdown menu.",
            "**Generate**: Click 'Regenerate' or let the tool auto-create a secure random phrase for you.",
            "**Secure It**: Write down your phrase on paper. **Do not** store it digitally or screenshot it.",
            "**(Optional) Passphrase**: Add an extra passphrase for hidden wallet protection."
        ],

        features: [
            "**Standards Compliant**: Fully compatible with BIP39, allowing import into Ledger, Trezor, MetaMask, and Trust Wallet.",
            "**Offline-Ready**: Works 100% in the browser. You can go offline before generating for maximum safety.",
            "**Multi-Language Support**: Generate phrases in English, Spanish, French, Italian, Japanese, Korean, and Chinese.",
            "**Entropy Visualization**: View the raw hexadecimal entropy behind your seed phrase.",
            "**Checksum Validation**: Instantly verifies if a pasted mnemonic is valid or has a typo."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/bip39-generator-hero.png"
                        alt="Secure BIP39 Mnemonic Generator Interface"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6">What is BIP39?</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        **BIP39** (Bitcoin Improvement Proposal 39) is the industry standard for creating backup seeds for cryptocurrency wallets. Instead of remembering a long, complex string of random characters (like a private key), BIP39 allows you to back up your wallet using a human-readable list of words (e.g., "army van defense...").
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                        It works by taking a random number (entropy) and mapping it to a specific list of 2048 words. The result is a **Mnemonic Phrase** that is mathematically linked to your wallet's private keys.
                    </p>

                    <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Why 24 Words?</h3>
                        <p className="text-muted-foreground">
                            While 12 words (128 bits of entropy) are considered secure by modern standards, **24 words** (256 bits) provide an astronomical level of security, making brute-force attacks theoretically impossible with current technology.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Security Best Practices</h2>
                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Paper Backup</strong>
                            <span className="text-sm text-muted-foreground">Always write your seed phrase on paper or stamp it into metal. Digital files can be hacked.</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Verify Checksum</strong>
                            <span className="text-sm text-muted-foreground">Use our "Edit" feature to type your phrase back in and ensure it is valid before sending funds.</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Passphrase Protection</strong>
                            <span className="text-sm text-muted-foreground">Adding a "13th word" or passphrase creates a completely different wallet. Useful for "plausible deniability".</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Offline Generation</strong>
                            <span className="text-sm text-muted-foreground">For large amounts, load this page, disconnect your internet, generate the phrase, and close the tab.</span>
                        </li>
                    </ul>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is it safe to generate a seed phrase online?",
                answer: "Our tool runs entirely client-side, meaning no code leaves your browser. However, for maximum security (cold storage), we recommend disconnecting from the internet while generating your phrase."
            },
            {
                question: "Can I use this phrase with Ledger or Trezor?",
                answer: "Yes! This tool follows the standard BIP39 protocol used by Ledger, Trezor, MetaMask, Trust Wallet, and almost all modern hardware and software wallets."
            },
            {
                question: "What happens if I lose my seed phrase?",
                answer: "If you lose your seed phrase, you lose access to your crypto funds forever. There is no 'reset password' option in decentralized crypto. Keep your backup safe!"
            },
            {
                question: "Does the order of words matter?",
                answer: "Yes, absolutely. You must enter the words in the exact specific order they were generated (1-12 or 1-24) to recover your wallet."
            }
        ]
    }
})

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/bip39-generator-hero.png"]
    }
}

export default function Bip39GeneratorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BIP39 Passphrase Generator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Secure tool to generate and verify BIP39 mnemonic phrases for cryptocurrency wallets.",
        featureList: "Mnemonic Generation, Entropy Visualization, Multi-language Support, Checksum Validation",
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToolPageLayout
                {...toolConfig.getLayoutProps(
                    <Bip39GeneratorTool />
                )}
            />
        </>
    )
}
