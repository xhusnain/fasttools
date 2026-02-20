import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PdfSignatureCheckerTool } from "@/components/pdf-tools/pdf-signature-checker"
import { Shield, Lock, CheckCircle2 } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "PDF Signature Checker",
  description:
    "Check PDF digital-signature structure and integrity indicators in your browser with local analysis.",
  metaTitle: "PDF Signature Checker - Verify PDF Signature Status Online",
  metaDescription:
    "Run a local PDF signature check to inspect signer fields and integrity indicators. Browser-based analysis with no account required.",
  path: "/pdf-tools/pdf-signature-checker",
  keywords: [
    "pdf signature checker",
    "verify pdf signature",
    "pdf digital signature verification",
    "check signed pdf",
    "pdf integrity check",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Local browser PDF signature checker for signature metadata and integrity-oriented checks.",
    featureList: [
      "PDF signature detection",
      "Signer field inspection",
      "Integrity status indicators",
      "Client-side analysis",
    ],
    softwareRequirements: "Modern web browser",
  },

  heroImage: "/images/pdf_signature_check_hero.png",

  header: {
    title: "PDF Signature Checker",
    description:
      "Upload a signed PDF to inspect signature status and integrity-oriented indicators in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
  ],

  content: {
    overview:
      "PDF Signature Checker is designed for quick inspection of digitally signed PDFs. It detects signature blocks, extracts signer-related fields when available, and provides integrity-oriented check results for document review workflows.",

    howToSteps: [
      "Upload a signed PDF file.",
      "Wait while the tool parses signature-related PDF data locally.",
      "Review signature status, signer field output, and integrity indicator.",
      "Use the result as a first-pass verification before compliance or legal review.",
    ],

    features: [
      "Detects digital-signature structures in PDF files",
      "Shows signer identity field when available",
      "Displays integrity-oriented status output",
      "Runs analysis in browser",
      "No account required",
      "Desktop and mobile browser support",
    ],

    useCases: [
      "First-pass QA checks for signed PDFs",
      "Document handoff validation in operations teams",
      "Pre-review checks before legal/compliance steps",
      "Basic signed-document triage in support workflows",
      "Vendor and contract PDF intake checks",
    ],

    aboutTool: (
      <div className="space-y-8 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            What The Checker Confirms
          </h3>
          <p>
            The tool focuses on signature presence and integrity-style indicators from the PDF structure. It helps identify whether a
            signed file appears modified after signing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Trust-Chain Limitation
          </h3>
          <p>
            Browser tools typically do not have access to full enterprise or Adobe trust stores. Treat this output as an initial technical
            check, not a complete trust-certificate policy decision.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Where It Fits In Workflow
          </h3>
          <p>
            Use this page for fast screening before deeper verification in dedicated compliance or certificate-validation systems.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If a PDF is business-critical, combine this check with your organization’s certificate-trust workflow for final approval.",

    faqs: [
      {
        question: "What does PDF Signature Checker verify?",
        answer:
          "It checks for digital-signature structures, extracts available signer fields, and reports integrity-style status indicators.",
      },
      {
        question: "Does this replace enterprise trust validation?",
        answer:
          "No. Use it as a first-pass check. Full trust-chain validation may require dedicated certificate trust infrastructure.",
      },
      {
        question: "Can it detect if a file appears modified after signing?",
        answer:
          "It provides integrity-oriented output that can indicate possible post-sign changes.",
      },
      {
        question: "Will it show signer information?",
        answer:
          "If signer identity fields are present in the signature data, the tool displays them.",
      },
      {
        question: "Is my PDF uploaded to a server?",
        answer:
          "The tool is designed for local browser processing workflow.",
      },
      {
        question: "Can I use it on mobile?",
        answer:
          "Yes. It works on modern mobile and desktop browsers.",
      },
      {
        question: "What if no signature is found?",
        answer:
          "You will see a no-signature result. In that case, validate whether the PDF was expected to be digitally signed.",
      },
    ],

    relatedTools: [
      { name: "Sign PDF", href: "/pdf-tools/pdf-sign" },
      { name: "PDF Tools Category", href: "/pdf-tools" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PdfSignatureCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PdfSignatureCheckerTool />)} />
}
