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
    "Convert PDF to editable Word DOCX files or convert Word documents to PDF online for free. Preserves text formatting, tables, images, and document structure with bidirectional conversion.",
  metaTitle: "PDF to Word Converter — Convert PDF ↔ DOCX Free",
  metaDescription:
    "Free bidirectional PDF to Word converter. Convert PDF to editable DOCX or Word to PDF preserving text formatting, tables, images, and layout. Compatible with Microsoft Word, Google Docs, and LibreOffice. 100% client-side.",
  path: "/pdf-tools/pdf-word-converter",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online bidirectional PDF and Word converter. Converts PDF to editable DOCX preserving formatting, tables, and images, and converts Word documents to PDF.",
    alternateName: [
      "PDF to DOCX Converter",
      "DOCX to PDF Converter",
      "PDF to Word Online",
      "Word to PDF Online",
      "Convert PDF to Word",
      "Convert Word to PDF",
      "PDF to MS Word",
      "Editable PDF Converter",
      "PDF Editor",
      "Make PDF Editable",
      "PDF to Google Docs",
      "ilovepdf PDF to Word Alternative",
      "Smallpdf PDF to Word Alternative",
      "Free Word to PDF",
      "PDF DOCX Converter",
    ],
    featureList: [
      "PDF → editable DOCX conversion",
      "Word DOCX → PDF conversion",
      "Preserves text formatting (bold, italic, fonts, sizes, colors)",
      "Tables retained with cell borders",
      "Images embedded in correct positions",
      "Headers, footers, page numbers preserved",
      "Multi-page document support",
      "Compatible with Microsoft Word, Google Docs, LibreOffice, Apple Pages",
      "OCR fallback for scanned PDFs (image-based)",
      "Batch convert multiple files",
      "Output retains hyperlinks where possible",
      "100% client-side — your document never uploaded to any server",
      "Free, no signup, no watermark",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "9820",
  },

  header: {
    title: "PDF to Word & Word to PDF Converter",
    description:
      "Convert PDF documents to editable Word DOCX files or transform Word documents into PDF format online for free. Preserves text formatting, tables, images, headers, and layout structure — compatible with Microsoft Word, Google Docs, and LibreOffice.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Word Converter", href: "/pdf-tools/pdf-word-converter" },
  ],

  content: {
    definition:
      "A PDF to Word Converter is a free online tool that transforms PDF documents into editable Microsoft Word (DOCX) files while preserving text formatting, tables, images, headers, and page layout — and also supports the reverse conversion from Word DOCX to PDF format.",
    quickAnswer:
      "Upload a PDF to convert it to an editable Word DOCX file, or upload a Word document to convert it to PDF. The tool preserves text formatting, tables, embedded images, headers, footers, and layout structure. Download the result as a .docx or .pdf file compatible with Microsoft Word, Google Docs, and LibreOffice.",
    keyTakeaways: [
      "Converts PDF to fully editable DOCX format preserving text styles, fonts, and paragraph formatting",
      "Preserves tables with cell structure, images with positioning, and headers/footers",
      "Bidirectional conversion: PDF to Word and Word to PDF in a single tool",
      "Output files compatible with Microsoft Word, Google Docs, LibreOffice Writer, and WPS Office",
      "All document processing happens locally in your browser — files are never uploaded to servers",
    ],
    overview:
      "This free online PDF to Word converter makes it easy to transform locked PDF content into editable Word documents you can modify, reformat, and repurpose. Whether you need to edit a PDF report, update a PDF contract, extract text from a scanned document, or simply convert a Word file to PDF for universal sharing, this bidirectional tool handles both directions. The PDF-to-DOCX mode extracts text, tables, images, and formatting into a fully editable Word file compatible with Microsoft Word 2016+, Google Docs, LibreOffice Writer, and other word processors. The Word-to-PDF mode converts your DOCX documents into universally readable PDF files with consistent formatting across all devices and platforms. All processing runs entirely in your browser for maximum privacy and speed.",

    howToSteps: [
      "Select your conversion direction: PDF to Word or Word to PDF.",
      "Upload your PDF file (for PDF-to-Word) or Word DOCX file (for Word-to-PDF).",
      "Click convert and wait for the processing engine to extract and transform your document content.",
      "Preview the conversion result and verify formatting accuracy.",
      "Download the converted file — .docx for PDF-to-Word or .pdf for Word-to-PDF.",
    ],

    features: [
      "Bidirectional conversion: PDF to DOCX and DOCX to PDF in one tool",
      "Text formatting preservation including fonts, bold, italic, underline, and colors",
      "Table structure retention with cell borders, spanning, and alignment",
      "Embedded image extraction and positioning in converted output",
      "Header, footer, and page number preservation during conversion",
      "Output compatible with Microsoft Word, Google Docs, LibreOffice, and WPS Office",
      "100% browser-based processing — no server uploads, no account required",
    ],

    useCases: [
      "Convert PDF contracts and agreements to editable Word documents for revision and redlining",
      "Transform PDF reports and whitepapers into DOCX for content repurposing and editing",
      "Convert Word proposals, resumes, and cover letters to PDF for professional sharing",
      "Extract editable text from PDF forms and government documents for data entry workflows",
      "Create PDF versions of Word meeting notes and memos for archival and distribution",
      "Convert academic papers and research PDFs to Word for citation editing and annotation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How PDF to Word Conversion Works</h3>
          <p>
            PDF to Word conversion works by parsing the PDF document structure to extract text content, font information, paragraph formatting, table layouts, and embedded images. The converter then reconstructs this content into the DOCX (Office Open XML) format, mapping PDF text styles to Word paragraph and character styles. Simple to moderately complex layouts — including multi-column text, tables, bulleted lists, and inline images — typically convert with high fidelity. Highly complex layouts with layered graphics, custom forms, or unusual font embedding may require minor manual cleanup after conversion.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Word to PDF Conversion Quality</h3>
          <p>
            Word to PDF conversion renders your DOCX document into PDF format with consistent formatting that looks the same on every device and platform. This mode is ideal for finalizing documents before sharing — converting resumes, proposals, invoices, and reports into the universal PDF format ensures recipients see your content exactly as intended, regardless of their operating system or installed fonts.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">File Compatibility and Output Quality</h3>
          <p>
            Converted DOCX files are compatible with Microsoft Word 2016 and later, Google Docs, LibreOffice Writer 6+, Apple Pages, and WPS Office. For best results with complex documents, open the converted file in Microsoft Word or Google Docs first to verify table alignment, image positions, and page breaks. The browser-based conversion engine handles the vast majority of business document formats accurately.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After converting PDF to Word, always check tables, headers, and page breaks in your word processor before making edits. For Word-to-PDF conversion, ensure all fonts are standard system fonts for the most consistent PDF output across devices.",

    faqs: [
      {
        question: "How do I convert a PDF to an editable Word document online for free?",
        answer:
          "Select PDF to Word mode, upload your PDF file, and click convert. The tool extracts text, tables, images, and formatting into an editable DOCX file. Download the result and open it in Microsoft Word, Google Docs, or any compatible word processor for editing.",
      },
      {
        question: "Does the PDF to Word converter preserve tables and images?",
        answer:
          "Yes. The converter preserves table structure including cell borders and alignment, embedded images with positioning, text formatting (bold, italic, fonts, colors), headers, footers, and bulleted/numbered lists. Complex layouts with layered graphics may need minor manual adjustment.",
      },
      {
        question: "Can I convert a Word DOCX file to PDF with this tool?",
        answer:
          "Yes. Switch to Word to PDF mode and upload your DOCX file. The tool renders your Word document into a PDF with consistent formatting, preserving fonts, images, tables, and page layout. Download the PDF for sharing, printing, or archiving.",
      },
      {
        question: "Is the converted Word file compatible with Google Docs?",
        answer:
          "Yes. The output DOCX file uses the Office Open XML standard and is fully compatible with Google Docs, Microsoft Word 2016+, LibreOffice Writer, Apple Pages, and WPS Office.",
      },
      {
        question: "Is this PDF to Word converter completely free?",
        answer:
          "Yes. The converter is 100% free with no file size limits, no watermarks on output, no page count restrictions, and no account registration required. Convert as many documents as you need.",
      },
      {
        question: "Is my document data private when converting PDF to Word?",
        answer:
          "Yes. All conversion processing happens locally in your browser using client-side technology. Your PDF and Word files are never uploaded to any external server, making the tool safe for confidential contracts, financial documents, and personal files.",
      },
      {
        question: "Why does my converted Word document look different from the original PDF?",
        answer:
          "PDF and DOCX are fundamentally different formats. PDFs use fixed page layouts while Word uses flow-based formatting. Simple layouts convert accurately, but complex designs with overlapping elements, custom forms, or unusual fonts may shift slightly. Review tables, images, and page breaks after conversion and adjust as needed in your word processor.",
      },
    ],

    relatedTools: [
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFWordConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFWordConverter />)} />
}
