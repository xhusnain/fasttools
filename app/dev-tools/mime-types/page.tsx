import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { MimeTypes } from "@/components/dev-tools/mime-types"

const toolConfig = createToolConfig({
  toolName: "MIME Types",
  description:
    "Look up MIME types by file extension, or find common extensions for a MIME type, using the mime-db data set.",
  metaTitle: "MIME Types Lookup - Content-Type by Extension",
  metaDescription:
    "Search MIME types and file extensions. Find Content-Type values for .pdf, .json, .png, .mp4, .csv, and more, or look up extensions for a MIME type.",
  path: "/dev-tools/mime-types",

  header: {
    title: "MIME Types Lookup & Reference",
    description:
      "Search a MIME type to find related extensions, or enter a file extension to find matching Content-Type values. Useful for uploads, APIs, and server config.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "MIME Types", href: "/dev-tools/mime-types" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "MIME type and file extension lookup powered by mime-db, with more than 1,000 MIME entries that have extension mappings and a scrollable reference table.",
    alternateName: [
      "Content-Type Lookup",
      "MIME Type Reference",
      "File Extension to MIME",
      "MIME Type Finder",
      "Content-Type Header Lookup",
    ],
    featureList: [
      "MIME type to extension lookup",
      "File extension to MIME type lookup",
      "Suggestions while typing",
      "More than 1,000 MIME entries with extension mappings from mime-db",
      "Scrollable full reference table",
      "Common Content-Type values such as application/json, text/html, image/png, video/mp4, and application/pdf",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A MIME type is a standardized media type string, such as application/json or image/png, that tells software how to interpret transmitted content.",

    quickAnswer:
      "Enter an extension such as .pdf, .json, .png, .webp, or .mp4 to see matching MIME types, or enter a MIME type such as application/pdf to see common file extensions.",

    keyTakeaways: [
      "Looks up MIME types from extensions and extensions from MIME types.",
      "Uses mime-db entries that include extension mappings.",
      "The table is searchable through the two input fields and scrollable for manual browsing.",
      "Some extensions can map to more than one MIME type depending on ecosystem conventions.",
      "MIME lookup helps configuration, but secure upload validation still requires server-side file inspection.",
    ],

    overview:
      "Use this MIME type lookup when configuring HTTP Content-Type headers, validating upload allow-lists, debugging downloads, setting cloud object metadata, or checking static asset mappings. The tool provides two workflows: MIME type to extension and file extension to MIME type. It also displays the full local reference table so you can browse common application, image, audio, video, text, font, and vendor-specific media types.",

    howToSteps: [
      "Type a MIME type such as application/pdf in the MIME input to see related extensions.",
      "Or type an extension such as .pdf in the extension input to see matching MIME types.",
      "Use the suggestion dropdown if you do not know the exact spelling.",
      "Check the full table for nearby or vendor-specific media types.",
      "Use the selected value in server config, API response headers, upload validation rules, or object metadata.",
    ],

    features: [
      {
        title: "Extension to MIME Lookup",
        description:
          "Enter .json, .pdf, .png, .csv, .mp4, or another extension to see known Content-Type values.",
      },
      {
        title: "MIME to Extension Lookup",
        description:
          "Enter a media type such as image/webp or application/pdf to see common file extensions.",
      },
      {
        title: "Typeahead Suggestions",
        description:
          "The inputs show matching MIME types and extensions as you type, making it easier to find long vendor-prefixed values.",
      },
      {
        title: "Full Reference Table",
        description:
          "Browse the local MIME-to-extension table directly when you need to compare related media types.",
      },
    ],

    useCases: [
      "Set accurate Content-Type headers for API responses.",
      "Configure Nginx, Apache, CDN, or cloud storage MIME metadata.",
      "Build upload allow-lists for images, PDFs, CSVs, archives, and documents.",
      "Debug files that download instead of opening in the browser.",
      "Check extension mappings before generating signed upload URLs.",
    ],

    aboutTool:
      "MIME type lookup is configuration help, not a security boundary. Browsers and clients can send misleading Content-Type headers, and file extensions can be renamed. For user uploads, verify file signatures server-side, scan risky formats, and store user-provided files with safe Content-Disposition behavior when appropriate.",

    proTip:
      "For uploads, allow-list the MIME types you accept but also inspect the actual file bytes. Content-Type alone is easy for a client to fake.",

    faqs: [
      {
        question: "What is the MIME type for JSON?",
        answer:
          "The standard MIME type for JSON is application/json.",
      },
      {
        question: "What is the MIME type for PDF?",
        answer:
          "PDF files commonly use application/pdf.",
      },
      {
        question: "Can one extension have multiple MIME types?",
        answer:
          "Yes. Some extensions have multiple mappings because different systems, standards, or legacy conventions use different media types.",
      },
      {
        question: "Can I trust the MIME type sent by a browser?",
        answer:
          "No. Treat client-supplied MIME types as hints only. Validate uploaded files on the server using byte signatures and your own allow-list.",
      },
      {
        question: "Does this tool detect the MIME type of an uploaded file?",
        answer:
          "No. It is a lookup table, not a file analyzer. It does not inspect uploaded file bytes.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MimeTypesPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MimeTypes />
        </div>
      )}
    />
  )
}
