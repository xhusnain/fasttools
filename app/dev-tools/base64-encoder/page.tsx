import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { Code, Zap, Shield } from "lucide-react"

const Base64Encoder = dynamic(
  () =>
    import("@/components/dev-tools/base64-encoder").then(
      (mod) => mod.Base64Encoder
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Base64 Encoder Decoder",
  description:
    "Base64 encode and decode online. Convert string to Base64, Base64 to image, Base64 to PDF. Decode to file, hex. Free Base64 string encoder decoder. No signup.",
  metaTitle: "Base64 Encoder Decoder - Image, PDF, Hex & File Converter",
  metaDescription:
    "Free Base64 encode/decode online. Convert Base64 to image with preview, Base64 to PDF, decode to hex or file. URL-safe mode for JWT. String to Base64 instantly.",
  path: "/dev-tools/base64-encoder",
  keywords: [
    "base64 encode",
    "base64 decode online",
    "base64 to image",
    "base64 to pdf",
    "base64 decode to file",
    "base64 string encoder decoder online",
    "base64 string example",
    "base64 decode to hex",
    "base64 guru decode",
    "base64 encode decode",
  ],

  header: {
    title: "Base64 Encoder Decoder",
    description:
      "Encode and decode Base64 online. Convert string to Base64, Base64 to image (with preview), PDF, hex, or file. URL-safe mode for JWT tokens.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Base64 encoder decoder online. Convert string to Base64, Base64 to image with preview, Base64 to PDF, decode to hex or file.",
    featureList: [
      "Base64 encode and decode online",
      "Base64 to image with live preview",
      "Base64 to PDF encoder/decoder",
      "Base64 decode to hex output",
      "Base64 decode to file download",
      "URL-safe Base64 for JWT tokens",
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
      "Base64 is a binary-to-text encoding scheme that converts data into ASCII format using A-Z, a-z, 0-9, +, and /. Use this tool to encode strings to Base64, decode Base64 to text/image/PDF/hex, or convert Base64 to file for download. Example: 'Hello' encodes to 'SGVsbG8='. Supports URL-safe Base64 for JWT tokens.",

    howToSteps: [
      "Base64 encode: Enter text or upload a file. Toggle 'Encode URL safe' for JWT tokens.",
      "Base64 decode online: Paste Base64 string. Enable 'Decode URL safe' if using base64url format.",
      "Base64 to image: Upload image (PNG, JPG) to encode, or paste Base64 to preview decoded image instantly.",
      "Base64 to PDF: Upload PDF to encode, or decode Base64 and download PDF file.",
      "Base64 decode to hex: Enable 'Hex output' to view decoded bytes as hexadecimal.",
      "Copy result or download decoded file with one click.",
    ],

    features: [
      "Base64 encode: String to Base64 with UTF-8 support",
      "Base64 decode online: Instant text or binary conversion",
      "Base64 to image: Live preview of PNG, JPG, SVG, WebP",
      "Base64 to PDF: Encode or decode PDF files",
      "Base64 decode to hex: View decoded bytes as hexadecimal",
      "Base64 decode to file: Download decoded binary data",
      "URL-safe Base64 (base64url) for JWT and URLs",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Base64 to image: Embed images in HTML/CSS as data:image/png;base64,... for faster loading.",
      "Base64 to PDF: Encode PDFs for API transmission or email attachments.",
      "Base64 decode online: Debug API responses, JWT payloads, SAML tokens, or HTTP headers.",
      "Base64 decode to hex: Inspect binary data structure for debugging or reverse engineering.",
      "Web development: Create data URIs for icons, favicons, or inline images.",
      "JWT tokens: Decode and inspect JWT headers and payloads with URL-safe mode.",
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Base64 String Examples
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Base64 encoding converts binary data into ASCII text. Here are common examples:
          </p>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Original</th>
                <th className="p-3 text-left">Base64 Encoded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-mono">Hello</td>
                <td className="p-3 font-mono">SGVsbG8=</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">Hello World</td>
                <td className="p-3 font-mono">SGVsbG8gV29ybGQ=</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">Base64</td>
                <td className="p-3 font-mono">QmFzZTY0</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">123456</td>
                <td className="p-3 font-mono">MTIzNDU2</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">user@example.com</td>
                <td className="p-3 font-mono">dXNlckBleGFtcGxlLmNvbQ==</td>
              </tr>
            </tbody>
          </GTable>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How Base64 Encoding Works
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Base64 converts binary data into 6-bit chunks, mapped to 64 ASCII characters (A-Z, a-z, 0-9, +, /). Each group of 3 bytes (24 bits) becomes 4 Base64 characters. If the input isn&apos;t a multiple of 3 bytes, padding (=) is added.
          </p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <div>Text: &quot;Hi&quot;</div>
            <div>Binary: 01001000 01101001</div>
            <div>6-bit groups: 010010 000110 1001</div>
            <div>Base64: S G k =</div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            URL-Safe Base64 vs Standard Base64
          </h2>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Standard Base64</th>
                <th className="p-3 text-left">URL-Safe Base64</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3">Character 62</td>
                <td className="p-3 font-mono">+</td>
                <td className="p-3 font-mono">-</td>
              </tr>
              <tr>
                <td className="p-3">Character 63</td>
                <td className="p-3 font-mono">/</td>
                <td className="p-3 font-mono">_</td>
              </tr>
              <tr>
                <td className="p-3">Padding</td>
                <td className="p-3 font-mono">=</td>
                <td className="p-3 font-mono">= (often omitted)</td>
              </tr>
              <tr>
                <td className="p-3">Use Case</td>
                <td className="p-3">Email, MIME, XML</td>
                <td className="p-3">JWT, URLs, filenames</td>
              </tr>
            </tbody>
          </GTable>
        </article>
      </div>
    ),

    proTip:
      "For JWT tokens, use Decode URL safe. For data URIs (data:image/png;base64,...), strip the prefix and paste only the Base64 part. For base64 to image preview, paste Base64 in the decoder—the image appears instantly.",

    faqs: [
      {
        question: "What is a base64 string example?",
        answer:
          "Example: 'Hello' encodes to 'SGVsbG8='. 'Hello World' becomes 'SGVsbG8gV29ybGQ='. Base64 uses A-Z, a-z, 0-9, +, and /. Padding uses =. Try the encoder above to see instant results.",
      },
      {
        question: "How to base64 encode a string?",
        answer:
          "Enter your text in the encoder section above and the tool encodes instantly. For files (images, PDFs), click the file upload button. Toggle 'Encode URL safe' for JWT tokens or URLs. Copy the result with one click.",
      },
      {
        question: "How to decode base64 online?",
        answer:
          "Paste your Base64 string in the decoder section. The decoded text appears instantly. For URL-safe Base64 (JWT), enable 'Decode URL safe'. For images or files, the preview and download appear automatically.",
      },
      {
        question: "How to convert base64 to image?",
        answer:
          "To encode: Upload an image using the file button. To decode: Paste Base64 image data and view the live preview. Use the output as data:image/png;base64,YOUR_STRING in HTML/CSS.",
      },
      {
        question: "How to convert base64 to PDF?",
        answer:
          "To encode: Upload a PDF file. To decode: Paste Base64 PDF data and download the decoded file. Useful for API transmission or embedding PDFs in JSON/XML.",
      },
      {
        question: "How to base64 decode to hex?",
        answer:
          "Enable 'Decode to hex' in the decoder section. Paste your Base64 string and view the hexadecimal representation of decoded bytes. Example: SGVsbG8= decodes to 48 65 6c 6c 6f.",
      },
      {
        question: "What is URL-safe Base64?",
        answer:
          "URL-safe Base64 (base64url) replaces + with - and / with _ and omits padding (=). Used in JWT tokens, URLs, and filenames where + and / have special meaning. Enable 'URL safe' mode in the tool.",
      },
      {
        question: "Is Base64 encoding encryption?",
        answer:
          "No. Base64 is encoding, not encryption. Anyone can decode it instantly. Never use Base64 to hide sensitive data. Use encryption algorithms like AES for security.",
      },
      {
        question: "How to base64 decode to file?",
        answer:
          "Paste your Base64 string in the decoder. For binary files (images, PDFs, documents), the tool detects the format and provides a download button. Copy or save the decoded file instantly.",
      },
      {
        question: "What characters does Base64 use?",
        answer:
          "Base64 uses 64 characters: A-Z (26), a-z (26), 0-9 (10), + and / (2). Padding uses =. URL-safe Base64 replaces + with - and / with _.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
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
