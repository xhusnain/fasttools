import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const PercentageCalculator = dynamic(() => import("@/components/calculators/percentage-calculator").then(mod => mod.PercentageCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Calculator, Target, BookOpen, Shield, Users, TrendingUp, Info, AlertTriangle, CheckCircle, Zap, Percent, DollarSign } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Percentage Calculator — Increase, Decrease, Discount, Markup & More",
  description:
    "Free percentage calculator with dividing by percentages calculator, percentage increase, decrease, difference, discounts, tips, grades, profit margins & markup. Step-by-step formulas, reverse percentage, fraction-to-percent conversion. Instant, accurate, no signup.",
  path: "/calculator/percentage-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Percentage Calculator", href: "/calculator/percentage-calculator" }
  ],
  schemaOptions: {
    name: "FastTools Percentage Calculator",
    alternateName: [
      "% Calculator",
      "Percent Calculator",
      "Percentage Increase Calculator",
      "Percentage Decrease Calculator",
      "Percent Change Calculator",
      "Discount Calculator",
      "Markup Calculator",
      "Sale Price Calculator",
      "Tip Calculator",
      "Grade Percentage Calculator",
      "Percentage Difference Calculator",
      "Reverse Percentage Calculator",
      "Fraction to Percent Converter",
      "Percent of a Number",
      "Profit Margin Percent",
    ],
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
    toolName: "Percentage Calculator — Dividing by Percentages, Increase, Decrease & More",
    overview: "Free online percentage calculator with 10+ calculation modes including a dividing by percentages calculator, percentage increase, percentage decrease, percentage difference, discount savings, tip calculation, grade-to-percentage conversion, profit margin, markup, reverse percentage, and percentage error. Need a dividing by percentages calculator? Enter your values and get step-by-step formula explanations. Supports fraction-to-percent conversion, decimal-to-percent conversion, and percentage-of-total calculations. Perfect for students solving homework, shoppers calculating sale prices, business owners analyzing profit margins, and professionals tracking KPI growth rates.",

    howToSteps: [
      "Choose Calculation Mode: Select from increase, decrease, difference, discount, markup, margin, tip, grade, reverse percentage, or basic percentage.",
      "Enter Your Values: Input the relevant numbers (original value, new value, percentage rate) in the clearly labeled input fields.",
      "Calculate Instantly: Press calculate to see the percentage result with step-by-step formula breakdown showing each arithmetic operation.",
      "Review Formula Explanation: Verify the calculation method used and understand the underlying formula for learning purposes.",
      "Copy or Export Results: Copy results for documentation, reports, spreadsheets, or further analysis."
    ],

    features: [
      "10+ Calculator Modes: Basic percentage, increase, decrease, difference, discount, markup, margin, tip, grade, reverse percentage, and percentage error.",
      "Step-by-Step Formula Solutions: Color-coded formula explanations showing each calculation step for learning and verification.",
      "Reverse Percentage Calculation: Find the original value when you know the percentage and result (e.g., pre-discount price from sale price).",
      "Discount & Savings Analysis: Calculate sale prices, savings amounts, and percentage off for shopping and retail decisions.",
      "Grade-to-Percentage Conversion: Convert test marks, assignment scores, and GPA to percentages and vice versa.",
      "Business Financial Tools: Profit margin, markup percentage, growth rate, and tax calculations for professional use.",
      "No Signup Required: Free unlimited percentage calculations without registration, accounts, or fees.",
      "Client-Side Privacy: All calculations happen in your browser using JavaScript — no data stored, tracked, or transmitted."
    ],

    useCases: [
      "Shopping & Discounts: Calculate sale prices, savings amounts, and 'percentage off' for Black Friday, Prime Day, and clearance deals.",
      "Academic Grading: Convert raw test scores to percentages, calculate GPA from marks, and track semester grade progress.",
      "Financial Planning: Compute profit margins, interest rates, investment returns, and loan APR percentage calculations.",
      "Business Growth Analysis: Track revenue growth rates, year-over-year KPI changes, market share percentages, and conversion rates.",
      "Health & Fitness: Monitor body weight loss percentage, body fat reduction progress, and fitness goal completion rates.",
      "Tax & Tip Calculation: Calculate sales tax amounts, income tax brackets, and restaurant gratuity (15%, 18%, 20% tips).",
      "Data & Statistical Analysis: Compare values, compute percentage differences, calculate percentage error, and weighted averages."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            What is a Percentage? Understanding Percentage Calculations
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A percentage is a dimensionless number representing a fraction of 100. It is calculated by dividing the part by the whole and multiplying by 100. Percentages allow for standardized comparison between quantities of different sizes, making them essential for shopping discounts, academic grading, financial planning, business analytics, and everyday calculations.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our percentage calculator helps you calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins, and more with accurate calculations and step-by-step formulas. Whether you're shopping for deals, calculating test scores, analyzing business growth, or planning finances, our calculator provides instant, accurate results perfect for students, professionals, and everyday use.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Basic Percentage Formula: How Percentages Work
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding the basic percentage formula is fundamental to all percentage calculations:
          </p>
          <p className="font-mono bg-muted p-3 rounded text-sm">
            Percentage = (Part / Whole) × 100
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This formula can be rearranged to solve for different values: <strong>Part = (Percentage × Whole) / 100</strong> or <strong>Whole = (Part / Percentage) × 100</strong>. Our calculator automatically applies the appropriate formula based on which values you provide, making percentage calculations instant and accurate.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Common Percentage Calculations: Formulas and Examples
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding common percentage calculations helps you use percentages effectively:
          </p>
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Practical Applications: Where Percentages Are Used
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Percentages have countless practical applications in everyday life and professional contexts:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Retail & Sales:</strong> Calculate discounts, markups, profit margins, and sales tax</li>
            <li><strong>Education:</strong> Convert test scores, calculate GPAs, and track academic progress</li>
            <li><strong>Finance:</strong> Compute interest rates, investment returns, and loan percentages</li>
            <li><strong>Health:</strong> Track weight changes, body fat percentages, and fitness goals</li>
            <li><strong>Business:</strong> Analyze growth rates, market share, and performance metrics</li>
            <li><strong>Statistics:</strong> Express probabilities, proportions, and survey results</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Mental Math Shortcuts: Quick Percentage Calculations
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Master these quick tricks to calculate percentages without a calculator:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">To find 10%:</span>
              <span className="text-sm">Move the decimal point one place to the left. (e.g., 10% of 250 = 25)</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">To find 1%:</span>
              <span className="text-sm">Move the decimal point two places to the left. (e.g., 1% of 250 = 2.5)</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">To find 20%:</span>
              <span className="text-sm">Find 10%, then double it. (e.g., 10% of 50 is 5, so 20% is 10)</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">To find 5%:</span>
              <span className="text-sm">Find 10%, then cut it in half. (e.g., 10% of 80 is 8, so 5% is 4)</span>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Tips for Accurate Calculations: Common Mistakes to Avoid
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding common mistakes helps you calculate percentages accurately:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Always identify which value represents the "whole" (100%) and which is the "part"</li>
            <li>For increase/decrease, the original value is always the reference point</li>
            <li>Percentages can exceed 100% when the part is larger than the whole</li>
            <li>When averaging percentages, consider the weighted average if bases differ</li>
            <li>Round percentage results appropriately for your context (usually 2 decimal places)</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Percent className="h-6 w-6 text-primary" />
            Quick Conversion Reference: Fraction, Decimal, Percentage Chart
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quick reference for common fraction, decimal, and percentage conversions:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3">Fraction</th>
                  <th className="p-3">Decimal</th>
                  <th className="p-3">Percentage</th>
                  <th className="p-3">Common Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3">1/2</td>
                  <td className="p-3">0.5</td>
                  <td className="p-3 font-bold text-green-600">50%</td>
                  <td className="p-3">"Half off"</td>
                </tr>
                <tr>
                  <td className="p-3">1/3</td>
                  <td className="p-3">0.333...</td>
                  <td className="p-3 font-bold text-green-600">33.33%</td>
                  <td className="p-3">"One third"</td>
                </tr>
                <tr>
                  <td className="p-3">1/4</td>
                  <td className="p-3">0.25</td>
                  <td className="p-3 font-bold text-green-600">25%</td>
                  <td className="p-3">"Quarter"</td>
                </tr>
                <tr>
                  <td className="p-3">1/5</td>
                  <td className="p-3">0.2</td>
                  <td className="p-3 font-bold text-green-600">20%</td>
                  <td className="p-3">"One fifth"</td>
                </tr>
                <tr>
                  <td className="p-3">1/10</td>
                  <td className="p-3">0.1</td>
                  <td className="p-3 font-bold text-green-600">10%</td>
                  <td className="p-3">Decile / Tithe</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: Percentage vs. Percentage Points
          </h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg">
            <p className="italic text-blue-700 dark:text-blue-300 leading-relaxed">
              "Don't confuse 'percent' with 'percentage points'. If a rate rises from 10% to 15%, that is a 5 percentage point increase, but a 50% relative increase. In finance and statistics, this distinction is critical for accurate reporting. Percentage points measure the absolute change, while percentage measures the relative change."
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Math Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How to Use the Percentage Calculator: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to calculate percentages accurately:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Choose Calculation Type</h4>
                <p className="text-sm text-muted-foreground">Select your calculation type (increase, decrease, difference, discount, markup, margin, etc.) based on what you need to calculate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Values</h4>
                <p className="text-sm text-muted-foreground">Enter the relevant numbers or percentage rates in the input fields. The calculator automatically applies the correct formula based on your inputs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Calculate Results</h4>
                <p className="text-sm text-muted-foreground">Press calculate to see the percentage output instantly. The calculator shows both the result and step-by-step formula explanations for transparency and learning.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Review and Use</h4>
                <p className="text-sm text-muted-foreground">Review the detailed formula and explanation provided. Copy or export the results for documentation, reports, or further analysis.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Calculation Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our percentage calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All percentage calculations happen directly in your browser using JavaScript. Your numbers, percentages, and calculation results never leave your device or get transmitted to our servers. No data is sent over the internet during calculations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage or Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your calculation data. There's no database of your percentage calculations, no analytics on your usage, and no way for us to access your calculations or results. Your privacy is completely protected while using our tool.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Safe for Financial Use</h4>
                <p className="text-sm text-muted-foreground">You can use the calculator with confidence for financial planning, business calculations, academic work, and personal use. All calculations happen locally, ensuring your financial data and calculations remain private and secure.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: "The #1 percentage mistake: using the wrong base. For percentage change, always divide by the ORIGINAL value. Price goes from $100 to $150? The increase is ($150-$100)/$100 = 50%, not ($150-$100)/$150 = 33.33%. Also remember: percentage points and percentage are different — a rate rising from 10% to 15% is a 5 percentage point increase but a 50% relative increase.",

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
        question: "How do I calculate a 20% tip?",
        answer: "To calculate a 20% tip, move the decimal point of the bill amount one place to the left (to find 10%) and multiply by 2. For example, on a $50 bill: $5.0 is 10%, so $10.0 is 20%. Alternatively, multiply the bill amount by 0.20."
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
      },
      {
        question: "How do I calculate percentage of a number?",
        answer: "To calculate percentage of a number, multiply the number by the percentage and divide by 100. Formula: (Number × Percentage) / 100. For example, 20% of 150 = (150 × 20) / 100 = 30. Our calculator automates this calculation—enter the number and percentage to get instant results."
      },
      {
        question: "How to calculate percentage increase between two numbers?",
        answer: "To calculate percentage increase between two numbers, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: ((New - Original) / Original) × 100. For example, increasing from $100 to $125 = ((125 - 100) / 100) × 100 = 25% increase. Our calculator handles this automatically."
      },
      {
        question: "How to calculate percentage decrease between two numbers?",
        answer: "To calculate percentage decrease between two numbers, subtract the new value from the original value, divide by the original value, and multiply by 100. Formula: ((Original - New) / Original) × 100. For example, decreasing from $100 to $75 = ((100 - 75) / 100) × 100 = 25% decrease. Our calculator provides instant results with step-by-step formulas."
      },
      {
        question: "What percentage is one number of another?",
        answer: "To find what percentage one number is of another, divide the first number by the second number and multiply by 100. Formula: (Part / Whole) × 100. For example, 25 is what percentage of 100? (25 / 100) × 100 = 25%. Our calculator makes this calculation instant—just enter both numbers to get the percentage."
      },
      {
        question: "How to calculate percentage difference?",
        answer: "To calculate percentage difference between two numbers, subtract the smaller from the larger, divide by the average of the two numbers, and multiply by 100. Formula: (|Value1 - Value2| / ((Value1 + Value2) / 2)) × 100. For example, difference between 80 and 100 = (20 / 90) × 100 = 22.22%. Our calculator handles this automatically."
      },
      {
        question: "How to calculate 20 percent of a number?",
        answer: "To calculate 20% of a number, multiply the number by 0.20 or divide by 5. For example, 20% of 150 = 150 × 0.20 = 30, or 150 ÷ 5 = 30. Quick mental math: 20% = 1/5, so divide by 5. Our calculator makes this instant—enter the number and percentage to get results."
      },
      {
        question: "How to calculate 10 percent of a number?",
        answer: "To calculate 10% of a number, multiply the number by 0.10 or move the decimal point one place to the left. For example, 10% of 250 = 250 × 0.10 = 25, or move decimal: 250.0 → 25.0 = 25. Quick mental math: 10% = 1/10, so divide by 10. Our calculator provides instant results with step-by-step explanations."
      },
      {
        question: "How to calculate 25 percent of a number?",
        answer: "To calculate 25% of a number, multiply the number by 0.25 or divide by 4. For example, 25% of 200 = 200 × 0.25 = 50, or 200 ÷ 4 = 50. Quick mental math: 25% = 1/4, so divide by 4. Our calculator handles this calculation instantly—enter the number and percentage to get results."
      },
      {
        question: "How to calculate 30 percent of a number?",
        answer: "To calculate 30% of a number, multiply the number by 0.30 or find 10% and multiply by 3. For example, 30% of 100 = 100 × 0.30 = 30, or 10% of 100 is 10, so 30% is 30. Our calculator makes this calculation instant—enter the number and percentage to get accurate results."
      },
      {
        question: "How to calculate 50 percent of a number?",
        answer: "To calculate 50% of a number, multiply the number by 0.50 or divide by 2. For example, 50% of 80 = 80 × 0.50 = 40, or 80 ÷ 2 = 40. Quick mental math: 50% = 1/2, so divide by 2. Our calculator provides instant results with clear step-by-step formulas."
      },
      {
        question: "How to calculate percentage from fraction?",
        answer: "To calculate percentage from fraction, divide the numerator by the denominator and multiply by 100. For example, 3/4 = 3 ÷ 4 = 0.75 = 75%. Our calculator accepts fractions and automatically converts them to percentages—just enter the fraction to get instant percentage results."
      },
      {
        question: "How to calculate percentage from decimal?",
        answer: "To calculate percentage from decimal, multiply the decimal by 100. For example, 0.75 = 0.75 × 100 = 75%. Our calculator automatically converts decimals to percentages—enter the decimal value to get instant percentage results with step-by-step explanations."
      },
      {
        question: "How to calculate percentage of total?",
        answer: "To calculate percentage of total, divide the part by the total and multiply by 100. Formula: (Part / Total) × 100. For example, if you scored 450 out of 500 total marks, percentage = (450 / 500) × 100 = 90%. Our calculator handles this calculation automatically—enter the part and total to get results."
      },
      {
        question: "How to calculate original price from discounted price?",
        answer: "To calculate original price from discounted price, divide the discounted price by (1 - discount percentage/100). Formula: Original = Discounted Price / (1 - Discount % / 100). For example, if $75 is 25% off, original = 75 / (1 - 0.25) = 75 / 0.75 = $100. Our calculator performs reverse percentage calculations automatically."
      },
      {
        question: "How to calculate percentage markup?",
        answer: "To calculate percentage markup, subtract the cost price from the selling price, divide by the cost price, and multiply by 100. Formula: ((Selling Price - Cost Price) / Cost Price) × 100. For example, if cost is $80 and selling price is $100, markup = ((100 - 80) / 80) × 100 = 25%. Our calculator handles markup calculations instantly."
      },
      {
        question: "How to calculate percentage profit margin?",
        answer: "To calculate percentage profit margin, subtract the cost from the selling price, divide by the selling price, and multiply by 100. Formula: ((Selling Price - Cost) / Selling Price) × 100. For example, if cost is $80 and selling price is $100, margin = ((100 - 80) / 100) × 100 = 20%. Our calculator provides profit margin calculations with detailed formulas."
      },
      {
        question: "How to calculate percentage growth rate?",
        answer: "To calculate percentage growth rate, subtract the initial value from the final value, divide by the initial value, and multiply by 100. Formula: ((Final - Initial) / Initial) × 100. For example, if revenue grew from $1,000 to $1,500, growth rate = ((1,500 - 1,000) / 1,000) × 100 = 50%. Our calculator handles growth rate calculations automatically."
      },
      {
        question: "How to calculate percentage error?",
        answer: "To calculate percentage error, subtract the experimental value from the accepted value, divide by the accepted value, take absolute value, and multiply by 100. Formula: |(Experimental - Accepted) / Accepted| × 100. For example, if accepted is 100 and experimental is 95, error = |(95 - 100) / 100| × 100 = 5%. Our calculator provides percentage error calculations."
      },
      {
        question: "How to calculate percentage of completion?",
        answer: "To calculate percentage of completion, divide the completed amount by the total amount and multiply by 100. Formula: (Completed / Total) × 100. For example, if you completed 75 tasks out of 100 total, completion = (75 / 100) × 100 = 75%. Our calculator handles completion percentage calculations instantly."
      },
      {
        question: "How to calculate percentage change in Excel?",
        answer: "In Excel, use the formula: =((New Value - Old Value) / Old Value) * 100 for percentage change. For percentage increase: =((B1-A1)/A1)*100. Our calculator provides Excel-ready formulas you can copy directly into spreadsheets, making it easy to integrate percentage calculations into your Excel workbooks."
      },
      {
        question: "How to calculate weighted average percentage?",
        answer: "To calculate weighted average percentage, multiply each percentage by its weight, sum the weighted values, and divide by the sum of weights. Formula: Σ(Percentage × Weight) / Σ(Weights). For example, if 80% (weight 3) and 90% (weight 2), weighted average = ((80×3) + (90×2)) / (3+2) = 84%. Our calculator handles weighted percentage calculations."
      },
      {
        question: "How to calculate percentage of body weight lost?",
        answer: "To calculate percentage of body weight lost, subtract your current weight from your starting weight, divide by your starting weight, and multiply by 100. Formula: ((Starting Weight - Current Weight) / Starting Weight) × 100. For example, losing 20 pounds from 200 pounds = (20 / 200) × 100 = 10% weight loss. Our calculator helps track weight loss progress."
      },
      {
        question: "Is percentage calculator free to use?",
        answer: "Yes, our percentage calculator is completely free with no charges, subscriptions, or registration required. You can calculate unlimited percentages, access all features (increase, decrease, discounts, tips, grades, profit margins), and use the tool for personal, educational, commercial, or professional purposes without any cost. All features are available without limitations."
      },
      {
        question: "Can I use percentage calculator on mobile devices?",
        answer: "Yes! Our percentage calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. The calculator is optimized for touch screens, making it easy to enter numbers and percentages on the go. You can use it for shopping discounts, calculating tips, academic work, or business calculations, wherever you are."
      },
      {
        question: "How accurate is percentage calculator?",
        answer: "Our percentage calculator is highly accurate, using precise arithmetic and time-tested formulas validated by mathematical standards. Every calculation shows step-by-step formulas for transparency, and results are accurate to multiple decimal places. The calculator is suitable for personal decisions, professional reports, academic submissions, and financial calculations."
      },
      {
        question: "How to calculate percentage increase in salary?",
        answer: "To calculate percentage increase in salary, subtract the old salary from the new salary, divide by the old salary, and multiply by 100. Formula: ((New Salary - Old Salary) / Old Salary) × 100. For example, if salary increased from $50,000 to $60,000, increase = ((60,000 - 50,000) / 50,000) × 100 = 20%. Our calculator handles salary increase calculations instantly."
      },
      {
        question: "How to calculate percentage decrease in price?",
        answer: "To calculate percentage decrease in price, subtract the new price from the original price, divide by the original price, and multiply by 100. Formula: ((Original Price - New Price) / Original Price) × 100. For example, if price dropped from $100 to $75, decrease = ((100 - 75) / 100) × 100 = 25%. Our calculator provides instant results with detailed formulas."
      },
      {
        question: "How to calculate percentage of marks obtained?",
        answer: "To calculate percentage of marks obtained, divide your obtained marks by total marks and multiply by 100. Formula: (Obtained Marks / Total Marks) × 100. For example, scoring 450 out of 500 = (450 / 500) × 100 = 90%. Our calculator handles marks percentage calculations, supporting multiple subjects and weighted grading schemes."
      },
      {
        question: "How to calculate percentage off sale price?",
        answer: "To calculate percentage off sale price, subtract the sale price from the original price, divide by the original price, and multiply by 100. Formula: ((Original - Sale) / Original) × 100. For example, if original is $100 and sale is $75, discount = ((100 - 75) / 100) × 100 = 25% off. Our calculator also shows savings amount and final price."
      },
      {
        question: "What is the best percentage calculator?",
        answer: "The best percentage calculator is free, accurate, easy to use, shows step-by-step formulas, supports multiple calculation types (increase, decrease, discounts, tips, grades), works on all devices, processes data locally for privacy, and provides instant results. Our calculator meets all these criteria—it's completely free, accurate, user-friendly, and privacy-focused, making it perfect for students, professionals, and everyday use."
      }
    ],

    relatedTools: [
      { name: "Fraction Calculator", href: "/calculator/fraction-calculator" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Discount Calculator (% off)", href: "/finance-tools/discount-calculator" },
      { name: "Tip Calculator (% tip)", href: "/finance-tools/tip-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "GPA Calculator", href: "/calculator/gpa-calculator" },
      { name: "Standard Deviation Calculator", href: "/calculator/standard-deviation-calculator" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Percentage Calculator — Increase, Decrease, Difference & Discount",
        description: "Calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins, markup, and reverse percentages. Step-by-step formula explanations, fraction and decimal conversion. Free, instant, and accurate.",
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
              <p>✓ Regularly updated with latest features</p>
              <p>✓ Verified calculations</p>
              <p>✓ Privacy-friendly (no data stored)</p>
            </div>
          </div>
          <PercentageCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Percentage Calculator — Calculate Percentage Increase, Decrease & Difference Free",
        description: "Free percentage calculator for increase, decrease, difference, discounts, tips, grades, profit margins & markup. Step-by-step formulas, reverse percentage, fraction-to-percent conversion. Instant, accurate, no signup.",
        path: "/calculator/percentage-calculator"
      }}
    />
  )
}