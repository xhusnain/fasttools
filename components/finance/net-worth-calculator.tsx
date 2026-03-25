"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, TrendingUp, BarChart3,
  Wallet, Home, Car, Briefcase, CreditCard, GraduationCap,
  PiggyBank, Gem, Building2, Heart, ChevronDown, ChevronUp, Target, Shield
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface AssetCategory {
  label: string
  icon: React.ReactNode
  fields: { key: string; label: string; value: string }[]
  isLiquid: boolean
}

interface NetWorthResult {
  totalAssets: number
  totalLiabilities: number
  netWorth: number
  liquidAssets: number
  liquidNetWorth: number
  debtToAssetRatio: number
  debtToAssetRating: string
  debtToAssetColor: string
  assetBreakdown: { label: string; value: number; pct: number; color: string }[]
  liabilityBreakdown: { label: string; value: number; pct: number; color: string }[]
  percentile: { label: string; median: number; average: number; yourPct: string } | null
  grade: string
  gradeColor: string
}

const NET_WORTH_BY_AGE: Record<string, { label: string; median: number; average: number }> = {
  "20": { label: "Under 30", median: 6600, average: 139243 },
  "30": { label: "30-39", median: 23093, average: 325952 },
  "40": { label: "40-49", median: 68698, average: 750578 },
  "50": { label: "50-59", median: 180227, average: 1364050 },
  "60": { label: "60-69", median: 373000, average: 1577907 },
  "70": { label: "70+", median: 357000, average: 1456151 },
}

function getAgeGroup(age: number): string {
  if (age < 30) return "20"
  if (age < 40) return "30"
  if (age < 50) return "40"
  if (age < 60) return "50"
  if (age < 70) return "60"
  return "70"
}

function getPercentileEstimate(netWorth: number, ageGroup: string): string {
  const data = NET_WORTH_BY_AGE[ageGroup]
  if (!data) return "N/A"
  if (netWorth <= 0) return "Below 25th"
  if (netWorth < data.median * 0.5) return "~25th"
  if (netWorth < data.median) return "~35th-45th"
  if (netWorth < data.median * 1.5) return "~50th-60th"
  if (netWorth < data.average) return "~60th-75th"
  if (netWorth < data.average * 1.5) return "~75th-85th"
  if (netWorth < data.average * 3) return "~85th-95th"
  return "Top 5%"
}

function getGrade(debtRatio: number, netWorth: number): { grade: string; color: string } {
  if (netWorth < 0) return { grade: "D", color: "text-red-500" }
  if (debtRatio > 60) return { grade: "C-", color: "text-orange-500" }
  if (debtRatio > 40) return { grade: "C+", color: "text-amber-500" }
  if (debtRatio > 20) return { grade: "B", color: "text-blue-500" }
  if (debtRatio > 10) return { grade: "B+", color: "text-blue-600" }
  if (debtRatio > 0) return { grade: "A", color: "text-green-500" }
  return { grade: "A+", color: "text-green-600" }
}

const ASSET_COLORS = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-amber-500", "bg-pink-500", "bg-cyan-500"]
const LIABILITY_COLORS = ["bg-red-500", "bg-orange-500", "bg-rose-500", "bg-amber-600", "bg-red-400", "bg-orange-400"]

