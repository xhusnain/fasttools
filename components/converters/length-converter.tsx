"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

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
      <GCard className="border border-border shadow bg-card">
        <GCardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow">
                <Ruler className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <GCardTitle className="text-lg sm:text-xl font-bold text-card-foreground truncate">Length Converter</GCardTitle>
                <GCardDescription className="text-muted-foreground text-sm sm:text-base hidden sm:block">Convert between different length units with precision</GCardDescription>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-2">
              <GButton onClick={() => setShowSettings(!showSettings)} variant="outline" size="sm" className="h-7 sm:h-8 px-2 sm:px-3 text-xs border-border text-foreground hover:bg-accent/10 flex-1 sm:flex-none">
                <Settings className="h-3 w-3 sm:mr-1" />
                <span className="hidden sm:inline">Settings</span>
              </GButton>
              <GButton onClick={resetConverter} variant="outline" size="sm" className="h-7 sm:h-8 px-2 sm:px-3 text-xs border-border text-foreground hover:bg-accent/10 flex-1 sm:flex-none">
                <RotateCcw className="h-3 w-3 sm:mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </GButton>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="p-6 space-y-6">
          {showSettings && (
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-sm font-semibold text-card-foreground mb-3">Precision Settings</h3>
              <div className="flex items-center gap-4">
                <GLabel htmlFor="precision" className="text-muted-foreground text-sm">Decimal Places:</GLabel>
                <GSelect value={precision.toString()} onValueChange={(value) => setPrecision(Number(value))}>
                  <GSelectTrigger className="w-24 h-8 text-xs bg-card border-border text-foreground">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="2">2</GSelectItem>
                    <GSelectItem value="4">4</GSelectItem>
                    <GSelectItem value="6">6</GSelectItem>
                    <GSelectItem value="8">8</GSelectItem>
                    <GSelectItem value="10">10</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>
            </div>
          )}

          {/* Mobile Layout (Ultra Compact) */}
          <div className="block sm:hidden space-y-3">
            {/* From Section */}
            <div className="space-y-1">
              <GLabel htmlFor="from-value" className="text-card-foreground font-medium text-xs">From</GLabel>
              <GInput
                id="from-value"
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-9 text-sm bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <GSelect value={fromUnit} onValueChange={setFromUnit}>
                <GSelectTrigger className="h-9 text-xs bg-card border-border text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                  <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                  <GSelectItem value="meter">Meter (m)</GSelectItem>
                  <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                  <GSelectItem value="inch">Inch (in)</GSelectItem>
                  <GSelectItem value="feet">Feet (ft)</GSelectItem>
                  <GSelectItem value="yard">Yard (yd)</GSelectItem>
                  <GSelectItem value="mile">Mile (mi)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            {/* Swap GButton - Mobile */}
            <div className="flex items-center justify-center py-0">
              <GButton onClick={swapUnits} variant="outline" size="icon" className="h-7 w-7 border-border text-foreground hover:bg-accent/10">
                <ArrowLeftRight className="h-3 w-3" />
              </GButton>
            </div>

            {/* To Section */}
            <div className="space-y-1">
              <GLabel htmlFor="to-value" className="text-card-foreground font-medium text-xs">To</GLabel>
              <div className="h-9 px-3 py-2 bg-card border border-border rounded-md flex items-center text-sm font-medium text-card-foreground">
                {convert() || "0"}
              </div>
              <GSelect value={toUnit} onValueChange={setToUnit}>
                <GSelectTrigger className="h-9 text-xs bg-card border-border text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                  <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                  <GSelectItem value="meter">Meter (m)</GSelectItem>
                  <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                  <GSelectItem value="inch">Inch (in)</GSelectItem>
                  <GSelectItem value="feet">Feet (ft)</GSelectItem>
                  <GSelectItem value="yard">Yard (yd)</GSelectItem>
                  <GSelectItem value="mile">Mile (mi)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {/* Tablet Layout (2 columns) */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {/* From Section */}
              <div className="space-y-3">
                <GLabel htmlFor="from-value-tablet" className="text-card-foreground font-medium text-sm">From</GLabel>
                <GInput
                  id="from-value-tablet"
                  type="number"
                  placeholder="Enter value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="h-11 text-sm bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
                <GSelect value={fromUnit} onValueChange={setFromUnit}>
                  <GSelectTrigger className="h-11 text-sm bg-card border-border text-foreground">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                    <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                    <GSelectItem value="meter">Meter (m)</GSelectItem>
                    <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                    <GSelectItem value="inch">Inch (in)</GSelectItem>
                    <GSelectItem value="feet">Feet (ft)</GSelectItem>
                    <GSelectItem value="yard">Yard (yd)</GSelectItem>
                    <GSelectItem value="mile">Mile (mi)</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>

              {/* To Section */}
              <div className="space-y-3">
                <GLabel htmlFor="to-value-tablet" className="text-card-foreground font-medium text-sm">To</GLabel>
                <div className="h-11 px-3 py-2 bg-card border border-border rounded-md flex items-center text-sm font-medium text-card-foreground">
                  {convert() || "0"}
                </div>
                <GSelect value={toUnit} onValueChange={setToUnit}>
                  <GSelectTrigger className="h-11 text-sm bg-card border-border text-foreground">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                    <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                    <GSelectItem value="meter">Meter (m)</GSelectItem>
                    <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                    <GSelectItem value="inch">Inch (in)</GSelectItem>
                    <GSelectItem value="feet">Feet (ft)</GSelectItem>
                    <GSelectItem value="yard">Yard (yd)</GSelectItem>
                    <GSelectItem value="mile">Mile (mi)</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>
            </div>

            {/* Swap GButton - Tablet */}
            <div className="flex items-center justify-center mt-4">
              <GButton onClick={swapUnits} variant="outline" size="icon" className="h-10 w-10 border-border text-foreground hover:bg-accent/10">
                <ArrowLeftRight className="h-4 w-4" />
              </GButton>
            </div>
          </div>

          {/* Desktop Layout (3 columns) */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* From Section */}
            <div className="space-y-3">
              <GLabel htmlFor="from-value-desktop" className="text-card-foreground font-medium">From</GLabel>
              <GInput
                id="from-value-desktop"
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-12 text-sm bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <GSelect value={fromUnit} onValueChange={setFromUnit}>
                <GSelectTrigger className="h-12 text-sm bg-card border-border text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                  <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                  <GSelectItem value="meter">Meter (m)</GSelectItem>
                  <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                  <GSelectItem value="inch">Inch (in)</GSelectItem>
                  <GSelectItem value="feet">Feet (ft)</GSelectItem>
                  <GSelectItem value="yard">Yard (yd)</GSelectItem>
                  <GSelectItem value="mile">Mile (mi)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            {/* Swap GButton - Desktop */}
            <div className="flex items-center justify-center pt-8">
              <GButton onClick={swapUnits} variant="outline" size="icon" className="h-12 w-12 border-border text-foreground hover:bg-accent/10">
                <ArrowLeftRight className="h-5 w-5" />
              </GButton>
            </div>

            {/* To Section */}
            <div className="space-y-3">
              <GLabel htmlFor="to-value-desktop" className="text-card-foreground font-medium">To</GLabel>
              <div className="h-12 px-3 py-2 bg-card border border-border rounded-md flex items-center text-sm font-medium text-card-foreground">
                {convert() || "0"}
              </div>
              <GSelect value={toUnit} onValueChange={setToUnit}>
                <GSelectTrigger className="h-12 text-sm bg-card border-border text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="millimeter">Millimeter (mm)</GSelectItem>
                  <GSelectItem value="centimeter">Centimeter (cm)</GSelectItem>
                  <GSelectItem value="meter">Meter (m)</GSelectItem>
                  <GSelectItem value="kilometer">Kilometer (km)</GSelectItem>
                  <GSelectItem value="inch">Inch (in)</GSelectItem>
                  <GSelectItem value="feet">Feet (ft)</GSelectItem>
                  <GSelectItem value="yard">Yard (yd)</GSelectItem>
                  <GSelectItem value="mile">Mile (mi)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
            <GButton onClick={convert} className="w-full">Convert</GButton>
            <GButton onClick={downloadResults} variant="outline" className="h-8 sm:h-10 px-2 sm:px-4 border-border text-foreground hover:bg-accent/10 text-xs sm:text-sm">
              <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Download</span>
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      <GCard className="border border-border shadow bg-card">
        <GCardHeader className="p-2 sm:p-4">
          <GCardTitle className="text-sm sm:text-lg font-bold text-card-foreground flex items-center gap-1 sm:gap-2">
            <Calculator className="h-3 w-3 sm:h-5 sm:w-5 text-primary" />
            Quick Reference
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="p-2 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-3 md:gap-4 text-xs">
            <div className="p-1 sm:p-3 bg-primary/5 rounded border border-primary/20">
              <p className="font-semibold text-card-foreground text-xs">1 meter =</p>
              <p className="text-muted-foreground text-xs">100 cm</p>
            </div>
            <div className="p-1 sm:p-3 bg-primary/5 rounded border border-primary/20">
              <p className="font-semibold text-card-foreground text-xs">1 foot =</p>
              <p className="text-muted-foreground text-xs">12 inches</p>
            </div>
            <div className="p-1 sm:p-3 bg-primary/5 rounded border border-primary/20">
              <p className="font-semibold text-card-foreground text-xs">1 km =</p>
              <p className="text-muted-foreground text-xs">1000 m</p>
            </div>
            <div className="p-1 sm:p-3 bg-primary/5 rounded border border-primary/20">
              <p className="font-semibold text-card-foreground text-xs">1 mile =</p>
              <p className="text-muted-foreground text-xs">5280 ft</p>
            </div>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
