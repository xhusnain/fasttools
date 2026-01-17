"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GBadge } from "@/ui/gbadge"

import { Copy, Download, History, RefreshCw, Calculator, Ruler, Thermometer, DollarSign, Clock, Weight, Volume, Square, Gauge, Zap, Globe, Target, TrendingUp, BookOpen, Star, ArrowRight } from "lucide-react"
import { toast } from "sonner"

// Conversion categories and units
const conversionCategories = {
  length: {
    name: "Length",
    icon: Ruler,
    units: {
      meter: { name: "Meter (m)", factor: 1, symbol: "m" },
      kilometer: { name: "Kilometer (km)", factor: 1000, symbol: "km" },
      centimeter: { name: "Centimeter (cm)", factor: 0.01, symbol: "cm" },
      millimeter: { name: "Millimeter (mm)", factor: 0.001, symbol: "mm" },
      foot: { name: "Foot (ft)", factor: 0.3048, symbol: "ft" },
      inch: { name: "Inch (in)", factor: 0.0254, symbol: "in" },
      yard: { name: "Yard (yd)", factor: 0.9144, symbol: "yd" },
      mile: { name: "Mile (mi)", factor: 1609.344, symbol: "mi" },
      nautical_mile: { name: "Nautical Mile", factor: 1852, symbol: "nmi" },
      light_year: { name: "Light Year", factor: 9.461e15, symbol: "ly" }
    }
  },
  weight: {
    name: "Weight",
    icon: Weight,
    units: {
      kilogram: { name: "Kilogram (kg)", factor: 1, symbol: "kg" },
      gram: { name: "Gram (g)", factor: 0.001, symbol: "g" },
      pound: { name: "Pound (lb)", factor: 0.453592, symbol: "lb" },
      ounce: { name: "Ounce (oz)", factor: 0.0283495, symbol: "oz" },
      ton: { name: "Metric Ton (t)", factor: 1000, symbol: "t" },
      stone: { name: "Stone", factor: 6.35029, symbol: "st" },
      carat: { name: "Carat", factor: 0.0002, symbol: "ct" },
      grain: { name: "Grain", factor: 0.0000647989, symbol: "gr" }
    }
  },
  temperature: {
    name: "Temperature",
    icon: Thermometer,
    units: {
      celsius: { name: "Celsius (°C)", factor: 1, symbol: "°C", isTemperature: true },
      fahrenheit: { name: "Fahrenheit (°F)", factor: 1, symbol: "°F", isTemperature: true },
      kelvin: { name: "Kelvin (K)", factor: 1, symbol: "K", isTemperature: true },
      rankine: { name: "Rankine (°R)", factor: 1, symbol: "°R", isTemperature: true }
    }
  },
  currency: {
    name: "Currency",
    icon: DollarSign,
    units: {
      usd: { name: "US Dollar (USD)", factor: 1, symbol: "$" },
      eur: { name: "Euro (EUR)", factor: 0.85, symbol: "€" },
      gbp: { name: "British Pound (GBP)", factor: 0.79, symbol: "£" },
      jpy: { name: "Japanese Yen (JPY)", factor: 110, symbol: "¥" },
      inr: { name: "Indian Rupee (INR)", factor: 75, symbol: "₹" },
      cad: { name: "Canadian Dollar (CAD)", factor: 1.25, symbol: "C$" },
      aud: { name: "Australian Dollar (AUD)", factor: 1.35, symbol: "A$" },
      chf: { name: "Swiss Franc (CHF)", factor: 0.92, symbol: "CHF" },
      cny: { name: "Chinese Yuan (CNY)", factor: 6.45, symbol: "¥" },
      krw: { name: "South Korean Won (KRW)", factor: 1180, symbol: "₩" }
    }
  },
  time: {
    name: "Time",
    icon: Clock,
    units: {
      second: { name: "Second (s)", factor: 1, symbol: "s" },
      minute: { name: "Minute (min)", factor: 60, symbol: "min" },
      hour: { name: "Hour (h)", factor: 3600, symbol: "h" },
      day: { name: "Day (d)", factor: 86400, symbol: "d" },
      week: { name: "Week", factor: 604800, symbol: "wk" },
      month: { name: "Month", factor: 2629746, symbol: "mo" },
      year: { name: "Year (y)", factor: 31556952, symbol: "y" },
      decade: { name: "Decade", factor: 315569520, symbol: "dec" },
      century: { name: "Century", factor: 3155695200, symbol: "cent" }
    }
  },
  area: {
    name: "Area",
    icon: Square,
    units: {
      square_meter: { name: "Square Meter (m²)", factor: 1, symbol: "m²" },
      square_kilometer: { name: "Square Kilometer (km²)", factor: 1000000, symbol: "km²" },
      square_centimeter: { name: "Square Centimeter (cm²)", factor: 0.0001, symbol: "cm²" },
      square_foot: { name: "Square Foot (ft²)", factor: 0.092903, symbol: "ft²" },
      square_inch: { name: "Square Inch (in²)", factor: 0.00064516, symbol: "in²" },
      acre: { name: "Acre", factor: 4046.86, symbol: "ac" },
      hectare: { name: "Hectare (ha)", factor: 10000, symbol: "ha" },
      square_mile: { name: "Square Mile (mi²)", factor: 2589988, symbol: "mi²" }
    }
  },
  volume: {
    name: "Volume",
    icon: Volume,
    units: {
      liter: { name: "Liter (L)", factor: 1, symbol: "L" },
      milliliter: { name: "Milliliter (mL)", factor: 0.001, symbol: "mL" },
      gallon: { name: "US Gallon (gal)", factor: 3.78541, symbol: "gal" },
      quart: { name: "US Quart (qt)", factor: 0.946353, symbol: "qt" },
      pint: { name: "US Pint (pt)", factor: 0.473176, symbol: "pt" },
      cup: { name: "US Cup", factor: 0.236588, symbol: "cup" },
      fluid_ounce: { name: "US Fluid Ounce (fl oz)", factor: 0.0295735, symbol: "fl oz" },
      cubic_meter: { name: "Cubic Meter (m³)", factor: 1000, symbol: "m³" },
      cubic_foot: { name: "Cubic Foot (ft³)", factor: 28.3168, symbol: "ft³" },
      cubic_inch: { name: "Cubic Inch (in³)", factor: 0.0163871, symbol: "in³" }
    }
  },
  speed: {
    name: "Speed",
    icon: Gauge,
    units: {
      meter_per_second: { name: "Meter per Second (m/s)", factor: 1, symbol: "m/s" },
      kilometer_per_hour: { name: "Kilometer per Hour (km/h)", factor: 0.277778, symbol: "km/h" },
      mile_per_hour: { name: "Mile per Hour (mph)", factor: 0.44704, symbol: "mph" },
      foot_per_second: { name: "Foot per Second (ft/s)", factor: 0.3048, symbol: "ft/s" },
      knot: { name: "Knot (kn)", factor: 0.514444, symbol: "kn" },
      mach: { name: "Mach", factor: 343, symbol: "Ma" }
    }
  },
  power: {
    name: "Power",
    icon: Zap,
    units: {
      watt: { name: "Watt (W)", factor: 1, symbol: "W" },
      kilowatt: { name: "Kilowatt (kW)", factor: 1000, symbol: "kW" },
      megawatt: { name: "Megawatt (MW)", factor: 1000000, symbol: "MW" },
      horsepower: { name: "Horsepower (hp)", factor: 745.7, symbol: "hp" },
      btu_per_hour: { name: "BTU per Hour", factor: 0.293071, symbol: "BTU/h" },
      foot_pound_per_second: { name: "Foot-pound per Second", factor: 1.35582, symbol: "ft·lb/s" }
    }
  },
  energy: {
    name: "Energy",
    icon: Globe,
    units: {
      joule: { name: "Joule (J)", factor: 1, symbol: "J" },
      kilojoule: { name: "Kilojoule (kJ)", factor: 1000, symbol: "kJ" },
      calorie: { name: "Calorie (cal)", factor: 4.184, symbol: "cal" },
      kilocalorie: { name: "Kilocalorie (kcal)", factor: 4184, symbol: "kcal" },
      btu: { name: "British Thermal Unit (BTU)", factor: 1055.06, symbol: "BTU" },
      kilowatt_hour: { name: "Kilowatt Hour (kWh)", factor: 3600000, symbol: "kWh" },
      electron_volt: { name: "Electron Volt (eV)", factor: 1.602e-19, symbol: "eV" }
    }
  },
  pressure: {
    name: "Pressure",
    icon: Target,
    units: {
      pascal: { name: "Pascal (Pa)", factor: 1, symbol: "Pa" },
      kilopascal: { name: "Kilopascal (kPa)", factor: 1000, symbol: "kPa" },
      bar: { name: "Bar", factor: 100000, symbol: "bar" },
      atmosphere: { name: "Atmosphere (atm)", factor: 101325, symbol: "atm" },
      psi: { name: "Pound per Square Inch (psi)", factor: 6894.76, symbol: "psi" },
      torr: { name: "Torr", factor: 133.322, symbol: "Torr" },
      millimeter_mercury: { name: "Millimeter of Mercury (mmHg)", factor: 133.322, symbol: "mmHg" }
    }
  },
  data: {
    name: "Data Storage",
    icon: Calculator,
    units: {
      bit: { name: "Bit (b)", factor: 1, symbol: "b" },
      byte: { name: "Byte (B)", factor: 8, symbol: "B" },
      kilobyte: { name: "Kilobyte (KB)", factor: 8192, symbol: "KB" },
      megabyte: { name: "Megabyte (MB)", factor: 8388608, symbol: "MB" },
      gigabyte: { name: "Gigabyte (GB)", factor: 8589934592, symbol: "GB" },
      terabyte: { name: "Terabyte (TB)", factor: 8796093022208, symbol: "TB" },
      petabyte: { name: "Petabyte (PB)", factor: 9007199254740992, symbol: "PB" }
    }
  }
}

