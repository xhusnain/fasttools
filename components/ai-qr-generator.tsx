"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Download, QrCode, Upload, Image as ImageIcon, Sparkles, Wifi, Mail, Phone, MessageSquare, User, MapPin, FileText, Zap, Globe, ListOrdered, Archive } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import QRCode from "qrcode"
import JSZip from "jszip"

type QRType = "url" | "wifi" | "vcard" | "email" | "sms" | "whatsapp" | "phone" | "location" | "text" | "bulk"
type ErrorCorrectionLevel = "L" | "M" | "Q" | "H"
type DownloadFormat = "png" | "svg" | "jpg"

interface QROptions {
  width: number
  margin: number
  errorCorrectionLevel: ErrorCorrectionLevel
  color: {
    dark: string
    light: string
  }
  type?: string
  rendererOpts?: {
    quality?: number
  }
}

export function AiQrGenerator() {
  const [qrType, setQrType] = useState<QRType>("url")
  const [qrImage, setQrImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const csvInputRef = useRef<HTMLInputElement>(null)
  
  // Bulk generation states
  const [bulkText, setBulkText] = useState("")
  const [bulkQRCodes, setBulkQRCodes] = useState<Array<{text: string, image: string}>>([])
  const [bulkLoading, setBulkLoading] = useState(false)

  // Basic inputs
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  
  // WiFi QR
  const [wifiSSID, setWifiSSID] = useState("")
  const [wifiPassword, setWifiPassword] = useState("")
  const [wifiEncryption, setWifiEncryption] = useState<"WPA" | "WEP" | "nopass">("WPA")
  const [wifiHidden, setWifiHidden] = useState(false)

  // vCard QR (simplified for compact view)
  const [vcardName, setVcardName] = useState("")
  const [vcardPhone, setVcardPhone] = useState("")
  const [vcardEmail, setVcardEmail] = useState("")
  const [vcardCompany, setVcardCompany] = useState("")

  // Email QR
  const [emailTo, setEmailTo] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")

  // SMS/WhatsApp QR
  const [smsPhone, setSmsPhone] = useState("")
  const [smsMessage, setSmsMessage] = useState("")

  // Phone QR
  const [phoneNumber, setPhoneNumber] = useState("")

  // Location QR
  const [locationLat, setLocationLat] = useState("")
  const [locationLng, setLocationLng] = useState("")

  // Styling options (simplified)
  const [foregroundColor, setForegroundColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [transparentBg, setTransparentBg] = useState(false)
  const [size, setSize] = useState<number[]>([400])
  const [margin, setMargin] = useState<number[]>([2])
  const [errorCorrection, setErrorCorrection] = useState<ErrorCorrectionLevel>("M")

  // Logo/Image
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const [logoSize, setLogoSize] = useState<number[]>([20])

  // Download format
  const [downloadFormat, setDownloadFormat] = useState<DownloadFormat>("png")

  // Validate hex color format
  const isValidHexColor = (hexColor: string): boolean => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hexColor)
  }

  const handleColorChange = (value: string, setter: (val: string) => void) => {
    if (value === "" || isValidHexColor(value) || value.startsWith("#")) {
      setter(value)
    }
  }

  // Generate QR content based on type
  const generateQRContent = (): string => {
    switch (qrType) {
      case "url":
        return url.trim()
      
      case "text":
        return text.trim()
      
      case "wifi":
        const hidden = wifiHidden ? "H:true;" : ""
        return `WIFI:T:${wifiEncryption};S:${wifiSSID};P:${wifiPassword};${hidden};`
      
      case "vcard":
        return `BEGIN:VCARD
VERSION:3.0
FN:${vcardName}
TEL:${vcardPhone}
EMAIL:${vcardEmail}
ORG:${vcardCompany}
END:VCARD`
      
      case "email":
        return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      
      case "sms":
        return `sms:${smsPhone}?body=${encodeURIComponent(smsMessage)}`
      
      case "whatsapp":
        return `https://wa.me/${smsPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(smsMessage)}`
      
      case "phone":
        return `tel:${phoneNumber}`
      
      case "location":
        return `geo:${locationLat},${locationLng}`
      
      default:
        return ""
    }
  }

  // Generate QR code
  const generateQR = async () => {
    const content = generateQRContent()
    if (!content) return

    const validFgColor = isValidHexColor(foregroundColor) ? foregroundColor : "#000000"
    const validBgColor = transparentBg ? "#ffffff00" : (isValidHexColor(backgroundColor) ? backgroundColor : "#ffffff")

    setLoading(true)
    try {
      const options: QROptions = {
        width: size[0],
        margin: margin[0],
        errorCorrectionLevel: errorCorrection,
        color: {
          dark: validFgColor,
          light: validBgColor,
        },
      }

      let qrDataUrl = await QRCode.toDataURL(content, options)

      // Apply logo if uploaded
      if (logoImage) {
        qrDataUrl = await applyLogoToQR(qrDataUrl)
      }

      setQrImage(qrDataUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
      alert("Error generating QR code. Please check your inputs.")
    } finally {
      setLoading(false)
    }
  }

  // Auto-generate on input change
  useEffect(() => {
    const content = generateQRContent()
    if (content) {
      const timer = setTimeout(() => {
        generateQR()
      }, 500) // Debounce
      return () => clearTimeout(timer)
    }
  }, [url, text, wifiSSID, wifiPassword, vcardName, vcardPhone, vcardEmail, emailTo, smsPhone, phoneNumber, locationLat, locationLng, foregroundColor, backgroundColor, size, margin, errorCorrection, logoImage, logoSize])

  // Apply logo to QR code
  const applyLogoToQR = async (qrDataUrl: string): Promise<string> => {
    if (!logoImage) return qrDataUrl

    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) {
        console.error("No canvas context")
        return resolve(qrDataUrl)
      }

      const qrImg = new Image()
      
      qrImg.onload = () => {
        try {
          canvas.width = qrImg.width
          canvas.height = qrImg.height
          
          // Draw QR code first
          ctx.drawImage(qrImg, 0, 0)

          const logoImg = new Image()
          
          logoImg.onload = () => {
            try {
              const logoSizePercent = logoSize[0] / 100
              const logoWidth = canvas.width * logoSizePercent
              const logoHeight = canvas.height * logoSizePercent
              const x = (canvas.width - logoWidth) / 2
              const y = (canvas.height - logoHeight) / 2

              // Draw white background for logo (better visibility)
              const padding = 10
              ctx.fillStyle = "#FFFFFF"
              ctx.fillRect(x - padding, y - padding, logoWidth + (padding * 2), logoHeight + (padding * 2))

              // Draw logo
              ctx.drawImage(logoImg, x, y, logoWidth, logoHeight)

              const result = canvas.toDataURL("image/png", 1.0)
              resolve(result)
            } catch (error) {
              console.error("Error drawing logo:", error)
              resolve(qrDataUrl)
            }
          }
          
          logoImg.onerror = (e) => {
            console.error("Failed to load logo image:", e)
            resolve(canvas.toDataURL("image/png", 1.0))
          }
          
          logoImg.src = logoImage
        } catch (error) {
          console.error("Error in QR image load:", error)
          resolve(qrDataUrl)
        }
      }
      
      qrImg.onerror = (e) => {
        console.error("Failed to load QR image:", e)
        resolve(qrDataUrl)
      }
      
      qrImg.src = qrDataUrl
    })
  }

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoImage(event.target?.result as string)
        // Trigger QR regeneration after logo loads
        setTimeout(() => {
          if (generateQRContent()) {
            generateQR()
          }
        }, 100)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle CSV upload
  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        // Parse CSV - assuming first column contains the data
        const lines = text.split('\n').map(line => {
          const firstColumn = line.split(',')[0].trim()
          return firstColumn
        }).filter(line => line)
        
        setBulkText(lines.join('\n'))
      }
      reader.readAsText(file)
    }
  }

  // Generate bulk QR codes
  const generateBulkQR = async () => {
    const items = bulkText.split('\n').filter(line => line.trim())
    if (items.length === 0) return

    setBulkLoading(true)
    setBulkQRCodes([])

    try {
      const qrCodes: Array<{text: string, image: string}> = []
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const options: QROptions = {
          width: size[0],
          margin: margin[0],
          errorCorrectionLevel: errorCorrection,
          color: {
            dark: isValidHexColor(foregroundColor) ? foregroundColor : "#000000",
            light: transparentBg ? "#ffffff00" : (isValidHexColor(backgroundColor) ? backgroundColor : "#ffffff"),
          },
        }

        let qrDataUrl = await QRCode.toDataURL(item.trim(), options)
        
        // Apply logo if uploaded
        if (logoImage) {
          qrDataUrl = await applyLogoToQR(qrDataUrl)
        }
        
        const newQR = { text: item.trim(), image: qrDataUrl }
        qrCodes.push(newQR)
        
        // Update state progressively to show progress
        setBulkQRCodes([...qrCodes])
      }
    } catch (error) {
      console.error("Error generating bulk QR codes:", error)
      alert("Error generating QR codes. Please check your inputs.")
    } finally {
      setBulkLoading(false)
    }
  }

  // Download all bulk QR codes as ZIP
  const downloadBulkQR = async () => {
    if (bulkQRCodes.length === 0) return

    try {
      const zip = new JSZip()
      const folder = zip.folder("qr-codes")

      // Add each QR code to the ZIP
      for (let i = 0; i < bulkQRCodes.length; i++) {
        const qr = bulkQRCodes[i]
        // Convert data URL to blob
        const base64Data = qr.image.split(',')[1]
        folder?.file(`qr-code-${i + 1}.png`, base64Data, { base64: true })
      }

      // Generate ZIP file
      const content = await zip.generateAsync({ 
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
      })

      // Download ZIP file
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = `qr-codes-${new Date().getTime()}.zip`
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (error) {
      console.error("Error creating ZIP file:", error)
      alert("Error creating ZIP file. Please try downloading individually.")
    }
  }

  // Download individual QR code from bulk
  const downloadIndividualQR = (image: string, index: number) => {
    const link = document.createElement('a')
    link.download = `qr-code-${index + 1}.png`
    link.href = image
    link.click()
  }

  // Download QR code
  const downloadQR = async () => {
    if (!qrImage) return

    if (downloadFormat === "svg") {
      await downloadAsSVG()
    } else {
      const link = document.createElement("a")
      link.download = `qr-code.${downloadFormat}`
      link.href = qrImage
      link.click()
    }
  }

  // Download as SVG
  const downloadAsSVG = async () => {
    const content = generateQRContent()
    if (!content) return

    try {
      const svgString = await QRCode.toString(content, {
        type: "svg",
        width: size[0],
        margin: margin[0],
        errorCorrectionLevel: errorCorrection,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
      })

      const blob = new Blob([svgString], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = "qr-code.svg"
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating SVG:", error)
    }
  }

  const inputClass = "h-9 border-2 border-orange-500/50 focus:border-orange-500 text-sm"
  const labelClass = "text-xs font-medium"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT COLUMN - INPUTS */}
      <div className="space-y-4">
        {/* QR Type Selector */}
        <Card className="p-4 border-2 border-primary/20">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            Choose QR Code Type
          </h3>
          <Tabs value={qrType} onValueChange={(v) => setQrType(v as QRType)} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 h-auto p-1 bg-muted">
              <TabsTrigger value="url" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <Globe className="h-3.5 w-3.5 text-blue-500" />
                <span>URL</span>
              </TabsTrigger>
              <TabsTrigger value="wifi" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-green-500 data-[state=active]:text-white">
                <Wifi className="h-3.5 w-3.5 text-green-500" />
                <span>WiFi</span>
              </TabsTrigger>
              <TabsTrigger value="vcard" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                <User className="h-3.5 w-3.5 text-purple-500" />
                <span>vCard</span>
              </TabsTrigger>
              <TabsTrigger value="email" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-red-500 data-[state=active]:text-white">
                <Mail className="h-3.5 w-3.5 text-red-500" />
                <span>Email</span>
              </TabsTrigger>
              <TabsTrigger value="sms" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                <MessageSquare className="h-3.5 w-3.5 text-amber-500" />
                <span>SMS</span>
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                <Phone className="h-3.5 w-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-white">
                <Phone className="h-3.5 w-3.5 text-cyan-500" />
                <span>Phone</span>
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                <MapPin className="h-3.5 w-3.5 text-pink-500" />
                <span>Location</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                <FileText className="h-3.5 w-3.5 text-indigo-500" />
                <span>Text</span>
              </TabsTrigger>
              <TabsTrigger value="bulk" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                <ListOrdered className="h-3.5 w-3.5 text-orange-500" />
                <span>Bulk</span>
              </TabsTrigger>
            </TabsList>

            {/* URL Input */}
            <TabsContent value="url" className="space-y-2 mt-3">
              <Label htmlFor="url" className={labelClass}>Website URL</Label>
          <Input
            id="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
                className={inputClass}
              />
            </TabsContent>

            {/* Text Input */}
            <TabsContent value="text" className="space-y-2 mt-3">
              <Label htmlFor="text" className={labelClass}>Plain Text</Label>
              <Textarea
                id="text"
                placeholder="Enter any text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[60px] border-2 border-orange-500/50 focus:border-orange-500 text-sm"
              />
            </TabsContent>

            {/* WiFi QR */}
            <TabsContent value="wifi" className="space-y-2 mt-3">
              <div className="space-y-2">
                <Label htmlFor="wifi-ssid" className={labelClass}>Network Name (SSID) *</Label>
                <Input
                  id="wifi-ssid"
                  placeholder="My WiFi"
                  value={wifiSSID}
                  onChange={(e) => setWifiSSID(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wifi-password" className={labelClass}>Password</Label>
                <Input
                  id="wifi-password"
                  type="password"
                  placeholder="Password"
                  value={wifiPassword}
                  onChange={(e) => setWifiPassword(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="wifi-encryption" className={labelClass}>Encryption</Label>
                  <Select value={wifiEncryption} onValueChange={(v) => setWifiEncryption(v as "WPA" | "WEP" | "nopass")}>
                    <SelectTrigger className="h-9 border-2 border-orange-500/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WPA">WPA</SelectItem>
                      <SelectItem value="WEP">WEP</SelectItem>
                      <SelectItem value="nopass">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-orange-500/30 mt-6">
                  <Switch
                    id="wifi-hidden"
                    checked={wifiHidden}
                    onCheckedChange={setWifiHidden}
                    className="data-[state=checked]:bg-orange-500"
                  />
                  <Label htmlFor="wifi-hidden" className="text-sm cursor-pointer font-medium">Hidden Network</Label>
                </div>
              </div>
            </TabsContent>

            {/* vCard QR */}
            <TabsContent value="vcard" className="space-y-2 mt-3">
              <div className="space-y-2">
                <Label htmlFor="vcard-name" className={labelClass}>Full Name *</Label>
                <Input
                  id="vcard-name"
                  placeholder="John Doe"
                  value={vcardName}
                  onChange={(e) => setVcardName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="vcard-phone" className={labelClass}>Phone</Label>
                  <Input
                    id="vcard-phone"
                    placeholder="+1234567890"
                    value={vcardPhone}
                    onChange={(e) => setVcardPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vcard-email" className={labelClass}>Email</Label>
                  <Input
                    id="vcard-email"
                    type="email"
                    placeholder="email@example.com"
                    value={vcardEmail}
                    onChange={(e) => setVcardEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vcard-company" className={labelClass}>Company</Label>
                <Input
                  id="vcard-company"
                  placeholder="Company Name"
                  value={vcardCompany}
                  onChange={(e) => setVcardCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
            </TabsContent>

            {/* Email QR */}
            <TabsContent value="email" className="space-y-2 mt-3">
              <div className="space-y-2">
                <Label htmlFor="email-to" className={labelClass}>Email Address *</Label>
                <Input
                  id="email-to"
                  type="email"
                  placeholder="recipient@example.com"
                  value={emailTo}
                  onChange={(e) => setEmailTo(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-subject" className={labelClass}>Subject</Label>
                <Input
                  id="email-subject"
                  placeholder="Email subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-body" className={labelClass}>Message</Label>
                <Textarea
                  id="email-body"
                  placeholder="Message..."
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="min-h-[60px] border-2 border-orange-500/50 focus:border-orange-500 text-sm"
                />
              </div>
            </TabsContent>

            {/* SMS QR */}
            <TabsContent value="sms" className="space-y-2 mt-3">
              <div className="space-y-2">
                <Label htmlFor="sms-phone" className={labelClass}>Phone Number *</Label>
                <Input
                  id="sms-phone"
                  placeholder="+1234567890"
                  value={smsPhone}
                  onChange={(e) => setSmsPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-message" className={labelClass}>Message</Label>
                <Textarea
                  id="sms-message"
                  placeholder="SMS message..."
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  className="min-h-[60px] border-2 border-orange-500/50 focus:border-orange-500 text-sm"
                />
              </div>
            </TabsContent>

            {/* WhatsApp QR */}
            <TabsContent value="whatsapp" className="space-y-2 mt-3">
              <div className="space-y-2">
                <Label htmlFor="whatsapp-phone" className={labelClass}>Phone Number *</Label>
                <Input
                  id="whatsapp-phone"
                  placeholder="+1234567890"
                  value={smsPhone}
                  onChange={(e) => setSmsPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-message" className={labelClass}>Message</Label>
                <Textarea
                  id="whatsapp-message"
                  placeholder="Hello! I'd like to..."
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  className="min-h-[60px] border-2 border-orange-500/50 focus:border-orange-500 text-sm"
                />
              </div>
            </TabsContent>

            {/* Phone QR */}
            <TabsContent value="phone" className="space-y-2 mt-3">
              <Label htmlFor="phone-number" className={labelClass}>Phone Number *</Label>
              <Input
                id="phone-number"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={inputClass}
              />
            </TabsContent>

            {/* Location QR */}
            <TabsContent value="location" className="space-y-2 mt-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="location-lat" className={labelClass}>Latitude *</Label>
                  <Input
                    id="location-lat"
                    placeholder="40.7128"
                    value={locationLat}
                    onChange={(e) => setLocationLat(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location-lng" className={labelClass}>Longitude *</Label>
                  <Input
                    id="location-lng"
                    placeholder="-74.0060"
                    value={locationLng}
                    onChange={(e) => setLocationLng(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </TabsContent>

            {/* Bulk QR Generation */}
            <TabsContent value="bulk" className="space-y-3 mt-3">
              <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-500/30">
                <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">
                  🚀 Generate hundreds of QR codes at once! Enter URLs/text (one per line) or upload CSV.
                </p>
                {logoImage && (
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-2 flex items-center gap-1">
                    <ImageIcon className="h-3 w-3" />
                    Logo will be added to all QR codes
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bulk-text" className="text-sm font-medium">Enter URLs/Text (one per line)</Label>
                <Textarea
                  id="bulk-text"
                  placeholder={"https://example.com/page1\nhttps://example.com/page2\nhttps://example.com/page3"}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  className="min-h-[120px] border-2 border-orange-500/50 focus:border-orange-500 text-sm font-mono"
                />
                <p className="text-xs text-muted-foreground">
                  {bulkText.split('\n').filter(line => line.trim()).length} items to generate
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted-foreground/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="csv-upload" className="text-sm font-medium">Upload CSV File</Label>
                <Input
                  id="csv-upload"
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleCSVUpload}
                  className="h-9 border-2 border-orange-500/50 text-xs file:mr-2 file:text-xs"
                  ref={csvInputRef}
                />
                <p className="text-xs text-muted-foreground">
                  CSV format: First column = URLs/Text to encode
                </p>
              </div>

            </TabsContent>
          </Tabs>
        </Card>

        {/* Customization Options */}
        <Card className="p-4 border-2 border-primary/20">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-primary">
            <Zap className="h-4 w-4" />
            Customize (Premium - FREE!)
          </h3>
          
          <div className="space-y-3">
            {/* Colors */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className={labelClass}>Foreground</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={isValidHexColor(foregroundColor) ? foregroundColor : "#000000"}
                    onChange={(e) => setForegroundColor(e.target.value)}
                    className="h-9 w-12 p-1 border-2 border-orange-500/50"
                  />
                  <Input 
                    value={foregroundColor} 
                    onChange={(e) => handleColorChange(e.target.value, setForegroundColor)} 
                    className="h-9 flex-1 border-2 border-orange-500/50 text-xs"
                    placeholder="#000000"
                    maxLength={7}
                  />
                </div>
        </div>

        <div className="space-y-2">
                <Label className={labelClass}>Background</Label>
          <div className="flex gap-2">
            <Input
              type="color"
                    value={isValidHexColor(backgroundColor) ? backgroundColor : "#ffffff"}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="h-9 w-12 p-1 border-2 border-orange-500/50"
                    disabled={transparentBg}
                  />
                  <Input 
                    value={backgroundColor} 
                    onChange={(e) => handleColorChange(e.target.value, setBackgroundColor)} 
                    className="h-9 flex-1 border-2 border-orange-500/50 text-xs"
                    placeholder="#ffffff"
                    maxLength={7}
                    disabled={transparentBg}
                  />
                </div>
          </div>
        </div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-background border border-orange-500/30">
              <Switch
                id="transparent-bg"
                checked={transparentBg}
                onCheckedChange={setTransparentBg}
                className="data-[state=checked]:bg-orange-500"
              />
              <Label htmlFor="transparent-bg" className="text-sm cursor-pointer font-medium">Transparent Background</Label>
            </div>

            {/* Size & Margin */}
            <div className="space-y-2 p-3 rounded-lg bg-background border border-orange-500/20">
              <Label className="text-sm font-medium">Size: {size[0]}px</Label>
              <Slider
                min={200}
                max={800}
                step={50}
                value={size}
                onValueChange={setSize}
                className="py-3 [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500"
              />
            </div>

            <div className="space-y-2 p-3 rounded-lg bg-background border border-orange-500/20">
              <Label className="text-sm font-medium">Margin: {margin[0]}</Label>
              <Slider
                min={0}
                max={6}
                step={1}
                value={margin}
                onValueChange={setMargin}
                className="py-3 [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500"
              />
            </div>

            {/* Error Correction */}
            <div className="space-y-2">
              <Label className={labelClass}>Error Correction</Label>
              <Select value={errorCorrection} onValueChange={(v) => setErrorCorrection(v as ErrorCorrectionLevel)}>
                <SelectTrigger className="h-9 border-2 border-orange-500/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%) {!logoImage && "✓"}</SelectItem>
                  <SelectItem value="Q">Quartile (25%) {logoImage && "✓ Best for logos"}</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
              {logoImage && errorCorrection === "L" && (
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  ⚠️ Use Q or H error correction for better logo visibility
                </p>
              )}
            </div>

            {/* Logo Upload */}
            <div className="space-y-2">
              <Label className={labelClass}>
                <ImageIcon className="h-3 w-3 inline mr-1" />
                Add Logo (Premium - FREE!)
              </Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="h-9 border-2 border-orange-500/50 text-xs file:mr-2 file:text-xs"
                ref={fileInputRef}
              />
              {logoImage && (
                <div className="space-y-2 p-3 rounded-lg bg-background border border-orange-500/20 mt-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Logo Size: {logoSize[0]}%</Label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setLogoImage(null)
                        if (fileInputRef.current) {
                          fileInputRef.current.value = ''
                        }
                      }}
                      className="h-6 text-xs text-red-500 hover:text-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                  <Slider
                    min={10}
                    max={35}
                    step={1}
                    value={logoSize}
                    onValueChange={setLogoSize}
                    className="py-3 [&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500"
                  />
                  <div className="mt-2 p-2 bg-muted rounded flex justify-center">
                    <img src={logoImage} alt="Logo preview" className="max-w-[60px] max-h-[60px] object-contain" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    ✓ Logo will appear in center of QR code
                  </p>
                </div>
              )}
            </div>

            {/* Download Format */}
            <div className="space-y-2">
              <Label className={labelClass}>Download Format</Label>
              <Select value={downloadFormat} onValueChange={(v) => setDownloadFormat(v as DownloadFormat)}>
                <SelectTrigger className="h-9 border-2 border-orange-500/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG (Recommended)</SelectItem>
                  <SelectItem value="svg">SVG (Premium - FREE!)</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bulk Generation Button */}
            {qrType === "bulk" && (
              <div className="pt-3 border-t border-border">
                <Button 
                  onClick={generateBulkQR} 
                  disabled={bulkLoading || !bulkText.trim()} 
                  className="w-full h-10 text-sm bg-orange-500 hover:bg-orange-600"
                >
                  {bulkLoading ? (
                    <>
                      <LoadingSpinner className="mr-2 h-4 w-4" />
                      Generating {bulkText.split('\n').filter(line => line.trim()).length} QR Codes...
            </>
          ) : (
            <>
                      <ListOrdered className="mr-2 h-4 w-4" />
                      Generate Bulk QR Codes ({bulkText.split('\n').filter(line => line.trim()).length})
            </>
          )}
        </Button>
                {bulkLoading && (
                  <div className="mt-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <LoadingSpinner className="h-4 w-4" />
                      <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">
                        Generating QR codes... Please wait
                      </p>
                    </div>
                    <div className="w-full bg-orange-200 dark:bg-orange-900/30 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(bulkQRCodes.length / bulkText.split('\n').filter(line => line.trim()).length) * 100}%` 
                        }}
                      />
                    </div>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-1 text-center">
                      {bulkQRCodes.length} / {bulkText.split('\n').filter(line => line.trim()).length} completed
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* RIGHT COLUMN - QR OUTPUT */}
      <div className="space-y-4">
        <Card className="p-6 border-2 border-primary/20 sticky top-4 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-primary">
              <QrCode className="h-4 w-4" />
              {qrType === "bulk" ? `Bulk QR Codes (${bulkQRCodes.length})` : "Your QR Code"} {(loading || bulkLoading) && "Generating..."}
            </h3>
            {qrType === "bulk" && bulkQRCodes.length > 0 && (
              <Button variant="default" size="sm" onClick={downloadBulkQR} className="h-8 text-xs bg-orange-500 hover:bg-orange-600">
                <Archive className="h-3 w-3 mr-1.5" />
                Download ZIP ({bulkQRCodes.length} files)
              </Button>
            )}
            {qrType !== "bulk" && qrImage && (
              <Button variant="default" size="sm" onClick={downloadQR} className="h-8 text-xs">
                <Download className="h-3 w-3 mr-1.5" />
              Download
            </Button>
            )}
          </div>

          {/* Bulk QR Codes Display */}
          {qrType === "bulk" ? (
            <div className="space-y-3">
              {bulkLoading ? (
                <div className="flex flex-col items-center justify-center bg-muted p-8 rounded-lg min-h-[400px]">
                  <LoadingSpinner className="h-8 w-8 mb-3" />
                  <p className="text-sm text-muted-foreground">Generating QR codes...</p>
                </div>
              ) : bulkQRCodes.length > 0 ? (
                <>
                  <div className="grid gap-3 max-h-[500px] overflow-y-auto pr-2">
                    {bulkQRCodes.map((qr, index) => (
                      <div key={index} className="p-3 rounded-lg bg-muted border border-border">
                        <div className="flex items-start gap-3">
                          <img src={qr.image} alt={`QR Code ${index + 1}`} className="w-20 h-20 shadow-sm rounded" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium mb-1">QR Code #{index + 1}</p>
                            <p className="text-xs text-muted-foreground truncate">{qr.text}</p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2 h-7 text-xs"
                              onClick={() => downloadIndividualQR(qr.image, index)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Download PNG
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mt-3">
                    <Button 
                      onClick={downloadBulkQR}
                      className="w-full h-9 text-sm bg-orange-500 hover:bg-orange-600"
                    >
                      <Archive className="h-4 w-4 mr-2" />
                      Download All as ZIP ({bulkQRCodes.length} files)
                    </Button>
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-500/30">
                      <p className="text-xs font-medium text-center text-green-700 dark:text-green-400">
                        ✨ {bulkQRCodes.length} QR codes generated {logoImage && "• Logo included"} • No Watermark • 100% Free
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center bg-muted p-8 rounded-lg min-h-[400px]">
                  <ListOrdered className="h-16 w-16 mx-auto mb-3 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground text-center">Enter URLs/text or upload CSV</p>
                  <p className="text-xs text-muted-foreground mt-1">Then click "Generate Bulk QR Codes"</p>
                </div>
              )}
            </div>
          ) : (
            /* Single QR Code Display */
            <>
              <div className="flex justify-center items-center bg-muted p-8 rounded-lg min-h-[400px]">
                {loading ? (
                  <LoadingSpinner className="h-8 w-8" />
                ) : qrImage ? (
                  <img src={qrImage} alt="Generated QR Code" className="max-w-full h-auto shadow-md rounded-lg" />
                ) : (
                  <div className="text-center text-sm text-muted-foreground">
                    <QrCode className="h-16 w-16 mx-auto mb-3 text-muted-foreground/30" />
                    <p>Enter data to generate QR code</p>
                    <p className="text-xs mt-1">Auto-generates as you type</p>
                  </div>
                )}
              </div>

              {qrImage && (
                <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-500/30">
                  <p className="text-xs font-medium text-center text-green-700 dark:text-green-400">
                    ✨ No Watermark • Unlimited Use • 100% Free
                  </p>
                </div>
              )}
            </>
          )}

          {/* Feature Highlights */}
          <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-500/30">
            <p className="text-xs font-semibold text-center mb-2">
              🎉 All Premium Features FREE
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Wifi className="h-3 w-3" />
                <span>WiFi QR</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>vCard</span>
              </div>
              <div className="flex items-center gap-1">
                <ImageIcon className="h-3 w-3" />
                <span>Logo</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                <span>SVG Export</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
