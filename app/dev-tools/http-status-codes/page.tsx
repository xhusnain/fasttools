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
  metaTitle: "HTTP Status Codes Reference (1xx to 5xx)",
  metaDescription:
    "Browse HTTP status code meanings, classes, and common usage patterns for API development and troubleshooting.",
  path: "/dev-tools/http-status-codes",
  keywords: [
    "http status codes",
    "http code list",
    "http 404 meaning",
    "http 500 error",
    "api status codes",
  ],

  header: {
    title: "HTTP Status Codes",
    description:
      "Quick reference for HTTP response classes and common API/web error diagnostics.",
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
    overview:
      "Use this status-code reference to quickly interpret HTTP responses during API development, integration testing, and production debugging. It covers code classes and practical meaning.",

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
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
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
