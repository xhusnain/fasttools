"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, ArrowLeftRight, RefreshCw } from "lucide-react"

export function CurrencyConverter() {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({})
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY
        const apiUrl = apiKey
          ? `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
          : "https://api.exchangerate-api.com/v4/latest/USD"

        const response = await fetch(apiUrl)
        const data = await response.json()
        setExchangeRates(data.rates)
        setLastUpdated(new Date().toLocaleString())
      } catch (error) {
        console.error("Error fetching exchange rates:", error)
        // Fallback to mock rates if API fails
        setExchangeRates({
          USD: 1,
          EUR: 0.92,
          GBP: 0.79,
          JPY: 149.5,
          INR: 83.12,
          AUD: 1.52,
          CAD: 1.36,
          CHF: 0.88,
          CNY: 7.24,
        })
      }
    }
    fetchRates()
  }, [])

  const convert = () => {
    if (!amount || isNaN(Number(amount)) || Object.keys(exchangeRates).length === 0) {
      setResult("")
      return
    }

    setLoading(true)
    setTimeout(() => {
      const amountInUSD = Number(amount) / exchangeRates[fromCurrency]
      const convertedAmount = amountInUSD * exchangeRates[toCurrency]
      setResult(convertedAmount.toFixed(2))
      setLoading(false)
    }, 300)
  }

  const swapCurrencies = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
  }

  useEffect(() => {
    if (amount && Object.keys(exchangeRates).length > 0) {
      convert()
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates])

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Currency Converter
          </CardTitle>
          <CardDescription>
            Convert between different currencies with real-time rates
            {lastUpdated && <span className="block text-xs mt-1">Last updated: {lastUpdated}</span>}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="from-amount">From</Label>
              <Input
                id="from-amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-11 text-sm"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                  <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                  <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                  <SelectItem value="CHF">CHF - Swiss Franc</SelectItem>
                  <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center md:pt-8">
              <Button onClick={swapCurrencies} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 md:col-start-2">
              <Label htmlFor="to-amount">To</Label>
              <div className="h-11 px-3 py-2 bg-muted rounded-md flex items-center text-sm font-medium">
                {loading ? <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" /> : result || "0.00"}
              </div>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                  <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                  <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                  <SelectItem value="CHF">CHF - Swiss Franc</SelectItem>
                  <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {result && (
            <div className="p-4 bg-accent rounded-md border border-primary/10">
              <p className="text-sm text-center">
                <span className="font-bold text-foreground">
                  {amount} {fromCurrency}
                </span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="font-bold text-primary">
                  {result} {toCurrency}
                </span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Note</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Exchange rates are fetched from a live API and updated regularly. Rates may vary slightly from actual bank
            rates.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
