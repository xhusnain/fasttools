import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const ROASCalculator = dynamic(() => import("@/components/calculators/roas-calculator").then(mod => mod.ROASCalculator), {
    loading: () => <ToolLoader />
})
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import Image from "next/image"
import { GTable } from "@/ui/gtable"
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, CheckCircle, AlertTriangle, Lightbulb, Zap, Globe, Brain, Shield } from "lucide-react"

export const metadata: Metadata = createMetadata({
    title: "Free ROAS Calculator | Calculate Ad Profit & ROI Instantly",
    description: "Calculate ROAS, ROI & ad profitability instantly. Simple & Advanced modes for Google, Facebook & TikTok ads. Free CPA & profit analysis.",
    path: "/ad-tools/roas-calculator",
})

export default function ROASCalculatorPage() {
    const toolContent = {
        toolName: "ROAS Calculator",
        overview: "Not sure if your advertising campaigns are actually making money? Our ROAS Calculator helps you understand exactly how much revenue you're generating for every dollar spent on ads—whether you're running Google Ads, Facebook campaigns, TikTok promotions, or any other platform. ROAS (Return on Ad Spend) is the metric that separates profitable campaigns from budget-draining ones.",

        howToSteps: [
            "Select 'Simple' mode for quick Spend vs Revenue calculation, or 'Advanced' for detailed metrics.",
            "Enter your Total Ad Spend.",
            "Enter your Total Revenue (or CPC, Conversion Rate, and AOV in Advanced mode).",
            "View your calculated ROAS, ROI, Net Profit, and CPA instantly.",
            "Use the breakdown to identify if your campaign is profitable or needs optimization."
        ],

        features: [
            "Real-Time Calculations: Results update instantly as you type",
            "Visual Profit Indicators: Green for profit, red for losses automatically",
            "Privacy-First Design: All calculations run in your browser, no data sent anywhere",
            "Platform Agnostic: Works perfectly for Google Ads, Meta Ads, LinkedIn, TikTok, or any ad platform",
            "Dual Modes: 'Simple' for quick profitability checks and 'Advanced' for planning & forecasting",
            "Comprehensive Metrics: Calculates ROAS, ROI, Net Profit, CPA, and Profit Margin",
            "No Login Required: Start calculating immediately without registration"
        ],

        useCases: [
            "E-commerce Owners: Calculate profit from Facebook or Google Shopping campaigns",
            "Digital Marketing Agencies: Forecast campaign performance for clients",
            "PPC Managers: Optimize Google Ads and Microsoft Ads budgets",
            "Startups: Determine if paid advertising fits within the budget",
            "Social Media Marketers: Measure Instagram, TikTok, and LinkedIn ad effectiveness"
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    {/* Quick Answer Box */}
                    <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 p-4 rounded-lg">
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                            <strong>Quick Answer:</strong> ROAS = Revenue ÷ Ad Spend. If you spend $1,000 and earn $4,000, your ROAS is 4x (or 400%). Use our calculator above for instant results.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Calculator className="h-6 w-6 text-primary" />
                        Understanding ROAS: The Key to Profitable Advertising
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        ROAS (Return on Ad Spend) is the metric that separates profitable campaigns from budget-draining ones. While clicks and impressions look impressive, they don't pay the bills. ROAS measures how much revenue was earned from advertising compared to the budget spent on it, giving you a clear picture of campaign performance. Our <strong>ROAS calculator</strong> helps you understand exactly how much revenue you're generating for every dollar spent on ads—whether you're running Google Ads, Facebook campaigns, TikTok promotions, or any other platform.
                    </p>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        Two Powerful Modes for Every Advertiser
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Simple Mode - Quick Profitability Check</h4>
                            <p className="text-sm mb-2">Perfect when you know your total numbers and want instant results. Just enter your ad spend and revenue to see:</p>
                            <ul className="list-disc pl-4 text-sm space-y-1">
                                <li><strong>ROAS Ratio:</strong> (e.g., 4.5x means $4.50 earned per $1 spent)</li>
                                <li><strong>ROI Percentage:</strong> Your actual return on investment</li>
                                <li><strong>Net Profit:</strong> Real money made after ad costs</li>
                                <li><strong>Profit Margin:</strong> Percentage of revenue that's pure profit</li>
                            </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Advanced Mode - Campaign Planning</h4>
                            <p className="text-sm mb-2">Ideal for planning new campaigns or when you need to calculate ROAS from granular metrics. Input:</p>
                            <ul className="list-disc pl-4 text-sm space-y-1">
                                <li>Ad Spend Budget & Cost Per Click (CPC)</li>
                                <li>Conversion Rate (%) & Average Order Value (AOV)</li>
                            </ul>
                            <p className="text-sm mt-2 font-medium">Automatically determines Traffic, Conversions, and Revenue.</p>
                        </div>
                    </div>

                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Target className="h-6 w-6 text-primary" />
                        Real-World Examples and Use Cases
                    </h2>
                    <div className="space-y-4 mb-6">
                        <div className="border-l-4 border-blue-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">Scenario 1: Facebook Ads Profit Check</h4>
                            <p className="text-sm text-muted-foreground">You spent $500 on Facebook ads and generated $2,000 in sales. Quick calculation: <strong>ROAS = 4x</strong>, <strong>ROI = 300%</strong>. Your campaign is profitable.</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">Scenario 2: Google Ads Campaign Planning</h4>
                            <p className="text-sm text-muted-foreground">Planning a campaign with $1,000 budget, $2 CPC, 3% conversion rate, and $80 AOV? The calculator shows: 500 clicks, 15 sales, $1,200 revenue, <strong>1.2x ROAS</strong>. You'll need to improve conversion rate or AOV to profit.</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">Scenario 3: Multi-Platform Comparison</h4>
                            <p className="text-sm text-muted-foreground">Running TikTok and Google Ads simultaneously? Calculate each platform's ROAS separately to identify your most profitable channel and reallocate budget accordingly.</p>
                        </div>
                    </div>

                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        What is a Good ROAS? Industry Benchmarks Explained
                    </h2>
                    <p className="mb-3">
                        A common benchmark is 4:1 ROAS, where every $1 returns $4, but this varies by industry and profit margins. "Is my ROAS good" is a common question, and the answer depends on your industry benchmarks:
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        A common benchmark is 4:1 ROAS, where every $1 returns $4, but this varies by industry and profit margins. "Is my ROAS good" is a common question, and the answer depends on your industry benchmarks:
                    </p>
                    <div className="overflow-x-auto">
                        <GTable>
                            <thead className="bg-muted text-foreground font-semibold">
                                <tr>
                                    <th className="p-3 text-left">Industry</th>
                                    <th className="p-3 text-left">Typical ROAS Range</th>
                                    <th className="p-3 text-left">Profit Margin Factor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-sm">
                                <tr>
                                    <td className="p-3 font-medium">Retail/E-commerce</td>
                                    <td className="p-3">4:1 to 10:1</td>
                                    <td className="p-3">Lower margins require higher ROAS</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">B2B/SaaS</td>
                                    <td className="p-3">3:1 to 5:1</td>
                                    <td className="p-3">Higher margins allow lower ROAS</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">Finance/Insurance</td>
                                    <td className="p-3">5:1 to 10:1</td>
                                    <td className="p-3">High-value, long-term customers</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">Real Estate</td>
                                    <td className="p-3">3:1 to 8:1</td>
                                    <td className="p-3">Varies by property type</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">Healthcare</td>
                                    <td className="p-3">4:1 to 7:1</td>
                                    <td className="p-3">Regulatory compliance costs</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">Education</td>
                                    <td className="p-3">3:1 to 6:1</td>
                                    <td className="p-3">Long sales cycles</td>
                                </tr>
                            </tbody>
                        </GTable>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        ROAS vs ROMI vs ROI: Understanding the Differences
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        These three metrics are often confused, but each serves a different purpose in measuring advertising effectiveness:
                    </p>
                    <div className="overflow-x-auto">
                        <GTable>
                            <thead className="bg-muted text-foreground font-semibold">
                                <tr>
                                    <th className="p-3 text-left">Metric</th>
                                    <th className="p-3 text-left">Formula</th>
                                    <th className="p-3 text-left">Best For</th>
                                    <th className="p-3 text-left">Example</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-sm">
                                <tr>
                                    <td className="p-3 font-medium">ROAS</td>
                                    <td className="p-3 font-mono">Revenue ÷ Ad Spend</td>
                                    <td className="p-3">Ad efficiency, quick checks</td>
                                    <td className="p-3">$4,000 ÷ $1,000 = 4x</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">ROI</td>
                                    <td className="p-3 font-mono">(Revenue - Costs) ÷ Investment × 100</td>
                                    <td className="p-3">Overall profitability</td>
                                    <td className="p-3">($4,000 - $1,500) ÷ $1,000 × 100 = 250%</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">ROMI</td>
                                    <td className="p-3 font-mono">(Revenue - Marketing Cost) ÷ Marketing Cost</td>
                                    <td className="p-3">Marketing effectiveness</td>
                                    <td className="p-3">($4,000 - $1,200) ÷ $1,200 = 2.33x</td>
                                </tr>
                            </tbody>
                        </GTable>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                        How to Calculate Break-Even ROAS
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Knowing your break-even point is crucial for profitable advertising. Our <strong>break even ROAS calculator</strong> logic is simple: <code className="bg-muted px-2 py-1 rounded">1 ÷ Profit Margin %</code>. For example, if your profit margin is 25%, your break-even ROAS is 4.0. Any ROAS above this number means you are <strong>calculating profit from ads</strong> effectively.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                Example: 30% Profit Margin
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Break-even ROAS = 1 ÷ 0.30 = 3.33x. You need at least 3.33x ROAS to break even. A 4x ROAS means 20% profit on ad spend.
                            </p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                Example: 15% Profit Margin
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Break-even ROAS = 1 ÷ 0.15 = 6.67x. You need 6.67x ROAS to break even. This is why low-margin businesses struggle with paid ads.
                            </p>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-6 w-6 text-primary" />
                        ROAS Calculator for Different Platforms
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Our calculator works seamlessly across all advertising platforms. Here's how to use it for each major platform:
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">Google Ads ROAS Calculation</h4>
                            <p className="text-sm text-muted-foreground mb-2">In Google Ads, find your data in the "Campaigns" tab:</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Ad Spend: "Cost" column</li>
                                <li>Revenue: "Conversion value" or "Revenue" column</li>
                                <li>Use Advanced Mode with CPC, Conversion Rate, and AOV for planning</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">Facebook/Meta Ads ROAS Calculation</h4>
                            <p className="text-sm text-muted-foreground mb-2">In Facebook Ads Manager, use the "Ads" view:</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Ad Spend: "Amount Spent" column</li>
                                <li>Revenue: "Purchase Value" or "Revenue" column</li>
                                <li>Facebook shows ROAS directly, but our calculator helps compare across platforms</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">TikTok Ads ROAS Calculation</h4>
                            <p className="text-sm text-muted-foreground mb-2">In TikTok Ads Manager:</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Ad Spend: "Spend" column</li>
                                <li>Revenue: "Revenue" or "Purchase Value" column</li>
                                <li>TikTok's attribution window may differ—use our calculator for consistent comparison</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">Shopify Store ROAS Calculation</h4>
                            <p className="text-sm text-muted-foreground mb-2">E-commerce platforms like Shopify often show revenue but might not factor in all ad costs across channels. Use this tool as a centralized <strong>advertising ROI calculator</strong> to merge data from Facebook, Google, and TikTok into one profitability view.</p>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Brain className="h-6 w-6 text-primary" />
                        How CPC, Conversion Rate, and AOV Impact ROAS
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Understanding how these three metrics interact is key to improving your ROAS. Each one directly impacts your advertising profitability:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Target className="h-4 w-4 text-blue-500" />
                                Cost Per Click (CPC)
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                Lower CPC means more traffic for the same budget, which directly improves your ROAS potential. Optimize by:
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Improving Quality Score (Google Ads)</li>
                                <li>Better ad targeting</li>
                                <li>More relevant ad copy</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                Conversion Rate
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                Higher conversion rates mean more sales from the same traffic. Improve by:
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Landing page optimization</li>
                                <li>Better ad-to-page match</li>
                                <li>Retargeting campaigns</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-purple-500" />
                                Average Order Value (AOV)
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                Higher AOV means more revenue per conversion. Increase by:
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>Upsells and cross-sells</li>
                                <li>Bundle offers</li>
                                <li>Minimum order incentives</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Strategies to Improve Your ROAS
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Five proven strategies to boost your ROAS and make your advertising more profitable:
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Lower CPC Through Better Targeting</h4>
                                <p className="text-sm text-muted-foreground">Improve your Quality Score (Google Ads) or Relevance Score (Facebook) by creating highly relevant ads and landing pages. Better scores = lower CPCs = higher ROAS.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Increase Conversion Rate</h4>
                                <p className="text-sm text-muted-foreground">Optimize landing pages for speed, clarity, and relevance. Use retargeting campaigns which typically see 5-10x higher conversion rates than cold traffic.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Boost Average Order Value</h4>
                                <p className="text-sm text-muted-foreground">Implement upsells, cross-sells, and bundle offers. Even a 20% increase in AOV can dramatically improve ROAS without changing ad spend.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Test and Eliminate Underperformers</h4>
                                <p className="text-sm text-muted-foreground">Regularly audit your campaigns. Pause ad sets, keywords, or placements with ROAS below break-even. Reallocate budget to winners.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Use Lookalike and Similar Audiences</h4>
                                <p className="text-sm text-muted-foreground">Target audiences similar to your best customers. These typically convert at 2-3x higher rates, significantly improving ROAS.</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        Calculate ROAS for Multiple Campaigns
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        You can calculate the weighted average ROAS for your entire marketing mix. Simply sum up the total spend from all campaigns and the total revenue generated, then input these totals into the <strong>ROAS formula</strong> above to get your aggregate performance.
                    </p>
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-semibold mb-2">Example: Multi-Campaign Analysis</h4>
                        <p className="text-sm text-muted-foreground mb-2">You're running campaigns across three platforms:</p>
                        <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                            <li>Google Ads: $2,000 spend, $8,000 revenue (4x ROAS)</li>
                            <li>Facebook Ads: $1,500 spend, $6,000 revenue (4x ROAS)</li>
                            <li>TikTok Ads: $500 spend, $1,500 revenue (3x ROAS)</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                            <strong>Total:</strong> $4,000 spend, $15,500 revenue = <strong>3.875x overall ROAS</strong>. Use this to identify which platform deserves more budget allocation.
                        </p>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Privacy and Data Security
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        All calculations run locally in your browser using JavaScript. We don't store, collect, or transmit any data to servers. No login required, no tracking, no data sharing. Your advertising data and financial information remain completely private.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">100% Client-Side</h4>
                            <p className="text-xs text-muted-foreground">All processing happens in your browser</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">No Data Storage</h4>
                            <p className="text-xs text-muted-foreground">Nothing is saved or logged</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">No Registration</h4>
                            <p className="text-xs text-muted-foreground">Start calculating immediately</p>
                        </div>
                    </div>
                </article>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <p className="font-medium text-lg text-primary">Ready to see if your ads are profitable?</p>
                    <p className="text-muted-foreground">Use our free ROAS Calculator now—no signup, no hassle, just instant insights into your advertising performance.</p>
                </div>
            </div>
        ),

        faqs: [
            {
                question: "What is ROAS and how do I calculate it?",
                answer: "ROAS (Return on Ad Spend) measures revenue generated per dollar spent on advertising. The formula is: ROAS = Revenue from Ads ÷ Ad Spend. For example, if you spend $100 and earn $400, your ROAS is 4x or 400%. Our calculator does this instantly in Simple Mode, or calculates it from CPC, conversion rate, and AOV in Advanced Mode."
            },
            {
                question: "How do I calculate ROAS from CPC and conversion rate?",
                answer: "Use our Advanced Mode: (1) Calculate clicks: Ad Spend ÷ CPC, (2) Calculate conversions: Clicks × Conversion Rate, (3) Calculate revenue: Conversions × Average Order Value, (4) Calculate ROAS: Revenue ÷ Ad Spend. The calculator automates all these steps instantly."
            },
            {
                question: "What's the difference between ROAS and ROI?",
                answer: "ROAS measures ad efficiency (Revenue ÷ Ad Spend) while ROI measures total profitability including all business costs (Net Profit ÷ Total Investment × 100). ROAS of 3x with high operating costs might result in low or negative ROI. Our calculator shows both metrics."
            },
            {
                question: "What is a good ROAS for my business?",
                answer: "It depends on your profit margins. If you have a 25% profit margin, you need 4x ROAS to break even. Generally, 4:1 is considered healthy, but e-commerce often targets ROAS above 4 due to production costs. Service businesses with higher margins might profit at 2-3x ROAS."
            },
            {
                question: "Can I use this for Facebook Ads, Google Ads, and TikTok?",
                answer: "Absolutely. Our calculator works for all advertising platforms including Google Ads, Facebook/Meta Ads, Instagram, TikTok, LinkedIn, Twitter/X, Pinterest, Microsoft Ads, and any other paid advertising channel. The math is universal."
            },
            {
                question: "What is CPA and how does it relate to ROAS?",
                answer: "CPA (Cost Per Acquisition) is how much you pay to acquire one customer. It's calculated as: Ad Spend ÷ Number of Conversions. Lower CPA improves ROAS. Our Advanced Mode calculates CPA automatically alongside your ROAS and ROI."
            },
            {
                question: "How can I improve my ROAS?",
                answer: "Five proven strategies: (1) Lower CPC through better ad targeting and quality scores, (2) Increase conversion rate with landing page optimization, (3) Boost Average Order Value through upsells, (4) Improve ad targeting to reach high-intent customers, (5) Test and eliminate underperforming ad creatives."
            },
            {
                question: "Is my data private when using this calculator?",
                answer: "Yes, completely private. All calculations run locally in your browser using JavaScript. We don't store, collect, or transmit any data to servers. No login required, no tracking, no data sharing."
            },
            {
                question: "What's break-even ROAS?",
                answer: "Break-even ROAS is the minimum return needed to cover all costs without profit or loss. Calculate it as: 1 ÷ Profit Margin. If your profit margin is 20%, break-even ROAS is 5x. Anything above means profit; below means losses."
            },
            {
                question: "Can I calculate ROAS for lead generation campaigns?",
                answer: "Yes, in Advanced Mode. Instead of Average Order Value, use the monetary value of a lead (based on your sales team's close rate and average deal size). For example, if 10% of leads convert at $500 average sale, each lead is worth $50."
            },
            {
                question: "What conversion rate should I expect?",
                answer: "The average B2B conversion rate is around 2.6%. E-commerce typically sees 1-3% for cold traffic and 5-10% for retargeting campaigns. Your actual rate depends on industry, product, traffic quality, and landing page effectiveness."
            },
            {
                question: "What does 5x ROAS mean?",
                answer: "A 5x ROAS means you earn $5 in revenue for every $1 spent on advertising. For example, if you spend $1,000 on ads and generate $5,000 in sales, your ROAS is 5x or 500%. This is generally considered excellent performance for most industries."
            },
            {
                question: "Is 2x ROAS profitable?",
                answer: "It depends on your profit margins. A 2x ROAS means you're generating $2 for every $1 spent. If your product costs and operating expenses are 40% of revenue, you're breaking even. If they're lower, you're profitable. Use our calculator to check your specific profit margin."
            },
            {
                question: "How to increase ROAS on Facebook Ads?",
                answer: "Focus on these tactics: (1) Test ad creative variations weekly, (2) Use Lookalike Audiences based on top customers, (3) Implement retargeting campaigns (typically 5-10x higher ROAS), (4) Optimize for purchase events not just clicks, (5) Exclude low-intent placements like Audience Network."
            },
            {
                question: "What's the average ROAS for e-commerce?",
                answer: "E-commerce businesses typically see 4:1 to 10:1 ROAS depending on product margins and competition. Fashion and accessories average 6-8x, while electronics see 3-5x due to lower margins. Luxury goods can achieve 10-15x ROAS with the right targeting."
            },
            {
                question: "What if my ROAS is negative or below 1?",
                answer: "ROAS below 1 means you're spending more than you earn—immediate action needed. Common fixes: pause worst-performing ad sets, reduce CPC bids, improve landing page conversion rate, target higher-intent keywords, or increase product prices/AOV. Sometimes campaigns need 2-4 weeks of optimization before becoming profitable."
            },
            {
                question: "How do I calculate ROAS for lead generation campaigns?",
                answer: "For lead gen, assign a monetary value to each lead. Calculate: (1) Lead value = Average deal size × Close rate, (2) Total revenue = Leads × Lead value, (3) ROAS = Revenue ÷ Ad Spend. Example: 100 leads × $50 value = $5,000 revenue. $1,000 spend = 5x ROAS."
            },
            {
                question: "What's the difference between ROAS and ROAS percentage?",
                answer: "ROAS is typically shown as a ratio (4x) or percentage (400%). They're the same: 4x = 400%. Some platforms show one format, others show both. Our calculator displays both for clarity."
            },
            {
                question: "How often should I check my ROAS?",
                answer: "Check daily during active campaigns, weekly for ongoing optimization, and monthly for strategic planning. Daily checks help catch issues early, while monthly reviews show long-term trends and inform budget allocation decisions."
            },
            {
                question: "Can I use this calculator for offline advertising?",
                answer: "Yes! While designed for digital ads, the ROAS formula works for any advertising. For TV, print, or radio ads, use total ad spend and track revenue from those channels (using promo codes, landing pages, or call tracking) to calculate ROAS."
            },
            {
                question: "What is a good ROAS for Google Shopping ads?",
                answer: "Google Shopping typically sees 3-6x ROAS for most e-commerce stores. Higher-margin products (fashion, accessories) can achieve 6-10x, while lower-margin items (electronics) may need 4-5x to be profitable. Use our calculator to find your break-even point."
            },
            {
                question: "How does attribution affect ROAS calculations?",
                answer: "Attribution determines which ad gets credit for a sale. First-click, last-click, and multi-touch attribution can show different ROAS for the same campaign. Use consistent attribution windows when comparing ROAS across platforms. Our calculator uses the data you provide, so ensure it matches your platform's attribution model."
            },
            {
                question: "What ROAS should I target for a new product launch?",
                answer: "New products often start with lower ROAS (2-3x) as you test audiences and creative. Accept lower ROAS initially to gather data, then optimize to 4x+ within 2-4 weeks. If ROAS stays below 2x after a month, reconsider the product-market fit or pricing strategy."
            },
            {
                question: "How do I calculate ROAS with attribution windows?",
                answer: "Attribution windows (1-day, 7-day, 28-day click) affect when revenue is credited. Use the same window across all platforms for fair comparison. Our calculator uses the revenue data you input—ensure it matches your platform's attribution settings for accurate ROAS."
            },
            {
                question: "What's a good ROAS for retargeting campaigns?",
                answer: "Retargeting campaigns typically achieve 5-10x ROAS because visitors are already familiar with your brand. If retargeting ROAS is below 4x, your audience may be too broad or your creative needs improvement. Retargeting should be your highest-ROAS channel."
            },
            {
                question: "How do I improve ROAS on a limited budget?",
                answer: "Focus on: (1) Pause underperforming campaigns to concentrate budget, (2) Use exact match keywords (Google) or lookalike audiences (Facebook) for better targeting, (3) Optimize landing pages for conversion, (4) Increase AOV with bundles, (5) Test creative weekly to find winners."
            },
            {
                question: "What is blended ROAS vs platform-specific ROAS?",
                answer: "Blended ROAS combines all platforms into one metric (total revenue ÷ total spend). Platform-specific ROAS shows each channel separately. Both are valuable: blended shows overall performance, platform-specific helps allocate budget. Our calculator can do both—calculate each platform separately, then combine totals."
            },
            {
                question: "How does seasonality affect ROAS?",
                answer: "ROAS fluctuates with seasons. Holiday periods (Q4) often see higher ROAS due to increased purchase intent, while summer months may see lower ROAS. Compare ROAS year-over-year for the same period, not month-to-month, to account for seasonality."
            },
            {
                question: "What ROAS should I expect for brand awareness campaigns?",
                answer: "Brand awareness campaigns typically have lower or unmeasurable ROAS since they don't directly drive sales. Instead, measure: (1) Brand lift studies, (2) Organic search increases, (3) Direct traffic growth, (4) Social mentions. For direct response, aim for 4x+ ROAS."
            },
            {
                question: "How do I calculate ROAS for subscription businesses?",
                answer: "For subscriptions, use Lifetime Value (LTV) instead of one-time revenue. Calculate: (1) LTV = Monthly Revenue × Average Customer Lifetime, (2) ROAS = LTV ÷ Ad Spend. Example: $50/month × 12 months = $600 LTV. $100 ad spend = 6x ROAS. This shows true profitability."
            }
        ],
        relatedTools: [
            { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
            { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
            { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
            { name: "Investment Calculator", href: "/finance-tools/investment-calculator" }
        ]
    }

    return (
        <ToolPageLayout
            header={{
                title: "Free ROAS Calculator - Profitability & Break-Even Analysis",
                description: "Calculate your Return on Ad Spend (ROAS), ROI, and break-even points instantly. Perfect for Google Ads, Facebook Ads, and TikTok marketers.",
                titleSize: "medium",
                descriptionSize: "small"
            }}
            breadcrumbs={[
                { label: "Calculators", href: "/calculator" },
                { label: "ROAS Calculator", href: "/ad-tools/roas-calculator" }
            ]}
            toolComponent={
                <div className="p-1 sm:p-2 md:p-4 rounded-lg">
                    <ROASCalculator />
                </div>
            }
            toolContent={toolContent}
            expectedMetadata={{
                title: "Free ROAS Calculator | Calculate Ad Profit & ROI Instantly",
                description: "Calculate ROAS, ROI & ad profitability instantly. Simple & Advanced modes for Google, Facebook & TikTok ads. Free CPA & profit analysis.",
                path: "/ad-tools/roas-calculator"
            }}
        />
    )
}
