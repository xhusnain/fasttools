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
  metaTitle: "Base64 Encoder Decoder — Encode & Decode Base64 Online Free (2026)",
  metaDescription:
    "Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text. Supports URL-safe Base64, file encoding, and data URIs. Runs locally in browser.",
  path: "/dev-tools/base64-encoder",

  header: {
    title: "Base64 Encoder & Decoder",
    description:
      "Encode text to Base64 or decode Base64 strings back to plain text. Supports standard and URL-safe Base64 with UTF-8 encoding. All processing runs locally — no data uploaded.",
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
      "Encode and decode Base64 online with this free tool. Paste plain text to encode it as Base64, or paste a Base64 string to decode it back to readable text. Supports both standard Base64 (A-Z, a-z, 0-9, +, /) and URL-safe Base64 (replaces + with - and / with _). Useful for API payload debugging, data URI creation, email encoding (MIME), JWT inspection, and embedding binary data in JSON or XML. All encoding and decoding runs locally in your browser — no data is sent to any server.",

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

    aboutTool:
      "Base64 is a binary-to-text encoding scheme that converts data into ASCII characters for safe transport through text-based protocols. It is NOT encryption — anyone can decode Base64 without a key. Base64 is used in data URIs (embedding images in HTML/CSS), email attachments (MIME encoding), HTTP Basic authentication headers, JWT token segments, and API payloads that need to carry binary data as text. Standard Base64 uses A-Z, a-z, 0-9, +, / with = padding. URL-safe Base64 replaces + with - and / with _ to avoid conflicts in URLs and query strings. Encoding increases size by approximately 33% (every 3 bytes becomes 4 characters).",

    proTip:
      "If decoded output looks garbled, check whether the source uses standard Base64 or URL-safe Base64 (common in JWTs and URLs). Also check for missing = padding characters — some systems strip padding.",

    faqs: [
      {
        question: "What is Base64 encoding used for?",
        answer:
          "Base64 is used to encode binary data as ASCII text for transport through text-based protocols. Common uses: data URIs in HTML/CSS, email attachments (MIME), JWT token segments, HTTP Basic auth headers, and embedding binary data in JSON or XML.",
      },
      {
        question: "Is Base64 the same as encryption?",
        answer:
          "No. Base64 is an encoding format, not encryption. Anyone can decode Base64 without a key. It provides no security — use proper encryption (AES, RSA) for confidential data.",
      },
      {
        question: "What is URL-safe Base64?",
        answer:
          "URL-safe Base64 replaces + with - and / with _ to avoid characters that have special meaning in URLs. It is used in JWTs, URL query parameters, and file names. Some implementations also strip the = padding.",
      },
      {
        question: "Why does Base64 increase file size?",
        answer:
          "Base64 converts every 3 bytes of data into 4 ASCII characters, resulting in approximately 33% size increase. This is the trade-off for being able to embed binary data in text formats.",
      },
      {
        question: "Can I encode files to Base64?",
        answer:
          "Yes. The tool supports file encoding to Base64, which is useful for creating data URIs (e.g., data:image/png;base64,...) and embedding images in HTML or CSS.",
      },
      {
        question: "Is this Base64 tool free?",
        answer:
          "Yes. Completely free, runs locally in your browser, and has no limits on encoding/decoding or registration requirements.",
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
