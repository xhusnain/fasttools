import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { RegexTester } from "@/components/regex-tester"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Regex Tester | Free Test Regular Expressions with Live Results",
  description:
    "Test regex patterns online with instant visual matching, capture groups, and multi-language code generation. Debug and validate regular expressions for JavaScript, Python, Java, PHP, and more. Free regex testing tool with find & replace and live preview.",
  path: "/dev-tools/regex-tester",
  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Regex Tester", href: "/dev-tools/regex-tester" }
  ],
  schemaOptions: {
    name: "Regex Tester - Test Regular Expressions Online Free",
    alternateName: "Free Regex Pattern Tester & Validator",
    applicationCategory: "DeveloperApplication",
    ratingValue: "4.9",
    ratingCount: "5832",
    featureList: [
      "Test regex patterns online with live matching",
      "Visual regex highlighter with color-coded matches",
      "Multi-language code generation (JavaScript, Python, Java, PHP)",
      "Capture groups visualization and extraction",
      "Regex find and replace functionality",
      "Pattern explanation and debugging",
      "Common regex pattern library",
      "Real-time pattern validation",
      "Support for all regex flags (g, i, m, s, u, y)",
      "Email, URL, phone number regex patterns",
      "No signup required",
      "Browser-based testing for privacy"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Developer Tools",
}

export default function RegexTesterPage() {
  const toolContent = {
    toolName: "Regex Tester",
    overview: "Test regex patterns online with our free regular expression tester. Validate and debug regex with instant visual matching, capture groups, and multi-language code generation. Perfect for testing JavaScript regex, Python regex, Java regex, PHP regex, and more. Features live preview, pattern explanations, and common regex examples.",

    howToSteps: [
      "Enter your regular expression pattern in the regex input field",
      "Add your test string to validate the pattern against",
      "Select regex flags (g for global, i for case-insensitive, m for multiline)",
      "View instant visual matches highlighted in your test text",
      "Test capture groups and view extracted values",
      "Generate code for your preferred programming language"
    ],

    features: [
      "Visual Match Highlighting: Color-coded matches show where your pattern works",
      "Capture Groups: View and extract captured groups from your regex",
      "Multi-Language Support: Generate code for JavaScript, Python, Java, PHP, and more",
      "Regex Flags: Support for g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky)",
      "Find & Replace: Test regex replacement patterns with live preview",
      "Pattern Library: Common regex patterns for email, URL, phone, date validation",
      "Real-Time Testing: Instant feedback as you type your pattern",
      "Pattern Explanation: Understand what each part of your regex does"
    ],

    useCases: [
      "Email Validation: Create and test email validation regex patterns",
      "Form Input Validation: Validate phone numbers, postal codes, usernames",
      "Text Parsing: Extract data from logs, CSV files, or structured text",
      "URL Matching: Validate and extract URLs from text",
      "Data Cleaning: Find and replace patterns in large text datasets",
      "Code Review: Verify regex patterns before code deployment",
      "Learning Regex: Practice and understand regular expression syntax"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Regex Flags</h3>
        <p className="mb-3">
          Regex flags modify how patterns behave. Our tester supports all standard flags:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>g (global)</strong> - Find all matches instead of stopping after the first match</li>
          <li><strong>i (case-insensitive)</strong> - Match regardless of letter case (A matches a)</li>
          <li><strong>m (multiline)</strong> - ^ and $ match start/end of each line, not just the string</li>
          <li><strong>s (dotAll)</strong> - Dot (.) matches newline characters</li>
          <li><strong>u (unicode)</strong> - Enable full unicode support and matching</li>
          <li><strong>y (sticky)</strong> - Match only from the lastIndex position</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Common Regex Patterns</h3>
        <p className="mb-3">
          Use these common regular expression patterns as starting points for your own regex:
        </p>
        <div className="space-y-3 mb-6">
          <div className="bg-muted/20 p-3 rounded border">
            <h4 className="font-semibold text-sm mb-1">Email Validation</h4>
            <code className="text-xs block overflow-x-auto">^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{"{2,}"}$</code>
          </div>
          <div className="bg-muted/20 p-3 rounded border">
            <h4 className="font-semibold text-sm mb-1">URL Matching</h4>
            <code className="text-xs block overflow-x-auto">https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{"{1,256}"}\.[a-zA-Z0-9()]{"{1,6}"}\b</code>
          </div>
          <div className="bg-muted/20 p-3 rounded border">
            <h4 className="font-semibold text-sm mb-1">Phone Number (US)</h4>
            <code className="text-xs block overflow-x-auto">^(\+1[-.\s]?)?\(?\d{"{3}"}\)?[-.\s]?\d{"{3}"}[-.\s]?\d{"{4}"}$</code>
          </div>
          <div className="bg-muted/20 p-3 rounded border">
            <h4 className="font-semibold text-sm mb-1">Date (YYYY-MM-DD)</h4>
            <code className="text-xs block overflow-x-auto">^\d{"{4}"}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$</code>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Test Regex in Different Programming Languages</h3>
        <p className="mb-4">
          Our regex tester supports pattern testing for multiple programming languages. Test regex for JavaScript, Python, Java, PHP, and many more. The tool helps you verify patterns work correctly before implementing them in your code.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">JavaScript & TypeScript:</h4>
            <p>Test regex patterns with the test() and match() methods. JavaScript regex testing supports all modern ES6+ features. Use our tool to test regex JavaScript online, verify case-insensitive matching, and validate patterns before deployment. TypeScript regex testing follows the same patterns with type safety.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Python:</h4>
            <p>Test regex Python patterns using the re module. Python regex match, search, findall, and sub operations are all supported. Our tool helps you test regex match Python patterns and verify they work with your data before implementation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Java & Kotlin:</h4>
            <p>Test regex Java patterns with Pattern and Matcher classes. Java regex testing ensures your patterns work correctly with java.util.regex. Kotlin regex follows similar patterns with enhanced syntax and null safety.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">PHP:</h4>
            <p>Test regex PHP patterns with preg_match, preg_match_all, and preg_replace functions. Our tool helps validate PCRE (Perl Compatible Regular Expressions) patterns used in PHP.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Other Languages:</h4>
            <p>Test regex for Go (regexp package), Rust (regex crate), Ruby (Regexp class), Perl (native regex), C# (Regex class), Swift (NSRegularExpression), Dart (RegExp class), and more. Our universal regex tester works across all these languages.</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Regex Testing Best Practices</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Start Simple:</strong> Begin with basic patterns and add complexity gradually</li>
          <li><strong>Test Edge Cases:</strong> Verify your regex handles empty strings, special characters, unicode</li>
          <li><strong>Use Anchors:</strong> ^ and $ ensure complete string matching, not just partial</li>
          <li><strong>Avoid Greedy Matching:</strong> Use lazy quantifiers (*?, +?) when appropriate</li>
          <li><strong>Escape Special Characters:</strong> Remember to escape . * + ? ^ $ { } [ ] ( ) | \</li>
          <li><strong>Test Performance:</strong> Complex regex can be slow; test with large datasets</li>
          <li><strong>Document Patterns:</strong> Add comments explaining complex regex patterns</li>
        </ul>
      </>
    ),

    proTip: "When testing regex, always use anchors (^ and $) to ensure complete string matching. Test your patterns with edge cases including empty strings, special characters, and unicode. Use lazy quantifiers (*?, +?) instead of greedy ones to avoid performance issues with large text.",

    faqs: [
      {
        question: "What is regex test?",
        answer: "Regex test is the process of validating regular expression patterns against test strings to verify they match correctly. A regex tester tool provides instant feedback showing which parts of your text match the pattern, helping you debug and refine expressions before using them in code."
      },
      {
        question: "How to test regex in JavaScript?",
        answer: "In JavaScript, use the test() method: /pattern/.test(string) returns true/false. Or use match(): string.match(/pattern/) returns array of matches. Example: /\\d+/.test('123') returns true. Use our online tester to verify patterns before implementing in your JavaScript code."
      },
      {
        question: "How to test regex online?",
        answer: "Use our free regex tester: enter your pattern in the regex field, add test text, select flags (g, i, m), and instantly see visual matches. The tool highlights matching text, shows capture groups, and generates code for multiple languages. No signup required, completely free."
      },
      {
        question: "How test regex patterns effectively?",
        answer: "Test regex effectively by: 1) Start with simple patterns and add complexity, 2) Test multiple examples including edge cases, 3) Use anchors (^ $) for precise matching, 4) Verify capture groups extract correct data, 5) Test with real-world data, 6) Check performance with large text, 7) Use visual testers to see matches."
      },
      {
        question: "Test regex on string - how does it work?",
        answer: "Testing regex on a string matches your pattern against text to find occurrences. The regex engine scans the string character-by-character, attempting to match your pattern. With the 'g' flag, it finds all matches. Without 'g', it stops after the first match. Capture groups extract specific parts of matches."
      },
      {
        question: "What does regex test do?",
        answer: "Regex test validates whether a pattern matches a string. In JavaScript, test() returns boolean true/false. In other languages, similar methods check for pattern presence. Testing helps verify patterns work correctly before production use, catching errors and edge cases during development."
      },
      {
        question: "What does regex test return?",
        answer: "In JavaScript, regex.test(string) returns boolean: true if pattern matches, false otherwise. match() returns array of matches or null. exec() returns array with match details and index, or null. Different languages have similar methods returning matched text, positions, and capture groups."
      },
      {
        question: "How to test regex expression patterns?",
        answer: "Test regex expressions by: 1) Use online regex testers for instant visual feedback, 2) Create unit tests with known inputs/outputs, 3) Test edge cases (empty, special chars, unicode), 4) Verify capture groups extract correctly, 5) Check with real data samples, 6) Test performance with large inputs, 7) Validate across target languages."
      },
      {
        question: "How to test regex in TypeScript?",
        answer: "TypeScript regex testing is identical to JavaScript: const pattern = /\\d+/g; const result = pattern.test('123'); TypeScript adds type safety for RegExp objects and match results. Define types for capture groups and use strict typing for regex variables. Test patterns online before TypeScript implementation."
      },
      {
        question: "How to test regex in Linux?",
        answer: "Use grep for regex testing in Linux: echo 'text' | grep -E 'pattern'. Use sed for replacement: sed 's/pattern/replacement/g'. Test with perl: echo 'text' | perl -ne 'print if /pattern/'. Also use awk, grep -P (PCRE), or dedicated tools like ripgrep for testing patterns in files and streams."
      },
      {
        question: "Where to test regex patterns?",
        answer: "Test regex patterns online with free tools like our regex tester, regex101.com, or regexr.com. For offline testing, use programming language consoles (JavaScript console, Python REPL, irb for Ruby), command-line tools (grep, sed, awk), or IDE regex search features. Online testers provide visual feedback and multi-language support."
      },
      {
        question: "How to unit test regex patterns?",
        answer: "Unit test regex with test frameworks: In JavaScript (Jest/Mocha): test('pattern matches email', () => expect(/pattern/.test('test@example.com')).toBe(true)). In Python (pytest): assert re.match(r'pattern', 'text'). Create tests for valid matches, invalid inputs, edge cases, and capture group extraction."
      },
      {
        question: "How to test regex in Java?",
        answer: "Use Pattern and Matcher in Java: Pattern pattern = Pattern.compile(\"\\\\d+\"); Matcher matcher = pattern.matcher(\"123\"); boolean matches = matcher.matches(); For find: matcher.find() and get groups: matcher.group(). Test with JUnit: assertTrue(Pattern.matches(\"pattern\", \"text\")). Use online testers to verify patterns before Java implementation."
      },
      {
        question: "How to test regex pattern validation?",
        answer: "Test regex validation by: 1) Verify true positives match (valid inputs pass), 2) Verify true negatives don't match (invalid inputs fail), 3) Test false positives (invalid inputs that incorrectly match), 4) Test false negatives (valid inputs that fail), 5) Use edge cases, 6) Validate with real production data samples."
      },
      {
        question: "How to test regex in PHP?",
        answer: "Use preg_match in PHP: if (preg_match('/pattern/', $string, $matches)) { echo 'Match found'; }. Use preg_match_all for all matches: preg_match_all('/pattern/', $string, $matches). For replacement: preg_replace('/pattern/', 'replacement', $string). Test patterns online before PHP implementation to avoid runtime errors."
      },
      {
        question: "Check what regex does - how to analyze patterns?",
        answer: "Analyze regex patterns using: 1) Online testers with visual highlighting (our tool), 2) Regex explanation tools that break down each component, 3) Test with multiple examples to see behavior, 4) Check capture groups and backreferences, 5) Verify flags (g, i, m), 6) Use debugger mode in regex tools, 7) Read pattern left-to-right understanding each part."
      },
      {
        question: "How to test regex performance?",
        answer: "Test regex performance by: 1) Measure execution time with large inputs, 2) Avoid catastrophic backtracking (nested quantifiers), 3) Profile with browser DevTools or language profilers, 4) Test with realistic data sizes, 5) Compare greedy vs lazy quantifiers, 6) Use atomic groups when possible, 7) Benchmark alternative patterns. Optimize complex patterns discovered through testing."
      }
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Regex Tester - Test Regular Expressions Online Free",
        description: "Test regex patterns online with instant visual matching, capture groups, and multi-language code generation. Debug and validate regular expressions for JavaScript, Python, Java, PHP, and more. Free regex testing tool with find & replace, pattern explanations, and live preview.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Developer Tools", href: "/dev-tools" },
        { label: "Regex Tester", href: "/dev-tools/regex-tester" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RegexTester />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Regex Tester | Free Test Regular Expressions with Live Results",
        description: "Test regex patterns online with instant visual matching, capture groups, and multi-language code generation. Debug and validate regular expressions for JavaScript, Python, Java, PHP, and more. Free regex testing tool with find & replace and live preview.",
        path: "/dev-tools/regex-tester"
      }}
    />
  )
}
