import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const Base64FileConverter = dynamic(
  () =>
    import("@/components/converters/base64-file-converter").then(
      (mod) => mod.Base64FileConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Base64 File Converter",
  description:
    "Encode files to Base64 and decode Base64 strings back to downloadable files.",
  metaTitle: "Base64 File Converter (Encode and Decode)",
  metaDescription:
    "Free Base64 file converter for encoding files and decoding Base64 into downloadable output with optional image preview.",
  path: "/converters/base64-file",
  keywords: [
    "base64 file converter",
    "base64 encode file",
    "base64 decode file",
    "base64 to file",
    "file to base64",
    "base64 image preview",
  ],

  header: {
    title: "Base64 File Converter",
    description:
      "Convert files to Base64 and convert Base64 data back into files in one workflow.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Base64 File Converter", href: "/converters/base64-file" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Base64 file converter for encoding and decoding in the browser.",
    alternateName: ["File to Base64 Converter", "Base64 to File Converter"],
    featureList: [
      "File to Base64 encoding",
      "Base64 to file decoding",
      "Download decoded output",
      "Image preview for supported inputs",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Base64 File Converter is a free tool that encodes files into Base64 strings and decodes Base64 strings back into downloadable files.",
    quickAnswer:
      "Upload a file to get its Base64 string, or paste a Base64 string to reconstruct the original file. Supports images, PDFs, documents, and any binary file. Copy the data URI or download the decoded file.",
    keyTakeaways: [
      "Encodes any file type into a Base64 text string",
      "Decodes Base64 strings back into downloadable files",
      "Generates data URIs for embedding images in HTML/CSS",
      "Base64 encoding increases file size by approximately 33%",
      "All processing happens in your browser — no file uploads to servers",
    ],
    overview:
      "This converter handles both directions: file to Base64 and Base64 to file. It is useful for API payload prep, data URI handling, and quickly reconstructing files from encoded strings.",

    howToSteps: [
      "To decode: paste Base64 data, set filename and extension, then download.",
      "To encode: upload a file and copy the generated Base64 output.",
      "Use image preview when the decoded data is an image.",
      "Copy results for integration into code, configs, or requests.",
    ],

    features: [
      "Two-way Base64 encode/decode",
      "Drag-and-drop file upload",
      "Decoded file download",
      "Image preview support",
      "Filename and extension controls",
      "Browser-based processing",
    ],

    useCases: [
      "Preparing API payloads with embedded file data",
      "Decoding Base64 strings into real files",
      "Checking data URI content",
      "Moving binary content through text-based systems",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Base64 encoding turns binary data into text so it can be transmitted in
          systems that expect plain text. This tool helps you switch between the
          two formats quickly without extra setup.
        </p>
      </div>
    ),

    proTip:
      "If your Base64 input includes a data URI prefix, paste the full value and let the tool normalize it.",

    faqs: [
      {
        question: "Can I convert Base64 to downloadable files?",
        answer:
          "Yes. Paste Base64 data, choose file extension, and download the decoded file.",
      },
      {
        question: "Can I encode any file into Base64?",
        answer:
          "Yes. Upload a file in the encode section and the tool outputs Base64 text.",
      },
      {
        question: "Does it support image preview?",
        answer:
          "Yes. For image-compatible decoded data, you can preview before downloading.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is free and does not require signup.",
      },
      {
        question: "Is conversion local?",
        answer: "Yes. Conversion is performed in your browser.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Base64FileConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <Base64FileConverter />
        </div>
      )}
    />
  )
}
