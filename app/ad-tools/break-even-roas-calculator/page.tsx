import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const ROASCalculator = dynamic(
  () => import("@/components/calculators/roas-calculator").then((mod) => mod.ROASCalculator),
  { loading: () => <ToolLoader /> }
)

// break-even ROAS = 1 / gross margin
const marginRows = [20, 25, 30, 40, 50, 60, 70, 80].map((margin) => ({
  margin,
  beRoas: Math.round((100 / margin) * 100) / 100,
}))

const toolConfig = createToolConfig({
  toolName: "Break-Even ROAS Calculator",
  description:
    "Calculate the ROAS where your ads stop losing money: break-even ROAS = 1 ÷ gross margin. Margin table, tROAS guidance for Google and Meta, and the full calculator.",
  metaTitle: "Break-Even ROAS Calculator — 1 ÷ Gross Margin (Instant)",
  metaDescription:
    "Break-even ROAS = 1 ÷ gross margin: at 40% margin you break even at 2.5x ROAS; at 25% you need 4.0x. Calculate yours, see the margin table, and set your tROAS above it.",
  path: "/ad-tools/break-even-roas-calculator",

  header: {
    title: "Break-Even ROAS Calculator",
    description:
      "Find the exact ROAS where an ad campaign stops losing money — 1 divided by your gross margin — and how far above it you need to run to actually profit.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "orange",
  },

  breadcrumbs: [
    { label: "Ad Tools", href: "/ad-tools/roas-calculator" },
    { label: "ROAS Calculator", href: "/ad-tools/roas-calculator" },
    { label: "Break-Even ROAS", href: "/ad-tools/break-even-roas-calculator" },
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Break-even ROAS calculator: computes the return on ad spend at which a campaign neither makes nor loses money, from gross profit margin. Includes margin lookup table and target-ROAS guidance.",
    alternateName: [
      "Breakeven ROAS Calculator",
      "Break Even Return on Ad Spend",
      "Minimum ROAS Calculator",
      "Profitable ROAS Calculator",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "Break-even ROAS is the return on ad spend at which a campaign neither makes nor loses money: 1 divided by your gross profit margin. Below it every ad dollar destroys value; above it, ads contribute profit.",
    quickAnswer:
      "Break-even ROAS = 1 ÷ gross margin. With a 40% gross margin you break even at 2.5x ROAS — a campaign returning $2.50 per $1 of ad spend makes exactly nothing. At 25% margin you need 4.0x; at 60% margin, 1.67x. Enter your numbers in the calculator above, and set your target ROAS comfortably above the break-even figure.",
    keyTakeaways: [
      "Break-even ROAS = 1 ÷ gross margin (as a decimal): 40% margin → 2.5x, 25% → 4.0x, 50% → 2.0x",
      "Gross margin here = (price − COGS − shipping − fees − payment costs) ÷ price — not just price − COGS",
      "A 3x ROAS campaign is losing money for any business under ~33% gross margin",
      "Set platform tROAS above break-even, not at it — at break-even you work for free",
      "Falling margins raise your break-even silently — recompute after any price or cost change",
    ],
    overview:
      "\"Is 3x ROAS good?\" has no universal answer — it depends entirely on gross margin, and break-even ROAS is the number that connects them. A dropshipper on 20% margins needs 5x just to not lose money, while a 70%-margin SaaS breaks even at 1.43x. This page gives you the number: the calculator computes break-even (and profit at any actual ROAS) from your real unit economics, the table covers common margins, and the sections below show how to plug the result into Google's and Meta's target-ROAS bidding without quietly setting yourself up to scale losses.",

    howToSteps: [
      "Enter revenue and ad spend in the calculator above for your actual ROAS — or switch to advanced mode with your margin for break-even analysis.",
      "Compute gross margin honestly: subtract COGS, shipping, payment processing, and fulfillment from price.",
      "Read your break-even ROAS (1 ÷ margin) and compare your campaigns against it.",
      "Set target ROAS in your ad platform above break-even — the gap between them is your actual profit margin on ad-driven sales.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Break-Even ROAS by Gross Margin</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Gross margin</th>
                  <th className="p-3 text-left">Break-even ROAS</th>
                  <th className="p-3 text-left">A 3.0x campaign is…</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {marginRows.map((row) => (
                  <tr key={row.margin}>
                    <td className="p-3 font-semibold">{row.margin}%</td>
                    <td className="p-3 font-mono">{row.beRoas.toFixed(2)}x</td>
                    <td className="p-3">
                      {3 > row.beRoas
                        ? `profitable (+${Math.round((3 - row.beRoas) * row.margin)}% of ad-driven revenue)`
                        : 3 === row.beRoas
                          ? "exactly break-even"
                          : "losing money"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Read the third column carefully: the identical 3.0x campaign is meaningfully profitable
            at 50% margins and actively destructive at 25%. ROAS without margin context is just a
            number.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Compute the Margin Honestly</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The formula only works with a real contribution margin. Start from price and subtract
            everything that scales with the sale: cost of goods, inbound + outbound shipping,
            payment processing (~3%), marketplace or platform fees, packaging, and expected
            returns/refunds at your historical rate. What&apos;s left over price is the margin to
            invert. The classic mistake is using price − COGS alone — it flatters the margin,
            lowers your apparent break-even, and lets an unprofitable campaign look fine for
            months. Fixed costs (rent, salaries, software) stay out of it; break-even ROAS is a
            per-order contribution question.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">From Break-Even to Target ROAS (Google &amp; Meta)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Google Ads tROAS is set as a percentage (3.5x = 350%), Meta&apos;s ROAS goal as a
            decimal — both answer &quot;how hard should the algorithm chase efficiency,&quot; and
            both should sit above your break-even with intent. A practical ladder: at break-even
            you&apos;re buying customers at cost (defensible only when lifetime value or repeat
            purchases carry the profit); break-even × 1.2–1.5 is a common target for sustainable
            prospecting; much higher targets throttle delivery — the algorithm finds fewer auctions
            it can win at that efficiency, so volume falls. If LTV is real in your business, it&apos;s
            also legitimate to set the target below first-order break-even — just do it as an
            explicit payback-period decision, not an accident.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Recompute break-even after every cost change — a supplier hike from 60% to 55% margin moves your break-even from 1.67x to 1.82x, and every campaign that was 'fine' at 1.7x is now underwater. Margins move; the tROAS you set six months ago doesn't.",

    faqs: [
      {
        question: "What is break-even ROAS?",
        answer:
          "The return on ad spend at which a campaign makes exactly zero profit: 1 ÷ gross margin. With a 40% gross margin, $1 of ad spend needs $2.50 of revenue to cover both the ad and the product costs — so 2.5x is break-even, anything above it is profit, anything below is loss.",
      },
      {
        question: "Is a 3x ROAS good?",
        answer:
          "Only relative to your margin. At 50% gross margin, 3x is comfortably profitable (break-even is 2x). At 33% margin, 3x is exactly break-even — you're working for free. At 25% margin (break-even 4x), a 3x campaign loses a quarter of its cost of goods on every ad-driven sale.",
      },
      {
        question: "What margin should I use in the formula?",
        answer:
          "Contribution margin per order: price minus COGS, shipping, payment fees, platform fees, packaging, and expected returns — divided by price. Not just price minus COGS (too flattering), and not net margin after fixed costs (too harsh — rent doesn't scale with one more sale).",
      },
      {
        question: "Should my target ROAS equal my break-even ROAS?",
        answer:
          "No — at break-even, ads generate zero profit. Set the platform target 20–50% above break-even for prospecting profit, or knowingly at/below it only when customer lifetime value justifies buying customers at first-order cost. The gap between target and break-even IS your profit margin on ad-driven revenue.",
      },
      {
        question: "How is break-even ROAS different from break-even CPA?",
        answer:
          "Same economics, inverted lens: break-even CPA = average order value × gross margin (the most you can pay for a conversion), while break-even ROAS = 1 ÷ margin (the least revenue per ad dollar). Use CPA for lead-gen and fixed-price offers, ROAS when order values vary.",
      },
    ],

    relatedTools: [
      { name: "ROAS Calculator (full)", href: "/ad-tools/roas-calculator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "CAC Payback Calculator", href: "/finance-tools/cac-payback-calculator" },
      { name: "SaaS Churn Calculator", href: "/finance-tools/saas-churn-calculator" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BreakEvenRoasCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ROASCalculator />)} />
}
