import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PdfSignatureCheckerTool } from "@/components/pdf-tools/pdf-signature-checker"
import Image from "next/image"
import { Shield, FileCheck, Lock, Fingerprint, Search, Award } from "lucide-react"

const rawToolConfig = {
    toolName: "PDF Signature Checker",
    description: "Verify digital signatures in PDF files online. Check document integrity, validate signer identity, and detect tampering. Free, secure, client-side tool.",
    metaTitle: "PDF Signature Checker - Verify Digital Signatures Online (Free)",
    metaDescription: "Verify PDF digital signatures online. Check document integrity, validate signer identity, and detect tampering. Free, secure, client-side tool.",
    path: "/pdf-tools/pdf-signature-checker",
    // Using the newly generated image path - this will need to be the actual public path
    heroImage: "/images/pdf_signature_check_hero.png",

    header: {
        title: "PDF Signature Checker",
        description: "Instantly verify digital signatures and ensure document integrity. Detect unauthorized modifications and validate signer identities without uploading your files.",
        titleSize: "medium" as const,
        descriptionSize: "small" as const,
        color: "green" as const,
    },

    breadcrumbs: [
        { label: "PDF Tools", href: "/pdf-tools" }, // Assuming a PDF tools landing exists or uses crypto layout
        { label: "Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
    ],

    content: {
        overview: "In the digital age, **document integrity** is paramount. Our **PDF Signature Checker** allows you to mathematically verify that a signed PDF has not been tampered with since it was signed. By analyzing the cryptographic hash embedded in the signature (PKCS#7/CMS) and comparing it to the actual file content, we provide an instant assessment of validity.",

        howToSteps: [
            "**Upload Signed PDF**: Drag and drop your digitally signed PDF file into the secure zone.",
            "**Automatic Analysis**: The tool instantly parses the file structure to locate digital signature dictionaries.",
            "**Cryptographic Verification**: We re-calculate the file hash (SHA-256/SHA-512) and compare it against the signed digest.",
            "**Review Report**: See a clear status indicating if the signature is valid (integrity intact) or invalid (tampered)."
        ],

        features: [
            "**Tamper Detection**: Uses math to detect even a single byte change in the document.",
            "**Signer Identity extraction**: View the Common Name (CN) and other certificate details of the signer.",
            "**Client-Side Privacy**: Your sensitive contracts and legal documents never leave your browser.",
            "**Multi-Signature Support**: Detects and verifies multiple signatures within a single document.",
            "**Instant Results**: No waiting for server uploads or processing queues."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Shield className="h-8 w-8 text-primary" />
                        Why Verify Digital Signatures?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        A digital signature is more than just an image of a handwritten signature. It is a cryptographic seal that binds an identity to a document's content. If a single comma is changed in the contract after signing, the signature acts as a tamper-evident seal and breaks.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-6 mb-8 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                            <Lock className="h-5 w-5 text-primary shrink-0" />
                            <span><strong>Integrity:</strong> Proof that the document has not been altered.</span>
                        </li>
                        <li className="flex gap-3">
                            <User className="h-5 w-5 text-primary shrink-0" />
                            <span><strong>Authenticity:</strong> Proof of who signed the document (via Certificate).</span>
                        </li>
                        <li className="flex gap-3">
                            <Award className="h-5 w-5 text-primary shrink-0" />
                            <span><strong>Non-Repudiation:</strong> The signer cannot deny having signed it.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Fingerprint className="h-8 w-8 text-primary" />
                        How It Works (The Tech)
                    </h2>
                    <div className="bg-card p-6 rounded-xl border border-border">
                        <p className="text-muted-foreground mb-4">
                            When a PDF is signed, a "digest" (hash) of the file content is created. This digest is encrypted using the signer's **Private Key**. This tool:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                            <li>Extracts the encrypted digest from the PDF signature dictionary.</li>
                            <li>Decrypts it using the public key found in the certificate.</li>
                            <li>Independently calculates the hash of the file you uploaded.</li>
                            <li><strong>Compares the two hashes.</strong> If they match, the document is pristine.</li>
                        </ol>
                    </div>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is my document uploaded to a server?",
                answer: "No. This tool operates entirely in your web browser. We use advanced JavaScript libraries (node-forge) to perform cryptographic operations locally on your device. Your files remain private."
            },
            {
                question: "Why does Adobe Acrobat show 'Unknown Trust' but this tool says 'Valid'?",
                answer: "Adobe validates against a specific 'Trusted List' (AATL) of government and corporate issuers. Browsers do not have access to this proprietary list. Our tool verifies the **mathematical integrity** (the file hasn't been changed) and displays the identity, but cannot verify if the issuer is specifically trusted by Adobe."
            },
            {
                question: "Can I verify DocuSign or Adobe Sign signatures?",
                answer: "Yes. Assuming the PDF contains a standard PAdES (PDF Advanced Electronic Signatures) standard signature, our tool can detect and verify its integrity."
            }
        ]
    }
}

const toolConfig = createToolConfig(rawToolConfig)

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/pdf_signature_check_hero.png"]
    }
}

import { User } from 'lucide-react';

export default function PdfSignatureCheckerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["SoftwareApplication", "FAQPage"],
        name: "PDF Signature Checker",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Verify PDF digital signatures online. Check document integrity and signer identity.",
        featureList: "Digital Signature Verification, PDF Integrity Check, Tamper Detection",
        mainEntity: rawToolConfig.content.faqs ? rawToolConfig.content.faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        })) : []
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToolPageLayout
                {...toolConfig.getLayoutProps(
                    <PdfSignatureCheckerTool />
                )}
            />
        </>
    )
}
