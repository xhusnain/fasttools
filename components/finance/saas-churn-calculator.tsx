"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, TrendingDown, TrendingUp, Users, DollarSign,
  BarChart3, AlertTriangle, Target, Clock, Shield, Percent, ArrowDownRight,
  ArrowUpRight, Activity
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { ChurnResult, MonthlyProjectionEntry } from "@/types/calculator-types/saas-churn-calculator.types"

type CalculationMode = "customer" | "revenue" | "combined"

export function SaaSChurnCalculator() {
  const [mode, setMode] = useState<CalculationMode>("combined")
  const [customersStart, setCustomersStart] = useState("")
  const [customersEnd, setCustomersEnd] = useState("")
  const [newCustomers, setNewCustomers] = useState("")
  const [mrrStart, setMrrStart] = useState("")
  const [mrrEnd, setMrrEnd] = useState("")
  const [expansionRevenue, setExpansionRevenue] = useState("")
  const [arpu, setArpu] = useState("")
  const [result, setResult] = useState<ChurnResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const modes = [
    { id: "customer" as const, label: "Customer Churn", icon: Users, description: "Track customer losses" },
    { id: "revenue" as const, label: "Revenue Churn", icon: DollarSign, description: "Track MRR losses" },
    { id: "combined" as const, label: "Full Analysis", icon: BarChart3, description: "Both metrics + projections" }
  ]

  const calculateChurn = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const startCustomers = Number.parseFloat(customersStart) || 0
      const endCustomers = Number.parseFloat(customersEnd) || 0
      const addedCustomers = Number.parseFloat(newCustomers) || 0
      const startMRR = Number.parseFloat(mrrStart) || 0
      const endMRR = Number.parseFloat(mrrEnd) || 0
      const expansion = Number.parseFloat(expansionRevenue) || 0
      const avgRevPerUser = Number.parseFloat(arpu) || (startMRR && startCustomers ? startMRR / startCustomers : 0)

      // Customer Churn: Lost / Start × 100
      const customersLost = Math.max(0, startCustomers + addedCustomers - endCustomers)
      const customerChurnRate = startCustomers > 0 ? (customersLost / startCustomers) * 100 : 0
      const retentionRate = 100 - customerChurnRate

      // Revenue Churn: MRR Lost / Starting MRR × 100
      const mrrLost = Math.max(0, startMRR - endMRR + expansion)
      const revenueChurnRate = startMRR > 0 ? (mrrLost / startMRR) * 100 : 0
      const netRevenueChurnRate = startMRR > 0 ? ((mrrLost - expansion) / startMRR) * 100 : 0
      const revenueRetentionRate = 100 - revenueChurnRate

      // Average Customer Lifespan (in months) = 1 / Monthly Churn Rate
      const monthlyChurnDecimal = customerChurnRate / 100
      const averageCustomerLifespan = monthlyChurnDecimal > 0 ? 1 / monthlyChurnDecimal : 0

      // Customer Lifetime Value = ARPU × Average Lifespan
      const customerLifetimeValue = avgRevPerUser * averageCustomerLifespan

      // Projected Annual Churn = 1 - (1 - Monthly Churn Rate)^12
      const projectedAnnualChurn = (1 - Math.pow(1 - monthlyChurnDecimal, 12)) * 100

      // Projected customers remaining after 12 months
      const projectedCustomersRemaining12Months = startCustomers * Math.pow(1 - monthlyChurnDecimal, 12)

      // Monthly projection for 12 months (without new acquisitions)
      const monthlyProjection: MonthlyProjectionEntry[] = []
      let remainingCustomers = startCustomers
      let remainingMRR = startMRR
      let cumulativeRevenueLost = 0

      for (let i = 1; i <= 12; i++) {
        const monthlyCustomersLost = remainingCustomers * monthlyChurnDecimal
        const monthlyMRRLost = remainingMRR * (revenueChurnRate / 100)

        remainingCustomers = Math.max(0, remainingCustomers - monthlyCustomersLost)
        remainingMRR = Math.max(0, remainingMRR - monthlyMRRLost)
        cumulativeRevenueLost += monthlyMRRLost

        monthlyProjection.push({
          month: i,
          customersRemaining: Math.round(remainingCustomers),
          customersLost: Math.round(monthlyCustomersLost),
          mrrRemaining: Number.parseFloat(remainingMRR.toFixed(2)),
          mrrLost: Number.parseFloat(monthlyMRRLost.toFixed(2)),
          cumulativeRevenueLost: Number.parseFloat(cumulativeRevenueLost.toFixed(2))
        })
      }

      setResult({
        customerChurnRate: Number.parseFloat(customerChurnRate.toFixed(2)),
        revenueChurnRate: Number.parseFloat(revenueChurnRate.toFixed(2)),
        netRevenueChurnRate: Number.parseFloat(netRevenueChurnRate.toFixed(2)),
        customersLost,
        customersStart: startCustomers,
        customersEnd: endCustomers,
        mrrLost: Number.parseFloat(mrrLost.toFixed(2)),
        mrrStart: startMRR,
        expansionRevenue: expansion,
        retentionRate: Number.parseFloat(retentionRate.toFixed(2)),
        revenueRetentionRate: Number.parseFloat(revenueRetentionRate.toFixed(2)),
        averageCustomerLifespan: Number.parseFloat(averageCustomerLifespan.toFixed(1)),
        customerLifetimeValue: Number.parseFloat(customerLifetimeValue.toFixed(2)),
        projectedAnnualChurn: Number.parseFloat(projectedAnnualChurn.toFixed(2)),
        projectedCustomersRemaining12Months: Math.round(projectedCustomersRemaining12Months),
        monthlyProjection
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `SaaS Churn Rate Analysis`,
      `========================`,
      `Customer Churn Rate: ${result.customerChurnRate}%`,
      `Revenue Churn Rate: ${result.revenueChurnRate}%`,
      `Net Revenue Churn: ${result.netRevenueChurnRate}%`,
      `Retention Rate: ${result.retentionRate}%`,
      `Avg Customer Lifespan: ${result.averageCustomerLifespan} months`,
      `Customer LTV: $${result.customerLifetimeValue.toLocaleString()}`,
      `Projected Annual Churn: ${result.projectedAnnualChurn}%`,
      ``,
      `Generated by FastTools SaaS Churn Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getChurnSeverity = (rate: number): { label: string; color: string; bgColor: string; icon: typeof Shield } => {
    if (rate <= 2) return { label: "Excellent", color: "text-green-500", bgColor: "bg-green-500/10 border-green-500/30", icon: Shield }
    if (rate <= 5) return { label: "Healthy", color: "text-blue-500", bgColor: "bg-blue-500/10 border-blue-500/30", icon: Target }
    if (rate <= 7) return { label: "Concerning", color: "text-yellow-500", bgColor: "bg-yellow-500/10 border-yellow-500/30", icon: AlertTriangle }
    if (rate <= 10) return { label: "High Risk", color: "text-orange-500", bgColor: "bg-orange-500/10 border-orange-500/30", icon: AlertTriangle }
    return { label: "Critical", color: "text-red-500", bgColor: "bg-red-500/10 border-red-500/30", icon: AlertTriangle }
  }

  const isFormValid = () => {
    if (mode === "customer") return customersStart && customersEnd
    if (mode === "revenue") return mrrStart && mrrEnd
    return customersStart && customersEnd && mrrStart && mrrEnd
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator Card */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
            SaaS Churn Rate Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate customer churn, revenue churn, retention rate, CLV, and 12-month projections
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Mode Selection */}
          <div className="space-y-3">
            <GLabel className="text-base font-semibold flex items-center gap-2 text-heading-accent">
              <Target className="h-4 w-4 text-heading-accent" />
              Calculation Mode
            </GLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modes.map((m) => {
                const Icon = m.icon
                return (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    aria-pressed={mode === m.id}
                    className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                      mode === m.id
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    <Icon className={`h-5 w-5 mb-1.5 ${mode === m.id ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    <div className="text-sm font-medium">{m.label}</div>
                    <div className={`text-xs mt-0.5 ${mode === m.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{m.description}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Customer Inputs */}
          {(mode === "customer" || mode === "combined") && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                <Users className="h-4 w-4" />
                Customer Data
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <GLabel htmlFor="customersStart" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    Customers at Start
                  </GLabel>
                  <GInput
                    id="customersStart"
                    type="number"
                    value={customersStart}
                    onChange={(e) => setCustomersStart(e.target.value)}
                    placeholder="e.g., 1000"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="customersEnd" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    Customers at End
                  </GLabel>
                  <GInput
                    id="customersEnd"
                    type="number"
                    value={customersEnd}
                    onChange={(e) => setCustomersEnd(e.target.value)}
                    placeholder="e.g., 950"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="newCustomers" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    New Customers Added
                  </GLabel>
                  <GInput
                    id="newCustomers"
                    type="number"
                    value={newCustomers}
                    onChange={(e) => setNewCustomers(e.target.value)}
                    placeholder="e.g., 30 (optional)"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                  <div className="text-xs text-muted-foreground">Optional: for accurate churn counting</div>
                </div>
              </div>
            </div>
          )}

          {/* Revenue Inputs */}
          {(mode === "revenue" || mode === "combined") && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Revenue Data (MRR)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <GLabel htmlFor="mrrStart" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    MRR at Start ($)
                  </GLabel>
                  <GInput
                    id="mrrStart"
                    type="number"
                    value={mrrStart}
                    onChange={(e) => setMrrStart(e.target.value)}
                    placeholder="e.g., 50000"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="mrrEnd" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    MRR at End ($)
                  </GLabel>
                  <GInput
                    id="mrrEnd"
                    type="number"
                    value={mrrEnd}
                    onChange={(e) => setMrrEnd(e.target.value)}
                    placeholder="e.g., 48000"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="expansionRevenue" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    Expansion Revenue ($)
                  </GLabel>
                  <GInput
                    id="expansionRevenue"
                    type="number"
                    value={expansionRevenue}
                    onChange={(e) => setExpansionRevenue(e.target.value)}
                    placeholder="e.g., 3000 (optional)"
                    className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                  />
                  <div className="text-xs text-muted-foreground">Upgrades, upsells from existing customers</div>
                </div>
              </div>
            </div>
          )}

          {/* ARPU Input (Combined mode) */}
          {mode === "combined" && (
            <div className="space-y-2">
              <GLabel htmlFor="arpu" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Percent className="h-4 w-4" />
                ARPU — Average Revenue Per User ($)
              </GLabel>
              <GInput
                id="arpu"
                type="number"
                value={arpu}
                onChange={(e) => setArpu(e.target.value)}
                placeholder="Auto-calculated from MRR/Customers if left empty"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
              />
              <div className="text-xs text-muted-foreground">Leave empty to auto-calculate from MRR / Customers</div>
            </div>
          )}

          {/* Calculate Button */}
          <GButton
            onClick={calculateChurn}
            disabled={isCalculating || !isFormValid()}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Analyzing Churn...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate Churn Rate
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Churn Health Score */}
          {(() => {
            const severity = getChurnSeverity(result.customerChurnRate)
            const SeverityIcon = severity.icon
            return (
              <GCard className={`shadow-lg border animate-fade-in-up ${severity.bgColor}`}>
                <GCardContent className="py-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <SeverityIcon className={`h-8 w-8 ${severity.color}`} />
                      <div>
                        <div className={`text-2xl font-bold ${severity.color}`}>{severity.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {result.customerChurnRate}% monthly churn rate
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Industry Benchmark</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        B2B SaaS: 3-5% | B2C SaaS: 5-7% | Enterprise: 1-2%
                      </div>
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
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <TrendingDown className="h-4 w-4 text-foreground" />
                </div>
                Churn Analysis Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Main Churn Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(mode === "customer" || mode === "combined") && (
                  <div className="text-center p-4 rounded-xl bg-card border border-red-500/20">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <ArrowDownRight className="h-5 w-5 text-red-500" />
                      <span className="text-sm text-muted-foreground">Customer Churn</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">{result.customerChurnRate}%</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {result.customersLost} of {result.customersStart} customers lost
                    </div>
                  </div>
                )}
                {(mode === "revenue" || mode === "combined") && (
                  <div className="text-center p-4 rounded-xl bg-card border border-orange-500/20">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <DollarSign className="h-5 w-5 text-orange-500" />
                      <span className="text-sm text-muted-foreground">Revenue Churn</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">{result.revenueChurnRate}%</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {formatCurrency(result.mrrLost)} MRR lost
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(mode === "customer" || mode === "combined") && (
                  <div className="p-3 rounded-lg bg-card border border-green-700">
                    <div className="flex items-center gap-1 mb-1">
                      <ArrowUpRight className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-xs text-muted-foreground">Retention</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{result.retentionRate}%</div>
                  </div>
                )}
                {(mode === "revenue" || mode === "combined") && (
                  <div className="p-3 rounded-lg bg-card border border-blue-700">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
                      <span className="text-xs text-muted-foreground">Net Rev Churn</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{result.netRevenueChurnRate}%</div>
                  </div>
                )}
                {mode === "combined" && (
                  <>
                    <div className="p-3 rounded-lg bg-card border border-purple-700">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="h-3.5 w-3.5 text-purple-500" />
                        <span className="text-xs text-muted-foreground">Avg Lifespan</span>
                      </div>
                      <div className="text-xl font-bold text-foreground">{result.averageCustomerLifespan}mo</div>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-primary">
                      <div className="flex items-center gap-1 mb-1">
                        <DollarSign className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs text-muted-foreground">Customer LTV</span>
                      </div>
                      <div className="text-xl font-bold text-foreground">{formatCurrency(result.customerLifetimeValue)}</div>
                    </div>
                  </>
                )}
              </div>

              {/* Annual Projection Banner */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <BarChart3 className="h-4 w-4" />
                      12-Month Projection (at current churn rate)
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Without new customer acquisition
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">
                      {result.projectedAnnualChurn}% annual churn
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ~{result.projectedCustomersRemaining12Months} customers remaining
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula Display */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2">Formulas Used</h4>
                <div className="space-y-1">
                  <code className="block text-xs text-muted-foreground font-mono">
                    Customer Churn Rate = (Customers Lost / Customers at Start) × 100
                  </code>
                  <code className="block text-xs text-muted-foreground font-mono">
                    Revenue Churn Rate = (MRR Lost / Starting MRR) × 100
                  </code>
                  <code className="block text-xs text-muted-foreground font-mono">
                    Net Revenue Churn = ((MRR Lost - Expansion) / Starting MRR) × 100
                  </code>
                  <code className="block text-xs text-muted-foreground font-mono">
                    Avg Customer Lifespan = 1 / Monthly Churn Rate
                  </code>
                  <code className="block text-xs text-muted-foreground font-mono">
                    CLV = ARPU × Avg Customer Lifespan
                  </code>
                </div>
              </div>

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    Copy Results
                  </>
                )}
              </GButton>
            </GCardContent>
          </GCard>

          {/* 12-Month Projection Table */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                12-Month Churn Projection
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Projected impact if current monthly churn rate continues (excluding new acquisitions)
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              {/* Visual Chart */}
              <div className="mb-4">
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="text-xs text-muted-foreground mb-3">Customer Retention Over Time</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {result.monthlyProjection.filter((_, i) => i % 3 === 0 || i === 11).map((entry) => (
                      <div key={entry.month} className="bg-card rounded-lg p-2 border border-border">
                        <div className="text-xs font-semibold text-foreground mb-1.5">
                          Month {entry.month}
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between text-[10px]">
                            <span className="text-heading-accent">Customers:</span>
                            <span className="font-medium text-foreground">{entry.customersRemaining.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span className="text-foreground">MRR:</span>
                            <span className="font-medium text-foreground">{formatCurrency(entry.mrrRemaining)}</span>
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span className="text-red-400">Rev Lost:</span>
                            <span className="font-medium text-red-400">{formatCurrency(entry.cumulativeRevenueLost)}</span>
                          </div>
                          <div className="w-full bg-border rounded-full h-1.5 mt-1.5">
                            <div
                              className="bg-primary h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${result.customersStart > 0 ? (entry.customersRemaining / result.customersStart) * 100 : 0}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-center text-muted-foreground">
                            {result.customersStart > 0 ? ((entry.customersRemaining / result.customersStart) * 100).toFixed(1) : 0}% Retained
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Month</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Customers</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Lost</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">MRR</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">MRR Lost</th>
                      <th className="text-right py-2 px-2 font-semibold text-red-400">Total Rev Lost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.monthlyProjection.map((entry) => (
                      <tr key={entry.month} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{entry.month}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-medium">
                          {entry.customersRemaining.toLocaleString()}
                        </td>
                        <td className="py-2 px-2 text-right text-foreground">
                          {entry.customersLost.toLocaleString()}
                        </td>
                        <td className="py-2 px-2 text-right text-foreground">
                          {formatCurrency(entry.mrrRemaining)}
                        </td>
                        <td className="py-2 px-2 text-right text-foreground">
                          {formatCurrency(entry.mrrLost)}
                        </td>
                        <td className="py-2 px-2 text-right text-red-400 font-medium">
                          {formatCurrency(entry.cumulativeRevenueLost)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
