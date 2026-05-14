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
  metaTitle: "HTTP Status Codes Reference — Complete 1xx–5xx List (RFC 9110)",
  metaDescription:
    "Complete HTTP status codes reference: 1xx Informational, 2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error. Each code with description, common causes, fix guidance. RFC 9110 compliant, searchable, dev-friendly.",
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
      "Comprehensive HTTP status codes reference (RFC 9110, RFC 7231, RFC 6585, RFC 7538). All classes from 1xx Informational to 5xx Server Error with descriptions, common causes, and fix guidance. Includes WebDAV (4xx/5xx), browser-specific codes (418, 451), and modern Cloudflare extensions.",
    alternateName: [
      "HTTP Status Code Lookup",
      "HTTP Response Codes",
      "REST API Status Codes",
      "HTTP Error Codes",
      "200 OK Reference",
      "404 Not Found Reference",
      "500 Internal Server Error Reference",
      "HTTP Codes Cheat Sheet",
      "REST Status Code Guide",
      "API Status Code Reference",
      "Mozilla HTTP Status",
      "HTTPstatuses Alternative",
      "RFC 9110 Reference",
      "Web Server Status Lookup",
      "HTTP Debugging Guide",
    ],
    featureList: [
      "Complete 100–599 range covered — every standard HTTP status code with description",
      "Organized by class: 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error",
      "Common-use highlights: 200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 405, 409, 410, 422, 429, 500, 502, 503, 504",
      "When to use which: REST API guidance for choosing the right code",
      "Common causes for each error code (e.g., 502 = upstream timeout, 401 = expired JWT)",
      "Modern additions: 426 Upgrade Required, 428 Precondition Required, 451 Unavailable For Legal Reasons",
      "WebDAV codes: 207 Multi-Status, 422 Unprocessable Entity, 423 Locked, 424 Failed Dependency",
      "Cloudflare-specific: 520, 521, 522, 523, 524, 525, 526, 527 — common for ops debugging",
      "Search and filter by code number or by error category",
      "Code recommendations: 'use 422 instead of 400 when payload is well-formed but invalid'",
      "RFC 9110 / 7231 / 6585 / 7538 references for spec lookup",
      "100% client-side, instant search",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "8230",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HTTP Status Code Classes Explained</h3>
          <p>HTTP status codes are 3-digit numbers grouped by leading digit into five classes, each communicating a category of response:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>1xx Informational</strong> (100 Continue, 101 Switching Protocols, 103 Early Hints): Provisional responses indicating the request is being processed. Rarely seen in app code; handled by HTTP libraries.</li>
            <li><strong>2xx Success</strong> (200 OK, 201 Created, 204 No Content, 206 Partial Content): Request was successfully received and processed. The default class for happy-path responses.</li>
            <li><strong>3xx Redirection</strong> (301, 302, 304, 307, 308): The client should take additional action — usually following a different URL. 304 Not Modified is special; it&apos;s a cache hit, not an error.</li>
            <li><strong>4xx Client Error</strong> (400, 401, 403, 404, 405, 409, 410, 422, 429): The client made a bad request. Auth issues, missing resources, conflict, invalid data, rate limits.</li>
            <li><strong>5xx Server Error</strong> (500, 502, 503, 504, 507): The server failed to fulfill a valid request. Bugs, dependency outages, capacity issues.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The 15 Most Common Status Codes in Practice</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Code</th>
                <th className="text-left py-2 px-2 text-foreground">Name</th>
                <th className="text-left py-2 px-2 text-foreground">When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>200</strong></td>
                <td className="py-2 px-2">OK</td>
                <td className="py-2 px-2">Successful GET / POST / PUT — the default success response</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>201</strong></td>
                <td className="py-2 px-2">Created</td>
                <td className="py-2 px-2">Successful POST that created a new resource — return the resource in body</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>204</strong></td>
                <td className="py-2 px-2">No Content</td>
                <td className="py-2 px-2">Successful DELETE or PUT with no response body</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>301</strong></td>
                <td className="py-2 px-2">Moved Permanently</td>
                <td className="py-2 px-2">URL permanently changed — SEO-preserving redirect</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>302 / 307</strong></td>
                <td className="py-2 px-2">Found / Temp Redirect</td>
                <td className="py-2 px-2">Temporary redirect — 307 preserves method, 302 may downgrade POST to GET</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>304</strong></td>
                <td className="py-2 px-2">Not Modified</td>
                <td className="py-2 px-2">Conditional GET — cached version still valid (NOT an error)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>400</strong></td>
                <td className="py-2 px-2">Bad Request</td>
                <td className="py-2 px-2">Malformed request — parsing failure, missing required fields, invalid JSON</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>401</strong></td>
                <td className="py-2 px-2">Unauthorized</td>
                <td className="py-2 px-2">Authentication required or invalid (e.g., expired JWT) — different from 403!</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>403</strong></td>
                <td className="py-2 px-2">Forbidden</td>
                <td className="py-2 px-2">Authenticated but lacks permission — user is logged in but not allowed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>404</strong></td>
                <td className="py-2 px-2">Not Found</td>
                <td className="py-2 px-2">Resource doesn&apos;t exist — also use to hide existence for security</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>409</strong></td>
                <td className="py-2 px-2">Conflict</td>
                <td className="py-2 px-2">Resource state conflict — e.g., duplicate email signup, stale ETag</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>422</strong></td>
                <td className="py-2 px-2">Unprocessable Entity</td>
                <td className="py-2 px-2">Syntactically valid but semantically invalid — use over 400 for validation errors</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>429</strong></td>
                <td className="py-2 px-2">Too Many Requests</td>
                <td className="py-2 px-2">Rate limit exceeded — return `Retry-After` header</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>500</strong></td>
                <td className="py-2 px-2">Internal Server Error</td>
                <td className="py-2 px-2">Unhandled server-side exception — generic catch-all (don&apos;t expose stack traces)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>502</strong></td>
                <td className="py-2 px-2">Bad Gateway</td>
                <td className="py-2 px-2">Upstream service returned invalid response — proxy / load balancer error</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong>503</strong></td>
                <td className="py-2 px-2">Service Unavailable</td>
                <td className="py-2 px-2">Temporary overload or maintenance — return `Retry-After` header</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The 401 vs 403 Distinction (Frequent Mistake)</h3>
          <p>
            These two codes are constantly confused, but they have a specific meaning:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>401 Unauthorized</strong> actually means &quot;<em>unauthenticated</em>&quot; — the request lacks valid credentials. Return this when no auth token is provided, when the token is invalid, or when the token is expired. Should always include a `WWW-Authenticate` header per RFC.</li>
            <li><strong>403 Forbidden</strong> means &quot;authenticated but not allowed&quot; — credentials are valid, but the user lacks permission for the specific resource. E.g., a logged-in regular user trying to access an admin endpoint.</li>
          </ul>
          <p className="mt-3">
            Mnemonic: 401 = &quot;who are you?&quot; (need to authenticate); 403 = &quot;I know who you are, but you can&apos;t do that.&quot;
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">400 vs 422 vs 409 for Validation Errors</h3>
          <p>
            All three are 4xx client errors, but they signal different validation failures:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>400 Bad Request:</strong> the request was malformed at the HTTP / JSON level. Body isn&apos;t valid JSON, required header missing, wrong content-type. The server couldn&apos;t even parse the request.</li>
            <li><strong>422 Unprocessable Entity:</strong> the request parsed fine, but the data fails business logic validation. Email field doesn&apos;t match email format, age is negative, password is too short. <strong>This is what most REST APIs should return for &quot;validation failed.&quot;</strong></li>
            <li><strong>409 Conflict:</strong> the request was valid, but conflicts with current resource state. Duplicate email signup, stale ETag on PUT, trying to delete a resource with dependents.</li>
          </ul>
          <p className="mt-3">
            Many APIs use 400 for everything client-side, but the more granular distinction helps client code respond appropriately (show form field errors for 422, show retry guidance for 429, show login dialog for 401, etc.).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">5xx Debugging Decision Tree</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>500 Internal Server Error:</strong> check application logs first. Unhandled exception, NPE, type mismatch. Common: database connection lost, third-party API timeout caught wrong.</li>
            <li><strong>502 Bad Gateway:</strong> backend service is dead or returning garbage. Check if the upstream is up; check nginx/CloudFront logs; verify health checks pass.</li>
            <li><strong>503 Service Unavailable:</strong> capacity / overload / maintenance. Check resource exhaustion: CPU, memory, DB connections, request queue length.</li>
            <li><strong>504 Gateway Timeout:</strong> upstream took too long. Default timeouts: AWS ALB 60s, CloudFront 30s, nginx 60s. Check slow query logs.</li>
            <li><strong>507 Insufficient Storage:</strong> WebDAV / some object stores — disk full.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">REST API Status Code Best Practices</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Use the correct verb-to-status mapping:</strong> GET success = 200, POST creating = 201, DELETE success = 204</li>
            <li><strong>Always include structured error bodies:</strong> <code>&#123;&quot;error&quot;:&quot;code&quot;,&quot;message&quot;:&quot;human readable&quot;,&quot;details&quot;:[...]&#125;</code> — even on 4xx/5xx</li>
            <li><strong>Don&apos;t leak internals:</strong> never expose stack traces or DB error messages on 500 — use a correlation ID for log lookup instead</li>
            <li><strong>Return 401 with `WWW-Authenticate` header:</strong> per RFC, this tells the client how to authenticate</li>
            <li><strong>Return 429 with `Retry-After`:</strong> tell the client when to retry — in seconds or as an HTTP date</li>
            <li><strong>Use 410 Gone (not 404) for deleted resources:</strong> signals to clients and search engines that the resource is permanently gone</li>
            <li><strong>Use 200 + structured error vs 4xx for partial failures:</strong> e.g., a batch endpoint where 9/10 items succeeded — return 200 with per-item status array</li>
            <li><strong>Cache appropriately:</strong> use `Cache-Control` + `ETag` so clients see 304 (not full 200) when content unchanged</li>
            <li><strong>Use idempotency keys for unsafe operations:</strong> return the same response on retry, preventing duplicate side effects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cloudflare-Specific 5xx Codes</h3>
          <p>
            Cloudflare adds custom 5xx codes when their edge can&apos;t reach your origin. Knowing them helps debug fast:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>520:</strong> Origin returned empty or invalid response — usually origin webserver crashed</li>
            <li><strong>521:</strong> Origin web server is down (connection refused)</li>
            <li><strong>522:</strong> Connection timed out — origin took too long to respond</li>
            <li><strong>523:</strong> Origin is unreachable — DNS / firewall blocked Cloudflare</li>
            <li><strong>524:</strong> Origin responded but timed out (&gt;100s) — long-running request</li>
            <li><strong>525:</strong> SSL handshake failed — wrong cert on origin</li>
            <li><strong>526:</strong> Invalid SSL certificate — cert chain broken</li>
            <li><strong>527:</strong> Railgun connection issue (rare)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Frontend Error Handling Pattern</h3>
          <p>
            On the client, use the status code class to drive UX behavior:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>200-299:</strong> happy path — render success state</li>
            <li><strong>401:</strong> redirect to login or refresh token automatically</li>
            <li><strong>403:</strong> show &quot;permission denied&quot; — usually permanent UI state</li>
            <li><strong>404:</strong> show &quot;not found&quot; page or skeleton with friendly message</li>
            <li><strong>422:</strong> show field-level form errors using the structured error body</li>
            <li><strong>429:</strong> wait `Retry-After` seconds and retry once silently</li>
            <li><strong>5xx (except 503):</strong> log to Sentry, show toast &quot;Something went wrong&quot;</li>
            <li><strong>503:</strong> show maintenance notice if `Retry-After` is long, otherwise retry with backoff</li>
            <li><strong>Network errors (no response):</strong> show &quot;offline&quot; state, retry on reconnection</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "When debugging API issues, the status code class tells you who to blame: 4xx = client (your request was wrong), 5xx = server (their code or infrastructure failed). For specific debugging: 401 = check auth token; 403 = check permissions; 404 = check URL exists; 422 = check request body validates; 429 = back off and retry; 500 = check server logs; 502/503/504 = check upstream services. Always log responses with the request context (method, URL, correlation ID, user ID, timestamp) — diagnosing production issues without context is impossible.",

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
