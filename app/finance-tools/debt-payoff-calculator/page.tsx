import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import {
  TrendingDown, DollarSign, TrendingUp, BarChart3, Shield,
  Calculator, Calendar, CreditCard, Zap, Target, BookOpen,
  ArrowDown, ArrowUp, Brain, Scale, CheckCircle
} from "lucide-react"

const DebtPayoffCalculator = dynamic(
  () => import("@/components/finance/debt-payoff-calculator").then(mod => mod.DebtPayoffCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Debt Payoff Calculator — Snowball vs Avalanche Method"
const TOOL_NAME = "Debt Payoff Calculator"
const TOOL_META_DESC = "Free debt payoff calculator with side-by-side snowball vs avalanche comparison. Add multiple debts (credit cards, student loans, auto, personal loans), set extra payment, and see your exact debt-free date, total interest saved, and month-by-month payoff schedule."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/debt-payoff-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/debt-payoff-calculator" }
  ],
  definition: "A debt payoff calculator determines how long it will take to pay off multiple debts using different strategies — the snowball method (smallest balance first) or avalanche method (highest interest rate first) — while factoring in extra payments and payment rollover to find the fastest, cheapest path to becoming debt-free.",
  schemaOptions: {
    name: "Debt Payoff Calculator with Snowball & Avalanche",
    alternateName: [
      "Debt Snowball Calculator",
      "Debt Avalanche Calculator",
      "Debt Repayment Calculator",
      "Debt-Free Calculator",
      "Multi-Debt Payoff Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Side-by-side snowball vs avalanche comparison with $ interest delta",
      "Multiple debt support: credit cards, student loans, auto, personal, medical",
      "Extra monthly payment slider applied to priority debt",
      "Automatic payment rollover when debts are eliminated",
      "Exact debt-free date, total interest, and total paid for each method",
      "Interest savings and months-saved comparison",
      "Payoff order list showing which debts are eliminated first",
      "Full month-by-month payment schedule with principal and interest breakdown",
      "Daily interest cost indicator — see what your debt costs per day",
      "Custom payment priority override (cherry-pick which debt to attack)",
      "Lump-sum payment scenario (windfall, tax refund, bonus)",
      "Copy results to clipboard / export schedule",
      "100% client-side — no signup, no data uploaded",
      "Works for any debt type: cards, loans, BNPL, medical, family loans"
    ]
  },
  faqs: [
    { question: "What is the debt snowball method?", answer: "The debt snowball method pays off debts from smallest balance to largest, regardless of interest rate. You make minimum payments on all debts and put every extra dollar toward the smallest balance. When it's paid off, you roll that payment into the next smallest. The psychological wins of eliminating debts quickly help maintain motivation." },
    { question: "What is the debt avalanche method?", answer: "The debt avalanche method pays off debts from highest interest rate to lowest. You make minimum payments on all debts and put every extra dollar toward the highest-rate debt first. This minimizes total interest paid and is mathematically optimal, though it may take longer to see your first debt eliminated." },
    { question: "Which is better: snowball or avalanche?", answer: "Avalanche saves more money in interest. Snowball provides faster psychological wins. Studies show snowball users are more likely to become debt-free because quick wins maintain motivation. If you have the discipline to stick with a plan, avalanche is cheaper. If you need motivation, snowball is more effective." },
    { question: "How long will it take to pay off my debt?", answer: "It depends on your total balance, interest rates, minimum payments, and extra payments. Use our calculator to find your exact debt-free date. As a rough guide, $20,000 in credit card debt at 20% APR with $500/month payments takes about 62 months (5+ years). Adding $200 extra cuts that to about 38 months." },
    { question: "How much interest will I save with the avalanche method?", answer: "The savings depend on the spread between your interest rates and balances. With diverse rates (6% to 24%), avalanche typically saves $1,000-$3,000 over snowball on $20,000-$50,000 of debt. If all rates are similar, the difference is minimal and snowball's motivational benefit may outweigh the small savings." },
    { question: "What is the fastest way to pay off debt?", answer: "The fastest way is to maximize your extra payments using the avalanche method, which minimizes interest. Other strategies: increase income with a side job, sell unused items, temporarily reduce expenses, use tax refunds and bonuses as lump-sum payments, and avoid taking on new debt while paying off existing balances." },
    { question: "How do extra payments reduce total interest?", answer: "Extra payments go directly toward principal, reducing the balance that accrues interest. On a $10,000 credit card at 20% APR, paying $100 extra per month saves approximately $4,200 in interest and cuts the payoff time from 9+ years to under 4 years. Every extra dollar accelerates the payoff exponentially due to compound interest." },
    { question: "Should I pay off my smallest debt first or highest interest?", answer: "Pay the smallest first (snowball) if you need motivation and quick wins. Pay the highest interest first (avalanche) if you want to minimize total cost. Research by Harvard Business Review found that people who focused on reducing the number of debts were more likely to eliminate all debt compared to those who focused on reducing total balance." },
    { question: "What happens if I only make minimum payments?", answer: "Making only minimum payments keeps you in debt for decades and costs thousands in unnecessary interest. A $5,000 credit card at 20% APR with a $100 minimum payment takes over 9 years to pay off and costs $4,300 in interest — nearly doubling the original debt. Even small extra payments dramatically reduce time and cost." },
    { question: "Is it better to pay off debt or save money?", answer: "Generally, pay off high-interest debt first (anything above 6-7%). The guaranteed 'return' from eliminating 20% credit card debt far exceeds typical investment returns of 7-10%. However, keep a small emergency fund ($1,000-$2,000) to avoid new debt from unexpected expenses." },
    { question: "How does payment rollover work?", answer: "When a debt is paid off, its minimum payment gets added to the extra payment pool and applied to the next priority debt. This creates a snowball effect where payments grow larger as debts are eliminated. For example, if you eliminate a $150/month debt, the next debt gets an additional $150/month on top of its minimum." },
    { question: "Does paying off debt improve my credit score?", answer: "Yes. Paying off debt reduces your credit utilization ratio (amount owed vs. credit limit), which is 30% of your FICO score. Reducing utilization from 70% to below 30% can improve your score by 50-100+ points. Payment history (35% of score) also improves as you maintain on-time payments." }
  ],
  howToSteps: [
    "Add each debt with its name, current balance, APR interest rate, and minimum monthly payment",
    "Enter the extra monthly payment amount you can afford above all minimums combined",
    "Click 'Calculate Snowball vs Avalanche' to see both strategies compared side by side",
    "Review your debt-free date, total interest, interest savings, payoff order, and monthly schedule for each method",
    "Choose the method that fits your personality — avalanche to save money, snowball for motivation"
  ],
  toolName: "Debt Payoff Calculator"
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function DebtPayoffCalculatorPage() {
  const toolContent = {
    toolName: "Debt Payoff Calculator — Snowball vs Avalanche Debt Elimination",
    quickAnswer: "Enter your debts and extra monthly payment to see exactly when you'll be debt-free. The avalanche method (highest interest first) saves the most money, while the snowball method (smallest balance first) provides faster psychological wins. Our calculator compares both side by side.",
    keyTakeaways: [
      "Avalanche saves the most money by targeting highest-interest debt first, typically $1,000-$3,000 on $20K-$50K of debt",
      "Snowball pays off the smallest balance first for quick motivational wins — studies show higher completion rates",
      "Extra payments go directly to principal, creating an accelerating snowball effect as debts are eliminated",
      "Making only minimum payments on a $5,000 card at 20% APR costs $4,300 in interest over 9+ years",
      "Payment rollover means each eliminated debt makes the next one pay off even faster"
    ],
    overview:
      "Compare the debt snowball and avalanche methods side by side with this free calculator. Add all your debts — credit cards, student loans, auto loans, personal loans — with their balances, interest rates, and minimum payments. Set your extra monthly payment and instantly see your debt-free date, total interest paid, interest savings, payoff order, and a full month-by-month payment schedule for both strategies. The calculator automatically handles payment rollover: when a debt is eliminated, its payment rolls into the next priority debt, accelerating your payoff. All calculations run in your browser — free, instant, no signup.",
    definition: "A debt payoff calculator determines how long it will take to pay off multiple debts using different strategies — the snowball method (smallest balance first) or avalanche method (highest interest rate first) — while factoring in extra payments and payment rollover.",
    howToSteps: [
      {
        title: "Enter Your Debts",
        description: "Add each debt with its name, balance, APR, and minimum payment. Click 'Add Debt' for additional entries."
      },
      {
        title: "Set Extra Payment",
        description: "Enter the additional monthly amount above all minimums. Even $50-$100 extra makes a significant difference."
      },
      {
        title: "Compare Strategies",
        description: "See snowball and avalanche results side by side — debt-free date, total interest, and payoff order for each."
      },
      {
        title: "Review Your Schedule",
        description: "Expand the monthly payment schedule to see exactly how much goes to principal vs interest each month."
      }
    ],
    features: [
      {
        title: "Snowball vs Avalanche Side-by-Side",
        description: "Both strategies calculated simultaneously with clear comparison of debt-free date, total interest, and savings.",
        icon: "Scale"
      },
      {
        title: "Multiple Debt Support",
        description: "Add credit cards, student loans, auto loans, and any debt with individual balance, rate, and minimum payment.",
        icon: "CreditCard"
      },
      {
        title: "Payment Rollover",
        description: "When a debt is paid off, its minimum payment automatically rolls into the next priority debt.",
        icon: "Zap"
      },
      {
        title: "Full Payment Schedule",
        description: "Month-by-month breakdown showing payment, principal, interest, and remaining balance for every debt.",
        icon: "Calendar"
      },
      {
        title: "Daily Interest Indicator",
        description: "See how much your debt costs you per day in interest — a powerful motivational metric.",
        icon: "DollarSign"
      },
      {
        title: "No Signup Required",
        description: "Free, instant results with copy-to-clipboard. No email, no account, no data stored.",
        icon: "Shield"
      }
    ],
    useCases: [
      {
        title: "Credit Card Debt Elimination",
        description: "Compare strategies for paying off multiple high-interest credit cards and find the fastest path to zero."
      },
      {
        title: "Mixed Debt Payoff Planning",
        description: "Optimize your plan across credit cards, student loans, auto loans, and personal loans with different rates."
      },
      {
        title: "Extra Payment Impact Analysis",
        description: "See exactly how much time and interest you save by adding $50, $100, or $200 extra per month."
      },
      {
        title: "Financial Goal Setting",
        description: "Set a target debt-free date and determine how much extra you need to pay each month to hit it."
      }
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            Debt Snowball vs Avalanche: Which Method Is Better?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The two most popular debt payoff strategies are the snowball method and the avalanche method. Both use the same core mechanic — paying minimums on all debts while directing extra money to one priority debt, then rolling freed payments to the next — but they differ in how they choose the priority debt.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Snowball (Smallest Balance First)</th>
                  <th className="p-3 text-left">Avalanche (Highest Interest First)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Priority</td>
                  <td className="p-3">Pay smallest balance first</td>
                  <td className="p-3">Pay highest interest rate first</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Total Interest</td>
                  <td className="p-3">Slightly more interest paid</td>
                  <td className="p-3 text-green-600 font-semibold">Least interest paid (mathematically optimal)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Speed to First Win</td>
                  <td className="p-3 text-green-600 font-semibold">Faster — smallest debts eliminated quickly</td>
                  <td className="p-3">Slower — highest-rate debt may have large balance</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Motivation</td>
                  <td className="p-3 text-green-600 font-semibold">Higher — frequent wins maintain momentum</td>
                  <td className="p-3">Requires more discipline to stay the course</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Completion Rate</td>
                  <td className="p-3 text-green-600 font-semibold">Higher — Harvard research supports this</td>
                  <td className="p-3">Lower — people may quit before seeing results</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Best For</td>
                  <td className="p-3">People who need motivation and quick wins</td>
                  <td className="p-3">Disciplined planners who want to save the most</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Popularized By</td>
                  <td className="p-3">Dave Ramsey</td>
                  <td className="p-3">Financial mathematicians and planners</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            A 2016 study published in the <em>Harvard Business Review</em> found that people who focused on paying off individual accounts (snowball approach) repaid their debt faster than those who tried to minimize interest costs. The psychological boost from eliminating a debt entirely was a stronger motivator than saving money on interest.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How Extra Payments Accelerate Your Payoff
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Extra payments go directly toward principal, reducing the balance that generates interest. This creates an accelerating effect — each extra dollar saves more than the last because it prevents future compound interest. Here is the impact of different extra payment amounts on $20,000 of credit card debt at 20% APR:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Extra Payment</th>
                  <th className="p-3 text-left">Payoff Time</th>
                  <th className="p-3 text-left">Total Interest</th>
                  <th className="p-3 text-left">Interest Saved vs Minimums</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">$0 (minimums only)</td>
                  <td className="p-3">25+ years</td>
                  <td className="p-3 text-red-500 font-semibold">$28,000+</td>
                  <td className="p-3">—</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">+$100/month</td>
                  <td className="p-3">~6 years</td>
                  <td className="p-3">~$8,500</td>
                  <td className="p-3 text-green-600 font-semibold">~$19,500</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">+$200/month</td>
                  <td className="p-3">~4 years</td>
                  <td className="p-3">~$5,800</td>
                  <td className="p-3 text-green-600 font-semibold">~$22,200</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">+$500/month</td>
                  <td className="p-3">~2 years</td>
                  <td className="p-3">~$2,800</td>
                  <td className="p-3 text-green-600 font-semibold">~$25,200</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            How Payment Rollover Works
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Payment rollover (also called the &quot;debt cascade&quot;) is the engine that makes both snowball and avalanche so powerful. When a debt is eliminated, its minimum payment doesn&apos;t disappear — it gets added to the extra payment pool and applied to the next priority debt. This creates an accelerating effect:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Month 1-8: Attack Debt A ($150/mo min + $200 extra = $350/mo)</h4>
                <p className="text-sm text-muted-foreground">Your $1,500 smallest debt is eliminated in ~5 months. Now you have $350/mo freed up.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Month 9-18: Attack Debt B ($90/mo min + $350 rolled = $440/mo)</h4>
                <p className="text-sm text-muted-foreground">Your $3,000 debt gets $440/mo — it falls fast. When done, $440/mo is freed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Month 19+: Attack Debt C ($280/mo min + $440 rolled = $720/mo)</h4>
                <p className="text-sm text-muted-foreground">Your largest debt gets a massive $720/mo payment. It melts away rapidly.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            The Danger of Minimum Payments
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Minimum payments are designed by credit card companies to maximize their interest revenue, not to help you pay off debt. Most minimums are set at 1-2% of the balance plus interest, which barely covers the interest charge. A $5,000 balance at 20% APR with a $100/month minimum payment takes <strong>9 years and 5 months</strong> to pay off and costs <strong>$4,311 in interest</strong> — nearly doubling the original debt. Adding just $50 extra per month cuts this to 5 years and saves $2,100 in interest.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Tips to Pay Off Debt Faster
          </h2>
          <div className="space-y-4">
            {[
              { title: "Automate your extra payments", desc: "Set up automatic transfers on payday so you never forget or spend the money elsewhere." },
              { title: "Use windfalls aggressively", desc: "Tax refunds, bonuses, and side income should go directly to your priority debt." },
              { title: "Cut one expense temporarily", desc: "Cancel one subscription, eat out less, or reduce a discretionary expense. Redirect the savings to debt." },
              { title: "Negotiate lower interest rates", desc: "Call your credit card issuer and ask for a rate reduction. A 5% reduction on $10,000 saves $500/year." },
              { title: "Avoid new debt while paying off existing", desc: "Every new charge extends your debt-free date. Pause credit card use during your payoff plan." },
              { title: "Consider balance transfer cards", desc: "0% APR balance transfer cards can save thousands in interest — but only if you pay off the balance before the promo ends." },
              { title: "Track your progress visually", desc: "Studies show that visual progress tracking (charts, thermometers) significantly improves follow-through on financial goals." },
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500 font-bold text-sm">{i + 1}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    ),
    aboutToolText: "This debt payoff calculator compares the snowball and avalanche methods side by side to help you find the fastest, cheapest path to becoming debt-free. Add multiple debts, set extra payments, and get a complete month-by-month plan.",
    faqs: [
      { question: "What is the debt snowball method?", answer: "Pay off debts from smallest balance to largest. You make minimum payments on all debts and put extra money toward the smallest. When it's paid off, roll that payment into the next. Quick wins maintain motivation." },
      { question: "What is the debt avalanche method?", answer: "Pay off debts from highest interest rate to lowest. Minimums on all debts, extra money to the highest rate. This minimizes total interest paid and is mathematically optimal." },
      { question: "Which is better: snowball or avalanche?", answer: "Avalanche saves more money. Snowball has higher completion rates due to motivational quick wins. Choose avalanche if disciplined, snowball if you need momentum." },
      { question: "How long will it take to pay off my debt?", answer: "Use the calculator with your specific numbers. As a guide, $20,000 at 20% APR with $500/month takes about 62 months. Adding $200 extra cuts it to ~38 months." },
      { question: "How much interest will I save with avalanche?", answer: "Typically $1,000-$3,000 on $20K-$50K of debt with diverse interest rates. If rates are similar, the difference is small." },
      { question: "What is the fastest way to pay off debt?", answer: "Maximize extra payments using the avalanche method. Also: increase income, sell unused items, use windfalls as lump sums, temporarily reduce expenses." },
      { question: "How do extra payments reduce interest?", answer: "Extra payments go to principal, reducing the balance that generates interest. On $10,000 at 20% APR, $100 extra/month saves ~$4,200 in interest." },
      { question: "What happens if I only make minimum payments?", answer: "A $5,000 card at 20% APR with $100 minimums takes 9+ years and costs $4,300 in interest — nearly doubling the original debt." },
      { question: "Is it better to pay off debt or save?", answer: "Pay off high-interest debt first (above 6-7%). The guaranteed return from eliminating 20% debt beats typical 7-10% investment returns. Keep a $1,000-$2,000 emergency fund." },
      { question: "How does payment rollover work?", answer: "When a debt is paid off, its minimum payment rolls into the next priority debt. This creates an accelerating cascade — payments grow larger as debts are eliminated." },
      { question: "Does paying off debt improve credit score?", answer: "Yes. It reduces credit utilization ratio (30% of FICO score). Dropping from 70% to below 30% utilization can improve your score by 50-100+ points." },
      { question: "Should I pay smallest debt first or highest interest?", answer: "Harvard research found snowball users (smallest first) were more likely to become debt-free. But avalanche (highest interest) saves more money. Choose based on your personality." }
    ],
    relatedTools: [
      { name: "Credit Card Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Debt Payoff Calculator — Snowball vs Avalanche Method",
        description: "Compare snowball and avalanche debt payoff strategies side by side. Add multiple debts, set extra payments, and see your debt-free date, total interest saved, payoff order, and monthly schedule. Free, instant, no signup.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Debt Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <DebtPayoffCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free debt payoff calculator comparing snowball and avalanche methods. Add multiple debts, extra payments, and see your debt-free date, total interest saved, and month-by-month payment schedule.",
        path: "/finance-tools/debt-payoff-calculator"
      }}
    />
  )
}
