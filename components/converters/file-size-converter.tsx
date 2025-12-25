"use client"

import { useState, useEffect } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GButton } from "@/ui/gbutton"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GTooltip, GTooltipContent, GTooltipProvider, GTooltipTrigger } from "@/ui/gtooltip"

import {
  HardDrive,
  Copy,
  Check,
  Calculator,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Database,
  Code,
  Download,
  Upload,
  FileSearch,
  Timer,
  Wifi,
  Cloud,
  Laptop,
  Smartphone
} from "lucide-react"


export function FileSizeConverter() {
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("MB")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("converter")

  // Decimal units (SI Standard) - exact values in bytes
  const decimalUnits = {
    "Bit (b)": 1 / 8, // 1 bit = 1/8 byte
    "Byte (B)": 1,
    "Kilobyte (KB)": 1000, // 10³ bytes
    "Megabyte (MB)": 1000000, // 10⁶ bytes
    "Gigabyte (GB)": 1000000000, // 10⁹ bytes
    "Terabyte (TB)": 1000000000000, // 10¹² bytes
    "Petabyte (PB)": 1000000000000000, // 10¹⁵ bytes
    "Exabyte (EB)": 1000000000000000000, // 10¹⁸ bytes
    "Zettabyte (ZB)": 1000000000000000000000, // 10²¹ bytes
    "Yottabyte (YB)": 1000000000000000000000000, // 10²⁴ bytes
    "Ronnabyte (RB)": 1000000000000000000000000000, // 10²⁷ bytes
    "Quettabyte (QB)": 1000000000000000000000000000000, // 10³⁰ bytes
  }

  // Binary units (IEC Standard) - exact values in bytes
  const binaryUnits = {
    "Bit (b)": 1 / 8, // 1 bit = 1/8 byte
    "Byte (B)": 1,
    "Kibibyte (KiB)": 1024, // 2¹⁰ bytes
    "Mebibyte (MiB)": 1048576, // 2²⁰ bytes
    "Gibibyte (GiB)": 1073741824, // 2³⁰ bytes
    "Tebibyte (TiB)": 1099511627776, // 2⁴⁰ bytes
    "Pebibyte (PiB)": 1125899906842624, // 2⁵⁰ bytes
    "Exbibyte (EiB)": 1152921504606846976, // 2⁶⁰ bytes
    "Zebibyte (ZiB)": 1180591620717411303424, // 2⁷⁰ bytes
    "Yobibyte (YiB)": 1208925819614629174706176, // 2⁸⁰ bytes
    "Robibyte (RiB)": 1237940039285380274899124224, // 2⁹⁰ bytes
    "Qubibyte (QiB)": 1267650600228229401496703205376, // 2¹⁰⁰ bytes
  }

  const allUnits = { ...decimalUnits, ...binaryUnits }

  const convert = (toUnit: string, fromValue: string = value, fromUnitValue: string = fromUnit) => {
    if (!fromValue || isNaN(Number(fromValue))) return "0"
    const valueInBytes = Number(fromValue) * allUnits[fromUnitValue as keyof typeof allUnits]
    const result = valueInBytes / allUnits[toUnit as keyof typeof allUnits]
    return result.toFixed(6).replace(/\.?0+$/, "")
  }

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }


  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-6">
      <GTabs value={activeTab} onValueChange={setActiveTab} className="w-full">

        <GTabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          <GTabsTrigger value="converter" className="gap-2">
            <Calculator className="h-4 w-4" />
            Smart Converter
          </GTabsTrigger>
          <GTabsTrigger value="analyzer" className="gap-2">
            <FileSearch className="h-4 w-4" />
            File Analyzer
          </GTabsTrigger>
          <GTabsTrigger value="media" className="gap-2">
            <Video className="h-4 w-4" />
            Media Estimator
          </GTabsTrigger>
          <GTabsTrigger value="transfer" className="gap-2">
            <Timer className="h-4 w-4" />
            Transfer Time
          </GTabsTrigger>
        </GTabsList>


        <GTabsContent value="converter" className="space-y-6">
          <GCard className="border border-border shadow-sm">
            <GCardHeader>
              <GCardTitle className="text-lg flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-primary" />
                Bidirectional Converter
              </GCardTitle>
              <GCardDescription>Type in any field to instantly convert to all other units</GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(allUnits).filter(u =>
                  ["Byte (B)", "Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)",
                    "Kibibyte (KiB)", "Mebibyte (MiB)", "Gibibyte (GiB)", "Tebibyte (TiB)"].includes(u)
                ).map((unit) => (
                  <div key={unit} className="space-y-2">
                    <GLabel htmlFor={unit} className="text-xs text-muted-foreground flex justify-between">
                      {unit}
                      {unit.includes("iB") && <span className="text-[10px] bg-secondary px-1 rounded">Binary</span>}
                    </GLabel>
                    <div className="relative">
                      <GInput
                        id={unit}
                        type="number"
                        placeholder="0"
                        value={
                          activeTab === "converter" && fromUnit === unit
                            ? value
                            : convert(unit, value, fromUnit)
                        } // Use calculated value unless it is the active input
                        onChange={(e) => {
                          setValue(e.target.value)
                          setFromUnit(unit)
                        }}
                        className={`h-11 font-mono ${fromUnit === unit ? "border-primary ring-1 ring-primary" : ""}`}
                      />
                      <GButton
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-9 w-9 text-muted-foreground hover:text-foreground"
                        onClick={() => copyToClipboard(convert(unit, value, fromUnit), 0)}
                      >
                        <Copy className="h-4 w-4" />
                      </GButton>
                    </div>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          <GCard className="border border-border shadow-sm bg-muted/30">
            <GCardHeader>
              <GCardTitle className="text-base">Quick Reference</GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Decimal (SI) Units</h4>
                  <div className="space-y-1">
                    <p><span className="font-medium">1 bit =</span> 1/8 byte</p>
                    <p><span className="font-medium">1 KB =</span> 1,000 bytes</p>
                    <p><span className="font-medium">1 MB =</span> 1,000,000 bytes</p>
                    <p><span className="font-medium">1 GB =</span> 1,000,000,000 bytes</p>
                    <p><span className="font-medium">1 TB =</span> 1,000,000,000,000 bytes</p>
                    <p><span className="font-medium">1 PB =</span> 1,000,000,000,000,000 bytes</p>
                    <p><span className="font-medium">1 EB =</span> 1,000,000,000,000,000,000 bytes</p>
                    <p><span className="font-medium">1 ZB =</span> 1,000,000,000,000,000,000,000 bytes</p>
                    <p><span className="font-medium">1 YB =</span> 1,000,000,000,000,000,000,000,000 bytes</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Binary (IEC) Units</h4>
                  <div className="space-y-1">
                    <p><span className="font-medium">1 bit =</span> 1/8 byte</p>
                    <p><span className="font-medium">1 KiB =</span> 1,024 bytes</p>
                    <p><span className="font-medium">1 MiB =</span> 1,048,576 bytes</p>
                    <p><span className="font-medium">1 GiB =</span> 1,073,741,824 bytes</p>
                    <p><span className="font-medium">1 TiB =</span> 1,099,511,627,776 bytes</p>
                    <p><span className="font-medium">1 PiB =</span> 1,125,899,906,842,624 bytes</p>
                    <p><span className="font-medium">1 EiB =</span> 1,152,921,504,606,846,976 bytes</p>
                    <p><span className="font-medium">1 ZiB =</span> 1,180,591,620,717,411,303,424 bytes</p>
                    <p><span className="font-medium">1 YiB =</span> 1,208,925,819,614,629,174,706,176 bytes</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold text-foreground mb-2">💡 Quick Tips</h5>
                <ul className="text-xs text-foreground space-y-1">
                  <li>• Use KB/MB/GB for decimal (storage manufacturers, network throughput)</li>
                  <li>• Use KiB/MiB/GiB for binary (OS file sizes, memory)</li>
                  <li>• 1 byte = 8 bits</li>
                  <li>• When in doubt, use exact numeric values</li>
                </ul>
              </div>
            </GCardContent>
          </GCard>
        </GTabsContent>

        <GTabsContent value="analyzer" className="space-y-6">
          <GCard className="border border-border shadow-sm">
            <GCardHeader>
              <GCardTitle className="text-lg flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-primary" />
                File Analyzer
              </GCardTitle>
              <GCardDescription>Analyze any file to see its exact size in all units</GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6">
              <div
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer"
                onDragOver={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const file = e.dataTransfer.files?.[0]
                  if (file) {
                    setValue(file.size.toString())
                    setFromUnit("Byte (B)")
                    setActiveTab("converter")
                  }
                }}
                onClick={() => {
                  const input = document.createElement('input')
                  input.type = 'file'
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0]
                    if (file) {
                      setValue(file.size.toString())
                      setFromUnit("Byte (B)")
                      setActiveTab("converter")
                    }
                  }
                  input.click()
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Click to Upload or Drag & Drop</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll analyze the file size instantly. No data is sent to server.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Laptop className="h-4 w-4" />
                    Storage Cost Estimator
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4">Estimated monthly cost to store this amount of data:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>AWS S3 Standard</span>
                      <span className="font-mono">
                        ${((Number(value) || 0) * (allUnits[fromUnit as keyof typeof allUnits] || 1) / 1000000000 * 0.023).toFixed(6)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Google Drive</span>
                      <span className="font-mono">
                        ${((Number(value) || 0) * (allUnits[fromUnit as keyof typeof allUnits] || 1) / 1000000000 * 0.020).toFixed(6)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </GTabsContent>

        <GTabsContent value="transfer" className="space-y-6">
          <GCard className="border border-border shadow-sm">
            <GCardHeader>
              <GCardTitle className="text-lg flex items-center gap-2">
                <Timer className="h-5 w-5 text-primary" />
                Transfer Time Calculator
              </GCardTitle>
              <GCardDescription>Estimate how long it will take to transfer your file</GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="grid gap-6">
                {/* Re-use the main value input indirectly or show a new one? Let's use the main state for consistency */}
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                  Currently calculating transfer time for: <strong>{value} {fromUnit}</strong>
                  <br />
                  <span className="text-xs opacity-75">(Change the value in the Converter tab to update this)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "4G LTE", speed: 20, unit: "Mbps", icon: Smartphone },
                    { name: "5G / Wi-Fi 5", speed: 100, unit: "Mbps", icon: Wifi },
                    { name: "Gigabit Fiber", speed: 1000, unit: "Mbps", icon: Cloud },
                    { name: "USB 2.0", speed: 480, unit: "Mbps", icon: HardDrive },
                    { name: "USB 3.0", speed: 5000, unit: "Mbps", icon: HardDrive },
                    { name: "SATA III SSD", speed: 6000, unit: "Mbps", icon: HardDrive },
                  ].map((network) => {
                    const valueInBits = (Number(value) || 0) * (allUnits[fromUnit as keyof typeof allUnits] || 1) * 8;
                    const speedInBits = network.speed * 1000000;
                    const seconds = valueInBits / speedInBits;

                    let timeString = "";
                    if (seconds < 1) timeString = "< 1 second";
                    else if (seconds < 60) timeString = `${seconds.toFixed(1)} seconds`;
                    else if (seconds < 3600) timeString = `${(seconds / 60).toFixed(1)} minutes`;
                    else timeString = `${(seconds / 3600).toFixed(1)} hours`;

                    return (
                      <div key={network.name} className="p-4 border rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-full">
                          <network.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{network.name}</p>
                          <p className="text-xs text-muted-foreground">{network.speed} {network.unit}</p>
                          <p className="font-bold text-primary mt-1">{timeString}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </GCardContent>
          </GCard>
        </GTabsContent>

        <GTabsContent value="media" className="space-y-6">
          <GCard className="border border-border shadow-sm">
            <GCardHeader>
              <GCardTitle className="text-lg flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Media File Size Estimator
              </GCardTitle>
              <GCardDescription>Estimate how large a video or audio recording will be before you start.</GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video Calculator */}
                <div className="space-y-4 p-4 border rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2"><Video className="h-4 w-4" /> Video Estimator</h4>
                  <div className="space-y-2">
                    <GLabel>Quality / Resolution</GLabel>
                    <GSelect defaultValue="1080p" onValueChange={(v) => {
                      // Simple simulation logic - updates main value
                      const rates: Record<string, number> = { "720p": 15, "1080p": 35, "4k": 120 }
                      setValue((rates[v] * 60).toString()) // Default 1 min
                      setFromUnit("Megabyte (MB)")
                    }}>
                      <GSelectTrigger><GSelectValue placeholder="Select Quality" /></GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="720p">720p HD (Youtube Standard)</GSelectItem>
                        <GSelectItem value="1080p">1080p Full HD (High Quality)</GSelectItem>
                        <GSelectItem value="4k">4K UHD (Netflix/Cinema)</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <GLabel>Minutes</GLabel>
                      <GInput type="number" placeholder="10" onChange={(e) => {
                        const mins = Number(e.target.value) || 0
                        setValue((mins * 35).toString()) // Assume 1080p
                        setFromUnit("Megabyte (MB)")
                      }} />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Estimates based on typical H.264 compression bitrates.
                  </p>
                </div>

                {/* Audio Calculator */}
                <div className="space-y-4 p-4 border rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2"><Music className="h-4 w-4" /> Audio Estimator</h4>
                  <div className="space-y-2">
                    <GLabel>Quality</GLabel>
                    <GSelect defaultValue="high" onValueChange={(v) => {
                      const rates: Record<string, number> = { "low": 1, "med": 4, "high": 10 } // MB per min approx
                      setValue((rates[v] * 3).toString()) // Default 3 min song
                      setFromUnit("Megabyte (MB)")
                    }}>
                      <GSelectTrigger><GSelectValue placeholder="Select Quality" /></GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="low">128 kbps (Streaming)</GSelectItem>
                        <GSelectItem value="med">320 kbps (High Quality MP3)</GSelectItem>
                        <GSelectItem value="high">1411 kbps (CD Quality WAV)</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </GTabsContent>

      </GTabs>
    </div >
  )
}
