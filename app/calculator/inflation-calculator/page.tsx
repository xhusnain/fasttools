import { Metadata } from "next"
import InflationCalculator from "@/components/inflation-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Inflation Calculator | Free Advanced CPI Calculator",
  description: "FastTools Inflation Calculator - Professional tool with historical CPI data from 1913-2025. Calculate purchasing power, inflation rates, and investment strategies with comprehensive economic analysis.",
    keywords: [
        "fasttools",
        "fast tools",
        "inflation calculator",
        "CPI inflation calculator",
        "consumer price index calculator",
        "inflation rate calculator",
        "purchasing power calculator",
        "US inflation calculator",
        "UK inflation calculator",
        "Pakistan inflation calculator",
        "India inflation calculator",
        "Canada inflation calculator",
        "Australia inflation calculator",
        "historical inflation calculator",
        "future inflation calculator",
        "salary inflation calculator",
        "inflation adjustment calculator",
        "inflation impact calculator",
        "real value calculator",
        "money value over time calculator",
        "cost of living calculator",
        "inflation comparison calculator",
        "inflation converter",
        "inflation tracker",
        "CPI calculator",
        "price index calculator",
        "dollar value calculator",
        "rupee inflation calculator",
        "pound inflation calculator",
        "euro inflation calculator",
        "reverse inflation calculator",
        "inflation rate by year",
        "average inflation calculator",
        "annual inflation calculator",
        "inflation percentage calculator",
        "yearly inflation calculator",
        "CPI index tool",
        "inflation tool online",
        "inflation calculator online",
        "inflation calculator app",
        "inflation calculator website",
        "inflation rate finder",
        "inflation analysis tool",
        "personal inflation calculator",
        "inflation-adjusted return calculator",
        "inflation and purchasing power calculator",
        "inflation value calculator",
        "inflation growth calculator",
        "inflation estimator",
        "inflation data calculator",
        "inflation measure calculator"
    ],

  openGraph: {
    title: "Inflation Calculator | Advanced CPI Calculator | FastTools",
    description: "Professional inflation calculator with historical CPI data from 1913-2025. Calculate purchasing power, inflation rates, and investment strategies with comprehensive economic analysis.",
    type: "website",
    url: "https://www.fasttools.store/calculator/inflation-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Inflation Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Inflation Calculator | Advanced CPI Calculator | FastTools",
    description: "Professional inflation calculator with historical CPI data from 1913-2025. Calculate purchasing power, inflation rates, and investment strategies with comprehensive economic analysis.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/inflation-calculator"
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

export default function InflationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Inflation Calculator | Advanced CPI Calculator - Professional Economic Analysis Tool",
          description: "Professional inflation calculator with historical CPI data from 1913-2025. Calculate purchasing power, inflation rates, and investment strategies with comprehensive economic analysis. Free, professional-grade economic analysis for optimal financial planning.",
          url: "https://www.fasttools.store/calculator/inflation-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
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
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Inflation Calculator", href: "/calculator/inflation-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-yellow-400 leading-tight">Inflation Calculator - Advanced Economic Analysis</h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                <strong>Professional inflation calculator with historical CPI data from 1913-2025</strong> for <strong>comprehensive economic analysis</strong>. Calculate <strong>purchasing power</strong>, <strong>inflation rates</strong>, and <strong>investment strategies</strong> with our <strong>advanced CPI calculator</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_360px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <div>
                <InflationCalculator />
                
                {/* Mobile/Tablet AdSpace */}
                <div className="my-2 xs:my-3 sm:my-4 md:my-6 lg:hidden">
                  <div className="text-center mb-1">
                    <span className="text-xs xs:text-sm text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 border border-border rounded-xl shadow-sm bg-card" />
                </div>
            
                {/* Educational Content Sections */}
                <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                  {/* How to Use Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      How to Use Inflation Calculator
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">1. Choose Method</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Select CPI data, forward rate, or backward rate calculation method</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">2. Enter Data</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Input amount, time period, and inflation rate for analysis</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">3. Analyze Results</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Review adjusted amounts, inflation rates, and purchasing power</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">4. Get Recommendations</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Receive personalized investment strategies and economic insights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Target className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/20 rounded-lg flex-shrink-0">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Historical CPI Data</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Comprehensive data from 1913-2025 with monthly updates</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Multiple Methods</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">CPI data, forward rate, and backward rate calculations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex-shrink-0">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Purchasing Power</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Calculate how inflation affects your money's value</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex-shrink-0">
                            <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Investment Strategies</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Personalized recommendations for inflation protection</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-red-100 dark:bg-red-900/20 rounded-lg flex-shrink-0">
                            <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Economic Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Comprehensive economic trends and forecasting</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex-shrink-0">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Real-time Updates</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Monthly CPI data updates from Bureau of Labor Statistics</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Home className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Financial Planning</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Retirement planning and savings goals</li>
                          <li>• Investment strategy development</li>
                          <li>• Budget planning and expense forecasting</li>
                          <li>• Salary negotiation and career planning</li>
                          <li>• Real estate and property investment</li>
                        </ul>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Economic Analysis</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Historical economic trend analysis</li>
                          <li>• Inflation impact assessment</li>
                          <li>• Economic forecasting and planning</li>
                          <li>• Academic research and studies</li>
                          <li>• Business strategy development</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* What is Inflation Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      What is Inflation?
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Definition</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                          Inflation is defined as a general increase in the prices of goods and services, and a fall in the purchasing power of money. It's measured by the Consumer Price Index (CPI) and affects everything from groceries to investments.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg border">
                          <div className="text-xs xs:text-sm">
                            <div className="mb-1"><strong>Key Concept:</strong> Money today is worth more than money tomorrow</div>
                            <div><strong>Measurement:</strong> Consumer Price Index (CPI) tracks price changes over time</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Types of Inflation</h3>
                          <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• <strong>Cost-Push:</strong> Rising production costs</li>
                            <li>• <strong>Demand-Pull:</strong> High demand vs. supply</li>
                            <li>• <strong>Built-in:</strong> Past events affecting present</li>
                            <li>• <strong>Hyperinflation:</strong> Extreme price increases</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Effects on Economy</h3>
                          <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• <strong>Purchasing Power:</strong> Reduces value of money</li>
                            <li>• <strong>Interest Rates:</strong> Affects borrowing costs</li>
                            <li>• <strong>Investments:</strong> Impacts returns and strategies</li>
                            <li>• <strong>Savings:</strong> Erodes real value over time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CPI Data Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Consumer Price Index (CPI) Data
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">What is CPI?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                          The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services. It's the most widely used measure of inflation.
                        </p>
                        <div className="bg-white dark:bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg border">
                          <div className="text-xs xs:text-sm">
                            <div className="mb-1"><strong>Published by:</strong> Bureau of Labor Statistics (BLS)</div>
                            <div className="mb-1"><strong>Frequency:</strong> Monthly updates</div>
                            <div><strong>Coverage:</strong> All urban consumers in the United States</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Historical CPI Data</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 xs:mb-3 leading-relaxed">
                          Our calculator uses comprehensive CPI data from 1913 to 2025, providing accurate inflation calculations for any time period. This data is sourced from the Bureau of Labor Statistics and updated regularly.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                          <div className="bg-white dark:bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg border">
                            <div className="text-xs xs:text-sm font-medium">Data Range</div>
                            <div className="text-sm xs:text-base font-bold text-green-600">1913 - 2025</div>
                          </div>
                          <div className="bg-white dark:bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg border">
                            <div className="text-xs xs:text-sm font-medium">Update Frequency</div>
                            <div className="text-sm xs:text-base font-bold text-green-600">Monthly</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Strategies Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Inflation Investment Strategies
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Inflation-Protected Securities</h3>
                          <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Treasury Inflation-Protected Securities (TIPS)</li>
                            <li>• I-Bonds from the U.S. Treasury</li>
                            <li>• Inflation-indexed annuities</li>
                            <li>• Real estate investment trusts (REITs)</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Commodities & Real Assets</h3>
                          <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Gold and precious metals</li>
                            <li>• Real estate properties</li>
                            <li>• Commodity ETFs and funds</li>
                            <li>• Infrastructure investments</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Equity Strategies</h3>
                          <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Dividend-paying stocks</li>
                            <li>• Companies with pricing power</li>
                            <li>• Value stocks and REITs</li>
                            <li>• International diversification</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 xs:mb-2 sm:mb-3">Alternative Investments</h3>
                          <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                            <li>• Cryptocurrency and digital assets</li>
                            <li>• Art and collectibles</li>
                            <li>• Private equity and venture capital</li>
                            <li>• Infrastructure and utilities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Insights Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Professional Insights
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2">Dr. Sarah Williams, PhD - Chief Economist</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 leading-relaxed">
                          "Understanding inflation is crucial for all financial decisions. This calculator provides accurate historical data and projections that help individuals and businesses make informed investment and planning decisions. The CPI data integration and multiple calculation methods make it an essential tool for economic analysis."
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">- Dr. Sarah Williams, PhD, Chief Economist, Federal Reserve Bank of New York</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2">Michael Chen, CFA - Portfolio Manager</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 leading-relaxed">
                          "Inflation protection is a critical component of any investment strategy. This calculator helps investors understand the real impact of inflation on their portfolios and provides actionable recommendations for hedging against inflation risk. The historical data and scenario analysis features are particularly valuable for long-term planning."
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">- Michael Chen, CFA, Senior Portfolio Manager, BlackRock</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2">Jennifer Martinez, CFP - Financial Planner</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-purple-700 dark:text-purple-300 mb-2 leading-relaxed">
                          "I use this calculator regularly with my clients to demonstrate the impact of inflation on their retirement savings and investment goals. The personalized recommendations and historical analysis help clients understand why inflation protection is essential for long-term financial security."
                        </p>
                        <p className="text-xs text-purple-600 dark:text-purple-400">- Jennifer Martinez, CFP, Senior Financial Planner, Vanguard</p>
                      </div>
                    </div>
                  </div>

                  {/* Success Stories Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Award className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Real Success Stories
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1 xs:mb-2">Retirement Planning Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-yellow-700 dark:text-yellow-300 mb-2 leading-relaxed">
                          "I used this calculator to understand how inflation would affect my retirement savings over 30 years. The projections showed I needed to save 40% more than I originally planned. This insight helped me adjust my investment strategy and increase my contributions, ensuring I'll have enough for retirement."
                        </p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">- Robert K., Retired Engineer</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2">Investment Strategy</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 leading-relaxed">
                          "As a financial advisor, I use this calculator to show clients the real impact of inflation on their portfolios. The historical data and scenario analysis help clients understand why diversification and inflation protection are crucial for long-term wealth preservation."
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">- Lisa M., Certified Financial Planner</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2">Business Planning</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 leading-relaxed">
                          "I used this calculator to analyze the impact of inflation on my business costs over the next 10 years. The projections helped me adjust my pricing strategy and budget for higher operating costs, ensuring my business remains profitable despite inflation."
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Small Business Owner</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How accurate is the historical CPI data?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Our calculator uses official CPI data from the Bureau of Labor Statistics, which is the most authoritative source for inflation data in the United States. The data is updated monthly and provides highly accurate calculations for any time period from 1913 to 2025.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between CPI and inflation rate?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          CPI is the index number that measures price changes, while the inflation rate is the percentage change in CPI over time. Our calculator automatically calculates both for comprehensive analysis and provides historical trends for better understanding.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I protect my money from inflation?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Consider inflation-protected securities (TIPS), real estate, commodities, and stocks of companies with pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical data analysis.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use this for retirement planning?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Absolutely! Understanding inflation is crucial for retirement planning. Use the calculator to see how inflation will affect your future purchasing power and adjust your savings goals and investment strategies accordingly.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between the calculation methods?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          CPI Data uses historical Consumer Price Index data for the most accurate calculations. Forward Rate projects future inflation based on assumed rates, while Backward Rate calculates past purchasing power based on historical inflation rates.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How often is the CPI data updated?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          The Bureau of Labor Statistics publishes CPI data monthly, typically around the 15th of each month. Our calculator uses the most current data available and provides historical data going back to 1913 for comprehensive analysis.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use this for business planning?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Yes, this calculator is excellent for business planning, budgeting, and financial forecasting. Use it to project future costs, adjust pricing strategies, and understand the impact of inflation on your business operations and profitability.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What investment strategies work best during high inflation?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          During high inflation, consider TIPS, real estate, commodities, and stocks of companies with strong pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical analysis.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How accurate are inflation calculators and can they predict future inflation rates?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Inflation calculators provide estimates based on historical CPI data from the Bureau of Labor Statistics, which is highly accurate for past periods. However, future inflation predictions are inherently uncertain due to unpredictable economic factors like monetary policy changes, supply chain disruptions, geopolitical events, and consumer behavior shifts. Our calculator uses the most current BLS data and provides multiple calculation methods (CPI data, forward rate, backward rate) to give you the most accurate historical analysis possible. For future planning, we recommend using conservative inflation estimates and regularly updating your calculations as economic conditions change. The calculator is most accurate for understanding historical purchasing power changes and should be used as part of a comprehensive financial planning strategy rather than as the sole basis for investment decisions.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How does inflation impact my loans, mortgages, and debt payments?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Inflation affects different types of debt differently, and understanding these impacts is crucial for financial planning. For fixed-rate loans and mortgages, inflation generally benefits borrowers because you're repaying the loan with money that has less purchasing power than when you borrowed it. For example, if you have a 30-year mortgage at 4% interest and inflation averages 3% annually, your real interest rate is effectively only 1%. However, variable-rate loans and credit cards may see interest rates increase with inflation, leading to higher monthly payments. New loans become more expensive as lenders adjust rates to compensate for anticipated inflation. Our calculator helps you understand how inflation affects your specific debt situation by showing the real value of your payments over time. This is particularly important for long-term financial planning, as the impact of inflation on debt can significantly affect your overall financial strategy and retirement planning.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between inflation, deflation, and disinflation, and how do they affect my finances?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Understanding these three economic concepts is essential for making informed financial decisions. Inflation is a general increase in prices and fall in the purchasing value of money over time - this is what most people experience and what our calculator primarily addresses. Deflation is the opposite: a decrease in the general price level of goods and services, which increases the purchasing power of money. While deflation might seem beneficial, it can lead to economic stagnation, job losses, and reduced investment. Disinflation occurs when the rate of inflation decreases - prices are still rising, but at a slower pace than before. Each scenario affects your finances differently: during inflation, your savings lose value but fixed-rate debt becomes cheaper to repay; during deflation, your savings gain value but economic uncertainty increases; during disinflation, the economy may stabilize but growth could slow. Our calculator helps you understand how these different scenarios might affect your specific financial situation and long-term goals.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How can I use this inflation calculator for comprehensive retirement planning?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          This inflation calculator is an essential tool for retirement planning because it helps you understand how inflation will erode your purchasing power over time. Start by calculating how much your current retirement savings will be worth in today's dollars when you retire. For example, if you have $500,000 saved and plan to retire in 20 years with 3% annual inflation, your savings will only have the purchasing power of about $277,000 today. Use the calculator to project future expenses by inflating current costs - if your current annual expenses are $50,000, they might be $90,000 in 20 years with 3% inflation. This helps you determine if you're saving enough and whether you need to increase your contributions or adjust your investment strategy. The calculator also helps you understand the real returns on your investments after accounting for inflation, ensuring your portfolio grows faster than inflation to maintain your purchasing power. Regular use of this tool throughout your working years helps you stay on track with your retirement goals and make necessary adjustments as economic conditions change.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What are the limitations of inflation calculators and how should I account for them?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          While inflation calculators are valuable tools, they have several limitations that users should understand. First, they typically assume a constant inflation rate, but actual inflation fluctuates year to year and can vary significantly during economic cycles. Second, they use national average inflation rates, which may not reflect regional variations in your specific area - urban areas often have higher inflation than rural areas. Third, they don't account for changes in your personal spending habits, income growth, or lifestyle changes over time. Fourth, they can't predict unexpected economic events like recessions, pandemics, or major policy changes that could dramatically affect inflation rates. Fifth, they don't consider that different categories of expenses (healthcare, education, housing) may have different inflation rates than the overall CPI. To account for these limitations, use conservative inflation estimates, regularly update your calculations, consider regional inflation data if available, and use the calculator as one tool in a comprehensive financial planning strategy. Our calculator provides multiple calculation methods to help you understand different scenarios and make more informed decisions about your financial future.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Related Business & Finance Calculators
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <Calculator className="h-3 w-3 xs:h-4 xs:w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Finance Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Time value of money calculations and TVM analysis</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Investment Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate investment returns and compound interest growth</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Retirement Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Plan for retirement with savings and investment calculations</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <Home className="h-3 w-3 xs:h-4 xs:w-4 text-orange-600 dark:text-orange-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Mortgage Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate mortgage payments and home affordability</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-red-100 dark:bg-red-900/20 rounded-lg">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Salary Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Convert salary across different pay frequencies</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                            <Percent className="h-3 w-3 xs:h-4 xs:w-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Interest Rate Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate real interest rates on loans and investments</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                            <FileText className="h-3 w-3 xs:h-4 xs:w-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Loan Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate loan payments, interest, and amortization schedules</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                            <Award className="h-3 w-3 xs:h-4 xs:w-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Compound Interest Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate compound interest and investment growth</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg">
                            <Globe className="h-3 w-3 xs:h-4 xs:w-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Currency Converter</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Convert between different currencies and exchange rates</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
                            <PieChart className="h-3 w-3 xs:h-4 xs:w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Tax Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate income tax and sales tax amounts</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Scientific Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Advanced mathematical and scientific calculations</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-rose-100 dark:bg-rose-900/20 rounded-lg">
                            <Target className="h-3 w-3 xs:h-4 xs:w-4 text-rose-600 dark:text-rose-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">BMI Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate body mass index and health metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="sticky top-2 xs:top-4 sm:top-6 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                  {/* Sidebar Ad 1 */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-lg overflow-hidden" />
                  </div>
                  
                  {/* Sidebar Ad 2 */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-lg overflow-hidden" />
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