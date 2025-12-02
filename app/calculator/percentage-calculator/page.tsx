import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { PercentageCalculator } from "@/components/percentage-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Percentage Calculator | Free Accurate Math Tool",
  description:
    "Calculate percentages instantly: increase, decrease, discounts, grades and more. Free, accurate percentage calculator with clear step-by-step formulas.",
  path: "/calculator/percentage-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Percentage Calculator", href: "/calculator/percentage-calculator" }
  ],
  schemaOptions: {
    name: "FastTools Percentage Calculator",
    alternateName: "Free Online Percentage Calculator",
    applicationCategory: "UtilitiesApplication",
    ratingValue: "4.8",
    ratingCount: "1250",
    featureList: [
      "Percentage increase calculations",
      "Percentage decrease comparisons",
      "Percentage difference breakdowns",
      "Discount and savings analysis",
      "Grade and GPA conversions",
      "Reverse percentage calculations",
      "Markup and margin tools",
      " Step-by-step formula explanations"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculators",
}

export default function PercentageCalculatorPage() {
  const toolContent = {
    toolName: "Percentage Calculator",
    overview: "Free online percentage calculator for all your math needs. Calculate percentage increase, percentage decrease, percentage difference, discounts, tips, grades, profit margins, and more. Features accurate calculations with step-by-step formulas, perfect for students, professionals, and everyday use.",

    howToSteps: [
      "Choose your calculation type (increase, decrease, difference, discount, etc.)",
      "Enter the relevant numbers or percentage rates in the input fields",
      "Press calculate to see the percentage output",
      "Review the detailed formula and explanation provided",
      "Copy or export the results for documentation"
    ],

    features: [
      "Multiple Calculator Modes: Basic percentage, increase, decrease, difference, discount, markup, margin, and more",
      "Step-by-Step Solutions: Clear formula explanations showing each calculation step",
      "Reverse Calculations: Find the original value when you know the percentage and result",
      "Discount Analysis: Calculate savings, final prices, and percentage off instantly",
      "Grade Calculations: Convert marks to percentages and vice versa",
      "Professional Tools: Profit margins, tax calculations, and financial percentages",
      "No Signup Required: Free unlimited calculations without registration",
      "Privacy-Friendly: All calculations happen in your browser, no data stored"
    ],

    useCases: [
      "Shopping & Discounts: Calculate sale prices and savings percentages",
      "Academic Grading: Convert raw scores to percentages and GPA",
      "Financial Planning: Compute profit margins, interest rates, and investment returns",
      "Business Analysis: Track growth rates, revenue changes, and KPIs",
      "Health & Fitness: Monitor weight loss percentages and goal progress",
      "Taxes & Tips: Calculate tax amounts and gratuity percentages",
      "Data Analysis: Compare values and compute percentage differences"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Percentages</h3>
        <p className="mb-4">
          A percentage is a way of expressing a number as a fraction of 100. The word "percent" literally means "per hundred." Percentages are used everywhere in daily life - from calculating discounts while shopping to understanding exam scores, tracking business growth, and measuring statistical data.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Basic Percentage Formula</h3>
        <p className="mb-3">
          The fundamental percentage formula is:
        </p>
        <p className="mb-4 font-mono bg-muted p-3 rounded text-sm">
          Percentage = (Part / Whole) × 100
        </p>
        <p className="mb-6">
          This formula can be rearranged to solve for different values: <strong>Part = (Percentage × Whole) / 100</strong> or <strong>Whole = (Part / Percentage) × 100</strong>. Our calculator automatically applies the appropriate formula based on which values you provide.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Common Percentage Calculations</h3>
        <div className="space-y-3 mb-6">
          <div>
            <h4 className="font-semibold mb-1">Percentage Increase:</h4>
            <p className="mb-1">Formula: ((New Value - Original Value) / Original Value) × 100</p>
            <p className="text-sm text-muted-foreground">Example: Price increases from $100 to $125 = 25% increase</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Percentage Decrease:</h4>
            <p className="mb-1">Formula: ((Original Value - New Value) / Original Value) × 100</p>
            <p className="text-sm text-muted-foreground">Example: Price drops from $100 to $75 = 25% decrease</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Percentage Difference:</h4>
            <p className="mb-1">Formula: (|Value1 - Value2| / ((Value1 + Value2) / 2)) × 100</p>
            <p className="text-sm text-muted-foreground">Example: Difference between 80 and 100 = 22.22%</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Practical Applications</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Retail & Sales:</strong> Calculate discounts, markups, profit margins, and sales tax</li>
          <li><strong>Education:</strong> Convert test scores, calculate GPAs, and track academic progress</li>
          <li><strong>Finance:</strong> Compute interest rates, investment returns, and loan percentages</li>
          <li><strong>Health:</strong> Track weight changes, body fat percentages, and fitness goals</li>
          <li><strong>Business:</strong> Analyze growth rates, market share, and performance metrics</li>
          <li><strong>Statistics:</strong> Express probabilities, proportions, and survey results</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Tips for Accurate Calculations</h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Always identify which value represents the "whole" (100%) and which is the "part"</li>
          <li>For increase/decrease, the original value is always the reference point</li>
          <li>Percentages can exceed 100% when the part is larger than the whole</li>
          <li>When averaging percentages, consider the weighted average if bases differ</li>
          <li>Round percentage results appropriately for your context (usually 2 decimal places)</li>
        </ul>
      </>
    ),

    proTip: "When calculating percentage changes, always use the original value as the denominator, not the new value. For example, if a price increases from $100 to $150, the increase is 50% (not 33.33%). This is a common mistake that leads to incorrect percentage calculations.",

    faqs: [
      {
        question: "How do I find a percentage on a calculator?",
        answer: "Enter the part value, divide by the whole, and multiply by 100. Our percentage calculator automates this entire workflow and shows each step so you can verify the math. The result shows both the percentage and the underlying calculation for transparency."
      },
      {
        question: "How can I calculate percentage accurately?",
        answer: "Identify the part and the whole, divide the part by the whole, and multiply by 100 for the percent. Our percentage calculator provides step-by-step guidance with color-coded tips to minimize mistakes. You can also use practice questions to reinforce the method."
      },
      {
        question: "What percentage of 120 is 90?",
        answer: "Enter 90 as the part and 120 as the whole. The calculator reports 75% (90 ÷ 120 × 100 = 75%). This type of calculation is useful for test scores, completion rates, and comparing quantities."
      },
      {
        question: "How do I calculate percentage increase?",
        answer: "Subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: ((New - Original) / Original) × 100. For example, if sales grew from $1,000 to $1,200, that's a 20% increase."
      },
      {
        question: "How do I calculate percentage decrease?",
        answer: "Subtract the new value from the original value, divide by the original value, and multiply by 100. Formula: ((Original - New) / Original) × 100. For example, if price dropped from $50 to $40, that's a 20% decrease."
      },
      {
        question: "Can percentages be greater than 100?",
        answer: "Yes, a percentage can exceed 100 when the part is larger than the whole. This is common in growth metrics, revenue surges, or productivity boosts. For example, if revenue doubled, that's a 100% increase; if it tripled, that's a 200% increase."
      },
      {
        question: "How do I calculate discount percentage?",
        answer: "Use the formula: ((Original Price - Sale Price) / Original Price) × 100. For example, if an item originally $100 is now $75, the discount is 25%. Our discount calculator mode handles this automatically and shows the amount saved."
      },
      {
        question: "What is reverse percentage calculation?",
        answer: "Reverse percentage finds the original value when you know the percentage and the result. Formula: Original = Result / (Percentage / 100). For example, if $120 is 80% of the original price, the original was $150 ($120 ÷ 0.8 = $150)."
      },
      {
        question: "How do I convert GPA to percentage?",
        answer: "The conversion depends on your grading scale. Common formula: Percentage = (GPA / Maximum GPA) × 100. For a 4.0 scale, a 3.5 GPA = 87.5%. Our GPA calculator accounts for different grading systems including 10-point and weighted scales."
      },
      {
        question: "Can I add percentages together?",
        answer: "You can only add percentages directly when they relate to the same whole. Otherwise, convert each percentage to its underlying value, sum those values, and convert back to percentage. For example, you can't add 20% of 100 and 30% of 200 directly without considering the different bases."
      },
      {
        question: "How do I calculate profit percentage?",
        answer: "Profit Percentage = ((Selling Price - Cost Price) / Cost Price) × 100. For example, if you buy for $80 and sell for $100, profit percentage is 25%. This differs from profit margin, which uses selling price as the denominator."
      },
      {
        question: "What's the difference between percentage change and percentage difference?",
        answer: "Percentage change compares a new value to an original value (has direction: increase or decrease). Percentage difference compares two values without a reference point (always positive). Change = ((New - Old) / Old) × 100. Difference = (|A - B| / Average) × 100."
      },
      {
        question: "How do I calculate percentage in Excel?",
        answer: "Use the formula: =(Part/Whole)*100 or format cells as percentage and use =Part/Whole. For increase: =(New-Old)/Old. For decrease: =(Old-New)/Old. Our calculator provides Excel-ready formulas you can copy directly into spreadsheets."
      },
      {
        question: "Why are percentages expressed out of 100?",
        answer: "Percent means 'per hundred,' reflecting the historical practice of dividing quantities into 100 equal parts for easier comparison. This standardization makes it simple to compare different ratios and proportions across various contexts, from test scores to financial data."
      },
      {
        question: "How do I calculate sales tax percentage?",
        answer: "If you know the pre-tax and total amounts: Tax % = ((Total - Pre-tax) / Pre-tax) × 100. If you know the tax rate: Tax Amount = Price × (Tax Rate / 100). For example, 8% tax on $100 = $8, making the total $108."
      },
      {
        question: "What is percentage calculator used for?",
        answer: "Percentage calculators are used for shopping discounts, academic grading, business analytics, financial planning, health tracking, tax calculations, tip computation, data analysis, and any scenario requiring part-to-whole comparisons. They save time, prevent calculation errors, and provide consistent documentation."
      },
      {
        question: "How do I calculate percentage of marks?",
        answer: "Use: (Obtained Marks / Total Marks) × 100. For example, scoring 450 out of 500 = 90%. For multiple subjects, add all obtained marks and divide by total possible marks. Our marks calculator supports weighted subjects and board-specific grading schemes."
      },
      {
        question: "Is this percentage calculator accurate?",
        answer: "Yes, our calculator uses precise arithmetic and time-tested formulas. Every calculation lists the steps taken, shows the original numbers, and provides references to educational resources. Regular testing and user feedback ensure accuracy for personal decisions, professional reports, and academic submissions."
      }
    ],

    relatedTools: [
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "GPA Calculator", href: "/calculator/gpa-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Online Percentage Calculator",
        description: "Calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins, and more. Accurate and quick online tool with step-by-step formulas.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Percentage Calculator", href: "/calculator/percentage-calculator" }
      ]}
      toolComponent={
        <div className="space-y-4">
          <div className="border border-border rounded-xl bg-card/70 p-4 md:p-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between shadow-sm">
            <div className="trust-signals space-y-2 text-xs md:text-sm text-muted-foreground">
              <p>✓ Used by 50,000+ students and professionals</p>
              <p>✓ Last updated: November 2025</p>
              <p>✓ Verified calculations</p>
              <p>✓ Privacy-friendly (no data stored)</p>
            </div>
          </div>
          <PercentageCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Percentage Calculator | Free Accurate Math Tool",
        description: "Calculate percentages instantly: increase, decrease, discounts, grades and more. Free, accurate percentage calculator with clear step-by-step formulas.",
        path: "/calculator/percentage-calculator"
      }}
    />
  )
}