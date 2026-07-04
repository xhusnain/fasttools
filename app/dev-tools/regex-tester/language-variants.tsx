// Language-variant pages for the Regex Tester.
//
// GSC shows ruby/python regex queries ranking on the GENERIC page (see
// docs/seo/2026-07-deep-fix/04a, verdict INVEST) — classic sign the demand is
// language-specific. Each variant owns one language's exact-phrase slug
// (/dev-tools/ruby-regex-tester …), ships the tool with the code-snippet
// generator preset to that language, and is honest about the engine: matching
// runs on JavaScript's RegExp, with a per-language compatibility table showing
// exactly what differs. The generic /dev-tools/regex-tester stays the hub.
//
// Pages are thin wrappers (app/dev-tools/<slug>/page.tsx) around
// getRegexVariantMetadata() + renderRegexVariantPage() below — top-level slugs
// (not [slug] children) because the searched phrase IS the slug.

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const RegexTester = dynamic(
  () => import("@/components/dev-tools/regex-tester").then((mod) => mod.RegexTester),
  { loading: () => <ToolLoader /> }
)

interface RegexLanguageVariant {
  slug: string
  language: string // display name
  componentLanguage: string // RegexTester language key
  engine: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  definition: string
  quickAnswer: string
  overview: string
  keywords: string[]
  keyTakeaways: string[]
  // feature | how it works in this language | how this tester's JS engine behaves
  syntaxRows: Array<{ feature: string; lang: string; js: string }>
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqs: Array<{ question: string; answer: string }>
}

