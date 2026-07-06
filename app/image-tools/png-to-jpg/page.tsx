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
  toolName: "PNG to JPG Converter",
  description:
    "Convert PNG images to JPG in your browser with an adjustable quality slider. Batch up to 100 files and download a ZIP — no upload, no signup, no watermark.",
  metaTitle: "PNG to JPG Converter — Free, Fast, No Upload",
  metaDescription:
    "Free PNG to JPG converter. Change PNG images to JPG in your browser with quality control, batch processing, and ZIP download. No upload, no signup.",
  path: "/image-tools/png-to-jpg",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based PNG to JPG converter with adjustable quality, batch processing, optional WebP output, and ZIP download. Transparent areas are flattened onto white.",
    alternateName: [
      "PNG to JPEG Converter",
      "Convert PNG to JPG",
      "Convert PNG to JPG Online Free",
      "Change PNG to JPG",
      "PNG to JPG Online",
      "PNG to JPG Free",
      "PNG to JPG Batch Converter",
      "Bulk PNG to JPG Converter",
      "Transparent PNG to JPG",
      "PNG to JPG No Upload",
      "PNG to JPG Without Losing Quality",
      "PNG Image to JPG",
      "PNG to JPG Converter Online",
      "Turn PNG into JPG",
    ],
    featureList: [
      "Convert PNG images to JPG",
      "Optional WebP output",
      "Adjustable JPG quality slider",
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
    title: "PNG to JPG Converter Online",
    description:
      "Change PNG images to JPG directly in your browser. Adjust quality, batch convert, and download — nothing is uploaded to a server.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "PNG to JPG", href: "/image-tools/png-to-jpg" },
  ],

  content: {
    definition:
      "A PNG to JPG converter is a free tool that turns lossless PNG images into smaller, widely compatible JPG (JPEG) files, flattening any transparency onto a white background.",
    quickAnswer:
      "Drag your PNG files into the tool, adjust the JPG quality if you want a smaller file, and download each result or all of them as a ZIP. Everything runs in your browser, so files are never uploaded.",
    keyTakeaways: [
      "Converts PNG images to JPG with adjustable quality",
      "JPG files are usually much smaller than the original PNG",
      "Transparent areas are filled with white because JPG has no transparency",
      "Batch convert up to 100 images and download them as a ZIP",
      "Runs entirely in your browser — no upload, no signup, no watermark",
    ],
    overview:
      "PNG to JPG Converter changes PNG images into JPG files that are smaller and accepted by virtually every site, app, and upload form. Drop in a single image or a full batch, use the quality slider to balance clarity against file size, and download the results one by one or all together as a ZIP. Because PNG supports transparency and JPG does not, any transparent areas are flattened onto a white background during conversion. The whole process runs in your browser, so your images stay on your device.",

    howToSteps: [
      "Drag and drop your PNG images, or click to select them (up to 100 at a time).",
      "Keep the output as JPG, or switch to WebP, and adjust the quality slider.",
      "Each image converts instantly in your browser.",
      "Download each JPG individually, or click Download All to export a ZIP.",
    ],

    features: [
      "Converts PNG images to JPG",
      "Optional WebP output via the format selector",
      "Quality slider for visual quality vs file size",
      "Batch conversion for up to 100 images",
      "One-click ZIP export for bulk downloads",
      "Drag-and-drop upload with instant results",
      "Entirely browser-based — fully private, no uploads",
      "Works on desktop and mobile browsers",
      "Free with no account required",
    ],

    useCases: [
      "Shrink large PNG screenshots before emailing or uploading",
      "Meet upload forms and portals that only accept JPG",
      "Reduce image weight on a website for faster loading",
      "Prepare product photos for marketplaces that prefer JPG",
      "Convert exported graphics and logos into a shareable JPG",
      "Batch-convert a folder of PNG exports in one pass",
      "Lighten images for chat, CRM, or document attachments",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">PNG vs JPG: What Changes</h3>
          <p>
            PNG is a lossless format that preserves every pixel and supports transparency, which makes
            it great for graphics and screenshots but often results in large files. JPG uses lossy
            compression to produce much smaller files, at the cost of transparency support. Converting
            PNG to JPG is the right move when you want a smaller, universally accepted image.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Happens to Transparency</h3>
          <p>
            JPG cannot store transparency. When a PNG has transparent areas, those pixels are filled
            with a white background during conversion. If you need to keep transparency, convert to
            WebP instead, or keep the file as PNG.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Convert PNG to JPG</h3>
          <p>
            The most common reasons are file size and compatibility: JPG photos are usually far smaller
            than the same image as PNG, and many upload forms, email systems, and platforms expect JPG.
            Photographs and detailed images in particular compress very efficiently as JPG.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Private, Browser-Based Conversion</h3>
          <p>
            Conversion happens entirely in your browser using the HTML canvas, so your images never get
            uploaded to a server. That keeps the process fast and keeps your files private.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Batch Converting PNG Files</h3>
          <p>
            Add up to 100 PNGs at once and let them convert together. Use Download All to grab every
            JPG in a single ZIP instead of saving them one at a time.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Converting a logo or graphic with a transparent background? Expect a white box behind it in JPG — switch the output to WebP if you need to keep transparency.",

    faqs: [
      {
        question: "What is the difference between PNG and JPG?",
        answer:
          "PNG is lossless and supports transparency, which keeps quality high but makes files larger. JPG uses lossy compression for much smaller files but has no transparency. JPG is best for photos and wide compatibility.",
      },
      {
        question: "Why should I convert PNG to JPG?",
        answer:
          "Mainly for smaller file sizes and compatibility. JPG files are usually far smaller than PNGs, and many upload forms, emails, and platforms expect JPG.",
      },
      {
        question: "What happens to a transparent background?",
        answer:
          "JPG can't store transparency, so transparent areas are filled with a white background during conversion. Convert to WebP instead if you need to preserve transparency.",
      },
      {
        question: "Will converting reduce the file size?",
        answer:
          "Usually yes, especially for photos and detailed images. You can lower the quality slider for an even smaller file.",
      },
      {
        question: "Are my files uploaded anywhere?",
        answer:
          "No. The conversion runs entirely in your browser, so your images stay on your device and are never uploaded.",
      },
      {
        question: "Can I convert several PNG files at once?",
        answer:
          "Yes. Add up to 100 images and convert them in one batch, then download them all together as a ZIP.",
      },
      {
        question: "Will the image quality drop?",
        answer:
          "JPG is a compressed format, but the quality slider lets you control it. Keep it high for near-identical results, or lower it when you need a smaller file.",
      },
      {
        question: "Is it free and watermark-free?",
        answer:
          "Yes. The converter is completely free with no signup, no watermark, and no usage limits.",
      },
      {
        question: "Can I convert PNG to JPG on iPhone, Mac, or Windows?",
        answer:
          "Yes. It runs in any modern browser, so you can convert PNG to JPG on Windows, Mac, iPhone, Android, or a Chromebook with nothing to install.",
      },
    ],

    relatedTools: [
      { name: "HEIC to JPG Converter", href: "/image-tools/heic-to-jpg" },
      { name: "WebP to JPG Converter", href: "/image-tools/webp-to-jpg" },
      { name: "JPG to PNG Converter", href: "/image-tools/jpg-to-png" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PngToJpgPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <ImageConverter
          defaultTarget="image/jpeg"
          targetOptions={["image/jpeg", "image/webp"]}
          accept={{ "image/png": [".png"] }}
          sourceLabel="PNG"
        />
      )}
    />
  )
}
