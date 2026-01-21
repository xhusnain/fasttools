import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { Hash, Zap, ArrowRightLeft, ShieldCheck, History } from "lucide-react"

const ULIDGenerator = dynamic(
    () => import("@/components/crypto-tools/ulid-generator").then(mod => mod.ULIDGenerator),
    { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
    toolName: "ULID Generator",
    description: "Free online ULID generator. Create Universally Unique Lexicographical Sortable Identifiers. 128-bit compatible with UUID, sortable, and URL-friendly. Perfect for database primary keys and distributed systems.",
    metaTitle: "ULID Generator - Sortable Unique Identifiers (UUID v7 Alternative) - FastTools",
    metaDescription: "Generate random ULIDs online. Lexicographically sortable 128-bit IDs with millisecond precision. Outperforms UUID v4 for database primary keys & indexing. No signup required.",
    path: "/crypto-tools/ulid-generator",
    schemaOptions: {
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    },

    header: {
        title: "ULID Generator - Sortable 128-bit Identifiers",
        description: "Generate Universally Unique Lexicographical Sortable Identifiers (ULID). Get the benefits of 128-bit UUID compatibility with high-performance chronological sortability. Avoid database index fragmentation with time-ordered IDs.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Crypto Tools", href: "/crypto-tools" },
        { label: "ULID Generator", href: "/crypto-tools/ulid-generator" },
    ],

    content: {
        overview: "A ULID Generator is a security and developer tool used to create Universally Unique Lexicographically Sortable Identifiers. Unlike standard UUID v4 which is completely random, ULIDs incorporate a timestamp enabling them to be sorted chronologically while remaining globally unique and URL-safe using Crockford's Base32 encoding.",

        features: [
            "Lexicographically Sortable: IDs are naturally ordered by time of creation",
            "UUID Compatible: 128-bit format can be stored as a UUID in most databases",
            "URL Friendly: Uses Crockford's Base32 (26 characters, case-insensitive)",
            "High Entropy: 80 bits of randomness per millisecond to prevent collisions",
            "Secure: Generated entirely on the client-side for maximum privacy",
            "Bulk Support: Generate up to 100 ULIDs in a single click",
            "No Special Characters: Avoids ambiguous characters like I, L, O, and U"
        ],

        faqs: [
            {
                question: "What is a ULID vs UUID v4?",
                answer: "ULID is a 128-bit identifier that is sortable by time. While UUID v4 is purely random, ULID includes a 48-bit timestamp. This makes ULIDs significantly better for database primary keys as they prevent binary tree fragmentation and improve write performance."
            },
            {
                question: "Is ULID better than UUID v7?",
                answer: "Both ULID and UUID v7 are 128-bit and time-ordered. ULID uses Crockford's Base32 encoding (26 characters), making it more compact and URL-safe than the standard 36-character UUID string. However, UUID v7 is an official RFC 9562 standard, while ULID is a widely adopted community specification."
            },
            {
                question: "How many bits are in a ULID?",
                answer: "A ULID consists of 128 bits: the first 48 bits represent a Unix timestamp in milliseconds, and the remaining 80 bits provide randomness (entropy) to ensure uniqueness."
            },
            {
                question: "Are ULIDs unique enough for production?",
                answer: "Absolutely. With 80 bits of randomness per millisecond, ULID offers 1.2 x 10^24 possible combinations every millisecond. The collision probability is statistically negligible even in massive distributed systems."
            },
            {
                question: "Can I store a ULID in a UUID column?",
                answer: "Yes. Since both are 128-bit values, most databases (PostgreSQL, MySQL 8.0+) can store the binary representation of a ULID in a native UUID column without issue."
            }
        ],

        aboutTool: (
            <div className="space-y-12">
                {/* Answer-First Block */}
                <article className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-blue-500/5 border border-primary/20 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap className="w-24 h-24 text-primary" />
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                            The Ultimate 128-bit Sortable Identifier
                        </h2>
                        <p className="text-lg text-foreground/80 leading-relaxed mb-6 font-medium">
                            <strong>ULID (Universally Unique Lexicographical Sortable Identifier)</strong> is the modern answer to the database performance issues caused by random UUIDs. By combining a 48-bit timestamp with 80-bit randomness, it provides a unique ID that is naturally ordered by time.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 p-1 bg-green-500/20 rounded">
                                    <ShieldCheck className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-sm font-semibold">128-bit UUID Compatibility</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 p-1 bg-blue-500/20 rounded">
                                    <ArrowRightLeft className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-sm font-semibold">Lexicographically Sortable</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Statistics Block */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Bit Length", value: "128 bits" },
                        { label: "Timestamp", value: "48 bits" },
                        { label: "Randomness", value: "80 bits" },
                        { label: "Encoding", value: "Base32" }
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-xl border border-border bg-card/50 text-center">
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* How it Works / Technical Breakdown */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <History className="h-6 w-6 text-primary" />
                        ULID Technical Architecture
                    </h2>
                    <div className="p-8 rounded-2xl border border-border bg-card shadow-inner relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                            <div className="flex-1 w-full p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
                                <div className="text-2xl font-black text-primary mb-1">48 Bits</div>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Binary Timestamp</div>
                            </div>
                            <div className="text-2xl font-bold text-muted-foreground">+</div>
                            <div className="flex-[1.5] w-full p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                                <div className="text-2xl font-black text-blue-600 mb-1">80 Bits</div>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Entropy (Randomness)</div>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                            The resulting 128-bit structure is encoded using <strong>Crockford's Base32</strong>, a human-readable alphabet that excludes ambiguous characters (I, L, O, U) to ensure double-click accessibility and URL-safety.
                        </p>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <ArrowRightLeft className="h-6 w-6 text-primary" />
                        ULID vs UUID v7 vs Snowflake
                    </h2>
                    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground font-semibold uppercase tracking-wider text-xs">
                                <tr>
                                    <th className="p-4">Feature</th>
                                    <th className="p-4">ULID</th>
                                    <th className="p-4">UUID v7</th>
                                    <th className="p-4">Snowflake</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="p-4 font-semibold">Standard</td>
                                    <td className="p-4 text-primary">Community Spec</td>
                                    <td className="p-4 text-green-600 font-bold">RFC 9562 (IETF)</td>
                                    <td className="p-4">Proprietary/OSS</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Sortability</td>
                                    <td className="p-4 text-green-600 font-bold">Yes (Time)</td>
                                    <td className="p-4 text-green-600">Yes (Time)</td>
                                    <td className="p-4 text-green-600">Yes (Time)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Decentralized</td>
                                    <td className="p-4">Yes</td>
                                    <td className="p-4">Yes</td>
                                    <td className="p-4 text-amber-600">No (Worker ID req)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Bit Length</td>
                                    <td className="p-4">128 bits</td>
                                    <td className="p-4">128 bits</td>
                                    <td className="p-4">64 bits</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Alphabet</td>
                                    <td className="p-4 font-mono">Base32 (26 chars)</td>
                                    <td className="p-4 font-mono">Hex (36 chars)</td>
                                    <td className="p-4 font-mono">Int64</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Entity Definitions */}
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <Hash className="w-5 h-5 text-primary" />
                            Lexicographical Order
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A specific sorting method where characters or IDs are ordered like words in a dictionary. Because ULIDs start with a timestamp, they are naturally ordered by the time they were created, reducing <strong>B-tree fragmentation</strong> in databases.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            Entropy (Randomness)
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            ULID reserves 80 bits for randomness. This "Entropy" ensures that even if millions of IDs are generated at the exact same millisecond, the chance of collision is virtually zero—offering <strong>128-bit security</strong>.
                        </p>
                    </div>
                </section>

                {/* Collision Probability Deep Dive */}
                <section className="p-8 rounded-2xl border border-primary/10 bg-primary/5">
                    <h2 className="text-2xl font-bold mb-4">Collision Probability & Safety</h2>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        ULIDs are designed for massive distributed systems. To calculate the collision probability, we look at the 80 bits of randomness provided per millisecond. This yields 2<sup>80</sup> or approximately <strong>1.2 x 10<sup>24</sup></strong> possible IDs per millisecond. For context, to have a 50% chance of a single collision, you would need to generate <strong>1 trillion IDs per millisecond for every inhabitant on Earth</strong>.
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Monotonicity Support</h4>
                        <p className="text-xs text-muted-foreground italic">
                            Unlike UUIDs, ULID implementations can support "Monotonicity"—ensuring that if multiple IDs are generated within the exact same millisecond, the random part is incremented by 1 instead of being re-randomized, preserving strict sort order.
                        </p>
                    </div>
                </section>

                {/* Technical Implementation Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        Generate ULID in Your Language
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-border bg-card/50">
                            <h3 className="font-bold text-sm mb-2 text-primary">Node.js (npm install ulid)</h3>
                            <pre className="text-xs bg-black/10 p-3 rounded font-mono overflow-x-auto">
                                {`import { ulid } from 'ulid'\nconsole.log(ulid())`}
                            </pre>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-card/50">
                            <h3 className="font-bold text-sm mb-2 text-primary">Python (pip install python-ulid)</h3>
                            <pre className="text-xs bg-black/10 p-3 rounded font-mono overflow-x-auto">
                                {`from ulid import ULID\nprint(ULID())`}
                            </pre>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-card/50">
                            <h3 className="font-bold text-sm mb-2 text-primary">Go (go get github.com/oklog/ulid)</h3>
                            <pre className="text-xs bg-black/10 p-3 rounded font-mono overflow-x-auto">
                                {`id := ulid.MustNew(ulid.Now(), entropy)\nfmt.Printf("%s", id)`}
                            </pre>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-card/50">
                            <h3 className="font-bold text-sm mb-2 text-primary">Rust (cargo add ulid)</h3>
                            <pre className="text-xs bg-black/10 p-3 rounded font-mono overflow-x-auto">
                                {`use ulid::Ulid;\nlet id = Ulid::new();`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Authoritative References */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <History className="h-6 w-6 text-primary" />
                        Industry Standards
                    </h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                            <a href="https://github.com/ulid/spec" target="_blank" rel="noopener noreferrer" className="space-y-1 block">
                                <div className="font-bold text-sm text-primary uppercase tracking-tight">Standard ULID Specification</div>
                                <div className="text-xs text-muted-foreground">Comprehensive overview of the 128-bit structure and Base32 encoding logic.</div>
                            </a>
                        </li>
                        <li className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                            <a href="https://www.cockroachlabs.com/blog/uuid-vs-ulid/" target="_blank" rel="noopener noreferrer" className="space-y-1 block">
                                <div className="font-bold text-sm text-primary uppercase tracking-tight">CockroachDB Analysis</div>
                                <div className="text-xs text-muted-foreground">Deep dive into why ULIDs reduce index fragmentation compared to UUID v4.</div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        ),

        relatedTools: [
            { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
            { name: "Token Generator", href: "/crypto-tools/token-generator" },
            { name: "Bcrypt Generator", href: "/crypto-tools/bcrypt" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function ULIDGeneratorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "ULID Generator - Sortable Unique Identifiers",
        "applicationCategory": "DeveloperApplication",
        "description": "Premium online tool to generate Universally Unique Lexicographically Sortable Identifiers (ULID) with bulk generation and JSON support.",
        "operatingSystem": "Any"
    }

    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <div className="p-3 sm:p-4 md:p-5 rounded-xl bg-card border border-border shadow-2xl relative overflow-hidden group">
                        {/* Interactive glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
                        <ULIDGenerator />
                    </div>
                </>
            )}
        />
    )
}
