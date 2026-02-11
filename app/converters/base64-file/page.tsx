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
    "Free base64 file converter online. Base64 to PDF, base64 to image, base64 encode & decode. File to base64 online. Base64 to excel, xml, docx, zip. Preview & download. No signup.",
  metaTitle: "Free Base64 File Converter Online - Base64 to PDF, Image, Excel, ZIP",
  metaDescription:
    "Free base64 file converter online. Base64 to PDF, base64 to image, base64 encode & decode. File to base64 online with preview. Base64 to excel, xml, docx, zip. Download decoded files. No signup.",
  path: "/converters/base64-file",
  keywords: [
    "base64 file converter online",
    "base64 file converter to pdf",
    "base64 to pdf",
    "base64 encode",
    "base64 decode",
    "file to base64 online",
    "base64 to xml",
    "base64 to excel",
    "base64 to zip",
    "base64 to docx",
    "base64 to image",
    "base64 to file",
    "base64 file converter",
    "base64 decode to file",
    "base64 image converter",
  ],

  header: {
    title: "Base64 File Converter",
    description:
      "Convert a string, file, or image into its Base64 representation. Base64 to file with preview and download, file to Base64 with drag and drop.",
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
      "Free base64 file converter online. Base64 to PDF, base64 to image, base64 encode and decode. File to base64 online. Base64 to excel, xml, docx, zip with preview and download.",
    alternateName: [
      "Base64 File Converter Online",
      "Base64 to PDF Converter",
      "Base64 to File Online",
      "File to Base64 Online",
      "Base64 Encode Decode",
      "Base64 to Image Converter",
    ],
    featureList: [
      "File to Base64 encoding online",
      "Base64 to file with download",
      "Base64 to image with live preview",
      "Base64 to PDF decoder",
      "Base64 to Excel, XML, DOCX, ZIP",
      "Base64 encode and decode",
      "Drag and drop file upload",
      "100% client-side processing",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free base64 file converter online. Convert any file to Base64 (base64 encode) or Base64 to file (base64 decode). Base64 to PDF, base64 to image with preview, base64 to excel, base64 to xml, base64 to docx, base64 to zip. File to base64 online with drag and drop. Download decoded files instantly. No signup required.",

    howToSteps: [
      "File to Base64: Drag and drop a file or click Browse files. The Base64 string appears instantly.",
      "Base64 to file: Paste your Base64 string. Set file name and extension (pdf, png, xlsx, xml, docx, zip, etc.). Click Download file.",
      "Preview image: For Base64 image data, click Preview image to see it before downloading.",
      "Copy the Base64 result with one click.",
    ],

    features: [
      "File to Base64: Drag and drop or browse to encode any file",
      "Base64 to file: Decode and download with custom file name and extension",
      "Base64 to image: Live preview of decoded images",
      "Base64 to PDF: Decode PDF Base64 and download",
      "Base64 to Excel, XML, DOCX, ZIP: Support for documents and archives",
      "Base64 encode & decode: Bidirectional conversion",
      "Drag and drop support for easy file upload",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Base64 to image: Decode image Base64 and preview or download.",
      "Base64 to PDF: Convert Base64 PDF strings to downloadable files.",
      "Base64 to Excel: Decode Base64 Excel (xlsx) to file.",
      "Base64 to XML: Convert Base64 XML strings back to XML files.",
      "Base64 to DOCX: Decode Base64 Word documents.",
      "Base64 to ZIP: Decode Base64 zip archives.",
      "File to Base64: Encode images or documents for data URIs or API payloads.",
      "Email attachments: Encode files for transmission in JSON or XML.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Base64 file conversion encodes binary files (images, PDFs, documents,
          Excel, XML, ZIP) into ASCII text for safe transmission. Use this free
          base64 file converter online to encode files for data URIs, API
          requests, or email. Decode Base64 back to files with preview for
          images and one-click download.
        </p>
      </div>
    ),

    proTip:
      "For data URIs (data:image/png;base64,...), strip the prefix before pasting. The tool auto-detects image format from the Base64 data.",

    faqs: [
      {
        question: "How to convert Base64 to PDF?",
        answer:
          "Paste your Base64 string in the Base64 to File section. Set the file name and choose extension 'pdf'. Click Download file to save the decoded PDF. This free base64 file converter to pdf works entirely in your browser.",
      },
      {
        question: "How to convert file to Base64 online?",
        answer:
          "Drag and drop your file into the File to Base64 section, or click Browse files to select one. The Base64 string appears instantly. Copy it for use in data URIs, APIs, or storage. Works with images, PDFs, Excel, XML, DOCX, ZIP.",
      },
      {
        question: "What is base64 encode and base64 decode?",
        answer:
          "Base64 encode converts binary data (files, images) into ASCII text using A-Z, a-z, 0-9, +, and /. Base64 decode reverses this: it converts Base64 text back into the original file. This tool does both—file to base64 (encode) and base64 to file (decode).",
      },
      {
        question: "How to convert Base64 to image?",
        answer:
          "Paste your Base64 image string in the Base64 to File section. Set extension to png, jpg, gif, or webp. Click Preview image to see the decoded image, or Download file to save it. Supported formats: PNG, JPG, GIF, WebP.",
      },
      {
        question: "How to convert Base64 to Excel?",
        answer:
          "Paste your Base64 string in the Base64 to File section. Set the file name and choose extension 'xlsx' (or xls for older Excel). Click Download file to save the decoded Excel spreadsheet.",
      },
      {
        question: "How to convert Base64 to XML?",
        answer:
          "Paste your Base64 XML string in the Base64 to File section. Set the file name and choose extension 'xml'. Click Download file to save the decoded XML file.",
      },
      {
        question: "How to convert Base64 to ZIP?",
        answer:
          "Paste your Base64 string in the Base64 to File section. Set the file name and choose extension 'zip'. Click Download file to save the decoded ZIP archive.",
      },
      {
        question: "How to convert Base64 to DOCX?",
        answer:
          "Paste your Base64 string in the Base64 to File section. Set the file name and choose extension 'docx'. Click Download file to save the decoded Word document.",
      },
      {
        question: "What is a base64 file converter online?",
        answer:
          "A base64 file converter online is a free web tool that converts files to Base64 (encode) or Base64 to files (decode). You can convert images, PDFs, Excel, XML, DOCX, ZIP and more—all in your browser, no signup required.",
      },
    ],

    additionalContent: [
      {
        heading: "Base64 to PDF",
        content:
          "Use this tool to convert Base64 to PDF. Paste your Base64-encoded PDF string, set the file name and extension to 'pdf', and click Download file. Ideal for decoding PDFs stored in databases, APIs, or data URIs.",
      },
      {
        heading: "File to Base64 Online",
        content:
          "Convert any file to Base64 online with drag and drop. Supported formats include images (PNG, JPG, GIF, WebP), PDFs, Excel (xlsx), XML, Word (docx), and ZIP. The Base64 string is generated instantly—copy it for embedding in HTML, JSON, or API payloads.",
      },
      {
        heading: "Base64 Encode vs Base64 Decode",
        content:
          "Base64 encode (file to base64) turns binary files into text. Base64 decode (base64 to file) turns Base64 text back into the original file. This tool handles both: use the right panel to encode, the left panel to decode.",
      },
      {
        heading: "Supported File Types: PDF, Excel, XML, DOCX, ZIP",
        content:
          "This base64 file converter supports PDF, Excel (xlsx), XML, DOCX, ZIP, and images (PNG, JPG, GIF, WebP, SVG). Paste Base64 and choose the correct extension to download. For images, use Preview to verify before downloading.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Base64FileConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <Base64FileConverter />
        </div>
      )}
    />
  )
}
