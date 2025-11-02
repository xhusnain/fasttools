"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
  Upload
} from "lucide-react"


export function FileSizeConverter() {
  const [value, setValue] = useState("")
  const [fromUnit, setFromUnit] = useState("MB")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("converter")

  // Decimal units (SI Standard) - exact values in bytes
  const decimalUnits = {
    "Bit (b)": 1/8, // 1 bit = 1/8 byte
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
    "Bit (b)": 1/8, // 1 bit = 1/8 byte
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
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2">
          <TabsTrigger value="converter" className="flex items-center justify-center gap-2 text-xs sm:text-sm py-2">
            <Calculator className="h-4 w-4" />
            Converter
          </TabsTrigger>
          <TabsTrigger value="examples" className="flex items-center justify-center gap-2 text-xs sm:text-sm py-2">
            <FileText className="h-4 w-4" />
            Examples
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center justify-center gap-2 text-xs sm:text-sm py-2">
            <Database className="h-4 w-4" />
            Education
          </TabsTrigger>
          <TabsTrigger value="faq" className="flex items-center justify-center gap-2 text-xs sm:text-sm py-2">
            <Code className="h-4 w-4" />
            FAQ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="converter" className="space-y-6">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-primary" />
                File Size Converter
              </CardTitle>
              <CardDescription>Convert between decimal (SI) and binary (IEC) file size units</CardDescription>
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
                    className="h-11 text-sm w-full border-2 border-primary focus-visible:ring-0 focus:border-primary placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">From Unit</Label>
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger className="h-11 text-sm w-full border-2 border-primary focus:border-primary">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        Decimal Units (SI)
                      </div>
                      {Object.keys(decimalUnits).map((unit) => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mt-2">
                        Binary Units (IEC)
                      </div>
                      {Object.keys(binaryUnits).map((unit) => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">
                Converted Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                {Object.keys(allUnits).map((unit, index) => (
                  <div key={unit} className="flex flex-col p-3 bg-muted rounded-md group hover:bg-muted/80 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground truncate">{unit}</span>
                      {unit.includes("KiB") || unit.includes("MiB") || unit.includes("GiB") || unit.includes("TiB") || unit.includes("PiB") || unit.includes("EiB") || unit.includes("ZiB") || unit.includes("YiB") || unit.includes("RiB") || unit.includes("QiB") ? (
                        <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">Binary</Badge>
                      ) : unit !== "Byte (B)" && unit !== "Bit (b)" ? (
                        <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">Decimal</Badge>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-mono truncate">{convert(unit)}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(convert(unit), index)}
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-3 w-3 text-heading-accent" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Real-World File Size Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Image className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">Web Image (JPEG)</p>
                      <p className="text-xs text-muted-foreground">50-200 KB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <FileText className="h-4 w-4 text-heading-accent" />
                    <div>
                      <p className="font-medium text-sm">PDF Document</p>
                      <p className="text-xs text-muted-foreground">1-5 MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Music className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">MP3 Song</p>
                      <p className="text-xs text-muted-foreground">3-5 MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Video className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">HD Video (1 min)</p>
                      <p className="text-xs text-muted-foreground">50-100 MB</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Code className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">Software App</p>
                      <p className="text-xs text-muted-foreground">10-100 MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Database className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">Database</p>
                      <p className="text-xs text-muted-foreground">1-100 GB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Archive className="h-4 w-4 text-foreground" />
                    <div>
                      <p className="font-medium text-sm">ZIP Archive</p>
                      <p className="text-xs text-muted-foreground">Varies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <HardDrive className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium text-sm">System Backup</p>
                      <p className="text-xs text-muted-foreground">10-500 GB</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Platform Upload Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Email Attachments</span>
                    <span className="text-muted-foreground">10-25 MB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Social Media</span>
                    <span className="text-muted-foreground">5-100 MB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Cloud Storage</span>
                    <span className="text-muted-foreground">5-15 GB</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Web Hosting</span>
                    <span className="text-muted-foreground">2-100 MB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Code Repositories</span>
                    <span className="text-muted-foreground">25-100 MB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-medium">Video Platforms</span>
                    <span className="text-muted-foreground">1-128 GB</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">A-Z Unit Mapping</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">B</span>
                    <span className="text-muted-foreground">b, B</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">E</span>
                    <span className="text-muted-foreground">EB, EiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">G</span>
                    <span className="text-muted-foreground">GB, GiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">K</span>
                    <span className="text-muted-foreground">KB, KiB</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">M</span>
                    <span className="text-muted-foreground">MB, MiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">P</span>
                    <span className="text-muted-foreground">PB, PiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">T</span>
                    <span className="text-muted-foreground">TB, TiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">Y</span>
                    <span className="text-muted-foreground">YB, YiB</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">Z</span>
                    <span className="text-muted-foreground">ZB, ZiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">R</span>
                    <span className="text-muted-foreground">RB, RiB</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-muted rounded">
                    <span className="font-medium">Q</span>
                    <span className="text-muted-foreground">QB, QiB</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="p-2 bg-muted rounded border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-foreground">
                      <strong>All abbreviations:</strong><br/>
                      b, B, KB, KiB, MB, MiB, GB, GiB, TB, TiB, PB, PiB, EB, EiB, ZB, ZiB, YB, YiB, RB, RiB, QB, QiB
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data Storage Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Mathematical Formulas</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-foreground mb-2">Decimal (SI) Formula</h4>
                      <p className="text-sm text-foreground">
                        <strong>Size in bytes = Value × 10^n</strong><br/>
                        Where n = 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-heading-accent mb-2">Binary (IEC) Formula</h4>
                      <p className="text-sm text-heading-accent">
                        <strong>Size in bytes = Value × 2^n</strong><br/>
                        Where n = 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Conversion Examples</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-2">1 GB to MB</h4>
                      <p className="text-sm text-foreground">
                        <strong>Decimal:</strong> 1 GB = 1,000 MB<br/>
                        <strong>Binary:</strong> 1 GiB = 1,024 MiB
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-foreground mb-2">Bit to Byte</h4>
                      <p className="text-sm text-foreground">
                        <strong>1 Byte = 8 bits</strong><br/>
                        <strong>1 bit = 0.125 bytes</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Key Concepts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Decimal System (SI)</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Based on powers of 10</li>
                      <li>• Used by storage manufacturers</li>
                      <li>• Network throughput measurements</li>
                      <li>• Marketing specifications</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Binary System (IEC)</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Based on powers of 2</li>
                      <li>• Used by operating systems</li>
                      <li>• Memory calculations</li>
                      <li>• File system measurements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Real-World Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-foreground mb-2">Storage Devices</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Hard drives: TB range</li>
                      <li>• SSDs: GB to TB</li>
                      <li>• USB drives: MB to GB</li>
                      <li>• Memory cards: GB range</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-heading-accent mb-2">Network Speeds</h4>
                    <ul className="text-sm text-heading-accent space-y-1">
                      <li>• Internet: Mbps, Gbps</li>
                      <li>• Ethernet: 1-100 Gbps</li>
                      <li>• WiFi: 54 Mbps to 9.6 Gbps</li>
                      <li>• 5G: Up to 10 Gbps</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Data Centers</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Server storage: TB to PB</li>
                      <li>• Backup systems: PB range</li>
                      <li>• Cloud storage: EB scale</li>
                      <li>• Big data: ZB scale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q1: Why is there a difference between decimal and binary units?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Decimal units use base-10 (powers of 10) while binary units use base-2 (powers of 2). 
                    This creates a difference because 1,000 ≠ 1,024. For example, 1 GB = 1,000 MB (decimal) but 1 GiB = 1,024 MiB (binary).
                    This difference becomes significant with larger units and affects storage capacity calculations.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q2: Which system should I use for file sizes?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Use binary units (KiB, MiB, GiB) for file sizes as operating systems use binary calculations. 
                    Use decimal units (KB, MB, GB) for network speeds and storage device marketing specifications.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q3: How do I convert between decimal and binary units?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Use the conversion factor: 1 GiB = 1.073741824 GB. 
                    Multiply decimal by 1.024 to get binary, or divide binary by 1.024 to get decimal.
                    For example: 100 GB × 1.024 = 102.4 GiB.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q4: What's the difference between bits and bytes?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> A bit is the smallest unit of data (0 or 1). A byte consists of 8 bits. 
                    Network speeds are measured in bits per second (bps), while storage is measured in bytes. 
                    To convert: 1 byte = 8 bits, so 1 Mbps = 0.125 MB/s.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q5: Why do I see less storage than advertised?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Storage manufacturers use decimal units (GB) while operating systems use binary units (GiB). 
                    A 1 TB drive shows as ~931 GB in Windows because 1 TB = 1,000,000,000,000 bytes = 931.32 GiB.
                    This is normal and not a defect.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q6: How much data can a DVD hold?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> A standard single-layer DVD holds 4.7 GB (decimal) or 4.38 GiB (binary). 
                    Dual-layer DVDs hold 8.5 GB (decimal) or 7.92 GiB (binary). 
                    The difference between decimal and binary affects actual usable space.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q7: What are the largest data units used today?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Currently, petabytes (PB) and exabytes (EB) are used for large-scale data centers. 
                    Zettabytes (ZB) are used for global data measurements. 
                    Yottabytes (YB) are theoretical units for future massive data storage.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q8: How do I calculate network transfer time?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Time = File Size ÷ Network Speed. Convert units first: 
                    If file is 1 GB and speed is 100 Mbps: 1 GB = 8,000 Mb, so 8,000 ÷ 100 = 80 seconds.
                    Remember: 1 byte = 8 bits for speed calculations.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q9: What's the difference between RAM and storage?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> RAM (Random Access Memory) is temporary storage measured in GB/GiB, 
                    while storage (hard drives, SSDs) is permanent storage measured in TB/TiB. 
                    RAM is faster but volatile, storage is slower but persistent.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Q10: How do I choose the right storage size?</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>A:</strong> Consider your needs: Documents (MB), Photos (GB), Videos (GB-TB), 
                    Games (GB), Operating System (GB). Add 20-30% buffer for future needs. 
                    Use binary units (GiB, TiB) for accurate calculations as that's what your OS uses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
      
    </div>
  )
}
