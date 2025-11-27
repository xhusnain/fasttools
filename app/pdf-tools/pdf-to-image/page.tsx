import { PDFToImage } from "@/components/pdf-to-image"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "PDF to Image Converter",
  description: "Convert PDF pages to JPG, PNG, or WebP images. High-quality extraction with bulk download support for all pages. Free, unlimited, browser-based.",
  metaTitle: "Free PDF to Image Converter - Convert PDF to JPG, PNG, WebP",
  metaDescription: "Convert PDF pages to JPG, PNG, or WebP images online free. High-quality extraction with bulk download support. Secure, browser-based processing.",
  path: "/pdf-tools/pdf-to-image",

  header: {
    title: "PDF to Image Converter - Convert PDF to JPG, PNG, WebP",
    description: "Convert PDF pages to high-quality JPG, PNG, or WebP images. Extract single pages or entire documents with bulk download. All processing happens locally in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
  ],

  content: {
    overview: "Our PDF to image converter transforms PDF pages into high-quality JPG, PNG, or WebP images perfect for web use, presentations, or image editing. Convert individual pages or entire documents with customizable resolution (72-300 DPI) and image format. Ideal for extracting diagrams from reports, creating presentation slides from PDFs, generating thumbnails, or converting scanned documents to images. All processing happens locally in your browser using WebAssembly—files never uploaded, ensuring complete privacy for sensitive documents.",

    howToSteps: [
      "Upload your PDF by clicking the upload area or dragging and dropping the file.",
      "Select output format (JPG for photos/presentations, PNG for text/diagrams, WebP for web optimization).",
      "Choose resolution (72 DPI for web, 150 DPI for standard, 300 DPI for print quality) and pages to convert.",
      "Download individual images or bulk download all pages as a ZIP archive."
    ],

    features: [
      "Multiple Formats: Convert to JPG (photos), PNG (text/transparency), or WebP (modern web format)",
      "Adjustable Resolution: Choose 72, 150, or 300 DPI for web, standard, or print quality",
      "Bulk Download: Convert all pages and download as convenient ZIP archive",
      "Selective Conversion: Convert specific pages or page ranges instead of entire document",
      "High Quality: Maintains text clarity and image detail at selected resolution",
      "Complete Privacy: All processing in browser—files never uploaded to servers",
      "Large File Support: Handle PDFs up to 2GB and hundreds of pages",
      "Unlimited Free: No limits, no watermarks, no account required",
      "Fast Processing: Instant conversion using WebAssembly technology",
      "Cross-Platform: Works on Windows, Mac, Linux, mobile—any device",
      "No Installation: Browser-based, works immediately",
      "Preview Mode: See thumbnails before downloading"
    ],

    useCases: [
      "Presentation Creation: Extract PDF pages as images to embed in PowerPoint, Keynote, or Google Slides presentations",
      "Web Content: Convert PDF pages to optimized JPG/WebP images for website articles, blogs, or documentation",
      "Social Media Sharing: Transform PDF infographics, charts, or diagrams into shareable images for social platforms",
      "Diagram Extraction: Pull technical diagrams, flowcharts, or schematics from PDF manuals for editing or sharing",
      "Thumbnail Generation: Create preview thumbnails of PDF pages for document management systems or catalogs",
      "Print Preparation: Convert high-resolution PDFs to300 DPI images for professional printing or large format output",
      "Image Editing: Extract PDF pages as PNG for editing in Photoshop, GIMP, or other image editors",
      "Mobile Viewing: Convert PDFs to images for easier viewing on smartphones where PDF readers perform poorly",
      "Archive Preservation: Convert scanned historical documents to image format for long-term preservation",
      "Content Repurposing: Extract pages from ebooks, research papers, or reports as images for presentations or articles"
    ],

    aboutTool: "Our converter uses PDF.js to render PDF pages at specified resolution, then exports each page as JPG, PNG, or WebP using HTML5 Canvas API. The tool renders pages using anti-aliasing for smooth text and sharp vector graphics, then applies format-specific optimization: JPG uses adjustable quality compression ideal for photos and complex images; PNG uses lossless compression perfect for text, diagrams, and images requiring transparency; WebP provides modern compression balancing quality and file size for web use. Resolution selection controls output DPI: 72 DPI creates web-optimized images (smallest files), 150 DPI provides balanced quality for general use, 300 DPI delivers print-quality output. All processing happens in-browser using WebAssembly for fast, private rendering without server dependencies.",

    proTip: "For best results: Use PNG for text-heavy PDFs (maintains sharpness), JPG for photo or image-heavy pages (smaller file size), WebP for modern web use (best compression). Choose 72 DPI for web/email, 150 DPI for presentations, 300 DPI only when printing. For selective conversion, export only pages you need rather than entire documents to save processing time. Bulk download as ZIP when converting many pages to avoid individual downloads.",

    faqs: [
      {
        question: "What's the difference between JPG, PNG, and WebP output?",
        answer: "JPG is best for photos, scanned documents, and complex images—uses lossy compression creating smaller files. PNG is best for text, diagrams, charts, and images needing transparency—uses lossless compression maintaining perfect quality. WebP is a modern format offering better compression than JPG/PNG, ideal for web use, but may have limited compatibility with older software. Choose JPG for general use/small files, PNG for text clarity/editing, WebP for modern web optimization."
      },
      {
        question: "How do I choose the right resolution (DPI)?",
        answer: "72 DPI: Best for web display, email attachments, social media—smallest file sizes, fast loading. 150 DPI: Balanced quality for presentations, general viewing, standard printing—good clarity with moderate file size. 300 DPI: Professional print quality for large format printing, high-quality reproduction—largest files, slowest processing. Rule of thumb: use 72 DPI unless printing, then use 300 DPI. For most screen viewing (presentations, web), 72-150 DPI is sufficient."
      },
      {
        question: "Can I convert specific pages instead of the entire PDF?",
        answer: "Yes, select specific pages or page ranges before converting. Enter page numbers like '1,5,10' for specific pages or '1-10,20-25' for ranges. Perfect for extracting single diagrams, specific slides, or relevant sections without converting the entire document. Saves processing time and creates only the images you need. Preview thumbnails help you identify page numbers before conversion."
      },
      {
        question: "Is it safe to convert confidential PDFs to images?",
        answer: "Completely safe. All conversion happens locally in your browser using WebAssembly—your PDF never leaves your device, never uploaded to servers, and never stored anywhere. After conversion, close the page and all data (PDF and images) is deleted from browser memory. No data transmission, no server access, no privacy concerns. Safe for converting confidential business documents, financial records, legal contracts, medical files, or any sensitive materials."
      },
      {
        question: "How do I download all converted pages at once?",
        answer: "Use the 'Download All as ZIP' button after conversion completes. This packages all converted images into a single ZIP archive for convenient download. Extract the ZIP on your computer to access all images. Perfect when converting multi-page documents (10+ pages) to avoid clicking download for each individual page. ZIP files maintain image quality and organize pages by number."
      },
      {
        question: "Will text remain sharp and readable in the converted images?",
        answer: "Yes, text maintains excellent clarity when converted to images, especially with PNG format and appropriate resolution. The tool uses anti-aliasing during rendering to smooth text edges. For best text clarity: use PNG format (lossless), choose 150-300 DPI resolution, avoid JPG at low quality settings. Text-heavy PDFs convert best to PNG at 150+ DPI. Scanned documents may show quality limitations from the original scan, not the conversion process."
      },
      {
        question: "Can I convert password-protected PDFs to images?",
        answer: "No, encrypted PDFs must be unlocked first. Use our PDF Unlocker tool to remove password protection, then convert the unlocked PDF to images. This security measure ensures only authorized users can extract content from protected documents. If you have the correct password, unlock first, then convert. Re-encrypt if security is needed after extracting specific pages."
      },
      {
        question: "What's the maximum number of pages I can convert?",
        answer: "No page limit, though browser memory affects very large conversions (500+ pages). Most users comfortably convert 50-100 page documents. For extremely large PDFs (500+ pages), consider converting in batches: first 100 pages, then next 100, etc. Each page is converted individually, so memory usage scales with page count. Mobile devices may handle fewer pages than desktop due to memory constraints. For massive conversions, use desktop browser."
      },
      {
        question: "Why are my image file sizes larger than expected?",
        answer: "Image file size depends on format, resolution, and page content. Higher DPI creates larger files (300 DPI is 4x larger than 150 DPI for same page). PNG is larger than JPG for photo-heavy pages. WebP offers best compression. To reduce size: use JPG format, lower DPI (72 instead of 300), export only needed pages. For web use, 72 DPI JPG/WebP creates smallest files. For text documents, PNG at 150 DPI balances quality and size."
      },
      {
        question: "Can I edit the images after conversion?",
        answer: "Yes, converted images are standard JPG/PNG/WebP files editable in any image editing software like Photoshop, GIMP, Canva, or online editors. PNG format is best for editing as it's lossless and supports transparency. You can crop, adjust colors, add annotations, or composite with other images. Note: text in images can't be edited as text—it's rasterized pixels. For text editing, consider PDF editing tools or OCR to extract text first."
      }
    ],

    relatedTools: [
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "PDF Sign", href: "/pdf-tools/pdf-sign" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function PDFToImagePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToImage />)} />
}
