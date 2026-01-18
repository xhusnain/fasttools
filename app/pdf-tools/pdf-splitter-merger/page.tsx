import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFToolsAdvanced = dynamic(
  () => import("@/components/pdf/pdf-tools-advanced").then(mod => mod.PDFToolsAdvanced),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PDF Splitter & Merger",
  description: "Split PDFs into separate pages or merge multiple PDFs into one document. Fast, secure, browser-based processing with page range control.",
  metaTitle: "PDF Splitter & Merger - Split or Merge PDFs Free",
  metaDescription: "Free online PDF splitter and merger tool. Split PDF files into separate pages, extract page ranges, or merge multiple PDFs into one document. 100% secure, browser-based processing.",
  path: "/pdf-tools/pdf-splitter-merger",

  header: {
    title: "PDF Splitter & Merger - Split & Merge PDF Files Online",
    description: "Split large PDFs into separate pages, extract specific page ranges, or merge multiple PDFs into one document. All processing happens locally in your browser for maximum privacy and security.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Splitter & Merger", href: "/ pdf-tools/pdf-splitter-merger" },
  ],

  content: {
    overview: "Our advanced PDF splitter and merger provides complete control over your PDF documents. Split large PDFs by extracting specific pages, page ranges, or dividing into equal parts. Merge unlimited PDFs into one comprehensive document while preserving formatting, bookmarks, and document structure. Both operations happen locally in your browser—your files never leave your device, ensuring complete privacy for sensitive documents. Perfect for organizing document collections, creating custom packages, extracting chapters from ebooks, combining invoices, or managing any PDF workflow that requires document manipulation.",

    howToSteps: [
      "Upload your PDF(s) by clicking the upload area or dragging and dropping (supports multiple files for merging).",
      "For splitting: Select pages to extract (specific pages, page ranges, or split mode). For merging: Arrange PDFs in desired order.",
      "The tool processes your PDFs locally in your browser, maintaining document quality and structure.",
      "Download your split pages or merged document instantly—all processing happens on your device for complete privacy."
    ],

    features: [
      "Flexible Splitting: Extract specific pages, define page ranges, split into equal parts, or extract odd/even pages",
      "Unlimited Merging: Combine unlimited PDFs into one file without file count restrictions",
      "Page Range Control: Precisely define which pages to extract (e.g., pages 1-10, 20-30, 45)",
      "Format Preservation: Maintains original quality, fonts, images, and document structure",
      "Bookmarks Retained: Preserves PDF bookmarks and table of contents when merging",
      "Complete Privacy: All processing in browser—files never uploaded to servers",
      "Large File Support: Handle PDFs up to 2GB without file size restrictions",
      "Batch Operations: Split multiple PDFs or merge many documents efficiently",
      "Unlimited Free Usage: No daily limits, no watermarks, no account required",
      "Fast Processing: Instant results powered by WebAssembly technology",
      "Cross-Platform: Works on Windows, Mac, Linux, iPhone, Android—any device with a browser",
      "No Installation: Browser-based tool works immediately without downloads",
      "Drag and Drop: Intuitive interface for arranging pages and documents",
      "Preview Mode: See page thumbnails before processing",
      "Custom Organization: Reorder pages and documents before splitting or merging",
      "Offline Capability: Core functions work without internet once loaded"
    ],

    useCases: [
      "Document Organization: Split large reports into chapters or merge related documents into comprehensive packages for distribution",
      "Contract Management: Extract signature pages, split multi-party agreements, or merge contract addendums with original documents",
      "Academic Materials: Split textbooks into individual chapters for students or merge lecture notes into semester compilations",
      "Invoice Processing: Combine monthly invoices into quarterly packages or extract specific invoices from collections",
      "Ebook Management: Split ebooks by chapters for easier reading or merge book series into single files",
      "Legal Document Preparation: Organize case files by extracting relevant pages or combining exhibits with pleadings",
      "Business Presentations: Extract key slides from large presentations or merge multiple departmental reports into exec summaries",
      "Real Estate Documentation: Combine property documents, split inspection reports, or organize closing packages",
      "Medical Records: Split patient records by visit or merge medical history documents for comprehensive files",
      "Archive Management: Organize scanned documents by splitting bulk scans or merging related historical files"
    ],

    aboutTool: "Our PDF splitter and merger uses advanced PDF manipulation algorithms built on PDF.js and WebAssembly for native-speed performance entirely in your browser. The splitter intelligently extracts pages while preserving internal PDF structure including fonts, images, vector graphics, and embedded resources. Page extraction maintains original quality without recompression or quality loss. The merger combines PDFs using stream concatenation, preserving all document properties, bookmarks, annotations, form fields, and metadata from source files. It handles complex PDF structures including encrypted PDFs (after unlocking), forms with JavaScript, and documents with embedded files. All processing happens client-side using your device's processing power, ensuring complete privacy and eliminating server upload delays common with cloud-based tools.",

    proTip: "For best results: When splitting, use page ranges instead of individual page selections to speed up processing (e.g., '1-50' instead of '1,2,3...'). When merging, arrange PDFs in final order before processing to avoid re-merging. To split a PDF into equal parts, divide total pages by desired sections. For large PDFs (500+ pages), split into smaller sections first for easier management. Always keep original files before processing in case you need different page arrangements.",

    faqs: [
      {
        question: "How do I split a PDF into individual pages?",
        answer: "Use our PDF splitter in 'Split all pages' mode to extract every page as a separate PDF file. Upload your PDF, select the split mode, and click process. Each page becomes an individual PDF that you can download separately or as a ZIP archive. Perfect for distributing single-page documents, creating individual invoices from batches, or extracting specific pages for editing. The tool preserves original quality and formatting for each extracted page."
      },
      {
        question: "Can I extract specific page ranges from a PDF?",
        answer: "Yes, our splitter offers precise page range control. Enter page numbers like '1-10' to extract pages 1 through 10, '5,10,15' for specific pages, or combinations like '1-5,10,20-25' for complex extractions. Perfect for extracting chapters from ebooks, specific sections from reports, or signature pages from contracts. The tool validates page numbers and shows preview thumbnails to ensure you're extracting the correct pages."
      },
      {
        question: "How many PDFs can I merge into one file?",
        answer: "There's no limit to the number of PDFs you can merge. Our merger handles unlimited files, though practical browser memory limitations apply (typically 50-100 documents comfortably). For very large merging operations (100+ files), consider merging in batches then combining the results. The merger preserves all document properties including bookmarks, annotations, and metadata from each source PDF. Perfect for combining invoices, creating document packages, or organizing comprehensive reports."
      },
      {
        question: "Will merging PDFs preserve bookmarks and table of contents?",
        answer: "Yes, our merger intelligently preserves bookmarks, table of contents, and document structure from all source PDFs. Bookmarks are maintained with correct page references in the merged document. If multiple PDFs have bookmarks, they're combined into a single bookmark tree organized by source document order. Annotations, form fields, hyperlinks, and other interactive elements are also preserved, ensuring the merged PDF maintains full functionality from all source documents."
      },
      {
        question: "Is splitting and merging PDFs secure?",
        answer: "Completely secure. All splitting and merging happens locally in your browser using WebAssembly—your files never leave your device, never uploaded to servers, and never stored anywhere. This client-side processing ensures complete privacy for confidential business documents, legal contracts, financial records, medical files, and personal information. No data transmission, no server access, no privacy concerns. Safe for processing sensitive documents requiring GDPR, HIPAA, or other privacy compliance."
      },
      {
        question: "Can I rearrange pages when merging PDFs?",
        answer: "Yes, our merger lets you arrange PDFs in any order before merging. Simply drag and drop documents in the file list to reorder them. You can also remove unwanted PDFs before merging. The final merged document will reflect your chosen arrangement. This feature is essential for creating properly organized document packages, chronological file compilations, or any scenario where document order matters. Preview thumbnails help you confirm the correct arrangement before processing."
      },
      {
        question: "What's the difference between extracting pages and splitting a PDF?",
        answer: "Extracting pages creates individual PDF files for specific pages you select (e.g., pages 5, 10, 15 become three separate PDFs). Splitting divides a PDF into sections automatically (e.g., every 10 pages, odd/even pages, or all pages individually). Extraction gives precise control for specific pages; splitting is faster for systematic divisions. Both preserve original quality and formatting. Choose extraction for selective pages, splitting for systematic organization."
      },
      {
        question: "Can I split password-protected PDFs?",
        answer: "No, encrypted or password-protected PDFs must be unlocked before splitting. Use our PDF Unlocker tool first to remove password protection, then split the unlocked PDF. This security measure ensures only authorized users can manipulate protected documents. If you have the correct password, unlock the PDF, split it as needed, then optionally re-encrypt sections using PDF editing software if security is required for specific pages."
      },
      {
        question: "Will splitting or merging reduce PDF quality?",
        answer: "No, both operations preserve original quality. Splitting extracts pages as-is without recompression, maintaining identical quality to the source PDF. Merging combines PDFs using stream concatenation, preserving all content, fonts, images, and resources at original quality. No re-encoding or quality loss occurs during either operation. Text remains sharp, images stay at original resolution, and vector graphics maintain perfect quality. The resulting PDFs are suitable for professional use, printing, and official documents."
      },
      {
        question: "How do I create a PDF by merging different file types (Word, images, etc.)?",
        answer: "Our merger only combines PDF files. To merge different file types, first convert them to PDF using our other tools: use Word to PDF converter for documents, Image to PDF converter for photos, or similar converters for other formats. Once everything is in PDF format, merge them using our PDF Merger. This two-step process ensures compatibility and preserves formatting across all document types. Perfect for creating comprehensive packages from mixed source materials."
      }
    ],

    relatedTools: [
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Sign", href: "/pdf-tools/pdf-sign" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function PDFSplitterMergerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToolsAdvanced />)} />
}
