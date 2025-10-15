"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ruler, ArrowLeftRight, Copy, Download, RotateCcw, Settings, Calculator, Target, Users, Award } from "lucide-react"

export function LengthConverter() {
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("meter")
  const [toUnit, setToUnit] = useState("feet")
  const [copied, setCopied] = useState(false)
  const [precision, setPrecision] = useState(6)
  const [showSettings, setShowSettings] = useState(false)

  const units = {
    millimeter: { factor: 0.001, name: "Millimeter", symbol: "mm" },
    centimeter: { factor: 0.01, name: "Centimeter", symbol: "cm" },
    meter: { factor: 1, name: "Meter", symbol: "m" },
    kilometer: { factor: 1000, name: "Kilometer", symbol: "km" },
    inch: { factor: 0.0254, name: "Inch", symbol: "in" },
    feet: { factor: 0.3048, name: "Feet", symbol: "ft" },
    yard: { factor: 0.9144, name: "Yard", symbol: "yd" },
    mile: { factor: 1609.34, name: "Mile", symbol: "mi" },
  }

  const convert = () => {
    if (!value || isNaN(Number(value))) return ""
    const valueInMeters = Number(value) * units[fromUnit as keyof typeof units].factor
    const result = valueInMeters / units[toUnit as keyof typeof units].factor
    return result.toFixed(precision).replace(/\.?0+$/, "")
  }

  const swapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
  }

  const copyResult = async () => {
    const result = convert()
    if (result) {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadResults = () => {
    const result = convert()
    if (result) {
      const content = `Length Conversion Results\n\n${value} ${units[fromUnit as keyof typeof units].name} = ${result} ${units[toUnit as keyof typeof units].name}\n\nConverted on: ${new Date().toLocaleString()}`
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'length-conversion.txt'
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const resetConverter = () => {
    setValue("")
    setFromUnit("meter")
    setToUnit("feet")
    setPrecision(6)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-400/30 shadow-lg">
                <Ruler className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg sm:text-xl font-bold text-white truncate">Length Converter</CardTitle>
                <CardDescription className="text-white/80 text-sm sm:text-base hidden sm:block">Convert between different length units with precision</CardDescription>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-2">
              <Button onClick={() => setShowSettings(!showSettings)} variant="outline" size="sm" className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1 sm:flex-none">
                <Settings className="h-3 w-3 sm:mr-1" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
              <Button onClick={resetConverter} variant="outline" size="sm" className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1 sm:flex-none">
                <RotateCcw className="h-3 w-3 sm:mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {showSettings && (
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-400/20">
              <h3 className="text-sm font-semibold text-white mb-3">Precision Settings</h3>
              <div className="flex items-center gap-4">
                <Label htmlFor="precision" className="text-white/80 text-sm">Decimal Places:</Label>
                <Select value={precision.toString()} onValueChange={(value) => setPrecision(Number(value))}>
                  <SelectTrigger className="w-20 h-8 text-xs bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Mobile Layout (Ultra Compact) */}
          <div className="block sm:hidden space-y-3">
            {/* From Section */}
            <div className="space-y-1">
              <Label htmlFor="from-value" className="text-white font-medium text-xs">From</Label>
              <Input
                id="from-value"
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-9 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-400"
              />
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="h-9 text-xs bg-white/10 border-white/20 text-white">
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

            {/* Swap Button - Mobile */}
            <div className="flex items-center justify-center py-0">
              <Button onClick={swapUnits} variant="outline" size="icon" className="h-7 w-7 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeftRight className="h-3 w-3" />
              </Button>
            </div>

            {/* To Section */}
            <div className="space-y-1">
              <Label htmlFor="to-value" className="text-white font-medium text-xs">To</Label>
              <div className="h-9 px-3 py-2 bg-white/10 border border-white/20 rounded-md flex items-center text-sm font-medium text-white">
                {convert() || "0"}
              </div>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="h-9 text-xs bg-white/10 border-white/20 text-white">
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

          {/* Tablet Layout (2 columns) */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {/* From Section */}
              <div className="space-y-3">
                <Label htmlFor="from-value-tablet" className="text-white font-medium text-sm">From</Label>
                <Input
                  id="from-value-tablet"
                  type="number"
                  placeholder="Enter value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="h-11 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-400"
                />
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="h-11 text-sm bg-white/10 border-white/20 text-white">
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

              {/* To Section */}
              <div className="space-y-3">
                <Label htmlFor="to-value-tablet" className="text-white font-medium text-sm">To</Label>
                <div className="h-11 px-3 py-2 bg-white/10 border border-white/20 rounded-md flex items-center text-sm font-medium text-white">
                  {convert() || "0"}
                </div>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="h-11 text-sm bg-white/10 border-white/20 text-white">
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

            {/* Swap Button - Tablet */}
            <div className="flex items-center justify-center mt-4">
              <Button onClick={swapUnits} variant="outline" size="icon" className="h-10 w-10 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Layout (3 columns) */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* From Section */}
            <div className="space-y-3">
              <Label htmlFor="from-value-desktop" className="text-white font-medium">From</Label>
              <Input
                id="from-value-desktop"
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-12 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-400"
              />
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="h-12 text-sm bg-white/10 border-white/20 text-white">
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

            {/* Swap Button - Desktop */}
            <div className="flex items-center justify-center pt-8">
              <Button onClick={swapUnits} variant="outline" size="icon" className="h-12 w-12 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeftRight className="h-5 w-5" />
              </Button>
            </div>

            {/* To Section */}
            <div className="space-y-3">
              <Label htmlFor="to-value-desktop" className="text-white font-medium">To</Label>
              <div className="h-12 px-3 py-2 bg-white/10 border border-white/20 rounded-md flex items-center text-sm font-medium text-white">
                {convert() || "0"}
              </div>
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="h-12 text-sm bg-white/10 border-white/20 text-white">
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

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
            <Button onClick={copyResult} className="flex-1 h-8 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium text-xs sm:text-sm">
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              {copied ? "Copied!" : "Copy Result"}
            </Button>
            <Button onClick={downloadResults} variant="outline" className="h-8 sm:h-10 px-2 sm:px-4 bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm">
              <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
        <CardHeader className="p-2 sm:p-4">
          <CardTitle className="text-sm sm:text-lg font-bold text-white flex items-center gap-1 sm:gap-2">
            <Calculator className="h-3 w-3 sm:h-5 sm:w-5 text-green-400" />
            Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-3 md:gap-4 text-xs">
            <div className="p-1 sm:p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded border border-green-400/30">
              <p className="font-semibold text-white text-xs">1 meter =</p>
              <p className="text-green-200 text-xs">100 cm</p>
            </div>
            <div className="p-1 sm:p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded border border-emerald-400/30">
              <p className="font-semibold text-white text-xs">1 foot =</p>
              <p className="text-emerald-200 text-xs">12 inches</p>
            </div>
            <div className="p-1 sm:p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded border border-teal-400/30">
              <p className="font-semibold text-white text-xs">1 km =</p>
              <p className="text-teal-200 text-xs">1000 m</p>
            </div>
            <div className="p-1 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-green-600/20 rounded border border-cyan-400/30">
              <p className="font-semibold text-white text-xs">1 mile =</p>
              <p className="text-cyan-200 text-xs">5280 ft</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
