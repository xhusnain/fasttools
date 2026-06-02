import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { FileSignature, RefreshCw, FileStack, Unlock, Minimize2, Image, Shield, Images } from "lucide-react"

const pdfTools = [
  {
    title: "PDF Compressor",
    description: "Reduce PDF size with low, medium, or high compression levels in your browser.",
    icon: Minimize2,
    href: "/pdf-tools/pdf-compressor",
    popular: true,
  },
  {
    title: "PDF Splitter & Merger",
    description: "Split pages by range or merge multiple PDFs in custom order.",
    icon: FileStack,
    href: "/pdf-tools/pdf-splitter-merger",
    popular: true,
  },
  {
    title: "PDF to Word & Word to PDF",
    description: "Convert between PDF and document formats for edit and sharing workflows.",
    icon: RefreshCw,
    href: "/pdf-tools/pdf-word-converter",
    popular: true,
  },
  {
    title: "Sign PDF",
    description: "Draw, type, or upload a signature and place it on PDF pages.",
    icon: FileSignature,
    href: "/pdf-tools/pdf-sign",
    popular: true,
  },
  {
    title: "PDF Unlocker",
    description: "Remove open or permission restrictions from PDFs you are authorized to access.",
    icon: Unlock,
    href: "/pdf-tools/pdf-unlocker",
    popular: true,
  },
  {
    title: "Image to PDF Converter",
    description: "Combine JPG, PNG, and WebP images into one PDF with page size and margin controls.",
    icon: Images,
    href: "/pdf-tools/image-to-pdf",
    popular: true,
  },
  {
    title: "PDF to Image Converter",
    description: "Export PDF pages to JPG, PNG, or WebP with quality presets.",
    icon: Image,
    href: "/pdf-tools/pdf-to-image",
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
    "Free browser-based PDF tools for compression, split/merge, signing, unlocking, conversion, and signature checks.",
  metaTitle: "PDF Tools Online - Compress, Split, Merge, Sign, Convert",
  metaDescription:
    "Use free PDF tools online: compress PDF, split or merge files, sign documents, unlock restrictions, convert formats, and check signatures.",
  path: "/pdf-tools",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Category page for browser-based PDF utilities including compression, split/merge, conversion, signing, unlocking, and signature checks.",
    featureList: [
      "PDF compression",
      "PDF split and merge",
      "PDF signing",
      "PDF unlocking",
      "Image to PDF and PDF to image conversion",
      "PDF signature checking",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Tools Online",
    description:
      "Choose a PDF tool for compression, page operations, signing, conversion, or verification workflows.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "PDF Tools", href: "/pdf-tools" }],

  content: {
    overview:
      "This category targets practical PDF workflows: reduce size, split and merge documents, add signatures, unlock restrictions, convert file formats, and run signature checks. Each tool is designed for direct browser usage with no account requirement.",

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
      "Prepare files for upload limits or email delivery",
      "Extract or combine document sections for operations teams",
      "Collect signatures without print-scan loops",
      "Convert pages for image-based publishing workflows",
      "Combine photos or screenshots into one PDF",
      "Verify signature status before approvals",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Category Search Intent</h3>
          <p>
            PDF queries are mostly utility-driven and action-based. Users typically search phrases like "compress PDF", "split PDF",
            "merge PDF", "sign PDF", or "PDF to Word" with immediate task intent.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tool Cluster Strategy</h3>
          <p>
            The page groups conversion, optimization, signing, and verification tools into one internal cluster so users can move between
            related tasks in the same workflow.
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
      "For multi-step workflows, run split/merge first, then compress or convert so you only process the final pages you need.",

    faqs: [
      {
        question: "Which PDF tools are included here?",
        answer:
          "This category includes compressor, splitter/merger, PDF-Word conversion, signer, unlocker, PDF-image conversion, and signature checker tools.",
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
        question: "Which tool should I use to reduce file size?",
        answer:
          "Use PDF Compressor for file-size reduction and try different compression levels based on output quality needs.",
      },
      {
        question: "How do I combine and reorder multiple PDFs?",
        answer:
          "Use PDF Splitter & Merger. Upload multiple files, reorder them, then export the merged result.",
      },
      {
        question: "What is the difference between signing and signature checking?",
        answer:
          "Sign PDF adds a visible signature mark to pages, while PDF Signature Checker inspects digital-signature data and integrity indicators.",
      },
      {
        question: "Can I convert between PDF and image formats?",
        answer:
          "Yes. Image to PDF combines JPG, PNG, and WebP images into a PDF. PDF to Image converts PDF pages to JPG, PNG, or WebP. For text extraction from images, use the Image to Text tool.",
      },
    ],

    relatedTools: [
      { name: "Image to PDF", href: "/pdf-tools/image-to-pdf" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF to Word & Word to PDF", href: "/pdf-tools/pdf-word-converter" },
      { name: "Sign PDF", href: "/pdf-tools/pdf-sign" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
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
