import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const BackgroundRemover = dynamic(
  () => import("@/components/image/background-remover").then((mod) => mod.BackgroundRemover),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Background Remover",
  description:
    "Remove background from any image instantly using AI. 100% free, no signup, no watermarks. Transparent PNG output, background replacement with solid colors or custom images. Runs entirely in your browser — images never leave your device.",
  metaTitle: "Free Background Remover Online - Remove Image Background Instantly",
  metaDescription:
    "Remove background from image for free in seconds. AI-powered background remover with transparent PNG output, color replacement & custom backgrounds. No signup, no watermark. 100% private — runs in your browser.",
  path: "/image-tools/background-remover",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Free AI background remover that processes images entirely in your browser. Remove backgrounds from photos, product images, portraits, and logos. Export transparent PNG or replace backgrounds with solid colors and custom images. No upload to servers — 100% client-side privacy.",
    featureList: [
      "AI-powered one-click background removal",
      "Transparent PNG output for overlays and designs",
      "Replace background with solid color (12 presets + custom hex)",
      "Replace background with custom uploaded image",
      "Supports JPG, PNG, WebP, BMP input up to 25 MB",
      "Edge-aware AI model for clean hair and object boundaries",
      "Before/after comparison view with zoom controls",
      "File size and dimension stats for original and result",
      "Drag and drop or click to upload interface",
      "100% client-side processing — images never leave your device",
      "No signup, no watermarks, no daily limits",
      "Works offline after first model download",
    ],
    softwareRequirements: "Modern web browser with JavaScript and WebAssembly support",
    alternateName: [
      "BG Remover",
      "Image Background Eraser",
      "Photo Background Removal Tool",
      "Transparent PNG Maker",
      "AI Background Remover",
    ],
  },

  header: {
    title: "Free Background Remover Online",
    description:
      "Remove the background from any image in seconds using AI. Transparent PNG, solid color, or custom image replacement. No signup, no watermark — 100% free and private.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "Background Remover", href: "/image-tools/background-remover" },
  ],

  content: {
    definition:
      "A Background Remover is a free online tool that uses AI (deep learning segmentation) to automatically detect the foreground subject in a photo and remove everything else, producing a transparent PNG or replacing the background with a solid color or custom image — all processed in your browser for complete privacy.",

    quickAnswer:
      "Upload any image (JPG, PNG, WebP), click 'Remove Background', and download the result as a transparent PNG in seconds. You can also replace the background with a solid color or your own image. Everything runs locally in your browser — no server upload, no signup required.",

    keyTakeaways: [
      "Remove backgrounds from photos instantly using AI — free, no signup, no watermarks",
      "Output options: transparent PNG, solid color background, or custom image background",
      "100% private — images are processed locally in your browser and never uploaded to any server",
      "Works with portraits, product photos, logos, pets, objects, and complex scenes",
      "Edge-aware AI handles hair, fur, and semi-transparent edges with high accuracy",
      "No daily limits — process as many images as you need completely free",
    ],

    overview:
      "This Background Remover uses a state-of-the-art AI segmentation model that runs entirely in your browser via WebAssembly and ONNX Runtime. Upload any photo — a portrait, product shot, pet photo, or logo — and the AI automatically identifies the foreground subject and removes the background. Choose between a transparent PNG for design work, a solid color replacement for clean product shots, or a custom background image for creative composites. Unlike most online background removers that upload your images to remote servers, this tool processes everything locally on your device, ensuring complete privacy for sensitive photos and business assets.",

    howToSteps: [
      "Upload your image by dragging it into the drop zone or clicking to browse. Supports JPG, PNG, WebP, and BMP formats up to 25 MB.",
      "Choose your background option: transparent (default), solid color (pick from 12 presets or enter a custom hex code), or upload a custom background image.",
      "Click 'Remove Background' and wait a few seconds. The AI model downloads once (~40 MB) and is cached for instant future use.",
      "Preview the result with the before/after comparison view and zoom controls. Download the result as a high-quality PNG file.",
    ],

    features: [
      "AI-powered background removal using deep learning segmentation (ONNX/WebAssembly)",
      "Three output modes: transparent PNG, solid color background (12 presets + custom hex), custom image background",
      "Edge-aware processing for clean cutouts around hair, fur, feathers, and semi-transparent objects",
      "Before/after comparison toggle to verify quality before downloading",
      "Zoom controls (25%–300%) for inspecting fine edge details",
      "File statistics: original vs result size, image dimensions, background mode",
      "Drag-and-drop or click-to-upload interface with 25 MB file size support",
      "One-time AI model download (~40 MB) cached in browser for instant subsequent use",
      "100% client-side processing — zero server uploads, zero privacy risk",
      "No signup, no watermarks, no daily processing limits",
    ],

    useCases: [
      "Remove backgrounds from product photos for e-commerce listings on Amazon, Shopify, eBay, and Etsy",
      "Create transparent PNGs of logos and graphics for website headers, presentations, and overlays",
      "Remove backgrounds from passport photos, ID photos, and headshots for official documents",
      "Create professional LinkedIn and social media profile pictures with clean backgrounds",
      "Design marketing materials by compositing subjects onto branded backgrounds",
      "Remove distracting backgrounds from real estate and interior photography",
      "Create stickers, emojis, and memes by isolating subjects from photos",
      "Prepare product images with white backgrounds for marketplace compliance (Amazon, Walmart)",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How AI Background Removal Works
          </h3>
          <p>
            This tool uses a deep learning image segmentation model (based on architectures like
            U-Net and IS-Net) compiled to ONNX format and executed via WebAssembly in your browser.
            The AI analyzes the image to create a precise alpha matte — a pixel-level map that
            separates the foreground subject from the background. Unlike traditional chroma-key or
            color-based removal, AI segmentation understands semantic content: it knows that hair
            belongs to a person, that a leash belongs to a dog, and that shadows should be handled
            appropriately. This produces far more accurate results than manual selection tools.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Privacy-First: No Server Uploads
          </h3>
          <p>
            Most background removal websites (including remove.bg, Canva, and Adobe Express) upload
            your images to their servers for processing. This tool is fundamentally different: the AI
            model downloads to your browser once and then processes images entirely on your device.
            Your photos never leave your computer, making it safe for confidential business documents,
            personal photos, and sensitive product images. The tool works offline after the initial
            model download.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Tips for Best Results
          </h3>
          <p>
            For the sharpest cutouts: use high-resolution images (the AI has more detail to work
            with), ensure good contrast between subject and background, and use well-lit photos
            where the subject is clearly visible. The AI handles complex edges like hair, fur, and
            semi-transparent fabrics well, but extremely low-contrast scenes (e.g., a white cat on a
            white couch) may need minor manual touch-up in an image editor.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Background Replacement Options
          </h3>
          <p>
            <strong>Transparent:</strong> Best for logos, product images, and design overlays. Saves
            as PNG with alpha channel. <strong>Solid Color:</strong> Best for e-commerce product
            shots (white background), social media profiles, and clean presentations. Choose from 12
            preset colors or enter any hex code. <strong>Custom Image:</strong> Best for creative
            composites — place your subject on a beach, in a studio, or on any background you choose.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For e-commerce product photos, use the 'Color' mode with white (#FFFFFF) to create marketplace-compliant images. For social media, try the 'Image' mode to place yourself in creative backgrounds. The AI model caches after the first use, so subsequent images process in just 2-5 seconds.",

    faqs: [
      {
        question: "How do I remove the background from an image for free?",
        answer:
          "Upload your image (JPG, PNG, WebP) to this tool, click 'Remove Background', and download the transparent PNG result — completely free, no signup required. The AI processes everything in your browser, so your image is never uploaded to any server.",
      },
      {
        question: "Is this background remover really free with no limits?",
        answer:
          "Yes. There are no daily limits, no watermarks, no signup requirements, and no premium upsells. The AI model runs entirely in your browser using WebAssembly, so there are no server costs to pass on to you. Process as many images as you want.",
      },
      {
        question: "How does this compare to remove.bg?",
        answer:
          "Remove.bg uploads your images to their servers and limits free usage to 3 images. This tool processes everything locally in your browser — your images never leave your device, there are no limits, and there are no watermarks. The AI quality is comparable for most use cases.",
      },
      {
        question: "Can I remove the background from a product photo?",
        answer:
          "Yes. This tool works excellently for product photography. Upload your product image, remove the background, then choose 'Color' mode with white (#FFFFFF) for marketplace-compliant images (Amazon, Shopify, eBay). The AI handles complex product shapes, reflections, and shadows.",
      },
      {
        question: "Does it work with hair, fur, and complex edges?",
        answer:
          "Yes. The AI model uses deep learning segmentation that understands semantic image content, so it handles hair, fur, feathers, and semi-transparent edges much better than traditional selection tools. Results are best with high-resolution, well-lit photos.",
      },
      {
        question: "Are my images uploaded to a server?",
        answer:
          "No. This is 100% client-side processing. The AI model downloads to your browser once (~40 MB) and is cached for future use. Your images are processed entirely on your device and never uploaded anywhere. This makes it safe for sensitive, personal, or confidential images.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "Input: JPG/JPEG, PNG, WebP, and BMP formats up to 25 MB. Output: PNG format (supports transparency). When using solid color or custom image background mode, the output is still PNG for maximum quality.",
      },
      {
        question: "Why does the first image take longer to process?",
        answer:
          "The AI model (~40 MB) needs to download to your browser on first use. This typically takes 10-30 seconds depending on your internet speed. After the first download, the model is cached in your browser and subsequent images process in 2-5 seconds.",
      },
      {
        question: "Can I replace the background with a custom color or image?",
        answer:
          "Yes. After removing the background, you can choose between three modes: transparent PNG (default), solid color background (12 presets or any custom hex code), or custom image background (upload your own). This is great for creating professional product shots or creative composites.",
      },
      {
        question: "Does this tool work on mobile phones?",
        answer:
          "Yes, the tool works on modern mobile browsers (Chrome, Safari, Firefox). However, background removal is computationally intensive, so processing may be slower on older mobile devices compared to desktop. For best performance, use a recent smartphone or a desktop/laptop computer.",
      },
      {
        question: "Is this a free alternative to remove.bg?",
        answer:
          "Yes — and a privacy-respecting one. Remove.bg processes images on their servers (your image leaves your device) and has a 50-image-per-month limit on the free tier with a 0.25 MP output cap. This tool runs the entire AI model in your browser using ONNX/WebAssembly — your image never leaves your device, there's no monthly limit, no signup, and full-resolution output. The tradeoff: remove.bg uses a larger paid model that's slightly more accurate on hair/fur edges; this tool is good enough for product photos, profile pictures, and most use cases."
      },
      {
        question: "Is this a free bgremover / background removal tool?",
        answer:
          "Yes. 'bgremover' or 'bg remover' is a common shortened search for background remover tools — this is one. Free, unlimited use, no signup, no watermarks, output as transparent PNG. Drag and drop an image to start."
      },
      {
        question: "Can I add a solid color or custom background after removing the original?",
        answer:
          "Yes. After removing the background you can set a solid color (white for product photos, transparent for layered design, gradient for social-media backgrounds) or upload a custom background image. Output downloads as PNG with transparent or composited background."
      }
    ],

    relatedTools: [
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "AI Image Detector", href: "/image-tools/ai-image-detector" },
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "Color Palette Generator", href: "/dev-tools/color-palette-generator" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BackgroundRemoverPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<BackgroundRemover />)} />
}
