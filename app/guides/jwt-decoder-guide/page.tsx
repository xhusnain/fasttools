import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Code2, Target, AlertCircle, Heart, Sparkles, Lock, Key } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete JWT Decoder Guide | Free JWT Token Decoder | FastTools",
  description: "Master JWT decoding with our comprehensive guide. Learn about JWT tokens, decoding methods, security best practices, and use our free JWT decoder tool.",
  keywords: "JWT decoder, JWT token decoder, JWT decode, JSON Web Token, JWT security, JWT authentication, JWT guide",
  openGraph: {
    title: "Complete JWT Decoder Guide | Free JWT Token Decoder",
    description: "Master JWT decoding with our comprehensive guide. Learn about JWT tokens, decoding methods, security best practices, and use our free JWT decoder tool.",
    type: "article",
    url: "https://fasttools.store/guides/jwt-decoder-guide",
  },
}

export default function JWTDecoderGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete JWT Decoder Guide",
    description: "Master JWT decoding with our comprehensive guide. Learn about JWT tokens, decoding methods, security best practices, and use our free JWT decoder tool.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/jwt-decoder-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete JWT Decoder Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master JWT decoding with our comprehensive guide. Learn about JWT tokens, decoding methods, 
            security best practices, and use our free JWT decoder tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>450,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link href="#what-is-jwt" className="block text-primary hover:underline">
                1. What is JWT?
              </Link>
              <Link href="#jwt-structure" className="block text-primary hover:underline">
                2. JWT Structure
              </Link>
              <Link href="#jwt-types" className="block text-primary hover:underline">
                3. JWT Types
              </Link>
              <Link href="#decoding-methods" className="block text-primary hover:underline">
                4. Decoding Methods
              </Link>
              <Link href="#security-considerations" className="block text-primary hover:underline">
                5. Security Considerations
              </Link>
              <Link href="#common-use-cases" className="block text-primary hover:underline">
                6. Common Use Cases
              </Link>
              <Link href="#best-practices" className="block text-primary hover:underline">
                7. Best Practices
              </Link>
              <Link href="#troubleshooting" className="block text-primary hover:underline">
                8. Troubleshooting
              </Link>
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: What is JWT */}
          <section id="what-is-jwt" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is JWT?</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained 
              way for securely transmitting information between parties as a JSON object. This information 
              can be verified and trusted because it is digitally signed.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits of JWT:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Stateless:</strong> No need to store session information on the server</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Scalable:</strong> Perfect for distributed systems and microservices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Secure:</strong> Digitally signed to prevent tampering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Compact:</strong> Small size makes it ideal for HTTP headers</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              JWTs are commonly used for authentication and information exchange in web applications. 
              They consist of three parts separated by dots (.), which are: Header, Payload, and Signature.
            </p>
          </section>

          {/* Section 2: JWT Structure */}
          <section id="jwt-structure" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">JWT Structure</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-blue-500" />
                    Header
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The header typically consists of two parts: the type of token (JWT) and the signing algorithm:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm mt-4">
                    <li>• <strong>alg:</strong> Algorithm used for signing (HS256, RS256, etc.)</li>
                    <li>• <strong>typ:</strong> Token type, always "JWT"</li>
                    <li>• <strong>kid:</strong> Key ID (optional, for key rotation)</li>
                    <li>• <strong>jku:</strong> JSON Web Key Set URL (optional)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The payload contains the claims, which are statements about an entity and additional data:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm mt-4">
                    <li>• <strong>sub:</strong> Subject (user ID)</li>
                    <li>• <strong>name:</strong> User's name</li>
                    <li>• <strong>iat:</strong> Issued at timestamp</li>
                    <li>• <strong>exp:</strong> Expiration timestamp</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Signature</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)`}
                    </pre>
                  </div>
                  <ul className="space-y-2 text-sm mt-4">
                    <li>• <strong>Algorithm:</strong> Uses the algorithm specified in the header</li>
                    <li>• <strong>Secret:</strong> The secret key used for signing</li>
                    <li>• <strong>Verification:</strong> Ensures token integrity and authenticity</li>
                    <li>• <strong>Tamper-proof:</strong> Any modification invalidates the signature</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: JWT Types */}
          <section id="jwt-types" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">JWT Types</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-green-500" />
                    Signed JWT (JWS)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Signed JWTs contain a signature that can be verified:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>HMAC:</strong> Symmetric key algorithms (HS256, HS384, HS512)</li>
                    <li>• <strong>RSA:</strong> Asymmetric key algorithms (RS256, RS384, RS512)</li>
                    <li>• <strong>ECDSA:</strong> Elliptic curve algorithms (ES256, ES384, ES512)</li>
                    <li>• <strong>EdDSA:</strong> Edwards curve algorithms (Ed25519, Ed448)</li>
                    <li>• <strong>Security:</strong> Prevents tampering and ensures authenticity</li>
                    <li>• <strong>Verification:</strong> Can be verified by anyone with the key</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Encrypted JWT (JWE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Encrypted JWTs provide confidentiality by encrypting the payload:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Confidentiality:</strong> Payload is encrypted and not readable</li>
                      <li>• <strong>Key Management:</strong> Requires proper key management</li>
                      <li>• <strong>Performance:</strong> More computationally expensive</li>
                      <li>• <strong>Use Cases:</strong> Sensitive data transmission</li>
                      <li>• <strong>Algorithms:</strong> AES, RSA, ECDH key agreement</li>
                      <li>• <strong>Security:</strong> Higher security for sensitive information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nested JWT (JWS + JWE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Nested JWTs combine signing and encryption:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>First Sign:</strong> Sign the payload with a private key</li>
                      <li>• <strong>Then Encrypt:</strong> Encrypt the signed JWT</li>
                      <li>• <strong>Dual Security:</strong> Both integrity and confidentiality</li>
                      <li>• <strong>Complexity:</strong> More complex to implement</li>
                      <li>• <strong>Performance:</strong> Higher computational overhead</li>
                      <li>• <strong>Use Cases:</strong> High-security applications</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Decoding Methods */}
          <section id="decoding-methods" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Decoding Methods</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-blue-500" />
                    Base64URL Decoding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      JWT tokens use Base64URL encoding for the header and payload:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>URL Safe:</strong> Uses URL-safe characters (- and _ instead of + and /)</li>
                      <li>• <strong>No Padding:</strong> Omits padding characters (=)</li>
                      <li>• <strong>Decoding:</strong> Convert Base64URL to JSON</li>
                      <li>• <strong>Tools:</strong> Online decoders, programming libraries</li>
                      <li>• <strong>Security:</strong> Decoding doesn't verify signature</li>
                      <li>• <strong>Readability:</strong> Makes token content human-readable</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Programming Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Popular libraries for JWT handling in different languages:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>JavaScript:</strong> jsonwebtoken, jose</li>
                      <li>• <strong>Python:</strong> PyJWT, python-jose</li>
                      <li>• <strong>Java:</strong> jjwt, java-jwt</li>
                      <li>• <strong>C#:</strong> System.IdentityModel.Tokens.Jwt</li>
                      <li>• <strong>Go:</strong> golang-jwt, go-jose</li>
                      <li>• <strong>PHP:</strong> firebase/php-jwt, lcobucci/jwt</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Online Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Online JWT decoder tools and their features:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Decoding:</strong> Decode header and payload</li>
                      <li>• <strong>Validation:</strong> Check token format and structure</li>
                      <li>• <strong>Expiration:</strong> Display expiration times</li>
                      <li>• <strong>Claims:</strong> Show all token claims</li>
                      <li>• <strong>Security:</strong> Safe for non-sensitive tokens</li>
                      <li>• <strong>Convenience:</strong> Quick and easy to use</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Security Considerations */}
          <section id="security-considerations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Security Considerations</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">⚠️ Security Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Token Exposure:</strong> JWTs in URLs can be logged and exposed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Weak Secrets:</strong> Weak signing keys compromise security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Algorithm Confusion:</strong> None algorithm vulnerability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Token Replay:</strong> Stolen tokens can be reused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Information Disclosure:</strong> Sensitive data in payload</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Key Management:</strong> Poor key rotation and storage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Security Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Strong Secrets:</strong> Use cryptographically strong keys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Short Expiration:</strong> Set reasonable expiration times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>HTTPS Only:</strong> Always use HTTPS for token transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Secure Storage:</strong> Store tokens securely on client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Key Rotation:</strong> Implement regular key rotation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Validation:</strong> Always validate tokens on server</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Vulnerabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common JWT security vulnerabilities to avoid:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Algorithm None:</strong> Disable "none" algorithm support</li>
                      <li>• <strong>Weak Keys:</strong> Use strong, random secret keys</li>
                      <li>• <strong>Long Expiration:</strong> Keep token lifetimes short</li>
                      <li>• <strong>Client Storage:</strong> Avoid localStorage for sensitive tokens</li>
                      <li>• <strong>Token Size:</strong> Keep payload size minimal</li>
                      <li>• <strong>Key Exposure:</strong> Never expose private keys</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 6: Common Use Cases */}
          <section id="common-use-cases" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Common Use Cases</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      JWT is commonly used for user authentication:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Login Process:</strong> User logs in, server issues JWT</li>
                      <li>• <strong>Token Storage:</strong> Client stores token securely</li>
                      <li>• <strong>API Requests:</strong> Include token in Authorization header</li>
                      <li>• <strong>Server Validation:</strong> Server validates token on each request</li>
                      <li>• <strong>Stateless:</strong> No need to store session on server</li>
                      <li>• <strong>Scalability:</strong> Perfect for distributed systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Authorization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      JWT can contain authorization information:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>User Roles:</strong> Include user roles in token payload</li>
                      <li>• <strong>Permissions:</strong> Add specific permissions to token</li>
                      <li>• <strong>Resource Access:</strong> Control access to specific resources</li>
                      <li>• <strong>API Scopes:</strong> Define what APIs user can access</li>
                      <li>• <strong>Tenant Information:</strong> Multi-tenant application support</li>
                      <li>• <strong>Custom Claims:</strong> Add application-specific data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Exchange</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      JWT can securely transmit information between parties:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Single Sign-On:</strong> Share authentication across services</li>
                      <li>• <strong>Microservices:</strong> Service-to-service communication</li>
                      <li>• <strong>API Gateway:</strong> Centralized authentication</li>
                      <li>• <strong>Mobile Apps:</strong> Secure mobile authentication</li>
                      <li>• <strong>Third-party Integration:</strong> Secure external API access</li>
                      <li>• <strong>Data Sharing:</strong> Secure data exchange between systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      JWT can replace traditional session management:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>No Server Storage:</strong> Eliminates session storage needs</li>
                      <li>• <strong>Cross-Domain:</strong> Works across different domains</li>
                      <li>• <strong>Load Balancing:</strong> No sticky sessions required</li>
                      <li>• <strong>Mobile Support:</strong> Works well with mobile apps</li>
                      <li>• <strong>RESTful APIs:</strong> Perfect for REST API authentication</li>
                      <li>• <strong>Scalability:</strong> Easy to scale horizontally</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Best Practices */}
          <section id="best-practices" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Best Practices</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Development Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Use Libraries:</strong> Use well-tested JWT libraries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Validate Tokens:</strong> Always validate tokens on server</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Handle Errors:</strong> Implement proper error handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Logging:</strong> Log security events and failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Testing:</strong> Test token generation and validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Documentation:</strong> Document JWT implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Token Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Best practices for designing JWT tokens:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Minimal Payload:</strong> Keep payload size small</li>
                      <li>• <strong>Standard Claims:</strong> Use standard JWT claims</li>
                      <li>• <strong>Custom Claims:</strong> Use namespaced custom claims</li>
                      <li>• <strong>Expiration:</strong> Set appropriate expiration times</li>
                      <li>• <strong>Issuer:</strong> Include issuer information</li>
                      <li>• <strong>Audience:</strong> Specify intended audience</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Secure key management practices:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Key Rotation:</strong> Implement regular key rotation</li>
                      <li>• <strong>Key Storage:</strong> Store keys securely</li>
                      <li>• <strong>Key Distribution:</strong> Secure key distribution</li>
                      <li>• <strong>Key Backup:</strong> Backup keys securely</li>
                      <li>• <strong>Key Revocation:</strong> Implement key revocation</li>
                      <li>• <strong>Key Monitoring:</strong> Monitor key usage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Troubleshooting</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Common Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common JWT issues and solutions:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Invalid Token:</strong> Check token format and structure</li>
                      <li>• <strong>Expired Token:</strong> Verify expiration time and clock sync</li>
                      <li>• <strong>Invalid Signature:</strong> Check secret key and algorithm</li>
                      <li>• <strong>Wrong Algorithm:</strong> Ensure algorithm matches header</li>
                      <li>• <strong>Malformed Token:</strong> Check Base64URL encoding</li>
                      <li>• <strong>Missing Claims:</strong> Verify required claims are present</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Debugging Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Tips for debugging JWT issues:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Decode Token:</strong> Use JWT decoder to inspect token</li>
                      <li>• <strong>Check Expiration:</strong> Verify token hasn't expired</li>
                      <li>• <strong>Validate Format:</strong> Ensure proper JWT format</li>
                      <li>• <strong>Test Keys:</strong> Verify secret keys are correct</li>
                      <li>• <strong>Log Errors:</strong> Enable detailed error logging</li>
                      <li>• <strong>Use Tools:</strong> Leverage JWT debugging tools</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common JWT error messages and meanings:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>"Invalid token":</strong> Token format or structure is invalid</li>
                      <li>• <strong>"Token expired":</strong> Token has passed its expiration time</li>
                      <li>• <strong>"Invalid signature":</strong> Token signature verification failed</li>
                      <li>• <strong>"Algorithm mismatch":</strong> Algorithm doesn't match header</li>
                      <li>• <strong>"Malformed token":</strong> Token is not properly formatted</li>
                      <li>• <strong>"Missing claims":</strong> Required claims are not present</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Decode JWT Tokens?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use our free JWT decoder to decode and inspect JWT tokens. Perfect for development, 
              debugging, and understanding JWT structure and claims.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/dev-tools/jwt-decoder" className="flex items-center gap-2">
                Decode JWT Tokens Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Related Developer Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Regex Tester</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Test and debug regular expressions with real-time matching and highlighting.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/dev-tools/regex-tester">Try Regex Tester</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">JSON to CSV Converter</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Convert JSON data to CSV format with customizable options and preview.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/dev-tools/json-to-csv">Try JSON to CSV Converter</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
