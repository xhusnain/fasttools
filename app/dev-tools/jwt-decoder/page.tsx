import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const JWTDecoder = dynamic(
  () => import("@/components/dev-tools/jwt-decoder").then((mod) => mod.JWTDecoder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JWT Decoder",
  description:
    "Decode and inspect JSON Web Tokens for authentication debugging and implementation checks.",
  metaTitle: "JWT Decoder — Decode JSON Web Tokens Online (Header & Payload)",
  metaDescription:
    "Free online JWT decoder. Paste a JWT to reveal its header, payload claims, and signature segment. Inspect exp, iat, nbf, iss, sub, aud, scopes, algorithm, and expiration status.",
  path: "/dev-tools/jwt-decoder",

  header: {
    title: "Fast JWT Decoder & Token Inspector",
    description:
      "Fast JWT decoder — decode any JSON Web Token instantly to inspect its header (algorithm, type), payload (claims like sub, iss, exp), and signature. Check token expiration, debug OAuth and API authentication — no secret key required.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "JWT (JSON Web Token) decoder and inspector. Splits token into header, payload, and signature segments; decodes Base64URL; parses standard claims (iss, sub, aud, exp, iat, nbf, jti, scope); detects algorithm; shows expiration status; and supports comparison, export, and security review helpers.",
    alternateName: [
      "JWT Decoder",
      "JSON Web Token Decoder",
      "JWT Parser",
      "JWT Inspector",
      "JWT Debugger",
      "JWT Viewer",
      "OAuth Token Decoder",
      "Bearer Token Decoder",
      "Access Token Decoder",
      "ID Token Decoder",
      "OpenID Connect Token Decoder",
      "jwt.io Alternative",
      "JWT.ms Alternative",
      "Token Inspector Online",
      "JSON Web Token Reader",
    ],
    featureList: [
      "Instant decode of JWT header, payload, signature — paste-to-view in milliseconds",
      "Header parsing: algorithm (alg), token type (typ), key ID (kid), JWK Set URL (jku)",
      "Standard payload claims: iss, sub, aud, exp, iat, nbf, jti — with human-readable labels",
      "Custom claims preserved and pretty-printed",
      "Expiration status: shows time-remaining or time-since-expired with timezone",
      "Issued-At and Not-Before timestamps in local time + UTC + relative format",
      "Algorithm detection: HS256 / HS384 / HS512 / RS256 / RS384 / RS512 / ES256 / ES384 / ES512 / PS256 / EdDSA",
      "Common-claim auto-recognition: scope (OAuth2), groups, roles, permissions, email, name",
      "Validation warnings: alg=none, expired, not-yet-valid (nbf in future), missing iss / aud",
      "Pretty-printed JSON output for header and payload — copy with one click",
      "Base64URL handling: correctly decodes JWT URL-safe Base64 (no padding required)",
      "Browser-side token decoding for development inspection",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A fast JWT decoder is a free tool that instantly decodes JSON Web Tokens to display the header, payload, and signature components without verifying the token. Built for speed — paste and decode in milliseconds.",
    quickAnswer:
      "Use this fast JWT decoder — paste a JWT token to instantly decode and view its header (algorithm, type), payload (claims like sub, iat, exp), and signature. Fast JWT inspection with expiration status checking. No secret key required for decoding.",
    keyTakeaways: [
      "Decodes JWT header, payload, and signature instantly",
      "Shows all standard claims: iss, sub, aud, exp, iat, nbf, jti",
      "Checks if the token is expired based on the exp claim",
      "JWTs use Base64URL encoding — decoding does not require a secret",
      "Common algorithms: HS256 (symmetric), RS256 (asymmetric), ES256 (ECDSA)",
    ],
    overview:
      "Fast JWT decoder — decode any JWT token with this online tool. Paste a JSON Web Token to see its three segments: header (algorithm and token type), payload (claims including issuer, subject, audience, and expiration), and signature. The tool checks whether the token is expired based on the exp claim and highlights timing issues. Useful for debugging OAuth2 flows, API authentication, session management, and systems that use JWTs. Decoding is for inspection only; signature verification still belongs in trusted server-side code.",

    howToSteps: [
      "Copy the JWT token string from your API response, browser DevTools, or auth logs.",
      "Paste the token into the decoder input field above.",
      "Review the decoded header (algorithm, type) and payload (all claims with values).",
      "Check the expiration status and use the decoded data to debug your authentication flow.",
    ],

    features: [
      "Instant JWT header, payload, and signature decoding",
      "Token expiration check with human-readable timestamps",
      "Support for HS256, RS256, ES256, and other JWT algorithms",
      "All standard claims displayed: iss, sub, aud, exp, iat, nbf, jti",
      "Browser-side decode workflow for development inspection",
      "Copy decoded JSON output with one click",
    ],

    useCases: [
      "Debug OAuth2 and OpenID Connect authentication flows",
      "Inspect API access tokens and refresh tokens during development",
      "Verify JWT claims (issuer, audience, scopes) match expected values",
      "Troubleshoot token expiration and session timeout issues",
      "Compare tokens across environments (dev, staging, production)",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JWT Anatomy: Three Dot-Separated Segments</h3>
          <p>
            A JSON Web Token is a compact, URL-safe credential consisting of three Base64URL-encoded segments separated by dots: <code>header.payload.signature</code>. Example:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code>
          </pre>
          <p className="mt-3">
            The first segment decodes to <code>&#123;&quot;alg&quot;:&quot;HS256&quot;,&quot;typ&quot;:&quot;JWT&quot;&#125;</code> (the header). The second decodes to the claims payload. The third is a cryptographic signature over <code>base64url(header) + &quot;.&quot; + base64url(payload)</code>, computed with the algorithm specified in the header.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Standard JWT Claims (RFC 7519)</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Claim</th>
                <th className="text-left py-2 px-2 text-foreground">Full name</th>
                <th className="text-left py-2 px-2 text-foreground">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>iss</code></td>
                <td className="py-2 px-2">Issuer</td>
                <td className="py-2 px-2">Who created the token (usually a URL)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>sub</code></td>
                <td className="py-2 px-2">Subject</td>
                <td className="py-2 px-2">Principal the token represents (user ID)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>aud</code></td>
                <td className="py-2 px-2">Audience</td>
                <td className="py-2 px-2">Intended recipient (your API)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>exp</code></td>
                <td className="py-2 px-2">Expiration time</td>
                <td className="py-2 px-2">Unix timestamp after which token is invalid</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>iat</code></td>
                <td className="py-2 px-2">Issued at</td>
                <td className="py-2 px-2">Unix timestamp when token was created</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>nbf</code></td>
                <td className="py-2 px-2">Not before</td>
                <td className="py-2 px-2">Unix timestamp; token invalid before this time</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>jti</code></td>
                <td className="py-2 px-2">JWT ID</td>
                <td className="py-2 px-2">Unique identifier (revocation, deduplication)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            OAuth2 / OIDC also add: <code>scope</code> (space-separated permissions), <code>azp</code> (authorized party), <code>nonce</code> (replay protection), <code>at_hash</code> / <code>c_hash</code> (access-token / code hash for ID tokens).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Signing Algorithms (alg header)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>HS256 / HS384 / HS512:</strong> HMAC with SHA-2. Symmetric — same secret signs and verifies. Use for internal services where you control both ends.</li>
            <li><strong>RS256 / RS384 / RS512:</strong> RSASSA-PKCS1-v1_5 with SHA-2. Asymmetric — private key signs, public key verifies. Standard for OAuth2, Auth0, Okta, Cognito.</li>
            <li><strong>PS256 / PS384 / PS512:</strong> RSASSA-PSS — modern RSA variant, slightly more secure than RS variants. Increasingly common.</li>
            <li><strong>ES256 / ES384 / ES512:</strong> ECDSA on P-256 / P-384 / P-521 curves. Smaller signatures than RSA, faster — used by Apple Sign In, some banking APIs.</li>
            <li><strong>EdDSA (Ed25519):</strong> Edwards-curve signature. Fastest, smallest, most modern — recommended for new systems if libraries support it.</li>
            <li className="text-red-500"><strong>alg=none:</strong> NEVER ACCEPT. Famous JWT vulnerability — an attacker can set alg to &quot;none&quot; and submit unsigned tokens. Any decoder that warns about alg=none is doing you a favor.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Decoding vs Verification — Don&apos;t Confuse Them</h3>
          <p>
            This tool <strong>decodes</strong> tokens — it reveals what&apos;s inside. <strong>Decoding does NOT verify the signature.</strong> A malicious user could modify the payload, base64URL-encode it, and produce a token that decodes successfully but has an invalid signature. <strong>Always verify signatures server-side</strong> using your signing secret (HMAC) or the issuer&apos;s public key (RSA/ECDSA) before trusting any claims. A well-known JWT vulnerability is accepting unsigned tokens (alg=none) — never let your verification library accept &quot;none&quot;. Another common bug is using an HMAC verifier for an RSA-signed token — an attacker can forge tokens by claiming alg=HS256 and using the public key as the HMAC secret.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Debugging Auth Issues with This Decoder</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Token expired?</strong> Decode and check the <code>exp</code> claim. Expired tokens are the #1 cause of &quot;invalid_token&quot; errors.</li>
            <li><strong>Wrong audience?</strong> Check <code>aud</code> matches your API&apos;s expected audience identifier exactly.</li>
            <li><strong>Wrong issuer?</strong> Check <code>iss</code> matches your auth provider&apos;s expected URL (often <code>https://your-domain.auth0.com/</code> or similar).</li>
            <li><strong>Missing scopes?</strong> Inspect <code>scope</code> or <code>permissions</code> claims to see what the token allows.</li>
            <li><strong>Wrong user ID?</strong> Check <code>sub</code> against your user database.</li>
            <li><strong>Clock skew?</strong> Compare <code>iat</code> / <code>exp</code> against server time — even 30 seconds of skew can cause &quot;not yet valid&quot; errors.</li>
            <li><strong>Wrong key?</strong> Check <code>kid</code> in the header — your verification code must fetch the matching public key from the issuer&apos;s JWKS endpoint.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Should You Store JWTs in localStorage or Cookies?</h3>
          <p>
            <strong>localStorage:</strong> easy to use, accessible via JavaScript — but vulnerable to <strong>XSS attacks</strong>. Any malicious script that runs in your domain can steal the token. <strong>HttpOnly cookies:</strong> not accessible to JavaScript — XSS-resistant — but vulnerable to <strong>CSRF</strong> unless you use SameSite=Strict or anti-CSRF tokens. <strong>Best practice for SPAs:</strong> use the <strong>Authorization Code with PKCE</strong> flow, store short-lived access tokens in memory only (not localStorage), and use HttpOnly + Secure + SameSite=Strict cookies for refresh tokens. Or skip JWTs entirely for browser apps: use opaque session tokens with server-side sessions, which give you instant revocation.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JWT vs Opaque Tokens vs Sessions</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>JWT (self-contained):</strong> claims are in the token; no DB lookup to verify. Pros: stateless, scalable. Cons: can&apos;t revoke before expiry without a deny list.</li>
            <li><strong>Opaque token + introspection:</strong> token is just a random string; resource server calls auth server to validate. Pros: instant revocation. Cons: extra DB / network call per request.</li>
            <li><strong>Server-side session:</strong> session ID in cookie; user data in DB / Redis. Pros: simple, instant revocation, no encoding worries. Cons: requires session store, harder to scale across regions.</li>
          </ul>
          <p className="mt-3">
            <strong>When JWTs are right:</strong> stateless microservices, B2B APIs with long-lived clients, federation across services. <strong>When they&apos;re wrong:</strong> consumer apps where revocation must be instant, sessions where you store too much data and the token grows huge.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When debugging auth: check exp first (most common failure), then iss and aud (next most common — they must match exactly). For RS256/ES256 tokens, the kid in the header tells your verifier which public key to use from the issuer's JWKS endpoint. NEVER accept alg=none — this is a famous JWT vulnerability. Decode is for inspection only; ALWAYS verify signatures server-side with the proper algorithm and key.",

    faqs: [
      {
        question: "What is a JWT token and how does it work?",
        answer:
          "A JSON Web Token (JWT) is a compact, URL-safe token used for authentication and authorization. It has three parts: header (algorithm info), payload (claims/data), and signature (verification hash). The header and payload are Base64URL encoded and can be decoded without a secret key.",
      },
      {
        question: "Does decoding a JWT verify its signature?",
        answer:
          "No. Decoding only reveals the token contents. Signature verification requires the signing secret (HS256) or public key (RS256/ES256) and must be done server-side. Never trust decoded data without verification.",
      },
      {
        question: "Is it safe to paste production JWT tokens here?",
        answer:
          "Avoid pasting production JWTs or secrets into any web page unless your organization’s security policy allows it. JWTs can authenticate as the user or service they represent, and decoded payloads can expose internal IDs or personal data.",
      },
      {
        question: "What do the JWT claims (iss, sub, exp, aud) mean?",
        answer:
          "iss = issuer (who created the token), sub = subject (user ID), exp = expiration time, aud = audience (intended recipient), iat = issued at, nbf = not before, jti = JWT ID (unique identifier).",
      },
      {
        question: "Can I decode expired JWT tokens?",
        answer:
          "Yes. Expired tokens decode normally — the decoder shows all claims including the expiration timestamp. This is useful for debugging why authentication failed after a session timeout.",
      },
      {
        question: "What is the difference between HS256 and RS256?",
        answer:
          "HS256 uses a shared secret key for both signing and verification (symmetric). RS256 uses a private key to sign and a public key to verify (asymmetric). RS256 is more common in production APIs because the public key can be shared safely.",
      },
      {
        question: "Is this JWT decoder free?",
        answer:
          "Yes. You can paste a JWT, inspect the decoded header and payload, check timing claims, use comparison/export helpers, and copy output without creating an account.",
      },
      {
        question: "How do I get a JWT to decode?",
        answer:
          "Common sources: (1) Browser DevTools → Application → Local Storage / Cookies (look for 'access_token', 'id_token', 'token'). (2) Browser DevTools → Network tab → Authorization header on any request (starts with 'Bearer eyJ...'). (3) curl request to your auth endpoint and look in the JSON response. (4) Postman → click on a saved auth response. (5) Server logs. Look for any string starting with 'eyJ' followed by two dot-separated Base64URL chunks.",
      },
      {
        question: "Why does my JWT decode fail with 'invalid token'?",
        answer:
          "Common causes: (1) Token includes 'Bearer ' prefix — strip it before pasting. (2) Token has extra whitespace or quotes from copy-paste. (3) Token is truncated (max URL-safe JWT length depends on transport). (4) It's an opaque token, not a JWT (e.g., a Stripe API key or GitHub PAT). (5) It's a JWE (encrypted JWT) — those need decryption, not just decoding.",
      },
      {
        question: "Can this decoder verify the JWT signature?",
        answer:
          "This tool decodes only. Signature verification requires the signing secret (for HMAC) or the issuer's public key (for RSA/ECDSA). Verification must happen server-side in production code using a proper JWT library (jose, jsonwebtoken, pyjwt, etc.) that handles algorithm validation, kid lookup from JWKS, and clock-skew tolerance.",
      },
      {
        question: "What's the maximum size of a JWT?",
        answer:
          "There's no hard JWT spec limit, but practical limits come from where you transmit it: most HTTP servers cap headers at 8KB (so the Authorization: Bearer header limits the token), some caches limit URLs at 2KB, and cookies have a 4KB-per-cookie limit. Keep JWTs under 2KB. If your tokens are large, you're probably storing too much in claims — consider an opaque token with server-side session storage.",
      },
      {
        question: "Is it safe to share a JWT in a bug report or code review?",
        answer:
          "Treat JWTs like passwords — anyone with a valid (unexpired) token can authenticate as the user it represents. NEVER share production tokens in public chat, screenshots, or bug reports. For debugging, redact the signature segment (the third part after the dot) and ideally rotate / revoke the token after debugging. Expired tokens are safer to share but may still reveal sensitive claim data (emails, user IDs, internal IDs).",
      },
      {
        question: "What is JWE and how is it different from JWT?",
        answer:
          "JWE (JSON Web Encryption, RFC 7516) is the encrypted counterpart to JWS (signed JWTs). JWE tokens have FIVE dot-separated segments instead of three and look like 'eyJ...eyJ...eyJ...eyJ...eyJ...'. The contents are encrypted — you can't decode them with just Base64; you need the decryption key. Most 'JWTs' you encounter are actually JWS (signed but not encrypted) — the payload is readable by anyone with the token.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "Auth Generator", href: "/web-tools/auth-generator" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JwtDecoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JWTDecoder />
        </div>
      )}
    />
  )
}
