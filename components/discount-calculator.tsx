"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Percent, DollarSign, Calculator, ShoppingCart, Tag, TrendingDown, Plus, Minus, Trash2, AlertCircle, CheckCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface DiscountItem {
  id: string
  type: 'percentage' | 'fixed'
  value: number
  name: string
}

export function DiscountCalculator() {
  const [loading, setLoading] = useState(false)
  const [originalPrice, setOriginalPrice] = useState("")
  const [taxRate, setTaxRate] = useState("")
  const [taxInclusive, setTaxInclusive] = useState(false)
  const [discounts, setDiscounts] = useState<DiscountItem[]>([])
  const [result, setResult] = useState<{
    originalPrice: number
    subtotal: number
    totalDiscounts: number
    discountedSubtotal: number
    taxAmount: number
    finalPrice: number
    totalSavings: number
    effectiveDiscountRate: number
  } | null>(null)

  const addDiscount = () => {
    const newDiscount: DiscountItem = {
      id: Date.now().toString(),
      type: 'percentage',
      value: 0,
      name: `Discount ${discounts.length + 1}`
    }
    setDiscounts([...discounts, newDiscount])
  }

  const removeDiscount = (id: string) => {
    setDiscounts(discounts.filter(d => d.id !== id))
  }

  const updateDiscount = (id: string, field: keyof DiscountItem, value: string | number) => {
    setDiscounts(discounts.map(d =>
      d.id === id ? { ...d, [field]: value } : d
    ))
  }

  const calculateDiscount = () => {
    setLoading(true)
    setTimeout(() => {
      const price = Number.parseFloat(originalPrice) || 0
      const tax = Number.parseFloat(taxRate) || 0

      let subtotal = price
      let totalDiscounts = 0
      let discountedSubtotal = price

      if (discounts.length > 0) {
        discounts.forEach(discount => {
          if (discount.type === 'percentage') {
            const discountAmount = (discountedSubtotal * discount.value) / 100
            totalDiscounts += discountAmount
            discountedSubtotal -= discountAmount
          } else {
            const discountAmount = Math.min(discount.value, discountedSubtotal)
            totalDiscounts += discountAmount
            discountedSubtotal -= discountAmount
          }
        })
      }

      let taxAmount = 0
      let finalPrice = discountedSubtotal

      if (taxInclusive) {

        const taxExclusivePrice = discountedSubtotal / (1 + tax / 100)
        taxAmount = discountedSubtotal - taxExclusivePrice
        finalPrice = taxExclusivePrice
      } else {

        taxAmount = (discountedSubtotal * tax) / 100
        finalPrice = discountedSubtotal + taxAmount
      }

      const totalSavings = totalDiscounts
      const effectiveDiscountRate = price > 0 ? (totalDiscounts / price) * 100 : 0

      setResult({
        originalPrice: price,
        subtotal: subtotal,
        totalDiscounts: totalDiscounts,
        discountedSubtotal: discountedSubtotal,
        taxAmount: taxAmount,
        finalPrice: finalPrice,
        totalSavings: totalSavings,
        effectiveDiscountRate: effectiveDiscountRate
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `Advanced Discount Calculation:
Original Price: $${result.originalPrice.toFixed(2)}
Subtotal: $${result.subtotal.toFixed(2)}
Total Discounts: $${result.totalDiscounts.toFixed(2)}
Discounted Subtotal: $${result.discountedSubtotal.toFixed(2)}
Tax Amount: $${result.taxAmount.toFixed(2)}
Final Price: $${result.finalPrice.toFixed(2)}
Total Savings: $${result.totalSavings.toFixed(2)}
Effective Discount Rate: ${result.effectiveDiscountRate.toFixed(2)}%`
      navigator.clipboard.writeText(text)
    }
  }

  const resetCalculator = () => {
    setOriginalPrice("")
    setTaxRate("")
    setTaxInclusive(false)
    setDiscounts([])
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {}
      <Card className="border border-border shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Advanced Discount Calculator
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Calculate complex discounts with multiple types, tax options, and detailed breakdowns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {}
            <div className="space-y-6">
              {}
              <div className="space-y-2">
                <Label htmlFor="originalPrice" className="text-xs font-medium text-foreground">
                  Original Price ($)
                </Label>
                <Input
                  id="originalPrice"
                  type="number"
                  placeholder="99.99"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  min="0"
                  step="0.01"
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="taxRate" className="text-xs font-medium text-foreground">
                    Tax Rate (%)
                  </Label>
                  <Input
                    id="taxRate"
                    type="number"
                    placeholder="8.5"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                    className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-foreground">
                    Tax Application
                  </Label>
                  <Select value={taxInclusive ? "inclusive" : "exclusive"} onValueChange={(value) => setTaxInclusive(value === "inclusive")}>
                    <SelectTrigger className="h-9 border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exclusive">Tax Exclusive</SelectItem>
                      <SelectItem value="inclusive">Tax Inclusive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium text-foreground">
                    Discounts ({discounts.length})
                  </Label>
                  <Button
                    onClick={addDiscount}
                    variant="outline"
                    size="sm"
                    className="h-7 px-2 text-xs"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>

                {discounts.length === 0 ? (
                  <div className="p-3 rounded-lg border-2 border-dashed border-border text-center">
                    <Tag className="h-6 w-6 text-muted-foreground mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">No discounts added</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {discounts.map((discount, index) => (
                      <div key={discount.id} className="p-3 rounded-lg border border-border bg-card">
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <Input
                              value={discount.name}
                              onChange={(e) => updateDiscount(discount.id, 'name', e.target.value)}
                              placeholder="Name"
                              className="h-7 text-xs border border-border focus:border-orange-400 flex-1"
                            />
                            <Button
                              onClick={() => removeDiscount(discount.id)}
                              variant="outline"
                              size="sm"
                              className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <Select value={discount.type} onValueChange={(value: 'percentage' | 'fixed') => updateDiscount(discount.id, 'type', value)}>
                              <SelectTrigger className="h-7 text-xs border border-border focus:border-orange-400">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="percentage">%</SelectItem>
                                <SelectItem value="fixed">$</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              type="number"
                              value={discount.value}
                              onChange={(e) => updateDiscount(discount.id, 'value', Number.parseFloat(e.target.value) || 0)}
                              placeholder={discount.type === 'percentage' ? "20" : "10"}
                              min="0"
                              step={discount.type === 'percentage' ? "0.1" : "0.01"}
                              className="h-7 text-xs border border-border focus:border-orange-400"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {}
              <div className="flex gap-2">
              <Button
                onClick={calculateDiscount}
                disabled={loading || !originalPrice}
                className="flex-1 h-9 text-xs font-medium shadow-sm hover:shadow-md transition-all"
              >
                  {loading ? (
                    <>
                      <LoadingSpinner className="mr-1 h-3 w-3" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <Calculator className="mr-1 h-3 w-3" />
                      Calculate
                    </>
                  )}
                </Button>
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="h-9 px-3 text-xs"
                >
                  Reset
                </Button>
              </div>
            </div>

            {}
            <div className="space-y-4">
              {result ? (
                <>
                  {}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      Results
                    </h3>
                  </div>

                  {}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                      <span className="text-xs text-muted-foreground">Original Price:</span>
                      <span className="text-sm font-bold text-foreground">${result.originalPrice.toFixed(2)}</span>
                    </div>

                    {result.totalDiscounts > 0 && (
                      <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                        <span className="text-xs text-muted-foreground">Total Discounts:</span>
                        <span className="text-sm font-bold text-foreground">-${result.totalDiscounts.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                      <span className="text-xs text-muted-foreground">
                        {result.totalDiscounts > 0 ? 'Discounted Subtotal:' : 'Subtotal:'}
                      </span>
                      <span className="text-sm font-bold text-foreground">${result.discountedSubtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                      <span className="text-xs text-muted-foreground">Tax Amount:</span>
                      <span className="text-sm font-bold text-foreground">${result.taxAmount.toFixed(2)}</span>
                    </div>

                    {result.totalDiscounts > 0 && (
                      <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                        <span className="text-xs text-muted-foreground">Effective Rate:</span>
                        <span className="text-sm font-bold text-foreground">{result.effectiveDiscountRate.toFixed(2)}%</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                      <span className="text-sm font-medium text-foreground">Final Price:</span>
                      <span className="text-xl font-bold text-primary">${result.finalPrice.toFixed(2)}</span>
                    </div>

                    {result.totalSavings > 0 && (
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-heading-accent">Total Savings:</span>
                          <span className="text-lg font-bold text-heading-accent">${result.totalSavings.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-heading-accent mt-1">
                          Save {result.effectiveDiscountRate.toFixed(2)}% off original price
                        </p>
                      </div>
                    )}
                  </div>

                  {}
                  <Button
                    onClick={copyResult}
                    variant="outline"
                    className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent"
                  >
                    <Copy className="mr-1 h-3 w-3" />
                    Copy Results
                  </Button>
                </>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Enter values and click Calculate</p>
                    <p className="text-xs text-muted-foreground mt-1">to see detailed results</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
