import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFToImage = dynamic(() => import("@/components/pdf/pdf-to-image").then((mod) => mod.PDFToImage), {
  loading: () => <ToolLoader />,
})

const toolConfig = createToolConfig({
  toolName: "PDF to Image Converter",
  description:
    "Convert PDF pages to JPG, PNG, or WebP images with quality presets and page selection.",
  metaTitle: "PDF to Image Converter - Convert PDF to JPG, PNG, WebP",
  metaDescription:
    "Convert PDF pages to JPG, PNG, or WebP online. Export all pages or selected ranges, then download images individually or as ZIP.",
  path: "/pdf-tools/pdf-to-image",
  keywords: [
    "pdf to image",
    "pdf to jpg",
    "pdf to png",
    "pdf to webp",
    "convert pdf pages to images",
    "extract images from pdf pages",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Browser-based PDF page to image converter with format selection, quality presets, and ZIP export.",
    featureList: [
      "Convert to JPG PNG WebP",
      "All pages or selected pages",
      "Quality presets",
      "Individual and ZIP download",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF to Image Converter",
    description:
      "Export PDF pages to JPG, PNG, or WebP with all-page and selected-page conversion options.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
  ],

  content: {
    definition:
      "A PDF to Image Converter is a free tool that converts PDF pages into high-quality PNG or JPG images for sharing, presentations, and web use.",
    quickAnswer:
      "Upload a PDF to convert each page to an image. Choose PNG (lossless) or JPG (smaller size), set the resolution (DPI), and download individual page images or all pages as a ZIP file.",
    keyTakeaways: [
      "Converts each PDF page to a separate PNG or JPG image",
      "Adjustable resolution: 72 DPI (web) to 300 DPI (print quality)",
      "PNG for lossless quality, JPG for smaller file sizes",
      "Download individual pages or all pages as a ZIP archive",
      "All conversion runs locally in your browser",
    ],
    overview:
      "PDF to Image Converter is built for page export workflows where PDF pages need to be reused as images. Choose output format and quality, convert all pages or specific pages, then download individual files or one ZIP package.",

    howToSteps: [
      "Upload a PDF file.",
      "Choose output format (JPG, PNG, or WebP) and quality preset.",
      "Select conversion mode: all pages or specific pages/ranges.",
      "Run conversion and download images individually or as ZIP.",
    ],

    features: [
      "JPG, PNG, and WebP output",
      "Low, medium, and high quality presets",
      "All-pages or selected-pages conversion",
      "Page range parsing (for specific mode)",
      "Individual image download",
      "Bulk ZIP download",
      "No account required",
      "Browser-based workflow",
    ],

    useCases: [
      "Export PDF slides as image assets",
      "Create image snippets from reports",
      "Prepare document pages for web publishing",
      "Share selected PDF pages in image format",
      "Build visual archives from PDF content",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Format Choice</h3>
          <p>
            Choose JPG for smaller image files, PNG for sharper text-heavy pages, and WebP for modern compressed web output.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Quality and File Size</h3>
          <p>
            Higher quality gives clearer detail but larger images. For publishing workflows, test medium first, then adjust up or down
            based on clarity and size targets.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Intent Coverage</h3>
          <p>
            This page is optimized for utility queries like "pdf to jpg" and "convert pdf to image" with task-first structure and direct
            output actions.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use specific-page mode when you only need a few pages. It reduces processing time and download size.",

    faqs: [
      {
        question: "How do I convert PDF pages to JPG?",
        answer:
          "Upload your PDF, choose JPG format, run conversion, then download the generated images.",
      },
      {
        question: "Can I export only selected pages?",
        answer:
          "Yes. Use specific-page mode and enter page numbers or ranges.",
      },
      {
        question: "Which format should I choose: JPG, PNG, or WebP?",
        answer:
          "JPG is usually smaller, PNG is often better for text clarity, and WebP is good for modern web usage.",
      },
      {
        question: "Can I download all converted pages at once?",
        answer: "Yes. Use the ZIP download option to export all converted pages together.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes, it is available as a free browser-based utility.",
      },
      {
        question: "Do I need to install an app?",
        answer: "No. You can run conversions directly in your browser.",
      },
      {
        question: "Can I use PDF to Image on mobile?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "Can this convert encrypted PDFs?",
        answer:
          "If a PDF is protected, unlock it first with PDF Unlocker and then run image conversion.",
      },
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFToImagePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToImage />)} />
}
