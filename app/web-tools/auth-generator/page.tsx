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
    "Free auth generator. basic auth generator online, decode. Bearer, API Key. basic auth header example. convert basic auth to username:password. No signup.",
  metaTitle: "Auth Generator Online - Basic Auth, Bearer, API Key | Free",
  metaDescription:
    "Free auth generator. basic auth generator online with decode. Bearer token, API Key headers. basic auth header example. convert basic auth to username:password. No signup.",
  path: "/web-tools/auth-generator",

  header: {
    title: "Auth header generator",
    description:
      "Generate HTTP Basic Auth, Bearer, and API Key headers. basic auth generator online with decode.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Auth Generator", href: "/web-tools/auth-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free auth generator. basic auth generator online, decode. Bearer, API Key. basic auth header example.",
    alternateName: [
      "Basic Auth Generator",
      "Auth Generator Online",
      "Basic Auth Generator Online",
    ],
    featureList: [
      "Basic Auth encode & decode",
      "Bearer token header",
      "API Key header",
      "basic auth generator online",
      "convert basic auth to username:password",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free auth generator. basic auth generator online with decode. Generate Basic Auth, Bearer token, and API Key headers. basic auth header example. basic auth token generation. convert basic auth to username:password. basic auth online decode. basic auth generator command line alternative. Free auth generator, no signup.",

    howToSteps: [
      "Basic Auth Encode: Enter username and password. Get Authorization: Basic &lt;base64&gt; header.",
      "Basic Auth Decode: Paste header or base64. convert basic auth to username:password.",
      "Bearer: Paste token. Get Authorization: Bearer header.",
      "API Key: Enter key and header name. Get X-API-Key or custom header.",
    ],

    features: [
      "basic auth generator: Encode username:password to Basic header",
      "basic auth generator decode: Decode header to username:password",
      "basic auth header example output for all types",
      "Bearer token and basic auth token headers",
      "API Key header (X-API-Key or custom)",
      "basic auth generator command line alternative",
      "100% client-side, no data sent",
    ],

    useCases: [
      "basic auth generator online: Generate Basic Auth header without curl or base64 command.",
      "basic auth online decode: Decode Authorization: Basic xxx to credentials.",
      "convert basic auth to username:password: Paste header, get decoded values.",
      "basic auth generator command line: Same result as echo -n user:pass | base64.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          This free auth generator creates HTTP authorization headers. basic
          auth generator online: encode username and password to Authorization:
          Basic &lt;base64&gt;. basic auth generator decode: paste header or base64
          to convert basic auth to username:password. Also generates Bearer
          token and API Key headers. Use instead of basic auth generator command
          line (curl, echo | base64). basic auth header example output for
          Postman, REST clients, API testing. Free auth generator, 100%
          client-side.
        </p>
      </div>
    ),

    proTip:
      "basic auth generator command line equivalent: echo -n 'user:pass' | base64. This tool does the same plus decode, Bearer, and API Key—no terminal needed.",

    faqs: [
      {
        question: "What is HTTP AUTH?",
        answer:
          "HTTP AUTH refers to authentication methods for HTTP requests. Basic Auth sends username:password as Base64 in the Authorization header. Bearer sends a token. API Key sends a key in a custom header. This free auth generator supports all three.",
      },
      {
        question: "How do I use basic auth generator online?",
        answer:
          "Enter username and password in the Basic Auth (Encode) tab. The Authorization: Basic header appears. Copy it for API calls. For basic auth online decode, paste a header or base64 in the Decode tab to convert basic auth to username:password.",
      },
      {
        question: "What is basic auth header example?",
        answer:
          "basic auth header example: Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ= (base64 of username:password). This auth generator creates that format. Use for Postman, curl, fetch, axios.",
      },
      {
        question: "Is there a basic auth generator decode?",
        answer:
          "Yes. Use the Basic Auth (Decode) tab. Paste Authorization: Basic xxx or raw base64. Get username and password. convert basic auth to username:password instantly.",
      },
      {
        question: "Is this a free auth generator?",
        answer:
          "Yes. This free auth generator handles Basic Auth encode/decode, Bearer token, and API Key. basic auth generator online, no signup. 100% client-side.",
      },
    ],

    additionalContent: [
      {
        heading: "Basic Auth Generator — Encode & Decode",
        content:
          "basic auth generator online: encode username and password to Authorization: Basic header. basic auth generator decode: paste header or base64 to convert basic auth to username:password. basic auth header example for API testing. basic auth online decode without command line. Free auth generator.",
      },
      {
        heading: "Basic Auth Generator Command Line Alternative",
        content:
          "basic auth generator command line: echo -n 'user:pass' | base64 produces the same Base64 as Basic Auth. This tool does that plus formats the full header and decodes. Use for basic auth token generation without terminal.",
      },
      {
        heading: "All Auth Types — Basic, Bearer, API Key",
        content:
          "This auth generator supports Basic Auth (encode/decode), Bearer token (Authorization: Bearer), and API Key (X-API-Key or custom). basic auth generator online, basic auth online decode, Bearer for OAuth/JWT, API Key for REST APIs. Free auth generator.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
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
