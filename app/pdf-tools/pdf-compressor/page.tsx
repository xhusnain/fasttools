import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFCompressor = dynamic(
  () => import("@/components/pdf/pdf-compressor").then((mod) => mod.PDFCompressor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PDF Compressor",
  description:
    "Compress a PDF file in your browser using low, medium, or high compression modes.",
  metaTitle: "PDF Compressor Online - Reduce PDF File Size Free",
  metaDescription:
    "Compress PDF files online with low, medium, or high settings. Reduce file size for upload and email workflows with browser-based processing.",
  path: "/pdf-tools/pdf-compressor",
  keywords: [
    "pdf compressor",
    "compress pdf",
    "reduce pdf size",
    "pdf size reducer",
    "pdf optimizer",
    "compress pdf online",
    "small pdf file",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Browser-based PDF compressor with selectable compression levels and downloadable output.",
    featureList: [
      "Low medium high compression",
      "Local PDF processing",
      "Single-file compression workflow",
      "Download compressed PDF",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Compressor Online",
    description:
      "Upload a PDF, choose compression level, and download a smaller file for sharing or submission.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
  ],

  content: {
    definition:
      "A PDF Compressor is a free tool that reduces PDF file size by optimizing images, fonts, and metadata while preserving document readability.",
    quickAnswer:
      "Upload a PDF and select a compression level (low, medium, or high). The tool optimizes images and internal structures to reduce file size. Download the compressed PDF — typically 50-90% smaller.",
    keyTakeaways: [
      "Reduces PDF file size by up to 90% depending on content",
      "Three compression levels: low (best quality), medium (balanced), high (smallest)",
      "Preserves text selectability and document structure",
      "Image-heavy PDFs see the largest size reductions",
      "All compression runs locally in your browser — no upload to servers",
    ],
    overview:
      "PDF Compressor helps reduce document size when files are too large for portals, email, or internal systems. You can switch between low, medium, and high compression to balance output size and visual quality.",

    howToSteps: [
      "Upload a PDF file.",
      "Choose compression level: low, medium, or high.",
      "Run compression and wait for processing to complete.",
      "Download the compressed PDF file.",
    ],

    features: [
      "Compression level selector (low, medium, high)",
      "Browser-based processing",
      "Single-click compressed download",
      "Size comparison between original and output",
      "No account required",
      "Works on desktop and mobile browsers",
    ],

    useCases: [
      "Prepare PDFs for email attachment limits",
      "Reduce file size for application portals",
      "Optimize internal document sharing",
      "Shrink scanned PDFs for easier storage",
      "Create lighter versions of presentation handouts",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Compression Behavior</h3>
          <p>
            This tool uses a visual re-render approach to reduce PDF size. Compression gains vary by document type, with image-heavy files
            often shrinking more than text-only files.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Level</h3>
          <p>
            Use low mode when quality matters most, medium for general business sharing, and high when size limits are strict and minor
            quality loss is acceptable.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Practical SEO/UX Fit</h3>
          <p>
            Search intent for this page is direct utility: users need a smaller PDF now. The page structure focuses on quick upload,
            clear compression choices, and fast output.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If output quality is too soft at high mode, retry with medium mode first before switching to low.",

    faqs: [
      {
        question: "How much can this compressor reduce a PDF?",
        answer:
          "Reduction depends on file content. Image-heavy PDFs usually compress more than text-only PDFs.",
      },
      {
        question: "Can I compress PDF to an exact size like 200KB?",
        answer:
          "This tool uses level-based compression, not exact target-size input. Try different levels and compare output size.",
      },
      {
        question: "Will text stay readable after compression?",
        answer:
          "In most cases yes, especially with low or medium mode. High mode may reduce clarity for some scanned pages.",
      },
      {
        question: "Is this PDF compressor free?",
        answer:
          "Yes, it is available as a free browser-based utility.",
      },
      {
        question: "Do I need to install software?",
        answer:
          "No installation is required. Use it directly in your browser.",
      },
      {
        question: "Can I compress multiple PDFs at once?",
        answer:
          "The current UI is built for one PDF per run.",
      },
      {
        question: "Does it work on mobile devices?",
        answer:
          "Yes. It works on modern iPhone, Android, tablet, and desktop browsers.",
      },
      {
        question: "What should I do if file size barely changes?",
        answer:
          "The file may already be optimized. Try a higher compression level or split and compress only required pages.",
      },
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFCompressor />)} />
}
