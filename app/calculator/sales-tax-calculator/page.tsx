import { Metadata } from "next"
import SalesTaxCalculator from "@/components/sales-tax-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

export const metadata: Metadata = {
  title: "Sales Tax Calculator | Free Advanced State Tax Calculator",
  description: "Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons & compliance guidance.",
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
    ],

  openGraph: {
    title: "Sales Tax Calculator | Advanced State Tax Calculator | FastTools",
    description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, and compliance guidance.",
    type: "website",
    url: "https://www.fasttools.store/calculator/sales-tax-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Sales Tax Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Tax Calculator | Advanced State Tax Calculator | FastTools",
    description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, and compliance guidance.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/sales-tax-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function SalesTaxCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Sales Tax Calculator | Advanced State Tax Calculator - Professional Tax Analysis Tool",
          description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance. Free, professional-grade tax analysis for optimal tax planning.",
          url: "https://www.fasttools.store/calculator/sales-tax-calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
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
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Sales Tax Calculator", href: "/calculator/sales-tax-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-4 sm:mb-6 md:mb-8 w-full">
              <GHeader 
                title="Sales Tax Calculator - Advanced State Tax Analysis"
                description="Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning."
                titleSize="medium"
                color="orange"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] 2xl:grid-cols-[1fr_450px] gap-4 sm:gap-6 lg:gap-8 w-full">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full min-w-0">
                <div className="w-full">
                  <SalesTaxCalculator />
                </div>
            
                {/* Educational Content Sections */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5 bg-card rounded-lg p-2 sm:p-3 md:p-4 w-full">
                  {/* How to Use Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      How to Use Sales Tax Calculator
                    </h2>
                    <div className="space-y-2 sm:space-y-3 overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-2.5 md:p-3 bg-card rounded-lg border border-border overflow-hidden">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm break-words">1. Choose Calculation Method</h3>
                          <p className="text-xs text-foreground break-words">Select forward calculation (add tax), reverse calculation (remove tax), or rate calculation</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-card rounded-lg border border-border overflow-hidden">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm break-words">2. Select State (Optional)</h3>
                          <p className="text-xs text-foreground break-words">Choose your state for automatic tax rate application, or enter a custom rate manually</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-card rounded-lg border border-border overflow-hidden">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm break-words">3. Enter Your Values</h3>
                          <p className="text-xs text-foreground break-words">Input the required prices and tax rates based on your selected calculation method</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-card rounded-lg border border-border overflow-hidden">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm break-words">4. Get Comprehensive Results</h3>
                          <p className="text-xs text-foreground break-words">Receive detailed tax breakdown, state comparisons, business tips, and compliance recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Multiple Calculation Methods</h3>
                            <p className="text-xs text-foreground break-words">Forward, reverse, and rate calculations for comprehensive tax analysis</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">State Tax Comparison</h3>
                            <p className="text-xs text-foreground break-words">Compare tax rates across all 50 US states with detailed analysis</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Business Compliance</h3>
                            <p className="text-xs text-foreground break-words">Professional compliance guidance and tax optimization recommendations</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Local Tax Inclusion</h3>
                            <p className="text-xs text-foreground break-words">Comprehensive local tax calculations for accurate total tax burden</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Multi-State Support</h3>
                            <p className="text-xs text-foreground break-words">Support for businesses operating across multiple states</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded flex-shrink-0">
                            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Tax History Tracking</h3>
                            <p className="text-xs text-foreground break-words">Track tax calculations and maintain historical records</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">For Consumers & Shoppers</h3>
                        <ul className="space-y-1 text-xs text-foreground">
                          <li>• Calculate total cost including sales tax</li>
                          <li>• Compare prices across different states</li>
                          <li>• Plan purchases for tax-free states</li>
                          <li>• Understand tax implications of major purchases</li>
                          <li>• Track sales tax for tax deduction purposes</li>
                        </ul>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">For Businesses & E-commerce</h3>
                        <ul className="space-y-1 text-xs text-foreground">
                          <li>• Calculate accurate tax for pricing</li>
                          <li>• Ensure compliance across multiple states</li>
                          <li>• Optimize pricing strategies for different markets</li>
                          <li>• Plan for nexus requirements and obligations</li>
                          <li>• Professional tax planning and analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* US Sales Tax Overview */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      US Sales Tax Overview
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 break-words">State Sales Tax Rates</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Sales tax rates vary significantly across US states, ranging from 0% to over 16% when including local taxes. Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          <div>
                            <h4 className="font-semibold mb-1 text-xs sm:text-sm text-heading-accent">Highest Tax States</h4>
                            <ul className="text-xs text-foreground space-y-0.5">
                              <li>• Tennessee: 7% + local</li>
                              <li>• Louisiana: 4.45% + local</li>
                              <li>• Arkansas: 6.5% + local</li>
                              <li>• Washington: 6.5% + local</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-xs sm:text-sm text-heading-accent">Lowest Tax States</h4>
                            <ul className="text-xs text-foreground space-y-0.5">
                              <li>• Alaska: 0% (local only)</li>
                              <li>• Delaware: 0%</li>
                              <li>• Montana: 0%</li>
                              <li>• New Hampshire: 0%</li>
                              <li>• Oregon: 0%</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 break-words">Local Tax Considerations</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Many states allow local governments to impose additional sales taxes on top of state rates. These can significantly increase the total tax burden, especially in major metropolitan areas.
                        </p>
                        <div className="bg-card border border-border p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs sm:text-sm text-foreground">
                            <div className="mb-1"><strong className="text-heading-accent">Example:</strong> California has a 7.25% state rate, but local taxes can push the total to 10.5%</div>
                            <div><strong className="text-heading-accent">Impact:</strong> A $100 purchase could have $10.50 in total sales tax</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 break-words">Business Tax Compliance</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Businesses must understand nexus rules, which determine when they're required to collect sales tax in different states. This is especially important for e-commerce businesses.
                        </p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          <li>• Physical presence creates nexus</li>
                          <li>• Economic nexus thresholds vary by state</li>
                          <li>• Remote seller laws affect online businesses</li>
                          <li>• Proper registration and filing are required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sales Tax Calculation Methods */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Sales Tax Calculation Methods
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Forward Calculation (Add Tax)</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Calculate the final price including sales tax: <strong className="text-heading-accent">Final Price = Original Price × (1 + Tax Rate)</strong>
                        </p>
                        <div className="bg-card border border-border p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs text-foreground">
                            <div className="mb-1"><strong className="text-heading-accent">Example:</strong> $100 item with 8.5% tax = $100 × 1.085 = $108.50</div>
                            <div><strong className="text-heading-accent">Tax Amount:</strong> $108.50 - $100 = $8.50</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Reverse Calculation (Remove Tax)</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Calculate the pre-tax price from a total: <strong className="text-heading-accent">Original Price = Total Price ÷ (1 + Tax Rate)</strong>
                        </p>
                        <div className="bg-card border border-border p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs text-foreground">
                            <div className="mb-1"><strong className="text-heading-accent">Example:</strong> $108.50 total with 8.5% tax = $108.50 ÷ 1.085 = $100</div>
                            <div><strong className="text-heading-accent">Tax Amount:</strong> $108.50 - $100 = $8.50</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Tax Rate Calculation</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Calculate the effective tax rate: <strong className="text-heading-accent">Tax Rate = (Tax Amount ÷ Original Price) × 100</strong>
                        </p>
                        <div className="bg-card border border-border p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs text-foreground">
                            <div className="mb-1"><strong className="text-heading-accent">Example:</strong> $8.50 tax on $100 item = ($8.50 ÷ $100) × 100 = 8.5%</div>
                            <div><strong className="text-heading-accent">Verification:</strong> $100 × 0.085 = $8.50 ✓</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Compliance Guide */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Business Compliance Guide
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Understanding Nexus Requirements</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Nexus determines when you must collect sales tax. Physical nexus occurs when you have a physical presence, while economic nexus is based on sales volume or transaction count.
                        </p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          <li>• <strong className="text-heading-accent">Physical Nexus:</strong> Office, warehouse, employees, or inventory in state</li>
                          <li>• <strong className="text-heading-accent">Economic Nexus:</strong> $100K-$500K in sales or 200+ transactions</li>
                          <li>• <strong className="text-heading-accent">Affiliate Nexus:</strong> Related companies with physical presence</li>
                          <li>• <strong className="text-heading-accent">Click-Through Nexus:</strong> Referral agreements with in-state businesses</li>
                        </ul>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Registration and Filing Requirements</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Once you have nexus, you must register, collect tax, and file returns. Requirements vary by state and business type.
                        </p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          <li>• <strong className="text-heading-accent">Registration:</strong> Complete state application and obtain permit</li>
                          <li>• <strong className="text-heading-accent">Collection:</strong> Add tax to taxable sales at point of sale</li>
                          <li>• <strong className="text-heading-accent">Filing:</strong> Submit returns monthly, quarterly, or annually</li>
                          <li>• <strong className="text-heading-accent">Remittance:</strong> Pay collected tax to state by due date</li>
                        </ul>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Record Keeping and Audit Preparation</h3>
                        <p className="text-xs text-foreground mb-2 break-words">
                          Maintain detailed records for compliance and audit purposes. Most states require 3-7 years of records.
                        </p>
                        <ul className="text-xs text-foreground space-y-0.5">
                          <li>• <strong className="text-heading-accent">Sales Records:</strong> Customer info, product details, tax rates</li>
                          <li>• <strong className="text-heading-accent">Exemption Certificates:</strong> Resale certificates, exemption forms</li>
                          <li>• <strong className="text-heading-accent">Filing Records:</strong> Returns, payments, correspondence</li>
                          <li>• <strong className="text-heading-accent">Nexus Documentation:</strong> Physical presence, economic thresholds</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tax Deduction Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <DollarSign className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Sales Tax Deduction
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Federal Income Tax Deduction</h3>
                        <p className="text-xs text-foreground break-words">
                          You can deduct sales tax from federal income tax if you itemize deductions. This is beneficial for taxpayers who made large purchases during the year, such as cars, weddings, or major appliances. Our calculator helps you track these amounts for tax planning.
                        </p>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Record Keeping Requirements</h3>
                        <p className="text-xs text-foreground break-words">
                          The IRS requires detailed records of sales tax paid, including receipts and documentation. This can be tedious but may result in significant tax savings for high-spending taxpayers. Our calculator helps you organize and track these records.
                        </p>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm break-words">Standard vs Itemized Deductions</h3>
                        <p className="text-xs text-foreground break-words">
                          Most taxpayers choose the standard deduction, but those with large purchases may benefit from itemizing to claim sales tax deductions. Compare both options to maximize your tax savings. Our calculator helps you determine which approach is better for your situation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-foreground break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">What's the difference between sales tax and VAT?</h3>
                        <p className="text-xs text-foreground break-words">
                          Sales tax is imposed only on the final consumer at the point of sale, while VAT (Value-Added Tax) is imposed at each stage of production. VAT is used in over 160 countries outside the US. Our calculator helps you understand these differences and calculate accurate tax amounts for US sales tax purposes.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Are online businesses required to collect sales tax from customers?</h3>
                        <p className="text-xs text-foreground break-words">
                          Online business sales tax obligations depend on nexus requirements established in each state. When your business maintains a physical presence or reaches economic nexus thresholds within a particular state, you become legally obligated to collect and remit sales tax for transactions with customers located in that jurisdiction. Our calculator assists in identifying applicable tax rates across various states and clarifying your specific compliance responsibilities.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How often do sales tax rates change?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Sales tax rates can change annually or more frequently. States and local governments may adjust rates during budget cycles, so it's important to stay updated on current rates. Our calculator provides up-to-date tax rate information for all 50 US states.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">Can I deduct sales tax from my federal income tax?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Yes, if you itemize deductions, you can choose to deduct either state income tax or sales tax (but not both). This is beneficial for taxpayers who made large purchases during the year. Our calculator helps you track sales tax amounts for potential deductions.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">What products are exempt from sales tax?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Exemptions vary by state but commonly include prescription medications, food (in some states), educational materials, and certain medical supplies. Check your state's specific exemption list. Our calculator accounts for these exemptions when calculating tax amounts.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I calculate sales tax backwards from a total price?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          To calculate the pre-tax price from a total that includes sales tax, divide the total by (1 + tax rate). For example, if the total is $107.50 and the tax rate is 7.5%, the pre-tax price is $107.50 ÷ 1.075 = $100. Our reverse calculation feature handles this automatically.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">What is economic nexus and how does it affect my business?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Economic nexus means you must collect sales tax in a state if you exceed certain sales thresholds, even without physical presence. Thresholds vary by state (typically $100,000-$500,000 in sales or 200+ transactions). Our calculator helps you understand these requirements and plan accordingly.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I handle sales tax for different product categories?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Different products may have different tax rates or exemptions. Food items, clothing, and medical supplies often have special rules. Our calculator allows you to input custom tax rates for different product categories and provides guidance on common exemptions.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">How do state-level and local jurisdiction sales taxes differ?</h3>
                        <p className="text-xs text-foreground break-words">
                          State sales tax represents a levy imposed by state-level government authorities, whereas local sales tax originates from municipal, county, or regional government bodies. When calculating total tax burden, you combine both rates together—state plus local equals your complete sales tax percentage. Our tool incorporates data from both state and local tax jurisdictions to provide precise combined rate calculations.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I register for sales tax collection in different states?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Registration requirements vary by state. Generally, you need to register with each state's tax authority where you have nexus. This usually involves completing an application, providing business information, and obtaining a sales tax permit. Our calculator helps you understand which states require registration.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">What happens if I don't collect sales tax when required?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Failure to collect required sales tax can result in penalties, interest, and back taxes. States may audit your business and require payment of uncollected taxes plus penalties. It's important to understand your obligations and use tools like our calculator to ensure compliance.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I calculate sales tax for shipping and handling?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Shipping and handling charges are generally taxable if they're mandatory and not separately stated. If shipping is optional or separately stated, it may be exempt. Our calculator helps you determine the correct tax treatment for shipping charges based on state rules.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">What are the most tax-friendly states for online businesses?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          States with no sales tax (Alaska, Delaware, Montana, New Hampshire, Oregon) are most business-friendly. However, you still need to consider where your customers are located. Our calculator helps you compare tax rates across all states to make informed business decisions.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I handle sales tax for digital products and services?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Digital products and services are increasingly subject to sales tax. Rules vary by state, with some taxing all digital products and others having specific exemptions. Our calculator helps you understand the tax treatment of digital products in different states.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">Which documentation must businesses maintain for sales tax compliance?</h3>
                        <p className="text-xs text-foreground break-words">
                          Businesses should maintain comprehensive documentation covering all sales transactions, documenting customer details, product specifications, applicable tax percentages used, and total tax amounts collected. The majority of state regulations mandate retention periods spanning 3 to 7 years for these financial records. Our calculator provides functionality to systematically record and organize this critical compliance data for audit readiness.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I calculate sales tax for bulk purchases or wholesale transactions?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Wholesale transactions may be exempt from sales tax if you have a valid resale certificate. The tax rate still applies to the final retail sale. Our calculator helps you determine the correct tax treatment for different types of transactions and provides guidance on resale certificates.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">What is the difference between sales tax and use tax, and when do I need to pay use tax?</h3>
                        <p className="text-xs text-foreground break-words">
                          Sales tax represents a levy collected by merchants during the transaction process on taxable products and services, whereas use tax addresses purchases completed without sales tax payment, commonly occurring with out-of-state sellers or e-commerce platforms that don't collect tax. Purchasers bear responsibility for self-reporting and remitting use tax directly to their state revenue department. This system maintains tax parity between local and remote transactions. Use tax typically becomes applicable for online orders from non-collecting merchants, interstate purchases, and business acquisitions. Our calculator clarifies use tax applicability scenarios and computes proper amounts using your state's use tax percentage, which usually matches the standard sales tax rate.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I handle sales tax for online sales across multiple states in 2024?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Online sales tax compliance has become increasingly complex since the 2018 Supreme Court decision in South Dakota v. Wayfair, Inc. You may be required to collect sales tax based on economic nexus, which is established when you exceed certain sales thresholds (typically $100,000-$500,000 in sales or 200+ transactions) in a state, even without physical presence. Each state has different thresholds and rules, so it's crucial to monitor your sales in each state and register for sales tax permits where you have nexus. Our calculator helps you determine which states require tax collection based on your sales volume and provides up-to-date nexus thresholds for all 50 states. Consider using automated tax compliance solutions for businesses with significant multi-state sales.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">What are the consequences of not collecting or remitting sales tax properly in 2024?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Failing to collect or remit sales tax correctly can lead to severe consequences including penalties, interest charges, and potential audits. States may impose fines ranging from 10-25% of the unpaid tax amount, plus interest that typically accrues monthly. Non-compliance significantly increases the risk of state audits, which can be costly and time-consuming. Persistent non-compliance can result in legal proceedings, business license revocation, and even criminal charges in extreme cases. To avoid these issues, ensure accurate tax collection using tools like our calculator, maintain detailed records of all transactions, file returns on time, and consider consulting with a tax professional for complex situations. Most states offer voluntary disclosure programs that can reduce penalties for businesses that come forward voluntarily.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I apply for a sales tax permit and what are my ongoing responsibilities?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Most states require businesses to obtain a sales tax permit before collecting sales tax. To apply, visit your state's Department of Revenue website where applications are typically available online. You'll need to provide business information including your Employer Identification Number (EIN), business structure, product/service details, and estimated monthly sales. Some states charge a permit fee ranging from $0-$100. Once registered, your ongoing responsibilities include collecting the appropriate sales tax rate on taxable sales, maintaining detailed records of all transactions, filing periodic returns (monthly, quarterly, or annually based on sales volume), and remitting collected tax by the due date. Our calculator helps you determine the correct tax rates and provides guidance on record-keeping requirements. Failure to comply with these responsibilities can result in permit revocation and legal action.
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-foreground text-xs sm:text-sm">How do I determine which products and services are exempt from sales tax in my state?</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Sales tax exemptions vary significantly by state and can include necessities like groceries, prescription medications, and medical devices; educational materials such as textbooks and school supplies; purchases by qualifying nonprofit organizations; and resale transactions with valid resale certificates. Some states exempt clothing under a certain dollar amount, while others tax all clothing. Food items may be fully exempt, partially exempt (only unprepared food), or fully taxable depending on the state. To claim exemptions, buyers typically need to provide valid exemption certificates to sellers, who must maintain these certificates for audit purposes. Our calculator helps you understand common exemptions and provides guidance on proper documentation. It's essential to check with your state's Department of Revenue for a comprehensive list of current exemptions and required documentation, as exemption rules can change frequently.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm mb-3 sm:mb-4 overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-heading-accent break-words">
                      <div className="p-1 sm:p-1.5 bg-heading-accent-border/10 rounded">
                        <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-heading-accent" />
                      </div>
                      Related Business & Finance Calculators
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { name: "Tax Calculator", desc: "Calculate income tax", href: "/calculator/tax-calculator", icon: DollarSign },
                        { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                        { name: "Investment Calculator", desc: "Calculate investment returns", href: "/calculator/investment-calculator", icon: TrendingUp },
                        { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                        { name: "Loan Calculator", desc: "Calculate loan payments", href: "/calculator/loan-calculator", icon: FileText },
                        { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                        { name: "Percentage Calculator", desc: "Calculate percentages", href: "/calculator/percentage-calculator", icon: Percent },
                        { name: "Tip Calculator", desc: "Calculate tips and gratuity", href: "/finance-tools/tip-calculator", icon: Award },
                        { name: "Discount Calculator", desc: "Calculate discounts and savings", href: "/finance-tools/discount-calculator", icon: PieChart },
                        { name: "Salary Calculator", desc: "Calculate salary and wages", href: "/calculator/salary-calculator", icon: BarChart3 },
                        { name: "Amortization Calculator", desc: "Calculate loan amortization", href: "/calculator/amortization-calculator", icon: Clock },
                        { name: "Compound Interest", desc: "Calculate compound interest", href: "/calculator/compound-interest", icon: Users }
                      ].map(({ name, desc, icon: Icon, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="p-2 sm:p-2.5 bg-card rounded-lg border border-border hover:bg-muted hover:border-border transition-colors group w-full overflow-hidden"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground flex-shrink-0" />
                            <h3 className="font-semibold text-heading-accent text-xs sm:text-sm break-words">{name}</h3>
                          </div>
                          <p className="text-xs text-foreground break-words">{desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="hidden lg:block space-y-6 lg:space-y-8">
                <div className="sticky top-4">
                  {/* Sidebar Ad */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <AdSpace slot="sidebar" className="h-64 md:h-80 rounded-lg overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}