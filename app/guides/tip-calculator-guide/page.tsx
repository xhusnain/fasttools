import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Calculator, Target, AlertCircle, Heart, Sparkles, DollarSign, TrendingUp, Globe, Settings, BarChart3, Lightbulb, BookOpen, ExternalLink, Utensils } from "lucide-react"


export default function TipCalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Tip Calculator Guide",
    description: "Master tip calculations with our comprehensive guide. Learn tipping etiquette, tip percentages, bill splitting, and use our free tip calculator tool.",
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
      "@id": "https://fasttools.store/guides/tip-calculator-guide"
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
            Complete Tip Calculator Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master tip calculations with our comprehensive guide. Learn tipping etiquette, 
            tip percentages, bill splitting, and use our free tip calculator tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>14 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>250,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.8/5 rating</span>
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
              <Link href="#what-is-tipping" className="block text-primary hover:underline">
                1. What is Tipping?
              </Link>
              <Link href="#tip-percentages" className="block text-primary hover:underline">
                2. Standard Tip Percentages
              </Link>
              <Link href="#calculation-methods" className="block text-primary hover:underline">
                3. Calculation Methods
              </Link>
              <Link href="#tipping-etiquette" className="block text-primary hover:underline">
                4. Tipping Etiquette
              </Link>
              <Link href="#bill-splitting" className="block text-primary hover:underline">
                5. Bill Splitting
              </Link>
              <Link href="#service-types" className="block text-primary hover:underline">
                6. Different Service Types
              </Link>
              <Link href="#international-tipping" className="block text-primary hover:underline">
                7. International Tipping
              </Link>
              <Link href="#digital-tipping" className="block text-primary hover:underline">
                8. Digital Tipping
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
                These official sources provide authoritative information about tip calculator:
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
          
          {/* Section 1: What is Tipping */}
          <section id="what-is-tipping" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is Tipping?</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Tipping is the practice of giving a gratuity to service workers, typically in restaurants, 
              hotels, and other service industries. It's a way to show appreciation for good service 
              and supplement the income of service workers who often rely on tips as a significant 
              portion of their earnings.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Aspects of Tipping:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Gratuity:</strong> Voluntary payment for service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Service Recognition:</strong> Acknowledgment of good service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Income Supplement:</strong> Additional earnings for service workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Cultural Practice:</strong> Varies by country and culture</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Understanding tipping culture and proper etiquette helps ensure you're being fair to 
              service workers while following social norms in different situations and locations.
            </p>
          </section>

          {/* Section 2: Tip Percentages */}
          <section id="tip-percentages" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Standard Tip Percentages</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-blue-500" />
                    Restaurant Tipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Standard tip percentages for restaurant service:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Excellent Service</span>
                      <span className="text-green-600 font-bold">20-25%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Good Service</span>
                      <span className="text-primary font-bold">15-20%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Average Service</span>
                      <span className="text-orange-500 font-bold">10-15%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Poor Service</span>
                      <span className="text-red-500 font-bold">0-10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Service Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Tip percentages for different service types:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Hair Salon/Barber:</strong> 15-20%</li>
                      <li>• <strong>Taxi/Rideshare:</strong> 15-20%</li>
                      <li>• <strong>Hotel Bellhop:</strong> $2-5 per bag</li>
                      <li>• <strong>Hotel Housekeeping:</strong> $2-5 per night</li>
                      <li>• <strong>Food Delivery:</strong> 15-20%</li>
                      <li>• <strong>Valet Parking:</strong> $2-5</li>
                      <li>• <strong>Tour Guide:</strong> 10-20%</li>
                      <li>• <strong>Massage/Spa:</strong> 15-20%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Reference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Easy calculation shortcuts:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">15%</div>
                        <p className="text-sm text-muted-foreground">Move decimal point left, then add half</p>
                        <p className="text-sm text-muted-foreground">$50.00 → $5.00 → $7.50</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">20%</div>
                        <p className="text-sm text-muted-foreground">Move decimal point left, then double</p>
                        <p className="text-sm text-muted-foreground">$50.00 → $5.00 → $10.00</p>
                      </div>
                    </div>
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
                    Basic Tip Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Standard formula for calculating tips:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-mono text-sm">
                      <div className="mb-2"><strong>Tip Amount:</strong></div>
                      <div className="mb-2">Tip = Bill Amount × (Tip % ÷ 100)</div>
                      <div className="mb-4">Example: $50 × (20 ÷ 100) = $10</div>
                      
                      <div className="mb-2"><strong>Total Amount:</strong></div>
                      <div className="mb-2">Total = Bill Amount + Tip</div>
                      <div className="mb-4">Example: $50 + $10 = $60</div>
                      
                      <div className="mb-2"><strong>Per Person (if splitting):</strong></div>
                      <div>Per Person = Total ÷ Number of People</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pre-Tax vs Post-Tax</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Whether to tip on pre-tax or post-tax amount:
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-medium text-green-800">Pre-Tax (Recommended)</div>
                        <div className="text-sm text-green-600">Tip on the subtotal before taxes</div>
                        <div className="text-sm text-green-600">More fair to service workers</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="font-medium text-yellow-800">Post-Tax (Common)</div>
                        <div className="text-sm text-yellow-600">Tip on the total including taxes</div>
                        <div className="text-sm text-yellow-600">Easier to calculate from receipt</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rounding Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common rounding practices for tips:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Round Up:</strong> Always round up to the nearest dollar</li>
                      <li>• <strong>Round to Quarter:</strong> Round to nearest $0.25</li>
                      <li>• <strong>Round to Dollar:</strong> Round to nearest whole dollar</li>
                      <li>• <strong>No Change:</strong> Avoid giving exact change</li>
                      <li>• <strong>Generous Rounding:</strong> Round up generously for good service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Tipping Etiquette */}
          <section id="tipping-etiquette" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Tipping Etiquette</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Tip in Cash:</strong> Preferred by many service workers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Be Discreet:</strong> Don't make a show of tipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consider Service Quality:</strong> Adjust tip based on service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Group Dining:</strong> Coordinate tipping with group</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Special Occasions:</strong> Tip more generously for celebrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Regular Customers:</strong> Consistent tipping builds relationships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>When NOT to Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Situations where tipping may not be expected:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Self-Service:</strong> Buffets, fast-casual restaurants</li>
                      <li>• <strong>Counter Service:</strong> Coffee shops, delis</li>
                      <li>• <strong>Takeout:</strong> Pickup orders (though appreciated)</li>
                      <li>• <strong>Poor Service:</strong> When service is genuinely bad</li>
                      <li>• <strong>Cultural Differences:</strong> In countries where tipping isn't customary</li>
                      <li>• <strong>All-Inclusive:</strong> Resorts where tips are included</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Special Circumstances</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Adjusting tips for special situations:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Large Groups:</strong> Automatic gratuity may be added</li>
                      <li>• <strong>Holidays:</strong> Consider tipping more generously</li>
                      <li>• <strong>Bad Weather:</strong> Tip extra for delivery in poor conditions</li>
                      <li>• <strong>Special Requests:</strong> Extra tip for accommodating special needs</li>
                      <li>• <strong>Long Service:</strong> Tip more for extended service periods</li>
                      <li>• <strong>Complimentary Items:</strong> Tip on the full value, not just what you paid</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Bill Splitting */}
          <section id="bill-splitting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Bill Splitting</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    Equal Split Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The simplest way to split a bill equally:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="font-mono text-sm">
                      <div className="mb-2"><strong>Total Bill:</strong> $120</div>
                      <div className="mb-2"><strong>Number of People:</strong> 4</div>
                      <div className="mb-2"><strong>Amount per Person:</strong> $120 ÷ 4 = $30</div>
                      <div className="mb-2"><strong>Tip (20%):</strong> $30 × 0.20 = $6</div>
                      <div className="mb-4"><strong>Total per Person:</strong> $30 + $6 = $36</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Item-Based Splitting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Splitting based on what each person ordered:
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium">Person A: $25</div>
                        <div className="text-sm text-muted-foreground">Tip: $5 (20%)</div>
                        <div className="text-sm text-muted-foreground">Total: $30</div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium">Person B: $35</div>
                        <div className="text-sm text-muted-foreground">Tip: $7 (20%)</div>
                        <div className="text-sm text-muted-foreground">Total: $42</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Payment Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Popular apps for bill splitting:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Venmo:</strong> Easy peer-to-peer payments</li>
                      <li>• <strong>Cash App:</strong> Simple money transfers</li>
                      <li>• <strong>Splitwise:</strong> Track shared expenses</li>
                      <li>• <strong>Zelle:</strong> Bank-to-bank transfers</li>
                      <li>• <strong>PayPal:</strong> International money transfers</li>
                      <li>• <strong>Apple Pay/Google Pay:</strong> Mobile payment solutions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 6: Service Types */}
          <section id="service-types" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Different Service Types</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-blue-500" />
                    Restaurant Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tipping guidelines for different restaurant types:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Fine Dining:</strong> 20-25% for full service</li>
                    <li>• <strong>Casual Dining:</strong> 15-20% for table service</li>
                    <li>• <strong>Fast Casual:</strong> 10-15% or no tip expected</li>
                    <li>• <strong>Buffet:</strong> 10-15% for table service</li>
                    <li>• <strong>Food Trucks:</strong> 10-15% or round up</li>
                    <li>• <strong>Bar Service:</strong> $1-2 per drink or 15-20%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Tipping for food delivery:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Food Delivery:</strong> 15-20% of order total</li>
                      <li>• <strong>Bad Weather:</strong> Tip extra for poor conditions</li>
                      <li>• <strong>Large Orders:</strong> Consider higher tip for big orders</li>
                      <li>• <strong>Distance:</strong> Tip more for longer delivery distances</li>
                      <li>• <strong>Special Instructions:</strong> Extra tip for special requests</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personal Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Tipping for personal care services:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Hair Salon:</strong> 15-20% of service cost</li>
                      <li>• <strong>Massage/Spa:</strong> 15-20% of treatment cost</li>
                      <li>• <strong>Nail Services:</strong> 15-20% of service cost</li>
                      <li>• <strong>Personal Trainer:</strong> 10-20% of session cost</li>
                      <li>• <strong>Pet Grooming:</strong> 15-20% of service cost</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: International Tipping */}
          <section id="international-tipping" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">International Tipping</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    Country-Specific Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tipping customs vary significantly by country:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">United States</span>
                      <span className="text-primary font-bold">15-20%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Canada</span>
                      <span className="text-primary font-bold">15-20%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">United Kingdom</span>
                      <span className="text-primary font-bold">10-15%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">France</span>
                      <span className="text-primary font-bold">5-10%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Japan</span>
                      <span className="text-red-500 font-bold">Not Expected</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">Australia</span>
                      <span className="text-primary font-bold">10-15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cultural Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Important cultural factors to consider:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Service Charges:</strong> Some countries include service in the bill</li>
                      <li>• <strong>Local Customs:</strong> Research tipping norms before traveling</li>
                      <li>• <strong>Currency:</strong> Tip in local currency when possible</li>
                      <li>• <strong>Language Barriers:</strong> Use calculator or tip calculator apps</li>
                      <li>• <strong>Hotel Staff:</strong> Different expectations for hotel services</li>
                      <li>• <strong>Tour Guides:</strong> Often expect tips for good service</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Travel Tipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Tipping while traveling:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Research First:</strong> Look up local tipping customs</li>
                      <li>• <strong>Hotel Services:</strong> Bellhop, housekeeping, concierge</li>
                      <li>• <strong>Transportation:</strong> Taxi, rideshare, tour bus</li>
                      <li>• <strong>Tour Services:</strong> Guides, drivers, activity staff</li>
                      <li>• <strong>Currency Exchange:</strong> Have local currency for tips</li>
                      <li>• <strong>Mobile Apps:</strong> Use tip calculator apps for conversions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: Digital Tipping */}
          <section id="digital-tipping" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Digital Tipping</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    Digital Payment Methods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Modern ways to tip using digital platforms:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Credit Card Tips:</strong> Add tip when paying with card</li>
                    <li>• <strong>Mobile Apps:</strong> Venmo, Cash App, Zelle</li>
                    <li>• <strong>QR Code Tips:</strong> Scan to tip directly</li>
                    <li>• <strong>Digital Wallets:</strong> Apple Pay, Google Pay</li>
                    <li>• <strong>Restaurant Apps:</strong> Built-in tipping features</li>
                    <li>• <strong>Delivery Apps:</strong> In-app tipping options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advantages of Digital Tipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Benefits of digital tipping methods:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Convenience:</strong> No need for cash</li>
                      <li>• <strong>Tracking:</strong> Digital records of tips given</li>
                      <li>• <strong>Security:</strong> No risk of losing cash</li>
                      <li>• <strong>Speed:</strong> Quick and easy transactions</li>
                      <li>• <strong>Accuracy:</strong> Precise tip calculations</li>
                      <li>• <strong>Contactless:</strong> Hygienic during health concerns</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Tipping Etiquette</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Best practices for digital tipping:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Immediate Tips:</strong> Tip right after service</li>
                      <li>• <strong>Appropriate Amounts:</strong> Use standard percentages</li>
                      <li>• <strong>Personal Messages:</strong> Add thank you notes when possible</li>
                      <li>• <strong>Privacy:</strong> Be discreet about tip amounts</li>
                      <li>• <strong>Verification:</strong> Confirm tips went to the right person</li>
                      <li>• <strong>Backup Methods:</strong> Have cash as backup</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Calculate Tips?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use our free tip calculator to determine tip amounts, split bills among multiple people, 
              and calculate total costs for any dining or service situation.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/finance-tools/tip-calculator" className="flex items-center gap-2">
                Calculate Tips Now
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
                  <h4 className="font-semibold mb-2 text-foreground">Bill Splitter</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Split expenses fairly among friends or groups with our advanced bill splitting calculator.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/finance-tools/bill-splitter">Try Bill Splitter</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Discount Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Calculate sale prices and savings with our comprehensive discount calculator.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/finance-tools/discount-calculator">Try Discount Calculator</Link>
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
