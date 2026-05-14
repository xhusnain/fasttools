import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Clock, DollarSign, TrendingUp, BarChart3, Target,
  CheckCircle, AlertTriangle, Lightbulb, Shield, Users, Zap
} from "lucide-react"

const SaaSPaybackCalculator = dynamic(
  () => import("@/components/finance/saas-payback-calculator").then(mod => mod.SaaSPaybackCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "CAC Payback Calculator — LTV:CAC, Unit Economics & ROI"
const TOOL_NAME = "SaaS Payback Period Calculator"
const TOOL_META_DESC = "Free CAC payback period calculator. Compute months-to-recover, LTV:CAC ratio, customer lifetime value, and 36-month ROI projection. Includes industry benchmarks (Enterprise, B2B SMB, B2C, VC-backed) and personalized improvement guidance."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/saas-payback-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/saas-payback-calculator" }
  ],
  schemaOptions: {
    name: "SaaS Payback Period Calculator with LTV:CAC",
    alternateName: [
      "CAC Payback Calculator",
      "SaaS Unit Economics Calculator",
      "LTV CAC Calculator",
      "LTV to CAC Ratio Calculator",
      "SaaS ROI Calculator",
      "Customer Acquisition Cost Calculator",
      "Customer Payback Period Calculator",
      "Months to Recover CAC Calculator",
      "SaaS Profitability Calculator",
      "Gross-Margin LTV Calculator",
      "Magic Number Calculator",
      "SaaS Efficiency Calculator",
      "CAC Ratio Calculator",
      "Sales Efficiency Calculator",
      "Bessemer SaaS Efficiency Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "CAC payback period in months",
      "Customer Lifetime Value (LTV) calculation with gross margin",
      "LTV:CAC ratio with health rating (3:1 healthy, 5:1 great)",
      "36-month payback projection accounting for churn",
      "ROI milestones at 12 / 24 / 36 months",
      "Industry benchmarks: Enterprise (~12-18 mo payback), B2B SMB (~12 mo), B2C (~3-6 mo), VC-backed",
      "Magic Number calculation (Bessemer efficiency score)",
      "Personalized recommendations to improve unit economics",
      "Gross margin and churn rate factored in",
      "Side-by-side scenario comparison",
      "Copy / export results",
      "100% client-side, no signup",
    ],
    ratingValue: "4.8",
    ratingCount: "3260",
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function SaaSPaybackCalculatorPage() {
  const toolContent = {
    toolName: "SaaS Payback Period Calculator — How Fast Do You Recover CAC?",
    overview: "Calculate your SaaS CAC payback period, LTV:CAC ratio, customer lifetime value, and 36-month ROI projection. Input your CAC, ARPU, gross margin, and churn rate to see exactly how many months it takes to recover your customer acquisition investment — with industry benchmarks and actionable recommendations.",

    definition: "The SaaS CAC payback period is the number of months it takes to recover the cost of acquiring a customer (CAC) from the gross profit that customer generates. It is the primary metric for evaluating the efficiency and sustainability of SaaS growth spending.",

    quickAnswer: "To calculate SaaS payback period: divide your Customer Acquisition Cost (CAC) by your monthly gross profit per customer (ARPU × Gross Margin %). For example, $600 CAC / ($100 ARPU × 80% margin) = $600 / $80 = 7.5 months payback. A healthy B2B SaaS target is under 12 months.",

    keyTakeaways: [
      "Payback period = CAC / (ARPU × Gross Margin) — the simplest and most important SaaS unit economics formula",
      "Target payback: B2C < 6 months, B2B SMB < 12 months, Enterprise < 18 months, VC-backed < 24 months",
      "LTV:CAC ratio should be at least 3:1 for sustainable growth — below 3:1 means you're spending too much to acquire customers",
      "Churn is the hidden payback killer — a 5% monthly churn means your average customer only stays 20 months, capping your LTV",
      "Investors care more about payback period and LTV:CAC than raw revenue growth — these metrics determine capital efficiency"
    ],

    howToSteps: [
      "Enter your Customer Acquisition Cost (CAC) — total sales + marketing spend divided by new customers acquired.",
      "Enter your Monthly ARPU (Average Revenue Per User) — total MRR divided by total customers.",
      "Set your gross margin percentage (SaaS average: 70-85%) and monthly churn rate.",
      "Click Calculate to see payback period, LTV, LTV:CAC ratio, 36-month projection, and benchmarks."
    ],

    features: [
      "Payback Period: Months to recover CAC from gross profit, with formatted display (e.g., '1y 3m').",
      "LTV:CAC Ratio: The golden SaaS metric — with rating from Excellent (>5:1) to Critical (<2:1).",
      "36-Month Projection: Month-by-month cumulative gross profit vs CAC, accounting for churn attrition.",
      "ROI Milestones: Return on customer acquisition at 12, 24, and 36 months including churn impact.",
      "Industry Benchmarks: Compare your payback against Enterprise, B2B SMB, B2C, and VC-backed targets.",
      "Churn-Adjusted Math: All projections factor in monthly churn for realistic (not optimistic) estimates.",
      "Actionable Recommendations: Priority-ranked suggestions when metrics fall below benchmarks.",
      "Payback Health Rating: Instant assessment from Excellent to Critical with context."
    ],

    useCases: [
      "SaaS Founders: Validate that your unit economics support sustainable growth before scaling spend.",
      "CFOs & Finance: Build financial models with accurate payback and LTV assumptions.",
      "Investor Due Diligence: Evaluate SaaS startups by calculating true payback from reported metrics.",
      "Board Reporting: Present CAC payback and LTV:CAC trends in board decks.",
      "Growth Teams: Determine maximum allowable CAC based on ARPU and retention targets.",
      "Channel Comparison: Compare payback periods across acquisition channels to optimise spend allocation.",
      "Fundraising: Demonstrate capital efficiency to investors with precise unit economics."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Clock className="h-6 w-6 text-primary" />
            Understanding SaaS Payback Period
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The <strong>CAC payback period</strong> answers the most fundamental question in SaaS economics: <em>&quot;How long until each new customer pays for themselves?&quot;</em> Until a customer&apos;s cumulative gross profit exceeds their acquisition cost, that customer is a net loss on your balance sheet.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">The Core Formulas</h3>
              <div className="space-y-2">
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Payback Period (months) = CAC / (ARPU × Gross Margin %)
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  LTV = ARPU × Gross Margin × (1 / Monthly Churn Rate)
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  LTV:CAC Ratio = LTV / CAC (target: ≥ 3:1)
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Target className="h-6 w-6 text-primary" />
            Payback Period Benchmarks by Segment
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Segment</th>
                  <th className="p-3">Target Payback</th>
                  <th className="p-3">Target LTV:CAC</th>
                  <th className="p-3">Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">B2C SaaS</td>
                  <td className="p-3 text-green-500 font-semibold">&lt; 6 months</td>
                  <td className="p-3">3:1 – 4:1</td>
                  <td className="p-3 text-muted-foreground">Low ARPU demands fast payback. High churn makes long payback unsustainable.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">B2B SMB SaaS</td>
                  <td className="p-3 text-blue-500 font-semibold">&lt; 12 months</td>
                  <td className="p-3">3:1 – 5:1</td>
                  <td className="p-3 text-muted-foreground">The gold standard. 12-month payback allows profitable growth at scale.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Enterprise SaaS</td>
                  <td className="p-3 text-yellow-500 font-semibold">&lt; 18 months</td>
                  <td className="p-3">5:1 – 8:1</td>
                  <td className="p-3 text-muted-foreground">Longer sales cycles justify longer payback. High LTV compensates.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">VC-Backed Growth</td>
                  <td className="p-3 text-orange-500 font-semibold">&lt; 24 months</td>
                  <td className="p-3">3:1+</td>
                  <td className="p-3 text-muted-foreground">Investors accept longer payback if LTV:CAC is strong and growth is rapid.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <DollarSign className="h-6 w-6 text-primary" />
            The LTV:CAC Ratio Explained
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The <strong>LTV:CAC ratio</strong> is the ratio of customer lifetime value to acquisition cost. It tells you how much value each dollar of acquisition spending generates over the customer&apos;s lifetime.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                <h3 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Below 3:1
                </h3>
                <p className="text-sm text-muted-foreground">Spending too much to acquire customers. Growth is unsustainable without improvement in retention, pricing, or CAC efficiency.</p>
              </div>
              <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  3:1 to 5:1
                </h3>
                <p className="text-sm text-muted-foreground">Healthy and sustainable. This is the target range for most SaaS companies. Growth spending is generating strong returns.</p>
              </div>
              <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                <h3 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Above 5:1
                </h3>
                <p className="text-sm text-muted-foreground">Excellent unit economics — but you may be under-investing in growth. Consider increasing acquisition spend to capture more market share.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Shorten Your Payback Period
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Increase Revenue Per Customer
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Raise prices (most SaaS is underpriced by 30-50%)</li>
                <li>Add usage-based pricing tiers</li>
                <li>Upsell add-on features or seats</li>
                <li>Implement annual billing with discount (improves cash flow)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Reduce Acquisition Cost
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Optimise ad spend (kill low-performing channels)</li>
                <li>Invest in content/SEO (lower CAC over time)</li>
                <li>Build referral and word-of-mouth programs</li>
                <li>Shorten sales cycles with better qualification</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Improve Retention
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Improve onboarding to drive activation</li>
                <li>Proactive customer success for high-value accounts</li>
                <li>Reduce involuntary churn (dunning, card updates)</li>
                <li>Build switching costs (integrations, data lock-in)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Improve Gross Margin
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Reduce hosting costs (optimise infrastructure)</li>
                <li>Automate support with self-serve and AI</li>
                <li>Negotiate better vendor contracts at scale</li>
                <li>Target 80%+ gross margin (SaaS best practice)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "The payback formula assumes constant ARPU, but the best SaaS companies have net negative revenue churn — meaning existing customers expand over time. If your expansion revenue exceeds churned revenue, your real payback period is shorter than the formula suggests. Track 'fully-loaded payback' that includes expansion MRR for a more optimistic (and accurate) picture.",

    faqs: [
      {
        question: "What is a good SaaS payback period?",
        answer: "It depends on your segment. B2C SaaS should target under 6 months. B2B SMB SaaS should aim for under 12 months — this is the gold standard. Enterprise SaaS can justify up to 18 months due to higher LTV. VC-backed companies in growth mode may accept up to 24 months if LTV:CAC exceeds 3:1. Any payback over 24 months is a red flag for most investors."
      },
      {
        question: "How do you calculate SaaS payback period?",
        answer: "Payback Period = CAC / (Monthly ARPU × Gross Margin %). For example: $600 CAC / ($100 ARPU × 80% margin) = $600 / $80 = 7.5 months. This means it takes 7.5 months of gross profit from a customer to recover what you spent acquiring them. Some companies use revenue-based payback (without gross margin), but profit-based is more accurate."
      },
      {
        question: "What is the LTV:CAC ratio and what should it be?",
        answer: "LTV:CAC is the ratio of Customer Lifetime Value to Customer Acquisition Cost. It measures the return on your acquisition spending. Target ratios: 3:1 minimum for sustainability (you earn $3 for every $1 spent), 3:1-5:1 is healthy, above 5:1 is excellent (but you may be under-investing in growth). Below 3:1 means you're spending too much to acquire customers relative to what they generate."
      },
      {
        question: "How does churn rate affect payback period?",
        answer: "Churn doesn't directly change the payback formula, but it caps your LTV and real-world ROI. With 5% monthly churn, your average customer lasts 20 months. If payback is 15 months, you only get 5 months of profit after recovery. With 2% churn (50-month lifespan), you get 35 months of profit. Churn is the biggest lever for improving LTV:CAC — reducing churn from 5% to 3% increases LTV by 67%."
      },
      {
        question: "Should I use revenue or gross profit for payback calculation?",
        answer: "Use gross profit (ARPU × Gross Margin %). Revenue-based payback is misleading because it ignores the direct costs of serving each customer (hosting, support, payment processing). A company with $100 ARPU but 50% margin ($50 GP) has a very different payback than one with $100 ARPU and 85% margin ($85 GP). Gross profit payback is the industry standard used by investors and analysts."
      },
      {
        question: "What is a good gross margin for SaaS?",
        answer: "SaaS gross margins typically range from 70-85%. Best-in-class SaaS companies achieve 80-90%. Gross margin below 70% is a concern — it usually means high hosting costs, expensive support, or services-heavy delivery. To improve: optimise cloud infrastructure, automate customer support, reduce professional services dependency, and negotiate better vendor contracts."
      },
      {
        question: "How do I calculate CAC?",
        answer: "CAC = Total Sales & Marketing Spend / Number of New Customers Acquired (in the same period). Include: paid advertising, sales team salaries and commissions, marketing team salaries, tools and software, content production, events, and agency fees. Exclude: customer success (that's retention, not acquisition), product development, and G&A. Calculate monthly or quarterly for best accuracy."
      },
      {
        question: "What if my payback period is longer than my average customer lifespan?",
        answer: "This is a critical problem — it means you never recover your CAC on an average customer. You're losing money on every customer you acquire. Immediate actions: (1) Reduce CAC aggressively — cut worst-performing channels; (2) Increase ARPU — raise prices or add paid tiers; (3) Improve retention — fix the top churn reasons; (4) Consider whether your business model is viable in current form. If payback > lifespan, growth actually accelerates losses."
      },
      {
        question: "How does annual billing affect payback?",
        answer: "Annual billing dramatically improves cash flow payback. If a customer pays $1,200 upfront (annual) vs $100/month, you recover a $600 CAC in month 1 instead of month 7.5. This is why many SaaS companies offer 15-20% discounts for annual plans — the improved cash flow is worth more than the discount. Track both 'cash payback' (when cash is collected) and 'profit payback' (when GP exceeds CAC)."
      },
      {
        question: "What do investors look for in payback metrics?",
        answer: "Top investor expectations: (1) Payback under 18 months for most B2B SaaS; (2) LTV:CAC of 3:1+ (5:1+ is impressive); (3) Improving trend over time (payback getting shorter); (4) Consistency across cohorts (not just the average); (5) CAC by channel (which channels have best payback). Series A investors typically want to see 12-month payback; growth-stage investors may accept 18-24 months with strong LTV:CAC."
      },
      {
        question: "How does net negative churn improve payback?",
        answer: "Net negative churn means expansion revenue from existing customers exceeds lost revenue from cancellations. This makes your real payback shorter than the formula suggests because ARPU increases over time. Example: if ARPU grows from $100 to $120 by month 12 through upsells, your cumulative gross profit is higher than the formula's constant-ARPU assumption. Track 'fully-loaded payback' that includes expansion for a more complete picture."
      },
      {
        question: "Should I compare payback across acquisition channels?",
        answer: "Absolutely. Different channels have very different CACs and customer quality. Organic/SEO customers might have $50 CAC (3-month payback), while paid ads customers might have $800 CAC (10-month payback). But paid customers might have higher ARPU or lower churn. Calculate payback per channel to: kill unprofitable channels, double down on efficient ones, and set channel-specific CAC caps."
      },
      {
        question: "How is this different from your SaaS Churn Rate Calculator?",
        answer: "The Churn Rate Calculator focuses on measuring and projecting customer/revenue loss. The Payback Period Calculator focuses on acquisition efficiency and unit economics. They're complementary — churn rate is an input to the payback calculation. Use the Churn Rate Calculator first to find your monthly churn, then input that here to get payback, LTV, and LTV:CAC. Together, they give a complete picture of SaaS health."
      }
    ],

    relatedTools: [
      { name: "SaaS Churn Rate Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "Startup Runway Calculator", href: "/finance-tools/startup-runway-calculator" },
      { name: "ROAS Calculator", href: "/ad-tools/roas-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "LLM Training Cost Estimator", href: "/dev-tools/llm-training-cost" },
      { name: "Cloudflare Workers Cost", href: "/dev-tools/cloudflare-workers-cost" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "CAC Payback Calculator — LTV:CAC & Unit Economics",
        description: "Calculate months to recover CAC, LTV:CAC ratio with health rating, and 36-month ROI projection. Built for SaaS founders, CFOs, and investors. Includes industry benchmarks and Bessemer Magic Number.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/saas-payback-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SaaSPaybackCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/saas-payback-calculator"
      }}
    />
  )
}
