import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { MimeTypes } from "@/components/dev-tools/mime-types"

const toolConfig = createToolConfig({
  toolName: "MIME Types",
  description:
    "Lookup MIME types and file extensions for upload validation, response headers, and API integration work.",
  metaTitle: "MIME Types Lookup (Extension and Content-Type)",
  metaDescription:
    "Find MIME type mappings for common file extensions and verify Content-Type values for web and API workflows.",
  path: "/dev-tools/mime-types",
  keywords: [
    "mime types",
    "content type lookup",
    "extension to mime",
    "mime type list",
    "http content type",
  ],

  header: {
    title: "MIME Types",
    description:
      "Map file extensions to MIME types and verify content-type values quickly.",
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
    overview:
      "Use this tool to validate file extension and MIME type mappings before configuring uploads, downloads, and response headers. It helps reduce content-type mistakes in backend and frontend implementations.",

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
