import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Briefcase, DollarSign, Clock, TrendingUp, Receipt, Shield,
  Target, CheckCircle, AlertTriangle, Users, BarChart3, Lightbulb
} from "lucide-react"

const FreelanceRateCalculator = dynamic(
  () => import("@/components/finance/freelance-rate-calculator").then(mod => mod.FreelanceRateCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Freelance Rate Calculator — Hourly Rate, Taxes & Profit Margin"
const TOOL_NAME = "Freelance Hourly Rate Calculator"
const TOOL_META_DESC = "Free freelance rate calculator. Find the hourly rate you need to charge — factors in income tax, self-employment tax (15.3%), business expenses, billable hours percentage, vacation, and profit margin. Built for freelancers, consultants, contractors, and agency owners."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/freelance-rate-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/freelance-rate-calculator" }
  ],
  schemaOptions: {
    name: "Freelance Rate Calculator with Tax & Profit Margin",
    alternateName: [
      "Freelance Hourly Rate Calculator",
      "Consulting Fee Calculator",
      "Contractor Hourly Rate Calculator",
      "Self-Employed Rate Calculator",
      "How Much to Charge as a Freelancer",
      "Freelancer Pricing Calculator",
      "Consultant Day Rate Calculator",
      "Independent Contractor Rate Calculator",
      "Freelance Income Calculator",
      "Hourly to Salary for Freelancers",
      "Freelance Pricing Tool",
      "Set Your Rate Calculator",
      "Reverse Salary to Hourly Rate Calculator",
      "Gig Worker Rate Calculator",
      "Solopreneur Rate Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Calculate required hourly rate from desired take-home salary",
      "Factor in federal + state income tax",
      "Self-employment tax (15.3%) included automatically",
      "Business expenses: health insurance, retirement, software, office, equipment",
      "Adjustable billable-hours percentage (typical freelancer bills 60-75%)",
      "Vacation weeks (3+ weeks reduces ~147 hours/year)",
      "Profit margin slider (0-40% on top of base costs)",
      "Daily, weekly, monthly, annual rate output",
      "Reverse mode: given hourly rate, see annual take-home",
      "W-2 equivalent: 'this freelance rate equals working a $X salary job'",
      "Compare 2-3 rate scenarios side by side",
      "Industry benchmark ranges (writing, design, dev, consulting)",
      "Copy results / export breakdown",
      "100% client-side, no signup, no data uploaded",
    ],
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function FreelanceRateCalculatorPage() {
  const toolContent = {
    toolName: "Freelance Hourly Rate Calculator — Set Your Consulting Rate with Confidence",
    overview: "Calculate your ideal freelance hourly rate by factoring in your desired take-home pay, self-employment taxes, business expenses, billable hours, vacation time, and profit margin. Stop guessing and start pricing based on real numbers.",

    definition: "A freelance hourly rate calculator determines the minimum amount you must charge per billable hour to cover your desired salary, taxes, business expenses, and profit margin as a self-employed professional.",

    quickAnswer: "To calculate your freelance rate: add your desired annual salary + taxes + business expenses, multiply by your profit margin, then divide by your total billable hours per year. For example, $80K salary + $34K taxes + $19K expenses = $133K × 1.15 margin = $153K ÷ 1,430 billable hours = ~$107/hour.",

    keyTakeaways: [
      "Your hourly rate must cover far more than just your desired salary — taxes, expenses, and non-billable time can double the number",
      "Most freelancers only bill 60-75% of their working hours — the rest goes to admin, marketing, invoicing, and business development",
      "Self-employment tax alone adds 15.3% on top of your income tax in the US (Social Security + Medicare)",
      "A 15% profit margin is standard — it covers dry spells, business growth, and emergency reserves",
      "Vacation time reduces your billable hours significantly — 3 weeks off means 147 fewer working hours per year"
    ],

    howToSteps: [
      "Enter your desired annual take-home pay — the amount you want in your pocket after everything is paid.",
      "Set your working hours per week, billable percentage (industry avg: 60-75%), and vacation weeks.",
      "Optionally expand Tax & Expense details to customize tax rates and monthly business costs.",
      "Click Calculate to see your recommended hourly, daily, monthly, and annual rates with full breakdown."
    ],

    features: [
      "Take-Home First: Start with the salary you want, and the calculator works backwards to your hourly rate.",
      "Tax-Aware: Includes federal income tax, self-employment tax (15.3% SS + Medicare), and state/local taxes.",
      "Expense Coverage: Factor in health insurance, retirement contributions, software, equipment, office, and more.",
      "Billable Hours Reality: Accounts for the fact that freelancers only bill 60-75% of their working hours.",
      "Vacation Planning: Automatically reduces available hours based on your desired time off.",
      "Profit Margin Comparison: See how rates change across 5 margin levels from 0% to 40%.",
      "Full Cost Visualization: Visual breakdown showing exactly where every dollar goes.",
      "Multi-Format Rates: Hourly, daily, weekly, monthly, and annual rates all calculated at once."
    ],

    useCases: [
      "New Freelancers: Calculate your first rate based on real costs instead of guessing or undercharging.",
      "Consultants: Set consulting fees that account for your full cost structure and desired profit.",
      "Contractors: Determine your 1099 contractor rate equivalent to your previous W-2 salary.",
      "Rate Negotiations: Back up your rate with concrete numbers showing clients exactly what goes into your pricing.",
      "Agency Owners: Calculate minimum rates for team members to ensure profitability.",
      "Side Hustlers: Figure out whether freelance rates make financial sense compared to employment.",
      "Annual Rate Review: Recalculate your rate yearly to account for changing expenses, taxes, and income goals."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Briefcase className="h-6 w-6 text-primary" />
            Why Most Freelancers Undercharge
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The most common mistake new freelancers make is converting their old salary to an hourly rate by dividing by 2,080 hours. This dramatically underestimates what you need to charge because it ignores three critical factors:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                <h3 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Self-Employment Taxes
                </h3>
                <p className="text-sm text-muted-foreground">
                  As an employee, your employer pays half of Social Security and Medicare. As a freelancer, you pay the full <strong className="text-foreground">15.3%</strong> yourself — on top of income tax. This alone can add 30-42% to your tax burden.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Non-Billable Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  You cannot bill for every hour you work. Marketing, invoicing, admin, client calls, proposals, and learning eat <strong className="text-foreground">25-40%</strong> of your time. If you work 40 hours, you may only bill 28.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                <h3 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  No Benefits Package
                </h3>
                <p className="text-sm text-muted-foreground">
                  Health insurance, retirement matching, paid vacation, equipment — employers typically spend <strong className="text-foreground">20-30%</strong> on top of your salary for benefits. As a freelancer, these come out of your rate.
                </p>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">The Core Formula</h3>
              <div className="space-y-2">
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Annual Gross = (Desired Salary + Total Taxes + Total Expenses) × (1 + Profit Margin)
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Hourly Rate = Annual Gross ÷ Billable Hours Per Year
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Billable Hours = (52 - Vacation Weeks) × Weekly Hours × Billable Percentage
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BarChart3 className="h-6 w-6 text-primary" />
            Freelance Rate Benchmarks by Industry
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Industry</th>
                  <th className="p-3">Beginner</th>
                  <th className="p-3">Mid-Level</th>
                  <th className="p-3">Expert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Web Development</td>
                  <td className="p-3">$50–75/hr</td>
                  <td className="p-3">$100–150/hr</td>
                  <td className="p-3">$150–300+/hr</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Graphic Design</td>
                  <td className="p-3">$35–60/hr</td>
                  <td className="p-3">$75–120/hr</td>
                  <td className="p-3">$120–250+/hr</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Content Writing</td>
                  <td className="p-3">$30–50/hr</td>
                  <td className="p-3">$60–100/hr</td>
                  <td className="p-3">$100–200+/hr</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Marketing / SEO</td>
                  <td className="p-3">$50–80/hr</td>
                  <td className="p-3">$100–175/hr</td>
                  <td className="p-3">$175–350+/hr</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Video / Motion</td>
                  <td className="p-3">$40–70/hr</td>
                  <td className="p-3">$80–150/hr</td>
                  <td className="p-3">$150–400+/hr</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Consulting (Business)</td>
                  <td className="p-3">$75–125/hr</td>
                  <td className="p-3">$150–250/hr</td>
                  <td className="p-3">$250–500+/hr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Note:</strong> These are US market rates. Rates vary significantly by location, specialization, and client type (startup vs enterprise). Use these as directional benchmarks, not exact targets.
          </p>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <AlertTriangle className="h-6 w-6 text-primary" />
            W-2 Salary vs Freelance Rate: The Real Math
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              A common question: &quot;I made $100K as an employee — should I charge $50/hour as a freelancer?&quot; The answer is <strong>no</strong>. Here&apos;s why:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Cost Category</th>
                    <th className="p-3">W-2 Employee</th>
                    <th className="p-3">Freelancer (You Pay)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Base Salary</td>
                    <td className="p-3">$100,000</td>
                    <td className="p-3">$100,000 (your goal)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Employer FICA (7.65%)</td>
                    <td className="p-3 text-green-500">Employer pays</td>
                    <td className="p-3 text-red-400">+$15,300 (you pay full 15.3%)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Health Insurance</td>
                    <td className="p-3 text-green-500">~$6,000/yr (employer covers 70-80%)</td>
                    <td className="p-3 text-red-400">+$6,000–12,000/yr (full cost)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Retirement Match</td>
                    <td className="p-3 text-green-500">3-6% match (~$5,000)</td>
                    <td className="p-3 text-red-400">+$6,000/yr (self-funded)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Paid Vacation (3 weeks)</td>
                    <td className="p-3 text-green-500">Included in salary</td>
                    <td className="p-3 text-red-400">-147 billable hours (lost revenue)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Equipment & Software</td>
                    <td className="p-3 text-green-500">Company provides</td>
                    <td className="p-3 text-red-400">+$3,600/yr</td>
                  </tr>
                  <tr className="font-semibold bg-muted">
                    <td className="p-3">True Equivalent Needed</td>
                    <td className="p-3">$100,000</td>
                    <td className="p-3 text-foreground">~$145,000–155,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              To match a $100K salary, most freelancers need to gross <strong className="text-foreground">$145K–$155K+</strong>. At 1,430 billable hours per year (40hrs/week × 70% billable × 49 weeks), that&apos;s <strong className="text-foreground">$101–$108/hour</strong> — not $50/hour.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <DollarSign className="h-6 w-6 text-primary" />
            Understanding Billable vs Non-Billable Hours
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              One of the biggest surprises for new freelancers is how much time goes to non-billable work. Industry data shows freelancers typically bill <strong>60-75%</strong> of their working hours. The rest is essential business overhead:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Billable (60-75%)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Client project work</li>
                  <li>Deliverable creation</li>
                  <li>Client meetings (if billed)</li>
                  <li>Revisions and feedback rounds</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Non-Billable (25-40%)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Marketing & lead generation (5-10%)</li>
                  <li>Proposals & pitching (5-8%)</li>
                  <li>Invoicing & accounting (3-5%)</li>
                  <li>Admin, email, scheduling (5-8%)</li>
                  <li>Learning & skill development (3-5%)</li>
                  <li>Networking & community (2-5%)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            Strategies to Increase Your Effective Rate
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Target className="h-5 w-5" />
                Value-Based Pricing
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Price by project outcome, not hours spent</li>
                <li>Tie pricing to client ROI (e.g., &quot;this redesign will increase conversions by 20%&quot;)</li>
                <li>Package services into fixed-price tiers</li>
                <li>Can earn 2-5x more than hourly billing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Increase Billable Ratio
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Automate invoicing and proposals</li>
                <li>Batch admin tasks to specific days</li>
                <li>Use templates for repeating work</li>
                <li>Hire a VA for $15-25/hr to free up $100+/hr work</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Users className="h-5 w-5" />
                Specialize & Niche Down
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Specialists earn 2-3x more than generalists</li>
                <li>Target a specific industry (e.g., &quot;Shopify dev for DTC brands&quot;)</li>
                <li>Build a reputation and referral pipeline</li>
                <li>Raise rates with each new expertise level</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Retainer Agreements
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Offer monthly retainers for predictable income</li>
                <li>Discount 5-10% vs hourly for guaranteed hours</li>
                <li>Reduces marketing time (no constant client hunting)</li>
                <li>Increases billable ratio to 80-90%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Receipt className="h-6 w-6 text-primary" />
            Tax Deductions Freelancers Often Miss
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Reducing your tax burden directly lowers your required hourly rate. Common deductions many freelancers overlook:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { name: "Home Office Deduction", desc: "Dedicated workspace portion of rent/mortgage, utilities, internet" },
                { name: "Health Insurance Premium", desc: "100% deductible for self-employed individuals" },
                { name: "SE Tax Deduction", desc: "Deduct 50% of self-employment tax from adjusted gross income" },
                { name: "Retirement Contributions", desc: "SEP-IRA up to 25% of net earnings (max $69,000 in 2026)" },
                { name: "Business Equipment (Section 179)", desc: "Full deduction for computers, monitors, desks, cameras" },
                { name: "Software Subscriptions", desc: "Adobe, Figma, hosting, project management tools" },
                { name: "Professional Development", desc: "Courses, books, conferences, certifications" },
                { name: "Business Travel & Meals", desc: "Client meetings, conferences, coworking day passes" },
              ].map((item) => (
                <div key={item.name} className="p-3 bg-muted rounded-lg border border-border">
                  <div className="text-sm font-semibold text-heading-accent">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Tax rules change yearly. Consult a CPA or tax professional for advice specific to your situation. This calculator provides estimates, not tax advice.
            </p>
          </div>
        </section>
      </div>
    ),

    proTip: "Never quote your minimum rate. Your calculator result is your floor — the absolute minimum to meet your financial needs. In practice, charge 10-30% above this based on project complexity, client budget, and your expertise level. You can always negotiate down, but you can't negotiate up.",

    faqs: [
      {
        question: "How do I calculate my freelance hourly rate?",
        answer: "Add your desired annual take-home pay + estimated taxes (income tax + self-employment tax + state tax) + annual business expenses (health insurance, retirement, software, equipment, office). Multiply by your profit margin (typically 1.15 for 15%). Then divide by your total billable hours per year (working weeks × hours/week × billable percentage). This gives you your minimum hourly rate."
      },
      {
        question: "What is a good freelance hourly rate?",
        answer: "It depends on your industry, experience, and location. US benchmarks: Web developers $75-200/hr, designers $60-175/hr, writers $50-150/hr, consultants $100-350/hr. The 'right' rate is one that covers all your costs (salary, taxes, expenses) plus a profit margin, while remaining competitive in your market. Use this calculator to find your personal minimum, then adjust up based on your expertise."
      },
      {
        question: "What percentage of freelance hours are actually billable?",
        answer: "Most freelancers bill 60-75% of their working hours. The remaining 25-40% goes to non-billable but essential tasks: marketing and lead generation (5-10%), proposals and pitching (5-8%), invoicing and accounting (3-5%), admin and communication (5-8%), and professional development (3-5%). New freelancers often start at 50-60% billable and increase to 70-80% as they build systems and referral pipelines."
      },
      {
        question: "How much more should a freelancer charge compared to an employee salary?",
        answer: "As a rule of thumb, freelancers need to gross 1.4-1.6x their equivalent W-2 salary to have the same take-home pay. A $100K employee needs to gross $140K-$160K as a freelancer to cover self-employment taxes (15.3%), health insurance, retirement contributions, equipment, and non-billable time. This calculator does this math precisely for your specific situation."
      },
      {
        question: "What is self-employment tax and how does it affect my rate?",
        answer: "Self-employment tax is 15.3% of your net earnings in the US — it covers Social Security (12.4%) and Medicare (2.9%) taxes. As an employee, your employer pays half (7.65%) and you pay half. As a freelancer, you pay both halves. On $100K income, that's an extra $15,300 in taxes that employees don't pay directly. You can deduct 50% of SE tax when calculating adjusted gross income."
      },
      {
        question: "Should I charge by the hour or by the project?",
        answer: "Both have pros and cons. Hourly billing is simpler, more transparent, and protects you from scope creep. Project-based pricing rewards efficiency, has higher earning potential (you keep the difference if you finish faster), and clients prefer knowing the total cost upfront. Many experienced freelancers use hourly rates as their internal benchmark but quote project prices to clients. Value-based pricing (priced by client outcome) typically yields the highest rates."
      },
      {
        question: "How much profit margin should I add to my freelance rate?",
        answer: "A minimum of 10-15% profit margin is recommended. This isn't 'extra' — it covers: dry spells between clients, business growth investments, emergency expenses, and savings for irregular income months. Conservative freelancers add 10%, standard is 15%, premium/established freelancers add 20-30%. If you're new and building a client base, 20%+ is wise since you'll have more unpaid gaps."
      },
      {
        question: "How do I convert my W-2 salary to a freelance hourly rate?",
        answer: "Don't simply divide your salary by 2,080 hours. Instead: (1) Start with your W-2 salary as your desired take-home; (2) Add 15.3% for self-employment tax; (3) Add your marginal income tax rate; (4) Add annual costs for health insurance, retirement, software, equipment ($15K-$25K+); (5) Add 15% profit margin; (6) Divide by billable hours (typically 1,300-1,500/year). A $100K salary typically translates to $95-$115/hour."
      },
      {
        question: "How many vacation weeks should freelancers take?",
        answer: "Most freelancers take 2-4 weeks off per year. The US average for employees is 2-3 weeks. Remember: unlike employees, you earn $0 during vacation. Each vacation week at $100/hour and 28 billable hours/week costs you $2,800 in lost revenue. The calculator accounts for this — more vacation = higher hourly rate needed. Budget vacation time as a real cost, not free time."
      },
      {
        question: "What business expenses should freelancers include in their rate?",
        answer: "Common monthly expenses: Health insurance ($300-$800+), retirement contributions ($500-$1,000), software subscriptions ($100-$400), equipment depreciation ($50-$200), office/coworking ($0-$500), professional development ($50-$200), accounting/legal ($50-$200), marketing ($50-$300), and insurance ($50-$150). Total typically ranges from $1,200-$3,000/month or $14,400-$36,000/year."
      },
      {
        question: "How often should I raise my freelance rates?",
        answer: "Review rates annually at minimum. Raise rates when: (1) You're booking out more than 2-3 weeks in advance (demand exceeds supply); (2) Your skills or portfolio have improved significantly; (3) Costs have increased (inflation, new expenses); (4) You've niched into a higher-value specialty; (5) It's been over 12 months since your last increase. Typical annual increases: 5-15% for established freelancers. Grandfather existing clients or give 30-60 day notice."
      },
      {
        question: "Is it better to charge a higher rate with fewer clients or lower rate with more clients?",
        answer: "Higher rates with fewer clients is almost always better. Benefits: less client management overhead, more focused deep work, higher quality output, less stress from context switching, and higher effective hourly rate (fewer proposals, less invoicing). The exception is early-career freelancers building a portfolio — volume can help build experience and testimonials faster."
      },
      {
        question: "How do I handle clients who say my rate is too high?",
        answer: "First, don't immediately lower your rate. Instead: (1) Explain what's included (taxes, overhead, expertise); (2) Offer a smaller scope at their budget; (3) Suggest a trial project at your rate; (4) Share relevant results from past work; (5) If they still can't afford you, they may not be your ideal client. Constantly discounting devalues your work and attracts price-sensitive clients who often demand the most."
      },
      {
        question: "What's the difference between billable rate and effective rate?",
        answer: "Your billable rate is what you charge clients per hour. Your effective rate is your actual take-home pay divided by total hours worked (including non-billable). If you charge $100/hour but only bill 70% of your time, and 42% goes to taxes/expenses, your effective rate is roughly $100 × 0.70 × 0.58 = ~$40/hour. The calculator shows both so you understand your true earnings per hour of work."
      },
      {
        question: "Should I charge different rates for different clients?",
        answer: "Yes, most experienced freelancers do. Higher rates for: enterprise clients (larger budgets, more process overhead), rush/urgent work (1.5-2x premium), specialized/complex work, and high-value outcomes. Lower rates (sparingly) for: long-term retainer clients (5-10% discount for guaranteed hours), non-profits you care about, and portfolio-building projects early in your career."
      },
      {
        question: "How do retainer agreements affect my freelance rate?",
        answer: "Retainers typically involve a 5-15% discount on your hourly rate in exchange for guaranteed monthly hours and income predictability. For example, if your rate is $100/hr, you might offer a 20-hour/month retainer at $90/hr ($1,800/month). The trade-off is worth it: retainers reduce marketing time, increase your billable ratio to 80-90%, and provide stable cash flow — often netting you more annual income despite the lower per-hour rate."
      },
      {
        question: "Can this calculator be used for consulting rates?",
        answer: "Yes. The underlying math is identical for freelancers and consultants — both need to cover desired income, taxes, expenses, and non-billable time. Consultants typically charge higher rates ($150-$500+/hr) due to specialized expertise and should factor in higher expenses (travel, professional memberships, continuing education). Adjust the inputs to match your consulting cost structure."
      },
      {
        question: "What if I'm just starting freelancing and have no track record?",
        answer: "Start at 70-80% of the rate this calculator suggests while you build your portfolio. Offer 2-3 projects at reduced rates in exchange for testimonials and case studies. Within 3-6 months, move to your calculated rate. Don't work for free — even beginners have costs to cover. The biggest mistake new freelancers make is setting rates too low and getting stuck there because raising prices with existing clients is harder than starting higher."
      },
      {
        question: "How does location affect freelance rates?",
        answer: "Location impacts rates significantly. US rates are 2-5x higher than developing countries for equivalent skills. Within the US, NYC/SF freelancers charge 20-40% more than rural areas due to cost of living. However, remote work is equalizing this — many freelancers charge US rates while living in lower-cost areas. If you serve US/UK clients, price based on client market rates, not your local cost of living."
      },
      {
        question: "What is the 3x rule for freelance pricing?",
        answer: "The 3x rule is a quick estimation method: take your desired annual salary and divide by 1,000 to get an approximate hourly rate. So $90K salary ÷ 1,000 = $90/hour. This roughly accounts for taxes (~30%), expenses (~20%), and non-billable time (~30%). It's a useful quick check, but this calculator gives you a more precise number based on your actual costs."
      },
      {
        question: "How do I track billable hours accurately?",
        answer: "Use time tracking software like Toggl, Harvest, or Clockify. Track every working hour — both billable and non-billable — for at least one month to understand your real billable ratio. Common mistakes: not tracking small tasks (5-minute emails add up), rounding down out of guilt, and not tracking non-billable work (making your billable percentage seem higher than reality). Accurate tracking is essential for setting realistic rates."
      }
    ],

    relatedTools: [
      { name: "Quarterly Tax Estimator", href: "/finance-tools/quarterly-tax-estimator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Tax Bracket Calculator", href: "/finance-tools/tax-bracket-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Freelance Rate Calculator — Hourly Rate, Taxes & Margin",
        description: "Calculate your required freelance hourly rate based on desired take-home, income tax, self-employment tax (15.3%), business expenses, billable hours, vacation, and profit margin.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "green"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/freelance-rate-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <FreelanceRateCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/freelance-rate-calculator"
      }}
    />
  )
}
