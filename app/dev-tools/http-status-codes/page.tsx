import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HttpStatusCodes = dynamic(
  () => import("@/components/dev-tools/http-status-codes").then((mod) => mod.HttpStatusCodes),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTTP Status Codes",
  description:
    "Search HTTP, SMTP, and FTP response codes with short meanings, category filters, and expandable troubleshooting notes.",
  metaTitle: "HTTP Status Codes Reference - 1xx to 5xx Lookup | FastTools",
  metaDescription:
    "Search HTTP status codes from 1xx to 5xx, plus SMTP and FTP response codes. Filter by protocol and category, expand each code, and review HTTP method safety/idempotency.",
  path: "/dev-tools/http-status-codes",

  header: {
    title: "HTTP Status Codes Reference",
    description:
      "Look up HTTP response codes, filter by status class, and expand each entry for practical debugging context. The reference also includes SMTP and FTP reply codes.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
  ],

  schemaOptions: {
    applicationCategory: "ReferenceApplication",
    description:
      "Searchable response-code reference with 62 HTTP status codes, plus SMTP and FTP reply codes, protocol filters, 1xx-5xx category filters, expandable notes, and an HTTP method reference table.",
    alternateName: [
      "HTTP Status Code Lookup",
      "HTTP Response Codes",
      "REST API Status Codes",
      "HTTP Error Codes",
      "HTTP Codes Cheat Sheet",
      "REST Status Code Guide",
      "API Status Code Reference",
      "SMTP Reply Codes",
      "FTP Reply Codes",
      "HTTP Debugging Guide",
    ],
    featureList: [
      "Search by code, name, or description",
      "Filter by HTTP, SMTP, FTP, or all protocols",
      "Filter by 1xx, 2xx, 3xx, 4xx, and 5xx classes",
      "Expandable when/where/why notes for each code",
      "Includes common HTTP codes such as 200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 422, 429, 500, 502, 503, and 504",
      "Includes HTTP method reference with safe and idempotent markers",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "8230",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTTP status code is a three-digit response number sent by a server to summarize the result of a request, such as 200 OK, 404 Not Found, or 500 Internal Server Error.",

    quickAnswer:
      "Search for a code such as 404, 429, 502, or 250, then filter by protocol or class. Expand the matching row to see where that response is usually used and why it appears.",

    keyTakeaways: [
      "HTTP status codes are grouped into 1xx informational, 2xx success, 3xx redirection, 4xx client error, and 5xx server error classes.",
      "The tool starts on HTTP codes but can also search SMTP and FTP reply codes.",
      "Each entry includes a short description plus an expandable when/where/why note.",
      "The HTTP method table shows which methods are safe and idempotent.",
      "The current data set does not include vendor-specific CDN codes such as Cloudflare 520-527.",
    ],

    overview:
      "Use this response-code reference when debugging API calls, server logs, browser network panels, mail server replies, or FTP transfers. The search box accepts code numbers, names, and terms such as timeout or unauthorized. Protocol filters let you switch between HTTP, SMTP, FTP, or all codes, while category filters help narrow the list to 2xx success, 4xx client errors, 5xx server errors, and other classes.",

    howToSteps: [
      "Enter a status code, phrase, or error term in the search field.",
      "Choose HTTP, SMTP, FTP, or All depending on the log or protocol you are checking.",
      "Optionally filter by 1xx, 2xx, 3xx, 4xx, or 5xx class.",
      "Expand a result row to read the when/where/why explanation.",
      "Use the HTTP methods table when designing API responses around GET, POST, PUT, PATCH, DELETE, HEAD, or OPTIONS.",
    ],

    features: [
      {
        title: "Protocol Filters",
        description:
          "Switch between HTTP, SMTP, FTP, and combined protocol search instead of forcing unrelated codes into one list.",
      },
      {
        title: "Status Class Filters",
        description:
          "Narrow response codes by 1xx, 2xx, 3xx, 4xx, or 5xx classes for faster debugging.",
      },
      {
        title: "Expandable Code Notes",
        description:
          "Each status row includes a concise description and an expanded note explaining common usage context.",
      },
      {
        title: "HTTP Methods Reference",
        description:
          "Review common HTTP methods and whether each method is considered safe and idempotent.",
      },
    ],

    useCases: [
      "Debug API responses from browser DevTools or logs.",
      "Choose accurate REST response codes for backend endpoints.",
      "Check SMTP delivery replies and FTP transfer replies.",
      "Teach junior developers the difference between 401, 403, 404, 422, and 429.",
      "Confirm method safety and idempotency during API design.",
    ],

    aboutTool:
      "This page is a fast reference, not a live validator. It helps interpret response codes that you already see in logs or network tools. For production debugging, pair the code with request method, URL, response body, correlation ID, upstream logs, and timing data.",

    proTip:
      "Start with the first digit: 4xx usually means the request should change, while 5xx usually means the server or upstream dependency needs attention. Then inspect the specific code for the exact next step.",

    faqs: [
      {
        question: "What do 2xx HTTP codes mean?",
        answer:
          "2xx codes indicate successful responses, such as 200 OK, 201 Created, and 204 No Content.",
      },
      {
        question: "What is the difference between 401 and 403?",
        answer:
          "401 means authentication is missing or invalid. 403 means the server understood the request but refuses access, often because the authenticated user lacks permission.",
      },
      {
        question: "Is 304 Not Modified an error?",
        answer:
          "No. 304 is a caching response used with conditional requests, telling the client it can reuse its cached copy.",
      },
      {
        question: "Does this include SMTP and FTP codes?",
        answer:
          "Yes. Use the protocol filter to search SMTP and FTP reply codes as well as HTTP status codes.",
      },
      {
        question: "Does this include Cloudflare 520-series errors?",
        answer:
          "No. The current reference focuses on HTTP, SMTP, and FTP codes in the local data set and does not list CDN-specific 520-527 codes.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "MIME Types Reference", href: "/dev-tools/mime-types" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "URL Encoder", href: "/web-tools/url-encoder" },
      { name: "DNS / SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
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
