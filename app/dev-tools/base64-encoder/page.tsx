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
  metaTitle: "Base64 Encoder / Decoder — Text, File & URL-Safe Tool",
  metaDescription:
    "Free Base64 encoder and decoder online. Convert text, files, or images to Base64; decode Base64 back to text, hex, previewable images, or downloadable bytes. Standard and URL-safe modes.",
  path: "/dev-tools/base64-encoder",

  header: {
    title: "Base64 Encoder & Decoder",
    description:
      "Encode text or files to Base64, or decode Base64 strings back to text, hex, previewable images, or downloadable bytes. Supports standard and URL-safe Base64.",
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
      "Base64 encoder / decoder for text, files, and images. Standard Base64 and URL-safe Base64URL modes. UTF-8 text encoding, file-to-Base64 payload output, decoded image preview, decoded byte download, and optional hex output.",
    alternateName: [
      "Base64 Encoder",
      "Base64 Decoder",
      "Base64 Converter",
      "Base64URL Encoder",
      "URL-Safe Base64 Tool",
      "Image to Base64 Converter",
      "File to Base64 Converter",
      "Base64 to Image Decoder",
      "Base64 Text Tool",
      "MIME Base64 Encoder",
      "Base64 File Encoder",
      "PEM Base64 Decoder",
      "base64encode.net Alternative",
      "Base64 Online",
      "btoa atob Tool",
    ],
    featureList: [
      "Encode any UTF-8 text to Base64 (standard or URL-safe variant)",
      "Decode Base64 / Base64URL back to plain UTF-8 text",
      "File / image encoding: choose a file and get its Base64 payload",
      "Base64 to image preview for recognized image bytes",
      "Decoded byte download with detected PNG, JPG, GIF, WebP, PDF, or binary extension",
      "URL-safe mode for Base64URL strings (replaces + with - and / with _)",
      "Padding handling for URL-safe input with stripped = characters",
      "Line-break-aware (handles 76-char line breaks from MIME / PEM)",
      "Compatible with Node.js Buffer, Python base64, OpenSSL base64, JavaScript atob/btoa",
      "Real-time conversion as you type — instant feedback",
      "Browser-side text and file conversion",
      "No account required",
    ],
    softwareRequirements: "Modern web browser",
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
      "Used in data URI payloads, email attachments (MIME), and API authentication headers",
      "Includes URL-safe mode, decoded hex output, image preview, and decoded byte download",
    ],
    overview:
      "Encode and decode Base64 online with this tool. Paste plain text to encode it as Base64, choose a file to get its Base64 payload, or paste a Base64 string to decode it back to readable text, hex, previewable image bytes, or a downloadable file. Supports standard Base64 (A-Z, a-z, 0-9, +, /) and URL-safe Base64 (replaces + with - and / with _). Useful for API payload debugging, JWT inspection, MIME-style encoding checks, and preparing Base64 payloads for JSON, XML, or data URI workflows.",

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
      "Preparing Base64 payloads for data URI workflows",
      "Encoding checks in integration tests",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Base64 Is (and Isn&apos;t)</h3>
          <p>
            Base64 is a <strong>binary-to-text encoding scheme</strong> defined in RFC 4648. It converts arbitrary binary data into a 64-character ASCII alphabet (<code>A-Z, a-z, 0-9, +, /</code>) so the data can travel safely through text-only channels — email, HTTP headers, JSON payloads, XML, terminal output. <strong>It is NOT encryption.</strong> Anyone can decode Base64 in milliseconds without a key. Base64 provides <em>encoding</em>, not <em>protection</em>. If you need confidentiality, encrypt with AES first, then optionally Base64-encode the ciphertext for transport.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Base64 Works (3 → 4 Expansion)</h3>
          <p>
            Base64 reads input 3 bytes (24 bits) at a time, splits those 24 bits into four 6-bit chunks, and looks each chunk up in the 64-character alphabet. When the input length isn&apos;t a multiple of 3, the encoder pads with <code>=</code> characters: one <code>=</code> for input ending in 1 byte short, two <code>==</code> for ending 2 bytes short. <strong>Size expansion:</strong> Base64 output is always 4/3 ≈ 1.33× the input size (plus padding). So a 1 MB image becomes a 1.33 MB Base64 string — important for choosing whether to embed images as data URIs vs separate file requests.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Standard Base64 vs Base64URL</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Variant</th>
                <th className="text-left py-2 px-2 text-foreground">Alphabet</th>
                <th className="text-left py-2 px-2 text-foreground">Padding</th>
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Standard Base64</strong></td>
                <td className="py-2 px-2">A-Z a-z 0-9 + /</td>
                <td className="py-2 px-2">Yes (=)</td>
                <td className="py-2 px-2">Email (MIME), data URIs, PEM certificates, generic encoding</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong>Base64URL</strong></td>
                <td className="py-2 px-2">A-Z a-z 0-9 - _</td>
                <td className="py-2 px-2">Often stripped</td>
                <td className="py-2 px-2">JWT, OAuth tokens, URL query strings, filenames</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            URL-safe replaces <code>+</code> → <code>-</code> and <code>/</code> → <code>_</code> because <code>+</code> means &quot;space&quot; in URL query strings and <code>/</code> is a path separator. JWT spec (RFC 7515) requires Base64URL and forbids the <code>=</code> padding.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Data URIs:</strong> <code>data:image/png;base64,iVBORw0KG...</code> — embed images directly in HTML / CSS / Markdown</li>
            <li><strong>Email attachments (MIME):</strong> binary attachments encoded as Base64 with 76-char line breaks</li>
            <li><strong>HTTP Basic auth:</strong> <code>Authorization: Basic dXNlcjpwYXNz</code> (Base64 of &quot;user:pass&quot;)</li>
            <li><strong>JWT tokens:</strong> header and payload Base64URL-encoded, joined with dots</li>
            <li><strong>PEM certificates:</strong> X.509 / RSA keys are Base64 between BEGIN / END markers</li>
            <li><strong>JSON binary fields:</strong> binary data Base64-encoded for transport in JSON / XML</li>
            <li><strong>QR codes:</strong> binary payloads Base64-encoded for printable representation</li>
            <li><strong>Browser localStorage:</strong> binary blobs (icons, signatures) stored as Base64 strings</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When NOT to Use Base64</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Don&apos;t use Base64 to hide passwords or API keys.</strong> Trivially reversible by anyone. Use encryption (AES) or hashing (bcrypt / argon2).</li>
            <li><strong>Don&apos;t embed large images as data URIs in HTML.</strong> The 33% size penalty + lack of HTTP caching makes separate file requests faster for images larger than ~10 KB.</li>
            <li><strong>Don&apos;t Base64 over a binary-safe channel.</strong> Modern HTTP/2 + JSON binary types (with multipart/form-data) handle binary natively — no need to Base64 inflate.</li>
            <li><strong>Don&apos;t mix encodings.</strong> A Base64 string passed to a Base64URL decoder (or vice versa) will fail on <code>+ /</code> or <code>- _</code> characters.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Language Compatibility</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>JavaScript:</strong> <code>btoa(text)</code> / <code>atob(b64)</code> (ASCII-only; for UTF-8 use TextEncoder + btoa)</li>
            <li><strong>Node.js:</strong> <code>Buffer.from(text).toString(&quot;base64&quot;)</code> / <code>Buffer.from(b64, &quot;base64&quot;).toString()</code></li>
            <li><strong>Python:</strong> <code>base64.b64encode(b&quot;text&quot;)</code> / <code>base64.b64decode(b64)</code></li>
            <li><strong>OpenSSL:</strong> <code>echo -n text | openssl base64</code></li>
            <li><strong>Shell (Linux/Mac):</strong> <code>echo -n text | base64</code> / <code>echo b64 | base64 -d</code></li>
            <li><strong>PHP:</strong> <code>base64_encode($text)</code> / <code>base64_decode($b64)</code></li>
            <li><strong>Go:</strong> <code>base64.StdEncoding.EncodeToString([]byte(text))</code></li>
          </ul>
          <p className="mt-3">
            All produce identical output for the same input — Base64 is fully cross-platform. If output differs between tools, check for line-break handling (some add line breaks every 76 chars per MIME; others don&apos;t) and padding behavior.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When decoded output looks garbled: (1) check Base64 vs Base64URL — JWT and URL params use URL-safe; data URIs use standard. (2) Check for stripped padding — some systems strip trailing '=' to save bytes; you may need to re-add them. (3) Check character encoding — Base64 decoding produces bytes; assume UTF-8 unless the source specifies otherwise. (4) Watch for line breaks in MIME-style output — most decoders accept them but a few strict ones reject. For embedding images in HTML, prefer separate file requests (HTTP caching, no 33% penalty) unless the image is tiny (<10KB).",

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
          "Yes. Choose a file and the tool outputs the Base64 payload. If you need a full data URI, add the correct prefix yourself, such as data:image/png;base64, before the Base64 payload.",
      },
      {
        question: "Is this Base64 tool free?",
        answer:
          "Yes. You can encode and decode text, use URL-safe mode, choose a file, copy output, and download decoded bytes without creating an account.",
      },
      {
        question: "How do I encode an image to Base64 for HTML / CSS?",
        answer:
          "Choose the image file and copy the Base64 payload. For HTML or CSS, prepend the correct data URI prefix, for example `data:image/png;base64,` before the payload. Data URIs are best for very small assets; for larger images, separate file requests are usually better because Base64 adds about 33% size overhead and separate files can be cached.",
      },
      {
        question: "Why does Base64 add about 33% to file size?",
        answer:
          "Base64 encodes every 3 bytes of input as 4 ASCII characters of output — a 4/3 = 1.33× expansion. So a 1MB file becomes a ~1.33MB Base64 string. This is the cost of being able to embed binary data in text-only channels. For large assets, use multipart/form-data or binary HTTP bodies instead of Base64-in-JSON.",
      },
      {
        question: "How do I decode a JWT with Base64?",
        answer:
          "JWTs use Base64URL (note the URL variant, not standard). Split the JWT on dots into three parts; decode each part with URL-safe Base64. The first part is the header (algorithm); the second is the payload (claims). The third is the binary signature — you usually don't decode it. Easier: use our JWT Decoder which does all of this automatically.",
      },
      {
        question: "What's the difference between Base64 and base64url?",
        answer:
          "Standard Base64 uses '+' and '/' in its alphabet — but those characters have special meaning in URLs ('+' = space, '/' = path separator). Base64URL replaces them with '-' and '_' so the result is safe to use in URLs, JWT tokens, query strings, and filenames. Base64URL also typically strips the '=' padding. If you decode Base64URL with a standard Base64 decoder, the '-' and '_' chars will cause errors.",
      },
      {
        question: "Can I decode Base64 from a curl response?",
        answer:
          "Yes. Copy the Base64 string from the curl output, paste here, and click decode. If the response is JSON with a Base64 field, copy just the string value (without surrounding quotes). For automation, use `curl ... | jq -r '.field' | base64 -d` in the terminal directly.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "MIME Types", href: "/dev-tools/mime-types" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
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
