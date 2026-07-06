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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HTTP Authentication Schemes Compared</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Scheme</th>
                <th className="text-left py-2 px-2 text-foreground">Header format</th>
                <th className="text-left py-2 px-2 text-foreground">RFC</th>
                <th className="text-left py-2 px-2 text-foreground">Security</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Basic Auth</strong></td>
                <td className="py-2 px-2"><code>Authorization: Basic [base64(user:pass)]</code></td>
                <td className="py-2 px-2">RFC 7617</td>
                <td className="py-2 px-2 text-orange-500">Low (Base64 ≠ encryption; needs HTTPS)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Bearer (OAuth 2.0)</strong></td>
                <td className="py-2 px-2"><code>Authorization: Bearer [token]</code></td>
                <td className="py-2 px-2">RFC 6750</td>
                <td className="py-2 px-2 text-green-500">Medium-High (token expires, scoped)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Digest Auth</td>
                <td className="py-2 px-2"><code>Authorization: Digest [...]</code></td>
                <td className="py-2 px-2">RFC 7616</td>
                <td className="py-2 px-2 text-orange-500">Medium (mostly obsolete)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">API Key</td>
                <td className="py-2 px-2"><code>X-API-Key: [key]</code> (varies)</td>
                <td className="py-2 px-2">No standard</td>
                <td className="py-2 px-2 text-orange-500">Medium (long-lived, often single-use)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">AWS Signature v4</td>
                <td className="py-2 px-2"><code>Authorization: AWS4-HMAC-SHA256 [...]</code></td>
                <td className="py-2 px-2">AWS spec</td>
                <td className="py-2 px-2 text-green-500">High (request-signed, time-limited)</td>
              </tr>
              <tr>
                <td className="py-2 px-2">HMAC custom</td>
                <td className="py-2 px-2"><code>Authorization: HMAC-SHA256 [...]</code></td>
                <td className="py-2 px-2">Custom</td>
                <td className="py-2 px-2 text-green-500">High (replay-protected if done right)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Basic Auth Anatomy</h3>
          <p>Basic Authentication (RFC 7617) is simple but critical to get right:</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Combine username and password with a colon: <code>alice:s3cret123</code></li>
            <li>Base64-encode the result: <code>YWxpY2U6czNjcmV0MTIz</code></li>
            <li>Prepend with &quot;Basic &quot;: <code>Basic YWxpY2U6czNjcmV0MTIz</code></li>
            <li>Send as the Authorization header value</li>
          </ol>
          <p className="mt-3">
            <strong>Critical:</strong> Base64 is encoding, NOT encryption. Anyone intercepting the request can decode and read the credentials. Basic Auth must <strong>always</strong> be used over HTTPS. Even then, prefer Bearer tokens or API keys for production use — Basic Auth has no expiration / rotation built in.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Bearer Tokens: OAuth 2.0 Standard</h3>
          <p>
            Bearer tokens (RFC 6750) are the modern standard for API authentication. The token is opaque to the client — typically a JWT (JSON Web Token, RFC 7519) or a reference/opaque token that the server looks up. The format is simple: <code>Authorization: Bearer eyJhbGc...</code>. Bearer tokens have key advantages over Basic Auth:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Expiration:</strong> tokens have <code>exp</code> claims; expired tokens are rejected</li>
            <li><strong>Scoped:</strong> tokens grant specific permissions (read-only, admin, etc.)</li>
            <li><strong>Revocable:</strong> tokens can be invalidated server-side without changing user credentials</li>
            <li><strong>Stateless verification:</strong> JWTs are self-contained — no DB lookup needed</li>
            <li><strong>Refreshable:</strong> short-lived access tokens + long-lived refresh tokens</li>
          </ul>
          <p className="mt-3">
            See our <a href="/dev-tools/jwt-decoder" className="text-primary underline">JWT Decoder</a> to inspect token claims.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">API Key Patterns Across Services</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Service</th>
                <th className="text-left py-2 px-2 text-foreground">Header / format</th>
                <th className="text-left py-2 px-2 text-foreground">Key format</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">Stripe</td><td className="py-2 px-2"><code>Authorization: Bearer sk_live_...</code></td><td className="py-2 px-2"><code>sk_live_</code> or <code>sk_test_</code> prefix</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">OpenAI</td><td className="py-2 px-2"><code>Authorization: Bearer sk-...</code></td><td className="py-2 px-2"><code>sk-</code> prefix, 51 chars</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">SendGrid</td><td className="py-2 px-2"><code>Authorization: Bearer SG.[key]</code></td><td className="py-2 px-2"><code>SG.</code> prefix</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Twilio</td><td className="py-2 px-2"><code>Authorization: Basic [base64(SID:auth_token)]</code></td><td className="py-2 px-2">Account SID + Auth Token (Basic)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">GitHub</td><td className="py-2 px-2"><code>Authorization: token ghp_...</code> or <code>Bearer</code></td><td className="py-2 px-2"><code>ghp_</code> personal, <code>gho_</code> OAuth</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">AWS</td><td className="py-2 px-2"><code>Authorization: AWS4-HMAC-SHA256 [signature]</code></td><td className="py-2 px-2">Access key ID + signed request</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Google Cloud</td><td className="py-2 px-2"><code>Authorization: Bearer [OAuth2 token]</code></td><td className="py-2 px-2">OAuth2 access token</td></tr>
              <tr><td className="py-2 px-2">Mailchimp</td><td className="py-2 px-2"><code>Authorization: Basic [base64(anystring:apikey)]</code></td><td className="py-2 px-2">API key as password</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Debugging Scenarios</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>401 Unauthorized:</strong> bad credentials, expired token, or missing Authorization header. Verify header format and credentials.</li>
            <li><strong>403 Forbidden:</strong> credentials valid but lack permission. Different from 401 — check user roles / token scopes.</li>
            <li><strong>Token works in Postman but not in code:</strong> Postman uses different default URL encoding; check that special chars in tokens aren&apos;t double-encoded.</li>
            <li><strong>Basic Auth works locally, fails in production:</strong> often an HTTPS issue — some platforms enforce HTTPS for Basic Auth headers.</li>
            <li><strong>Bearer token rejected:</strong> verify the issuer (iss), audience (aud), and expiration (exp) in the JWT. Server clock skew &gt;30s causes &quot;not yet valid&quot; failures.</li>
            <li><strong>API key with special chars failing:</strong> check URL encoding — characters like <code>+</code>, <code>=</code>, <code>/</code> in keys need encoding when in URLs.</li>
            <li><strong>CORS blocking auth:</strong> server must allow Authorization in Access-Control-Allow-Headers, and Authorization isn&apos;t a &quot;simple&quot; header — triggers preflight.</li>
          </ul>
        </div>
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
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
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
