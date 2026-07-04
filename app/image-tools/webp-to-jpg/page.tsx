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
  toolName: "WebP to JPG Converter",
  description:
    "Convert WebP images to JPG or PNG in your browser. Batch up to 100 files, adjustable quality, and ZIP download — no upload, no signup, no watermark.",
  metaTitle: "WebP to JPG Converter — Free, No Upload Needed",
  metaDescription:
    "Free WebP to JPG converter. Change WebP images to JPG or PNG in your browser with quality control, batch processing, and ZIP download. No upload, no signup.",
  path: "/image-tools/webp-to-jpg",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based WebP to JPG converter with optional PNG output, adjustable quality, batch processing, and ZIP download. Convert WebP for universal compatibility.",
    alternateName: [
      "WebP to JPEG Converter",
      "WebP to PNG Converter",
      "Convert WebP to JPG",
      "Convert WebP to JPG Online Free",
      "Change WebP to JPG",
    ],
    featureList: [
      "Convert WebP images to JPG",
      "Optional PNG output to keep transparency",
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
    title: "WebP to JPG Converter Online",
    description:
      "Convert WebP images to JPG or PNG directly in your browser. Adjust quality, batch convert, and download — nothing is uploaded to a server.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "WebP to JPG", href: "/image-tools/webp-to-jpg" },
  ],

  content: {
    definition:
      "A WebP to JPG converter is a free tool that turns Google's modern WebP image format into JPG (JPEG) or PNG so the images open in any app, editor, or upload form.",
    quickAnswer:
      "Drag your WebP files into the tool, choose JPG or PNG output, adjust the quality if needed, and download each result or all of them as a ZIP. Conversion runs in your browser, so files are never uploaded.",
    keyTakeaways: [
      "Converts WebP images to JPG, with optional PNG output",
      "Choose PNG to preserve transparency, or JPG for the smallest, most compatible file",
      "JPG output fills any transparent areas with white",
      "Batch convert up to 100 images and download them as a ZIP",
      "Runs entirely in your browser — no upload, no signup, no watermark",
    ],
    overview:
      "WebP to JPG Converter changes WebP images into the formats every program understands. WebP is efficient and common on the web, but plenty of editors, Office apps, and upload forms still reject it — so this tool converts your WebP files to JPG (or PNG) that work anywhere. Drop in a single image or a batch, pick the output format, fine-tune quality, and download the results individually or as a ZIP. Everything is processed in your browser, so your images stay on your device.",

    howToSteps: [
      "Drag and drop your WebP images, or click to select them (up to 100 at a time).",
      "Choose JPG (smallest, most compatible) or PNG (keeps transparency) and adjust quality.",
      "Each image converts instantly in your browser.",
      "Download each file individually, or click Download All to export a ZIP.",
    ],

    features: [
      "Converts WebP images to JPG",
      "Optional PNG output to preserve transparency",
      "Quality slider to balance clarity against file size",
      "Batch conversion for up to 100 images",
      "One-click ZIP export for bulk downloads",
      "Drag-and-drop upload with instant results",
      "Entirely browser-based — fully private, no uploads",
      "Works on desktop and mobile browsers",
      "Free with no account required",
    ],

    useCases: [
      "Open WebP images saved from websites in apps that don't support them",
      "Edit WebP files in software that only accepts JPG or PNG",
      "Insert images into Office documents and presentations",
      "Upload to forms and marketplaces that reject WebP",
      "Convert downloaded WebP graphics into a shareable JPG",
      "Batch-convert a folder of WebP files in one pass",
      "Keep transparency by exporting WebP graphics to PNG",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is WebP and Why Convert It</h3>
          <p>
            WebP is a modern image format created by Google that compresses smaller than JPG or PNG and
            is widely used across the web. The catch is compatibility: many older programs, photo
            editors, Office apps, and some upload forms still don&apos;t accept WebP. Converting to JPG
            or PNG gives you a file that works everywhere.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">WebP to JPG vs WebP to PNG</h3>
          <p>
            Pick JPG when you want the smallest, most universally accepted file — ideal for photos.
            Pick PNG when your WebP has transparency you need to keep, since JPG can&apos;t store
            transparency and will fill those areas with white. Both options are available in the format
            selector.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Browser-Based and Private</h3>
          <p>
            The conversion runs entirely in your browser using the HTML canvas. Your images are never
            uploaded to a server, which keeps the tool fast and your files private.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Converting WebP in Bulk</h3>
          <p>
            Add up to 100 WebP images at once and convert them together. The Download All button packs
            every converted file into one ZIP, so you don&apos;t have to save them individually.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Compatibility Everywhere</h3>
          <p>
            Once converted, your JPG or PNG opens on Windows, Mac, Android, and iPhone, and slots into
            editors, documents, and upload forms that wouldn&apos;t accept the original WebP.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If your WebP has a transparent background, choose PNG to keep it. Choose JPG only when you want the smallest possible file and a solid background is fine.",

    faqs: [
      {
        question: "What is a WebP file?",
        answer:
          "WebP is a modern image format from Google that compresses smaller than JPG or PNG and is common on websites. It supports both lossy and lossless modes and transparency.",
      },
      {
        question: "Why won't WebP open in my app?",
        answer:
          "Many older programs, photo editors, and Office apps don't support WebP yet. Converting it to JPG or PNG creates a file those apps can open.",
      },
      {
        question: "Should I choose JPG or PNG output?",
        answer:
          "Choose JPG for the smallest, most compatible file, ideal for photos. Choose PNG if your WebP has transparency you want to keep, since JPG fills transparent areas with white.",
      },
      {
        question: "Are my files uploaded to a server?",
        answer:
          "No. The conversion happens entirely in your browser, so your images stay on your device and are never uploaded.",
      },
      {
        question: "Can I convert multiple WebP files at once?",
        answer:
          "Yes. Add up to 100 images in a single batch and download every converted file together as a ZIP.",
      },
      {
        question: "Will converting reduce the quality?",
        answer:
          "Converting to PNG is lossless. Converting to JPG is compressed, but the quality slider lets you keep it high or trade some quality for a smaller file.",
      },
      {
        question: "Is the tool free?",
        answer:
          "Yes. It's completely free with no signup, no watermark, and no usage limits.",
      },
      {
        question: "Does converting from WebP lose detail?",
        answer:
          "Choosing PNG preserves the WebP's pixels losslessly. Choosing JPG applies compression based on your quality setting, which at high settings is visually very close to the original.",
      },
      {
        question: "Can I convert WebP to JPG on iPhone, Android, Mac, or Windows?",
        answer:
          "Yes. The converter runs in your browser, so it works on Windows, Mac, iPhone, Android, and Chromebook — handy for saving WebP images you downloaded on a phone.",
      },
    ],

    relatedTools: [
      { name: "HEIC to JPG Converter", href: "/image-tools/heic-to-jpg" },
      { name: "PNG to JPG Converter", href: "/image-tools/png-to-jpg" },
      { name: "JPG to PNG Converter", href: "/image-tools/jpg-to-png" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WebpToJpgPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <ImageConverter
          defaultTarget="image/jpeg"
          targetOptions={["image/jpeg", "image/png"]}
          accept={{ "image/webp": [".webp"] }}
          sourceLabel="WebP"
        />
      )}
    />
  )
}
