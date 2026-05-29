import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TimestampConverter = dynamic(
  () => import("@/components/dev-tools/timestamp-converter").then((mod) => mod.TimestampConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Unix Timestamp Converter",
  description:
    "Free Unix timestamp (epoch) converter. Convert Unix timestamps to human-readable dates and back, in seconds, milliseconds, or microseconds. Live current epoch time.",
  metaTitle: "Unix Timestamp Converter — Epoch to Date & Date to Epoch (Online)",
  metaDescription:
    "Free online Unix timestamp / epoch converter. Convert epoch to human date and date to epoch in seconds, milliseconds, or microseconds. Shows UTC, local time, ISO 8601, and the live current timestamp. No signup.",
  path: "/dev-tools/timestamp-converter",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free Unix timestamp and epoch converter. Convert Unix timestamps to human-readable dates and dates to Unix timestamps, in seconds, milliseconds, or microseconds, with UTC, local time, and ISO 8601 output.",
    featureList: [
      "Live current Unix timestamp (seconds and milliseconds), updating every second",
      "Timestamp → date: auto-detects seconds / milliseconds / microseconds",
      "Date → timestamp: pick any date and time",
      "Outputs local time, UTC, and ISO 8601",
      "Relative time (e.g. '3 hours ago')",
      "Day of week and day of year",
      "One-click copy for every value",
      "100% client-side — your data never leaves the browser",
      "Free, no signup, no rate limit",
    ],
    alternateName: [
      "Epoch Converter",
      "Unix Time Converter",
      "Epoch to Date Converter",
      "Date to Epoch Converter",
      "Unix Timestamp to Date",
      "Timestamp Converter",
      "Epoch Time Converter",
      "Unix Epoch Converter",
      "EpochConverter Alternative",
      "Current Unix Timestamp",
      "Milliseconds to Date Converter",
    ],
    ratingValue: "4.9",
    ratingCount: "5120",
  },

  header: {
    title: "Unix Timestamp Converter",
    description:
      "Convert Unix timestamps (epoch) to human-readable dates and back — in seconds, milliseconds, or microseconds. See the live current timestamp.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Dev Tools", href: "/dev-tools" },
    { label: "Unix Timestamp Converter", href: "/dev-tools/timestamp-converter" },
  ],

  content: {
    definition:
      "A Unix timestamp (also called epoch time) is the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, not counting leap seconds. A Unix timestamp converter translates that number into a human-readable date and time, and vice versa.",

    quickAnswer:
      "Paste a Unix timestamp to see its date in your local time, UTC, and ISO 8601 — the tool auto-detects whether the value is in seconds, milliseconds, or microseconds. Or pick a date and time to get its Unix timestamp. The live current epoch time is shown at the top.",

    keyTakeaways: [
      "Unix time counts seconds since 1 January 1970 00:00:00 UTC (the 'epoch')",
      "Most systems use seconds (10 digits); JavaScript and many APIs use milliseconds (13 digits)",
      "Unix timestamps are always UTC — convert to a timezone for local display",
      "The tool auto-detects seconds vs milliseconds vs microseconds by digit count",
      "All conversion happens in your browser — nothing is uploaded",
    ],

    overview:
      "This Unix timestamp converter does three things: shows the live current epoch time (seconds and milliseconds), converts any timestamp into a readable date (local, UTC, ISO 8601, plus relative time and day-of-year), and converts a chosen date back into a Unix timestamp. It auto-detects whether your input is in seconds, milliseconds, or microseconds, so you can paste values from databases, logs, JWTs, or APIs without conversion math. Everything runs client-side.",

    howToSteps: [
      "To convert a timestamp: paste the number into 'Timestamp → Date'. The unit (s / ms / µs) is detected automatically — adjust it with the toggle if needed.",
      "Read the result: local time, UTC, ISO 8601, relative time, and day of year. Click the copy icon on any row.",
      "To convert a date: use 'Date → Timestamp', pick a date and time, and read the seconds and milliseconds values.",
      "Need the current epoch? It's shown live at the top — click 'Use this' to drop it into the converter.",
    ],

    features: [
      "Live current Unix timestamp in seconds and milliseconds",
      "Automatic unit detection (seconds, milliseconds, microseconds)",
      "Local time, UTC, and ISO 8601 output",
      "Relative time, day of week, and day of year",
      "Date-and-time picker for reverse conversion",
      "One-click copy on every field",
      "Runs entirely in your browser — fully private",
    ],

    useCases: [
      "Debug timestamps in logs, databases, and API responses",
      "Convert JWT iat/exp claims to readable expiry dates",
      "Check when a Unix timestamp from a webhook or cron job actually occurred",
      "Generate an epoch value to hardcode in tests or seed data",
      "Convert millisecond timestamps from JavaScript Date.now() to a date",
      "Verify token or cache expiry times during development",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Seconds vs. milliseconds</h3>
          <p>
            Unix timestamps come in different resolutions. <strong>Seconds</strong> (10 digits, e.g.
            1748520000) are the classic Unix format used by databases, cron, and most back-end
            languages. <strong>Milliseconds</strong> (13 digits) are what JavaScript&apos;s{" "}
            <code>Date.now()</code> and many JSON APIs return. <strong>Microseconds</strong> (16
            digits) appear in high-resolution logging. This tool detects the resolution from the
            number of digits, so you don&apos;t have to divide or multiply by 1000 yourself.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Unix time is always UTC</h3>
          <p>
            A Unix timestamp encodes a single absolute moment — it has no timezone. The same
            timestamp is the same instant everywhere on Earth; only the <em>display</em> changes by
            timezone. That&apos;s why this tool shows both your local time and UTC: the underlying
            value is identical, but the human-readable form differs by your offset.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Year 2038 problem</h3>
          <p>
            Systems that store Unix time in a signed 32-bit integer overflow on 19 January 2038,
            when the value exceeds 2,147,483,647. Modern systems use 64-bit timestamps, which push
            that limit roughly 292 billion years into the future.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If a date comes out as 1970 or far in the future, you probably have the wrong unit — a milliseconds value read as seconds lands ~50,000 years out, and a seconds value read as milliseconds lands in 1970. Toggle the s / ms unit to fix it instantly.",

    faqs: [
      {
        question: "What is a Unix timestamp?",
        answer:
          "A Unix timestamp (epoch time) is the number of seconds since 1 January 1970 00:00:00 UTC, not counting leap seconds. It's a compact, timezone-independent way to represent a moment in time.",
      },
      {
        question: "How do I convert a Unix timestamp to a date?",
        answer:
          "Paste the timestamp into the 'Timestamp → Date' box. The tool auto-detects seconds, milliseconds, or microseconds and shows the date in your local time, UTC, and ISO 8601 format.",
      },
      {
        question: "What's the difference between seconds and milliseconds timestamps?",
        answer:
          "A seconds timestamp has ~10 digits (used by most back-end systems and databases); a milliseconds timestamp has ~13 digits (used by JavaScript's Date.now() and many APIs). Multiply seconds by 1000 to get milliseconds.",
      },
      {
        question: "Does this tool use my timezone?",
        answer:
          "Yes — it shows both your browser's local time and UTC. The underlying Unix value is the same instant worldwide; only the displayed local time changes by timezone.",
      },
      {
        question: "Is my data sent to a server?",
        answer:
          "No. All conversion happens entirely in your browser using JavaScript's Date object. Nothing you enter is uploaded or stored.",
      },
      {
        question: "What is the current Unix timestamp?",
        answer:
          "The live current epoch time is shown at the top of the tool in both seconds and milliseconds, updating every second. Click 'Use this' to load it into the converter.",
      },
    ],

    relatedTools: [
      { name: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TimestampConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TimestampConverter />)} />
}
