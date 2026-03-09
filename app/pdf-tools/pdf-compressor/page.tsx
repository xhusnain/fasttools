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
    "Compress PDF files online for free with adjustable low, medium, and high compression levels to reduce file size by up to 90% while preserving document quality.",
  metaTitle: "PDF Compressor — Reduce PDF File Size Online Free (2026)",
  metaDescription:
    "Compress PDF files online free with 3 compression levels. Reduce PDF size by up to 90% for email, uploads, and storage. Browser-based PDF compression with no software installation required.",
  path: "/pdf-tools/pdf-compressor",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF compressor with low, medium, and high compression modes. Reduces PDF file size by optimizing images, fonts, and metadata while preserving readability. Browser-based processing with instant download.",
    featureList: [
      "Three compression levels: low, medium, high",
      "PDF size reduction up to 90%",
      "Image optimization and font subsetting",
      "Original vs compressed size comparison",
      "Client-side browser processing",
      "Instant compressed PDF download",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Compressor Online",
    description:
      "Reduce PDF file size by up to 90% with adjustable compression levels. Optimize images, fonts, and metadata in your browser — perfect for email attachments, upload portals, and cloud storage limits.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
  ],

  content: {
    definition:
      "A PDF Compressor is a free online tool that reduces PDF file size by optimizing embedded images, subsetting fonts, removing duplicate resources, and stripping unnecessary metadata — all while preserving text selectability and document structure.",
    quickAnswer:
      "Upload a PDF and select a compression level (low, medium, or high). The tool optimizes images using JPEG/FLATE recompression, subsets embedded fonts, and removes redundant PDF objects to reduce file size. Download the compressed PDF — typically 50-90% smaller than the original.",
    keyTakeaways: [
      "Reduces PDF file size by up to 90% depending on content type and compression level",
      "Three compression modes: low (best quality, ~30% reduction), medium (balanced, ~60%), high (smallest file, ~90%)",
      "Preserves text selectability, hyperlinks, bookmarks, and document structure",
      "Image-heavy PDFs with scans and photos see the largest size reductions",
      "All PDF compression runs locally in your browser — files never leave your device",
    ],
    overview:
      "This free online PDF compressor helps you reduce PDF file size when documents are too large for email attachment limits, upload portals, application forms, or cloud storage quotas. The tool uses advanced image recompression algorithms, font subsetting, and metadata optimization to shrink PDFs while maintaining visual quality. Switch between low compression for maximum fidelity, medium compression for balanced file size and quality, or high compression when you need the smallest possible output. Whether you are compressing scanned documents, presentation handouts, research papers, or business reports, the browser-based processing ensures your files stay private and processing completes in seconds.",

    howToSteps: [
      "Upload your PDF file by dragging and dropping or clicking the upload area.",
      "Select your compression level: low (best quality), medium (balanced), or high (smallest size).",
      "Click compress and wait for the optimization engine to process your document.",
      "Review the file size comparison showing original vs. compressed size and savings percentage.",
      "Download the compressed PDF file ready for email, upload, or sharing.",
    ],

    features: [
      "Three-tier compression selector (low, medium, high) for precise size-quality control",
      "Real-time file size comparison showing original size, compressed size, and percentage saved",
      "Image recompression using optimized JPEG quality settings per compression level",
      "Font subsetting to remove unused character glyphs from embedded fonts",
      "Metadata stripping to remove unnecessary PDF object data",
      "100% browser-based processing — no server uploads, no data collection",
      "Works on desktop, tablet, and mobile browsers without software installation",
    ],

    useCases: [
      "Compress large PDFs to fit within email attachment size limits (10-25 MB)",
      "Reduce file size for government, university, and job application upload portals",
      "Optimize scanned documents and photo-heavy PDFs for faster cloud storage sync",
      "Shrink presentation handouts and training materials for easy distribution",
      "Prepare compressed PDF versions of reports and proposals for stakeholder sharing",
      "Reduce PDF size for faster loading on websites and document management systems",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How PDF Compression Works</h3>
          <p>
            PDF compression reduces file size through multiple optimization techniques. Embedded images — often the largest component of a PDF — are recompressed using lossy JPEG compression at quality levels matched to your selected mode. Fonts are subsetted to include only the characters actually used in the document, removing unused glyph data. Redundant PDF objects, duplicate resources, and unnecessary metadata (like editing history and thumbnail previews) are stripped. The result is a smaller PDF that retains text selectability, hyperlinks, and visual layout.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Compression Level</h3>
          <p>
            Low compression preserves maximum image quality and is ideal for documents with detailed charts, diagrams, or photographs that need to remain sharp. Medium compression provides the best balance between file size and quality for most business documents, reports, and forms. High compression delivers the smallest output and works well for text-heavy documents, archival copies, or situations where strict file size limits apply. For scanned PDFs, even low compression often achieves 40-60% size reduction because scan images contain significant compressible data.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Security</h3>
          <p>
            Unlike cloud-based PDF compressors that upload your files to remote servers, this tool processes everything locally in your browser using client-side JavaScript. Your PDF data never leaves your device, making it safe for confidential business documents, legal files, financial statements, and personal records.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Start with medium compression for most documents — it typically reduces file size by 50-70% with minimal quality loss. Only switch to high if you need to meet a strict size limit, and use low for documents with important visual details like architectural plans or medical images.",

    faqs: [
      {
        question: "How much can this PDF compressor reduce file size?",
        answer:
          "File size reduction depends on content type and compression level. Image-heavy PDFs (scans, photos, presentations) typically compress by 60-90%. Text-heavy PDFs with few images may compress by 20-40%. The tool displays exact before/after size and percentage saved after compression.",
      },
      {
        question: "Can I compress a PDF to a specific file size like 1 MB or 200 KB?",
        answer:
          "This tool uses level-based compression (low, medium, high) rather than target-size input. Start with high compression for the smallest output. If the result is still too large, consider splitting the PDF into sections using our PDF Splitter tool and compressing each section individually.",
      },
      {
        question: "Does PDF compression affect text quality and readability?",
        answer:
          "Text remains fully selectable and searchable at all compression levels because compression primarily targets embedded images and redundant data. Low and medium modes preserve excellent visual quality. High mode may reduce image clarity on photo-heavy or scanned pages, but text elements remain sharp.",
      },
      {
        question: "Is this online PDF compressor free to use without limits?",
        answer:
          "Yes, the PDF compressor is completely free with no file size limits, no watermarks, and no account registration required. You can compress as many PDFs as needed directly in your browser.",
      },
      {
        question: "Is my PDF data safe when using this compressor?",
        answer:
          "Yes. All compression processing happens locally in your browser using client-side JavaScript. Your PDF is never uploaded to any server, making it safe for confidential, legal, financial, and personal documents.",
      },
      {
        question: "Can I compress scanned PDF documents?",
        answer:
          "Yes, scanned PDFs often see the best compression results because they contain large raster images. Even low compression can reduce scanned PDFs by 40-60%, while high compression may achieve 80-90% reduction depending on scan resolution and color depth.",
      },
      {
        question: "Why does my PDF file size barely change after compression?",
        answer:
          "The file may already be optimized, or it may be a text-only PDF with minimal compressible data. Try a higher compression level, or use our PDF Splitter to extract only the pages you need, which effectively reduces the working file size.",
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
