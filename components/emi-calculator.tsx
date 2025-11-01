"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calculator, Copy, Check, Download, Share2, TrendingUp, PieChart, BarChart3, Calendar, Home, Car, CreditCard, GraduationCap, DollarSign, Percent, Clock, Target, AlertCircle, Info } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface EMIResult {
  emi: number
  totalPayment: number
  totalInterest: number
  principalAmount: number
  loanTenure: number
  interestRate: number
  amortizationSchedule: AmortizationEntry[]
  yearlySchedule: YearlyEntry[]
}

interface AmortizationEntry {
  month: number
  principal: number
  interest: number
  totalPayment: number
  balance: number
  principalPercentage: number
  interestPercentage: number
}

interface YearlyEntry {
  year: number
  principal: number
  interest: number
  totalPayment: number
  balance: number
  loanPaidToDate: number
}

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTenure, setLoanTenure] = useState("")
  const [loanType, setLoanType] = useState<"home" | "car" | "personal" | "education">("home")
  const [emiInAdvance, setEmiInAdvance] = useState(false)
  const [result, setResult] = useState<EMIResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showYearlyView, setShowYearlyView] = useState(true)

  const loanTypes = [
    { id: "home", label: "Home Loan", icon: Home, color: "text-foreground" },
    { id: "car", label: "Car Loan", icon: Car, color: "text-heading-accent" },
    { id: "personal", label: "Personal Loan", icon: CreditCard, color: "text-foreground" },
    { id: "education", label: "Education Loan", icon: GraduationCap, color: "text-foreground" }
  ]

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) return

    setIsCalculating(true)

    setTimeout(() => {
      const P = Number.parseFloat(loanAmount)
      const annualRate = Number.parseFloat(interestRate)
      const tenureYears = Number.parseFloat(loanTenure)
      
      // Convert annual rate to monthly rate (R = annual rate / 12 / 100)
      const r = annualRate / 12 / 100
      const n = tenureYears * 12

      // Standard EMI Formula used by banks: EMI = P × R × (1 + R)^N / ((1 + R)^N - 1)
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const totalPayment = emi * n
      const totalInterest = totalPayment - P

      // Generate Amortization Schedule using real banking calculations
      const amortizationSchedule: AmortizationEntry[] = []
      const yearlySchedule: YearlyEntry[] = []
      let balance = P
      let yearlyPrincipal = 0
      let yearlyInterest = 0
      let currentYear = new Date().getFullYear()
      let monthCount = 0

      for (let i = 1; i <= n; i++) {
        // Calculate interest payment for current month
        const interestPayment = balance * r
        
        // Calculate principal payment (EMI - Interest)
        const principalPayment = emi - interestPayment
        
        // Update balance
        balance = Math.max(0, balance - principalPayment)

        // Store monthly data
        amortizationSchedule.push({
          month: i,
          principal: Number.parseFloat(principalPayment.toFixed(2)),
          interest: Number.parseFloat(interestPayment.toFixed(2)),
          totalPayment: Number.parseFloat(emi.toFixed(2)),
          balance: Number.parseFloat(balance.toFixed(2)),
          principalPercentage: Number.parseFloat(((principalPayment / emi) * 100).toFixed(1)),
          interestPercentage: Number.parseFloat(((interestPayment / emi) * 100).toFixed(1))
        })

        // Accumulate yearly totals
        yearlyPrincipal += principalPayment
        yearlyInterest += interestPayment
        monthCount++

        // Create yearly entry every 12 months or at the end
        if (monthCount === 12 || i === n) {
          const year = currentYear + Math.floor((i - 1) / 12)
          const totalYearlyPayment = yearlyPrincipal + yearlyInterest
          const loanPaidToDate = Number.parseFloat((((P - balance) / P) * 100).toFixed(2))

          yearlySchedule.push({
            year,
            principal: Number.parseFloat(yearlyPrincipal.toFixed(2)),
            interest: Number.parseFloat(yearlyInterest.toFixed(2)),
            totalPayment: Number.parseFloat(totalYearlyPayment.toFixed(2)),
            balance: Number.parseFloat(balance.toFixed(2)),
            loanPaidToDate
          })

          // Reset yearly counters
          yearlyPrincipal = 0
          yearlyInterest = 0
          monthCount = 0
        }
      }

      setResult({
        emi: Number.parseFloat(emi.toFixed(2)),
        totalPayment: Number.parseFloat(totalPayment.toFixed(2)),
        totalInterest: Number.parseFloat(totalInterest.toFixed(2)),
        principalAmount: P,
        loanTenure: tenureYears,
        interestRate: annualRate,
        amortizationSchedule,
        yearlySchedule
      })
      setIsCalculating(false)
    }, 600)
  }

  useEffect(() => {
    if (loanAmount && interestRate && loanTenure) {
      calculateEMI()
    }
  }, [loanAmount, interestRate, loanTenure, emiInAdvance])

  const copyResult = () => {
    if (!result) return
    const text = `EMI: ₹${result.emi.toLocaleString()}\nTotal Payment: ₹${result.totalPayment.toLocaleString()}\nTotal Interest: ₹${result.totalInterest.toLocaleString()}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getLoanTypeIcon = (type: string) => {
    const loanType = loanTypes.find(lt => lt.id === type)
    return loanType ? loanType.icon : Home
  }

  const getLoanTypeColor = (type: string) => {
    const loanType = loanTypes.find(lt => lt.id === type)
    return loanType ? loanType.color : "text-foreground"
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator Card */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-black">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Calculator className="h-6 w-6 text-foreground" />
            </div>
            EMI Calculator for {loanTypes.find(lt => lt.id === loanType)?.label}
          </CardTitle>
          <CardDescription className="text-base text-slate-400">
            Calculate your Equated Monthly Installment with detailed breakdown and amortization schedule
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2 text-heading-accent">
              <Target className="h-4 w-4 text-heading-accent" />
              Loan Type
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {loanTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setLoanType(type.id as any)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      loanType === type.id
                        ? 'border-orange-500 bg-orange-500/10 text-foreground'
                        : 'border-slate-700 hover:border-orange-500/50 bg-black text-slate-400'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mx-auto mb-2 ${type.color}`} />
                    <div className="text-sm font-medium">{type.label}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="loanAmount" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <DollarSign className="h-4 w-4 text-heading-accent" />
                Loan Amount (₹)
              </Label>
              <Input
                id="loanAmount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Enter loan amount"
                className="h-10 sm:h-12 text-sm sm:text-base bg-black border-slate-700 text-slate-200 focus:border-orange-500 focus:ring-orange-500"
              />
              <div className="text-xs text-slate-400">
                Range: ₹1L - ₹10Cr
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="interestRate" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Percent className="h-4 w-4 text-heading-accent" />
                Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Enter interest rate"
                className="h-10 sm:h-12 text-sm sm:text-base bg-black border-slate-700 text-slate-200 focus:border-orange-500 focus:ring-orange-500"
              />
              <div className="text-xs text-slate-400">
                Range: 3% - 25%
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="loanTenure" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Clock className="h-4 w-4 text-heading-accent" />
                Loan Tenure (Years)
              </Label>
              <Input
                id="loanTenure"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                placeholder="Enter loan tenure"
                className="h-10 sm:h-12 text-sm sm:text-base bg-black border-slate-700 text-slate-200 focus:border-orange-500 focus:ring-orange-500"
              />
              <div className="text-xs text-slate-400">
                Range: 1 - 30 years
              </div>
            </div>
          </div>

          {/* EMI in Advance Option (for Car Loans) */}
          {loanType === "car" && (
            <div className="space-y-3">
              <Label className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Info className="h-4 w-4 text-heading-accent" />
                EMI Payment Mode
              </Label>
              <div className="flex gap-4">
                <button
                  onClick={() => setEmiInAdvance(false)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    !emiInAdvance
                      ? 'border-orange-500 bg-orange-500/10 text-foreground'
                      : 'border-slate-700 bg-black text-slate-400'
                  }`}
                >
                  EMI in Arrears
                </button>
                <button
                  onClick={() => setEmiInAdvance(true)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    emiInAdvance
                      ? 'border-orange-500 bg-orange-500/10 text-foreground'
                      : 'border-slate-700 bg-black text-slate-400'
                  }`}
                >
                  EMI in Advance
                </button>
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <Button
            onClick={calculateEMI}
            disabled={isCalculating || !loanAmount || !interestRate || !loanTenure}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculating EMI...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate EMI
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="space-y-4">
          {/* Main Results */}
          <Card className="shadow-lg border-slate-700 animate-fade-in-up bg-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-orange-500/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-foreground" />
                </div>
                EMI Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Main EMI Display */}
              <div className="text-center p-4 rounded-xl bg-black border border-orange-500/20">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {result ? formatCurrency(result.emi) : "₹0"}
                </div>
                <div className="text-sm text-slate-400">Monthly EMI</div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-black border border-blue-700">
                  <div className="text-xl font-bold text-foreground mb-0.5">
                    {result ? formatCurrency(result.totalPayment) : "₹0"}
                  </div>
                  <div className="text-xs text-slate-400">Total Payment</div>
                </div>
                <div className="p-3 rounded-lg bg-black border border-orange-700">
                  <div className="text-xl font-bold text-foreground mb-0.5">
                    {result ? formatCurrency(result.totalInterest) : "₹0"}
                  </div>
                  <div className="text-xs text-slate-400">Total Interest</div>
                </div>
                <div className="p-3 rounded-lg bg-black border border-purple-700">
                  <div className="text-xl font-bold text-foreground mb-0.5">
                    {result ? formatCurrency(result.principalAmount) : "₹0"}
                  </div>
                  <div className="text-xs text-slate-400">Principal Amount</div>
                </div>
              </div>

              {/* Payment Breakdown Pie Chart */}
              <div className="p-3 bg-black rounded-lg border border-slate-700">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5 text-heading-accent">
                  <PieChart className="h-3.5 w-3.5 text-heading-accent" />
                  Break-up of Total Payment
                </h3>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-xs font-medium text-slate-300">
                      {result ? ((result.principalAmount / result.totalPayment) * 100).toFixed(1) : "0"}% Principal
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-xs font-medium text-slate-300">
                      {result ? ((result.totalInterest / result.totalPayment) * 100).toFixed(1) : "0"}% Interest
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={copyResult}
                  className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-green-700 hover:bg-slate-800 text-heading-accent bg-black"
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
                </Button>
                <Button
                  onClick={() => {/* Share functionality */}}
                  className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-blue-700 hover:bg-slate-800 text-foreground bg-black"
                >
                  <Share2 className="mr-1.5 h-3.5 w-3.5" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Amortization Schedule */}
          <Card className="shadow-lg border-border bg-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-orange-500/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                Payment Schedule
              </CardTitle>
              <div className="flex gap-2 mt-2">
                <Button
                  onClick={() => setShowYearlyView(true)}
                  variant={showYearlyView ? "default" : "outline"}
                  size="sm"
                  className="h-8 text-xs"
                >
                  Yearly View
                </Button>
                <Button
                  onClick={() => setShowYearlyView(false)}
                  variant={!showYearlyView ? "default" : "outline"}
                  size="sm"
                  className="h-8 text-xs"
                >
                  Monthly View
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Chart Section */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5 text-heading-accent">
                  <BarChart3 className="h-3.5 w-3.5 text-heading-accent" />
                  Payment Analysis Chart
                </h3>
                <div className="bg-black rounded-lg p-3 border border-slate-700">
                  {showYearlyView ? (
                    <div className="space-y-3">
                      <div className="text-xs text-slate-400">Yearly Payment Breakdown</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {result && result.yearlySchedule ? result.yearlySchedule.slice(0, 6).map((entry, index) => (
                          <div key={index} className="bg-black rounded-lg p-2 border border-slate-700">
                            <div className="text-xs font-semibold text-slate-200 mb-1.5">
                              Year {entry.year}
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex justify-between text-[10px]">
                                <span className="text-heading-accent">Principal:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.principal)}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-foreground">Interest:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.interest)}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-slate-400">Total:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.totalPayment)}</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1.5">
                                <div 
                                  className="bg-orange-500 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${entry.loanPaidToDate}%` }}
                                ></div>
                              </div>
                              <div className="text-[10px] text-center text-slate-400">
                                {entry.loanPaidToDate.toFixed(1)}% Paid
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="col-span-full text-center py-6 text-slate-400">
                            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2">
                              <BarChart3 className="h-5 w-5" />
                            </div>
                            <p className="text-xs">Enter loan details to see yearly breakdown</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-xs text-slate-400">Monthly Payment Breakdown (First 12 Months)</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {result && result.amortizationSchedule ? result.amortizationSchedule.slice(0, 12).map((entry, index) => (
                          <div key={index} className="bg-black rounded-lg p-2 border border-slate-700">
                            <div className="text-[10px] font-semibold text-slate-200 mb-1">
                              Month {entry.month}
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex justify-between text-[10px]">
                                <span className="text-heading-accent">Principal:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.principal)}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-foreground">Interest:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.interest)}</span>
                              </div>
                              <div className="flex justify-between text-[10px]">
                                <span className="text-slate-400">Total:</span>
                                <span className="font-medium text-slate-300">{formatCurrency(entry.totalPayment)}</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1.5">
                                <div 
                                  className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${entry.principalPercentage}%` }}
                                ></div>
                              </div>
                              <div className="text-[10px] text-center text-slate-400">
                                {entry.principalPercentage.toFixed(1)}% Principal
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="col-span-full text-center py-6 text-slate-400">
                            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2">
                              <BarChart3 className="h-5 w-5" />
                            </div>
                            <p className="text-xs">Enter loan details to see monthly breakdown</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {showYearlyView ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-2 font-semibold text-slate-200 text-xs">Year</th>
                        <th className="text-right py-2 px-2 font-semibold text-heading-accent text-xs">Principal</th>
                        <th className="text-right py-2 px-2 font-semibold text-foreground text-xs">Interest</th>
                        <th className="text-right py-2 px-2 font-semibold text-slate-200 text-xs">Total</th>
                        <th className="text-right py-2 px-2 font-semibold text-foreground text-xs">Balance</th>
                        <th className="text-right py-2 px-2 font-semibold text-slate-200 text-xs">Paid %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result && result.yearlySchedule ? result.yearlySchedule.map((entry, index) => (
                        <tr key={index} className="border-b border-slate-700">
                          <td className="py-2 px-2 font-medium text-slate-300 text-xs">{entry.year}</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-medium text-xs">
                            {formatCurrency(entry.principal)}
                          </td>
                          <td className="py-2 px-2 text-right text-foreground font-medium text-xs">
                            {formatCurrency(entry.interest)}
                          </td>
                          <td className="py-2 px-2 text-right font-medium text-slate-300 text-xs">
                            {formatCurrency(entry.totalPayment)}
                          </td>
                          <td className="py-2 px-2 text-right text-foreground font-medium text-xs">
                            {formatCurrency(entry.balance)}
                          </td>
                          <td className="py-2 px-2 text-right font-medium text-slate-300 text-xs">
                            {entry.loanPaidToDate.toFixed(1)}%
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={6} className="py-6 text-center text-slate-400">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                <Calendar className="h-4 w-4" />
                              </div>
                              <span className="text-xs">Enter loan details to see yearly schedule</span>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto max-h-80">
                  <table className="w-full text-[10px]">
                    <thead className="sticky top-0 bg-black">
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-1.5 px-1 font-semibold text-slate-200">Month</th>
                        <th className="text-right py-1.5 px-1 font-semibold text-heading-accent">Principal</th>
                        <th className="text-right py-1.5 px-1 font-semibold text-foreground">Interest</th>
                        <th className="text-right py-1.5 px-1 font-semibold text-slate-200">Total</th>
                        <th className="text-right py-1.5 px-1 font-semibold text-foreground">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result && result.amortizationSchedule ? result.amortizationSchedule.slice(0, 24).map((entry, index) => (
                        <tr key={index} className="border-b border-slate-700">
                          <td className="py-1.5 px-1 font-medium text-slate-300">{entry.month}</td>
                          <td className="py-1.5 px-1 text-right text-heading-accent">
                            {formatCurrency(entry.principal)}
                          </td>
                          <td className="py-1.5 px-1 text-right text-foreground">
                            {formatCurrency(entry.interest)}
                          </td>
                          <td className="py-1.5 px-1 text-right text-slate-300">
                            {formatCurrency(entry.totalPayment)}
                          </td>
                          <td className="py-1.5 px-1 text-right text-foreground">
                            {formatCurrency(entry.balance)}
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={5} className="py-6 text-center text-slate-400">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                <Calendar className="h-4 w-4" />
                              </div>
                              <span className="text-xs">Enter loan details to see monthly schedule</span>
                            </div>
                          </td>
                        </tr>
                      )}
                      {result && result.amortizationSchedule && result.amortizationSchedule.length > 24 && (
                        <tr>
                          <td colSpan={5} className="py-1.5 text-center text-slate-400 text-xs">
                            ... and {result.amortizationSchedule.length - 24} more months
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
    </div>
  )
}
