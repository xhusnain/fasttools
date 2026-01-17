"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

import { Copy, DollarSign, Calculator, Globe, CreditCard, Banknote, Coins, TrendingUp, Info, Settings, List, ShieldAlert } from "lucide-react"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GTextarea } from "@/ui/gtextarea"


// Comprehensive PayPal fee data structure
const PAYPAL_FEES = {
  // Personal Transaction Fees
  personal: {
    domestic: {
      paypalBalance: { percentage: 0, fixed: 0 },
      bankAccount: { percentage: 0, fixed: 0 },
      cards: { percentage: 2.9, fixed: 0.30 },
      amexSend: { percentage: 0, fixed: 0 },
      visaPlusVenmo: { percentage: 0, fixed: 0 },
      visaPlusOther: { percentage: 1.75, fixed: 0.25, min: 0.25, max: 25.00 }
    },
    international: {
      paypalBalance: { percentage: 5.0, fixed: 0.99, min: 0.99, max: 4.99 },
      bankAccount: { percentage: 5.0, fixed: 0.99, min: 0.99, max: 4.99 },
      cards: { percentage: 5.0, fixed: 0.99, min: 0.99, max: 4.99 },
      amexSend: { percentage: 5.0, fixed: 0.99, min: 0.99, max: 4.99 }
    }
  },

  // Commercial Transaction Fees
  commercial: {
    domestic: {
      paypalCheckout: { percentage: 3.49, fixed: 0.49 },
      paypalGuestCheckout: { percentage: 3.49, fixed: 0.49 },
      qrCode: { percentage: 2.29, fixed: 0.09 },
      qrCodeThirdParty: { percentage: 2.29, fixed: 0.09 },
      payWithVenmo: { percentage: 3.49, fixed: 0.49 },
      goodsAndServices: { percentage: 2.99, fixed: 0 },
      creditDebitCards: { percentage: 2.99, fixed: 0.49 },
      payLater: { percentage: 4.99, fixed: 0.49 },
      other: { percentage: 3.49, fixed: 0.49 }
    },
    international: {
      additionalFee: 1.50
    }
  },

  // Donation Fees
  donations: {
    domestic: {
      donateButton: { percentage: 2.89, fixed: 0.49 },
      paypalCheckoutDonations: { percentage: 2.89, fixed: 0.49 }
    },
    international: {
      additionalFee: 1.50
    }
  },

  // Cryptocurrency Fees
  cryptocurrency: {
    buying: [
      { min: 1.00, max: 74.99, percentage: 2.20 },
      { min: 75.00, max: 200.00, percentage: 2.00 },
      { min: 200.01, max: 1000.00, percentage: 1.80 },
      { min: 1000.01, max: Infinity, percentage: 1.50 }
    ],
    pyusdTransfer: { percentage: 1.50 },
    externalWalletTransfer: { percentage: 1.00 }
  },

  // Currency Conversion Fees
  currencyConversion: {
    goodsAndServices: 4.00,
    other: 3.00
  }
}

// Fixed fees by currency
const FIXED_FEES_BY_CURRENCY = {
  'USD': 0.49,
  'EUR': 0.39,
  'GBP': 0.39,
  'AUD': 0.59,
  'CAD': 0.59,
  'JPY': 49.00,
  'CHF': 0.49,
  'SEK': 4.09,
  'NOK': 3.90,
  'DKK': 2.90,
  'PLN': 1.89,
  'CZK': 9.00,
  'HUF': 149.00,
  'RUB': 39.00,
  'BRL': 2.90,
  'MXN': 9.00,
  'SGD': 0.69,
  'HKD': 3.79,
  'TWD': 14.00,
  'KRW': 0,
  'THB': 15.00,
  'MYR': 2.00,
  'PHP': 25.00,
  'IDR': 0,
  'VND': 0,
  'INR': 0,
  'ILS': 1.60,
  'ZAR': 0,
  'TRY': 0,
  'NZD': 0.69
}

