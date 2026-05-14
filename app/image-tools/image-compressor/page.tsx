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
    "Compress JPG, PNG, WebP, and GIF in your browser with quality and target-size controls. Batch up to 100 images, ZIP download, 100% client-side.",
  metaTitle: "Image Compressor — Reduce JPG, PNG, WebP File Size",
  metaDescription:
    "Free image compressor. Compress JPG, PNG, WebP, and GIF to a target KB/MB or by quality slider. Batch up to 100 images, ZIP download. 100% client-side — images never leave your browser.",
  path: "/image-tools/image-compressor",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based image compressor for JPG, PNG, WebP, and GIF with quality slider, target file size in KB/MB, batch processing, and ZIP download.",
    alternateName: [
      "Photo Compressor",
      "JPG Compressor",
      "PNG Compressor",
      "WebP Compressor",
      "Reduce Image File Size",
      "Compress Image to KB",
      "Compress Image to MB",
      "Compress Image to 20KB / 50KB / 100KB / 200KB / 500KB / 1MB",
      "Batch Image Compressor",
      "Bulk Image Compressor",
      "Image Optimizer",
      "TinyPNG Alternative",
      "ShortPixel Alternative",
      "JPEG Optimizer",
      "Photo Size Reducer",
    ],
    featureList: [
      "Compress JPG, PNG, WebP, GIF (lossy and lossless)",
      "Quality slider (10–100%)",
      "Target file size mode — compress to exact KB or MB",
      "Common targets: 20KB, 50KB, 100KB, 200KB, 500KB, 1MB",
      "Resolution downscaling option",
      "Batch processing up to 100 images at once",
      "Side-by-side before/after preview with file size delta",
      "ZIP download for batch output",
      "Drag-and-drop upload",
      "Preserves EXIF or strips for privacy",
      "Output format conversion (JPG → WebP for ~30% smaller)",
      "100% client-side — images never uploaded to any server",
      "Free, no signup, no watermark, no usage limits",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "10840",
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
    definition:
      "An Image Compressor is a free tool that reduces image file size while maintaining visual quality for faster web loading and smaller storage footprint.",
    quickAnswer:
      "Upload images (PNG, JPG, WebP) and adjust the quality slider to control compression. Preview the result and compare file sizes. Download optimized images individually or as a batch ZIP file.",
    keyTakeaways: [
      "Reduces image file size by 50-90% with minimal visual quality loss",
      "Supports PNG, JPG, WebP, and GIF formats",
      "Adjustable quality slider for fine-tuned compression",
      "Batch processing for multiple images at once",
      "All compression runs locally — images never leave your browser",
    ],
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
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Meme Generator", href: "/fun-tools/meme-generator" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageCompressor />)} />
}
