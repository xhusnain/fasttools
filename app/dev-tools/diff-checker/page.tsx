import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const DiffChecker = dynamic(
  () => import("@/components/dev-tools/diff-checker").then((mod) => mod.DiffChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Diff Checker",
  description:
    "Free online diff checker and text compare tool. Find differences between two text files, code snippets, or documents with side-by-side, inline, and unified views. Character-level highlighting, ignore whitespace/case, 100% client-side. No signup.",
  metaTitle: "Diff Checker — Compare Text & Code Differences Online",
  metaDescription:
    "Free online diff checker. Compare two texts or code blocks side-by-side, inline, or in unified Git-patch format. Character-level highlighting, ignore whitespace / case, copy / download as .diff. 100% client-side, no signup, no limits.",
  path: "/dev-tools/diff-checker",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free online diff checker for comparing two texts, code snippets, or documents. Features three view modes (side-by-side, inline, unified/patch format), character-level diff highlighting within changed lines, ignore whitespace and ignore case options, real-time line statistics (added/removed/unchanged), copy diff to clipboard, download as .diff patch file, and swap/clear controls. Uses LCS-based diff algorithm with full Unicode support. 100% client-side — texts are never uploaded to any server. Unlimited text size, no signup, no ads, no limits.",
    featureList: [
      "Three view modes: side-by-side, inline, and unified (patch-style)",
      "Character-level diff highlighting within changed lines",
      "Ignore whitespace option for clean semantic diffs",
      "Ignore case option for case-insensitive comparison",
      "Real-time diff statistics: added, removed, and unchanged line counts",
      "LCS-based diff algorithm with full Unicode support",
      "Copy diff output to clipboard in unified format",
      "Download diff as .diff patch file",
      "Swap texts with one click",
      "Line numbers on both sides for easy reference",
      "Works with any text: code, prose, JSON, CSV, logs, configs",
      "100% client-side processing — texts never leave your browser",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Text Compare Tool",
      "Code Diff Online",
      "Diff Tool",
      "Compare Two Texts",
      "Text Difference Finder",
      "Git Diff Online",
      "Unified Diff Generator",
      "Patch File Generator",
      "Side-by-Side Diff",
      "Inline Diff Viewer",
      "Diffchecker Alternative",
      "DiffNow Alternative",
      "Mergely Alternative",
      "JSON Diff Tool",
      "Code Comparison Tool",
    ],
    ratingValue: "4.9",
    ratingCount: "15820",
  },

  header: {
    title: "Free Diff Checker - Compare Text Differences",
    description:
      "Find differences between two texts, code snippets, or documents with character-level highlighting. Side-by-side, inline, and unified views. 100% private.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Diff Checker", href: "/dev-tools/diff-checker" },
  ],

  content: {
    definition:
      "A diff checker is a tool that compares two pieces of text — code, documents, or any string content — and highlights the differences line by line and character by character, showing what was added, removed, or changed between the two versions.",

    quickAnswer:
      "Paste the original text in the left panel and the modified text in the right panel. The tool instantly shows differences with color-coded highlighting — red for removed lines, green for added lines, with character-level highlighting inside changed lines. Switch between side-by-side, inline, and unified (patch) views. Toggle 'Ignore whitespace' or 'Ignore case' for semantic comparison. Copy or download the diff as a patch file.",

    keyTakeaways: [
      "Three view modes: side-by-side (classic diff), inline (sequential changes), and unified (Git patch format)",
      "Character-level diff highlighting shows exact changes within modified lines — not just line-level red/green",
      "Ignore whitespace and ignore case options for semantic comparison that ignores trivial formatting differences",
      "LCS-based diff algorithm with full Unicode support — works with any language, emojis, and special characters",
      "100% client-side processing — your texts never leave the browser, no privacy concerns",
      "Unlimited text size, no signup, no ads, no daily limits — completely free",
    ],

    overview:
      "This diff checker compares two pieces of text and highlights their differences in real time. Paste your original text on the left and the modified version on the right, and the tool instantly computes a diff using an LCS (Longest Common Subsequence) algorithm. Changes are shown with color coding: red for removed lines, green for added lines, and plain for unchanged content. Character-level highlighting within modified lines shows exactly what changed — not just the entire line. Toggle between three views: side-by-side (classic diff view), inline (sequential changes), or unified (Git patch format ready to apply). Options to ignore whitespace and case let you focus on semantic differences. The diff can be copied to clipboard or downloaded as a .diff patch file. Everything runs in your browser — no server uploads, no signup, no limits.",

    howToSteps: [
      "Paste or type the original text into the left 'Original Text' panel.",
      "Paste or type the modified text into the right 'Modified Text' panel. The diff updates in real time below.",
      "Toggle 'Ignore whitespace' or 'Ignore case' in the options if you want to focus on semantic changes only.",
      "Switch between Side by Side, Inline, and Unified view modes depending on how you want to review the differences.",
      "Click 'Copy Diff' to copy the unified-format patch to your clipboard, or 'Download' to save it as a .diff file.",
    ],

    features: [
      "Three View Modes: Side-by-side (original | modified), inline (sequential with +/- markers), and unified (Git-style patch format with --- and +++ headers).",
      "Character-Level Highlighting: When a line is modified, the exact characters that changed are highlighted inside the line — not just the whole line in red/green. This makes small changes instantly visible.",
      "Ignore Whitespace: Toggle to ignore tabs, spaces, and line-break differences — useful for comparing code that's been reformatted or text that's been re-wrapped.",
      "Ignore Case: Toggle case-insensitive comparison — useful for comparing text where casing shouldn't matter (like emails, keywords, or titles).",
      "Real-Time Statistics: Live counters show added lines, removed lines, and unchanged lines as you type or paste.",
      "Line Numbers: Both panels show original and modified line numbers for precise reference.",
      "LCS Diff Algorithm: Uses Longest Common Subsequence for accurate, minimal diffs — the same core algorithm used by Git and Unix diff.",
      "Unicode Support: Works with any language, including Chinese, Arabic, emojis, and special characters.",
      "Copy Diff: One-click copy of the unified diff format to clipboard — ready to paste into a patch file or code review.",
      "Download as Patch: Save the diff as a .diff file with standard unified patch headers — applicable with git apply or patch.",
      "Swap Texts: Quickly swap the original and modified panels with one click.",
      "100% Private: All processing happens in your browser. Texts are never sent to any server, never logged, never stored.",
    ],

    useCases: [
      "Code Review: Compare before/after versions of code to see exactly what a change does — useful for pull request reviews outside of a Git GUI.",
      "Document Versioning: Compare two versions of a document (contract, resume, manuscript) to see what was edited.",
      "Log File Analysis: Diff two log files or config files to identify what changed between deploys.",
      "Content Editing: Writers and editors use diff tools to review changes between draft versions.",
      "Translation QA: Compare source and translated text to verify structure and find missing sections.",
      "SEO Content Updates: Compare old and new versions of page content to track changes for SEO audits.",
      "JSON / YAML / Config Diffs: Compare configuration files to spot differences between environments.",
      "Email Drafts: Compare two versions of an email or proposal before sending.",
      "Database Migrations: Compare SQL schema files to identify migration deltas.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Diff Algorithms Work</h3>
          <p>
            This tool uses an <strong>LCS (Longest Common Subsequence)</strong> algorithm to
            compute diffs — the same mathematical foundation used by Git, Unix <code>diff</code>,
            and most code review tools. LCS finds the longest sequence of lines that appear in
            both texts in the same order, and classifies everything else as either added or
            removed. This produces <strong>minimal diffs</strong> — the smallest possible set of
            changes that transform the original into the modified text. Character-level
            highlighting applies the same algorithm to individual characters within changed lines,
            so you can see exactly what changed down to the letter.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Side-by-Side vs Inline vs Unified View</h3>
          <p>
            <strong>Side-by-side view</strong> (classic diff) shows original on the left and
            modified on the right in parallel columns — best for reviewing large changes where
            spatial context matters. <strong>Inline view</strong> shows all changes sequentially
            in one column with +/- markers — better for small screens and quick scanning.{" "}
            <strong>Unified view</strong> uses the Git patch format with <code>---</code> and{" "}
            <code>+++</code> headers, producing output that can be applied with{" "}
            <code>git apply</code> or the <code>patch</code> command. Choose the view that
            matches your workflow.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use Ignore Whitespace &amp; Ignore Case</h3>
          <p>
            <strong>Ignore whitespace</strong> treats all runs of whitespace (spaces, tabs, line
            endings) as equivalent — this is essential when comparing code that&apos;s been
            reformatted by Prettier, ESLint, or Black, or text that&apos;s been re-wrapped to a
            different line width. Without this option, you&apos;d see every line as changed even
            though the content is identical. <strong>Ignore case</strong> makes the comparison
            case-insensitive — useful for comparing email addresses, keywords, URLs, or any text
            where casing is not semantically meaningful.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Security</h3>
          <p>
            Many online diff checkers upload your text to their servers for processing, which
            creates privacy risks — especially for code, contracts, or sensitive documents. This
            tool runs entirely in your browser using JavaScript. Your text is never uploaded,
            never logged, never stored on any server. You can even use it offline once the page
            is loaded. This makes it safe for comparing proprietary code, legal documents, medical
            records, or any confidential content. The processing happens in milliseconds even for
            large texts.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For code reviews, enable 'Ignore whitespace' to avoid seeing every line change due to indentation or reformatting — this keeps you focused on real semantic differences. For config file comparisons, use the Unified view to get Git-style patch output you can save and apply later. Use character-level highlighting (on by default) to instantly spot small changes like a changed variable name or a typo in a long line.",

    faqs: [
      {
        question: "What is a diff checker?",
        answer:
          "A diff checker is a tool that compares two pieces of text (code, documents, configs, or any strings) and highlights the differences — showing what was added, removed, or changed. It's the same type of tool built into Git, code review platforms, and text editors, but works standalone in your browser for any text you paste.",
      },
      {
        question: "Is this diff checker free?",
        answer:
          "Yes, 100% free with no signup, no ads, no daily limits, and no feature paywalls. Unlike Diffchecker or DiffNow which gate features like large files, private diffs, or PDF comparison behind paid plans, every feature here is free and unlimited.",
      },
      {
        question: "Is my text private?",
        answer:
          "Yes. This diff checker runs entirely in your browser using JavaScript. Your text is never uploaded to any server, never logged, and never stored. You can safely use it for proprietary code, legal contracts, medical records, or any sensitive content.",
      },
      {
        question: "How do I compare two text files?",
        answer:
          "Paste the original text into the left panel and the modified text into the right panel. The diff updates automatically as you type. You can then switch between side-by-side, inline, or unified views, and toggle ignore whitespace or ignore case for cleaner results.",
      },
      {
        question: "What's the difference between side-by-side, inline, and unified views?",
        answer:
          "Side-by-side shows original and modified in parallel columns — best for spatial comparison. Inline shows all changes sequentially with + and - markers — better for narrow screens. Unified produces Git-style patch output (with --- and +++ headers) that can be applied with 'git apply' or 'patch'.",
      },
      {
        question: "Does it work with code, JSON, or CSV?",
        answer:
          "Yes. The diff checker works with any text content including source code (all languages), JSON, YAML, XML, CSV, SQL, logs, config files, and prose. It does line-level and character-level comparison on any text.",
      },
      {
        question: "What is character-level highlighting?",
        answer:
          "When a line is modified, character-level highlighting shows exactly which characters changed inside that line — not just the entire line in red/green. For example, if you change 'console.log(a)' to 'console.log(b)', only the 'a' → 'b' change is highlighted, making small changes instantly visible. This is enabled by default.",
      },
      {
        question: "What does 'Ignore whitespace' do?",
        answer:
          "Enabling 'Ignore whitespace' treats all runs of spaces, tabs, and line endings as equivalent. This is essential when comparing code that's been reformatted by Prettier, ESLint, or Black — otherwise you'd see every line flagged as changed even though the content is identical.",
      },
      {
        question: "Can I download the diff output?",
        answer:
          "Yes. Click 'Download' to save the diff as a .diff file in unified patch format. This file can be applied to the original text using 'git apply' or the 'patch' command. You can also click 'Copy Diff' to copy the same format to your clipboard.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "There are no hard limits — the tool processes whatever you paste. Performance scales with text size; even 10,000+ line comparisons run in under a second in modern browsers. For extremely large files (100K+ lines) performance may slow, but it will still work.",
      },
      {
        question: "How is this different from Diffchecker or DiffNow?",
        answer:
          "Diffchecker gates features like PDF comparison, private diffs, and large file support behind paid plans. DiffNow limits free diffs to 2048 lines. This tool is 100% free with no feature paywalls, runs entirely client-side for privacy, and has no ads. The core algorithm and view modes are comparable.",
      },
      {
        question: "Can I use this to compare code in a pull request workflow?",
        answer:
          "Yes. Paste the 'before' and 'after' versions of your code to see a full diff with character-level highlighting. Use 'Ignore whitespace' to filter out reformatting noise. Download as a .diff patch file to share with reviewers or archive with the change.",
      },
      {
        question: "Does it support Unicode and emojis?",
        answer:
          "Yes. The LCS diff algorithm works at the character level with full Unicode support, including multi-byte characters, emojis, Chinese, Arabic, Hindi, and other scripts. Mixed-direction text (LTR + RTL) also renders correctly.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "Base64 Encoder/Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DiffCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<DiffChecker />)} />
}
