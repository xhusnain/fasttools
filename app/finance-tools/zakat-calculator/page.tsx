import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  HandHeart, Scale, DollarSign, Heart, Gem, Coins,
  CheckCircle, AlertTriangle, Lightbulb, BookOpen, Users, Clock
} from "lucide-react"

const ZakatCalculator = dynamic(
  () => import("@/components/finance/zakat-calculator").then(mod => mod.ZakatCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Zakat Calculator — Free Online | Gold, Silver, Cash & Stocks"
const TOOL_NAME = "Zakat Calculator 2026"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate Zakat 2026 free. Accurate Zakat on cash, gold, silver, investments, business & crypto. Nisab threshold (gold & silver), 8 recipient categories. Based on Quran & Sunnah.",
  path: "/finance-tools/zakat-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/zakat-calculator" }
  ],
  schemaOptions: {
    name: "Zakat Calculator 2026 | Islamic Zakat Obligation Calculator",
    alternateName: "Zakat Calculator, Zakat Al-Mal Calculator, Nisab Calculator, Islamic Charity Calculator, Zakat on Gold Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Calculate Zakat at 2.5% on net zakatable wealth",
      "Nisab threshold calculation (gold or silver standard)",
      "Cash, bank accounts, fixed deposits",
      "Gold and silver by weight (grams, tola, oz)",
      "Stocks, mutual funds, crypto, retirement accounts",
      "Business inventory, receivables, business cash",
      "Rental income and other zakatable assets",
      "Debt and liability deductions",
      "8 Quranic categories of Zakat recipients (Surah At-Tawbah 9:60)",
      "10 currencies (USD, GBP, EUR, PKR, SAR, AED, MYR, IDR, BDT, INR)",
      "Copy results to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function ZakatCalculatorPage() {
  const toolContent = {
    toolName: "Zakat Calculator 2026 — Fulfil Your Islamic Obligation with Confidence",
    overview: "Calculate your Zakat obligation accurately based on Islamic jurisprudence (fiqh). Enter your assets — cash, gold, silver, investments, business assets, and crypto — minus debts to determine if your wealth meets the Nisab threshold and exactly how much Zakat you owe. Includes the 8 Quranic categories of recipients and multi-currency support.",

    definition: "Zakat (Arabic: zakah) is the third pillar of Islam — an obligatory annual charity of 2.5% (1/40th) on wealth that exceeds the Nisab threshold for one full lunar year (Hawl). It purifies wealth, helps the less fortunate, and is one of the five fundamental acts of worship in Islam.",

    quickAnswer: "Zakat is 2.5% of your net zakatable wealth (cash + gold + silver + investments + business assets - debts) if it exceeds the Nisab threshold. Nisab based on silver (612.36g) is approximately $673 in 2026; based on gold (87.48g) is approximately $8,311. Most scholars recommend using the silver standard to benefit more recipients.",

    keyTakeaways: [
      "Zakat rate is 2.5% (1/40th) of net zakatable wealth held for one full lunar year (Hawl)",
      "Nisab (minimum threshold) equals 87.48g of gold OR 612.36g of silver — most scholars recommend silver as it helps more people",
      "Zakatable assets include: cash, bank accounts, gold/silver, stocks, crypto, business inventory, receivables, and rental income",
      "Non-zakatable: personal home, personal vehicle, personal clothing, household furniture, tools of trade",
      "Deductible: debts due within the year, immediate living expenses, and amounts owed to others",
      "Zakat must be distributed to 8 specific categories mentioned in Quran (Surah At-Tawbah 9:60)"
    ],

    howToSteps: [
      "Select your currency and Nisab standard (silver recommended by majority of scholars).",
      "Enter current gold and silver prices per gram in your currency (check market rates).",
      "Input all your zakatable assets: cash, bank accounts, gold/silver weight, investments, business assets.",
      "Enter deductible debts and liabilities (loans, credit card balance, immediate expenses due).",
      "Click Calculate to see if Zakat is due and the exact amount, with recipient distribution guide."
    ],

    features: [
      "Shariah-Compliant Calculation: Based on the Quran, Hadith, and classical Islamic jurisprudence from the four major schools.",
      "Comprehensive Asset Coverage: Cash, bank accounts, gold, silver, stocks, mutual funds, crypto, business assets, receivables, rental income.",
      "Nisab Threshold: Choose between gold (87.48g) and silver (612.36g) standards with live price input.",
      "Debt Deductions: Subtract personal loans, credit card debt, mortgage installments due, and immediate expenses.",
      "8 Recipient Categories: Distribution guide based on Surah At-Tawbah 9:60 with Arabic names and descriptions.",
      "Multi-Currency: Support for USD, GBP, EUR, PKR, SAR, AED, MYR, IDR, BDT, and INR.",
      "Gold/Silver by Weight: Input in grams with tola and ounce conversion notes. Includes jewelry (Hanafi school).",
      "Clear Nisab Check: Visual confirmation of whether your wealth meets the Nisab threshold."
    ],

    useCases: [
      "Annual Zakat Calculation: Calculate your yearly Zakat obligation before Ramadan or your personal Zakat anniversary date.",
      "Ramadan Planning: Many Muslims pay Zakat during Ramadan for multiplied reward — calculate early for timely distribution.",
      "Gold & Silver Zakat: Calculate Zakat specifically on gold jewelry, silver items, and precious metals by weight.",
      "Business Zakat: Determine Zakat on business inventory, trade goods, and receivables.",
      "Investment Zakat: Calculate Zakat on stock portfolios, mutual funds, and cryptocurrency holdings.",
      "Debt Assessment: Understand which debts are deductible and how they affect your Zakat obligation.",
      "Family Education: Teach family members about Zakat calculation with clear, step-by-step breakdown."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BookOpen className="h-6 w-6 text-primary" />
            What is Zakat? The Third Pillar of Islam
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              <strong>Zakat</strong> (Arabic: زكاة, meaning &quot;purification&quot; and &quot;growth&quot;) is one of the Five Pillars of Islam and an obligatory act of worship for every Muslim whose wealth exceeds the Nisab threshold. Allah (SWT) commands in the Quran:
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted rounded-r-lg">
              <p className="text-sm italic text-foreground">&quot;And establish prayer and give Zakat, and whatever good you put forward for yourselves — you will find it with Allah.&quot;</p>
              <footer className="text-xs text-muted-foreground mt-1">— Quran, Surah Al-Baqarah (2:110)</footer>
            </blockquote>
            <p>
              Zakat serves multiple purposes: it <strong>purifies the giver&apos;s wealth</strong>, <strong>supports those in need</strong>, <strong>reduces wealth inequality</strong>, and <strong>strengthens the Muslim community (Ummah)</strong>. It is not optional charity (Sadaqah) but a divine obligation with specific rules.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">The Zakat Formula</h3>
              <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                Zakat = (Total Zakatable Assets - Deductible Debts) × 2.5%
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                Only if net wealth ≥ Nisab threshold AND held for one full lunar year (Hawl).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Scale className="h-6 w-6 text-primary" />
            Understanding Nisab: The Minimum Threshold
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              <strong>Nisab</strong> is the minimum amount of wealth a Muslim must possess for Zakat to become obligatory. It was set by Prophet Muhammad (PBUH) based on gold and silver:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Standard</th>
                    <th className="p-3">Weight</th>
                    <th className="p-3">Approx. Value (2026)</th>
                    <th className="p-3">Who Recommends</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Gold Nisab</td>
                    <td className="p-3">87.48 grams (7.5 tola / 3 oz)</td>
                    <td className="p-3">~$8,311 USD</td>
                    <td className="p-3 text-muted-foreground">Some Shafi&apos;i and Hanbali scholars</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Silver Nisab</td>
                    <td className="p-3">612.36 grams (52.5 tola / 21 oz)</td>
                    <td className="p-3">~$673 USD</td>
                    <td className="p-3 text-muted-foreground">Hanafi school and majority of scholars</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Which to use?</strong> The majority of scholars recommend the <strong>silver standard</strong> because it results in a lower threshold, meaning more people pay Zakat and more recipients benefit. The Hanafi school and many contemporary scholars follow this view. If in doubt, consult your local Islamic scholar.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Heart className="h-6 w-6 text-primary" />
            The 8 Categories of Zakat Recipients (Quran 9:60)
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted rounded-r-lg">
              <p className="text-sm italic text-foreground">&quot;Zakah expenditures are only for the poor and for the needy and for those employed for it and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveller — an obligation [imposed] by Allah.&quot;</p>
              <footer className="text-xs text-muted-foreground mt-1">— Quran, Surah At-Tawbah (9:60)</footer>
            </blockquote>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { num: 1, name: "Al-Fuqara (The Poor)", desc: "Those who lack the means to meet basic needs — food, shelter, clothing." },
                { num: 2, name: "Al-Masakin (The Needy)", desc: "Those who have some income but not enough to live above the poverty line." },
                { num: 3, name: "Al-Amilin Alayha (Zakat Administrators)", desc: "Those appointed to collect, manage, and distribute Zakat funds." },
                { num: 4, name: "Al-Mu'allafatu Qulubuhum (Hearts to Reconcile)", desc: "New Muslims or those whose hearts may be inclined toward Islam." },
                { num: 5, name: "Fir-Riqab (Freeing Captives)", desc: "Freeing those in bondage — historically slaves, today includes human trafficking victims." },
                { num: 6, name: "Al-Gharimin (The Debt-Ridden)", desc: "Those overwhelmed by debts incurred for permissible reasons." },
                { num: 7, name: "Fi Sabilillah (In the Way of Allah)", desc: "Those striving in Allah's cause — education, dawah, community defence." },
                { num: 8, name: "Ibn as-Sabil (The Traveller)", desc: "Stranded travellers who need assistance to reach their destination or return home." },
              ].map(cat => (
                <div key={cat.num} className="p-3 rounded-lg border border-border bg-muted/50">
                  <div className="text-xs font-semibold text-primary mb-0.5">{cat.num}. {cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Gem className="h-6 w-6 text-primary" />
            What Assets Are Zakatable?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Asset</th>
                  <th className="p-3">Zakatable?</th>
                  <th className="p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Cash & Bank Balances</td>
                  <td className="p-3 text-green-500 font-semibold">Yes</td>
                  <td className="p-3 text-muted-foreground">All cash, savings, checking, fixed deposits</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Gold & Silver</td>
                  <td className="p-3 text-green-500 font-semibold">Yes</td>
                  <td className="p-3 text-muted-foreground">Including jewelry (Hanafi). Some schools exempt worn jewelry.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Stocks & Investments</td>
                  <td className="p-3 text-green-500 font-semibold">Yes</td>
                  <td className="p-3 text-muted-foreground">Market value at Zakat date. Includes mutual funds, ETFs.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Cryptocurrency</td>
                  <td className="p-3 text-green-500 font-semibold">Yes</td>
                  <td className="p-3 text-muted-foreground">Contemporary scholars agree crypto is zakatable at market value.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Business Inventory</td>
                  <td className="p-3 text-green-500 font-semibold">Yes</td>
                  <td className="p-3 text-muted-foreground">Trade goods at wholesale/market value. Not fixed business assets.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Personal Home</td>
                  <td className="p-3 text-red-500 font-semibold">No</td>
                  <td className="p-3 text-muted-foreground">Primary residence is exempt. Investment property income is zakatable.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Personal Vehicle</td>
                  <td className="p-3 text-red-500 font-semibold">No</td>
                  <td className="p-3 text-muted-foreground">Personal-use car is exempt. Vehicles for trade are zakatable.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Household Items</td>
                  <td className="p-3 text-red-500 font-semibold">No</td>
                  <td className="p-3 text-muted-foreground">Furniture, appliances, clothing for personal use are exempt.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            Common Zakat Questions Answered
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Clock className="h-5 w-5" />
                When to Pay Zakat
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>After one full lunar year (Hawl) of possessing Nisab</li>
                <li>Many Muslims pay during Ramadan for multiplied reward</li>
                <li>Can be paid in advance if wealth is expected to remain above Nisab</li>
                <li>Set a fixed annual date (e.g., 1st Ramadan) for consistency</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Users className="h-5 w-5" />
                Who Must Pay Zakat
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Every sane, adult Muslim (Hanafi: also on wealth of minors)</li>
                <li>Who possesses wealth above Nisab</li>
                <li>For one full lunar year (Hawl)</li>
                <li>Free from debts that would reduce wealth below Nisab</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "Set a fixed annual Zakat date (many choose 1st Ramadan) and calculate on the same date each year. This prevents confusion about the Hawl (lunar year) and ensures you never accidentally miss your obligation. If you're unsure about an asset, it's better to include it — paying extra Zakat is rewarded, but missing obligatory Zakat is sinful.",

    faqs: [
      {
        question: "What is Zakat and is it mandatory?",
        answer: "Zakat is the third pillar of Islam — an obligatory annual charity of 2.5% on wealth exceeding the Nisab threshold. It is mandatory (fard) for every sane, adult Muslim who possesses wealth above Nisab for one full lunar year. It is not optional like Sadaqah (voluntary charity). Refusing to pay Zakat while meeting the criteria is considered a major sin in Islam."
      },
      {
        question: "How much is Zakat in 2026?",
        answer: "Zakat is always 2.5% (1/40th) of your net zakatable wealth. The amount varies per person based on their assets and debts. The Nisab threshold for 2026 (approximate): Silver standard = ~$673 USD, Gold standard = ~$8,311 USD. If your net zakatable wealth exceeds Nisab, you pay 2.5% of the total net amount, not just the amount above Nisab."
      },
      {
        question: "What is Nisab and which standard should I use?",
        answer: "Nisab is the minimum wealth threshold that makes Zakat obligatory. It equals either 87.48 grams of gold or 612.36 grams of silver. The majority of scholars (especially Hanafi school) recommend the silver standard because it's lower, meaning more people pay Zakat and more poor people benefit. If your wealth exceeds the silver Nisab but not the gold Nisab, most scholars say Zakat is still due."
      },
      {
        question: "Is Zakat due on gold jewelry?",
        answer: "This depends on the school of thought. The Hanafi school says yes — Zakat is due on ALL gold and silver, including jewelry worn regularly. The Shafi'i, Maliki, and Hanbali schools generally exempt jewelry that is worn regularly for personal use (not hoarded or investment). Our calculator includes jewelry to follow the Hanafi ruling, which is the more cautious position. Consult your local scholar for guidance specific to your school."
      },
      {
        question: "Is Zakat due on cryptocurrency?",
        answer: "Yes. Contemporary Islamic scholars and fatwa councils (including AAOIFI and various national fatwa bodies) have ruled that cryptocurrency is zakatable because it has monetary value and can be traded. Zakat is calculated on the market value of your crypto holdings on your Zakat date. Treat it the same as cash or tradeable assets — 2.5% of the value if your total wealth exceeds Nisab."
      },
      {
        question: "Can I pay Zakat during Ramadan?",
        answer: "Yes, and many Muslims prefer to do so because good deeds are multiplied during Ramadan. However, Zakat is technically due on your personal Hawl (lunar year anniversary) from when your wealth first exceeded Nisab. Paying during Ramadan is permissible in all schools of thought — paying it early (before your Hawl) is allowed, but paying it late is not. Many scholars recommend setting 1st Ramadan as your fixed annual Zakat date for simplicity."
      },
      {
        question: "What debts can I deduct from Zakat calculation?",
        answer: "You can deduct debts that are currently due or will become due within the year: personal loans, credit card balances, mortgage installments (current year only, not full mortgage), rent due, and immediate living expenses. The Hanafi school allows deducting all debts from zakatable wealth. Some other schools are more restrictive. Long-term debts (like a 30-year mortgage) are generally only deductible for the current year's installments."
      },
      {
        question: "Is Zakat due on my retirement account (401k, pension)?",
        answer: "It depends on accessibility. If you can access the funds now (even with a penalty), most scholars say Zakat is due on the accessible amount. If the funds are completely locked and inaccessible until retirement age, many scholars say Zakat is not due until you gain access. Some scholars recommend paying Zakat on retirement accounts regardless, to be safe. Enter only the accessible portion in the calculator."
      },
      {
        question: "Who can receive Zakat?",
        answer: "Zakat must be given to one or more of the 8 categories specified in Quran 9:60: (1) Al-Fuqara — the poor; (2) Al-Masakin — the needy; (3) Zakat administrators; (4) Those whose hearts are to be reconciled; (5) Freeing captives; (6) The debt-ridden; (7) In the cause of Allah; (8) The stranded traveller. Zakat cannot be given to: one's parents, children, spouse, non-Muslims (according to majority), or wealthy people."
      },
      {
        question: "Can I give Zakat to family members?",
        answer: "You cannot give Zakat to your parents, grandparents, children, grandchildren, or spouse — because you are already obligated to support them. You CAN give Zakat to other family members who qualify (siblings, uncles, aunts, cousins, in-laws) if they are in one of the 8 eligible categories. In fact, giving Zakat to needy relatives is considered doubly rewarding — it counts as both Zakat and maintaining family ties (silat ar-rahim)."
      },
      {
        question: "Is Zakat due on my personal home?",
        answer: "No. Your primary residence is exempt from Zakat regardless of its value. This also applies to your personal vehicle, furniture, clothing, and household items used for personal living. However, if you own investment/rental properties, the rental income you receive IS zakatable (add it to your cash/savings). The property value itself is not zakatable unless you're actively trading in real estate (then it's business inventory)."
      },
      {
        question: "How is Zakat on stocks calculated?",
        answer: "There are two scholarly opinions: (1) Zakat on the full market value of your portfolio on your Zakat date (simpler, used by most contemporary scholars); (2) Zakat only on the zakatable assets portion of the companies you own shares in (more complex, requires knowing company balance sheets). Our calculator uses method 1 (full market value) as it's simpler and more widely accepted. Both are valid scholarly positions."
      },
      {
        question: "What if I forgot to pay Zakat in previous years?",
        answer: "Zakat is a debt to Allah that does not expire. If you missed paying Zakat in previous years, you must calculate and pay the outstanding amount for each missed year based on your wealth at that time. Estimate as accurately as possible and pay the accumulated Zakat as soon as you can. Sincere repentance (tawbah) is also required for deliberately delaying an obligation."
      },
      {
        question: "Is Zakat the same as Zakat al-Fitr?",
        answer: "No, they are different obligations. Zakat al-Mal (wealth Zakat) is 2.5% of accumulated wealth above Nisab — this is what our calculator computes. Zakat al-Fitr is a separate, smaller charity paid at the end of Ramadan before Eid prayer — it's approximately the cost of one meal per family member (typically $10-$15 per person in the US). Both are obligatory but have different rules, amounts, and timing."
      },
      {
        question: "Can Zakat be given to non-Muslims?",
        answer: "The majority of scholars (Hanafi, Shafi'i, Hanbali) hold that Zakat cannot be given to non-Muslims, as the Quran specifies 8 categories that traditionally apply to Muslims. Some Maliki scholars and contemporary scholars allow giving Zakat to non-Muslims under the category of 'hearts to be reconciled' (Al-Mu'allafatu Qulubuhum). Sadaqah (voluntary charity) can be given to anyone regardless of faith."
      },
      {
        question: "How accurate is this Zakat calculator?",
        answer: "This calculator follows the general fiqh rules agreed upon by the four major Sunni schools of thought. However, specific rulings may differ between schools on certain assets (e.g., jewelry, retirement accounts, agricultural produce). The gold and silver prices used for Nisab should be updated to current market rates for accuracy. For personal situations that involve complex assets or scholarly disagreements, consult a qualified Islamic scholar or your local mosque's Zakat committee."
      }
    ],

    relatedTools: [
      { name: "SaaS Churn Rate Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Zakat Calculator 2026 — Calculate Your Zakat Accurately",
        description: "Calculate Zakat on cash, gold, silver, investments, business assets & crypto. Nisab threshold, 8 recipient categories, multi-currency. Based on Quran & Sunnah.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "green"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/zakat-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ZakatCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Calculate Zakat 2026 free. Accurate Zakat on cash, gold, silver, investments, business & crypto. Nisab threshold (gold & silver), 8 recipient categories. Based on Quran & Sunnah.",
        path: "/finance-tools/zakat-calculator"
      }}
    />
  )
}
