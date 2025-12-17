import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { JWTDecoder } from "@/components/dev-tools/jwt-decoder"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "JWT Decoder",
  description: "Decode and inspect JWT tokens instantly in your browser. View header, payload, and signature with our secure, client-side JWT decoder. Debug JSON Web Tokens for free.",
  metaTitle: "JWT Decoder - Decode & Debug Tokens Free",
  metaDescription: "Decode and inspect JWT tokens instantly in your browser. View header, payload, and signature with our secure, client-side JWT decoder. Debug JSON Web Tokens for free.",
  path: "/dev-tools/jwt-decoder",

  header: {
    title: "Decode & Inspect JSON Web Tokens",
    description: "Instantly decode JWT tokens in your browser. View header, payload, and signature with our secure, client-side decoder.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
  ],

  content: {
    overview: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. Our free JWT decoder reveals token header, payload, and signature components with complete claims visualization. Perfect for debugging authentication, validating JWT tokens, and understanding JWT structure. All processing happens client-side for maximum security.",

    howToSteps: [
      "Paste your JWT token into the input field",
      "Click 'Decode JWT' to view the decoded token",
      "Inspect the header, payload, and signature components",
      "View all JWT claims including exp, iat, iss, sub, aud",
      "Copy any component to your clipboard with one click"
    ],

    features: [
      "Client-Side Processing: Your tokens never leave your device, ensuring maximum security and privacy",
      "Complete Decoding: View header, payload, and signature components separately",
      "Claims Visualization: See all JWT claims including expiration, issuer, subject, audience",
      "Algorithm Support: Works with HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512",
      "Copy to Clipboard: One-click copying of decoded JSON data",
      "Token Validation: Identifies malformed or invalid tokens",
      "OAuth/OIDC Support: Compatible with OAuth 2.0 and OpenID Connect tokens",
      "No Upload Required: Paste tokens directly for instant results"
    ],

    useCases: [
      "Authentication Debugging: Inspect tokens to diagnose auth issues",
      "Claim Verification: Check token expiration, issuer, and custom claims",
      "Development Testing: Validate tokens during development",
      "Security Analysis: Review token contents for security audits",
      "Token Troubleshooting: Debug 'invalid signature' and expiration errors",
      "Learning JWT: Understand JWT structure and components",
      "API Integration: Verify tokens from third-party APIs and identity providers"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is JWT (JSON Web Token)?</h3>
        <p className="mb-4">
          JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. A JWT token is a self-contained way to securely transmit information as a JSON object, digitally signed to verify authenticity. JWT stands for "JSON Web Token" and is defined in RFC 7519.
        </p>
        <p className="mb-6">
          JWT authentication is a stateless authentication mechanism where the server doesn't need to store session data. Tokens are issued after login, then sent with subsequent requests for authorization. Understanding how JWT works is key: tokens contain user identity and claims, enabling secure information exchange without database lookups.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">JWT Structure & Components</h3>
        <p className="mb-4">
          A JWT token structure consists of three parts separated by dots (xxxxx.yyyyy.zzzzz): header, payload, and signature. Each part is base64url encoded.
        </p>
        <div className="space-y-3 mb-6">
          <div>
            <h4 className="font-semibold mb-1">Header:</h4>
            <p>Contains the algorithm (HS256, RS256, ES256) and token type (JWT).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Payload:</h4>
            <p>Holds JWT claims including standard claims (exp, iat, iss, sub, aud, scope) and custom claims.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Signature:</h4>
            <p>Cryptographic hash of header.payload using secret key or private key, ensuring integrity.</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">JWT Security Best Practices</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Always use HTTPS:</strong> Prevent token interception during transmission</li>
          <li><strong>Strong Secrets:</strong> Use 32+ character secrets for HMAC or 2048+ bit RSA keys</li>
          <li><strong>Short Expiration:</strong> Set 15-minute access tokens, use refresh tokens for extended sessions</li>
          <li><strong>Never Store Sensitive Data:</strong> Payload is base64 encoded (not encrypted), avoid passwords or PII</li>
          <li><strong>Validate Thoroughly:</strong> Check signature, expiration (exp), and issuer (iss) on every request</li>
          <li><strong>Secure Storage:</strong> Use httpOnly cookies or secure device storage (iOS Keychain, Android Keystore)</li>
          <li><strong>Algorithm Whitelisting:</strong> Explicitly allow only expected algorithms, reject 'none'</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">JWT vs Other Authentication Methods</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">JWT vs OAuth2:</h4>
            <p>JWT is a token format, OAuth 2.0 is an authorization framework. They're often used together - OAuth 2.0 defines authorization flows, JWT defines token structure. OAuth 2.0 can use JWT tokens or opaque tokens.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">JWT vs Session:</h4>
            <p>JWT is stateless (no server storage needed), enabling horizontal scaling. Sessions require server-side storage but allow immediate revocation. Choose JWT for distributed systems and APIs; choose sessions for traditional web apps needing strict security controls.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">JWT vs Bearer Token:</h4>
            <p>JWTs are typically sent as bearer tokens in the Authorization header. Bearer token is the transmission method, JWT is the token format.</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Framework Integration</h3>
        <div className="space-y-3 mb-6">
          <p><strong>Spring Boot & Java:</strong> Use jjwt or nimbus-jose-jwt libraries with Spring Security filters for JWT authentication.</p>
          <p><strong>Node.js & Express:</strong> Use the jsonwebtoken npm package with Express middleware for JWT validation.</p>
          <p><strong>React & Next.js:</strong> Store tokens in memory (React state) or httpOnly cookies, use refresh token patterns for extended sessions.</p>
          <p><strong>Python (Django/Flask):</strong> Use PyJWT with djangorestframework-simplejwt or flask-jwt-extended.</p>
          <p><strong>Laravel & PHP:</strong> Use tymon/jwt-auth package for Laravel JWT authentication.</p>
          <p><strong>Go & Rust:</strong> Use golang-jwt for Go, jsonwebtoken crate for Rust applications.</p>
        </div>
      </>
    ),

    proTip: "Always validate JWT tokens on the backend - never trust tokens without signature verification. Use short-lived access tokens (15 min) with long-lived refresh tokens for the best balance of security and user experience. Store tokens in httpOnly cookies to prevent XSS attacks.",

    faqs: [
      {
        question: "How JWT works?",
        answer: "JWT works through a three-part process: 1) After successful login, the server creates a JWT containing user information and claims, signs it with a secret key, and sends it to the client. 2) The client stores the token and includes it in the Authorization header of subsequent requests. 3) The server validates the signature and extracts claims without database lookups. This stateless approach enables scalability since servers don't maintain session state."
      },
      {
        question: "How jwt token works?",
        answer: "A JWT token works by encoding three components: header (algorithm & type), payload (claims/data), and signature (verification hash). When created, these parts are base64url encoded and joined with dots. The token travels with each request in headers. Servers decode and verify the signature using the secret key or public key. If valid, the server trusts the claims inside without checking a database, making authentication fast and stateless."
      },
      {
        question: "How jwt authentication works?",
        answer: "JWT authentication works in steps: 1) User submits credentials to login endpoint. 2) Server validates credentials. 3) Server generates JWT with user ID, roles, and expiration, then signs it. 4) Client receives and stores token. 5) For protected routes, client sends token in Authorization: Bearer header. 6) Server validates signature and checks expiration. 7) If valid, server grants access and extracts user info from token claims."
      },
      {
        question: "How jwt refresh token works?",
        answer: "Refresh tokens extend authentication security: 1) On login, issue both access token (15 min expiry) and refresh token (7 days expiry). 2) Client uses access token for API calls. 3) When access token expires, client sends refresh token to /refresh endpoint. 4) Server validates refresh token (checking database/Redis for revocation). 5) If valid, issue new access token. 6) Client continues with new access token. This limits exposure if access token is compromised."
      },
      {
        question: "What jwt token?",
        answer: "A JWT token is a JSON Web Token - a compact, URL-safe string containing three base64url-encoded parts separated by dots: header.payload.signature. The header specifies signing algorithm and type. The payload contains claims (user data, expiration, issuer). The signature ensures integrity. JWTs are self-contained (carry all needed info) and stateless (server doesn't store them), making them ideal for distributed systems and microservices."
      },
      {
        question: "What jwt stands for?",
        answer: "JWT stands for JSON Web Token. It's a standard (RFC 7519) for securely transmitting information between parties as a JSON object. The token is digitally signed using either a secret (HMAC) or public/private key pair (RSA, ECDSA), allowing verification of authenticity and ensuring the data hasn't been tampered with."
      },
      {
        question: "What jwt is used for?",
        answer: "JWT is used for: 1) Authentication - verifying user identity after login without server sessions. 2) Authorization - carrying user permissions/roles for access control. 3) Information Exchange - securely transmitting data between services where signature ensures integrity. 4) Single Sign-On (SSO) - authenticating across multiple domains/services with one token. 5) API Security - protecting REST APIs with stateless authentication. Common in microservices, SPAs, mobile apps, and distributed systems."
      },
      {
        question: "Why jwt token is used?",
        answer: "JWT tokens are used because: 1) Stateless - no server storage needed, enabling horizontal scaling. 2) Self-contained - carry all needed information, reducing database queries. 3) Compact - small size suitable for HTTP headers. 4) Cross-domain - work across different domains and services. 5) Mobile-friendly - don't require cookies. 6) Standardized - RFC 7519 ensures interoperability. 7) Secure - cryptographic signatures prevent tampering. Perfect for modern microservices, SPAs, and mobile applications."
      },
      {
        question: "Why jwt is stateless?",
        answer: "JWT is stateless because the token itself contains all necessary authentication information - the server doesn't need to store or lookup session data. When a server receives a JWT, it validates the signature cryptographically and trusts the claims inside without database access. This enables true horizontal scaling - any server can validate any token. Trade-off: you can't immediately revoke tokens (must wait for expiration or implement token blacklist)."
      },
      {
        question: "Why jwt is better than session?",
        answer: "JWT advantages over sessions: 1) Scalability - no session store needed, any server can validate tokens. 2) Performance - no database lookup per request. 3) Mobile-friendly - no cookie dependency. 4) Microservices - easy to share authentication across services. 5) Cross-domain - works across different domains naturally. However, sessions are better for immediate revocation and sensitive applications. Choose JWT for distributed systems, APIs, mobile apps; choose sessions for traditional web apps with strict security requirements."
      },
      {
        question: "Why jwt starts with ey?",
        answer: "JWT tokens typically start with \"ey\" because the header JSON usually begins with {\"alg\":\"HS256\",\"typ\":\"JWT\"} or similar. When this JSON is base64url encoded, it produces a string starting with \"eyJ\" (the base64 encoding of \"{\"). Since almost all JWTs use similar header structures, they consistently start with  \"ey\". This makes JWTs easy to identify in logs and network traffic."
      },
      {
        question: "Are jwt tokens secure?",
        answer: "JWT tokens are secure when implemented correctly: 1) Always use HTTPS to prevent token interception. 2) Use strong secrets (32+ characters) for HMAC or proper key pairs for RSA. 3) Set short expiration times (15 minutes for access tokens). 4) Never store sensitive data in payload (it's base64 encoded, not encrypted). 5) Validate signature, expiration, and issuer on every request. 6) Implement refresh token rotation. Insecure when: weak secrets, no HTTPS, long expiration, or improper validation."
      },
      {
        question: "Are jwt tokens encrypted?",
        answer: "No, standard JWTs (JWS - JSON Web Signature) are signed but NOT encrypted. The payload is base64url encoded, which is easily decodable by anyone. Signing only prevents modification. If you need encryption, use JWE (JSON Web Encryption) which encrypts the payload. For most authentication use cases, signing is sufficient since sensitive data shouldn't be in tokens anyway. Always use HTTPS to protect tokens in transit."
      },
      {
        question: "Can jwt token be stolen?",
        answer: "Yes, JWT tokens can be stolen through: 1) XSS attacks - malicious JavaScript reads token from localStorage. 2) Man-in-the-middle - attacker intercepts token over HTTP (not HTTPS). 3) Browser extensions - malicious extensions access storage. Mitigations: 1) Use httpOnly, secure cookies (XSS protection). 2) Always use HTTPS (MITM protection). 3) Short expiration times (15 min). 4) Implement refresh token rotation. 5) Content Security Policy headers."
      },
      {
        question: "Where jwt token is stored?",
        answer: "JWT tokens can be stored in: 1) localStorage - persistent, survives page refresh, XSS vulnerable, CSRF immune. 2) sessionStorage - cleared on tab close, XSS vulnerable. 3) Cookies (httpOnly, secure, SameSite) - XSS protected, CSRF vulnerable (mitigate with SameSite). 4) Memory (React state) - most secure but lost on refresh. Best practice: httpOnly cookie for web apps (XSS protection) or memory + refresh token pattern. Mobile apps use iOS Keychain or Android Keystore."
      },
      {
        question: "When jwt token expires?",
        answer: "JWT tokens expire based on the exp (expiration) claim - a Unix timestamp. When current time exceeds exp, the token is expired and should be rejected. Common expiration times: 1) Access tokens: 15 minutes to 1 hour. 2) Refresh tokens: 7-30 days. 3) Remember me: 30-90 days. Libraries automatically check exp during validation. Set appropriate expiration based on security needs - shorter is more secure but less convenient."
      },
      {
        question: "Which jwt algorithm to use?",
        answer: "Algorithm recommendations: 1) HS256 (HMAC-SHA256) - symmetric, shared secret, fast, simple, good for single-server/trusted services. 2) RS256 (RSA-SHA256) - asymmetric, public/private keys, better for microservices (services only need public key). 3) ES256 (ECDSA-SHA256) - asymmetric, smaller keys than RSA, modern, efficient. Avoid: none (no signature), HS256 with weak secrets. Choose HS256 for simple apps, RS256/ES256 for microservices."
      },
      {
        question: "How jwt token is generated?",
        answer: "Token generation process: 1) Create header JSON: {alg:\"HS256\",typ:\"JWT\"}. 2) Create payload JSON with claims: {sub:\"user123\",exp:1234567890,iat:1234567800}. 3) Base64url encode header and payload separately. 4) Concatenate: encodedHeader.encodedPayload. 5) Create signature by hashing this string with secret key using specified algorithm. 6) Base64url encode signature. 7) Concatenate all three: header.payload.signature. Libraries handle this automatically."
      },
      {
        question: "Is jwt free?",
        answer: "Yes, JWT is completely free: 1) Open standard - RFC 7519 is public and free to use. 2) Libraries - all major JWT libraries (jsonwebtoken, PyJWT, jjwt, etc.) are open-source and free. 3) No licensing fees - use in commercial applications without cost. 4) No restrictions - implement as many tokens as needed. Our tool is also free. Some identity providers (Auth0, Okta) charge for hosted auth, but JWT specification and implementation are 100% free."
      }
    ],

    relatedTools: [
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function JWTDecoderPage() {
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
