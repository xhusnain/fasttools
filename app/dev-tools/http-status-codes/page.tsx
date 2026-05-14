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
    "Reference HTTP status code classes and individual code meanings for API and web debugging workflows.",
  metaTitle: "HTTP Status Codes Reference — Complete List 1xx to 5xx (2026)",
  metaDescription:
    "Complete HTTP status codes reference. Browse all codes from 1xx to 5xx with meanings and usage examples. 200 OK, 301 redirect, 404 not found, 500 server error, and more.",
  path: "/dev-tools/http-status-codes",

  header: {
    title: "HTTP Status Codes Reference",
    description:
      "Complete reference for all HTTP status codes from 1xx Informational to 5xx Server Error. Each code includes its meaning, when to use it, and common scenarios. Essential for API development, debugging, and web infrastructure.",
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
      "Browse HTTP status code references for request/response debugging and API implementation checks.",
    featureList: [
      "Status code classes",
      "Code-specific explanations",
      "Searchable reference workflow",
      "API debugging support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTTP Status Codes Reference is a free tool that lists all HTTP response status codes with descriptions, use cases, and troubleshooting guidance.",
    quickAnswer:
      "Search or browse HTTP status codes by category: 1xx (informational), 2xx (success), 3xx (redirection), 4xx (client error), 5xx (server error). Each code includes its meaning, common causes, and how to fix it.",
    keyTakeaways: [
      "200 OK, 201 Created, 204 No Content — successful responses",
      "301 Moved Permanently, 302 Found, 304 Not Modified — redirections",
      "400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found — client errors",
      "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable — server errors",
      "Searchable and filterable reference for API development and debugging",
    ],
    overview:
      "Browse all HTTP status codes with this comprehensive reference. Covers every code from 1xx (Informational) through 5xx (Server Error) with clear explanations and practical usage examples. Quickly look up what 200 OK, 201 Created, 301 Moved Permanently, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests, 500 Internal Server Error, and 503 Service Unavailable mean. Essential for REST API development, web server configuration, error handling, and debugging HTTP requests.",

    howToSteps: [
      "Search for a status code or class group.",
      "Review the response meaning and common causes.",
      "Map the code to client/server handling logic.",
      "Apply fixes and revalidate request behavior.",
    ],

    features: [
      "HTTP class-based organization",
      "Code-level lookup utility",
      "Useful for API and frontend debugging",
      "Fast search and interpretation workflow",
      "Reference-style developer page",
    ],

    useCases: [
      "API integration troubleshooting",
      "Backend response design reviews",
      "Frontend error handling validation",
      "Support incident diagnosis",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Status-code reference pages perform best when they are concise and easy
          to navigate. This page focuses on that practical debugging intent.
        </p>
        <p>
          It helps teams reduce diagnosis time by quickly mapping response codes
          to likely causes and next actions.
        </p>
      </div>
    ),

    proTip:
      "Log response status with request context (method, route, correlation ID) to resolve production issues faster.",

    faqs: [
      {
        question: "What do 4xx codes usually indicate?",
        answer:
          "4xx responses generally indicate client-side request issues such as invalid input, auth failures, or missing resources.",
      },
      {
        question: "What do 5xx codes usually indicate?",
        answer:
          "5xx responses typically indicate server-side failures or upstream dependency problems.",
      },
      {
        question: "Is 304 an error?",
        answer:
          "No. 304 is a caching-related response indicating content has not changed under conditional request logic.",
      },
      {
        question: "How should APIs use status codes?",
        answer:
          "APIs should use consistent status semantics aligned with operation outcomes and include structured error payloads.",
      },
      {
        question: "Can this help with frontend UX decisions?",
        answer:
          "Yes. Understanding status classes improves retry logic, messaging, and fallback behavior.",
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
