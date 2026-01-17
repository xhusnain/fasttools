import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import SalesTaxCalculator from "@/components/finance/sales-tax-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

const baseMetadata = createMetadata({
  title: "FastTools - Sales Tax Calculator | Free Advanced State Tax Calculator",
  description:
    "FastTools Sales Tax Calculator - Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons & compliance guidance.",
  path: "/finance-tools/sales-tax-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" }
  ],
  schemaOptions: {
    name: "Sales Tax Calculator",
    alternateName: "State Tax Calculator",
    applicationCategory: "BusinessApplication",
    featureList: [
      "Forward Tax Calculation",
      "Reverse Tax Calculation",
      "Tax Rate Calculation",
      "State Tax Comparison",
      "Local Tax Inclusion",
      "Business Compliance Tips",
      "Tax Optimization Recommendations",
      "Multi-State Support",
      "Tax History Tracking",
      "Professional Tax Analysis",
      "US Sales Tax Overview",
      "Tax Deduction Calculator",
      "Business Tax Compliance",
      "Tax Rate Comparison",
      "Tax Planning Tools",
      "Tax Compliance Guidance",
      "Tax Optimization Strategies",
      "Tax Analysis Reports",
      "Tax Calculation Methods",
      "Tax Planning Solutions"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "fasttools",
    "fast tools",
    "sales tax calculator",
    "sales tax rate calculator",
    "reverse sales tax calculator",
    "after tax price calculator",
    "before tax price calculator",
    "tax amount calculator",
    "sales tax percentage calculator",
    "how to calculate sales tax",
    "sales tax calculator online",
    "free sales tax calculator",
    "GST calculator",
    "VAT calculator",
    "Pakistan sales tax calculator",
    "US sales tax calculator",
    "Canada sales tax calculator",
    "UK VAT calculator",
    "sales tax calculator by state",
    "sales tax calculator by ZIP code",
    "sales tax calculator by address",
    "state tax calculator",
    "local sales tax calculator",
    "city sales tax calculator",
    "business sales tax calculator",
    "ecommerce sales tax calculator",
    "shopping tax calculator",
    "online store tax calculator",
    "sales tax rate lookup",
    "tax inclusive calculator",
    "tax exclusive calculator",
    "sales tax deduction calculator",
    "sales and use tax calculator",
    "quick sales tax calculator",
    "accurate sales tax calculator",
    "sales tax formula calculator",
    "sales tax calculator app",
    "sales tax return calculator",
    "sales tax breakdown calculator",
    "calculate 18% GST",
    "calculate VAT from total price",
    "calculate tax from total amount",
    "sales tax refund calculator",
    "sales tax on services calculator",
    "sales tax percentage from total",
    "FBR sales tax Pakistan",
    "Punjab sales tax calculator",
    "Sindh sales tax calculator",
    "India GST calculator",
    "EU VAT calculator",
    "tax computation calculator",
    "total price after tax calculator"
  ]
}

