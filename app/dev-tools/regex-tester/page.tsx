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
  metaTitle: "Regex Tester — Live JavaScript / Ruby / Python Regex Check Online",
  metaDescription:
    "Free regex tester with real-time match highlighting, capture group inspection, all JavaScript flags (g i m s u y), named groups, and replacement preview. Test JS / Ruby / Python regex syntax. 100% client-side, no signup.",
  path: "/dev-tools/regex-tester",

  header: {
    title: "Regex Check Online — Regular Expression Tester & Debugger",
    description:
      "Test and debug regular expressions with real-time match highlighting, capture group inspection, and full flag support. Paste a pattern and a test string to see matches instantly.",
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
      "Regular expression tester with real-time match highlighting, capture group inspection, named groups, all flags (g/i/m/s/u/y), and replacement preview with $1/$2 backreferences. JavaScript engine; cross-compatible with Ruby/Python/PCRE for standard patterns. 100% client-side.",
    alternateName: [
      "Regular Expression Tester",
      "Regex Check Online",
      "Regex Debugger",
      "Live Regex Tester",
      "Pattern Matcher",
    ],
    featureList: [
      "Real-time match highlighting as you type the pattern",
      "Full JavaScript regex flag support: g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode), y (sticky)",
      "Numbered capture group inspection — see what each `()` captured",
      "Named capture groups via `(?<name>...)` — modern JS / Ruby / Python syntax",
      "Match index positions and length shown for each match",
      "Replacement pattern testing — preview `replace()` result with `$1`, `$2`, `$&` backreferences",
      "Lookahead `(?=...)` and lookbehind `(?<=...)` (ES2018+) supported",
      "Common pattern presets: email, URL, phone, IP, date, credit card, UUID",
      "Inline error messages for invalid patterns (e.g., unmatched parens, bad escapes)",
      "Cross-flavor compatibility notes: warns when using JS-specific features",
      "100% client-side — patterns and test strings never sent to a server",
      "Free, no signup, no rate limit, no ads",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A regex tester is a free utility that lets you write, test, and debug regular expressions against sample text with real-time match highlighting.",
    quickAnswer:
      "Enter a pattern and a test string to see matches highlighted instantly. The tool uses JavaScript syntax with all flags (g, i, m, s, u, y), and most standard patterns behave the same in Ruby and Python. View capture groups, match indices, and replacement results.",
    keyTakeaways: [
      "Real-time match highlighting as you type the pattern",
      "Supports JavaScript regex flags: global (g), case-insensitive (i), multiline (m)",
      "Shows numbered capture groups and named groups",
      "Test replacement patterns with $1, $2 backreferences",
      "Common patterns: email, URL, phone, IP address, date formats",
    ],
    overview:
      "Enter a pattern and a test string to see matches highlighted in real time as you type. The tester runs on JavaScript's RegExp engine with every flag — global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u) — and the standard building blocks (character classes, quantifiers, anchors, groups) behave identically in Ruby, Python, and PCRE. Inspect numbered and named capture groups, view match indices, and preview replacements with backreferences ($1, $2). Useful for building form validation rules, log parsing patterns, text extraction logic, and search-and-replace operations before adding them to your code.",

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

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Are Regular Expressions?</h3>
          <p>
            Regular expressions (regex) are a domain-specific language for pattern matching in text. Invented in the 1950s by mathematician Stephen Cole Kleene, they were first implemented in Unix tools like <code>grep</code> in the 1970s. Today, regex is built into every major programming language (JavaScript, Python, Java, Go, Rust, PHP, Ruby) and every text editor (VS Code, Sublime, vim, Emacs). A regex pattern describes <strong>what text looks like</strong> — not the exact text — letting you match, extract, validate, or replace based on structure.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Essential Regex Syntax Reference</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Pattern</th>
                <th className="text-left py-2 px-2 text-foreground">Matches</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>.</code></td>
                <td className="py-2 px-2">Any single character (except newline)</td>
                <td className="py-2 px-2"><code>c.t</code> matches cat, cut, c8t</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>\d</code></td>
                <td className="py-2 px-2">Any digit 0-9</td>
                <td className="py-2 px-2"><code>\d\d</code> matches 42, 99</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>\w</code></td>
                <td className="py-2 px-2">Word char (a-z, A-Z, 0-9, _)</td>
                <td className="py-2 px-2"><code>\w+</code> matches hello_world</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>\s</code></td>
                <td className="py-2 px-2">Whitespace (space, tab, newline)</td>
                <td className="py-2 px-2"><code>a\sb</code> matches &quot;a b&quot;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>[abc]</code></td>
                <td className="py-2 px-2">Character class (a OR b OR c)</td>
                <td className="py-2 px-2"><code>[aeiou]</code> matches vowels</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>[^abc]</code></td>
                <td className="py-2 px-2">Negated class (NOT a, b, or c)</td>
                <td className="py-2 px-2"><code>[^0-9]</code> = non-digit</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>*</code></td>
                <td className="py-2 px-2">0 or more (greedy)</td>
                <td className="py-2 px-2"><code>a*</code> matches &quot;&quot;, &quot;a&quot;, &quot;aaa&quot;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>+</code></td>
                <td className="py-2 px-2">1 or more (greedy)</td>
                <td className="py-2 px-2"><code>a+</code> matches &quot;a&quot;, &quot;aaa&quot;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>?</code></td>
                <td className="py-2 px-2">0 or 1 (optional)</td>
                <td className="py-2 px-2"><code>colou?r</code> matches color/colour</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&#123;n&#125;</code></td>
                <td className="py-2 px-2">Exactly n</td>
                <td className="py-2 px-2"><code>\d&#123;3&#125;</code> matches 3 digits</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&#123;n,m&#125;</code></td>
                <td className="py-2 px-2">Between n and m (inclusive)</td>
                <td className="py-2 px-2"><code>\d&#123;3,5&#125;</code> = 3-5 digits</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>^</code> / <code>$</code></td>
                <td className="py-2 px-2">Start / end of string (or line w/ m flag)</td>
                <td className="py-2 px-2"><code>^abc$</code> exact match</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>(abc)</code></td>
                <td className="py-2 px-2">Capture group</td>
                <td className="py-2 px-2"><code>(\d+)-(\d+)</code> captures both</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>(?:abc)</code></td>
                <td className="py-2 px-2">Non-capturing group</td>
                <td className="py-2 px-2"><code>(?:ab)+</code> repeated ab</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>(?&lt;name&gt;abc)</code></td>
                <td className="py-2 px-2">Named capture group</td>
                <td className="py-2 px-2"><code>(?&lt;year&gt;\d&#123;4&#125;)</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>a|b</code></td>
                <td className="py-2 px-2">Alternation (a OR b)</td>
                <td className="py-2 px-2"><code>cat|dog</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>(?=abc)</code></td>
                <td className="py-2 px-2">Positive lookahead</td>
                <td className="py-2 px-2"><code>\d(?=px)</code> = digit before px</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>(?&lt;=abc)</code></td>
                <td className="py-2 px-2">Positive lookbehind (ES2018+)</td>
                <td className="py-2 px-2"><code>(?&lt;=$)\d+</code> = price digits</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Regex Patterns Library</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Email (simple):</strong> <code>^[\w.-]+@[\w.-]+\.\w+$</code></li>
            <li><strong>Email (RFC 5322 strict):</strong> see emailregex.com — too long to display</li>
            <li><strong>URL:</strong> <code>^https?://[^\s/$.?#].[^\s]*$</code></li>
            <li><strong>IPv4:</strong> <code>^(\d&#123;1,3&#125;\.)&#123;3&#125;\d&#123;1,3&#125;$</code> (basic; doesn&apos;t validate octets ≤ 255)</li>
            <li><strong>Phone (US):</strong> <code>^\(?\d&#123;3&#125;\)?[\s.-]?\d&#123;3&#125;[\s.-]?\d&#123;4&#125;$</code></li>
            <li><strong>Date (YYYY-MM-DD):</strong> <code>^\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;$</code></li>
            <li><strong>Hex color:</strong> <code>^#?([0-9a-fA-F]&#123;3&#125;|[0-9a-fA-F]&#123;6&#125;)$</code></li>
            <li><strong>UUID v4:</strong> <code>^[0-9a-f]&#123;8&#125;-[0-9a-f]&#123;4&#125;-4[0-9a-f]&#123;3&#125;-[89ab][0-9a-f]&#123;3&#125;-[0-9a-f]&#123;12&#125;$</code></li>
            <li><strong>Strong password:</strong> <code>(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&amp;]).&#123;8,&#125;</code></li>
            <li><strong>Slug:</strong> <code>^[a-z0-9]+(?:-[a-z0-9]+)*$</code></li>
            <li><strong>Username (3-20 chars, alphanumeric + underscore):</strong> <code>^\w&#123;3,20&#125;$</code></li>
            <li><strong>Credit card (basic):</strong> <code>^\d&#123;13,19&#125;$</code> (then Luhn check)</li>
            <li><strong>Markdown link:</strong> <code>\[([^\]]+)\]\(([^)]+)\)</code></li>
            <li><strong>HTML tag:</strong> <code>&lt;[^&gt;]+&gt;</code> (don&apos;t parse HTML with regex for real apps)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Greedy vs Lazy Quantifiers</h3>
          <p>
            By default, regex quantifiers (<code>*</code>, <code>+</code>, <code>?</code>, <code>&#123;n,m&#125;</code>) are <strong>greedy</strong> — they match as much text as possible. Add a <code>?</code> after them to make them <strong>lazy</strong> — match as little as possible. Example:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Greedy:</strong> <code>&lt;.*&gt;</code> applied to <code>&lt;a&gt;text&lt;/a&gt;</code> matches the ENTIRE string</li>
            <li><strong>Lazy:</strong> <code>&lt;.*?&gt;</code> matches just <code>&lt;a&gt;</code> first, then <code>&lt;/a&gt;</code> separately</li>
          </ul>
          <p className="mt-3">
            Use lazy quantifiers when you want the shortest match. They&apos;re critical for parsing structured text like HTML tags, JSON values, or string-delimited tokens.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Catastrophic Backtracking (The Performance Killer)</h3>
          <p>
            Some regex patterns can cause exponential runtime on certain inputs — this is called <strong>catastrophic backtracking</strong>. The engine tries every possible combination of matches, and on certain strings it explodes to seconds, minutes, or hours of CPU. <strong>The classic example:</strong> <code>(a+)+b</code> applied to <code>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac</code> (note the trailing c, not b). It will hang for several seconds before failing.
          </p>
          <p className="mt-3">
            <strong>Avoid:</strong> nested quantifiers like <code>(a+)+</code>, <code>(a*)*</code>, <code>(a|aa)+</code>. <strong>Mitigate:</strong> use possessive quantifiers (<code>a++</code>, not in JS), atomic groups (<code>(?&gt;...)</code>, not in JS), or rewrite to avoid ambiguity. <strong>This is a real security issue:</strong> ReDoS (Regular Expression Denial of Service) attacks exploit slow regex in production code. Always test regex with adversarial inputs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Language Regex Differences</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Feature</th>
                <th className="text-left py-2 px-2 text-foreground">JavaScript</th>
                <th className="text-left py-2 px-2 text-foreground">Python</th>
                <th className="text-left py-2 px-2 text-foreground">PCRE / PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Lookbehind</td>
                <td className="py-2 px-2">ES2018+ (variable length OK)</td>
                <td className="py-2 px-2">Yes (fixed length only)</td>
                <td className="py-2 px-2">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Named groups syntax</td>
                <td className="py-2 px-2"><code>(?&lt;name&gt;...)</code></td>
                <td className="py-2 px-2"><code>(?P&lt;name&gt;...)</code></td>
                <td className="py-2 px-2"><code>(?&lt;name&gt;...)</code> or <code>(?P&lt;name&gt;...)</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Atomic groups</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2 text-green-500"><code>(?&gt;...)</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Possessive quantifiers</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2 text-red-500">No (use atomic group)</td>
                <td className="py-2 px-2 text-green-500"><code>++</code>, <code>*+</code>, <code>?+</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Recursion</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2 text-red-500">No (regex), yes (re2)</td>
                <td className="py-2 px-2 text-green-500">Yes <code>(?R)</code></td>
              </tr>
              <tr>
                <td className="py-2 px-2">Unicode property classes</td>
                <td className="py-2 px-2 text-green-500"><code>\p&#123;...&#125;</code> with /u flag</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Regex vs Alternatives</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Parsing HTML/XML:</strong> use a real parser (cheerio, BeautifulSoup, xml2js). Regex can&apos;t handle nested tags correctly.</li>
            <li><strong>Parsing JSON:</strong> use the JSON parser, not regex. JSON has recursive structure regex can&apos;t express.</li>
            <li><strong>Parsing programming languages:</strong> use a real parser (AST tools). Regex breaks on edge cases.</li>
            <li><strong>Simple string operations (replace, split, contains):</strong> regex is overkill; use string methods.</li>
            <li><strong>Database queries with patterns:</strong> use LIKE / ILIKE with % wildcards, or full-text search.</li>
            <li><strong>When to use regex:</strong> validation rules, log parsing, simple search-and-replace, extracting fields from structured strings, syntax highlighting tokens.</li>
          </ul>
        </div>
      </div>
    ),

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
          "Regex syntax varies between languages. This tester uses JavaScript regex. Most basic patterns work cross-language, but features like lookbehinds, named groups, and flags may differ in Python, Java, Ruby, or Go.",
      },
      {
        question: "Is this regex tester free?",
        answer:
          "Yes. Completely free, runs locally in your browser, and has no limits on pattern testing or registration requirements.",
      },
      {
        question: "Is this a Ruby regex tester?",
        answer:
          "It tests JavaScript regex by default (the regex engine that powers Node.js, web browsers, and most online editors). Ruby regex (Oniguruma engine) is mostly compatible — the same patterns for character classes, quantifiers, anchors, and alternation work in both. The main Ruby-specific extras the JS engine doesn't natively support are named captures with /(?<name>pattern)/ syntax (works in modern JS too), POSIX character classes [:alpha:], and Ruby-only flags like /m for multiline-anything (in Ruby /m means 'dot matches newline', in JS the same flag means 'multiline anchors'). For Ruby-exclusive features, test patterns in irb or rubular.com after prototyping here."
      },
      {
        question: "What's the difference between JavaScript, Ruby, PCRE, and Python regex?",
        answer:
          "All four are descendants of Perl-compatible regex with mostly overlapping syntax. JavaScript regex is the smallest set (no named captures historically, no lookbehind until ES2018, no \\K reset). Ruby uses Oniguruma which adds Unicode property classes \\p{...}, advanced quantifiers, and named captures. PCRE (used in PHP, nginx, R) is the most feature-complete — recursive patterns, conditionals, backreferences. Python's re module sits between PCRE and JS. For maximum portability, stick to the common subset: basic character classes, quantifiers, anchors, and alternation."
      },
      {
        question: "How do I test a regex online?",
        answer:
          "Paste your pattern in the regex field above and your test string in the input field. Matches are highlighted in real time. You can toggle flags (g for global, i for case-insensitive, m for multiline, s for dotall, u for unicode, y for sticky). For step-through debugging, regex101.com shows match-by-match execution; this tool focuses on quick verification."
      }
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
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