// Countries and their regions
const COUNTRIES = {
  'US': { name: 'United States', region: 'domestic', currency: 'USD' },
  'CA': { name: 'Canada', region: 'international', currency: 'CAD' },
  'GB': { name: 'United Kingdom', region: 'international', currency: 'GBP' },
  'AU': { name: 'Australia', region: 'international', currency: 'AUD' },
  'DE': { name: 'Germany', region: 'international', currency: 'EUR' },
  'FR': { name: 'France', region: 'international', currency: 'EUR' },
  'IT': { name: 'Italy', region: 'international', currency: 'EUR' },
  'ES': { name: 'Spain', region: 'international', currency: 'EUR' },
  'NL': { name: 'Netherlands', region: 'international', currency: 'EUR' },
  'JP': { name: 'Japan', region: 'international', currency: 'JPY' },
  'CN': { name: 'China', region: 'international', currency: 'CNY' },
  'IN': { name: 'India', region: 'international', currency: 'INR' },
  'BR': { name: 'Brazil', region: 'international', currency: 'BRL' },
  'MX': { name: 'Mexico', region: 'international', currency: 'MXN' },
  'SG': { name: 'Singapore', region: 'international', currency: 'SGD' },
  'HK': { name: 'Hong Kong', region: 'international', currency: 'HKD' },
  'TW': { name: 'Taiwan', region: 'international', currency: 'TWD' },
  'KR': { name: 'South Korea', region: 'international', currency: 'KRW' },
  'TH': { name: 'Thailand', region: 'international', currency: 'THB' },
  'MY': { name: 'Malaysia', region: 'international', currency: 'MYR' },
  'PH': { name: 'Philippines', region: 'international', currency: 'PHP' },
  'ID': { name: 'Indonesia', region: 'international', currency: 'IDR' },
  'VN': { name: 'Vietnam', region: 'international', currency: 'VND' },
  'IL': { name: 'Israel', region: 'international', currency: 'ILS' },
  'ZA': { name: 'South Africa', region: 'international', currency: 'ZAR' },
  'TR': { name: 'Turkey', region: 'international', currency: 'TRY' },
  'NZ': { name: 'New Zealand', region: 'international', currency: 'NZD' },
  'CH': { name: 'Switzerland', region: 'international', currency: 'CHF' },
  'SE': { name: 'Sweden', region: 'international', currency: 'SEK' },
  'NO': { name: 'Norway', region: 'international', currency: 'NOK' },
  'DK': { name: 'Denmark', region: 'international', currency: 'DKK' },
  'PL': { name: 'Poland', region: 'international', currency: 'PLN' },
  'CZ': { name: 'Czech Republic', region: 'international', currency: 'CZK' },
  'HU': { name: 'Hungary', region: 'international', currency: 'HUF' },
  'RU': { name: 'Russia', region: 'international', currency: 'RUB' }
}

interface FeeCalculationResult {
  transactionType: string
  paymentMethod: string
  amount: number
  percentageFee: number
  fixedFee: number
  totalFee: number
  netAmount: number
  grossAmount: number
  currency: string
  country: string
  isInternational: boolean
  currencyConversionFee?: number
  cryptocurrencyFee?: number
}

