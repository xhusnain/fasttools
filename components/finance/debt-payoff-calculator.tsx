"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, TrendingDown, Trash2,
  Plus, BarChart3, Zap, Target, Calendar, CreditCard, ArrowDown, ArrowUp
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface Debt {
  id: string
  name: string
  balance: number
  rate: number
  minPayment: number
}

interface MonthEntry {
  month: number
  debtName: string
  payment: number
  principal: number
  interest: number
  remainingBalance: number
}

interface StrategyResult {
  method: string
  debtFreeMonths: number
  totalInterest: number
  totalPaid: number
  schedule: MonthEntry[]
  payoffOrder: { name: string; month: number }[]
}

interface DebtPayoffResult {
  snowball: StrategyResult
  avalanche: StrategyResult
  interestSaved: number
  monthsSaved: number
  winner: "snowball" | "avalanche" | "tie"
  dailyInterest: number
  totalDebt: number
  avgRate: number
}

function simulatePayoff(debts: Debt[], extraPayment: number, method: "snowball" | "avalanche"): StrategyResult {
  // Clone and sort
  let remaining = debts.map(d => ({ ...d, currentBalance: d.balance }))

  if (method === "snowball") {
    remaining.sort((a, b) => a.balance - b.balance)
  } else {
    remaining.sort((a, b) => b.rate - a.rate)
  }

  const schedule: MonthEntry[] = []
  const payoffOrder: { name: string; month: number }[] = []
  let totalInterest = 0
  let month = 0
  const MAX_MONTHS = 600

  while (remaining.some(d => d.currentBalance > 0.01) && month < MAX_MONTHS) {
    month++
    let extraThisMonth = extraPayment

    // First pass: apply minimum payments and accrue interest
    for (const debt of remaining) {
      if (debt.currentBalance <= 0.01) continue

      const monthlyRate = debt.rate / 100 / 12
      const interest = debt.currentBalance * monthlyRate
      totalInterest += interest

      let payment = Math.min(debt.minPayment, debt.currentBalance + interest)
      const principal = payment - interest
      debt.currentBalance = Math.max(0, debt.currentBalance - principal)

      schedule.push({
        month,
        debtName: debt.name,
        payment: Math.round(payment * 100) / 100,
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(interest * 100) / 100,
        remainingBalance: Math.round(debt.currentBalance * 100) / 100,
      })

      if (debt.currentBalance <= 0.01 && !payoffOrder.find(p => p.name === debt.name)) {
        // Debt just paid off, freed payment becomes extra
        extraThisMonth += debt.minPayment
        payoffOrder.push({ name: debt.name, month })
      }
    }

    // Second pass: apply extra payment to priority debt
    for (const debt of remaining) {
      if (debt.currentBalance <= 0.01 || extraThisMonth <= 0) continue

      const extraApplied = Math.min(extraThisMonth, debt.currentBalance)
      debt.currentBalance = Math.max(0, debt.currentBalance - extraApplied)
      extraThisMonth -= extraApplied

      // Update last schedule entry for this debt this month
      const idx = schedule.findIndex(s => s.month === month && s.debtName === debt.name)
      if (idx >= 0) {
        schedule[idx].payment += extraApplied
        schedule[idx].principal += extraApplied
        schedule[idx].remainingBalance = Math.round(debt.currentBalance * 100) / 100
      }

      if (debt.currentBalance <= 0.01 && !payoffOrder.find(p => p.name === debt.name)) {
        extraThisMonth += debt.minPayment
        payoffOrder.push({ name: debt.name, month })
      }

      break // Only apply extra to the first (priority) debt
    }
  }

  const totalPaid = debts.reduce((s, d) => s + d.balance, 0) + totalInterest

  return {
    method: method === "snowball" ? "Snowball" : "Avalanche",
    debtFreeMonths: month,
    totalInterest: Math.round(totalInterest),
    totalPaid: Math.round(totalPaid),
    schedule,
    payoffOrder,
  }
}

let nextId = 1
function newDebt(): Debt {
  return { id: `debt-${nextId++}`, name: "", balance: 0, rate: 0, minPayment: 0 }
}

