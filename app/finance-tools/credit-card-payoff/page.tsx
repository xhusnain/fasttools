import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const CreditCardPayoff = dynamic(() => import("@/components/finance/credit-card-payoff").then(mod => mod.CreditCardPayoff), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Target, TrendingUp, BarChart3, CreditCard, Award, DollarSign, Percent, Zap, HelpCircle, ExternalLink, PiggyBank } from "lucide-react"
import { GTable } from "@/ui/gtable"
import type { Metadata } from "next"

const TOOL_TITLE = "Credit Card Payoff Calculator — Snowball vs Avalanche"
const TOOL_NAME = "Credit Card Payoff Calculator"
const TOOL_META_DESC = "Free credit card payoff calculator. See exact payoff date, total interest paid, and savings from extra payments. Side-by-side snowball vs avalanche comparison. Handles multiple cards, minimum-payment trap visualization, and balance-transfer scenarios."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/credit-card-payoff",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/credit-card-payoff" }
  ],
  schemaOptions: {
    name: "Credit Card Payoff Calculator with Snowball & Avalanche",
    alternateName: [
      "Debt Payoff Calculator",
      "Credit Card Interest Calculator",
      "Debt Repayment Calculator",
      "Credit Card Debt Calculator",
      "Pay Off Credit Card Calculator",
      "Debt-Free Calculator",
      "Credit Card Minimum Payment Calculator",
      "Snowball Method Calculator",
      "Avalanche Method Calculator",
      "Multiple Credit Card Payoff Calculator",
      "Balance Transfer Calculator",
      "Credit Card APR Calculator",
      "How Long to Pay Off Credit Card",
      "Credit Card Payoff Timeline",
      "Debt Consolidation Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Exact payoff date (month/year) and total interest paid",
      "Snowball method: smallest-balance-first payoff strategy",
      "Avalanche method: highest-APR-first payoff strategy (mathematically optimal)",
      "Side-by-side snowball vs avalanche comparison with interest savings delta",
      "Multiple credit card support — pay off 2, 3, 5+ cards in sequence",
      "Extra payment slider — see months saved and interest saved per $X added",
      "Minimum payment trap visualization — years to pay off at minimum-only",
      "Balance transfer scenario toggle (intro APR + transfer fee modeling)",
      "Month-by-month amortization schedule with principal/interest split",
      "Daily compound interest math (matches what credit card issuers actually use)",
      "Avg daily balance method support",
      "Total cost of credit card debt summary",
      "Donut chart showing total interest paid vs total principal",
      "100% client-side — your balance and rate never leave your browser",
    ],
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function CreditCardPayoffPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition: "A credit card payoff calculator computes the exact month you'll be debt-free, the total interest you'll pay, and the savings from paying extra — based on your current balance, APR, and monthly payment. It also compares the snowball method (smallest-balance-first) against the avalanche method (highest-APR-first) so you can pick the right strategy.",
    quickAnswer: "Enter your credit card balance, APR (the interest rate on your statement, typically 20-25%), and how much you can pay each month. The calculator shows your debt-free date, total interest paid, and how much you save by adding extra. The avalanche method (highest APR first) is mathematically optimal; the snowball method (smallest balance first) is psychologically easier and slightly more expensive but often more sustainable.",
    keyTakeaways: [
      "Typical US credit card APR is 21-24% — among the highest interest rates in consumer finance, which is why paying off card debt usually beats investing",
      "Minimum payments are designed to keep you in debt: a $5,000 balance at 22% APR paying just 2% minimum takes ~30 years to pay off and costs ~$8,800 in interest",
      "Avalanche method (highest APR first) saves the most money mathematically — typically 5-15% less interest than snowball",
      "Snowball method (smallest balance first) gives faster psychological wins — better completion rate in real-world studies",
      "Balance transfer cards offer 0% APR for 12-21 months — useful if you can pay off the balance in that window after a 3-5% transfer fee",
      "Credit card interest compounds DAILY using the average daily balance — that's why even small balances grow fast",
      "Every extra $50/month dramatically shortens payoff and saves hundreds in interest — the tool above shows exact numbers",
      "100% client-side — your balance, APR, and payment plan never leave your browser",
    ],
    overview:
      "Free credit card payoff calculator that shows your exact debt-free date, the total interest you'll pay over the life of the debt, and the savings from paying extra each month. Handles single cards or multiple cards at once. Compares the snowball method (smallest-balance-first, psychologically easier) against the avalanche method (highest-APR-first, mathematically optimal) so you can see the actual dollar difference. Includes balance-transfer scenario modeling (intro APR + transfer fee), minimum-payment trap visualization (so you can see exactly how many years and dollars the minimum-payment trap costs), and daily compound interest math that matches what credit card issuers actually use. 100% in-browser, no signup, no debt-consolidation upsell.",

    howToSteps: [
      "Enter the current balance on your credit card.",
      "Enter the APR (annual percentage rate) — find this on your statement, typically 20-25%.",
      "Set the monthly payment you can actually afford.",
      "Review the payoff timeline: debt-free date, total interest paid, total cost.",
      "Compare against minimum-payment-only — see exactly how much the minimum trap costs.",
      "Add a second/third card if you have multiple, and pick snowball or avalanche method to see which finishes first.",
      "Use the extra payment slider to see how $25, $50, $100 extra per month changes your debt-free date.",
      "Optionally model a balance transfer: enter the intro APR (usually 0%), promo period (12-21 months), and transfer fee (3-5%).",
    ],

    features: [
      "Single-card payoff calculation with exact debt-free date",
      "Multiple-card support: chain payoffs in sequence per snowball or avalanche",
      "Snowball method: pay off smallest balance first, roll payment forward",
      "Avalanche method: pay off highest APR first, mathematically minimizes interest",
      "Side-by-side snowball vs avalanche comparison with $ savings delta",
      "Minimum-payment trap visualization (years and dollars wasted on minimum-only)",
      "Extra payment slider: $25, $50, $100, $200 per month — see months saved",
      "Balance transfer scenario: intro APR + promo period + transfer fee modeling",
      "Daily compound interest math (matches actual card issuer behavior)",
      "Month-by-month payment breakdown showing principal vs interest",
      "Total cost donut chart (principal vs interest)",
      "APR change handling for variable-rate cards",
      "Print/export payoff schedule",
      "Free, no signup, all data stays in your browser",
    ],

    useCases: [
      "Paying off a single high-interest credit card faster",
      "Multi-card debt management: deciding which card to pay off first",
      "Snowball vs avalanche decision: comparing the actual dollar difference",
      "Evaluating a balance transfer offer — is the 3-5% transfer fee worth the 0% APR window?",
      "Visualizing the minimum-payment trap to motivate paying more",
      "Calculating the true cost of NOT paying off the card (opportunity cost vs investing)",
      "Budgeting: figuring out how much extra you need to be debt-free in 12/24/36 months",
      "Setting a target debt-free date and back-solving the required monthly payment",
    ],

    faqs: [
      {
        question: "How long will it take to pay off my credit card debt?",
        answer: "Depends on your balance, APR, and monthly payment. Quick examples at 22% APR: $5,000 balance paying $200/month = ~32 months, paying $300/month = ~20 months, paying $500/month = ~12 months. At the typical 2% minimum payment ($100/month on $5K), the same debt takes ~30 YEARS and costs ~$8,800 in interest. Use the calculator above for your exact numbers."
      },
      {
        question: "How is credit card interest calculated?",
        answer: "Credit cards calculate interest daily on your average daily balance. Daily rate = APR ÷ 365. So a 22% APR card = 22%/365 = 0.0603% per day. Each day, your balance grows by (daily rate × current balance). At month-end, all those daily interest charges are added to your balance and you pay interest on the new total next month — that's the 'interest on interest' compounding effect. This is why credit card debt grows so fast vs other debt."
      },
      {
        question: "How is the minimum payment on a credit card calculated?",
        answer: "Two common methods. (1) Flat percentage: 2-4% of statement balance (most common, ~3% average). (2) % of balance + interest + fees: roughly 1% of principal plus accrued interest and any fees. Either way, there's usually a floor of $25-$35 (or full balance if smaller). Minimums are deliberately set just barely above the interest charge — that's how the issuer keeps you in debt and earning them interest for decades."
      },
      {
        question: "Should I use the snowball or avalanche method?",
        answer: "Avalanche (highest APR first) wins on math — typically 5-15% less total interest than snowball. Snowball (smallest balance first) wins on behavioral science — paying off a small card fast feels great and builds momentum. Real-world studies show snowball has BETTER completion rates because of this motivation. The right answer: if the math difference is small AND you've struggled with sticking to plans, use snowball. If the difference is large (say $1,000+) and you have strong discipline, use avalanche. The calculator above shows both side-by-side."
      },
      {
        question: "How do I pay off $5,000 in credit card debt?",
        answer: "At 22% APR with $500/month payments, you'd be debt-free in ~12 months and pay ~$650 in interest. At $300/month, ~20 months and ~$1,000 interest. At $200/month, ~32 months and ~$1,750 interest. To accelerate: (1) increase the monthly payment as much as possible — every $50 extra dramatically shortens payoff, (2) consider a balance transfer to 0% APR for 12-21 months (costs 3-5% transfer fee), or (3) a personal loan at 8-12% APR to consolidate the credit card debt at a much lower rate."
      },
      {
        question: "How do I pay off $10,000 in credit card debt?",
        answer: "At 22% APR with $500/month payments, ~26 months and ~$2,600 interest. With $800/month, ~15 months and ~$1,400 interest. With $1,000/month, ~12 months and ~$1,150 interest. $10K is the threshold where balance transfer cards usually make sense — the math: 0% intro APR for 18 months × $10K = $0 interest, minus the ~$300-500 transfer fee. Pay it off during the promo period and you save thousands. If you can't pay it off in time, the remaining balance gets hit with the post-promo APR (often 22-29%)."
      },
      {
        question: "Should I pay more than the minimum on my credit card?",
        answer: "YES — almost always. Minimum payments are engineered to keep you in debt. On a $5,000 balance at 22% APR, paying only the 2% minimum takes ~30 years and costs ~$8,800 in interest (more than you originally owed). Paying just $50/month MORE than the minimum cuts this to ~7 years and ~$3,400 in interest. The only reason NOT to pay more than the minimum is if you're temporarily protecting cash for an emergency — in which case, do that and then resume aggressive payoff."
      },
      {
        question: "Is it better to pay off credit cards or invest extra money?",
        answer: "Almost always pay off credit cards first. Credit card APRs (21-24%) far exceed any realistic investment return (~7-10% historically for stocks). Paying off a 22% APR card is mathematically equivalent to earning a GUARANTEED 22% return — better than any investment. Exception: capture your 401(k) employer match first (50-100% instant return). After the match, all extra cash should go to high-interest debt before any taxable investing."
      },
      {
        question: "Should I do a balance transfer to pay off credit card debt faster?",
        answer: "Often yes, if three conditions are met: (1) you can qualify for a 0% intro APR card (typically requires good credit, 670+), (2) you can pay off the balance within the promo period (typically 12-21 months), AND (3) the transfer fee (3-5% of balance) is less than the interest you'd otherwise pay. Math: $5,000 balance, 22% APR, paying $300/month = ~$1,000 interest over 20 months. A balance transfer with a 3% fee = $150. You save $850. Just don't run up new charges on the original card."
      },
      {
        question: "How does paying off a credit card affect my credit score?",
        answer: "Generally GOOD effect, often big. Two factors. (1) Credit utilization drops — this is 30% of your FICO score. Going from $5K balance / $10K limit (50% utilization) to $0/$10K (0%) typically boosts score by 30-80 points. (2) Account stays open if you don't close it — keeps the credit history length, which is 15% of your score. Recommendation: pay it off, but KEEP the card open with light occasional use and full monthly payoff. Closing it can hurt your score."
      },
      {
        question: "What is the difference between the snowball and avalanche methods?",
        answer: "Both apply ALL your minimum payments across all cards, then send any EXTRA money to one targeted card. Snowball: targets the card with the smallest balance, regardless of APR — quick psychological wins. Avalanche: targets the card with the highest APR — saves the most money. Once a card is paid off, you 'roll' that payment into the next target card. Snowball might cost $200-$2,000 more in interest depending on your balances and APRs, but completes more often in practice. Avalanche is for the disciplined."
      },
      {
        question: "What happens if I just pay the minimum forever?",
        answer: "Disaster. On a $5,000 balance at 22% APR with 2% minimum payments ($100/month): payoff takes ~30 years, total interest paid ~$8,800. You'd pay $13,800 to clear $5,000 of debt. On a $10,000 balance at the same rate and minimum: ~38 years, ~$23,000 in interest. Minimums are designed exactly to be barely above the interest charge so your balance shrinks at a snail's pace. Always pay more than the minimum if you can."
      },
      {
        question: "How does a 0% intro APR balance transfer actually work?",
        answer: "You open a new credit card that offers 0% APR for a promotional period (typically 12, 18, or 21 months). You transfer your existing high-APR balance to the new card, paying a one-time transfer fee of 3-5% of the transferred amount. During the promo period, ALL of your payments go to principal (no interest). At the end of the promo period, the regular APR (often 22-29%) applies to any remaining balance. The strategy works if (a) you stop using the original card, (b) you pay off the transferred balance within the promo period."
      },
      {
        question: "Can I use this calculator for multiple credit cards?",
        answer: "Yes — the calculator above supports multiple cards. Enter each card's balance and APR separately. Pick snowball (pay smallest balance first) or avalanche (pay highest APR first), and the calculator shows the combined payoff timeline plus the savings of one method vs the other. Most people with debt have 2-4 cards; the multi-card view is essential for choosing the right payoff order."
      },
      {
        question: "What's the average credit card interest rate right now?",
        answer: "The current US average credit card APR is around 21-24% (Federal Reserve data). New offers range roughly 20-27% APR depending on credit score. People with excellent credit (760+) can get cards in the mid-teens APR. Subprime credit (below 580) sees rates of 25-32%. These rates are dramatically higher than most other consumer debt (mortgages 6-7%, auto loans 5-9%, personal loans 8-15%), which is why paying off credit card debt is almost always the highest-priority financial move."
      },
      {
        question: "Is this credit card payoff calculator free?",
        answer: "100% free. No signup, no email, no credit pull, no data sent to any server. Every calculation runs locally in your browser. Unlike Bankrate or Credit Karma, we don't make money by routing you to credit card partners or 'debt relief' services. The tool is supported by general site ads outside the calculator itself."
      }
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Credit Card Interest Actually Works</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Credit card interest is calculated daily, not monthly — which is why card debt grows faster than most people expect.
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>Daily rate</strong> = APR ÷ 365</div>
            <div><strong>Daily interest</strong> = daily rate × average daily balance</div>
            <div><strong>Monthly interest charged</strong> = sum of all daily interest charges in the billing cycle</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Worked example.</strong> 22% APR, $5,000 balance. Daily rate = 22%/365 = 0.0603%. Each day, your balance grows by $5,000 × 0.000603 = $3.01. Over a 30-day billing cycle: $90.30 added to your balance just from interest. Next month, you owe interest on that $90.30 too — that&apos;s the compounding effect. Card issuers use the <strong>average daily balance</strong> method, so paying mid-cycle reduces the interest somewhat vs paying at the end.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Minimum Payment Trap (Why Cards Stay in Debt for Decades)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Minimum payments are deliberately set just barely above the monthly interest. Look what happens at the typical 2% minimum:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Balance @ 22% APR</th>
                  <th className="p-3 text-left">Min payment (2%)</th>
                  <th className="p-3 text-left">Years to payoff</th>
                  <th className="p-3 text-left">Total interest paid</th>
                  <th className="p-3 text-left">Total cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">$2,500</td><td className="p-3">$50/mo</td><td className="p-3">~22 yr</td><td className="p-3">~$3,400</td><td className="p-3">~$5,900</td></tr>
                <tr><td className="p-3 font-semibold">$5,000</td><td className="p-3">$100/mo</td><td className="p-3">~30 yr</td><td className="p-3">~$8,800</td><td className="p-3">~$13,800</td></tr>
                <tr><td className="p-3 font-semibold">$10,000</td><td className="p-3">$200/mo</td><td className="p-3">~38 yr</td><td className="p-3">~$23,000</td><td className="p-3">~$33,000</td></tr>
                <tr><td className="p-3 font-semibold">$15,000</td><td className="p-3">$300/mo</td><td className="p-3">~42 yr</td><td className="p-3">~$36,000</td><td className="p-3">~$51,000</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Just $50/month above the minimum changes everything.</strong> Same $5,000 balance, $150/month payment instead of $100: payoff drops to ~5 years, interest drops to ~$3,400. You save $5,400 in interest and 25 years of debt — just from $50 extra a month.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Snowball vs Avalanche — The Real Math</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            You have 3 cards. Total minimum payments = $235/month. You can afford $500/month total. Where do the extra $265 go?
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Card</th>
                  <th className="p-3 text-left">Balance</th>
                  <th className="p-3 text-left">APR</th>
                  <th className="p-3 text-left">Min payment</th>
                  <th className="p-3 text-left">Snowball pays first?</th>
                  <th className="p-3 text-left">Avalanche pays first?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Card A (store card)</td><td className="p-3">$1,500</td><td className="p-3">28%</td><td className="p-3">$35</td><td className="p-3">✓ 1st (smallest)</td><td className="p-3 text-green-600">✓ 1st (highest APR)</td></tr>
                <tr><td className="p-3 font-semibold">Card B (rewards card)</td><td className="p-3">$4,000</td><td className="p-3">22%</td><td className="p-3">$80</td><td className="p-3">2nd</td><td className="p-3">2nd</td></tr>
                <tr><td className="p-3 font-semibold">Card C (cash-back card)</td><td className="p-3">$6,000</td><td className="p-3">19%</td><td className="p-3">$120</td><td className="p-3">3rd</td><td className="p-3">3rd</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            In this example, snowball and avalanche happen to agree because the smallest balance is also the highest APR. But often they differ. When the smallest balance has the LOWEST APR, the two methods diverge sharply — avalanche can save thousands. <strong>The calculator above shows the actual dollar difference for your specific cards.</strong>
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Balance Transfer vs Personal Loan vs DIY Payoff</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Three common strategies for paying off card debt, ranked by typical effectiveness:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Strategy</th>
                  <th className="p-3 text-left">Effective rate</th>
                  <th className="p-3 text-left">Best when</th>
                  <th className="p-3 text-left">Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Balance transfer card (0% intro)</td><td className="p-3 text-green-600">0% for 12-21 months + 3-5% one-time fee</td><td className="p-3">Good credit (670+); can pay off in promo period</td><td className="p-3">Post-promo APR jumps to 22-29% on remaining balance</td></tr>
                <tr><td className="p-3 font-semibold">Personal loan</td><td className="p-3">~8-15% APR fixed</td><td className="p-3">Fair to good credit; balance too big for one transfer</td><td className="p-3">Origination fee (1-8%); credit score check (hard pull)</td></tr>
                <tr><td className="p-3 font-semibold">DIY payoff (snowball or avalanche)</td><td className="p-3">Card APR (no change)</td><td className="p-3">Bad/no credit; small balance; aggressive payoff possible</td><td className="p-3">None besides discipline</td></tr>
                <tr><td className="p-3 font-semibold">Debt consolidation loan</td><td className="p-3">~6-15% APR</td><td className="p-3">Multi-card, $10K+ total debt</td><td className="p-3">Closing cards can hurt credit utilization ratio</td></tr>
                <tr><td className="p-3 font-semibold">Debt management plan (credit counselor)</td><td className="p-3">~6-10% APR negotiated</td><td className="p-3">Overwhelmed, multi-card, can't qualify for transfer</td><td className="p-3">Cards get closed; 4-5 year commitment</td></tr>
                <tr><td className="p-3 font-semibold text-red-500">Avoid: payday loans, debt settlement</td><td className="p-3 text-red-500">200-600% APR / -50% credit score</td><td className="p-3">Never</td><td className="p-3 text-red-500">Devastating to credit and finances</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Credit Card Payoff Calculators</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">Bankrate</th>
                  <th className="p-3 text-left">Experian</th>
                  <th className="p-3 text-left">Calculator.net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Payoff date + total interest</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Multi-card support</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">single only</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Snowball vs avalanche side-by-side</td><td className="p-3 text-green-600">✓ with $ delta</td><td className="p-3">avalanche only</td><td className="p-3">both separate</td><td className="p-3">avalanche default</td></tr>
                <tr><td className="p-3 font-semibold">Minimum-payment trap visualization</td><td className="p-3 text-green-600">✓ with table</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Balance transfer scenario</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">separate tool</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Extra payment slider</td><td className="p-3 text-green-600">✓</td><td className="p-3">manual input</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Lender / debt-relief upsell</td><td className="p-3 text-green-600">none</td><td className="p-3 text-red-500">heavy</td><td className="p-3 text-red-500">heavy</td><td className="p-3">light</td></tr>
                <tr><td className="p-3 font-semibold">Client-side / no data uploaded</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· credit card payoff calculator</li>
            <li>· debt payoff calculator</li>
            <li>· credit card debt calculator</li>
            <li>· credit card interest calculator</li>
            <li>· debt repayment calculator</li>
            <li>· pay off credit card calculator</li>
            <li>· debt-free calculator / debt-free date calculator</li>
            <li>· credit card minimum payment calculator</li>
            <li>· snowball method calculator</li>
            <li>· avalanche method calculator</li>
            <li>· multi-card payoff calculator</li>
            <li>· balance transfer calculator</li>
            <li>· credit card APR calculator</li>
            <li>· how long to pay off credit card</li>
            <li>· credit card payoff timeline calculator</li>
            <li>· debt consolidation calculator</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "If you can't pay off your full balance, transferring it to a 0% intro APR card is almost always the math-optimal move — even after the 3-5% transfer fee. Example: $5,000 at 22% APR paying $300/month costs ~$1,000 in interest over 20 months. Transfer to a 0% / 18-month card with 3% fee: $150 fee + $0 interest = save $850. Just stop using the original card and pay off in the promo window.",

    relatedTools: [
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Credit Card Payoff Calculator — Snowball vs Avalanche",
        description: "Free credit card payoff calculator. Exact debt-free date, total interest, snowball-vs-avalanche comparison, extra payment savings, balance transfer modeling, and minimum-payment trap visualization.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/credit-card-payoff" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <CreditCardPayoff />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/credit-card-payoff"
      }}
    />
  )
}
