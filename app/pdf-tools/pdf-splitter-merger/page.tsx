import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFToolsAdvanced = dynamic(
  () => import("@/components/pdf/pdf-tools-advanced").then((mod) => mod.PDFToolsAdvanced),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PDF Splitter & Merger",
  description:
    "Split PDF files into individual pages or custom page ranges, and merge multiple PDFs into a single document online for free. Drag-and-drop reordering, page extraction, and instant download.",
  metaTitle: "PDF Splitter & Merger — Split and Merge PDF Files Online Free (2026)",
  metaDescription:
    "Split PDF into pages or page ranges and merge multiple PDFs into one document online free. Drag-and-drop reordering, extract specific pages, and download instantly. No software installation needed.",
  path: "/pdf-tools/pdf-splitter-merger",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF splitter and merger tool. Split PDFs by individual pages, page ranges, or specific page selection. Merge multiple PDF files with drag-and-drop reordering. Browser-based processing with instant download.",
    featureList: [
      "Split PDF into individual pages",
      "Extract custom page ranges",
      "Select specific pages to extract",
      "Merge multiple PDFs into one document",
      "Drag-and-drop file reordering",
      "Client-side browser processing",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Splitter & Merger",
    description:
      "Split PDF files into individual pages or extract custom page ranges, and merge multiple PDF documents into a single file with drag-and-drop reordering. Free browser-based tool with no software installation or account required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
  ],

  content: {
    definition:
      "A PDF Splitter & Merger is a free online tool that splits PDF files into individual pages, custom page ranges, or selected page sets — and merges multiple PDF documents into a single combined file with customizable page order.",
    quickAnswer:
      "Upload PDFs to split them into individual pages or extract specific page ranges (e.g., pages 1-5, 8, 12-15). Or upload multiple PDF files and merge them into a single document with drag-and-drop reordering. Download the result instantly. All processing happens locally in your browser.",
    keyTakeaways: [
      "Split PDFs into individual pages, page ranges (e.g., 1-5), or specific pages (e.g., 2, 4, 7)",
      "Merge multiple PDF files into a single combined document with custom page order",
      "Drag-and-drop interface for reordering files before merging",
      "Extract individual pages as separate PDF files for targeted sharing",
      "100% browser-based processing — files are never uploaded to external servers",
    ],
    overview:
      "This free online PDF Splitter and Merger handles the two most common PDF page management tasks: splitting one document into smaller parts and combining multiple documents into one. In split mode, you can export every page as a separate PDF, extract a continuous page range for section-level splitting, or pick specific pages by number for surgical extraction. In merge mode, upload multiple PDF files from different sources and arrange them in your desired order using drag-and-drop controls before generating the combined output. Whether you need to extract a chapter from a book PDF, pull specific pages from a report, combine multiple scanned documents, or assemble a final document package from various source files, this tool handles it in seconds with no software installation, no account creation, and complete file privacy.",

    howToSteps: [
      "Select your operation mode: Split PDF or Merge PDFs.",
      "Upload the PDF file(s) for your selected operation.",
      "For splitting: choose All Pages (individual PDFs), Range (e.g., pages 3-8), or Extract Pages (e.g., 1, 4, 7). For merging: drag and drop files to set your preferred order.",
      "Click process and wait for the operation to complete.",
      "Download the split page files or merged PDF document.",
    ],

    features: [
      "Three split modes: all pages (one PDF per page), page range extraction, and specific page selection",
      "Multi-file PDF merge with unlimited number of input documents",
      "Drag-and-drop file reordering interface for precise merge control",
      "Page count display for each uploaded document to assist with range selection",
      "Comma-separated page list input for extracting non-consecutive pages (e.g., 1, 3, 7, 12)",
      "Range input supporting start-end notation (e.g., 5-15) for chapter-level extraction",
      "100% browser-based processing — no server uploads, no account registration required",
    ],

    useCases: [
      "Extract specific chapters or sections from book-length PDF documents",
      "Merge multiple scanned documents, receipts, or invoices into a single organized PDF",
      "Split a large report into department-specific sections for targeted distribution",
      "Combine resume, cover letter, and portfolio PDFs into a single application package",
      "Extract signature pages from contracts for separate filing and record-keeping",
      "Assemble final project deliverables by merging PDFs from multiple team members",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How PDF Splitting Works</h3>
          <p>
            PDF splitting extracts pages from the original document while preserving all page content including text, images, annotations, and formatting. The All Pages mode creates a separate PDF for each page in the document — useful for creating individual page files for review or archival. Range mode extracts a continuous section (e.g., pages 5-15) as a single PDF — perfect for pulling chapters, sections, or appendices. Extract Pages mode lets you specify non-consecutive pages (e.g., 1, 3, 7, 12) to create a custom compilation of specific pages from the source document.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How PDF Merging Works</h3>
          <p>
            PDF merging combines multiple PDF files into a single document by appending pages in your specified order. The drag-and-drop interface lets you visually arrange files before processing, ensuring the final output follows your desired structure. This is essential for assembling document packages, combining scanned pages, or creating unified reports from multiple source files. Each merged document retains its original page formatting, images, and text content.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">File Privacy and Processing</h3>
          <p>
            All split and merge operations run entirely in your browser using client-side JavaScript. Your PDF files are never transmitted to any server, ensuring complete privacy for confidential business documents, legal files, financial records, and personal documents. Processing speed depends on file size and page count, but most operations complete within seconds.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For large document assembly projects, split each source PDF into the exact sections you need first, then merge only those sections in your desired order. This gives you precise control over the final document structure and page sequence.",

    faqs: [
      {
        question: "How do I split a PDF into individual pages online for free?",
        answer:
          "Upload your PDF, select Split mode, choose 'All Pages,' and click process. The tool creates a separate PDF file for each page in your document. Download individual page files as needed. No account or software installation required.",
      },
      {
        question: "Can I extract a specific page range from a PDF (e.g., pages 5-12)?",
        answer:
          "Yes. In Split mode, select 'Range' and enter your start and end page numbers. The tool extracts that continuous section as a single PDF file. This is perfect for pulling chapters, sections, or appendices from larger documents.",
      },
      {
        question: "How do I merge multiple PDFs into one document?",
        answer:
          "Switch to Merge mode, upload all the PDF files you want to combine, arrange them in your desired order using drag-and-drop, and click process. The tool generates a single merged PDF with all pages from your source files in the specified order.",
      },
      {
        question: "Can I extract specific non-consecutive pages like pages 1, 4, and 9?",
        answer:
          "Yes. Use the Extract Pages mode in Split and enter a comma-separated list of page numbers (e.g., 1, 4, 9). The tool creates a new PDF containing only those specific pages, preserving their original content and formatting.",
      },
      {
        question: "Is this PDF splitter and merger completely free?",
        answer:
          "Yes. The tool is 100% free with no file size limits, no watermarks, no page count restrictions, and no account registration. Split and merge as many PDFs as you need directly in your browser.",
      },
      {
        question: "Are my PDF files safe when using this online tool?",
        answer:
          "Yes. All split and merge processing happens locally in your browser. Your PDF files are never uploaded to any server, making it safe for confidential contracts, legal documents, financial records, and personal files.",
      },
      {
        question: "Can I split or merge password-protected PDF files?",
        answer:
          "Password-protected PDFs must be unlocked before splitting or merging. Use our free PDF Unlocker tool to remove password protection first, then upload the unlocked file for split or merge operations.",
      },
    ],

    relatedTools: [
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFSplitterMergerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToolsAdvanced />)} />
}
