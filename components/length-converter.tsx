"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ruler, ArrowLeftRight } from "lucide-react"

export function LengthConverter() {
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("meter")
  const [toUnit, setToUnit] = useState("feet")

  const units = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    feet: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  }

  const convert = () => {
    if (!value || isNaN(Number(value))) return ""
    const valueInMeters = Number(value) * units[fromUnit as keyof typeof units]
    const result = valueInMeters / units[toUnit as keyof typeof units]
    return result.toFixed(6).replace(/\.?0+$/, "")
  }

  const swapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Ruler className="h-5 w-5 text-primary" />
            Length Converter
          </CardTitle>
          <CardDescription>Convert between different length units</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="from-value">From</Label>
              <Input
                id="from-value"
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-11 text-sm"
              />
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="millimeter">Millimeter (mm)</SelectItem>
                  <SelectItem value="centimeter">Centimeter (cm)</SelectItem>
                  <SelectItem value="meter">Meter (m)</SelectItem>
                  <SelectItem value="kilometer">Kilometer (km)</SelectItem>
                  <SelectItem value="inch">Inch (in)</SelectItem>
                  <SelectItem value="feet">Feet (ft)</SelectItem>
                  <SelectItem value="yard">Yard (yd)</SelectItem>
                  <SelectItem value="mile">Mile (mi)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-center md:pt-8">
              <Button onClick={swapUnits} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 md:col-start-2">
              <Label htmlFor="to-value">To</Label>
              <div className="h-11 px-3 py-2 bg-muted rounded-md flex items-center text-sm font-medium">
                {convert() || "0"}
              </div>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="millimeter">Millimeter (mm)</SelectItem>
                  <SelectItem value="centimeter">Centimeter (cm)</SelectItem>
                  <SelectItem value="meter">Meter (m)</SelectItem>
                  <SelectItem value="kilometer">Kilometer (km)</SelectItem>
                  <SelectItem value="inch">Inch (in)</SelectItem>
                  <SelectItem value="feet">Feet (ft)</SelectItem>
                  <SelectItem value="yard">Yard (yd)</SelectItem>
                  <SelectItem value="mile">Mile (mi)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div>
              <p className="font-medium text-foreground">1 meter =</p>
              <p className="text-muted-foreground">100 cm</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 foot =</p>
              <p className="text-muted-foreground">12 inches</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 km =</p>
              <p className="text-muted-foreground">1000 m</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 mile =</p>
              <p className="text-muted-foreground">5280 ft</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
