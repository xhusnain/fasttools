import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ROASCalculator } from "@/components/calculators/roas-calculator"
import { createMetadata } from "@/lib/metadata-base"
import Image from "next/image"

export const metadata = createMetadata({
    title: "Free ROAS Calculator | Calculate Ad Profit & ROI Instantly",
    description: "Calculate ROAS, ROI, and ad profitability in seconds. Simple & Advanced modes for Google Ads, Facebook Ads, TikTok. Free tool with instant CPA & profit margin analysis.",
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
            <>
                {/* Quick Answer Box */}
                <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 p-4 rounded-lg mb-8">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                        <strong>Quick Answer:</strong> ROAS = Revenue ÷ Ad Spend. If you spend $1,000 and earn $4,000, your ROAS is 4x (or 400%). Use our calculator above for instant results.
                    </p>
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-6">Two Powerful Modes for Every Advertiser</h3>
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

                <h3 className="font-semibold text-lg mb-2 mt-6">Common Use Cases</h3>
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

                <h3 className="font-semibold text-lg mb-2 mt-6">Why Calculate ROAS?</h3>
                <p className="mb-4">
                    ROAS (Return on Ad Spend) is the metric that separates profitable campaigns from budget-draining ones. While clicks and impressions look impressive, they don't pay the bills. ROAS measures how much revenue was earned from advertising compared to the budget spent on it, giving you a clear picture of campaign performance.
                </p>
                <div className="my-8">
                    <Image
                        src="/images/tools/roas-dashboard.png"
                        alt="FastTools ROAS Calculator Dashboard showing revenue trends and ROI metrics"
                        width={800}
                        height={450}
                        className="rounded-lg shadow-lg border border-border"
                    />
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-6">What is a Good ROAS?</h3>
                <p className="mb-3">
                    A common benchmark is 4:1 ROAS, where every $1 returns $4, but this varies by industry and profit margins. "Is my ROAS good" is a common question, and the answer depends on your industry benchmarks:
                </p>

                {/* Industry Benchmarks */}
                <div className="mb-6">
                    <h4 className="font-medium mb-3">ROAS Benchmarks by Industry (2025)</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>Retail/E-commerce</span>
                            <span className="font-semibold">4:1 to 10:1</span>
                        </li>
                        <li className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>B2B/SaaS</span>
                            <span className="font-semibold">3:1 to 5:1</span>
                        </li>
                        <li className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>Finance/Insurance</span>
                            <span className="font-semibold">5:1 to 10:1</span>
                        </li>
                        <li className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>Real Estate</span>
                            <span className="font-semibold">3:1 to 8:1</span>
                        </li>
                    </ul>
                </div>

                <div className="my-8 flex justify-center">
                    <Image
                        src="/images/tools/roas-growth.png"
                        alt="FastTools illustration of business growth through optimized ROAS"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-6">ROAS vs ROMI vs ROI - Quick Comparison</h3>
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-left border rounded-lg overflow-hidden">
                        <thead className="bg-muted text-muted-foreground font-medium">
                            <tr>
                                <th className="p-3">Metric</th>
                                <th className="p-3">Formula</th>
                                <th className="p-3">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y border-x border-b">
                            <tr>
                                <td className="p-3 font-medium">ROAS</td>
                                <td className="p-3">Revenue ÷ Ad Spend</td>
                                <td className="p-3">Ad efficiency</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">ROI</td>
                                <td className="p-3">(Revenue - Costs) ÷ Investment</td>
                                <td className="p-3">Overall profitability</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">ROMI</td>
                                <td className="p-3">(Rev - Mktg Cost) ÷ Mktg Cost</td>
                                <td className="p-3">Marketing effectiveness</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-6">How CPC Impacts Your ROAS</h3>
                <p className="mb-4">
                    Optimizing CPC typically means reducing it—making sure ads feature compelling content to get more clicks. Lower CPC means more traffic for the same budget, which directly improves your ROAS potential.
                </p>

                {/* New H3 Sections for SEO */}
                <h3 className="font-semibold text-lg mb-2 mt-6">How to Calculate Break-Even ROAS</h3>
                <p className="mb-4">
                    Knowing your break-even point is crucial. Our <strong>break even ROAS calculator</strong> logic is simple: <code>1 ÷ Profit Margin %</code>. For example, if your profit margin is 25%, your break-even ROAS is 4.0. Any ROAS above this number means you are <strong>calculating profit from ads</strong> effectively.
                </p>

                <h3 className="font-semibold text-lg mb-2 mt-6">ROAS Calculator for Shopify Stores</h3>
                <p className="mb-4">
                    E-commerce platforms like Shopify often show revenue but might not factor in all ad costs across channels. Use this tool as a centralized <strong>advertising ROI calculator</strong> to merge data from Facebook, Google, and TikTok into one profitability view.
                </p>

                <h3 className="font-semibold text-lg mb-2 mt-6">Calculate ROAS for Multiple Campaigns</h3>
                <p className="mb-4">
                    You can calculate the weighted average ROAS for your entire marketing mix. Simply sum up the total spend from all campaigns and the total revenue generated, then input these totals into the <strong>ROAS formula</strong> above to get your aggregate performance.
                </p>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <p className="font-medium text-lg text-primary">Ready to see if your ads are profitable?</p>
                    <p className="text-muted-foreground">Use our free ROAS Calculator now—no signup, no hassle, just instant insights into your advertising performance.</p>
                </div>
            </>
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
            }
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
                description: "Calculate ROAS, ROI, and ad profitability in seconds. Simple & Advanced modes for Google Ads, Facebook Ads, TikTok. Free tool with instant CPA & profit margin analysis.",
                path: "/ad-tools/roas-calculator"
            }}
        />
    )
}
