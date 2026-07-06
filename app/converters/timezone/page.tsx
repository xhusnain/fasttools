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
    "Convert time across 20+ global time zones including UTC, EST, PST, CST, IST, JST, AEST, CET, and GMT with daylight saving awareness and 12/24-hour format support.",
  metaTitle: "Time Zone Converter -- Convert UTC EST PST IST JST Times Free",
  metaDescription:
    "Free time zone converter for 20+ global zones. Instantly convert between UTC, EST, PST, CST, IST, JST, AEST, CET, and GMT. AM/PM and 24-hour toggle, auto-detect local time, no signup required.",
  path: "/converters/timezone",

  header: {
    title: "Time Zone Converter",
    description:
      "Convert time instantly between UTC, EST, PST, CST, IST, JST, AEST, CET, and GMT. Compare multiple time zones side by side with AM/PM and 24-hour format support for global scheduling.",
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
      "Free online time zone converter supporting UTC, EST, PST, CST, IST, JST, AEST, CET, GMT and more with instant multi-zone comparison.",
    alternateName: ["Global Time Converter", "Timezone Calculator", "World Clock Converter", "UTC Time Converter"],
    featureList: [
      "20+ major timezone support including UTC, EST, PST, CST, IST, JST",
      "Live real-time conversion output across all selected zones",
      "AM/PM and 24-hour military time display toggle",
      "Auto-detect and use current local time",
      "Side-by-side multi-zone comparison view",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Time Zone Converter is a free online tool that converts time between 20+ major global time zones including UTC, EST, PST, CST, IST, JST, AEST, CET, and GMT with instant multi-zone comparison and daylight saving time awareness.",
    quickAnswer:
      "Select a source time zone, enter the time, and choose one or more target zones to see the converted time instantly. Supports AM/PM and 24-hour military time formats. Ideal for scheduling international meetings, coordinating remote teams across continents, and planning travel itineraries across multiple time zones.",
    keyTakeaways: [
      "Converts between UTC, EST, PST, CST, MST, IST, JST, AEST, CET, GMT, and 10+ additional zones",
      "UTC (Coordinated Universal Time) is the global reference standard -- all zones are offsets from UTC",
      "Common offsets: EST is UTC-5, PST is UTC-8, CST is UTC-6, IST is UTC+5:30, JST is UTC+9, AEST is UTC+10",
      "Daylight saving time shifts apply seasonally in many regions (e.g., EST to EDT, PST to PDT, CET to CEST)",
      "Essential for remote team scheduling, international client calls, and cross-timezone project management",
    ],
    overview:
      "This free time zone converter lets you compare and convert time across 20+ major global time zones using precise GMT/UTC offset calculations. Whether you need to convert UTC to EST, PST to IST, or compare CET with JST for international meeting scheduling, this tool provides instant side-by-side time zone comparison. It supports both 12-hour AM/PM and 24-hour military time formats, auto-detects your current local time for quick reference, and handles daylight saving time transitions. Perfect for distributed teams, freelancers working with international clients, digital nomads planning travel, and anyone coordinating across multiple time zones worldwide.",

    howToSteps: [
      "Enter the time you want to convert or click the auto-detect button to use your current local time as the starting point.",
      "Select the source time zone from the dropdown menu -- choose from UTC, EST, PST, CST, IST, JST, AEST, CET, GMT, and more.",
      "View all converted times displayed simultaneously across every supported target time zone for instant comparison.",
      "Toggle between AM/PM (12-hour) and 24-hour military time format using the display switch to match your preference.",
      "Use the reset button to clear all inputs and start a new time zone conversion quickly.",
    ],

    features: [
      "20+ major time zone support including UTC, EST, PST, CST, MST, IST, JST, KST, AEST, CET, and GMT",
      "Instant multi-zone converted time display with real-time updates",
      "AM/PM (12-hour) and 24-hour military time format toggle",
      "One-click current local time auto-detection and autofill",
      "Quick reset for rapid successive time zone conversions",
      "Fully responsive mobile-friendly interface for on-the-go time checking",
    ],

    useCases: [
      "Scheduling international conference calls and virtual meetings across UTC, EST, PST, IST, and other zones",
      "Finding overlapping work hours between distributed remote teams in different continents",
      "Converting UTC timestamps from server logs, APIs, and databases to local time zones",
      "Planning international travel itineraries with accurate arrival and departure times",
      "Coordinating global product launches, webinars, and live events across multiple time zones",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Time zones divide the world into regions that observe a uniform standard
          time, each defined as an offset from Coordinated Universal Time (UTC).
          There are over 30 standard time zones globally, ranging from UTC-12 to
          UTC+14, with some zones using half-hour or quarter-hour offsets like
          India Standard Time (IST at UTC+5:30) and Nepal Standard Time (UTC+5:45).
        </p>
        <p>
          Understanding time zone conversions is critical for modern global work.
          When converting between EST (Eastern Standard Time, UTC-5) and PST
          (Pacific Standard Time, UTC-8), there is always a 3-hour difference.
          Converting UTC to IST means adding 5 hours and 30 minutes. JST (Japan
          Standard Time, UTC+9) is 14 hours ahead of EST during standard time.
          These offsets shift during daylight saving time -- EST becomes EDT (UTC-4)
          and PST becomes PDT (UTC-7) between March and November in North America.
        </p>
        <p>
          This free time zone converter eliminates the mental math by showing all
          conversions simultaneously. It is designed for software developers
          working with UTC timestamps, remote team managers scheduling standups,
          international sales teams booking client calls, and travelers planning
          trips across multiple time zones. All processing runs in your browser
          with zero data sent to any server.
        </p>
      </div>
    ),

    proTip:
      "Always include both the local time and UTC equivalent in meeting invitations and calendar events. Use the format '10:00 AM EST (15:00 UTC)' to eliminate ambiguity, especially during daylight saving time transitions when offsets change.",

    faqs: [
      {
        question: "Which time zones does this free converter support?",
        answer:
          "This converter supports 20+ major global time zones including UTC, EST (Eastern), CST (Central), MST (Mountain), PST (Pacific), IST (India), JST (Japan), KST (Korea), AEST (Australia Eastern), CET (Central European), GMT (Greenwich Mean Time), and more. All zones are defined by their UTC offset for precise conversion.",
      },
      {
        question: "How do I convert UTC to EST or PST?",
        answer:
          "To convert UTC to EST, subtract 5 hours (UTC-5). To convert UTC to PST, subtract 8 hours (UTC-8). During daylight saving time, EST becomes EDT (UTC-4) and PST becomes PDT (UTC-7). This converter handles these offsets automatically -- simply select UTC as your source zone and read the EST/PST values from the results.",
      },
      {
        question: "Does this time zone converter handle daylight saving time (DST)?",
        answer:
          "The converter uses fixed GMT/UTC offsets for each time zone. Be aware that regions observing daylight saving time shift their clocks -- for example, the US Eastern zone moves from EST (UTC-5) to EDT (UTC-4) in spring. Check the current DST status of your target region for the most accurate conversion.",
      },
      {
        question: "Can I toggle between AM/PM and 24-hour military time?",
        answer:
          "Yes. The converter includes a display toggle that switches between 12-hour AM/PM format and 24-hour military time format. This is particularly useful for international coordination where different countries prefer different time display conventions.",
      },
      {
        question: "How do I use my current local time as the starting point?",
        answer:
          "Click the auto-detect button to instantly fill in your current local time based on your browser's system clock. This saves time when you need to quickly check what the current time is in other zones around the world.",
      },
      {
        question: "What is the difference between UTC and GMT?",
        answer:
          "UTC (Coordinated Universal Time) and GMT (Greenwich Mean Time) represent the same time in practice -- both are at zero offset. However, UTC is the modern international standard used in computing, aviation, and science, while GMT is the traditional time zone name. UTC is defined by atomic clocks, making it more precise than GMT which was historically based on solar time at the Royal Observatory in Greenwich, London.",
      },
      {
        question: "Is this time zone converter completely free?",
        answer:
          "Yes. This time zone converter is 100% free with no signup, no account required, and no usage limits. All conversions run entirely in your browser -- no data is sent to any server, ensuring complete privacy for your scheduling and planning activities.",
      },
    ],

    relatedTools: [
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Unix Timestamp Converter", href: "/dev-tools/timestamp-converter" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TimezoneConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TimezoneConverter />)} />
}
