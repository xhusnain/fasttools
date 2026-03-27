"use client"

import { useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GSwitch } from "@/ui/gswitch"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  Calculator,
  DollarSign,
  Percent,
  Target,
  TrendingUp,
} from "lucide-react"

type FilingStatus = "single" | "mfj" | "mfs" | "hoh"
type TaxYear = "2025" | "2026"

interface Bracket {
  rate: number
  min: number
  max: number
}

interface BracketResult {
  rate: number
  taxableInBracket: number
  taxInBracket: number
}

// ── Tax data ─────────────────────────────────────────────────────
const BRACKETS: Record<TaxYear, Record<FilingStatus, Bracket[]>> = {
  "2025": {
    single: [
      { rate: 10, min: 0, max: 11925 },
      { rate: 12, min: 11925, max: 48475 },
      { rate: 22, min: 48475, max: 103350 },
      { rate: 24, min: 103350, max: 197300 },
      { rate: 32, min: 197300, max: 250525 },
      { rate: 35, min: 250525, max: 626350 },
      { rate: 37, min: 626350, max: Infinity },
    ],
    mfj: [
      { rate: 10, min: 0, max: 23850 },
      { rate: 12, min: 23850, max: 96950 },
      { rate: 22, min: 96950, max: 206700 },
      { rate: 24, min: 206700, max: 394600 },
      { rate: 32, min: 394600, max: 501050 },
      { rate: 35, min: 501050, max: 751600 },
      { rate: 37, min: 751600, max: Infinity },
    ],
    mfs: [
      { rate: 10, min: 0, max: 11925 },
      { rate: 12, min: 11925, max: 48475 },
      { rate: 22, min: 48475, max: 103350 },
      { rate: 24, min: 103350, max: 197300 },
      { rate: 32, min: 197300, max: 250525 },
      { rate: 35, min: 250525, max: 375800 },
      { rate: 37, min: 375800, max: Infinity },
    ],
    hoh: [
      { rate: 10, min: 0, max: 17000 },
      { rate: 12, min: 17000, max: 64850 },
      { rate: 22, min: 64850, max: 103350 },
      { rate: 24, min: 103350, max: 197300 },
      { rate: 32, min: 197300, max: 250500 },
      { rate: 35, min: 250500, max: 626350 },
      { rate: 37, min: 626350, max: Infinity },
    ],
  },
  "2026": {
    single: [
      { rate: 10, min: 0, max: 12400 },
      { rate: 12, min: 12400, max: 49650 },
      { rate: 22, min: 49650, max: 105700 },
      { rate: 24, min: 105700, max: 201775 },
      { rate: 32, min: 201775, max: 256225 },
      { rate: 35, min: 256225, max: 640600 },
      { rate: 37, min: 640600, max: Infinity },
    ],
    mfj: [
      { rate: 10, min: 0, max: 24800 },
      { rate: 12, min: 24800, max: 99300 },
      { rate: 22, min: 99300, max: 211400 },
      { rate: 24, min: 211400, max: 403550 },
      { rate: 32, min: 403550, max: 512450 },
      { rate: 35, min: 512450, max: 768600 },
      { rate: 37, min: 768600, max: Infinity },
    ],
    mfs: [
      { rate: 10, min: 0, max: 12400 },
      { rate: 12, min: 12400, max: 49650 },
      { rate: 22, min: 49650, max: 105700 },
      { rate: 24, min: 105700, max: 201775 },
      { rate: 32, min: 201775, max: 256225 },
      { rate: 35, min: 256225, max: 384200 },
      { rate: 37, min: 384200, max: Infinity },
    ],
    hoh: [
      { rate: 10, min: 0, max: 17700 },
      { rate: 12, min: 17700, max: 66950 },
      { rate: 22, min: 66950, max: 105700 },
      { rate: 24, min: 105700, max: 201775 },
      { rate: 32, min: 201775, max: 256225 },
      { rate: 35, min: 256225, max: 640600 },
      { rate: 37, min: 640600, max: Infinity },
    ],
  },
}