// Temperature conversion functions
const convertTemperature = (value: number, from: string, to: string): number => {
  const conversions: { [key: string]: { [key: string]: (val: number) => number } } = {
    celsius: {
      fahrenheit: (val) => (val * 9 / 5) + 32,
      kelvin: (val) => val + 273.15,
      rankine: (val) => (val * 9 / 5) + 491.67
    },
    fahrenheit: {
      celsius: (val) => (val - 32) * 5 / 9,
      kelvin: (val) => ((val - 32) * 5 / 9) + 273.15,
      rankine: (val) => val + 459.67
    },
    kelvin: {
      celsius: (val) => val - 273.15,
      fahrenheit: (val) => ((val - 273.15) * 9 / 5) + 32,
      rankine: (val) => val * 9 / 5
    },
    rankine: {
      celsius: (val) => (val - 491.67) * 5 / 9,
      fahrenheit: (val) => val - 459.67,
      kelvin: (val) => val * 5 / 9
    }
  }

  if (from === to) return value
  return conversions[from]?.[to]?.(value) ?? value
}

import { ConversionHistory } from "@/types/converter-types/conversion-calculator.types"

// Default units for each category (From, To)
const defaultUnits: { [key: string]: { from: string; to: string } } = {
  length: { from: "meter", to: "foot" },
  weight: { from: "kilogram", to: "pound" },
  temperature: { from: "celsius", to: "fahrenheit" },
  currency: { from: "usd", to: "eur" },
  time: { from: "hour", to: "minute" },
  area: { from: "square_meter", to: "square_foot" },
  volume: { from: "liter", to: "gallon" },
  speed: { from: "kilometer_per_hour", to: "mile_per_hour" },
  power: { from: "kilowatt", to: "horsepower" },
  energy: { from: "kilojoule", to: "calorie" },
  pressure: { from: "pascal", to: "psi" },
  data: { from: "megabyte", to: "kilobyte" }
}

