import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const DiscountCalculator = dynamic(() => import("@/components/finance/discount-calculator").then(mod => mod.DiscountCalculator), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Percent, DollarSign, ShoppingCart, Tag, TrendingDown, Target, Zap, Shield, Globe, Clock, FileText, Palette, BarChart3, Smartphone, Settings, Eye, Code, Copy, ExternalLink, Users, Lightbulb, Search, CheckCircle, XCircle, Video, AlertCircle, Hash, ArrowRight, CreditCard, Banknote, Coins, TrendingUp, Receipt, Wallet, PiggyBank, ArrowUp, ArrowDown, Minus, Plus, Equal, HashIcon, HelpCircle, BookOpen, Star, Heart, Gift, PieChart, Award } from "lucide-react"
import type { Metadata } from "next"
import { getCurrentYear } from "@/lib/utils"

const TOOL_TITLE = "Discount Calculator - Calculate Savings Free"
const TOOL_NAME = "Discount Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Free discount calculator to find final price after discount. Calculate savings, sale price or original price easily. Works with any currency & tax.",
  path: "/finance-tools/discount-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/discount-calculator" }
  ],
  schemaOptions: {
    name: "Discount Calculator",
    alternateName: "Sale Price Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Percentage discount calculator",
      "Fixed discount calculator",
      "Stacked discounts calculator",
      "Multiple discounts calculator",
      "Tax inclusive/exclusive discounts",
      "Sale price calculator",
      "Savings calculator",
      "Price comparison calculator",
      "Black Friday discount calculator",
      "Cyber Monday discount calculator",
      "Holiday sale calculator",
      "Clearance discount calculator",
      "Coupon discount calculator",
      "Promo code calculator",
      "BOGO calculator",
      "Student discount calculator",
      "Employee discount calculator",
      "Wholesale discount calculator",
      "Reverse discount calculator",
      "Original price calculator"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "discount calculator",
    `discount calculator`,
    "free discount calculator",
    "sale price calculator",
    "percentage discount calculator",
    "fixed discount calculator",
    "discount calculator online",
    "percentage discount",
    "fixed discount",
    "stacked discounts",
    "multiple discounts",
    "compound discounts",
    "sequential discounts",
    "cumulative discounts",
    "progressive discounts",
    "tiered discounts",
    "bulk discounts",
    "volume discounts",
    "quantity discounts",
    "black friday discount calculator"
  ]
}

