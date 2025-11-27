import { ToolPageLayout } from "@/components/tool-page-layout"
import { HTMLToMarkdown } from "@/components/html-to-markdown"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "HTML to Markdown Converter",
  description: "Convert HTML to Markdown online free. Transform HTML code to clean Markdown format instantly. Best HTML to MD converter with support for tables, lists, and formatting.",
  metaTitle: "HTML to Markdown Converter | Free Convert HTML to Markdown Online",
  metaDescription: "Convert HTML to Markdown online free. Transform HTML code to clean Markdown format instantly. Best HTML to MD converter with support for tables, lists, and formatting.",
  path: "/dev-tools/html-to-markdown",

  header: {
    title: "HTML to Markdown Converter - Convert HTML to MD Online Free",
    description: "Convert HTML to Markdown online free. Transform HTML code to clean Markdown format instantly. Best HTML to MD converter with support for tables, lists, and formatting.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML to Markdown Converter", href: "/dev-tools/html-to-markdown" },
  ],

  content: {
    overview: "Convert HTML to Markdown online free with our instant converter. Transform HTML code into clean, readable Markdown format. Perfect for converting web content, documentation, and HTML pages to Markdown. Supports tables, lists, headings, links, and all standard HTML elements.",

    howToSteps: [
      "Paste your HTML code into the input field",
      "Click 'Convert to Markdown' to transform the HTML",
      "Preview the converted Markdown output",
      "Copy the Markdown code or download as .md file"
    ],

    features: [
      "Instant Conversion: Real-time HTML to Markdown transformation",
      "Complete HTML Support: Tables, lists, headings, links, emphasis, code blocks",
      "Nested Structure Handling: Converts complex nested HTML correctly",
      "Clean Output: Produces readable, well-formatted Markdown",
      "Preserve Formatting: Maintains text emphasis (bold, italic, code)",
      "Copy & Download: One-click copy or download as .md file",
      "No File Size Limits: Convert large HTML documents",
      "Browser-Based: All processing happens locally for privacy"
    ],

    useCases: [
      "Documentation Conversion: Transform HTML docs to Markdown for GitHub/GitLab",
      "Blog Migration: Convert HTML blog posts to Markdown for static site generators",
      "README Creation: Extract HTML content to create README.md files",
      "Content Management: Convert CMS HTML output to Markdown format",
      "Email to Markdown: Transform HTML emails into Markdown documentation",
      "Web Scraping: Convert scraped HTML content to clean Markdown"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">HTML vs Markdown</h3>
        <p className="mb-4">
          HTML (HyperText Markup Language) is the standard language for creating web pages with extensive formatting options and complex structures. Markdown is a lightweight markup language with plain text formatting syntax, designed for easy reading and writing. Converting HTML to Markdown creates cleaner, more maintainable documentation.
        </p>

        <h4 className="font-semibold mb-2">When to Use HTML:</h4>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Complex web pages with advanced styling and interactivity</li>
          <li>Applications requiring precise layout control</li>
          <li>Dynamic content with JavaScript integration</li>
        </ul>

        <h4 className="font-semibold mb-2">When to Use Markdown:</h4>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Documentation (README files, wikis, technical docs)</li>
          <li>Blog posts and static site content</li>
          <li>Simple, readable text formatting</li>
          <li>Version-controlled content (Git-friendly)</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Supported HTML Elements</h3>
        <p className="mb-4">
          Our converter handles all common HTML elements: headings (h1-h6), paragraphs, lists (ordered/unordered), tables, links, images, emphasis (bold, italic), code blocks, blockquotes, and horizontal rules. Nested structures are properly converted while maintaining Markdown readability.
        </p>
      </>
    ),

    proTip: "When converting complex HTML with custom classes or IDs, the converter focuses on semantic content and formatting. For best results, ensure your HTML is well-formed and uses standard HTML5 elements.",

    faqs: [
      {
        question: "What is HTML used for?",
        answer: "HTML is used for creating web pages and web applications. It structures content with tags for headings, paragraphs, links, images, tables, forms, and more. HTML is the foundation of all websites, defining the content and structure that browsers render visually."
      },
      {
        question: "What is HTML in simple words?",
        answer: "HTML (HyperText Markup Language) is the code used to structure web pages. It uses tags (like <h1>, <p>, <a>) to tell browsers how to display content. Think of it as the skeleton of a webpage - it defines what content exists and how it's organized."
      },
      {
        question: "What is the main purpose of HTML?",
        answer: "The main purpose of HTML is to structure and present content on the web. It provides semantic meaning to content, allowing browsers to understand and display text, images, links, and other elements correctly. HTML forms the foundation layer that CSS styles and JavaScript makes interactive."
      },
      {
        question: "What are the five uses of HTML?",
        answer: "1) Creating web pages and websites. 2) Structuring content with semantic meaning. 3) Embedding images, videos, and multimedia. 4) Creating forms for user input. 5) Building the foundation for web applications that CSS styles and JavaScript enhances."
      },
      {
        question: "What is the use of HTML in real life?",
        answer: "HTML is used everywhere on the web: websites you visit, online shopping, social media, email newsletters, documentation, blogs, forms you fill out, and web applications. Every webpage you see in your browser is built with HTML as the foundation."
      },
      {
        question: "Is HTML still relevant in 2025?",
        answer: "Absolutely! HTML remains the core technology of the web in 2025. While frameworks and tools have evolved, they all generate HTML at their core. Modern HTML5 continues to be updated with new features, and understanding HTML is essential for web development."
      },
      {
        question: "Should I still learn HTML and CSS?",
        answer: "Yes! HTML and CSS are fundamental web technologies that every web developer should know. They form the foundation for all web frameworks, and understanding them makes you a better developer even when using React, Vue, or other modern tools. They're easy to learn and provide immediate value."
      },
      {
        question: "Is HTML coding still used?",
        answer: "Yes, HTML is actively used every day by millions of developers worldwide. While frameworks like React abstract some HTML writing, they still generate HTML. Every website, web app, and email newsletter relies on HTML for structure and content."
      },
      {
        question: "How do I convert HTML to other formats?",
        answer: "Use our online converter to transform HTML to Markdown instantly. For other formats: HTML to PDF (browser print or tools like wkhtmltopdf), HTML to DOCX (Pandoc converter), HTML to plain text (strip tags). Our tool specializes in HTML to Markdown conversion for documentation and content management."
      },
      {
        question: "What is the difference between HTML and Markdown?",
        answer: "HTML is a comprehensive markup language with extensive tags for complex layouts and styling. Markdown is a lightweight markup language with simple syntax for basic formatting (headers, lists, emphasis). Markdown is easier to read and write, while HTML offers more control. Markdown often converts to HTML for web display."
      },
      {
        question: "Can I convert HTML with CSS to other formats?",
        answer: "Our converter focuses on HTML structure and semantic content. Inline CSS styles may be partially preserved in Markdown as appropriate. External CSS styling doesn't translate directly to Markdown since Markdown has limited styling options. The converter extracts content structure and basic formatting."
      },
      {
        question: "What formats can I convert HTML to?",
        answer: "Our tool converts HTML to Markdown (.md). HTML can also be converted to: PDF (for documents), DOCX (Word documents), plain text (removing all markup), RTF (rich text format), LaTeX (for academic documents), AsciiDoc, reStructuredText, and more using various tools. Markdown is ideal for documentation and version control."
      }
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function HTMLToMarkdownPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLToMarkdown />
        </div>
      )}
    />
  )
}
