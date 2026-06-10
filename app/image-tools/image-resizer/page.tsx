import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageResizer = dynamic(
  () => import("@/components/image/image-resizer").then((mod) => mod.ImageResizer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Image Resizer",
  description:
    "Resize images online with exact pixel dimensions, percentage scaling, 30+ social media presets, quality control, and JPG/PNG/WebP output.",
  metaTitle: "Image Resizer Online — Resize JPG, PNG, WebP by Pixel or %",
  metaDescription:
    "Free image resizer. Resize JPG, PNG, WebP, GIF, BMP, and TIFF by exact pixels or percentage. 30+ social presets, quality slider, aspect ratio lock.",
  path: "/image-tools/image-resizer",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Free online image resizer with custom pixel and percentage dimensions, social media presets, quality slider, JPG/PNG/WebP output, and browser-based processing.",
    alternateName: [
      "Photo Resizer",
      "JPG Resizer",
      "PNG Resizer",
      "WebP Resizer",
      "Resize Image Online",
      "Resize Image to 4x6 / 3x4 / Passport Photo",
      "Instagram Image Resizer",
      "Facebook Image Resizer",
      "LinkedIn Banner Resizer",
      "YouTube Thumbnail Resizer",
      "Profile Picture Resizer",
      "Photo Size Changer",
      "Image Dimension Changer",
    ],
    featureList: [
      "Resize by pixel dimensions or percentage",
      "Lock or unlock aspect ratio",
      "30+ social media presets (Instagram feed/story/reel, Facebook cover/post, Twitter/X header, LinkedIn banner, YouTube thumbnail, TikTok, Pinterest, WhatsApp)",
      "Common photo presets (passport photo 35×45mm, 4×6, 5×7, Full HD 1920×1080, 4K)",
      "Quality slider for JPG and WebP output",
      "Output format selection (JPG, PNG lossless, WebP)",
      "PNG transparency preservation",
      "Drag-and-drop file upload",
      "High-quality browser canvas resizing",
      "Browser-based processing",
      "Free, no signup, no watermark, no daily limits",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
  },

  header: {
    title: "Free Image Resizer Online",
    description:
      "Resize any image to custom dimensions or social media sizes. Supports JPG, PNG, WebP. No quality loss, no upload — 100% private browser processing.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "Image Resizer", href: "/image-tools/image-resizer" },
  ],

  content: {
    definition:
      "An Image Resizer is a free online tool that changes the pixel dimensions (width and height) of any image — by exact pixels, percentage, or social media presets — while preserving quality and privacy through client-side browser processing.",

    quickAnswer:
      "Upload an image, enter target width and height or choose a social media preset, adjust quality, then click Resize and Download. The tool exports JPG, PNG, or WebP output from your browser.",

    keyTakeaways: [
      "Resize images instantly in your browser — free, no signup, no watermarks",
      "30+ one-click presets for Instagram, Facebook, LinkedIn, YouTube, TikTok, Pinterest, WhatsApp, and common sizes",
      "Supports JPG, PNG (with transparency), WebP, GIF, BMP, TIFF input",
      "Quality slider lets you balance file size vs visual quality",
      "Exports resized images as JPG, PNG, or WebP",
    ],

    overview:
      "Image Resizer lets you change image dimensions for social media posts, website graphics, profile photos, passport-style photos, print layouts, favicons, and app icons. Upload one image, choose a target size using pixels, percentage scaling, or one of 30+ presets, then download the resized result as JPG, PNG, or WebP. It is useful when a platform asks for exact dimensions such as 1080x1080, 1080x1920, 1280x720, 1500x500, 1920x1080, or 600x600.",

    howToSteps: [
      "Upload your image by dragging it into the drop zone or clicking to browse. Supports JPG, PNG, WebP, GIF, BMP, and TIFF formats.",
      "Set your target size: enter exact width and height in pixels, scale by percentage, or choose a one-click social media preset.",
      "Adjust quality (10–100%) and output format (JPG, PNG, or WebP) to control the file size and visual quality balance.",
      "Click 'Resize Image' to process. Preview the result, then click 'Download' to save the resized image to your device.",
    ],

    features: [
      "Resize by exact pixel dimensions or percentage scale",
      "Lock/unlock aspect ratio to prevent distortion",
      "30+ social media presets: Instagram (Post, Story, Reel, Profile), Facebook (Cover, Post, Profile, Event), Twitter/X, LinkedIn, YouTube, TikTok, Pinterest, WhatsApp",
      "Common size presets: Full HD (1920x1080), 4K UHD, HD 720p, Passport Photo, A4 Print, Favicon, App Icon",
      "Quality slider with real-time feedback for JPG and WebP output",
      "PNG transparency preservation — alpha channel maintained during resize",
      "Output format selection: JPG (smallest), PNG (lossless), WebP (modern compression)",
      "Drag-and-drop or click-to-upload interface",
      "Instant preview with file size comparison (original vs resized)",
      "Browser Canvas API processing with no software installation",
    ],

    useCases: [
      "Resize photos for Instagram posts, stories, and reels to exact recommended dimensions",
      "Create Facebook cover photos, event images, and profile pictures at the right size",
      "Prepare LinkedIn banners, post images, and professional profile pictures",
      "Generate YouTube thumbnails (1280x720) and channel art (2560x1440)",
      "Resize passport and visa photos to government-required dimensions",
      "Optimize website images by scaling down to exact display sizes for faster page loads",
      "Create favicons (32x32) and app icons (1024x1024) from larger source images",
      "Scale images for print materials at 300 DPI (A4: 2480x3508 px)",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Image Resizing Works</h3>
          <p>
            Image resizing changes the pixel dimensions of a digital image. Unlike cropping, which removes parts of the image,
            resizing scales the entire image up or down. This tool uses the browser Canvas API with high-quality smoothing to
            produce clean resized output. Downscaling usually preserves quality well, while upscaling works best when the target
            size is not much larger than the original image.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Resize Without Losing Quality</h3>
          <p>
            To minimize quality loss: keep the aspect ratio locked, avoid upscaling beyond 200%, use PNG format for
            graphics with sharp edges or text, use WebP for the best balance of quality and file size, and keep the
            quality slider at 85–95% for photographs. For lossless output, select PNG format — the quality slider is
            disabled because PNG compression is always lossless.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy-First Processing</h3>
          <p>
            Unlike most online image resizers that upload your files to remote servers, this tool processes everything
            locally in your browser session. Your images are not sent to a remote image-resizing service, making it useful for
            quick edits to personal photos, documents, and professional assets. Very large images still depend on your browser
            memory and device performance.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Exact Size Examples</h3>
          <p>
            Common targets include 1080x1080 for square posts, 1080x1920 for stories and reels, 1280x720 for YouTube thumbnails,
            1500x500 for X/Twitter headers, 1584x396 for LinkedIn banners, 600x600 for US passport-style output, and 1920x1080
            for full-HD web graphics. Use aspect-ratio lock when you need to avoid stretching faces, logos, or product images.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Output Format</h3>
          <p>
            <strong>JPG:</strong> Best for photographs and complex images. Smallest file size with quality control.
            Does not support transparency. <strong>PNG:</strong> Best for graphics, logos, screenshots, and images
            requiring transparency. Larger file size but lossless quality. <strong>WebP:</strong> Modern format
            supported by all major browsers. 25–35% smaller than JPG at the same quality. Supports transparency.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For social media, always resize to the exact recommended dimensions rather than relying on the platform to crop. This ensures your image looks perfect on all devices and avoids unexpected cropping of important content.",

    faqs: [
      {
        question: "How do I resize an image without losing quality?",
        answer:
          "To minimize quality loss: downscale rather than upscale, keep the aspect ratio locked, use PNG format for graphics with sharp edges, and set the quality slider to 85–95% for photos. Our resizer uses high-quality bicubic interpolation for the sharpest results.",
      },
      {
        question: "What size should I resize my image for Instagram?",
        answer:
          "Instagram recommended sizes: Square post 1080x1080px (1:1), Portrait post 1080x1350px (4:5, recommended), Landscape post 1080x566px, Story/Reel 1080x1920px (9:16), Profile picture 320x320px. Use our Instagram presets to resize in one click.",
      },
      {
        question: "Can I resize a PNG without losing transparency?",
        answer:
          "Yes. Our tool preserves the alpha channel (transparency) when resizing PNG images. Make sure to select PNG as the output format — if you export as JPG, the transparent areas will be replaced with a white background.",
      },
      {
        question: "What is the best image size for a Facebook cover photo?",
        answer:
          "The recommended Facebook cover photo size is 851x315 pixels. For optimal display on both desktop and mobile, use our Facebook Cover Photo preset. Event covers should be 1920x1005 pixels.",
      },
      {
        question: "Is it safe to resize images online?",
        answer:
          "Our image resizer processes everything in your browser using the Canvas API. Your images are never uploaded to any server, ensuring complete privacy. No data leaves your device — it is 100% client-side processing.",
      },
      {
        question: "What is the difference between resizing and compressing an image?",
        answer:
          "Resizing changes the pixel dimensions (width and height) of an image. Compressing reduces the file size by adjusting quality or removing metadata without changing dimensions. You can do both: resize to smaller dimensions AND lower the quality slider to reduce file size further.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "Input: JPG/JPEG, PNG, WebP, GIF, BMP, and TIFF. Output: JPG (smallest file size), PNG (lossless with transparency), or WebP (modern format with best quality-to-size ratio).",
      },
      {
        question: "How do I resize an image for a passport photo?",
        answer:
          "US passport photos should be 600x600 pixels (2x2 inches at 300 DPI). Use our 'Passport Photo (US)' preset under Common Sizes for one-click resizing. For other countries, enter the required dimensions manually.",
      },
      {
        question: "Can I resize an image to a specific file size like 100KB?",
        answer:
          "This tool resizes by dimensions, not exact file-size target. To reduce file size, lower the quality slider, choose JPG or WebP output, and reduce the dimensions. Use Image Compressor when the main goal is a target such as 100KB.",
      },
      {
        question: "What is the best image size for website performance?",
        answer:
          "For websites: use 1920px max width for full-width hero images, 800–1200px for content images, 400–600px for thumbnails. Convert to WebP format for 25–35% smaller files. Always resize to the exact display size — never serve a 4000px image that displays at 800px.",
      },
    ],

    relatedTools: [
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "AI Image Detector", href: "/image-tools/ai-image-detector" },
      { name: "Image to PDF Converter", href: "/pdf-tools/image-to-pdf" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageResizerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageResizer />)} />
}
