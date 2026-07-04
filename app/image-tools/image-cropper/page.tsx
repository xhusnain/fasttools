import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageCropper = dynamic(
  () => import("@/components/image/image-cropper").then((mod) => mod.ImageCropper),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Image Cropper",
  description: "Free online image cropper. Crop JPG, PNG, WebP, GIF, BMP with drag handles, 9 aspect ratio presets, rotation, and flip. 100% browser-based — images never leave your device.",
  metaTitle: "Image Cropper Online — Crop JPG, PNG, WebP Free",
  metaDescription: "Free image cropper online. Crop JPG, PNG, WebP, GIF, BMP up to 20 MB. 9 aspect ratio presets (1:1, 4:3, 16:9, 3:2, 9:16 Stories, 21:9), exact pixel input, rotation, flip, rule-of-thirds overlay. 100% client-side, no signup, no watermark.",
  path: "/image-tools/image-cropper",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description: "Free browser-based image cropper supporting drag-handle selection, 9 aspect ratio presets, pixel-exact input, 90° rotation, horizontal and vertical flip, rule-of-thirds grid overlay, and JPEG/PNG/WebP output with quality control. 100% client-side.",
    alternateName: [
      "Online Image Cropper",
      "Photo Cropper",
      "Crop Image Online",
      "JPG Cropper",
      "PNG Cropper",
    ],
    featureList: [
      "Drag-handle crop selection with rule-of-thirds grid overlay",
      "9 aspect ratio presets: Free, 1:1 (square), 4:3, 16:9, 3:2, 2:3, 9:16 (Stories), 21:9 (cinematic), 5:4",
      "Exact pixel width/height input",
      "Rotate 90° clockwise",
      "Horizontal and vertical flip",
      "Output as JPEG, PNG (lossless), or WebP",
      "JPEG/WebP quality control (10–100%)",
      "Live crop coordinates display (x, y, width, height)",
      "File support: JPG, PNG, WebP, GIF, BMP up to 20 MB",
      "100% client-side via HTML5 Canvas — images never uploaded to any server",
      "Free, no signup, no watermark, no usage limits",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    operatingSystem: "Any",
  },

  header: {
    title: "Free Online Image Cropper",
    description: "Upload an image, drag the crop handles, lock an aspect ratio, rotate or flip — then download your cropped result as JPG, PNG, or WebP. All processing happens in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "Image Cropper", href: "/image-tools/image-cropper" },
  ],

  content: {
    definition:
      "An image cropper is a browser-based tool that lets you select a rectangular region of a photo or graphic and export only that selected area as a new image file, removing unwanted edges and adjusting composition without any desktop software.",

    quickAnswer:
      "Upload your image, drag the handles on the crop box to select the area you want, choose an aspect ratio preset or enter exact pixel dimensions, then click Crop Image and download your result.",

    keyTakeaways: [
      "Drag the corner and edge handles on the crop box to resize the selection freely.",
      "Click an aspect ratio preset (1:1, 16:9, 4:3, etc.) to lock the crop proportions.",
      "Enter exact pixel dimensions in the Width and Height fields to crop to a specific size.",
      "The rule-of-thirds grid overlay helps you compose balanced crops.",
      "Rotate 90° or flip horizontally/vertically before cropping to correct orientation.",
      "Download as JPEG (smaller file), PNG (lossless transparency), or WebP (best web compression).",
      "All processing is 100% in-browser — your images are never uploaded to any server.",
    ],

    overview: (
      <span>
        This free online image cropper gives you full visual control over your crop. After uploading an image, a
        crop box with <strong>8 drag handles</strong> appears over the full image. Drag any handle to reshape the
        selection, or drag the box itself to move it. Use the <strong>aspect ratio presets</strong> (1:1 for
        square profile images, 16:9 for YouTube thumbnails, 9:16 for Stories and Reels) to lock the proportions so
        the box resizes correctly. For precise requirements, type an exact pixel width and height directly. A{" "}
        <strong>rule-of-thirds grid</strong> overlays the crop area to help you align subjects to the visual
        sweet spots. When ready, hit Crop Image and download your result as JPEG, PNG, or WebP.
      </span>
    ),

    howToSteps: [
      "Click 'Choose Image' or drag and drop a JPG, PNG, WebP, GIF, or BMP file onto the upload zone (max 20 MB).",
      "The image loads with a crop box covering the full image. Drag the handles to resize, or drag the box to reposition.",
      "Optional: click an aspect ratio preset (1:1, 16:9, 4:3, etc.) to constrain proportions.",
      "Optional: enter an exact Width and Height in pixels and click Apply Size to set precise crop dimensions.",
      "Optional: click Rotate 90° or Flip H / Flip V to correct image orientation.",
      "Choose output format (JPEG, PNG, WebP) and adjust quality if needed.",
      "Click Crop Image. A preview appears below — click Download to save the file.",
    ],

    features: [
      {
        title: "Drag-Handle Crop Selection",
        description:
          "Eight handles — four corners and four edge midpoints — let you resize the crop area precisely. The crop box can also be dragged to reposition. A rule-of-thirds grid overlays the selection to guide composition.",
      },
      {
        title: "9 Aspect Ratio Presets",
        description:
          "One-click locking for Free (unconstrained), 1:1 (square), 4:3, 16:9, 3:2, 2:3 (portrait), 9:16 (vertical Stories), 21:9 (cinematic), and 5:4. Switching preset instantly adjusts the crop box dimensions.",
      },
      {
        title: "Exact Pixel Dimensions",
        description:
          "Type the exact width and height in pixels and click Apply Size. The crop box updates to match, positioned from the current top-left corner — useful when you need images at exact resolutions for templates or ads.",
      },
      {
        title: "Rotate & Flip",
        description:
          "Rotate 90° clockwise each click (90°, 180°, 270°, back to 0°). Flip horizontally (mirror) or vertically. Corrections are applied before the crop so the output is properly oriented.",
      },
      {
        title: "JPEG, PNG & WebP Output",
        description:
          "Choose JPEG for the smallest file size, PNG for lossless output with transparency support, or WebP for the best balance of quality and compression for web use. JPEG and WebP include a quality slider (10–100%).",
      },
      {
        title: "100% Client-Side Processing",
        description:
          "All cropping happens in your browser using the HTML5 Canvas API. Your image is never uploaded to any server, making this tool safe for sensitive, private, or watermarked photos.",
      },
    ],

    useCases: [
      {
        title: "Social Media Image Sizing",
        description:
          "Crop to 1:1 for Instagram posts, 9:16 for Stories and Reels, 16:9 for YouTube thumbnails, or 4:3 for Facebook feed images — all in seconds with the preset buttons.",
      },
      {
        title: "Profile Pictures & Avatars",
        description:
          "Use the 1:1 preset to create perfectly square crops for profile pictures across Twitter/X, LinkedIn, Discord, and other platforms.",
      },
      {
        title: "Remove Unwanted Edges",
        description:
          "Quickly crop out distracting backgrounds, timestamps, watermarks, or extra whitespace from photos and screenshots.",
      },
      {
        title: "Print & Document Preparation",
        description:
          "Crop images to specific pixel sizes required by print templates, ID photos, passport photos, or document portals.",
      },
      {
        title: "Thumbnail Creation",
        description:
          "Use the 16:9 preset to crop YouTube or blog thumbnails, ensuring the subject is centered using the rule-of-thirds grid.",
      },
      {
        title: "Photography Composition",
        description:
          "Recompose photos after shooting by cropping to improve framing. The rule-of-thirds overlay helps align subjects with the visual focal points.",
      },
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Cropping Works</h3>
          <p>
            The cropper uses the browser&apos;s native <code>HTML5 Canvas API</code> to draw only the selected region into a new image.
            The crop box stores x, y, width, and height coordinates in image pixels. When you click Crop Image, the selected region is
            rendered to an off-screen canvas and exported as a JPG, PNG, or WebP file.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Aspect Ratio</h3>
          <p>
            Use 1:1 for square avatars and profile pictures, 16:9 for thumbnails and landscape previews, 9:16 for vertical stories and
            reels, 4:3 for general photo framing, and Free mode when the final platform does not require fixed proportions. Aspect ratio
            lock prevents accidental stretching while you move or resize the crop box.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Exact Pixel Cropping</h3>
          <p>
            Exact pixel input is useful for ad creatives, templates, document portals, product images, and app assets. Enter the required
            width and height, apply the size, then move the crop box over the part of the image you want to keep. The output dimensions
            match the selected crop area.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Format and Quality Choices</h3>
          <p>
            Use JPG for photos and smaller files, PNG for screenshots, transparent graphics, and lossless output, and WebP for modern web
            use where smaller files are useful. For JPG and WebP, increase quality when the crop contains small text, product labels, or
            detailed textures.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For social media, use the 9:16 preset for Instagram/TikTok Stories and Reels, 1:1 for feed posts, and 16:9 for YouTube thumbnails. The rule-of-thirds grid lines show exactly where to position faces and key subjects for the most visually balanced result.",

    faqs: [
      {
        question: "How do I crop an image to a specific size in pixels?",
        answer:
          "Upload your image, then enter the exact width and height in the 'Crop Size (px)' fields and click Apply Size. The crop box updates to those exact dimensions. Then click Crop Image to download.",
      },
      {
        question: "Can I crop an image to a square (1:1 aspect ratio)?",
        answer:
          "Yes — click the '1:1' aspect ratio preset button. The crop box will lock to a square shape. Drag it to position the square over the area you want, then click Crop Image.",
      },
      {
        question: "Does this image cropper upload my photo to a server?",
        answer:
          "No. All processing happens entirely in your browser using the HTML5 Canvas API. Your image is never sent to any server, making it safe for private, sensitive, or confidential photos.",
      },
      {
        question: "What image formats can I crop?",
        answer:
          "You can upload JPEG, PNG, WebP, GIF, and BMP files up to 20 MB. You can download the cropped result as JPEG, PNG, or WebP.",
      },
      {
        question: "Can I crop an image without losing quality?",
        answer:
          "Choose PNG as the output format for lossless output — the crop area is exported pixel-for-pixel with no compression artifacts. For JPEG/WebP, set quality to 100% for near-lossless output.",
      },
      {
        question: "How do I crop a circle from an image?",
        answer:
          "Use the 1:1 aspect ratio to crop a square first, download as PNG, then use a circle mask in design software or your CSS. The browser Canvas API doesn't support circular exports directly, but a PNG square with 1:1 ratio is the correct starting point.",
      },
      {
        question: "How do I crop an image for Instagram?",
        answer:
          "For Instagram feed posts, use the 1:1 preset for a square crop. For Stories and Reels, use the 9:16 preset. For landscape posts, use 16:9 as a close web-friendly option.",
      },
      {
        question: "Can I rotate the image before cropping?",
        answer:
          "Yes — click Rotate 90° to rotate clockwise. Each click adds 90°, cycling through 90°, 180°, 270°, and back to 0°. Use Flip H or Flip V to mirror the image horizontally or vertically before cropping.",
      },
      {
        question: "What is the rule of thirds in image cropping?",
        answer:
          "The rule of thirds is a composition guideline that divides the frame into a 3×3 grid. Placing the main subject at one of the four grid intersections creates a more visually balanced image than centering the subject. The grid lines overlaid on the crop box show these positions.",
      },
      {
        question: "What is the best format to save a cropped image?",
        answer:
          "Use JPEG for photos — it produces the smallest file size. Use PNG for graphics, screenshots, or images with transparency where you need pixel-perfect quality. Use WebP for web images where you want the best quality-to-size ratio and your platform supports it.",
      },
    ],

    relatedTools: [
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
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

export default function ImageCropperPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageCropper />)} />
}
