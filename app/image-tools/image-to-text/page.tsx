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
    "Extract editable text from images with browser-based OCR and copy the result instantly.",
  metaTitle: "Image to Text Converter (OCR) - Extract Text from Images Online",
  metaDescription:
    "Convert image to text online with browser OCR. Upload screenshot or document images, choose language, and copy extracted text in seconds.",
  path: "/image-tools/image-to-text",
  keywords: [
    "image to text converter",
    "ocr online",
    "extract text from image",
    "copy text from image",
    "photo to text converter",
    "screenshot to text",
    "image text extractor",
    "free ocr tool",
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Online image to text OCR tool with language selection, client-side processing, and copy-to-clipboard output.",
    featureList: [
      "OCR from uploaded images",
      "Language selector",
      "Progress indicator",
      "Copy extracted text",
      "Browser-based processing",
    ],
    softwareRequirements: "Modern web browser",
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
    overview:
      "Image to Text (OCR) converts readable text from screenshots, document photos, and image snippets into editable output. It is useful for quick copy workflows when you need text from visual content without manual typing.",

    howToSteps: [
      "Choose an OCR language from the selector.",
      "Upload an image file (up to 10MB).",
      "Wait for OCR to process and preview extracted text.",
      "Copy the result, or rerun OCR with another language.",
    ],

    features: [
      "Browser-based OCR workflow",
      "Language selection for multilingual extraction",
      "Progress indicator while text recognition runs",
      "One-click copy to clipboard",
      "Reset and rerun flow for quick retries",
      "No login required",
      "Works on mobile and desktop browsers",
    ],

    useCases: [
      "Copy text from screenshots into documents",
      "Extract notes from document photos",
      "Convert UI mockup text into editable copy",
      "Capture text from images for translation workflows",
      "Reduce manual typing in research and admin tasks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What OCR Output Depends On</h3>
          <p>
            OCR accuracy improves with clear contrast, sharp focus, and horizontal text. Low light, blur, and heavily stylized fonts
            usually reduce extraction quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Language-Aware Extraction</h3>
          <p>
            You can select the OCR language before processing and rerun with another language if needed. Choosing the correct language
            typically improves recognition for non-English content.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Session Behavior</h3>
          <p>
            OCR processing is designed for browser-based usage and quick copy workflows. For best results, process clean input images
            and review extracted text before final use.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If OCR output contains errors, increase image contrast and rerun using the exact document language.",

    faqs: [
      {
        question: "How do I convert an image to editable text?",
        answer:
          "Select OCR language, upload the image, wait for extraction, then copy the output text. You can rerun OCR if you change language settings.",
      },
      {
        question: "Which file types can I upload?",
        answer:
          "The uploader accepts image files supported by your browser, including common formats like JPG, PNG, and WebP.",
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
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Tools Category", href: "/image-tools" },
      { name: "PDF to Image Converter", href: "/pdf-tools/pdf-to-image" },
      { name: "Text Case Converter", href: "/converters/text-case" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageToTextPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageToText />)} />
}