const STANDARD_DEDUCTIONS: Record<TaxYear, Record<FilingStatus, number>> = {
  "2025": { single: 15750, mfj: 31500, mfs: 15750, hoh: 23625 },
  "2026": { single: 16100, mfj: 32200, mfs: 16100, hoh: 24150 },
}

const STATUS_LABELS: Record<FilingStatus, string> = {
  single: "Single",
  mfj: "Married Filing Jointly",
  mfs: "Married Filing Separately",
  hoh: "Head of Household",
}

function formatUsd(value: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
}

function formatBracketMax(max: number): string {
  return max === Infinity ? "+" : formatUsd(max)
}

// ── Component ─────────────────────────────────────────────────────
export function TaxBracketCalculator() {
  const [grossIncome, setGrossIncome] = useState("75000")
  const [filingStatus, setFilingStatus] = useState<FilingStatus>("single")
  const [taxYear, setTaxYear] = useState<TaxYear>("2025")
  const [useStandardDeduction, setUseStandardDeduction] = useState(true)
  const [customDeduction, setCustomDeduction] = useState("")

  const result = useMemo(() => {
    const income = parseFloat(grossIncome) || 0
    if (income <= 0) return null

    const deduction = useStandardDeduction
      ? STANDARD_DEDUCTIONS[taxYear][filingStatus]
      : parseFloat(customDeduction) || 0

    const taxableIncome = Math.max(income - deduction, 0)
    const brackets = BRACKETS[taxYear][filingStatus]

    let totalTax = 0
    const breakdown: BracketResult[] = []

    for (const bracket of brackets) {
      if (taxableIncome <= bracket.min) {
        breakdown.push({ rate: bracket.rate, taxableInBracket: 0, taxInBracket: 0 })
        continue
      }
      const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min
      const taxInBracket = taxableInBracket * (bracket.rate / 100)
      totalTax += taxInBracket
      breakdown.push({ rate: bracket.rate, taxableInBracket, taxInBracket })
    }

    const effectiveRate = taxableIncome > 0 ? (totalTax / income) * 100 : 0
    const marginalRate = breakdown.filter(b => b.taxableInBracket > 0).pop()?.rate || 0
    const afterTaxIncome = income - totalTax

    return {
      grossIncome: income,
      deduction,
      taxableIncome,
      totalTax,
      effectiveRate,
      marginalRate,
      afterTaxIncome,
      breakdown,
      brackets,
    }
  }, [grossIncome, filingStatus, taxYear, useStandardDeduction, customDeduction])

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" /> Tax Bracket Calculator
          </GCardTitle>
          <GCardDescription>
            Calculate your {taxYear} US federal income tax by bracket. See marginal vs. effective rates and total tax owed.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <GLabel>Annual Gross Income ($)</GLabel>
              <GInput
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                placeholder="75000"
              />
            </div>
            <div>
              <GLabel>Filing Status</GLabel>
              <GSelect value={filingStatus} onValueChange={(v) => setFilingStatus(v as FilingStatus)}>
                <GSelectTrigger><GSelectValue /></GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="single">Single</GSelectItem>
                  <GSelectItem value="mfj">Married Filing Jointly</GSelectItem>
                  <GSelectItem value="mfs">Married Filing Separately</GSelectItem>
                  <GSelectItem value="hoh">Head of Household</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div>
              <GLabel>Tax Year</GLabel>
              <GSelect value={taxYear} onValueChange={(v) => setTaxYear(v as TaxYear)}>
                <GSelectTrigger><GSelectValue /></GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="2025">2025</GSelectItem>
                  <GSelectItem value="2026">2026</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <GSwitch checked={useStandardDeduction} onCheckedChange={setUseStandardDeduction} />
              <GLabel>
                Standard Deduction ({formatUsd(STANDARD_DEDUCTIONS[taxYear][filingStatus])})
              </GLabel>
            </div>
            {!useStandardDeduction && (
              <div className="flex-1 max-w-xs">
                <GInput
                  type="number"
                  value={customDeduction}
                  onChange={(e) => setCustomDeduction(e.target.value)}
                  placeholder="Itemized deductions"
                />
              </div>
            )}
          </div>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && result.grossIncome > 0 && (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{formatUsd(result.totalTax)}</div>
                <p className="text-xs text-muted-foreground mt-1">Total Federal Tax</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">{result.effectiveRate.toFixed(1)}%</div>
                <p className="text-xs text-muted-foreground mt-1">Effective Tax Rate</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-500">{result.marginalRate}%</div>
                <p className="text-xs text-muted-foreground mt-1">Marginal Tax Rate</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">{formatUsd(result.afterTaxIncome)}</div>
                <p className="text-xs text-muted-foreground mt-1">After-Tax Income</p>
              </GCardContent>
            </GCard>
          </div>

          {/* Income Breakdown */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <DollarSign className="h-5 w-5" /> Income Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <span className="text-muted-foreground">Gross Income</span>
                  <p className="text-lg font-bold">{formatUsd(result.grossIncome)}</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <span className="text-muted-foreground">
                    {useStandardDeduction ? "Standard" : "Itemized"} Deduction
                  </span>
                  <p className="text-lg font-bold text-red-500">-{formatUsd(result.deduction)}</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <span className="text-muted-foreground">Taxable Income</span>
                  <p className="text-lg font-bold">{formatUsd(result.taxableIncome)}</p>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Bracket Breakdown */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <TrendingUp className="h-5 w-5" /> {taxYear} Tax Bracket Breakdown — {STATUS_LABELS[filingStatus]}
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Rate</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Bracket Range</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Taxable in Bracket</th>
                      <th className="pb-2 font-medium text-muted-foreground">Tax Owed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.map((b, i) => {
                      const bracket = result.brackets[i]
                      return (
                        <tr key={i} className={cn("border-b last:border-0", b.taxableInBracket > 0 ? "" : "opacity-40")}>
                          <td className="py-2.5 pr-4">
                            <GBadge
                              variant="outline"
                              className={cn(
                                "text-xs font-bold",
                                b.taxableInBracket > 0 && b.rate === result.marginalRate ? "bg-orange-500/10 text-orange-500 border-orange-500/30" : ""
                              )}
                            >
                              {b.rate}%
                            </GBadge>
                          </td>
                          <td className="py-2.5 pr-4 font-mono text-xs">
                            {formatUsd(bracket.min)} – {formatBracketMax(bracket.max)}
                          </td>
                          <td className="py-2.5 pr-4 font-medium">{formatUsd(b.taxableInBracket)}</td>
                          <td className="py-2.5 font-bold text-red-500">{formatUsd(b.taxInBracket)}</td>
                        </tr>
                      )
                    })}
                    <tr className="border-t-2 font-bold">
                      <td className="pt-3" colSpan={2}>Total Federal Tax</td>
                      <td className="pt-3">{formatUsd(result.taxableIncome)}</td>
                      <td className="pt-3 text-red-500">{formatUsd(result.totalTax)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual bar */}
              <div className="mt-4 flex rounded-lg overflow-hidden h-6">
                {result.breakdown.filter(b => b.taxableInBracket > 0).map((b, i) => {
                  const pct = (b.taxableInBracket / result.taxableIncome) * 100
                  const colors = ["bg-green-500", "bg-emerald-500", "bg-yellow-500", "bg-orange-500", "bg-red-400", "bg-red-500", "bg-red-600"]
                  return (
                    <div
                      key={i}
                      className={cn("flex items-center justify-center text-white text-[10px] font-bold", colors[i] || "bg-red-700")}
                      style={{ width: `${pct}%` }}
                      title={`${b.rate}%: ${formatUsd(b.taxableInBracket)}`}
                    >
                      {pct > 8 ? `${b.rate}%` : ""}
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">Taxable income distribution across brackets</p>
            </GCardContent>
          </GCard>
        </>
      )}
    </div>
  )
}
