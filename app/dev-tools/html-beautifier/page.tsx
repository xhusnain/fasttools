import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HTMLBeautifier = dynamic(
  () => import("@/components/dev-tools/html-beautifier").then((mod) => mod.HTMLBeautifier),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML Beautifier",
  description:
    "Beautify or minify pasted HTML with indentation options, optional comment removal, output stats, copy, and download.",
  metaTitle: "HTML Beautifier and Minifier - Format HTML Online",
  metaDescription:
    "Format pasted HTML online. Beautify markup with 2, 4, or 8-space indentation, minify whitespace, optionally remove comments, then copy or download the result.",
  path: "/dev-tools/html-beautifier",

  header: {
    title: "HTML Beautifier & Minifier",
    description:
      "Paste HTML, choose beautify or minify mode, and copy or download the formatted result.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "HTML beautifier and minifier for pasted markup. Supports beautify mode, minify mode, 2/4/8-space indentation, optional HTML comment removal, basic structure feedback, output stats, copy, and .html download.",
    alternateName: [
      "HTML Formatter",
      "HTML Pretty Print",
      "HTML Indenter",
      "HTML Minifier",
      "HTML Compressor",
    ],
    featureList: [
      "Beautify pasted HTML with line breaks and indentation",
      "Minify pasted HTML by collapsing whitespace",
      "Indent options: 2 spaces, 4 spaces, or 8 spaces",
      "Optional HTML comment removal",
      "Basic structure feedback",
      "Input and output line/character stats",
      "Copy formatted output",
      "Download output as beautified.html or minified.html",
      "Browser-side formatting",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML beautifier formats compact or messy markup into a more readable shape by adding line breaks and indentation.",
    quickAnswer:
      "Paste HTML, choose Beautify or Minify, pick an indent size, optionally remove comments, then copy or download the output. The tool is for readability and quick cleanup, not full HTML validation.",
    keyTakeaways: [
      "Beautifies pasted HTML into indented output",
      "Minifies pasted HTML by reducing whitespace",
      "Supports 2, 4, or 8-space indentation",
      "Can keep or remove HTML comments",
      "Shows basic output stats and downloads .html files",
    ],
    overview:
      "Use this HTML beautifier when you need to read, review, or quickly compress pasted markup. Beautify mode adds line breaks and indentation to make nested tags easier to inspect. Minify mode collapses whitespace and can remove comments when that option is enabled. The tool also shows simple line and character counts so you can see how the output changed.",

    howToSteps: [
      "Paste HTML into the input box.",
      "Choose Beautify or Minify.",
      "Select 2, 4, or 8-space indentation for beautify mode.",
      "Choose whether to keep or remove HTML comments.",
      "Copy the output or download it as an .html file.",
    ],

    features: [
      "Beautify mode",
      "Minify mode",
      "Indent-size control",
      "Comment removal option",
      "Basic structure feedback",
      "Copy and download output",
    ],

    useCases: [
      "Read minified page source",
      "Review generated CMS markup",
      "Clean AI-generated HTML before editing",
      "Compress simple HTML snippets",
      "Compare input and output length before deployment",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Beautify vs Minify</h3>
          <p>
            Beautify mode makes markup easier to read by splitting tags onto separate lines and
            adding indentation. Minify mode reduces extra whitespace and can remove HTML comments.
            Keep a readable source version for editing, then minify only when you need compact
            output.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What the Basic Check Means</h3>
          <p>
            The status message is a light structure check, not a standards validator. It helps
            catch obviously unusual input, but it does not replace a full HTML validator, browser
            test, accessibility audit, or email-client test.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Minification Limits</h3>
          <p>
            This minifier focuses on whitespace and optional comments. It does not rewrite
            attributes, optimize inline CSS or JavaScript, remove redundant attributes, or perform
            build-pipeline optimizations. For production websites, use this for quick snippets and
            use a build tool for full optimization.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Review Manually</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>HTML with inline JavaScript or CSS that depends on exact whitespace.</li>
            <li>Email templates, where clients can be sensitive to markup changes.</li>
            <li>Template languages mixed into HTML attributes.</li>
            <li>Whitespace-sensitive content inside preformatted blocks.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Use beautify mode for inspection and code review. Use minify mode only after you are done editing, and retest the output in the page, CMS, or email client where it will be used.",

    faqs: [
      {
        question: "Does beautifying change how HTML renders?",
        answer:
          "Usually no for normal markup, but whitespace-sensitive blocks and mixed template code should still be reviewed manually.",
      },
      {
        question: "Does this validate HTML?",
        answer:
          "No. It provides only a basic structure signal. Use a dedicated validator when standards compliance matters.",
      },
      {
        question: "Does minify remove comments?",
        answer:
          "Only when you choose the remove-comments option. Otherwise comments are kept.",
      },
      {
        question: "Can I download the output?",
        answer:
          "Yes. Beautify mode downloads beautified.html and minify mode downloads minified.html.",
      },
      {
        question: "Does this optimize JavaScript or CSS inside HTML?",
        answer:
          "No. It formats the HTML string. Use a CSS or JavaScript minifier for inline code optimization.",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/url-slug-generator" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlBeautifierPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLBeautifier />
        </div>
      )}
    />
  )
}