export function ConversionCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof conversionCategories>("length")
  const [fromUnit, setFromUnit] = useState("meter")
  const [toUnit, setToUnit] = useState("foot")
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [history, setHistory] = useState<ConversionHistory[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const currentCategory = conversionCategories[selectedCategory]
  const currentUnits = currentCategory.units

  // Update default units when category changes
  useEffect(() => {
    const defaults = defaultUnits[selectedCategory]
    const categoryUnits = conversionCategories[selectedCategory].units
    const unitKeys = Object.keys(categoryUnits)

    if (defaults && unitKeys.includes(defaults.from) && unitKeys.includes(defaults.to)) {
      setFromUnit(defaults.from)
      setToUnit(defaults.to)
    } else {
      // Fallback to first two units if defaults don't exist
      const firstTwoUnits = unitKeys.slice(0, 2)
      if (firstTwoUnits.length >= 2) {
        setFromUnit(firstTwoUnits[0])
        setToUnit(firstTwoUnits[1])
      } else if (firstTwoUnits.length === 1) {
        setFromUnit(firstTwoUnits[0])
        setToUnit(firstTwoUnits[0])
      }
    }
    // Clear input and result when category changes
    setInputValue("")
    setResult(null)
  }, [selectedCategory])

  // Calculate conversion
  const calculateConversion = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setResult(null)
      return
    }

    const value = Number(inputValue)
    const fromUnitData = currentUnits[fromUnit as keyof typeof currentUnits]
    const toUnitData = currentUnits[toUnit as keyof typeof currentUnits]

    if (!fromUnitData || !toUnitData) {
      setResult(null)
      return
    }

    let convertedValue: number

    // Handle temperature conversion
    if ((fromUnitData as any).isTemperature && (toUnitData as any).isTemperature) {
      convertedValue = convertTemperature(value, fromUnit, toUnit)
    } else {
      // Standard conversion
      const baseValue = value * (fromUnitData as any).factor
      convertedValue = baseValue / (toUnitData as any).factor
    }

    setResult(convertedValue)

    // Add to history
    const historyItem: ConversionHistory = {
      id: Date.now().toString(),
      category: currentCategory.name,
      fromUnit: (fromUnitData as any).name,
      toUnit: (toUnitData as any).name,
      value,
      result: convertedValue,
      timestamp: new Date()
    }

    setHistory(prev => [historyItem, ...prev.slice(0, 49)]) // Keep last 50 items
  }

  // Auto-calculate when inputs change
  useEffect(() => {
    calculateConversion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, fromUnit, toUnit, inputValue])

  // Copy result to clipboard
  const copyResult = () => {
    if (result !== null) {
      void navigator.clipboard.writeText(result.toString())
      toast.success("Result copied to clipboard!")
    }
  }

  // Clear all inputs
  const clearAll = () => {
    setInputValue("")
    setResult(null)
  }

  // Swap units
  const swapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

  // Load from history
  const loadFromHistory = (item: ConversionHistory) => {
    setInputValue(item.value.toString())
    setResult(item.result)
  }

  // Get unit options for current category
  const getUnitOptions = () => {
    return Object.entries(currentUnits).map(([key, unit]) => (
      <GSelectItem key={key} value={key}>
        {unit.name}
      </GSelectItem>
    ))
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <GCard className="bg-card border border-border shadow-lg rounded-xl">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-xl font-bold">
            <div className="p-3 bg-gradient-to-r from-tertiary-accent to-primary rounded-xl shadow-md">
              <Calculator className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-foreground">
              Universal Conversion Calculator
            </span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Category Selection */}
          <div className="space-y-2">
            <GLabel className="text-sm font-medium">Conversion Category</GLabel>
            <GTabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as keyof typeof conversionCategories)}>
              <GTabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-1 bg-gradient-to-r from-tertiary-accent/10 to-primary/10 dark:from-tertiary-accent/20 dark:to-primary/20 rounded-lg border border-tertiary-accent/30">
                {Object.entries(conversionCategories).map(([key, category]) => (
                  <GTabsTrigger
                    key={key}
                    value={key}
                    className="flex flex-col items-center gap-1 text-xs px-2 py-2 sm:flex-row sm:gap-2 sm:px-3 sm:py-2 min-h-[60px] sm:min-h-[40px] data-[state=active]:!bg-tertiary-accent data-[state=active]:!text-primary-foreground data-[state=active]:!border-tertiary-accent hover:bg-tertiary-accent/20 dark:hover:bg-tertiary-accent/20"
                  >
                    <category.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs font-medium text-center sm:text-left">{category.name}</span>
                  </GTabsTrigger>
                ))}
              </GTabsList>
            </GTabs>
          </div>

          {/* Conversion Inputs */}
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="from-unit" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                From
              </GLabel>
              <GSelect value={fromUnit} onValueChange={setFromUnit}>
                <GSelectTrigger className="w-full h-12 border-2 border-tertiary-accent/50 rounded-lg [&>svg]:text-foreground [&>svg]:hover:text-foreground data-[state=open]:border-tertiary-accent data-[state=open]:ring-tertiary-accent focus:border-tertiary-accent">
                  <GSelectValue placeholder="GSelect unit" />
                </GSelectTrigger>
                <GSelectContent className="max-h-60 overflow-y-auto [&>div]:data-[highlighted]:bg-tertiary-accent [&>div]:data-[highlighted]:text-primary-foreground">
                  {getUnitOptions()}
                </GSelectContent>
              </GSelect>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="to-unit" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary-accent rounded-full"></div>
                To
              </GLabel>
              <GSelect value={toUnit} onValueChange={setToUnit}>
                <GSelectTrigger className="w-full h-12 border-2 border-tertiary-accent/50 rounded-lg [&>svg]:text-foreground [&>svg]:hover:text-foreground data-[state=open]:border-tertiary-accent data-[state=open]:ring-tertiary-accent focus:border-tertiary-accent">
                  <GSelectValue placeholder="GSelect unit" />
                </GSelectTrigger>
                <GSelectContent className="max-h-60 overflow-y-auto [&>div]:data-[highlighted]:bg-tertiary-accent [&>div]:data-[highlighted]:text-primary-foreground">
                  {getUnitOptions()}
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {/* Value GInput */}
          <div className="space-y-2">
            <GLabel htmlFor="input-value" className="text-sm font-medium text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-tertiary-accent rounded-full"></div>
              Value to Convert
            </GLabel>
            <div className="flex flex-col sm:flex-row gap-3">
              <GInput
                id="input-value"
                type="number"
                placeholder="Enter value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 w-full h-12 text-base rounded-lg"
              />
              <GButton
                variant="outline"
                onClick={swapUnits}
                title="Swap units"
                className="w-full sm:w-auto h-12 px-4"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                <span className="sm:hidden">Swap Units</span>
              </GButton>
            </div>
          </div>

          {/* Result Display */}
          {result !== null && (
            <div className="p-6 bg-gradient-to-r from-secondary-accent/10 to-secondary-accent/20 dark:from-secondary-accent/20 dark:to-secondary-accent/30 rounded-xl border-2 border-secondary-accent/30 shadow-md">
              <div className="space-y-3">
                <div className="flex-1">
                  <div className="text-sm text-heading-accent mb-1">Converted Result</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-heading-accent break-all">
                    {result.toFixed(6).replace(/\.?0+$/, '')} {(currentUnits[toUnit as keyof typeof currentUnits] as any)?.symbol}
                  </div>
                </div>
                <div className="flex gap-2">
                  <GButton
                    variant="outline"
                    onClick={copyResult}
                    className="text-heading-accent hover:text-heading-accent w-full h-10"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Result
                  </GButton>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <GButton onClick={clearAll} variant="outline" className="flex-1 w-full h-12 rounded-lg font-medium">
              Clear All
            </GButton>
            <GButton onClick={() => setShowHistory(!showHistory)} variant="outline" className="flex-1 w-full h-12 rounded-lg font-medium">
              <History className="h-4 w-4 mr-2" />
              {showHistory ? 'Hide' : 'Show'} History
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Conversion History */}
      {showHistory && history.length > 0 && (
        <GCard className="bg-card border border-border shadow-lg rounded-xl">
          <GCardHeader className="pb-4">
            <GCardTitle className="flex items-center gap-3 text-xl font-bold">
              <div className="p-2 bg-gradient-to-r from-tertiary-accent to-primary rounded-lg">
                <History className="h-5 w-5 text-primary-foreground" />
              </div>
              Conversion History
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-card rounded-lg border border-border cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => loadFromHistory(item)}
                >
                  <div className="space-y-2">
                    <div className="flex-1">
                      <div className="font-medium text-sm break-all">
                        {item.value} → {item.result.toFixed(4)}
                      </div>
                      <div className="text-xs text-muted-foreground break-all">
                        {item.category}: {item.fromUnit} to {item.toUnit}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Quick Conversions */}
      <GCard className="bg-card border border-border shadow-lg rounded-xl">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
            <div className="p-2 bg-primary rounded-lg">
              <Star className="h-5 w-5 text-primary-foreground" />
            </div>
            Popular Conversions
          </GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: "1 meter", to: "3.281 feet", category: "Length" },
              { from: "1 kilogram", to: "2.205 pounds", category: "Weight" },
              { from: "0°C", to: "32°F", category: "Temperature" },
              { from: "1 liter", to: "0.264 gallons", category: "Volume" },
              { from: "1 kilometer", to: "0.621 miles", category: "Length" },
              { from: "1 square meter", to: "10.764 square feet", category: "Area" }
            ].map((conversion, index) => (
              <div key={index} className="p-4 bg-card rounded-xl border-2 border-border min-h-[80px] shadow-sm hover:shadow-md transition-shadow hover:border-primary/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="text-sm font-medium text-heading-accent">
                    {conversion.category}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground break-all leading-relaxed">
                  {conversion.from} = {conversion.to}
                </div>
              </div>
            ))}
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
