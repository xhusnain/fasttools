"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Heart, BarChart3,
  Scale, Coins, Building2, Briefcase, TrendingUp, CreditCard,
  AlertTriangle, CheckCircle, HandHeart, Wallet, Gem, Landmark
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  ZakatResult, NisabStandard, Currency,
  ZakatAssetCategory, ZakatDeduction, ZakatDistributionSuggestion
} from "@/types/calculator-types/zakat-calculator.types"

// Nisab thresholds (weight in grams)
const GOLD_NISAB_GRAMS = 87.48 // ~3 oz / 7.5 tola
const SILVER_NISAB_GRAMS = 612.36 // ~21 oz / 52.5 tola
const ZAKAT_RATE = 0.025 // 2.5%

const currencies: { id: Currency; label: string; symbol: string }[] = [
  { id: "USD", label: "US Dollar", symbol: "$" },
  { id: "GBP", label: "British Pound", symbol: "£" },
  { id: "EUR", label: "Euro", symbol: "€" },
  { id: "PKR", label: "Pakistani Rupee", symbol: "Rs" },
  { id: "SAR", label: "Saudi Riyal", symbol: "﷼" },
  { id: "AED", label: "UAE Dirham", symbol: "د.إ" },
  { id: "MYR", label: "Malaysian Ringgit", symbol: "RM" },
  { id: "IDR", label: "Indonesian Rupiah", symbol: "Rp" },
  { id: "BDT", label: "Bangladeshi Taka", symbol: "৳" },
  { id: "INR", label: "Indian Rupee", symbol: "₹" },
]

