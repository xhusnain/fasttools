"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DollarSign, ArrowLeftRight, RefreshCw } from "lucide-react"

interface Currency {
  code: string
  name: string
  symbol: string
}

interface ConversionResult {
  from: string
  to: string
  amount: number
  convertedAmount: number
  rate: number
  date: string
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [lastUpdated, setLastUpdated] = useState<string>("")
  const [error, setError] = useState<string>("")

  // Fetch available currencies on component mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('/api/currency_converter/currencies')
        const data = await response.json()
        
        if (data.success) {
          setCurrencies(data.data)
        } else {
          console.error('Failed to fetch currencies:', data.message)
          // Fallback to basic currencies if API fails
          setCurrencies([
            { code: "USD", name: "US Dollar", symbol: "$" },
            { code: "EUR", name: "Euro", symbol: "€" },
            { code: "GBP", name: "British Pound", symbol: "£" },
            { code: "JPY", name: "Japanese Yen", symbol: "¥" },
            { code: "INR", name: "Indian Rupee", symbol: "₹" },
            { code: "AUD", name: "Australian Dollar", symbol: "A$" },
            { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
            { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
            { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
          ])
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
        // Fallback to basic currencies
        setCurrencies([
          { code: "USD", name: "US Dollar", symbol: "$" },
          { code: "EUR", name: "Euro", symbol: "€" },
          { code: "GBP", name: "British Pound", symbol: "£" },
          { code: "JPY", name: "Japanese Yen", symbol: "¥" },
          { code: "INR", name: "Indian Rupee", symbol: "₹" },
          { code: "AUD", name: "Australian Dollar", symbol: "A$" },
          { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
          { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
          { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
        ])
      }
    }
    
    fetchCurrencies()
  }, [])

  const convertCurrency = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setResult("")
      setError("Please enter a valid amount")
      return
    }

    if (fromCurrency === toCurrency) {
      setResult(amount)
      setError("")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch('/api/currency_converter/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          amount: Number(amount)
        })
      })

      const data = await response.json()

      if (data.success) {
        setResult(data.data.convertedAmount.toString())
        setLastUpdated(new Date().toLocaleString())
      } else {
        setError(data.message || 'Conversion failed')
        setResult("")
      }
    } catch (error) {
      console.error('Error converting currency:', error)
      setError('Failed to convert currency. Please try again.')
      setResult("")
    } finally {
      setLoading(false)
    }
  }

  const swapCurrencies = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
  }

  // Convert when amount or currencies change
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const timeoutId = setTimeout(() => {
        convertCurrency()
      }, 500) // Debounce for 500ms

      return () => clearTimeout(timeoutId)
    }
  }, [amount, fromCurrency, toCurrency])

  return (
    <div className="space-y-5">
      {/* Main Converter */}
      <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-4 w-4 text-foreground" />
          <h3 className="text-lg font-semibold text-card-foreground">Currency Converter</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border-2 border-orange-500 rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button 
              onClick={swapCurrencies} 
              variant="outline" 
              size="sm" 
              className="h-8 w-8 p-0 border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Result Display */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Result</label>
            <div className="w-full px-3 py-2 border-2 border-orange-500 rounded-md bg-background text-foreground flex items-center justify-center font-medium">
              {loading ? <RefreshCw className="h-4 w-4 animate-spin text-foreground" /> : result || "0.00"}
            </div>
          </div>
        </div>

        {/* Currency Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">From Currency</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border-2 border-orange-500 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">To Currency</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border-2 border-orange-500 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/20 rounded-md border border-red-200 dark:border-red-800">
            <p className="text-sm text-foreground text-center">
              {error}
            </p>
          </div>
        )}

        {/* Result Display */}
        {result && !error && (
          <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-md border border-orange-200 dark:border-orange-800">
            <p className="text-sm text-center">
              <span className="font-bold text-foreground">
                {amount} {fromCurrency}
              </span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="font-bold text-foreground">
                {result} {toCurrency}
              </span>
            </p>
          </div>
        )}

        {/* Last Updated */}
        {lastUpdated && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* Note */}
      <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
        <h4 className="text-sm font-semibold text-card-foreground mb-2">About FastTools Currency Converter</h4>
        <p className="text-xs text-muted-foreground">
          FastTools.store provides real-time currency conversion with accurate exchange rates updated regularly. 
          Our free currency converter supports 100+ currencies and is perfect for travel, business, and personal use. 
          Always verify rates with your bank or exchange service before making transactions.
        </p>
      </div>
    </div>
  )
}
