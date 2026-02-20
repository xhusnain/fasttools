import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageCompressor = dynamic(
  () => import("@/components/image/image-compressor").then((mod) => mod.ImageCompressor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Image Compressor",
  description:
    "Compress JPG, PNG, and WebP images in your browser with quality and size controls.",
  metaTitle: "Image Compressor Online - Compress JPG, PNG, WebP to KB or MB",
  metaDescription:
    "Compress JPG, PNG, and WebP images online. Set target size, adjust quality, batch process up to 100 files, and download all as ZIP.",
  path: "/image-tools/image-compressor",
  keywords: [
    "image compressor",
    "compress image online",
    "compress jpg",
    "compress png",
    "compress webp",
    "compress image to 50kb",
    "compress image to 100kb",
    "reduce image size",
    "batch image compressor",
    "free image compressor",
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based image compressor for JPG, PNG, and WebP with quality slider, target file size, and batch ZIP download.",
    featureList: [
      "Compress JPG PNG WebP",
      "Quality and max size sliders",
      "Batch compression up to 100 images",
      "ZIP download",
      "Client-side browser processing",
    ],
    softwareRequirements: "Modern web browser",
  },

  heroImage: "/image-compressor-hero.png",

  header: {
    title: "Image Compressor Online (JPG, PNG, WebP)",
    description:
      "Reduce image file size with adjustable quality, target size, and resolution controls. Upload multiple files and export in one ZIP.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "Image Compressor", href: "/image-tools/image-compressor" },
  ],

  content: {
    overview:
      "Image Compressor helps you reduce file size before publishing to websites, forms, email, and social platforms. You can tune output using quality, max-size, and max-resolution controls, then download each image or export all compressed files together.",

    howToSteps: [
      "Upload one or more images (JPG, PNG, WebP).",
      "Adjust quality, maximum file size, and resolution sliders based on your target output.",
      "Review the compressed size and reduction percentage for each file.",
      "Download single files or click Download All to export a ZIP.",
    ],

    features: [
      "Supports JPG, PNG, and WebP uploads",
      "Batch compression workflow for up to 100 images",
      "Quality slider for visual vs size balance",
      "Max file size slider for KB/MB targeting",
      "Resolution control for additional reduction",
      "Per-file compression results and reduction stats",
      "One-click ZIP export for bulk downloads",
      "Runs in browser with no account required",
      "Works on desktop and mobile browsers",
    ],

    useCases: [
      "Compress website images to improve load speed",
      "Hit upload limits for job portals and forms",
      "Shrink product photos for marketplaces",
      "Prepare lighter email attachments",
      "Optimize social media uploads while keeping clarity",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Optimizes</h3>
          <p>
            The compressor focuses on practical web output: smaller files, acceptable visual quality, and repeatable settings for bulk work.
            It is designed for users who need quick results rather than manual desktop editing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Quality vs File Size</h3>
          <p>
            Start with quality around 75-85 for photos and 85-90 for images with text or UI elements. If the file is still too large,
            reduce max resolution before lowering quality aggressively.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Workflow</h3>
          <p>
            Compression is performed in the browser session. That makes this tool suitable for fast internal workflows where you need
            immediate output and bulk download support.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For common web use, target 100KB-300KB per image and keep quality between 75-85 before resizing further.",

    faqs: [
      {
        question: "How can I compress an image to 50KB or 100KB?",
        answer:
          "Upload the file and reduce the Max File Size slider to your target (for example 0.05 MB for 50KB or 0.1 MB for 100KB). Then fine-tune quality until the output meets your size goal.",
      },
      {
        question: "Which formats are supported?",
        answer:
          "This tool supports JPG/JPEG, PNG, and WebP uploads. Compressed output is generated from the processed image in your browser workflow.",
      },
      {
        question: "Can I compress multiple images at once?",
        answer:
          "Yes. You can upload up to 100 images, process them in a batch, and download all compressed files as a ZIP.",
      },
      {
        question: "Will compression reduce image quality?",
        answer:
          "Any lossy compression can reduce quality, but the quality slider lets you control the tradeoff. Start high, then lower gradually only if needed for file size limits.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. The tool is free to use with no sign-up requirement.",
      },
      {
        question: "Is this image compressor mobile friendly?",
        answer:
          "Yes. The interface works in modern iPhone, Android, tablet, and desktop browsers.",
      },
      {
        question: "Why is one image not shrinking much?",
        answer:
          "Some files are already optimized or contain content that does not compress efficiently. Lowering max resolution can help when quality reduction alone is not enough.",
      },
      {
        question: "Can I download compressed files individually?",
        answer:
          "Yes. You can download each file one by one or use the ZIP option for all files together.",
      },
    ],

    relatedTools: [
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "Image Tools Category", href: "/image-tools" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageCompressor />)} />
}
