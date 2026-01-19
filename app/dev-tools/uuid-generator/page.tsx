import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UuidGenerator = dynamic(
    () => import("@/components/dev-tools/uuid-generator").then(mod => mod.UuidGenerator),
    { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
    toolName: "UUID Generator",
    description: "Free online UUID generator and GUID tool. Create random UUIDs (v4), time-based v1/v7, and namespace UUIDs. Includes code examples for Python, Java, JavaScript. No signup.",
    metaTitle: "UUID Generator - Free Online Tool (v1, v4, v7) - FastTools",
    metaDescription: "Free online UUID generator and GUID tool. Create random UUIDs (v4), time-based v1/v7, and namespace UUIDs. Includes code examples for Python, Java, JavaScript. No signup.",
    path: "/dev-tools/uuid-generator",
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
        title: "UUID Generator (GUID Tool) - v1, v4, v7",
        description: "Create standard RFC 4122 UUIDs and GUIDs. Supports all versions including random (v4), time-based (v1, v6, v7), and namespace-based (v3, v5). Bulk generate, format, and copy instantly.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Developer Tools", href: "/dev-tools" },
        { label: "UUID Generator", href: "/dev-tools/uuid-generator" },
    ],

    content: {
        overview: "A UUID Generator is a developer tool that creates Universally Unique Identifiers (UUIDs), which are 128-bit labels used to uniquely identify information in computer systems without a central authority. This tool generates standard RFC 4122 compatible UUIDs, including random (v4) and time-ordered (v7) versions, locally in your browser.",

        features: [
            "All UUID Versions: Generate v1, v3, v4, v5, v6, and v7 UUIDs",
            "Bulk Generation: Create up to 50 UUIDs at once",
            "Python/Java Compatible: Generated IDs work seamlessly with standard libraries",
            "Namespace Support: Presets for DNS, URL, OID, X.500 for v3/v5",
            "Secure: All UUIDs are generated locally in your browser",
            "One-Click Copy: Instantly copy generated IDs to clipboard",
            "Latest Standards: Includes support for new time-ordered UUID v7"
        ],

        faqs: [
            {
                question: "How can I generate a UUID?",
                answer: "You can generate a UUID instantly using our free online tool. Simply select the version you need (v4 is recommended for most random use cases) and click 'Generate'. Alternatively, in programming languages like Python, you can use `import uuid; uuid.uuid4()`."
            },
            {
                question: "What is UUID and why is it used?",
                answer: "UUID stands for Universally Unique Identifier. It is used to assign a unique ID to a record/resource without checking a central database. This is crucial for distributed systems where multiple servers create data simultaneously, preventing ID collisions."
            },
            {
                question: "Are these UUIDs unique?",
                answer: "Yes, standard UUIDs (like v4) have an extremely low probability of collision (1 in 2^122). For all practical purposes in software systems, they are considered globally unique."
            },
            {
                question: "Which UUID version should I use?",
                answer: "Use **UUID v4 (Random)** for general uniqueness. Use **UUID v7** for database primary keys because it is time-ordered (sortable), which improves database indexing performance. Use v3/v5 for deterministic IDs based on names."
            },
            {
                question: "Is it safe to share UUID?",
                answer: "Yes, UUIDs are generally safe to share as they are identifiers, not secrets (like passwords). However, v1 UUIDs contain your MAC address, which could affect privacy. v4 and v7 are completely safe to share."
            },
            {
                question: "What can I do with a UUID number?",
                answer: "You can use a UUID number as a primary key in databases (PostgreSQL, MySQL, MongoDB), as a unique session ID for users, for tracking transactions in distributed systems, or for naming files uniquely to prevent overwrites."
            }
        ],

        aboutTool: (
            <div className="space-y-8">
                {/* Expert Tip Block */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <span className="text-xl">💡</span> Pro Tip: Database Performance
                    </h3>
                    <p className="text-muted-foreground">
                        If you are using UUIDs as <strong>Primary Keys</strong> in a database (like PostgreSQL or MySQL), consider using <strong>UUID v7</strong> instead of v4.
                        UUID v7 is time-ordered (sortable), which significantly reduces index fragmentation and improves query performance compared to completely random v4 UUIDs.
                    </p>
                </div>

                {/* Comparison Table */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">UUID Version Comparison</h3>
                    <div className="overflow-x-auto rounded-lg border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground font-medium">
                                <tr>
                                    <th className="p-3">Version</th>
                                    <th className="p-3">Type</th>
                                    <th className="p-3">Best Use Case</th>
                                    <th className="p-3">Sortable?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="p-3 font-medium">v4</td>
                                    <td className="p-3">Random</td>
                                    <td className="p-3">General unique IDs, Session IDs</td>
                                    <td className="p-3 text-red-500">No</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">v7</td>
                                    <td className="p-3">Time-ordered</td>
                                    <td className="p-3">Database Keys, High-load systems</td>
                                    <td className="p-3 text-green-600 font-medium">Yes</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">v1</td>
                                    <td className="p-3">Time + MAC</td>
                                    <td className="p-3">Legacy systems requiring time</td>
                                    <td className="p-3 text-amber-500">Partially</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">v3 / v5</td>
                                    <td className="p-3">Namespace</td>
                                    <td className="p-3">Deterministic IDs from names</td>
                                    <td className="p-3 text-red-500">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Code Examples Section */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">How to Generate UUIDs in Code</h3>
                    <div className="grid gap-4">
                        <div className="bg-muted/30 p-4 rounded border">
                            <h4 className="font-medium text-sm mb-2 text-foreground">Python</h4>
                            <code className="text-xs font-mono block overflow-x-auto bg-background p-2 rounded text-muted-foreground">
                                import uuid<br />
                                <br />
                                # Generate random UUID (v4)<br />
                                random_id = uuid.uuid4()<br />
                                print(random_id)
                            </code>
                        </div>

                        <div className="bg-muted/30 p-4 rounded border">
                            <h4 className="font-medium text-sm mb-2 text-foreground">JavaScript / Node.js</h4>
                            <code className="text-xs font-mono block overflow-x-auto bg-background p-2 rounded text-muted-foreground">
                                // Modern Browsers & Node.js 19+<br />
                                const uuid = crypto.randomUUID();<br />
                                console.log(uuid);<br />
                                <br />
                                // Using uuid package (npm install uuid)<br />
                                import {"{ v4 as uuidv4 }"} from 'uuid';<br />
                                console.log(uuidv4());
                            </code>
                        </div>

                        <div className="bg-muted/30 p-4 rounded border">
                            <h4 className="font-medium text-sm mb-2 text-foreground">Java</h4>
                            <code className="text-xs font-mono block overflow-x-auto bg-background p-2 rounded text-muted-foreground">
                                import java.util.UUID;<br />
                                <br />
                                UUID uuid = UUID.randomUUID();<br />
                                System.out.println(uuid.toString());
                            </code>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">Understanding UUID Versions</h3>
                    <div className="my-6">
                        <img
                            src="/images/tools/uuid-generator.png"
                            alt="UUID Generator Concept - Unique Identifier Generation Process"
                            className="w-full max-w-lg mx-auto rounded-xl shadow-lg border border-border"
                            width={800}
                            height={600}
                        />
                    </div>
                    <ul className="list-disc pl-5 text-sm space-y-2 text-muted-foreground">
                        <li><strong>v1 (Timestamp):</strong> Generated from the current time and MAC address. Guaranteed unique per machine.</li>
                        <li><strong>v3 (MD5 Namespace):</strong> Deterministic UUID generated from a namespace and name using MD5 hashing.</li>
                        <li><strong>v4 (Random):</strong> Generated using random numbers. Most widely used version, recommended for 99% of general use cases.</li>
                        <li><strong>v5 (SHA-1 Namespace):</strong> Similar to v3 but uses stronger SHA-1 hashing.</li>
                        <li><strong>v6 (Reordered Time):</strong> Like v1 but optimized for database sorting.</li>
                        <li><strong>v7 (Unix Epoch):</strong> Modern time-based UUID, highly recommended for databases as primary keys.</li>
                    </ul>
                </div>
            </div>
        ),

        relatedTools: [
            { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
            { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
            { name: "Regex Tester", href: "/dev-tools/regex-tester" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function UuidGeneratorPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
                    <UuidGenerator />
                </div>
            )}
        />
    )
}
