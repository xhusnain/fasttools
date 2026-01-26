import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { BcryptGenerator } from "@/components/crypto-tools/bcrypt-generator"
import Image from "next/image"
import { Lock, Shield, ShieldCheck, Key, Terminal, Eye, History, AlertTriangle } from "lucide-react"

const toolConfig = createToolConfig({
    toolName: "Bcrypt Hash Generator & Verifier - Secure Password Hashing Tool",
    description: "Generate and verify secure Bcrypt hashes online. Adjustable cost factor, strength detection, and real-time verification. 100% secure, browser-based cryptographic tool.",
    metaTitle: "Bcrypt Generator & Verifier | Secure Password Hashing Tool",
    metaDescription: "Free online Bcrypt hash generator and verifier. Adjust salt rounds/cost factor, detect hash strength, and verify matches instantly. Secure client-side processing.",
    path: "/crypto-tools/bcrypt",
    schemaOptions: {
        applicationCategory: "SecurityTool",
        operatingSystem: "Any",
    },

    header: {
        title: "Bcrypt Hash Generator & Verifier",
        description: "Generate and verify industry-standard Blowfish-based hashes with adjustable work factors for maximum security.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "Bcrypt", href: "/crypto-tools/bcrypt" },
    ],

    content: {
        overview: "Bcrypt Generator & Verifier generates secure Blowfish-based hashes with adjustable work factors from 4 to 31 in under 1 second for standard settings. Because 81% of data breaches involve stolen passwords, using adaptive hashing like Bcrypt is mandatory for protecting user credentials against modern brute-force hardware. Bcrypt is a robust, one-way password-hashing function specifically designed to be slow and computationally expensive, making it highly resistant to rainbow table attacks.",

        howToSteps: [
            "Enter Plain Text: Type the sensitive string or password you wish to hash into the 'Text to Hash' field.",
            "Adjust Salt Rounds: Use the slider to set the cost factor (4-31). Rounds between 10-12 are recommended for a balance of security and performance.",
            "Generate & Copy: Click 'Generate Secure Hash' and copy the resulting string to your clipboard.",
            "Verify Match: To test an existing hash, paste it into the 'Bcrypt Hash' field and provide the original string to see if they match."
        ],

        features: [
            "Ultimate Power Cost Adjustment: Fine-tune the salt rounds from 4 (fastest) to 31 (most secure) to see how it affects computation time.",
            "Real-time Verification: Instantly verify if a password matches a hash using the built-in cryptographic comparator.",
            "Strength Detection: Visual feedback on the security level of your cost factor setting.",
            "Privacy First: All hashing and comparisons happen 100% locally in your browser. Your data never touches our servers.",
            "Performance Metrics: View the exact time taken to compute each hash to understand the work factor impact."
        ],

        aboutTool: (
            <div className="space-y-12">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/bcrypt-hero.png"
                        alt="Bcrypt Hashing Visualization - Secure Password Storage"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                        { metric: "Recommended Rounds", value: "10-12", context: "Optimal security/speed" },
                        { metric: "Max Input Length", value: "72 Bytes", context: "Blowfish restriction" },
                        { metric: "Algorithm Base", value: "Blowfish", context: "Cryptographic cipher" },
                        { metric: "Security Type", value: "Adaptive", context: "Key-strengthening" }
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{stat.metric}</div>
                            <div className="text-[10px] text-muted-foreground mt-1">{stat.context}</div>
                        </div>
                    ))}
                </div>

                <article className="space-y-6">
                    <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 mb-8">
                        <p className="text-sm italic text-foreground/80 leading-relaxed font-medium">
                            <strong>What:</strong> Bcrypt is a password-hashing function based on the Blowfish cipher that incorporates a salt to protect against rainbow table attacks and an adaptive cost factor to resist brute-force attacks.
                        </p>
                        <p className="text-sm italic text-foreground/80 leading-relaxed mt-3 font-medium">
                            <strong>Why:</strong> Using Bcrypt ensures that even if your database is compromised, passwords remain computationally impossible to reverse engineer, providing a vital layer of defense-in-depth for web security.
                        </p>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Key className="h-6 w-6 text-primary" />
                        Why Use Bcrypt?
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        In an era of massive data breaches, standard hashing algorithms like MD5 or SHA-256 are no longer sufficient for password storage. Because those algorithms are designed for speed, modern GPUs can crack millions of variations per second.
                    </p>
                    <div className="bg-muted/10 p-5 rounded-xl border border-border/50">
                        <h3 className="font-semibold mb-3">The Bcrypt Advantage:</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-500 shrink-0" />
                                <div className="text-sm"><strong>Salt Included:</strong> Bcrypt automatically generates a unique salt for every hash, neutralizing rainbow table attacks.</div>
                            </li>
                            <li className="flex gap-2">
                                <History className="h-5 w-5 text-primary shrink-0" />
                                <div className="text-sm"><strong>Adaptive:</strong> The work factor can be increased as hardware gets faster, keeping your hashes secure over time.</div>
                            </li>
                            <li className="flex gap-2">
                                <Terminal className="h-5 w-5 text-yellow-500 shrink-0" />
                                <div className="text-sm"><strong>Computational Cost:</strong> Specifically designed to be slow, making brute-force attacks prohibitively expensive.</div>
                            </li>
                            <li className="flex gap-2">
                                <Eye className="h-5 w-5 text-blue-500 shrink-0" />
                                <div className="text-sm"><strong>Standardized:</strong> The trusted standard for libraries in Node.js, Ruby, Python, and OpenBSD.</div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Best Practices for Salt Rounds
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-muted/30 text-xs uppercase">
                                <tr>
                                    <th className="px-4 py-3 border border-border">Cost Factor</th>
                                    <th className="px-4 py-3 border border-border">Security Level</th>
                                    <th className="px-4 py-3 border border-border">Compute Time (Avg)</th>
                                    <th className="px-4 py-3 border border-border">Recommended Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-medium">4 - 8</td>
                                    <td className="px-4 py-3 text-red-500">Weak</td>
                                    <td className="px-4 py-3">{"< 10ms"}</td>
                                    <td className="px-4 py-3">Legacy systems / Testing</td>
                                </tr>
                                <tr className="border-b border-border bg-green-500/5">
                                    <td className="px-4 py-3 font-medium">10 - 12</td>
                                    <td className="px-4 py-3 text-green-600">Standard</td>
                                    <td className="px-4 py-3">100ms - 500ms</td>
                                    <td className="px-4 py-3">Modern Web Applications</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-medium">13 - 15</td>
                                    <td className="px-4 py-3 text-blue-600">High</td>
                                    <td className="px-4 py-3">1s - 4s</td>
                                    <td className="px-4 py-3">Highly Sensitive Data</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">16+</td>
                                    <td className="px-4 py-3 text-purple-600">Paranoid</td>
                                    <td className="px-4 py-3">10s+</td>
                                    <td className="px-4 py-3">Offline Archive Protection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                        * Compute times vary based on user hardware. For web requests, 250ms is generally considered the maximum acceptable latency.
                    </p>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lock className="h-6 w-6 text-primary" />
                        Bcrypt vs MD5 vs SHA-256 vs Argon2
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-muted/30 text-xs uppercase text-foreground/70">
                                <tr>
                                    <th className="px-4 py-3 border border-border">Algorithm</th>
                                    <th className="px-4 py-3 border border-border">Type</th>
                                    <th className="px-4 py-3 border border-border">Security</th>
                                    <th className="px-4 py-3 border border-border">Best Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-semibold">Bcrypt</td>
                                    <td className="px-4 py-3">Adaptive Hash</td>
                                    <td className="px-4 py-3 text-green-500 font-medium">9.5/10 (High)</td>
                                    <td className="px-4 py-3">Password Hashing</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-semibold">Argon2id</td>
                                    <td className="px-4 py-3">Memory-Hard Hash</td>
                                    <td className="px-4 py-3 text-primary font-medium">10/10 (Elite)</td>
                                    <td className="px-4 py-3">Next-gen Password Storage</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="px-4 py-3 font-semibold text-muted-foreground">SHA-256</td>
                                    <td className="px-4 py-3 text-muted-foreground">Fast Digest</td>
                                    <td className="px-4 py-3 text-yellow-500 font-medium">4/10 (Moderate)</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs italic">File Integrity Only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-semibold text-muted-foreground">MD5</td>
                                    <td className="px-4 py-3 text-muted-foreground">Legacy Digest</td>
                                    <td className="px-4 py-3 text-red-500 font-medium">1/10 (Critical)</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs italic">Broken - Do not use for passwords</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Key Cybersecurity Terminology
                    </h2>
                    <dl className="grid md:grid-cols-2 gap-6">
                        {[
                            { term: "SALT", def: "A random string added to the password before hashing to ensure that identical passwords result in different hashes." },
                            { term: "WORK FACTOR", def: "A parameter that determines how many iterations of the hashing algorithm are performed, slowing down brute-force attempts." },
                            { term: "BLOWFISH", def: "The symmetric-key block cipher algorithm upon which the Bcrypt hashing function is built." },
                            { term: "RAINBOW TABLE", def: "A precomputed table for reversing cryptographic hash functions, usually used for cracking password hashes." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2 p-4 rounded-xl border border-border/50 bg-card/50">
                                <dt className="font-bold text-xs tracking-widest text-primary uppercase">{item.term}</dt>
                                <dd className="text-sm text-muted-foreground leading-relaxed">{item.def}</dd>
                            </div>
                        ))}
                    </dl>
                </article>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-lg bg-red-500/5">
                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-red-600 dark:text-red-400">The "Salt" Myth</h4>
                        <p className="text-sm text-muted-foreground">You don't need to create a separate "salt" column in your database. Bcrypt stores the salt directly inside the resulting hash string (the prefix portion).</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-green-500/5">
                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider text-green-600 dark:text-green-400">One-Way Only</h4>
                        <p className="text-sm text-muted-foreground">Unlike encryption (AES), hashing is a one-way street. You cannot "decrypt" a Bcrypt hash. You can only verify if a candidate string produces the same result.</p>
                    </div>
                    <article className="space-y-6">
                        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                            <History className="h-6 w-6 text-primary" />
                            Authoritative References & Standards
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                                <a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer" className="space-y-1 block">
                                    <div className="font-bold text-sm text-primary uppercase tracking-tight">OWASP Password Storage</div>
                                    <div className="text-xs text-muted-foreground">Industry-standard cheat sheet for secure credential management.</div>
                                </a>
                            </li>
                            <li className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                                <a href="https://csrc.nist.gov/publications/detail/sp/800-63b/final" target="_blank" rel="noopener noreferrer" className="space-y-1 block">
                                    <div className="font-bold text-sm text-primary uppercase tracking-tight">NIST Digital Identity</div>
                                    <div className="text-xs text-muted-foreground">The official U.S. government guidelines for authentication and security.</div>
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        ),

        faqs: [
            {
                question: "Can Bcrypt hashes be reversed?",
                answer: "No. Bcrypt is a one-way cryptographic hash. It is mathematically impossible to reverse the hash to find the original password. Verification is only possible by comparing a new string's hash against the stored one."
            },
            {
                question: "How do I verify a Bcrypt hash in my backend?",
                answer: "Most programming languages have libraries (like bcryptjs for Node.js, bcrypt-ruby for Ruby, or Passlib for Python) that provide a 'compare' or 'verify' function. You should use these built-in functions rather than manual string comparison."
            },
            {
                question: "What does the '$2a$10$' prefix mean?",
                answer: "The prefix describes the algorithm version ($2a$, $2b$, or $2y$) and the cost factor ($10$). The rest of the string contains the 128-bit salt and the resulting hash, all encoded using a modified Radix-64."
            },
            {
                question: "Why is Bcrypt limited to 72 characters?",
                answer: "The underlying Blowfish algorithm has a limitation where it only uses the first 72 bytes of a string. If you need to hash longer strings, it's common practice to SHA-256 hash the password first, then Bcrypt the resulting hash."
            },
            {
                question: "Is this tool safe for production passwords?",
                answer: "This tool is intended for developers to test and understand Bcrypt. For your actual application, always perform hashing and verification in your secure backend server environment, never on the client-side of your app."
            }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function BcryptPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <BcryptGenerator />
            )}
        />
    )
}
