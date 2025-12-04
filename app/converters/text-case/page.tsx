import { TextCaseConverter } from "@/components/converters/text-case-converter"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "Text Case Converter",
  description: "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
  metaTitle: "Text Case Converter | Free Uppercase, Lowercase, Title Case Tool",
  metaDescription: "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
  path: "/converters/text-case",

  header: {
    title: "Free Text Case Converter",
    description: "Convert and clean text instantly across popular writing and programming cases with copy‑ready results.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text Case Converter", href: "/converters/text-case" },
  ],

  content: {
    overview: "Our free text case converter and case converter online provide instant text transformation between uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and PascalCase formats. Whether you need an uppercase to lowercase converter, lowercase to uppercase converter, title case converter, or sentence case converter, this online text tools platform delivers accurate conversions instantly. As a comprehensive word counter and character counter, our tool provides detailed text analysis including word count tool, character count tool, text counter, and word and character counter functionality.",

    howToSteps: [
      "Paste or type your text into the input field. The converter supports Unicode, accents, and special characters.",
      "Choose your desired case style from the available options: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, or kebab-case.",
      "Enable cleanup options if needed to normalize whitespace and remove extra spaces.",
      "Click the copy button to instantly copy the converted text to your clipboard, or use 'Download All' to export all conversion styles at once."
    ],

    features: [
      "Multiple case styles: UPPERCASE, lowercase, Title Case, Sentence case",
      "Developer-friendly formats: camelCase, PascalCase, snake_case, kebab-case",
      "Word and character counter with detailed statistics",
      "Unicode and accent preservation",
      "Whitespace normalization and cleanup",
      "One-click copy to clipboard",
      "Bulk export all conversion styles",
      "Real-time processing as you type",
      "100% client-side privacy - no data sent to servers",
      "Works offline for most conversions",
      "Mobile-friendly interface",
      "Dark mode support"
    ],

    useCases: [
      "Professional Development: Convert variable names between camelCase, PascalCase, and snake_case for consistent coding standards.",
      "Content Creation: Apply Title Case to headlines and sentence case to body text for clean, readable copy.",
      "SEO Optimization: Transform slugs to kebab-case for SEO-friendly URLs.",
      "Social Media: Format hashtags and captions with appropriate case styles for better engagement.",
      "Documentation: Standardize naming conventions across style guides and technical documents.",
      "Data Cleanup: Normalize inconsistent text formatting in spreadsheets and databases.",
      "Email Marketing: Ensure proper headline capitalization for professional campaigns.",
      "Academic Writing: Convert references and citations to required case formats.",
      "Code Refactoring: Batch convert naming styles when migrating between programming languages.",
      "Copywriting: Match brand voice with consistent case usage across all materials."
    ],

    aboutTool: "We process text locally for instant feedback. Unicode, accents, and symbols are preserved, while rules for each case style are applied deterministically so the same input always yields the same output. Conversions update as you type with live preview. Whitespace normalization and smart capitalization are available where useful. Developer‑friendly styles (camelCase, snake_case, kebab-case, PascalCase) and writer‑friendly styles (Title Case, Sentence case, UPPERCASE, lowercase) in one place.",

    proTip: "Use kebab-case for URLs and CSS classes, camelCase for JavaScript variables, PascalCase for React components and classes, snake_case for Python and database columns, and Title Case for headlines. This consistency improves code readability and SEO performance.",

    faqs: [
      {
        question: "What's the fastest way to convert text to Title Case for headlines?",
        answer: "Paste your text, toggle cleanup if needed, and select Title Case. We handle common small‑word rules and punctuation, producing headline‑ready output you can copy instantly."
      },
      {
        question: "How do I keep underscores or dashes when switching between snake_case and kebab‑case?",
        answer: "Convert to the destination style directly. We normalize whitespace first, then map spaces to underscores (snake_case) or dashes (kebab‑case) without altering existing separators unexpectedly."
      },
      {
        question: "Can I convert large blocks of Unicode text without breaking characters?",
        answer: "Yes. The converter preserves Unicode, accents, and emoji. Only letter case is modified; symbols and punctuation remain intact unless you choose cleanup options."
      },
      {
        question: "When should I use camelCase vs PascalCase in code?",
        answer: "camelCase is typical for variables and functions; PascalCase is used for classes, React components, and types. Convert between them to enforce consistent naming across files."
      },
      {
        question: "What's the best way to prepare SEO‑friendly slugs?",
        answer: "Use kebab‑case for clean URLs, then review stop words as needed. Combine with our cleanup to trim extra spaces and normalize quotes before converting."
      },
      {
        question: "Does the tool support sentence case for long paragraphs?",
        answer: "Yes. Sentence case capitalizes the first character and lowers the rest, ideal for body text. You can still fine‑tune capitalization for names or acronyms afterward."
      },
      {
        question: "How can I quickly copy all versions for documentation?",
        answer: "Use 'Download All' to export every conversion (UPPERCASE, Title Case, camelCase, etc.) into a single text file—useful for style guides and handoffs."
      },
      {
        question: "Will formatting like line breaks or indentation be changed?",
        answer: "By default, we minimize whitespace changes. Enable cleanup to normalize spaces and line breaks; disable it to preserve original formatting exactly."
      },
      {
        question: "Can I use the tool offline?",
        answer: "Yes for most conversions. The page processes text in your browser, so case changes, cleanup, and copy actions work without a network connection."
      },
      {
        question: "What's the difference between Title Case and Sentence case?",
        answer: "Title Case capitalizes principal words (great for headlines). Sentence case capitalizes only the first letter of the sentence—better for readable paragraphs."
      }
    ],

    relatedTools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Time Zone Converter", href: "/converters/timezone" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function TextCaseConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextCaseConverter />)} />
}