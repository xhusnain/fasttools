import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const TextCaseConverter = dynamic(
  () =>
    import("@/components/converters/text-case-converter").then(
      (mod) => mod.TextCaseConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Text Case Converter",
  description:
    "Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.",
  metaTitle: "Text Case Converter — Uppercase, Lowercase, camelCase, snake_case Free",
  metaDescription:
    "Free text case converter for UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and dot.case. Convert text for code variables, URL slugs, headlines, and file naming — instant results with one-click copy.",
  path: "/converters/text-case",

  header: {
    title: "Text Case Converter",
    description:
      "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, and swap case instantly. Includes character and word counters, one-click copy per format, and bulk download of all conversions.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text Case Converter", href: "/converters/text-case" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Text case converter for UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, CONSTANT_CASE, and swap case. Live conversion as you type with bulk export.",
    alternateName: [
      "Case Converter",
      "UPPERCASE Converter",
      "lowercase Converter",
      "Title Case Converter",
      "camelCase Converter",
      "PascalCase Converter",
      "snake_case Converter",
      "kebab-case Converter",
      "CONSTANT_CASE Converter",
      "Sentence Case Tool",
      "Toggle Case Tool",
      "Programmer Case Converter",
      "Variable Name Converter",
      "URL Slug Case Helper",
      "Code Style Case Converter",
    ],
    featureList: [
      "10+ case formats: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, CONSTANT_CASE, swap case",
      "Live conversion as you type — every format updates in real time",
      "One-click copy per format",
      "Character, word, line count tracked live",
      "Bulk download as .txt with all formats labeled",
      "Title Case follows AP / Chicago Manual rules (skips articles, prepositions correctly)",
      "Sentence case detects sentence boundaries (auto-caps after periods)",
      "Acronym preservation in camelCase / PascalCase (URLConverter, APIKey)",
      "Word-separator detection: handles spaces, dashes, underscores, dots intelligently",
      "100% client-side — text never sent to a server",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Text Case Converter is a free tool that transforms text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and other naming conventions.",
    quickAnswer:
      "Paste your text and click the desired case format. Supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Copy the result with one click.",
    keyTakeaways: [
      "Supports 8+ case formats including programming naming conventions",
      "camelCase and PascalCase for code variables and class names",
      "snake_case for Python and database columns, kebab-case for URLs",
      "Title Case capitalizes first letter of each word",
      "Instant conversion with one-click copy",
    ],
    overview:
      "This free text case converter instantly transforms any text into 10+ case formats used in writing, programming, and web development. Convert to UPPERCASE for headings and acronyms, lowercase for normalization, Title Case for article headlines and book titles, Sentence case for body text, camelCase for JavaScript and TypeScript variables, PascalCase for React component names and C# classes, snake_case for Python variables and database columns, kebab-case for URL slugs and CSS class names, dot.case for configuration keys, and swap case for inverting letter casing. The tool processes text in real time as you type, shows live character and word counts, provides one-click copy for each individual format, and offers bulk download of all converted outputs in a single text file.",

    howToSteps: [
      "Paste or type your text in the input field — the tool immediately shows all case conversions in real time.",
      "Find the case format you need: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, or swap case.",
      "Click the copy button next to any individual format to copy that result to your clipboard instantly.",
      "Use the 'Download All' button to export every case conversion as a single text file for batch use.",
      "Check the live character count and word count displayed alongside your input for content length validation.",
    ],

    features: [
      "10+ case formats: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, CONSTANT_CASE, and swap case",
      "Real-time conversion that updates instantly as you type — no submit button needed",
      "Live character count and word count for content length validation",
      "One-click copy button for each individual case format output",
      "Bulk download option to export all case conversions in a single text file",
      "100% browser-based processing — no data uploaded, no signup required",
    ],

    useCases: [
      "Article headlines — convert body text to Title Case for blog titles, news headlines, and email subject lines following AP or Chicago style",
      "URL slug creation — generate kebab-case slugs from page titles for SEO-friendly URLs (e.g., 'my-blog-post-title')",
      "JavaScript/TypeScript development — convert function and variable names to camelCase, React component names to PascalCase",
      "Python and database work — transform identifiers to snake_case for PEP 8 compliance and SQL column naming conventions",
      "CSS class naming — convert component descriptions to kebab-case for BEM methodology and CSS Modules",
      "Data normalization — standardize inconsistent casing in spreadsheet exports, CRM data, and user-submitted content",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Understanding Text Case Conventions in Programming and Writing
          </h3>
          <p className="text-muted-foreground">
            Text case conventions serve as naming standards across different programming languages, writing styles, and web technologies. In JavaScript and TypeScript, camelCase is the standard for variables and functions (e.g., getUserName), while PascalCase is used for classes and React components (e.g., UserProfile). Python follows PEP 8 with snake_case for variables and functions (e.g., get_user_name) and PascalCase for classes. CSS uses kebab-case for class names and custom properties. SQL databases typically use snake_case for table and column names. In writing, Title Case follows AP or Chicago style rules for headlines, while Sentence case capitalizes only the first word for a more casual tone.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-bold text-heading-accent">
            Case Style Reference
          </h3>
          <GTable>
            <thead className="bg-muted font-semibold text-foreground">
              <tr>
                <th className="p-3">Style</th>
                <th className="p-3">Example</th>
                <th className="p-3">Common Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">Title Case</td>
                <td className="p-3 font-mono">Fast Tools Platform</td>
                <td className="p-3">Headlines, book titles, AP style</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">camelCase</td>
                <td className="p-3 font-mono">fastToolsPlatform</td>
                <td className="p-3">JavaScript/TypeScript variables</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">PascalCase</td>
                <td className="p-3 font-mono">FastToolsPlatform</td>
                <td className="p-3">React components, C# classes</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">snake_case</td>
                <td className="p-3 font-mono">fast_tools_platform</td>
                <td className="p-3">Python, Ruby, SQL columns</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">kebab-case</td>
                <td className="p-3 font-mono">fast-tools-platform</td>
                <td className="p-3">URL slugs, CSS classes, CLI flags</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">CONSTANT_CASE</td>
                <td className="p-3 font-mono">FAST_TOOLS_PLATFORM</td>
                <td className="p-3">Environment variables, constants</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">dot.case</td>
                <td className="p-3 font-mono">fast.tools.platform</td>
                <td className="p-3">Configuration keys, Java packages</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    proTip:
      "When converting multi-word phrases to camelCase or PascalCase, the tool automatically handles spaces, hyphens, and underscores as word boundaries. For best results with code identifiers, start with plain English words separated by spaces and let the converter apply the correct casing rules.",

    faqs: [
      {
        question: "What text case formats does this converter support?",
        answer:
          "This converter supports 10+ case formats: UPPERCASE (all caps), lowercase (all small), Title Case (capitalize first letter of each word), Sentence case (capitalize first word only), camelCase (JavaScript/TypeScript variables), PascalCase (React components, C# classes), snake_case (Python, SQL), kebab-case (URL slugs, CSS), dot.case (config keys), CONSTANT_CASE (environment variables), and swap case (invert existing casing).",
      },
      {
        question: "What is the difference between camelCase and PascalCase?",
        answer:
          "camelCase starts with a lowercase letter and capitalizes each subsequent word (e.g., getUserName). PascalCase capitalizes the first letter of every word including the first (e.g., GetUserName). In JavaScript/TypeScript, camelCase is used for variables and functions, while PascalCase is used for classes and React components. Both are lowerCamelCase and UpperCamelCase respectively in formal naming.",
      },
      {
        question: "When should I use snake_case vs kebab-case?",
        answer:
          "snake_case (words separated by underscores) is the standard in Python (PEP 8), Ruby, Rust, and SQL database naming. kebab-case (words separated by hyphens) is used for URL slugs, CSS class names, HTML attributes, CLI flags, and npm package names. kebab-case cannot be used for variable names in most programming languages because the hyphen is interpreted as a minus operator.",
      },
      {
        question: "Does this text case converter include a character counter?",
        answer:
          "Yes. The input section displays live character count and word count that update in real time as you type. This is useful for checking content length limits for meta titles (60 characters), meta descriptions (155 characters), tweets (280 characters), and other platforms with character restrictions.",
      },
      {
        question: "Can I download all case conversion results at once?",
        answer:
          "Yes. Click the 'Download All' button to export every case conversion (uppercase, lowercase, title case, camelCase, snake_case, kebab-case, and all others) as a single text file. This is useful when you need multiple formats of the same text for different contexts in a project.",
      },
      {
        question: "Is my text data private and secure in this converter?",
        answer:
          "Yes. All text case conversion happens entirely in your browser using client-side JavaScript. No text is sent to any server, stored, or logged. This makes it safe for converting sensitive content like internal project names, API keys, and proprietary terminology.",
      },
      {
        question: "Is this text case converter free to use?",
        answer:
          "Yes. This text case converter is completely free with no signup, no account, and no usage limits. It works instantly in your browser for unlimited text case conversions across all supported formats.",
      },
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TextCaseConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextCaseConverter />)} />
}
