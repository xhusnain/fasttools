import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HmacGeneratorTool } from "@/components/crypto-tools/hmac-generator"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "HMAC Generator",
    description: "Generate secure Hash-based Message Authentication Codes (HMAC) online. Supports SHA256, SHA512, MD5, and more with secret keys.",
    metaTitle: "HMAC Generator Online - SHA256, SHA512 & MD5 | Free Tool",
    metaDescription: "Calculate secure HMAC (Hash-based Message Authentication Code) online using your secret key. Supports SHA-256, SHA-512, MD5. 100% Client-side privacy.",
    path: "/crypto-tools/hmac-generator",
    keywords: [
        "HMAC generator",
        "HMAC calculator",
        "SHA256 HMAC online",
        "message authentication code",
        "sha512 hmac",
        "md5 hmac",
        "api signature generator",
        "jwt signature tool"
    ],
    heroImage: "/images/hmac-generator-hero.png",

    header: {
        title: "HMAC Generator & Calculator",
        description: "Securely generate Hash-based Message Authentication Codes using secret keys and standard hashing algorithms like SHA-256 and MD5.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
    ],

    content: {
        overview: "The **HMAC Generator** is a free online tool for developers to compute Hash-based Message Authentication Codes. HMACs are widely used in APIs (like Stripe, Slack, or AWS) to verify **data integrity** and **authenticity**. By combining a cryptographic hash function (like SHA-256) with a secret key, HMAC ensures that the message hasn't been tampered with and comes from a trusted source.",

        howToSteps: [
            "**Enter Message**: Type or paste the plain text string you want to authenticate.",
            "**Enter Secret Key**: Input your secret signing key. This is used to generate the unique signature.",
            "**Select Algorithm**: Choose a hashing algorithm. **SHA-256** is the industry standard for most modern APIs.",
            "**Copy Result**: Get your HMAC signature in **Hexadecimal** or **Base64** format instantly."
        ],

        features: [
            "**Multiple Algorithms**: Supports MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, and RIPEMD-160.",
            "**Privacy First**: Runs 100% in your browser using `crypto-js`. Your keys and data are never sent to our servers.",
            "**Live Calculation**: Generates the hash instantly as you type.",
            "**Flexible Output**: Toggle between Hex (standard) and Base64 (used in some web headers) formats.",
            "**Secure Input**: 'Eye' toggle allows you to hide your secret key from prying eyes."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/hmac-generator-hero.png"
                        alt="HMAC Generator Security Visualization"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Understanding HMAC</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        **HMAC (Hash-based Message Authentication Code)** is a specific type of MAC involving a cryptographic hash function and a secret cryptographic key. It may be used to verify both the **data integrity** and the **authentication** of a message.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                        Any iterative cryptographic hash function, such as SHA-256 or MD5, may be used in the calculation of an HMAC; the resulting MAC algorithm is termed HMAC-MD5 or HMAC-SHA256 accordingly. The cryptographic strength of the HMAC depends upon the cryptographic strength of the underlying hash function, the size of its hash output, and the size and quality of the key.
                    </p>

                    <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Common Use Cases</h3>
                        <ul className="list-disc leading-relaxed pl-5 space-y-2 text-muted-foreground">
                            <li>**API Authentication**: Verify that requests to your server are actually from valid clients.</li>
                            <li>**Webhooks**: Validate that a webhook notification (e.g., from Stripe or GitHub) is legitimate.</li>
                            <li>**Cookies**: Sign cookies to prevent tampering by the client.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Encoding: Hex vs Base64</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        HMAC outputs binary data. To make it readable or safe for URLs, it must be encoded.
                    </p>
                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Hexadecimal</strong>
                            <span className="text-sm text-muted-foreground">The standard representation. A string of 0-9 and a-f. Easy to read and debug.</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg">
                            <strong className="text-foreground block mb-1">Base64</strong>
                            <span className="text-sm text-muted-foreground">More compact. Often used in HTTP headers (like JWTs) or URL parameters.</span>
                        </li>
                    </ul>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is this tool safe to use with real keys?",
                answer: "Yes. This tool is built with client-side JavaScript. Your secret keys and messages strictly stay in your browser's memory and are never transmitted over the network."
            },
            {
                question: "What is the difference between SHA-256 and HMAC-SHA256?",
                answer: "SHA-256 is a simple hash function: it takes input and produces a fingerprint. HMAC-SHA256 uses a *secret key* mixed with the input. Only someone with the key can create or verify the HMAC, making it suitable for authentication, whereas a simple hash can be generated by anyone."
            },
            {
                question: "Can I use this for JWT signatures?",
                answer: "Yes! JWTs typically use HMAC-SHA256 (HS256). You can verify a JWT signature by pasting the header+payload part as the message and your secret as the key."
            },
            {
                question: "Why do I get a different result than other tools?",
                answer: "Check your encoding (Hex vs Base64) and ensure you aren't adding extra spaces or newlines to your input message or key. Even a single invisible character changes the output completely."
            }
        ]
    }
})

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/hmac-generator-hero.png"]
    }
}

export default function HmacGeneratorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "HMAC Generator",
        applicationCategory: "DeveloperTool",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Secure, free online HMAC generator supporting SHA-256, MD5, SHA-512.",
        featureList: "HMAC-SHA256, HMAC-MD5, Secret Key Signing, Hex/Base64 Output",
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToolPageLayout
                {...toolConfig.getLayoutProps(
                    <HmacGeneratorTool />
                )}
            />
        </>
    )
}
