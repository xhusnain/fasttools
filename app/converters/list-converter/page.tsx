import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ListConverter = dynamic(
  () => import("@/components/converters/list-converter").then((mod) => mod.ListConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "List Converter",
  description:
    "Convert between comma-separated and line-separated lists with options for trim, dedupe, sort, and wrapping.",
  metaTitle: "List Converter — Comma to Line, Sort, Dedupe, Format Lists Free",
  metaDescription:
    "Free list converter to transform comma-separated values to newlines, remove duplicates, sort alphabetically, trim whitespace, and add prefix/suffix wrapping. Convert CSV columns, SQL IN clauses, and array data instantly — no signup required.",
  path: "/converters/list-converter",

  header: {
    title: "List Converter",
    description:
      "Convert between comma-separated, newline-separated, tab-separated, and pipe-delimited lists with built-in trim, deduplication, sorting, case conversion, and prefix/suffix wrapping. Perfect for SQL IN clauses, CSV column prep, array formatting, and spreadsheet data cleanup.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "List Converter", href: "/converters/list-converter" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "List formatting tool for separator conversion, sorting, deduplication, and wrapping.",
    alternateName: [
      "Text List Converter",
      "Comma Separated List Tool",
      "List to CSV",
      "CSV to List",
      "Newline to Comma Converter",
    ],
    featureList: [
      "List separator conversion",
      "Trim and deduplicate items",
      "Sort options",
      "Prefix/suffix wrapping",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A List Converter is a free tool that transforms, cleans, and reformats text lists by changing separators, removing duplicates, sorting, and applying formatting rules.",
    quickAnswer:
      "Paste your list, choose input and output separators (comma, newline, tab, pipe, etc.), and apply optional transforms like deduplication, sorting, trimming, or case conversion. Copy the cleaned result instantly.",
    keyTakeaways: [
      "Converts between comma, newline, tab, pipe, and custom separators",
      "Removes duplicate entries with one click",
      "Sorts alphabetically, numerically, or by length",
      "Trims whitespace and applies case formatting",
      "Useful for SQL IN clauses, CSV prep, and spreadsheet imports",
    ],
    overview:
      "This free list converter transforms, cleans, and reformats text lists by converting between separators (comma, newline, tab, pipe, semicolon, or custom delimiters), removing duplicate entries, sorting alphabetically or numerically, trimming whitespace, and applying prefix/suffix wrapping to individual items or the entire list. It is essential for developers building SQL IN clauses from spreadsheet columns, data analysts preparing CSV data for import, programmers formatting arrays for JavaScript, Python, or JSON, and content teams cleaning tag lists or keyword sets. Paste a column of values from Excel and convert to a comma-separated string, or take a comma list and split it into individual lines — all processing happens instantly in your browser with no data uploaded.",

    howToSteps: [
      "Paste your source list into the input panel — supports comma-separated values, one-per-line entries, tab-separated data, or any custom delimiter.",
      "Select input and output separators to convert between formats (e.g., comma to newline, tab to pipe, newline to comma).",
      "Enable optional transforms: trim whitespace, remove duplicates, sort alphabetically/numerically/by length, and convert case.",
      "Add prefix and suffix wrapping to individual items (e.g., wrap each item in single quotes for SQL) or to the entire list.",
      "Copy the cleaned, formatted result with one click for immediate use in code, spreadsheets, databases, or documentation.",
    ],

    features: [
      "Convert between comma, newline, tab, pipe, semicolon, and custom separator formats with one click",
      "Trim leading and trailing whitespace from each list item automatically",
      "Remove duplicate entries with case-sensitive or case-insensitive deduplication",
      "Sort alphabetically (A-Z or Z-A), numerically (ascending/descending), or by string length",
      "Add prefix and suffix wrapping to each item (quotes, brackets, HTML tags) or the entire output list",
      "Preserve or collapse empty lines and control line break handling in the output",
    ],

    useCases: [
      "SQL query building — convert a column of IDs into a comma-separated SQL IN clause with quoted values: IN ('val1', 'val2', 'val3')",
      "CSV and spreadsheet prep — convert one-per-line entries to comma-separated values for CSV import, or split comma lists into columns",
      "Programming array formatting — transform lists into JavaScript arrays, Python lists, JSON arrays, or PHP array syntax with proper quoting",
      "Data deduplication — paste a list with duplicates and instantly get unique values only, sorted if needed",
      "Content and SEO workflows — clean keyword lists, merge tag sets, remove duplicates, and format for CMS import",
      "Clipboard data cleanup — paste messy copied data from emails, PDFs, or web pages and get clean, formatted list output",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Why List Formatting Matters for Developers and Data Teams
          </h3>
          <p>
            List data constantly moves between different formats across development and data workflows. A column of values copied from Excel needs to become a comma-separated SQL IN clause. An API response array needs to be reformatted for a spreadsheet import. A CSV export needs deduplication before loading into a database. Manually reformatting these lists is tedious and error-prone — especially with hundreds or thousands of items. This list converter automates the entire process: separator conversion, whitespace trimming, duplicate removal, sorting, and wrapping.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Common List Format Conversions
          </h3>
          <p>
            The most common list transformations include: comma-separated values (CSV) to newline-separated (one per line), newline to comma for SQL IN clauses, tab-separated values (TSV) to comma or pipe-delimited, and adding quote wrapping for string literals. For SQL, wrapping each item in single quotes and joining with commas creates a ready-to-use IN clause. For JSON arrays, wrapping in double quotes and adding square brackets produces valid syntax. For Python lists, the same pattern works with square brackets and quotes.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For SQL IN clauses, set the item prefix to a single quote, item suffix to a single quote, and output separator to comma-space. Enable trim and dedupe first to ensure clean, unique values. The output will be ready to paste directly into your WHERE column IN (...) clause.",

    faqs: [
      {
        question: "How do I convert a comma-separated list to one item per line?",
        answer:
          "Paste your comma-separated values into the input panel, set the input separator to 'comma' and the output separator to 'newline'. The tool instantly splits each comma-delimited item onto its own line. Enable 'trim' to remove any extra whitespace around items.",
      },
      {
        question: "How do I convert a column of values into a comma-separated string?",
        answer:
          "Paste your one-per-line items (e.g., copied from Excel or a text file), set the input separator to 'newline' and the output separator to 'comma'. The tool joins all items into a single comma-separated string. Add quotes around each item using the prefix/suffix options for SQL or code use.",
      },
      {
        question: "Can this list converter remove duplicate entries?",
        answer:
          "Yes. Enable the 'Remove Duplicates' option to automatically deduplicate your list. The tool compares items and keeps only unique entries. Combined with trim (to normalize whitespace) and sort, this produces a clean, alphabetized list of unique values.",
      },
      {
        question: "How do I format a list for a SQL IN clause?",
        answer:
          "Paste your values, set the item prefix to a single quote ('), item suffix to a single quote ('), and output separator to comma. Enable trim and dedupe for clean data. The output will be formatted like 'value1','value2','value3' — ready to paste into your SQL WHERE column IN (...) query.",
      },
      {
        question: "What separator formats does the list converter support?",
        answer:
          "The tool supports comma, newline (line break), tab, pipe (|), semicolon (;), space, and custom delimiters for both input and output. You can convert between any combination — for example, tab-separated to comma-separated, or pipe-delimited to one-per-line.",
      },
      {
        question: "Can I sort the list items alphabetically or numerically?",
        answer:
          "Yes. The tool offers multiple sort options: alphabetical A-Z, reverse alphabetical Z-A, numeric ascending, numeric descending, and sort by string length. Sorting is applied after trim and deduplication for the cleanest results.",
      },
      {
        question: "Is this list converter free and private?",
        answer:
          "Yes. This list converter is completely free with no signup, no account, and no usage limits. All processing happens in your browser — no data is uploaded to any server, making it safe for sensitive data like customer IDs, email lists, and internal codes.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Text to Unicode", href: "/converters/unicode" },
      { name: "Roman Numeral Converter", href: "/converters/roman-numeral" },
      { name: "Text to ASCII Binary", href: "/converters/ascii-binary" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/url-slug-generator" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ListConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <ListConverter />
        </div>
      )}
    />
  )
}