export default function DiscountCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: `Calculate percentage discounts, fixed amounts, and final sale prices instantly. Our free discount calculator supports multiple discounts, tax calculations, and works with any currency. Perfect for shopping, business pricing, and financial planning.`,

    howToSteps: [
      "Enter Original Price: Input the pre-discount price of the item or service.",
      "Set Discount: Choose a percentage discount or a fixed amount off.",
      "Add Extra Discounts: Stack additional discounts if applicable (e.g., store coupon + seasonal sale).",
      "Include Tax: Add sales tax to see the final price you'll pay at the register.",
      "Calculate Savings: Instantly see your total savings and the final price."
    ],

    features: [
      "Multi-Type Discount Engine: Supports both percentage-based reductions and fixed dollar amount discounts.",
      "Sequential Discount Processing: Apply unlimited discounts in sequence with our compound discount calculator.",
      "Intelligent Tax Integration: Handle both tax-inclusive and tax-exclusive pricing scenarios.",
      "Professional Pricing Analysis: Get comprehensive pricing breakdowns with effective discount rates and total savings.",
      "E-commerce Pricing Strategies: Optimize online store pricing with dynamic adjustments and volume discounts.",
      "Retail Operations Management: Streamline physical store pricing with clearance and markdown strategies.",
      "Financial Planning & Analysis: Professional tools for profit margin optimization and cost-benefit analysis.",
      "Marketing Campaign Optimization: Maximize promotional effectiveness with A/B testing and performance metrics."
    ],

    useCases: [
      "Core Calculator Types: Discount Price Calculator, Sale Discount Calculator, Simple Discount Calculator.",
      "Shopping & Consumer Tools: Discount Calculator for Shopping, Product Discount Calculator, Discount Percentage Finder.",
      "Tax Integration Features: Discount and Tax Calculator, Discount Calculator with GST, VAT Discount Calculator.",
      "Business & International Tools: Discount Calculator for Business, Multi-Currency Discount Calculator, B2B Discount Calculator."
    ],

    faqs: [
      {
        question: "How to calculate discount percentage and final sale price accurately",
        answer: "Calculating discount percentages requires precise mathematical formulas: Discount Percentage = (Original Price - Sale Price) ÷ Original Price × 100. For sale price calculation: Sale Price = Original Price - (Original Price × Discount Percentage ÷ 100). Our advanced calculator automates these complex calculations while handling tax implications and multiple discount scenarios simultaneously."
      },
      {
        question: "Understanding sequential discount application and compound savings",
        answer: "Sequential discount processing follows a compound calculation method where each subsequent discount is applied to the already-reduced amount, not the original price. This creates exponential savings that differ significantly from simple addition. Our calculator demonstrates this compounding effect with real-time calculations, showing how 20% + 15% discounts actually yield 32% total savings, not 35%."
      },
      {
        question: "Maximizing savings during major shopping events and seasonal sales",
        answer: "Major shopping events like Black Friday, Cyber Monday, and holiday sales often feature complex discount structures combining percentage reductions, dollar-off coupons, and exclusive member discounts. Our calculator helps consumers and businesses navigate these multi-layered promotions, ensuring accurate final price calculations while accounting for tax variations across different states and regions."
      },
      {
        question: "Coupon discount calculator and promo code savings",
        answer: "Coupon discount calculator processes percentage or fixed amount coupons. Promo code calculator handles discount code calculator and voucher calculator scenarios. Both support gift card discount, cashback calculator, and rebate calculator calculations."
      },
      {
        question: "BOGO calculator and buy one get one deals",
        answer: "BOGO calculator (Buy One Get One) calculates effective savings when buying multiple items. Buy one get one calculator, buy two get one free, and buy three get two free calculators help determine the best value for bulk purchases."
      },
      {
        question: "Tax inclusive vs tax exclusive discount calculations",
        answer: "Tax inclusive discount applies the discount to the price including tax. Tax exclusive discount applies to the price before tax. Our calculator supports GST discount calculator, VAT discount calculator, and sales tax discount calculations for different jurisdictions."
      },
      {
        question: "Reverse discount calculator and original price finder",
        answer: "Reverse discount calculator finds the original price when you know the discounted price and discount percentage. Original price calculator, find original price calculator, and price before discount calculator help determine undiscounted prices for comparison."
      },
      {
        question: "Student discount calculator and special group discounts",
        answer: "Student discount calculator, senior discount calculator, military discount calculator, and employee discount calculator help calculate savings for special groups. These often combine with other discounts for maximum savings."
      },
      {
        question: "Wholesale discount calculator and bulk purchase savings",
        answer: "Wholesale discount calculator, trade discount calculator, and bulk purchase calculator help businesses calculate savings on large orders. B2B discount calculator, corporate discount calculator, and distributor discount calculator support professional pricing strategies."
      },
      {
        question: "Compare prices calculator and savings optimization",
        answer: "Compare prices calculator helps find the best deals across different retailers. Price reduction calculator, retail markdown calculator, and MSRP vs sale price calculator help determine true savings and value."
      },
      {
        question: "Mobile discount calculator app and offline usage",
        answer: "Our discount calculator app works on iPhone discount calculator, Android discount calculator, and mobile discount calculator platforms. Browser discount calculator, desktop discount calculator, and offline discount calculator options ensure accessibility anywhere."
      },
      {
        question: "Industry-specific discount calculators",
        answer: "Retail discount calculator, ecommerce discount calculator, restaurant discount calculator, hotel discount calculator, travel discount calculator, flight discount calculator, car rental discount calculator, and insurance discount calculator support industry-specific needs."
      },
      {
        question: "Currency support and international discount calculations",
        answer: "USD discount calculator, EUR discount calculator, GBP discount calculator, CAD discount calculator, AUD discount calculator, JPY discount calculator, INR discount calculator, BRL discount calculator, MXN discount calculator, and multi currency discount calculator support global pricing."
      },
      {
        question: "Advanced discount strategies and optimization",
        answer: "Best discount combination calculator, optimal discount strategy calculator, discount stacking calculator, compound discount calculator, progressive discount calculator, and tiered pricing calculator help maximize savings and profits."
      },
      {
        question: "Advanced pricing strategies for e-commerce businesses",
        answer: "E-commerce businesses require sophisticated pricing models that account for customer acquisition costs, lifetime value, and competitive positioning. Our calculator enables merchants to test various discount scenarios, analyze profit margins, and optimize pricing strategies for maximum revenue while maintaining healthy profit margins across different customer segments and product categories."
      },
      {
        question: "Tax-inclusive vs tax-exclusive pricing calculations",
        answer: "Understanding the difference between tax-inclusive and tax-exclusive pricing is crucial for accurate financial planning. Tax-inclusive pricing includes taxes in the displayed price, while tax-exclusive pricing adds taxes at checkout. Our calculator handles both scenarios, automatically adjusting discount calculations and final pricing based on your jurisdiction's tax requirements and business model."
      },
      {
        question: "Professional discount calculator features for enterprise use",
        answer: "Enterprise-level businesses require advanced discount calculation capabilities that go beyond basic percentage reductions. Our professional calculator supports complex pricing structures including tiered discounts, volume-based pricing, customer-specific rates, and multi-currency calculations. Perfect for B2B sales teams, procurement departments, and financial analysts who need precise pricing models for contract negotiations and budget planning."
      },
      {
        question: "Optimizing profit margins with strategic discount planning",
        answer: "Strategic discount planning requires balancing customer acquisition, retention, and profitability. Our calculator helps businesses determine optimal discount levels that maximize sales volume while maintaining healthy profit margins. By analyzing effective discount rates and total savings, companies can make data-driven decisions about promotional strategies and pricing adjustments."
      },
      {
        question: "How to use discount calculator for shopping and product pricing",
        answer: "Our discount calculator for shopping helps consumers make informed purchasing decisions by calculating exact sale prices, total savings, and effective discount rates. Whether you're shopping online or in physical stores, our product discount calculator provides instant pricing calculations for individual items, helping you compare deals and maximize your savings across different retailers."
      },
      {
        question: "Understanding discount formula calculator and mathematical principles",
        answer: "The discount formula calculator uses precise mathematical formulas to ensure accurate calculations. Basic discount formula: Sale Price = Original Price × (1 - Discount Percentage ÷ 100). For fixed discounts: Sale Price = Original Price - Fixed Discount Amount. Our calculator automates these formulas while handling complex scenarios like sequential discounts and tax calculations."
      },
      {
        question: "Simple discount calculator vs advanced professional tools",
        answer: "A simple discount calculator handles basic percentage and fixed amount discounts, perfect for quick calculations. Our advanced professional tool supports complex pricing scenarios including sequential discounts, tax integration, multiple discount types, and comprehensive pricing analysis. Choose the right tool based on your calculation complexity and business requirements."
      },
      {
        question: "Discount calculator with GST and VAT for international businesses",
        answer: "International businesses require discount calculators that handle different tax systems. Our discount calculator with GST supports Goods and Services Tax calculations for countries like Australia, Canada, and India. The discount calculator with VAT handles Value Added Tax for European Union countries. Both tools support tax-inclusive and tax-exclusive pricing scenarios."
      },
      {
        question: "Discount calculator in PKR and multi-currency support",
        answer: "Our discount calculator in PKR (Pakistani Rupee) supports local pricing calculations for Pakistani businesses and consumers. The calculator handles PKR-specific pricing scenarios, local tax rates, and regional discount patterns. Multi-currency support enables international businesses to calculate discounts in their preferred currency while maintaining accurate conversions."
      },
      {
        question: "Free online discount calculator vs manual calculations",
        answer: "Free online discount calculator provides instant, accurate results compared to manual calculations. Best discount calculator online tools offer advanced features like stacked discounts calculator, tax calculations, and multiple currency support for comprehensive pricing analysis."
      }
    ],

    aboutTool: `
      ### Discount Calculator
      Our Discount Calculator is the ultimate shopping companion, helping you quickly determine the final price of any item on sale. Whether you're shopping for clothes, electronics, or groceries, this tool ensures you know exactly what you'll pay and how much you're saving.

      ### Key Features
      - **Multiple Discount Types:** Calculate percentage off (e.g., 20% off) or fixed amount off (e.g., $10 off).
      - **Stacked Discounts:** Handle complex sales like "take an extra 15% off the sale price."
      - **Tax Calculation:** Include sales tax to get the precise final total.
      - **Savings Breakdown:** See exactly how much money you're keeping in your pocket.
    `,

    relatedTools: [
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Savings Tracker", href: "/finance-tools/savings-tracker" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: `Free Discount Calculator – Calculate Sale Price & Savings ()`,
        description: "Calculate percentage discounts, fixed amounts, and final sale prices instantly. Our free discount calculator supports multiple discounts, tax calculations, and works with any currency. Perfect for shopping, business pricing, and financial planning.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/discount-calculator" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <DiscountCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free discount calculator to find final price after discount. Calculate savings, sale price or original price easily. Works with any currency & tax.",
        path: "/finance-tools/discount-calculator"
      }}
    />
  )
}
