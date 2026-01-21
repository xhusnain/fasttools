import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import Link from "next/link"
import Image from "next/image"

import { Key, Lock, Shield, FileKey, Fingerprint, RefreshCw } from "lucide-react"

const cryptoTools = [
    {
        title: "Token Generator",
        description: "Generate secure random tokens, API keys, and passwords. Customizable settings for length and character sets.",
        href: "/crypto-tools/token-generator",
        icon: Key,
        popular: true,
    },
    {
        title: "Bcrypt Generator",
        description: "Generate and verify secure Blowfish-based Bcrypt hashes with adjustable cost factors and strength detection.",
        href: "/crypto-tools/bcrypt",
        icon: Shield,
        popular: true,
    },
    {
        title: "Hash Text",
        description: "Generate secure cryptographic hashes (MD5, SHA1, SHA256, SHA512) for any text string instantly.",
        href: "/crypto-tools/hash-text",
        icon: RefreshCw,
        popular: true,
    },
]

const toolConfig = createToolConfig({
    toolName: "Free Crypto & Security Tools",
    description: "Secure and free online crypto tools: Bcrypt Generator, Token Generator, and more. Essential security utilities.",
    metaTitle: "Crypto Tools - Professional Security & Cryptography Utilities",
    metaDescription: "Free online crypto tools for developers & security professionals. Bcrypt, Token Generator, Hash Text. Client-side, privacy-first & secure.",
    path: "/crypto-tools",

    header: {
        title: "Crypto Tools - Professional Security & Cryptography Utilities",
        description: "Free Online Crypto Tools for Developers & Security Professionals. Discover our comprehensive collection running locally in your browser.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "green",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
    ],

    content: {
        overview: "Discover our comprehensive collection of crypto tools designed for developers, security professionals, and blockchain enthusiasts. All tools are free, run locally in your browser, and prioritize your privacy with client-side processing.",

        howToSteps: [
            "Select a Tool: Choose the specific crypto tool you need from our collection, such as the Bcrypt Generator or Token Generator.",
            "Configure Settings: Adjust the settings to match your requirements, such as salt rounds for Bcrypt or token length for the Generator.",
            "Generate Instantly: Click the generate button. Our tools use your browser's built-in Web Crypto API or verified libraries to create cryptographically secure results instantly.",
            "Copy & Use: Copy your secure output. Since everything runs client-side, your data remains private and never leaves your device."
        ],

        features: [
            "100% Client-Side: All cryptographic operations execute directly in your browser. No data is ever sent to our servers.",
            "CSPRNG Security: Uses the Cryptographically Secure Pseudo-Random Number Generator standard for production-grade security.",
            "Zero Data Storage: We don't store, track, or log any of your generated keys. Once you close the tab, it's gone.",
            "Customizable Output: Flexible controls for length, character sets, and formatting to meet specific API or security requirements.",
            "Instant & Free: Professional-grade security tools available instantly without registration or paywalls."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/crypto-hero.png"
                        alt="Crypto Tools Hero - Digital Security Illustration"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4">What Are Crypto Tools?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-primary">Crypto tools</span> are specialized utilities that help developers and security professionals generate secure credentials, manage cryptographic data, and perform encryption tasks. From API key generation to token creation, these tools use industry-standard cryptographic algorithms to ensure maximum security for your digital assets.
                    </p>
                </section>

                <hr className="border-border/40" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">Best Crypto Trading Tools & Analysis Utilities</h2>
                    <div className="bg-card p-6 rounded-xl border border-border/50">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Token Generator - Create Secure API Keys & Passwords</h3>
                        <p className="text-muted-foreground mb-4">
                            Generate cryptographically secure random tokens, API keys, session IDs, and passwords instantly. Our token generator uses the Web Crypto API's CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) for production-ready security.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                                <h4 className="font-semibold mb-2">Features:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>Customizable token length (16-512 characters)</li>
                                    <li>Multiple character sets (alphanumeric, symbols, hex)</li>
                                    <li>Instant generation with one click</li>
                                    <li>100% client-side processing for privacy</li>
                                    <li>Copy to clipboard functionality</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Use Cases:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    <li>API key generation for REST APIs</li>
                                    <li>Session token creation</li>
                                    <li>Secure password generation</li>
                                    <li>Salt generation for password hashing</li>
                                    <li>OAuth tokens and secrets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Crypto Analysis Tools for Research & Trading</h2>
                    <p className="text-muted-foreground mb-4">
                        While our current focus is on security and cryptography tools, we're expanding to include:
                    </p>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <li className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Crypto research tools</li>
                        <li className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Crypto charting tools</li>
                        <li className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Crypto price prediction tools</li>
                        <li className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Blockchain forensics tools</li>
                        <li className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"><span className="h-2 w-2 rounded-full bg-blue-500"></span>Crypto analytics tools</li>
                    </ul>
                    <p className="text-sm italic text-muted-foreground mt-3">
                        *Coming soon: Crypto trading tools for day trading, DeFi analysis, and blockchain monitoring.*
                    </p>
                </section>

                <hr className="border-border/40" />

                <section>
                    <h2 className="text-2xl font-bold mb-6">Why Choose Our Crypto Tools?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">1. Bank-Level Security</h3>
                            <p className="text-sm text-muted-foreground">All our <span className="font-semibold text-foreground">cryptography tools</span> use the Web Crypto API standard, ensuring your generated keys and tokens meet production security requirements. Perfect for developers building secure applications.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">2. 100% Privacy-First</h3>
                            <p className="text-sm text-muted-foreground">Unlike other online crypto tools, we never transmit your data. All processing happens locally in your browser, meaning your private keys, tokens, and passwords never leave your device.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">3. Free & Unlimited</h3>
                            <p className="text-sm text-muted-foreground">No registration, no limits, no hidden fees. Use our crypto currency tools as many times as you need, completely free.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">4. Developer-Friendly</h3>
                            <p className="text-sm text-muted-foreground">Clean interface, instant results, and copy-to-clipboard functionality make our tools perfect for developers who need quick, reliable crypto utilities.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Popular Crypto Tools Use Cases</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-muted/20 p-5 rounded-lg">
                            <h3 className="font-bold mb-3">For Blockchain Development</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                                <li>Generate secure wallet addresses</li>
                                <li>Create API keys for blockchain nodes</li>
                                <li>Produce random seeds for testing</li>
                                <li>Generate contract deployment keys</li>
                            </ul>
                        </div>
                        <div className="bg-muted/20 p-5 rounded-lg">
                            <h3 className="font-bold mb-3">For Web Development</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                                <li>API authentication tokens</li>
                                <li>Session management keys</li>
                                <li>CSRF tokens</li>
                                <li>JWT secrets</li>
                                <li>Database encryption keys</li>
                            </ul>
                        </div>
                        <div className="bg-muted/20 p-5 rounded-lg">
                            <h3 className="font-bold mb-3">For Security Professionals</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                                <li>Password generation and testing</li>
                                <li>Security token creation</li>
                                <li>Penetration testing credentials</li>
                                <li>Secure random data generation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="border-border/40" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">Crypto Tools for Windows, macOS & Linux</h2>
                    <p className="text-muted-foreground mb-4">
                        Our <span className="font-semibold text-foreground">crypto tools online</span> work seamlessly across all platforms:
                    </p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <li className="text-center p-3 bg-card border rounded-lg text-sm font-medium">Windows 10/11</li>
                        <li className="text-center p-3 bg-card border rounded-lg text-sm font-medium">macOS (Intel & Silicon)</li>
                        <li className="text-center p-3 bg-card border rounded-lg text-sm font-medium">Linux (All Distros)</li>
                        <li className="text-center p-3 bg-card border rounded-lg text-sm font-medium">iOS & Android</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                        No installation required - just visit our website and start using professional-grade cryptography tools instantly.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-xl font-bold mb-3">Best Crypto Tools for Day Trading (Coming Soon)</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Real-time market analysis</li>
                            <li>• Portfolio tracking and rebalancing</li>
                            <li>• Trading signal generators</li>
                            <li>• Risk management calculators</li>
                            <li>• Profit/loss trackers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">Crypto Mining Tools & Monitoring</h2>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Mining profitability calculators</li>
                            <li>• Hashrate monitors</li>
                            <li>• Pool performance trackers</li>
                            <li>• Hardware comparison tools</li>
                            <li>• Energy cost calculators</li>
                        </ul>
                    </section>
                </div>

                <hr className="border-border/40" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">Elite Crypto Tools for Professional Use</h2>
                    <p className="text-muted-foreground mb-6">
                        Our platform serves thousands of developers, security professionals, and blockchain engineers who need reliable, fast, and secure cryptography utilities. Whether you're building the next DeFi platform or securing enterprise APIs, our tools provide the foundation for cryptographic excellence.
                    </p>
                    <div className="space-y-2">
                        <h3 className="font-bold">Key Benefits:</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Military-grade randomness", "Zero server-side processing", "Instant results", "Mobile-responsive", "No tracking", "Open-source algorithms", "GDPR compliant"].map((benefit) => (
                                <span key={benefit} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                    ✓ {benefit}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-muted/10 p-6 rounded-xl border border-dashed border-border">
                    <h2 className="text-2xl font-bold mb-4">Get Started with Free Crypto Tools Today</h2>
                    <p className="text-muted-foreground mb-4">
                        No credit card required. No registration needed. Just visit our <span className="font-semibold text-foreground">crypto tools online</span> platform and start generating secure tokens, keys, and passwords instantly.
                    </p>
                    <p className="font-medium text-foreground">
                        Ready to secure your applications? Try our Token Generator now.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-2">Why Privacy Matters in Crypto Tools</h2>
                    <p className="text-muted-foreground">
                        When working with sensitive cryptographic data, privacy isn't optional - it's essential. Many online tools send your data to servers for processing, creating security vulnerabilities. Our <strong>crypto tools website</strong> eliminates this risk entirely by processing everything locally. <span className="text-foreground font-semibold">Your data never leaves your browser. Period.</span>
                    </p>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "What is a crypto tool?",
                answer: "A crypto tool is a software utility that performs cryptographic operations such as generating secure random data, creating encryption keys, hashing passwords, or managing digital signatures. These tools are essential for developers building secure applications."
            },
            {
                question: "Are online crypto tools safe to use?",
                answer: "Our crypto tools are completely safe because all processing happens locally in your browser using the Web Crypto API. Your generated tokens, keys, and passwords never leave your device, ensuring maximum privacy and security."
            },
            {
                question: "What are the best crypto tools for beginners?",
                answer: "For beginners, we recommend starting with our Token Generator to understand secure random generation. It's simple, intuitive, and teaches the fundamentals of cryptographic security without requiring technical expertise."
            },
            {
                question: "Can I use these crypto tools for production applications?",
                answer: "Absolutely. Our tools use CSPRNG (Cryptographically Secure Pseudo-Random Number Generator) which meets industry standards for production use. The generated tokens and keys are suitable for APIs, databases, and security-critical applications."
            },
            {
                question: "Do I need to download crypto tools?",
                answer: "No download required. Our crypto tools website runs entirely in your browser, providing instant access to professional cryptography utilities without installation, registration, or subscriptions."
            },
            {
                question: "What's the difference between crypto tools and blockchain tools?",
                answer: "Crypto tools focus on cryptographic operations (encryption, key generation, hashing), while blockchain tools specifically handle distributed ledger technologies. However, there's significant overlap - many blockchain applications require cryptographic tools for security."
            }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function CryptoToolsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Free Crypto & Security Tools - Token Generator",
        description: "Free online crypto and security tools. Generate secure tokens, keys, and passwords instantly. Privacy-focused and 100% client-side.",
        url: "https://www.fasttools.store/crypto-tools",
        mainEntity: {
            "@type": "ItemList",
            name: "Crypto Tools Collection",
            description: "Collection of free online cryptography and security tools including Token Generator.",
            numberOfItems: 1,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Bcrypt Generator", description: "Generate and verify secure Bcrypt hashes", url: "https://www.fasttools.store/crypto-tools/bcrypt" },
                { "@type": "ListItem", position: 2, name: "Token Generator", description: "Generate secure random tokens, API keys, and passwords", url: "https://www.fasttools.store/crypto-tools/token-generator" },
            ]
        },
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
                { "@type": "ListItem", position: 2, name: "Crypto Tools", item: "https://www.fasttools.store/crypto-tools" }
            ]
        },
        isPartOf: {
            "@type": "WebSite",
            name: "FastTools",
            url: "https://www.fasttools.store"
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToolPageLayout
                {...toolConfig.getLayoutProps(
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cryptoTools.map((tool) => (
                            <GToolCard
                                key={`crypto-tools-${tool.href}`}
                                title={tool.title}
                                description={tool.description}
                                href={tool.href}
                                icon={tool.icon}
                            />
                        ))}
                    </div>
                )}
            />
        </>
    )
}
