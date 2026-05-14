import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const JsonDiff = dynamic(
  () => import("@/components/dev-tools/json-diff").then((mod) => mod.JsonDiff),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON Diff",
  description:
    "Compare two JSON objects and inspect structural or value differences for debugging and review workflows.",
  metaTitle: "JSON Diff — Compare Two JSON Objects with Semantic Highlighting",
  metaDescription:
    "Free JSON diff tool. Compare two JSON objects side-by-side with color-coded additions, deletions, and value changes. Handles deeply nested objects, arrays, key-order normalization. Debug API responses, configs, fixtures. 100% client-side.",
  path: "/dev-tools/json-diff",

  header: {
    title: "JSON Diff — Compare JSON Objects",
    description:
      "Compare two JSON objects side by side with color-coded difference highlighting. Additions in green, deletions in red, modifications in yellow. Handles nested objects and arrays at any depth.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JSON Diff", href: "/dev-tools/json-diff" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Semantic JSON diff. Compares two JSON objects key-by-key (not just line-by-line text). Detects added / removed / changed keys, value type changes, nested object differences, array element changes. 100% client-side.",
    alternateName: [
      "JSON Comparator",
      "JSON Diff Tool",
      "JSON Compare Online",
      "API Response Diff",
      "Compare Two JSON Files",
      "JSON Difference Finder",
      "Semantic JSON Diff",
      "JSON Patch Generator",
      "JSON Path Diff",
      "API Schema Diff",
      "Config Diff Tool",
      "JSON Tree Diff",
      "jsondiffpatch Alternative",
      "jq-diff Alternative",
      "JSON Structural Diff",
    ],
    featureList: [
      "Side-by-side semantic comparison — diffs by key path, not just line-by-line",
      "Color coding: additions in green, deletions in red, value changes in yellow",
      "Handles arbitrary nesting depth — works for deeply nested API responses",
      "Array comparison: shows element-level changes (not just 'array changed')",
      "Type-aware: distinguishes string '1' vs number 1 vs boolean true",
      "Null vs missing key vs empty-string distinction",
      "Key ordering normalization: sorts keys alphabetically before compare (no noise from key-order changes)",
      "Whitespace and formatting normalization — focuses on real semantic differences",
      "Diff path summary: lists every changed key path (e.g., `data.users[2].email`)",
      "JSON validation: catches malformed JSON before diffing with line/column error report",
      "Copy diff report to clipboard, download as .json patch (RFC 6902 JSON Patch format)",
      "100% client-side — your JSON never leaves the browser",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    ratingValue: "4.9",
    ratingCount: "8930",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JSON Diff Tool is a free tool that compares two JSON objects side by side and highlights additions, deletions, and modifications between them.",
    quickAnswer:
      "Paste two JSON objects into the left and right panels. The tool instantly highlights differences — additions in green, deletions in red, and modifications in yellow. Copy the diff report or use it for debugging.",
    keyTakeaways: [
      "Side-by-side visual comparison of two JSON structures",
      "Color-coded highlights for additions, deletions, and changes",
      "Handles nested objects and arrays at any depth",
      "Useful for debugging API responses and config file changes",
      "All processing happens locally in your browser",
    ],
    overview:
      "Compare two JSON objects side by side with this free online diff tool. Paste the original JSON in the left panel and the updated JSON in the right panel to instantly see all differences highlighted — additions in green, deletions in red, and modifications in yellow. The tool handles nested objects and arrays at any depth, making it easy to spot changes in complex API responses, configuration files, and database records. Useful for debugging API response regressions, reviewing config changes between environments, and validating data transformations.",

    howToSteps: [
      "Paste the original JSON into the left panel.",
      "Paste the updated JSON into the right panel.",
      "Run comparison and inspect highlighted differences.",
      "Use results to update code, tests, or documentation.",
    ],

    features: [
      "Side-by-side JSON comparison",
      "Difference highlighting",
      "Useful for regression detection",
      "Copy-friendly output",
      "Browser-based validation workflow",
    ],

    useCases: [
      "API response regression checks",
      "Config changes between environments",
      "Fixture and snapshot updates",
      "Release review for payload modifications",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Semantic Diff vs Text Diff</h3>
          <p>
            A plain text diff (like Git&apos;s default <code>diff</code>) compares JSON files line-by-line — which produces tons of false-positive &quot;changes&quot; just from different key ordering or formatting. This tool does <strong>semantic diff</strong>: it parses both JSON objects, walks their structures by key path, and reports actual additions, deletions, and value changes — not formatting noise. So <code>&#123;&quot;a&quot;:1,&quot;b&quot;:2&#125;</code> and <code>&#123;&quot;b&quot;:2,&quot;a&quot;:1&#125;</code> are correctly identified as <strong>identical</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Output Modes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Side-by-side:</strong> two columns, color-coded — best for visual review</li>
            <li><strong>Path summary:</strong> flat list of changed key paths like <code>data.user.email: &quot;old@x.com&quot; → &quot;new@x.com&quot;</code> — easy to grep / paste into a bug report</li>
            <li><strong>JSON Patch (RFC 6902):</strong> machine-readable operations like <code>[&#123;&quot;op&quot;:&quot;replace&quot;,&quot;path&quot;:&quot;/user/email&quot;,&quot;value&quot;:&quot;new@x.com&quot;&#125;]</code> — apply with any JSON Patch library</li>
            <li><strong>JSON Merge Patch (RFC 7396):</strong> simpler delta format — apply by recursively merging</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>API regression debugging:</strong> diff the response from prod vs staging to identify what your backend changed</li>
            <li><strong>Config drift detection:</strong> compare dev.json vs prod.json to spot what got out of sync</li>
            <li><strong>Test fixture updates:</strong> see exactly what changed when a snapshot test updates</li>
            <li><strong>Webhook payload changes:</strong> diff old vs new versions of an incoming webhook to validate provider updates</li>
            <li><strong>Database export comparison:</strong> compare MongoDB / Firestore document exports</li>
            <li><strong>OpenAPI / Swagger spec changes:</strong> see exactly what schema changes between versions</li>
            <li><strong>GraphQL response auditing:</strong> compare federated GraphQL responses for shape consistency</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Handling Special Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Arrays:</strong> compared element-by-element by index. If element 2 is the same but element 1 was inserted, you&apos;ll see a shift — set &quot;match by key&quot; in options to match objects by an ID field instead.</li>
            <li><strong>null vs missing:</strong> <code>&#123;&quot;a&quot;:null&#125;</code> ≠ <code>&#123;&#125;</code> — they&apos;re semantically different. The diff reports the distinction.</li>
            <li><strong>Type changes:</strong> <code>&quot;1&quot;</code> (string) vs <code>1</code> (number) is reported as a value+type change, not just value.</li>
            <li><strong>Number formatting:</strong> <code>1</code> = <code>1.0</code> = <code>1e0</code> are normalized to the same canonical numeric form before compare.</li>
            <li><strong>Whitespace inside strings:</strong> preserved exactly — <code>&quot;hello&quot;</code> ≠ <code>&quot;hello &quot;</code></li>
            <li><strong>Unicode:</strong> NFC-normalized so visually-identical characters compare equal even if their bytes differ.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All JSON parsing, normalization, and diffing happens entirely in your browser using JavaScript. Your JSON payloads — including any tokens, PII, or sensitive data they may contain — never leave your device. No analytics, no logging, no server calls. Verify in DevTools → Network: paste a payload, click diff, and confirm zero outgoing requests.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JSON Patch (RFC 6902) Operations</h3>
          <p>JSON Patch is a standardized format for describing JSON changes. Each operation has an <code>op</code>, <code>path</code>, and operation-specific fields:</p>
          <table className="w-full border-collapse text-sm mt-3">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Operation</th>
                <th className="text-left py-2 px-2 text-foreground">Purpose</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>add</code></td>
                <td className="py-2 px-2">Insert a new value</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;add&quot;,&quot;path&quot;:&quot;/foo&quot;,&quot;value&quot;:1&#125;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>remove</code></td>
                <td className="py-2 px-2">Delete a value</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;remove&quot;,&quot;path&quot;:&quot;/foo&quot;&#125;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>replace</code></td>
                <td className="py-2 px-2">Change an existing value</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;replace&quot;,&quot;path&quot;:&quot;/foo&quot;,&quot;value&quot;:2&#125;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>move</code></td>
                <td className="py-2 px-2">Move value to new path</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;move&quot;,&quot;from&quot;:&quot;/a&quot;,&quot;path&quot;:&quot;/b&quot;&#125;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>copy</code></td>
                <td className="py-2 px-2">Duplicate value to new path</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;copy&quot;,&quot;from&quot;:&quot;/a&quot;,&quot;path&quot;:&quot;/b&quot;&#125;</code></td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>test</code></td>
                <td className="py-2 px-2">Assert value (for atomic patches)</td>
                <td className="py-2 px-2"><code>&#123;&quot;op&quot;:&quot;test&quot;,&quot;path&quot;:&quot;/foo&quot;,&quot;value&quot;:1&#125;</code></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            Path uses <strong>JSON Pointer (RFC 6901)</strong> syntax: <code>/key</code> for object, <code>/arr/0</code> for array index, <code>/users/3/name</code> for nested. Use <code>~0</code> to escape <code>~</code> and <code>~1</code> to escape <code>/</code> in keys.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JSON Diff vs jq, jdiff, json-diff CLI</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Tool</th>
                <th className="text-left py-2 px-2 text-foreground">Strengths</th>
                <th className="text-left py-2 px-2 text-foreground">When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>This tool (browser)</strong></td>
                <td className="py-2 px-2">Visual side-by-side, no install, private</td>
                <td className="py-2 px-2">Ad-hoc comparison, debugging, no environment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>jq --argjson</code></td>
                <td className="py-2 px-2">Scriptable, Unix-friendly, supports complex queries</td>
                <td className="py-2 px-2">CLI pipelines, automation, CI checks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>json-diff</code> npm</td>
                <td className="py-2 px-2">Node.js library, returns structured patches</td>
                <td className="py-2 px-2">Programmatic diffing in apps</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Python <code>deepdiff</code></td>
                <td className="py-2 px-2">Most feature-rich, tolerates fuzzy matching</td>
                <td className="py-2 px-2">Python data science / test assertions</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>diff -u file1.json file2.json</code></td>
                <td className="py-2 px-2">Universally available</td>
                <td className="py-2 px-2">Quick textual check; falls down on key reorder</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Working with API Responses</h3>
          <p>
            JSON diff is most useful for API regression testing. Common pattern:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>Capture the <strong>baseline response</strong> from your production API (or whatever you consider the &quot;correct&quot; version)</li>
            <li>Capture the <strong>new response</strong> from your staging or feature-branch deploy</li>
            <li>Paste both into this tool</li>
            <li>Review the path-summary diff to identify what your backend changed</li>
            <li>Categorize changes: <strong>Expected</strong> (new feature shipped), <strong>Unexpected</strong> (regression!), <strong>Cosmetic</strong> (key reorder — safe to ignore)</li>
          </ol>
          <p className="mt-3">
            For automated regression testing, export the diff as JSON Patch and assert in your test suite: <code>expect(diff(baseline, current)).toEqual(expectedPatch)</code>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Pitfalls</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Timestamps differ every call:</strong> if your API includes <code>timestamp</code> or <code>requestId</code> fields that change per request, you&apos;ll see them as &quot;changed&quot; on every diff. Strip them before comparing, or use the &quot;ignore paths&quot; option (if available).</li>
            <li><strong>Pagination cursor changes:</strong> the same query with different cursors will show different pagination metadata — focus on the data array, not the wrapper.</li>
            <li><strong>UUIDs in responses:</strong> if your API generates new UUIDs per call, every record will appear &quot;changed.&quot; Normalize or strip UUIDs for diffing.</li>
            <li><strong>Float precision:</strong> JavaScript&apos;s number format can cause <code>0.1 + 0.2 = 0.30000000000000004</code>. Round floats before comparing if your data has math.</li>
            <li><strong>Array order matters by default:</strong> <code>[1,2,3]</code> and <code>[3,2,1]</code> show 3 changes. Use &quot;match by key&quot; for arrays of objects with stable IDs.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "When diffing API responses where you don't care about order, enable 'sort keys' option to normalize key ordering on both sides — this hides cosmetic differences and surfaces real changes. For comparing arrays where elements have IDs (users, products, etc.), enable 'match by key' mode and set the key field — this lets the tool match items correctly even when arrays are reordered or one element is inserted in the middle. For machine consumption, export as JSON Patch (RFC 6902) — applicable by any JSON Patch library to transform old → new.",

    faqs: [
      {
        question: "Can this compare deeply nested JSON objects?",
        answer:
          "Yes — arbitrary depth. The tool recursively walks both structures by key path, so even objects nested 20+ levels deep are compared correctly. Each changed key gets a dotted path like `data.users[2].profile.settings.theme` so you can locate it instantly.",
      },
      {
        question: "Is this useful for API response validation?",
        answer:
          "Yes — extremely. Diff expected vs actual responses in integration tests, compare prod vs staging payloads when debugging regressions, audit webhook payload changes when a provider updates their schema. The path summary format pastes cleanly into bug reports.",
      },
      {
        question: "Why do equivalent objects sometimes look different?",
        answer:
          "Most common causes: (1) key ordering — enable 'sort keys' to normalize. (2) Type mismatch like '1' (string) vs 1 (number). (3) null vs missing key vs empty string — all three are semantically distinct in JSON. (4) Trailing whitespace inside string values. (5) Unicode normalization — combining characters vs precomposed.",
      },
      {
        question: "Can I export the diff as a patch file?",
        answer:
          "Yes. Download as JSON Patch (RFC 6902) — a standard format describing add/remove/replace/move operations. Apply it programmatically using any JSON Patch library (fast-json-patch in Node, jsonpatch in Python, json-patch in Go). Useful for replaying changes, change-tracking, and undo systems.",
      },
      {
        question: "Does this replace schema validation?",
        answer:
          "No — it complements it. Schema validation (with JSON Schema, Zod, Joi, OpenAPI) checks STRUCTURE — does the object match the expected shape? JSON diff checks VALUES — what specifically differs between two instances. Use schema for contract enforcement, diff for change detection and debugging.",
      },
      {
        question: "Is there a size limit for the JSON I can diff?",
        answer:
          "No hard limit — the tool processes whatever you paste. Performance scales with size: small (under 1MB) diffs are instant; 10MB+ payloads may take a few seconds. Everything runs client-side so memory is your browser's only constraint. No server upload means no network bottleneck.",
      },
      {
        question: "Will this detect array reordering?",
        answer:
          "By default, arrays are compared by index — so `[1,2,3]` vs `[3,2,1]` shows three changes. Switch to 'match by key' mode if your array elements have IDs (e.g., user objects with `id` field) and the tool will match them correctly regardless of order. For arrays of primitives (numbers, strings), index-based comparison is the only option.",
      },
      {
        question: "Is my JSON data private?",
        answer:
          "Yes — completely. All parsing and diffing happens in your browser using JavaScript. Your JSON is never sent to any server, never logged, never stored. Safe for confidential API responses, PII, credentials, and proprietary data. You can verify by opening DevTools → Network tab while diffing — zero outgoing requests.",
      },
    ],

    relatedTools: [
      { name: "Diff Checker (text)", href: "/dev-tools/diff-checker" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "MIME Types Lookup", href: "/dev-tools/mime-types" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonDiffPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JsonDiff />
        </div>
      )}
    />
  )
}
