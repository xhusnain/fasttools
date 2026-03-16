"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Clock, TrendingUp, TrendingDown,
  BarChart3, Target, Shield, AlertTriangle, Zap, Users, ArrowUpRight,
  ArrowDownRight, Percent, Activity
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  SaaSPaybackResult, PaybackRating, PaybackProjectionEntry,
  BenchmarkEntry, PaybackRecommendation
} from "@/types/calculator-types/saas-payback-calculator.types"

export function SaaSPaybackCalculator() {
  const [cac, setCac] = useState("")
  const [arpu, setArpu] = useState("")
  const [grossMargin, setGrossMargin] = useState("80")
  const [monthlyChurn, setMonthlyChurn] = useState("5")

  const [result, setResult] = useState<SaaSPaybackResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculatePayback = () => {
    if (!cac || !arpu) return
    setIsCalculating(true)

    setTimeout(() => {
      const cacVal = Number.parseFloat(cac)
      const arpuVal = Number.parseFloat(arpu)
      const marginPct = (Number.parseFloat(grossMargin) || 80) / 100
      const churnPct = (Number.parseFloat(monthlyChurn) || 5) / 100

      const monthlyGrossProfit = arpuVal * marginPct
      const annualGrossProfit = monthlyGrossProfit * 12

      // Payback period = CAC / Monthly Gross Profit
      const paybackMonths = monthlyGrossProfit > 0 ? cacVal / monthlyGrossProfit : Infinity
      const paybackYears = Math.floor(paybackMonths / 12)
      const paybackRemainder = Math.round(paybackMonths % 12)
      const paybackFormatted = paybackYears > 0
        ? `${paybackYears}y ${paybackRemainder}m`
        : `${Math.round(paybackMonths * 10) / 10} months`

      // Average customer lifespan = 1 / churn rate
      const avgLifespan = churnPct > 0 ? 1 / churnPct : 120 // cap at 10 years

      // LTV = ARPU × Gross Margin × Average Lifespan
      const ltv = arpuVal * marginPct * avgLifespan

      // LTV:CAC ratio
      const ltvCacRatio = cacVal > 0 ? ltv / cacVal : 0

      // ROI at milestones
      const calcROI = (months: number): number => {
        let cumGrossProfit = 0
        let remaining = 1.0
        for (let i = 1; i <= months; i++) {
          cumGrossProfit += arpuVal * marginPct * remaining
          remaining *= (1 - churnPct)
        }
        return cacVal > 0 ? ((cumGrossProfit - cacVal) / cacVal) * 100 : 0
      }

      // Rating
      const getPaybackRating = (): PaybackRating => {
        if (paybackMonths <= 6) return { label: "Excellent", color: "text-green-500", description: "Fast payback — strong unit economics and efficient acquisition." }
        if (paybackMonths <= 12) return { label: "Good", color: "text-blue-500", description: "Healthy payback within a year. Standard for well-run SaaS." }
        if (paybackMonths <= 18) return { label: "Acceptable", color: "text-yellow-500", description: "Slightly extended payback. Focus on improving CAC or retention." }
        if (paybackMonths <= 24) return { label: "Concerning", color: "text-orange-500", description: "Long payback strains cash flow. Needs improvement in CAC or ARPU." }
        return { label: "Critical", color: "text-red-500", description: "Payback exceeds 2 years. Unit economics may not be sustainable." }
      }

      // Monthly projection (36 months)
      const monthlyProjection: PaybackProjectionEntry[] = []
      let cumRevenue = 0
      let cumGrossProfit = 0
      let survivingPct = 1.0
      for (let i = 1; i <= 36; i++) {
        const monthRevenue = arpuVal * survivingPct
        const monthGP = monthRevenue * marginPct
        cumRevenue += monthRevenue
        cumGrossProfit += monthGP
        const netPosition = cumGrossProfit - cacVal
        monthlyProjection.push({
          month: i,
          cumulativeRevenue: Number.parseFloat(cumRevenue.toFixed(2)),
          cumulativeGrossProfit: Number.parseFloat(cumGrossProfit.toFixed(2)),
          netPosition: Number.parseFloat(netPosition.toFixed(2)),
          recovered: netPosition >= 0
        })
        survivingPct *= (1 - churnPct)
      }

      // Benchmarks
      const benchmarkComparison: BenchmarkEntry[] = [
        {
          segment: "Enterprise SaaS",
          typicalPayback: "12-18 months",
          typicalLtvCac: "5:1 – 8:1",
          yourPayback: paybackMonths,
          status: paybackMonths <= 18 ? "On Track" : "Behind"
        },
        {
          segment: "B2B SMB SaaS",
          typicalPayback: "6-12 months",
          typicalLtvCac: "3:1 – 5:1",
          yourPayback: paybackMonths,
          status: paybackMonths <= 12 ? "On Track" : "Behind"
        },
        {
          segment: "B2C SaaS",
          typicalPayback: "3-6 months",
          typicalLtvCac: "3:1 – 4:1",
          yourPayback: paybackMonths,
          status: paybackMonths <= 6 ? "On Track" : "Behind"
        },
        {
          segment: "VC-Backed (Growth)",
          typicalPayback: "12-24 months",
          typicalLtvCac: "3:1+",
          yourPayback: paybackMonths,
          status: paybackMonths <= 24 && ltvCacRatio >= 3 ? "On Track" : "Behind"
        }
      ]

      // Recommendations
      const recommendations: PaybackRecommendation[] = []
      if (paybackMonths > 12) recommendations.push({ action: "Reduce CAC by optimising ad spend, improving conversion rates, or shifting to organic/referral channels", impact: "Every 10% CAC reduction cuts payback by ~1 month", priority: "high" })
      if (paybackMonths > 12) recommendations.push({ action: "Increase ARPU through pricing tiers, usage-based pricing, or add-on features", impact: "20% ARPU increase cuts payback by ~20%", priority: "high" })
      if (churnPct > 0.05) recommendations.push({ action: "Improve retention — reduce monthly churn below 5% with better onboarding and customer success", impact: "Directly increases LTV and LTV:CAC ratio", priority: "high" })
      if (marginPct < 0.75) recommendations.push({ action: "Improve gross margin by reducing hosting costs, automating support, or renegotiating vendor contracts", impact: "Higher margins mean faster payback on every customer", priority: "medium" })
      if (ltvCacRatio < 3) recommendations.push({ action: "LTV:CAC below 3:1 — either increase LTV (retention, ARPU) or decrease CAC (efficiency)", impact: "Target 3:1 minimum for sustainable growth", priority: "high" })
      if (ltvCacRatio >= 5) recommendations.push({ action: "Strong unit economics (LTV:CAC > 5:1) — consider investing more aggressively in acquisition", impact: "You may be under-spending on growth", priority: "low" })

      setResult({
        paybackPeriodMonths: Number.parseFloat(paybackMonths.toFixed(1)),
        paybackPeriodFormatted: paybackFormatted,
        ltv: Math.round(ltv),
        ltvCacRatio: Number.parseFloat(ltvCacRatio.toFixed(1)),
        monthlyGrossProfit: Number.parseFloat(monthlyGrossProfit.toFixed(2)),
        annualGrossProfit: Math.round(annualGrossProfit),
        grossMarginPercent: marginPct * 100,
        cacPerCustomer: cacVal,
        arpu: arpuVal,
        monthlyChurnRate: churnPct * 100,
        averageCustomerLifespan: Number.parseFloat(avgLifespan.toFixed(1)),
        roiAtMonth12: Number.parseFloat(calcROI(12).toFixed(1)),
        roiAtMonth24: Number.parseFloat(calcROI(24).toFixed(1)),
        roiAtMonth36: Number.parseFloat(calcROI(36).toFixed(1)),
        paybackRating: getPaybackRating(),
        monthlyProjection,
        benchmarkComparison,
        recommendations
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `SaaS Payback Period Analysis`,
      `============================`,
      `CAC: $${result.cacPerCustomer} | ARPU: $${result.arpu}/mo | Margin: ${result.grossMarginPercent}%`,
      ``,
      `Payback Period: ${result.paybackPeriodFormatted}`,
      `LTV: $${result.ltv.toLocaleString()}`,
      `LTV:CAC Ratio: ${result.ltvCacRatio}:1`,
      `Avg Customer Lifespan: ${result.averageCustomerLifespan} months`,
      ``,
      `ROI at 12mo: ${result.roiAtMonth12}% | 24mo: ${result.roiAtMonth24}% | 36mo: ${result.roiAtMonth36}%`,
      ``,
      `Generated by FastTools SaaS Payback Period Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount)

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
            SaaS Payback Period Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate how many months it takes to recover your customer acquisition cost from gross profit
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="cac" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <DollarSign className="h-4 w-4" /> Customer Acquisition Cost (CAC)
              </GLabel>
              <GInput id="cac" type="number" value={cac} onChange={(e) => setCac(e.target.value)} placeholder="e.g., 500" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">Total sales + marketing spend / new customers</div>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="arpu" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Users className="h-4 w-4" /> Monthly ARPU ($)
              </GLabel>
              <GInput id="arpu" type="number" value={arpu} onChange={(e) => setArpu(e.target.value)} placeholder="e.g., 99" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">Average Revenue Per User per month</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="grossMargin" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Percent className="h-4 w-4" /> Gross Margin (%)
              </GLabel>
              <GInput id="grossMargin" type="number" value={grossMargin} onChange={(e) => setGrossMargin(e.target.value)} placeholder="80" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">SaaS avg: 70-85%. Revenue minus COGS (hosting, support).</div>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="monthlyChurn" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <TrendingDown className="h-4 w-4" /> Monthly Churn Rate (%)
              </GLabel>
              <GInput id="monthlyChurn" type="number" step="0.1" value={monthlyChurn} onChange={(e) => setMonthlyChurn(e.target.value)} placeholder="5" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">Use our Churn Rate Calculator to find this</div>
            </div>
          </div>

          <GButton
            onClick={calculatePayback}
            disabled={isCalculating || !cac || !arpu}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculating...</>
            ) : (
              <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate Payback Period</>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Rating Banner */}
          {(() => {
            const bg = result.paybackRating.label === "Excellent" ? "bg-green-500/10 border-green-500/30"
              : result.paybackRating.label === "Good" ? "bg-blue-500/10 border-blue-500/30"
              : result.paybackRating.label === "Acceptable" ? "bg-yellow-500/10 border-yellow-500/30"
              : result.paybackRating.label === "Concerning" ? "bg-orange-500/10 border-orange-500/30"
              : "bg-red-500/10 border-red-500/30"
            const Icon = result.paybackPeriodMonths <= 12 ? Shield : AlertTriangle
            return (
              <GCard className={`shadow-lg border animate-fade-in-up ${bg}`}>
                <GCardContent className="py-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${result.paybackRating.color}`} />
                      <div>
                        <div className={`text-2xl font-bold ${result.paybackRating.color}`}>{result.paybackRating.label}</div>
                        <div className="text-sm text-muted-foreground">{result.paybackRating.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Target</div>
                      <div className="text-xs text-muted-foreground">B2B: &lt;12mo | B2C: &lt;6mo | Enterprise: &lt;18mo</div>
                    </div>
                  </div>
                </GCardContent>
              </GCard>
            )
          })()}

          {/* Primary Metrics */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><Clock className="h-4 w-4 text-foreground" /></div>
                Payback Analysis
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Main Payback */}
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">CAC Payback Period</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{result.paybackPeriodFormatted}</div>
                <div className="text-sm text-muted-foreground mt-2">
                  {formatCurrency(result.cacPerCustomer)} CAC recovered at {formatCurrency(result.monthlyGrossProfit)}/mo gross profit
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <DollarSign className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{formatCurrency(result.ltv)}</div>
                  <div className="text-xs text-muted-foreground">Customer LTV</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <Target className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{result.ltvCacRatio}:1</div>
                  <div className="text-xs text-muted-foreground">LTV:CAC Ratio</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <Clock className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{result.averageCustomerLifespan}mo</div>
                  <div className="text-xs text-muted-foreground">Avg Lifespan</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <Percent className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{formatCurrency(result.monthlyGrossProfit)}</div>
                  <div className="text-xs text-muted-foreground">Monthly GP</div>
                </div>
              </div>

              {/* ROI Milestones */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm font-semibold text-heading-accent mb-3 flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4" /> ROI Milestones (including churn)
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "12 months", roi: result.roiAtMonth12 },
                    { label: "24 months", roi: result.roiAtMonth24 },
                    { label: "36 months", roi: result.roiAtMonth36 },
                  ].map(m => (
                    <div key={m.label} className="text-center p-2 bg-muted rounded-lg border border-border">
                      <div className={`text-lg font-bold ${m.roi >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {m.roi >= 0 ? "+" : ""}{m.roi}%
                      </div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formula */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2">Formulas Used</h4>
                <div className="space-y-1">
                  <code className="block text-xs text-muted-foreground font-mono">Payback Period = CAC / (ARPU × Gross Margin)</code>
                  <code className="block text-xs text-muted-foreground font-mono">LTV = ARPU × Gross Margin × (1 / Monthly Churn Rate)</code>
                  <code className="block text-xs text-muted-foreground font-mono">LTV:CAC Ratio = LTV / CAC</code>
                </div>
              </div>

              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Payback Projection */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><BarChart3 className="h-4 w-4 text-foreground" /></div>
                36-Month Payback Projection
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Cumulative gross profit vs CAC over time (accounting for churn)
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              {/* Visual chart - key months */}
              <div className="mb-4 bg-card rounded-lg p-3 border border-border">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {result.monthlyProjection.filter((_, i) => i === 2 || i === 5 || i === 8 || i === 11 || i === 17 || i === 23 || i === 35).map(entry => (
                    <div key={entry.month} className="bg-card rounded-lg p-2 border border-border">
                      <div className="text-xs font-semibold text-foreground mb-1">Month {entry.month}</div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-heading-accent">Gross Profit:</span>
                          <span className="font-medium text-foreground">{formatCurrency(entry.cumulativeGrossProfit)}</span>
                        </div>
                        <div className="flex justify-between text-[10px]">
                          <span className={entry.netPosition >= 0 ? "text-green-500" : "text-red-400"}>Net:</span>
                          <span className={`font-medium ${entry.netPosition >= 0 ? "text-green-500" : "text-red-400"}`}>
                            {entry.netPosition >= 0 ? "+" : ""}{formatCurrency(entry.netPosition)}
                          </span>
                        </div>
                        <div className="w-full bg-border rounded-full h-1.5 mt-1">
                          <div className={`h-1.5 rounded-full transition-all ${entry.recovered ? "bg-green-500" : "bg-red-500"}`}
                            style={{ width: `${Math.min(100, (entry.cumulativeGrossProfit / result.cacPerCustomer) * 100)}%` }} />
                        </div>
                        <div className="text-[10px] text-center text-muted-foreground">
                          {entry.recovered ? "CAC Recovered" : `${Math.round((entry.cumulativeGrossProfit / result.cacPerCustomer) * 100)}% recovered`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto max-h-64">
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-card">
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Month</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Cum. Revenue</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Cum. GP</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Net Position</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.monthlyProjection.filter((_, i) => i < 12 || i % 3 === 2).map(entry => (
                      <tr key={entry.month} className={`border-b border-border ${entry.recovered && result.monthlyProjection[entry.month - 2]?.recovered === false ? "bg-green-500/5" : ""}`}>
                        <td className="py-1.5 px-2 font-medium text-foreground">{entry.month}</td>
                        <td className="py-1.5 px-2 text-right text-foreground">{formatCurrency(entry.cumulativeRevenue)}</td>
                        <td className="py-1.5 px-2 text-right text-heading-accent font-medium">{formatCurrency(entry.cumulativeGrossProfit)}</td>
                        <td className={`py-1.5 px-2 text-right font-medium ${entry.netPosition >= 0 ? "text-green-500" : "text-red-400"}`}>
                          {entry.netPosition >= 0 ? "+" : ""}{formatCurrency(entry.netPosition)}
                        </td>
                        <td className="py-1.5 px-2 text-right">
                          {entry.recovered ? <span className="text-green-500 text-[10px]">RECOVERED</span> : <span className="text-muted-foreground text-[10px]">Paying back</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Benchmarks */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><Target className="h-4 w-4 text-foreground" /></div>
                Industry Benchmarks
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Segment</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Typical Payback</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Typical LTV:CAC</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Your Payback</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.benchmarkComparison.map(b => (
                      <tr key={b.segment} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{b.segment}</td>
                        <td className="py-2 px-2 text-right text-foreground">{b.typicalPayback}</td>
                        <td className="py-2 px-2 text-right text-foreground">{b.typicalLtvCac}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{b.yourPayback.toFixed(1)}mo</td>
                        <td className="py-2 px-2 text-right">
                          <span className={`text-[10px] font-medium ${b.status === "On Track" ? "text-green-500" : "text-orange-500"}`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <GCard className="shadow-lg border-border bg-card">
              <GCardHeader className="pb-3">
                <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                  <div className="p-1.5 bg-primary/10 rounded-lg"><Zap className="h-4 w-4 text-foreground" /></div>
                  Recommendations
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-2">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${rec.priority === "high" ? "border-red-500/30 bg-red-500/5" : rec.priority === "medium" ? "border-yellow-500/30 bg-yellow-500/5" : "border-blue-500/30 bg-blue-500/5"}`}>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="text-xs font-semibold text-foreground flex-1">{rec.action}</div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${rec.priority === "high" ? "bg-red-500/20 text-red-500" : rec.priority === "medium" ? "bg-yellow-500/20 text-yellow-500" : "bg-blue-500/20 text-blue-500"}`}>
                        {rec.priority.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-1">{rec.impact}</div>
                  </div>
                ))}
              </GCardContent>
            </GCard>
          )}
        </div>
      )}
    </div>
  )
}
