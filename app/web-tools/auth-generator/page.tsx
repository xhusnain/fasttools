import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AuthGeneratorTool = dynamic(
  () =>
    import("@/components/web-tools/auth-generator").then((mod) => mod.AuthGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Auth Header Generator",
  description:
    "Generate HTTP Basic, Bearer, and API key headers for API testing and integration workflows.",
  metaTitle: "Auth Header Generator (Basic, Bearer, API Key)",
  metaDescription:
    "Create and decode Basic Auth headers, build Bearer headers, and generate API key headers instantly for Postman, curl, and app testing.",
  path: "/web-tools/auth-generator",
  keywords: [
    "auth header generator",
    "basic auth generator",
    "basic auth decode",
    "bearer token header",
    "api key header",
    "authorization header",
  ],

  header: {
    title: "Auth Header Generator",
    description:
      "Build Authorization headers for Basic, Bearer, and API key authentication.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Auth Header Generator", href: "/web-tools/auth-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate and decode HTTP authorization headers in-browser.",
    alternateName: ["Basic Auth Generator", "Authorization Header Builder"],
    featureList: [
      "Basic Auth encode",
      "Basic Auth decode",
      "Bearer header generation",
      "API key header templates",
      "Copy-ready output",
      "Client-side processing",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "This tool helps you generate and validate HTTP auth headers without using command-line utilities. It supports Basic Auth encode/decode, Bearer token header formatting, and configurable API key headers for common API clients.",

    howToSteps: [
      "Use the Basic Auth Encode tab to create an Authorization header from username and password.",
      "Use Basic Auth Decode to recover credentials from a Basic header for debugging.",
      "Use Bearer and API Key tabs to generate ready-to-copy headers for testing tools.",
    ],

    features: [
      "Basic Auth header generation",
      "Base64 decode for existing Basic headers",
      "Bearer token header formatting",
      "Custom API key header names",
      "Copy-ready output for Postman/curl/HTTP clients",
    ],

    useCases: [
      "Preparing headers for API testing and QA",
      "Debugging authentication failures from encoded credentials",
      "Creating consistent auth templates for team documentation",
      "Quickly switching between Basic, Bearer, and API key auth models",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Authorization headers are required by most API gateways and backend
          services. This tool reduces manual formatting errors by generating the
          exact header string for each authentication type.
        </p>
        <p>
          For Basic Auth, credentials are base64-encoded and should always be
          sent over HTTPS. For Bearer and API keys, keep secrets scoped and
          rotated according to your security policy.
        </p>
      </div>
    ),

    proTip:
      "Treat generated credentials as sensitive data. Use test keys whenever possible and avoid sharing production tokens in screenshots.",

    faqs: [
      {
        question: "What is a Basic Auth header?",
        answer:
          "It is an HTTP `Authorization` header in the format `Basic <base64(username:password)>` used by many APIs and legacy integrations.",
      },
      {
        question: "Can this tool decode Basic Auth headers?",
        answer:
          "Yes. Paste a Basic header or raw base64 string in the decode tab to recover username and password for debugging.",
      },
      {
        question: "How do Bearer headers work?",
        answer:
          "Bearer headers use the format `Authorization: Bearer <token>` and are common in OAuth and JWT-based flows.",
      },
      {
        question: "What header name should I use for API keys?",
        answer:
          "Common names include `X-API-Key` and `Authorization`, but always follow the API provider's documentation.",
      },
      {
        question: "Is this auth generator free?",
        answer:
          "Yes. It is free and runs in your browser for normal usage.",
      },
    ],

    additionalContent: [
      {
        heading: "Command-Line Equivalent",
        content:
          "For Basic Auth, a common CLI approach is `echo -n 'user:pass' | base64`. This tool produces the same output with a visual workflow and built-in decode support.",
      },
      {
        heading: "Common Debugging Issue",
        content:
          "If auth fails, check for extra spaces, missing prefixes (`Basic` or `Bearer`), incorrect header names, and token expiration before retrying requests.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AuthGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AuthGeneratorTool />
        </div>
      )}
    />
  )
}
