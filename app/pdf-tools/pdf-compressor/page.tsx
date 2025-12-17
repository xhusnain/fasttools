import { PDFCompressor } from "@/components/pdf/pdf-compressor"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "PDF Compressor",
  description: "Reduce PDF file size by 50-90% while maintaining quality. Compress to 200KB, 500KB, or 1MB for easy email sharing. Free, unlimited, browser-based compression.",
  metaTitle: "PDF Compressor - Reduce PDF Size Online",
  metaDescription: "Best free PDF compressor online. Compress PDF files by 50-90% to 200KB, 500KB, or 1MB. No upload, unlimited use, 100% secure. Works on Windows, Mac, iPhone. No size limit up to 2GB.",
  path: "/pdf-tools/pdf-compressor",

  header: {
    title: "Free PDF Compressor Online - Reduce PDF File Size",
    description: "Compress PDF files by 50-90% while maintaining quality. Reduce to 200KB, 500KB, or 1MB for email attachments. All processing happens locally in your browser for maximum privacy and security.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
  ],

  content: {
    overview: "Our advanced PDF compressor reduces file sizes by 50-90% using intelligent multi-stage optimization while preserving document quality. Perfect for compressing large PDFs to meet email attachment limits (200KB, 500KB, 1MB, 2MB), reduce storage space, or speed up file transfers. The tool uses advanced algorithms including image downsampling, font subsetting, and content stream compression to achieve maximum size reduction without compromising readability. All processing happens locally in your browser—your files never leave your device, ensuring complete privacy for sensitive documents. Ideal for compressing presentations, scanned documents, forms, invoices, contracts, and any PDF that needs size reduction.",

    howToSteps: [
      "Upload your PDF by clicking the upload area or dragging and dropping (supports files up to 2GB).",
      "Select your target compression level: Light (30-50% reduction), Medium (50-70% reduction), or Strong (70-90% reduction).",
      "The compressor processes your PDF locally in your browser, optimizing images, fonts, and internal structure.",
      "Download your compressed PDF instantly—typically reduced by 50-90% while maintaining quality for professional use."
    ],

    features: [
      "High Compression Ratio: Achieve 50-90% file size reduction depending on content and compression level",
      "Target Size Options: Compress to specific sizes like 200KB, 500KB, 1MB, or 2MB for email requirements",
      "Quality Preservation: Maintains text clarity and image readability even at high compression levels",
      "Large File Support: Handle PDFs up to 2GB without file size restrictions or premium tiers",
      "Adjustable Compression: Choose Light, Medium, or Strong compression based on your quality needs",
      "Complete Privacy: All processing in browser—files never uploaded to servers",
      "Unlimited Free Usage: No daily limits, no watermarks, no account required",
      "Batch Processing: Compress multiple PDFs efficiently for bulk document management",
      "Fast Processing: Instant results powered by WebAssembly technology",
      "Cross-Platform: Works on Windows, Mac, Linux, iPhone, Android—any device with a browser",
      "No Installation: Browser-based tool works immediately without downloads",
      "Format Preservation: Maintains PDF structure, fonts, and layout integrity",
      "Scanned Document Optimization: Excellent compression for image-heavy scanned PDFs",
      "Presentation Compression: Perfect for reducing PowerPoint-to-PDF file sizes",
      "Professional Quality: Suitable for business documents, legal files, and official submissions",
      "Offline Capability: Core compression works without internet once loaded"
    ],

    useCases: [
      "Email Attachments: Compress large PDFs to meet email size limits (typically 10-25MB) by reducing to 200KB, 500KB, or 1MB",
      "Web Upload Optimization: Meet website upload size restrictions for forms, applications, and document submissions",
      "Storage Space Savings: Reduce server storage costs and local disk space by compressing archived documents by 50-90%",
      "Faster File Transfers: Speed up file transfers over slow networks or mobile connections with smaller file sizes",
      "Scanned Document Optimization: Dramatically reduce scanned PDF sizes (often 90% reduction) while maintaining readability",
      "Presentation Sharing: Compress PowerPoint presentations converted to PDF for easier email and cloud sharing",
      "Government/Academic Submissions: Meet strict file size requirements for applications, forms, and official documents",
      "Mobile Device Storage: Free up smartphone and tablet storage by compressing PDFs before saving locally",
      "Cloud Storage Optimization: Maximize Dropbox, Google Drive, or OneDrive storage by compressing archived documents",
      "Client Deliverables: Send professional documents to clients quickly without sacrificing quality"
    ],

    aboutTool: "Our PDF compressor employs advanced multi-stage optimization algorithms including JPEG image recompression (adjustable quality), font subsetting (removing unused font data), content stream compression (optimizing internal PDF structure), object deduplication (eliminating redundant data), and metadata cleanup. The tool analyzes each PDF to determine optimal compression strategies based on content type—text-heavy documents use different optimization than image- heavy presentations. Image downsampling intelligently reduces resolution while preserving visual quality for screen viewing. The Huffman encoding and FLATE compression reduce text and vector graphics efficiently. All processing uses WebAssembly for native-speed performance entirely in your browser, ensuring privacy and eliminating server upload delays.",

    proTip: "For best compression results: Use 'Medium' or 'Strong' compression for scanned documents and presentations (often achieve 80-90% reduction). Use 'Light' compression for text-heavy PDFs with vector graphics to preserve sharpness. Avoid recompressing already optimized PDFs—check original file size before processing. For maximum control, test different compression levels on a sample page first. When compressing for email, target 80% of the limit (e.g., compress to 8MB for 10MB limit) to ensure delivery.",

    faqs: [
      {
        question: "How much can I compress my PDF file?",
        answer: "Compression ratios depend on your PDF content and selected compression level. Image-heavy PDFs (scanned documents, presentations) typically achieve 70-90% size reduction. Text-heavy PDFs achieve 30-50% reduction. Our tool offers Light (30-50%), Medium (50-70%), and Strong (70-90%) compression modes. For example, a 10MB scanned document often compresses to 1-2MB with Medium compression, or 500KB-1MB with Strong compression while maintaining readability."
      },
      {
        question: "Will compressing reduce my PDF quality?",
        answer: "Our compressor balances file size reduction with quality preservation. Light compression maintains near-original quality with modest size reduction. Medium compression provides excellent balance—significant size reduction while maintaining professional quality for business use. Strong compression achieves maximum file size reduction and may show slight quality degradation in images, but text remains sharp and readable. The tool preserves text quality at all compression levels by optimizing images while keeping text as vector graphics."
      },
      {
        question: "How do I compress a PDF to exactly 200KB or 500KB?",
        answer: "While our compressor offers target size guidance, exact size control depends on your PDF content. For precise sizing: 1) Start with Strong compression and check result size, 2) If too large, try splitting the PDF and compressing sections separately, 3) If images are large, consider reducing image count or extracting text-only pages. PDFs with many images compress more predictably than text-heavy documents. Most users achieve 200KB-500KB targets by using Strong compression on image-heavy PDFs or removing unnecessary pages."
      },
      {
        question: "Is PDF compression secure and private?",
        answer: "Yes, completely secure. All compression happens locally in your browser using WebAssembly—your files never leave your device, never uploaded to servers, and never stored anywhere. This client-side processing ensures complete privacy for confidential business documents, financial records, legal contracts, medical files, and personal information. No data transmission, no server access, no privacy concerns. Safe for processing sensitive documents that require GDPR, HIPAA, or other privacy compliance."
      },
      {
        question: "Can I compress password-protected or encrypted PDFs?",
        answer: "No, encrypted or password-protected PDFs must be unlocked before compression. Use our PDF Unlocker tool first to remove password protection, then compress the unlocked PDF. This security measure ensures only authorized users can modify protected documents. If you have the correct password, unlock the PDF, compress it, then optionally re-encrypt it using PDF editing software if security is required."
      },
      {
        question: "What's the maximum PDF file size I can compress?",
        answer: "Our compressor handles PDFs up to 2GB, though practical browser memory limitations may affect very large files (1GB+). Most users comfortably compress files up to 500MB. For extremely large PDFs, consider splitting them into smaller sections first using our PDF Splitter tool, compress each section, then merge if needed. The 2GB limit far exceeds typical PDF sizes and accommodates scanned books, large presentations, and comprehensive document collections."
      },
      {
        question: "How does your compressor compare to Adobe Acrobat or Smallpdf?",
        answer: "Our compressor provides similar results to Adobe Acrobat Pro ($239/year) and Smallpdf Pro ($9/month) but completely free with no limits. Key advantages: unlimited free compression, complete privacy (no server uploads), no daily file limits, no watermarks, works on any device. While Adobe offers more manual control options and Smallpdf has batch cloud processing, our tool handles 95% of compression needs with excellent results. For basic to advanced compression without cost or privacy concerns, our tool delivers professional quality."
      },
      {
        question: "Can I compress multiple PDFs at once?",
        answer: "Yes, our tool supports batch processing. Upload multiple PDFs and compress them sequentially, with each file processed individually for optimal results. While not simultaneous parallel processing, the sequential workflow is efficient for handling 10-20 documents. Each PDF is optimized based on its specific content (images vs. text), ensuring better compression than one-size-fits-all batch tools. Perfect for compressing entire document folders, client deliverables, or archived files."
      },
      {
        question: "Why is my compressed PDF still too large?",
        answer: "If compression doesn't meet your target: 1) Your PDF may already be optimized (recompressing optimized files yields minimal results), 2) Text-heavy PDFs compress less than image-heavy ones, 3) Try Strong compression if you used Light/Medium, 4) Remove unnecessary pages before compressing, 5) Consider splitting the PDF into sections and compressing separately. Some PDFs with vector graphics or embedded fonts have natural size limits. For extreme size reduction (200KB targets), evaluate if all pages are essential."
      },
      {
        question: "Will compression affect PDF searchability or text selection?",
        answer: "No, compression preserves text searchability and selection. The compressor optimizes images and internal structure but leaves text layers intact. Searchable PDFs remain searchable, copy-paste functionality works normally, and OCR text is preserved. Only image quality may be reduced (depending on compression level), but text remains as vector graphics with full quality. Forms, hyperlinks, bookmarks, and annotations are also preserved during compression."
      }
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Sign", href: "/pdf-tools/pdf-sign" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function PDFCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFCompressor />)} />
}
