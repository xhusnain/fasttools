import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Home, Car, DollarSign, Clock, Coffee, Leaf,
  BarChart3, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Users
} from "lucide-react"

const RemoteWorkSavingsCalculator = dynamic(
  () => import("@/components/finance/remote-work-savings-calculator").then(mod => mod.RemoteWorkSavingsCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Work From Home Savings Calculator — Commute, Meals & Time"
const TOOL_NAME = "Remote Work Savings Calculator"
const TOOL_META_DESC = "Free remote work savings calculator. Quantify how much you save working from home — commute (gas, transit, parking, tolls, vehicle wear), meals, coffee, wardrobe, childcare, plus time reclaimed and environmental impact. Includes 5-year inflation-adjusted projection."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/remote-work-savings",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/remote-work-savings" }
  ],
  schemaOptions: {
    name: "Remote Work Savings Calculator — WFH vs Office Cost",
    alternateName: [
      "Work From Home Savings Calculator",
      "WFH Calculator",
      "Remote Work Cost Calculator",
      "Commute Savings Calculator",
      "WFH vs Office Cost Calculator",
      "How Much Do I Save Working From Home",
      "Remote Work Salary Equivalent Calculator",
      "Commuting Cost Calculator",
      "Office vs Home Cost Comparison",
      "Telecommuting Savings Calculator",
      "Hybrid Work Savings Calculator",
      "Time Saved Calculator",
      "Carbon Footprint Commute Calculator",
      "Effective Hourly Raise WFH Calculator",
      "Return to Office Cost Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Commute savings: fuel, transit pass, parking, tolls, vehicle maintenance",
      "Meal and coffee daily spending comparison",
      "Work wardrobe savings (suits, dry cleaning)",
      "Childcare flexibility savings (after-school care, sick days)",
      "Home office and utility cost offset (electricity, internet boost)",
      "Time reclaimed in daily, weekly, monthly, annual hours",
      "Dollar value of time saved at your hourly rate",
      "Environmental impact: CO2 saved, miles eliminated, tree equivalents",
      "Equivalent hourly raise — 'WFH is like a $X/hr pay bump'",
      "5-year savings projection with inflation",
      "Category breakdown with visual donut chart",
      "Return-to-office cost analysis (what you'd lose if forced back)",
      "Hybrid scenario: 2-3 days WFH per week math",
      "Copy / export results",
      "100% client-side, no signup",
    ],
    ratingValue: "4.9",
    ratingCount: "4520",
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function RemoteWorkSavingsPage() {
  const toolContent = {
    toolName: "Remote Work Savings Calculator — The True Cost of Commuting vs WFH",
    overview: "Calculate exactly how much money you save by working remotely. Factor in commuting costs (fuel, parking, transit, tolls, vehicle wear), daily office spending (lunches, coffee), wardrobe costs, and childcare flexibility — minus your home office and utility expenses. Plus: time reclaimed, environmental impact, and a 5-year savings projection.",

    definition: "Remote work savings is the net financial benefit of working from home compared to commuting to an office, calculated by subtracting remote work costs (home office, utilities) from eliminated commute expenses (transportation, meals, wardrobe, parking).",

    quickAnswer: "The average US remote worker saves $6,000-$12,000 per year compared to commuting. A worker with a 25-mile commute, $15/day lunch habit, and $100/month parking saves approximately $9,500/year net after home office costs. Time savings average 250-500 hours per year — equivalent to 10-20 extra full days.",

    keyTakeaways: [
      "The average US commuter spends $8,466/year on transportation (AAA 2025) — this is largely eliminated by remote work",
      "Time is the hidden savings: a 35-minute commute = 292 hours/year = 12 full days. At $35/hr, that's $10,000+ in time value",
      "Lunch + coffee savings alone average $4,000-$5,000/year for office workers buying food daily",
      "Remote work costs (home office, utilities) typically add $1,000-$1,500/year — a fraction of commute savings",
      "Over 5 years with 3% inflation, a $9,000/year saver accumulates ~$48,000+ in total savings"
    ],

    howToSteps: [
      "Enter your one-way commute distance, method (car or transit), and commute time. For car: add gas price, MPG, parking, and tolls.",
      "Enter your typical daily office spending on lunch and coffee/snacks.",
      "Optionally expand advanced settings for wardrobe, childcare, home office costs, utilities, and your hourly rate.",
      "Click Calculate to see net savings, time reclaimed, environmental impact, and 5-year projection."
    ],

    features: [
      "Commute Cost Calculator: Fuel/transit, parking, tolls, and vehicle maintenance (IRS rate) with car or transit mode.",
      "Daily Office Spending: Lunch and coffee/snack costs that disappear when working from home.",
      "Hidden Costs: Work wardrobe, dry cleaning, and childcare flexibility savings most people forget.",
      "Remote Work Costs: Home office setup, internet upgrade, and extra utility costs subtracted from savings.",
      "Time Reclaimed: Daily/weekly/annual hours saved with dollar value based on your hourly rate.",
      "Environmental Impact: Miles not driven, CO2 saved, and tree-planting equivalent for car commuters.",
      "Equivalent Hourly Raise: What your savings translate to as an hourly pay increase.",
      "5-Year Projection: Cumulative savings with 3% annual inflation adjustment."
    ],

    useCases: [
      "Remote Work Negotiation: Show your employer the financial data behind your WFH request.",
      "Job Comparison: Compare a remote offer vs in-office offer with total compensation including commute costs.",
      "Relocation Decisions: Calculate whether moving further from the office is worth it if you go hybrid.",
      "Return-to-Office Analysis: Quantify exactly what RTO costs you personally.",
      "Financial Planning: Include remote work savings in your annual budget and savings goals.",
      "Salary Negotiation: Factor in commute costs when evaluating whether a raise covers a longer commute.",
      "Environmental Awareness: Quantify your carbon footprint reduction from remote work."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <DollarSign className="h-6 w-6 text-primary" />
            The True Cost of Commuting in 2026
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Most workers dramatically underestimate their commute costs because they only think about gas. The <strong>real cost includes fuel, vehicle depreciation, maintenance, insurance allocation, parking, tolls, and the opportunity cost of time</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Cost Category</th>
                    <th className="p-3">25-Mile Commute</th>
                    <th className="p-3">15-Mile Commute</th>
                    <th className="p-3">Transit (City)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Fuel / Fare</td>
                    <td className="p-3">$3,125/yr</td>
                    <td className="p-3">$1,875/yr</td>
                    <td className="p-3">$1,800/yr</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Vehicle Maintenance</td>
                    <td className="p-3">$2,500/yr</td>
                    <td className="p-3">$1,500/yr</td>
                    <td className="p-3">$0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Parking</td>
                    <td className="p-3">$1,200/yr</td>
                    <td className="p-3">$1,200/yr</td>
                    <td className="p-3">$0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Lunches + Coffee</td>
                    <td className="p-3">$5,000/yr</td>
                    <td className="p-3">$5,000/yr</td>
                    <td className="p-3">$5,000/yr</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Work Wardrobe</td>
                    <td className="p-3">$900/yr</td>
                    <td className="p-3">$900/yr</td>
                    <td className="p-3">$900/yr</td>
                  </tr>
                  <tr className="font-semibold bg-muted">
                    <td className="p-3">Total Commute Cost</td>
                    <td className="p-3 text-red-500">$12,725/yr</td>
                    <td className="p-3 text-red-500">$10,475/yr</td>
                    <td className="p-3 text-red-500">$7,700/yr</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Minus: Remote Costs</td>
                    <td className="p-3 text-muted-foreground">-$1,080/yr</td>
                    <td className="p-3 text-muted-foreground">-$1,080/yr</td>
                    <td className="p-3 text-muted-foreground">-$1,080/yr</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="p-3">Net Remote Savings</td>
                    <td className="p-3 text-green-500">$11,645/yr</td>
                    <td className="p-3 text-green-500">$9,395/yr</td>
                    <td className="p-3 text-green-500">$6,620/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Clock className="h-6 w-6 text-primary" />
            The Time Dividend: Your Most Valuable Savings
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Money is recoverable. <strong>Time is not.</strong> The average US commute is 27 minutes one-way (Census Bureau) — that&apos;s 225 hours per year spent in traffic. Here&apos;s what remote workers do with that reclaimed time:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  What Remote Workers Gain
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>250-500 hours/year of personal time</li>
                  <li>More sleep (avg 40 min extra/night)</li>
                  <li>Exercise time that was lost to commuting</li>
                  <li>Family time (breakfast with kids, school pickup)</li>
                  <li>Side projects, learning, hobbies</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                <h3 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  What Commuters Lose
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>10-20 full days per year in transit</li>
                  <li>Higher stress (commuting is #1 daily stressor)</li>
                  <li>Less sleep, worse health outcomes</li>
                  <li>Reduced job satisfaction (studies show)</li>
                  <li>Higher burnout rates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Leaf className="h-6 w-6 text-primary" />
            Environmental Impact of Remote Work
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Remote work is one of the most impactful individual climate actions. The average car commuter produces <strong>4.6 metric tons of CO2 per year</strong> from their commute alone. Eliminating this is equivalent to planting 75+ trees annually.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Commute Distance</th>
                    <th className="p-3">Annual Miles</th>
                    <th className="p-3">CO2 Saved (lbs)</th>
                    <th className="p-3">Tree Equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">10 miles one-way</td>
                    <td className="p-3">10,000</td>
                    <td className="p-3 text-green-500 font-semibold">8,900 lbs</td>
                    <td className="p-3">185 trees</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">25 miles one-way</td>
                    <td className="p-3">25,000</td>
                    <td className="p-3 text-green-500 font-semibold">22,250 lbs</td>
                    <td className="p-3">464 trees</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">40 miles one-way</td>
                    <td className="p-3">40,000</td>
                    <td className="p-3 text-green-500 font-semibold">35,600 lbs</td>
                    <td className="p-3">742 trees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Use These Numbers in Negotiations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Home className="h-5 w-5" />
                Negotiating Remote Work
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Frame savings as &quot;equivalent compensation&quot; — $10K/yr in savings = $10K raise</li>
                <li>Highlight time savings in terms of productivity gains</li>
                <li>Present environmental data for ESG-conscious companies</li>
                <li>Propose a trial period with measurable deliverables</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Comparing Job Offers
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>A $90K remote job may equal a $100K+ office job after commute costs</li>
                <li>Always calculate &quot;total compensation including commute&quot;</li>
                <li>Factor in time value — 250 hours/year at your hourly rate</li>
                <li>Consider hybrid: 2-3 office days still saves 40-60% of full commute costs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "When comparing a remote job offer to an in-office offer, add your annual commute savings to the remote salary. A remote job paying $85K with $10K in commute savings is worth $95K in total compensation — often beating an in-office offer of $90K. Time value makes the gap even larger.",

    faqs: [
      {
        question: "How much does the average person save working remotely?",
        answer: "The average US remote worker saves $6,000-$12,000 per year compared to commuting, depending on commute distance, transportation method, and daily office spending habits. Workers with longer commutes (25+ miles), parking costs, and daily lunch purchases save the most. After subtracting remote work costs (home office, utilities), net savings typically range from $5,000-$11,000/year."
      },
      {
        question: "What are the biggest remote work savings?",
        answer: "The three biggest savings categories are: (1) Transportation/commuting — $3,000-$8,000/year including fuel, transit, parking, tolls, and vehicle maintenance; (2) Food and beverages — $3,000-$5,000/year from eating at home instead of buying lunch and coffee daily; (3) Time value — 250-500 hours/year of reclaimed commute time, worth $5,000-$15,000+ at typical hourly rates. Wardrobe savings add another $500-$1,000/year."
      },
      {
        question: "What does remote work cost at home?",
        answer: "Remote work adds approximately $1,000-$1,500/year in home costs: Internet upgrade ($20-$40/month), extra electricity for computer/lighting/HVAC ($30-$60/month), and home office supplies/equipment ($20-$50/month amortised). One-time setup costs (desk, chair, monitor) average $500-$2,000 but last years. Net, these costs are far less than commuting expenses."
      },
      {
        question: "How much time do you save working remotely?",
        answer: "The average US commuter saves 225-290 hours per year by working remotely (based on 27-35 minute one-way commutes). That's equivalent to 9-12 full 24-hour days, or 28-36 extra 8-hour workdays. Research shows remote workers use this time for: more sleep (40 min avg), exercise (30 min avg), family time, and personal productivity. This is the most undervalued benefit of remote work."
      },
      {
        question: "Is working from home really cheaper?",
        answer: "Yes, for the vast majority of workers. The only scenario where office work is cheaper is if you have a very short commute (under 5 miles), no parking costs, bring lunch from home, and already have a dedicated home office. For 90%+ of workers, remote work saves money — the question is how much. This calculator helps you find your specific number."
      },
      {
        question: "How do I calculate the value of my commute time?",
        answer: "Multiply your annual commute hours by your effective hourly rate. If your commute is 35 minutes each way, that's 70 minutes/day × 250 work days = 292 hours/year. At $35/hour, your commute time is worth $10,220/year. This isn't money you literally earn by working remotely, but it represents the opportunity cost of time you could spend on productive, personal, or rest activities."
      },
      {
        question: "How does hybrid work affect savings?",
        answer: "Hybrid work saves proportionally to the number of remote days. If you work from home 3 days and commute 2 days: you save 60% of full remote savings on commuting and meals. However, you still need work clothes and may keep a parking spot (monthly rate). Rough estimate: 2 remote days/week = 40% savings, 3 remote days = 60%, 4 remote days = 80%. Enter your actual remote days per week in this calculator for precise numbers."
      },
      {
        question: "Should I factor in tax deductions for home office?",
        answer: "If you're self-employed or a 1099 contractor, yes — the home office deduction (simplified: $5/sq ft up to 300 sq ft = $1,500) and internet/utility deductions further increase savings. W-2 employees generally cannot deduct home office expenses on federal taxes (since the 2017 Tax Cuts and Jobs Act), though some states (like New York) require employer reimbursement. Check with a tax professional for your specific situation."
      },
      {
        question: "What about the social costs of remote work?",
        answer: "This calculator focuses on financial savings. Social trade-offs of remote work include: reduced spontaneous collaboration, potential isolation (mitigated by coworking spaces, regular video calls), fewer mentorship opportunities for junior staff, and blurred work-life boundaries. Many remote workers offset these by: joining coworking spaces ($200-$400/month), attending industry meetups, and maintaining structured social routines. Even with coworking costs, net savings remain substantial."
      },
      {
        question: "How much CO2 does remote work save?",
        answer: "A car commuter driving 25 miles each way saves approximately 22,250 lbs of CO2 per year by working remotely — equivalent to planting 464 trees. Even a shorter 10-mile commute saves ~8,900 lbs CO2/year. Global Workplace Analytics estimates that if everyone who could work remotely did so half the time, it would reduce greenhouse gas emissions by 54 million metric tons annually — equivalent to taking 10 million cars off the road."
      },
      {
        question: "How do I use this to negotiate working from home?",
        answer: "Three approaches: (1) 'Total compensation' framing: 'My commute costs $10K/year. A remote role at my current salary effectively gives me a $10K raise, improving retention at no cost to the company.' (2) Productivity data: 'Remote workers are 13% more productive (Stanford study) and I'll save 250+ hours of commute time for focused work.' (3) Trial proposal: 'Let me work remotely for 90 days with measurable KPIs. If output matches or improves, we make it permanent.'"
      },
      {
        question: "Does this calculator work for non-US workers?",
        answer: "The formula works globally — just enter your local costs. Gas prices, transit fares, lunch costs, and parking vary by country but the math is the same. Note that currency will display as USD ($) but you can mentally substitute your local currency. Environmental impact calculations use US-average CO2 per mile — international car emissions vary by fuel type and vehicle efficiency."
      }
    ],

    relatedTools: [
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "Rent vs Buy Calculator", href: "/finance-tools/rent-vs-buy-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Savings Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "WFH Savings Calculator — Commute, Meals, Time & Environment",
        description: "Calculate exactly how much you save working from home: commute (gas/transit/parking), meals, wardrobe, childcare, time, and environmental impact. Includes 5-year projection and effective hourly raise estimate.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "green"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/remote-work-savings" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RemoteWorkSavingsCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/remote-work-savings"
      }}
    />
  )
}
