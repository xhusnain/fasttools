import { Metadata } from 'next';
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const TextCaseConverter = dynamic(() => import("@/components/converters/text-case-converter").then(mod => mod.TextCaseConverter), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { CheckCircle, Code, FileText, Hash, Lightbulb, Search, Zap, Target, Globe, Brain, TrendingUp, Shield } from "lucide-react"

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

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Understanding Text Case Conversion: A Complete Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Text case conversion is fundamental to modern digital communication, programming, and content creation. Our <strong>text case converter</strong> and <strong>case converter online</strong> provide instant transformation between uppercase, lowercase, title case, sentence case, and programming-specific formats like camelCase, snake_case, kebab-case, and PascalCase. Whether you need an <strong>uppercase to lowercase converter</strong>, <strong>lowercase to uppercase converter</strong>, <strong>title case converter</strong>, or <strong>sentence case converter</strong>, this comprehensive tool delivers accurate conversions instantly.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            As a comprehensive <strong>word counter</strong> and <strong>character counter</strong>, our tool provides detailed text analysis including <strong>word count tool</strong>, <strong>character count tool</strong>, <strong>text counter</strong>, and <strong>word and character counter</strong> functionality. We process text locally for instant feedback, ensuring your data remains private and secure. Unicode, accents, and symbols are preserved, while rules for each case style are applied deterministically so the same input always yields the same output.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Case Styles Explained: When to Use Each Format
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Different case styles serve different purposes in writing, programming, and digital communication. Understanding when to use each format is crucial for professional content creation and code development.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Case Style</th>
                  <th className="p-3 text-left">Example</th>
                  <th className="p-3 text-left">Best Use Case</th>
                  <th className="p-3 text-left">Common Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">UPPERCASE</td>
                  <td className="p-3 font-mono">HELLO WORLD</td>
                  <td className="p-3">Emphasis, Headers, Acronyms</td>
                  <td className="p-3">Legal documents, warnings, acronyms (HTML, CSS, API)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">lowercase</td>
                  <td className="p-3 font-mono">hello world</td>
                  <td className="p-3">Body text, URLs, File names</td>
                  <td className="p-3">Email addresses, domain names, file paths</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Title Case</td>
                  <td className="p-3 font-mono">Hello World</td>
                  <td className="p-3">Headlines, Titles, Branding</td>
                  <td className="p-3">Article titles, book titles, product names</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Sentence case</td>
                  <td className="p-3 font-mono">Hello world</td>
                  <td className="p-3">Paragraphs, Descriptions</td>
                  <td className="p-3">Body text, descriptions, comments</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">camelCase</td>
                  <td className="p-3 font-mono">helloWorld</td>
                  <td className="p-3">JavaScript variables, functions</td>
                  <td className="p-3">JavaScript, Java, C# variables and methods</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">PascalCase</td>
                  <td className="p-3 font-mono">HelloWorld</td>
                  <td className="p-3">Classes, Components, Types</td>
                  <td className="p-3">React components, C# classes, TypeScript types</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">snake_case</td>
                  <td className="p-3 font-mono">hello_world</td>
                  <td className="p-3">Python, Database columns</td>
                  <td className="p-3">Python variables, SQL column names, constants</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">kebab-case</td>
                  <td className="p-3 font-mono">hello-world</td>
                  <td className="p-3">URLs, CSS classes, IDs</td>
                  <td className="p-3">URL slugs, CSS class names, HTML IDs</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Programming Case Conventions by Language
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Each programming language has established conventions for naming variables, functions, classes, and constants. Following these conventions improves code readability and maintainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-500" />
                JavaScript/TypeScript
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Variables & functions: <code className="bg-muted px-1 rounded">camelCase</code></li>
                <li>Classes & Components: <code className="bg-muted px-1 rounded">PascalCase</code></li>
                <li>Constants: <code className="bg-muted px-1 rounded">UPPER_SNAKE_CASE</code></li>
                <li>CSS classes: <code className="bg-muted px-1 rounded">kebab-case</code></li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-green-500" />
                Python
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Variables & functions: <code className="bg-muted px-1 rounded">snake_case</code></li>
                <li>Classes: <code className="bg-muted px-1 rounded">PascalCase</code></li>
                <li>Constants: <code className="bg-muted px-1 rounded">UPPER_SNAKE_CASE</code></li>
                <li>Private: <code className="bg-muted px-1 rounded">_leading_underscore</code></li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-purple-500" />
                Java/C#
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Variables & methods: <code className="bg-muted px-1 rounded">camelCase</code></li>
                <li>Classes & Interfaces: <code className="bg-muted px-1 rounded">PascalCase</code></li>
                <li>Constants: <code className="bg-muted px-1 rounded">UPPER_SNAKE_CASE</code></li>
                <li>Packages: <code className="bg-muted px-1 rounded">lowercase</code></li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-orange-500" />
                HTML/CSS
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Class names: <code className="bg-muted px-1 rounded">kebab-case</code></li>
                <li>IDs: <code className="bg-muted px-1 rounded">kebab-case</code></li>
                <li>Attributes: <code className="bg-muted px-1 rounded">kebab-case</code></li>
                <li>Custom elements: <code className="bg-muted px-1 rounded">kebab-case</code></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Real-World Examples and Use Cases
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 1: Converting API Response to Database Format</h4>
              <p className="text-sm text-muted-foreground mb-2">API returns: <code className="bg-muted px-1 rounded">userFirstName</code></p>
              <p className="text-sm text-muted-foreground">Database needs: <code className="bg-muted px-1 rounded">user_first_name</code></p>
              <p className="text-sm text-muted-foreground mt-2">Solution: Convert camelCase → snake_case for Python/SQL compatibility</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 2: Creating SEO-Friendly URLs</h4>
              <p className="text-sm text-muted-foreground mb-2">Article title: <code className="bg-muted px-1 rounded">"How to Build a React Component"</code></p>
              <p className="text-sm text-muted-foreground">URL slug: <code className="bg-muted px-1 rounded">how-to-build-a-react-component</code></p>
              <p className="text-sm text-muted-foreground mt-2">Solution: Convert Title Case → kebab-case for clean, readable URLs</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 3: Standardizing Code Migration</h4>
              <p className="text-sm text-muted-foreground mb-2">Python code: <code className="bg-muted px-1 rounded">def calculate_total():</code></p>
              <p className="text-sm text-muted-foreground">JavaScript needs: <code className="bg-muted px-1 rounded">function calculateTotal()</code></p>
              <p className="text-sm text-muted-foreground mt-2">Solution: Convert snake_case → camelCase when migrating Python to JavaScript</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            SEO and Content Optimization Best Practices
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Proper case usage significantly impacts SEO performance, readability, and user experience. Here are proven strategies for optimizing your content:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Search className="h-4 w-4 text-green-500" />
                URL Optimization
              </h4>
              <p className="text-sm text-muted-foreground">
                Use kebab-case for URLs: <code className="bg-muted px-1 rounded">/blog/how-to-write-seo-content</code>. This improves readability, shareability, and search engine understanding. Avoid underscores or mixed case in URLs.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-500" />
                Title Optimization
              </h4>
              <p className="text-sm text-muted-foreground">
                Use Title Case for headlines and page titles. This improves click-through rates and makes content more scannable. Example: "10 Best Practices for Text Formatting" performs better than "10 best practices for text formatting".
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Hash className="h-4 w-4 text-purple-500" />
                Hashtag Formatting
              </h4>
              <p className="text-sm text-muted-foreground">
                Use PascalCase for multi-word hashtags: <code className="bg-muted px-1 rounded">#WebDevelopment</code> instead of <code className="bg-muted px-1 rounded">#webdevelopment</code>. This improves readability and accessibility.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-orange-500" />
                Meta Tags
              </h4>
              <p className="text-sm text-muted-foreground">
                Use Title Case for meta titles and Sentence case for descriptions. This creates professional, consistent branding across search results and social media previews.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Advanced Conversion Techniques
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Beyond basic case conversion, our tool handles complex scenarios including Unicode characters, special symbols, and edge cases that other converters miss.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Unicode and International Characters</h4>
              <p className="text-sm text-muted-foreground">
                Our converter preserves accented characters, emoji, and international symbols. For example, "Café" converts to "CAFÉ" in uppercase while maintaining the accent. This is essential for multilingual content and international applications.
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Smart Capitalization Rules</h4>
              <p className="text-sm text-muted-foreground">
                Title Case follows intelligent rules: small words (a, an, the, of, in, on) remain lowercase unless they're the first word. This creates natural, readable titles that match publishing standards.
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Whitespace Normalization</h4>
              <p className="text-sm text-muted-foreground">
                Enable cleanup to normalize multiple spaces, tabs, and line breaks. This is especially useful when converting text from PDFs, web pages, or formatted documents where whitespace can be inconsistent.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy and Security Features
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All text processing happens entirely in your browser. No data is sent to servers, ensuring complete privacy for sensitive content like passwords, API keys, or confidential documents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">100% Client-Side</h4>
              <p className="text-xs text-muted-foreground">All processing happens in your browser</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">No Data Storage</h4>
              <p className="text-xs text-muted-foreground">Nothing is saved or logged</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Offline Capable</h4>
              <p className="text-xs text-muted-foreground">Works without internet connection</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Pro Tips for Maximum Efficiency
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Batch Processing</strong>
                <p className="text-sm text-muted-foreground">Use "Download All" to export every conversion style at once. Perfect for creating style guides or documentation that needs multiple formats.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Keyboard Shortcuts</strong>
                <p className="text-sm text-muted-foreground">Use Ctrl+C (Cmd+C on Mac) to quickly copy converted text. The tool remembers your last conversion for quick re-access.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Preserve Formatting</strong>
                <p className="text-sm text-muted-foreground">Disable cleanup when you need to preserve original line breaks and spacing. Enable it when normalizing inconsistent formatting.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Code Refactoring</strong>
                <p className="text-sm text-muted-foreground">When migrating code between languages, convert naming conventions in bulk. This ensures consistency and reduces manual errors.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

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
      },
      {
        question: "How do I convert text for different programming languages?",
        answer: "Each language has conventions: JavaScript uses camelCase for variables, Python uses snake_case, and Java uses PascalCase for classes. Our tool converts between all formats instantly, making code migration and refactoring effortless."
      },
      {
        question: "Can I convert multiple text blocks at once?",
        answer: "Yes! Paste multiple paragraphs or lines, and the converter processes all text simultaneously. Use the 'Download All' feature to export every conversion style for bulk processing."
      },
      {
        question: "What happens to numbers and special characters during conversion?",
        answer: "Numbers and special characters remain unchanged. Only letter case is modified. For example, 'Hello123' becomes 'hello123' in lowercase, preserving the numbers exactly as they appear."
      },
      {
        question: "Is there a character limit for text conversion?",
        answer: "Our tool handles large text blocks efficiently. While there's no strict limit, extremely large documents (100,000+ characters) may process slightly slower. For best performance, process documents in sections if needed."
      },
      {
        question: "How accurate is the Title Case conversion?",
        answer: "Our Title Case follows standard publishing rules: capitalizes principal words, keeps small words (a, an, the, of, in, on) lowercase unless they start the title. This matches industry standards used by major publishers."
      },
      {
        question: "Can I convert text for CSS class names?",
        answer: "Absolutely! Use kebab-case for CSS classes. Convert any text to kebab-case format, which is the standard for CSS class names, HTML IDs, and URL slugs. Example: 'My Component' becomes 'my-component'."
      },
      {
        question: "What's the difference between snake_case and kebab-case?",
        answer: "snake_case uses underscores (hello_world) and is common in Python and databases. kebab-case uses hyphens (hello-world) and is standard for URLs and CSS. Both separate words clearly, but hyphens are more readable in URLs."
      },
      {
        question: "How do I convert text for React component names?",
        answer: "React components use PascalCase. Convert your text to PascalCase format, and it's ready to use as a component name. Example: 'user profile' becomes 'UserProfile', perfect for React components."
      },
      {
        question: "Can I preserve acronyms during conversion?",
        answer: "The converter handles acronyms intelligently. Short acronyms like 'HTML', 'CSS', 'API' are typically preserved in their standard form. For custom acronyms, you may need minor manual adjustments after conversion."
      },
      {
        question: "What's the best case style for email subject lines?",
        answer: "Title Case works best for email subjects as it's professional and scannable. It improves open rates compared to all caps or sentence case. Our converter makes this conversion instant."
      },
      {
        question: "How do I convert database column names?",
        answer: "Most databases use snake_case for column names. Convert your text to snake_case format for SQL compatibility. Example: 'userFirstName' becomes 'user_first_name', perfect for database columns."
      },
      {
        question: "Can I convert text for JSON keys?",
        answer: "JSON keys typically use camelCase or snake_case depending on your API convention. Convert your text to the desired format. camelCase is more common in JavaScript-based APIs, while snake_case is standard in Python APIs."
      },
      {
        question: "What case style should I use for file names?",
        answer: "File names typically use kebab-case or snake_case for cross-platform compatibility. Avoid spaces and special characters. kebab-case (my-file-name.txt) is more readable, while snake_case (my_file_name.txt) is also widely used."
      },
      {
        question: "How do I convert text for hashtags?",
        answer: "Multi-word hashtags should use PascalCase for readability: #WebDevelopment instead of #webdevelopment. Single words can be lowercase. Our converter helps you format hashtags correctly for maximum engagement."
      },
      {
        question: "Can I convert text while preserving line breaks?",
        answer: "Yes! By default, line breaks are preserved. If you enable cleanup, it normalizes whitespace. Disable cleanup to maintain your original formatting exactly, including line breaks and indentation."
      },
      {
        question: "What's the difference between uppercase and Title Case?",
        answer: "UPPERCASE converts all letters to capitals (HELLO WORLD), while Title Case capitalizes principal words (Hello World). UPPERCASE is for emphasis or acronyms; Title Case is for professional headlines and titles."
      },
      {
        question: "How do I convert text for API endpoints?",
        answer: "REST API endpoints typically use kebab-case or camelCase. kebab-case (/user-profile) is more readable in URLs, while camelCase (userProfile) is common in JavaScript APIs. Convert your text to match your API convention."
      },
      {
        question: "Can I convert text for environment variables?",
        answer: "Environment variables typically use UPPER_SNAKE_CASE (MY_ENV_VAR). Convert your text to uppercase, then manually add underscores, or use our snake_case converter and convert to uppercase separately."
      },
      {
        question: "What case style is best for social media posts?",
        answer: "Sentence case works best for social media body text as it's natural and readable. Use Title Case for headlines or important announcements. Avoid ALL CAPS as it appears aggressive and is harder to read."
      },
      {
        question: "How do I ensure consistent naming across my project?",
        answer: "Use our converter to standardize all text to your project's convention. Convert all variable names, file names, and identifiers to match your style guide. The 'Download All' feature helps you compare formats side-by-side."
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

export const metadata: Metadata = toolConfig.metadata

export default function TextCaseConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextCaseConverter />)} />
}