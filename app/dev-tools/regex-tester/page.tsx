import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const RegexTester = dynamic(
  () => import("@/components/dev-tools/regex-tester").then((mod) => mod.RegexTester),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Regex Tester",
  description:
    "Test regular expressions against sample text with match highlights and capture-group inspection.",
  metaTitle: "Regex Tester — Test Regular Expressions Online Free (2026)",
  metaDescription:
    "Free online regex tester. Test regular expressions with real-time match highlighting, capture groups, flags (g, i, m), and replacement. Supports JavaScript regex syntax.",
  path: "/dev-tools/regex-tester",

  header: {
    title: "Online Regex Tester & Debugger",
    description:
      "Test regular expressions with real-time match highlighting, capture group inspection, and flag support. Paste your regex pattern and test string to see matches instantly — supports JavaScript regex syntax.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Regex Tester", href: "/dev-tools/regex-tester" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Regular expression testing tool for validating patterns, flags, and capture groups.",
    featureList: [
      "Regex pattern testing",
      "Flags and match preview",
      "Capture-group inspection",
      "Browser-based debugging workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Regex Tester is a free tool that lets you write, test, and debug regular expressions against sample text with real-time match highlighting.",
    quickAnswer:
      "Enter a regex pattern and test string to see matches highlighted instantly. Supports JavaScript regex syntax with flags (g, i, m, s). View capture groups, match indices, and replacement results.",
    keyTakeaways: [
      "Real-time match highlighting as you type the pattern",
      "Supports JavaScript regex flags: global (g), case-insensitive (i), multiline (m)",
      "Shows numbered capture groups and named groups",
      "Test replacement patterns with $1, $2 backreferences",
      "Common patterns: email, URL, phone, IP address, date formats",
    ],
    overview:
      "Test and debug regular expressions online with this free regex tester. Enter your regex pattern and test string to see matches highlighted in real time as you type. The tool supports JavaScript regex syntax with all flags — global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u). Inspect numbered and named capture groups, view match indices, and test replacement patterns with backreferences ($1, $2). Useful for building form validation rules, log parsing patterns, text extraction logic, and search-and-replace operations before adding them to your code.",

    howToSteps: [
      "Enter your regular expression pattern in the regex input field.",
      "Paste or type the test string you want to match against.",
      "Toggle regex flags (global, case-insensitive, multiline) as needed.",
      "Review highlighted matches, capture groups, and match indices — refine your pattern until it works correctly.",
    ],

    features: [
      "Real-time match highlighting as you type the pattern",
      "Full JavaScript regex flag support: g, i, m, s, u, y",
      "Numbered and named capture group inspection",
      "Match index positions shown for each match",
      "Replacement pattern testing with $1, $2 backreferences",
      "100% client-side — no data sent to any server",
    ],

    useCases: [
      "Build and test form validation patterns (email, phone, URL, password)",
      "Create log parsing regex for extracting timestamps, IPs, and error codes",
      "Design search-and-replace rules for text processing pipelines",
      "Validate data extraction patterns before deploying to production",
      "Debug why a regex pattern is not matching expected input",
    ],

    aboutTool:
      "Regular expressions are powerful but error-prone — a small mistake can cause unexpected matches, missed captures, or catastrophic backtracking. This regex tester helps you catch issues before they reach production. It uses JavaScript's native RegExp engine, so patterns behave exactly as they would in your JavaScript/TypeScript code. The tool highlights all matches in the test string, shows capture group contents, and displays match positions. For complex patterns, use the flag toggles to test behavior with different modes. Common regex patterns: email validation (^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$), URL matching, phone numbers, IP addresses, and date formats.",

    proTip:
      "Always test your regex with both valid AND invalid inputs to catch false positives. For email validation, test edge cases like user@domain (no TLD), @domain.com (no user), and user@.com (empty domain). Use non-greedy quantifiers (.*?) when you want the shortest match.",

    faqs: [
      {
        question: "What regex syntax does this tester support?",
        answer:
          "It uses JavaScript's native RegExp engine, supporting all standard regex syntax including character classes, quantifiers, lookaheads, lookbehinds (ES2018+), named capture groups, and Unicode property escapes.",
      },
      {
        question: "What regex flags are available?",
        answer:
          "All JavaScript regex flags: g (global — find all matches), i (case-insensitive), m (multiline — ^ and $ match line boundaries), s (dotAll — . matches newlines), u (unicode), and y (sticky).",
      },
      {
        question: "How do I test capture groups?",
        answer:
          "Add parentheses in your pattern to create capture groups. The tool displays all captured values with their group numbers. For named groups, use (?<name>pattern) syntax and the tool shows the group names.",
      },
      {
        question: "Can I test regex replacement patterns?",
        answer:
          "Yes. Enter a replacement string using $1, $2 backreferences for captured groups, or $& for the full match. The tool shows the replacement result in real time.",
      },
      {
        question: "Will my regex work the same in Python or Java?",
        answer:
          "Regex syntax varies between languages. This tester uses JavaScript regex. Most basic patterns work cross-language, but features like lookbehinds, named groups, and flags may differ in Python, Java, or Go.",
      },
      {
        question: "Is this regex tester free?",
        answer:
          "Yes. Completely free, runs locally in your browser, and has no limits on pattern testing or registration requirements.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RegexTesterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RegexTester />
        </div>
      )}
    />
  )
}
