"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-primary" />
            Temperature Converter
          </CardTitle>
          <CardDescription>Convert between Celsius and Fahrenheit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="celsius">Celsius (°C)</Label>
              <Input
                id="celsius"
                type="number"
                placeholder="Enter temperature"
                value={celsius}
                onChange={(e) => handleCelsiusChange(e.target.value)}
                className="h-11 text-sm"
              />
            </div>

            <div className="flex items-center justify-center md:pt-8">
              <Button onClick={swapValues} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 md:col-start-2">
              <Label htmlFor="fahrenheit">Fahrenheit (°F)</Label>
              <Input
                id="fahrenheit"
                type="number"
                placeholder="Enter temperature"
                value={fahrenheit}
                onChange={(e) => handleFahrenheitChange(e.target.value)}
                className="h-11 text-sm"
              />
            </div>
          </div>

          {celsius && fahrenheit && (
            <div className="p-4 bg-accent rounded-md border border-primary/10">
              <p className="text-sm text-center">
                <span className="font-bold text-foreground">{celsius}°C</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="font-bold text-primary">{fahrenheit}°F</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div>
              <p className="font-medium text-foreground">Water Freezes</p>
              <p className="text-muted-foreground">0°C = 32°F</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Room Temp</p>
              <p className="text-muted-foreground">20°C = 68°F</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Body Temp</p>
              <p className="text-muted-foreground">37°C = 98.6°F</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Water Boils</p>
              <p className="text-muted-foreground">100°C = 212°F</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
