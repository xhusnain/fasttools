import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const TimezoneConverter = dynamic(
  () => import("@/components/converters/timezone-converter").then((mod) => mod.TimezoneConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Time Zone Converter",
  description:
    "Convert time across major GMT-offset zones including UTC, EST, PST, IST, JST, AEST, CET, and GMT.",
  metaTitle: "Time Zone Converter (UTC, EST, PST, IST, JST)",
  metaDescription:
    "Free time zone converter for major global zones. Convert time instantly between UTC, EST, PST, IST, JST, AEST, CET, and GMT.",
  path: "/converters/timezone",
  keywords: [
    "time zone converter",
    "utc converter",
    "est to ist converter",
    "pst to gmt converter",
    "global time converter",
    "timezone calculator",
  ],

  header: {
    title: "Time Zone Converter",
    description:
      "Quickly compare time across major zones using GMT-offset conversion.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Time Zone Converter", href: "/converters/timezone" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "GMT-offset based time zone conversion tool for major global zones.",
    alternateName: ["Global Time Converter", "Timezone Calculator"],
    featureList: [
      "Major timezone support",
      "Live conversion output",
      "AM/PM and 24-hour display toggle",
      "Use current local time",
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
      "A Time Zone Converter is a free tool that converts time between major global zones including UTC, EST, PST, IST, JST, AEST, CET, and GMT.",
    quickAnswer:
      "Select a source time zone, enter the time, and choose one or more target zones to see the converted time instantly. Useful for scheduling meetings, coordinating across teams, and travel planning.",
    keyTakeaways: [
      "Converts between UTC, EST, PST, IST, JST, AEST, CET, GMT, and more",
      "UTC is the global reference standard — all zones are offsets from UTC",
      "EST is UTC−5, PST is UTC−8, IST is UTC+5:30, JST is UTC+9",
      "Daylight saving shifts apply in some regions (e.g., EST → EDT)",
      "Ideal for remote team scheduling and international coordination",
    ],
    overview:
      "This converter helps you compare time across major global zones using fixed GMT offsets. It is useful for quick meeting checks, international communication, and travel planning.",

    howToSteps: [
      "Set the source time value.",
      "Choose the source timezone.",
      "View converted times for all listed target zones.",
      "Switch display between AM/PM and 24-hour format if needed.",
    ],

    features: [
      "Support for UTC, EST, PST, IST, JST, AEST, CET, and GMT",
      "Instant converted-time list",
      "AM/PM and 24-hour toggle",
      "Current-time autofill button",
      "Reset option for fast re-entry",
      "Mobile-friendly UI",
    ],

    useCases: [
      "Scheduling calls across time zones",
      "Checking international team overlap",
      "Comparing UTC reference times",
      "Planning travel communication windows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Time-zone confusion often causes missed calls and deadline mistakes.
          This tool gives a quick side-by-side view of major zones so you can
          plan communications faster.
        </p>
      </div>
    ),

    proTip:
      "For official meeting invites, include both local time and UTC to avoid ambiguity.",

    faqs: [
      {
        question: "Which time zones are included?",
        answer:
          "The tool includes UTC, EST, PST, IST, JST, AEST, CET, and GMT.",
      },
      {
        question: "Can I switch between AM/PM and 24-hour format?",
        answer: "Yes. Use the display toggle button in the converter UI.",
      },
      {
        question: "Can I use my current local time quickly?",
        answer: "Yes. Use the current-time button to auto-fill time input.",
      },
      {
        question: "Does this converter support quick reset?",
        answer: "Yes. Reset clears time and restores default settings.",
      },
      {
        question: "Is this time zone converter free?",
        answer: "Yes. It is free and requires no signup.",
      },
    ],

    relatedTools: [
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TimezoneConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TimezoneConverter />)} />
}