export function NetWorthCalculator() {
  // Assets
  const [cashSavings, setCashSavings] = useState("")
  const [investments, setInvestments] = useState("")
  const [retirement, setRetirement] = useState("")
  const [realEstate, setRealEstate] = useState("")
  const [vehicles, setVehicles] = useState("")
  const [otherAssets, setOtherAssets] = useState("")

  // Liabilities
  const [mortgage, setMortgage] = useState("")
  const [studentLoans, setStudentLoans] = useState("")
  const [autoLoans, setAutoLoans] = useState("")
  const [creditCards, setCreditCards] = useState("")
  const [personalLoans, setPersonalLoans] = useState("")
  const [otherDebts, setOtherDebts] = useState("")

  // Age
  const [age, setAge] = useState("")

  const [result, setResult] = useState<NetWorthResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const p = (v: string) => Number.parseFloat(v) || 0

  const calculate = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const assets = {
        "Cash & Savings": p(cashSavings),
        "Investments": p(investments),
        "Retirement Accounts": p(retirement),
        "Real Estate": p(realEstate),
        "Vehicles": p(vehicles),
        "Other Assets": p(otherAssets),
      }

      const liabilities = {
        "Mortgage": p(mortgage),
        "Student Loans": p(studentLoans),
        "Auto Loans": p(autoLoans),
        "Credit Cards": p(creditCards),
        "Personal Loans": p(personalLoans),
        "Other Debts": p(otherDebts),
      }

      const totalAssets = Object.values(assets).reduce((s, v) => s + v, 0)
      const totalLiabilities = Object.values(liabilities).reduce((s, v) => s + v, 0)
      const netWorth = totalAssets - totalLiabilities

      // Liquid = cash + investments (not retirement, real estate, vehicles)
      const liquidAssets = p(cashSavings) + p(investments)
      const liquidNetWorth = liquidAssets - totalLiabilities

      const debtToAssetRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : totalLiabilities > 0 ? 100 : 0
      let debtToAssetRating: string
      let debtToAssetColor: string
      if (debtToAssetRatio <= 20) { debtToAssetRating = "Excellent"; debtToAssetColor = "text-green-600" }
      else if (debtToAssetRatio <= 40) { debtToAssetRating = "Good"; debtToAssetColor = "text-blue-600" }
      else if (debtToAssetRatio <= 60) { debtToAssetRating = "Fair"; debtToAssetColor = "text-amber-600" }
      else { debtToAssetRating = "High Risk"; debtToAssetColor = "text-red-600" }

      const assetBreakdown = Object.entries(assets)
        .filter(([, v]) => v > 0)
        .map(([label, value], i) => ({
          label,
          value,
          pct: totalAssets > 0 ? Math.round((value / totalAssets) * 100) : 0,
          color: ASSET_COLORS[i % ASSET_COLORS.length],
        }))

      const liabilityBreakdown = Object.entries(liabilities)
        .filter(([, v]) => v > 0)
        .map(([label, value], i) => ({
          label,
          value,
          pct: totalLiabilities > 0 ? Math.round((value / totalLiabilities) * 100) : 0,
          color: LIABILITY_COLORS[i % LIABILITY_COLORS.length],
        }))

      let percentile: NetWorthResult["percentile"] = null
      const ageNum = Number.parseInt(age)
      if (ageNum && ageNum >= 18) {
        const group = getAgeGroup(ageNum)
        const data = NET_WORTH_BY_AGE[group]
        if (data) {
          percentile = {
            label: data.label,
            median: data.median,
            average: data.average,
            yourPct: getPercentileEstimate(netWorth, group),
          }
        }
      }

      const { grade, color: gradeColor } = getGrade(debtToAssetRatio, netWorth)

      setResult({
        totalAssets: Math.round(totalAssets),
        totalLiabilities: Math.round(totalLiabilities),
        netWorth: Math.round(netWorth),
        liquidAssets: Math.round(liquidAssets),
        liquidNetWorth: Math.round(liquidNetWorth),
        debtToAssetRatio: Math.round(debtToAssetRatio * 10) / 10,
        debtToAssetRating,
        debtToAssetColor,
        assetBreakdown,
        liabilityBreakdown,
        percentile,
        grade,
        gradeColor,
      })

      setIsCalculating(false)
    }, 600)
  }

  const fmt = (n: number) => {
    if (n < 0) return `-$${Math.abs(n).toLocaleString()}`
    return `$${n.toLocaleString()}`
  }

  const copyResult = () => {
    if (!result) return
    const text = `Net Worth Summary
Total Assets: ${fmt(result.totalAssets)}
Total Liabilities: ${fmt(result.totalLiabilities)}
Net Worth: ${fmt(result.netWorth)}
Liquid Net Worth: ${fmt(result.liquidNetWorth)}
Debt-to-Asset Ratio: ${result.debtToAssetRatio}% (${result.debtToAssetRating})
Financial Grade: ${result.grade}${result.percentile ? `\nAge Group: ${result.percentile.label} | Percentile: ${result.percentile.yourPct}` : ""}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const hasAnyValue = cashSavings || investments || retirement || realEstate || vehicles || otherAssets ||
    mortgage || studentLoans || autoLoans || creditCards || personalLoans || otherDebts

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wallet className="h-6 w-6 text-foreground" />
            </div>
            Net Worth Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Add your assets and liabilities to calculate your total net worth, liquid net worth, and financial health grade
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-8">
          {/* Age (optional) */}
          <div className="space-y-2">
            <GLabel htmlFor="nw-age" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Heart className="h-4 w-4" /> Your Age (optional — for percentile comparison)
            </GLabel>
            <GInput id="nw-age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="35" min="18" max="100" className="h-11 bg-card border-border text-foreground max-w-xs" />
          </div>

          {/* Assets Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Assets — What You Own
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <PiggyBank className="h-3.5 w-3.5" /> Cash & Savings
                </GLabel>
                <GInput type="number" value={cashSavings} onChange={(e) => setCashSavings(e.target.value)} placeholder="Checking, savings, CDs, money market" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <BarChart3 className="h-3.5 w-3.5" /> Investments
                </GLabel>
                <GInput type="number" value={investments} onChange={(e) => setInvestments(e.target.value)} placeholder="Stocks, bonds, ETFs, crypto, brokerage" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Briefcase className="h-3.5 w-3.5" /> Retirement Accounts
                </GLabel>
                <GInput type="number" value={retirement} onChange={(e) => setRetirement(e.target.value)} placeholder="401(k), IRA, Roth IRA, pension" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Home className="h-3.5 w-3.5" /> Real Estate
                </GLabel>
                <GInput type="number" value={realEstate} onChange={(e) => setRealEstate(e.target.value)} placeholder="Home value, rental property, land" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Car className="h-3.5 w-3.5" /> Vehicles
                </GLabel>
                <GInput type="number" value={vehicles} onChange={(e) => setVehicles(e.target.value)} placeholder="Cars, boats, motorcycles" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Gem className="h-3.5 w-3.5" /> Other Assets
                </GLabel>
                <GInput type="number" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} placeholder="Jewelry, business, collectibles, HSA" className="h-11 bg-card border-border" />
              </div>
            </div>
          </div>

          {/* Liabilities Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-red-500" />
              Liabilities — What You Owe
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Home className="h-3.5 w-3.5" /> Mortgage
                </GLabel>
                <GInput type="number" value={mortgage} onChange={(e) => setMortgage(e.target.value)} placeholder="Remaining mortgage balance" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <GraduationCap className="h-3.5 w-3.5" /> Student Loans
                </GLabel>
                <GInput type="number" value={studentLoans} onChange={(e) => setStudentLoans(e.target.value)} placeholder="Federal + private loans" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Car className="h-3.5 w-3.5" /> Auto Loans
                </GLabel>
                <GInput type="number" value={autoLoans} onChange={(e) => setAutoLoans(e.target.value)} placeholder="Car loan balance" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <CreditCard className="h-3.5 w-3.5" /> Credit Card Debt
                </GLabel>
                <GInput type="number" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} placeholder="Outstanding balances" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-3.5 w-3.5" /> Personal Loans
                </GLabel>
                <GInput type="number" value={personalLoans} onChange={(e) => setPersonalLoans(e.target.value)} placeholder="Personal, medical, HELOC" className="h-11 bg-card border-border" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-3.5 w-3.5" /> Other Debts
                </GLabel>
                <GInput type="number" value={otherDebts} onChange={(e) => setOtherDebts(e.target.value)} placeholder="Business loans, tax debt, other" className="h-11 bg-card border-border" />
              </div>
            </div>
          </div>

          {/* Calculate */}
          <GButton
            onClick={calculate}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!hasAnyValue || isCalculating}
          >
            {isCalculating ? (
              <><LoadingSpinner size="sm" className="mr-2 sm:mr-3" /><span className="hidden sm:inline">Calculating Net Worth...</span><span className="sm:hidden">Calculating...</span></>
            ) : (
              <><Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" /><span className="hidden sm:inline">Calculate My Net Worth</span><span className="sm:hidden">Calculate</span></>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-6 animate-fade-in-up">
          <GCard className="shadow-lg border-border bg-card overflow-hidden">
            <GCardHeader className="pb-4 bg-muted/30 border-b border-border">
              <GCardTitle className="text-2xl flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wallet className="h-6 w-6 text-foreground" />
                </div>
                Your Net Worth
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-6 pt-6">
              {/* Hero: Net Worth */}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-primary/20">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Total Net Worth</div>
                <div className={`text-4xl sm:text-5xl font-black ${result.netWorth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                  {fmt(result.netWorth)}
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 text-sm text-muted-foreground">
                  <span>Grade: <span className={`font-bold text-lg ${result.gradeColor}`}>{result.grade}</span></span>
                  {result.percentile && (
                    <span>Percentile: <span className="font-bold text-foreground">{result.percentile.yourPct}</span></span>
                  )}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-card text-center">
                  <div className="text-xs font-bold text-green-500 uppercase">Total Assets</div>
                  <div className="text-xl sm:text-2xl font-black text-foreground mt-1">{fmt(result.totalAssets)}</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card text-center">
                  <div className="text-xs font-bold text-red-500 uppercase">Total Liabilities</div>
                  <div className="text-xl sm:text-2xl font-black text-foreground mt-1">{fmt(result.totalLiabilities)}</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card text-center col-span-2 sm:col-span-1">
                  <div className="text-xs font-bold text-blue-500 uppercase">Liquid Net Worth</div>
                  <div className="text-xl sm:text-2xl font-black text-foreground mt-1">{fmt(result.liquidNetWorth)}</div>
                </div>
              </div>

              {/* Debt-to-Asset Ratio */}
              <div className="p-4 rounded-xl border border-border bg-card">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase">Debt-to-Asset Ratio</div>
                    <div className="text-2xl font-black text-foreground mt-1">{result.debtToAssetRatio}%</div>
                  </div>
                  <div className={`text-sm font-bold ${result.debtToAssetColor}`}>{result.debtToAssetRating}</div>
                </div>
                <div className="w-full h-3 rounded-full bg-muted mt-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${result.debtToAssetRatio <= 20 ? "bg-green-500" : result.debtToAssetRatio <= 40 ? "bg-blue-500" : result.debtToAssetRatio <= 60 ? "bg-amber-500" : "bg-red-500"}`}
                    style={{ width: `${Math.min(result.debtToAssetRatio, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>0% Excellent</span>
                  <span>20%</span>
                  <span>40%</span>
                  <span>60%+</span>
                </div>
              </div>

              {/* Age Percentile Comparison */}
              {result.percentile && (
                <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                  <h3 className="text-sm font-bold text-foreground">How You Compare (Age {result.percentile.label})</h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase">Median</div>
                      <div className="text-sm font-bold text-foreground">{fmt(result.percentile.median)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase">Average</div>
                      <div className="text-sm font-bold text-foreground">{fmt(result.percentile.average)}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase">You</div>
                      <div className="text-sm font-bold text-primary">{fmt(result.netWorth)}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Your estimated percentile: <span className="font-bold text-foreground">{result.percentile.yourPct}</span> (Source: Federal Reserve Survey of Consumer Finances)
                  </p>
                </div>
              )}

              {/* Asset/Liability Breakdown Toggle */}
              <button onClick={() => setShowDetails(!showDetails)} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showDetails ? "Hide" : "Show"} Asset & Liability Breakdown
              </button>

              {showDetails && (
                <div className="space-y-6">
                  {/* Asset Breakdown */}
                  {result.assetBreakdown.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-foreground">Asset Allocation</h3>
                      <div className="w-full h-4 rounded-full overflow-hidden flex bg-muted">
                        {result.assetBreakdown.map((a) => (
                          <div key={a.label} className={`h-full ${a.color} transition-all`} style={{ width: `${a.pct}%` }} />
                        ))}
                      </div>
                      <div className="space-y-1.5">
                        {result.assetBreakdown.map((a) => (
                          <div key={a.label} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <span className={`w-2.5 h-2.5 rounded-full ${a.color} inline-block`} />
                              {a.label}
                            </span>
                            <span className="font-semibold text-foreground">{fmt(a.value)} ({a.pct}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Liability Breakdown */}
                  {result.liabilityBreakdown.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-foreground">Liability Breakdown</h3>
                      <div className="w-full h-4 rounded-full overflow-hidden flex bg-muted">
                        {result.liabilityBreakdown.map((l) => (
                          <div key={l.label} className={`h-full ${l.color} transition-all`} style={{ width: `${l.pct}%` }} />
                        ))}
                      </div>
                      <div className="space-y-1.5">
                        {result.liabilityBreakdown.map((l) => (
                          <div key={l.label} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <span className={`w-2.5 h-2.5 rounded-full ${l.color} inline-block`} />
                              {l.label}
                            </span>
                            <span className="font-semibold text-foreground">{fmt(l.value)} ({l.pct}%)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Copy */}
              <GButton onClick={copyResult} variant="outline" className="w-full h-11 text-sm font-medium border-border hover:bg-secondary transition-all">
                {copied ? <><Check className="mr-2 h-4 w-4 text-green-500" /> Copied to Clipboard</> : <><Copy className="mr-2 h-4 w-4" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