export default function SalesTaxCalculatorPage() {
  const toolContent = {
    toolName: "Sales Tax Calculator",
    overview: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",

    howToSteps: [
      "Choose Calculation Method: Select forward calculation (add tax), reverse calculation (remove tax), or rate calculation.",
      "Select State (Optional): Choose your state for automatic tax rate application, or enter a custom rate manually.",
      "Enter Your Values: Input the required prices and tax rates based on your selected calculation method.",
      "Get Comprehensive Results: Receive detailed tax breakdown, state comparisons, business tips, and compliance recommendations."
    ],

    features: [
      "Forward Tax Calculation",
      "Reverse Tax Calculation",
      "Tax Rate Calculation",
      "State Tax Comparison",
      "Local Tax Inclusion",
      "Business Compliance Tips",
      "Tax Optimization Recommendations",
      "Multi-State Support",
      "Tax History Tracking",
      "Professional Tax Analysis",
      "US Sales Tax Overview",
      "Tax Deduction Calculator",
      "Business Tax Compliance",
      "Tax Rate Comparison",
      "Tax Planning Tools",
      "Tax Compliance Guidance",
      "Tax Optimization Strategies",
      "Tax Analysis Reports",
      "Tax Calculation Methods",
      "Tax Planning Solutions"
    ],

    useCases: [
      "For Consumers & Shoppers: Calculate total cost, compare prices, plan purchases, understand tax implications, track tax deductions.",
      "For Businesses & E-commerce: Calculate accurate tax, ensure compliance, optimize pricing, plan for nexus, professional tax planning."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            US Sales Tax Overview
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">State Sales Tax Rates</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Sales tax rates vary significantly across US states, ranging from 0% to over 16% when including local taxes. Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Highest Tax States</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tennessee: 7% + local</li>
                    <li>• Louisiana: 4.45% + local</li>
                    <li>• Arkansas: 6.5% + local</li>
                    <li>• Washington: 6.5% + local</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Lowest Tax States</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Alaska: 0% (local only)</li>
                    <li>• Delaware: 0%</li>
                    <li>• Montana: 0%</li>
                    <li>• New Hampshire: 0%</li>
                    <li>• Oregon: 0%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Local Tax Considerations</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Many states allow local governments to impose additional sales taxes on top of state rates. These can significantly increase the total tax burden, especially in major metropolitan areas.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Example:</strong> California has a 7.25% state rate, but local taxes can push the total to 10.5%</div>
                  <div><strong>Impact:</strong> A $100 purchase could have $10.50 in total sales tax</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Business Tax Compliance</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Businesses must understand nexus rules, which determine when they're required to collect sales tax in different states. This is especially important for e-commerce businesses.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Physical presence creates nexus</li>
                <li>• Economic nexus thresholds vary by state</li>
                <li>• Remote seller laws affect online businesses</li>
                <li>• Proper registration and filing are required</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Sales Tax Calculation Methods
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Forward Calculation</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Final Price = Original Price × (1 + Tax Rate)</strong>
              </p>
              <div className="bg-muted p-3 rounded text-xs text-muted-foreground">
                <div className="mb-1"><strong>Example:</strong> $100 × 1.085 = $108.50</div>
                <div><strong>Tax:</strong> $8.50</div>
              </div>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Reverse Calculation</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Original Price = Total Price ÷ (1 + Tax Rate)</strong>
              </p>
              <div className="bg-muted p-3 rounded text-xs text-muted-foreground">
                <div className="mb-1"><strong>Example:</strong> $108.50 ÷ 1.085 = $100</div>
                <div><strong>Tax:</strong> $8.50</div>
              </div>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Rate Calculation</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Tax Rate = (Tax Amount ÷ Original Price) × 100</strong>
              </p>
              <div className="bg-muted p-3 rounded text-xs text-muted-foreground">
                <div className="mb-1"><strong>Example:</strong> ($8.50 ÷ $100) × 100 = 8.5%</div>
                <div><strong>Verify:</strong> $100 × 0.085 = $8.50</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Business Compliance Guide
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Understanding Nexus Requirements</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Nexus determines when you must collect sales tax. Physical nexus occurs when you have a physical presence, while economic nexus is based on sales volume or transaction count.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Physical Nexus:</strong> Office, warehouse, employees, or inventory in state</li>
                <li>• <strong>Economic Nexus:</strong> $100K-$500K in sales or 200+ transactions</li>
                <li>• <strong>Affiliate Nexus:</strong> Related companies with physical presence</li>
                <li>• <strong>Click-Through Nexus:</strong> Referral agreements with in-state businesses</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Registration and Filing Requirements</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Once you have nexus, you must register, collect tax, and file returns. Requirements vary by state and business type.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Registration:</strong> Complete state application and obtain permit</li>
                <li>• <strong>Collection:</strong> Add tax to taxable sales at point of sale</li>
                <li>• <strong>Filing:</strong> Submit returns monthly, quarterly, or annually</li>
                <li>• <strong>Remittance:</strong> Pay collected tax to state by due date</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Record Keeping and Audit Preparation</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Maintain detailed records for compliance and audit purposes. Most states require 3-7 years of records.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Sales Records:</strong> Customer info, product details, tax rates</li>
                <li>• <strong>Exemption Certificates:</strong> Resale certificates, exemption forms</li>
                <li>• <strong>Filing Records:</strong> Returns, payments, correspondence</li>
                <li>• <strong>Nexus Documentation:</strong> Physical presence, economic thresholds</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            Sales Tax Deduction
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Federal Income Tax Deduction</h3>
              <p className="text-muted-foreground">
                You can deduct sales tax from federal income tax if you itemize deductions. This is beneficial for taxpayers who made large purchases during the year, such as cars, weddings, or major appliances. Our calculator helps you track these amounts for tax planning.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Record Keeping Requirements</h3>
              <p className="text-muted-foreground">
                The IRS requires detailed records of sales tax paid, including receipts and documentation. This can be tedious but may result in significant tax savings for high-spending taxpayers. Our calculator helps you organize and track these records.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Standard vs Itemized Deductions</h3>
              <p className="text-muted-foreground">
                Most taxpayers choose the standard deduction, but those with large purchases may benefit from itemizing to claim sales tax deductions. Compare both options to maximize your tax savings. Our calculator helps you determine which approach is better for your situation.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What's the difference between sales tax and VAT?",
        answer: "Sales tax is imposed only on the final consumer at the point of sale, while VAT (Value-Added Tax) is imposed at each stage of production. VAT is used in over 160 countries outside the US. Our calculator helps you understand these differences and calculate accurate tax amounts for US sales tax purposes."
      },
      {
        question: "Are online businesses required to collect sales tax from customers?",
        answer: "Online business sales tax obligations depend on nexus requirements established in each state. When your business maintains a physical presence or reaches economic nexus thresholds within a particular state, you become legally obligated to collect and remit sales tax for transactions with customers located in that jurisdiction. Our calculator assists in identifying applicable tax rates across various states and clarifying your specific compliance responsibilities."
      },
      {
        question: "How often do sales tax rates change?",
        answer: "Sales tax rates can change annually or more frequently. States and local governments may adjust rates during budget cycles, so it's important to stay updated on current rates. Our calculator provides up-to-date tax rate information for all 50 US states."
      },
      {
        question: "Can I deduct sales tax from my federal income tax?",
        answer: "Yes, if you itemize deductions, you can choose to deduct either state income tax or sales tax (but not both). This is beneficial for taxpayers who made large purchases during the year. Our calculator helps you track sales tax amounts for potential deductions."
      },
      {
        question: "What products are exempt from sales tax?",
        answer: "Exemptions vary by state but commonly include prescription medications, food (in some states), educational materials, and certain medical supplies. Check your state's specific exemption list. Our calculator accounts for these exemptions when calculating tax amounts."
      },
      {
        question: "How do I calculate sales tax backwards from a total price?",
        answer: "To calculate the pre-tax price from a total that includes sales tax, divide the total by (1 + tax rate). For example, if the total is $107.50 and the tax rate is 7.5%, the pre-tax price is $107.50 ÷ 1.075 = $100. Our reverse calculation feature handles this automatically."
      },
      {
        question: "What is economic nexus and how does it affect my business?",
        answer: "Economic nexus means you must collect sales tax in a state if you exceed certain sales thresholds, even without physical presence. Thresholds vary by state (typically $100,000-$500,000 in sales or 200+ transactions). Our calculator helps you understand these requirements and plan accordingly."
      },
      {
        question: "How do I handle sales tax for different product categories?",
        answer: "Different products may have different tax rates or exemptions. Food items, clothing, and medical supplies often have special rules. Our calculator allows you to input custom tax rates for different product categories and provides guidance on common exemptions."
      },
      {
        question: "How do state-level and local jurisdiction sales taxes differ?",
        answer: "State sales tax represents a levy imposed by state-level government authorities, whereas local sales tax originates from municipal, county, or regional government bodies. When calculating total tax burden, you combine both rates together—state plus local equals your complete sales tax percentage. Our tool incorporates data from both state and local tax jurisdictions to provide precise combined rate calculations."
      },
      {
        question: "How do I register for sales tax collection in different states?",
        answer: "Registration requirements vary by state. Generally, you need to register with each state's tax authority where you have nexus. This usually involves completing an application, providing business information, and obtaining a sales tax permit. Our calculator helps you understand which states require registration."
      },
      {
        question: "What happens if I don't collect sales tax when required?",
        answer: "Failure to collect required sales tax can result in penalties, interest, and back taxes. States may audit your business and require payment of uncollected taxes plus penalties. It's important to understand your obligations and use tools like our calculator to ensure compliance."
      },
      {
        question: "How do I calculate sales tax for shipping and handling?",
        answer: "Shipping and handling charges are generally taxable if they're mandatory and not separately stated. If shipping is optional or separately stated, it may be exempt. Our calculator helps you determine the correct tax treatment for shipping charges based on state rules."
      },
      {
        question: "What are the most tax-friendly states for online businesses?",
        answer: "States with no sales tax (Alaska, Delaware, Montana, New Hampshire, Oregon) are most business-friendly. However, you still need to consider where your customers are located. Our calculator helps you compare tax rates across all states to make informed business decisions."
      },
      {
        question: "How do I handle sales tax for digital products and services?",
        answer: "Digital products and services are increasingly subject to sales tax. Rules vary by state, with some taxing all digital products and others having specific exemptions. Our calculator helps you understand the tax treatment of digital products in different states."
      },
      {
        question: "Which documentation must businesses maintain for sales tax compliance?",
        answer: "Businesses should maintain comprehensive documentation covering all sales transactions, documenting customer details, product specifications, applicable tax percentages used, and total tax amounts collected. The majority of state regulations mandate retention periods spanning 3 to 7 years for these financial records. Our calculator provides functionality to systematically record and organize this critical compliance data for audit readiness."
      },
      {
        question: "How do I calculate sales tax for bulk purchases or wholesale transactions?",
        answer: "Wholesale transactions may be exempt from sales tax if you have a valid resale certificate. The tax rate still applies to the final retail sale. Our calculator helps you determine the correct tax treatment for different types of transactions and provides guidance on resale certificates."
      },
      {
        question: "What is the difference between sales tax and use tax, and when do I need to pay use tax?",
        answer: "Sales tax represents a levy collected by merchants during the transaction process on taxable products and services, whereas use tax addresses purchases completed without sales tax payment, commonly occurring with out-of-state sellers or e-commerce platforms that don't collect tax. Purchasers bear responsibility for self-reporting and remitting use tax directly to their state revenue department. This system maintains tax parity between local and remote transactions. Use tax typically becomes applicable for online orders from non-collecting merchants, interstate purchases, and business acquisitions. Our calculator clarifies use tax applicability scenarios and computes proper amounts using your state's use tax percentage, which usually matches the standard sales tax rate."
      },
      {
        question: "How do I handle sales tax for online sales across multiple states in?",
        answer: "Online sales tax compliance has become increasingly complex since the 2018 Supreme Court decision in South Dakota v. Wayfair, Inc. You may be required to collect sales tax based on economic nexus, which is established when you exceed certain sales thresholds (typically $100,000-$500,000 in sales or 200+ transactions) in a state, even without physical presence. Each state has different thresholds and rules, so it's crucial to monitor your sales in each state and register for sales tax permits where you have nexus. Our calculator helps you determine which states require tax collection based on your sales volume and provides up-to-date nexus thresholds for all 50 states. Consider using automated tax compliance solutions for businesses with significant multi-state sales."
      },
      {
        question: "What are the consequences of not collecting or remitting sales tax properly in?",
        answer: "Failing to collect or remit sales tax correctly can lead to severe consequences including penalties, interest charges, and potential audits. States may impose fines ranging from 10-25% of the unpaid tax amount, plus interest that typically accrues monthly. Non-compliance significantly increases the risk of state audits, which can be costly and time-consuming. Persistent non-compliance can result in legal proceedings, business license revocation, and even criminal charges in extreme cases. To avoid these issues, ensure accurate tax collection using tools like our calculator, maintain detailed records of all transactions, file returns on time, and consider consulting with a tax professional for complex situations. Most states offer voluntary disclosure programs that can reduce penalties for businesses that come forward voluntarily."
      },
      {
        question: "How do I apply for a sales tax permit and what are my ongoing responsibilities?",
        answer: "Most states require businesses to obtain a sales tax permit before collecting sales tax. To apply, visit your state's Department of Revenue website where applications are typically available online. You'll need to provide business information including your Employer Identification Number (EIN), business structure, product/service details, and estimated monthly sales. Some states charge a permit fee ranging from $0-$100. Once registered, your ongoing responsibilities include collecting the appropriate sales tax rate on taxable sales, maintaining detailed records of all transactions, filing periodic returns (monthly, quarterly, or annually based on sales volume), and remitting collected tax by the due date. Our calculator helps you determine the correct tax rates and provides guidance on record-keeping requirements. Failure to comply with these responsibilities can result in permit revocation and legal action."
      },
      {
        question: "How do I determine which products and services are exempt from sales tax in my state?",
        answer: "Sales tax exemptions vary significantly by state and can include necessities like groceries, prescription medications, and medical devices; educational materials such as textbooks and school supplies; purchases by qualifying nonprofit organizations; and resale transactions with valid resale certificates. Some states exempt clothing under a certain dollar amount, while others tax all clothing. Food items may be fully exempt, partially exempt (only unprepared food), or fully taxable depending on the state. To claim exemptions, buyers typically need to provide valid exemption certificates to sellers, who must maintain these certificates for audit purposes. Our calculator helps you understand common exemptions and provides guidance on proper documentation. It's essential to check with your state's Department of Revenue for a comprehensive list of current exemptions and required documentation, as exemption rules can change frequently."
      }
    ],

    relatedTools: [
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Compound Interest", href: "/finance-tools/compound-interest" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Sales Tax Calculator",
        description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SalesTaxCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Sales Tax Calculator - Calculate Tax by State",
        description: "FastTools Sales Tax Calculator - Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons & compliance guidance.",
        path: "/finance-tools/sales-tax-calculator"
      }}
    />
  )
}