export const regexLanguageVariants: Record<string, RegexLanguageVariant> = {
  "ruby-regex-tester": {
    slug: "ruby-regex-tester",
    language: "Ruby",
    componentLanguage: "ruby",
    engine: "Onigmo (Oniguruma)",
    metaTitle: "Ruby Regex Tester — Test Ruby Regular Expressions Online",
    metaDescription:
      "Free Ruby regex tester. Paste a pattern and test string to see live matches and capture groups, then copy ready-to-run Ruby code (=~, match, scan, gsub). Compatibility notes for Onigmo vs JS included.",
    headerTitle: "Ruby Regex Tester",
    headerDescription:
      "Test Ruby regular expressions with live match highlighting and capture groups, then copy working Ruby code — =~, match?, scan, or gsub.",
    definition:
      "A Ruby regex tester lets you prototype and debug regular expressions for Ruby — patterns used with =~, match?, scan, and gsub — with instant match highlighting, then export ready-to-run Ruby code.",
    quickAnswer:
      "Paste your pattern and a test string to see matches and capture groups instantly, then copy the generated Ruby snippet (using String#match and scan). Standard patterns — character classes, quantifiers, anchors, groups, named captures — behave identically in Ruby's Onigmo engine and this tester; the compatibility table below covers the differences like /m and POSIX classes.",
    overview:
      "This Ruby regex tester gives you the fast feedback loop of an online tool with Ruby-ready output: prototype the pattern against sample text, inspect capture groups, then copy a working Ruby snippet using =~, match, or scan. Matching in the browser runs on JavaScript's RegExp engine, which shares the vast majority of its syntax with Ruby's Onigmo — the table below lists exactly where the two differ (the /m flag, POSIX character classes, \\A and \\z anchors) so nothing surprises you in irb.",
    keywords: [
      "ruby regex tester",
      "ruby regex test online",
      "test ruby regular expression",
      "ruby regexp tester",
      "rubular alternative",
    ],
    keyTakeaways: [
      "Live match highlighting + capture groups, with copyable Ruby code (=~, match, scan, gsub)",
      "Character classes, quantifiers, anchors, groups, and (?<name>) named captures work identically in Ruby",
      "Watch the /m flag: in Ruby it makes . match newlines; in JavaScript that's /s",
      "Ruby extras this tester's engine lacks: POSIX classes [[:alpha:]], \\A \\z anchors, \\h hex class",
      "100% client-side — patterns and test text never leave your browser",
    ],
    syntaxRows: [
      { feature: "Named capture groups", lang: "(?<name>…) — also creates local vars with =~", js: "(?<name>…) — identical syntax" },
      { feature: "Dot matches newline", lang: "/m flag", js: "/s flag (m means multiline anchors)" },
      { feature: "Multiline anchors (^ $ per line)", lang: "always on — ^ and $ match line boundaries by default", js: "needs /m flag" },
      { feature: "String-start/end anchors", lang: "\\A and \\z (\\Z allows trailing newline)", js: "only ^ and $ (without m)" },
      { feature: "POSIX character classes", lang: "[[:alpha:]], [[:digit:]] supported", js: "not supported — use \\p{L}, \\d" },
      { feature: "Unicode property classes", lang: "\\p{Hiragana} etc., built in", js: "\\p{…} works with the u flag" },
      { feature: "Case-insensitive", lang: "/i", js: "/i — identical" },
      { feature: "Free-spacing comments", lang: "/x flag", js: "not supported" },
    ],
    aboutSections: [
      {
        heading: "Testing Here vs Running in Ruby",
        body: "For the everyday 90% of patterns — validations, extractions, splits — what matches here matches in Ruby, because both engines implement the same Perl-derived core. The gotcha that actually bites people is the /m flag: Ruby's /m makes the dot match newlines (JavaScript calls that /s), while Ruby's ^ and $ always match at line boundaries (JavaScript needs /m for that). So if your pattern relies on anchors across multi-line text or dot-matches-newline, double-check the flag mapping in the table above before pasting into your Ruby code. When you need Ruby-exclusive syntax — [[:alpha:]], \\A, \\h, or the /x free-spacing mode — verify the final pattern in irb: `\"text\" =~ /pattern/` or `\"text\".match?(/pattern/)`.",
      },
      {
        heading: "The Ruby Methods the Snippet Generator Covers",
        body: "Ruby gives you several ways to apply a regex, and the right one depends on what you want back. `string =~ /re/` returns the match index (and fills $~ plus named-capture locals). `string.match(/re/)` returns a MatchData with capture groups. `string.match?(/re/)` (Ruby 2.4+) is the fastest boolean check — no MatchData allocation. `string.scan(/re/)` returns every match as an array — the equivalent of this tester's g flag. `string.gsub(/re/, replacement)` is find-and-replace, with \\1 \\2 backreferences or a block. The code generator above produces a runnable snippet using match and scan; swap in match? when you only need true/false.",
      },
    ],
    proTip:
      "In Ruby, use match?(/re/) instead of =~ when you only need a yes/no — it skips creating MatchData and setting $~, which makes tight loops measurably faster. And remember: Ruby's ^ matches every line start; use \\A when you mean the very beginning of the string (critical for input validation).",
    faqs: [
      {
        question: "Is this a real Ruby regex tester if it runs JavaScript?",
        answer:
          "Matching runs on JavaScript's RegExp engine, which shares its Perl-derived core syntax with Ruby's Onigmo — character classes, quantifiers, anchors, alternation, groups, lookarounds, and (?<name>) named captures all behave the same. The compatibility table on this page covers the exceptions (flag meanings, POSIX classes, \\A/\\z). For patterns using Ruby-exclusive syntax, do a final check in irb.",
      },
      {
        question: "Why does my pattern work here but not with Ruby's ^ and $?",
        answer:
          "In Ruby, ^ and $ always match at line boundaries — there is no toggle. If you're validating a whole string (like user input), use \\A and \\z in Ruby, otherwise \"evil\\ninput\" can sneak past your validation. This is a well-known Rails security pitfall: format validations should use \\A…\\z, not ^…$.",
      },
      {
        question: "What's the Ruby equivalent of the g (global) flag?",
        answer:
          "Ruby has no g flag — you choose per method call: scan returns all matches (like g), while =~ and match find only the first. gsub replaces all occurrences; sub replaces only the first.",
      },
      {
        question: "Is this a Rubular alternative?",
        answer:
          "Yes, for the common case — live testing with capture-group display — plus a code generator Rubular doesn't have. Rubular runs an actual Ruby engine, so use it (or irb) as the final check for Ruby-exclusive syntax like [[:alpha:]] or \\h.",
      },
    ],
  },

  "python-regex-tester": {
    slug: "python-regex-tester",
    language: "Python",
    componentLanguage: "python",
    engine: "re module",
    metaTitle: "Python Regex Tester — Test Python re Patterns Online",
    metaDescription:
      "Free Python regex tester. See live matches and capture groups, then copy working Python code with re.search, re.findall, and named groups. re-module compatibility notes included.",
    headerTitle: "Python Regex Tester",
    headerDescription:
      "Test Python regular expressions with live match highlighting, then copy working re-module code — search, findall, sub, with raw strings and named groups.",
    definition:
      "A Python regex tester lets you prototype and debug regular expressions for Python's re module — patterns used with re.search, re.match, re.findall, and re.sub — with instant match highlighting and copyable Python code.",
    quickAnswer:
      "Paste your pattern and test string to see matches and capture groups live, then copy the generated Python snippet (re.search / re.findall with a raw string). Core syntax is identical between Python's re module and this tester; the table below flags the differences — (?P<name>) group syntax, fixed-width lookbehind, and flag spelling like re.IGNORECASE.",
    overview:
      "This Python regex tester pairs instant browser feedback with Python-ready output: build the pattern against sample text, check what each group captures, then copy a runnable re-module snippet. Matching runs on JavaScript's RegExp engine, which agrees with Python's re on the core syntax that covers most real patterns; the compatibility table below lists the honest differences — named-group spelling, lookbehind restrictions, inline flags — so the pattern you paste into Python behaves exactly as tested.",
    keywords: [
      "python regex tester",
      "python regex test online",
      "test python regular expression",
      "python re tester",
      "re.search tester online",
    ],
    keyTakeaways: [
      "Live matches + capture groups, with copyable re.search / re.findall Python code",
      "Always use raw strings in Python: r\"\\d+\" — otherwise Python eats your backslashes first",
      "Python named groups are (?P<name>…); this tester also accepts JS's (?<name>…)",
      "Python lookbehind must be fixed-width — (?<=abc) works, (?<=a+) does not",
      "re.match anchors at string start; re.search scans — findall is this tester's g flag",
    ],
    syntaxRows: [
      { feature: "Named capture groups", lang: "(?P<name>…), backreference (?P=name)", js: "(?<name>…), backreference \\k<name>" },
      { feature: "Lookbehind", lang: "fixed-width only — (?<=abc) ok, (?<=a+) errors", js: "variable-width allowed" },
      { feature: "Case-insensitive", lang: "re.IGNORECASE / re.I or inline (?i)", js: "/i flag" },
      { feature: "Dot matches newline", lang: "re.DOTALL / re.S or inline (?s)", js: "/s flag" },
      { feature: "Multiline anchors", lang: "re.MULTILINE / re.M or inline (?m)", js: "/m flag" },
      { feature: "String-start/end anchors", lang: "\\A and \\Z", js: "only ^ and $ (without m)" },
      { feature: "Free-spacing / comments", lang: "re.VERBOSE / re.X", js: "not supported" },
      { feature: "Unicode property classes", lang: "not in re — needs the third-party regex module", js: "\\p{…} with u flag" },
    ],
    aboutSections: [
      {
        heading: "Testing Here vs Running in Python",
        body: "The core pattern language — classes, quantifiers, anchors, groups, alternation, lookahead — is the same in Python's re module and this tester, so what matches here matches in Python for the overwhelming majority of patterns. Three things to translate when you copy a pattern out: write it as a raw string (r\"…\") so Python's string parser doesn't consume the backslashes; spell named groups the Python way, (?P<name>…); and if you used a lookbehind, make sure it's fixed-width — Python raises 'look-behind requires fixed-width pattern' for (?<=a+) where JavaScript happily accepts it. Flags move from the /gims suffix to arguments: re.search(pat, s, re.I | re.M).",
      },
      {
        heading: "re.match vs re.search vs re.fullmatch vs re.findall",
        body: "The most common Python regex confusion isn't syntax — it's method choice. re.match only matches at the START of the string (an implicit \\A), which silently fails on patterns that would match mid-string. re.search scans the whole string for the first match — it's what most people mean. re.fullmatch requires the entire string to match (the right tool for validation — no ^…$ needed). re.findall returns every non-overlapping match, which is the equivalent of this tester's g flag; use re.finditer when you need the match objects with group data. The snippet generator above emits re.search and re.findall so both single- and all-match cases are covered.",
      },
    ],
    proTip:
      "For input validation in Python, prefer re.fullmatch(pattern, s) over re.match with a $ anchor — $ also matches just before a trailing newline, so re.match(r\"\\d+$\", \"123\\n\") unexpectedly succeeds. fullmatch has no such trap.",
    faqs: [
      {
        question: "Why does everyone use r\"\" raw strings for Python regex?",
        answer:
          "Because Python's normal string literals process backslashes before the regex engine sees them: \"\\d\" survives only by luck, and \"\\b\" silently becomes a backspace character instead of a word boundary. Raw strings (r\"\\d\", r\"\\b\") pass every backslash straight through to re. Always write regex patterns as raw strings.",
      },
      {
        question: "Why does my lookbehind fail in Python but work here?",
        answer:
          "Python's re module only supports fixed-width lookbehind: (?<=abc) is fine, but (?<=a+) or (?<=ab|abc) raise an error. Rewrite with a capture group ((a+)(target) and take group 2), or install the third-party 'regex' module, which supports variable-width lookbehind.",
      },
      {
        question: "What's the Python equivalent of the g flag?",
        answer:
          "re.findall(pattern, s) returns all matches as strings (or tuples when you have groups); re.finditer returns an iterator of match objects. For replace-all, re.sub replaces every occurrence by default — the opposite of JavaScript, where replace without g does only the first.",
      },
      {
        question: "Do (?P<name>) and (?<name>) both work?",
        answer:
          "In Python, only (?P<name>…) — the P is required, and backreferences are (?P=name). This tester (JS engine) uses (?<name>…). The generated Python snippet uses the correct (?P<name>) spelling automatically when you copy code.",
      },
    ],
  },

  "golang-regex-tester": {
    slug: "golang-regex-tester",
    language: "Go",
    componentLanguage: "go",
    engine: "RE2",
    metaTitle: "Golang Regex Tester — Test Go RE2 Patterns Online",
    metaDescription:
      "Free Golang regex tester with live matches and copyable Go code (regexp.MustCompile, FindAllString). Includes the RE2 rules: no lookahead, no backreferences, guaranteed linear time.",
    headerTitle: "Golang Regex Tester",
    headerDescription:
      "Test Go regular expressions with live matching, then copy working regexp-package code. Includes the RE2 compatibility rules — what Go's engine deliberately leaves out.",
    definition:
      "A Golang regex tester lets you prototype patterns for Go's regexp package (the RE2 engine) — used with regexp.MustCompile, MatchString, and FindAllString — with instant match highlighting and copyable Go code.",
    quickAnswer:
      "Paste a pattern and test string to see matches live, then copy the generated Go snippet (regexp.MustCompile + FindAllString). One critical rule before you copy anything: Go's RE2 engine has NO lookahead, NO lookbehind, and NO backreferences — by design, in exchange for guaranteed linear-time matching. The table below shows what to use instead.",
    overview:
      "This Golang regex tester gives you a fast prototyping loop with Go-ready output — but Go is the one language on this site where the engine difference really matters. Go's regexp package implements RE2, which deliberately omits backtracking features: lookahead (?=…), lookbehind (?<=…), and backreferences (\\1) all fail to compile in Go, and in return every Go regex runs in time linear in the input — a Go regex can never be a ReDoS vulnerability. Prototype your match logic here, keep to the RE2-safe subset in the table below, and the copied pattern will compile cleanly with regexp.MustCompile.",
    keywords: [
      "golang regex tester",
      "go regex tester online",
      "test go regular expression",
      "re2 regex tester",
      "regexp mustcompile tester",
    ],
    keyTakeaways: [
      "Go uses RE2: no lookahead, no lookbehind, no backreferences — they won't compile",
      "The trade: every Go regex is guaranteed linear-time — ReDoS is impossible by design",
      "Named groups are (?P<name>…); read them via FindStringSubmatch + SubexpNames",
      "Flags are inline: (?i) case-insensitive, (?s) dot-matches-newline, (?m) multiline",
      "Copyable Go snippet with regexp.MustCompile and FindAllString included",
    ],
    syntaxRows: [
      { feature: "Lookahead (?=…) (?!…)", lang: "NOT supported — compile error", js: "supported (this tester accepts it)" },
      { feature: "Lookbehind (?<=…) (?<!…)", lang: "NOT supported — compile error", js: "supported" },
      { feature: "Backreferences \\1 \\k<name>", lang: "NOT supported — compile error", js: "supported" },
      { feature: "Worst-case runtime", lang: "linear — catastrophic backtracking impossible", js: "exponential possible (ReDoS)" },
      { feature: "Named capture groups", lang: "(?P<name>…)", js: "(?<name>…)" },
      { feature: "Case-insensitive", lang: "inline (?i) prefix", js: "/i flag" },
      { feature: "Dot matches newline", lang: "inline (?s)", js: "/s flag" },
      { feature: "Multiline anchors", lang: "inline (?m); also \\A and \\z", js: "/m flag" },
      { feature: "Unicode classes", lang: "\\p{L}, \\pN built in", js: "\\p{…} with u flag" },
    ],
    aboutSections: [
      {
        heading: "Why Go's Regex Engine Refuses Lookarounds",
        body: "RE2 (written at Google, the engine behind Go's regexp package) makes a deliberate trade: it drops every feature that requires backtracking — lookahead, lookbehind, backreferences — and in exchange guarantees that any pattern runs in time proportional to the input length. That means the catastrophic-backtracking patterns that hang other engines (the classic (a+)+b) are simply impossible in Go: they either compile to a safe automaton or don't compile at all. If you prototype a pattern here using a lookahead, Go will reject it with an error like 'invalid or unsupported Perl syntax: `(?=`' — rewrite it before copying (the next section shows how).",
      },
      {
        heading: "RE2-Safe Rewrites for Lookaround Patterns",
        body: "Most lookaround patterns have a mechanical rewrite. Trailing-context lookahead — foo(?=bar) — becomes a capture: match foo(bar) and use capture group 1's position, or match foobar and slice. Password-style multiple lookaheads — (?=.*[a-z])(?=.*\\d) — become separate simpler checks in Go code: run one MatchString per rule and AND the results; it's clearer and still linear. Lookbehind — (?<=\\$)\\d+ — becomes a group: \\$(\\d+) and read group 1. Backreference patterns like (\\w+) \\1 (repeated word) genuinely can't be expressed in RE2 — do a FindAllStringSubmatch and compare the captures in Go code instead.",
      },
    ],
    proTip:
      "Compile once, reuse everywhere: regexp.MustCompile at package level (var re = regexp.MustCompile(`…`)) — compiling inside a hot loop is the most common Go regex performance mistake. Use backticks for the pattern string so you don't have to double-escape backslashes.",
    faqs: [
      {
        question: "Why doesn't my lookahead work in Go?",
        answer:
          "Go's regexp package implements RE2, which does not support lookahead, lookbehind, or backreferences — they cause a compile error, not a silent failure. This is by design: RE2 guarantees linear-time matching. Rewrite trailing-context lookaheads as capture groups, and multi-condition lookaheads (password rules) as separate MatchString checks combined in Go code.",
      },
      {
        question: "Can a Go regex be exploited with ReDoS?",
        answer:
          "No. RE2's linear-time guarantee means patterns like (a+)+b that hang backtracking engines run in linear time or fail to compile in Go. If you accept user-supplied patterns, Go is the safest mainstream language to do it in — though you should still cap pattern length and use regexp.Compile (not MustCompile) to handle invalid patterns without panicking.",
      },
      {
        question: "How do I get named capture groups out in Go?",
        answer:
          "Define them as (?P<name>…), then pair FindStringSubmatch (values) with SubexpNames (names): loop over SubexpNames and index into the submatch slice. There's no map-style access built in — a small helper that zips the two slices is the standard idiom.",
      },
      {
        question: "What's the Go equivalent of the g flag?",
        answer:
          "The FindAll* family: FindAllString(s, -1) returns every match (the -1 means no limit), FindAllStringSubmatch adds capture groups, and ReplaceAllString always replaces every occurrence. The generated snippet above uses FindAllString.",
      },
    ],
  },

  "php-regex-tester": {
    slug: "php-regex-tester",
    language: "PHP",
    componentLanguage: "php",
    engine: "PCRE2",
    metaTitle: "PHP Regex Tester — Test preg_match Patterns Online",
    metaDescription:
      "Free PHP regex tester. Live matches and capture groups, plus copyable preg_match / preg_match_all code with delimiters handled. PCRE2 compatibility notes included.",
    headerTitle: "PHP Regex Tester",
    headerDescription:
      "Test PHP regular expressions with live matching, then copy working preg_match / preg_match_all code — delimiters and flags included.",
    definition:
      "A PHP regex tester lets you prototype patterns for PHP's preg_* functions (the PCRE2 engine) — preg_match, preg_match_all, preg_replace — with instant match highlighting and copyable PHP code with the delimiters already in place.",
    quickAnswer:
      "Paste your pattern and test string to see matches and groups live, then copy the generated PHP snippet — preg_match for the first match, preg_match_all for all of them, with the /…/ delimiters and flags already wrapped. Core syntax is identical between PCRE2 and this tester; PHP additionally supports possessive quantifiers, atomic groups, recursion, and \\K.",
    overview:
      "This PHP regex tester covers the everyday preg workflow: build the pattern against sample text, inspect capture groups, then copy a runnable snippet with the part people most often get wrong — the delimiters — already handled (PHP patterns are strings like '/pattern/i', and forgetting the delimiters is the #1 preg_match error). Matching here runs on JavaScript's engine; PCRE2 is a superset for practical purposes, so patterns that work here work in PHP, and PHP adds power features on top — possessive quantifiers, atomic groups, \\K, recursion — listed in the table below.",
    keywords: [
      "php regex tester",
      "preg_match tester online",
      "test php regular expression",
      "php preg_match_all tester",
      "pcre tester online",
    ],
    keyTakeaways: [
      "Copyable preg_match / preg_match_all snippets with delimiters and flags pre-wrapped",
      "PHP patterns are strings with delimiters: '/\\d+/i' — forgetting them is the classic preg error",
      "Patterns that match here match in PHP — PCRE2 is a practical superset of JS regex",
      "PHP extras: possessive quantifiers (a++), atomic groups (?>…), \\K, recursion (?R)",
      "preg_match returns 1/0/false — always check for false (pattern error) in production",
    ],
    syntaxRows: [
      { feature: "Pattern format", lang: "string with delimiters: '/pat/flags' (or #pat#, ~pat~)", js: "/pat/flags literal" },
      { feature: "Named capture groups", lang: "(?<name>…) or (?P<name>…) — both work", js: "(?<name>…) only" },
      { feature: "Possessive quantifiers", lang: "a++, a*+, a?+ supported", js: "not supported" },
      { feature: "Atomic groups", lang: "(?>…) supported", js: "not supported" },
      { feature: "\\K (reset match start)", lang: "supported", js: "not supported" },
      { feature: "Recursion / subpatterns", lang: "(?R), (?1) supported", js: "not supported" },
      { feature: "Case-insensitive", lang: "i after closing delimiter", js: "/i flag" },
      { feature: "Dot matches newline", lang: "s modifier", js: "/s flag — same meaning" },
      { feature: "Free-spacing comments", lang: "x modifier", js: "not supported" },
    ],
    aboutSections: [
      {
        heading: "Delimiters: PHP's One Weird Regex Rule",
        body: "PHP regex patterns are ordinary strings whose first character declares the delimiter: '/\\d+/' uses slashes, '#https?://#' uses hashes (handy for URL patterns so you don't escape every slash), '~…~' tildes. Flags go after the closing delimiter: '/pattern/imsx'. The two classic mistakes: passing a bare pattern without delimiters (preg_match(): Delimiter must not be alphanumeric or backslash), and double-escaping — inside single-quoted PHP strings '\\d' passes through correctly, but inside double-quoted strings some sequences get interpreted by PHP first. Single-quote your patterns and the copied snippet from this page will run as-is.",
      },
      {
        heading: "preg_match vs preg_match_all vs preg_replace",
        body: "preg_match finds the FIRST match and fills $matches with the full match at [0] and capture groups at [1], [2]… — it returns 1 (matched), 0 (no match), or false (pattern error), so strict-compare against false when the pattern isn't hard-coded. preg_match_all finds every match (this tester's g flag) with $matches[0] holding all full matches. preg_replace replaces all occurrences by default and accepts $1 or \\1 backreferences; preg_replace_callback lets you compute each replacement in code. For splitting, preg_split beats explode whenever the separator is a pattern.",
      },
    ],
    proTip:
      "Use a non-slash delimiter for URL and path patterns — '#^https?://#' reads far better than '/^https?:\\/\\//'. And check preg_last_error_msg() (PHP 8+) when preg_match returns false: silent pattern failures, like exceeding the backtrack limit, are otherwise invisible.",
    faqs: [
      {
        question: "Why does preg_match say 'Delimiter must not be alphanumeric'?",
        answer:
          "Your pattern string is missing delimiters. PHP patterns must be wrapped: preg_match('/\\d+/', $s), not preg_match('\\d+', $s). Any non-alphanumeric character can be the delimiter — use '#' for URL patterns to avoid escaping slashes. The snippets generated on this page always include the delimiters.",
      },
      {
        question: "Will a pattern from this tester work in preg_match?",
        answer:
          "Yes — wrap it in delimiters and single-quote the string. PCRE2 supports everything JavaScript regex does for practical purposes, plus extras (possessive quantifiers, atomic groups, recursion). The one translation: move flags from the JS /gi suffix to after PHP's closing delimiter — and note the g flag doesn't exist in PHP; use preg_match_all instead.",
      },
      {
        question: "What's the PHP equivalent of the g flag?",
        answer:
          "preg_match_all — it returns every non-overlapping match. There is no g modifier in PCRE; the 'find all' behavior is a different function, and preg_replace already replaces all occurrences by default.",
      },
      {
        question: "Should I worry about ReDoS in PHP?",
        answer:
          "Less than in JavaScript: PHP caps runaway patterns with pcre.backtrack_limit (default 1,000,000), so a catastrophic pattern returns false instead of hanging — but that means silently missing matches. Avoid nested quantifiers like (a+)+, and use possessive quantifiers (a++) or atomic groups (?>…) — PCRE-only features made exactly for this — to cut backtracking at the source.",
      },
    ],
  },

  "java-regex-tester": {
    slug: "java-regex-tester",
    language: "Java",
    componentLanguage: "java",
    engine: "java.util.regex",
    metaTitle: "Java Regex Tester — Test Pattern & Matcher Online",
    metaDescription:
      "Free Java regex tester. Live matches and capture groups, plus copyable java.util.regex code with the double-backslash escaping already handled. matches() vs find() explained.",
    headerTitle: "Java Regex Tester",
    headerDescription:
      "Test Java regular expressions with live matching, then copy working Pattern/Matcher code — with the double-backslash string escaping already done for you.",
    definition:
      "A Java regex tester lets you prototype patterns for java.util.regex (Pattern and Matcher) with instant match highlighting, then copy compilable Java code — including the double-escaped string literal Java requires.",
    quickAnswer:
      "Paste your pattern and test string to see matches and capture groups live, then copy the generated Java snippet — Pattern.compile with Matcher, and every backslash already doubled for Java's string literals (\\d becomes \"\\\\d\"). Pattern syntax is near-identical between java.util.regex and this tester; the real differences are in the API: matches() anchors the whole string, find() scans.",
    overview:
      "This Java regex tester removes the two friction points of writing regex in Java: the edit-compile-run loop (test in the browser instead) and backslash escaping (the copied snippet doubles them for you — the pattern \\d{3} ships as Pattern.compile(\"\\\\d{3}\")). Java's regex syntax tracks the same Perl lineage as this tester's engine, with near-total overlap including named groups and lookarounds; what trips people up is the API — String.matches() silently anchors your pattern to the entire string, while Matcher.find() scans for it anywhere. The table and sections below cover both.",
    keywords: [
      "java regex tester",
      "java regex test online",
      "test java regular expression",
      "java pattern matcher tester",
      "java util regex tester",
    ],
    keyTakeaways: [
      "Copyable Pattern.compile / Matcher code with backslashes pre-doubled (\"\\\\d+\")",
      "String.matches() anchors the WHOLE string; Matcher.find() scans — the #1 Java regex confusion",
      "Named groups (?<name>…) supported since Java 7 — read with matcher.group(\"name\")",
      "Flags: Pattern.CASE_INSENSITIVE etc., or inline (?i)(?m)(?s) prefixes",
      "Java 13+ text blocks or Pattern.quote() reduce escaping pain for literals",
    ],
    syntaxRows: [
      { feature: "Pattern in source code", lang: "string literal — every \\ doubled: \"\\\\d+\"", js: "/\\d+/ literal, single backslashes" },
      { feature: "Whole-string match", lang: "s.matches(re) / matcher.matches() — implicitly anchored", js: "needs explicit ^…$" },
      { feature: "Find anywhere", lang: "matcher.find()", js: "default behavior of .test() / .exec()" },
      { feature: "Named capture groups", lang: "(?<name>…), group(\"name\") — Java 7+", js: "(?<name>…) — identical" },
      { feature: "Case-insensitive", lang: "Pattern.CASE_INSENSITIVE or inline (?i)", js: "/i flag" },
      { feature: "Dot matches newline", lang: "Pattern.DOTALL or inline (?s)", js: "/s flag" },
      { feature: "Multiline anchors", lang: "Pattern.MULTILINE or inline (?m)", js: "/m flag" },
      { feature: "Possessive quantifiers", lang: "a++, a*+ supported", js: "not supported" },
      { feature: "Free-spacing comments", lang: "Pattern.COMMENTS or inline (?x)", js: "not supported" },
    ],
    aboutSections: [
      {
        heading: "The Double-Backslash Problem (and How the Snippet Solves It)",
        body: "Java has no regex literals — patterns live inside string literals, and Java's string parser consumes one level of backslashes before the regex engine sees anything. So the regex \\d{3}-\\d{4} must be written \"\\\\d{3}-\\\\d{4}\", and matching a literal backslash becomes the infamous \"\\\\\\\\\". This page's code generator doubles every backslash automatically when you copy the Java snippet, so the pattern you tested is exactly the pattern Java compiles. For hand-written code, Java 13+ text blocks (\"\"\"…\"\"\") don't help with backslashes but do help with quotes; Pattern.quote(s) is the right tool when you want to match a literal string verbatim inside a larger pattern.",
      },
      {
        heading: "matches() vs find(): Java's Biggest Regex Gotcha",
        body: "String.matches(re) and Matcher.matches() implicitly anchor the pattern to the ENTIRE string — \"abc123\".matches(\"\\\\d+\") is false, because the whole string isn't digits. Matcher.find() scans for the pattern anywhere — the behavior this tester shows and what .test() does in JavaScript. So: validation (whole input must conform) → matches(), no ^…$ needed; extraction/detection (pattern occurs somewhere) → find(), often in a while (m.find()) loop to walk every match, reading m.group(n) or m.group(\"name\") for captures. Mixing these up produces patterns that 'worked in the tester but not in Java' — the pattern is fine; the method choice changed the semantics.",
      },
    ],
    proTip:
      "Compile once: make Pattern.compile a private static final field — Pattern is thread-safe and compilation is the expensive part (Matcher is cheap and per-use). And prefer matcher.replaceAll() over String.replaceAll() in loops; the String version recompiles the pattern on every call.",
    faqs: [
      {
        question: "Why does my pattern work here but String.matches() returns false?",
        answer:
          "Because matches() requires the pattern to consume the ENTIRE string — it wraps your pattern in implicit \\A…\\z anchors. If the pattern matches a substring (what this tester highlights), use Matcher.find() instead: Pattern.compile(re).matcher(s).find(). Use matches() only for whole-input validation.",
      },
      {
        question: "Why do Java regex strings need double backslashes?",
        answer:
          "Java string literals process escapes first: \"\\d\" is an invalid string escape, so the regex \\d must be written \"\\\\d\" — one backslash for the string parser, one for the regex engine. The Java snippet this page generates doubles them automatically. To match a literal backslash you need four: \"\\\\\\\\\".",
      },
      {
        question: "How do I get all matches in Java (the g flag)?",
        answer:
          "Loop with find(): Matcher m = pattern.matcher(input); while (m.find()) { m.group(); }. Java 9+ adds m.results() for a Stream<MatchResult>, and String.split / pattern.splitAsStream cover the splitting cases.",
      },
      {
        question: "Does Java support lookbehind and named groups?",
        answer:
          "Yes — java.util.regex supports lookahead, lookbehind (including variable-width in modern JDKs, unlike Python), named groups (?<name>…) since Java 7 via matcher.group(\"name\"), and possessive quantifiers (a++) that JavaScript lacks. Patterns tested here transfer cleanly; just double the backslashes.",
      },
    ],
  },
}

