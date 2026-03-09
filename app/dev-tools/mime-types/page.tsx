import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { MimeTypes } from "@/components/dev-tools/mime-types"

const toolConfig = createToolConfig({
  toolName: "MIME Types",
  description:
    "Lookup MIME types and file extensions for upload validation, response headers, and API integration work.",
  metaTitle: "MIME Types Lookup — Find Content-Type by File Extension Free (2026)",
  metaDescription:
    "Free MIME type lookup tool. Search file extensions to find Content-Type values, or search MIME types to find extensions. Complete reference for web and API Content-Type headers.",
  path: "/dev-tools/mime-types",

  header: {
    title: "MIME Types Lookup & Reference",
    description:
      "Search file extensions to find their MIME Content-Type values, or look up MIME types to find associated extensions. Complete reference for HTTP headers, file uploads, and API responses.",
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
      "MIME type and extension lookup utility for web servers, APIs, and upload validation workflows.",
    featureList: [
      "MIME type lookup",
      "Extension mapping",
      "Content-Type validation",
      "Upload and API workflow support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A MIME Type Lookup Tool is a free tool that identifies the correct MIME type for any file extension and looks up file extensions for any MIME type.",
    quickAnswer:
      "Enter a file extension (e.g., .pdf, .json, .mp4) to find its MIME type, or enter a MIME type to find matching extensions. Covers 800+ registered MIME types from the IANA registry.",
    keyTakeaways: [
      "Looks up MIME types by file extension and extensions by MIME type",
      "Covers 800+ IANA-registered media types",
      "Common types: application/json, text/html, image/png, video/mp4",
      "MIME types are required in HTTP Content-Type headers and file uploads",
      "Searchable reference table with categories: text, image, audio, video, application",
    ],
    overview:
      "Look up MIME types by file extension or search for extensions by MIME type with this free reference tool. MIME types (Content-Type values) tell browsers and APIs how to handle files — using the wrong type can break file downloads, uploads, and API responses. Search for common types like application/json, text/html, image/png, or video/mp4, or enter a file extension (.pdf, .csv, .webp) to find the correct Content-Type header value. Essential for web server MIME mappings, API response headers, and file upload validation.",

    howToSteps: [
      "Enter a file extension to find matching MIME types.",
      "Or enter a MIME type to check common extensions.",
      "Confirm mapping before updating server or API config.",
      "Copy values for implementation in your codebase.",
    ],

    features: [
      "Extension-to-MIME lookup",
      "MIME-to-extension lookup",
      "Useful for Content-Type validation",
      "Quick reference for upload workflows",
      "Browser-based utility",
    ],

    useCases: [
      "Upload validation rules",
      "API response header checks",
      "Static asset server configuration",
      "Debugging file handling issues",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          MIME mapping pages perform best when they provide fast, predictable
          lookups. This page is optimized for practical developer intent rather
          than generic reference copy.
        </p>
        <p>
          It helps teams align client and server behavior by validating content
          types before deployment.
        </p>
      </div>
    ),

    proTip:
      "Always validate MIME type checks server-side even when client-side upload filters are in place.",

    faqs: [
      {
        question: "What is a MIME type?",
        answer:
          "A MIME type identifies the format of transmitted content, such as application/json or image/png.",
      },
      {
        question: "Why do MIME types matter in APIs?",
        answer:
          "They tell clients how to interpret responses and help prevent content handling errors.",
      },
      {
        question: "Can one extension map to multiple MIME types?",
        answer:
          "Yes. Some formats have multiple valid values depending on system conventions.",
      },
      {
        question: "Is this useful for upload validation?",
        answer:
          "Yes. It helps confirm allowed file types and expected content-type headers.",
      },
      {
        question: "Does this replace server security checks?",
        answer:
          "No. MIME lookup supports configuration, but file validation and scanning should still run server-side.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
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
