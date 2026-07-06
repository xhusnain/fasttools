import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { SlugifyString } from "@/components/dev-tools/slugify-string"

const toolConfig = createToolConfig({
  toolName: "Slugify String",
  description:
    "Convert titles and phrases into lowercase, hyphen-separated URL slugs for routes, filenames, blog posts, and product pages.",
  metaTitle: "URL Slug Generator - Slugify Text Online | FastTools",
  metaDescription:
    "Free URL slug generator. Convert titles into lowercase, hyphen-separated slugs, remove punctuation, strip common accents, replace ampersands with 'and', and copy the result.",
  path: "/dev-tools/slugify-string",

  header: {
    title: "URL Slug Generator",
    description:
      "Turn a title, phrase, or file label into a clean URL slug. The tool lowercases text, strips common accents, replaces spaces with hyphens, removes punctuation, and copies the result.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Slugify String", href: "/dev-tools/slugify-string" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "URL slug generator that converts text into lowercase, hyphen-separated slugs by trimming whitespace, replacing spaces and underscores with hyphens, converting ampersands to 'and', stripping common accents, and removing punctuation.",
    alternateName: [
      "Slug Generator",
      "URL Slug Maker",
      "Slugify Tool",
      "Text to Slug Converter",
      "SEO URL Generator",
      "Permalink Generator",
      "Pretty URL Maker",
      "Filename Sanitizer",
      "Kebab Case Converter",
    ],
    featureList: [
      "Lowercase text-to-slug conversion",
      "Space and underscore to hyphen conversion",
      "Ampersand to 'and' conversion",
      "Common accent and diacritic stripping",
      "Punctuation and symbol removal",
      "Duplicate hyphen cleanup",
      "Copy-ready output",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A slug generator converts readable text into a URL-safe slug, usually by lowercasing words, removing punctuation, and separating words with hyphens.",

    quickAnswer:
      "Paste a page title such as 'Best Coffee Makers & Accessories' and the tool returns a slug like best-coffee-makers-and-accessories. Copy the output and use it in a URL path, route name, or filename.",

    keyTakeaways: [
      "Generates lowercase, hyphen-separated slugs.",
      "Replaces spaces and underscores with hyphens.",
      "Converts ampersands to the word 'and'.",
      "Strips common accents and combining diacritics before removing unsupported characters.",
      "Does not provide bulk mode, custom separators, stopword removal, collision checking, or CMS-specific slug matching.",
    ],

    overview:
      "Use this URL slug generator when you need a clean path for a blog post, product page, documentation route, export filename, or stable identifier. The output is compact, readable, and easier to share than a title with spaces, punctuation, and mixed case. The current slug rules are intentionally simple: lowercase, trim, normalize accents, convert spaces and underscores to hyphens, remove unsupported characters, collapse duplicate hyphens, and trim hyphens from the ends.",

    howToSteps: [
      "Paste a title, phrase, route label, or filename into the input box.",
      "Review the generated slug in the output box.",
      "Edit the original text if you want a shorter or clearer URL.",
      "Click Copy slug and paste it into your route, CMS slug field, or filename.",
    ],

    features: [
      {
        title: "Clean URL Slugs",
        description:
          "Turn mixed-case titles with punctuation into lowercase, hyphen-separated slugs that are easier to read and share.",
      },
      {
        title: "Accent Normalization",
        description:
          "Common accented Latin characters are normalized before cleanup, so words such as cafe and resume can be generated from accented source text.",
      },
      {
        title: "Ampersand Handling",
        description:
          "The ampersand character is converted to 'and' instead of being silently removed, which keeps product and article titles clearer.",
      },
      {
        title: "Copy-Ready Output",
        description:
          "The generated slug is shown in a read-only output box and can be copied with one button.",
      },
    ],

    useCases: [
      "Create blog post slugs before publishing.",
      "Prepare product URL paths from product names.",
      "Normalize documentation page route names.",
      "Create readable export filenames from titles.",
      "Convert feature labels into kebab-case identifiers.",
    ],

    aboutTool:
      "Slug quality helps users understand a URL before they click it, but it is only one small SEO signal. Keep important keywords in the slug, remove unnecessary words manually when needed, and avoid changing published slugs unless you also set up redirects from the old URL.",

    proTip:
      "After generating a slug, read it once without the page title. If the slug still makes sense on its own and is not too long, it is usually a good URL candidate.",

    faqs: [
      {
        question: "What is a slug in a URL?",
        answer:
          "A slug is the readable part of a URL path, such as how-to-create-url-slugs in /blog/how-to-create-url-slugs.",
      },
      {
        question: "Should URL slugs use hyphens or underscores?",
        answer:
          "Hyphens are the safer default for public URLs because they make words visibly separate. This tool converts underscores to hyphens.",
      },
      {
        question: "Does this remove accents?",
        answer:
          "Yes, common Latin accents and combining marks are normalized before the slug is cleaned. Some non-Latin scripts may be removed rather than transliterated.",
      },
      {
        question: "Does slugifying guarantee better rankings?",
        answer:
          "No. A clear slug helps readability and page context, but rankings depend on content quality, links, technical SEO, and search intent match.",
      },
      {
        question: "Can I use this for filenames?",
        answer:
          "Yes. The output is useful for readable filenames, route names, and IDs, but you should still check any system-specific filename restrictions.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SlugifyStringPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SlugifyString />
        </div>
      )}
    />
  )
}
