import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { RsaGeneratorTool } from "@/components/crypto-tools/rsa-generator"
import Image from "next/image"
import { Shield, Lock, Key, Server, Terminal, FileLock } from "lucide-react"

const toolConfig = createToolConfig({
    toolName: "RSA Key Generator",
    description: "Generate secure RSA key pairs (Public/Private) online. Supports 1024, 2048, and 4096-bit keys in PEM format for OpenSSL, SSH, and JWT.",
    metaTitle: "RSA Key Generator Online - 2048/4096 bit Public/Private Pairs",
    metaDescription: "Free online RSA key pair generator. Create secure 2048-bit and 4096-bit RSA keys in PEM format. 100% Client-side OpenSSL compatible generation.",
    path: "/crypto-tools/rsa-generator",
    heroImage: "/images/rsa_key_generator_hero.png",
    schemaOptions: {
        applicationCategory: "DeveloperTool",
        operatingSystem: "Any",
        featureList: [
            "2048-bit RSA",
            "4096-bit RSA",
            "PEM Export",
            "Client-side Generation"
        ]
    },

    header: {
        title: "RSA Key Pair Generator",
        description: "Generate cryptographically secure RSA Public and Private keys directly in your browser. Compatible with OpenSSL, SSH, and SSL certificates.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "RSA Generator", href: "/crypto-tools/rsa-generator" },
    ],

    content: {
        overview: "The **RSA Key Generator** is a professional-grade cryptographic tool used to create asymmetric key pairs. It generates a **Private Key** (for signing or decrypting) and a **Public Key** (for verifying or encrypting). This tool uses the robust `Web Crypto API` built into modern browsers to generate keys locally, ensuring your private keys remain private and are never transmitted over the internet.",

        howToSteps: [
            "**Select Key Size**: Choose between 2048-bit (Standard) or 4096-bit (High Security). 1024-bit is available for legacy testing but not recommended.",
            "**Generate Keys**: Click 'Generate Keys'. The browser will mathematically compute two prime numbers to create your key pair.",
            "**Save Keys**: Copy the PEM formatted keys or download them as `.pem` files.",
            "**Usage**: Use the Public Key to encrypt data or verify signatures. Keep the Private Key strictly secret for decrypting data or creating signatures."
        ],

        features: [
            "**High-Bit Security**: Supports industry-standard 2048-bit and ultra-secure 4096-bit key lengths.",
            "**100% Client-Side**: Uses the native `window.crypto` API. No server-side generation means zero risk of network interception.",
            "**Standard PEM Format**: Keys are exported in Base64 PEM format (PKCS#8 for private, SPKI for public), compatible with OpenSSL, Node.js, and Java.",
            "**Instant Export**: One-click download for `public.pem` and `private.pem` files.",
            "**No Dependencies**: Lightweight and fast, requiring no external libraries or downloads."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/rsa_key_generator_hero.png"
                        alt="RSA Key Generator - Asymmetric Encryption Visualization"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Key className="h-8 w-8 text-primary" />
                        Understanding RSA Encryption
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        **RSA (Rivest–Shamir–Adleman)** is the backbone of internet security. Unlike symmetric encryption (where one password locks and unlocks), RSA is **asymmetric**. It uses two mathematically linked keys:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="text-xl font-bold mb-3 text-green-500 flex items-center gap-2">
                                <Lock className="h-5 w-5" /> Public Key
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Like a mailbox slot. You share this with everyone. Anyone can use it to encrypt a message to you, but they cannot decrypt it—not even themselves.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h3 className="text-xl font-bold mb-3 text-red-500 flex items-center gap-2">
                                <Key className="h-5 w-5" /> Private Key
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Like the mailbox key. Only you have it. It is the only thing in the universe that can decrypt messages sent to your Public Key.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
                    <div className="overflow-x-auto mb-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-4 px-2 font-semibold">Feature</th>
                                    <th className="py-4 px-2 font-semibold text-muted-foreground">Details</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Standard</td>
                                    <td className="py-4 px-2">RSASSA-PKCS1-v1_5 / RSA-OAEP</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Private Key Format</td>
                                    <td className="py-4 px-2">PKCS#8 (PEM encoded)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Public Key Format</td>
                                    <td className="py-4 px-2">SPKI (Subject Public Key Info)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Exponent</td>
                                    <td className="py-4 px-2">65537 (0x10001)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-muted/10 p-6 rounded-xl border border-border/50">
                            <Server className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">SSH Keys</h3>
                            <p className="text-sm text-muted-foreground">
                                Authenticating with remote servers (e.g., AWS EC2, GitHub) without passwords.
                            </p>
                        </div>
                        <div className="bg-muted/10 p-6 rounded-xl border border-border/50">
                            <FileLock className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">SSL/TLS Certificates</h3>
                            <p className="text-sm text-muted-foreground">
                                The foundation of HTTPS websites. The private key stays on the server; the public key is in the certificate.
                            </p>
                        </div>
                        <div className="bg-muted/10 p-6 rounded-xl border border-border/50">
                            <Terminal className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2">JWT Signing</h3>
                            <p className="text-sm text-muted-foreground">
                                Signing JSON Web Tokens (RS256) so APIs can verify user identity without shared secrets.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is it safe to generate 4096-bit keys here?",
                answer: "Yes. The generation happens entirely on your device's processor using the Web Crypto API. No data is ever sent to a cloud server. 4096-bit keys take longer to generate but offer superior long-term security."
            },
            {
                question: "What is the difference between PKCS#1 and PKCS#8?",
                answer: "PKCS#1 is the older format specifically for RSA keys (Begins with `-----BEGIN RSA PRIVATE KEY-----`). PKCS#8 is the newer, generic standard for identifying private keys of *any* algorithm (Begins with `-----BEGIN PRIVATE KEY-----`). Modern OpenSSL and libraries accept both."
            },
            {
                question: "Can I use these keys for GitHub SSH?",
                answer: "Yes. You can save the generated private key to your `~/.ssh/id_rsa` file (set permissions to 600) and add the public key to your GitHub account settings."
            },
            {
                question: "Why should I choose 2048 vs 4096 bits?",
                answer: "2048-bit is the current industry standard and is secure until at least 2030. It is faster to encrypt/decrypt. 4096-bit is more secure ('future-proof') but significantly slower and consumes more CPU. Use 4096 for root certificates or high-value Top Secret data."
            },
            {
                question: "How do I convert these keys to other formats?",
                answer: "Since these are standard PEM files, you can use OpenSSL. For example, to extract the public key from a private key: `openssl rsa -in private.pem -pubout -out public.pem`."
            }
        ]
    }
})

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/rsa_key_generator_hero.png"]
    }
}

export default function RsaGeneratorPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <RsaGeneratorTool />
            )}
        />
    )
}
