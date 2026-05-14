import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Cloud, DollarSign, Server, Database, HardDrive, Globe,
  BarChart3, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Zap
} from "lucide-react"

const CloudflareWorkersCostCalculator = dynamic(
  () => import("@/components/dev-tools/cloudflare-workers-cost-calculator").then(mod => mod.CloudflareWorkersCostCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Cloudflare Workers Pricing Calculator — Free Cost Estimator"
const TOOL_NAME = "Cloudflare Workers Cost Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Estimate Cloudflare Workers costs free. Calculate monthly pricing for requests, CPU time, KV, R2 & Durable Objects. Free vs paid plan comparison with scaling projections.",
  path: "/dev-tools/cloudflare-workers-cost",
  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: TOOL_NAME, href: "/dev-tools/cloudflare-workers-cost" }
  ],
  schemaOptions: {
    name: "Cloudflare Workers Cost Calculator | Edge Computing Pricing Estimator",
    alternateName: "CF Workers Calculator, Cloudflare Pricing Calculator, Workers KV Cost Calculator, R2 Cost Calculator",
    applicationCategory: "DeveloperApplication",
    featureList: [
      "Estimate Workers request and CPU time costs",
      "KV store read/write/storage pricing",
      "R2 object storage and operations pricing",
      "Durable Objects request/duration/storage pricing",
      "Free vs Paid plan comparison",
      "Cost breakdown with visual chart",
      "Free tier usage tracker",
      "Scaling projection from 1M to 1B requests",
      "Pricing reference card",
      "Copy results to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Developer Tools",
}

export default function CloudflareWorkersCostPage() {
  const toolContent = {
    toolName: "Cloudflare Workers Cost Calculator — Plan Your Edge Computing Budget",
    overview: "Estimate your Cloudflare Workers monthly bill before you deploy. Input your expected requests, CPU time, KV reads/writes, R2 storage, and Durable Objects usage to get a complete cost breakdown — with free tier tracking, scaling projections, and a pricing reference card.",

    definition: "Cloudflare Workers is a serverless edge computing platform that runs JavaScript, TypeScript, Python, and Rust at Cloudflare's 300+ global data centres. Pricing is based on requests, CPU time, and usage of companion services (KV, R2, Durable Objects) with a generous free tier.",

    quickAnswer: "Cloudflare Workers costs $5/month base + $0.30 per million requests beyond 10M included + $0.02 per million ms of CPU time. For 3M requests/month with 5ms avg CPU, you'll pay just $5/month (within included allowance). R2 storage is $0.015/GB with zero egress fees. Use this calculator for a precise estimate with all services.",

    keyTakeaways: [
      "The free tier includes 100K requests/day (~3M/month) with 10ms CPU limit — enough for most hobby projects and MVPs",
      "Workers Paid plan at $5/month includes 10M requests — most startups stay under $10/month total",
      "R2 has zero egress fees, making it dramatically cheaper than S3 for read-heavy workloads",
      "CPU time (not wall-clock time) is what's billed — a Worker waiting on fetch() doesn't consume CPU",
      "At scale (1B requests/month), Workers costs ~$0.30/million requests — cheaper than Lambda, Vercel, and most alternatives"
    ],

    howToSteps: [
      "Select your plan (Free or Workers Paid at $5/month) based on your CPU time and request needs.",
      "Enter your expected daily requests and average CPU time per request in milliseconds.",
      "Optionally expand KV, R2, and Durable Objects sections to add storage and database costs.",
      "Click Calculate to see your total monthly cost, breakdown, free tier usage, and scaling projection."
    ],

    features: [
      "Workers Requests + CPU: Calculate costs from daily request volume and average CPU time per invocation.",
      "KV Store Pricing: Reads, writes, and storage costs with included allowances factored in.",
      "R2 Object Storage: Storage, Class A (writes), and Class B (reads) operations with zero egress.",
      "Durable Objects: Request, wall-clock duration, and transactional storage pricing.",
      "Free vs Paid Comparison: Switch between plans to see when upgrading makes sense.",
      "Free Tier Tracker: Visual progress bar showing how much of your free allowance you're using.",
      "Scaling Projection: See costs at 1M, 10M, 100M, and 1B requests per month.",
      "Pricing Reference Card: Quick-glance pricing for all Workers services."
    ],

    useCases: [
      "Pre-Deployment Budgeting: Estimate costs before launching your Workers application.",
      "Architecture Decisions: Compare Workers + KV vs Workers + D1 vs Workers + R2 for your use case.",
      "Free Tier Planning: Determine if your project fits within the free tier limits.",
      "Scale Planning: Understand cost growth as your traffic increases 10x or 100x.",
      "Migration Evaluation: Compare Workers costs against Lambda, Vercel, or Fastly for your workload.",
      "Startup Budgeting: Include precise infrastructure costs in your financial projections.",
      "Client Proposals: Estimate hosting costs for client projects built on Cloudflare."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Cloud className="h-6 w-6 text-primary" />
            Cloudflare Workers Pricing Explained
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Cloudflare Workers uses a <strong>pay-per-use model</strong> with generous included allowances. The pricing has two main components: <strong>requests</strong> (how many times your Worker runs) and <strong>CPU time</strong> (how long each invocation uses the CPU).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Free Plan</th>
                    <th className="p-3">Workers Paid ($5/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Requests</td>
                    <td className="p-3">100K/day (~3M/mo)</td>
                    <td className="p-3">10M included, then $0.30/million</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">CPU Time</td>
                    <td className="p-3">10ms limit per invocation</td>
                    <td className="p-3">30s limit, $0.02/million ms</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">KV Reads</td>
                    <td className="p-3">100K/day</td>
                    <td className="p-3">10M included, then $0.50/million</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">KV Writes</td>
                    <td className="p-3">1K/day</td>
                    <td className="p-3">1M included, then $5.00/million</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">R2 Storage</td>
                    <td className="p-3">—</td>
                    <td className="p-3">10GB free, then $0.015/GB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">R2 Egress</td>
                    <td className="p-3">—</td>
                    <td className="p-3 text-green-500 font-semibold">FREE (zero egress fees)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BarChart3 className="h-6 w-6 text-primary" />
            Workers vs Lambda vs Vercel: Cost Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Platform</th>
                  <th className="p-3">Free Tier</th>
                  <th className="p-3">Cost at 10M req/mo</th>
                  <th className="p-3">Cost at 100M req/mo</th>
                  <th className="p-3">Egress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Cloudflare Workers</td>
                  <td className="p-3">3M req/mo</td>
                  <td className="p-3 text-green-500 font-semibold">~$5</td>
                  <td className="p-3 text-green-500 font-semibold">~$32</td>
                  <td className="p-3 text-green-500">Free</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">AWS Lambda</td>
                  <td className="p-3">1M req/mo</td>
                  <td className="p-3">~$18-30</td>
                  <td className="p-3">~$180-300</td>
                  <td className="p-3 text-red-400">$0.09/GB</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Vercel Functions</td>
                  <td className="p-3">100K/mo (Hobby)</td>
                  <td className="p-3">~$20+</td>
                  <td className="p-3">~$200+</td>
                  <td className="p-3 text-red-400">Included but limited</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Deno Deploy</td>
                  <td className="p-3">100K req/day</td>
                  <td className="p-3">~$10</td>
                  <td className="p-3">~$100</td>
                  <td className="p-3 text-green-500">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Cloudflare Workers is consistently the cheapest option at scale due to zero egress fees and low per-request pricing. The gap widens significantly for read-heavy workloads where R2&apos;s free egress saves thousands.
          </p>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips to Minimise Workers Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Reduce CPU Time
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Cache responses with Cache API (avoid recomputation)</li>
                <li>Use KV for read-heavy lookups instead of fetch()</li>
                <li>Avoid JSON.parse() on large payloads in hot paths</li>
                <li>Use streaming responses for large bodies</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Database className="h-5 w-5" />
                Optimise KV Usage
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Batch reads where possible (single KV read with JSON object)</li>
                <li>Set appropriate TTLs to reduce stale reads</li>
                <li>Writes are 10x more expensive than reads — minimise write frequency</li>
                <li>Use KV for read-heavy, eventually-consistent data</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <HardDrive className="h-5 w-5" />
                R2 Over S3
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Zero egress fees = massive savings for CDN/media workloads</li>
                <li>S3-compatible API means easy migration</li>
                <li>Use R2 for static assets, user uploads, backups</li>
                <li>10GB free storage covers most starter projects</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Architecture Patterns
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Use Smart Placement for latency-sensitive Workers near origins</li>
                <li>Durable Objects for stateful: real-time, WebSockets, counters</li>
                <li>D1 (SQLite) for relational data instead of complex KV schemas</li>
                <li>Queues for async processing to reduce Worker CPU time</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "The most common mistake is overestimating Workers costs. Most developers assume serverless pricing scales linearly, but Workers' generous included allowances mean the first 10M requests cost just $5 total. Run this calculator with your actual traffic numbers — you'll likely find it's cheaper than you expected.",

    faqs: [
      {
        question: "How much does Cloudflare Workers cost?",
        answer: "Workers has a free tier (100K requests/day, 10ms CPU limit) and a paid plan at $5/month that includes 10M requests and $0.30 per additional million. CPU time costs $0.02 per million milliseconds. For most startups serving under 10M requests/month with simple Workers, the total cost is just $5/month. At 100M requests/month with 5ms avg CPU, expect ~$32/month."
      },
      {
        question: "Is Cloudflare Workers free?",
        answer: "Yes, there's a generous free tier: 100,000 requests per day (~3M/month), 10ms CPU time limit per invocation, and 100K KV reads per day. This is enough for most personal projects, MVPs, and low-traffic sites. You only need the $5/month paid plan when you need more than 10ms CPU time, higher request limits, or access to Durable Objects."
      },
      {
        question: "What is the difference between CPU time and wall-clock time?",
        answer: "CPU time is the time your Worker actively uses the CPU (computation). Wall-clock time includes waiting for external I/O (fetch requests, KV reads, database queries). Workers bills on CPU time, not wall-clock time. So a Worker that takes 200ms wall-clock (190ms waiting for an API + 10ms CPU) only bills for 10ms. This makes Workers very cost-effective for I/O-heavy workloads."
      },
      {
        question: "How does R2 pricing compare to S3?",
        answer: "R2 is significantly cheaper than S3 for most workloads because of zero egress fees. S3 charges $0.09/GB for data transfer out — for a site serving 1TB/month, that's $90 in egress alone. R2: $0. Storage is also cheaper: R2 at $0.015/GB vs S3 Standard at $0.023/GB. The only area where S3 wins is ecosystem breadth and advanced features like S3 Object Lambda."
      },
      {
        question: "When should I use KV vs D1 vs Durable Objects?",
        answer: "KV: Read-heavy, eventually consistent data (config, feature flags, cached content). D1: Relational data with SQL queries (user profiles, products, analytics). Durable Objects: Stateful, strongly consistent, real-time (WebSocket rooms, counters, rate limiters, collaborative editing). Rule of thumb: if you need SQL, use D1. If you need real-time state, use Durable Objects. For everything else, start with KV."
      },
      {
        question: "How does Workers compare to AWS Lambda?",
        answer: "Workers is cheaper (10M requests for $5 vs Lambda's ~$18-30), has zero cold starts (Lambda can take 100-500ms), deploys globally by default (Lambda is single-region), and has zero egress fees with R2. Lambda advantages: longer execution time (15 min vs 30s), more memory options, larger ecosystem, and direct integration with AWS services. For edge/API workloads, Workers wins on cost and latency."
      },
      {
        question: "What is the CPU time limit on Workers?",
        answer: "Free plan: 10ms CPU time per invocation. Paid plan: 30 seconds (Standard) or 15 minutes (Unbound, now deprecated in favour of Standard). Note: this is CPU time, not wall-clock time. A Worker can run for minutes of wall-clock time (waiting for fetch responses) while only using milliseconds of CPU. Most API Workers use 1-10ms CPU time."
      },
      {
        question: "How do Durable Objects pricing work?",
        answer: "Durable Objects have three billing dimensions: Requests ($0.15/million after 1M included), Wall-clock duration ($12.50/million seconds after 400K seconds included), and Storage ($0.20/GB after 1GB included). They're priced higher than stateless Workers because they maintain state and provide strong consistency. Best for: WebSocket servers, collaborative apps, rate limiters, and any use case requiring coordinated state."
      },
      {
        question: "Can I use this calculator for Cloudflare Pages Functions?",
        answer: "Partially. Pages Functions run on the Workers runtime with the same pricing model for the paid plan. Free tier for Pages is different (limited by builds and bandwidth rather than requests). For the request/CPU pricing portion, this calculator applies directly to Pages Functions. The KV, R2, and DO pricing is identical."
      },
      {
        question: "What happens if I exceed the free tier?",
        answer: "On the free plan, requests beyond 100K/day are dropped (return errors). Your Worker doesn't automatically upgrade or incur charges. On the paid plan, you're billed for usage beyond included allowances at the per-unit rates. There are no surprise bills on the free plan — but your users will see errors. Set up usage notifications in the Cloudflare dashboard to monitor approach to limits."
      },
      {
        question: "How accurate is this calculator?",
        answer: "This calculator uses Cloudflare's published 2026 pricing and provides estimates accurate to ±10% for standard workloads. Actual costs may vary due to: rounding in Cloudflare's billing, sub-request costs (subrequests to other Workers), Cron Triggers billing, and any custom enterprise pricing. For production budgeting, use this as a starting estimate and compare against your first month's actual bill."
      },
      {
        question: "Is Workers good for full-stack applications?",
        answer: "Yes. Cloudflare's stack covers full-stack: Workers (compute), D1 (SQL database), KV (key-value store), R2 (object storage), Durable Objects (stateful compute), Queues (async jobs), and Pages (static hosting). Frameworks like Hono, Remix, and Astro have first-class Workers support. The main limitation is the 128MB memory limit and 30s CPU time — not suitable for heavy computation or ML inference."
      }
    ],

    relatedTools: [
      { name: "LLM Training Cost Estimator", href: "/dev-tools/llm-training-cost" },
      { name: "SaaS Payback Calculator", href: "/finance-tools/saas-payback-calculator" },
      { name: "SaaS Churn Rate Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "Startup Runway Calculator", href: "/finance-tools/startup-runway-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "DNS / SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Cloudflare Workers Cost Calculator",
        description: "Estimate monthly costs for Workers requests, CPU time, KV, R2 & Durable Objects. Free vs paid plan comparison with scaling projections.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Developer Tools", href: "/dev-tools" },
        { label: TOOL_NAME, href: "/dev-tools/cloudflare-workers-cost" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CloudflareWorkersCostCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Estimate Cloudflare Workers costs free. Calculate monthly pricing for requests, CPU time, KV, R2 & Durable Objects. Free vs paid plan comparison with scaling projections.",
        path: "/dev-tools/cloudflare-workers-cost"
      }}
    />
  )
}
