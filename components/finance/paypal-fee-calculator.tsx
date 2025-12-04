"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

import { Copy, DollarSign, Calculator, Globe, CreditCard, Banknote, Coins, TrendingUp, Info, Settings } from "lucide-react"


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
      navigator.clipboard.writeText(text)
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
        </GCardContent>
      </GCard>
    </div>
  )
}
