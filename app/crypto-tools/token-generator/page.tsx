import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { TokenGenerator } from "@/components/crypto-tools/token-generator"
import { Shield, Lock, Key, Settings, CheckCircle, Lightbulb, Fingerprint, Terminal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "Token Generator",
    description: "Generate secure random tokens, API keys, passwords, PINs, and hex keys. Custom formatting with prefixes, suffixes, and separators.",
    metaTitle: "Free Token Generator - API Key, Password & PIN Generator",
    metaDescription: "Generate secure random tokens, API keys, passwords, and serial numbers instantly. Free, client-side, and cryptographically secure (CSPRNG).",
    path: "/crypto-tools/token-generator",
    keywords: ["token generator", "api key generator", "password generator", "random token", "secure token", "access token", "jwt secret", "hex key generator"],

    header: {
        title: "Token Generator",
        description: "Generate secure random tokens, API keys, and passwords instantly. Customizable length, characters, and formats.",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "Token Generator", href: "/crypto-tools/token-generator" },
    ],

    content: {
        overview: "Generate **cryptographically secure tokens**, API keys, passwords, PINs, and serial numbers with our free **token generator**. Whether you need a JWT token, 256-bit hex key, or strong password, our tool creates secure, random tokens instantly in your browser using CSPRNG (Cryptographically Secure Pseudo-Random Number Generator). Perfect for developers, system administrators, and security professionals. No signup required, 100% free, and completely private - all generation happens locally on your device. Create custom API keys with prefixes like `sk_live_`, generate 128/256-bit encryption keys, or build formatted serial numbers with our professional-grade **online token generator**.",

        howToSteps: [
            "Select Token Type: Choose from presets: API Key, Password, PIN, 256-bit Hex, 128-bit Hex, Serial No., or Custom.",
            "Configure Settings (Optional): Adjust Length (1-512 chars), Character Types (Uppercase, Lowercase, Numbers, Symbols), and formatting options like Prefix/Suffix or Grouping.",
            "Copy & Use: Click Copy to save to clipboard. Click Regenerate for new tokens. All tokens are unique and secure."
        ],

        features: [
            "Cryptographically Secure (CSPRNG): Uses the browser's Web Crypto API for maximum entropy and unpredictability, suitable for production keys.",
            "100% Browser-Based & Private: Zero server communication. Tokens typically generated locally on your device and never transmitted.",
            "Professional Formatting: Custom prefixes/suffixes (`sk_test_`), grouping separators (`XXXX-XXXX`), and ambiguous character exclusion.",
            "Multiple Preset Formats: One-click presets for API Keys, Strong Passwords, 128/256-bit Hex, PINs, and Serial Numbers."
        ],

        aboutTool: (
            <div className="space-y-12">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/token-generator-hero.png"
                        alt="Token Generator Hero - Key Generation"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        What is a Token Generator?
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        A **token generator** is a professional security tool that creates cryptographically secure random strings (tokens) for authentication, authorization, and identification purposes. Unlike basic random string generators, a token generator uses **CSPRNG** (the browser's `crypto.getRandomValues()` API) to produce tokens with maximum entropy and unpredictability.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Our **free token generator** supports multiple formats:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong>API Keys:</strong> Alphanumeric tokens for REST API authentication (e.g., `sk_live_xxxxx`)</li>
                        <li><strong>JWT Tokens:</strong> JSON Web Token generation for stateless authentication</li>
                        <li><strong>Passwords:</strong> Strong random passwords with symbols, numbers, and mixed case</li>
                        <li><strong>Encryption Keys:</strong> 128-bit and 256-bit hexadecimal keys for cryptography</li>
                        <li><strong>PIN Codes:</strong> Numeric-only tokens for 2FA and security codes</li>
                        <li><strong>Serial Numbers:</strong> Formatted product keys and license codes</li>
                        <li><strong>Custom Tokens:</strong> Fully customizable character sets and formatting</li>
                    </ul>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Fingerprint className="h-6 w-6 text-primary" />
                        Common Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">For Developers</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>REST API authentication tokens</li>
                                <li>OAuth client IDs and secrets</li>
                                <li>Database encryption keys</li>
                                <li>Session identifiers</li>
                                <li>CI/CD pipeline tokens</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">For System Administrators</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>Server authentication credentials</li>
                                <li>Service-to-service auth tokens</li>
                                <li>Salt strings for password hashing</li>
                                <li>Temporary access codes</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">For Security Professionals</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>Penetration testing credentials</li>
                                <li>Security audit tokens</li>
                                <li>Compliance testing keys</li>
                                <li>Access control tokens</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/20 border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 text-foreground">For General Users</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>Strong passwords for accounts</li>
                                <li>WiFi passwords (WPA2/WPA3)</li>
                                <li>Secure PINs for devices</li>
                                <li>Product license keys</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lock className="h-6 w-6 text-primary" />
                        Security Best Practices
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-green-500/5 border border-green-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <h4 className="font-bold text-foreground">✅ DO</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><strong>Use identifiable prefixes</strong> (e.g., `sk_`, `pk_`) to identify leakages.</li>
                                <li><strong>Generate long tokens</strong> (Min 32 chars for production).</li>
                                <li><strong>Rotate regularly</strong> (Every 90 days for production keys).</li>
                                <li><strong>Store securely</strong> in environment variables or secret managers.</li>
                                <li><strong>Use 256-bit hex</strong> for encryption keys.</li>
                            </ul>
                        </div>

                        <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-5 w-5 text-red-500 font-bold flex items-center justify-center border-2 border-red-500 rounded-full text-xs">✕</div>
                                <h4 className="font-bold text-foreground">❌ DON'T</h4>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Don't use short tokens (under 16 characters).</li>
                                <li>Don't reuse the same token across multiple services.</li>
                                <li>Don't share tokens in public repositories (GitHub).</li>
                                <li>Don't send tokens over unencrypted channels.</li>
                                <li>Don't use predictable patterns or dictionary words.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-3">Token Strength Guide:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="space-y-1">
                                <div className="font-medium text-foreground">16 characters (hex)</div>
                                <div className="text-muted-foreground">64 bits entropy - Basic security</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-medium text-foreground">32 characters (hex)</div>
                                <div className="text-muted-foreground">128 bits entropy - Strong security (recommended)</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-medium text-foreground">64 characters (hex)</div>
                                <div className="text-muted-foreground">256 bits entropy - Military-grade security</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-medium text-foreground">32 characters (alphanumeric)</div>
                                <div className="text-muted-foreground">~190 bits entropy - Excellent for API keys</div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Fingerprint className="h-6 w-6 text-primary" />
                        Understanding Token Formats & Entropy
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-muted/50 text-foreground">
                                <tr>
                                    <th className="p-3 border border-border rounded-tl-lg">Format</th>
                                    <th className="p-3 border border-border">Characters</th>
                                    <th className="p-3 border border-border">Entropy Bits/Char</th>
                                    <th className="p-3 border border-border rounded-tr-lg">Use Cases</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-3 border border-border font-medium">Hexadecimal</td>
                                    <td className="p-3 border border-border font-mono text-xs">0-9, a-f</td>
                                    <td className="p-3 border border-border">4 bits</td>
                                    <td className="p-3 border border-border">Encryption keys, Hashes</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-border font-medium">Alphanumeric</td>
                                    <td className="p-3 border border-border font-mono text-xs">A-Z, a-z, 0-9</td>
                                    <td className="p-3 border border-border">~5.95 bits</td>
                                    <td className="p-3 border border-border">API Keys, Session IDs</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-border font-medium">Base64</td>
                                    <td className="p-3 border border-border font-mono text-xs">A-Z, a-z, 0-9, +, /</td>
                                    <td className="p-3 border border-border">6 bits</td>
                                    <td className="p-3 border border-border">JWT Tokens, Encoded Data</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-border font-medium">Numeric</td>
                                    <td className="p-3 border border-border font-mono text-xs">0-9</td>
                                    <td className="p-3 border border-border">3.32 bits</td>
                                    <td className="p-3 border border-border">PINs, 2FA codes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Settings className="h-6 w-6 text-primary" />
                        API Key Generator Best Practices
                    </h2>
                    <p className="text-muted-foreground">Modern API security follows these conventions (used by Stripe, GitHub, OpenAI):</p>
                    <div className="grid gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <div className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Use Prefixes for Identification</strong>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Use `sk_live_` for production secrets, `sk_test_` for testing, and `pk_` for public keys. This allows developers and automated security scanners to immediately identify the type and sensitivity of a token.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <div className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Length Recommendations</strong>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        • <strong>Development/Testing:</strong> 32 characters minimum<br />
                                        • <strong>Production:</strong> 64 characters recommended<br />
                                        • <strong>High-security:</strong> 128 characters
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <div className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Format Structure</strong>
                                    <p className="text-sm font-mono text-muted-foreground mt-1 bg-muted p-2 rounded w-fit">
                                        [prefix]_[environment]_[random_string]
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <div className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Rotation Policy</strong>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Rotate production keys every 90 days. Always keep 2 active keys during rotation (overlap) to prevent downtime during the switch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">What is a token generator?</h3>
                            <p className="text-sm text-muted-foreground">A token generator is a security tool that creates random, unique strings (tokens) used for authentication, authorization, and identification. Our advanced token generator uses cryptographically secure algorithms (CSPRNG) to produce tokens suitable for API keys, passwords, session IDs, encryption keys, and more.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Is this tool free to use?</h3>
                            <p className="text-sm text-muted-foreground">Yes, completely free! No registration, no hidden fees, unlimited usage. Generate as many secure tokens as you need.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Are the tokens secure?</h3>
                            <p className="text-sm text-muted-foreground">Extremely. We use the browser's Web Crypto API (`crypto.getRandomValues()`), which is a cryptographically secure pseudo-random number generator (CSPRNG). This means tokens are unpredictable and suitable for production environments.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Do you store my data?</h3>
                            <p className="text-sm text-muted-foreground">Absolutely not. All generation happens 100% locally in your browser. We never transmit, store, or log any tokens. You can even use the tool offline.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">How do I generate an API key?</h3>
                            <p className="text-sm text-muted-foreground">Click the "API Key" preset button. We recommend adjusting the length to 32-64 characters and adding a custom prefix like `sk_live_` for best practices.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">What is "Exclude Ambiguous"?</h3>
                            <p className="text-sm text-muted-foreground">It removes characters that look similar (like `0` vs `O`, `1` vs `l`) to prevent confusion. This is critical for tokens that will be manually typed, like WiFi passwords or printed license keys.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Can I generate 256-bit Hex keys?</h3>
                            <p className="text-sm text-muted-foreground">Yes. Use the "256-bit Hex" preset to generate a 64-character hexadecimal string, which provides 256 bits of entropy suitable for AES-256 encryption.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h3 className="font-semibold text-foreground mb-2">Token Generator vs. Password Manager?</h3>
                            <p className="text-sm text-muted-foreground">A token generator <strong>creates</strong> the secure string. A password manager <strong>stores</strong> it. Use our tool to generate a high-strength password, then save it in your password manager.</p>
                        </div>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "What is a token generator?",
                answer: "A token generator is a security tool that creates random, unique strings (tokens) used for authentication, authorization, and identification. Our advanced token generator uses cryptographically secure algorithms (CSPRNG) to produce tokens suitable for API keys, passwords, session IDs, encryption keys, and more."
            },
            {
                question: "Is this token generator free to use?",
                answer: "Yes, completely free! No registration, no hidden fees, unlimited usage. Generate as many secure tokens as you need."
            },
            {
                question: "How secure are the generated tokens?",
                answer: "Extremely secure. We use the browser's Web Crypto API (`crypto.getRandomValues()`), which is a cryptographically secure pseudo-random number generator (CSPRNG). This means tokens are unpredictable and suitable for production environments, including sensitive applications like banking and authentication."
            },
            {
                question: "Do you store or log generated tokens?",
                answer: "Absolutely not. All token generation happens 100% locally in your browser. We never transmit, store, or log any tokens. You can verify this by checking your browser's network tab or using the tool offline."
            },
            {
                question: "Can I use these tokens for production applications?",
                answer: "Yes! Our tokens use cryptographically secure random generation, making them suitable for production API authentication, database encryption, user session tokens, payment gateway secrets, and OAuth credentials."
            },
            {
                question: "How do I generate an API key?",
                answer: "1. Click the 'API Key' preset button. 2. Adjust length (32-64 characters recommended). 3. Add a custom prefix like `sk_live_`. 4. Click 'Copy' to use your token."
            },
            {
                question: "What is the recommended token length?",
                answer: "Minimum for security: 32 characters. Recommended for APIs: 32-64 characters. High-security applications: 64-128 characters. Encryption keys: 64 characters (256-bit hex) or 32 characters (128-bit hex)."
            },
            {
                question: "Can I generate multiple tokens at once?",
                answer: "Yes! Use the Quantity slider to generate 1-50 unique tokens in a single click. Each token is completely unique."
            },
            {
                question: "How do I create a JWT token?",
                answer: "While this tool generates the random secret for JWT signing, you'll need a JWT library to create actual JWT tokens. Use our tool to generate a secure 256-bit hex secret, then use it with libraries like jsonwebtoken (Node.js) or PyJWT (Python)."
            },
            {
                question: "What does 'Exclude Ambiguous Characters' do?",
                answer: "It removes characters that look similar (like `0` and `O`, `1` and `l`, `I` and `l`). This is helpful when printing tokens for manual entry or creating WiFi passwords."
            },
            {
                question: "How do I add a prefix or suffix?",
                answer: "Expand the 'Formatting' section. Enter your desired prefix (e.g., `sk_test_`) in the Prefix field and suffix if needed. Generate your token - it will include your custom text."
            },
            {
                question: "What's a 256-bit hex token?",
                answer: "A 256-bit hexadecimal token is a 64-character string using only 0-9 and a-f characters. It provides 256 bits of entropy (2^256 possible combinations) and is commonly used for encryption keys (AES-256) and HMAC secrets."
            },
            {
                question: "When should I use a PIN vs. password?",
                answer: "PIN: Use for numeric-only codes (ATM, phone locks, 2FA codes). Password: Use for account security requiring high strength (min 16 chars with letters, numbers, symbols)."
            },
            {
                question: "How do I create a serial number format like XXXX-XXXX-XXXX?",
                answer: "Select 'Serial No.' preset or 'Custom'. Set length to 12. In Grouping, enter '4'. In Separator, enter '-'. Result: A3K9-M2P7-Q4L8-X5J3."
            },
            {
                question: "What's the difference between 128-bit and 256-bit hex?",
                answer: "128-bit (32 chars) provides ~3.4×10^38 combinations. 256-bit (64 chars) provides ~1.1×10^77 combinations. Both are considered unbreakable, but 256-bit is military-grade standard."
            },
            {
                question: "Can these tokens be hacked or predicted?",
                answer: "No. Using CSPRNG makes prediction mathematically impossible. A 32-character hex token has 2^128 possible combinations - it would take billions of years to brute force."
            },
            {
                question: "Should I rotate my API keys regularly?",
                answer: "Yes! Rotate production keys every 90 days, test keys every 180 days, and immediately if exposed. Keep 2 active keys during rotation to prevent downtime."
            },
            {
                question: "Where should I store generated tokens?",
                answer: "Safe: Environment variables (.env), Secret managers (AWS Secrets Manager, Vault), Password managers. Never: Source code, Public Git repos, client-side code."
            },
            {
                question: "Can I use this for password generation?",
                answer: "Absolutely! Click 'Password' preset for a 16-character password with uppercase, lowercase, numbers, and symbols (~95 bits entropy)."
            },
            {
                question: "Are tokens generated offline?",
                answer: "Yes! This tool works completely offline. You can disconnect from the internet and it will still generate secure tokens, proving no data is sent to servers."
            },
            {
                question: "What algorithm do you use?",
                answer: "We use the browser's Web Crypto API (`window.crypto.getRandomValues()`), which accesses the operating system's cryptographically secure random number generator (CSPRNG)."
            },
            {
                question: "What character sets are available?",
                answer: "Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), Symbols (!@#$%...), and Hexadecimal (0-9, a-f)."
            },
            {
                question: "What's the maximum token length?",
                answer: "You can generate tokens up to 512 characters long. Most secure use cases require 32-64 characters."
            },
            {
                question: "Can I integrate this into my application?",
                answer: "This is a browser tool. For apps, use native crypto libraries: `crypto` (Node.js), `secrets` (Python), `random_bytes` (PHP), or `SecureRandom` (Java)."
            },
            {
                question: "Does this work on mobile devices?",
                answer: "Yes, the tool is fully responsive and works on iOS, Android, and tablets."
            },
            {
                question: "Token Generator vs. Password Manager?",
                answer: "Token Generator creates the secure string. Password Manager stores it. Use our generator to create strong passwords, then store them in your manager."
            },
            {
                question: "How is this different from other token generators?",
                answer: "Ours offers advanced formatting (prefixes, grouping), bulk generation, 100% privacy (no server), and professional presets like JWT secrets and serial numbers."
            },
            {
                question: "Can I use this instead of other API key generators?",
                answer: "Yes, it provides the same security as AWS/GitHub generators but with more customization and no account required."
            }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function TokenGeneratorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Token Generator",
        "applicationCategory": "SecurityApplication",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "operatingSystem": "Any (Web-based)",
        "description": "Free cryptographically secure token generator for API keys, passwords, PINs, and encryption keys"
    }

    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <TokenGenerator />
                </>
            )}
        />
    )
}
