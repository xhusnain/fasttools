import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UnicodeConverter = dynamic(
  () =>
    import("@/components/converters/unicode-converter").then(
      (mod) => mod.UnicodeConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Unicode Converter",
  description:
    "Convert text to Unicode code points (U+XXXX) and decode Unicode escape sequences back to readable characters. Supports UTF-8, UTF-16, HTML entities, JavaScript \\u escapes, Python \\u escapes, and all Unicode planes including emoji and CJK.",
  metaTitle: "Unicode Converter — Text to Unicode Code Points & Decoder Free",
  metaDescription:
    "Free Unicode converter. Convert text to U+XXXX code points, decode \\u escape sequences, HTML entities (&#x), and hex notation. Supports emoji, CJK, Arabic, Cyrillic, and all 149,000+ Unicode characters. Browser-based.",
  path: "/converters/unicode",

  header: {
    title: "Unicode Text Converter & Decoder",
    description:
      "Convert plain text to Unicode code points (U+XXXX format) and decode Unicode escape sequences back to readable characters. Supports U+ notation, JavaScript/Python \\u escapes, HTML character entities (&#x), hex (0x) notation, emoji, CJK ideographs, Arabic, Cyrillic, and all 149,813 characters across 161 scripts in Unicode 15.1.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Unicode Converter", href: "/converters/unicode" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Unicode converter for encoding text to code points and decoding Unicode escape sequences. Supports U+XXXX, \\u escapes, HTML entities, hex notation, emoji, CJK, and all Unicode 15.1 characters.",
    alternateName: ["Text to Unicode Converter", "Unicode to Text Decoder", "Unicode Escape Converter", "Unicode Code Point Lookup", "HTML Entity Converter"],
    featureList: [
      "Text to Unicode code point conversion (U+XXXX format)",
      "Unicode escape sequence decoding (\\u, &#x, 0x)",
      "JavaScript and Python \\u escape format support",
      "HTML character entity encoding and decoding",
      "Emoji to Unicode code point conversion",
      "CJK, Arabic, Cyrillic, and multilingual character support",
      "All Unicode planes including supplementary characters",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Unicode Converter is a free online tool that converts plain text into Unicode code points (U+XXXX format) and decodes Unicode escape sequences — including JavaScript \\u escapes, Python \\u and \\U escapes, HTML character entities (&#x), and hexadecimal (0x) notation — back into readable characters. It supports all 149,813 characters across 161 scripts defined in Unicode 15.1, including emoji, CJK ideographs, Arabic, Cyrillic, Devanagari, and supplementary plane characters.",
    quickAnswer:
      "Paste any text to see each character's Unicode code point in U+XXXX format. For example, 'A' becomes U+0041, an emoji like a smiling face becomes U+1F600, and Chinese characters map to their CJK Unified Ideograph code points. To decode, paste Unicode sequences in any supported format (U+0041, \\u0041, &#x41;, 0x41) and get readable text instantly. The converter handles Basic Multilingual Plane (BMP) and supplementary plane characters including emoji and rare scripts.",
    keyTakeaways: [
      "Converts any text character to its Unicode code point in U+XXXX format (BMP) or U+XXXXX format (supplementary planes)",
      "Decodes multiple escape formats: U+ notation, JavaScript/Python \\u escapes, HTML &#x entities, and 0x hex values",
      "Supports all Unicode 15.1 characters: Latin, CJK, Arabic, Cyrillic, Devanagari, emoji, mathematical symbols, and 161 scripts",
      "Handles supplementary plane characters (emoji, rare CJK, musical notation) that use surrogate pairs in UTF-16",
      "Essential for debugging encoding issues, internationalization (i18n), and localization (l10n) in multilingual applications",
    ],
    overview:
      "This Unicode converter is built for developers, linguists, and content creators who work with multilingual text, special characters, and encoding systems. Convert any text to Unicode code points to identify exact character values for debugging mojibake (garbled text), verify correct character encoding in internationalized applications, generate JavaScript \\u escape sequences for source code, create HTML character entities (&#x) for web pages, and analyze the Unicode composition of emoji, CJK ideographs, and complex scripts. The decoder accepts mixed-format input, so you can paste U+0041 \\u0042 &#x43; and get 'ABC' back. All 17 Unicode planes are supported, from Basic Latin (U+0000-U+007F) through supplementary planes containing emoji (U+1F600-U+1F64F), CJK Extension B (U+20000-U+2A6DF), and beyond.",

    howToSteps: [
      "Enter or paste plain text (any language, emoji, or special characters) in the encode panel to generate Unicode code points in U+XXXX format.",
      "Paste Unicode escape sequences in any supported format — U+0041, \\u0041, &#x41;, or 0x41 — in the decode panel to convert them to readable text.",
      "Review the character-by-character breakdown showing each character's code point, Unicode name, and script block.",
      "Copy the converted output (code points or decoded text) with one click for use in source code, HTML documents, or technical documentation.",
    ],

    features: [
      "Text-to-Unicode code point conversion with U+XXXX output for every character including emoji and CJK",
      "Multi-format Unicode decoding: U+ notation, JavaScript \\u escapes, Python \\u/\\U escapes, HTML &#x entities, and 0x hex",
      "Full Unicode 15.1 support covering 149,813 characters across 161 scripts and 17 planes",
      "Supplementary plane character handling for emoji, CJK Extension B/C/D, musical notation, and historic scripts",
      "Character-level breakdown showing code point, Unicode character name, and script block membership",
      "One-click copy to clipboard for code points, escape sequences, and decoded text",
      "100% browser-based processing — your text data never leaves your device",
    ],

    useCases: [
      "Debugging character encoding issues (mojibake, UTF-8/UTF-16 mismatches) in web applications and databases by identifying exact code points",
      "Generating JavaScript \\u escape sequences and Python \\u/\\U escapes for hardcoded Unicode characters in source code",
      "Creating HTML character entities (&#x) for special characters, symbols, and non-Latin text in web pages and email templates",
      "Analyzing emoji composition: finding code points for multi-codepoint emoji sequences (skin tones, gender modifiers, ZWJ sequences)",
      "Internationalization (i18n) and localization (l10n) testing — verifying correct character rendering across languages and writing systems",
      "Academic and linguistic research — identifying Unicode block membership, script classification, and character properties",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Unicode is the universal character encoding standard that assigns a unique code point (numeric identifier) to every character in every writing system. Unicode 15.1 (released September 2023) defines 149,813 characters across 161 scripts, covering Latin, Greek, Cyrillic, Arabic, Hebrew, Devanagari, Chinese (CJK Unified Ideographs), Japanese (Hiragana, Katakana, Kanji), Korean (Hangul), Thai, emoji, mathematical symbols, musical notation, and many historic scripts.
        </p>
        <p>
          Unicode code points are written in U+XXXX format (4 hex digits for Basic Multilingual Plane characters) or U+XXXXX format (5 hex digits for supplementary plane characters). For example, the Latin letter 'A' is U+0041, the Chinese character for 'water' is U+6C34, the Arabic letter 'alef' is U+0627, and the grinning face emoji is U+1F600. In programming, Unicode characters are represented using escape sequences: JavaScript and Java use \\uXXXX (with surrogate pairs for supplementary characters), Python uses \\uXXXX and \\UXXXXXXXX, and HTML uses numeric character references like &amp;#x41; or &amp;#65;.
        </p>
        <p>
          Understanding Unicode code points is essential for debugging encoding issues in software development. Mojibake (garbled text like "Ã©" instead of "e") occurs when text encoded in one character set (like UTF-8) is decoded using a different character set (like Latin-1). By converting text to code points, you can identify exactly which characters are present and diagnose whether the issue is in encoding, decoding, font rendering, or data transmission. This converter supports all 17 Unicode planes and handles surrogate pairs for supplementary characters, making it a comprehensive tool for Unicode analysis and debugging.
        </p>
      </div>
    ),

    proTip:
      "When debugging mojibake (garbled text), paste both the garbled output and the expected text into the converter separately, then compare code points character by character to identify where the encoding mismatch occurs. For emoji analysis, remember that many modern emoji are multi-codepoint sequences joined by ZWJ (Zero Width Joiner, U+200D) — the converter will show each component code point in the sequence.",

    faqs: [
      {
        question: "How do I convert text to Unicode code points (U+XXXX format)?",
        answer:
          "Enter or paste any text in the encode panel. The converter displays each character's Unicode code point in U+XXXX format (or U+XXXXX for supplementary plane characters). For example, 'Hello' produces U+0048 U+0065 U+006C U+006C U+006F. This works for all languages, emoji, special symbols, and mathematical characters across all 17 Unicode planes.",
      },
      {
        question: "What Unicode escape formats can I decode with this tool?",
        answer:
          "The decoder accepts multiple Unicode notation formats: U+ prefix (U+0041), JavaScript/Java \\u escapes (\\u0041), Python \\U long form (\\U00000041), HTML numeric character references in hex (&#x41;) and decimal (&#65;), and bare hexadecimal with 0x prefix (0x41). You can mix formats in a single input — the tool parses each code point individually regardless of notation style.",
      },
      {
        question: "Can I convert emoji to Unicode code points and find their hex values?",
        answer:
          "Yes. Paste any emoji into the encode panel to see its Unicode code point(s). Simple emoji have single code points (grinning face = U+1F600), while complex emoji are multi-codepoint sequences. For example, a family emoji may consist of person + ZWJ (U+200D) + person + ZWJ + child code points joined together. The converter shows every component code point in the sequence.",
      },
      {
        question: "How does this Unicode converter help debug encoding issues and mojibake?",
        answer:
          "Mojibake (garbled text) occurs when text is decoded with the wrong character encoding. By converting both the garbled output and the expected text to Unicode code points, you can compare them character by character to identify where the mismatch occurs. For example, if 'e' (U+00E9) appears as 'Ã©', the code points reveal it was UTF-8 bytes (C3 A9) interpreted as Latin-1 characters (U+00C3 U+00A9).",
      },
      {
        question: "Does the converter support CJK characters, Arabic, Cyrillic, and other non-Latin scripts?",
        answer:
          "Yes. The converter supports all 161 scripts in Unicode 15.1, including CJK Unified Ideographs (Chinese, Japanese Kanji, Korean Hanja), Hiragana, Katakana, Hangul, Arabic, Hebrew, Cyrillic, Greek, Devanagari, Tamil, Thai, Georgian, Armenian, and every other Unicode-encoded script. Supplementary CJK characters (Extension B through Extension I) on higher Unicode planes are also fully supported.",
      },
      {
        question: "Is my text data sent to a server when using this Unicode converter?",
        answer:
          "No. All Unicode encoding and decoding is performed entirely in your browser using client-side JavaScript. Your text — whether it contains personal information, multilingual content, or proprietary data — is processed in memory on your device and never transmitted over any network. The tool works even when offline after the initial page load.",
      },
      {
        question: "What is the difference between UTF-8, UTF-16, and Unicode code points?",
        answer:
          "Unicode code points (U+XXXX) are abstract numeric identifiers for characters. UTF-8 and UTF-16 are encoding schemes that represent these code points as byte sequences. UTF-8 uses 1-4 bytes per character (backward compatible with ASCII), while UTF-16 uses 2 or 4 bytes (with surrogate pairs for supplementary characters). This converter works with Unicode code points directly, which are encoding-independent — you can then use the code points to generate the appropriate escape format for your target encoding or programming language.",
      },
    ],

    relatedTools: [
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UnicodeConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <UnicodeConverter />
        </div>
      )}
    />
  )
}
