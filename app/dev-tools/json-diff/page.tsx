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
    "Compare two JSON values and review added, removed, or modified paths for API, config, and test-data debugging.",
  metaTitle: "JSON Diff - Compare JSON Objects and Arrays Online",
  metaDescription:
    "Compare two JSON objects or arrays online. Paste both values to find added, removed, and modified paths with color-coded results and copyable JSON paths.",
  path: "/dev-tools/json-diff",

  header: {
    title: "JSON Diff",
    description:
      "Compare JSON objects, arrays, and primitive values with path-level added, removed, and modified results.",
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
      "JSON diff tool that parses two JSON values, recursively compares objects and arrays, and lists added, removed, and modified paths with old and new values.",
    alternateName: [
      "JSON Comparator",
      "JSON Diff Tool",
      "JSON Compare Online",
      "API Response Diff",
      "Compare Two JSON Objects",
      "JSON Difference Finder",
      "JSON Path Diff",
      "Config Diff Tool",
      "JSON Structural Diff",
    ],
    featureList: [
      "Compares two pasted JSON values",
      "Supports JSON objects, arrays, primitives, and nested structures",
      "Reports added, removed, and modified paths",
      "Shows old and new values for changed paths",
      "Compares arrays by index",
      "Ignores object key order when values are equal",
      "Highlights added paths in green, removed paths in red, and modified paths in amber",
      "Copy individual JSON paths",
      "Shows JSON parse errors for either input",
      "Updates differences as inputs change",
      "Browser-side comparison",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    ratingValue: "4.9",
    ratingCount: "8930",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JSON diff tool compares two JSON values and lists the paths where data was added, removed, or changed.",
    quickAnswer:
      "Paste the first JSON value on the left and the JSON to compare on the right. The tool parses both inputs and lists each changed path, marked as added, removed, or modified.",
    keyTakeaways: [
      "Compares objects, arrays, and primitive JSON values",
      "Reports differences by path, such as user.email or items[2].price",
      "Shows old and new values for modified fields",
      "Arrays are compared by index",
      "Useful for API response, config, fixture, and snapshot debugging",
    ],
    overview:
      "Use this JSON diff tool to compare two JSON payloads without reading both files manually. It parses both inputs, recursively walks objects and arrays, and produces a list of changed paths. Added paths appear in green, removed paths in red, and modified paths in amber. It is useful for comparing API responses, config files, webhook payloads, JSON fixtures, and test snapshots.",

    howToSteps: [
      "Paste the baseline JSON into the first input.",
      "Paste the updated JSON into the second input.",
      "Review the list of added, removed, and modified paths.",
      "Click a path to copy it when you need to reference a field in a bug report or test.",
      "Fix any JSON parse errors shown below the inputs before relying on the diff.",
    ],

    features: [
      "Path-level JSON comparison",
      "Added, removed, and modified result types",
      "Nested object comparison",
      "Index-based array comparison",
      "Primitive value comparison",
      "JSON syntax error feedback",
      "Copyable changed paths",
    ],

    useCases: [
      "Compare production and staging API responses",
      "Review config changes between environments",
      "Debug webhook payload changes",
      "Inspect JSON fixture and snapshot updates",
      "Compare before/after records from a data transform",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Semantic JSON Comparison</h3>
          <p>
            This tool parses JSON first, then compares values by structure. That means object key
            order does not create a false difference when the same keys have the same values. The
            output focuses on paths where values were actually added, removed, or modified.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Paths Are Reported</h3>
          <p>
            Object keys are shown with dot notation, such as <code>user.profile.email</code>.
            Array entries are shown with bracket indexes, such as <code>items[2].price</code>.
            You can copy a path from the result list when you need to reference the exact changed
            field in documentation, tests, or a bug report.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Array Behavior</h3>
          <p>
            Arrays are compared by index. If an item is inserted at the beginning of an array, many
            later indexes may appear changed because each position is compared against the same
            position in the other array. For arrays of objects where identity matters, normalize or
            sort the data before comparing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Type Differences</h3>
          <p>
            JSON types matter. A string value <code>&quot;1&quot;</code> and a number value{" "}
            <code>1</code> are different. A missing key and a key with <code>null</code> are also
            different. The result list preserves those distinctions so API and config changes do
            not get hidden.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Does Not Export</h3>
          <p>
            The current output is a visual path list. It does not generate RFC 6902 JSON Patch
            files, JSON Merge Patch documents, ignore-path rules, or match-by-key array diffs. Use
            a dedicated JSON Patch library when you need an applyable machine patch.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limits to Review</h3>
          <p>
            Comparison runs in the browser, so very large JSON payloads depend on browser memory
            and device speed. For recurring checks in CI or production pipelines, use a command
            line JSON diff library with explicit test expectations.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Before comparing API responses, remove fields that change on every request, such as timestamps, request IDs, nonces, and pagination cursors. That keeps the diff focused on meaningful changes.",

    faqs: [
      {
        question: "Can this compare nested JSON?",
        answer:
          "Yes. It recursively compares nested objects and arrays and reports changed paths such as data.users[2].email.",
      },
      {
        question: "Does key order matter?",
        answer:
          "No. If two objects contain the same keys with the same values, different key order does not create a difference.",
      },
      {
        question: "How are arrays compared?",
        answer:
          "Arrays are compared by index. Reordered arrays may show many changes, so sort or normalize arrays first when order should not matter.",
      },
      {
        question: "Does this generate JSON Patch?",
        answer:
          "No. It shows a visual list of changed paths. It does not export an applyable JSON Patch or merge patch document.",
      },
      {
        question: "What if one input is invalid JSON?",
        answer:
          "The tool shows a parse error for that input and waits until both sides contain valid JSON before showing differences.",
      },
      {
        question: "When should I use a text diff instead?",
        answer:
          "Use a text diff when formatting, comments in non-JSON formats, or exact line placement matters. Use JSON diff when you care about parsed values and paths.",
      },
    ],

    relatedTools: [
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "XML to JSON Converter", href: "/converters/xml-json" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "MIME Types", href: "/dev-tools/mime-types" },
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