const HUB = { name: "Regex Tester (all languages)", href: "/dev-tools/regex-tester" }

export function getRegexVariantMetadata(slug: string): Metadata {
  const v = regexLanguageVariants[slug]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    keywords: v.keywords,
    alternates: { canonical: `/dev-tools/${slug}` },
  }
}

export function renderRegexVariantPage(slug: string) {
  const v = regexLanguageVariants[slug]

  const siblingLinks = Object.values(regexLanguageVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: `${item.language} Regex Tester`, href: `/dev-tools/${item.slug}` }))

  const toolConfig = createToolConfig({
    toolName: `${v.language} Regex Tester`,
    description: v.metaDescription,
    metaTitle: v.metaTitle,
    metaDescription: v.metaDescription,
    path: `/dev-tools/${slug}`,

    schemaOptions: {
      applicationCategory: "DeveloperApplication",
      description: v.definition,
      alternateName: v.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: v.headerTitle,
      description: v.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
      color: "blue",
    },

    breadcrumbs: [
      { label: "Developer Tools", href: "/dev-tools" },
      { label: "Regex Tester", href: "/dev-tools/regex-tester" },
      { label: v.headerTitle, href: `/dev-tools/${slug}` },
    ],

    content: {
      definition: v.definition,
      quickAnswer: v.quickAnswer,
      keyTakeaways: v.keyTakeaways,
      overview: v.overview,

      howToSteps: [
        "Enter your regular expression pattern — the tester highlights matches as you type.",
        "Paste a realistic test string, including inputs that should NOT match.",
        `Open the code generator (preset to ${v.language}) and copy the ready-to-run snippet.`,
        `Check the compatibility table below for the few ${v.language}-specific differences before shipping.`,
      ],

      aboutTool: (
        <div className="space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              {v.language} ({v.engine}) vs This Tester&apos;s Engine
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Matching in the browser runs on JavaScript&apos;s RegExp. Here is exactly how{" "}
              {v.language}&apos;s {v.engine} engine lines up, feature by feature:
            </p>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-left">{v.language}</th>
                    <th className="p-3 text-left">This tester (JS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {v.syntaxRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="p-3 font-semibold">{row.feature}</td>
                      <td className="p-3">{row.lang}</td>
                      <td className="p-3">{row.js}</td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
          </article>

          {v.aboutSections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      ),

      proTip: v.proTip,

      faqs: [
        ...v.faqs,
        {
          question: "Is this tester free and private?",
          answer:
            "Yes — free, no signup, no limits, and 100% client-side: patterns and test strings are processed in your browser and never sent to a server.",
        },
      ],

      relatedTools: [
        HUB,
        ...siblingLinks,
        { name: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
        { name: "JSON Diff", href: "/dev-tools/json-diff" },
        { name: "All Developer Tools", href: "/dev-tools" },
      ],
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RegexTester defaultLanguage={v.componentLanguage} />
        </div>
      )}
    />
  )
}
