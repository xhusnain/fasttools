import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ListConverter = dynamic(
  () =>
    import("@/components/converters/list-converter").then(
      (mod) => mod.ListConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "List Converter",
  description:
    "Free list converter online. Text to list, comma separated list converter. Convert column to comma list, list to columns. Array to list. Excel column to comma. No signup.",
  metaTitle: "List Converter Online - Comma Separated, Text to List, Excel Free",
  metaDescription:
    "Free list converter online. Text to list converter, comma separated list converter. Convert comma separated list to column in Excel, list to columns. Array to list. Convert to list online. No signup.",
  path: "/converters/list-converter",
  keywords: [
    "list converter online",
    "text to list converter",
    "comma separated list converter",
    "convert comma separated list to column in excel",
    "list to columns",
    "comma-separated list example",
    "convert comma separated list to rows",
    "array to list converter",
    "convert to list online",
    "list to comma separated string c#",
  ],

  header: {
    title: "List converter",
    description:
      "Process column-based data and apply various changes (transpose, add prefix and suffix, reverse list, sort list, lowercase values, truncate values) to each row.",
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
      "Free list converter online. Text to list, comma separated list converter. Convert column to comma list, list to columns. Array to list.",
    alternateName: [
      "List Converter Online",
      "List Converter",
      "Text to List Converter",
      "Comma Separated List Converter",
      "Array to List Converter",
    ],
    featureList: [
      "Text to list converter",
      "Comma separated list converter",
      "Convert column to comma list",
      "List to columns",
      "Sort, trim, remove duplicates",
      "Add prefix and suffix",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free list converter online. Text to list converter, comma separated list converter. Convert comma separated list to column in Excel, list to columns. Array to list. Sort, trim, remove duplicates, add prefix/suffix. Paste column data from Excel for instant conversion. No signup required.",

    howToSteps: [
      "Paste your list or column data in the Your input data panel.",
      "Choose options: trim items, remove duplicates, sort, separator, prefix/suffix.",
      "Your transformed data appears in the right panel. Copy with one click.",
    ],

    features: [
      "Trim list items: Remove leading/trailing spaces",
      "Remove duplicates: Deduplicate list items",
      "Sort: Alphabetically A-Z, Z-A, numerically, or reverse",
      "Separator: Comma, newline, or custom delimiter",
      "Wrap item: Add prefix and suffix to each item",
      "Wrap list: Add prefix and suffix to entire list",
    ],

    useCases: [
      "Excel: Convert column to comma separated list or list to columns.",
      "C#: Create list to comma separated string for code.",
      "Data prep: Clean, sort, and format lists before import.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          This list converter processes column-based data and applies changes
          like trim, remove duplicates, sort, add prefix/suffix, and change
          separators. Paste from Excel, CSV, or text—convert comma separated
          list to column format or column to comma list. Supports list to comma
          separated string for C# and other programming use cases.
        </p>
      </div>
    ),

    proTip:
      "For Excel: copy a column, paste in the input. Toggle Keep line breaks for column output, or use comma separator for a single comma-separated row.",

    faqs: [
      {
        question: "How do I convert comma separated list to column in Excel?",
        answer:
          "Paste your comma-separated list in the input. Enable Keep line breaks so each item appears on a new line. Copy the output and paste into an Excel column. This free list converter online does the job instantly.",
      },
      {
        question: "How do I convert column to comma separated list?",
        answer:
          "Copy your Excel column, paste into the input. Leave Keep line breaks OFF and set Separator to comma. The output is a comma-separated list. Copy and use in formulas, CSV, or code.",
      },
      {
        question: "What is a comma-separated list example?",
        answer:
          "A comma-separated list example: apple, banana, cherry. Use this list converter to create comma-separated lists from column data, or split a comma list into columns. Supports custom separators.",
      },
      {
        question: "How to convert list to comma separated string in C#?",
        answer:
          "For C# list to comma separated string: paste your list items (one per line or comma-separated), set Separator to \", \", copy output. Or use string.Join in C#. This tool helps you preview the result before coding.",
      },
      {
        question: "Is there an array to list converter online?",
        answer:
          "Yes. This free array to list converter online accepts text lists and transforms them. Add quotes with Item prefix/suffix for JavaScript/Python arrays. Sort, trim, remove duplicates. No signup.",
      },
      {
        question: "Is this list converter free?",
        answer:
          "Yes. This list converter is 100% free. All processing runs in your browser—no data is sent to servers. No signup required. Use for Excel, C#, data prep, or any list conversion.",
      },
    ],

    additionalContent: [
      {
        heading: "Text to List Converter",
        content:
          "Use this text to list converter to split text into a list or combine lists into text. Paste paragraph text—split by spaces, commas, or newlines. Apply trim, sort, remove duplicates. Convert to list online in seconds.",
      },
      {
        heading: "List to Columns & Column to List",
        content:
          "Convert list to columns: enable Keep line breaks for one item per line (Excel column). Convert column to comma list: paste column data, set separator to comma. Supports convert comma separated list to rows or columns. Free and client-side.",
      },
      {
        heading: "Comma Separated List Converter",
        content:
          "This comma separated list converter handles both directions. Paste comma-separated values to get a column list, or paste column data to get comma-separated output. Custom separator supported. Ideal for CSV, Excel, and data imports.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ListConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ListConverter />
        </div>
      )}
    />
  )
}
