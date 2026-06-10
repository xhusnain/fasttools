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
    "Convert PDF pages to high-quality JPG, PNG, or WebP images online for free. Export all pages or specific page ranges with adjustable quality settings and download individually or as a ZIP archive.",
  metaTitle: "PDF to Image — Convert PDF to JPG, PNG, WebP Free",
  metaDescription:
    "Free PDF to image converter. Convert every page of a PDF to JPG, PNG, or WebP. Choose quality (low/medium/high), select specific pages, download individually or as a ZIP. 100% client-side, no upload, no signup.",
  path: "/pdf-tools/pdf-to-image",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF to image converter supporting JPG, PNG, and WebP output formats. Features adjustable quality presets, all-page or selected-page conversion, individual download, and bulk ZIP export.",
    alternateName: [
      "PDF to JPG Converter",
      "PDF to PNG Converter",
      "PDF to WebP Converter",
      "Convert PDF to Image",
      "Extract Images from PDF",
      "PDF Page to Image",
      "Save PDF as JPG",
      "Save PDF as PNG",
      "PDF Screenshot Converter",
      "PDF to Picture",
      "Each PDF Page as Image",
      "PDF Slide Extractor",
      "PDF Thumbnail Generator",
      "ilovepdf PDF to JPG Alternative",
      "Smallpdf PDF to JPG Alternative",
    ],
    featureList: [
      "Convert PDF to JPG, PNG, or WebP format",
      "All pages or custom page range selection (e.g., 1-3, 5, 10-15)",
      "Quality presets: low (smaller files), medium, high (sharp)",
      "Individual page image download",
      "Bulk ZIP archive download",
      "PDF page count detection after upload",
      "Low, medium, and high render-scale presets",
      "Multi-page document support",
      "100% client-side via PDF.js — your PDF never uploaded",
      "Free, no signup, no watermark",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF to Image Converter",
    description:
      "Convert PDF pages to high-quality JPG, PNG, or WebP images online for free. Export all pages or select specific page ranges, choose your quality level, and download images individually or as a ZIP archive — all processed locally in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
  ],

  content: {
    definition:
      "A PDF to Image Converter is a free online tool that renders each page of a PDF document into a high-quality raster image in JPG, PNG, or WebP format — ideal for presentations, social media, web publishing, and document archiving.",
    quickAnswer:
      "Upload a PDF to convert pages into images. Select your output format — PNG for lossless quality with transparency support, JPG for smaller file sizes, or WebP for modern web-optimized output. Choose a quality preset (low, medium, or high), select all pages or specific page ranges, and download individual images or all pages as a ZIP archive.",
    keyTakeaways: [
      "Converts each PDF page to a separate high-resolution JPG, PNG, or WebP image",
      "Three quality presets: low (fast, smaller files), medium (balanced), high (maximum detail)",
      "PNG for crisp text and graphics, JPG for compact files, WebP for modern web output",
      "Download individual page images or export all pages as a single ZIP archive",
      "Supports custom page range selection (e.g., pages 1-5, 8, 12-15)",
      "All conversion processing runs locally in your browser — files never leave your device",
    ],
    overview:
      "This free PDF to image converter transforms PDF document pages into high-quality raster images suitable for presentations, social media posts, web publishing, email embedding, support tickets, and visual document archives. The tool supports JPG, PNG, and WebP output. Choose low quality for quick previews, medium for balanced sharing, or high for sharper page rendering. Convert all pages at once for a complete document export, or select specific pages and ranges when you only need part of the PDF. Download images one at a time or grab everything in a single ZIP archive for batch workflows.",

    howToSteps: [
      "Upload your PDF file by dragging and dropping or clicking the upload area.",
      "Select the output image format: JPG (compact), PNG (lossless), or WebP (web-optimized).",
      "Choose a quality preset: low for fast processing, medium for balanced output, or high for maximum detail.",
      "Select conversion scope: all pages for complete conversion or enter specific page numbers/ranges.",
      "Click convert and download individual page images or use the ZIP download for all pages at once.",
    ],

    features: [
      "Three output formats: JPG (lossy, compact), PNG (crisp), WebP (modern web format)",
      "Low, medium, and high quality presets controlling render scale and compression",
      "All-pages conversion for complete PDF-to-image extraction",
      "Custom page range selector supporting individual pages and ranges (e.g., 1-3, 5, 8-12)",
      "Individual image download for specific pages you need",
      "Bulk ZIP download to export all converted pages in a single archive",
      "100% browser-based processing — no uploads to external servers",
    ],

    useCases: [
      "Convert PDF presentation slides to image files for embedding in PowerPoint or Google Slides",
      "Extract PDF pages as images for social media posts, thumbnails, and content marketing",
      "Prepare document pages as web-ready images for blog posts and online articles",
      "Create image-based archives of important PDF documents for visual reference",
      "Convert PDF charts, graphs, and infographics to standalone image files for reports",
      "Share specific PDF pages as images via messaging apps and email where PDF viewing is limited",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JPG vs. PNG vs. WebP: Choosing the Right Format</h3>
          <p>
            JPG (JPEG) uses lossy compression to produce smaller files, making it useful for photo-heavy PDFs, email sharing, and situations where file size matters more than pixel-perfect accuracy. PNG is best for text-heavy documents, screenshots, diagrams, and graphics with sharp edges. WebP is a modern format with strong compression for web publishing and digital content workflows.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding Quality Presets and Resolution</h3>
          <p>
            The quality preset controls the render scale and compression level of the output images. Low quality produces smaller images suitable for quick previews and thumbnails. Medium quality provides balanced output for screen viewing and sharing. High quality renders pages at a larger scale with more detail, which is better for small text, charts, diagrams, and presentation exports.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Batch Conversion and ZIP Export</h3>
          <p>
            When converting multi-page PDFs, the tool processes each page into a separate numbered image file. The ZIP download option packages all converted images into a single archive, making it easy to download and organize large document conversions. This is particularly useful for converting entire presentations, reports, or book chapters into image format for archival or republishing purposes.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use specific-page mode when you only need a few pages from a large PDF — it significantly reduces processing time and download size. For web publishing, WebP at medium quality offers the best balance of file size and visual quality.",

    faqs: [
      {
        question: "How do I convert a PDF to JPG images online for free?",
        answer:
          "Upload your PDF to this free converter, select JPG as the output format, choose your quality preset, and click convert. Download individual page images or use the ZIP option to get all pages at once. No account registration or software installation needed.",
      },
      {
        question: "Can I convert only specific pages from a PDF to images?",
        answer:
          "Yes. Switch to specific-page mode and enter individual page numbers (e.g., 1, 3, 7) or page ranges (e.g., 5-12). Only the selected pages will be converted, saving processing time and download bandwidth.",
      },
      {
        question: "Should I choose JPG, PNG, or WebP for my PDF conversion?",
        answer:
          "Choose JPG for the smallest file sizes — best for photos and email sharing. Choose PNG for lossless quality — best for text documents, screenshots, and graphics with sharp edges. Choose WebP for modern web use — it offers better compression than both JPG and PNG at equivalent visual quality.",
      },
      {
        question: "Can I download all converted PDF pages as a single ZIP file?",
        answer:
          "Yes. After conversion, click the ZIP download button to package all converted page images into a single archive. Each image is named with its page number for easy organization.",
      },
      {
        question: "What image resolution does the PDF to image converter produce?",
        answer:
          "Resolution depends on the quality preset. Low uses a smaller render scale for quick previews, medium balances size and clarity, and high renders pages at a larger scale for sharper text and details.",
      },
      {
        question: "Is my PDF data safe when converting to images online?",
        answer:
          "Yes. All PDF rendering and image conversion happens locally in your browser using client-side JavaScript. Your PDF file is never uploaded to any server, making the tool safe for confidential, business, and personal documents.",
      },
      {
        question: "Can I convert a password-protected PDF to images?",
        answer:
          "Protected PDFs must be unlocked first. Use our free PDF Unlocker tool to remove password restrictions, then upload the unlocked PDF to this converter for image extraction.",
      },
    ],

    relatedTools: [
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFToImagePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToImage />)} />
}
