import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageToText = dynamic(
  () => import("@/components/image/image-to-text").then((mod) => mod.ImageToText),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Image to Text (OCR)",
  description:
    "Extract editable text from images, screenshots, and scanned documents using browser-based OCR. Supports 100+ languages, all client-side.",
  metaTitle: "Image to Text Converter (OCR) — Extract Text from Photo Free",
  metaDescription:
    "Free OCR tool. Convert image to text online — extract text from photos, screenshots, scanned PDFs, handwriting, receipts, and business cards. 100+ languages via Tesseract.js. 100% client-side, no upload.",
  path: "/image-tools/image-to-text",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Online image to text OCR tool with 100+ language selection, browser-based Tesseract.js processing, and copy-to-clipboard output.",
    alternateName: [
      "OCR Online",
      "OCR Tool",
      "Photo to Text Converter",
      "Picture to Text Converter",
      "Screenshot to Text",
      "JPG to Text Converter",
      "PNG to Text Converter",
      "Handwriting to Text",
      "Receipt OCR",
      "Business Card OCR",
      "Scanned Document to Text",
      "Extract Text from Image",
      "Copy Text from Image",
      "Tesseract OCR Online",
      "Free OCR Software Alternative",
    ],
    featureList: [
      "OCR from uploaded JPG, PNG, WebP, GIF, BMP images",
      "100+ language support (English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, etc.)",
      "Powered by Tesseract.js (open-source OCR engine)",
      "Real-time progress indicator",
      "Copy extracted text to clipboard",
      "Download as .txt or .docx",
      "Multi-line and paragraph preservation",
      "Numbers, symbols, and special characters supported",
      "Auto-rotation detection for scanned pages",
      "Confidence-score color highlighting (low-confidence text flagged)",
      "Drag-and-drop file upload",
      "100% client-side — images never uploaded to any server",
      "Free, no signup, no usage limits",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "6320",
  },

  header: {
    title: "Image to Text Converter (OCR)",
    description:
      "Upload an image, run OCR, and copy editable text. Choose your OCR language and process directly in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
  ],

  content: {
    definition:
      "An Image to Text (OCR) Tool is a free tool that extracts readable text from images, screenshots, and scanned documents using optical character recognition.",
    quickAnswer:
      "Upload an image containing text (screenshot, photo, scan) and the tool extracts all readable text using OCR. Supports PNG, JPG, and WebP formats. Copy the extracted text or download it as a text file.",
    keyTakeaways: [
      "Extracts text from images using OCR (Optical Character Recognition)",
      "Supports PNG, JPG, WebP, and BMP image formats",
      "Works with screenshots, photos, scanned documents, and receipts",
      "Handles multiple languages and printed text",
      "Accuracy depends on image quality — higher resolution gives better results",
    ],
    overview:
      "Image to Text (OCR) converts readable text inside an image into editable, copyable text. Use it for screenshots, photos of documents, scanned pages, receipts, invoices, business cards, notes, labels, UI mockups, and research images where retyping would be slow or error-prone. The tool is designed for quick browser-based extraction: choose the OCR language, upload the image, review the recognized text, then copy or download the result.",

    howToSteps: [
      "Choose the OCR language that best matches the text in your image.",
      "Upload a clear JPG, PNG, WebP, BMP, or other browser-supported image file.",
      "Wait for the OCR engine to scan the image and generate editable text.",
      "Review the output for spelling, line-break, or number-recognition errors.",
      "Copy the extracted text or download it for use in documents, spreadsheets, notes, or translation tools.",
      "If the result is weak, crop the image, increase contrast, or rerun with the correct language.",
    ],

    features: [
      "Image to editable text extraction using OCR",
      "Works with screenshots, photos, scans, receipts, labels, and document images",
      "Language selection for multilingual OCR workflows",
      "Progress indicator while recognition runs",
      "One-click copy to clipboard",
      "Download recognized text as a reusable file",
      "Reset and rerun flow for retries with cleaner images or another language",
      "Runs in the browser with no login required",
      "Works on mobile and desktop browsers",
    ],

    useCases: [
      "Copy text from screenshots into documents, emails, tickets, or notes",
      "Extract receipt, invoice, and business-card text for bookkeeping or CRM entry",
      "Turn scanned document photos into editable text snippets",
      "Capture text from UI mockups, app screenshots, or website screenshots for product work",
      "Extract printed notes, book passages, labels, forms, or signs for research",
      "Prepare image text for translation, summarization, cleanup, or spreadsheet entry",
      "Reduce manual typing in admin, student, research, and support workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What OCR Means</h3>
          <p>
            OCR stands for optical character recognition. It scans an image, detects shapes that look like letters or numbers, and converts those shapes into editable text. OCR works best on printed text with clear contrast and predictable fonts, but it can also help with screenshots, scans, forms, receipts, and some handwriting.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What OCR Accuracy Depends On</h3>
          <p>
            OCR accuracy improves with sharp focus, high resolution, good lighting, horizontal text, and clear contrast between text and background. Low light, motion blur, perspective distortion, shadows, tiny fonts, decorative typefaces, watermarks, and compressed screenshots can reduce extraction quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Screenshots, Photos, and Scans</h3>
          <p>
            Screenshots usually produce the cleanest output because the text is flat and high contrast. Photos of documents can work well if the camera is steady and the page is not angled. Scanned pages are strong input when the scan is not too compressed. For receipts and labels, crop out the background so the OCR engine focuses on the text area.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Language-Aware Extraction</h3>
          <p>
            Choose the OCR language before processing whenever possible. The correct language helps the recognition engine interpret accents, symbols, character shapes, and word patterns. If an image mixes languages, run OCR once with the dominant language and rerun with another language if important text is missed.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Handwriting and Difficult Images</h3>
          <p>
            Handwriting OCR is less reliable than printed text OCR because handwriting varies from person to person. Clear block letters work better than cursive. If a result contains mistakes, try cropping tighter, increasing contrast, rotating the image upright, or using a sharper photo before running OCR again.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Review</h3>
          <p>
            The OCR workflow is designed for browser-based extraction and quick copy tasks. Always review the result before using it in invoices, legal documents, school work, medical notes, or financial records because OCR can misread similar characters such as O/0, I/1, S/5, and B/8.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For best OCR accuracy, crop to only the text area, rotate the image upright, increase contrast, and select the exact document language before processing.",

    faqs: [
      {
        question: "How do I convert an image to editable text?",
        answer:
          "Select OCR language, upload the image, wait for extraction, then copy the output text. You can rerun OCR if you change language settings.",
      },
      {
        question: "Which file types can I upload?",
        answer:
          "The uploader accepts image files supported by your browser, including common formats like JPG, PNG, WebP, BMP, and GIF. For best OCR accuracy, use a sharp PNG or high-quality JPG.",
      },
      {
        question: "What is the maximum file size?",
        answer:
          "The current upload limit is 10MB per image.",
      },
      {
        question: "Can I choose OCR language?",
        answer:
          "Yes. The tool includes a language selector with multiple options including English, Spanish, French, German, Italian, Portuguese, Dutch, and Hindi.",
      },
      {
        question: "Can I copy text from a screenshot?",
        answer:
          "Yes. Screenshots are one of the best OCR inputs because the text is usually flat, sharp, and high contrast. Upload the screenshot, run OCR, then copy the extracted text.",
      },
      {
        question: "Can this extract text from receipts or invoices?",
        answer:
          "Yes, if the receipt or invoice photo is clear. Crop the image to the document area, avoid shadows, and review numbers carefully because OCR can confuse similar characters.",
      },
      {
        question: "Does this OCR tool work for handwriting?",
        answer:
          "It can extract some handwriting when letters are clear and well spaced, but typed/printed text usually gives more reliable results.",
      },
      {
        question: "Can I extract text from PDFs directly?",
        answer:
          "This page processes image uploads. For PDF files, convert pages to images first, then run OCR on those images.",
      },
      {
        question: "Why is my OCR output missing words?",
        answer:
          "Missing words usually come from blur, low contrast, small text, angled photos, shadows, unusual fonts, or the wrong OCR language. Try a sharper image, crop closer, rotate upright, and run OCR again.",
      },
      {
        question: "Is this free and no-login?",
        answer:
          "Yes. You can use the OCR workflow without creating an account.",
      },
      {
        question: "How can I improve OCR accuracy?",
        answer:
          "Use sharp, high-contrast images, keep text horizontal, crop unnecessary background, and select the correct OCR language before processing.",
      },
    ],

    relatedTools: [
      { name: "PDF to Image Converter", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageToTextPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageToText />)} />
}
