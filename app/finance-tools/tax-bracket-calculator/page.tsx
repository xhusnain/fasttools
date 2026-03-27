import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TaxBracketCalculator = dynamic(
  () => import("@/components/finance/tax-bracket-calculator").then((mod) => mod.TaxBracketCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Tax Bracket Calculator",
  description:
    "Calculate your 2025-2026 US federal income tax by bracket. See marginal vs. effective rates, tax owed, and bracket-by-bracket breakdown.",
  metaTitle: "Tax Bracket Calculator 2025-2026 | Federal Rates Free",
  metaDescription:
    "Calculate your 2025-2026 federal income tax by bracket. See marginal vs. effective rates, tax owed, and bracket breakdown for Single, MFJ, MFS, and HOH filers.",
  path: "/finance-tools/tax-bracket-calculator",

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "Free US federal tax bracket calculator for 2025 and 2026. Calculates total tax, effective rate, marginal rate, and bracket-by-bracket breakdown for all filing statuses.",
    featureList: [
      "2025 and 2026 US federal tax brackets",
      "All 4 filing statuses: Single, MFJ, MFS, Head of Household",
      "Marginal vs. effective tax rate calculation",
      "Bracket-by-bracket tax breakdown",
      "Standard deduction auto-applied (toggle off for itemized)",
      "Visual tax distribution bar chart",
      "After-tax income calculation",
      "Income breakdown: gross, deduction, taxable",
    ],
  },

  header: {
    title: "Tax Bracket Calculator (2025–2026)",
    description:
      "Calculate your US federal income tax by bracket. See marginal vs. effective rates, total tax owed, and visual bracket breakdown.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Tax Bracket Calculator", href: "/finance-tools/tax-bracket-calculator" },
  ],

  content: {
    definition:
      "A Tax Bracket Calculator determines how much US federal income tax you owe by applying the 7 progressive tax rates (10% to 37%) to your taxable income after deductions, showing both the marginal rate on your last dollar earned and the effective rate across all income.",

    quickAnswer:
      "Enter your annual gross income, select your filing status (Single, Married Filing Jointly, MFS, or Head of Household), and choose the tax year (2025 or 2026). The calculator applies the standard deduction, then shows your total tax, effective rate, marginal rate, after-tax income, and a bracket-by-bracket breakdown.",

    keyTakeaways: [
      "The US has 7 federal tax brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%",
      "Your marginal rate is the tax on your last dollar; your effective rate is total tax / total income",
      "The standard deduction for 2025 is $15,750 (Single) and $31,500 (MFJ)",
      "Tax brackets are progressive: only income within each range is taxed at that rate",
      "Filing status significantly affects bracket thresholds — MFJ brackets are roughly double Single",
    ],

    overview:
      "This calculator applies the US federal tax brackets for 2025 and 2026 to your income. Enter your gross income, filing status, and deduction preference to see a complete tax breakdown. The tool shows total federal tax owed, your effective and marginal tax rates, after-tax income, and a visual bracket-by-bracket breakdown showing exactly how much is taxed at each rate.",

    howToSteps: [
      "Enter your annual gross income (before any deductions).",
      "Select your filing status: Single, Married Filing Jointly, Married Filing Separately, or Head of Household.",
      "Choose the tax year (2025 or 2026). Standard deduction is applied automatically — toggle off to enter itemized deductions.",
      "View your total tax, effective rate, marginal rate, after-tax income, and bracket breakdown.",
    ],

    features: [
      "2025 and 2026 US federal tax brackets with inflation-adjusted thresholds",
      "All 4 filing statuses supported",
      "Marginal vs. effective tax rate comparison",
      "Bracket-by-bracket breakdown showing taxable income and tax at each rate",
      "Standard deduction auto-applied with toggle for itemized deductions",
      "Visual color-coded bar chart of tax distribution",
      "After-tax income calculation",
      "Income summary: gross income, deduction, taxable income",
    ],

    useCases: [
      "Estimate your federal tax bill before filing",
      "Compare tax liability across different filing statuses",
      "Understand how a raise or bonus changes your marginal rate",
      "Plan year-end tax strategies (Roth conversions, charitable giving)",
      "Compare 2025 vs. 2026 tax brackets to plan income timing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Progressive Tax Brackets Work</h3>
          <p>
            The US uses a progressive tax system: your income is divided into ranges (brackets), and each
            range is taxed at a different rate. You don&apos;t pay your top rate on all income — only on
            the portion that falls within that bracket. For example, a Single filer earning $100,000 in
            2025 pays 10% on the first $11,925, 12% on $11,925–$48,475, and 22% on $48,475–$100,000
            (after the standard deduction).
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Marginal vs. Effective Rate</h3>
          <p>
            Your <strong>marginal rate</strong> is the percentage applied to your last dollar of taxable
            income — it determines the tax impact of additional earnings. Your <strong>effective rate</strong>{" "}
            is your total tax divided by total income, reflecting the average rate across all brackets.
            The effective rate is always lower than the marginal rate because of the progressive structure.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Your marginal rate tells you the tax cost of earning one more dollar. Use it to evaluate whether overtime, bonuses, or Roth IRA conversions make sense. Remember: moving into a higher bracket only affects the income within that bracket, not all of your income.",

    faqs: [
      {
        question: "What is the difference between marginal and effective tax rate?",
        answer: "Your marginal rate is the percentage on your last dollar of income. Your effective rate is total tax divided by total income — it's always lower because earlier dollars are taxed at lower rates.",
      },
      {
        question: "Which filing status should I choose?",
        answer: "Single if unmarried. Married Filing Jointly if married (usually lowest combined tax). Married Filing Separately if married but filing alone. Head of Household if unmarried and paying more than half the cost of maintaining a home for a qualifying dependent.",
      },
      {
        question: "Are the 2026 tax brackets different from 2025?",
        answer: "The same seven rates (10%–37%) apply, but income thresholds are adjusted upward for inflation. Standard deductions also increase slightly.",
      },
      {
        question: "Does this include state taxes?",
        answer: "No, this calculates federal income tax only. State tax rates vary significantly by state.",
      },
      {
        question: "Is the standard deduction automatically applied?",
        answer: "Yes, the calculator applies the standard deduction by default. Toggle it off to enter itemized deductions instead.",
      },
    ],

    relatedTools: [
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Quarterly Tax Estimator", href: "/finance-tools/quarterly-tax-estimator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TaxBracketCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TaxBracketCalculator />)} />
}
