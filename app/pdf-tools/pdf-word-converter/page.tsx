import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFWordConverter = dynamic(
  () => import("@/components/pdf/pdf-word-converter").then((mod) => mod.PDFWordConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PDF to Word & Word to PDF Converter",
  description:
    "Convert PDF text into DOCX and create PDF output from Word document content in a browser workflow.",
  metaTitle: "PDF to Word and Word to PDF Converter Online",
  metaDescription:
    "Run PDF to Word and Word to PDF conversion online with a browser-based workflow designed for fast text-focused document conversion.",
  path: "/pdf-tools/pdf-word-converter",
  keywords: [
    "pdf to word",
    "word to pdf",
    "pdf word converter",
    "convert pdf to docx",
    "convert docx to pdf",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Bidirectional PDF and Word conversion workflow focused on browser-based text conversion tasks.",
    featureList: [
      "PDF to DOCX text conversion",
      "Word to PDF conversion workflow",
      "No-login browser processing",
      "Download converted output",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF to Word & Word to PDF Converter",
    description:
      "Switch modes to convert PDF text into DOCX or generate PDF output from Word-document content.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Word Converter", href: "/pdf-tools/pdf-word-converter" },
  ],

  content: {
    overview:
      "This converter supports two directions: PDF to Word and Word to PDF. It is best for quick text-focused conversion workflows where you need editable output or a portable PDF version without leaving the browser.",

    howToSteps: [
      "Choose conversion mode: PDF to Word or Word to PDF.",
      "Upload a compatible file for the selected mode.",
      "Run conversion and wait for processing to complete.",
      "Download the converted file.",
    ],

    features: [
      "Bidirectional mode switcher",
      "PDF to DOCX text-oriented conversion",
      "Word to PDF browser conversion workflow",
      "Download-ready converted output",
      "No account required",
      "Desktop and mobile browser support",
    ],

    useCases: [
      "Turn PDF content into editable Word text",
      "Generate PDF copies of Word document content",
      "Prepare files for review and approval sharing",
      "Run quick conversions when desktop tools are unavailable",
      "Support lightweight document-editing workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Conversion Scope</h3>
          <p>
            This tool is optimized for practical text-forward conversion scenarios in browser context. Complex layouts may still require
            manual cleanup after conversion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use Desktop Alternatives</h3>
          <p>
            For pixel-perfect enterprise formatting parity across complex templates, dedicated desktop office/PDF software can still be a
            better fit. This page targets speed and accessibility first.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Intent and Content Match</h3>
          <p>
            Metadata and copy target "pdf to word" and "word to pdf" utility intent while setting realistic expectations for browser-first
            conversion quality.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For important formatting, run a quick QA pass on headings, tables, and page breaks after conversion.",

    faqs: [
      {
        question: "Can I convert PDF to editable Word?",
        answer:
          "Yes. Use PDF to Word mode to generate DOCX output intended for editable text workflows.",
      },
      {
        question: "Can I convert Word to PDF in this tool?",
        answer:
          "Yes. Switch to Word to PDF mode and upload your document to generate PDF output.",
      },
      {
        question: "Will formatting always match perfectly?",
        answer:
          "Simple layouts usually convert well, while complex layouts may need manual refinement after conversion.",
      },
      {
        question: "Which file type is recommended for Word uploads?",
        answer:
          "DOCX is recommended for best compatibility in browser-based workflows.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is available as a free browser-based utility.",
      },
      {
        question: "Do I need Microsoft Word installed?",
        answer: "No. The conversion runs in your browser.",
      },
      {
        question: "Can I use this on phone or tablet?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "What should I do if conversion output looks off?",
        answer:
          "Retry with a cleaner source file and perform a quick manual formatting pass on the output.",
      },
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "Sign PDF", href: "/pdf-tools/pdf-sign" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFWordConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFWordConverter />)} />
}
