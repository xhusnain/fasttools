import { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { FileText, Minimize2, ShieldCheck, Scissors, Repeat } from "lucide-react"

const imageTools = [
  {
    title: "Image Compressor",
    description: "Compress JPG, PNG, and WebP with quality, size, and resolution controls.",
    icon: Minimize2,
    href: "/image-tools/image-compressor",
    popular: true,
  },
  {
    title: "Image to Text (OCR)",
    description: "Extract editable text from screenshots and document images with browser OCR.",
    icon: FileText,
    href: "/image-tools/image-to-text",
    popular: true,
  },
  {
    title: "AI Image Detector",
    description: "Detect AI-generated images using 5 forensic signals — metadata, ELA, noise, color, and frequency analysis.",
    icon: ShieldCheck,
    href: "/image-tools/ai-image-detector",
    popular: true,
  },
  {
    title: "Background Remover",
    description: "Remove image backgrounds instantly with AI. Transparent PNG, color replacement, or custom backgrounds. 100% browser-based.",
    icon: Scissors,
    href: "/image-tools/background-remover",
    popular: true,
  },
  {
    title: "HEIC to JPG Converter",
    description: "Convert iPhone HEIC/HEIF photos to JPG or PNG in your browser. Batch up to 100, adjustable quality, no upload.",
    icon: Repeat,
    href: "/image-tools/heic-to-jpg",
    popular: true,
  },
  {
    title: "PNG to JPG Converter",
    description: "Convert PNG images to JPG with quality control and optional WebP output. Batch processing, 100% browser-based.",
    icon: Repeat,
    href: "/image-tools/png-to-jpg",
    popular: true,
  },
  {
    title: "WebP to JPG Converter",
    description: "Convert WebP images to JPG or PNG for universal compatibility. Batch processing, no upload to server.",
    icon: Repeat,
    href: "/image-tools/webp-to-jpg",
    popular: true,
  },
  {
    title: "JPG to PNG Converter",
    description: "Convert JPG/JPEG images to lossless PNG, with optional WebP output. Batch processing, 100% browser-based.",
    icon: Repeat,
    href: "/image-tools/jpg-to-png",
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Image Tools",
  description:
    "Use free browser-based image tools to compress files, extract text with OCR, and detect AI-generated images.",
  metaTitle: "Image Tools — AI Detector, Background Remover, Compressor & OCR",
  metaDescription:
    "Free image tools: remove backgrounds with AI, resize images for social media, compress JPG/PNG/WebP, extract text with OCR, and detect AI-generated images.",
  path: "/image-tools",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Category page for browser-based image utilities including image compression and OCR text extraction.",
    featureList: [
      "Image compression tool",
      "Image to text OCR tool",
      "AI background remover",
      "HEIC, PNG, WebP, and JPG format converters",
      "No-login workflows",
      "Desktop and mobile browser support",
    ],
  },

  header: {
    title: "Image Tools: Compress Images and Extract Text Online",
    description:
      "Choose a tool below to reduce image size or convert image text into editable output.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Image Tools", href: "/image-tools" }],

  content: {
    overview:
      "This category focuses on high-intent image tasks: file-size reduction, OCR text extraction, background removal, AI image checks, and format conversion. Use the format converters when you need to turn HEIC, PNG, or WebP files into universally compatible JPG or lossless PNG output.",

    howToSteps: [
      "Choose the tool based on your goal: compression or OCR extraction.",
      "Open the selected tool and upload your image files.",
      "Adjust settings (quality/size for compression, language for OCR).",
      "Download or copy your output and continue with related tools if needed.",
    ],

    features: [
      "Focused utilities for compression and OCR",
      "Simple browser-first workflow",
      "No sign-up required",
      "Mobile and desktop support",
      "Internal links to related PDF and text tools",
    ],

    useCases: [
      "Web and app image optimization",
      "iPhone HEIC photo conversion for sharing",
      "Document and screenshot text extraction",
      "Marketing asset preparation",
      "Admin workflows that require fast copyable text",
      "File-size compliance for forms and portals",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Category Intent</h3>
          <p>
            Search intent in this cluster is mainly utility-driven: users want smaller image files, editable text from images, quick
            image edits, or document output from photos and screenshots. This page routes users quickly to the right tool based on that
            immediate task.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Compression Workflows</h3>
          <p>
            If your issue is file-size limits, slow page speed, or heavy media uploads, start with Image Compressor and tune quality,
            max size, and resolution.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">OCR Workflows</h3>
          <p>
            If your issue is manual typing from screenshots or photos, use Image to Text OCR and copy output directly into documents,
            notes, or translation tools.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For best results, run compression before OCR only when the original image is very large and still visually clear after reduction.",

    faqs: [
      {
        question: "What tools are included in this image category?",
        answer:
          "The category includes Image Compressor, Image to Text (OCR), Background Remover, AI Image Detector, and format converters for HEIC, PNG, WebP, and JPG.",
      },
      {
        question: "Which tool should I use first?",
        answer:
          "Use Image Compressor for file-size reduction, a format converter for HEIC, PNG, WebP, or JPG output, and Image to Text for extracting editable text from images.",
      },
      {
        question: "Are these image tools free?",
        answer:
          "Yes. The tools in this category are available as free browser utilities.",
      },
      {
        question: "Do these tools work on mobile?",
        answer:
          "Yes. Both tools are designed for modern mobile and desktop browsers.",
      },
      {
        question: "Do I need to install software?",
        answer:
          "No installation is required. You can use both tools directly in your browser.",
      },
      {
        question: "Can I use these tools with PDF workflows?",
        answer:
          "Yes. After compressing images or extracting text, you can continue with the PDF Splitter & Merger or PDF Signature Checker in the PDF tools category.",
      },
      {
        question: "How is this category organized for SEO intent?",
        answer:
          "The category targets two intent clusters: compress image and image to text OCR, with dedicated pages and related internal links for each task.",
      },
    ],

    relatedTools: [
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "HEIC to JPG Converter", href: "/image-tools/heic-to-jpg" },
      { name: "AI Image Detector", href: "/image-tools/ai-image-detector" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {imageTools.map((tool) => (
            <GToolCard
              key={`image-tools-${tool.href}`}
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
