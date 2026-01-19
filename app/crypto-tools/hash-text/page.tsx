import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HashText } from "@/components/crypto-tools/hash-text"
import Image from "next/image"
import { FileText, Shield, Lock, Fingerprint, Database, CheckCircle, Lightbulb } from "lucide-react"

const toolConfig = createToolConfig({
    toolName: "Free Hash Text Generator - Create MD5, SHA256, SHA512 Hashes Online",
    description: "Generate cryptographic hashes for any text instantly using our secure, browser-based hash generator. Support for MD5, SHA-1, SHA-256, SHA-512, SHA-3 (Keccak), and RIPEMD-160 algorithms with instant results and complete privacy.",
    metaTitle: "Free Hash Text Generator - MD5, SHA256, SHA512, SHA3 Calculator",
    metaDescription: "Generate secure cryptographic hashes (MD5, SHA1, SHA256, SHA512) for any text string instantly. 100% client-side security, no data storage. Perfect for verifying integrity.",
    path: "/crypto-tools/hash-text",
    keywords: [
        "hash text generator", "hash generator", "text to hash", "online hash calculator",
        "MD5 generator", "SHA256 generator", "SHA512 calculator", "cryptographic hash tool",
        "free hash text generator online", "hash generator from text", "text to hash converter",
        "multiple hash algorithm generator"
    ],

    header: {
        title: "Free Hash Text Generator - Create MD5, SHA256, SHA512 Hashes Online",
        description: "Generate cryptographic hashes for any text instantly using our secure, browser-based hash generator. Support for MD5, SHA-1, SHA-256, SHA-512, SHA-3 (Keccak), and RIPEMD-160 algorithms with instant results and complete privacy.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "Hash Text", href: "/crypto-tools/hash-text" },
    ],

    content: {
        overview: "A **hash text generator** is a cryptographic tool that transforms any input text into a fixed-length string of characters called a \"hash\" or \"digest.\" This one-way mathematical function creates a unique digital fingerprint for your data that cannot be reversed to reveal the original text. Our tool helps you generate these hashes instantly and securely in your browser.",

        howToSteps: [
            "Enter Your Text: Type or paste any text, password, or data string into the input field. Our tool accepts unlimited character length.",
            "Choose Output Format: Select your preferred encoding - Hexadecimal (standard) or Base64 (compact format). Toggle uppercase option if needed.",
            "View Instant Results: All hash algorithms process simultaneously in your browser. No server uploads, no waiting.",
            "Copy & Use: Click the copy button next to any hash to save it to your clipboard for immediate use."
        ],

        features: [
            "100% Client-Side Processing: Your text never leaves your browser. All hashing happens locally using JavaScript - no server uploads, no data storage, complete privacy.",
            "Instant Results: Real-time hash generation as you type. No waiting, no processing delays - see all hash values simultaneously.",
            "Multiple Algorithms in One Tool: Generate MD5, SHA-1, SHA-256, SHA-512, SHA-3, and RIPEMD-160 hashes at once. Compare different algorithms side-by-side.",
            "One-Click Copy: Click to copy any hash value to your clipboard instantly. No manual selection needed.",
            "Completely Free: No registration, no limits, no watermarks. Use our tool as many times as you need, forever free."
        ],

        aboutTool: (
            <div className="space-y-12">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/hash-text-hero.png"
                        alt="Hash Text Generator Hero - Cryptographic Hashing Visualization"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Fingerprint className="h-6 w-6 text-primary" />
                        What is a Hash Text Generator?
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A hash text generator is a cryptographic tool that transforms any input text into a fixed-length string of characters called a "hash" or "digest." This one-way mathematical function creates a unique digital fingerprint for your data that cannot be reversed to reveal the original text.
                    </p>
                    <div className="bg-muted/10 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-3">Key Features of Cryptographic Hashing:</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• <strong>Deterministic</strong> - Same input always produces identical output</li>
                            <li>• <strong>One-way function</strong> - Cannot reverse hash to get original text</li>
                            <li>• <strong>Collision resistant</strong> - Nearly impossible for two inputs to create same hash</li>
                            <li>• <strong>Avalanche effect</strong> - Small input change completely alters output</li>
                        </ul>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Database className="h-6 w-6 text-primary" />
                        Supported Hash Algorithms
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h3 className="font-semibold mb-2">MD5 (128-bit)</h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 32 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Legacy systems, non-security checksums, file integrity</p>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">⚠️ Cryptographically broken - avoid for passwords</p>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h3 className="font-semibold mb-2">SHA-1 (160-bit)</h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 40 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Git version control, legacy TLS certificates</p>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400">⚠️ Deprecated for security - use SHA-256+</p>
                        </div>
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">SHA-256 (256-bit) <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Recommended</span></h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 64 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Bitcoin blockchain, TLS certificates, password hashing</p>
                            <p className="text-sm text-green-600 dark:text-green-400">✅ Industry standard - highly secure</p>
                        </div>
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <h3 className="font-semibold mb-2">SHA-512 (512-bit)</h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 128 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Maximum security applications, government data</p>
                            <p className="text-sm text-green-600 dark:text-green-400">✅ Maximum security - ideal for sensitive data</p>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h3 className="font-semibold mb-2">SHA-3 (Keccak)</h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 128 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Next-gen apps, blockchain</p>
                            <p className="text-sm text-green-600 dark:text-green-400">✅ Latest NIST standard - future-proof</p>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h3 className="font-semibold mb-2">RIPEMD-160</h3>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Output:</strong> 40 hexadecimal characters</p>
                            <p className="text-sm text-muted-foreground mb-2"><strong>Use Cases:</strong> Bitcoin address generation</p>
                            <p className="text-sm text-green-600 dark:text-green-400">✅ Secure for intended purposes</p>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Common Use Cases
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex gap-3 bg-muted/5 p-4 rounded-lg">
                            <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground">
                                <strong className="text-foreground block mb-1">Password Security</strong>
                                Hash passwords before storage (always use salt + bcrypt/Argon2 for production). Never store plaintext.
                            </div>
                        </li>
                        <li className="flex gap-3 bg-muted/5 p-4 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground">
                                <strong className="text-foreground block mb-1">Data Integrity</strong>
                                Compare file hashes to ensure data wasn't corrupted or tampered with during transmission.
                            </div>
                        </li>
                        <li className="flex gap-3 bg-muted/5 p-4 rounded-lg">
                            <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground">
                                <strong className="text-foreground block mb-1">Digital Signatures</strong>
                                Hash messages before signing to create compact, verifiable signatures proving authenticity.
                            </div>
                        </li>
                        <li className="flex gap-3 bg-muted/5 p-4 rounded-lg">
                            <Fingerprint className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground">
                                <strong className="text-foreground block mb-1">Unique IDs</strong>
                                Generate deterministic unique identifiers for database records or cache keys.
                            </div>
                        </li>
                    </ul>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Security Best Practices
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-500/5 p-5 rounded-xl border border-green-500/20">
                            <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">✅ DO</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5" /> Use SHA-256 or SHA-512 for security</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5" /> Verified file hashes from official sources</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5" /> Use HTTPS when transmitting hash values</li>
                                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5" /> Keep hashing algorithms updated</li>
                            </ul>
                        </div>
                        <div className="bg-red-500/5 p-5 rounded-xl border border-red-500/20">
                            <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">❌ DON'T</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex gap-2"><Shield className="h-4 w-4 text-red-500 mt-0.5" /> Use MD5 or SHA-1 for passwords</li>
                                <li className="flex gap-2"><Shield className="h-4 w-4 text-red-500 mt-0.5" /> Assume hashing alone protects passwords</li>
                                <li className="flex gap-2"><Shield className="h-4 w-4 text-red-500 mt-0.5" /> Trust hash values from untrusted sources</li>
                                <li className="flex gap-2"><Shield className="h-4 w-4 text-red-500 mt-0.5" /> Reuse salt values across multiple passwords</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Hash Algorithm Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-muted/30 text-xs uppercase">
                                <tr>
                                    <th className="px-4 py-3 border border-border">Algorithm</th>
                                    <th className="px-4 py-3 border border-border">Output Size</th>
                                    <th className="px-4 py-3 border border-border">Security</th>
                                    <th className="px-4 py-3 border border-border">Best Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-medium">MD5</td>
                                    <td className="px-4 py-3">128-bit</td>
                                    <td className="px-4 py-3 text-yellow-600">⚠️ Broken</td>
                                    <td className="px-4 py-3">Legacy checksums</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-medium">SHA-1</td>
                                    <td className="px-4 py-3">160-bit</td>
                                    <td className="px-4 py-3 text-yellow-600">⚠️ Weak</td>
                                    <td className="px-4 py-3">Git commits</td>
                                </tr>
                                <tr className="border-b border-border bg-green-500/5">
                                    <td className="px-4 py-3 font-medium">SHA-256</td>
                                    <td className="px-4 py-3">256-bit</td>
                                    <td className="px-4 py-3 text-green-600">✅ Strong</td>
                                    <td className="px-4 py-3">General security</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-medium">SHA-512</td>
                                    <td className="px-4 py-3">512-bit</td>
                                    <td className="px-4 py-3 text-green-600">✅ Very Strong</td>
                                    <td className="px-4 py-3">Max security</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">SHA-3</td>
                                    <td className="px-4 py-3">512-bit</td>
                                    <td className="px-4 py-3 text-green-600">✅ Strong</td>
                                    <td className="px-4 py-3">Future-proof apps</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Is it safe to hash sensitive passwords here?",
                answer: "Yes - with caveats. Our tool processes everything in your browser using JavaScript. Your text is never sent to our servers. However, for production password storage, use dedicated password hashing functions (bcrypt, scrypt, Argon2) with proper salt and work factors."
            },
            {
                question: "Can I reverse a hash to get the original text?",
                answer: "No. Hashing is a one-way cryptographic function designed to be irreversible. You cannot mathematically recover original text from a hash. However, weak hashes can be \"cracked\" using Rainbow tables or Brute force attacks."
            },
            {
                question: "What is the difference between Hexadecimal and Base64 encoding?",
                answer: "Both represent the same hash data differently. Hex uses 0-9 and A-F (standard format). Base64 uses A-Z, a-z, 0-9, +, / (more compact). The underlying hash value is identical."
            },
            {
                question: "Which algorithm should I use?",
                answer: "For security (passwords, sensitive data): SHA-256 or SHA-512. For data integrity: SHA-256. For legacy compatibility: MD5 or SHA-1 (migrate if possible). Never use MD5 or SHA-1 for new security-critical applications."
            },
            {
                question: "How long does it take to generate a hash?",
                answer: "Instantly. Hash generation happens in milliseconds in your browser."
            },
            {
                question: "What is salting and why is it important?",
                answer: "Salting adds random data to input before hashing (e.g., password + salt). This prevents rainbow table attacks and ensures identical passwords have different hash values."
            }
        ]
    }
})

export const metadata = toolConfig.metadata

export default function HashTextPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Hash Text Generator",
        "applicationCategory": "Utility",
        "description": "Generate MD5, SHA1, SHA256, SHA512, SHA3 hashes online. Free and secure client-side tool.",
        "operatingSystem": "Any"
    }

    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <HashText />
                </>
            )}
        />
    )
}
