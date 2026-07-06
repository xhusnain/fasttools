import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PdfSignatureCheckerTool } from "@/components/pdf-tools/pdf-signature-checker"
import { Shield, Lock, CheckCircle2 } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "PDF Signature Checker",
  description:
    "Verify digital signatures in PDF documents online for free. Check signer identity, certificate details, timestamp validation, and document integrity to detect tampering — all processed locally in your browser.",
  metaTitle: "PDF Signature Checker — Verify PDF Digital Signatures Online",
  metaDescription:
    "Free PDF signature verifier. Validate digital signatures, check signer identity and certificate details, signing timestamps, and document integrity to detect tampering. 100% client-side — your PDF never leaves your browser.",
  path: "/pdf-tools/pdf-signature-checker",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF digital signature verification tool. Checks signer identity, certificate details, signing timestamps, and document integrity indicators. Detects post-signing modifications with client-side browser analysis.",
    alternateName: [
      "PDF Signature Verifier",
      "Verify PDF Signature",
      "PDF Digital Signature Validator",
      "PDF Authenticity Checker",
      "PDF Tampering Detector",
      "PDF Certificate Validator",
      "Digital Signature Validity Checker",
      "PDF e-Sign Verifier",
      "Signed PDF Checker",
      "PDF Integrity Checker",
      "PDF Signer Identity Lookup",
      "Adobe PDF Sign Verify",
      "DocuSign Verify",
      "PAdES Validator",
      "PKCS#7 PDF Signature Validator",
    ],
    featureList: [
      "Digital signature detection and validation",
      "Signer identity (Common Name, Organization) extraction",
      "X.509 certificate details (issuer, validity period, key usage)",
      "Signing timestamp verification (RFC 3161 TSA)",
      "Document integrity / tampering detection (hash comparison)",
      "Post-signing modification indicators",
      "Multi-signature PDF support",
      "PAdES (PDF Advanced Electronic Signatures) compliance check",
      "PKCS#7 signature parsing",
      "Certificate chain validation",
      "Visual indicator (green = valid, yellow = warning, red = invalid)",
      "100% client-side — your PDF never uploaded to any server",
      "Free, no signup",
    ],
    softwareRequirements: "Modern web browser",
  },

  heroImage: "/images/pdf_signature_check_hero.png",

  header: {
    title: "PDF Signature Checker",
    description:
      "Verify digital signatures in signed PDF documents online for free. Inspect signer identity, certificate details, signing timestamps, and document integrity status to detect unauthorized modifications — all analysis runs locally in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
  ],

  content: {
    definition:
      "A PDF Signature Checker is a free online tool that verifies digital signatures embedded in PDF documents by inspecting signer identity, certificate validity, signing timestamps, and document integrity — confirming whether a signed PDF is authentic and unmodified.",
    quickAnswer:
      "Upload a digitally signed PDF to verify its signatures. The tool checks signature validity, extracts signer identity and certificate details, displays signing timestamps, and detects whether the document was modified after signing. Use it for quick document authentication before legal, compliance, or business review.",
    keyTakeaways: [
      "Verifies digital signatures in PDF documents to confirm authenticity and signer identity",
      "Detects post-signing modifications that may indicate document tampering",
      "Extracts and displays signer name, certificate issuer, and signing timestamp",
      "Validates PKI (Public Key Infrastructure) signature structures embedded in the PDF",
      "All signature verification runs locally in your browser — your PDF is never uploaded to any server",
    ],
    overview:
      "This free online PDF Signature Checker provides instant verification of digitally signed PDF documents. Whether you received a signed contract, notarized document, government filing, or certified report, this tool helps you quickly verify that the digital signature is valid and the document has not been tampered with after signing. The checker parses the PDF structure to detect signature blocks, extract signer identity fields and certificate information, validate signing timestamps, and check document integrity indicators. It supports standard PDF digital signatures based on PKI (Public Key Infrastructure) including PKCS#7 and CMS signature formats commonly used by Adobe Acrobat, DocuSign, and other signing platforms.",

    howToSteps: [
      "Upload the digitally signed PDF file you want to verify.",
      "Wait while the tool parses the PDF structure and analyzes embedded signature data locally.",
      "Review the signature verification results: signer identity, certificate details, and signing timestamp.",
      "Check the document integrity status to see if the PDF was modified after signing.",
      "Use the verification results for compliance review, legal validation, or document acceptance decisions.",
    ],

    features: [
      "Digital signature detection and validation for PKCS#7 and CMS signature formats",
      "Signer identity extraction showing name, email, and organization from certificate data",
      "Certificate chain inspection with issuer details and validity period",
      "Signing timestamp verification showing exact date and time of signature",
      "Document integrity check detecting post-signing modifications and potential tampering",
      "Support for multi-signature PDFs with individual verification for each signer",
      "100% browser-based analysis — no file uploads, no server processing",
    ],

    useCases: [
      "Verify signed contracts and legal agreements before acceptance or countersigning",
      "Validate digitally signed government documents, court filings, and regulatory submissions",
      "Check document integrity on signed invoices, purchase orders, and financial statements",
      "Perform intake verification on signed vendor agreements and compliance certificates",
      "Validate notarized PDF documents received via email before filing",
      "Screen signed documents for tampering in audit and compliance review workflows",
    ],

    aboutTool: (
      <div className="space-y-8 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            How PDF Digital Signature Verification Works
          </h3>
          <p>
            PDF digital signatures use PKI (Public Key Infrastructure) to cryptographically bind a signer&apos;s identity to the document content. When a PDF is signed, a hash of the document content is encrypted with the signer&apos;s private key and embedded in the PDF along with the signer&apos;s certificate. This checker decrypts the signature hash using the embedded public key and compares it against the current document content. If the hashes match, the document has not been modified since signing. The tool also extracts signer identity fields, certificate issuer information, and signing timestamps from the signature data.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Certificate Trust Chain Considerations
          </h3>
          <p>
            Browser-based signature verification can validate signature integrity and extract certificate details, but may not have access to the full certificate trust chain used by enterprise certificate authorities (CAs) or Adobe&apos;s Approved Trust List (AATL). For business-critical documents requiring full trust-chain validation, use this tool as a fast first-pass check and then verify in Adobe Acrobat or your organization&apos;s dedicated certificate validation infrastructure for final approval.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            When to Use This Verification Tool
          </h3>
          <p>
            Use this tool for quick screening of signed PDFs before deeper review — checking incoming contracts, validating vendor certificates, verifying government filings, or triaging signed documents in operational workflows. It provides immediate visibility into signature status, signer identity, and document integrity without requiring Adobe Acrobat or specialized software installation.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For business-critical signed documents, use this tool for fast initial screening, then validate the full certificate trust chain in Adobe Acrobat or your organization’s PKI infrastructure before making final acceptance decisions.",

    faqs: [
      {
        question: "How do I verify a digital signature in a PDF online?",
        answer:
          "Upload the signed PDF to this free tool. It automatically detects digital signatures, verifies their integrity, extracts signer identity and certificate details, and checks whether the document was modified after signing. Results appear in seconds with no software installation required.",
      },
      {
        question: "What information does the PDF Signature Checker show?",
        answer:
          "The tool displays signer name and identity fields from the certificate, certificate issuer details, signing date and timestamp, signature validity status, and document integrity indicators showing whether the PDF content was modified after the signature was applied.",
      },
      {
        question: "Can this tool detect if a signed PDF was tampered with?",
        answer:
          "Yes. The tool checks document integrity by comparing the cryptographic hash embedded in the signature against the current document content. If the document was modified after signing, the integrity check will flag the discrepancy, indicating potential tampering or unauthorized changes.",
      },
      {
        question: "Does this replace Adobe Acrobat signature verification?",
        answer:
          "This tool provides excellent first-pass signature verification including integrity checks and signer identity extraction. However, full trust-chain validation against enterprise certificate authorities and Adobe’s AATL may require Adobe Acrobat or dedicated PKI validation software. Use this tool for quick screening and Adobe for final compliance decisions.",
      },
      {
        question: "Is my signed PDF data safe when using this verification tool?",
        answer:
          "Yes. All signature analysis and verification happens locally in your browser using client-side JavaScript. Your PDF is never uploaded to any server, making it safe for confidential legal documents, financial statements, government filings, and sensitive business agreements.",
      },
      {
        question: "What types of PDF digital signatures does this tool support?",
        answer:
          "The tool supports standard PDF digital signatures based on PKCS#7 and CMS (Cryptographic Message Syntax) formats. These are the signature formats used by Adobe Acrobat, DocuSign, GlobalSign, DigiCert, and most enterprise document signing platforms.",
      },
      {
        question: "What does it mean if no signature is found in my PDF?",
        answer:
          "A ‘no signature found’ result means the PDF does not contain embedded digital signatures. The document may have been electronically signed with a visual signature image (which is not a cryptographic digital signature) or may not have been signed at all. Verify with the document sender whether a digital signature was intended.",
      },
    ],

    relatedTools: [
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "AI Image Detector", href: "/image-tools/ai-image-detector" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PdfSignatureCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PdfSignatureCheckerTool />)} />
}
