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
    "Compress PDF files online for free with adjustable low, medium, and high compression levels. Reduce file size by rendering pages into optimized image-based PDF output.",
  metaTitle: "PDF Compressor — Reduce PDF File Size to KB or MB",
  metaDescription:
    "Free PDF compressor. Reduce PDF file size with low, medium, and high compression modes for email, upload portals, forms, and storage limits. Browser-based, no signup.",
  path: "/pdf-tools/pdf-compressor",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF compressor with low, medium, and high compression modes. Reduces PDF file size by rendering pages into optimized image-based PDF output.",
    alternateName: [
      "Reduce PDF Size",
      "Compress PDF Online",
      "Shrink PDF",
      "PDF Size Reducer",
      "Compress PDF to Smaller Size",
      "PDF Optimizer",
      "PDF File Size Reducer",
      "Make PDF Smaller",
      "ilovepdf Compress Alternative",
      "Smallpdf Compress Alternative",
      "PDF24 Compress Alternative",
      "Adobe PDF Compress Alternative",
      "PDF for Email Compressor",
      "Scanned PDF Compressor",
      "Image PDF Compressor",
    ],
    featureList: [
      "Three compression levels: low (best quality), medium, high (smallest)",
      "PDF size reduction for image-heavy and scanned documents",
      "Page rendering with JPEG re-encoding",
      "Low, medium, and high quality presets",
      "Original vs compressed size comparison",
      "Download compressed PDF output",
      "Works well for scanned pages, photos, forms, and visual PDFs",
      "100% client-side — your PDF never uploaded to any server",
      "Free, no signup, no watermark",
    ],
    softwareRequirements: "Modern web browser",
  },

    header: {
    title: "PDF Compressor Online",
    description:
      "Reduce PDF file size with adjustable compression levels. Best for scanned PDFs, photo PDFs, forms, and visual documents that need to fit email, upload, or storage limits.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
  ],

  content: {
    definition:
      "A PDF Compressor is a free online tool that reduces PDF file size by re-encoding pages at lower quality or resolution so the document is easier to upload, email, or store.",
    quickAnswer:
      "Upload a PDF and select a compression level: low for better quality, medium for balance, or high for the smallest file. The tool renders pages into optimized image-based PDF output, then shows the before/after size so you can download the smaller file.",
    keyTakeaways: [
      "Reduces PDF file size depending on page content and compression level",
      "Low, medium, and high modes control the quality-versus-size tradeoff",
      "Works best on scanned PDFs, image-heavy documents, forms, and photo PDFs",
      "Compressed output is image-based, so selectable/searchable text may not be preserved",
      "All PDF compression runs locally in your browser session",
    ],
    overview:
      "This free online PDF compressor helps reduce PDF file size when documents are too large for email attachment limits, upload portals, application forms, or cloud storage quotas. The tool renders each PDF page and rebuilds a smaller image-based PDF using the selected compression level. Use low compression when readability and visual detail matter, medium compression for everyday sharing, or high compression when the strictest file-size limit matters more than image sharpness.",

    howToSteps: [
      "Upload your PDF file by dragging and dropping or clicking the upload area.",
      "Select your compression level: low (best quality), medium (balanced), or high (smallest size).",
      "Click compress and wait while the browser renders each page and rebuilds the smaller PDF.",
      "Review the file size comparison showing original vs. compressed size and savings percentage.",
      "Download the compressed PDF file ready for email, upload, or sharing.",
    ],

    features: [
      "Three-tier compression selector (low, medium, high) for precise size-quality control",
      "Real-time file size comparison showing original size, compressed size, and percentage saved",
      "Page rendering with JPEG quality settings matched to each compression level",
      "Image-based PDF rebuilding for strong reduction on scanned and photo-heavy files",
      "Clear warning that text selectability may not survive aggressive compression",
      "100% browser-based processing — no server uploads, no data collection",
      "Works on desktop, tablet, and mobile browsers without software installation",
    ],

    useCases: [
      "Compress large PDFs to fit within email attachment size limits",
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
            This compressor reduces file size by rendering each PDF page and saving it into a new PDF with JPEG image compression. That approach is effective for scanned documents, photos, forms, and visual PDFs because those files are usually dominated by page images. It is different from a structural PDF optimizer that subsets fonts or preserves every selectable text layer.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Compression Level</h3>
          <p>
            Low compression preserves more visual detail and is best for pages with small text, charts, diagrams, or signatures. Medium compression is the safest first choice for most scanned documents and forms. High compression creates the smallest output, but image clarity can drop, especially on tiny text or detailed graphics. If the file must remain searchable or selectable, keep an original copy before compression.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Selectable Text and Searchability</h3>
          <p>
            Because this tool rebuilds pages as compressed images, the output may not preserve selectable text, hyperlinks, bookmarks, form fields, or accessibility tags. Use it when smaller file size matters most. For legal, archival, accessibility, or searchable document workflows, keep the original PDF and verify the compressed copy before submitting it.
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
      "Start with medium compression. Use low for small text or detailed diagrams, and use high only when the upload limit is strict and visual quality can be reduced.",

    faqs: [
      {
        question: "How much can this PDF compressor reduce file size?",
        answer:
          "File size reduction depends on the original PDF and compression level. Scanned PDFs, photos, and image-heavy documents usually shrink the most. Text-only PDFs may not shrink much and can even grow if they are already optimized.",
      },
      {
        question: "Can I compress a PDF to a specific file size like 1 MB or 200 KB?",
        answer:
          "This tool uses level-based compression instead of exact target-size input. Choose high compression for the smallest output. If the result is still too large, split the PDF into smaller sections and compress each section separately.",
      },
      {
        question: "Does PDF compression affect text quality and readability?",
        answer:
          "The visible text remains readable if the compression level is appropriate, but the compressed PDF may become image-based instead of selectable/searchable text. Use low or medium compression for documents with small text.",
      },
      {
        question: "Is this online PDF compressor free to use without limits?",
        answer:
          "Yes, the PDF compressor is free with no watermarks and no account registration required. The current upload limit is 2GB per PDF, and very large files may depend on your browser memory and device performance.",
      },
      {
        question: "Is my PDF data safe when using this compressor?",
        answer:
          "Yes. All compression processing happens locally in your browser using client-side JavaScript. Your PDF is never uploaded to any server, making it safe for confidential, legal, financial, and personal documents.",
      },
      {
        question: "Can I compress scanned PDF documents?",
        answer:
          "Yes. Scanned PDFs often see the best compression results because they contain large page images. Use low or medium compression if the scan includes small text, signatures, stamps, or fine details.",
      },
      {
        question: "Will the compressed PDF stay searchable?",
        answer:
          "Not always. This compressor can create image-based PDF pages, which means selectable text and searchability may not be preserved. Keep your original PDF if search, copy-paste, links, forms, or accessibility tags matter.",
      },
      {
        question: "Why does my PDF file size barely change after compression?",
        answer:
          "The file may already be optimized, text-only, or made from low-resolution images. Try a higher compression level, or use PDF Splitter to keep only the pages you need.",
      },
    ],

    relatedTools: [
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFCompressor />)} />
}
