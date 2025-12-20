"use client"

import { useState, useEffect } from "react"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GMessage } from "@/ui/gmessage"
import { DollarSign, Percent, TrendingUp, Info } from "lucide-react"

export function ROASCalculator() {
    const [adSpend, setAdSpend] = useState<string>("1000")
    const [revenue, setRevenue] = useState<string>("5000")
    const [cpc, setCpc] = useState<string>("1.50")
    const [clicks, setClicks] = useState<string>("667")
    const [conversionRate, setConversionRate] = useState<string>("2.5")
    const [aov, setAov] = useState<string>("150")

    // Mode: "simple" (Spend vs Revenue) or "advanced" (CPC, Clicks, etc.)
    const [mode, setMode] = useState<"simple" | "advanced">("simple")

    const [results, setResults] = useState({
        roas: 0,
        roi: 0,
        profit: 0,
        cpa: 0,
        breakEvenRoas: 0,
        profitMargin: 0
    })

    // Calculate based on Simple inputs (Spend & Revenue)
    const calculateSimple = () => {
        const spend = parseFloat(adSpend) || 0
        const rev = parseFloat(revenue) || 0

        if (spend <= 0) return

        const profit = rev - spend
        const roas = rev / spend
        const roi = (profit / spend) * 100
        // Arbitrary default profit margin assumption for break-even calc in simple mode
        const profitMarginPercent = 100

        setResults({
            roas,
            roi,
            profit,
            cpa: 0, // Not applicable in simple unless we have conversions
            breakEvenRoas: 100 / profitMarginPercent, // rough estimate
            profitMargin: (profit / rev) * 100
        })
    }

    // Calculate based on Advanced inputs
    const calculateAdvanced = () => {
        const spend = parseFloat(adSpend) || 0
        const costPerClick = parseFloat(cpc) || 0
        const convRate = parseFloat(conversionRate) || 0
        const averageOrderVal = parseFloat(aov) || 0

        if (spend <= 0 || costPerClick <= 0) return

        const totalClicks = spend / costPerClick
        const totalConversions = totalClicks * (convRate / 100)
        const totalRev = totalConversions * averageOrderVal

        const profit = totalRev - spend
        const roas = totalRev / spend
        const roi = (profit / spend) * 100
        const cpa = totalConversions > 0 ? spend / totalConversions : 0

        setResults({
            roas,
            roi,
            profit,
            cpa,
            breakEvenRoas: 1, // Simplified
            profitMargin: (profit / totalRev) * 100
        })

        // Sync back to simple fields for consistency if moving tabs
        setRevenue(totalRev.toFixed(0))
        setClicks(totalClicks.toFixed(0))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (mode === "simple") {
                calculateSimple()
            } else {
                calculateAdvanced()
            }
        }, 100)
        return () => clearTimeout(timer)
    }, [adSpend, revenue, cpc, conversionRate, aov, mode])

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    }

    const formatNumber = (val: number) => {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(val)
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <GCard className="h-fit">
                <GCardHeader>
                    <GCardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Input Metrics
                    </GCardTitle>
                    <GCardDescription>
                        Enter your campaign data to calculate profitability.
                    </GCardDescription>
                </GCardHeader>
                <GCardContent>
                    <GTabs value={mode} onValueChange={(v) => setMode(v as "simple" | "advanced")} className="w-full">
                        <GTabsList className="grid w-full grid-cols-2 mb-6">
                            <GTabsTrigger value="simple">Simple</GTabsTrigger>
                            <GTabsTrigger value="advanced">Advanced</GTabsTrigger>
                        </GTabsList>

                        <GTabsContent value="simple">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <GLabel htmlFor="s_spend">Total Ad Spend ($)</GLabel>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                        <GInput
                                            id="s_spend"
                                            type="number"
                                            className="pl-9"
                                            value={adSpend}
                                            onChange={(e) => setAdSpend(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <GLabel htmlFor="s_revenue">Total Revenue ($)</GLabel>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                        <GInput
                                            id="s_revenue"
                                            type="number"
                                            className="pl-9"
                                            value={revenue}
                                            onChange={(e) => setRevenue(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </GTabsContent>

                        <GTabsContent value="advanced">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <GLabel htmlFor="a_spend">Ad Spend ($)</GLabel>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                            <GInput
                                                id="a_spend"
                                                type="number"
                                                className="pl-9"
                                                value={adSpend}
                                                onChange={(e) => setAdSpend(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <GLabel htmlFor="a_cpc">CPC (Cost Per Click)</GLabel>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                            <GInput
                                                id="a_cpc"
                                                type="number"
                                                className="pl-9"
                                                value={cpc}
                                                onChange={(e) => setCpc(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <GLabel htmlFor="a_conv">Conversion Rate (%)</GLabel>
                                        <div className="relative">
                                            <Percent className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                            <GInput
                                                id="a_conv"
                                                type="number"
                                                className="pl-9"
                                                value={conversionRate}
                                                onChange={(e) => setConversionRate(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <GLabel htmlFor="a_aov">Avg. Order Value ($)</GLabel>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground z-10" />
                                            <GInput
                                                id="a_aov"
                                                type="number"
                                                className="pl-9"
                                                value={aov}
                                                onChange={(e) => setAov(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GTabsContent>
                    </GTabs>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                            <Info className="h-4 w-4 mt-0.5 shrink-0" />
                            <p>
                                {mode === "simple"
                                    ? "Enter your total ad spend and total revenue to see your ROAS instantly."
                                    : "Calculate potential returns by estimating traffic costs, conversion rates, and order values."}
                            </p>
                        </div>
                    </div>
                </GCardContent>
            </GCard>

            <div className="space-y-6">
                <GCard className="bg-primary/5 border-primary/20">
                    <GCardHeader className="pb-2">
                        <GCardTitle className="text-xl">Result Overview</GCardTitle>
                    </GCardHeader>
                    <GCardContent className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <span className="text-sm font-medium text-muted-foreground">ROAS</span>
                            <div className={`text-3xl font-bold ${results.roas >= 4 ? "text-green-600" : results.roas >= 2 ? "text-blue-600" : "text-red-500"}`}>
                                {formatNumber(results.roas)}x
                            </div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-sm font-medium text-muted-foreground">ROI</span>
                            <div className={`text-3xl font-bold ${results.roi >= 0 ? "text-green-600" : "text-red-500"}`}>
                                {formatNumber(results.roi)}%
                            </div>
                        </div>
                    </GCardContent>
                </GCard>

                <div className="grid grid-cols-2 gap-4">
                    <GCard>
                        <GCardContent className="pt-6">
                            <div className="text-sm font-medium text-muted-foreground mb-1">Total Revenue</div>
                            <div className="text-2xl font-bold">{formatCurrency(parseFloat(revenue) || (results.profit + parseFloat(adSpend)))}</div>
                        </GCardContent>
                    </GCard>
                    <GCard>
                        <GCardContent className="pt-6">
                            <div className="text-sm font-medium text-muted-foreground mb-1">Net Profit</div>
                            <div className={`text-2xl font-bold ${results.profit >= 0 ? "text-green-600" : "text-red-600"}`}>
                                {formatCurrency(results.profit)}
                            </div>
                        </GCardContent>
                    </GCard>
                    <GCard>
                        <GCardContent className="pt-6">
                            <div className="text-sm font-medium text-muted-foreground mb-1">CPA (Cost/Action)</div>
                            <div className="text-2xl font-bold">{results.cpa > 0 ? formatCurrency(results.cpa) : "-"}</div>
                        </GCardContent>
                    </GCard>
                    <GCard>
                        <GCardContent className="pt-6">
                            <div className="text-sm font-medium text-muted-foreground mb-1">Profit Margin</div>
                            <div className="text-2xl font-bold">{formatNumber(results.profitMargin)}%</div>
                        </GCardContent>
                    </GCard>
                </div>

                {results.roas < 1 && (
                    <GMessage
                        type="error"
                        title="Negative Return"
                        message="Your current spend is higher than your revenue. You are losing money on this campaign."
                        isVisible={true}
                    />
                )}
            </div>
        </div>
    )
}
