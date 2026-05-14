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
  metaTitle: "Auth Header Generator — Basic / Bearer / API Key HTTP Headers",
  metaDescription:
    "Free HTTP authorization header generator. Build Basic Auth (Base64), Bearer token (OAuth / JWT), and custom API key headers for Postman, curl, fetch. Decode Basic Auth back to user:password. 100% client-side, no signup.",
  path: "/web-tools/auth-generator",

  header: {
    title: "Auth Header Generator",
    description:
      "Generate HTTP Authorization headers for Basic Auth (Base64-encoded credentials), Bearer token (OAuth 2.0 / JWT), and custom API key authentication — encode, decode, and copy headers ready for Postman, curl, fetch, and any REST client.",
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
    alternateName: [
      "Basic Auth Generator",
      "Authorization Header Builder",
      "Bearer Token Header Maker",
      "HTTP Auth Encoder",
      "API Key Header Builder",
      "OAuth Token Header Tool",
      "JWT Auth Header Generator",
      "curl Auth Header Builder",
      "Postman Auth Header Helper",
      "REST API Auth Helper",
      "Basic Auth Decoder",
      "RFC 7617 Basic Auth Tool",
      "Authorization Header Encoder",
      "Web API Auth Generator",
      "HTTP Header Auth Tool",
    ],
    featureList: [
      "Basic Auth: encode username + password → `Authorization: Basic <Base64>`",
      "Basic Auth decode: paste header value, see decoded user:password",
      "Bearer token: format `Authorization: Bearer <token>` for OAuth 2.0 / JWT",
      "API key header: build custom `X-API-Key: <value>` or `Api-Key: <value>` headers",
      "Multi-format output: HTTP header line, curl `-H` flag, fetch headers object, Postman config",
      "Code snippets generated: JavaScript fetch, Python requests, Node axios, curl, PowerShell Invoke-RestMethod",
      "JWT token preview when Bearer value is a JWT — decodes header / payload inline",
      "Test request panel: optionally send a sample request with the generated headers (HEAD only, no body data exposed)",
      "Show / hide secret toggle to prevent shoulder-surfing",
      "Copy each format individually",
      "100% client-side — credentials never leave your browser",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An Auth Generator is a free tool that creates HTTP Basic Authentication headers, Bearer token headers, and API key configurations for testing and development.",
    quickAnswer:
      "Enter your username/password or API token to generate the correct HTTP Authorization header. Supports Basic Auth (Base64-encoded credentials), Bearer tokens, and API key headers. Copy the header for use in API testing tools.",
    keyTakeaways: [
      "Generates HTTP Basic Auth headers with Base64-encoded credentials",
      "Creates Bearer token Authorization headers for OAuth/JWT APIs",
      "Supports API key headers in various formats (header, query, cookie)",
      "Basic Auth format: Authorization: Basic base64(username:password)",
      "Always use HTTPS when sending credentials — Basic Auth is not encrypted",
    ],
    overview:
      "This free auth header generator lets you create, encode, and decode HTTP Authorization headers directly in your browser without command-line tools. Build Basic Auth headers by entering a username and password to produce a Base64-encoded credential string in the standard 'Authorization: Basic <base64>' format. Generate Bearer token headers for OAuth 2.0, JWT, and personal access token workflows. Configure custom API key headers with flexible header names like X-API-Key, Authorization, or any provider-specific key. Each output is copy-ready for Postman, curl, Insomnia, HTTPie, and frontend fetch/axios requests — ideal for developers, QA engineers, and DevOps teams testing REST APIs and microservice integrations.",

    howToSteps: [
      "Select the Basic Auth Encode tab, enter your username and password, and instantly generate the Base64-encoded Authorization header string.",
      "Switch to Basic Auth Decode to paste an existing Base64 header and recover the original username:password credentials for debugging API authentication failures.",
      "Use the Bearer Token tab to wrap your OAuth 2.0, JWT, or personal access token in a properly formatted 'Authorization: Bearer <token>' header.",
      "Configure the API Key tab with a custom header name (X-API-Key, api-key, etc.) and your key value for provider-specific authentication.",
      "Copy any generated header with one click and paste it into Postman, curl, Insomnia, or your application code.",
    ],

    features: [
      "Basic Auth header generation with automatic Base64 encoding of username:password credentials",
      "Base64 decode for existing Basic Authorization headers to recover original credentials",
      "Bearer token header formatting for OAuth 2.0, JWT, and personal access token authentication",
      "Custom API key header generation with configurable header names and placement options",
      "One-click copy output formatted for Postman, curl, Insomnia, HTTPie, and fetch/axios code",
      "Client-side processing — credentials never leave your browser for maximum security",
    ],

    useCases: [
      "Preparing HTTP Authorization headers for REST API testing and integration QA in Postman or curl",
      "Debugging 401 Unauthorized errors by decoding Base64 Basic Auth credentials to verify username and password",
      "Creating standardized authentication header templates for team API documentation and onboarding guides",
      "Rapidly switching between Basic Auth, Bearer token, and API key authentication methods during multi-service testing",
      "Generating OAuth 2.0 Bearer headers for JWT-based microservice communication testing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HTTP Authorization headers are the standard mechanism for authenticating API requests across REST, GraphQL, and SOAP services. The three most common authentication schemes — Basic Auth, Bearer tokens, and API keys — each follow specific formatting rules defined by RFC 7235 and RFC 7617. Basic Authentication concatenates username and password with a colon separator, Base64-encodes the result, and prepends the &quot;Basic&quot; scheme identifier. Bearer authentication wraps an opaque token (typically a JWT or OAuth 2.0 access token) with the &quot;Bearer&quot; prefix. API key authentication varies by provider but commonly uses custom headers like X-API-Key.
        </p>
        <p>
          This auth header generator eliminates manual formatting errors that cause 401 Unauthorized and 403 Forbidden responses during API development. It produces correctly formatted headers you can paste directly into Postman collections, curl commands, Insomnia workspaces, or frontend code using fetch or axios. The decode feature is invaluable for debugging — paste any Base64-encoded Basic Auth string to instantly reveal the underlying credentials without writing terminal commands. All processing runs client-side in your browser, so sensitive credentials like passwords, JWT tokens, and API keys are never transmitted to external servers.
        </p>
      </div>
    ),

    proTip:
      "Always use HTTPS when sending Basic Auth headers — Base64 is encoding, not encryption. For production APIs, prefer Bearer tokens with short expiration times and rotate API keys on a regular schedule. Use environment variables in Postman and curl scripts instead of hardcoding credentials.",

    faqs: [
      {
        question: "What is HTTP Basic Authentication and how does Base64 encoding work?",
        answer:
          "HTTP Basic Authentication is defined in RFC 7617. It combines username and password as 'username:password', Base64-encodes the string, and sends it as 'Authorization: Basic <encoded-value>'. Base64 is an encoding scheme (not encryption), so Basic Auth must always be used over HTTPS to protect credentials in transit.",
      },
      {
        question: "How do I decode an existing Basic Auth header to see the username and password?",
        answer:
          "Paste the full 'Authorization: Basic ...' header or just the Base64 string into the decode tab. The tool instantly reverses the Base64 encoding to reveal the original username:password pair — useful for debugging 401 errors and verifying credential mismatches in API integrations.",
      },
      {
        question: "What is a Bearer token and when should I use Bearer authentication?",
        answer:
          "Bearer tokens are opaque access tokens (often JWTs from OAuth 2.0 flows) sent as 'Authorization: Bearer <token>'. Use Bearer auth for modern REST APIs, single-page applications, mobile apps, and microservice-to-microservice communication where tokens have scoped permissions and expiration times.",
      },
      {
        question: "What is the difference between Basic Auth, Bearer tokens, and API key authentication?",
        answer:
          "Basic Auth sends Base64-encoded username:password credentials per request. Bearer tokens use short-lived access tokens from OAuth/JWT flows. API keys are static secrets sent via custom headers (X-API-Key) or query parameters. Bearer tokens offer the best security for production APIs; Basic Auth is common for internal tools; API keys are simplest for third-party service integrations.",
      },
      {
        question: "Can I use generated auth headers in Postman, curl, and Insomnia?",
        answer:
          "Yes. Copy the generated header and paste it as a raw header in Postman's Headers tab, as a '-H' flag in curl commands, or in Insomnia's header configuration. The output is formatted exactly as HTTP clients expect.",
      },
      {
        question: "Is this auth header generator free and are my credentials secure?",
        answer:
          "Yes, completely free with no signup required. All encoding and decoding runs client-side in your browser using JavaScript — your passwords, tokens, and API keys are never sent to any server. For maximum security, still avoid using production credentials during testing.",
      },
      {
        question: "How do I fix a 401 Unauthorized error when using Authorization headers?",
        answer:
          "Common causes include missing the 'Basic' or 'Bearer' prefix, extra whitespace in the header value, expired tokens, incorrect Base64 encoding, or using the wrong header name. Use the decode tab to verify your credentials, check token expiration with a JWT decoder, and confirm the API expects the authentication scheme you are sending.",
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
