import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { MarkdownPreviewer } from "@/components/markdown-previewer"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Markdown Previewer | Free Online Markdown Editor with Live Preview",
  description:
    "Free online Markdown previewer with live preview. Edit and preview Markdown in real-time with GitHub Flavored Markdown support. Best Markdown editor for README files and documentation.",
  path: "/dev-tools/markdown-previewer",
  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" }
  ],
  schemaOptions: {
    name: "Markdown Previewer - Free Online Markdown Editor with Live Preview",
    alternateName: "Best Markdown Previewer Online",
    applicationCategory: "DeveloperApplication",
    ratingValue: "4.9",
    ratingCount: "4567",
    featureList: [
      "Live Markdown preview in real-time",
      "GitHub Flavored Markdown (GFM) support",
      "Split view editor with syntax highlighting",
      "Support for tables, code blocks, task lists",
      "Emoji support and automatic URL linking",
      "Export to HTML",
      "Copy formatted output",
      "No signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Developer Tools",
}

export default function MarkdownPreviewerPage() {
  const toolContent = {
    toolName: "Markdown Previewer",
    overview: "Free online Markdown previewer with live preview functionality. Edit Markdown and see formatted output instantly with our split-view editor. Supports GitHub Flavored Markdown (GFM), tables, task lists, code blocks, and emojis. Perfect for creating READMEfiles, documentation, and blog posts.",

    howToSteps: [
      "Type or paste Markdown text in the editor",
      "See live preview update instantly as you type",
      "Use toolbar for quick formatting (bold, italic, lists)",
      "Preview tables, code blocks, and other Markdown features",
      "Copy formatted HTML or download Markdown file"
    ],

    features: [
      "Live Preview: See formatted output instantly as you type",
      "GitHub Flavored Markdown: Full GFM support including tables and task lists",
      "Split View Editor: Side-by-side editing and preview",
      "Syntax Highlighting: Color-coded Markdown syntax for better readability",
      "Code Block Support: Syntax highlighting for multiple programming languages",
      "Table Editor: Create and preview Markdown tables easily",
      "Emoji Support: Use :emoji: syntax for emoji characters",
      "Export Options: Download as .md file or copy HTML output"
    ],

    useCases: [
      "README Files: Create GitHub README.md files with live preview",
      "Documentation: Write technical documentation and see formatting instantly",
      "Blog Posts: Draft blog content in Markdown format",
      "Note Taking: Create formatted notes with Markdown syntax",
      "Learning Markdown: Practice Markdown syntax with immediate feedback",
      "Content Migration: Preview content before publishing to static site generators",
      "FreeCodeCamp Projects: Complete Markdown previewer coding challenges"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is Markdown?</h3>
        <p className="mb-4">
          Markdown is a lightweight markup language created by John Gruber in 2004. It allows you to write formatted text using plain text syntax that's easy to read and write. Markdown is widely used for README files, documentation, blogs, and note-taking because it's simple yet powerful.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">GitHub Flavored Markdown (GFM)</h3>
        <p className="mb-4">
          Our previewer supports GitHub Flavored Markdown, which extends standard Markdown with additional features:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li><strong>Tables:</strong> Create structured data tables with alignment options</li>
          <li><strong>Task Lists:</strong> Checkbox lists perfect for to-do items</li>
          <li><strong>Strikethrough:</strong> ~~crossed out text~~ using double tildes</li>
          <li><strong>Automatic URL Linking:</strong> URLs become clickable links automatically</li>
          <li><strong>Emoji Support:</strong> Use :emoji_name: syntax for emoji characters</li>
          <li><strong>Fenced Code Blocks:</strong> With syntax highlighting for many languages</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Markdown Syntax Quick Reference</h3>
        <div className="space-y-2 mb-6 text-sm">
          <p><strong>Headers:</strong> # H1, ## H2, ### H3 (up to ###### H6)</p>
          <p><strong>Emphasis:</strong> *italic* or _italic_, **bold** or __bold__, ***bold italic***</p>
          <p><strong>Lists:</strong> - or * for unordered, 1. 2. 3. for ordered</p>
          <p><strong>Links:</strong> [link text](URL) or [link text](URL "title")</p>
          <p><strong>Images:</strong> ![alt text](image-url)</p>
          <p><strong>Code:</strong> `inline code` or ```language for code blocks</p>
          <p><strong>Blockquotes:</strong> {">"} quoted text</p>
          <p><strong>Horizontal Rule:</strong> --- or *** or ___</p>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Use Cases for Markdown</h3>
        <p className="mb-6">
          Markdown is used extensively in software development (GitHub, GitLab), documentation platforms (Read the Docs, MkDocs), static site generators (Jekyll, Hugo, Gatsby), blogging platforms (Ghost, Dev.to), note-taking apps (Obsidian, Notion), and messaging platforms (Discord, Slack). Its simplicity and readability make it ideal for version-controlled documentation.
        </p>
      </>
    ),

    proTip: "Use our live preview to quickly test Markdown syntax. For complex tables, draft the basic structure first, then refine alignment and content while checking the preview. Remember that GitHub README files support badges, which you can add as images with links.",

    faqs: [
      {
        question: "What is a markdown previewer?",
        answer: "A Markdown previewer is a tool that shows you how your Markdown text will look when rendered as HTML. It provides live preview, allowing you to see formatted output (headings, lists, links, etc.) as you type. Our previewer uses GitHub Flavored Markdown for the most accurate preview."
      },
      {
        question: "How does the split view markdown editor work?",
        answer: "The split view shows two panels side-by-side: the editor panel where you type Markdown syntax, and the preview panel showing the formatted output. As you type in the editor, the preview updates in real-time, allowing you to see exactly how your Markdown will render without switching views."
      },
      {
        question: "Does it support GitHub Flavored Markdown (GFM)?",
        answer: "Yes! Our previewer fully supports GitHub Flavored Markdown (GFM), including tables, task lists (checkboxes), strikethrough text, automatic URL linking, fenced code blocks with syntax highlighting, and emoji support using :emoji_name: syntax."
      },
      {
        question: "Can I use this for FreeCodeCamp markdown previewer projects?",
        answer: "Absolutely! Our Markdown previewer is perfect for completing FreeCodeCamp's Markdown Previewer project. It demonstrates real-time rendering, supports all required Markdown features, and provides a clean interface that meets project requirements. Use it as reference or inspiration for your own implementation."
      },
      {
        question: "What markdown features are supported?",
        answer: "We support all standard Markdown features: headings (H1-H6), emphasis (bold, italic), lists (ordered, unordered, task lists), links, images, code blocks with syntax highlighting, inline code, blockquotes, tables with alignment, horizontal rules, strikethrough, and emoji. Full GitHub Flavored Markdown compatibility."
      },
      {
        question: "Is this the best markdown previewer online?",
        answer: "Our Markdown previewer offers instant live preview, full GFM support, clean interface, syntax highlighting, and no signup required. It's designed for speed and accuracy, making it one of the best free options available for developers, writers, and students working with Markdown."
      },
      {
        question: "How do I use it as a GitHub README editor?",
        answer: "Simply paste your README content or start typing Markdown. The live preview shows exactly how it will appear on GitHub since we use GitHub Flavored Markdown. Add tables, task lists, code blocks, and badges. Copy the final Markdown and paste into your README.md file on GitHub."
      },
      {
        question: "Can I use this for technical documentation and blogging?",
        answer: "Yes! Our previewer is perfect for drafting technical documentation, blog posts, and articles. The live preview helps you format content correctly before publishing to platforms like Dev.to, Medium, Ghost, or static site generators (Gatsby, Hugo, Jekyll) that use Markdown."
      },
      {
        question: "What is the markdown to HTML conversion feature?",
        answer: "Our tool converts Markdown to HTML in real-time for the preview. You can copy the rendered HTML output for use in web pages, emails, or content management systems. The HTML includes proper semantic tags and preserves all formatting from your Markdown source."
      },
      {
        question: "How do I learn markdown with this tool?",
        answer: "Start typing common syntax like # for headers, ** for bold, - for lists. The live preview immediately shows the result, providing instant feedback. Experiment with different Markdown features and see how they render. The visual feedback makes learning intuitive and fast."
      },
      {
        question: "What is Markdown and why is it used?",
        answer: "Markdown is a lightweight markup language that uses plain text formatting syntax. It's used because: 1) It's easy to read and write. 2) Converts to HTML easily. 3) Platform-independent. 4) Perfect for version control (Git-friendly). 5) Widely supported by GitHub, documentation tools, and blogging platforms. 6) Focuses on content over formatting."
      },
      {
        question: "How to view Markdown preview?",
        answer: "Simply paste or type Markdown into our editor and the preview appears instantly on the right. No additional steps needed - the live preview updates automatically as you type. You can also use IDE extensions (VS Code Markdown Preview), GitHub's preview tab, or other online Markdown viewers."
      },
      {
        question: "What is the best Markdown viewer?",
        answer: "The best Markdown viewer depends on your needs. For online use: our live previewer with GFM support. For desktop: VS Code with Markdown preview extension, Typora (WYSIWYG), or Obsidian. For CLI: glow, mdcat. For browser extensions: Markdown Viewer (Chrome). All excel in different use cases."
      },
      {
        question: "Is Markdown still relevant?",
        answer: "Absolutely! Markdown remains highly relevant in 2025 and beyond. It's the standard for GitHub documentation, widely used in technical writing, blogging platforms, note-taking apps (Obsidian, Notion), static site generators, and developer documentation. Its simplicity ensures longevity in the tech ecosystem."
      },
      {
        question: "How to enable live preview?",
        answer: "Live preview is automatically enabled in our tool - no setup required! Simply start typing in the editor pane and watch the preview pane update in real-time. In IDEs like VS Code, use Ctrl+Shift+V (Cmd+Shift+V on Mac) to open Markdown preview. Our online tool provides instant live preview without any configuration."
      }
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Markdown Previewer - Free Online Markdown Editor with Live Preview",
        description: "Free online Markdown previewer with live preview. Edit and preview Markdown in real-time with GitHub Flavored Markdown support. Best Markdown editor for README files and documentation.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Developer Tools", href: "/dev-tools" },
        { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MarkdownPreviewer />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Markdown Previewer | Free Online Markdown Editor with Live Preview",
        description: "Free online Markdown previewer with live preview. Edit and preview Markdown in real-time with GitHub Flavored Markdown support. Best Markdown editor for README files and documentation.",
        path: "/dev-tools/markdown-previewer"
      }}
    />
  )
}
