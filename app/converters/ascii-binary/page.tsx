import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AsciiBinaryConverter = dynamic(
  () =>
    import("@/components/converters/ascii-binary-converter").then(
      (mod) => mod.AsciiBinaryConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Text to ASCII Binary",
  description:
    "Free text to ASCII binary converter online. Binary to text decoder. ASCII to binary table, text to binary table. Binary alphabet. Binary to ASCII 128. No signup.",
  metaTitle: "Text to ASCII Binary Converter Online - Binary to Text Free",
  metaDescription:
    "Free text to ASCII binary converter online. Binary to text. ASCII to binary table, text to binary table. Binary alphabet, binary to ASCII 128. No signup.",
  path: "/converters/ascii-binary",
  keywords: [
    "text to ascii binary converter online",
    "text to ascii binary converter",
    "text to ascii binary online",
    "text to ascii binary",
    "binary to text",
    "ascii to binary table",
    "text to binary table",
    "binary to ascii 128",
    "binary alphabet",
    "text to binary converter",
    "text to binary online",
  ],

  header: {
    title: "Text to ASCII Binary",
    description:
      "Convert text to its ASCII binary representation and vice-versa.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text to ASCII Binary", href: "/converters/ascii-binary" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free text to ASCII binary converter online. Binary to text. ASCII to binary table, text to binary table. Binary alphabet, binary to ASCII 128.",
    alternateName: [
      "Text to ASCII Binary Converter Online",
      "Text to ASCII Binary Converter",
      "Text to ASCII Binary Online",
      "Binary to Text Converter",
      "ASCII to Binary Table",
      "Text to Binary Table",
    ],
    featureList: [
      "Text to ASCII binary converter online",
      "Binary to text decoder",
      "ASCII to binary table reference",
      "Text to binary table",
      "Binary alphabet (8-bit)",
      "Binary to ASCII 128 support",
      "Copy binary/text to clipboard",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free text to ASCII binary converter online. Convert text to binary and binary to text instantly. Use as an ASCII to binary table or text to binary table. Supports binary alphabet (8-bit) and binary to ASCII 128. Type or paste text for 8-bit binary (e.g. Hello → 01001000 01100101 01101100 01101100 01101111). Paste binary to decode. No signup required.",

    howToSteps: [
      "Text to binary: Enter your text. The ASCII binary equivalent appears instantly (space-separated 8-bit groups).",
      "Binary to text: Enter binary (e.g. 01001000 01100101). The decoded text appears below.",
      "Click Copy binary to clipboard or Copy text to clipboard to copy results.",
    ],

    features: [
      "Text to ASCII binary: Encode any text to 8-bit binary",
      "ASCII binary to text: Decode binary back to text",
      "Copy binary to clipboard with one click",
      "Copy text to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Encoding: Convert text to binary for data transmission or learning.",
      "Decoding: Convert binary strings (e.g. from files) back to readable text.",
      "Education: Understand ASCII and binary representation.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          ASCII assigns a number (0–127, or 0–255 for extended ASCII) to each character. Each number is represented as an 8-bit binary value. This tool converts text to ASCII binary and decodes binary back to text.
        </p>
      </div>
    ),

    proTip:
      "Binary can be pasted with or without spaces. The tool strips spaces and parses 8-bit groups automatically.",

    faqs: [
      {
        question: "How to use text to ASCII binary converter online?",
        answer:
          "Enter your text in the Text to ASCII binary section. The converter outputs 8-bit binary for each character, space-separated (e.g. Hello → 01001000 01100101 01101100 01101100 01101111). Paste binary in the other section to decode binary to text. No signup needed.",
      },
      {
        question: "What is an ASCII to binary table?",
        answer:
          "An ASCII to binary table maps each character to its 8-bit binary value. For example: A=01000001 (65), B=01000010 (66), space=00100000 (32). This tool acts as a live ASCII to binary table—type any text and see the binary instantly.",
      },
      {
        question: "What is a text to binary table?",
        answer:
          "A text to binary table shows how letters and symbols convert to binary. Standard ASCII uses 8 bits per character (0–255). Use this tool as a text to binary table: enter text and get the binary output for each character.",
      },
      {
        question: "What is binary to ASCII 128?",
        answer:
          "Binary to ASCII 128 refers to decoding binary strings into standard ASCII characters (codes 0–127). Standard ASCII covers English letters, digits, and common symbols. This tool decodes 8-bit binary groups to ASCII; extended ASCII (128–255) is also supported.",
      },
      {
        question: "What is the binary alphabet?",
        answer:
          "The binary alphabet uses only 0 and 1. Each ASCII character is represented by 8 bits (one byte). For example: A=01000001, B=01000010, a=01100001. This tool converts text to the binary alphabet and decodes binary back to text.",
      },
      {
        question: "How to convert binary to text?",
        answer:
          "Paste your binary string in the ASCII binary to text section. Use 8-bit groups with or without spaces (e.g. 01001000 01100101 01101100 01101100 01101111). The tool decodes it to plain text (Hello).",
      },
    ],

    additionalContent: [
      {
        heading: "ASCII to Binary Table",
        content:
          "This tool acts as an ASCII to binary table. Type any text and get the 8-bit binary for each character. Standard ASCII (0–127) and extended ASCII (128–255) are supported. Example: A=01000001, H=01001000, space=00100000.",
      },
      {
        heading: "Text to Binary Table",
        content:
          "Use this text to binary table to convert letters and symbols to binary. Each character maps to an 8-bit value. Type your text and the binary output appears instantly. Copy the result for use in programming or learning.",
      },
      {
        heading: "Binary Alphabet",
        content:
          "The binary alphabet encodes characters using only 0 and 1. Each byte (8 bits) represents one ASCII character. This tool converts the full text alphabet (and symbols) to binary and decodes binary back to text.",
      },
      {
        heading: "Binary to ASCII 128",
        content:
          "Binary to ASCII 128 decodes 8-bit binary groups into standard ASCII characters (codes 0–127). Paste binary in the ASCII binary to text section to decode. Extended ASCII (128–255) is also supported.",
      },
    ],

    relatedTools: [
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Text to NATO Alphabet", href: "/converters/nato-phonetic" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AsciiBinaryConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AsciiBinaryConverter />
        </div>
      )}
    />
  )
}
