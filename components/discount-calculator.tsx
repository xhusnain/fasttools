"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Percent } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function DiscountCalculator() {
  const [loading, setLoading] = useState(false)
  const [originalPrice, setOriginalPrice] = useState("")
  const [discountPercent, setDiscountPercent] = useState("")
  const [result, setResult] = useState<{
    discountAmount: number
    finalPrice: number
    savings: number
  } | null>(null)

  const calculateDiscount = () => {
    setLoading(true)
    setTimeout(() => {
      const price = Number.parseFloat(originalPrice)
      const discount = Number.parseFloat(discountPercent)
      const discountAmount = (price * discount) / 100
      const finalPrice = price - discountAmount

      setResult({
        discountAmount: Number.parseFloat(discountAmount.toFixed(2)),
        finalPrice: Number.parseFloat(finalPrice.toFixed(2)),
        savings: Number.parseFloat(discountAmount.toFixed(2)),
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `Discount Calculation:
Original Price: $${originalPrice}
Discount: ${discountPercent}%
Discount Amount: $${result.discountAmount}
Final Price: $${result.finalPrice}
You Save: $${result.savings}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Calculate Sale Price</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter the original price and discount percentage to find the final price
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="originalPrice" className="text-sm font-medium text-foreground">
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
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discountPercent" className="text-sm font-medium text-foreground">
              Discount Percentage (%)
            </Label>
            <Input
              id="discountPercent"
              type="number"
              placeholder="20"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              min="0"
              max="100"
              step="0.1"
              className="h-11 text-sm"
            />
          </div>

          <Button
            onClick={calculateDiscount}
            disabled={loading || !originalPrice || !discountPercent}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <Percent className="mr-2 h-4 w-4" />
                Calculate Discount
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Sale Price Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Original Price:</span>
                <span className="text-base font-bold text-foreground">${originalPrice}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Discount ({discountPercent}%):</span>
                <span className="text-base font-bold text-destructive">-${result.discountAmount}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Final Price:</span>
                <span className="text-2xl font-bold text-primary">${result.finalPrice}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                <span className="text-sm font-medium text-foreground">You Save:</span>
                <span className="text-lg font-bold text-secondary">${result.savings}</span>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Results
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
