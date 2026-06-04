import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const CronExpressionGenerator = dynamic(
  () => import("@/components/dev-tools/cron-expression-generator").then((mod) => mod.CronExpressionGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Cron Expression Generator",
  description:
    "Build and explain standard 5-field cron expressions with a visual selector, quick presets, next run times, and copy-ready output.",
  metaTitle: "Cron Expression Generator - 5-Field Crontab Builder | FastTools",
  metaDescription:
    "Free cron expression generator for standard 5-field crontab syntax. Use presets, edit fields, read the English description, preview the next 10 local run times, and copy the expression.",
  path: "/dev-tools/cron-expression-generator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Standard 5-field cron expression generator with visual selectors, quick presets, English schedule description, next 10 local run times, syntax reference, and copy button.",
    featureList: [
      "Standard 5-field cron builder: minute, hour, day of month, month, day of week",
      "Manual cron input synced with visual selectors",
      "English schedule description",
      "Next 10 run time preview in the browser's local timezone",
      "27 quick presets across interval, daily, business, weekly, monthly, and yearly schedules",
      "Syntax reference for *, /, -, and comma",
      "One-click copy",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Crontab Generator",
      "Cron Builder",
      "Cron Schedule Generator",
      "Cron Expression Parser",
      "Cron to English Translator",
      "Cron Schedule Calculator",
      "Cronjob Generator",
      "Linux Cron Calculator",
      "Kubernetes CronJob Helper",
      "GitHub Actions Schedule Helper",
      "Cloudflare Workers Cron Helper",
    ],
    ratingValue: "4.9",
    ratingCount: "9420",
  },

  header: {
    title: "Cron Expression Generator",
    description:
      "Build standard 5-field cron expressions visually or type them directly. Check the English description, preview the next local run times, and copy the schedule.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
  ],

  content: {
    definition:
      "A cron expression generator helps you create a recurring schedule string made of five fields: minute, hour, day of month, month, and day of week.",

    quickAnswer:
      "Use the selectors or presets to build a 5-field expression such as 0 9 * * 1-5, then verify the English description and next 10 run times before copying it into crontab, a Kubernetes CronJob, GitHub Actions, or another scheduler that accepts 5-field cron syntax.",

    keyTakeaways: [
      "This tool targets standard 5-field cron syntax: minute hour day-of-month month day-of-week.",
      "It previews the next 10 run times in your browser's local timezone.",
      "It supports common cron operators: *, /, -, and comma-separated lists.",
      "It does not generate Quartz seconds/year fields, AWS EventBridge 6-field expressions, or special tokens such as ?, L, W, and #.",
      "Schedulers vary on timezone and day-field behavior, so confirm the final expression against your deployment platform.",
    ],

    overview:
      "This cron expression generator is built for everyday crontab-style schedules: every few minutes, hourly jobs, daily backups, weekday tasks, monthly jobs, quarterly jobs, and yearly jobs. You can choose values from visual dropdowns, paste a five-field expression manually, filter quick presets by category, and copy the final expression. The next-run preview is useful for catching common mistakes such as putting weekdays in the day-of-month field or scheduling a job at UTC midnight when you expected local midnight.",

    howToSteps: [
      "Select values for minute, hour, day of month, month, and day of week, or type a 5-field cron expression directly.",
      "Read the generated English description to confirm the schedule.",
      "Review the next 10 run times shown in your browser's local timezone.",
      "Use a preset if you need a common schedule such as every 5 minutes, weekdays at 9 AM, monthly, quarterly, or yearly.",
      "Copy the expression and paste it into the scheduler that accepts your chosen cron format.",
    ],

    features: [
      {
        title: "Visual 5-Field Builder",
        description:
          "Use dropdown controls for minute, hour, day of month, month, and day of week while watching the expression update live.",
      },
      {
        title: "Manual Input and Description",
        description:
          "Type a standard five-part expression and the builder syncs the fields when possible, with an English description for quick review.",
      },
      {
        title: "Next Run Time Preview",
        description:
          "See the next 10 predicted execution times in the browser's local timezone, with common Unix day-of-month/day-of-week OR behavior when both fields are restricted.",
      },
      {
        title: "Quick Presets",
        description:
          "Load common schedules across interval, daily, business-hours, weekly, monthly, and yearly categories.",
      },
      {
        title: "Cron Syntax Reference",
        description:
          "Review the meaning of *, comma lists, ranges, and step values without leaving the tool.",
      },
    ],

    useCases: [
      "Schedule Linux or Unix crontab jobs.",
      "Prepare Kubernetes CronJob schedules that use five-field syntax.",
      "Create GitHub Actions workflow schedules, then convert to UTC if needed.",
      "Build Cloudflare Workers cron trigger expressions.",
      "Check recurring backup, report, cleanup, and cache-warming jobs before deployment.",
    ],

    aboutTool:
      "Cron syntax looks compact, but small field mistakes can change a schedule dramatically. This tool keeps the workflow focused on the standard five fields because that is the format used by many crontab-style schedulers. It is not a Quartz, Spring, or EventBridge expression builder; those systems may add seconds, year fields, or extra special characters.",

    proTip:
      "If a scheduler runs in UTC, convert your desired local time before saving the cron expression. A 9 AM local report can become a completely different hour when the platform interprets the schedule in UTC.",

    faqs: [
      {
        question: "What is a cron expression?",
        answer:
          "A cron expression is a compact schedule made from fields for minute, hour, day of month, month, and day of week.",
      },
      {
        question: "What does * * * * * mean?",
        answer:
          "It runs every minute because every field is set to any value.",
      },
      {
        question: "How do I run a job every 5 minutes?",
        answer:
          "Use */5 * * * *. The */5 in the minute field matches minutes 0, 5, 10, 15, and so on.",
      },
      {
        question: "Can this generate Quartz or AWS EventBridge cron?",
        answer:
          "No. This tool is for standard five-field cron syntax. Quartz and EventBridge use different field counts and special characters, so check those platform docs separately.",
      },
      {
        question: "What timezone does the preview use?",
        answer:
          "The preview uses your browser's local timezone. Your server, CI provider, or cloud scheduler may use UTC or a configured timezone.",
      },
      {
        question: "What happens if day of month and day of week are both set?",
        answer:
          "Many Unix-style cron implementations run when either restricted day field matches. Some platforms differ, so verify this behavior for your scheduler.",
      },
    ],

    relatedTools: [
      { name: "Unix Timestamp Converter", href: "/dev-tools/timestamp-converter" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "Cloudflare Workers Cost Calculator", href: "/dev-tools/cloudflare-workers-cost" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CronExpressionGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CronExpressionGenerator />)} />
}
