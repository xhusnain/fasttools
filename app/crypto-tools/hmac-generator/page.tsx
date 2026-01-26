import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HmacGeneratorTool } from "@/components/crypto-tools/hmac-generator"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "HMAC Generator",
    description: "Generate secure Hash-based Message Authentication Codes (HMAC) online. Supports SHA256, SHA512, MD5, and more with secret keys.",
    metaTitle: "HMAC Generator Online - SHA256, SHA512 & MD5 | Free Tool",
    metaDescription: "Calculate secure HMAC (Hash-based Message Authentication Code) online using your secret key. Supports SHA-256, SHA-512, MD5. 100% Client-side privacy.",
    path: "/crypto-tools/hmac-generator",
    heroImage: "/images/hmac-generator-hero.png",
    schemaOptions: {
        applicationCategory: "DeveloperTool",
        operatingSystem: "Any",
        featureList: [
            "HMAC-SHA256",
            "HMAC-MD5",
            "Secret Key Signing",
            "Hex/Base64 Output"
        ]
    },

    header: {
        title: "HMAC Generator & Calculator",
        description: "Securely generate Hash-based Message Authentication Codes using secret keys and standard hashing algorithms like SHA-256 and MD5.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "HMAC Generator", href: "/crypto-tools/hmac-generator" },
    ],

    content: {
        overview: "The **HMAC Generator** is a free online tool for developers to compute Hash-based Message Authentication Codes. HMACs are widely used in APIs (like Stripe, Slack, or AWS) to verify **data integrity** and **authenticity**. By combining a cryptographic hash function (like SHA-256) with a secret key, HMAC ensures that the message hasn't been tampered with and comes from a trusted source.",

        howToSteps: [
            "**Enter Message**: Type or paste the plain text string you want to authenticate.",
            "**Enter Secret Key**: Input your secret signing key. This is used to generate the unique signature.",
            "**Select Algorithm**: Choose a hashing algorithm. **SHA-256** is the industry standard for most modern APIs.",
            "**Copy Result**: Get your HMAC signature in **Hexadecimal** or **Base64** format instantly."
        ],

        features: [
            "**Multiple Algorithms**: Supports MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, and RIPEMD-160.",
            "**Privacy First**: Runs 100% in your browser using `crypto-js`. Your keys and data are never sent to our servers.",
            "**Live Calculation**: Generates the hash instantly as you type.",
            "**Flexible Output**: Toggle between Hex (standard) and Base64 (used in some web headers) formats.",
            "**Secure Input**: 'Eye' toggle allows you to hide your secret key from prying eyes."
        ],

        aboutTool: (
            <div className="space-y-12 text-foreground">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 border border-border/50 shadow-2xl">
                    <Image
                        src="/images/hmac-generator-hero.png"
                        alt="HMAC Generator Security Visualization"
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6">How HMAC Works</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                        HMAC (Hash-based Message Authentication Code) is defined in **RFC 2104**. It's more than just `hash(key + message)`, which is vulnerable to "length extension attacks". Instead, HMAC uses a nested hashing structure:
                    </p>
                    <div className="bg-muted/30 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-8 border border-border/50">
                        HMAC(K, m) = H( (K' ⊕ opad) || H( (K' ⊕ ipad) || m ) )
                    </div>
                    <ul className="list-disc leading-relaxed pl-5 space-y-2 text-muted-foreground mb-8">
                        <li><strong>H</strong>: The cryptographic hash function (e.g., SHA-256).</li>
                        <li><strong>K'</strong>: The secret key K, padded to the block size of the hash function.</li>
                        <li><strong>m</strong>: The message to be authenticated.</li>
                        <li><strong>opad</strong>: Outer padding (0x5c repeating).</li>
                        <li><strong>ipad</strong>: Inner padding (0x36 repeating).</li>
                        <li><strong>⊕</strong>: Bitwise XOR operation.</li>
                        <li><strong>||</strong>: Concatenation.</li>
                    </ul>

                    <h2 className="text-3xl font-bold mb-6">HMAC vs. Hash vs. Digital Signature</h2>
                    <div className="overflow-x-auto mb-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="py-4 px-2 font-semibold">Feature</th>
                                    <th className="py-4 px-2 font-semibold text-muted-foreground">Simple Hash (SHA-256)</th>
                                    <th className="py-4 px-2 font-semibold text-primary">HMAC</th>
                                    <th className="py-4 px-2 font-semibold text-muted-foreground">Digital Signature (RSA)</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Data Integrity</td>
                                    <td className="py-4 px-2 text-green-500">Yes</td>
                                    <td className="py-4 px-2 text-green-500">Yes</td>
                                    <td className="py-4 px-2 text-green-500">Yes</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Authentication</td>
                                    <td className="py-4 px-2 text-red-500">No (Anyone can hash)</td>
                                    <td className="py-4 px-2 text-green-500">Yes (Shared Secret)</td>
                                    <td className="py-4 px-2 text-green-500">Yes (Private Key)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Key Type</td>
                                    <td className="py-4 px-2 text-muted-foreground">None</td>
                                    <td className="py-4 px-2 text-primary font-semibold">Symmetric (Shared)</td>
                                    <td className="py-4 px-2 text-muted-foreground">Asymmetric (Public/Private)</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-4 px-2 font-medium">Performance</td>
                                    <td className="py-4 px-2 text-green-500">Very Fast</td>
                                    <td className="py-4 px-2 text-green-500">Fast</td>
                                    <td className="py-4 px-2 text-yellow-500">Slow</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
                    <p className="text-muted-foreground mb-6">How to generate a SHA-256 HMAC in popular programming languages:</p>

                    <div className="space-y-6">
                        {/* Node.js */}
                        <div className="rounded-lg border border-border/50 overflow-hidden">
                            <div className="bg-muted px-4 py-2 border-b border-border/50 text-xs font-semibold uppercase tracking-wider">Node.js</div>
                            <pre className="bg-card p-4 overflow-x-auto text-sm">
                                {`const crypto = require('crypto');

const secret = 'my-secret-key';
const message = 'Hello World';

const hmac = crypto.createHmac('sha256', secret)
                   .update(message)
                   .digest('hex');

console.log(hmac);`}
                            </pre>
                        </div>

                        {/* Python */}
                        <div className="rounded-lg border border-border/50 overflow-hidden">
                            <div className="bg-muted px-4 py-2 border-b border-border/50 text-xs font-semibold uppercase tracking-wider">Python</div>
                            <pre className="bg-card p-4 overflow-x-auto text-sm">
                                {`import hmac
import hashlib

secret = b'my-secret-key'
message = b'Hello World'

hash = hmac.new(secret, message, hashlib.sha256).hexdigest()
print(hash)`}
                            </pre>
                        </div>

                        {/* Java */}
                        <div className="rounded-lg border border-border/50 overflow-hidden">
                            <div className="bg-muted px-4 py-2 border-b border-border/50 text-xs font-semibold uppercase tracking-wider">Java</div>
                            <pre className="bg-card p-4 overflow-x-auto text-sm">
                                {`import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

String secret = "my-secret-key";
String message = "Hello World";

Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
sha256_HMAC.init(secret_key);

byte[] hash = sha256_HMAC.doFinal(message.getBytes());`}
                            </pre>
                        </div>

                        {/* PHP */}
                        <div className="rounded-lg border border-border/50 overflow-hidden">
                            <div className="bg-muted px-4 py-2 border-b border-border/50 text-xs font-semibold uppercase tracking-wider">PHP</div>
                            <pre className="bg-card p-4 overflow-x-auto text-sm">
                                {`$secret = 'my-secret-key';
$message = 'Hello World';

$hash = hash_hmac('sha256', $message, $secret);
echo $hash;`}
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Security Best Practices</h2>
                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="bg-muted/30 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <strong className="text-foreground block mb-2 text-lg">Use Strong Keys</strong>
                            <span className="text-sm text-muted-foreground">Your secret key should be random and at least as long as the hash output length (e.g., 32 bytes for SHA-256).</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <strong className="text-foreground block mb-2 text-lg">Constant-Time Comparison</strong>
                            <span className="text-sm text-muted-foreground">When verifying HMACs on your server, always use constant-time comparison (like `crypto.timingSafeEqual`) to prevent timing attacks.</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <strong className="text-foreground block mb-2 text-lg">Rotate Keys</strong>
                            <span className="text-sm text-muted-foreground">Change your secret keys periodically. Support multiple keys (current and previous) to allow smooth rotation without downtime.</span>
                        </li>
                        <li className="bg-muted/30 p-4 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                            <strong className="text-foreground block mb-2 text-lg">Canonicalization</strong>
                            <span className="text-sm text-muted-foreground">Ensure the message is formatted consistently (e.g., sorting JSON keys) before hashing, or the signatures won't match.</span>
                        </li>
                    </ul>

                </section>
            </div>
        ),

        faqs: [
            {
                question: "Is this tool safe to use with real keys?",
                answer: "Yes. This tool is built with client-side JavaScript. Your secret keys and messages strictly stay in your browser's memory and are never transmitted over the network."
            },
            {
                question: "What is the difference between SHA-256 and HMAC-SHA256?",
                answer: "SHA-256 is a simple hash function: it takes input and produces a fingerprint. HMAC-SHA256 uses a *secret key* mixed with the input. Only someone with the key can create or verify the HMAC, making it suitable for authentication, whereas a simple hash can be generated by anyone."
            },
            {
                question: "Can I use this for JWT signatures?",
                answer: "Yes! JWTs typically use HMAC-SHA256 (HS256). You can verify a JWT signature by pasting the header+payload part as the message and your secret as the key."
            },
            {
                question: "Why do I get a different result than other tools?",
                answer: "Check your encoding (Hex vs Base64) and ensure you aren't adding extra spaces or newlines to your input message or key. Even a single invisible character changes the output completely."
            },
            {
                question: "Is HMAC quantum secure?",
                answer: "Generally, yes. HMAC constructions based on secure hash functions like SHA-256 are considered resistant to quantum computer attacks, unlike public-key signatures like RSA or ECDSA."
            }
        ]
    }
})

export const metadata: Metadata = {
    ...toolConfig.metadata,
    openGraph: {
        ...toolConfig.metadata.openGraph,
        images: ["/images/hmac-generator-hero.png"]
    }
}

export default function HmacGeneratorPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <HmacGeneratorTool />
            )}
        />
    )
}
