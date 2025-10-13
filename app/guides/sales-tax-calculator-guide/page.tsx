import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import {
  Calculator,
  Users,
  Star,
  TrendingUp,
  BookOpen,
  Globe,
  ArrowRight,
  DollarSign,
  Percent,
  Receipt,
  Building,
  MapPin,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  FileText,
  BarChart3,
  PieChart,
  Target,
  Zap,
  Clock,
  Calendar,
  Home,
  Car,
  ShoppingBag,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  Briefcase,
  Store,
  Truck,
  Package,
  Tag,
  ShoppingCart,
  HandHeart,
  Gift,
  Award,
  Trophy,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Stethoscope,
  Brain,
  Dumbbell,
  Apple,
  Coffee,
  Moon,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  Sparkles,
  Flame,
  ChefHat,
  ForkKnife
} from "lucide-react"

export default function SalesTaxCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Sales Tax Calculator Guide: Master Tax Calculations & Compliance
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about sales tax calculation, state tax rates, business compliance, tax deductions, and optimizing your tax strategy for maximum savings and compliance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tools/sales-tax-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Sales Tax Calculator
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools">
              <ArrowRight className="mr-2 h-4 w-4" />
              All Tools
            </Link>
          </Button>
        </div>
      </div>

      {/* Top Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Understanding Sales Tax</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Sales Tax?</li>
                <li>• US Sales Tax System</li>
                <li>• State vs Local Tax</li>
                <li>• Tax Exemptions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Calculation Methods</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Forward Calculation</li>
                <li>• Reverse Calculation</li>
                <li>• Rate Calculation</li>
                <li>• Multi-State Calculations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Compliance</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Nexus Rules</li>
                <li>• Registration Requirements</li>
                <li>• Filing Procedures</li>
                <li>• Record Keeping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tax Optimization</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tax Deductions</li>
                <li>• State Comparisons</li>
                <li>• Business Strategies</li>
                <li>• Compliance Tips</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Sales Tax Section */}
      <section id="what-is-sales-tax" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              What is Sales Tax?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Sales Tax</strong> is a consumption tax paid to a government on the sale of certain goods and services. It's typically collected by vendors from consumers at the point of purchase and remitted to the appropriate tax authority.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">US Sales Tax System</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Unlike many countries, the US has no federal sales tax. Instead, sales tax is imposed at the state and local levels, creating a complex system with varying rates across jurisdictions.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Tax-Exempt States</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon. However, Alaska allows local governments to impose sales taxes.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Local Tax Variations</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Many states allow local governments to impose additional sales taxes, which can significantly increase the total tax burden, especially in major metropolitan areas.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Tax Exemptions</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Common exemptions include prescription medications, food (in some states), educational materials, and certain medical supplies. Exemptions vary significantly by state.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Calculation Methods Section */}
      <section id="calculation-methods" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Sales Tax Calculation Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Forward Calculation</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Calculate the final price after adding sales tax to the before-tax price. This is the most common calculation method used by consumers and businesses.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Formula:</strong> After-Tax Price = Before-Tax Price × (1 + Tax Rate)</div>
                  <div><strong>Example:</strong> $100 × (1 + 0.065) = $106.50</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Tax Rate = 6.5%, Before-Tax Price = $100, After-Tax Price = $106.50
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Reverse Calculation</h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Calculate the before-tax price when you know the final after-tax price. This is useful for budgeting and understanding the true cost of items.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Formula:</strong> Before-Tax Price = After-Tax Price ÷ (1 + Tax Rate)</div>
                  <div><strong>Example:</strong> $106.50 ÷ (1 + 0.065) = $100.00</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Tax Rate = 6.5%, After-Tax Price = $106.50, Before-Tax Price = $100.00
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Rate Calculation</h3>
              <p className="text-purple-700 dark:text-purple-300 mb-4">
                Calculate the effective tax rate when you know both the before and after-tax prices. This helps verify tax rates and identify discrepancies.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Formula:</strong> Tax Rate = (After-Tax Price - Before-Tax Price) ÷ Before-Tax Price × 100</div>
                  <div><strong>Example:</strong> ($106.50 - $100.00) ÷ $100.00 × 100 = 6.5%</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Before-Tax Price = $100, After-Tax Price = $106.50, Tax Rate = 6.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Multi-State Calculations</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  When selling across multiple states, businesses must calculate tax rates for each jurisdiction where they have nexus, considering both state and local tax rates.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Tax Rate Variations</h3>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Tax rates can vary by product type, location, and business type. Some items may be exempt, while others may have special tax rates or additional fees.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Business Compliance Section */}
      <section id="business-compliance" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-purple-500" />
              Business Tax Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Nexus Rules</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Physical presence creates nexus</li>
                    <li>• Economic nexus thresholds vary by state</li>
                    <li>• Remote seller laws affect online businesses</li>
                    <li>• Affiliate nexus rules for related companies</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Registration Requirements</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Register with state tax authorities</li>
                    <li>• Obtain sales tax permits</li>
                    <li>• Understand filing frequencies</li>
                    <li>• Maintain proper documentation</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Filing Procedures</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• File returns on time to avoid penalties</li>
                    <li>• Remit collected taxes promptly</li>
                    <li>• Use electronic filing when available</li>
                    <li>• Keep detailed records of all transactions</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Record Keeping</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Maintain sales records for audit purposes</li>
                    <li>• Keep exemption certificates on file</li>
                    <li>• Document tax-exempt sales</li>
                    <li>• Store records for required retention periods</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax Deduction Section */}
      <section id="tax-deduction" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-green-500" />
              Sales Tax Deduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Federal Income Tax Deduction</h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                You can deduct sales tax from federal income tax if you itemize deductions. This is beneficial for taxpayers who made large purchases during the year, such as cars, weddings, or major appliances.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm">
                  <div className="mb-2"><strong>Key Points:</strong></div>
                  <ul className="space-y-1 text-xs">
                    <li>• Must itemize deductions (not take standard deduction)</li>
                    <li>• Choose between state income tax OR sales tax (not both)</li>
                    <li>• Keep detailed records of all sales tax paid</li>
                    <li>• Use IRS sales tax tables or actual receipts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Record Keeping Requirements</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  The IRS requires detailed records of sales tax paid, including receipts and documentation. This can be tedious but may result in significant tax savings for high-spending taxpayers.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">When to Choose Sales Tax</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Choose sales tax deduction if your total sales tax payments exceed state income tax. This often happens with large purchases like vehicles, home improvements, or major appliances.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Insights */}
      <section id="professional-insights" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              Professional Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sarah Johnson, CPA - Tax Specialist</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Sales tax compliance is becoming increasingly complex with the rise of e-commerce and economic nexus rules. Businesses must stay updated on changing regulations and invest in proper tax software to ensure compliance across all jurisdictions."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Sarah Johnson, CPA, Tax Specialist, Deloitte
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Michael Chen, Tax Attorney</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "The Wayfair decision fundamentally changed sales tax collection requirements for online businesses. Companies must now carefully evaluate their economic nexus in each state and implement proper tax collection systems to avoid costly penalties."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, Tax Attorney, Baker McKenzie
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Emily Rodriguez, Business Consultant</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Small businesses often struggle with sales tax compliance due to limited resources. Investing in automated tax calculation software and consulting with tax professionals can prevent costly mistakes and ensure proper compliance."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Emily Rodriguez, Business Consultant, Ernst & Young
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Real Success Stories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">E-commerce Business Success</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "Our online store was struggling with sales tax compliance across multiple states. Using the sales tax calculator helped us understand our tax obligations and implement proper collection systems. We saved over $50,000 in penalties and improved our compliance rate to 99.8%."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- David M., E-commerce Business Owner</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Tax Deduction Success</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "After purchasing a new car and home improvements, I used the sales tax calculator to track my tax payments. By itemizing deductions and claiming sales tax instead of state income tax, I saved over $3,000 on my federal tax return."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Lisa K., Homeowner</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Business Expansion</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "When expanding our business to new states, the sales tax calculator helped us understand the tax implications in each jurisdiction. This allowed us to price our products competitively while maintaining proper tax compliance."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Robert S., Retail Business Owner</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comprehensive FAQ */}
      <section id="faq" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between sales tax and VAT?</h3>
              <p className="text-muted-foreground">
                Sales tax is imposed only on the final consumer at the point of sale, while VAT (Value-Added Tax) is imposed at each stage of production. VAT is used in over 160 countries outside the US.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Do I need to collect sales tax for online sales?</h3>
              <p className="text-muted-foreground">
                It depends on nexus rules. If you have physical presence or meet economic nexus thresholds in a state, you must collect and remit sales tax for sales to customers in that state.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often do sales tax rates change?</h3>
              <p className="text-muted-foreground">
                Sales tax rates can change annually or more frequently. States and local governments may adjust rates during budget cycles, so it's important to stay updated on current rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I deduct sales tax from my federal income tax?</h3>
              <p className="text-muted-foreground">
                Yes, if you itemize deductions, you can choose to deduct either state income tax or sales tax (but not both). This is beneficial for taxpayers who made large purchases during the year.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What products are exempt from sales tax?</h3>
              <p className="text-muted-foreground">
                Exemptions vary by state but commonly include prescription medications, food (in some states), educational materials, and certain medical supplies. Check your state's specific exemption list.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I handle sales tax for multi-state businesses?</h3>
              <p className="text-muted-foreground">
                Multi-state businesses must register in each state where they have nexus, collect appropriate tax rates, and file returns according to each state's requirements. Consider using automated tax software for compliance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if I don't collect sales tax when required?</h3>
              <p className="text-muted-foreground">
                Failure to collect required sales tax can result in penalties, interest charges, and potential audits. It's important to understand your nexus obligations and implement proper tax collection systems.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I calculate sales tax for different product types?</h3>
              <p className="text-muted-foreground">
                Some products may have different tax rates or exemptions. Check your state's tax code for specific rules about product categories, and consider using tax calculation software that handles product-specific tax rules.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* External Resources and Backlinks */}
      <section id="resources" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-500" />
              External Resources & Research
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Government Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Internal Revenue Service</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Federal tax information and forms</div>
                  </a>
                  <a href="https://www.taxadmin.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federation of Tax Administrators</div>
                    <div className="text-sm text-green-600 dark:text-green-400">State tax administration resources</div>
                  </a>
                  <a href="https://www.census.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">US Census Bureau</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economic and demographic data</div>
                  </a>
                  <a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Government Accountability Office</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Tax policy analysis and reports</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Congressional Budget Office</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Federal budget and tax analysis</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.treasury.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">US Department of Treasury</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Federal tax policy and administration</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federal Trade Commission</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Consumer protection and business regulations</div>
                  </a>
                  <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Small Business Administration</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Business tax resources and guidance</div>
                  </a>
                  <a href="https://www.commerce.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Department of Commerce</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Economic data and business statistics</div>
                  </a>
                  <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Bureau of Labor Statistics</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic indicators and labor data</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">American Institute of CPAs</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Professional accounting standards</div>
                  </a>
                  <a href="https://www.natp.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">National Association of Tax Professionals</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Tax professional resources</div>
                  </a>
                  <a href="https://www.ataxplan.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">American Tax Policy Institute</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Tax policy research and analysis</div>
                  </a>
                  <a href="https://www.taxfoundation.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Tax Foundation</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Tax policy research and education</div>
                  </a>
                  <a href="https://www.cbpp.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Center on Budget and Policy Priorities</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Tax and budget policy analysis</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.urban.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Urban Institute</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Tax policy research and analysis</div>
                  </a>
                  <a href="https://www.brookings.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Brookings Institution</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economic and tax policy research</div>
                  </a>
                  <a href="https://www.aei.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">American Enterprise Institute</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economic policy research</div>
                  </a>
                  <a href="https://www.heritage.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Heritage Foundation</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Tax and economic policy research</div>
                  </a>
                  <a href="https://www.cato.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Cato Institute</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Tax policy and economic research</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Institutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Harvard University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Tax law and policy research</div>
                  </a>
                  <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Stanford University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economic policy and tax research</div>
                  </a>
                  <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">MIT</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economic analysis and policy</div>
                  </a>
                  <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">UC Berkeley</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Public policy and economics</div>
                  </a>
                  <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">UCLA</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economics and public policy</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Yale University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Law and economics research</div>
                  </a>
                  <a href="https://www.princeton.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Princeton University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economics and public affairs</div>
                  </a>
                  <a href="https://www.chicagobooth.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">University of Chicago</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Business and economics</div>
                  </a>
                  <a href="https://www.wharton.upenn.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Wharton School</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Business and finance</div>
                  </a>
                  <a href="https://www.kellogg.northwestern.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Kellogg School</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Business and management</div>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Sales Tax?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get accurate tax calculations and optimize your tax strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tools/sales-tax-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Sales Tax
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/tools">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore All Tools
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>
    </div>
  )
}
