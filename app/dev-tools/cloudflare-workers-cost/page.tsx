import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"

const CloudflareWorkersCostCalculator = dynamic(
  () => import("@/components/dev-tools/cloudflare-workers-cost-calculator").then(mod => mod.CloudflareWorkersCostCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Cloudflare Workers Cost Calculator - Pricing Estimator"
const TOOL_NAME = "Cloudflare Workers Cost Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description:
    "Estimate Cloudflare Workers pricing for requests, CPU time, Workers KV, R2, and Durable Objects using current published rate categories.",
  path: "/dev-tools/cloudflare-workers-cost",
  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: TOOL_NAME, href: "/dev-tools/cloudflare-workers-cost" },
  ],
  schemaOptions: {
    name: "Cloudflare Workers Cost Calculator",
    alternateName: [
      "Cloudflare Workers Pricing Calculator",
      "Workers Cost Estimator",
      "Workers KV Cost Calculator",
      "R2 Cost Calculator",
      "Durable Objects Cost Calculator",
    ],
    applicationCategory: "DeveloperApplication",
    featureList: [
      "Estimate Workers requests and CPU time",
      "Compare Free and Workers Paid plan inputs",
      "Estimate Workers KV reads, writes, and storage",
      "Estimate R2 storage plus Class A and Class B operations",
      "Estimate Durable Objects requests, duration, and storage",
      "Show monthly and annual estimate",
      "Show scaling projection for Workers requests and CPU time",
      "Copy estimate summary",
    ],
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Developer Tools",
}

export default function CloudflareWorkersCostPage() {
  const toolContent = {
    toolName: "Cloudflare Workers Cost Calculator",
    overview:
      "Estimate a Cloudflare Workers monthly bill from request volume, average CPU time, Workers KV usage, R2 storage and operations, and Durable Objects usage. The calculator is intended for planning and comparison; always verify final rates and limits in Cloudflare's billing pages before committing production budgets.",

    definition:
      "A Cloudflare Workers cost calculator estimates monthly edge-compute spend from Workers requests, billable CPU milliseconds, and optional storage or database services such as Workers KV, R2, and Durable Objects.",

    quickAnswer:
      "Enter daily Worker requests and average CPU milliseconds, then optionally add KV, R2, and Durable Objects usage. The paid-plan estimate applies the $5 account minimum, 10 million included Workers requests, 30 million included CPU milliseconds, and published overage categories for the supported services.",

    keyTakeaways: [
      "Workers Free includes 100,000 requests per day and a 10 ms CPU limit per invocation.",
      "Workers Paid has a $5/month account minimum, 10 million included requests, and 30 million included CPU milliseconds per month.",
      "Workers request overage is priced per additional million requests; CPU overage is priced per additional million CPU milliseconds.",
      "Workers KV, R2, and Durable Objects each have separate included allowances and billable usage categories.",
      "Durable Objects duration is billed in GB-seconds, so this calculator converts entered wall-clock hours using the 128 MB allocation model.",
    ],

    howToSteps: [
      "Choose Free or Workers Paid depending on the plan you want to model.",
      "Enter expected daily dynamic Worker requests and average CPU time per request.",
      "Open the advanced section if you need KV, R2, or Durable Objects cost estimates.",
      "Click Calculate Monthly Cost to see the total, breakdown, scaling projection, and copyable summary.",
      "Compare the estimate against Cloudflare's current billing documentation before using it as a final budget.",
    ],

    features: [
      "Workers request and CPU-time estimate with included paid-plan allowances.",
      "Workers KV read/write/storage estimate.",
      "R2 Standard storage, Class A operations, and Class B operations estimate.",
      "Durable Objects request, duration, and storage estimate.",
      "Free-tier usage visualization for request volume.",
      "Scaling projection for 1M, 10M, 100M, and 1B monthly Worker requests.",
      "Copyable monthly estimate summary.",
    ],

    useCases: [
      "Estimate cost before deploying a Workers API.",
      "Check whether an MVP fits within Workers Free limits.",
      "Model paid-plan costs for traffic growth.",
      "Compare whether R2 or KV usage dominates the bill.",
      "Budget Durable Objects for WebSocket, collaborative, or stateful workloads.",
      "Attach a rough infrastructure estimate to a client proposal.",
    ],

    aboutTool:
      "The estimator focuses on the pricing categories represented in the UI. It does not model every Cloudflare product, enterprise contract, region-specific tax, storage class, D1, Queues, Vectorize, Workers Logs, Containers, or custom limits. Treat the result as a planning estimate rather than an invoice replica.",

    proTip:
      "For Workers Paid estimates, CPU overage starts only after the included monthly CPU milliseconds are used. A small API with short CPU time can stay close to the $5 minimum even when request volume is growing.",

    faqs: [
      {
        question: "Does this calculator include the Workers Paid $5 minimum?",
        answer:
          "Yes. The paid-plan estimate includes the $5 account minimum before adding billable requests, CPU time, and optional services.",
      },
      {
        question: "Does Workers bill wall-clock time?",
        answer:
          "For standard Workers requests, the calculator models CPU milliseconds, not time spent waiting on network I/O. Durable Objects duration is a separate GB-second billing category.",
      },
      {
        question: "Does R2 charge egress?",
        answer:
          "The calculator assumes Cloudflare R2's standard no-egress-fee model for Internet data transfer, while still accounting for storage and operation classes.",
      },
      {
        question: "Why is my Free plan estimate zero?",
        answer:
          "The Free selection is best treated as a limit tracker. Cloudflare's free limits can fail or stop further operations when exceeded instead of behaving like an automatic paid overage model.",
      },
      {
        question: "How accurate is the estimate?",
        answer:
          "It is a planning estimate based on the modeled fields. Actual bills can differ because of rounding, billing units, other Cloudflare products, contract terms, taxes, and usage patterns not represented here.",
      },
    ],

    relatedTools: [
      { name: "LLM Training Cost Calculator", href: "/dev-tools/llm-training-cost" },
      { name: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
      { name: "SaaS Payback Calculator", href: "/finance-tools/cac-payback-calculator" },
      { name: "SaaS Churn Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "Startup Runway Calculator", href: "/finance-tools/startup-runway-calculator" },
      { name: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  }

  return (
    <ToolPageLayout
      header={{
        title: "Cloudflare Workers Cost Calculator",
        description:
          "Estimate monthly costs for Workers requests, CPU time, Workers KV, R2, and Durable Objects with free-vs-paid planning context.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange",
      }}
      breadcrumbs={[
        { label: "Developer Tools", href: "/dev-tools" },
        { label: TOOL_NAME, href: "/dev-tools/cloudflare-workers-cost" },
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CloudflareWorkersCostCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description:
          "Estimate Cloudflare Workers pricing for requests, CPU time, Workers KV, R2, and Durable Objects using current published rate categories.",
        path: "/dev-tools/cloudflare-workers-cost",
      }}
    />
  )
}
