import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PasswordAnalyzerTool } from "@/components/crypto-tools/password-analyzer"
import Image from "next/image"
import { Shield, Lock, Eye, CheckCircle2, AlertTriangle, Key, Terminal, BookOpen, Fingerprint } from "lucide-react"

const rawToolConfig = {
    toolName: "Password Strength Analyzer",
    description: "Analyze your password strength with the 2025 NIST-compliant estimator. Calculate entropy, test against brute-force attacks, and learn modern security standards.",
    metaTitle: "Password Strength Checker Online - NIST 2025 & Entropy Calculator",
    metaDescription: "Test password strength instantly. Analyze entropy (bits), crack time, and NIST compliance. Free online tool detecting brute-force & rainbow table vulnerabilities. 100% Client-Side.",
    path: "/crypto-tools/password-strength-analyzer",
    heroImage: "/images/password_strength_hero.png",
    schemaOptions: {
        applicationCategory: "SecurityApplication",
        operatingSystem: "Any",
        featureList: [
            "zxcvbn analysis",
            "crack time estimation",
            "entropy calculation",
            "offline usage",
            "NIST audit"
        ]
    },

    header: {
        title: "Password Strength Analyzer",
        description: "The ultimate tool for digital identity protection. Test your credentials against billions of known leaks, calculate precise entropy bits, and audit for NIST 2025 compliance.",
        titleSize: "medium" as const, // Fix type inference
        descriptionSize: "small" as const, // Fix type inference
        color: "blue" as const, // Fix type inference
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer" },
    ],

    content: {
        overview: "The **Password Strength Analyzer** is an enterprise-grade security tool designed for developers, sysadmins, and security-conscious users. Unlike basic checkers that simply count characters, this tool uses the **zxcvbn** engine (Dropbox) and **NIST Special Publication 800-63B** guidelines to evaluate true defensive strength. It detects patterns susceptible to dictionary attacks, estimates brute-force costs, and educates on the mathematics of entropy.",

        howToSteps: [
            "**Enter Credential**: Type your password into the client-side secure input. Data *never* leaves your browser.",
            "**Audit Entropy**: Review the 'Bits of Entropy' score. NIST recommends 80+ bits for user-generated secrets.",
            "**Check Compliance**: Verify if your password meets modern 2025 standards (Length > Complexity).",
            "**Analyze Vectors**: See estimated crack times for Online Throttled vs. Offline GPU Hashcat attacks."
        ],

        features: [
            "**NIST 2025 Compliant**: Evaluates passwords based on length and ban-lists rather than outdated complexity rules.",
            "**Entropy Calculator**: Uses $E = L \\times \\log_2(R)$ to determine the exact theoretical hardness.",
            "**Attack Simulation**: Estimates time-to-crack against specific hardware (e.g., RTX 4090 clusters).",
            "**Pattern Detection**: Identifies 'Keyboard Walks' (qwerty), repeats, and leetspeak substitutions.",
            "**Offline Security**: Zero-knowledge architecture. Works without an internet connection."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Terminal className="h-8 w-8 text-primary" />
                        The Mathematics of Entropy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        Password strength is scientifically measured in **Entropy Bits**. This quantifies the "randomness" or "surprise" a password contains. The formula is:
                    </p>
                    <div className="bg-muted/10 p-6 rounded-xl border border-border font-mono text-center text-xl mb-6">
                        E = L × log₂(R)
                    </div>
                    <ul className="grid md:grid-cols-2 gap-6 mb-8 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground">L (Length):</span>
                            Number of characters. This is the exponent, making it the most critical factor.
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-foreground">R (Range):</span>
                            Pool of unique characters (e.g., 26 for lowercase, 94 for all ASCII).
                        </li>
                    </ul>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg text-blue-400 text-sm">
                        <strong>Example:</strong> A 12-character lowercase password ($12 \times 4.7 \approx 56$ bits) is weaker than a 20-character lowercase passphrase ($20 \times 4.7 \approx 94$ bits), even without special symbols.
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <BookOpen className="h-8 w-8 text-primary" />
                        NIST Guidelines 2025 (SP 800-63B)
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        The National Institute of Standards and Technology (NIST) has overhauled password advice. The old advice ("change it every 90 days", "must use special chars") is now considered **harmful**.
                    </p>
                    <div className="grid md:grid-cols-1 gap-4">
                        <div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-foreground">Length Over Complexity</h3>
                                <p className="text-sm text-muted-foreground">Humans are bad at random characters (we pick `P@ssw0rd!`). Length is mathematically superior. NIST recommends 8-64 characters.</p>
                            </div>
                        </div>
                        <div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-foreground">No Mandatory Rotation</h3>
                                <p className="text-sm text-muted-foreground">Forcing users to change passwords leads to `Pass1`, `Pass2`, `Pass3`. Only change passwords if compromised.</p>
                            </div>
                        </div>
                        <div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-foreground">Full Unicode Support</h3>
                                <p className="text-sm text-muted-foreground">Passwords should allow spaces and emojis (e.g., "correct horse battery staple 🐴").</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Shield className="h-8 w-8 text-primary" />
                        Understanding Attack Vectors
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Key className="h-5 w-5 text-yellow-500" /> Brute Force
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Attacking by trying every combination (`aaaa`, `aaab`). Defeated by **High Entropy**.
                                <br /><br />
                                <em>Defense:</em> Long passwords (16+ chars).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Fingerprint className="h-5 w-5 text-red-500" /> Rainbow Tables
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Pre-computed tables of hashes for common passwords. Defeated by **Salting** (server-side) and **Uniqueness** (client-side).
                                <br /><br />
                                <em>Defense:</em> Never reuse passwords.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Time to Crack Estimation</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 uppercase tracking-wider font-semibold">
                                <tr>
                                    <th className="p-4 rounded-tl-lg">Type</th>
                                    <th className="p-4">Length</th>
                                    <th className="p-4">Entropy</th>
                                    <th className="p-4 rounded-tr-lg">Crack Time (RTX 4090)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-red-500">Numerical</td>
                                    <td className="p-4">8 chars</td>
                                    <td className="p-4">~26 bits</td>
                                    <td className="p-4">Instant</td>
                                </tr>
                                <tr className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-orange-500">Lower + Upper</td>
                                    <td className="p-4">8 chars</td>
                                    <td className="p-4">~45 bits</td>
                                    <td className="p-4">3 minutes</td>
                                </tr>
                                <tr className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-blue-500">Complex</td>
                                    <td className="p-4">12 chars</td>
                                    <td className="p-4">~72 bits</td>
                                    <td className="p-4">300 years</td>
                                </tr>
                                <tr className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-green-500">Passphrase</td>
                                    <td className="p-4">20 chars</td>
                                    <td className="p-4">~100 bits</td>
                                    <td className="p-4">100 Trillion Years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Why doesn't NIST recommend special characters anymore?",
                answer: "Because users follow predictable patterns (e.g., 'Password123!'). It forces 'complexity' but not 'randomness'. Length is a much stronger mathematical defense against brute force than a limited set of special characters."
            },
            {
                question: "What is 80 bits of entropy?",
                answer: "It's the industry threshold for a 'Strong' password. 80 bits means there are $2^{80}$ possible combinations. Even with a supercomputer making trillions of guesses per second, it would take centuries to crack."
            },
            {
                question: "Is this tool safe? Does it send data?",
                answer: "Yes. This tool is **Client-Side Only**. The code runs in your browser's JavaScript engine. No data is sent over the network. You can disconnect your internet and the tool will still work perfectly."
            },
            {
                question: "What is a Dictionary Attack?",
                answer: "Instead of trying random characters (brute force), attackers try words from a dictionary (e.g., 'password', 'monkey', 'football'). Since humans often use real words, this method is extremely fast."
            },
            {
                question: "Should I use a Password Manager?",
                answer: "Absolutely. NIST strongly recommends them. They allow you to use unique, 20+ character random passwords for every site without needing to memorize them."
            }
        ]
    }
}

const toolConfig = createToolConfig(rawToolConfig)

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/password_strength_hero.png"]
    }
}

export default function PasswordAnalyzerPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <PasswordAnalyzerTool />
            )}
        />
    )
}
