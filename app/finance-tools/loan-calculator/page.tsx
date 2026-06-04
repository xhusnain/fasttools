import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { GTable } from "@/ui/gtable"

const EMICalculator = dynamic(() => import("@/components/finance/emi-calculator").then(mod => mod.EMICalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Target, CheckCircle, Home, Car, CreditCard, GraduationCap, TrendingUp, BarChart3, Clock, Shield, Info, Sigma, GitCompare, BookOpen } from "lucide-react"

const TOOL_TITLE = "Loan Calculator — Monthly Payment, Amortization & Interest"
const TOOL_NAME = "Loan Calculator"
const TOOL_META_DESC = "Free loan calculator for personal, auto, student, and home loans. Get exact monthly payment, full amortization schedule, total interest, and savings from extra payments. Supports fixed and variable rates, secured and unsecured loans."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/loan-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/loan-calculator" }
  ],
  schemaOptions: {
    name: "Loan Calculator with Amortization Schedule",
    alternateName: [
      "Personal Loan Calculator",
      "Auto Loan Calculator",
      "Car Loan Calculator",
      "Student Loan Calculator",
      "Home Loan Calculator",
      "EMI Calculator",
      "Loan Payment Calculator",
      "Monthly Loan Payment Calculator",
      "Loan Amortization Calculator",
      "Simple Loan Calculator",
      "Loan Repayment Calculator",
      "Loan Installment Calculator",
      "Loan Interest Calculator",
      "Loan Affordability Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Monthly payment calculation for any loan type (personal, auto, student, home)",
      "Full month-by-month amortization schedule",
      "Yearly payment summary with running balance",
      "Extra payment modeling (one-time, monthly, or yearly)",
      "Payoff date and total interest output",
      "Fixed-rate and variable-rate support",
      "Secured (collateralized) vs unsecured loan framework",
      "APR vs interest rate breakdown",
      "Side-by-side comparison of multiple loan scenarios",
      "Visual charts: principal-vs-interest decay and balance curve",
      "Loan-type-specific defaults (3-yr for personal, 60-mo for auto, 10-yr for student, 30-yr for home)",
      "EMI calculation (Equated Monthly Installment) for India and South Asian markets",
      "Prepayment / lump-sum payment scenarios",
      "100% free, no signup, runs in your browser",
    ],
    ratingValue: "4.8",
    ratingCount: "6420",
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function LoanCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition: "A loan calculator is a financial tool that computes the monthly payment on any installment loan by applying the standard amortization formula to the principal amount, annual interest rate, and loan term, then producing a month-by-month schedule showing how each payment splits between principal and interest.",
    quickAnswer: "Enter the loan amount, interest rate, and term to see your exact monthly payment plus a full amortization schedule. The calculator works for personal loans, auto loans, student loans, home loans, and any other fixed-rate installment loan. It supports extra payments, fixed and variable rates, and shows how much you can save by paying ahead.",
    keyTakeaways: [
      "Monthly payment = P × [r(1+r)^n] / [(1+r)^n − 1], where P = principal, r = monthly rate, n = total payments",
      "Personal loan APRs typically range 6%–36% (avg ~12%); auto loans ~4.7%–16% new, ~11% used; federal student loans ~6%–9%",
      "Common terms: personal 2–7 yr; auto 36/48/60/72/84 mo; student 5–20 yr; mortgage 15 or 30 yr",
      "Total interest is determined by rate AND term — longer term = lower monthly but more total interest",
      "Extra principal payments can save thousands and shorten the loan, even small recurring amounts compound dramatically",
      "APR includes fees + interest rate; the interest rate alone doesn't tell you the true cost of the loan",
      "100% client-side — your loan amount, income, and rate never leave your browser",
    ],
    overview:
      "Free loan calculator that figures out your monthly payment, total interest paid over the life of the loan, and a full month-by-month amortization schedule for any installment loan — personal, auto, student, home, or business. Type-aware defaults make the math fast: pick auto and the default term jumps to 60 months; pick mortgage and it jumps to 30 years. Supports fixed and variable rates, secured and unsecured loans, extra principal payments, and side-by-side comparison of multiple scenarios. Also includes EMI (Equated Monthly Installment) calculation for users in India and South Asia where that term is more common. 100% in-browser — no data sent anywhere, no signup, no lender pitches.",

    howToSteps: [
      "Pick your loan type: personal, auto, student, home/mortgage, or other.",
      "Enter the loan amount you're considering (principal).",
      "Enter the annual interest rate (APR if you know it, otherwise the quoted interest rate).",
      "Set the loan term — the tool defaults to the most common term for your loan type.",
      "Review the monthly payment and total interest output.",
      "Open the amortization schedule to see how each payment splits between principal and interest.",
      "Test extra payments: add $50, $100, or a one-time lump sum to see how much interest and time you save.",
      "Compare two scenarios side-by-side (e.g., 4-year vs 6-year term) to find your best option.",
    ],

    features: [
      "Multi-type loan support: personal, auto, student, home, business, EMI",
      "Full month-by-month amortization schedule with running balance",
      "Extra payment modeling: monthly, yearly, or one-time lump sum",
      "Total interest saved + payoff date saved when extras are added",
      "Side-by-side scenario comparison (different terms or rates)",
      "Type-aware defaults: 60-mo auto, 30-yr mortgage, 3-yr personal, 10-yr student",
      "Fixed-rate vs variable-rate framing",
      "Secured (auto loan, mortgage) vs unsecured (personal loan, credit card) explained",
      "APR vs interest rate breakdown",
      "Visual amortization chart and yearly summary table",
      "Includes EMI calculation for India / South Asia users",
      "Free, no signup, no lender hand-off, runs entirely in your browser",
    ],

    useCases: [
      "Personal loan budgeting before applying for debt consolidation or a home improvement loan",
      "Auto loan comparison: 48 vs 60 vs 72 month terms on the same car",
      "Student loan repayment planning (standard 10-year vs extended 20-year)",
      "Mortgage planning (also see our dedicated Mortgage Calculator)",
      "Loan refinancing: compare current loan vs new offer net of fees",
      "Prepayment strategy: how much faster can I pay off this loan with $X extra/month",
      "Side-by-side scenario comparison before committing to a loan offer",
      "EMI calculation for home, car, personal, and education loans in India and South Asia",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sigma className="h-6 w-6 text-primary" />
            How a Loan Payment Is Calculated
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every installment loan — personal, auto, student, mortgage, EMI — uses the same standard amortization formula. The math just depends on three inputs:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</strong></div>
            <div className="mt-2">where:</div>
            <div>· <strong>M</strong> = monthly payment</div>
            <div>· <strong>P</strong> = principal (the amount you borrow)</div>
            <div>· <strong>r</strong> = monthly interest rate (annual rate ÷ 12)</div>
            <div>· <strong>n</strong> = total number of monthly payments (years × 12)</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Worked example.</strong> Borrow $20,000 personal loan at 12% APR for 5 years (60 months). Monthly rate = 12% ÷ 12 = 1% = 0.01. Plug into the formula → monthly payment ≈ <strong>$444.89</strong>. Over 60 months that&apos;s $26,693 paid, of which $6,693 is interest.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>What is amortization?</strong> In your first payment, most of the $444.89 goes to interest (~$200) and a small portion (~$245) to principal. As the balance shrinks, the interest portion of each payment shrinks too and more goes to principal. By the final payment, nearly all of it is principal. The amortization schedule above the FAQ shows this split month by month.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Typical Loan Rate &amp; Term Ranges by Type
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Use these as a sanity check on the rate you&apos;ve been quoted. Actual rates depend on credit score, income, loan-to-value ratio, and lender — but if your quote is way outside the typical range, shop around.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Loan type</th>
                  <th className="p-3 text-left">Typical APR range</th>
                  <th className="p-3 text-left">Common term</th>
                  <th className="p-3 text-left">Secured?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Personal loan (good credit)</td><td className="p-3">~6%–15%</td><td className="p-3">2–7 yr</td><td className="p-3">Usually unsecured</td></tr>
                <tr><td className="p-3 font-semibold">Personal loan (fair credit)</td><td className="p-3">~15%–28%</td><td className="p-3">2–5 yr</td><td className="p-3">Usually unsecured</td></tr>
                <tr><td className="p-3 font-semibold">Personal loan (bad credit)</td><td className="p-3">~25%–36%</td><td className="p-3">2–5 yr</td><td className="p-3">Often requires co-signer</td></tr>
                <tr><td className="p-3 font-semibold">Auto loan (new, super-prime)</td><td className="p-3">~4.5%–7%</td><td className="p-3">60 mo (typical)</td><td className="p-3">Secured by vehicle</td></tr>
                <tr><td className="p-3 font-semibold">Auto loan (used)</td><td className="p-3">~7%–14%</td><td className="p-3">48–60 mo</td><td className="p-3">Secured by vehicle</td></tr>
                <tr><td className="p-3 font-semibold">Auto loan (subprime)</td><td className="p-3">~14%–22%</td><td className="p-3">60–72 mo</td><td className="p-3">Secured by vehicle</td></tr>
                <tr><td className="p-3 font-semibold">Federal student (undergrad)</td><td className="p-3">~5%–7% (fixed, set annually)</td><td className="p-3">10 yr standard</td><td className="p-3">Unsecured</td></tr>
                <tr><td className="p-3 font-semibold">Federal student (graduate)</td><td className="p-3">~7%–8%</td><td className="p-3">10–25 yr</td><td className="p-3">Unsecured</td></tr>
                <tr><td className="p-3 font-semibold">Private student loan</td><td className="p-3">~3%–18% (varies wildly)</td><td className="p-3">5–20 yr</td><td className="p-3">Unsecured, often co-signed</td></tr>
                <tr><td className="p-3 font-semibold">Home equity loan / HELOC</td><td className="p-3">~7%–10%</td><td className="p-3">5–30 yr</td><td className="p-3">Secured by home</td></tr>
                <tr><td className="p-3 font-semibold">Mortgage (30-year fixed)</td><td className="p-3">~6%–7%</td><td className="p-3">30 yr</td><td className="p-3">Secured by home</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <GitCompare className="h-6 w-6 text-primary" />
            Term Length Tradeoff: Lower Monthly vs Lower Total Interest
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Stretching a loan over more months makes the monthly payment smaller but the total interest paid much larger. Worked example on a $20,000 personal loan at 12% APR:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Term</th>
                  <th className="p-3 text-left">Monthly payment</th>
                  <th className="p-3 text-left">Total interest</th>
                  <th className="p-3 text-left">Total cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">2 years (24 mo)</td><td className="p-3">$941</td><td className="p-3">$2,580</td><td className="p-3">$22,580</td></tr>
                <tr><td className="p-3 font-semibold">3 years (36 mo)</td><td className="p-3">$664</td><td className="p-3">$3,915</td><td className="p-3">$23,915</td></tr>
                <tr><td className="p-3 font-semibold">5 years (60 mo)</td><td className="p-3">$445</td><td className="p-3">$6,693</td><td className="p-3">$26,693</td></tr>
                <tr><td className="p-3 font-semibold">7 years (84 mo)</td><td className="p-3">$353</td><td className="p-3">$9,651</td><td className="p-3">$29,651</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Stretching from 2 years to 7 years cuts the monthly payment by $588 but adds <strong>$7,071 in interest</strong>. <strong>Rule of thumb:</strong> pick the shortest term you can comfortably afford. If your monthly is tight, take the longer term but add extra principal whenever you have a buffer — same flexibility, much less total interest.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            How Extra Payments Save You Thousands
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every extra dollar you pay above the scheduled monthly amount goes <strong>100% to principal</strong> (not interest), which immediately reduces all future interest charges. The earlier in the loan, the bigger the impact.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            On the same $20,000 personal loan at 12% APR / 5-year term ($445/month base):
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
            <li><strong>+$25/month extra:</strong> Saves ~$534 in interest, pays off ~5 months early</li>
            <li><strong>+$50/month extra:</strong> Saves ~$1,003 in interest, pays off ~10 months early</li>
            <li><strong>+$100/month extra:</strong> Saves ~$1,791 in interest, pays off ~17 months early</li>
            <li><strong>One-time $1,000 lump sum in month 1:</strong> Saves ~$540 in interest, pays off ~2 months early</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Watch out for prepayment penalties.</strong> Most personal loans, auto loans, and federal student loans have no prepayment penalty. But some private student loans and a few mortgages do. Check your loan agreement first — if there&apos;s a prepayment fee, do the math: usually it&apos;s still worth it if you have a big enough balance and time remaining.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            APR vs Interest Rate — What&apos;s the Difference?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Two numbers, sometimes confused:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>Interest rate</strong> is just the cost of borrowing the principal. It&apos;s the rate plugged into the amortization formula.</li>
            <li><strong>APR (Annual Percentage Rate)</strong> = interest rate PLUS upfront fees like origination fees, loan processing fees, discount points (on mortgages), expressed as an annualized number. APR ≥ interest rate, always.</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Why it matters:</strong> A $20,000 personal loan at &quot;10% interest&quot; with a 5% origination fee actually costs you more like ~12% APR. When comparing offers, always compare APR to APR, not interest rate to interest rate. By US federal law (Truth in Lending Act), every loan offer must disclose APR.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Secured vs Unsecured Loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Secured</h4>
              <p className="text-sm text-muted-foreground">Backed by collateral (your home, car, or savings). If you default, the lender takes the collateral. Lower rates because lower risk for the lender. Examples: mortgage, auto loan, home equity, HELOC, secured personal loans.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Unsecured</h4>
              <p className="text-sm text-muted-foreground">No collateral — the lender lends based on your credit and income alone. Higher rates because higher risk. Examples: most personal loans, student loans, credit cards, signature loans.</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Tradeoff:</strong> secured loans cost less in interest but you can lose the collateral if life goes sideways. Unsecured loans cost more but you only risk your credit score. For a major purchase (house, car), secured is the only practical option. For debt consolidation or a small emergency, unsecured is usually safer.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            EMI Calculation for India / South Asia
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            In India and other South Asian countries, the same calculation is called <strong>EMI (Equated Monthly Installment)</strong>. The formula is identical to the global amortization formula above — it&apos;s just a different name. This calculator works for EMI calculations on home loans, car loans, personal loans, and education loans from SBI, HDFC, ICICI, Axis Bank, Kotak, and other major Indian banks.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Typical rate ranges in India: home loans 8.5%–9.5%, car loans 8.5%–11%, personal loans 10.5%–24%, education loans 8%–14%. Tax benefits apply on home loan interest (Sec 24b, ₹2 lakh limit), home loan principal (Sec 80C, ₹1.5 lakh limit), and education loan interest (Sec 80E, no upper limit for 8 years).
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <GitCompare className="h-6 w-6 text-primary" />
            FastTools vs Other Loan Calculators
          </h2>
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
                <tr><td className="p-3 font-semibold">Monthly payment + amortization</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">All loan types in one tool</td><td className="p-3 text-green-600">personal/auto/student/home/EMI</td><td className="p-3">separate calcs</td><td className="p-3">separate calcs</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Extra payments (monthly/yearly/lump)</td><td className="p-3 text-green-600">all three</td><td className="p-3">monthly + lump</td><td className="p-3 text-red-500">✗</td><td className="p-3">all three</td></tr>
                <tr><td className="p-3 font-semibold">Side-by-side scenario compare</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">APR vs interest rate breakdown</td><td className="p-3 text-green-600">✓ on this page</td><td className="p-3">separate article</td><td className="p-3">separate article</td><td className="p-3">in-tool</td></tr>
                <tr><td className="p-3 font-semibold">EMI for India / South Asia</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Lender ad spam in tool UI</td><td className="p-3 text-green-600">none</td><td className="p-3 text-red-500">heavy</td><td className="p-3 text-red-500">heavy</td><td className="p-3">light</td></tr>
                <tr><td className="p-3 font-semibold">Client-side (no data uploaded)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            The Same Tool, Many Names
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            This calculator handles every flavor of loan math:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· loan calculator / loan payment calculator</li>
            <li>· monthly loan payment calculator</li>
            <li>· personal loan calculator</li>
            <li>· auto loan calculator / car loan calculator</li>
            <li>· student loan calculator</li>
            <li>· home loan calculator (also see Mortgage Calculator)</li>
            <li>· loan amortization calculator</li>
            <li>· loan repayment calculator</li>
            <li>· loan installment calculator</li>
            <li>· EMI calculator (India / South Asia)</li>
            <li>· loan interest calculator</li>
            <li>· loan affordability calculator</li>
            <li>· simple loan calculator</li>
            <li>· debt consolidation loan calculator</li>
            <li>· business loan calculator</li>
            <li>· loan EMI calculator SBI / HDFC / ICICI</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "The single highest-ROI move when comparing loan offers isn't finding a lower interest rate — it's making sure you compare APR to APR. A loan with 9% interest and a 5% origination fee actually costs you ~11% APR. Most borrowers focus on interest rate and miss this; the lender knows. Always ask for the APR.",

    faqs: [
      {
        question: "How do I calculate a loan payment?",
        answer: "Use the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan amount, r is the monthly interest rate (annual ÷ 12), and n is the total number of monthly payments (years × 12). For a $20,000 personal loan at 12% APR for 5 years: P=$20K, r=0.01, n=60, monthly payment ≈ $444.89. The calculator above runs this formula instantly when you enter your loan details.",
      },
      {
        question: "How is loan interest calculated?",
        answer: "On an amortizing loan, interest is calculated each month against the current outstanding balance. In month 1, on a $20,000 loan at 12% APR, the monthly interest is $20,000 × (12%/12) = $200. After your payment of $444.89, $200 goes to interest and $244.89 reduces the principal to $19,755.11. Month 2's interest = $19,755.11 × 0.01 = $197.55 — slightly less, because the balance is lower. This continues until the balance hits zero.",
      },
      {
        question: "What's the difference between APR and interest rate?",
        answer: "Interest rate is just the cost of borrowing the principal — the rate plugged into the payment formula. APR (Annual Percentage Rate) is interest rate plus upfront fees like origination fees and discount points, expressed as an annualized percentage. APR is always ≥ interest rate. When comparing loan offers, compare APR to APR — an offer with a lower interest rate but a 5% origination fee can be more expensive than one with a higher interest rate and no fees.",
      },
      {
        question: "How does loan term affect my monthly payment?",
        answer: "Longer term = lower monthly payment but MORE total interest paid. On a $20,000 loan at 12% APR: 2-year term costs $941/mo and $2,580 total interest; 5-year term costs $445/mo and $6,693 total interest; 7-year term costs $353/mo and $9,651 total interest. Stretching from 2 to 7 years cuts the monthly payment by $588 but adds $7,071 to lifetime cost. Pick the shortest term you can comfortably afford, then add extra principal when you have buffer cash.",
      },
      {
        question: "Can I pay off a loan early without penalty?",
        answer: "Usually yes, but check your loan agreement. Most US personal loans, auto loans, and all federal student loans allow penalty-free prepayment. Some private student loans, a minority of mortgages, and certain subprime auto loans have prepayment penalties (typically 1–5% of remaining balance, often only in the first 1–3 years of the loan). Even if there's a penalty, paying off early usually still saves money — do the math: total prepayment savings vs the fee.",
      },
      {
        question: "What is amortization?",
        answer: "Amortization is the process of paying off a loan with regular fixed payments where each payment is split between interest (on the current balance) and principal (paying down the balance). Early payments are mostly interest; later payments are mostly principal. The full month-by-month split is called the amortization schedule. The calculator above generates the complete schedule so you can see exactly how each payment is applied.",
      },
      {
        question: "What is a good interest rate on a personal loan?",
        answer: "Depends on your credit score. With excellent credit (FICO 740+) and stable income, you can get a personal loan in the 6%–10% APR range. With good credit (670–739), expect 10%–18%. With fair credit (580–669), rates jump to 18%–28%. With bad credit (below 580), most lenders won't approve, and those that do charge 28%–36%. If you're being quoted higher than the typical range for your credit tier, shop around — banks, credit unions, and online lenders all price differently.",
      },
      {
        question: "How does my credit score affect my loan rate?",
        answer: "Credit score is the single biggest factor in your loan rate. The same $20,000 personal loan could cost ~7% APR with a 760+ credit score, ~15% APR at 680, and 30%+ APR at 580. Over a 5-year term, that's the difference between $3,800 and $14,000 in total interest paid. If you're not in a hurry to borrow, spending 6–12 months improving your credit (pay down credit cards, dispute errors, become an authorized user) is one of the highest-ROI financial moves you can make.",
      },
      {
        question: "What's a typical loan term length?",
        answer: "Defaults by loan type: personal loans 2–7 years (most common: 3 or 5); auto loans 36/48/60/72/84 months (most common: 60); federal student loans 10 years standard (can extend to 25); private student loans 5–20 years; mortgages 15 or 30 years (most common: 30); home equity loans 5–30 years. The calculator above sets a reasonable default when you pick the loan type but lets you change it.",
      },
      {
        question: "Should I choose a shorter or longer loan term?",
        answer: "Shorter term = higher monthly payment but lower total interest paid and faster freedom from debt. Longer term = lower monthly payment but more total interest paid over the life of the loan. If you can comfortably afford the shorter-term payment, take it — the lifetime savings are usually significant. If the shorter-term payment would stretch your budget, take the longer term but commit to making extra principal payments whenever you have spare cash. You get the flexibility of the longer term with most of the savings of the shorter term.",
      },
      {
        question: "How can I lower my monthly loan payment?",
        answer: "Four options: (1) extend the term — lower monthly but more total interest. (2) Refinance to a lower interest rate — works if your credit improved or rates fell. (3) Make a larger down payment or pay down some principal upfront — reduces the balance the rate is charged on. (4) Improve your credit score before applying. The first option is the only one that changes the math after you've already borrowed; the other three require action before signing or refinancing.",
      },
      {
        question: "What's the difference between secured and unsecured loans?",
        answer: "Secured loans are backed by collateral — your home (mortgage), car (auto loan), or savings (secured personal loan). If you default, the lender takes the collateral. Because the lender's risk is lower, secured loans have lower interest rates. Unsecured loans have no collateral — the lender lends based purely on your credit and income. Higher risk for the lender means higher rates for you. Most personal loans, federal student loans, and credit cards are unsecured.",
      },
      {
        question: "What is EMI and how is it different from a regular loan payment?",
        answer: "EMI stands for Equated Monthly Installment — it's the term used in India and other South Asian countries for what Americans call a monthly loan payment. The math is identical. Banks in India (SBI, HDFC, ICICI, Axis Bank) use the same amortization formula globally accepted. The only differences are local: typical Indian home loan rates are 8.5%–9.5%, plus India offers tax benefits on home loan interest (Sec 24b) and principal (Sec 80C) that don't have a direct US equivalent.",
      },
      {
        question: "Can EMI amount change during the loan tenure?",
        answer: "On a fixed-rate loan, no — the EMI stays the same every month for the entire tenure. On a floating-rate (variable-rate) loan, yes — the EMI changes when the lender's reference rate changes (RBI repo rate in India, SOFR in the US). Floating-rate loans usually offer lower initial rates but more uncertainty over time. Fixed-rate loans cost slightly more upfront but give predictable monthly budgeting.",
      },
      {
        question: "What happens if I miss a loan payment?",
        answer: "Three things happen, escalating fast: (1) Late fee of typically $25–$40 (or 2–4% of the payment amount) applied after the grace period (usually 10–15 days late). (2) Your credit score drops once the payment is 30 days late, with bigger drops at 60 and 90 days — this can knock 50–100+ points off your FICO. (3) After 90–120 days late, the lender may send the loan to collections, repossess collateral on secured loans, or file a lawsuit. If you're going to miss a payment, call the lender BEFORE the due date — most offer hardship deferrals.",
      },
      {
        question: "Is this loan calculator free?",
        answer: "100% free with no signup, no email required, no credit pull, and zero data ever sent to any server — every calculation runs locally in your browser. We don't pass your information to lenders or sell it to anyone. Unlike Bankrate and NerdWallet, we don't make money by routing you to lender partners. The tool is supported by general site ads outside the calculator itself.",
      },
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Auto Loan Calculator", href: "/finance-tools/auto-loan-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Credit Card Payoff Calculator", href: "/finance-tools/credit-card-payoff" },
      { name: "Debt Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Loan Calculator — Monthly Payment & Amortization",
        description: "Free loan calculator for personal, auto, student, and home loans. Get exact monthly payment, full amortization schedule, and savings from extra payments.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/loan-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <EMICalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/loan-calculator"
      }}
    />
  )
}
