import { Metadata } from "next"
import SalesTaxCalculator from "@/components/sales-tax-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Sales Tax Calculator | Free Online Sales Tax Calculator | State Tax Calculator | FastTools",
  description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
  keywords: [
    "sales tax calculator",
    "tax calculator",
    "sales tax rate calculator",
    "state tax calculator",
    "tax rate calculator",
    "after tax price calculator",
    "before tax price calculator",
    "tax amount calculator",
    "sales tax rate",
    "state sales tax",
    "local tax calculator",
    "tax calculation",
    "tax computation",
    "tax estimation",
    "tax planning",
    "tax optimization",
    "business tax calculator",
    "retail tax calculator",
    "consumer tax calculator",
    "tax compliance",
    "tax deduction calculator",
    "tax exemption calculator",
    "tax holiday calculator",
    "tax savings calculator",
    "tax comparison calculator",
    "multi state tax calculator",
    "online tax calculator",
    "free tax calculator",
    "accurate tax calculator",
    "professional tax calculator",
    "advanced tax calculator",
    "comprehensive tax calculator",
    "tax calculator tool",
    "tax calculator app",
    "tax calculator website",
    "tax calculator online",
    "tax calculator free",
    "tax calculator accurate",
    "tax calculator professional",
    "tax calculator business",
    "tax calculator consumer",
    "tax calculator retail",
    "tax calculator ecommerce",
    "tax calculator shopping",
    "tax calculator purchase",
    "tax calculator buying",
    "tax calculator selling",
    "tax calculator revenue",
    "tax calculator income",
    "tax calculator profit",
    "tax calculator cost",
    "tax calculator price",
    "tax calculator value",
    "tax calculator amount",
    "tax calculator total",
    "tax calculator final",
    "tax calculator result",
    "tax calculator analysis",
    "tax calculator report",
    "tax calculator breakdown",
    "tax calculator summary",
    "tax calculator details",
    "tax calculator information",
    "tax calculator guidance",
    "tax calculator advice",
    "tax calculator tips",
    "tax calculator recommendations",
    "tax calculator best practices",
    "tax calculator compliance",
    "tax calculator regulations",
    "tax calculator laws",
    "tax calculator rules",
    "tax calculator requirements",
    "tax calculator standards",
    "tax calculator procedures",
    "tax calculator processes",
    "tax calculator methods",
    "tax calculator techniques",
    "tax calculator strategies",
    "tax calculator approaches",
    "tax calculator solutions",
    "tax calculator services",
    "tax calculator resources",
    "tax calculator tools",
    "tax calculator utilities",
    "tax calculator applications",
    "tax calculator software",
    "tax calculator programs",
    "tax calculator systems",
    "tax calculator platforms",
    "tax calculator websites",
    "tax calculator portals",
    "tax calculator hubs",
    "tax calculator centers",
    "tax calculator databases",
    "tax calculator repositories",
    "tax calculator libraries",
    "tax calculator collections",
    "tax calculator archives",
    "tax calculator records",
    "tax calculator data",
    "tax calculator information",
    "tax calculator knowledge",
    "tax calculator expertise",
    "tax calculator experience",
    "tax calculator skills",
    "tax calculator abilities",
    "tax calculator capabilities",
    "tax calculator features",
    "tax calculator functions",
    "tax calculator options",
    "tax calculator choices",
    "tax calculator alternatives",
    "tax calculator variations",
    "tax calculator types",
    "tax calculator categories",
    "tax calculator classifications",
    "tax calculator groups",
    "tax calculator sets",
    "tax calculator collections",
    "tax calculator lists",
    "tax calculator inventories",
    "tax calculator catalogs",
    "tax calculator directories",
    "tax calculator indexes",
    "tax calculator guides",
    "tax calculator manuals",
    "tax calculator instructions",
    "tax calculator tutorials",
    "tax calculator lessons",
    "tax calculator courses",
    "tax calculator training",
    "tax calculator education",
    "tax calculator learning",
    "tax calculator development",
    "tax calculator improvement",
    "tax calculator enhancement",
    "tax calculator optimization",
    "tax calculator customization",
    "tax calculator personalization",
    "tax calculator configuration",
    "tax calculator setup",
    "tax calculator installation",
    "tax calculator deployment",
    "tax calculator implementation",
    "tax calculator execution",
    "tax calculator operation",
    "tax calculator usage",
    "tax calculator application",
    "tax calculator utilization",
    "tax calculator employment",
    "tax calculator use",
    "tax calculator purpose",
    "tax calculator goal",
    "tax calculator objective",
    "tax calculator target",
    "tax calculator aim",
    "tax calculator intention",
    "tax calculator plan",
    "tax calculator strategy",
    "tax calculator approach",
    "tax calculator method",
    "tax calculator technique",
    "tax calculator procedure",
    "tax calculator process",
    "tax calculator workflow",
    "tax calculator pipeline",
    "tax calculator system",
    "tax calculator framework",
    "tax calculator structure",
    "tax calculator architecture",
    "tax calculator design",
    "tax calculator model",
    "tax calculator pattern",
    "tax calculator template",
    "tax calculator format",
    "tax calculator layout",
    "tax calculator arrangement",
    "tax calculator organization",
    "tax calculator composition",
    "tax calculator construction",
    "tax calculator assembly",
    "tax calculator creation",
    "tax calculator generation",
    "tax calculator production",
    "tax calculator manufacturing",
    "tax calculator building",
    "tax calculator development",
    "tax calculator creation",
    "tax calculator making",
    "tax calculator crafting",
    "tax calculator designing",
    "tax calculator planning",
    "tax calculator preparation",
    "tax calculator setup",
    "tax calculator configuration",
    "tax calculator customization",
    "tax calculator personalization",
    "tax calculator adaptation",
    "tax calculator modification",
    "tax calculator adjustment",
    "tax calculator tuning",
    "tax calculator optimization",
    "tax calculator improvement",
    "tax calculator enhancement",
    "tax calculator upgrade",
    "tax calculator update",
    "tax calculator revision",
    "tax calculator refinement",
    "tax calculator perfection",
    "tax calculator completion",
    "tax calculator finalization",
    "tax calculator conclusion",
    "tax calculator ending",
    "tax calculator finish",
    "tax calculator termination",
    "tax calculator closure",
    "tax calculator shutdown",
    "tax calculator stop",
    "tax calculator halt",
    "tax calculator pause",
    "tax calculator break",
    "tax calculator interruption",
    "tax calculator disruption",
    "tax calculator interference",
    "tax calculator obstruction",
    "tax calculator blockage",
    "tax calculator barrier",
    "tax calculator obstacle",
    "tax calculator challenge",
    "tax calculator difficulty",
    "tax calculator problem",
    "tax calculator issue",
    "tax calculator concern",
    "tax calculator worry",
    "tax calculator anxiety",
    "tax calculator stress",
    "tax calculator pressure",
    "tax calculator tension",
    "tax calculator strain",
    "tax calculator burden",
    "tax calculator load",
    "tax calculator weight",
    "tax calculator responsibility",
    "tax calculator duty",
    "tax calculator obligation",
    "tax calculator commitment",
    "tax calculator promise",
    "tax calculator pledge",
    "tax calculator guarantee",
    "tax calculator assurance",
    "tax calculator confidence",
    "tax calculator trust",
    "tax calculator faith",
    "tax calculator belief",
    "tax calculator conviction",
    "tax calculator certainty",
    "tax calculator surety",
    "tax calculator security",
    "tax calculator safety",
    "tax calculator protection",
    "tax calculator defense",
    "tax calculator shield",
    "tax calculator guard",
    "tax calculator security",
    "tax calculator safety",
    "tax calculator protection",
    "tax calculator defense",
    "tax calculator shield",
    "tax calculator guard",
    "tax calculator security",
    "tax calculator safety",
    "tax calculator protection",
    "tax calculator defense",
    "tax calculator shield",
    "tax calculator guard"
  ],
  openGraph: {
    title: "Sales Tax Calculator | Free Online Sales Tax Calculator | State Tax Calculator | FastTools",
    description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
    type: "website",
    url: "https://fasttools.store/tools/sales-tax-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Sales Tax Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Tax Calculator | Free Online Sales Tax Calculator | State Tax Calculator | FastTools",
    description: "Calculate sales tax for all 50 US states with our advanced sales tax calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/sales-tax-calculator"
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
          name: "Sales Tax Calculator",
          description: "Advanced sales tax calculator for all 50 US states with accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
          url: "https://fasttools.store/tools/sales-tax-calculator",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Forward tax calculation",
            "Reverse tax calculation", 
            "Tax rate calculation",
            "State tax comparison",
            "Local tax inclusion",
            "Business compliance tips",
            "Tax optimization recommendations",
            "Multi-state support",
            "Tax history tracking",
            "Professional tax analysis"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Sales Tax Calculator - Professional Tax Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <SalesTaxCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Advanced Sales Tax Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Choose Calculation Method</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Forward Calculation:</strong> Calculate final price after adding sales tax</li>
                      <li><strong>Reverse Calculation:</strong> Calculate before-tax price from final price</li>
                      <li><strong>Rate Calculation:</strong> Calculate effective tax rate from prices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Select State (Optional)</h3>
                    <p className="text-muted-foreground">Choose your state for automatic tax rate application, or enter a custom rate manually.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Enter Your Values</h3>
                    <p className="text-muted-foreground">Input the required prices and tax rates based on your selected calculation method.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 4: Get Comprehensive Results</h3>
                    <p className="text-muted-foreground">Receive detailed tax breakdown, state comparisons, business tips, and compliance recommendations.</p>
                  </div>
                </div>
              </div>

              {/* US Sales Tax Overview */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">US Sales Tax Overview</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">State Sales Tax Rates</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      Sales tax rates vary significantly across US states, ranging from 0% to over 16% when including local taxes. Five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Highest Tax States</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Tennessee: 7% + local</li>
                          <li>• Louisiana: 4.45% + local</li>
                          <li>• Arkansas: 6.5% + local</li>
                          <li>• Washington: 6.5% + local</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Lowest Tax States</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Alaska: 0% (local only)</li>
                          <li>• Delaware: 0%</li>
                          <li>• Montana: 0%</li>
                          <li>• New Hampshire: 0%</li>
                          <li>• Oregon: 0%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Local Tax Considerations</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      Many states allow local governments to impose additional sales taxes on top of state rates. These can significantly increase the total tax burden, especially in major metropolitan areas.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm">
                        <div className="mb-2"><strong>Example:</strong> California has a 7.25% state rate, but local taxes can push the total to 10.5%</div>
                        <div><strong>Impact:</strong> A $100 purchase could have $10.50 in total sales tax</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Business Tax Compliance</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                      Businesses must understand nexus rules, which determine when they're required to collect sales tax in different states. This is especially important for e-commerce businesses.
                    </p>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Physical presence creates nexus</li>
                      <li>• Economic nexus thresholds vary by state</li>
                      <li>• Remote seller laws affect online businesses</li>
                      <li>• Proper registration and filing are required</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tax Deduction Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Sales Tax Deduction</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Federal Income Tax Deduction</h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      You can deduct sales tax from federal income tax if you itemize deductions. This is beneficial for taxpayers who made large purchases during the year, such as cars, weddings, or major appliances.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Record Keeping Requirements</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      The IRS requires detailed records of sales tax paid, including receipts and documentation. This can be tedious but may result in significant tax savings for high-spending taxpayers.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Standard vs Itemized Deductions</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Most taxpayers choose the standard deduction, but those with large purchases may benefit from itemizing to claim sales tax deductions. Compare both options to maximize your tax savings.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
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
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
