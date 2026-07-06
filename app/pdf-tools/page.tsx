import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { FileStack, Shield } from "lucide-react"

const pdfTools = [
  {
    title: "PDF Splitter & Merger",
    description: "Split pages by range or merge multiple PDFs in custom order.",
    icon: FileStack,
    href: "/pdf-tools/pdf-splitter-merger",
    popular: true,
  },
  {
    title: "PDF Signature Checker",
    description: "Run local checks on digital signatures and document integrity indicators.",
    icon: Shield,
    href: "/pdf-tools/pdf-signature-checker",
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "PDF Tools",
  description:
    "Free browser-based PDF tools for splitting, merging, and digital-signature checks.",
  metaTitle: "PDF Tools Online - Check Signatures, Split & Merge",
  metaDescription:
    "Use free PDF tools online: compress PDF, split or merge files, sign documents, unlock restrictions, convert formats, and check signatures.",
  path: "/pdf-tools",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Category page for browser-based PDF utilities including split/merge page operations and digital-signature checks.",
    featureList: [
      "PDF split and merge",
      "PDF signature checking",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Tools Online",
    description:
      "Choose a PDF tool for page operations or signature verification workflows.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "PDF Tools", href: "/pdf-tools" }],

  content: {
    overview:
      "This category targets two practical PDF workflows: split and merge documents, and run digital-signature checks. Each tool is designed for direct browser usage with no account requirement.",

    howToSteps: [
      "Select the PDF task you want to complete.",
      "Upload your file and configure tool-specific options.",
      "Run processing in the browser workflow.",
      "Download or review the output result.",
    ],

    features: [
      "Focused PDF utilities for daily document workflows",
      "Task-specific controls by tool",
      "No-login browser usage",
      "Desktop and mobile compatibility",
      "Internal links across related PDF and image tools",
    ],

    useCases: [
      "Extract or combine document sections for operations teams",
      "Split large PDFs into shareable page ranges",
      "Merge reports, contracts, and scans into one file",
      "Verify signature status before approvals",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Category Search Intent</h3>
          <p>
            PDF queries are mostly utility-driven and action-based. Users typically search phrases like "split PDF", "merge PDF", or
            "check PDF signature" with immediate task intent.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tool Cluster Strategy</h3>
          <p>
            The page groups page-operation and verification tools into one internal cluster so users can move between related tasks in
            the same workflow.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">User-First Positioning</h3>
          <p>
            Copy and metadata are written around what each tool actually does in this project to reduce mismatch risk and improve quality
            signals over time.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When combining documents, merge first and then split out only the page ranges you need so the final file stays lean.",

    faqs: [
      {
        question: "Which PDF tools are included here?",
        answer:
          "This category includes the PDF Splitter & Merger for page operations and the PDF Signature Checker for digital-signature verification.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. The tools in this category are available without account creation.",
      },
      {
        question: "Can I use these PDF tools on mobile devices?",
        answer:
          "Yes. The interfaces are designed for modern mobile and desktop browsers.",
      },
      {
        question: "How do I combine and reorder multiple PDFs?",
        answer:
          "Use PDF Splitter & Merger. Upload multiple files, reorder them, then export the merged result.",
      },
      {
        question: "Can I extract specific pages from a PDF?",
        answer:
          "Yes. PDF Splitter & Merger lets you split a document by page range so you keep only the pages you need.",
      },
      {
        question: "What does the PDF Signature Checker do?",
        answer:
          "PDF Signature Checker inspects digital-signature data and integrity indicators for signed PDFs. It does not add signatures to documents.",
      },
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pdfTools.map((tool) => (
            <GToolCard
              key={`pdf-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
