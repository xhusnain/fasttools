"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Minus, RefreshCw, DollarSign } from "lucide-react"

interface CurrencyData {
  currency: string
  currentRate: number
  change: number
  changePercent: number
  minRate: number
  maxRate: number
  avgRate: number
  trend: 'up' | 'down' | 'stable'
  symbol: string
  name: string
}

interface Top10Data {
  currencies: CurrencyData[]
  baseCurrency: string
  dateRange: {
    start: string
    end: string
    days: number
  }
  lastUpdated: string
}

export function Top10CurrenciesTable() {
  const [data, setData] = useState<Top10Data | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")
  const [lastRefresh, setLastRefresh] = useState<string>("")

  const fetchData = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch('/api/currency_converter/top10?base=USD&days=10')
      const result = await response.json()

      if (result.success) {
        setData(result.data)
        setLastRefresh(new Date().toLocaleString())
      } else {
        setError(result.message || 'Failed to fetch currency data')
      }
    } catch (err) {
      console.error('Error fetching top 10 currencies:', err)
      setError('Failed to fetch currency data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-heading-accent" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-foreground" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getChangeColor = (changePercent: number) => {
    if (changePercent > 0) return 'text-heading-accent'
    if (changePercent < 0) return 'text-foreground'
    return 'text-gray-600 dark:text-gray-400'
  }

  const getChangeBgColor = (changePercent: number) => {
    if (changePercent > 0) return 'bg-muted'
    if (changePercent < 0) return 'bg-red-50 dark:bg-red-950/20'
    return 'bg-gray-50 dark:bg-gray-950/20'
  }

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="h-6 w-6 animate-spin text-foreground mr-2" />
          <span className="text-sm text-muted-foreground">Loading currency data...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <div className="text-center py-8">
          <p className="text-sm text-foreground mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary transition-colors text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-foreground" />
          <h3 className="text-lg font-semibold text-card-foreground">Top 10 Currencies</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchData}
            className="p-1 hover:bg-muted rounded-md transition-colors"
            title="Refresh data"
          >
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </button>
          <span className="text-xs text-muted-foreground">
            Last updated: {data.lastUpdated}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-2 font-medium text-card-foreground">Rank</th>
              <th className="text-left py-2 px-2 font-medium text-card-foreground">Currency</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Rate</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Change</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Trend</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Min</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Max</th>
              <th className="text-right py-2 px-2 font-medium text-card-foreground">Avg</th>
            </tr>
          </thead>
          <tbody>
            {data.currencies.map((currency, index) => (
              <tr key={currency.currency} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-2 text-muted-foreground font-medium">
                  #{index + 1}
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-card-foreground">{currency.symbol}</span>
                    <div>
                      <div className="font-medium text-card-foreground">{currency.currency}</div>
                      <div className="text-xs text-muted-foreground">{currency.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 text-right font-medium text-card-foreground">
                  {currency.currentRate.toFixed(4)}
                </td>
                <td className="py-3 px-2 text-right">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md ${getChangeBgColor(currency.changePercent)}`}>
                    <span className={`font-medium ${getChangeColor(currency.changePercent)}`}>
                      {currency.changePercent > 0 ? '+' : ''}{currency.changePercent}%
                    </span>
                    <span className={`text-xs ${getChangeColor(currency.changePercent)}`}>
                      ({currency.change > 0 ? '+' : ''}{currency.change.toFixed(4)})
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2 text-right">
                  {getTrendIcon(currency.trend)}
                </td>
                <td className="py-3 px-2 text-right text-muted-foreground">
                  {currency.minRate.toFixed(4)}
                </td>
                <td className="py-3 px-2 text-right text-muted-foreground">
                  {currency.maxRate.toFixed(4)}
                </td>
                <td className="py-3 px-2 text-right text-muted-foreground">
                  {currency.avgRate.toFixed(4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 pt-5 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div>
            <span className="font-medium">Base Currency:</span> {data.baseCurrency}
          </div>
          <div>
            <span className="font-medium">Period:</span> {data.dateRange.days} days ({data.dateRange.start} to {data.dateRange.end})
          </div>
          <div>
            <span className="font-medium">Last Refresh:</span> {lastRefresh}
          </div>
        </div>
      </div>
    </div>
  )
}
