import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { EncryptDecryptTool } from "@/components/crypto-tools/encrypt-decrypt"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "Text Encrypt/Decrypt",
    description: "Securely encrypt and decrypt text online using AES, TripleDES, Rabbit, and RC4. 100% client-side, private, and free.",
    metaTitle: "Text Encrypt/Decrypt - Online AES, DES, Rabbit & RC4 Encryption Tool",
    metaDescription: "Best free online text encryption and decryption tool. Secure your messages with AES, TripleDES, Rabbit, and RC4 algorithms. Runs entirely in your browser for maximum privacy.",
    path: "/crypto-tools/encrypt-decrypt",
    heroImage: "/images/text-encryption-hero.png",
    schemaOptions: {
        applicationCategory: "SecurityApplication",
        operatingSystem: "Any",
        featureList: [
            "AES Encryption",
            "TripleDES Encryption",
            "Client-side privacy",
            "Instant decryption"
        ]
    },


    header: {
        title: "Text Encrypt/Decrypt Online - Bank-Grade Security for Your Words",
        description: "Encrypt and decrypt text instantly with the world's most trusted algorithms: AES, TripleDES, Rabbit, and RC4. Private, client-side, and effectively unbreakable.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
    ],

    content: {
        overview: "Secure your communication in milliseconds. This powerful **online text encryption tool** transforms your sensitive data into unreadable cipher text using military-grade algorithms like **AES (Advanced Encryption Standard)**. Unlike other tools, we process everything **locally in your browser**, ensuring your secrets never touch a server.",

        howToSteps: [
            "**Choose Your Weapon**: Select your preferred encryption algorithm. We recommend **AES** for maximum security or **TripleDES** for legacy compatibility.",
            "**Enter Your Secret**: Type or paste the text you want to secure in the input field. There's no character limit.",
            "**Set a Strong Key**: Create a secret password/key. This is the only way to unlock your message, so make it memorable!",
            "**Encrypt/Decrypt Instantly**: The tool processes your text in real-time. Copy the result and share it safely."
        ],

        features: [
            "**Military-Grade AES**: Use the same encryption standard trusted by governments and banks worldwide.",
            "**100% Client-Side Privacy**: Your data, keys, and text NEVER leave your device. Zero server risk.",
            "**Multi-Algorithm Support**: Switch between AES, TripleDES, Rabbit, and RC4 for versatile security needs.",
            "**Instant Processing**: No loading bars, no wait times. Get your encrypted text immediately.",
            "**Cross-Platform**: Works securely on mobile, desktop, and tablets without any software installation."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/text-encryption-hero.png"
                        alt="Secure Online Text Encryption Tool - AES, DES, RC4"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Why Use Our Online Text Encryption Tool?</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        In an age of digital surveillance, **privacy is power**. Whether you're sending sensitive business credentials, personal notes, or just want to keep your conversations private, our **Text Encrypt/Decrypt tool** provides an impenetrable layer of security. We combine ease of use with robust cryptographic libraries to give you a fortress for your text.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3 text-primary">AES: The Gold Standard</h3>
                            <p className="text-muted-foreground">
                                **AES (Advanced Encryption Standard)** is the primary choice for securing sensitive data globally. It's fast, efficient, and when used with a strong key, virtually uncrackable.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3 text-primary">Rabbit & RC4: Speed & Legacy</h3>
                            <p className="text-muted-foreground">
                                Need raw speed? **Rabbit** is a high-performance stream cipher. Working with older systems? **RC4** and **TripleDES** ensure backward compatibility for your encrypted data.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is it safe to encrypt text online?",
                answer: "Yes, but ONLY if the tool is client-side. Our tool runs entirely in your browser using JavaScript. No data is ever sent to our servers, meaning your 'secret key' and 'text' remain 100% private and under your control."
            },
            {
                question: "Which encryption algorithm should I use?",
                answer: "We strongly recommend **AES (Advanced Encryption Standard)**. It is the industry standard for security and offers the best balance of protection and performance. Use TripleDES or RC4 only if you have specific legacy requirements."
            },
            {
                question: "Can you recover my text if I lose the key?",
                answer: "No. Because we value your privacy, we store absolutely nothing. If you lose your secret key, the encrypted text cannot be recovered. This is a feature of true security, not a bug."
            },
            {
                question: "Is this encryption tool free?",
                answer: "Yes, it is 100% free with no usage limits. You can encrypt and decrypt as many strings as you need."
            }
        ]
    }
})

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/text-encryption-hero.png"]
    }
}

export default function EncryptDecryptPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <EncryptDecryptTool />
            )}
        />
    )
}
