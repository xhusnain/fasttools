import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HttpStatusCodes } from "@/components/dev-tools/http-status-codes"

const toolConfig = createToolConfig({
  toolName: "HTTP Status Codes",
  description:
    "HTTP status codes list. http status codes 200, 201, 400, 404, 500 with examples. http status codes table. http stands for. http methods. http-status-codes npm, node http status codes, http status codes github. Free.",
  metaTitle: "HTTP Status Codes - Complete List & Table | 200, 404, 500 with Examples",
  metaDescription:
    "Complete HTTP status codes list and table. http status codes 200, 201, 400, 404, 500 with examples. http stands for Hypertext Transfer Protocol. http methods. http-status-codes npm, node http status codes. SMTP, FTP codes. Free.",
  path: "/dev-tools/http-status-codes",

  header: {
    title: "HTTP status codes",
    description:
      "Complete list of HTTP, SMTP, and FTP status codes with search. 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Complete HTTP status codes list and table. http status codes 200, 201, 400, 404, 500 with examples. http stands for, http methods. http-status-codes npm, node http status codes.",
    alternateName: [
      "HTTP Status Codes List",
      "HTTP Status Codes Table",
      "http-status-codes npm",
      "Node HTTP Status Codes",
      "HTTP Status Codes GitHub",
      "List of HTTP Status Codes",
    ],
    featureList: [
      "Complete HTTP status codes - IANA registry",
      "http status codes 200, 201, 400, 404, 500 with examples",
      "http status codes table - searchable, filterable",
      "http stands for Hypertext Transfer Protocol",
      "http methods - GET, POST, PUT, DELETE, PATCH",
      "1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error",
      "SMTP and FTP status codes included",
      "When/where/why for each code",
      "100% free, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "HTTP status codes are three-digit numbers returned by a server to indicate whether an HTTP request has been successfully completed. They are grouped into five classes: 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error. Use this http status codes tool as a complete http status codes table. http status codes 200, 201, 400, 404, 500 with examples. http stands for Hypertext Transfer Protocol. http-status-codes npm alternative. node http status codes reference. http status codes github. Free.",

    howToSteps: [
      "Search by code (e.g. 404, 200), name, or description.",
      "Filter by protocol: HTTP, SMTP, or FTP. Filter by category: 1xx, 2xx, 3xx, 4xx, 5xx.",
      "Click a row to expand and see when/where/why you get each status code.",
    ],

    features: [
      "http status codes table: Complete IANA-registered HTTP codes",
      "http status codes 200: OK - standard success",
      "http status codes 201: Created - resource created",
      "http status codes 400: Bad Request - malformed request",
      "http status codes 404: Not Found - resource not found",
      "http status codes 500: Internal Server Error - server failure",
      "http status codes with examples: When, where, why for each",
      "http status codes cats: 418 I'm a teapot included",
      "http stands for: Hypertext Transfer Protocol",
      "http methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
      "SMTP and FTP status codes for email and file transfer",
      "http-status-codes npm: Browser alternative",
      "node http status codes: Reference for Express, Fastify",
    ],

    useCases: [
      "http status codes 200: Verify success responses in APIs",
      "http status codes 404: Debug broken links, missing resources",
      "http status codes 400: Understand validation errors",
      "http status codes 500: Troubleshoot server errors",
      "http status codes table: Quick reference for REST APIs",
      "http-status-codes npm: Alternative to Node.js package",
      "node http status codes: Use in Express res.status(200)",
      "http status codes github: Reference for API design",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HTTP status codes are three-digit responses from a server indicating
          request outcome. 1xx: Informational (request received, continuing). 2xx:
          Success (request succeeded). 3xx: Redirection (further action needed).
          4xx: Client Error (bad request, unauthorized, not found). 5xx: Server
          Error (server failed). http stands for Hypertext Transfer Protocol. This
          tool provides a complete http status codes table with http status codes
          200, 201, 400, 404, 500 with examples. Also includes SMTP (email) and
          FTP status codes. http-status-codes npm and node http status codes
          alternative.
        </p>
        <p>
          Common codes: 200 OK (success), 201 Created (POST created resource),
          204 No Content (success, no body), 301/302 (redirects), 304 Not
          Modified (use cache), 400 Bad Request, 401 Unauthorized, 403 Forbidden,
          404 Not Found, 429 Too Many Requests, 500 Internal Server Error, 502 Bad
          Gateway, 503 Service Unavailable.
        </p>
      </div>
    ),

    proTip:
      "Use 204 for successful DELETE. Use 201 with Location header for POST. Use 429 with Retry-After for rate limiting. http status codes 418 I'm a teapot is from RFC 2324 (April Fools).",

    faqs: [
      {
        question: "What are HTTP status codes?",
        answer:
          "HTTP status codes are three-digit numbers (100-599) returned by web servers to indicate request outcome. 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error.",
      },
      {
        question: "What does HTTP stand for?",
        answer:
          "http stands for Hypertext Transfer Protocol. It is the foundation of data communication on the web.",
      },
      {
        question: "What is http status code 200?",
        answer:
          "http status codes 200 means OK - the request succeeded. The response body contains the requested resource. Most common success code.",
      },
      {
        question: "What is http status code 404?",
        answer:
          "http status codes 404 means Not Found - the requested resource does not exist at the URL. Common for broken links.",
      },
      {
        question: "What is http status code 500?",
        answer:
          "http status codes 500 means Internal Server Error - the server encountered an error and could not fulfill the request.",
      },
      {
        question: "What is http status code 201?",
        answer:
          "http status codes 201 means Created - the request succeeded and a new resource was created. Used after successful POST.",
      },
      {
        question: "What is http status code 400?",
        answer:
          "http status codes 400 means Bad Request - the server could not understand the request due to invalid syntax or malformed data.",
      },
      {
        question: "Where can I find http status codes with examples?",
        answer:
          "This tool provides http status codes with examples including when, where, and why you get each code. Search and filter by protocol and category.",
      },
      {
        question: "Is there http-status-codes npm package?",
        answer:
          "Yes. The http-status-codes npm package provides constants. This tool is a browser-based http status codes table and reference.",
      },
      {
        question: "What are node http status codes?",
        answer:
          "Node http status codes are the same as standard HTTP. In Node/Express use res.status(200).json(). This tool lists all node http status codes.",
      },
    ],

    additionalContent: [
      {
        heading: "http status codes table — Quick reference",
        content:
          "1xx: 100 Continue, 101 Switching Protocols, 102 Processing, 103 Early Hints. 2xx: 200 OK, 201 Created, 202 Accepted, 204 No Content, 206 Partial Content. 3xx: 301 Moved Permanently, 302 Found, 304 Not Modified, 307 Temporary Redirect, 308 Permanent Redirect. 4xx: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests. 5xx: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.",
      },
      {
        heading: "http methods and status codes",
        content:
          "http methods: GET (retrieve), POST (create), PUT (replace), PATCH (update), DELETE (remove), HEAD (headers only), OPTIONS (capabilities). Use 200/204 for GET/DELETE success, 201 for POST success, 400 for bad input, 404 for not found, 500 for server error.",
      },
    ],

    relatedTools: [
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HttpStatusCodesPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HttpStatusCodes />
        </div>
      )}
    />
  )
}
