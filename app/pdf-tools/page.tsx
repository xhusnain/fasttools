import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GCard } from "@/components/globalcomponents/gcard"
import { FileSignature, RefreshCw, FileStack, Unlock, Minimize2, Image } from "lucide-react"

const pdfTools = [
  {
    title: "Sign PDF",
    description: "Sign PDF documents online free. Add electronic signature to PDF, eSign contracts & agreements. Popular for HR, freelancers & legal documents.",
    icon: FileSignature,
    href: "/pdf-tools/pdf-sign",
    popular: true,
  },
  {
    title: "PDF to Word & Word to PDF",
    description: "Convert PDF to Word for editing or Word to PDF for sharing. Free bidirectional converter with format preservation.",
    icon: RefreshCw,
    href: "/pdf-tools/pdf-word-converter",
    popular: true,
  },
  {
    title: "PDF Splitter & Merger",
    description: "Split large PDFs or merge multiple PDFs into one. Fast, secure processing with page range control and batch operations.",
    icon: FileStack,
    href: "/pdf-tools/pdf-splitter-merger",
    popular: true,
  },
  {
    title: "PDF Unlocker",
    description: "Remove password protection from PDFs instantly. Unlock encrypted files to enable editing, printing, and copying.",
    icon: Unlock,
    href: "/pdf-tools/pdf-unlocker",
    popular: true,
  },
  {
    title: "PDF Compressor",
    description: "Reduce PDF file size by 50-90% while maintaining quality. Compress to 200KB, 500KB, or 1MB for easy email sharing.",
    icon: Minimize2,
    href: "/pdf-tools/pdf-compressor",
    popular: true,
  },
  {
    title: "PDF to Image Converter",
    description: "Convert PDF pages to JPG, PNG, or WebP images. High-quality extraction with bulk download support for all pages.",
    icon: Image,
    href: "/pdf-tools/pdf-to-image",
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "PDF Tools",
  description: "Free PDF tools for splitting, merging, unlocking, compressing & converting PDFs. Professional results, 100% secure, browser-based processing.",
  metaTitle: "Free PDF Tools | Split, Merge, Unlock & Compress PDFs",
  metaDescription: "Free PDF tools: split, merge, unlock, compress & convert PDFs. Professional results, 100% secure. No registration required.",
  path: "/pdf-tools",

  header: {
    title: "Free PDF Tools - Split, Merge, Unlock & Compress PDFs Online",
    description: "Split PDFs, merge documents, unlock password-protected files, compress file sizes, sign documents, and convert PDFs to images — all free, fast, and online. No signup or software needed. All processing happens locally in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
  ],

  content: {
    overview: "Our comprehensive PDF tools suite provides professional-grade document processing capabilities entirely in your browser. Split large PDFs into manageable sections, merge multiple documents into one file, remove password protection, compress files by 50-90%, add electronic signatures, and convert PDFs to high-quality images. All operations happen locally on your device for maximum privacy and security — your files never leave your browser. Perfect for businesses, freelancers, students, and anyone working with PDF documents who needs fast, secure, and free processing without expensive software subscriptions like Adobe Acrobat.",

    howToSteps: [
      "Select the specific PDF tool you need from the grid below (Splitter, Merger, Compressor, Unlocker, Signer, or Converter).",
      "Upload your PDF file by clicking the upload area or dragging and dropping your document (supports files up to 2GB).",
      "Configure any necessary settings (page ranges, compression level, signature position, or output format).",
      "Process your PDF instantly in your browser and download the result — all free with no watermarks or file limits."
    ],

    features: [
      "PDF Splitter: Extract specific pages, split by page range, or divide into multiple documents with page number control",
      "PDF Merger: Combine unlimited PDFs into one file while preserving formatting, bookmarks, and document structure",
      "PDF Compressor: Reduce file size by 50-90% to reach targets like 200KB, 500KB, or 1MB while maintaining readability",
      "PDF Unlocker: Remove password protection and encryption to enable editing, printing, and content copying",
      "PDF Signer: Add electronic signatures with drawing, typing, or uploading options for legally binding documents",
      "PDF to Image: Convert pages to JPG, PNG, or WebP with customizable resolution and bulk download capability",
      "Complete Privacy: All processing happens locally in your browser — files never uploaded to servers",
      "No File Size Limits: Process PDFs up to 2GB without restrictions or premium tiers",
      "Unlimited Free Usage: No daily limits, no account required, no hidden fees or watermarks",
      "High-Quality Output: Professional results suitable for business, legal, and official documents",
      "Cross-Platform: Works on Windows, Mac, Linux, iPhone, Android — any device with a browser",
      "No Installation Required: Browser-based tools work immediately without downloads or setup",
      "Batch Processing: Handle multiple files efficiently for bulk document management",
      "Format Preservation: Maintains document formatting, fonts, and layout integrity",
      "Fast Processing: Instant results powered by WebAssembly and modern browser technology",
      "Offline Capability: Core functions work without internet once the page is loaded"
    ],

    useCases: [
      "Business Document Management: Split contracts, merge reports, compress presentations, unlock archived files, and sign agreements for professional workflows",
      "Legal & Compliance: Process legal documents, sign contracts electronically, unlock password-protected files, and organize case files efficiently",
      "Education & Research: Split textbooks into chapters, merge assignments, compress documents for submission, and organize research papers",
      "Freelance & Remote Work: Sign client contracts, compress portfolios for email, merge invoices, and manage project documentation",
      "HR & Recruitment: Split application packets, merge candidate documents, unlock legacy files, and process employment agreements",
      "Real Estate Transactions: Sign purchase agreements, merge property documents, compress listing materials, and organize contract files",
      "Financial Services: Process financial statements, split audit reports, merge account documents, and sign authorization forms",
      "Healthcare Administration: Organize patient records, compress medical reports, merge insurance documents, and manage confidential files",
      "Government & Public Sector: Process official documents, unlock archived records, merge departmental reports, and sign authorizations",
      "Personal Document Organization: Manage tax documents, compress family records, merge scanned files, and organize personal archives"
    ],

    aboutTool: "Our PDF tools leverage modern web technologies including WebAssembly, PDF.js, and advanced compression algorithms to deliver professional results entirely in your browser. The PDF splitter uses intelligent page extraction to maintain document integrity while creating separate files. The merger preserves all document properties, bookmarks, and annotations when combining files. The compressor employs multi-stage optimization including image downsampling, font subsetting, and content stream compression to achieve significant size reduction without quality loss. The unlocker safely removes encryption while maintaining document structure. The signature tool creates legally compliant electronic signatures with cryptographic verification. All operations happen client-side using your device's processing power, ensuring complete privacy for sensitive documents. This browser-based approach eliminates upload delays, server dependencies, and privacy concerns associated with cloud-based PDF services.",

    proTip: "For best results with PDF tools: Use high-quality source PDFs when compressing (avoid re-compressing already optimized files). When splitting, plan page ranges in advance to avoid multiple operations. For merging, arrange files in desired order before uploading. When signing documents, position signatures in standard locations (bottom right for contracts). For PDF to image conversion, choose PNG for text-heavy documents and JPG for photo-heavy content. Always keep original files before processing in case you need to re-process with different settings.",

    faqs: [
      {
        question: "What are PDF tools and how do they work?",
        answer: "PDF tools are specialized utilities that manipulate, edit, convert, and manage PDF documents. Our browser-based PDF tools include splitters for dividing documents, mergers for combining files, compressors for reducing size, unlockers for removing passwords, signers for adding electronic signatures, and converters for creating images. Unlike traditional software requiring installation, our tools run entirely in your browser using WebAssembly and JavaScript, processing files locally on your device without server uploads. This ensures complete privacy, faster processing, and universal compatibility across all operating systems."
      },
      {
        question: "Are these PDF tools safe and secure for confidential documents?",
        answer: "Yes, our PDF tools are completely secure because all processing happens locally in your browser — your files never leave your device. No uploads to cloud servers, no data storage, no tracking or transmission of any kind. This client-side processing makes our tools safe for sensitive business documents, legal contracts, financial records, medical files, and personal information. The local processing also complies with privacy regulations like GDPR and HIPAA since your data stays on your device throughout the entire process."
      },
      {
        question: "How does PDF compression work and what size reduction can I expect?",
        answer: "Our PDF compressor uses advanced multi-stage optimization including image downsampling (reducing resolution while maintaining readability), font subsetting (removing unused font data), content stream compression (optimizing internal PDF structure), and removing redundant objects. Typical compression achieves 50-70% size reduction for documents with images, and 30-50% for text-heavy PDFs. Image-heavy presentations or scanned documents can reach 90% reduction. The tool offers adjustable compression levels to balance file size with quality based on your specific needs."
      },
      {
        question: "Can I split PDFs by specific page ranges or extract individual pages?",
        answer: "Yes, our PDF splitter offers flexible page extraction options. You can extract specific pages (e.g., pages 1, 5, 10), define page ranges (e.g., pages 1-10, 20-30), split into equal parts, or extract odd/even pages. The tool preserves original quality, formatting, and embedded resources. Perfect for extracting chapters from textbooks, separating sections of contracts, isolating specific pages from reports, or dividing large documents into manageable pieces for distribution or storage."
      },
      {
        question: "How many PDFs can I merge into one file?",
        answer: "There's no limit to the number of PDFs you can merge. Our PDF merger handles unlimited files, though practical browser limitations apply based on your device's available memory. Most users comfortably merge 10-50 documents. The merger preserves all document properties including bookmarks, annotations, form fields, and metadata. You can arrange files in any order before merging, and the resulting PDF maintains all original content with proper page sequencing. Perfect for combining invoices, creating comprehensive reports, or assembling document packages."
      },
      {
        question: "Will unlocking a password-protected PDF damage the file?",
        answer: "No, our PDF unlocker safely removes password protection while maintaining complete document integrity. The tool preserves all content, formatting, fonts, images, bookmarks, and metadata. It removes encryption that prevents editing, printing, or copying, allowing full access to the document. Note that you need the correct password to unlock a PDF — the tool removes protection from PDFs you have legitimate access to, not crack unknown passwords. Ideal for accessing your own archived documents or files where the password is known but inconvenient."
      },
      {
        question: "Are electronic signatures created with your tool legally binding?",
        answer: "Yes, electronic signatures created with our PDF signature tool are legally binding in most jurisdictions under laws like the U.S. ESIGN Act and EU eIDAS regulation. The tool creates compliant electronic signatures by embedding your signature image with timestamp and verification data. While these are legally valid for most business contracts, agreements, and forms, certain documents (real estate deeds, wills, court documents) may require notarized or advanced digital signatures with certificate authority verification. For standard business use, our e-signatures provide full legal compliance."
      },
      {
        question: "What image formats are supported for PDF to image conversion?",
        answer: "Our PDF to image converter supports JPG (best for photos and color documents), PNG (best for text, diagrams, and images requiring transparency), and WebP (modern format offering superior compression). You can convert single pages or entire PDFs with bulk download. Choose resolution from standard (72 DPI) to high quality (300 DPI). JPG creates smaller files ideal for web use and email. PNG maintains perfect quality for documents with text and sharp edges. WebP balances quality and file size for modern web applications."
      },
      {
        question: "How does your PDF tool compare to Adobe Acrobat?",
        answer: "Our free PDF tools provide core functionality equivalent to Adobe Acrobat Pro ($239/year) for common tasks like splitting, merging, compressing, and converting PDFs. While Acrobat offers advanced features like form creation, redaction, and OCR, our tools handle 90% of typical PDF needs without cost or installation. Key advantages: completely free unlimited usage, browser-based accessibility on any device, privacy-focused local processing, no software updates required, and instant access without downloads. For specialized professional features, Acrobat remains superior, but for everyday PDF tasks, our tools deliver excellent results at zero cost."
      },
      {
        question: "Can I use these tools on mobile devices?",
        answer: "Yes! All our PDF tools are fully optimized for mobile devices including iPhone, Android phones, and tablets. The responsive design works seamlessly with touch controls and mobile browsers (Safari, Chrome, Firefox). You can upload PDFs from cloud storage or your device, process them using the same features as desktop, and download or share results directly from your mobile device. No app download required — just visit our website in your mobile browser. Perfect for on-the-go document management, signing contracts while traveling, or quick PDF edits from your phone."
      }
    ],

    relatedTools: [
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "Image Background Remover", href: "/image-tools/image-background-remover" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Text Case Converter", href: "/converters/text-case" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function PDFToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pdfTools.map((tool) => (
            <GCard
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