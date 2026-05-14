import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const Base64FileConverter = dynamic(
  () =>
    import("@/components/converters/base64-file-converter").then(
      (mod) => mod.Base64FileConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Base64 File Converter",
  description:
    "Encode any file to Base64 string and decode Base64 data back to downloadable files. Supports images, PDFs, documents, audio, video, and binary files with data URI generation for HTML/CSS embedding.",
  metaTitle: "Base64 File Encoder & Decoder — Convert Files to Base64 Online Free",
  metaDescription:
    "Free Base64 file encoder and decoder. Convert images, PDFs, documents to Base64 strings. Decode Base64 to downloadable files with image preview. Generate data URIs for HTML/CSS embedding. No upload to servers.",
  path: "/converters/base64-file",

  header: {
    title: "Base64 File Encoder & Decoder",
    description:
      "Encode any file (images, PDFs, documents, audio, video) to Base64 strings and decode Base64 data back to downloadable files. Generate data URIs for inline HTML/CSS embedding, preview decoded images, and handle binary-to-text conversion entirely in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Base64 File Converter", href: "/converters/base64-file" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Base64 file encoder and decoder. Convert images, PDFs, and documents to Base64 strings. Decode Base64 data back to downloadable files with image preview and data URI generation.",
    alternateName: ["File to Base64 Encoder", "Base64 to File Decoder", "Base64 Image Converter", "Data URI Generator"],
    featureList: [
      "File to Base64 string encoding for any file type",
      "Base64 string to downloadable file decoding",
      "Data URI generation for HTML/CSS inline embedding",
      "Image preview for decoded PNG, JPG, GIF, SVG, and WebP files",
      "Drag-and-drop file upload with automatic MIME type detection",
      "Custom filename and extension controls for decoded output",
      "Browser-based processing with no server uploads",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Base64 File Converter is a free online tool that encodes binary files (images, PDFs, documents, audio, video) into Base64 text strings and decodes Base64-encoded data back into downloadable files. It generates data URIs for inline HTML/CSS embedding and supports all common MIME types with automatic detection.",
    quickAnswer:
      "Upload any file to instantly get its Base64-encoded string with the correct data URI prefix (data:image/png;base64,...). Or paste a Base64 string to reconstruct and download the original file. The encoder handles images (PNG, JPG, GIF, SVG, WebP), PDFs, Word documents, Excel spreadsheets, audio (MP3, WAV), video (MP4, WebM), and any binary file format. Copy the data URI for HTML/CSS embedding or download the decoded file directly.",
    keyTakeaways: [
      "Encodes any file type (images, PDFs, audio, video, documents) into Base64 text strings",
      "Decodes Base64 strings back into the original binary file for download",
      "Generates complete data URIs (data:[MIME];base64,...) for inline HTML <img> and CSS background-image embedding",
      "Base64 encoding increases file size by approximately 33% (4 output bytes per 3 input bytes)",
      "All encoding and decoding runs entirely in your browser — files are never uploaded to any server",
    ],
    overview:
      "This Base64 file encoder and decoder handles bidirectional conversion between binary files and Base64 text strings. Use it to encode images for inline HTML embedding with data URIs, prepare file attachments for JSON API payloads that require Base64-encoded binary data, decode Base64 strings extracted from API responses or email attachments back into downloadable files, convert images to Base64 for CSS background-image properties to reduce HTTP requests, and verify the contents of Base64-encoded data by previewing decoded images. The tool supports drag-and-drop file upload with automatic MIME type detection, custom filename and extension controls for decoded output, and image preview for PNG, JPG, GIF, SVG, and WebP formats.",

    howToSteps: [
      "To encode a file: drag and drop or upload any file (image, PDF, document, audio, video) and the tool generates the Base64 string with the correct data URI prefix automatically.",
      "To decode Base64: paste a Base64 string (with or without the data URI prefix), set your desired filename and file extension, then download the reconstructed file.",
      "Preview decoded images directly in the browser before downloading to verify the Base64 data is correct.",
      "Copy the complete data URI string for embedding in HTML <img> src attributes, CSS background-image properties, or JSON API request bodies.",
    ],

    features: [
      "Bidirectional Base64 encoding and decoding for any file type (images, PDFs, documents, audio, video, binaries)",
      "Drag-and-drop file upload with automatic MIME type detection and data URI prefix generation",
      "Decoded file download with custom filename and extension controls",
      "Inline image preview for decoded PNG, JPG, GIF, SVG, and WebP Base64 data",
      "Complete data URI output (data:[MIME];base64,...) ready for HTML/CSS inline embedding",
      "Support for Base64 input with or without data URI prefix normalization",
      "100% browser-based processing — no files are uploaded to any server",
    ],

    useCases: [
      "Encoding images to Base64 data URIs for inline HTML <img> tags and CSS background-image properties to reduce HTTP requests",
      "Preparing file attachments as Base64 strings for JSON REST API payloads, email MIME encoding, and webhook integrations",
      "Decoding Base64 strings from API responses, JWT token payloads, or email attachments back into downloadable files",
      "Converting small icons, logos, and SVG graphics to Base64 for embedding directly in HTML templates and CSS stylesheets",
      "Verifying Base64-encoded image data by previewing the decoded output before integration into production code",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is Base64 Encoding for Files?</h3>
          <p>
            Base64 is a binary-to-text encoding scheme (RFC 4648) that represents binary data using 64 ASCII characters (A-Z, a-z, 0-9, +, /). It was designed to transmit binary data through text-only channels: email (MIME encoding), JSON API payloads, XML documents, URL parameters, and any context where raw binary would corrupt or be invalid. Every 3 bytes of binary input produce 4 bytes of Base64 output, resulting in approximately 33% size increase — the price you pay for safe text transport.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Data URIs: Inline File Embedding</h3>
          <p>
            A <strong>data URI</strong> embeds file content directly in an HTML / CSS / JSON / Markdown document instead of linking to an external file. Format:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`data:[MIME-type];base64,[encoded-data]

Example:
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAA...`}</code>
          </pre>
          <p className="mt-3">
            Use cases: embedding logos / icons in HTML <code>&lt;img&gt;</code> tags, CSS <code>background-image</code> properties, or as PDF / image attachments in JSON API payloads. Modern email templates use data URIs for inline images that survive forwarding.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use Base64 (Pros / Cons)</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Scenario</th>
                <th className="text-left py-2 px-2 text-foreground">Use Base64?</th>
                <th className="text-left py-2 px-2 text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Email image attachments (MIME)</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">Email is text-only by spec; required</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Small icons / logos in HTML / CSS</td>
                <td className="py-2 px-2 text-green-500">Yes (&lt; 10KB)</td>
                <td className="py-2 px-2">Eliminates HTTP round-trip for tiny files</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">File uploads in JSON APIs</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">JSON can&apos;t carry raw binary</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">PDF certificates in JWT claims</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2">JWT is JSON-encoded; binary needs Base64</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Profile photos &gt; 100KB</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2">Use multipart/form-data uploads instead</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Large videos / files in CSS</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2">CSS file bloat hurts caching</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Storing files in databases</td>
                <td className="py-2 px-2 text-orange-500">Maybe</td>
                <td className="py-2 px-2">Use BLOB column or external storage instead</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Hidden / obscured files (security)</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2">Base64 ≠ encryption; trivially reversible</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Performance: When Inline Beats Separate Files</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>&lt; 1 KB:</strong> almost always faster inline (HTTP request overhead exceeds file content)</li>
            <li><strong>1-10 KB:</strong> inline typically wins for above-the-fold critical content (no separate request blocking render)</li>
            <li><strong>10-50 KB:</strong> mixed — inline if rarely reused; external if cached across pages</li>
            <li><strong>&gt; 50 KB:</strong> always serve as separate file with HTTP caching</li>
          </ul>
          <p className="mt-3">
            <strong>Key insight:</strong> separate files benefit from HTTP caching. If your logo is on every page, an inline Base64 logo costs ~5 KB × N pages, but the same logo as a separate file is downloaded once and cached. For widely-repeated assets, external wins.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common File MIME Types for Data URIs</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Images:</strong> <code>image/png</code>, <code>image/jpeg</code>, <code>image/webp</code>, <code>image/svg+xml</code>, <code>image/gif</code>, <code>image/avif</code></li>
            <li><strong>Documents:</strong> <code>application/pdf</code>, <code>application/msword</code>, <code>application/vnd.openxmlformats-officedocument.wordprocessingml.document</code> (.docx)</li>
            <li><strong>Audio:</strong> <code>audio/mpeg</code> (mp3), <code>audio/ogg</code>, <code>audio/wav</code>, <code>audio/mp4</code></li>
            <li><strong>Video:</strong> <code>video/mp4</code>, <code>video/webm</code>, <code>video/ogg</code></li>
            <li><strong>Fonts:</strong> <code>font/woff</code>, <code>font/woff2</code>, <code>font/ttf</code></li>
            <li><strong>Archives:</strong> <code>application/zip</code>, <code>application/x-tar</code></li>
            <li><strong>Text:</strong> <code>text/plain</code>, <code>text/csv</code>, <code>application/json</code>, <code>application/xml</code></li>
            <li><strong>Generic binary:</strong> <code>application/octet-stream</code> (forces browser download)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common API Patterns</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>AWS Lambda invoke:</strong> binary input/output must be Base64-encoded when going through API Gateway</li>
            <li><strong>Stripe receipts as PDF:</strong> some endpoints return PDF data Base64-encoded in JSON</li>
            <li><strong>Twilio media:</strong> SMS/MMS attachments can be sent as Base64 in JSON payloads</li>
            <li><strong>SendGrid email attachments:</strong> attached files are Base64-encoded inside the JSON request</li>
            <li><strong>Webhook payloads with binary:</strong> Stripe, GitHub, etc. encode binary fields as Base64</li>
            <li><strong>X.509 certificates:</strong> PEM format is Base64-encoded with header/footer lines</li>
            <li><strong>JWT signatures:</strong> the signature segment of a JWT is Base64URL-encoded</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All encoding and decoding happens in your browser using the FileReader API and standard JavaScript functions. Files never leave your device. Safe for sensitive documents, proprietary images, confidential business data. No upload progress bars, no &quot;processing&quot; spinners that would indicate server work — everything happens instantly in your browser&apos;s memory.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For web performance, only use Base64 data URIs for files under 10 KB. Larger files are more efficiently served as separate HTTP/2 requests. If your Base64 input includes a data URI prefix (data:image/png;base64,...), paste the full value and the tool will normalize it automatically.",

    faqs: [
      {
        question: "How do I encode an image to Base64 for HTML or CSS embedding?",
        answer:
          "Upload your image (PNG, JPG, GIF, SVG, or WebP) using drag-and-drop or the file picker. The tool generates the complete Base64 string with the correct data URI prefix (e.g., data:image/png;base64,...). Copy the output and paste it directly into an HTML <img> src attribute or a CSS background-image: url() property to embed the image inline without a separate HTTP request.",
      },
      {
        question: "Can I decode a Base64 string from an API response back to a file?",
        answer:
          "Yes. Paste the Base64 string (with or without the data URI prefix) into the decode section. Set your desired filename and file extension (e.g., report.pdf, photo.jpg). The tool reconstructs the original binary file, which you can then download directly. This works for any file type — images, PDFs, documents, audio, video, and binary data.",
      },
      {
        question: "What file types can I encode to Base64 with this tool?",
        answer:
          "The encoder supports all file types: images (PNG, JPG, GIF, SVG, WebP, BMP, ICO), documents (PDF, DOCX, XLSX, PPTX, TXT, CSV), audio (MP3, WAV, OGG, AAC), video (MP4, WebM, AVI), fonts (WOFF, WOFF2, TTF, OTF), and any other binary file. MIME type detection is automatic based on the uploaded file's extension.",
      },
      {
        question: "Does Base64 encoding increase file size, and by how much?",
        answer:
          "Yes. Base64 encoding increases file size by approximately 33%. This is because Base64 represents every 3 bytes of binary data as 4 ASCII characters. A 30 KB image becomes approximately 40 KB when Base64-encoded. For web embedding, this overhead is acceptable for small assets (under 10 KB) but larger files should be served as separate resources.",
      },
      {
        question: "Can I preview decoded Base64 image data before downloading?",
        answer:
          "Yes. When the decoded Base64 data represents an image (PNG, JPG, GIF, SVG, or WebP), the tool displays an inline preview so you can verify the content is correct before downloading the file. This is useful for validating Base64 image strings from API responses or database fields.",
      },
      {
        question: "Is my file data sent to a server during Base64 encoding or decoding?",
        answer:
          "No. All Base64 encoding and decoding is performed entirely in your browser using JavaScript's built-in FileReader API. Your files and Base64 data never leave your device, making the tool safe for processing sensitive documents, confidential images, and proprietary file data.",
      },
      {
        question: "What is a data URI and how do I use the Base64 output in HTML?",
        answer:
          "A data URI is a string format (data:[MIME-type];base64,[encoded-data]) that embeds file content directly in HTML or CSS. After encoding your file, copy the complete data URI string and use it as the src attribute in an HTML <img> tag or as the url() value in a CSS background-image property. Example: <img src='data:image/png;base64,iVBOR...' />. This eliminates the need for a separate image file and HTTP request.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function Base64FileConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <Base64FileConverter />
        </div>
      )}
    />
  )
}
