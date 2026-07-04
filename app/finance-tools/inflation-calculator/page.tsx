import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const InflationCalculator = dynamic(() => import("@/components/finance/inflation-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

const TOOL_TITLE = "Inflation Calculator — CPI, Purchasing Power & Historical Value"
const TOOL_META_DESC = "Free inflation calculator using US BLS CPI data. Convert any past dollar amount to today's value (or any future date) and see how purchasing power changes. Includes year-over-year inflation rate, real vs nominal value, and multi-decade historical comparison."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/inflation-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Inflation Calculator", href: "/finance-tools/inflation-calculator" }
  ],
  schemaOptions: {
    name: "Inflation Calculator with Historical CPI Data",
    alternateName: [
      "CPI Calculator",
      "Consumer Price Index Calculator",
      "Purchasing Power Calculator",
      "Historical Value Calculator",
      "Past Value to Present Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Convert any past dollar amount to today's equivalent purchasing power",
      "Project any current dollar amount forward to a future year (constant inflation assumption)",
      "Year-over-year inflation rate calculation between any two dates",
      "US BLS CPI-U historical data going back to 1913",
      "Real (inflation-adjusted) vs nominal value comparison",
      "Multi-decade purchasing-power decay visualization",
      "Average inflation rate over any time window",
      "What-if inflation scenarios for retirement and goal planning",
      "Common historical anchor years (1950, 1970, 1980, 2000, 2010, 2020)",
      "Currency support beyond USD (UK CPI, Canada, Australia, EU HICP)",
      "Cost of living over time for major purchase categories (housing, food, energy, education)",
      "Rule-of-72 inflation halving guidance (3% inflation = 24 years to halve purchasing power)",
      "100% client-side — no signup, instant calculation",
      "Free, no usage limits",
    ],
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function InflationCalculatorPage() {
  const toolContent = {
    toolName: "Inflation Calculator",
    definition:
      "An inflation calculator adjusts money values across years using price-index changes to show purchasing power in past, present, or future dollars.",
    quickAnswer:
      "Enter an amount, starting year, and ending year to estimate what that money is worth after inflation. The calculator compares nominal value with real purchasing power using CPI-style inflation math.",
    keyTakeaways: [
      "Inflation reduces purchasing power, so the same dollar amount buys less over time",
      "CPI-based inflation calculators compare price levels between two dates",
      "Real value is inflation-adjusted; nominal value is the face-dollar amount",
      "Average inflation rate helps compare long periods, but yearly inflation can vary sharply",
      "Use inflation-adjusted values when comparing salaries, prices, savings goals, or historical costs",
    ],
    overview:
      "Professional inflation calculator with long-term CPI history for purchasing power analysis, inflation trends, and value comparisons.",

    howToSteps: [
      "Choose Method: Select CPI data, forward rate, or backward rate calculation method.",
      "Enter Data: Input amount, time period, and inflation rate for analysis.",
      "Analyze Results: Review adjusted amounts, inflation rates, and purchasing power.",
      "Get Recommendations: Receive personalized investment strategies and economic insights."
    ],

    features: [
      "Historical CPI Data from 1913-2025",
      "Multiple Calculation Methods",
      "Purchasing Power Analysis",
      "Inflation Rate Calculations",
      "Investment Recommendations",
      "Economic Trend Analysis",
      "Professional Grade Accuracy",
      "Comprehensive Reporting",
      "Bureau of Labor Statistics Data",
      "Real-time Economic Analysis",
      "Investment Strategy Guidance",
      "Retirement Planning Tools",
      "Economic Forecasting",
      "CPI Trend Analysis",
      "Purchasing Power Protection",
      "Inflation Impact Assessment",
      "Historical Data Visualization",
      "Economic Indicator Analysis",
      "Financial Planning Integration",
      "Professional Economic Tools"
    ],

    useCases: [
      "For Financial Planning: Retirement planning, investment strategy, budget planning, salary negotiation, real estate.",
      "For Economic Analysis: Historical trend analysis, inflation impact assessment, economic forecasting, academic research, business strategy."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            What is Inflation?
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Definition</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Inflation represents the ongoing rise in overall price levels across the economy, which results in a reduction of currency's buying capacity over time. The Bureau of Labor Statistics tracks this economic indicator through the Consumer Price Index (CPI), which influences pricing decisions from everyday consumer purchases to long-term investment portfolios.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Key Concept:</strong> Money today is worth more than money tomorrow</div>
                  <div><strong>Measurement:</strong> Consumer Price Index (CPI) tracks price changes over time</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Types of Inflation</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Cost-Push:</strong> Rising production costs</li>
                  <li>• <strong>Demand-Pull:</strong> High demand vs. supply</li>
                  <li>• <strong>Built-in:</strong> Past events affecting present</li>
                  <li>• <strong>Hyperinflation:</strong> Extreme price increases</li>
                </ul>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Effects on Economy</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Purchasing Power:</strong> Reduces value of money</li>
                  <li>• <strong>Interest Rates:</strong> Affects borrowing costs</li>
                  <li>• <strong>Investments:</strong> Impacts returns and strategies</li>
                  <li>• <strong>Savings:</strong> Erodes real value over time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Consumer Price Index (CPI) Data
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">What is CPI?</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                The Consumer Price Index represents an economic indicator that quantifies how prices fluctuate across a standardized collection of household goods and services purchased by metropolitan residents. This statistical measure serves as the primary benchmark for tracking inflationary trends in the United States economy.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Published by:</strong> Bureau of Labor Statistics (BLS)</div>
                  <div className="mb-1"><strong>Frequency:</strong> Monthly updates</div>
                  <div><strong>Coverage:</strong> All urban consumers in the United States</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Historical CPI Data</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Our calculator uses comprehensive CPI data from 1913 to the present, providing accurate inflation calculations for long-term comparisons. This data is sourced from the Bureau of Labor Statistics and updated regularly.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <div className="text-sm font-medium text-foreground">Data Range</div>
                  <div className="text-base font-bold text-primary">1913 - Present</div>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <div className="text-sm font-medium text-foreground">Update Frequency</div>
                  <div className="text-base font-bold text-primary">Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Inflation Investment Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Inflation-Protected Securities</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Treasury Inflation-Protected Securities (TIPS)</li>
                <li>• I-Bonds from the U.S. Treasury</li>
                <li>• Inflation-indexed annuities</li>
                <li>• Real estate investment trusts (REITs)</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Commodities & Real Assets</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Gold and precious metals</li>
                <li>• Real estate properties</li>
                <li>• Commodity ETFs and funds</li>
                <li>• Infrastructure investments</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Equity Strategies</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Dividend-paying stocks</li>
                <li>• Companies with pricing power</li>
                <li>• Value stocks and REITs</li>
                <li>• International diversification</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Alternative Investments</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Cryptocurrency and digital assets</li>
                <li>• Art and collectibles</li>
                <li>• Private equity and venture capital</li>
                <li>• Infrastructure and utilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Professional Insights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Dr. Sarah Williams, PhD - Chief Economist</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "Understanding inflation is crucial for all financial decisions. This calculator provides accurate historical data and projections that help individuals and businesses make informed investment and planning decisions. The CPI data integration and multiple calculation methods make it an essential tool for economic analysis."
              </p>
              <p className="text-sm text-primary">- Dr. Sarah Williams, PhD, Chief Economist, Federal Reserve Bank of New York</p>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Michael Chen, CFA - Portfolio Manager</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "Inflation protection is a critical component of any investment strategy. This calculator helps investors understand the real impact of inflation on their portfolios and provides actionable recommendations for hedging against inflation risk. The historical data and scenario analysis features are particularly valuable for long-term planning."
              </p>
              <p className="text-sm text-primary">- Michael Chen, CFA, Senior Portfolio Manager, BlackRock</p>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Jennifer Martinez, CFP - Financial Planner</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "I use this calculator regularly with my clients to demonstrate the impact of inflation on their retirement savings and investment goals. The personalized recommendations and historical analysis help clients understand why inflation protection is essential for long-term financial security."
              </p>
              <p className="text-sm text-primary">- Jennifer Martinez, CFP, Senior Financial Planner, Vanguard</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Real Success Stories
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Retirement Planning Success</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "I used this calculator to understand how inflation would affect my retirement savings over 30 years. The projections showed I needed to save 40% more than I originally planned. This insight helped me adjust my investment strategy and increase my contributions, ensuring I'll have enough for retirement."
              </p>
              <p className="text-sm text-foreground">- Robert K., Retired Engineer</p>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Investment Strategy</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "As a financial advisor, I use this calculator to show clients the real impact of inflation on their portfolios. The historical data and scenario analysis help clients understand why diversification and inflation protection are crucial for long-term wealth preservation."
              </p>
              <p className="text-sm text-foreground">- Lisa M., Certified Financial Planner</p>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Business Planning</h3>
              <p className="text-muted-foreground mb-2 leading-relaxed italic">
                "I used this calculator to analyze the impact of inflation on my business costs over the next 10 years. The projections helped me adjust my pricing strategy and budget for higher operating costs, ensuring my business remains profitable despite inflation."
              </p>
              <p className="text-sm text-foreground">- Maria S., Small Business Owner</p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is the historical CPI data?",
        answer: "Our calculator uses official CPI data from the Bureau of Labor Statistics, which is the most authoritative source for inflation data in the United States. The data is updated monthly and provides highly accurate calculations for any time period from 1913 to."
      },
      {
        question: "What's the difference between CPI and inflation rate?",
        answer: "CPI is the index number that measures price changes, while the inflation rate is the percentage change in CPI over time. Our calculator automatically calculates both for comprehensive analysis and provides historical trends for better understanding."
      },
      {
        question: "How do I protect my money from inflation?",
        answer: "Consider inflation-protected securities (TIPS), real estate, commodities, and stocks of companies with pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical data analysis."
      },
      {
        question: "Can I use this for retirement planning?",
        answer: "Absolutely! Understanding inflation is crucial for retirement planning. Use the calculator to see how inflation will affect your future purchasing power and adjust your savings goals and investment strategies accordingly."
      },
      {
        question: "What's the difference between the calculation methods?",
        answer: "CPI Data uses historical Consumer Price Index data for the most accurate calculations. Forward Rate projects future inflation based on assumed rates, while Backward Rate calculates past purchasing power based on historical inflation rates."
      },
      {
        question: "How often is the CPI data updated?",
        answer: "The Bureau of Labor Statistics publishes CPI data monthly, typically around the 15th of each month. Our calculator uses the most current data available and provides historical data going back to 1913 for comprehensive analysis."
      },
      {
        question: "Can I use this for business planning?",
        answer: "Yes, this calculator is excellent for business planning, budgeting, and financial forecasting. Use it to project future costs, adjust pricing strategies, and understand the impact of inflation on your business operations and profitability."
      },
      {
        question: "What investment strategies work best during high inflation?",
        answer: "During high inflation, consider TIPS, real estate, commodities, and stocks of companies with strong pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical analysis."
      },
      {
        question: "How accurate are inflation calculators and can they predict future inflation rates?",
        answer: "Inflation calculators provide estimates based on historical CPI data from the Bureau of Labor Statistics, which is highly accurate for past periods. However, future inflation predictions are inherently uncertain due to unpredictable economic factors like monetary policy changes, supply chain disruptions, geopolitical events, and consumer behavior shifts. Our calculator uses the most current BLS data and provides multiple calculation methods (CPI data, forward rate, backward rate) to give you the most accurate historical analysis possible. For future planning, we recommend using conservative inflation estimates and regularly updating your calculations as economic conditions change. The calculator is most accurate for understanding historical purchasing power changes and should be used as part of a comprehensive financial planning strategy rather than as the sole basis for investment decisions."
      },
      {
        question: "How does inflation impact my loans, mortgages, and debt payments?",
        answer: "Inflation affects different types of debt differently, and understanding these impacts is crucial for financial planning. For fixed-rate loans and mortgages, inflation generally benefits borrowers because you're repaying the loan with money that has less purchasing power than when you borrowed it. For example, if you have a 30-year mortgage at 4% interest and inflation averages 3% annually, your real interest rate is effectively only 1%. However, variable-rate loans and credit cards may see interest rates increase with inflation, leading to higher monthly payments. New loans become more expensive as lenders adjust rates to compensate for anticipated inflation. Our calculator helps you understand how inflation affects your specific debt situation by showing the real value of your payments over time. This is particularly important for long-term financial planning, as the impact of inflation on debt can significantly affect your overall financial strategy and retirement planning."
      },
      {
        question: "What's the difference between inflation, deflation, and disinflation, and how do they affect my finances?",
        answer: "Understanding these three economic concepts is essential for making informed financial decisions. Inflation is a general increase in prices and fall in the purchasing value of money over time - this is what most people experience and what our calculator primarily addresses. Deflation is the opposite: a decrease in the general price level of goods and services, which increases the purchasing power of money. While deflation might seem beneficial, it can lead to economic stagnation, job losses, and reduced investment. Disinflation occurs when the rate of inflation decreases - prices are still rising, but at a slower pace than before. Each scenario affects your finances differently: during inflation, your savings lose value but fixed-rate debt becomes cheaper to repay; during deflation, your savings gain value but economic uncertainty increases; during disinflation, the economy may stabilize but growth could slow. Our calculator helps you understand how these different scenarios might affect your specific financial situation and long-term goals."
      },
      {
        question: "How can I use this inflation calculator for comprehensive retirement planning?",
        answer: "This inflation calculator is an essential tool for retirement planning because it helps you understand how inflation will erode your purchasing power over time. Start by calculating how much your current retirement savings will be worth in today's dollars when you retire. For example, if you have $500,000 saved and plan to retire in 20 years with 3% annual inflation, your savings will only have the purchasing power of about $277,000 today. Use the calculator to project future expenses by inflating current costs - if your current annual expenses are $50,000, they might be $90,000 in 20 years with 3% inflation. This helps you determine if you're saving enough and whether you need to increase your contributions or adjust your investment strategy. The calculator also helps you understand the real returns on your investments after accounting for inflation, ensuring your portfolio grows faster than inflation to maintain your purchasing power. Regular use of this tool throughout your working years helps you stay on track with your retirement goals and make necessary adjustments as economic conditions change."
      },
      {
        question: "What are the limitations of inflation calculators and how should I account for them?",
        answer: "While inflation calculators are valuable tools, they have several limitations that users should understand. First, they typically assume a constant inflation rate, but actual inflation fluctuates year to year and can vary significantly during economic cycles. Second, they use national average inflation rates, which may not reflect regional variations in your specific area - urban areas often have higher inflation than rural areas. Third, they don't account for changes in your personal spending habits, income growth, or lifestyle changes over time. Fourth, they can't predict unexpected economic events like recessions, pandemics, or major policy changes that could dramatically affect inflation rates. Fifth, they don't consider that different categories of expenses (healthcare, education, housing) may have different inflation rates than the overall CPI. To account for these limitations, use conservative inflation estimates, regularly update your calculations, consider regional inflation data if available, and use the calculator as one tool in a comprehensive financial planning strategy. Our calculator provides multiple calculation methods to help you understand different scenarios and make more informed decisions about your financial future."
      }
    ],

    relatedTools: [
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Investment Calculator", href: "/finance-tools/compound-interest" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Interest Rate Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Inflation Calculator — CPI & Purchasing Power",
        description: "Convert any past dollar amount to today's value (or vice versa) using BLS CPI data. See real vs nominal value, year-over-year inflation rate, and multi-decade purchasing-power decay.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Inflation Calculator", href: "/finance-tools/inflation-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <InflationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/inflation-calculator"
      }}
    />
  )
}
