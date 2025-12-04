"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"

import { Thermometer, ArrowLeftRight } from "lucide-react"

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")

  const convertToFahrenheit = (c: string) => {
    if (!c || isNaN(Number(c))) return ""
    const f = (Number(c) * 9) / 5 + 32
    return f.toFixed(2)
  }

  const convertToCelsius = (f: string) => {
    if (!f || isNaN(Number(f))) return ""
    const c = ((Number(f) - 32) * 5) / 9
    return c.toFixed(2)
  }

  const handleCelsiusChange = (value: string) => {
    setCelsius(value)
    setFahrenheit(convertToFahrenheit(value))
  }

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value)
    setCelsius(convertToCelsius(value))
  }

  const swapValues = () => {
    const temp = celsius
    setCelsius(fahrenheit)
    setFahrenheit(temp)
  }

  return (
    <div className="space-y-4">
      {/* Main Converter */}
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Thermometer className="h-4 w-4 text-foreground" />
          <h3 className="text-lg font-semibold text-card-foreground">Temperature Converter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* Celsius Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Celsius (°C)</label>
            <input
              type="number"
              placeholder="Enter temperature"
              value={celsius}
              onChange={(e) => handleCelsiusChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-primary rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary"
            />
          </div>

          {/* Swap GButton */}
          <div className="flex justify-center">
            <GButton
              onClick={swapValues}
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </GButton>
          </div>

          {/* Fahrenheit Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-card-foreground">Fahrenheit (°F)</label>
            <input
              type="number"
              placeholder="Enter temperature"
              value={fahrenheit}
              onChange={(e) => handleFahrenheitChange(e.target.value)}
              className="w-full px-3 py-2 border-2 border-primary rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Result Display */}
        {celsius && fahrenheit && (
          <div className="mt-4 p-3 bg-muted rounded-md border border-primary/20">
            <p className="text-sm text-center">
              <span className="font-bold text-foreground">{celsius}°C</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="font-bold text-foreground">{fahrenheit}°F</span>
            </p>
          </div>
        )}
      </div>

      {/* Quick Reference */}
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <h4 className="text-sm font-semibold text-card-foreground mb-3">Quick Reference</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="text-center">
            <p className="font-medium text-card-foreground">Water Freezes</p>
            <p className="text-muted-foreground">0°C = 32°F</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-card-foreground">Room Temp</p>
            <p className="text-muted-foreground">20°C = 68°F</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-card-foreground">Body Temp</p>
            <p className="text-muted-foreground">37°C = 98.6°F</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-card-foreground">Water Boils</p>
            <p className="text-muted-foreground">100°C = 212°F</p>
          </div>
        </div>
      </div>
    </div>
  )
}
