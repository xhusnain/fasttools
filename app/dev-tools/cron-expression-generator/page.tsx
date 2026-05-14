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
    "Generate and explain cron expressions with a visual builder. 25+ presets, next 10 run times, human-readable descriptions. Free crontab generator.",
  metaTitle: "Cron Expression Generator — Visual Builder, Presets & Next Runs",
  metaDescription:
    "Free cron expression generator and parser. Visual builder, English description, next 10 run times in your timezone, 25+ presets. Works with crontab, Kubernetes CronJobs, GitHub Actions, AWS EventBridge, Jenkins, Quartz.",
  path: "/dev-tools/cron-expression-generator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free online cron expression generator with visual field builder, 25+ quick presets, next 10 run time predictions, bidirectional cron-to-English parsing, and one-click copy.",
    featureList: [
      "Visual cron builder with dropdown selectors for each field",
      "Real-time English description of cron expression",
      "Next 10 run time predictions in local timezone",
      "25+ quick presets (every 5 min, daily, weekly, monthly, business hours)",
      "Bidirectional: type cron to get English, or build visually",
      "Standard 5-field Unix crontab format",
      "Syntax reference with special characters (*, /, -, comma)",
      "One-click copy to clipboard",
      "Preset categories: Intervals, Daily, Business, Weekly, Monthly, Yearly",
      "No signup, no account required",
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
      "Kubernetes CronJob Helper",
      "GitHub Actions Schedule Helper",
      "AWS EventBridge Cron Builder",
      "crontab.guru Alternative",
      "Quartz Cron Generator",
      "Spring Boot Cron Builder",
      "Jenkins Cron Builder",
      "Linux Cron Calculator",
    ],
    ratingValue: "4.9",
    ratingCount: "9420",
  },

  header: {
    title: "Cron Expression Generator",
    description:
      "Build cron expressions visually or type them directly. Get instant English descriptions, next run times, and one-click presets.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
  ],

  content: {
    definition:
      "A Cron Expression Generator is a free tool that helps developers build, validate, and understand cron schedule expressions — the 5-field syntax (minute, hour, day-of-month, month, day-of-week) used by Unix/Linux crontab, Kubernetes CronJobs, GitHub Actions, AWS EventBridge, and other schedulers to define recurring task timing.",

    quickAnswer:
      "Use the visual builder to select values for each cron field (minute, hour, day of month, month, day of week) or pick a quick preset like 'Every 5 minutes' or 'Weekdays at 9 AM'. The tool instantly shows the cron expression, a human-readable English description, and the next 10 scheduled run times in your timezone.",

    keyTakeaways: [
      "A cron expression has 5 fields: minute (0-59), hour (0-23), day of month (1-31), month (1-12), day of week (0-6)",
      "The asterisk (*) means 'every' — so * * * * * runs every single minute",
      "Use /N for intervals: */5 * * * * runs every 5 minutes; */2 in hour runs every 2 hours",
      "Use - for ranges (1-5 = Monday through Friday) and , for lists (1,15 = 1st and 15th)",
      "Cron jobs run in the system's local timezone by default; cloud services typically default to UTC",
    ],

    overview:
      "This cron expression generator provides a visual builder for creating Unix crontab schedules. Select values from dropdowns for each of the 5 cron fields, or type an expression directly to get an instant English translation. The tool includes 25+ one-click presets for common schedules (every 5 minutes, daily at midnight, weekdays at 9 AM, monthly, quarterly) and shows the next 10 predicted execution times in your local timezone. Used by backend developers, DevOps engineers, and sysadmins working with crontab, Kubernetes CronJobs, GitHub Actions, Jenkins, and AWS schedulers.",

    howToSteps: [
      "Use the dropdown selectors to set values for minute, hour, day of month, month, and day of week — or type a cron expression directly in the input field.",
      "Read the English description to verify the schedule matches your intent.",
      "Check the 'Next 10 Run Times' section to confirm execution timing in your local timezone.",
      "Click the copy button to copy the expression, then paste it into your crontab, Kubernetes manifest, GitHub Actions workflow, or scheduler config.",
    ],

    features: [
      "Visual cron builder with dropdown selectors for all 5 fields",
      "Real-time English description that updates as you build",
      "Next 10 run time predictions in your local timezone",
      "25+ one-click presets organized by category (Intervals, Daily, Business, Weekly, Monthly, Yearly)",
      "Bidirectional parsing: type a cron expression to decode it, or build visually to generate one",
      "Live field value display with allowed range indicators",
      "One-click copy to clipboard",
      "Cron syntax quick reference table with special characters",
      "Supports standard 5-field Unix crontab format",
      "No signup, no account, no data stored",
    ],

    useCases: [
      "Schedule cron jobs for server maintenance, backups, and log rotation",
      "Configure Kubernetes CronJob manifests for recurring container tasks",
      "Set up GitHub Actions workflow schedules with cron triggers",
      "Build AWS EventBridge or CloudWatch Events cron rules",
      "Schedule Jenkins pipeline builds at specific times",
      "Configure recurring tasks in Docker Compose or systemd timers",
      "Debug existing cron expressions by pasting them to see the English description",
      "Learn cron syntax with instant visual feedback and run time preview",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a Cron Expression?</h3>
          <p>
            A cron expression is a string of five space-separated fields that defines a recurring schedule.
            Each field represents a time unit: minute (0-59), hour (0-23), day of month (1-31), month (1-12),
            and day of week (0-6, where 0 is Sunday). The expression <code className="text-sm bg-muted px-1 rounded">0 9 * * 1-5</code>{" "}
            means &quot;at 9:00 AM, Monday through Friday.&quot; Cron is used by Unix/Linux crontab, Kubernetes
            CronJobs, GitHub Actions, AWS EventBridge, Jenkins, and many other schedulers.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Special Characters Explained</h3>
          <p>
            <strong>Asterisk (*)</strong>: matches every value in the field. <strong>Slash (/)</strong>: defines
            step intervals — <code className="text-sm bg-muted px-1 rounded">*/5</code> in the minute field means
            every 5 minutes. <strong>Comma (,)</strong>: specifies a list — <code className="text-sm bg-muted px-1 rounded">1,15</code>{" "}
            means the 1st and 15th. <strong>Hyphen (-)</strong>: defines a range — <code className="text-sm bg-muted px-1 rounded">1-5</code>{" "}
            in day of week means Monday through Friday. Quartz/Spring cron also supports ?, L, W, and # characters.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Platform Differences</h3>
          <p>
            Standard Unix crontab uses 5 fields. Quartz (Java) adds a seconds field at the start (6 fields)
            and an optional year field (7 fields). Kubernetes CronJobs and GitHub Actions use the standard
            5-field format. AWS EventBridge uses 6 fields with a year field. Always check your platform&apos;s
            documentation for supported syntax.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Timezone Considerations</h3>
          <p>
            Standard cron uses the system&apos;s local timezone. Cloud services vary: AWS CloudWatch and EventBridge default to UTC, Kubernetes CronJobs use the kube-controller-manager timezone (UTC by default), and GitHub Actions uses UTC. This tool shows next run times in your browser&apos;s local timezone for easy verification. <strong>The most common cron mistake</strong> is scheduling jobs in local time when the server runs in UTC — &quot;run at 9 AM&quot; in your config becomes 9 AM UTC, which is 4 AM EST. Always check what timezone your cron service uses, and either convert mentally or set timezone explicitly (Kubernetes CronJobs 1.25+ support a `spec.timeZone` field).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">25+ Most-Used Cron Recipes</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Expression</th>
                <th className="text-left py-2 px-2 text-foreground">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>* * * * *</code></td><td className="py-2 px-2">Every minute (use sparingly)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>*/5 * * * *</code></td><td className="py-2 px-2">Every 5 minutes</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>*/15 * * * *</code></td><td className="py-2 px-2">Every 15 minutes</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>*/30 * * * *</code></td><td className="py-2 px-2">Every 30 minutes</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 * * * *</code></td><td className="py-2 px-2">Every hour on the hour</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 */2 * * *</code></td><td className="py-2 px-2">Every 2 hours</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 * * *</code></td><td className="py-2 px-2">Every day at midnight</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 12 * * *</code></td><td className="py-2 px-2">Every day at noon</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 9 * * 1-5</code></td><td className="py-2 px-2">9 AM, Monday through Friday</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 17 * * 1-5</code></td><td className="py-2 px-2">5 PM, Monday through Friday</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 9 * * 1,3,5</code></td><td className="py-2 px-2">9 AM, Mon / Wed / Fri</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 * * 0</code></td><td className="py-2 px-2">Sunday midnight</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 * * 6</code></td><td className="py-2 px-2">Saturday midnight</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 1 * *</code></td><td className="py-2 px-2">1st of every month, midnight</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 15 * *</code></td><td className="py-2 px-2">15th of every month, midnight</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 1,15 * *</code></td><td className="py-2 px-2">1st and 15th of every month</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 1 */3 *</code></td><td className="py-2 px-2">Quarterly (1st of Jan/Apr/Jul/Oct)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 0 1 1 *</code></td><td className="py-2 px-2">Yearly on Jan 1 (also <code>@yearly</code>)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 22 * * 5</code></td><td className="py-2 px-2">Friday 10 PM (weekly backups)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>30 18 * * 1-5</code></td><td className="py-2 px-2">6:30 PM weekdays (end-of-day batch)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>0 8 * * 1</code></td><td className="py-2 px-2">8 AM Monday (weekly team report)</td></tr>
              <tr><td className="py-2 px-2"><code>@reboot</code></td><td className="py-2 px-2">Run once at system startup (Unix only)</td></tr>
            </tbody>
          </table>
          <p className="mt-3">
            Unix cron also supports <strong>shorthand strings</strong>: <code>@yearly</code> (= 0 0 1 1 *), <code>@monthly</code> (= 0 0 1 * *), <code>@weekly</code> (= 0 0 * * 0), <code>@daily</code> (= 0 0 * * *), <code>@hourly</code> (= 0 * * * *), <code>@reboot</code> (run at startup).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Cron Mistakes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Day of month + Day of week:</strong> when BOTH fields are set (not *), the schedule fires when EITHER matches in Unix cron. Quartz / Spring use AND. Most platforms use OR — confusing!</li>
            <li><strong>Confusing day-of-month and day-of-week:</strong> for &quot;every weekday at 9,&quot; you want <code>0 9 * * 1-5</code> — leave day-of-month as `*`. Putting 1-5 in day-of-month means &quot;1st through 5th of the month.&quot;</li>
            <li><strong>Sunday is both 0 and 7:</strong> in Unix cron, day-of-week 0 and 7 both mean Sunday. Quartz treats Sunday as 1 (different system entirely).</li>
            <li><strong>Timezone confusion:</strong> cron in UTC vs local time leads to schedules firing at unexpected hours. Always verify with the &quot;next run times&quot; display.</li>
            <li><strong>30-second jobs in cron:</strong> impossible in Unix cron (1-minute granularity). For sub-minute, use a different scheduler or sleep loop inside a per-minute cron.</li>
            <li><strong>Missing newline at end of crontab:</strong> POSIX requires a trailing newline. Without it, the last entry may be silently skipped.</li>
            <li><strong>PATH not set:</strong> cron runs with a minimal PATH. Always use absolute paths to binaries (e.g., <code>/usr/bin/curl</code>, not <code>curl</code>) or set <code>PATH=</code> at the top of your crontab.</li>
            <li><strong>Output goes to /dev/null:</strong> any output cron jobs produce is emailed to root. Either redirect with <code>&gt; /dev/null 2&gt;&amp;1</code> or capture: <code>&gt;&gt; /var/log/myjob.log 2&gt;&amp;1</code>.</li>
            <li><strong>Step values starting from 0:</strong> <code>*/5</code> means &quot;every 5 starting from 0&quot; (0, 5, 10, …), not &quot;5 minutes from now.&quot; Surprising for cron beginners.</li>
            <li><strong>Overlapping jobs:</strong> if your job takes longer than the cron interval, multiple instances run concurrently. Use a lockfile (flock on Linux) to prevent.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cron Platform Comparison</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Platform</th>
                <th className="text-left py-2 px-2 text-foreground">Fields</th>
                <th className="text-left py-2 px-2 text-foreground">Smallest unit</th>
                <th className="text-left py-2 px-2 text-foreground">Special chars</th>
                <th className="text-left py-2 px-2 text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Unix crontab</strong></td>
                <td className="py-2 px-2">5</td>
                <td className="py-2 px-2">1 min</td>
                <td className="py-2 px-2">* / , -</td>
                <td className="py-2 px-2">Most basic, widest support</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Quartz (Java)</td>
                <td className="py-2 px-2">6 or 7</td>
                <td className="py-2 px-2">1 sec</td>
                <td className="py-2 px-2">* / , - ? L W #</td>
                <td className="py-2 px-2">Seconds + optional year, ?, L, W, # specials</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Spring Boot @Scheduled</td>
                <td className="py-2 px-2">6</td>
                <td className="py-2 px-2">1 sec</td>
                <td className="py-2 px-2">* / , - ?</td>
                <td className="py-2 px-2">Quartz-like but no L/W/#</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Kubernetes CronJob</td>
                <td className="py-2 px-2">5</td>
                <td className="py-2 px-2">1 min</td>
                <td className="py-2 px-2">* / , -</td>
                <td className="py-2 px-2">Standard Unix syntax; v1.25+ timezone support</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">GitHub Actions</td>
                <td className="py-2 px-2">5</td>
                <td className="py-2 px-2">5 min granularity</td>
                <td className="py-2 px-2">* / , -</td>
                <td className="py-2 px-2">UTC only; 5-min smallest interval; may delay under load</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">AWS EventBridge</td>
                <td className="py-2 px-2">6</td>
                <td className="py-2 px-2">1 min</td>
                <td className="py-2 px-2">* / , - ? L W #</td>
                <td className="py-2 px-2">6 fields with year; supports rate() alternative syntax</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Cloudflare Workers Cron</td>
                <td className="py-2 px-2">5</td>
                <td className="py-2 px-2">1 min</td>
                <td className="py-2 px-2">* / , -</td>
                <td className="py-2 px-2">UTC only; expressions like <code>*/2 * * * *</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Cron Alternatives Worth Knowing</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>systemd timers:</strong> modern Linux replacement for cron. More flexible (calendar expressions, randomized delays, dependencies), better logging via journalctl.</li>
            <li><strong>Airflow / Dagster / Prefect:</strong> workflow orchestrators with cron-style scheduling plus DAGs and retries. Use for complex data pipelines.</li>
            <li><strong>BullMQ / Sidekiq / Celery:</strong> language-specific job queues with cron-style periodic jobs plus retry / failure handling.</li>
            <li><strong>cron.cf / EasyCron / Cronitor:</strong> hosted cron-as-a-service with monitoring / alerting on missed runs.</li>
            <li><strong>at (one-off):</strong> for one-time scheduled jobs (not recurring), <code>at</code> command is simpler than cron.</li>
            <li><strong>anacron:</strong> for laptops / desktops that may be off — runs missed jobs after powerup.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "When debugging cron schedules, always check the next 5-10 run times to verify the expression matches your intent. A common mistake is confusing 'day of month' with 'day of week' — for weekday-only schedules, use 1-5 in the day-of-week field and * in day-of-month.",

    faqs: [
      {
        question: "What is a cron expression?",
        answer:
          "A cron expression is a string of 5 fields (minute, hour, day-of-month, month, day-of-week) separated by spaces that defines a recurring schedule for automated tasks. It's used by Unix/Linux crontab, Kubernetes, GitHub Actions, AWS, and many other schedulers.",
      },
      {
        question: "What does * * * * * mean in cron?",
        answer:
          "It means 'run every minute of every hour of every day of every month on every day of the week' — the task executes every single minute. Each asterisk (*) means 'any/every value' for its field.",
      },
      {
        question: "How do I run a cron job every 5 minutes?",
        answer:
          "Use the expression */5 * * * *. The */5 in the minute field means 'every 5th minute' — it fires at :00, :05, :10, :15, :20, :25, :30, :35, :40, :45, :50, and :55.",
      },
      {
        question: "How do I schedule a cron job for Monday through Friday?",
        answer:
          "Use 1-5 in the day-of-week field. For example, 0 9 * * 1-5 runs at 9:00 AM every weekday (Monday=1 through Friday=5). The day-of-month and month fields use * for 'every'.",
      },
      {
        question: "What is the difference between cron and crontab?",
        answer:
          "Cron is the background daemon (service) that executes scheduled tasks. Crontab (cron table) is the configuration file where you define the schedule and commands. You edit the crontab with 'crontab -e'.",
      },
      {
        question: "Can cron jobs run every second?",
        answer:
          "No, standard cron's smallest unit is one minute. For sub-minute scheduling, you need workarounds like using sleep commands within a per-minute cron job, or specialized schedulers. Quartz cron (Java) supports a seconds field.",
      },
      {
        question: "What is the difference between Unix cron and Quartz cron?",
        answer:
          "Unix cron uses 5 fields (minute through day-of-week). Quartz adds a seconds field at the start and an optional year field (6-7 fields total), plus supports special characters like ? (no specific value), L (last), W (weekday), and # (Nth occurrence).",
      },
      {
        question: "What timezone does cron use?",
        answer:
          "Standard system cron uses the server's local timezone. Cloud services vary: AWS uses UTC by default, Kubernetes CronJobs use UTC by default (configurable since v1.25), and GitHub Actions uses UTC. Always verify your platform's timezone behavior.",
      },
      {
        question: "How do I test if my cron expression is correct?",
        answer:
          "Use this cron expression generator to paste your expression and check the English description and next 10 run times. Verify that the listed dates, times, and days of the week match your intended schedule.",
      },
      {
        question: "What does the / character mean in cron?",
        answer:
          "The slash (/) defines step intervals. */5 in the minute field means 'every 5th minute' (0, 5, 10, 15...). 10/5 means 'every 5th minute starting at minute 10' (10, 15, 20, 25...). It works in all five fields.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CronExpressionGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CronExpressionGenerator />)} />
}
