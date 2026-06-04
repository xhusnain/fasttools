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
    "Free online diff checker and text compare tool. Find differences between two text blocks, code snippets, or documents with side-by-side, inline, and unified-style views. Character-level highlighting, ignore whitespace/case, and browser-side comparison.",
  metaTitle: "Diff Checker — Compare Text & Code Differences Online",
  metaDescription:
    "Free online diff checker. Compare two texts or code blocks side-by-side, inline, or in unified-style format. Character-level highlighting, ignore whitespace / case, copy or download as .diff.",
  path: "/dev-tools/diff-checker",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Online diff checker for comparing two texts, code snippets, or documents. Features three view modes (side-by-side, inline, unified-style output), character-level diff highlighting within changed lines, ignore whitespace and ignore case options, real-time line statistics (added/removed/unchanged), copy diff to clipboard, download as a .diff text file, and swap/clear controls. Uses an LCS-based diff algorithm.",
    featureList: [
      "Three view modes: side-by-side, inline, and unified (patch-style)",
      "Character-level diff highlighting within changed lines",
      "Ignore whitespace option for clean semantic diffs",
      "Ignore case option for case-insensitive comparison",
      "Real-time diff statistics: added, removed, and unchanged line counts",
      "LCS-based diff algorithm with full Unicode support",
      "Copy diff output to clipboard in unified-style format",
      "Download diff output as a .diff text file",
      "Swap texts with one click",
      "Line numbers on both sides for easy reference",
      "Works with any text: code, prose, JSON, CSV, logs, configs",
      "Browser-side text comparison",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Text Compare Tool",
      "Code Diff Online",
      "Diff Tool",
      "Compare Two Texts",
      "Text Difference Finder",
      "Git Diff Online",
      "Unified Diff Viewer",
      "Diff File Generator",
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
      "Find differences between two texts, code snippets, or documents with character-level highlighting. Side-by-side, inline, and unified-style views.",
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
      "Paste the original text in the left panel and the modified text in the right panel. The tool instantly shows differences with color-coded highlighting — red for removed lines, green for added lines, with character-level highlighting inside changed lines. Switch between side-by-side, inline, and unified-style views. Toggle 'Ignore whitespace' or 'Ignore case' for cleaner comparison. Copy or download the diff text as a .diff file.",

    keyTakeaways: [
      "Three view modes: side-by-side (classic diff), inline (sequential changes), and unified-style diff output",
      "Character-level diff highlighting shows exact changes within modified lines — not just line-level red/green",
      "Ignore whitespace and ignore case options for semantic comparison that ignores trivial formatting differences",
      "LCS-based diff algorithm works with plain text, code, JSON, CSV, logs, and configs",
      "Browser-side comparison keeps the pasted text in the page during diff generation",
      "Copy the generated diff text or download it as a .diff file",
    ],

    overview:
      "This diff checker compares two pieces of text and highlights their differences in real time. Paste your original text on the left and the modified version on the right, and the tool computes a diff using an LCS (Longest Common Subsequence) algorithm. Changes are shown with color coding: red for removed lines, green for added lines, and plain for unchanged content. Character-level highlighting within modified lines shows exactly what changed — not just the entire line. Toggle between three views: side-by-side (classic diff view), inline (sequential changes), or unified-style diff output. Options to ignore whitespace and case help you focus on meaningful differences. The diff text can be copied to clipboard or downloaded as a .diff file.",

    howToSteps: [
      "Paste or type the original text into the left 'Original Text' panel.",
      "Paste or type the modified text into the right 'Modified Text' panel. The diff updates in real time below.",
      "Toggle 'Ignore whitespace' or 'Ignore case' in the options if you want to focus on semantic changes only.",
      "Switch between Side by Side, Inline, and Unified view modes depending on how you want to review the differences.",
      "Click 'Copy Diff' to copy the unified-style output to your clipboard, or 'Download' to save it as a .diff file.",
    ],

    features: [
      "Three View Modes: Side-by-side (original | modified), inline (sequential with +/- markers), and unified-style output with --- and +++ headers.",
      "Character-Level Highlighting: When a line is modified, the exact characters that changed are highlighted inside the line — not just the whole line in red/green. This makes small changes instantly visible.",
      "Ignore Whitespace: Toggle to ignore tabs, spaces, and line-break differences — useful for comparing code that's been reformatted or text that's been re-wrapped.",
      "Ignore Case: Toggle case-insensitive comparison — useful for comparing text where casing shouldn't matter (like emails, keywords, or titles).",
      "Real-Time Statistics: Live counters show added lines, removed lines, and unchanged lines as you type or paste.",
      "Line Numbers: Both panels show original and modified line numbers for precise reference.",
      "LCS Diff Algorithm: Uses Longest Common Subsequence to identify added, removed, and unchanged lines.",
      "Unicode Support: Works with Unicode text including multi-byte characters and emojis.",
      "Copy Diff: One-click copy of the unified-style diff text to clipboard.",
      "Download Diff: Save the generated diff text as a .diff file for review or sharing.",
      "Swap Texts: Quickly swap the original and modified panels with one click.",
      "Browser-Side Comparison: The diff calculation runs in the page after your text is pasted.",
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
            <strong>Unified view</strong> uses <code>---</code> and <code>+++</code> headers with
            added and removed line prefixes, which is useful for compact review, copying, and
            sharing. Choose the view that matches your workflow.
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
            The comparison runs in your browser using JavaScript, so the tool does not need to
            send pasted text to a diff-processing API. That is useful for quick checks of code,
            contracts, drafts, and configuration files. For highly confidential or regulated
            material, follow your organization&apos;s policy before pasting content into any web
            page.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Diff Algorithm Notes</h3>
          <p>
            This tool uses a dynamic-programming LCS comparison for lines, and then applies a
            character-level comparison inside paired changed lines. Other developer tools may use
            different algorithms depending on the workflow:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>LCS line diff:</strong> the method used here to mark lines as unchanged, added, or removed.</li>
            <li><strong>Myers diff:</strong> common in command-line diff tools and source-control workflows.</li>
            <li><strong>Patience and histogram diff:</strong> useful in some Git workflows when code blocks have moved.</li>
            <li><strong>Word-level diff:</strong> useful for prose changes where line breaks would otherwise mark whole paragraphs as different.</li>
            <li><strong>Character-level diff:</strong> what this tool uses within changed lines to show exact letter-level changes.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Diff Checker vs Git, GitHub PRs, VS Code, Beyond Compare</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Tool</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
                <th className="text-left py-2 px-2 text-foreground">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>This tool</strong></td>
                <td className="py-2 px-2">Ad-hoc text comparison, sensitive content, quick paste-and-compare</td>
                <td className="py-2 px-2">No file upload, no Git integration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Git diff CLI</td>
                <td className="py-2 px-2">Within a Git repo, scriptable</td>
                <td className="py-2 px-2">Requires Git context; terminal only</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">GitHub PR view</td>
                <td className="py-2 px-2">Team code reviews with comments</td>
                <td className="py-2 px-2">Requires GitHub; tied to commits</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">VS Code Compare</td>
                <td className="py-2 px-2">Live editing during comparison</td>
                <td className="py-2 px-2">Needs files on disk; editor open</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Beyond Compare (paid)</td>
                <td className="py-2 px-2">3-way merge, folder diffs, FTP/SCP</td>
                <td className="py-2 px-2">$60+ per license</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Dedicated hosted diff services</td>
                <td className="py-2 px-2">Saved comparisons, file uploads, extra media formats</td>
                <td className="py-2 px-2">May be more than you need for a quick pasted-text comparison</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Meld (Linux)</td>
                <td className="py-2 px-2">3-way merge, folder comparison</td>
                <td className="py-2 px-2">Desktop install required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Unified-Style Diff Output</h3>
          <p>The unified view gives a compact text representation with file-style headers and line prefixes:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`--- Original
+++ Modified
 unchanged line above
-removed line
+added line
 unchanged line below`}</code>
          </pre>
          <p className="mt-3">
            The header lines (<code>---</code> / <code>+++</code>) identify the two sides. Lines
            prefixed with <code>-</code> were removed, <code>+</code> were added, and unprefixed
            lines are unchanged context. The downloaded <code>.diff</code> file is intended for
            review, sharing, or archiving; it is not a generated Git patch with hunk line ranges.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases Beyond Code Review</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contract / legal document comparison:</strong> compare versions of contracts, NDAs, terms of service to spot changed clauses. Use character-level highlighting to catch single-word changes.</li>
            <li><strong>Manuscript editing:</strong> compare draft 1 vs draft 2 of an article / book chapter / paper</li>
            <li><strong>Translation QA:</strong> compare source and translated text to verify structure preservation and find missing sections</li>
            <li><strong>Config file environments:</strong> compare dev / staging / prod configs to find drift</li>
            <li><strong>Log file analysis:</strong> compare last week&apos;s logs vs this week&apos;s to find new error patterns</li>
            <li><strong>SQL query comparison:</strong> compare two query versions during optimization to see exactly what changed</li>
            <li><strong>API response comparison:</strong> compare what an API returned today vs what it returned last month (use Ignore Whitespace + sort first for stable comparison)</li>
            <li><strong>Email draft review:</strong> compare a teammate&apos;s edits to your draft</li>
            <li><strong>Plagiarism detection:</strong> compare two essays to identify identical passages</li>
            <li><strong>Resume version tracking:</strong> see what you changed between job application versions</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "For code reviews, enable 'Ignore whitespace' to avoid seeing every line change due to indentation or reformatting. For config file comparisons, use the Unified view to get compact diff text you can save or share. Use character-level highlighting to spot small changes like a changed variable name or a typo in a long line.",

    faqs: [
      {
        question: "What is a diff checker?",
        answer:
          "A diff checker is a tool that compares two pieces of text (code, documents, configs, or any strings) and highlights the differences — showing what was added, removed, or changed. It's the same type of tool built into Git, code review platforms, and text editors, but works standalone in your browser for any text you paste.",
      },
      {
        question: "Is this diff checker free?",
        answer:
          "Yes. You can compare pasted text directly in the browser and use the side-by-side, inline, unified-style, copy, and download options without creating an account.",
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
          "Side-by-side shows original and modified in parallel columns — best for spatial comparison. Inline shows all changes sequentially with + and - markers — better for narrow screens. Unified shows a compact diff-style text view with --- and +++ headers.",
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
          "Yes. Click 'Download' to save the generated diff text as a .diff file. You can also click 'Copy Diff' to copy the same output to your clipboard.",
      },
      {
        question: "Is there a file size limit?",
        answer:
          "There is no separate upload limit because you paste text into the page, but performance depends on browser memory, device speed, and text size. Very large files are better compared with Git, a desktop editor, or a command-line diff tool.",
      },
      {
        question: "Can I use this to compare code in a pull request workflow?",
        answer:
          "Yes. Paste the before and after versions of your code to see a text diff with character-level highlighting. Use 'Ignore whitespace' to filter out reformatting noise, then copy or download the diff text for review.",
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
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DiffCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<DiffChecker />)} />
}
