"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HardDrive } from "lucide-react"

export function FileSizeConverter() {
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("MB")

  const units = {
    Byte: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  }

  const convert = (toUnit: string) => {
    if (!value || isNaN(Number(value))) return "0"
    const valueInBytes = Number(value) * units[fromUnit as keyof typeof units]
    const result = valueInBytes / units[toUnit as keyof typeof units]
    return result.toFixed(6).replace(/\.?0+$/, "")
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-primary" />
            File Size Converter
          </CardTitle>
          <CardDescription>Convert between different file size units</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="value">Value</Label>
              <Input
                id="value"
                type="number"
                placeholder="Enter file size"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-11 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Byte">Byte (B)</SelectItem>
                  <SelectItem value="KB">Kilobyte (KB)</SelectItem>
                  <SelectItem value="MB">Megabyte (MB)</SelectItem>
                  <SelectItem value="GB">Gigabyte (GB)</SelectItem>
                  <SelectItem value="TB">Terabyte (TB)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Converted Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.keys(units).map((unit) => (
              <div key={unit} className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">{unit}</span>
                <span className="text-sm text-muted-foreground">{convert(unit)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-medium text-foreground">1 KB =</p>
              <p className="text-muted-foreground">1,024 Bytes</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 MB =</p>
              <p className="text-muted-foreground">1,024 KB</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 GB =</p>
              <p className="text-muted-foreground">1,024 MB</p>
            </div>
            <div>
              <p className="font-medium text-foreground">1 TB =</p>
              <p className="text-muted-foreground">1,024 GB</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
