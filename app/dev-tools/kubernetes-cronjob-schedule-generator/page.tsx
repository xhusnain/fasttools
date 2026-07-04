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
  toolName: "Kubernetes CronJob Schedule Generator",
  description:
    "Build and validate the spec.schedule cron expression for Kubernetes CronJobs — with timeZone, concurrencyPolicy, and startingDeadlineSeconds covered.",
  metaTitle: "Kubernetes CronJob Schedule Generator — spec.schedule Cron",
  metaDescription:
    "Generate the cron expression for your Kubernetes CronJob spec.schedule. Standard 5-field syntax, spec.timeZone support (K8s 1.27+), ready-to-paste manifest YAML, and the concurrency gotchas.",
  path: "/dev-tools/kubernetes-cronjob-schedule-generator",

  header: {
    title: "Kubernetes CronJob Schedule Generator",
    description:
      "Build the cron expression for your CronJob's spec.schedule field, validate it, and copy a complete manifest — including the timeZone field and the concurrency settings that bite in production.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
    { label: "Kubernetes CronJob Schedule", href: "/dev-tools/kubernetes-cronjob-schedule-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Cron schedule generator for Kubernetes CronJob manifests (spec.schedule). Standard 5-field cron with validation, human-readable preview, and manifest template with timeZone.",
    alternateName: [
      "K8s CronJob Schedule Generator",
      "Kubernetes cron expression generator",
      "CronJob spec.schedule builder",
      "kubectl cronjob schedule syntax",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Kubernetes CronJob schedule generator builds the 5-field cron expression for a CronJob manifest's spec.schedule field — standard cron syntax, evaluated in the kube-controller-manager's timezone unless spec.timeZone (Kubernetes 1.27+) pins it explicitly.",
    quickAnswer:
      "Kubernetes CronJobs use standard 5-field cron in spec.schedule — build and validate the expression above, then paste it into your manifest. Since Kubernetes 1.27, set spec.timeZone (e.g. \"America/New_York\") to pin the schedule to a timezone; without it, the schedule follows the controller manager's clock (UTC on most managed clusters).",
    keyTakeaways: [
      "spec.schedule takes standard 5-field cron — no seconds field, no L/W/# tokens",
      "spec.timeZone (stable in K8s 1.27) pins the schedule to an IANA timezone — set it explicitly",
      "concurrencyPolicy decides what happens when a run overlaps the previous one: Allow (default), Forbid, or Replace",
      "startingDeadlineSeconds under 10s can silently kill schedules after missed starts — set it generously or not at all",
      "100 consecutive missed schedules without a deadline → the CronJob stops scheduling entirely",
    ],
    overview:
      "CronJob is Kubernetes' native scheduled workload: a Job template plus a cron expression in spec.schedule. The syntax is standard 5-field cron, but the operational semantics around it are where production incidents come from — which timezone the expression is evaluated in, what happens when a slow run overlaps the next tick, and the missed-start rules that can stop a CronJob scheduling permanently. Build the expression below, copy the manifest template, and skim the two sections after it; they cover exactly those failure modes.",

    howToSteps: [
      "Build your schedule in the generator above — it validates syntax and previews it in plain English.",
      "Paste it into spec.schedule in your CronJob manifest.",
      "Set spec.timeZone to an IANA zone (K8s 1.27+) so cluster timezone changes can't move your jobs.",
      "Choose concurrencyPolicy deliberately — Forbid for jobs that must not overlap, Replace for freshness-over-completion.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Ready-to-Paste CronJob Manifest</h2>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
{`apiVersion: batch/v1
kind: CronJob
metadata:
  name: nightly-cleanup
spec:
  schedule: "30 2 * * *"        # from the generator above
  timeZone: "Etc/UTC"           # K8s 1.27+; pin it explicitly
  concurrencyPolicy: Forbid     # don't start if the last run is still going
  startingDeadlineSeconds: 300  # tolerate up to 5 min of missed-start slack
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 3
  jobTemplate:
    spec:
      backoffLimit: 2
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: cleanup
              image: registry.example.com/cleanup:latest
              args: ["--full"]`}
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Common CronJob Schedules</h2>
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
                <tr><td className="p-3">Every minute (testing)</td><td className="p-3 font-mono">* * * * *</td><td className="p-3">fine in K8s (no GitHub-style 5-min floor)</td></tr>
                <tr><td className="p-3">Every 10 minutes</td><td className="p-3 font-mono">*/10 * * * *</td><td className="p-3"></td></tr>
                <tr><td className="p-3">Nightly 02:30</td><td className="p-3 font-mono">30 2 * * *</td><td className="p-3">in spec.timeZone's clock</td></tr>
                <tr><td className="p-3">Business hours, hourly</td><td className="p-3 font-mono">0 9-17 * * 1-5</td><td className="p-3">09:00–17:00, Mon–Fri</td></tr>
                <tr><td className="p-3">Weekly Sunday 04:00</td><td className="p-3 font-mono">0 4 * * 0</td><td className="p-3">0 or 7 = Sunday</td></tr>
                <tr><td className="p-3">First of month 00:15</td><td className="p-3 font-mono">15 0 1 * *</td><td className="p-3">no L (last-day) token — use 28 or a in-job check</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Timezone: Pin It or Inherit It</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Without spec.timeZone, the schedule is interpreted in the kube-controller-manager&apos;s
            local timezone — UTC on virtually every managed cluster (EKS/GKE/AKS), but not
            guaranteed on self-hosted ones, and historically the source of &quot;jobs moved by an
            hour after the cluster migration&quot; incidents. Since Kubernetes 1.27 the field is
            stable: set an IANA name like &quot;America/New_York&quot; and DST is handled for you —
            a 09:00 New York schedule stays 9 AM local through both clock changes. Pin it even when
            you want UTC (&quot;Etc/UTC&quot;) so intent is explicit.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Concurrency and Missed-Start Rules</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Two spec fields decide production behavior. <strong>concurrencyPolicy</strong>: Allow
            (default) starts the next run even if the previous is still going — dangerous for
            non-idempotent jobs; Forbid skips the tick while one runs; Replace kills the running job
            and starts fresh. <strong>startingDeadlineSeconds</strong>: how late a missed start may
            begin. Two traps here — values under ~10 seconds effectively disable rescheduling after
            controller hiccups, and without any deadline set, 100 consecutive missed schedules puts
            the CronJob into a permanently-stopped state that only recreating it fixes. A generous
            deadline (minutes) plus Forbid is the sane default for most batch work.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Test the Job template without waiting for the schedule: kubectl create job --from=cronjob/<name> test-run-1 fires it immediately with the exact same pod spec. Faster than editing the schedule to * * * * * and forgetting to change it back.",

    faqs: [
      {
        question: "What cron syntax does a Kubernetes CronJob accept?",
        answer:
          "Standard 5-field cron (minute hour day-of-month month day-of-week) with ranges, lists, and steps, plus the @hourly/@daily/@weekly/@monthly macros. No seconds field, and no Quartz-style L, W, or # tokens. The generator above validates against this grammar.",
      },
      {
        question: "What timezone does spec.schedule run in?",
        answer:
          "Whatever spec.timeZone says (IANA name, stable since Kubernetes 1.27). If unset, the kube-controller-manager's local timezone applies — UTC on almost all managed clusters. Always set it explicitly; with a real timezone set, DST transitions are handled automatically.",
      },
      {
        question: "Why did my CronJob stop scheduling entirely?",
        answer:
          "The classic cause: no startingDeadlineSeconds set, and 100+ consecutive schedules were missed (controller down, cluster paused, suspend: true forgotten) — the controller then refuses to schedule it again. Recreate the CronJob or set a startingDeadlineSeconds. Also check spec.suspend and that recent Jobs aren't failing before the pod starts.",
      },
      {
        question: "How do I stop runs from overlapping?",
        answer:
          "Set concurrencyPolicy: Forbid — a tick is skipped while the previous Job still runs. Note it's best-effort per CronJob, not a distributed lock: if your job must never run twice concurrently across retries and manual triggers, add a lock inside the job (database advisory lock, lease object).",
      },
      {
        question: "Can a CronJob run every 30 seconds?",
        answer:
          "Not natively — cron's smallest unit is one minute. Common workarounds: a Deployment with an in-process scheduler for sub-minute work, or one CronJob per minute-offset pattern with an in-container sleep. If you're reaching for 30-second cron, a long-running worker with a ticker is usually the better design.",
      },
    ],

    relatedTools: [
      { name: "Cron Expression Generator (general)", href: "/dev-tools/cron-expression-generator" },
      { name: "GitHub Actions Cron Generator", href: "/dev-tools/github-actions-cron-generator" },
      { name: "Timestamp Converter", href: "/dev-tools/timestamp-converter" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function KubernetesCronjobScheduleGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CronExpressionGenerator />)} />
}
