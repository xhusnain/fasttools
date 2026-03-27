"use client"

import { useCallback, useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GBadge } from "@/ui/gbadge"
import { GSlider } from "@/ui/gslider"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Banknote,
  Calendar,
  Flame,
  Rocket,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

// ── Types ─────────────────────────────────────────────────────────
interface MonthlyProjection {
  month: number
  label: string
  revenue: number
  expenses: number
  netBurn: number
  cashBalance: number
}

interface RunwayResult {
  runwayMonths: number
  zeroCashDate: string
  netBurnRate: number
  grossBurnRate: number
  fundraiseWindow: string
  burnMultiple: number | null
  projections: MonthlyProjection[]
}

function formatCurrency(value: number): string {
  if (Math.abs(value) >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (Math.abs(value) >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
  return `$${value.toFixed(0)}`
}

function addMonthsToDate(date: Date, months: number): string {
  const d = new Date(date)
  d.setMonth(d.getMonth() + months)
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

// ── Component ─────────────────────────────────────────────────────
export function StartupRunwayCalculator() {
  const [cashOnHand, setCashOnHand] = useState("500000")
  const [monthlyExpenses, setMonthlyExpenses] = useState("50000")
  const [monthlyRevenue, setMonthlyRevenue] = useState("10000")
  const [revenueGrowthRate, setRevenueGrowthRate] = useState(5)
  const [expenseGrowthRate, setExpenseGrowthRate] = useState(0)
  const [calculated, setCalculated] = useState(false)

  const result = useMemo<RunwayResult | null>(() => {
    if (!calculated) return null

    const cash = parseFloat(cashOnHand) || 0
    const expenses = parseFloat(monthlyExpenses) || 0
    const revenue = parseFloat(monthlyRevenue) || 0
    const revGrowth = revenueGrowthRate / 100
    const expGrowth = expenseGrowthRate / 100

    if (cash <= 0 || expenses <= 0) return null

    const projections: MonthlyProjection[] = []
    let balance = cash
    let currentRevenue = revenue
    let currentExpenses = expenses
    let runwayMonths = 0
    const now = new Date()

    for (let m = 1; m <= 60; m++) {
      if (m > 1) {
        currentRevenue = currentRevenue * (1 + revGrowth)
        currentExpenses = currentExpenses * (1 + expGrowth)
      }
      const netBurn = currentExpenses - currentRevenue
      balance = balance - netBurn

      const label = addMonthsToDate(now, m)

      projections.push({
        month: m,
        label,
        revenue: currentRevenue,
        expenses: currentExpenses,
        netBurn,
        cashBalance: Math.max(balance, 0),
      })

      if (balance <= 0 && runwayMonths === 0) {
        runwayMonths = m
      }
    }

    if (runwayMonths === 0) runwayMonths = 60 // Still has money after 60 months

    const netBurnRate = expenses - revenue
    const grossBurnRate = expenses
    const zeroCashDate = runwayMonths < 60 ? addMonthsToDate(now, runwayMonths) : "60+ months"

    const fundraiseStart = Math.max(runwayMonths - 9, 0)
    const fundraiseEnd = Math.max(runwayMonths - 6, 0)
    const fundraiseWindow =
      runwayMonths >= 60
        ? "No urgency — 60+ months of runway"
        : `${addMonthsToDate(now, fundraiseStart)} – ${addMonthsToDate(now, fundraiseEnd)}`

    // Burn multiple (only if there's revenue growth)
    const netNewArr = revenue > 0 ? (currentRevenue - revenue) * 12 : 0
    const burnMultiple = netNewArr > 0 ? (netBurnRate * 12) / netNewArr : null

    return {
      runwayMonths: Math.min(runwayMonths, 60),
      zeroCashDate,
      netBurnRate,
      grossBurnRate,
      fundraiseWindow,
      burnMultiple,
      projections: projections.slice(0, Math.min(runwayMonths + 6, 36)),
    }
  }, [calculated, cashOnHand, monthlyExpenses, monthlyRevenue, revenueGrowthRate, expenseGrowthRate])

  const handleCalculate = () => setCalculated(true)

  const runwayColor = (months: number) => {
    if (months >= 18) return "text-green-500"
    if (months >= 12) return "text-yellow-500"
    if (months >= 6) return "text-orange-500"
    return "text-red-500"
  }

  const runwayLabel = (months: number) => {
    if (months >= 24) return "Healthy"
    if (months >= 18) return "Good"
    if (months >= 12) return "Adequate"
    if (months >= 6) return "Warning"
    return "Critical"
  }

  const maxCash = result ? Math.max(...result.projections.map((p) => p.cashBalance), parseFloat(cashOnHand) || 0) : 0

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Startup Runway Calculator
          </GCardTitle>
          <GCardDescription>
            Enter your cash, expenses, and revenue to calculate how many months your startup can operate.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <GLabel>Cash on Hand ($)</GLabel>
              <GInput
                type="number"
                value={cashOnHand}
                onChange={(e) => { setCashOnHand(e.target.value); setCalculated(false) }}
                placeholder="500000"
              />
            </div>
            <div>
              <GLabel>Monthly Expenses ($)</GLabel>
              <GInput
                type="number"
                value={monthlyExpenses}
                onChange={(e) => { setMonthlyExpenses(e.target.value); setCalculated(false) }}
                placeholder="50000"
              />
            </div>
            <div>
              <GLabel>Monthly Revenue ($)</GLabel>
              <GInput
                type="number"
                value={monthlyRevenue}
                onChange={(e) => { setMonthlyRevenue(e.target.value); setCalculated(false) }}
                placeholder="10000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <GLabel>Monthly Revenue Growth: {revenueGrowthRate}%</GLabel>
              </div>
              <GSlider
                value={[revenueGrowthRate]}
                onValueChange={([v]) => { setRevenueGrowthRate(v); setCalculated(false) }}
                min={0}
                max={30}
                step={1}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <GLabel>Monthly Expense Growth: {expenseGrowthRate}%</GLabel>
              </div>
              <GSlider
                value={[expenseGrowthRate]}
                onValueChange={([v]) => { setExpenseGrowthRate(v); setCalculated(false) }}
                min={0}
                max={15}
                step={1}
              />
            </div>
          </div>

          <GButton onClick={handleCalculate} className="w-full sm:w-auto">
            <Target className="h-4 w-4 mr-1.5" /> Calculate Runway
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className={cn("text-3xl font-bold", runwayColor(result.runwayMonths))}>
                  {result.runwayMonths >= 60 ? "60+" : result.runwayMonths}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Months of Runway</p>
                <GBadge variant="outline" className={cn("text-xs mt-1", runwayColor(result.runwayMonths))}>
                  {runwayLabel(result.runwayMonths)}
                </GBadge>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-500">
                  {formatCurrency(result.netBurnRate)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Net Burn / Month</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">{result.zeroCashDate}</div>
                <p className="text-xs text-muted-foreground mt-1">Zero-Cash Date</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-500">
                  {result.burnMultiple !== null ? `${result.burnMultiple.toFixed(1)}x` : "N/A"}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Burn Multiple</p>
              </GCardContent>
            </GCard>
          </div>

          {/* Fundraise Alert */}
          {result.runwayMonths < 60 && (
            <div className={cn(
              "flex items-start gap-2.5 text-sm rounded-lg p-4 border",
              result.runwayMonths <= 9
                ? "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400"
            )}>
              <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">
                  {result.runwayMonths <= 6 ? "Critical: Start fundraising immediately" :
                   result.runwayMonths <= 12 ? "Begin fundraising soon" :
                   "Plan your next fundraise"}
                </p>
                <p className="mt-1">
                  Recommended fundraise window: <strong>{result.fundraiseWindow}</strong>.
                  Most rounds take 3–6 months to close. VCs recommend maintaining 18–24 months of runway after raising.
                </p>
              </div>
            </div>
          )}

          {/* Cash Balance Chart (ASCII/Bar style) */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <TrendingDown className="h-5 w-5" /> Cash Balance Projection
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="space-y-1.5">
                {result.projections.filter((_, i) => i % (result.projections.length > 18 ? 3 : result.projections.length > 12 ? 2 : 1) === 0 || result.projections[i]?.cashBalance === 0).map((p) => {
                  const pct = maxCash > 0 ? (p.cashBalance / maxCash) * 100 : 0
                  return (
                    <div key={p.month} className="flex items-center gap-3 text-sm">
                      <span className="text-xs text-muted-foreground w-20 shrink-0">{p.label}</span>
                      <div className="flex-1 h-5 bg-muted rounded-sm overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-sm transition-all",
                            pct > 50 ? "bg-green-500" : pct > 25 ? "bg-yellow-500" : pct > 0 ? "bg-red-500" : "bg-red-500/30"
                          )}
                          style={{ width: `${Math.max(pct, 1)}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-16 text-right shrink-0">{formatCurrency(p.cashBalance)}</span>
                    </div>
                  )
                })}
              </div>
            </GCardContent>
          </GCard>

          {/* Monthly Breakdown Table */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Monthly Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Month</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Revenue</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Expenses</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Net Burn</th>
                      <th className="pb-2 font-medium text-muted-foreground">Cash Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.projections.map((p) => (
                      <tr key={p.month} className={cn("border-b last:border-0", p.cashBalance === 0 && "bg-red-500/5")}>
                        <td className="py-2 pr-4 font-medium">{p.label}</td>
                        <td className="py-2 pr-4 text-green-600 dark:text-green-400">
                          <span className="flex items-center gap-1">
                            <ArrowUp className="h-3 w-3" />
                            {formatCurrency(p.revenue)}
                          </span>
                        </td>
                        <td className="py-2 pr-4 text-red-500">
                          <span className="flex items-center gap-1">
                            <ArrowDown className="h-3 w-3" />
                            {formatCurrency(p.expenses)}
                          </span>
                        </td>
                        <td className="py-2 pr-4 font-mono">
                          <span className={p.netBurn > 0 ? "text-red-500" : "text-green-500"}>
                            {p.netBurn > 0 ? `-${formatCurrency(p.netBurn)}` : `+${formatCurrency(Math.abs(p.netBurn))}`}
                          </span>
                        </td>
                        <td className={cn("py-2 font-bold", p.cashBalance === 0 ? "text-red-500" : "")}>
                          {formatCurrency(p.cashBalance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Benchmarks */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Banknote className="h-5 w-5" /> Industry Benchmarks (2026)
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Stage</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Median Burn</th>
                      <th className="pb-2 font-medium text-muted-foreground">Recommended Runway</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Pre-seed</td><td className="py-2 pr-4">$25K–$50K/mo</td><td className="py-2">18–24 months</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Seed</td><td className="py-2 pr-4">$50K–$100K/mo</td><td className="py-2">18–24 months</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Series A</td><td className="py-2 pr-4">$100K–$250K/mo</td><td className="py-2">18–24 months</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">SaaS Seed</td><td className="py-2 pr-4">~$80K/mo</td><td className="py-2">24–30 months</td></tr>
                    <tr><td className="py-2 pr-4 font-medium">Burn Multiple Target</td><td className="py-2 pr-4" colSpan={2}>Below 1.5x for Series A readiness</td></tr>
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>
        </>
      )}
    </div>
  )
}
