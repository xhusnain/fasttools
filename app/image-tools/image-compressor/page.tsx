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
    "Compress JPG, PNG, and WebP images in your browser with quality, max file size, and resolution controls. Batch up to 100 images and download a ZIP.",
  metaTitle: "Image Compressor — Reduce JPG, PNG, WebP File Size",
  metaDescription:
    "Free image compressor. Compress JPG, PNG, and WebP with quality, max MB, and resolution sliders. Batch up to 100 images, ZIP download, browser-based.",
  path: "/image-tools/image-compressor",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based image compressor for JPG, PNG, and WebP with quality slider, max file size control, max resolution control, batch processing, and ZIP download.",
    alternateName: [
      "Photo Compressor",
      "JPG Compressor",
      "PNG Compressor",
      "Compress Image to KB",
      "Image Optimizer",
    ],
    featureList: [
      "Compress JPG, PNG, and WebP images",
      "Quality slider (10–100%)",
      "Max file size slider from 0.01 MB to 5 MB",
      "Resolution downscaling up to 4096 px",
      "Batch processing up to 100 images at once",
      "Before and after file size comparison",
      "ZIP download for batch output",
      "Drag-and-drop upload",
      "100% browser-based processing",
      "Free, no signup, no watermark, no usage limits",
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
    definition:
      "An Image Compressor is a free tool that reduces image file size while maintaining visual quality for faster web loading and smaller storage footprint.",
    quickAnswer:
      "Upload JPG, PNG, or WebP images, then adjust quality, max file size, and max resolution to reduce file size. Compare the before/after size and download each compressed image or all results as a ZIP.",
    keyTakeaways: [
      "Compresses JPG, PNG, and WebP images with quality and size controls",
      "Max file size slider can target upload limits like 100KB or 1MB",
      "Max resolution control helps when quality compression alone is not enough",
      "Batch processing supports up to 100 images with ZIP download",
      "Compression runs in your browser session without an account",
    ],
    overview:
      "Use this tool to shrink JPG, PNG, and WebP files before publishing to a website, submitting a form, or sending an email attachment. The quality slider handles visual compression, the max file size slider hits KB/MB targets, and the max resolution slider helps when dimensions are too large. Afterwards, compare original and output sizes, download individual images, or export everything together as a ZIP.",

    howToSteps: [
      "Upload one or more JPG, PNG, or WebP images.",
      "Adjust quality, maximum file size, and maximum resolution based on your target output.",
      "Review the compressed size and reduction percentage for each file.",
      "Download single files or click Download All to export a ZIP.",
    ],

    features: [
      "Supports JPG, PNG, and WebP uploads",
      "Batch compression workflow for up to 100 images",
      "Quality slider for visual vs size balance",
      "Max file size slider for practical KB/MB targeting",
      "Max resolution control for additional reduction on large photos",
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
      "Compress screenshots and documentation images before adding them to support tickets",
      "Reduce camera photos before sending through chat, CRM, or project-management tools",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Optimizes</h3>
          <p>
            The compressor focuses on practical web output: smaller files, acceptable visual quality, and repeatable settings for bulk work. It is designed for users who need quick results without opening a desktop editor. The best results usually come from combining quality reduction with sensible max-resolution limits.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Quality, Max Size, and Resolution</h3>
          <p>
            Start with quality around 75-85% for photos and 85-90% for screenshots or images with text. If the file is still too large, reduce max resolution before lowering quality aggressively. A 4000px camera photo often shrinks more cleanly when capped at 1600-1920px than when quality is pushed too low.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Compress Image to KB or MB Targets</h3>
          <p>
            The max file size slider lets you aim for a specific upload target, such as 100KB or 500KB. Exact output can vary because image content matters: a flat graphic, a screenshot, and a detailed photo each compress differently. If a target is not reached, lower quality slightly or reduce the max resolution.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JPG, PNG, and WebP Behavior</h3>
          <p>
            JPG photos usually compress the most. PNG screenshots and transparent graphics may shrink less because they preserve sharp edges and alpha data. WebP often starts smaller than JPG or PNG, so the percentage reduction may be lower even when the final file is already efficient.
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
          "Upload the file and reduce the Max File Size slider to your target: 0.05 MB for about 50KB or 0.1 MB for about 100KB. If the result is still too large, lower quality or reduce max resolution.",
      },
      {
        question: "Which formats are supported?",
        answer:
          "This tool supports JPG/JPEG, PNG, and WebP uploads. GIF upload is not currently supported by this compressor.",
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
        question: "Does it work on mobile?",
        answer:
          "Yes. The interface works in modern iPhone, Android, tablet, and desktop browsers.",
      },
      {
        question: "Why is one image not shrinking much?",
        answer:
          "Some files are already optimized or contain content that does not compress efficiently. PNG screenshots, transparent images, and already-compressed WebP files may shrink less. Lowering max resolution can help when quality reduction alone is not enough.",
      },
      {
        question: "Can I download compressed files individually?",
        answer:
          "Yes. You can download each file one by one or use the ZIP option for all files together.",
      },
    ],

    relatedTools: [
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "PNG to JPG Converter", href: "/image-tools/png-to-jpg" },
      { name: "WebP to JPG Converter", href: "/image-tools/webp-to-jpg" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageCompressorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageCompressor />)} />
}
