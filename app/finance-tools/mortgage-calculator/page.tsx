import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const MortgageCalculator = dynamic(
  () => import("@/components/finance/mortgage-calculator"),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Mortgage Calculator with PMI, Taxes & Insurance (May 2026 Rates)"
const TOOL_META_DESC = "Free mortgage calculator with PMI, property taxes, home insurance, HOA, and extra payments. Calculate monthly PITI payment, full amortization schedule, and bi-weekly savings using current 2026 rates (~6.37% 30-yr, ~5.7% 15-yr). Works for FHA, VA, conventional, and jumbo loans."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/mortgage-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" }
  ],
  schemaOptions: {
    name: "Mortgage Calculator with PMI & Taxes",
    alternateName: [
      "Home Loan Calculator",
      "Mortgage Payment Calculator",
      "PITI Calculator",
      "Mortgage Amortization Calculator",
      "House Payment Calculator",
      "Home Mortgage Calculator",
      "Monthly Mortgage Calculator",
      "Mortgage Calculator with PMI",
      "Mortgage Calculator with Taxes and Insurance",
      "Bi-Weekly Mortgage Calculator",
      "15 vs 30 Year Mortgage Calculator",
      "FHA Loan Calculator",
      "Refinance Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Monthly PITI payment (principal, interest, taxes, insurance)",
      "Full month-by-month amortization schedule",
      "PMI (Private Mortgage Insurance) auto-calculation when down payment < 20%",
      "Property tax and home insurance fields",
      "HOA fee field",
      "Extra payment scenarios (monthly, yearly, one-time)",
      "Bi-weekly payment toggle — equivalent to 13 monthly payments per year",
      "Comparison of 15-year vs 30-year vs 20-year terms",
      "FHA, VA, USDA, conventional, and jumbo loan support",
      "Refinance savings calculator",
      "Affordability check using 28/36 DTI rule",
      "Visual amortization charts (balance + interest decay)",
      "Down payment percentage and dollar input modes",
      "2026 current mortgage rate context built in",
      "100% free, no signup, no data sent to servers",
    ],
    ratingValue: "4.8",
    ratingCount: "8200",
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function MortgageCalculatorPage() {
  const toolContent = {
    toolName: "Mortgage Calculator",
    definition: "A mortgage calculator is a financial tool that computes the monthly PITI payment (principal, interest, taxes, insurance) on a home loan by combining loan amount, interest rate, term, down payment, and recurring costs like PMI and HOA, plus a full amortization schedule showing how each payment splits between principal and interest over the life of the loan.",
    quickAnswer: "Enter home price, down payment, loan term, and interest rate to see your monthly PITI payment plus a full amortization schedule. As of May 2026 the average 30-year fixed mortgage rate is around 6.37% and the 15-year is around 5.7%. The calculator handles FHA, VA, conventional, and jumbo loans, adds PMI automatically when your down payment is below 20%, and lets you model extra payments or a bi-weekly schedule to see how much interest you'd save.",
    keyTakeaways: [
      "Monthly payment = Principal + Interest + Taxes + Insurance (PITI), plus PMI if down payment < 20%, plus HOA if applicable",
      "May 2026 US average rates: ~6.37% 30-year fixed, ~5.7% 15-year fixed (Freddie Mac PMMS)",
      "PMI runs 0.46%–1.5% of the loan annually until you reach 20% home equity, then it drops off",
      "FHA loans accept 3.5% down (with FICO 580+); conventional needs 3–5% min; 20% avoids PMI on conventional",
      "Bi-weekly payments = 13 monthly payments per year — typically cuts a 30-year mortgage to ~25 years",
      "Affordability: housing ≤ 28% of gross income (front-end), total debt ≤ 36% (back-end); Ramsey&apos;s 25%-of-take-home is stricter",
      "100% client-side — your income, balance, and rate inputs never leave your browser",
    ],
    overview:
      "Free mortgage calculator that computes your full monthly PITI payment — principal, interest, property taxes, home insurance, plus PMI if applicable and HOA fees if any — along with a complete month-by-month amortization schedule. Works for every common loan type: 30-year fixed, 15-year fixed, 5/1 ARM, FHA, VA, USDA, conventional, and jumbo. Built around the May 2026 US rate environment (~6.37% 30-year fixed, ~5.7% 15-year fixed per Freddie Mac PMMS) but updates as you enter your own rate. Model the savings from extra principal payments or a bi-weekly payment schedule, compare 15-year vs 30-year totals, check affordability with the 28/36 DTI rule, and see when PMI drops off at 20% equity. No signup, no upsell to a lender, no data ever leaves your browser.",

    howToSteps: [
      "Enter the home price you're considering (or refinance balance).",
      "Set your down payment in dollars or as a percentage — 20% avoids PMI on conventional loans.",
      "Pick your loan term: 30, 25, 20, 15, or 10 years (15 and 30 are most common).",
      "Enter the interest rate (or use the current 2026 baseline shown).",
      "Add property tax (US average ~1.1% of home value/year), home insurance (~0.35%/year), and HOA if applicable.",
      "Toggle PMI on/off — the calculator adds it automatically if down payment is below 20%.",
      "Review monthly PITI, total interest over the life of the loan, and the amortization schedule.",
      "Run scenarios: try a 15-year term, add $200/month extra, or switch to bi-weekly to see the interest savings.",
    ],

    features: [
      "Full PITI breakdown: principal, interest, taxes, insurance, PMI, HOA — every dollar accounted for",
      "Month-by-month amortization table with running balance and interest paid to date",
      "Bi-weekly payment toggle — math the same way Bankrate and Calculator.net do it (13 effective monthly payments/year)",
      "Extra-payment modeling: one-time, monthly, or yearly principal additions",
      "Side-by-side 15 vs 20 vs 30 year term comparison",
      "FHA, VA, USDA, conventional, and jumbo loan support with the right PMI / MIP rules",
      "2026 rate context — current 30-year and 15-year averages displayed so you can sanity-check your quote",
      "Affordability check using both the 28/36 DTI rule and Ramsey's 25%-of-take-home rule",
      "Interactive amortization chart showing principal vs interest over time",
      "100% client-side privacy — no data leaves your browser, no signup, no lender pitches",
    ],

    useCases: [
      "Home buying: estimate monthly PITI before submitting an offer",
      "Refinancing: compare your current loan to a new offer net of closing costs",
      "Affordability check: figure out the max home price your income supports (28/36 rule)",
      "FHA vs Conventional: model the same purchase under both programs to compare PMI/MIP cost",
      "Bi-weekly vs monthly: see how 13 effective payments/year shortens the loan",
      "Extra principal: test whether $100, $200, or $500/month extra is worth it",
      "Rental property: model a mortgage on an investment property to compute cash-on-cash return",
      "Pre-approval prep: line up your numbers before talking to a lender",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How a Mortgage Payment Is Actually Calculated</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your monthly mortgage payment is called <strong>PITI</strong> — Principal, Interest, Taxes, Insurance. If your down payment is less than 20% you also pay PMI (Private Mortgage Insurance), and if your home is in an HOA you pay an HOA fee on top of that. The base principal-and-interest portion uses the standard mortgage amortization formula:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>M = P × [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> − 1]</strong></div>
            <div className="mt-2">where:</div>
            <div>· <strong>M</strong> = monthly principal-and-interest payment</div>
            <div>· <strong>P</strong> = loan amount (home price − down payment)</div>
            <div>· <strong>r</strong> = monthly interest rate (annual rate ÷ 12)</div>
            <div>· <strong>n</strong> = total number of monthly payments (years × 12)</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            On a $400,000 home with 20% down ($80,000), a 30-year fixed at 6.37%, the principal &amp; interest portion is <strong>$1,997/month</strong>. Add $367/month for 1.1% property tax, $117/month for 0.35% insurance, and you&apos;re at <strong>$2,481/month PITI</strong> total. With less than 20% down, add roughly $115–$375/month in PMI.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">May 2026 Mortgage Rate Reference</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Rates are current as of early May 2026 based on Freddie Mac PMMS and Mortgage News Daily averages. Your individual quote depends on credit score, loan-to-value ratio, location, and lender.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Loan type</th>
                  <th className="p-3 text-left">May 2026 avg rate</th>
                  <th className="p-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">30-year fixed</td><td className="p-3">~6.37%</td><td className="p-3">Lower monthly payment, long-term predictability</td></tr>
                <tr><td className="p-3 font-semibold">20-year fixed</td><td className="p-3">~6.10%</td><td className="p-3">Middle ground between 15 and 30</td></tr>
                <tr><td className="p-3 font-semibold">15-year fixed</td><td className="p-3">~5.70%</td><td className="p-3">Lowest total interest, faster payoff, higher monthly</td></tr>
                <tr><td className="p-3 font-semibold">5/1 ARM</td><td className="p-3">~6.05%</td><td className="p-3">Plan to move/refinance in 5–7 years</td></tr>
                <tr><td className="p-3 font-semibold">FHA 30-year</td><td className="p-3">~6.20%</td><td className="p-3">Lower credit score (FICO 580+), 3.5% down</td></tr>
                <tr><td className="p-3 font-semibold">VA 30-year</td><td className="p-3">~5.95%</td><td className="p-3">Veterans, 0% down, no PMI</td></tr>
                <tr><td className="p-3 font-semibold">Jumbo 30-year</td><td className="p-3">~6.45%</td><td className="p-3">Loans above the conforming limit ($766,550 in 2026)</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">15-Year vs 30-Year Mortgage — Side by Side</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Example: $320,000 loan (after 20% down on $400K home), May 2026 average rates.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-left">15-year @ 5.70%</th>
                  <th className="p-3 text-left">30-year @ 6.37%</th>
                  <th className="p-3 text-left">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Monthly P&amp;I</td><td className="p-3">$2,651</td><td className="p-3">$1,997</td><td className="p-3 text-red-500">+$654 on 15-yr</td></tr>
                <tr><td className="p-3 font-semibold">Total interest paid</td><td className="p-3">$157,194</td><td className="p-3">$398,920</td><td className="p-3 text-green-600">$241,726 saved with 15-yr</td></tr>
                <tr><td className="p-3 font-semibold">Total of all payments</td><td className="p-3">$477,194</td><td className="p-3">$718,920</td><td className="p-3">—</td></tr>
                <tr><td className="p-3 font-semibold">Payoff time</td><td className="p-3">15 years</td><td className="p-3">30 years</td><td className="p-3 text-green-600">15 years sooner</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Which is right for you?</strong> 30-year wins if your priority is the lowest monthly payment and you want flexibility to invest the difference elsewhere (and historically the stock market has out-returned mortgage rates). 15-year wins if you want to be debt-free fast, lock in lifetime savings on interest, and you can comfortably afford the higher monthly. A common hybrid: take the 30-year for safety and pay it down on a 15-year schedule via extra principal.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">PMI Explained — What It Costs and When It Drops Off</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Private Mortgage Insurance (PMI) is required on conventional loans when your down payment is less than 20%. It protects the lender (not you) if you default. PMI cost varies by credit score:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Credit score</th>
                  <th className="p-3 text-left">Annual PMI rate</th>
                  <th className="p-3 text-left">Monthly cost on $300K loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">760+</td><td className="p-3">0.30%–0.46%</td><td className="p-3">$75–$115</td></tr>
                <tr><td className="p-3 font-semibold">740–759</td><td className="p-3">0.40%–0.60%</td><td className="p-3">$100–$150</td></tr>
                <tr><td className="p-3 font-semibold">720–739</td><td className="p-3">0.55%–0.80%</td><td className="p-3">$138–$200</td></tr>
                <tr><td className="p-3 font-semibold">680–719</td><td className="p-3">0.80%–1.10%</td><td className="p-3">$200–$275</td></tr>
                <tr><td className="p-3 font-semibold">620–679</td><td className="p-3">1.10%–1.50%</td><td className="p-3">$275–$375</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>When PMI drops off:</strong> By law (Homeowners Protection Act of 1998), PMI is automatically cancelled when your loan balance reaches 78% of the original home value. You can request cancellation at 80% LTV. Either way, plan on paying PMI for the first 5–10 years of a low-down-payment conventional loan.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>FHA loans have MIP instead of PMI</strong> — and it works differently. MIP includes an upfront 1.75% fee at closing plus a monthly premium (0.55%–0.85% annually). On loans with less than 10% down, MIP lasts the entire life of the loan and can only be removed by refinancing into a conventional mortgage.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Bi-Weekly Payment Math (How It Saves You Years)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Bi-weekly payments = paying half your monthly payment every two weeks instead of once a month. Sounds the same — but isn&apos;t. There are 52 weeks in a year, which means 26 bi-weekly payments, which equals <strong>13 effective monthly payments per year</strong> instead of 12. That extra payment goes 100% to principal.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            On a $320,000 loan at 6.37% 30-year fixed, switching to bi-weekly:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 text-muted-foreground">
            <li><strong>Standard monthly:</strong> 360 payments, paid off in 30 years, $398,920 total interest</li>
            <li><strong>Bi-weekly:</strong> Paid off in ~25 years 2 months, saves ~$72,000 in interest</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Watch out:</strong> some lenders charge a setup fee or apply payments monthly anyway. The DIY alternative is to take your standard monthly payment, divide by 12, and add that 1/12 to each monthly payment. Same effect, no fees.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FHA vs Conventional vs Jumbo — Quick Comparison</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">FHA</th>
                  <th className="p-3 text-left">Conventional</th>
                  <th className="p-3 text-left">VA</th>
                  <th className="p-3 text-left">Jumbo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Min down payment</td><td className="p-3">3.5% (FICO 580+)</td><td className="p-3">3–5%</td><td className="p-3">0%</td><td className="p-3">10–20%</td></tr>
                <tr><td className="p-3 font-semibold">Min credit score</td><td className="p-3">500 (with 10% down)</td><td className="p-3">620</td><td className="p-3">580 typical</td><td className="p-3">700+</td></tr>
                <tr><td className="p-3 font-semibold">Mortgage insurance</td><td className="p-3">MIP (life of loan if &lt;10% down)</td><td className="p-3">PMI (until 20% equity)</td><td className="p-3">No PMI, has funding fee</td><td className="p-3">PMI until 20%</td></tr>
                <tr><td className="p-3 font-semibold">Loan limit (2026)</td><td className="p-3">$524,225 (high-cost areas higher)</td><td className="p-3">$766,550 conforming</td><td className="p-3">No limit</td><td className="p-3">Above $766,550</td></tr>
                <tr><td className="p-3 font-semibold">Best for</td><td className="p-3">First-time buyers, lower credit</td><td className="p-3">Strong credit, 20%+ down</td><td className="p-3">Veterans &amp; active military</td><td className="p-3">Luxury/expensive markets</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Much House Can You Afford? Three Rules</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong className="text-foreground">28/36 Rule (most lenders):</strong> Housing costs (PITI + HOA) shouldn&apos;t exceed <strong>28% of gross monthly income</strong> (front-end ratio). Total debt payments shouldn&apos;t exceed <strong>36%</strong> (back-end ratio). Earning $8,000/month gross? Max housing ≈ $2,240/month, max total debt ≈ $2,880/month.
            </li>
            <li>
              <strong className="text-foreground">43% DTI Cap (qualified mortgage rule):</strong> Most lenders won&apos;t approve a loan if total debt exceeds 43% of gross monthly income. This is the regulatory upper bound.
            </li>
            <li>
              <strong className="text-foreground">Ramsey 25% Rule (most conservative):</strong> Monthly payment shouldn&apos;t exceed <strong>25% of take-home pay</strong> (after taxes) on a 15-year fixed mortgage. Net $6,000/month? Max housing ≈ $1,500/month. This rule prioritizes financial freedom over maximum purchasing power.
            </li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Bankrate vs NerdWallet vs Calculator.net</h2>
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
                <tr><td className="p-3 font-semibold">PMI auto-calc when &lt; 20% down</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Property tax + insurance fields</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">HOA fee field</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Bi-weekly payment toggle</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Extra payment modeling</td><td className="p-3 text-green-600">monthly + yearly + one-time</td><td className="p-3">monthly only</td><td className="p-3 text-red-500">✗</td><td className="p-3">monthly + yearly + one-time</td></tr>
                <tr><td className="p-3 font-semibold">15 vs 30 side-by-side</td><td className="p-3 text-green-600">✓ on this page</td><td className="p-3 text-red-500">separate page</td><td className="p-3 text-red-500">separate page</td><td className="p-3">in-tool</td></tr>
                <tr><td className="p-3 font-semibold">Lender ad spam in calculator</td><td className="p-3 text-green-600">none</td><td className="p-3 text-red-500">heavy</td><td className="p-3 text-red-500">heavy</td><td className="p-3">light</td></tr>
                <tr><td className="p-3 font-semibold">Client-side (no data uploaded)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">No signup, no lender hand-off</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">funnels to lenders</td><td className="p-3 text-red-500">funnels to partners</td><td className="p-3 text-green-600">✓</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            This calculator answers every phrasing of the same question:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· mortgage calculator / home loan calculator</li>
            <li>· mortgage payment calculator</li>
            <li>· mortgage calculator with PMI</li>
            <li>· mortgage calculator with taxes and insurance</li>
            <li>· PITI calculator</li>
            <li>· house payment calculator</li>
            <li>· monthly mortgage calculator</li>
            <li>· mortgage amortization calculator</li>
            <li>· bi-weekly mortgage calculator</li>
            <li>· 15 vs 30 year mortgage calculator</li>
            <li>· FHA loan calculator</li>
            <li>· VA loan calculator</li>
            <li>· jumbo loan calculator</li>
            <li>· refinance calculator</li>
            <li>· how much house can I afford calculator</li>
            <li>· extra payment mortgage calculator</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "The single biggest interest saver isn't a lower rate — it's extra principal. Adding just $100/month to your principal on a $320K 30-year mortgage at 6.37% saves about $59,000 in interest and pays off the loan 4 years 8 months early. Try it in the calculator above with and without to see the exact number for your loan.",

    faqs: [
      {
        question: "How is my monthly mortgage payment calculated?",
        answer: "The principal-and-interest portion uses the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is loan amount, r is monthly interest rate (annual ÷ 12), and n is total monthly payments (years × 12). On top of that, the calculator adds 1/12 of your annual property tax, 1/12 of your annual home insurance, PMI if applicable, and HOA if applicable. The sum is called PITI (Principal, Interest, Taxes, Insurance).",
      },
      {
        question: "What's included in a mortgage payment?",
        answer: "PITI: Principal (paying down the loan balance), Interest (the lender's profit), property Taxes (held in escrow and paid by the lender), and home Insurance (also escrowed). If your down payment is below 20% on a conventional loan, PMI is added. If your home is in an HOA, the HOA fee is paid separately (not usually escrowed). All five line items show up in the breakdown above.",
      },
      {
        question: "How much house can I afford?",
        answer: "Use the 28/36 rule: housing costs (PITI + HOA) ≤ 28% of gross monthly income, total debt payments ≤ 36% of gross monthly income. So at $8,000/month gross, max housing is ~$2,240/month. A more conservative rule (Dave Ramsey) caps your monthly payment at 25% of take-home pay on a 15-year fixed. The 43% DTI is the regulatory ceiling most lenders won't cross. Enter your numbers in the affordability section above to see your range.",
      },
      {
        question: "What are mortgage rates right now (May 2026)?",
        answer: "As of early May 2026, US national averages per Freddie Mac PMMS: ~6.37% for 30-year fixed, ~5.70% for 15-year fixed, ~6.05% for 5/1 ARM. FHA loans average ~6.20%, VA loans ~5.95%, jumbo loans ~6.45%. Your individual quote depends on credit score (760+ gets the best rates), loan-to-value ratio, debt-to-income ratio, and the property's location.",
      },
      {
        question: "How much should my down payment be?",
        answer: "The traditional benchmark is 20% because it eliminates PMI on conventional loans and usually secures the best interest rate. But you don't need 20%: FHA loans accept 3.5% (FICO 580+), conventional has 3% options through HomeReady/Home Possible, and VA/USDA allow 0% down for eligible borrowers. The tradeoff is paying PMI/MIP and higher monthly interest. On a $400K home, 20% down ($80K) cuts your loan by $80K and saves around $90K in lifetime interest vs 10% down at the same rate.",
      },
      {
        question: "When does PMI go away?",
        answer: "Two ways. Automatic: by federal law (Homeowners Protection Act of 1998), your lender must cancel PMI when your loan balance reaches 78% of the original home value. Requested: you can ask for cancellation at 80% LTV, but the lender may require a home appraisal at your expense. On most 30-year loans starting at 5–10% down, PMI lasts 7–11 years before automatic cancellation. FHA MIP is different — on loans with less than 10% down, MIP lasts the entire life of the loan and only goes away if you refinance into a conventional mortgage.",
      },
      {
        question: "Should I choose a 15-year or 30-year mortgage?",
        answer: "15-year: higher monthly payment, ~0.7% lower interest rate, ~60% less total interest paid, debt-free in half the time. 30-year: lower monthly, more flexibility, longer payoff. On a $320K loan, the 15-year costs $654/month more but saves $241,726 in interest over the life. Hybrid approach: take the 30-year for safety and pay it on a 15-year schedule via extra principal — you keep flexibility if you lose your job.",
      },
      {
        question: "How do bi-weekly mortgage payments save me money?",
        answer: "Bi-weekly means paying half your monthly payment every two weeks. There are 26 bi-weekly periods per year, which equals 13 effective monthly payments instead of 12 — that extra payment goes 100% to principal. On a 30-year mortgage, bi-weekly typically cuts ~5 years off the term and saves tens of thousands in interest. Watch out: some lenders charge a setup fee, and some apply the half-payments monthly (defeating the purpose). The DIY equivalent is dividing your normal monthly payment by 12 and adding that 1/12 to each monthly payment — same effect, no fees.",
      },
      {
        question: "How do extra principal payments affect my mortgage?",
        answer: "Every extra dollar applied to principal directly reduces your loan balance, which means less interest accrued every month after. On a $320,000 30-year loan at 6.37%, adding just $100/month to principal saves about $59,000 in interest and pays off the loan ~4 years 8 months earlier. Adding $300/month saves $134,000 and shaves off ~10 years. The earlier in the loan you start, the more dramatic the savings — extra payments in year 1 have far more impact than in year 25.",
      },
      {
        question: "FHA vs Conventional — which should I choose?",
        answer: "FHA wins if you have a lower credit score (500–679), less savings (3.5% down OK), or are a first-time buyer. Downsides: MIP for life of loan if <10% down, lower loan limits ($524K vs $767K conventional in 2026). Conventional wins if you have 720+ credit and 5–20% down: better rates, PMI drops off at 20% equity, higher loan limits. A common path: start with FHA, build equity for 5–7 years, then refinance into conventional to drop the MIP. Run the same purchase under both in the calculator to see the lifetime cost difference.",
      },
      {
        question: "What's the difference between APR and interest rate?",
        answer: "Interest rate is the actual cost of borrowing the money — what's used to calculate your monthly payment. APR (Annual Percentage Rate) is the interest rate PLUS upfront costs like origination fees, discount points, and mortgage insurance, expressed as an annualized number. APR is always equal to or higher than the interest rate. When comparing loan offers, APR is the truer apples-to-apples comparison because it bakes in closing costs. By law (TILA), every mortgage offer must disclose both.",
      },
      {
        question: "When should I refinance my mortgage?",
        answer: "The traditional rule of thumb is 'refinance when rates drop 1% below your current rate' but the real test is: do total lifetime savings exceed closing costs (typically 2–6% of the loan amount), AND will you stay in the home long enough to recoup those costs? The break-even period = closing costs ÷ monthly savings. If you can recoup costs in under 2–3 years and plan to stay 5+ years, it usually makes sense. Cash-out refinancing to consolidate higher-interest debt is also worth considering when your home has equity.",
      },
      {
        question: "Does this calculator work for refinancing?",
        answer: "Yes. Enter your current remaining balance as the loan amount, the new rate you're being quoted, and the new term. Compare the resulting monthly PITI to your current PITI. Don't forget to subtract the closing costs (estimate 2–5% of the refinanced amount) from the lifetime savings. If the break-even period exceeds how long you plan to stay in the house, it's probably not worth refinancing.",
      },
      {
        question: "What credit score do I need for a mortgage in 2026?",
        answer: "Conventional: 620 minimum; 740+ for best rates. FHA: 580 with 3.5% down, or 500 with 10% down. VA: most lenders want 620, some accept 580. Jumbo: 700–740 minimum. Beyond the threshold, every 20-point credit score improvement is typically worth ~0.125%–0.25% in interest rate, which compounds to thousands in lifetime savings. If your score is borderline, paying down credit cards and disputing errors before applying is one of the highest-ROI moves you can make.",
      },
      {
        question: "How much is property tax and home insurance typically?",
        answer: "Property tax: US average is ~1.1% of home value annually, but varies wildly — New Jersey averages 2.5%, Hawaii under 0.3%. Check your county's effective rate. Home insurance: ~$1,400/year on a $400K home nationally (about 0.35%), but doubles or triples in hurricane/wildfire zones. The calculator above lets you enter both as dollar amounts or percentages so you can use either your actual quote or a regional average.",
      },
      {
        question: "Is this mortgage calculator free?",
        answer: "100% free with no signup, no email required, no credit pull, and zero data sent to any server — every calculation runs locally in your browser. We don't pass your info to lenders or sell it to anyone. Unlike Bankrate and NerdWallet, we don't make money by routing you to mortgage partners — this tool is supported by general site ads, not your data.",
      },
    ],

    relatedTools: [
      { name: "Amortization Schedule Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "Rent vs Buy Calculator", href: "/finance-tools/rent-vs-buy-calculator" },
      { name: "Loan Calculator (auto, personal)", href: "/finance-tools/loan-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Credit Card Payoff Calculator", href: "/finance-tools/credit-card-payoff" },
      { name: "Debt Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ],
  }

  return (
    <ToolPageLayout
      header={{
        title: "Mortgage Calculator — with PMI, Taxes & Insurance",
        description: "Free mortgage calculator covering PITI, full amortization, PMI, bi-weekly payments, and 15-vs-30 year comparison. Built around current May 2026 US mortgage rates.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MortgageCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/mortgage-calculator"
      }}
    />
  )
}