export function DebtPayoffCalculator() {
  const [debts, setDebts] = useState<Debt[]>([
    { id: "debt-1", name: "Credit Card 1", balance: 5000, rate: 22.99, minPayment: 150 },
    { id: "debt-2", name: "Credit Card 2", balance: 3000, rate: 18.99, minPayment: 90 },
    { id: "debt-3", name: "Car Loan", balance: 12000, rate: 6.5, minPayment: 280 },
  ])
  const [extraPayment, setExtraPayment] = useState("200")
  const [result, setResult] = useState<DebtPayoffResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)

  const updateDebt = (id: string, field: keyof Debt, value: string) => {
    setDebts(prev => prev.map(d => {
      if (d.id !== id) return d
      if (field === "name") return { ...d, name: value }
      return { ...d, [field]: Number.parseFloat(value) || 0 }
    }))
  }

  const addDebt = () => {
    setDebts(prev => [...prev, newDebt()])
  }

  const removeDebt = (id: string) => {
    if (debts.length <= 1) return
    setDebts(prev => prev.filter(d => d.id !== id))
  }

  const calculate = () => {
    const validDebts = debts.filter(d => d.balance > 0 && d.minPayment > 0)
    if (validDebts.length === 0) return

    // Check each debt can be paid off (payment > interest)
    for (const d of validDebts) {
      const monthlyInterest = d.balance * (d.rate / 100 / 12)
      if (d.minPayment <= monthlyInterest) {
        // Can't pay off with minimum payment alone, but extra might help
      }
    }

    setIsCalculating(true)

    setTimeout(() => {
      const extra = Number.parseFloat(extraPayment) || 0
      const snowball = simulatePayoff(validDebts, extra, "snowball")
      const avalanche = simulatePayoff(validDebts, extra, "avalanche")

      const interestSaved = snowball.totalInterest - avalanche.totalInterest
      const monthsSaved = snowball.debtFreeMonths - avalanche.debtFreeMonths

      const totalDebt = validDebts.reduce((s, d) => s + d.balance, 0)
      const weightedRate = validDebts.reduce((s, d) => s + d.rate * d.balance, 0) / totalDebt
      const dailyInterest = totalDebt * (weightedRate / 100 / 365)

      let winner: "snowball" | "avalanche" | "tie" = "tie"
      if (interestSaved > 10) winner = "avalanche"
      else if (interestSaved < -10) winner = "snowball"

      setResult({
        snowball,
        avalanche,
        interestSaved: Math.abs(interestSaved),
        monthsSaved: Math.abs(monthsSaved),
        winner,
        dailyInterest: Math.round(dailyInterest * 100) / 100,
        totalDebt,
        avgRate: Math.round(weightedRate * 100) / 100,
      })

      setIsCalculating(false)
    }, 600)
  }

  const fmt = (n: number) => `$${n.toLocaleString()}`
  const fmtMonths = (m: number) => {
    const yrs = Math.floor(m / 12)
    const mos = m % 12
    if (yrs === 0) return `${mos} months`
    if (mos === 0) return `${yrs} year${yrs > 1 ? "s" : ""}`
    return `${yrs}yr ${mos}mo`
  }

  const copyResult = () => {
    if (!result) return
    const text = `Debt Payoff Plan
Total Debt: ${fmt(result.totalDebt)}
Extra Payment: ${fmt(Number.parseFloat(extraPayment) || 0)}/mo

Snowball: Debt-free in ${fmtMonths(result.snowball.debtFreeMonths)}, ${fmt(result.snowball.totalInterest)} interest
Avalanche: Debt-free in ${fmtMonths(result.avalanche.debtFreeMonths)}, ${fmt(result.avalanche.totalInterest)} interest
${result.winner !== "tie" ? `${result.winner === "avalanche" ? "Avalanche" : "Snowball"} saves ${fmt(result.interestSaved)} in interest` : "Both methods cost roughly the same"}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const validCount = debts.filter(d => d.balance > 0 && d.minPayment > 0).length

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingDown className="h-6 w-6 text-foreground" />
            </div>
            Debt Payoff Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Compare Snowball vs Avalanche strategies to find your fastest path to debt freedom
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Debt Entries */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-heading-accent" />
                Your Debts
              </h3>
              <GButton variant="outline" onClick={addDebt} className="h-8 text-xs px-3 border-border">
                <Plus className="h-3 w-3 mr-1" /> Add Debt
              </GButton>
            </div>

            {debts.map((debt, idx) => (
              <div key={debt.id} className="p-4 rounded-lg border border-border bg-muted/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground uppercase">Debt #{idx + 1}</span>
                  {debts.length > 1 && (
                    <button onClick={() => removeDebt(debt.id)} className="text-muted-foreground hover:text-red-500 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="col-span-2 md:col-span-1 space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Name</GLabel>
                    <GInput
                      value={debt.name}
                      onChange={(e) => updateDebt(debt.id, "name", e.target.value)}
                      placeholder="Credit Card"
                      className="h-9 text-sm bg-card border-border"
                    />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Balance ($)</GLabel>
                    <GInput
                      type="number"
                      value={debt.balance || ""}
                      onChange={(e) => updateDebt(debt.id, "balance", e.target.value)}
                      placeholder="5000"
                      className="h-9 text-sm bg-card border-border"
                    />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">APR (%)</GLabel>
                    <GInput
                      type="number"
                      value={debt.rate || ""}
                      onChange={(e) => updateDebt(debt.id, "rate", e.target.value)}
                      placeholder="22.99"
                      step="0.01"
                      className="h-9 text-sm bg-card border-border"
                    />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Min Payment ($)</GLabel>
                    <GInput
                      type="number"
                      value={debt.minPayment || ""}
                      onChange={(e) => updateDebt(debt.id, "minPayment", e.target.value)}
                      placeholder="150"
                      className="h-9 text-sm bg-card border-border"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra Payment */}
          <div className="space-y-3">
            <GLabel htmlFor="dp-extra" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Zap className="h-4 w-4 text-heading-accent" />
              Extra Monthly Payment ($)
            </GLabel>
            <GInput
              id="dp-extra"
              type="number"
              value={extraPayment}
              onChange={(e) => setExtraPayment(e.target.value)}
              placeholder="200"
              className="h-11 bg-card border-border text-foreground"
            />
            <p className="text-xs text-muted-foreground">Additional amount above all minimum payments, applied to the priority debt each month.</p>
          </div>

          {/* Calculate Button */}
          <GButton
            onClick={calculate}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={validCount < 1 || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Calculating Payoff Plan...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate Snowball vs Avalanche</span>
                <span className="sm:hidden">Calculate</span>
              </>
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
                  <BarChart3 className="h-6 w-6 text-foreground" />
                </div>
                Your Debt Payoff Plan
              </GCardTitle>
              <GCardDescription className="text-base text-muted-foreground mt-1">
                {fmt(result.totalDebt)} total debt &middot; {result.avgRate}% avg rate &middot; {fmt(Number.parseFloat(extraPayment) || 0)}/mo extra
              </GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6 pt-6">
              {/* Motivational Banner */}
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-center">
                <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
                  You&apos;re currently paying <span className="font-bold text-lg">${result.dailyInterest}</span> per day in interest alone.
                  {Number.parseFloat(extraPayment) > 0 && " Your extra payments will save you thousands."}
                </p>
              </div>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-2 gap-4">
                {/* Snowball */}
                <div className={`p-5 rounded-xl border-2 ${result.winner === "snowball" ? "border-green-500/40 bg-green-500/5" : "border-border"} transition-all`}>
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowUp className="h-4 w-4 text-blue-500" />
                    <h3 className="font-bold text-foreground text-sm sm:text-base">Snowball</h3>
                    {result.winner === "snowball" && <span className="text-[10px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">WINNER</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-3">Smallest balance first</p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Debt-Free In</div>
                      <div className="text-xl sm:text-2xl font-black text-foreground">{fmtMonths(result.snowball.debtFreeMonths)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Total Interest</div>
                      <div className="text-lg font-bold text-foreground">{fmt(result.snowball.totalInterest)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Total Paid</div>
                      <div className="text-sm font-semibold text-muted-foreground">{fmt(result.snowball.totalPaid)}</div>
                    </div>
                  </div>
                </div>

                {/* Avalanche */}
                <div className={`p-5 rounded-xl border-2 ${result.winner === "avalanche" ? "border-green-500/40 bg-green-500/5" : "border-border"} transition-all`}>
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowDown className="h-4 w-4 text-red-500" />
                    <h3 className="font-bold text-foreground text-sm sm:text-base">Avalanche</h3>
                    {result.winner === "avalanche" && <span className="text-[10px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">WINNER</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-3">Highest interest first</p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Debt-Free In</div>
                      <div className="text-xl sm:text-2xl font-black text-foreground">{fmtMonths(result.avalanche.debtFreeMonths)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Total Interest</div>
                      <div className="text-lg font-bold text-foreground">{fmt(result.avalanche.totalInterest)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Total Paid</div>
                      <div className="text-sm font-semibold text-muted-foreground">{fmt(result.avalanche.totalPaid)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              {result.winner !== "tie" && (
                <div className="p-4 rounded-xl border-2 border-green-500/30 bg-green-500/5 text-center">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">
                    {result.winner === "avalanche" ? "Avalanche" : "Snowball"} saves you {fmt(result.interestSaved)} in interest
                    {result.monthsSaved > 0 && ` and ${result.monthsSaved} month${result.monthsSaved > 1 ? "s" : ""}`}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.winner === "avalanche"
                      ? "Avalanche is mathematically optimal. Snowball gives faster quick wins for motivation."
                      : "In this case, snowball is also the cheapest option — best of both worlds!"}
                  </p>
                </div>
              )}
              {result.winner === "tie" && (
                <div className="p-4 rounded-xl border border-border bg-muted/30 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Both methods cost roughly the same. Choose snowball for motivation (quick wins) or avalanche for principle (math optimization).
                  </p>
                </div>
              )}

              {/* Payoff Order */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Payoff Order
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-blue-500 uppercase mb-2">Snowball Order</h4>
                    {result.snowball.payoffOrder.map((p, i) => (
                      <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
                        <span className="flex-none w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                        <span className="text-sm text-foreground truncate">{p.name}</span>
                        <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">Mo {p.month}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase mb-2">Avalanche Order</h4>
                    {result.avalanche.payoffOrder.map((p, i) => (
                      <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
                        <span className="flex-none w-5 h-5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                        <span className="text-sm text-foreground truncate">{p.name}</span>
                        <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">Mo {p.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Total Debt</div>
                  <div className="text-sm font-bold text-foreground">{fmt(result.totalDebt)}</div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Avg Rate</div>
                  <div className="text-sm font-bold text-foreground">{result.avgRate}%</div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Monthly Minimums</div>
                  <div className="text-sm font-bold text-foreground">{fmt(debts.reduce((s, d) => s + d.minPayment, 0))}</div>
                </div>
                <div className="p-3 rounded-xl border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Total Monthly</div>
                  <div className="text-sm font-bold text-foreground">{fmt(debts.reduce((s, d) => s + d.minPayment, 0) + (Number.parseFloat(extraPayment) || 0))}</div>
                </div>
              </div>

              {/* Toggle Schedule */}
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                {showSchedule ? "Hide" : "Show"} Monthly Payment Schedule (Avalanche)
              </button>

              {showSchedule && (
                <div className="overflow-x-auto max-h-96 overflow-y-auto">
                  <table className="w-full text-xs">
                    <thead className="sticky top-0 bg-card">
                      <tr className="border-b border-border">
                        <th className="p-2 text-left font-semibold text-foreground">Month</th>
                        <th className="p-2 text-left font-semibold text-foreground">Debt</th>
                        <th className="p-2 text-right font-semibold text-foreground">Payment</th>
                        <th className="p-2 text-right font-semibold text-foreground">Principal</th>
                        <th className="p-2 text-right font-semibold text-foreground">Interest</th>
                        <th className="p-2 text-right font-semibold text-foreground">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.avalanche.schedule.filter(s => s.payment > 0).map((row, i) => (
                        <tr key={i} className={`border-b border-border ${row.remainingBalance <= 0.01 ? "bg-green-500/5" : ""}`}>
                          <td className="p-2 text-muted-foreground">{row.month}</td>
                          <td className="p-2 text-foreground">{row.debtName}</td>
                          <td className="p-2 text-right font-mono text-foreground">{fmt(row.payment)}</td>
                          <td className="p-2 text-right font-mono text-green-600">{fmt(row.principal)}</td>
                          <td className="p-2 text-right font-mono text-red-500">{fmt(row.interest)}</td>
                          <td className="p-2 text-right font-mono text-foreground">{fmt(row.remainingBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                variant="outline"
                className="w-full h-11 text-sm font-medium border-border hover:bg-secondary transition-all"
              >
                {copied ? (
                  <><Check className="mr-2 h-4 w-4 text-green-500" /> Copied to Clipboard</>
                ) : (
                  <><Copy className="mr-2 h-4 w-4" /> Copy Results</>
                )}
              </GButton>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
