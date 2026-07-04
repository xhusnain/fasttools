import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const CronExpressionGenerator = dynamic(
  () =>
    import("@/components/dev-tools/cron-expression-generator").then(
      (mod) => mod.CronExpressionGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "GitHub Actions Cron Generator",
  description:
    "Build and validate cron schedules for GitHub Actions on.schedule workflows — with the UTC-only rule, 5-minute minimum, and delay caveats covered.",
  metaTitle: "GitHub Actions Cron Generator — Schedule Syntax + UTC Rules",
  metaDescription:
    "Generate the cron expression for your GitHub Actions schedule trigger. Standard 5-field syntax, ALWAYS UTC, 5-minute minimum interval — plus ready-to-paste workflow YAML and the delay gotchas.",
  path: "/dev-tools/github-actions-cron-generator",

  header: {
    title: "GitHub Actions Cron Generator",
    description:
      "Build the cron expression for your workflow's schedule trigger. GitHub Actions uses standard 5-field cron, always in UTC — generate and validate it below, then paste into your workflow YAML.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
    { label: "GitHub Actions Cron", href: "/dev-tools/github-actions-cron-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Cron expression generator for GitHub Actions scheduled workflows (on.schedule). Standard 5-field POSIX cron, UTC-only, with validation and human-readable preview.",
    alternateName: [
      "GitHub Actions Schedule Generator",
      "GitHub Actions Cron Syntax",
      "on.schedule cron generator",
      "GitHub workflow cron builder",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A GitHub Actions cron generator builds the 5-field POSIX cron expression used by the on.schedule workflow trigger — which GitHub evaluates in UTC only, with a 5-minute minimum interval.",
    quickAnswer:
      "GitHub Actions schedules use standard 5-field cron syntax (minute hour day-of-month month day-of-week), evaluated in UTC with no timezone option and a 5-minute minimum interval. Build your expression above, then paste it into on.schedule.cron in your workflow YAML. Example: '0 6 * * 1-5' runs weekdays at 06:00 UTC.",
    keyTakeaways: [
      "Standard 5-field cron: minute hour day-of-month month day-of-week — no seconds field",
      "ALWAYS UTC — there is no timezone setting; convert your local time before writing the expression",
      "Minimum interval is 5 minutes (*/5) — anything tighter is rejected",
      "Runs can be delayed or dropped at high-load times (top of the hour especially) — don't schedule at :00 if timing matters",
      "Scheduled workflows are disabled automatically after 60 days of repository inactivity",
    ],
    overview:
      "The on.schedule trigger is how GitHub Actions workflows run on a timer — nightly builds, dependency scans, cleanup jobs, cron-driven deploys. It takes standard POSIX cron, but with platform rules that surprise people: everything is UTC (a '9 AM' schedule fires at 9 AM UTC, not your time), the shortest allowed interval is 5 minutes, GitHub may delay or skip runs during high-load windows, and repos with no activity for 60 days get their schedules disabled. Build and validate the expression below, copy the YAML, and check the examples table for the common patterns already converted.",

    howToSteps: [
      "Build your schedule in the generator above — it validates syntax and shows the expression in plain English.",
      "Convert your intended local time to UTC (GitHub offers no timezone setting).",
      "Paste the expression into your workflow: on: → schedule: → - cron: '<expression>'.",
      "Avoid minute :00 for time-sensitive jobs — top-of-hour is GitHub's peak-delay window.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Ready-to-Paste Workflow YAML</h2>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
{`name: nightly-job
on:
  schedule:
    - cron: "17 2 * * *"   # 02:17 UTC daily — off the :00 rush
  workflow_dispatch:        # keep a manual trigger for testing

jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./scripts/nightly.sh`}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Two habits worth copying: an off-peak minute (17 above) so you dodge the top-of-hour
            delay window, and a <code>workflow_dispatch</code> trigger alongside the schedule so you
            can test the job without waiting for cron.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Common GitHub Actions Schedules</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Goal</th>
                  <th className="p-3 text-left">Expression</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3">Every 15 minutes</td><td className="p-3 font-mono">*/15 * * * *</td><td className="p-3">5-min floor applies; */15 is safe</td></tr>
                <tr><td className="p-3">Hourly, off-peak</td><td className="p-3 font-mono">23 * * * *</td><td className="p-3">any minute except :00</td></tr>
                <tr><td className="p-3">Nightly 02:30 UTC</td><td className="p-3 font-mono">30 2 * * *</td><td className="p-3">= 22:30 ET (summer) / 21:30 ET (winter)</td></tr>
                <tr><td className="p-3">Weekdays 09:00 New York</td><td className="p-3 font-mono">0 13 * * 1-5</td><td className="p-3">EDT = UTC−4; use 14 during EST — DST needs manual updates</td></tr>
                <tr><td className="p-3">Every Monday 08:00 UTC</td><td className="p-3 font-mono">0 8 * * 1</td><td className="p-3">day-of-week: 0/7 = Sunday</td></tr>
                <tr><td className="p-3">First of month, midnight UTC</td><td className="p-3 font-mono">0 0 1 * *</td><td className="p-3">no L / W tokens — standard cron only</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The UTC Trap (and the DST Corollary)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            GitHub evaluates schedules in UTC with no override — the single most common Actions
            scheduling bug is writing local time into the cron field. Convert first, and remember
            daylight saving: a job pinned to &quot;9 AM New York&quot; is 13:00 UTC in summer but
            14:00 UTC in winter, and your cron expression won&apos;t follow the clock change. Teams
            that care either accept the one-hour seasonal drift, update the workflow twice a year,
            or run the job hourly and gate it in a first step that checks the local time.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Delays, Drops, and the 60-Day Rule</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Scheduled runs are queued, not guaranteed: during high-load periods (the top of every
            hour, and 00:00 UTC worst of all) runs commonly start minutes late, and GitHub documents
            that they can be dropped entirely under load. Schedule on odd minutes, and design jobs
            to tolerate a missed tick — idempotent, catch-up-friendly. Separately, public repos with
            no commits for 60 days get scheduled workflows suspended automatically (you&apos;ll get
            an email); any commit re-enables them. If a schedule &quot;mysteriously stopped,&quot;
            check that first.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Pick a random odd minute for every schedule (17, 23, 41…) instead of :00 — you'll skip the queue that everyone else's top-of-the-hour jobs are stuck in, and your start times get dramatically more punctual.",

    faqs: [
      {
        question: "What cron syntax does GitHub Actions use?",
        answer:
          "Standard 5-field POSIX cron: minute (0-59), hour (0-23), day-of-month (1-31), month (1-12), day-of-week (0-6, Sunday = 0 or 7). Ranges, lists, and steps (*/n) work; non-standard tokens like L, W, # and a seconds field do not. The generator above validates against exactly this grammar.",
      },
      {
        question: "Can I set a timezone for a GitHub Actions schedule?",
        answer:
          "No — schedules always run in UTC and there is no timezone key. Convert your target local time to UTC when writing the expression, and remember to account for daylight saving (the UTC offset changes twice a year while your cron stays fixed).",
      },
      {
        question: "Why didn't my scheduled workflow run on time (or at all)?",
        answer:
          "Three usual causes: high-load delay (runs at :00 routinely start late and can be dropped — use an odd minute), the 60-day inactivity suspension (no repo activity → schedules disabled until the next commit), or the workflow file isn't on the default branch — on.schedule only triggers from the default branch's copy.",
      },
      {
        question: "What's the shortest interval GitHub Actions allows?",
        answer:
          "5 minutes (*/5 * * * *). Tighter expressions are rejected. If you genuinely need sub-5-minute cadence, run an external trigger (a scheduler pinging repository_dispatch) — or reconsider whether a queue/webhook fits better than polling.",
      },
      {
        question: "Does this generator work for other CI cron formats too?",
        answer:
          "Yes for anything using standard 5-field cron (GitLab CI pipeline schedules, CircleCI, Jenkins' basic specs). Kubernetes CronJobs also use 5-field cron but add a timeZone field — see the dedicated Kubernetes CronJob schedule generator.",
      },
    ],

    relatedTools: [
      { name: "Cron Expression Generator (general)", href: "/dev-tools/cron-expression-generator" },
      { name: "Kubernetes CronJob Schedule Generator", href: "/dev-tools/kubernetes-cronjob-schedule-generator" },
      { name: "Timestamp Converter", href: "/dev-tools/timestamp-converter" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function GithubActionsCronGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CronExpressionGenerator />)} />
}
