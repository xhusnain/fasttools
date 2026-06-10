import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const AmortizationCalculator = dynamic(() => import("@/components/finance/amortization-calculator"), {
  loading: () => <ToolLoader />
})

const TOOL_TITLE = "Amortization Calculator — Full Loan Schedule with Extra Payments"
const TOOL_META_DESC = "Free amortization calculator. Generate a full month-by-month amortization schedule for any loan — mortgage, auto, student, personal. See principal/interest split, extra payment savings, bi-weekly schedule, and refinance break-even analysis."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/amortization-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Amortization Calculator", href: "/finance-tools/amortization-calculator" }
  ],
  schemaOptions: {
    name: "Amortization Calculator with Full Schedule",
    alternateName: [
      "Amortization Schedule Calculator",
      "Loan Amortization Calculator",
      "Mortgage Amortization Calculator",
      "Loan Payment Calculator",
      "Loan Schedule Calculator",
      "Monthly Loan Payment Calculator",
      "Principal Interest Calculator",
      "Extra Payment Calculator",
      "Loan Payoff Schedule",
      "Bi-Weekly Amortization Calculator",
      "Refinance Calculator",
      "Loan Balance Calculator",
      "Mortgage Schedule Calculator",
      "Amortization Table Generator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Full month-by-month amortization schedule (every payment line item)",
      "Yearly summary view (collapsed by calendar year)",
      "Principal vs interest split for each payment",
      "Running balance column",
      "Extra payment modeling: one-time, monthly, or yearly",
      "Bi-weekly payment schedule toggle (26 half-payments / 13 full)",
      "Refinance break-even calculator (when does the refi pay for itself)",
      "Side-by-side comparison: standard vs accelerated payoff",
      "Visual chart: principal decay + cumulative interest curve",
      "CSV / printable export of the full schedule",
      "Works for any loan type: mortgage, auto, student, personal, business",
      "Customizable start date and first-payment date",
      "Total interest paid summary at top of schedule",
      "Free, no signup, all calculations in your browser",
    ],
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function AmortizationCalculatorPage() {
  const toolContent = {
    toolName: "Amortization Calculator",
    definition: "An amortization calculator generates a complete month-by-month schedule showing how each payment on a loan is split between principal and interest, plus the running balance over the life of the loan. It's the standard tool for understanding any installment loan — mortgage, auto, student, personal — and for modeling extra payment scenarios.",
    quickAnswer: "Enter your loan amount, interest rate, and term. The calculator generates a full amortization schedule showing every monthly payment split into principal and interest, plus the running balance. Add extra payments (monthly, yearly, or one-time lump sum) to see how much interest you save and how many months earlier you'd be debt-free.",
    keyTakeaways: [
      "Early payments are mostly INTEREST; later payments are mostly PRINCIPAL — that's how amortization works",
      "Every extra dollar applied to principal saves interest for the rest of the loan term",
      "Bi-weekly payments = 26 half-payments per year = 13 effective monthly payments, paying off a 30-year mortgage in ~25 years",
      "On a typical 30-year mortgage, total interest paid is ~70%-100% of the principal over the life of the loan",
      "Refinance break-even = closing costs ÷ monthly payment savings (months to recoup the refinance fees)",
      "Same loan amount but 15-year vs 30-year term: ~60% less total interest paid on the 15-year, even with similar rates",
      "The amortization formula is identical for all installment loans — works for mortgages, autos, student, personal, business",
      "100% client-side — your loan amount and rate never leave your browser",
    ],
    overview:
      "Free amortization calculator that produces a complete month-by-month schedule for any installment loan. See exactly how each payment splits between principal and interest, the running balance, the total interest you'll pay, and the savings from making extra payments. Works for mortgages, auto loans, student loans, personal loans, and business loans. Supports bi-weekly schedules (which save 5+ years on a 30-year mortgage), one-time lump sums (windfall, bonus, tax refund), and a refinance break-even analysis. Export the schedule as CSV or print it. 100% in-browser, no signup, no data uploaded.",

    howToSteps: [
      "Enter your loan amount (principal).",
      "Enter the annual interest rate (APR if known, otherwise the quoted interest rate).",
      "Enter the loan term in years (or months).",
      "Set the start date (or first-payment date) for accurate calendar mapping.",
      "Review the monthly payment and total interest at the top of the schedule.",
      "Scroll the month-by-month table to see principal/interest split and running balance.",
      "Optionally add extra payments: $X/month, $Y/year, or a one-time lump sum.",
      "Toggle bi-weekly schedule to see the impact of 13 effective payments per year.",
      "Export the schedule as CSV for spreadsheet use, or print for record-keeping.",
    ],

    features: [
      "Full month-by-month amortization table",
      "Yearly summary view (collapsible by calendar year)",
      "Principal/Interest/Balance columns on each line",
      "Total interest paid at top of schedule",
      "Extra payment modeling (monthly recurring, yearly recurring, one-time lump sum)",
      "Bi-weekly schedule (26 half-payments = 13 effective full payments per year)",
      "Refinance break-even calculator",
      "Side-by-side comparison: standard vs accelerated payoff",
      "Visual principal-decay + cumulative-interest chart",
      "CSV export of full schedule",
      "Print-friendly schedule layout",
      "Works for any loan type: mortgage, auto, student, personal, business",
      "Customizable first-payment date",
      "100% client-side, no signup",
    ],

    useCases: [
      "Mortgage amortization: see year-by-year equity build on a home loan",
      "Auto loan: track how quickly you pay off a car loan and the interest cost",
      "Student loan: model standard 10-year vs extended 25-year repayment",
      "Personal loan: see the principal/interest split on debt consolidation",
      "Refinance analysis: compare current loan amortization to a refi at lower rate",
      "Extra principal payment modeling: $100/$200/$500 monthly extras",
      "Lump-sum payoff scenarios: how does a $10K windfall change the schedule?",
      "Bi-weekly vs monthly comparison: typically cuts 5+ years off a 30-year mortgage",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Amortization Actually Works</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every monthly payment on an installment loan is calculated using the same formula:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</strong></div>
            <div className="mt-2">where M = monthly payment, P = principal, r = monthly rate (annual ÷ 12), n = total months</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The payment amount is fixed for the life of a fixed-rate loan. But the <em>split</em> between interest and principal changes every month:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>Interest portion of month N</strong> = current balance × monthly rate</li>
            <li><strong>Principal portion of month N</strong> = total payment − interest portion</li>
            <li><strong>New balance</strong> = old balance − principal portion</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            In month 1, the balance is highest, so interest is highest — most of your payment goes to interest. By the final months, the balance is near zero, so interest is near zero — almost the entire payment is principal. The visual: a sloped graph where interest decays and principal accelerates.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Sample Amortization Schedule — $200K Mortgage at 6.5% / 30 Years</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Monthly payment = $1,264. Here&apos;s the first year of payments:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Month</th>
                  <th className="p-3 text-left">Payment</th>
                  <th className="p-3 text-left">Interest</th>
                  <th className="p-3 text-left">Principal</th>
                  <th className="p-3 text-left">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">1</td><td className="p-3">$1,264</td><td className="p-3">$1,083</td><td className="p-3">$181</td><td className="p-3">$199,819</td></tr>
                <tr><td className="p-3 font-semibold">2</td><td className="p-3">$1,264</td><td className="p-3">$1,082</td><td className="p-3">$182</td><td className="p-3">$199,637</td></tr>
                <tr><td className="p-3 font-semibold">6</td><td className="p-3">$1,264</td><td className="p-3">$1,078</td><td className="p-3">$186</td><td className="p-3">$198,906</td></tr>
                <tr><td className="p-3 font-semibold">12 (end of year 1)</td><td className="p-3">$1,264</td><td className="p-3">$1,072</td><td className="p-3">$192</td><td className="p-3">$197,755</td></tr>
                <tr><td className="p-3 font-semibold">60 (year 5)</td><td className="p-3">$1,264</td><td className="p-3">$1,011</td><td className="p-3">$253</td><td className="p-3">$186,469</td></tr>
                <tr><td className="p-3 font-semibold">120 (year 10)</td><td className="p-3">$1,264</td><td className="p-3">$910</td><td className="p-3">$354</td><td className="p-3">$167,442</td></tr>
                <tr><td className="p-3 font-semibold">240 (year 20)</td><td className="p-3">$1,264</td><td className="p-3">$574</td><td className="p-3">$690</td><td className="p-3">$105,308</td></tr>
                <tr><td className="p-3 font-semibold">300 (year 25)</td><td className="p-3">$1,264</td><td className="p-3">$308</td><td className="p-3">$956</td><td className="p-3">$56,109</td></tr>
                <tr><td className="p-3 font-semibold">360 (final)</td><td className="p-3">$1,264</td><td className="p-3">$7</td><td className="p-3">$1,257</td><td className="p-3">$0</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Total over 30 years:</strong> $455,089 paid on a $200,000 loan. That&apos;s <strong>$255,089 in interest</strong> — more than the loan itself. The calculator above generates this entire 360-row schedule for any loan you enter.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Impact of Extra Payments</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Same $200K mortgage at 6.5%, 30-year term. Watch what happens when you add extra principal:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Strategy</th>
                  <th className="p-3 text-left">Effective payment</th>
                  <th className="p-3 text-left">Payoff time</th>
                  <th className="p-3 text-left">Total interest</th>
                  <th className="p-3 text-left">Interest saved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Standard 30-year</td><td className="p-3">$1,264/mo</td><td className="p-3">30 yr (360 payments)</td><td className="p-3">$255,089</td><td className="p-3">—</td></tr>
                <tr><td className="p-3 font-semibold">+ $50/mo extra</td><td className="p-3">$1,314/mo</td><td className="p-3">~27 yr 4 mo</td><td className="p-3">$226,000</td><td className="p-3 text-green-600">~$29,000</td></tr>
                <tr><td className="p-3 font-semibold">+ $100/mo extra</td><td className="p-3">$1,364/mo</td><td className="p-3">~25 yr 4 mo</td><td className="p-3">$201,000</td><td className="p-3 text-green-600">~$54,000</td></tr>
                <tr><td className="p-3 font-semibold">+ $200/mo extra</td><td className="p-3">$1,464/mo</td><td className="p-3">~22 yr</td><td className="p-3">$165,000</td><td className="p-3 text-green-600">~$90,000</td></tr>
                <tr><td className="p-3 font-semibold">Bi-weekly (= 13 mo/yr)</td><td className="p-3">$1,369 effective</td><td className="p-3">~25 yr 2 mo</td><td className="p-3">$199,000</td><td className="p-3 text-green-600">~$56,000</td></tr>
                <tr><td className="p-3 font-semibold">$10K lump sum (year 1)</td><td className="p-3">$1,264/mo</td><td className="p-3">~27 yr 8 mo</td><td className="p-3">$220,000</td><td className="p-3 text-green-600">~$35,000</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>$100/month extra saves $54,000 in interest and pays off the loan 4.5 years early.</strong> $200/month saves $90,000 and pays it off 8 years early. Bi-weekly payments produce roughly the same savings as a $100/month extra payment — without consciously paying more.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Refinance Break-Even Math</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Refinancing replaces your current loan with a new one at a lower rate, restarting the amortization. The break-even formula:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>Break-even months</strong> = closing costs ÷ monthly payment savings</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Example.</strong> You have a $200K mortgage at 7.5%, $1,398/month. New rate offered: 6.0%, monthly drops to $1,199. Savings = $199/month. Closing costs on refi = ~$6,000.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Break-even = $6,000 ÷ $199 = ~30 months. If you plan to stay in the home more than 30 months, refinancing pays off. Less than 30 months, it doesn&apos;t.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Catch:</strong> refinancing resets the amortization clock. If you&apos;re 10 years into a 30-year loan and refi to a new 30-year, you&apos;re back to 30 years of payments. To avoid this, refi to a shorter term (15 or 20 years) or apply your monthly savings as extra principal on the new loan.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Loan Term Tradeoff: 15 vs 20 vs 30 Year</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Same $200K mortgage at typical rates (15-yr ~5.7%, 20-yr ~6.1%, 30-yr ~6.5%):
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Term</th>
                  <th className="p-3 text-left">Monthly P&amp;I</th>
                  <th className="p-3 text-left">Total payments</th>
                  <th className="p-3 text-left">Total interest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">15-year @ 5.7%</td><td className="p-3">$1,658</td><td className="p-3">$298,373</td><td className="p-3 text-green-600">$98,373</td></tr>
                <tr><td className="p-3 font-semibold">20-year @ 6.1%</td><td className="p-3">$1,447</td><td className="p-3">$347,308</td><td className="p-3">$147,308</td></tr>
                <tr><td className="p-3 font-semibold">30-year @ 6.5%</td><td className="p-3">$1,264</td><td className="p-3">$455,089</td><td className="p-3 text-red-500">$255,089</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The 30-year saves $394/month but costs $157K more in lifetime interest vs the 15-year. Common hybrid strategy: take the 30-year for safety/flexibility but pay it as if it were a 15-year (add $394 extra/month). You get the lifetime savings of a 15-year without committing to the higher mandatory payment.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Amortization Calculators</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">Bankrate</th>
                  <th className="p-3 text-left">NerdWallet</th>
                  <th className="p-3 text-left">Calculator.net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Full month-by-month schedule</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Yearly summary collapse</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Extra payments (3 types)</td><td className="p-3 text-green-600">monthly + yearly + lump</td><td className="p-3">monthly + lump</td><td className="p-3 text-red-500">monthly only</td><td className="p-3 text-green-600">all three</td></tr>
                <tr><td className="p-3 font-semibold">Bi-weekly schedule</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Refinance break-even calc</td><td className="p-3 text-green-600">✓</td><td className="p-3">separate tool</td><td className="p-3">separate tool</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">CSV / print export</td><td className="p-3 text-green-600">✓</td><td className="p-3">print only</td><td className="p-3 text-red-500">✗</td><td className="p-3">print only</td></tr>
                <tr><td className="p-3 font-semibold">No lender funneling</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">heavy</td><td className="p-3 text-red-500">heavy</td><td className="p-3 text-green-600">✓</td></tr>
                <tr><td className="p-3 font-semibold">Client-side / no data uploaded</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· amortization calculator / amortization schedule calculator</li>
            <li>· loan amortization calculator</li>
            <li>· mortgage amortization calculator</li>
            <li>· loan payment calculator with schedule</li>
            <li>· loan schedule calculator</li>
            <li>· monthly loan payment calculator</li>
            <li>· principal interest calculator / split calculator</li>
            <li>· extra payment calculator</li>
            <li>· loan payoff schedule</li>
            <li>· bi-weekly amortization calculator</li>
            <li>· refinance calculator</li>
            <li>· amortization table generator</li>
            <li>· auto loan amortization calculator</li>
            <li>· student loan amortization calculator</li>
            <li>· business loan amortization calculator</li>
            <li>· print amortization schedule</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "The fastest way to evaluate any loan offer is to look at the END of the amortization schedule, not the monthly payment. A 30-year loan that's $200/month cheaper than a 15-year option will cost you 2-3x more in total. Always check both the monthly AND the total interest — the calculator shows both at the top of the schedule.",

    faqs: [
      {
        question: "What is amortization?",
        answer: "Amortization is the process of paying off a debt with regular fixed payments where each payment is split between interest (on the current outstanding balance) and principal (paying down the balance). Early payments are mostly interest; later payments are mostly principal. The full month-by-month split is called the amortization schedule."
      },
      {
        question: "How is amortization calculated?",
        answer: "The monthly payment uses the formula M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is principal, r is monthly rate (annual ÷ 12), n is total months. For each month: interest = current balance × monthly rate, principal = monthly payment − interest, new balance = old balance − principal. The schedule above generates this row by row for every payment in the life of the loan."
      },
      {
        question: "Why do early payments have more interest than principal?",
        answer: "Because interest is calculated against the CURRENT balance, which is highest at the start of the loan. On a $200K mortgage at 6.5%, the first month's interest is $200K × 6.5%/12 ≈ $1,083, leaving only $181 going to principal out of a $1,264 payment. By month 200, the balance is much smaller, so interest is much smaller — and most of the payment goes to principal."
      },
      {
        question: "How do extra payments affect my amortization?",
        answer: "Every extra dollar applied to principal immediately reduces all future interest. On a $200K mortgage at 6.5% / 30 years: adding $100/month extra saves ~$54,000 in interest and pays off the loan ~4.5 years earlier. $200/month saves $90,000 and shaves 8 years off. The earlier in the loan you add extras, the bigger the impact — extras in year 1 have far more effect than extras in year 25."
      },
      {
        question: "What's the difference between bi-weekly and monthly payments?",
        answer: "Bi-weekly = paying half your monthly payment every two weeks. Since there are 26 bi-weekly periods per year, you make 26 half-payments = 13 effective monthly payments instead of 12. That extra payment goes 100% to principal, cutting ~5 years off a 30-year mortgage. WARNING: some lenders charge fees for bi-weekly programs. DIY equivalent: take your monthly payment, divide by 12, add that to each monthly payment — same effect, no fees."
      },
      {
        question: "How do I read an amortization schedule?",
        answer: "Each row is one payment. The columns: (1) Payment Number — which month of the loan. (2) Total Payment — the fixed monthly amount. (3) Interest — interest charged on the current balance. (4) Principal — amount applied to reducing the loan. (5) Balance — remaining debt after this payment. Watch how interest declines and principal grows from row to row — that's the amortization curve in action."
      },
      {
        question: "When should I refinance my loan?",
        answer: "The break-even rule: closing costs ÷ monthly payment savings = months to recoup the refi. Example: $6,000 closing costs, $199/month savings → 30-month break-even. Refi if you plan to stay in the home (or keep the loan) longer than the break-even. Otherwise the closing costs eat the savings. Bonus tip: refi to a SHORTER term, not just a lower rate — locking in a 15-year saves much more than dropping from 7% to 6% on the same 30-year."
      },
      {
        question: "Does this calculator work for auto loans, student loans, and personal loans?",
        answer: "Yes. The amortization formula is identical for all installment loans. Enter the loan amount, rate, and term — the schedule works for mortgages, auto loans (typical 36-84 months), federal student loans (standard 10 years, extended 25 years), private student loans (5-20 years), personal loans (2-7 years), and business term loans."
      },
      {
        question: "What is negative amortization?",
        answer: "Negative amortization happens when the monthly payment is too small to cover the interest charged, so the unpaid interest gets added to the balance and the balance GROWS instead of shrinks. It's rare in modern fixed-rate loans but can occur on graduated-payment mortgages, certain ARMs with payment caps, income-driven student loan repayment plans, and credit cards if you don't pay at least the interest charge. Standard amortizing loans avoid this by design."
      },
      {
        question: "Can I export the amortization schedule?",
        answer: "Yes. The calculator above provides CSV export (open in Excel/Google Sheets/Numbers for analysis or charting) and a print-friendly view for paper records. Useful for accounting, taxes, refinance comparison, or showing a lender exactly how you've been making extra payments."
      },
      {
        question: "How do I calculate the interest for a specific month?",
        answer: "Multiply the current outstanding balance by the monthly interest rate (annual rate ÷ 12). Example: $185,000 balance at 6.5% APR → $185,000 × (6.5% ÷ 12) = $185,000 × 0.005417 = $1,002 interest charged that month. The rest of your fixed monthly payment goes to principal. This is the calculation the schedule runs for every month of the loan."
      },
      {
        question: "What's the difference between 15-year and 30-year amortization?",
        answer: "On a $200K loan at typical rates: 15-year (~5.7%) costs ~$1,658/mo and ~$98K total interest. 30-year (~6.5%) costs ~$1,264/mo and ~$255K total interest. 30-year saves $394/month but costs $157K more over the life of the loan. Hybrid strategy: take the 30-year for flexibility, but pay it as if it were a 15-year by adding $394 extra to principal each month — you get the savings without the rigid monthly obligation."
      },
      {
        question: "How accurate is this amortization calculator?",
        answer: "The calculations use the standard mortgage/loan amortization formula that every bank and lender uses. Results are accurate to the penny. Your actual payment may differ slightly due to rounding conventions at your specific lender, plus property tax/insurance/HOA add-ons (for mortgages — this tool calculates the P&I portion only)."
      },
      {
        question: "Is this amortization calculator free?",
        answer: "100% free. No signup, no email required, no credit pull, no data sent to any server. Every calculation runs in your browser locally. Unlike Bankrate or NerdWallet which use 'free calculators' as lead-generation for mortgage lender partners, we don't route you anywhere or sell your data."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Auto Loan Calculator", href: "/finance-tools/auto-loan-calculator" },
      { name: "Credit Card Payoff Calculator", href: "/finance-tools/credit-card-payoff" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Payment Calculator", href: "/finance-tools/payment-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Amortization Calculator — Full Loan Schedule",
        description: "Free amortization calculator with month-by-month schedule, principal/interest split, extra payment savings, bi-weekly mode, and refinance break-even analysis. Works for any loan: mortgage, auto, student, personal, business.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Amortization Calculator", href: "/finance-tools/amortization-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AmortizationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/amortization-calculator"
      }}
    />
  )
}
