import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const StartupRunwayCalculator = dynamic(
  () => import("@/components/finance/startup-runway-calculator").then((mod) => mod.StartupRunwayCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Startup Runway Calculator",
  description:
    "Calculate your startup's runway, burn rate, zero-cash date, fundraise timing, and burn multiple. Includes month-by-month cash flow projection and industry benchmarks.",
  metaTitle: "Startup Runway Calculator — Burn Rate & Zero-Cash Date",
  metaDescription:
    "Free startup runway calculator. Calculate months of runway, net burn rate, zero-cash date, fundraise window, and burn multiple. Includes 60-month cash projection and Pre-seed/Seed/Series A industry benchmarks.",
  path: "/finance-tools/startup-runway-calculator",

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "Free startup runway calculator with cash on hand, monthly expenses, revenue, growth rate inputs. Outputs runway months, zero-cash date, net/gross burn rate, burn multiple, fundraise window, and monthly projections.",
    alternateName: [
      "Burn Rate Calculator",
      "Cash Runway Calculator",
      "Zero-Cash Date Calculator",
      "Startup Burn Calculator",
      "Months of Runway Calculator",
    ],
    featureList: [
      "Runway calculation with month-by-month revenue growth modeling",
      "Cash balance projection up to 60 months",
      "Zero-cash date prediction (the day funds run out)",
      "Net burn rate (expenses − revenue)",
      "Gross burn rate (expenses only)",
      "Burn multiple score (Net Burn ÷ Net New ARR) — efficiency metric",
      "Fundraise window recommendation (6-9 months before zero-cash)",
      "Revenue and expense growth rate sliders",
      "Visual cash balance projection chart with color-coded health",
      "Monthly breakdown table (revenue, expenses, net burn, cash)",
      "Pre-seed / Seed / Series A industry benchmarks",
      "What-if scenarios: cost cuts, hiring freeze, revenue boost",
      "100% client-side, no signup",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
  },

  header: {
    title: "Startup Runway Calculator",
    description:
      "Calculate how many months your startup can operate. Revenue growth projections, burn rate, fundraise timing, and industry benchmarks.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Startup Runway Calculator", href: "/finance-tools/startup-runway-calculator" },
  ],

  content: {
    definition:
      "A Startup Runway Calculator estimates how many months a company can continue operating before running out of cash, by dividing current cash reserves by the monthly net burn rate (expenses minus revenue), factoring in revenue growth and expense changes over time.",

    quickAnswer:
      "Enter your cash on hand, monthly expenses, and monthly revenue. Adjust growth rates for revenue and expenses. The calculator shows your runway in months, zero-cash date, net burn rate, burn multiple, when to start fundraising, and a month-by-month cash projection. VCs recommend 18-24 months of runway after raising.",

    keyTakeaways: [
      "Startup runway = Cash on Hand / Monthly Net Burn Rate (expenses minus revenue)",
      "VCs recommend maintaining 18-24 months of runway after each fundraise",
      "Start fundraising when you have 6-9 months of runway remaining (rounds take 3-6 months to close)",
      "Net burn rate is the key metric: Monthly Expenses - Monthly Revenue = actual cash depletion",
      "A burn multiple below 1.5x signals efficient growth and Series A readiness",
    ],

    overview:
      "This calculator projects your startup's cash runway by modeling monthly cash flow with revenue growth and expense changes. Enter your current cash balance, monthly operating costs, and revenue, then adjust growth rate sliders to see how long your funding lasts. The tool shows your zero-cash date, net burn rate, burn multiple, recommended fundraise window, a visual cash balance projection, and a detailed monthly breakdown — all compared against current Pre-seed / Seed / Series A industry benchmarks.",

    howToSteps: [
      "Enter your current cash on hand (total bank balance available for operations).",
      "Enter monthly operating expenses (payroll, rent, tools, marketing, etc.) and monthly revenue.",
      "Adjust the revenue growth rate slider (0-30% per month) and expense growth rate if applicable.",
      "Click 'Calculate Runway' to see months of runway, zero-cash date, burn rate, fundraise timing, and full projections.",
    ],

    features: [
      "Runway calculation with iterative month-by-month revenue growth modeling",
      "Cash balance projection chart showing decline curve with color-coded health indicators",
      "Zero-cash date prediction (exact month and year)",
      "Net burn rate and gross burn rate display",
      "Burn multiple score with VC benchmark context",
      "Fundraise window alert (6-9 months before zero-cash)",
      "Revenue growth rate slider (0-30% monthly)",
      "Expense growth rate slider (0-15% monthly)",
      "Monthly breakdown table: revenue, expenses, net burn, cash balance",
      "Current industry benchmarks by startup stage (Pre-seed through Series A)",
    ],

    useCases: [
      "Calculate how long your current funding will last before needing to raise again",
      "Model the impact of revenue growth on extending your runway",
      "Determine when to start your next fundraising process",
      "Compare your burn rate against industry benchmarks for your stage",
      "Show investors your burn efficiency with burn multiple calculations",
      "Plan hiring by understanding how expenses affect runway",
      "Evaluate the impact of cost cuts on extending runway",
      "Prepare for board meetings with clear cash projection data",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Startup Runway Works</h3>
          <p>
            Startup runway is the number of months your company can continue operating before running
            out of cash. The simplest formula is: Runway = Cash / Monthly Net Burn. Net burn rate is
            your total monthly expenses minus monthly revenue. This calculator goes further by modeling
            revenue growth month-by-month, so if your revenue is growing 5% per month, your runway
            extends as net burn decreases over time.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Start Fundraising</h3>
          <p>
            Y Combinator and most VCs advise starting fundraising when you have 6-9 months of runway
            remaining. Since most rounds take 3-6 months to close, this gives you a safety buffer.
            Never let cash drop below 3 months of runway. After closing a round, target 18-24 months
            of runway to give yourself time to hit milestones.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding Burn Multiple</h3>
          <p>
            Burn multiple measures how efficiently you convert spending into revenue growth:
            Burn Multiple = Annual Net Burn / Net New ARR. Investors currently expect a burn multiple
            below 1.5x for Series A readiness. Above 2x makes fundraising significantly harder.
            A burn multiple below 1x means you are growing faster than you are spending — the ideal scenario.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Run this calculator with three scenarios: base case (current trajectory), conservative (no growth), and optimistic (accelerated growth). Show all three in investor decks to demonstrate you understand your unit economics and have contingency plans.",

    faqs: [
      {
        question: "What is startup runway?",
        answer:
          "Startup runway is the number of months a company can continue operating before it runs out of cash. It is calculated by dividing total cash reserves by the monthly net burn rate (total expenses minus revenue).",
      },
      {
        question: "How do you calculate burn rate?",
        answer:
          "Gross burn rate is total monthly operating expenses. Net burn rate subtracts monthly revenue: Net Burn = Monthly Expenses - Monthly Revenue. Net burn is the more useful metric as it shows actual cash depletion.",
      },
      {
        question: "What is a good runway for a startup?",
        answer:
          "VCs recommend 18-24 months of runway after a fundraise. The minimum acceptable runway before initiating fundraising is 6 months. Median startup runway has tightened recently to approximately 12 months in the current funding environment.",
      },
      {
        question: "When should a startup start fundraising?",
        answer:
          "Start fundraising when you have 6-9 months of runway remaining. Most rounds take 3-6 months to close, so this gives you a buffer. Y Combinator advises never letting cash drop below 3 months of runway.",
      },
      {
        question: "What is the difference between gross and net burn rate?",
        answer:
          "Gross burn rate is total monthly cash spent on operations (payroll, rent, tools, marketing). Net burn rate accounts for incoming revenue: Net Burn = Gross Burn - Revenue. Net burn is what actually drains your bank account.",
      },
      {
        question: "What is burn multiple and why does it matter?",
        answer:
          "Burn multiple = Net Burn / Net New ARR. It measures efficiency of spending to revenue growth. Current investor expectations are below 1.5x for Series A. Above 2x makes fundraising significantly harder.",
      },
      {
        question: "How can I extend my startup's runway?",
        answer:
          "Three main strategies: (1) Reduce operating expenses — personnel costs represent 60-70% of burn. (2) Increase revenue through higher sales or annual billing. (3) Raise additional capital. Hiring freezes and vendor renegotiations are the fastest levers.",
      },
      {
        question: "How often should founders check their runway?",
        answer:
          "Y Combinator advises checking runway every week. At minimum, review monthly. Track both the number (months remaining) and the trend (is burn accelerating or decelerating?).",
      },
    ],

    relatedTools: [
      { name: "SaaS Churn Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "SaaS Payback Calculator", href: "/finance-tools/cac-payback-calculator" },
      { name: "ROAS Calculator", href: "/ad-tools/roas-calculator" },
      { name: "Cloudflare Workers Cost Calculator", href: "/dev-tools/cloudflare-workers-cost" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Investment Calculator", href: "/finance-tools/compound-interest" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function StartupRunwayCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<StartupRunwayCalculator />)} />
}
