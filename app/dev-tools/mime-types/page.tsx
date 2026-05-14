import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { MimeTypes } from "@/components/dev-tools/mime-types"

const toolConfig = createToolConfig({
  toolName: "MIME Types",
  description:
    "Lookup MIME types and file extensions for upload validation, response headers, and API integration work.",
  metaTitle: "MIME Types Lookup — Content-Type by File Extension (IANA)",
  metaDescription:
    "Free MIME type / Content-Type reference. Search by file extension (.pdf, .json, .mp4) to find the IANA-registered MIME type, or paste a MIME type to find extensions. 800+ types covered. For HTTP headers, file uploads, API responses.",
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
      "MIME type / Content-Type reference. Bi-directional lookup: extension → MIME type and MIME type → extensions. 800+ IANA-registered types covered. For HTTP Content-Type headers, file upload validation, web server config, API response headers.",
    alternateName: [
      "Content-Type Lookup",
      "MIME Type Reference",
      "File Extension to MIME",
      "MIME Type Finder",
      "Content-Type Header Lookup",
      "Media Type Database",
      "IANA MIME Reference",
      "HTTP Content-Type Helper",
      "File Type Checker",
      "Upload Validation Helper",
      "Apache MIME Types",
      "Nginx MIME Types",
      "Web Server Content-Type",
      "Media Type Identifier",
      "RFC 6838 MIME Lookup",
    ],
    featureList: [
      "Bi-directional lookup: extension → MIME type, MIME type → extensions",
      "800+ IANA-registered media types covered",
      "Category filters: text, image, audio, video, application, font, model, multipart",
      "Common types pre-listed: application/json, text/html, image/png, video/mp4, application/pdf",
      "Image MIME types: png, jpeg, webp, avif, heic, gif, svg+xml, tiff, bmp",
      "Document MIME types: pdf, msword, vnd.openxmlformats-officedocument.*, vnd.oasis.opendocument.*",
      "Web fonts: woff, woff2, ttf, otf, eot",
      "Streaming media: mp4, webm, ogg, mpeg, quicktime, x-msvideo",
      "Code-friendly: copy-paste ready for Content-Type header strings",
      "RFC 6838 compliant — covers the standardized type/subtype format",
      "Vendor-prefixed types (x-* and vnd.*) included",
      "100% client-side — instant lookup with no server calls",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "6420",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a MIME Type?</h3>
          <p>
            MIME (Multipurpose Internet Mail Extensions) types are standardized two-part identifiers — <code>type/subtype</code> — that tell software the format of transmitted data. Originally created for email attachments in 1992, they became the foundation for HTTP&apos;s <code>Content-Type</code> header. Now every modern protocol that transmits data identifies the format using MIME types: HTTP, MQTT, AMQP, gRPC&apos;s metadata, S3 object metadata, browser file pickers, multipart forms — all use the same registry. The IANA maintains the official registry at <code>iana.org/assignments/media-types/</code>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">MIME Type Anatomy</h3>
          <p>Every MIME type has two parts separated by a slash: <code>type/subtype</code>. Additional parameters may follow with semicolons:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`Content-Type: text/html; charset=utf-8
Content-Type: application/json; charset=utf-8
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW`}</code>
          </pre>
          <p className="mt-3">The 8 top-level types are:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>text/</strong> — human-readable text (html, plain, css, javascript — deprecated for JS, use application/javascript now)</li>
            <li><strong>image/</strong> — bitmap and vector images (png, jpeg, webp, avif, svg+xml, gif)</li>
            <li><strong>audio/</strong> — sound files (mpeg = MP3, ogg, wav, flac, aac)</li>
            <li><strong>video/</strong> — video files (mp4, webm, ogg, quicktime)</li>
            <li><strong>application/</strong> — binary data and structured formats (json, xml, pdf, zip, octet-stream)</li>
            <li><strong>font/</strong> — modern fonts (woff, woff2, ttf, otf)</li>
            <li><strong>model/</strong> — 3D models (gltf+json, gltf-binary, obj)</li>
            <li><strong>multipart/</strong> — combined payloads (form-data, byteranges, mixed)</li>
            <li><strong>message/</strong> — emails and HTTP messages (rfc822, http)</li>
            <li><strong>chemical/</strong> — scientific data (rare)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Subtype Prefixes: x- and vnd.</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>application/x-*:</strong> &quot;experimental&quot; or vendor-specific types not officially registered. Examples: <code>application/x-www-form-urlencoded</code>, <code>application/x-shockwave-flash</code>. The <code>x-</code> prefix was deprecated by IANA in 2012 but persists.</li>
            <li><strong>application/vnd.*:</strong> vendor-specific officially-registered types. Examples: <code>application/vnd.openxmlformats-officedocument.wordprocessingml.document</code> (.docx), <code>application/vnd.ms-excel</code> (.xls), <code>application/vnd.android.package-archive</code> (.apk).</li>
            <li><strong>application/prs.*:</strong> personal / experimental types — rarely seen.</li>
            <li><strong>+json, +xml, +zip:</strong> structured suffix indicating the underlying serialization. Example: <code>application/vnd.api+json</code> (JSON API spec) — both JSON-parsable and JSON-API-specific.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Confusions and Gotchas</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>MP3 isn&apos;t audio/mp3:</strong> the correct MIME is <code>audio/mpeg</code>. Counterintuitive — &quot;mp3&quot; is the file extension, not the format name.</li>
            <li><strong>JavaScript is application/javascript:</strong> <code>text/javascript</code> is deprecated since 2009 (RFC 4329), though browsers still accept it. Use <code>application/javascript</code> in new HTTP responses.</li>
            <li><strong>JSON vs application/x-json:</strong> use <code>application/json</code> only. The <code>x-json</code> variant is wrong.</li>
            <li><strong>application/octet-stream:</strong> the catch-all for &quot;unknown binary data.&quot; Browsers download these as files instead of displaying. Useful for forced downloads.</li>
            <li><strong>multipart/form-data vs application/x-www-form-urlencoded:</strong> the former handles file uploads with a boundary string; the latter is for simple key=value pairs. The default for HTML forms is <code>x-www-form-urlencoded</code>.</li>
            <li><strong>SVG is image/svg+xml, not image/svg:</strong> the <code>+xml</code> suffix indicates the underlying format.</li>
            <li><strong>YAML has no standard MIME type:</strong> <code>application/x-yaml</code>, <code>text/yaml</code>, and <code>application/yaml</code> are all in use. RFC 9512 (2024) standardized <code>application/yaml</code>.</li>
            <li><strong>Excel files have two MIMEs:</strong> <code>application/vnd.ms-excel</code> for .xls (binary) and <code>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code> for .xlsx (zip-based).</li>
            <li><strong>JPEG can be image/jpeg or image/jpg:</strong> only <code>image/jpeg</code> is correct per IANA, but browsers accept both.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Security Considerations</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Don&apos;t trust client-supplied Content-Type:</strong> uploaders can lie about MIME type. Always sniff the actual file bytes server-side (magic number / signature detection) to verify type.</li>
            <li><strong>MIME sniffing prevention:</strong> set <code>X-Content-Type-Options: nosniff</code> on all responses. This stops browsers from second-guessing your declared Content-Type, preventing some XSS attacks.</li>
            <li><strong>Polyglot files:</strong> a single file can be valid in multiple formats simultaneously (e.g., a file that&apos;s valid PDF and valid HTML). Attackers use these to bypass content filters. Validate via byte signatures.</li>
            <li><strong>Server upload allow-list:</strong> never block-list extensions; always allow-list specific MIMEs you accept. Block-lists miss new formats and unusual aliases.</li>
            <li><strong>Validate after rendering:</strong> ImageMagick, Ghostscript, and other parsers have had CVEs for malformed files. Sandbox processing of user uploads.</li>
            <li><strong>Force download with Content-Disposition:</strong> for user-uploaded files, set <code>Content-Disposition: attachment; filename=&quot;safe.ext&quot;</code> to prevent browser execution.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Server-Side MIME Configuration</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Nginx:</strong> <code>/etc/nginx/mime.types</code> — ships with hundreds of mappings; check yours covers webp / avif / wasm / m3u8</li>
            <li><strong>Apache:</strong> <code>mime.types</code> or per-extension <code>AddType</code> directives in <code>.htaccess</code></li>
            <li><strong>Node.js:</strong> <code>mime-types</code> NPM package (used internally by Express, etc.)</li>
            <li><strong>Python:</strong> <code>mimetypes</code> standard library module — has a known issue not detecting modern formats; install <code>python-magic</code> for file-signature-based detection</li>
            <li><strong>S3 / Cloud storage:</strong> set explicit <code>Content-Type</code> metadata on upload; otherwise everything defaults to <code>application/octet-stream</code> which prevents browser display</li>
            <li><strong>CDN configuration:</strong> CloudFront, Cloudflare, Fastly all let you override Content-Type per response — useful for fixing misconfigured origins without changing the origin</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Modern Format Notes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>WebP:</strong> <code>image/webp</code> — Google&apos;s modern format, smaller than JPEG/PNG, supported in all modern browsers</li>
            <li><strong>AVIF:</strong> <code>image/avif</code> — even better compression than WebP, AV1-based, supported in Chrome 85+, Firefox 93+, Safari 16.4+</li>
            <li><strong>JXL (JPEG XL):</strong> <code>image/jxl</code> — newer still, Apple is pushing it; Chrome dropped it in 2023</li>
            <li><strong>HEIC / HEIF:</strong> <code>image/heic</code> / <code>image/heif</code> — Apple&apos;s default photo format on iPhone</li>
            <li><strong>WebM:</strong> <code>video/webm</code> — VP8/VP9 video container, broad web support</li>
            <li><strong>WASM:</strong> <code>application/wasm</code> — WebAssembly binary modules; required Content-Type to instantiate without fetch</li>
            <li><strong>HLS:</strong> <code>application/vnd.apple.mpegurl</code> or <code>application/x-mpegURL</code> — for .m3u8 video streaming playlists</li>
            <li><strong>DASH:</strong> <code>application/dash+xml</code> — for .mpd streaming manifests</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Three critical rules: (1) Never trust client-supplied Content-Type — always verify server-side using file magic numbers. (2) Set X-Content-Type-Options: nosniff on every response to prevent MIME sniffing attacks. (3) For user uploads, allow-list specific MIMEs you accept; never block-list — block-lists miss new formats and unusual aliases. For modern image formats (WebP, AVIF), serve them via `<picture>` tags with fallbacks rather than relying on Accept-header negotiation, which is fragile in proxies.",

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
      { name: "Base64 Encoder/Decoder", href: "/dev-tools/base64-encoder" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
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
