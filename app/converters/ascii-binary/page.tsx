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
  toolName: "ASCII Binary Converter",
  description:
    "Convert text to 8-bit ASCII binary code and decode binary back to readable text. Supports all 128 ASCII characters, space-separated octets, and instant bidirectional encoding/decoding.",
  metaTitle: "ASCII to Binary Converter -- Text to Binary & Binary to Text Free",
  metaDescription:
    "Free ASCII to binary converter. Convert text to 8-bit binary code and decode binary to text instantly. Supports all 128 ASCII characters, space-separated octets, input validation. No signup.",
  path: "/converters/ascii-binary",

  header: {
    title: "ASCII Binary Converter",
    description:
      "Convert any text to 8-bit ASCII binary representation and decode binary strings back to readable text. Supports all 128 standard ASCII characters including letters, numbers, punctuation, and control codes with instant encoding and decoding.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "ASCII Binary Converter", href: "/converters/ascii-binary" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online ASCII to binary converter for encoding text to 8-bit binary code and decoding binary strings back to readable text.",
    alternateName: ["Text to Binary Converter", "Binary to Text Converter", "ASCII Encoder", "Binary Decoder Online"],
    featureList: [
      "Text to 8-bit ASCII binary encoding for all 128 characters",
      "Binary to text decoding with automatic octet parsing",
      "Input validation with error highlighting for invalid binary",
      "Space-separated and continuous binary format support",
      "One-click copy-ready output",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An ASCII to Binary Converter is a free online tool that encodes text characters into their 8-bit binary ASCII representation (e.g., 'A' becomes 01000001) and decodes binary sequences back into human-readable text, supporting all 128 standard ASCII characters.",
    quickAnswer:
      "Type or paste any text to instantly see each character rendered as an 8-bit binary value. Enter binary digits (with or without spaces) to decode them back to readable text. Each standard ASCII character maps to a decimal value between 0 and 127, represented as 7 or 8 binary bits. The converter handles uppercase letters (A=65, 01000001), lowercase letters (a=97, 01100001), digits (0=48, 00110000), punctuation, and whitespace characters.",
    keyTakeaways: [
      "Converts each text character to its 8-bit binary representation using the ASCII encoding standard (0-127)",
      "Decodes space-separated or continuous binary octets back to readable text instantly",
      "Standard ASCII defines 128 characters: 33 control codes (0-31, 127), 95 printable characters (32-126)",
      "Common values: A=01000001 (65), a=01100001 (97), 0=00110000 (48), space=00100000 (32)",
      "Essential for computer science education, binary encoding fundamentals, network debugging, and data analysis",
    ],
    overview:
      "This free ASCII to binary converter lets you encode any text string into 8-bit binary representation and decode binary data back to readable text using the ASCII (American Standard Code for Information Interchange) character encoding standard. ASCII assigns a unique 7-bit numeric value (0-127) to 128 characters including uppercase and lowercase English letters, digits 0-9, punctuation marks, and control characters. This tool displays each character as a padded 8-bit binary octet for consistency with modern byte-oriented computing. Whether you are a computer science student learning binary number systems, a developer debugging encoded data in network packets or serial communication, or an educator preparing binary encoding examples, this converter provides instant, validated, copy-ready binary output with zero server-side processing.",

    howToSteps: [
      "Enter or paste any text string in the text input panel to see the ASCII binary encoding generated character by character in real time.",
      "Each character appears as an 8-bit binary octet (e.g., 'Hello' becomes '01001000 01100101 01101100 01101100 01101111').",
      "Copy the generated binary output in space-separated 8-bit groups for use in documentation, code, or educational materials.",
      "Switch to decode mode and paste binary digits to convert them back to readable text -- supports both space-separated and continuous binary formats.",
      "Review any validation errors highlighted by the tool if your binary input contains invalid characters or incomplete octets.",
    ],

    features: [
      "Text to 8-bit ASCII binary encoding supporting all 128 standard ASCII characters (0-127)",
      "Binary to text decoding with automatic octet grouping and parsing",
      "Real-time input validation with clear error messages for invalid binary sequences",
      "One-click copy-to-clipboard for both binary output and decoded text",
      "100% client-side browser-based processing with no data sent to servers",
      "Support for space-separated and continuous binary string input formats",
    ],

    useCases: [
      "Learning ASCII character encoding and binary number systems in computer science courses and coding bootcamps",
      "Debugging binary data in network packets, serial communication protocols, and IoT device messages",
      "Preparing binary encoding examples and reference tables for technical documentation and tutorials",
      "Validating binary payload fragments in API responses, file headers, and communication protocols",
      "Creating binary-encoded messages for CTF (Capture The Flag) cybersecurity challenges and puzzles",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          ASCII (American Standard Code for Information Interchange) is a
          character encoding standard first published in 1963 that assigns
          numeric values to 128 characters. It includes 33 non-printable control
          characters (codes 0-31 and 127, such as NULL, TAB, LINE FEED, and
          CARRIAGE RETURN) and 95 printable characters (codes 32-126, including
          letters A-Z and a-z, digits 0-9, punctuation, and the space character).
        </p>
        <p>
          In binary representation, each ASCII character is stored as a 7-bit
          value, but modern computers use 8-bit bytes, so ASCII values are
          typically zero-padded to 8 bits. For example, the uppercase letter 'A'
          has decimal value 65, which in binary is 01000001. The lowercase 'a'
          is decimal 97 (01100001). The digit '0' is decimal 48 (00110000). The
          space character is decimal 32 (00100000). This consistent mapping is
          what makes ASCII the foundation of text encoding in computing.
        </p>
        <p>
          Understanding ASCII binary encoding is fundamental to computer science.
          It underpins how text is stored in memory, transmitted over networks,
          and processed by CPUs. Extended ASCII (128-255) and Unicode (which
          includes ASCII as its first 128 code points) build upon this foundation.
          This converter focuses on standard 7-bit ASCII encoded as 8-bit binary
          octets, making it ideal for educational purposes, debugging serial
          communication protocols, analyzing network packet payloads, and creating
          binary-encoded content for programming exercises.
        </p>
      </div>
    ),

    proTip:
      "Use space-separated 8-bit groups (e.g., '01001000 01101001') for clearer decoding and easier manual inspection. When debugging binary data, compare your output against an ASCII table -- printable characters fall in the range 00100000 (32) to 01111110 (126).",

    faqs: [
      {
        question: "How do I convert text to binary using ASCII encoding?",
        answer:
          "Type or paste any text in the input panel and the converter instantly generates the 8-bit binary ASCII representation for each character. For example, 'Hi' converts to '01001000 01101001' because H=72 (01001000) and i=105 (01101001) in the ASCII table. The output is space-separated for readability.",
      },
      {
        question: "What binary format should I use for decoding back to text?",
        answer:
          "The decoder accepts both space-separated 8-bit groups (e.g., '01001000 01101001') and continuous binary strings (e.g., '0100100001101001'). Each group of 8 binary digits represents one ASCII character. The tool validates your input and highlights errors if any group contains fewer than 8 bits or non-binary characters.",
      },
      {
        question: "What is the ASCII value of common characters in binary?",
        answer:
          "Common ASCII binary values: A=01000001 (65), Z=01011010 (90), a=01100001 (97), z=01111010 (122), 0=00110000 (48), 9=00111001 (57), space=00100000 (32), newline=00001010 (10). Uppercase and lowercase letters differ by exactly 32 (one bit position), which is why binary AND/OR operations can change letter case.",
      },
      {
        question: "Does this converter support extended ASCII or Unicode characters?",
        answer:
          "This converter focuses on standard 7-bit ASCII (characters 0-127) represented as 8-bit binary octets. Standard ASCII covers all English letters, digits, punctuation, and common control characters. For characters outside the ASCII range (accented letters, CJK characters, emojis), you would need a Unicode or UTF-8 converter.",
      },
      {
        question: "Can I use this ASCII binary converter for programming homework?",
        answer:
          "Yes. This tool is ideal for computer science students learning binary number systems and character encoding. You can verify manual ASCII-to-binary conversions, study the pattern differences between uppercase and lowercase letters (bit 5 toggle), and understand how computers represent text as sequences of binary digits.",
      },
      {
        question: "Is my text data sent to a server during conversion?",
        answer:
          "No. All ASCII to binary and binary to text conversion runs entirely in your browser using client-side JavaScript. Your text input and binary output never leave your device, making this tool safe for converting sensitive or private content.",
      },
      {
        question: "Is this ASCII to binary converter free?",
        answer:
          "Yes. This converter is 100% free with no signup, no account required, and no usage limits. Convert as much text to binary and binary to text as you need for education, debugging, or any other purpose.",
      },
    ],

    relatedTools: [
      { name: "Text to Unicode", href: "/converters/unicode" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Morse Code Translator", href: "/converters/morse-code" },
      { name: "Text to NATO Alphabet", href: "/converters/nato-phonetic" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Roman Numeral Converter", href: "/converters/roman-numeral" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AsciiBinaryConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <AsciiBinaryConverter />
        </div>
      )}
    />
  )
}