export function ZakatCalculator() {
  const [currency, setCurrency] = useState<Currency>("USD")
  const [nisabStandard, setNisabStandard] = useState<NisabStandard>("silver")

  // Gold/Silver prices (user editable, defaults approximate 2026 prices in USD)
  const [goldPricePerGram, setGoldPricePerGram] = useState("95")
  const [silverPricePerGram, setSilverPricePerGram] = useState("1.10")

  // Assets
  const [cashInHand, setCashInHand] = useState("")
  const [bankSavings, setBankSavings] = useState("")
  const [bankChecking, setBankChecking] = useState("")
  const [fixedDeposits, setFixedDeposits] = useState("")

  const [goldWeightGrams, setGoldWeightGrams] = useState("")
  const [silverWeightGrams, setSilverWeightGrams] = useState("")

  const [stocksValue, setStocksValue] = useState("")
  const [mutualFunds, setMutualFunds] = useState("")
  const [retirementAccess, setRetirementAccess] = useState("")
  const [crypto, setCrypto] = useState("")

  const [businessInventory, setBusinessInventory] = useState("")
  const [businessCash, setBusinessCash] = useState("")
  const [receivables, setReceivables] = useState("")

  const [rentalIncome, setRentalIncome] = useState("")
  const [otherIncome, setOtherIncome] = useState("")

  // Deductions
  const [personalDebt, setPersonalDebt] = useState("")
  const [creditCardDebt, setCreditCardDebt] = useState("")
  const [mortgageDue, setMortgageDue] = useState("")
  const [otherDebt, setOtherDebt] = useState("")
  const [immediateExpenses, setImmediateExpenses] = useState("")

  const [result, setResult] = useState<ZakatResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const currencySymbol = currencies.find(c => c.id === currency)?.symbol || "$"

  const calculateZakat = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const goldPrice = Number.parseFloat(goldPricePerGram) || 95
      const silverPrice = Number.parseFloat(silverPricePerGram) || 1.10

      // Calculate Nisab
      const nisab = nisabStandard === "gold"
        ? GOLD_NISAB_GRAMS * goldPrice
        : SILVER_NISAB_GRAMS * silverPrice

      // Cash & Bank
      const cash = (Number.parseFloat(cashInHand) || 0) +
        (Number.parseFloat(bankSavings) || 0) +
        (Number.parseFloat(bankChecking) || 0) +
        (Number.parseFloat(fixedDeposits) || 0)

      // Gold & Silver value
      const goldGrams = Number.parseFloat(goldWeightGrams) || 0
      const silverGrams = Number.parseFloat(silverWeightGrams) || 0
      const goldValue = goldGrams * goldPrice
      const silverValue = silverGrams * silverPrice
      const preciousMetals = goldValue + silverValue

      // Investments
      const investments = (Number.parseFloat(stocksValue) || 0) +
        (Number.parseFloat(mutualFunds) || 0) +
        (Number.parseFloat(retirementAccess) || 0) +
        (Number.parseFloat(crypto) || 0)

      // Business
      const business = (Number.parseFloat(businessInventory) || 0) +
        (Number.parseFloat(businessCash) || 0) +
        (Number.parseFloat(receivables) || 0)

      // Other income
      const otherAssets = (Number.parseFloat(rentalIncome) || 0) +
        (Number.parseFloat(otherIncome) || 0)

      const totalZakatable = cash + preciousMetals + investments + business + otherAssets

      // Deductions (debts due within the year / immediate)
      const debtPersonal = Number.parseFloat(personalDebt) || 0
      const debtCC = Number.parseFloat(creditCardDebt) || 0
      const debtMortgage = Number.parseFloat(mortgageDue) || 0
      const debtOther = Number.parseFloat(otherDebt) || 0
      const expenses = Number.parseFloat(immediateExpenses) || 0
      const totalDeductions = debtPersonal + debtCC + debtMortgage + debtOther + expenses

      const netZakatableWealth = Math.max(0, totalZakatable - totalDeductions)
      const isZakatDue = netZakatableWealth >= nisab
      const zakatAmount = isZakatDue ? netZakatableWealth * ZAKAT_RATE : 0

      // Asset breakdown
      const assetBreakdown: ZakatAssetCategory[] = [
        { category: "Cash & Bank Accounts", amount: cash, percentage: totalZakatable > 0 ? (cash / totalZakatable) * 100 : 0, icon: "wallet" },
        { category: "Gold & Silver", amount: preciousMetals, percentage: totalZakatable > 0 ? (preciousMetals / totalZakatable) * 100 : 0, icon: "gem" },
        { category: "Investments", amount: investments, percentage: totalZakatable > 0 ? (investments / totalZakatable) * 100 : 0, icon: "trending" },
        { category: "Business Assets", amount: business, percentage: totalZakatable > 0 ? (business / totalZakatable) * 100 : 0, icon: "briefcase" },
        { category: "Other Income/Assets", amount: otherAssets, percentage: totalZakatable > 0 ? (otherAssets / totalZakatable) * 100 : 0, icon: "coins" },
      ].filter(a => a.amount > 0)

      // Deduction breakdown
      const deductionBreakdown: ZakatDeduction[] = [
        { label: "Personal Loans", amount: debtPersonal },
        { label: "Credit Card Debt", amount: debtCC },
        { label: "Mortgage/Rent Due", amount: debtMortgage },
        { label: "Other Debts", amount: debtOther },
        { label: "Immediate Living Expenses", amount: expenses },
      ].filter(d => d.amount > 0)

      // 8 categories of Zakat recipients (Quran 9:60)
      const zakatDistribution: ZakatDistributionSuggestion[] = [
        { category: "The Poor", arabicName: "Al-Fuqara", description: "Those who do not have enough to meet their basic needs", suggestedPercent: 25, suggestedAmount: Math.round(zakatAmount * 0.25) },
        { category: "The Needy", arabicName: "Al-Masakin", description: "Those who have some means but not enough to be self-sufficient", suggestedPercent: 25, suggestedAmount: Math.round(zakatAmount * 0.25) },
        { category: "Zakat Administrators", arabicName: "Al-Amilin Alayha", description: "Those who collect and distribute Zakat", suggestedPercent: 10, suggestedAmount: Math.round(zakatAmount * 0.10) },
        { category: "New Muslims / Hearts to Reconcile", arabicName: "Al-Mu'allafatu Qulubuhum", description: "New Muslims or those whose hearts are inclined to Islam", suggestedPercent: 5, suggestedAmount: Math.round(zakatAmount * 0.05) },
        { category: "Freeing Captives", arabicName: "Fir-Riqab", description: "Freeing slaves and those in bondage or human trafficking victims", suggestedPercent: 5, suggestedAmount: Math.round(zakatAmount * 0.05) },
        { category: "Debt-Ridden", arabicName: "Al-Gharimin", description: "Those overwhelmed by debts incurred for permissible purposes", suggestedPercent: 10, suggestedAmount: Math.round(zakatAmount * 0.10) },
        { category: "In the Way of Allah", arabicName: "Fi Sabilillah", description: "Those striving in the path of Allah — education, dawah, defence", suggestedPercent: 15, suggestedAmount: Math.round(zakatAmount * 0.15) },
        { category: "The Traveller", arabicName: "Ibn as-Sabil", description: "Stranded travellers who need assistance to return home", suggestedPercent: 5, suggestedAmount: Math.round(zakatAmount * 0.05) },
      ]

      setResult({
        totalZakatable: Math.round(totalZakatable),
        totalDeductions: Math.round(totalDeductions),
        netZakatableWealth: Math.round(netZakatableWealth),
        nisabThreshold: Math.round(nisab),
        nisabStandard,
        isZakatDue,
        zakatAmount: Math.round(zakatAmount),
        zakatRate: ZAKAT_RATE * 100,
        currency,
        assetBreakdown,
        deductionBreakdown,
        zakatDistribution,
        dailyEquivalent: Number.parseFloat((zakatAmount / 365).toFixed(2)),
        monthlyEquivalent: Math.round(zakatAmount / 12)
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Zakat Calculation ${new Date().getFullYear()}`,
      `${"=".repeat(30)}`,
      ``,
      `Total Zakatable Wealth: ${currencySymbol}${result.totalZakatable.toLocaleString()}`,
      `Deductions: ${currencySymbol}${result.totalDeductions.toLocaleString()}`,
      `Net Zakatable Wealth: ${currencySymbol}${result.netZakatableWealth.toLocaleString()}`,
      `Nisab Threshold (${result.nisabStandard}): ${currencySymbol}${result.nisabThreshold.toLocaleString()}`,
      ``,
      result.isZakatDue
        ? `ZAKAT DUE: ${currencySymbol}${result.zakatAmount.toLocaleString()} (2.5%)`
        : `Zakat is NOT due — wealth is below Nisab threshold.`,
      ``,
      `Generated by FastTools Zakat Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fmt = (amount: number) => `${currencySymbol}${amount.toLocaleString()}`

  const getAssetIcon = (icon: string) => {
    switch (icon) {
      case "wallet": return <Wallet className="h-4 w-4 text-blue-500" />
      case "gem": return <Gem className="h-4 w-4 text-yellow-500" />
      case "trending": return <TrendingUp className="h-4 w-4 text-green-500" />
      case "briefcase": return <Briefcase className="h-4 w-4 text-purple-500" />
      case "coins": return <Coins className="h-4 w-4 text-orange-500" />
      default: return <DollarSign className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <HandHeart className="h-6 w-6 text-foreground" />
            </div>
            Zakat Calculator 2026
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate your Zakat obligation according to Islamic jurisprudence (fiqh). Based on Quran and Sunnah.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Currency & Nisab Standard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                <DollarSign className="h-4 w-4" /> Currency
              </GLabel>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="w-full h-10 sm:h-12 px-3 rounded-lg border border-border bg-card text-foreground text-sm focus:border-primary focus:ring-blue-500"
              >
                {currencies.map(c => (
                  <option key={c.id} value={c.id}>{c.symbol} {c.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                <Scale className="h-4 w-4" /> Nisab Standard
              </GLabel>
              <div className="flex gap-2">
                <button onClick={() => setNisabStandard("silver")}
                  className={`flex-1 p-2.5 rounded-lg border-2 text-xs text-center transition-all ${nisabStandard === "silver" ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border hover:border-primary/50 bg-card text-muted-foreground"}`}>
                  Silver (612.36g)
                  <div className="text-[10px] text-muted-foreground mt-0.5">Recommended by majority</div>
                </button>
                <button onClick={() => setNisabStandard("gold")}
                  className={`flex-1 p-2.5 rounded-lg border-2 text-xs text-center transition-all ${nisabStandard === "gold" ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border hover:border-primary/50 bg-card text-muted-foreground"}`}>
                  Gold (87.48g)
                  <div className="text-[10px] text-muted-foreground mt-0.5">Higher threshold</div>
                </button>
              </div>
            </div>
          </div>

          {/* Gold/Silver Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                <Gem className="h-3.5 w-3.5 text-yellow-500" /> Gold Price/gram ({currencySymbol})
              </GLabel>
              <GInput type="number" step="0.01" value={goldPricePerGram} onChange={(e) => setGoldPricePerGram(e.target.value)} placeholder="95" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                <Coins className="h-3.5 w-3.5 text-gray-400" /> Silver Price/gram ({currencySymbol})
              </GLabel>
              <GInput type="number" step="0.01" value={silverPricePerGram} onChange={(e) => setSilverPricePerGram(e.target.value)} placeholder="1.10" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
            </div>
          </div>

          {/* Cash & Bank */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Wallet className="h-4 w-4" /> Cash & Bank Accounts
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Cash in Hand</GLabel>
                <GInput type="number" value={cashInHand} onChange={(e) => setCashInHand(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Savings Account</GLabel>
                <GInput type="number" value={bankSavings} onChange={(e) => setBankSavings(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Checking Account</GLabel>
                <GInput type="number" value={bankChecking} onChange={(e) => setBankChecking(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Fixed Deposits</GLabel>
                <GInput type="number" value={fixedDeposits} onChange={(e) => setFixedDeposits(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
            </div>
          </div>

          {/* Gold & Silver */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Gem className="h-4 w-4" /> Gold & Silver (weight in grams)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Gold (grams)</GLabel>
                <GInput type="number" step="0.1" value={goldWeightGrams} onChange={(e) => setGoldWeightGrams(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
                <div className="text-[10px] text-muted-foreground">Include jewelry (Hanafi). 1 tola = 11.66g</div>
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Silver (grams)</GLabel>
                <GInput type="number" step="0.1" value={silverWeightGrams} onChange={(e) => setSilverWeightGrams(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
                <div className="text-[10px] text-muted-foreground">Include all silver items. 1 oz = 31.1g</div>
              </div>
            </div>
          </div>

          {/* Investments */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <TrendingUp className="h-4 w-4" /> Investments (current market value)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Stocks / Shares</GLabel>
                <GInput type="number" value={stocksValue} onChange={(e) => setStocksValue(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Mutual Funds</GLabel>
                <GInput type="number" value={mutualFunds} onChange={(e) => setMutualFunds(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Retirement (accessible)</GLabel>
                <GInput type="number" value={retirementAccess} onChange={(e) => setRetirementAccess(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
                <div className="text-[10px] text-muted-foreground">Only if accessible now</div>
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Cryptocurrency</GLabel>
                <GInput type="number" value={crypto} onChange={(e) => setCrypto(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
            </div>
          </div>

          {/* Business */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Business Assets
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Inventory Value</GLabel>
                <GInput type="number" value={businessInventory} onChange={(e) => setBusinessInventory(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Business Cash</GLabel>
                <GInput type="number" value={businessCash} onChange={(e) => setBusinessCash(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Receivables (owed to you)</GLabel>
                <GInput type="number" value={receivables} onChange={(e) => setReceivables(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
            </div>
          </div>

          {/* Other */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <GLabel className="text-xs font-semibold text-heading-accent flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" /> Rental Income (annual)
              </GLabel>
              <GInput type="number" value={rentalIncome} onChange={(e) => setRentalIncome(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
            </div>
            <div className="space-y-1.5">
              <GLabel className="text-xs font-semibold text-heading-accent flex items-center gap-1.5">
                <Coins className="h-3.5 w-3.5" /> Other Zakatable Assets
              </GLabel>
              <GInput type="number" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
            </div>
          </div>

          {/* Deductions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Deductions (debts & liabilities due)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Personal Loans</GLabel>
                <GInput type="number" value={personalDebt} onChange={(e) => setPersonalDebt(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Credit Card Balance</GLabel>
                <GInput type="number" value={creditCardDebt} onChange={(e) => setCreditCardDebt(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Mortgage/Rent Due</GLabel>
                <GInput type="number" value={mortgageDue} onChange={(e) => setMortgageDue(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
                <div className="text-[10px] text-muted-foreground">Only current year installments</div>
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Other Debts</GLabel>
                <GInput type="number" value={otherDebt} onChange={(e) => setOtherDebt(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <GLabel className="text-xs font-semibold text-heading-accent">Immediate Expenses</GLabel>
                <GInput type="number" value={immediateExpenses} onChange={(e) => setImmediateExpenses(e.target.value)} placeholder="0" className="h-10 text-sm bg-card border-border text-foreground focus:border-primary" />
                <div className="text-[10px] text-muted-foreground">Bills due before Zakat date</div>
              </div>
            </div>
          </div>

          <GButton onClick={calculateZakat} disabled={isCalculating}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
            {isCalculating ? <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculating...</> : <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate Zakat</>}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Zakat Due / Not Due */}
          <GCard className={`shadow-lg border animate-fade-in-up ${result.isZakatDue ? "bg-green-500/10 border-green-500/30" : "bg-blue-500/10 border-blue-500/30"}`}>
            <GCardContent className="py-6">
              <div className="text-center">
                {result.isZakatDue ? (
                  <>
                    <HandHeart className="h-10 w-10 text-green-500 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Your Zakat Obligation (2.5%)</div>
                    <div className="text-4xl sm:text-5xl font-bold text-green-500">{fmt(result.zakatAmount)}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {fmt(result.monthlyEquivalent)}/month · {fmt(result.dailyEquivalent)}/day
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Net Zakatable Wealth: {fmt(result.netZakatableWealth)} (Nisab: {fmt(result.nisabThreshold)})
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-500">Zakat is Not Obligatory</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Your net zakatable wealth ({fmt(result.netZakatableWealth)}) is below the Nisab threshold ({fmt(result.nisabThreshold)}).
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Voluntary charity (Sadaqah) is still highly recommended and rewarded.
                    </div>
                  </>
                )}
              </div>
            </GCardContent>
          </GCard>

          {/* Wealth Summary */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><BarChart3 className="h-4 w-4 text-foreground" /></div>
                Wealth Summary
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Total Assets</div>
                  <div className="text-lg font-bold text-foreground">{fmt(result.totalZakatable)}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-red-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Deductions</div>
                  <div className="text-lg font-bold text-foreground">-{fmt(result.totalDeductions)}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <div className="text-xs text-muted-foreground mb-1">Net Zakatable</div>
                  <div className="text-lg font-bold text-foreground">{fmt(result.netZakatableWealth)}</div>
                </div>
              </div>

              {/* Asset Breakdown */}
              {result.assetBreakdown.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-heading-accent">Asset Breakdown</h4>
                  {result.assetBreakdown.map(cat => (
                    <div key={cat.category} className="flex items-center gap-2 text-xs">
                      {getAssetIcon(cat.icon)}
                      <span className="w-36 text-foreground">{cat.category}</span>
                      <div className="flex-1 bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${cat.percentage}%` }} />
                      </div>
                      <span className="w-20 text-right font-medium text-foreground">{fmt(cat.amount)}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-1">Nisab Check</h4>
                <div className="text-xs text-muted-foreground">
                  Nisab ({result.nisabStandard === "gold" ? `Gold: ${GOLD_NISAB_GRAMS}g` : `Silver: ${SILVER_NISAB_GRAMS}g`}) = {fmt(result.nisabThreshold)}
                  {result.isZakatDue
                    ? ` — Your wealth of ${fmt(result.netZakatableWealth)} exceeds Nisab. Zakat is obligatory.`
                    : ` — Your wealth of ${fmt(result.netZakatableWealth)} is below Nisab. Zakat is not obligatory.`
                  }
                </div>
              </div>

              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* 8 Categories of Zakat Recipients */}
          {result.isZakatDue && (
            <GCard className="shadow-lg border-border bg-card">
              <GCardHeader className="pb-3">
                <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                  <div className="p-1.5 bg-primary/10 rounded-lg"><Heart className="h-4 w-4 text-foreground" /></div>
                  8 Categories of Zakat Recipients (Quran 9:60)
                </GCardTitle>
                <GCardDescription className="text-sm text-muted-foreground">
                  Suggested distribution based on traditional scholarship. Adjust according to local needs.
                </GCardDescription>
              </GCardHeader>
              <GCardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 font-semibold text-foreground">Category</th>
                        <th className="text-left py-2 px-2 font-semibold text-muted-foreground">Arabic</th>
                        <th className="text-right py-2 px-2 font-semibold text-heading-accent">Suggested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.zakatDistribution.map(d => (
                        <tr key={d.arabicName} className="border-b border-border">
                          <td className="py-2 px-2">
                            <div className="font-medium text-foreground">{d.category}</div>
                            <div className="text-[10px] text-muted-foreground">{d.description}</div>
                          </td>
                          <td className="py-2 px-2 text-muted-foreground italic">{d.arabicName}</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">
                            {fmt(d.suggestedAmount)}
                            <div className="text-[10px] text-muted-foreground font-normal">{d.suggestedPercent}%</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GCardContent>
            </GCard>
          )}

          {/* Disclaimer */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground">
                  This calculator provides an estimate based on general Islamic jurisprudence (fiqh). Different schools of thought (Hanafi, Maliki, Shafi&apos;i, Hanbali) may have varying rulings on specific assets. Consult a qualified Islamic scholar or your local mosque for rulings specific to your situation. Gold and silver prices should be updated to current market rates for accuracy.
                </p>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
