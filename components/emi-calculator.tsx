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
    { id: "home", label: "Home Loan", icon: Home, color: "text-blue-600" },
    { id: "car", label: "Car Loan", icon: Car, color: "text-green-600" },
    { id: "personal", label: "Personal Loan", icon: CreditCard, color: "text-purple-600" },
    { id: "education", label: "Education Loan", icon: GraduationCap, color: "text-orange-600" }
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
    return loanType ? loanType.color : "text-blue-600"
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator Card */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            EMI Calculator for {loanTypes.find(lt => lt.id === loanType)?.label}
          </CardTitle>
          <CardDescription className="text-base">
            Calculate your Equated Monthly Installment with detailed breakdown and amortization schedule
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
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
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
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
              <Label htmlFor="loanAmount" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Loan Amount (₹)
              </Label>
              <Input
                id="loanAmount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Enter loan amount"
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
              <div className="text-xs text-muted-foreground">
                Range: ₹1L - ₹10Cr
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="interestRate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Percent className="h-4 w-4 text-primary" />
                Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Enter interest rate"
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
              <div className="text-xs text-muted-foreground">
                Range: 3% - 25%
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="loanTenure" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Loan Tenure (Years)
              </Label>
              <Input
                id="loanTenure"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                placeholder="Enter loan tenure"
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
              <div className="text-xs text-muted-foreground">
                Range: 1 - 30 years
              </div>
            </div>
          </div>

          {/* EMI in Advance Option (for Car Loans) */}
          {loanType === "car" && (
            <div className="space-y-3">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                EMI Payment Mode
              </Label>
              <div className="flex gap-4">
                <button
                  onClick={() => setEmiInAdvance(false)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    !emiInAdvance
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  EMI in Arrears
                </button>
                <button
                  onClick={() => setEmiInAdvance(true)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    emiInAdvance
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-slate-200 dark:border-slate-700'
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
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
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
      <div className="space-y-6">
          {/* Main Results */}
          <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                EMI Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main EMI Display */}
              <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {result ? formatCurrency(result.emi) : "₹0"}
                </div>
                <div className="text-lg sm:text-xl text-muted-foreground">Monthly EMI</div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-800">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                    {result ? formatCurrency(result.totalPayment) : "₹0"}
                  </div>
                  <div className="text-sm sm:text-base text-blue-800 dark:text-blue-200">Total Payment</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border-2 border-orange-200 dark:border-orange-800">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                    {result ? formatCurrency(result.totalInterest) : "₹0"}
                  </div>
                  <div className="text-sm sm:text-base text-orange-800 dark:text-orange-200">Total Interest</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-800">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                    {result ? formatCurrency(result.principalAmount) : "₹0"}
                  </div>
                  <div className="text-sm sm:text-base text-purple-800 dark:text-purple-200">Principal Amount</div>
                </div>
              </div>

              {/* Payment Breakdown Pie Chart */}
              <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Break-up of Total Payment
                </h3>
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm font-medium">
                      {result ? ((result.principalAmount / result.totalPayment) * 100).toFixed(1) : "0"}% Principal
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm font-medium">
                      {result ? ((result.totalInterest / result.totalPayment) * 100).toFixed(1) : "0"}% Interest
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={copyResult}
                  className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 hover:bg-green-100 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Copy Results
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => {/* Share functionality */}}
                  className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                >
                  <Share2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Amortization Schedule */}
          <Card className="shadow-lg border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
                Payment Schedule
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowYearlyView(true)}
                  variant={showYearlyView ? "default" : "outline"}
                  size="sm"
                >
                  Yearly View
                </Button>
                <Button
                  onClick={() => setShowYearlyView(false)}
                  variant={!showYearlyView ? "default" : "outline"}
                  size="sm"
                >
                  Monthly View
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Chart Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Payment Analysis Chart
                </h3>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  {showYearlyView ? (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Yearly Payment Breakdown</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {result && result.yearlySchedule ? result.yearlySchedule.slice(0, 6).map((entry, index) => (
                          <div key={index} className="bg-white dark:bg-slate-700 rounded-lg p-3 border">
                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                              Year {entry.year}
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-green-600">Principal:</span>
                                <span className="font-medium">{formatCurrency(entry.principal)}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-orange-600">Interest:</span>
                                <span className="font-medium">{formatCurrency(entry.interest)}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-600">Total:</span>
                                <span className="font-medium">{formatCurrency(entry.totalPayment)}</span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-2">
                                <div 
                                  className="bg-primary h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${entry.loanPaidToDate}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-center text-muted-foreground">
                                {entry.loanPaidToDate.toFixed(1)}% Paid
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="col-span-full text-center py-8 text-muted-foreground">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <BarChart3 className="h-6 w-6" />
                            </div>
                            <p>Enter loan details to see yearly breakdown</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">Monthly Payment Breakdown (First 12 Months)</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {result && result.amortizationSchedule ? result.amortizationSchedule.slice(0, 12).map((entry, index) => (
                          <div key={index} className="bg-white dark:bg-slate-700 rounded-lg p-3 border">
                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                              Month {entry.month}
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-green-600">Principal:</span>
                                <span className="font-medium">{formatCurrency(entry.principal)}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-orange-600">Interest:</span>
                                <span className="font-medium">{formatCurrency(entry.interest)}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-600">Total:</span>
                                <span className="font-medium">{formatCurrency(entry.totalPayment)}</span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${entry.principalPercentage}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-center text-muted-foreground">
                                {entry.principalPercentage.toFixed(1)}% Principal
                              </div>
                            </div>
                          </div>
                        )) : (
                          <div className="col-span-full text-center py-8 text-muted-foreground">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <BarChart3 className="h-6 w-6" />
                            </div>
                            <p>Enter loan details to see monthly breakdown</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {showYearlyView ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-3 px-2 font-semibold">Year</th>
                        <th className="text-right py-3 px-2 font-semibold text-green-600">Principal (₹)</th>
                        <th className="text-right py-3 px-2 font-semibold text-orange-600">Interest (₹)</th>
                        <th className="text-right py-3 px-2 font-semibold">Total Payment (₹)</th>
                        <th className="text-right py-3 px-2 font-semibold text-red-600">Balance (₹)</th>
                        <th className="text-right py-3 px-2 font-semibold">Loan Paid (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result && result.yearlySchedule ? result.yearlySchedule.map((entry, index) => (
                        <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                          <td className="py-3 px-2 font-medium">{entry.year}</td>
                          <td className="py-3 px-2 text-right text-green-600 font-medium">
                            {formatCurrency(entry.principal)}
                          </td>
                          <td className="py-3 px-2 text-right text-orange-600 font-medium">
                            {formatCurrency(entry.interest)}
                          </td>
                          <td className="py-3 px-2 text-right font-medium">
                            {formatCurrency(entry.totalPayment)}
                          </td>
                          <td className="py-3 px-2 text-right text-red-600 font-medium">
                            {formatCurrency(entry.balance)}
                          </td>
                          <td className="py-3 px-2 text-right font-medium">
                            {entry.loanPaidToDate.toFixed(2)}%
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                <Calendar className="h-4 w-4" />
                              </div>
                              <span>Enter loan details to see yearly schedule</span>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto max-h-96">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800">
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-2 px-1 font-semibold">Month</th>
                        <th className="text-right py-2 px-1 font-semibold text-green-600">Principal</th>
                        <th className="text-right py-2 px-1 font-semibold text-orange-600">Interest</th>
                        <th className="text-right py-2 px-1 font-semibold">Total</th>
                        <th className="text-right py-2 px-1 font-semibold text-red-600">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result && result.amortizationSchedule ? result.amortizationSchedule.slice(0, 24).map((entry, index) => (
                        <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                          <td className="py-2 px-1 font-medium">{entry.month}</td>
                          <td className="py-2 px-1 text-right text-green-600">
                            {formatCurrency(entry.principal)}
                          </td>
                          <td className="py-2 px-1 text-right text-orange-600">
                            {formatCurrency(entry.interest)}
                          </td>
                          <td className="py-2 px-1 text-right">
                            {formatCurrency(entry.totalPayment)}
                          </td>
                          <td className="py-2 px-1 text-right text-red-600">
                            {formatCurrency(entry.balance)}
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-muted-foreground">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                <Calendar className="h-4 w-4" />
                              </div>
                              <span>Enter loan details to see monthly schedule</span>
                            </div>
                          </td>
                        </tr>
                      )}
                      {result && result.amortizationSchedule && result.amortizationSchedule.length > 24 && (
                        <tr>
                          <td colSpan={5} className="py-2 text-center text-muted-foreground">
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
