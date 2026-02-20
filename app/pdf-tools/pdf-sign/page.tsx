import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFSign = dynamic(() => import("@/components/pdf/pdf-sign").then((mod) => mod.PDFSign), {
  loading: () => <ToolLoader />,
})

const toolConfig = createToolConfig({
  toolName: "Sign PDF",
  description:
    "Sign PDF files by drawing, typing, or uploading a signature image and placing it on document pages.",
  metaTitle: "Sign PDF Online - Draw, Type, or Upload Signature",
  metaDescription:
    "Add a signature to PDF online. Draw, type, or upload your signature, place it on pages, and download the signed document.",
  path: "/pdf-tools/pdf-sign",
  keywords: [
    "sign pdf",
    "pdf signature",
    "esign pdf",
    "add signature to pdf",
    "draw signature on pdf",
    "pdf signer online",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Online PDF signing tool with draw, type, and upload signature modes and multi-page placement.",
    featureList: [
      "Draw signature",
      "Type signature",
      "Upload signature image",
      "Place signatures on selected pages",
      "Download signed PDF",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "Sign PDF Online",
    description:
      "Upload a PDF, create a signature, place it where needed, and download the signed file in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "Sign PDF", href: "/pdf-tools/pdf-sign" },
  ],

  content: {
    overview:
      "Sign PDF is built for quick signature placement workflows. You can draw with mouse or touch, type your name as a signature, or upload an existing signature image and position it on one or more pages.",

    howToSteps: [
      "Upload your PDF file.",
      "Choose signature mode: draw, type, or upload.",
      "Click on the page to place signature, then drag to reposition if needed.",
      "Download the signed PDF.",
    ],

    features: [
      "Three signature input modes",
      "Page-by-page signature placement",
      "Signature reposition before export",
      "Supports multi-page documents",
      "No account required",
      "Browser-based workflow for desktop and mobile",
    ],

    useCases: [
      "Sign approval documents in internal workflows",
      "Add signature marks to contract drafts",
      "Prepare signed forms without printing",
      "Apply signatures to multi-page business documents",
      "Complete remote sign-off tasks quickly",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Produces</h3>
          <p>
            The output is a PDF with visible signature graphics placed on selected pages. It is suitable for many operational workflows
            where a visual signature mark is required.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Legal Context</h3>
          <p>
            Legal acceptance of electronic signatures varies by jurisdiction, document type, and organization policy. For regulated
            workflows, confirm your local legal and compliance requirements.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Intent Alignment</h3>
          <p>
            This page targets direct utility queries like "sign PDF online" and "add signature to PDF" with minimal friction from upload
            to download.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For consistent results across documents, save one signature style and reuse it with the upload option.",

    faqs: [
      {
        question: "How can I sign a PDF online?",
        answer:
          "Upload the PDF, create or upload your signature, click to place it on the page, and download the signed file.",
      },
      {
        question: "Can I draw my signature with touch or mouse?",
        answer: "Yes. The draw mode supports both mouse and touch input.",
      },
      {
        question: "Can I add signatures on multiple pages?",
        answer:
          "Yes. You can place signatures on different pages in the same document before exporting.",
      },
      {
        question: "Can I type my name as a signature?",
        answer:
          "Yes. Type mode generates a signature-style text image that you can place on the document.",
      },
      {
        question: "Is this a digital certificate signature?",
        answer:
          "This tool places visible signature graphics. It does not issue PKI certificate-based trust signatures.",
      },
      {
        question: "Is this tool free to use?",
        answer: "Yes. It is available as a free browser-based utility.",
      },
      {
        question: "Does Sign PDF work on mobile?",
        answer:
          "Yes. You can use it on modern iPhone, Android, tablet, and desktop browsers.",
      },
      {
        question: "Can I edit signature position before download?",
        answer:
          "Yes. You can reposition signature elements before generating the final file.",
      },
    ],

    relatedTools: [
      { name: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFSignPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFSign />)} />
}
