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
  toolName: "HEIC to JPG Converter",
  description:
    "Convert HEIC and HEIF photos from your iPhone or iPad to JPG in your browser. Batch up to 100 images, adjustable quality, and ZIP download — no upload required.",
  metaTitle: "HEIC to JPG Converter — Free iPhone Photo Converter",
  metaDescription:
    "Free HEIC to JPG converter. Turn iPhone HEIC/HEIF photos into JPG right in your browser — batch convert, no upload, no signup, no watermark.",
  path: "/image-tools/heic-to-jpg",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Browser-based HEIC to JPG converter for iPhone and iPad photos with batch processing, quality control, optional PNG output, and ZIP download. No upload required.",
    alternateName: [
      "HEIC to JPEG Converter",
      "Convert HEIC to JPG",
      "Convert HEIC to JPG Online Free",
      "HEIC to JPG Converter Free Online",
      "HEIC File Converter",
    ],
    featureList: [
      "Convert HEIC and HEIF photos to JPG",
      "Optional PNG output",
      "Adjustable JPG quality",
      "Batch convert up to 100 images at once",
      "ZIP download for batch output",
      "Drag-and-drop upload",
      "100% browser-based — photos are never uploaded",
      "Works on Windows, Mac, Android, and iPhone browsers",
      "Free, no signup, no watermark, no usage limits",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "HEIC to JPG Converter (iPhone Photos)",
    description:
      "Convert HEIC and HEIF photos to JPG directly in your browser. Drag in your iPhone photos, adjust quality, and download — nothing is uploaded.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
    { label: "HEIC to JPG", href: "/image-tools/heic-to-jpg" },
  ],

  content: {
    definition:
      "A HEIC to JPG converter is a free tool that changes Apple's HEIC/HEIF photo files into the universally compatible JPG (JPEG) format so they open and share anywhere.",
    quickAnswer:
      "Drag your iPhone HEIC photos into the tool, optionally adjust the JPG quality, and download each result or all of them as a ZIP. Conversion happens entirely in your browser, so your photos are never uploaded.",
    keyTakeaways: [
      "Converts HEIC and HEIF (the default iPhone photo format) into standard JPG",
      "Runs fully in your browser — photos never leave your device",
      "Batch convert up to 100 photos and download them as a ZIP",
      "Adjustable JPG quality, with an optional PNG output",
      "Free with no signup, no watermark, and no usage limits",
    ],
    overview:
      "HEIC to JPG Converter turns the HEIC and HEIF photos your iPhone or iPad captures into JPG files that open everywhere — on Windows, older Android phones, websites, email, and editing software that can't read Apple's format. Drop in one photo or a whole batch, fine-tune the quality if you want a smaller file, and download the results individually or all at once in a ZIP. Because the conversion runs in your browser using WebAssembly, your photos are processed on your own device and are never sent to a server.",

    howToSteps: [
      "Drag and drop your HEIC or HEIF photos, or click to select them (up to 100 at a time).",
      "Leave the output as JPG, or switch to PNG, and adjust the quality slider if needed.",
      "Wait a moment while each photo converts in your browser.",
      "Download each JPG individually, or click Download All to export a ZIP.",
    ],

    features: [
      "Converts HEIC and HEIF photos to JPG",
      "Optional PNG output via the format selector",
      "Quality slider to balance clarity against file size",
      "Batch conversion for up to 100 photos at once",
      "One-click ZIP export for bulk downloads",
      "Drag-and-drop upload with instant conversion",
      "Entirely browser-based — no uploads, fully private",
      "Works on desktop and mobile browsers",
      "Free to use with no account required",
    ],

    useCases: [
      "Open iPhone photos on a Windows PC that can't read HEIC",
      "Upload pictures to websites and forms that only accept JPG",
      "Share photos with friends or colleagues on older Android devices",
      "Attach images to email and documents in a universal format",
      "Prepare iPhone photos for editors and apps that don't support HEIC",
      "Batch-convert an entire camera roll export in one pass",
      "Post photos to marketplaces and social platforms without format errors",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Convert HEIC to JPG?</h3>
          <p>
            Since iOS 11, iPhones and iPads save photos as HEIC (High Efficiency Image Container). It
            stores great quality in a smaller file, but it isn&apos;t supported everywhere. Many
            Windows applications, older Android phones, websites, email clients, and editors still
            can&apos;t open HEIC. Converting to JPG gives you a file that works virtually anywhere.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Is It Safe and Private?</h3>
          <p>
            Yes. The conversion runs entirely inside your browser using WebAssembly, so your photos
            stay on your own device and are never uploaded to a server. That makes the tool suitable
            for personal photos and any images you&apos;d rather not send to a third party.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HEIC vs JPG Quality</h3>
          <p>
            HEIC and JPG are both compressed formats. Converting produces a normal JPG at the quality
            you choose with the slider. For everyday sharing, the default setting keeps photos looking
            sharp while staying compatible. Lower the quality only if you specifically need a smaller
            file.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Batch Converting iPhone Photos</h3>
          <p>
            You can drop in up to 100 photos at once. Each one converts in your browser, and the
            Download All button bundles every result into a single ZIP — handy after exporting a large
            batch from your camera roll, AirDrop, or iCloud.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Works on Windows, Mac, Android, and iPhone</h3>
          <p>
            Because it&apos;s a browser tool, there&apos;s nothing to install. Open it on a Windows PC,
            a Mac, an Android phone, or even directly on your iPhone, and convert HEIC to JPG the same
            way on any device.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Converting straight from your iPhone? Open this page in Safari, AirDrop or save the HEIC photos to Files first, then drop them in — no computer needed.",

    faqs: [
      {
        question: "What is a HEIC file?",
        answer:
          "HEIC (High Efficiency Image Container) is the photo format iPhones and iPads have used by default since iOS 11. It keeps high quality in a smaller file than JPG, but it isn't supported by every device or app.",
      },
      {
        question: "Why won't my HEIC photos open?",
        answer:
          "Many Windows programs, older Android phones, websites, and editors can't read HEIC. Converting the photo to JPG creates a universally compatible file that opens almost anywhere.",
      },
      {
        question: "Are my photos uploaded to a server?",
        answer:
          "No. The conversion runs entirely in your browser, so your photos are processed on your own device and never leave it.",
      },
      {
        question: "Will converting to JPG reduce the quality?",
        answer:
          "Any JPG is compressed, but the quality slider lets you control the tradeoff. The default setting keeps photos looking sharp; lower it only if you need a smaller file size.",
      },
      {
        question: "Can I convert many photos at once?",
        answer:
          "Yes. You can add up to 100 photos in a single batch and download all of the converted JPGs together as a ZIP file.",
      },
      {
        question: "Does this work on Windows and Android?",
        answer:
          "Yes. It runs in any modern browser on Windows, Mac, Android, and iPhone — there is nothing to install.",
      },
      {
        question: "How do I open or view HEIC files on Windows?",
        answer:
          "Windows 10 and 11 often can't open HEIC without an extra codec. The simplest fix is to convert the file to JPG here — drop your HEIC photo in, and you get a JPG that opens in Photos, Paint, Office, and any browser on Windows.",
      },
      {
        question: "Is HEIC to JPG the same as HEIC to JPEG?",
        answer:
          "Yes. JPG and JPEG are two names for the same image format — the only difference is the file extension. Converting HEIC to JPG and HEIC to JPEG produce the identical result.",
      },
      {
        question: "Can I get a PNG instead of a JPG?",
        answer:
          "Yes. Use the format selector to switch the output to PNG before downloading. JPG is the default because it's smaller and the most widely accepted.",
      },
      {
        question: "Is there a watermark or a limit?",
        answer:
          "No. The tool is completely free with no watermark, no signup, and no usage limits.",
      },
    ],

    relatedTools: [
      { name: "PNG to JPG Converter", href: "/image-tools/png-to-jpg" },
      { name: "WebP to JPG Converter", href: "/image-tools/webp-to-jpg" },
      { name: "JPG to PNG Converter", href: "/image-tools/jpg-to-png" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HeicToJpgPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <ImageConverter
          defaultTarget="image/jpeg"
          targetOptions={["image/jpeg", "image/png"]}
          accept={{ "image/heic": [".heic"], "image/heif": [".heif"] }}
          sourceLabel="HEIC"
        />
      )}
    />
  )
}