export function PayPalFeeCalculator() {
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState("")
  const [transactionType, setTransactionType] = useState("personal")
  const [paymentMethod, setPaymentMethod] = useState("paypalBalance")
  const [senderCountry, setSenderCountry] = useState("US")
  const [receiverCountry, setReceiverCountry] = useState("US")
  const [currency, setCurrency] = useState("USD")
  const [result, setResult] = useState<FeeCalculationResult | null>(null)
  const [activeTab, setActiveTab] = useState("standard")

  // Bulk Calculation States
  const [bulkInput, setBulkInput] = useState("")
  const [bulkResult, setBulkResult] = useState<{ count: number, totalAmount: number, totalFees: number, totalNet: number } | null>(null)

  // Chargeback States
  const [disputeAmount, setDisputeAmount] = useState("")
  const [disputeResult, setDisputeResult] = useState<{ amount: number, fee: number, totalLoss: number } | null>(null)

  const calculateFee = () => {
    setLoading(true)
    setTimeout(() => {
      const amountNum = Number.parseFloat(amount)
      if (amountNum <= 0) {
        setLoading(false)
        return
      }

      const senderCountryData = COUNTRIES[senderCountry as keyof typeof COUNTRIES]
      const receiverCountryData = COUNTRIES[receiverCountry as keyof typeof COUNTRIES]
      const isInternational = senderCountry !== receiverCountry
      const isDomestic = !isInternational

      let feeStructure: any = {}
      let baseFee: { percentage: number; fixed: number; min?: number; max?: number } = { percentage: 0, fixed: 0 }

      // Get base fee structure based on transaction type
      if (transactionType === 'personal') {
        feeStructure = isDomestic ? PAYPAL_FEES.personal.domestic : PAYPAL_FEES.personal.international
        baseFee = feeStructure[paymentMethod] || { percentage: 0, fixed: 0 }
      } else if (transactionType === 'commercial') {
        feeStructure = isDomestic ? PAYPAL_FEES.commercial.domestic : PAYPAL_FEES.commercial.international
        baseFee = feeStructure[paymentMethod] || { percentage: 0, fixed: 0 }

        // Add international fee for commercial transactions
        if (isInternational && feeStructure.additionalFee) {
          baseFee.percentage += feeStructure.additionalFee
        }
      } else if (transactionType === 'donations') {
        feeStructure = isDomestic ? PAYPAL_FEES.donations.domestic : PAYPAL_FEES.donations.international
        baseFee = feeStructure[paymentMethod] || { percentage: 0, fixed: 0 }

        // Add international fee for donations
        if (isInternational && feeStructure.additionalFee) {
          baseFee.percentage += feeStructure.additionalFee
        }
      } else if (transactionType === 'cryptocurrency') {
        // Cryptocurrency fee calculation
        const cryptoFee = PAYPAL_FEES.cryptocurrency.buying.find(tier =>
          amountNum >= tier.min && amountNum <= tier.max
        )
        baseFee = cryptoFee ? { percentage: cryptoFee.percentage, fixed: 0 } : { percentage: 1.50, fixed: 0 }
      }

      // Get fixed fee for currency
      const currencyFixedFee = FIXED_FEES_BY_CURRENCY[currency as keyof typeof FIXED_FEES_BY_CURRENCY] || 0
      const actualFixedFee = baseFee.fixed || currencyFixedFee

      // Calculate fees
      const percentageFee = (amountNum * baseFee.percentage) / 100
      let totalFee = percentageFee + actualFixedFee

      // Apply min/max limits if specified
      if (baseFee.min && totalFee < baseFee.min) {
        totalFee = baseFee.min
      }
      if (baseFee.max && totalFee > baseFee.max) {
        totalFee = baseFee.max
      }

      const netAmount = amountNum - totalFee
      const grossAmount = (amountNum + actualFixedFee) / (1 - baseFee.percentage / 100)

      // Currency conversion fee (if applicable)
      let currencyConversionFee = 0
      if (isInternational && transactionType !== 'cryptocurrency') {
        const conversionRate = transactionType === 'commercial' ?
          PAYPAL_FEES.currencyConversion.goodsAndServices :
          PAYPAL_FEES.currencyConversion.other
        currencyConversionFee = (amountNum * conversionRate) / 100
      }

      setResult({
        transactionType,
        paymentMethod,
        amount: amountNum,
        percentageFee: Number.parseFloat(percentageFee.toFixed(2)),
        fixedFee: Number.parseFloat(actualFixedFee.toFixed(2)),
        totalFee: Number.parseFloat(totalFee.toFixed(2)),
        netAmount: Number.parseFloat(netAmount.toFixed(2)),
        grossAmount: Number.parseFloat(grossAmount.toFixed(2)),
        currency,
        country: receiverCountryData.name,
        isInternational,
        currencyConversionFee: currencyConversionFee > 0 ? Number.parseFloat(currencyConversionFee.toFixed(2)) : undefined
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `PayPal Fee Calculation:
Transaction Type: ${result.transactionType}
Payment Method: ${result.paymentMethod}
Amount: ${result.currency} ${result.amount}
Percentage Fee: ${result.currency} ${result.percentageFee}
Fixed Fee: ${result.currency} ${result.fixedFee}
Total Fee: ${result.currency} ${result.totalFee}
You Receive: ${result.currency} ${result.netAmount}
To receive ${result.currency} ${result.amount}, charge: ${result.currency} ${result.grossAmount}
Country: ${result.country}
International: ${result.isInternational ? 'Yes' : 'No'}`
      void navigator.clipboard.writeText(text)
    }
  }

  const getPaymentMethodOptions = () => {
    if (transactionType === 'personal') {
      return [
        { value: 'paypalBalance', label: 'PayPal Balance' },
        { value: 'bankAccount', label: 'Bank Account' },
        { value: 'cards', label: 'Credit/Debit Cards' },
        { value: 'amexSend', label: 'Amex Send™ Account' },
        { value: 'visaPlusVenmo', label: 'Visa+ to Venmo' },
        { value: 'visaPlusOther', label: 'Visa+ to Other Wallets' }
      ]
    } else if (transactionType === 'commercial') {
      return [
        { value: 'paypalCheckout', label: 'PayPal Checkout' },
        { value: 'paypalGuestCheckout', label: 'PayPal Guest Checkout' },
        { value: 'qrCode', label: 'QR Code Transactions' },
        { value: 'payWithVenmo', label: 'Pay with Venmo' },
        { value: 'goodsAndServices', label: 'Goods and Services' },
        { value: 'creditDebitCards', label: 'Credit/Debit Cards' },
        { value: 'payLater', label: 'PayPal Pay Later' },
        { value: 'other', label: 'Other Commercial' }
      ]
    } else if (transactionType === 'donations') {
      return [
        { value: 'donateButton', label: 'Donate GButton' },
        { value: 'paypalCheckoutDonations', label: 'PayPal Checkout for Donations' }
      ]
    } else if (transactionType === 'cryptocurrency') {
      return [
        { value: 'buying', label: 'Buying Cryptocurrency' },
        { value: 'selling', label: 'Selling Cryptocurrency' },
        { value: 'pyusdTransfer', label: 'PYUSD Transfer' },
        { value: 'externalWallet', label: 'External Wallet Transfer' }
      ]
    }
    return []
  }

  const calculateBulkFees = () => {
    setLoading(true)
    setTimeout(() => {
      // Split by comma, newline, or space
      const amounts = bulkInput.split(/[\n, ]+/).map(s => Number.parseFloat(s.trim())).filter(n => !isNaN(n) && n > 0)

      if (amounts.length === 0) {
        setLoading(false)
        return
      }

      let totalAmount = 0
      let totalFees = 0

      // Using standard domestic fee (2.9% + $0.49) as a baseline for bulk estimate
      // In a real app complexity, we might want to let user select settings for bulk too
      const percentage = 2.9
      const fixed = 0.49

      amounts.forEach(amt => {
        totalAmount += amt
        const fee = (amt * percentage / 100) + fixed
        totalFees += fee
      })

      setBulkResult({
        count: amounts.length,
        totalAmount: Number.parseFloat(totalAmount.toFixed(2)),
        totalFees: Number.parseFloat(totalFees.toFixed(2)),
        totalNet: Number.parseFloat((totalAmount - totalFees).toFixed(2))
      })

      setLoading(false)
    }, 500)
  }

  const calculateDisputeCost = () => {
    const amt = Number.parseFloat(disputeAmount)
    if (isNaN(amt) || amt <= 0) return

    // Standard dispute fee is $15 (up to $30 for high volume)
    const disputeFee = 15.00

    setDisputeResult({
      amount: amt,
      fee: disputeFee,
      totalLoss: amt + disputeFee
    })
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            PayPal Fee Calculator
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">
            Calculate PayPal fees for different transaction types, countries, and currencies
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <GTabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <GTabsList className="grid w-full grid-cols-3 mb-6 bg-primary/10 p-1">
              <GTabsTrigger value="standard" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white">Standard Calculator</GTabsTrigger>
              <GTabsTrigger value="bulk" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white">Bulk Mode</GTabsTrigger>
              <GTabsTrigger value="analysis" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white">Fee Analysis & Help</GTabsTrigger>
            </GTabsList>

            <GTabsContent value="standard" className="space-y-4">
              {/* Compact Form Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - GInput Fields */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Settings className="h-4 w-4 text-foreground" />
                    Transaction Details
                  </h3>

                  {/* Transaction Type & Payment Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">Transaction Type</GLabel>
                      <GSelect value={transactionType} onValueChange={setTransactionType}>
                        <GSelectTrigger className="h-9 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground text-sm">
                          <GSelectValue placeholder="GSelect type" />
                        </GSelectTrigger>
                        <GSelectContent className="bg-background border-2 border-primary/30">
                          <GSelectItem value="personal" className="text-foreground hover:bg-primary/10 text-sm">Personal</GSelectItem>
                          <GSelectItem value="commercial" className="text-foreground hover:bg-primary/10 text-sm">Commercial</GSelectItem>
                          <GSelectItem value="donations" className="text-foreground hover:bg-primary/10 text-sm">Donations</GSelectItem>
                          <GSelectItem value="cryptocurrency" className="text-foreground hover:bg-primary/10 text-sm">Cryptocurrency</GSelectItem>
                        </GSelectContent>
                      </GSelect>
                    </div>

                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">Payment Method</GLabel>
                      <GSelect value={paymentMethod} onValueChange={setPaymentMethod}>
                        <GSelectTrigger className="h-9 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground text-sm">
                          <GSelectValue placeholder="GSelect method" />
                        </GSelectTrigger>
                        <GSelectContent className="bg-background border-2 border-primary/30">
                          {getPaymentMethodOptions().map((option) => (
                            <GSelectItem key={option.value} value={option.value} className="text-foreground hover:bg-primary/10 text-sm">
                              {option.label}
                            </GSelectItem>
                          ))}
                        </GSelectContent>
                      </GSelect>
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">From Country</GLabel>
                      <GSelect value={senderCountry} onValueChange={setSenderCountry}>
                        <GSelectTrigger className="h-9 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground text-sm">
                          <GSelectValue placeholder="GSelect country" />
                        </GSelectTrigger>
                        <GSelectContent className="bg-background border-2 border-primary/30">
                          {Object.entries(COUNTRIES).map(([code, data]) => (
                            <GSelectItem key={code} value={code} className="text-foreground hover:bg-primary/10 text-sm">
                              {data.name}
                            </GSelectItem>
                          ))}
                        </GSelectContent>
                      </GSelect>
                    </div>

                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">To Country</GLabel>
                      <GSelect value={receiverCountry} onValueChange={setReceiverCountry}>
                        <GSelectTrigger className="h-9 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground text-sm">
                          <GSelectValue placeholder="GSelect country" />
                        </GSelectTrigger>
                        <GSelectContent className="bg-background border-2 border-primary/30">
                          {Object.entries(COUNTRIES).map(([code, data]) => (
                            <GSelectItem key={code} value={code} className="text-foreground hover:bg-primary/10 text-sm">
                              {data.name}
                            </GSelectItem>
                          ))}
                        </GSelectContent>
                      </GSelect>
                    </div>
                  </div>

                  {/* Currency & Amount */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">Currency</GLabel>
                      <GSelect value={currency} onValueChange={setCurrency}>
                        <GSelectTrigger className="h-9 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground text-sm">
                          <GSelectValue placeholder="GSelect currency" />
                        </GSelectTrigger>
                        <GSelectContent className="bg-background border-2 border-primary/30">
                          {Object.entries(FIXED_FEES_BY_CURRENCY).map(([code, fee]) => (
                            <GSelectItem key={code} value={code} className="text-foreground hover:bg-primary/10 text-sm">
                              {code} {fee > 0 ? `(${fee})` : ''}
                            </GSelectItem>
                          ))}
                        </GSelectContent>
                      </GSelect>
                    </div>

                    <div className="space-y-1">
                      <GLabel className="text-xs font-medium text-muted-foreground">Amount ({currency})</GLabel>
                      <GInput
                        type="number"
                        placeholder="100.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        step="0.01"
                        className="h-9 text-sm border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <GButton
                    onClick={calculateFee}
                    disabled={loading || !amount || Number.parseFloat(amount) <= 0}
                    isLoading={loading}
                    className="w-full h-9 text-sm font-medium shadow-sm hover:shadow-md transition-all bg-primary hover:bg-primary text-white"
                  >
                    {loading ? "Calculating..." : (
                      <>
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculate Fee
                      </>
                    )}
                  </GButton>
                </div>

                {/* Right Column - Results */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-heading-accent" />
                    Fee Breakdown
                  </h3>

                  {result ? (
                    <div className="space-y-3">
                      {/* Transaction Summary */}
                      <div className="p-3 bg-card rounded-lg border-2 border-primary/30">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type:</span>
                            <span className="font-medium text-foreground capitalize">{result.transactionType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Method:</span>
                            <span className="font-medium text-foreground">{paymentMethod}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Country:</span>
                            <span className="font-medium text-foreground">{result.country}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">International:</span>
                            <span className={`font-medium ${result.isInternational ? 'text-foreground' : 'text-heading-accent'}`}>
                              {result.isInternational ? 'Yes' : 'No'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Amount & Fees */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-card rounded border border-primary/30">
                          <span className="text-sm text-muted-foreground">Transaction Amount:</span>
                          <span className="text-sm font-bold text-foreground">{result.currency} {result.amount}</span>
                        </div>

                        <div className="flex justify-between items-center p-2 bg-card rounded border border-primary/30">
                          <span className="text-sm text-muted-foreground">Percentage Fee:</span>
                          <span className="text-sm font-bold text-foreground">{result.currency} {result.percentageFee}</span>
                        </div>

                        <div className="flex justify-between items-center p-2 bg-card rounded border border-primary/30">
                          <span className="text-sm text-muted-foreground">Fixed Fee:</span>
                          <span className="text-sm font-bold text-foreground">{result.currency} {result.fixedFee}</span>
                        </div>

                        {result.currencyConversionFee && (
                          <div className="flex justify-between items-center p-2 bg-card rounded border border-primary/30">
                            <span className="text-sm text-muted-foreground">Currency Conversion:</span>
                            <span className="text-sm font-bold text-foreground">{result.currency} {result.currencyConversionFee}</span>
                          </div>
                        )}
                      </div>

                      {/* Total Fee */}
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border-2 border-primary">
                        <span className="text-sm font-medium text-foreground">Total Fee:</span>
                        <span className="text-lg font-bold text-foreground">{result.currency} {result.totalFee}</span>
                      </div>

                      {/* You Receive */}
                      <div className="flex justify-between items-center p-3 bg-secondary-accent/10 rounded-lg border-2 border-secondary-accent">
                        <span className="text-sm font-medium text-foreground">You Receive:</span>
                        <span className="text-lg font-bold text-heading-accent">{result.currency} {result.netAmount}</span>
                      </div>

                      {/* Amount to Charge */}
                      <div className="p-3 bg-primary/10 rounded-lg border-2 border-primary">
                        <p className="text-xs text-muted-foreground mb-1">To receive exactly {result.currency} {result.amount}:</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">Charge:</span>
                          <span className="text-lg font-bold text-foreground">{result.currency} {result.grossAmount}</span>
                        </div>
                      </div>

                      <GButton
                        onClick={copyResult}
                        variant="outline"
                        className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent border-primary/30"
                      >
                        <Copy className="mr-2 h-3 w-3" />
                        Copy Results
                      </GButton>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-muted-foreground border-2 border-dashed border-primary/30 rounded-lg">
                      <Calculator className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Enter transaction details and click "Calculate Fee" to see results</p>
                    </div>
                  )}
                </div>
              </div>
            </GTabsContent>

            <GTabsContent value="bulk" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <List className="h-5 w-5 text-primary" />
                      Bulk Transaction List
                    </h3>
                    <p className="text-sm text-muted-foreground">Enter multiple amounts separated by commas, spaces, or newlines.</p>
                    <GTextarea
                      placeholder="Example: 100, 25.50, 500
1200, 55"
                      value={bulkInput}
                      onChange={(e) => setBulkInput(e.target.value)}
                      className="min-h-[200px] font-mono text-sm border-2 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-xs text-muted-foreground">
                    <span className="font-bold text-yellow-600 dark:text-yellow-500">Note:</span> Bulk calculation assumes standard domestic commercial rate (2.9% + $0.49). For precise international or mixed rates, calculate individually.
                  </div>
                  <GButton
                    onClick={calculateBulkFees}
                    disabled={loading || !bulkInput}
                    isLoading={loading}
                    className="w-full bg-primary hover:bg-primary text-white"
                  >
                    Calculate Bulk Fees
                  </GButton>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-heading-accent" />
                    Bulk Results
                  </h3>
                  {bulkResult ? (
                    <div className="bg-card p-6 rounded-lg border-2 border-primary/30 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-muted-foreground">Transactions Processed:</span>
                        <span className="font-bold text-foreground">{bulkResult.count}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Transaction Value:</span>
                        <span className="font-bold text-foreground text-lg">${bulkResult.totalAmount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total PayPal Fees:</span>
                        <span className="font-bold text-red-500 text-lg">-${bulkResult.totalFees}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border">
                        <span className="font-bold text-foreground">Total Net (You Keep):</span>
                        <span className="font-bold text-green-600 text-xl">${bulkResult.totalNet}</span>
                      </div>

                      <GButton
                        onClick={() => {
                          const text = `Bulk Calculation Result:\nTotal Amount: $${bulkResult.totalAmount}\nTotal Fees: -$${bulkResult.totalFees}\nTotal Net: $${bulkResult.totalNet}\nCount: ${bulkResult.count}`
                          void navigator.clipboard.writeText(text)
                        }}
                        variant="outline"
                        className="w-full mt-4"
                      >
                        <Copy className="mr-2 h-4 w-4" /> Copy Results
                      </GButton>
                    </div>
                  ) : (
                    <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-primary/30 rounded-lg text-muted-foreground text-sm p-6 text-center">
                      Enter amounts to see the sum of fees and net profit.
                    </div>
                  )}
                </div>
              </div>
            </GTabsContent>

            <GTabsContent value="analysis" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chargeback Calculator */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-red-700 dark:text-red-400">
                      <ShieldAlert className="h-5 w-5" />
                      Dispute & Chargeback Cost
                    </h3>
                    <div className="space-y-3">
                      <GLabel className="text-xs">Disputed Transaction Amount ($)</GLabel>
                      <div className="flex gap-2">
                        <GInput
                          type="number"
                          placeholder="0.00"
                          value={disputeAmount}
                          onChange={(e) => setDisputeAmount(e.target.value)}
                          className="bg-background"
                        />
                        <GButton onClick={calculateDisputeCost} variant="destructive">Calculate</GButton>
                      </div>

                      {disputeResult && (
                        <div className="mt-4 space-y-2 text-sm bg-background p-3 rounded border border-red-200 dark:border-red-900/50">
                          <div className="flex justify-between"><span>Original Amount:</span> <span>${disputeResult.amount.toFixed(2)}</span></div>
                          <div className="flex justify-between text-red-600 font-medium"><span>Dispute Fee:</span> <span>+${disputeResult.fee.toFixed(2)}</span></div>
                          <div className="border-t pt-2 mt-2 flex justify-between font-bold text-red-700"><span>Total Loss:</span> <span>${disputeResult.totalLoss.toFixed(2)}</span></div>
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            *Note: You lose the original transaction amount plus the dispute fee if you lose the case.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decision Helper */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 h-full">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
                      <Info className="h-5 w-5" />
                      Friends & Family vs. Goods & Services
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="grid gap-2">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-green-100 p-1 rounded text-green-700"><Coins className="h-3 w-3" /></div>
                          <div>
                            <span className="font-semibold block text-foreground">Friends & Family</span>
                            <span className="text-muted-foreground text-xs">Best for sending money to people you know and trust. No fees for bank transfers, but <strong className="text-red-500">ZERO protection</strong> if something goes wrong.</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 pt-2 border-t border-blue-200/30">
                          <div className="mt-1 bg-blue-100 p-1 rounded text-blue-700"><ShieldAlert className="h-3 w-3" /></div>
                          <div>
                            <span className="font-semibold block text-foreground">Goods & Services</span>
                            <span className="text-muted-foreground text-xs">Mandatory for buying/selling. Seller pays the fee, but Buyer gets <strong className="text-green-600">Purchase Protection</strong>.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GTabsContent>
          </GTabs>
        </GCardContent>
      </GCard>
    </div >
  )
}
