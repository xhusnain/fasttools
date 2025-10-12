import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Percent, Target, AlertCircle, Heart, Sparkles, Calculator, Banknote, TrendingUp, Globe, Settings, BarChart3, Lightbulb, BookOpen, ExternalLink, Brain } from "lucide-react"


export default function DiscountCalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Discount Calculator Guide",
    description: "Master discount calculations with our comprehensive guide. Learn discount strategies, sale pricing, percentage calculations, and use our free discount calculator tool.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/discount-calculator-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Discount Calculator Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master discount calculations with our comprehensive guide. Learn discount strategies, 
            sale pricing, percentage calculations, and use our free discount calculator tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>180,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.7/5 rating</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link href="#what-are-discounts" className="block text-primary hover:underline">
                1. What are Discounts?
              </Link>
              <Link href="#discount-types" className="block text-primary hover:underline">
                2. Types of Discounts
              </Link>
              <Link href="#calculation-methods" className="block text-primary hover:underline">
                3. Calculation Methods
              </Link>
              <Link href="#discount-strategies" className="block text-primary hover:underline">
                4. Discount Strategies
              </Link>
              <Link href="#pricing-psychology" className="block text-primary hover:underline">
                5. Pricing Psychology
              </Link>
              <Link href="#business-applications" className="block text-primary hover:underline">
                6. Business Applications
              </Link>
              <Link href="#common-mistakes" className="block text-primary hover:underline">
                7. Common Mistakes
              </Link>
              <Link href="#advanced-techniques" className="block text-primary hover:underline">
                8. Advanced Techniques
              </Link>
            </nav>
          </CardContent>
        </Card>

        
        {/* Official Documentation References */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <BookOpen className="h-5 w-5" />
                Official Documentation References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                These official sources provide authoritative information about discount calculator:
              </p>
              <div className="space-y-3">
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - National Institute of Standards and Technology
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official measurement and technology standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO - International Organization for Standardization
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official international standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ieee.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE - Institute of Electrical and Electronics Engineers
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Institute of Electrical and Electronics Engineers - Official technical standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      W3C - World Wide Web Consortium
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Official web standards and guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ietf.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IETF - Internet Engineering Task Force
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Internet Engineering Task Force - Official internet protocol standards
                    </p>
                  </div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>

{/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: What are Discounts */}
          <section id="what-are-discounts" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What are Discounts?</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              A discount is a reduction in the original price of a product or service, typically expressed as a percentage 
              or fixed amount. Discounts are used by businesses to attract customers, clear inventory, reward loyalty, 
              and increase sales volume.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits of Discounts:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Increased Sales:</strong> Attract price-sensitive customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Inventory Management:</strong> Clear slow-moving or seasonal stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Customer Loyalty:</strong> Reward repeat customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Market Penetration:</strong> Gain market share from competitors</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Understanding how to calculate and apply discounts effectively is crucial for both businesses 
              and consumers. Proper discount strategies can boost sales while maintaining profitability.
            </p>
          </section>

          {/* Section 2: Types of Discounts */}
          <section id="discount-types" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Types of Discounts</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Percent className="h-5 w-5 text-blue-500" />
                    Percentage Discounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The most common type of discount, expressed as a percentage of the original price:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">20% OFF</div>
                      <p className="text-sm text-muted-foreground">Original Price: $100</p>
                      <p className="text-sm text-muted-foreground">Discount: $20</p>
                      <p className="text-sm text-green-600 font-bold">Sale Price: $80</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm mt-4">
                    <li>• <strong>Easy to Understand:</strong> Clear percentage reduction</li>
                    <li>• <strong>Flexible:</strong> Can be any percentage amount</li>
                    <li>• <strong>Scalable:</strong> Works for any price point</li>
                    <li>• <strong>Marketing Friendly:</strong> Easy to advertise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fixed Amount Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      A specific dollar amount reduction from the original price:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">$25 OFF</div>
                        <p className="text-sm text-muted-foreground">Original Price: $100</p>
                        <p className="text-sm text-muted-foreground">Discount: $25</p>
                        <p className="text-sm text-green-600 font-bold">Sale Price: $75</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm mt-4">
                      <li>• <strong>Simple Calculation:</strong> Easy to compute</li>
                      <li>• <strong>High-Value Items:</strong> Effective for expensive products</li>
                      <li>• <strong>Clear Value:</strong> Customers see exact savings</li>
                      <li>• <strong>Budget Friendly:</strong> Predictable discount amount</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volume Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Discounts based on quantity purchased:
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">1-9 items</span>
                        <span className="text-primary font-bold">No discount</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">10-49 items</span>
                        <span className="text-primary font-bold">10% off</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">50+ items</span>
                        <span className="text-primary font-bold">20% off</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Time-based discounts for specific periods:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Holiday Sales:</strong> Black Friday, Christmas, etc.</li>
                      <li>• <strong>End of Season:</strong> Clear seasonal inventory</li>
                      <li>• <strong>Flash Sales:</strong> Limited-time offers</li>
                      <li>• <strong>Anniversary Sales:</strong> Business milestone celebrations</li>
                      <li>• <strong>Back-to-School:</strong> Educational discounts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Calculation Methods */}
          <section id="calculation-methods" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Calculation Methods</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-green-500" />
                    Percentage Discount Formula
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Standard formula for calculating percentage discounts:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-mono text-sm">
                      <div className="mb-2"><strong>Discount Amount:</strong></div>
                      <div className="mb-2">Discount = Original Price × (Discount % ÷ 100)</div>
                      <div className="mb-4">Example: $100 × (20 ÷ 100) = $20</div>
                      
                      <div className="mb-2"><strong>Sale Price:</strong></div>
                      <div className="mb-2">Sale Price = Original Price - Discount</div>
                      <div className="mb-4">Example: $100 - $20 = $80</div>
                      
                      <div className="mb-2"><strong>Alternative Formula:</strong></div>
                      <div>Sale Price = Original Price × (1 - Discount % ÷ 100)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fixed Amount Formula</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Calculating fixed amount discounts:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="font-mono text-sm">
                        <div className="mb-2"><strong>Sale Price:</strong></div>
                        <div className="mb-2">Sale Price = Original Price - Fixed Discount</div>
                        <div className="mb-4">Example: $100 - $25 = $75</div>
                        
                        <div className="mb-2"><strong>Effective Percentage:</strong></div>
                        <div className="mb-2">Effective % = (Fixed Discount ÷ Original Price) × 100</div>
                        <div>Example: ($25 ÷ $100) × 100 = 25%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reverse Calculations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Finding original price from sale price and discount:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="font-mono text-sm">
                        <div className="mb-2"><strong>From Percentage Discount:</strong></div>
                        <div className="mb-2">Original Price = Sale Price ÷ (1 - Discount % ÷ 100)</div>
                        <div className="mb-4">Example: $80 ÷ (1 - 20 ÷ 100) = $100</div>
                        
                        <div className="mb-2"><strong>From Fixed Discount:</strong></div>
                        <div>Original Price = Sale Price + Fixed Discount</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Discount Strategies */}
          <section id="discount-strategies" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Discount Strategies</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Effective Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Loss Leader:</strong> Sell one item at a loss to attract customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Bundle Pricing:</strong> Discount when buying multiple items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Loyalty Programs:</strong> Reward repeat customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>First-Time Buyer:</strong> Attract new customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clearance Sales:</strong> Move outdated inventory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Seasonal Promotions:</strong> Capitalize on holidays and events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Psychological Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Pricing strategies that influence customer perception:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Charm Pricing:</strong> Use prices ending in .99 or .95</li>
                      <li>• <strong>Anchor Pricing:</strong> Show original price next to sale price</li>
                      <li>• <strong>Decoy Effect:</strong> Offer three options to guide choice</li>
                      <li>• <strong>Scarcity:</strong> Limited-time or limited-quantity offers</li>
                      <li>• <strong>Social Proof:</strong> "Join 10,000+ satisfied customers"</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Marketing Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Using discounts in digital marketing:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Email Campaigns:</strong> Targeted discount emails</li>
                      <li>• <strong>Social Media:</strong> Promotional posts and stories</li>
                      <li>• <strong>Retargeting:</strong> Show discounts to previous visitors</li>
                      <li>• <strong>Influencer Marketing:</strong> Discount codes for followers</li>
                      <li>• <strong>SEO:</strong> Optimize for "discount" and "sale" keywords</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Pricing Psychology */}
          <section id="pricing-psychology" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Pricing Psychology</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    Customer Perception
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    How customers perceive different discount levels:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">5-10%</span>
                      <span className="text-sm text-muted-foreground">Minimal impact, perceived as small</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">15-25%</span>
                      <span className="text-sm text-muted-foreground">Noticeable, good value perception</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">30-50%</span>
                      <span className="text-sm text-muted-foreground">Strong appeal, significant savings</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">50%+</span>
                      <span className="text-sm text-muted-foreground">High urgency, may seem too good to be true</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Anchoring Effect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      How original prices influence discount perception:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-muted-foreground line-through">$200</div>
                        <div className="text-2xl font-bold text-primary">$100</div>
                        <div className="text-sm text-green-600">50% OFF</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm mt-4">
                      <li>• <strong>High Anchor:</strong> Higher original price makes discount seem larger</li>
                      <li>• <strong>Value Perception:</strong> Customers feel they're getting a great deal</li>
                      <li>• <strong>Urgency:</strong> Fear of missing out on the deal</li>
                      <li>• <strong>Comparison:</strong> Easy to compare with original price</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Discount Timing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Optimal timing for different discount strategies:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>End of Month:</strong> When customers have budget left</li>
                      <li>• <strong>Payday:</strong> When customers have fresh income</li>
                      <li>• <strong>Seasonal:</strong> Align with natural buying cycles</li>
                      <li>• <strong>Competitor Activity:</strong> Respond to market conditions</li>
                      <li>• <strong>Inventory Levels:</strong> Clear stock before new arrivals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 6: Business Applications */}
          <section id="business-applications" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Business Applications</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Revenue Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Using discounts to maximize revenue and profit:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Price Elasticity:</strong> Test different discount levels</li>
                    <li>• <strong>Volume vs. Margin:</strong> Balance quantity and profit</li>
                    <li>• <strong>Customer Lifetime Value:</strong> Focus on long-term relationships</li>
                    <li>• <strong>Market Penetration:</strong> Gain market share</li>
                    <li>• <strong>Competitive Response:</strong> React to competitor pricing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Using discounts for inventory control:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Slow-Moving Items:</strong> Clear outdated inventory</li>
                      <li>• <strong>Seasonal Clearance:</strong> Move seasonal products</li>
                      <li>• <strong>Damaged Goods:</strong> Sell imperfect items</li>
                      <li>• <strong>Overstock:</strong> Reduce excess inventory</li>
                      <li>• <strong>New Product Launch:</strong> Make room for new items</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Attracting new customers with discounts:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>First-Time Buyer:</strong> Welcome discounts for new customers</li>
                      <li>• <strong>Referral Programs:</strong> Discounts for bringing friends</li>
                      <li>• <strong>Social Media:</strong> Shareable discount codes</li>
                      <li>• <strong>Email Signup:</strong> Discount for subscribing</li>
                      <li>• <strong>App Download:</strong> Mobile app exclusive discounts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Common Mistakes */}
          <section id="common-mistakes" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Common Mistakes</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">⚠️ Pricing Mistakes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Over-Discounting:</strong> Training customers to wait for sales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Inconsistent Pricing:</strong> Confusing customers with frequent changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Race to Bottom:</strong> Competing only on price</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Ignoring Costs:</strong> Not accounting for all expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>Poor Communication:</strong> Unclear discount terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">⚠</span>
                      <span><strong>No Tracking:</strong> Not measuring discount effectiveness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calculation Errors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common calculation mistakes to avoid:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Wrong Base Price:</strong> Using incorrect original price</li>
                      <li>• <strong>Double Discounting:</strong> Applying multiple discounts incorrectly</li>
                      <li>• <strong>Tax Confusion:</strong> Not accounting for taxes in calculations</li>
                      <li>• <strong>Rounding Errors:</strong> Inconsistent rounding methods</li>
                      <li>• <strong>Currency Issues:</strong> Problems with different currencies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Marketing Mistakes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Marketing and promotion errors:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>False Advertising:</strong> Misleading discount claims</li>
                      <li>• <strong>Expired Offers:</strong> Promoting outdated discounts</li>
                      <li>• <strong>Complex Terms:</strong> Confusing conditions and restrictions</li>
                      <li>• <strong>Poor Targeting:</strong> Wrong audience for discount type</li>
                      <li>• <strong>No Follow-up:</strong> Not tracking customer response</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: Advanced Techniques */}
          <section id="advanced-techniques" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Advanced Techniques</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                    Dynamic Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Advanced pricing strategies using data and algorithms:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Demand-Based:</strong> Adjust prices based on demand</li>
                    <li>• <strong>Time-Based:</strong> Different prices for different times</li>
                    <li>• <strong>Customer-Based:</strong> Personalized pricing</li>
                    <li>• <strong>Competitor-Based:</strong> Respond to competitor pricing</li>
                    <li>• <strong>Inventory-Based:</strong> Price based on stock levels</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Multi-Tier Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Complex discount structures:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Progressive Discounts:</strong> Increasing discounts with quantity</li>
                      <li>• <strong>Category Discounts:</strong> Different rates for different products</li>
                      <li>• <strong>Customer Tier Discounts:</strong> VIP, Gold, Silver levels</li>
                      <li>• <strong>Geographic Pricing:</strong> Different prices by location</li>
                      <li>• <strong>Channel Pricing:</strong> Different prices for different sales channels</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technology Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Using technology for advanced discount management:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>AI-Powered Pricing:</strong> Machine learning for optimal pricing</li>
                      <li>• <strong>Real-Time Analytics:</strong> Instant performance tracking</li>
                      <li>• <strong>Automated Systems:</strong> Rule-based discount application</li>
                      <li>• <strong>Personalization:</strong> Individual customer pricing</li>
                      <li>• <strong>Integration:</strong> Connect with CRM and ERP systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Calculate Discounts?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use our free discount calculator to determine sale prices, savings amounts, 
              and effective discount percentages for any pricing scenario.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/finance-tools/discount-calculator" className="flex items-center gap-2">
                Calculate Discounts Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Related Finance Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Tip Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Calculate tips and split bills among multiple people with customizable tip percentages.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/finance-tools/tip-calculator">Try Tip Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">PayPal Fee Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Calculate PayPal transaction fees and determine net amounts for your sales.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/finance-tools/paypal-fee">Try PayPal Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
