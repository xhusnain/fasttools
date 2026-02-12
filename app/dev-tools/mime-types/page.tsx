import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { MimeTypes } from "@/components/dev-tools/mime-types"

const toolConfig = createToolConfig({
  toolName: "MIME Types",
  description:
    "MIME types list. Convert MIME types to file extensions and vice-versa. mime types pdf, mime types for images, mime types excel. mime-types npm alternative. json mime type. Free.",
  metaTitle: "MIME Types - List, Lookup & Converter | mime types pdf, images, excel",
  metaDescription:
    "Complete MIME types list. Convert MIME types to file extensions and vice-versa. mime types pdf, mime types for images, mime types excel, json mime type. mime-types npm alternative. Free.",
  path: "/dev-tools/mime-types",

  header: {
    title: "MIME types",
    description:
      "Convert MIME types to file extensions and vice-versa.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "MIME Types", href: "/dev-tools/mime-types" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "MIME types list and converter. Convert MIME types to file extensions, file extension to mime type. mime types pdf, mime types for images, mime types excel.",
    alternateName: [
      "MIME Types List",
      "MIME Type Lookup",
      "mime-types npm",
      "File Extension to MIME Type",
      "MIME Type Converter",
    ],
    featureList: [
      "mime types list - Complete IANA-backed database",
      "MIME type to extension converter",
      "File extension to mime type lookup",
      "mime types pdf, mime types for images, mime types excel",
      "json mime type, mime types javascript, mime types react",
      "mime types nginx reference",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "MIME types (Multipurpose Internet Mail Extensions) are standardized labels that define the nature of files transmitted over the internet. Use this mime types list to convert MIME types to file extensions and vice-versa. mime types pdf (application/pdf), mime types for images (image/jpeg, image/png), mime types excel (application/vnd.ms-excel), json mime type (application/json). mime-types npm alternative in browser. mime types javascript, mime types react, mime types nginx reference. Free.",

    howToSteps: [
      "MIME type to extension: Enter a MIME type (e.g. application/pdf) to see associated file extensions (.pdf).",
      "File extension to mime type: Enter an extension (e.g. .pdf, .json) to see the MIME type.",
      "Browse the full mime types list in the table below. Search by typing in the inputs.",
    ],

    features: [
      "mime types list: Complete IANA-backed MIME types database",
      "MIME type to extension: Know which extensions map to a MIME type",
      "File extension to mime type: Lookup MIME type for any extension",
      "mime types pdf: application/pdf",
      "mime types for images: image/jpeg, image/png, image/gif, image/webp, image/svg+xml",
      "mime types excel: application/vnd.ms-excel, .xlsx, .xls",
      "json mime type: application/json for .json files",
      "mime types javascript: application/javascript for .js, .mjs",
      "mime types nginx: Reference for nginx mime.types configuration",
    ],

    useCases: [
      "mime types nginx: Configure correct Content-Type headers in nginx.conf",
      "mime types for images: Set proper MIME types for image uploads (image/jpeg, image/png)",
      "mime types excel: Handle .xlsx, .xls file uploads with correct MIME type",
      "json mime type: Validate API responses use application/json",
      "mime types react: Set correct Content-Type in fetch/axios requests",
      "mime-types npm: Browser-based alternative to the mime-types npm package",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          MIME types are two-part identifiers (type/subtype) such as text/html,
          image/png, application/pdf. This tool provides a complete mime types
          list based on the IANA registry. mime types pdf is application/pdf.
          mime types for images include image/jpeg (.jpg), image/png (.png),
          image/gif (.gif). mime types excel: application/vnd.ms-excel (.xls),
          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
          (.xlsx). json mime type is application/json. Use for mime types
          nginx config, mime types javascript Content-Type headers, or as
          mime-types npm alternative.
        </p>
      </div>
    ),

    proTip:
      "For nginx: include /etc/nginx/mime.types or use this list to build custom types. For Node.js, mime-types npm package uses the same database.",

    faqs: [
      {
        question: "What are MIME types?",
        answer:
          "MIME types (Multipurpose Internet Mail Extensions) are standardized labels like text/html, image/png, application/pdf that define file format. Browsers and servers use them in Content-Type headers to know how to handle files.",
      },
      {
        question: "What is the mime type for PDF?",
        answer:
          "mime types pdf: application/pdf. The file extension is .pdf.",
      },
      {
        question: "What are mime types for images?",
        answer:
          "mime types for images: image/jpeg (.jpg, .jpeg), image/png (.png), image/gif (.gif), image/webp (.webp), image/svg+xml (.svg).",
      },
      {
        question: "What is the json mime type?",
        answer:
          "json mime type is application/json. Used for .json files and API responses.",
      },
      {
        question: "What are mime types excel?",
        answer:
          "mime types excel: application/vnd.ms-excel (.xls), application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (.xlsx).",
      },
      {
        question: "How to configure mime types nginx?",
        answer:
          "nginx uses include /etc/nginx/mime.types. Or add custom types with types { application/json json; }. Use this mime types list as reference.",
      },
      {
        question: "Is this a mime-types npm alternative?",
        answer:
          "Yes. Same IANA-backed data as mime-types npm. Use in browser for mime types javascript, mime types react without installing the package.",
      },
      {
        question: "Where can I download a mime types list?",
        answer:
          "This page provides a complete mime types list you can reference. mime types download: the mime-types npm package or mime-db on GitHub offer machine-readable formats.",
      },
    ],

    additionalContent: [
      {
        heading: "mime types list — Common types",
        content:
          "Common MIME types: text/html (.html), text/css (.css), text/plain (.txt), application/javascript (.js), application/json (.json), application/pdf (.pdf), image/jpeg (.jpg), image/png (.png), image/gif (.gif). mime types for images, mime types pdf, json mime type.",
      },
      {
        heading: "mime-types npm & mime types github",
        content:
          "The mime-types npm package and mime-db on GitHub provide the same IANA registry. This tool offers a browser-based mime types list for mime types javascript and mime types react developers.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "URL Encoder", href: "/web-tools/url-encoder" },
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
