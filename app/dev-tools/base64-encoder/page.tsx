import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const Base64Encoder = dynamic(
  () => import("@/components/dev-tools/base64-encoder").then((mod) => mod.Base64Encoder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Base64 Encoder Decoder",
  description:
    "Encode and decode Base64 for text and common binary workflows including URL-safe variants.",
  metaTitle: "Base64 Encoder Decoder (Text, File, URL-safe)",
  metaDescription:
    "Encode or decode Base64 strings in-browser. Useful for API payload debugging, data URI workflows, and URL-safe token handling.",
  path: "/dev-tools/base64-encoder",
  keywords: [
    "base64 encoder decoder",
    "base64 decode online",
    "base64 url safe",
    "base64 to text",
    "base64 tool",
  ],

  header: {
    title: "Base64 Encoder Decoder",
    description:
      "Convert text and data to or from Base64 with quick copy-ready outputs.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Encode and decode Base64 with optional URL-safe behavior for API and token workflows.",
    featureList: [
      "Base64 encode/decode",
      "URL-safe conversion",
      "Text and file use cases",
      "Copy-ready output",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Base64 Encoder/Decoder is a free tool that encodes text into Base64 format and decodes Base64 strings back into readable text.",
    quickAnswer:
      "Paste text to encode it to Base64, or paste a Base64 string to decode it back to plain text. Supports UTF-8 encoding. Copy the result with one click. Useful for API payloads, data URIs, and email encoding.",
    keyTakeaways: [
      "Encodes any text to Base64 and decodes Base64 back to text",
      "Base64 uses A–Z, a–z, 0–9, +, / and = for padding",
      "Encoding increases size by approximately 33% (3 bytes → 4 characters)",
      "Used in data URIs, email attachments (MIME), and API authentication headers",
      "All encoding/decoding runs locally in your browser",
    ],
    overview:
      "Use this tool to encode plain text into Base64 or decode Base64 back to readable output. It is useful for API debugging, payload inspection, and data URI workflows.",

    howToSteps: [
      "Choose encode or decode mode.",
      "Paste text or Base64 input into the editor.",
      "Enable URL-safe handling when required.",
      "Copy the output for your implementation workflow.",
    ],

    features: [
      "Bi-directional Base64 conversion",
      "URL-safe mode support",
      "Fast copy workflow",
      "Useful for API and token debugging",
      "Browser-based utility",
    ],

    useCases: [
      "API request/response debugging",
      "JWT-related base64url checks",
      "Data URI generation and inspection",
      "Encoding checks in integration tests",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Base64 is a transport encoding format, not encryption. It is often
          used when binary or structured data must move through text channels.
        </p>
        <p>
          This page is designed for utility intent: convert quickly, verify
          output, and continue integration work.
        </p>
      </div>
    ),

    proTip:
      "If decoded output looks incorrect, check whether the source uses standard Base64 or URL-safe Base64 variants.",

    faqs: [
      {
        question: "Is Base64 secure encryption?",
        answer:
          "No. Base64 is an encoding format for representation and transport, not a confidentiality mechanism.",
      },
      {
        question: "What is URL-safe Base64?",
        answer:
          "A variant that replaces certain characters to be safer in URL/query contexts.",
      },
      {
        question: "Can I use this for JWT payload inspection?",
        answer:
          "Yes, particularly for base64url-style segments used in token structures.",
      },
      {
        question: "Why does decode fail for my input?",
        answer:
          "Common causes are malformed padding, mixed variant usage, or non-Base64 characters.",
      },
      {
        question: "Can I convert files too?",
        answer:
          "Yes, the workflow supports common file/data conversion scenarios in addition to plain text.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "MIME Types", href: "/dev-tools/mime-types" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Base64EncoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <Base64Encoder />
        </div>
      )}
    />
  )
}
