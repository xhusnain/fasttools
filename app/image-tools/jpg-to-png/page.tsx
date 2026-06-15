import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageConverter = dynamic(
  () => import("@/components/image/image-converter").then((mod) => mod.ImageConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JPG to PNG Converter",
  description:
    "Convert JPG images to lossless PNG in your browser. Batch up to 100 files, optional WebP output, and ZIP download — no upload, no signup, no watermark.",
  metaTitle: "JPG to PNG Converter — Free, Lossless, No Upload",
  metaDescription:
    "Free JPG to PNG converter. Change JPG/JPEG images to lossless PNG in your browser with batch processing and ZIP download. No upload, no signup.",
  path: "/image-tools/jpg-to-png",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based JPG to PNG converter with optional WebP output, batch processing, and ZIP download. Re-saves JPG photos losslessly into the PNG format.",
    alternateName: [
      "JPEG to PNG Converter",
      "Convert JPG to PNG",
      "Convert JPG to PNG Online Free",
      "Change JPG to PNG",
      "JPG to PNG Online",
      "JPG to PNG Free",
      "JPEG to PNG Free",
      "JPG to PNG Batch Converter",
      "Bulk JPG to PNG Converter",
      "Lossless JPG to PNG",
      "JPG to PNG No Upload",
      "JPEG to PNG Online",
      "Turn JPG into PNG",
      "JPG Image to PNG",
    ],
    featureList: [
      "Convert JPG and JPEG images to PNG",
      "Optional WebP output",
      "Lossless PNG output",
      "Batch convert up to 100 images at once",
      "ZIP download for batch output",
      "Drag-and-drop upload",
      "100% browser-based — files are never uploaded",
      "Works on desktop and mobile browsers",
      "Free, no signup, no watermark, no usage limits",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "JPG to PNG Converter Online",
    description:
      "Change JPG and JPEG images to lossless PNG directly in your browser. Batch convert and download — nothing is uploaded to a server.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "JPG to PNG", href: "/image-tools/jpg-to-png" },
  ],

  content: {
    definition:
      "A JPG to PNG converter is a free tool that re-saves a lossy JPG photo into the lossless PNG format, ready for editing or for workflows that require PNG files.",
    quickAnswer:
      "Drag your JPG files into the tool, keep the output as PNG, and download each result or all of them as a ZIP. Converting is lossless and runs entirely in your browser, so files are never uploaded.",
    keyTakeaways: [
      "Converts JPG and JPEG images into lossless PNG files",
      "Useful when an app or workflow specifically requires PNG",
      "Converting does not restore quality already lost to JPG compression",
      "The resulting PNG is usually larger than the original JPG",
      "Runs entirely in your browser — no upload, no signup, no watermark",
    ],
    overview:
      "JPG to PNG Converter re-saves your JPG and JPEG photos into the lossless PNG format. This is the right tool when an app, template, or workflow specifically needs a PNG, or when you want a lossless copy to edit further. Drop in one image or a batch, and download the results individually or as a ZIP. Keep in mind that converting won't recover detail that JPG compression already discarded, and PNG files are usually larger than the JPG they came from. Everything runs in your browser, so your images stay on your device.",

    howToSteps: [
      "Drag and drop your JPG or JPEG images, or click to select them (up to 100 at a time).",
      "Keep the output as PNG, or switch to WebP if you prefer a smaller file.",
      "Each image converts instantly in your browser.",
      "Download each PNG individually, or click Download All to export a ZIP.",
    ],

    features: [
      "Converts JPG and JPEG images to PNG",
      "Lossless PNG output",
      "Optional WebP output via the format selector",
      "Batch conversion for up to 100 images",
      "One-click ZIP export for bulk downloads",
      "Drag-and-drop upload with instant results",
      "Entirely browser-based — fully private, no uploads",
      "Works on desktop and mobile browsers",
      "Free with no account required",
    ],

    useCases: [
      "Provide a PNG when an app, template, or platform requires that format",
      "Create a lossless copy of a JPG before editing it further",
      "Prepare an image for a workflow that adds transparency in an editor",
      "Use a JPG photo in design tools that prefer PNG assets",
      "Standardize a mixed set of images to PNG",
      "Batch-convert a folder of JPGs in one pass",
      "Hand off a PNG to a developer or print workflow that asks for it",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JPG vs PNG: Key Differences</h3>
          <p>
            JPG is a lossy, compressed format with no transparency — great for small photo files. PNG
            is lossless and supports transparency, which makes it ideal for graphics, editing, and any
            workflow that demands a PNG. Converting JPG to PNG gives you a lossless container around
            your existing image.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Does Converting Improve Quality?</h3>
          <p>
            No. JPG compression permanently discards some detail, and converting to PNG cannot bring it
            back — it simply re-saves the current pixels without further loss. PNG prevents additional
            quality loss going forward, but it can&apos;t recover what was already lost.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Will the PNG Be Larger?</h3>
          <p>
            Usually, yes. Because PNG is lossless, the converted file is typically several times larger
            than the JPG it came from, especially for photographs. If you only need a smaller, shareable
            image, JPG or WebP is the better choice.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Transparency: What to Expect</h3>
          <p>
            Converting to PNG does not automatically make the background transparent. Your JPG has a
            solid background, and the PNG will keep it. To remove a background, use a dedicated
            background remover first, then work with the resulting PNG.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Private, In-Browser Conversion</h3>
          <p>
            The conversion runs entirely in your browser using the HTML canvas, so your images are never
            uploaded to a server. That keeps the tool fast and your files private.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Need a transparent background, not just a PNG? Run your image through the Background Remover first, then the result is already a transparent PNG.",

    faqs: [
      {
        question: "What is the difference between JPG and PNG?",
        answer:
          "JPG is lossy and compressed with no transparency, which keeps files small. PNG is lossless and supports transparency, which is better for editing and for workflows that require PNG.",
      },
      {
        question: "Why convert JPG to PNG?",
        answer:
          "Usually because an app, template, or platform specifically needs a PNG, or because you want a lossless copy to edit further without adding more compression.",
      },
      {
        question: "Does converting to PNG improve image quality?",
        answer:
          "No. Detail lost to JPG compression can't be recovered. Converting re-saves the existing pixels losslessly but does not add quality.",
      },
      {
        question: "Will the PNG file be bigger than the JPG?",
        answer:
          "Usually yes. PNG is lossless, so the converted file is often several times larger than the original JPG, especially for photos.",
      },
      {
        question: "Does converting add a transparent background?",
        answer:
          "No. The PNG keeps whatever background the JPG had. To make a background transparent, use a background remover first, then keep the result as PNG.",
      },
      {
        question: "Are my files uploaded anywhere?",
        answer:
          "No. The conversion runs entirely in your browser, so your images stay on your device and are never uploaded.",
      },
      {
        question: "Can I convert several JPGs at once?",
        answer:
          "Yes. Add up to 100 images and convert them in one batch, then download them all together as a ZIP.",
      },
      {
        question: "Is it free and watermark-free?",
        answer:
          "Yes. The converter is completely free with no signup, no watermark, and no usage limits.",
      },
      {
        question: "Can I convert JPG to PNG on Mac, Windows, or iPhone?",
        answer:
          "Yes. It runs in any modern browser, so you can convert JPG to PNG on Windows, Mac, iPhone, Android, or a Chromebook with nothing to install.",
      },
    ],

    relatedTools: [
      { name: "HEIC to JPG Converter", href: "/image-tools/heic-to-jpg" },
      { name: "PNG to JPG Converter", href: "/image-tools/png-to-jpg" },
      { name: "WebP to JPG Converter", href: "/image-tools/webp-to-jpg" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JpgToPngPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <ImageConverter
          defaultTarget="image/png"
          targetOptions={["image/png", "image/webp"]}
          accept={{ "image/jpeg": [".jpg", ".jpeg"] }}
          sourceLabel="JPG"
        />
      )}
    />
  )
}
