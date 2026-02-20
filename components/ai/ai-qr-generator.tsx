"use client"

import {useEffect, useRef, useState} from "react"
import {GButton} from "@/ui/gbutton"
import {GLabel} from "@/ui/glabel"
import {GInput} from "@/ui/ginput"
import {GCard} from "@/ui/gcard"
import {GTabs, GTabsContent, GTabsList, GTabsTrigger} from "@/ui/gtabs"
import {GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue} from "@/ui/gselect"
import {GSlider} from "@/ui/gslider"
import {GSwitch} from "@/ui/gswitch"
import {GTextarea} from "@/ui/gtextarea"

import {
  Archive,
  Download,
  FileText,
  Globe,
  Image as ImageIcon,
  ListOrdered,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  QrCode,
  Sparkles,
  User,
  Wifi,
  Zap
} from "lucide-react"
import {LoadingSpinner} from "@/components/common/loading-spinner"
import QRCode from "qrcode"
import JSZip from "jszip"

import type {
  DownloadFormat,
  ErrorCorrectionLevel,
  QROptions,
  QRType
} from "@/types/image-tool-types/ai-qr-generator.types"

export function AiQrGenerator() {
  const [qrType, setQrType] = useState<QRType>("url")
  const [qrImage, setQrImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const csvInputRef = useRef<HTMLInputElement>(null)

  const [bulkText, setBulkText] = useState("")
  const [bulkQRCodes, setBulkQRCodes] = useState<Array<{ text: string, image: string }>>([])
  const [bulkLoading, setBulkLoading] = useState(false)

  const [formData, setFormData] = useState({
    url: "",
    text: "",
    wifiSSID: "",
    wifiPassword: "",
    wifiEncryption: "WPA" as "WPA" | "WEP" | "nopass",
    wifiHidden: false,
    vcardName: "",
    vcardPhone: "",
    vcardEmail: "",
    vcardCompany: "",
    emailTo: "",
    emailSubject: "",
    emailBody: "",
    smsPhone: "",
    smsMessage: "",
    phoneNumber: "",
    locationLat: "",
    locationLng: "",
    foregroundColor: "#000000",
    backgroundColor: "#ffffff",
    transparentBg: false,
    size: [400],
    margin: [2],
    errorCorrection: "M" as ErrorCorrectionLevel,
    logoSize: [20],
    downloadFormat: "png" as DownloadFormat,
    logoImage: null as string | null
  })

  const handleInputChange = (key: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const isValidHexColor = (hexColor: string): boolean => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hexColor)
  }

  const handleColorChange = (value: string, key: 'foregroundColor' | 'backgroundColor') => {
    if (value === "" || isValidHexColor(value) || value.startsWith("#")) {
      handleInputChange(key, value)
    }
  }

  const generateQRContent = (): string => {
    switch (qrType) {
      case "url":
        return formData.url.trim()

      case "text":
        return formData.text.trim()

      case "wifi":
        const hidden = formData.wifiHidden ? "H:true;" : ""
        return `WIFI:T:${formData.wifiEncryption};S:${formData.wifiSSID};P:${formData.wifiPassword};${hidden};`

      case "vcard":
        return `BEGIN:VCARD
VERSION:3.0
FN:${formData.vcardName}
TEL:${formData.vcardPhone}
EMAIL:${formData.vcardEmail}
ORG:${formData.vcardCompany}
END:VCARD`

      case "email":
        return `mailto:${formData.emailTo}?subject=${encodeURIComponent(formData.emailSubject)}&body=${encodeURIComponent(formData.emailBody)}`

      case "sms":
        return `sms:${formData.smsPhone}?body=${encodeURIComponent(formData.smsMessage)}`

      case "whatsapp":
        return `https://wa.me/${formData.smsPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(formData.smsMessage)}`

      case "phone":
        return `tel:${formData.phoneNumber}`

      case "location":
        return `geo:${formData.locationLat},${formData.locationLng}`

      default:
        return ""
    }
  }

  const generateQR = () => {
    const content = generateQRContent()
    if (!content) return

    const validFgColor = isValidHexColor(formData.foregroundColor) ? formData.foregroundColor : "#000000"
    const validBgColor = formData.transparentBg ? "#ffffff00" : (isValidHexColor(formData.backgroundColor) ? formData.backgroundColor : "#ffffff")

    setLoading(true)

    const options: QROptions = {
      width: formData.size[0],
      margin: formData.margin[0],
      errorCorrectionLevel: formData.errorCorrection,
      color: {
        dark: validFgColor,
        light: validBgColor,
      },
    }

    QRCode.toDataURL(content, options as any, (err, url) => {
      if (err) {
        console.error("Error generating QR code:", err)
        setLoading(false)
        return
      }

      if (formData.logoImage && url) {
        applyLogoToQR(url, (finalUrl) => {
          setQrImage(finalUrl)
          setLoading(false)
        })
      } else {
        setQrImage(url)
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    const content = generateQRContent()
    if (content) {
      const timer = setTimeout(() => {
        generateQR()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [formData])

  const applyLogoToQR = (qrDataUrl: string, callback: (url: string) => void) => {
    if (!formData.logoImage) {
      callback(qrDataUrl)
      return
    }

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      console.error("No canvas context")
      callback(qrDataUrl)
      return
    }

    const qrImg = new Image()

    qrImg.onload = () => {
      canvas.width = qrImg.width
      canvas.height = qrImg.height

      ctx.drawImage(qrImg, 0, 0)

      const logoImg = new Image()

      logoImg.onload = () => {
        const logoSizePercent = formData.logoSize[0] / 100
        const logoWidth = canvas.width * logoSizePercent
        const logoHeight = canvas.height * logoSizePercent
        const x = (canvas.width - logoWidth) / 2
        const y = (canvas.height - logoHeight) / 2

        const padding = 10
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(x - padding, y - padding, logoWidth + (padding * 2), logoHeight + (padding * 2))

        ctx.drawImage(logoImg, x, y, logoWidth, logoHeight)

        try {
          const result = canvas.toDataURL("image/png", 1.0)
          callback(result)
        } catch (e) {
          console.error("Error creating data URL", e)
          callback(qrDataUrl)
        }
      }

      logoImg.onerror = (e) => {
        console.error("Failed to load logo image:", e)
        callback(canvas.toDataURL("image/png", 1.0))
      }

      logoImg.src = formData.logoImage as string
    }

    qrImg.onerror = (e) => {
      console.error("Failed to load QR image:", e)
      callback(qrDataUrl)
    }

    qrImg.src = qrDataUrl
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        handleInputChange("logoImage", event.target?.result as string)
        setTimeout(() => {
          if (generateQRContent()) {
            generateQR()
          }
        }, 100)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        const lines = text.split('\n').map(line => {
          return line.split(',')[0].trim()
        }).filter(line => line)

        setBulkText(lines.join('\n'))
      }
      reader.readAsText(file)
    }
  }

  const generateBulkQR = () => {
    const items = bulkText.split('\n').filter(line => line.trim())
    if (items.length === 0) return

    setBulkLoading(true)
    setBulkQRCodes([])

    const qrCodes: Array<{ text: string, image: string }> = []
    let currentIndex = 0

    const processNext = () => {
      if (currentIndex >= items.length) {
        setBulkLoading(false)
        return
      }

      const item = items[currentIndex]
      const options: QROptions = {
        width: formData.size[0],
        margin: formData.margin[0],
        errorCorrectionLevel: formData.errorCorrection,
        color: {
          dark: isValidHexColor(formData.foregroundColor) ? formData.foregroundColor : "#000000",
          light: formData.transparentBg ? "#ffffff00" : (isValidHexColor(formData.backgroundColor) ? formData.backgroundColor : "#ffffff"),
        },
      }

      QRCode.toDataURL(item.trim(), options as any, (err, url) => {
        if (err) {
          console.error("Error generating bulk QR:", err)
          currentIndex++
          processNext()
          return
        }

        const finishItem = (finalUrl: string) => {
          qrCodes.push({ text: item.trim(), image: finalUrl })
          setBulkLoading(true)
          setBulkQRCodes([...qrCodes])
          currentIndex++
          setTimeout(processNext, 0)
        }

        if (formData.logoImage && url) {
          applyLogoToQR(url, finishItem)
        } else if (url) {
          finishItem(url)
        } else {
          currentIndex++
          processNext()
        }
      })
    }

    processNext()
  }

  const downloadBulkQR = async () => {
    if (bulkQRCodes.length === 0) return

    try {
      const zip = new JSZip()
      const folder = zip.folder("qr-codes")

      for (let i = 0; i < bulkQRCodes.length; i++) {
        const qr = bulkQRCodes[i]
        const base64Data = qr.image.split(',')[1]
        folder?.file(`qr-code-${i + 1}.png`, base64Data, { base64: true })
      }

      const content = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
      })

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

  const downloadIndividualQR = (image: string, index: number) => {
    const link = document.createElement('a')
    link.download = `qr-code-${index + 1}.png`
    link.href = image
    link.click()
  }

  const downloadQR = async () => {
    if (!qrImage) return

    if (formData.downloadFormat === "svg") {
      await downloadAsSVG()
    } else {
      const link = document.createElement("a")
      link.download = `qr-code.${formData.downloadFormat}`
      link.href = qrImage
      link.click()
    }
  }

  const downloadAsSVG = async () => {
    const content = generateQRContent()
    if (!content) return

    try {
      QRCode.toString(content, {
        type: "svg",
        width: formData.size[0],
        margin: formData.margin[0],
        errorCorrectionLevel: formData.errorCorrection,
        color: {
          dark: formData.foregroundColor,
          light: formData.backgroundColor,
        },
      }, (err, svgString) => {
        if (err) {
          console.error(err)
          return
        }
        const blob = new Blob([svgString], { type: "image/svg+xml" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.download = "qr-code.svg"
        link.href = url
        link.click()
        URL.revokeObjectURL(url)
      })

    } catch (error) {
      console.error("Error generating SVG:", error)
    }
  }

  const inputClass = "h-9 border-2 border-primary/50 focus:border-primary text-sm"
  const labelClass = "text-xs font-medium"

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <GCard className="p-4 border-2 border-primary/20">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            Choose QR Code Type
          </h3>
          <GTabs value={qrType} onValueChange={(v) => setQrType(v as QRType)} className="w-full">
            <GTabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 h-auto p-1 bg-muted">
              <GTabsTrigger value="url" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Globe className="h-3.5 w-3.5 text-foreground" />
                <span>URL</span>
              </GTabsTrigger>
              <GTabsTrigger value="wifi" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wifi className="h-3.5 w-3.5 text-foreground" />
                <span>WiFi</span>
              </GTabsTrigger>
              <GTabsTrigger value="vcard" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <User className="h-3.5 w-3.5 text-foreground" />
                <span>vCard</span>
              </GTabsTrigger>
              <GTabsTrigger value="email" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Mail className="h-3.5 w-3.5 text-foreground" />
                <span>Email</span>
              </GTabsTrigger>
              <GTabsTrigger value="sms" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquare className="h-3.5 w-3.5 text-foreground" />
                <span>SMS</span>
              </GTabsTrigger>
              <GTabsTrigger value="whatsapp" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Phone className="h-3.5 w-3.5 text-foreground" />
                <span>WhatsApp</span>
              </GTabsTrigger>
              <GTabsTrigger value="phone" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Phone className="h-3.5 w-3.5 text-foreground" />
                <span>Phone</span>
              </GTabsTrigger>
              <GTabsTrigger value="location" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MapPin className="h-3.5 w-3.5 text-foreground" />
                <span>Location</span>
              </GTabsTrigger>
              <GTabsTrigger value="text" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FileText className="h-3.5 w-3.5 text-foreground" />
                <span>Text</span>
              </GTabsTrigger>
              <GTabsTrigger value="bulk" className="flex items-center gap-1.5 text-xs py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ListOrdered className="h-3.5 w-3.5 text-foreground" />
                <span>Bulk</span>
              </GTabsTrigger>
            </GTabsList>

            <GTabsContent value="url" className="space-y-2 mt-3">
              <GLabel htmlFor="url" className={labelClass}>Website URL</GLabel>
              <GInput
                id="url"
                placeholder="https://example.com"
                value={formData.url}
                onChange={(e) => handleInputChange("url", e.target.value)}
                className={inputClass}
              />
            </GTabsContent>

            <GTabsContent value="text" className="space-y-2 mt-3">
              <GLabel htmlFor="text" className={labelClass}>Plain Text</GLabel>
              <GTextarea
                id="text"
                placeholder="Enter any text..."
                value={formData.text}
                onChange={(e) => handleInputChange("text", e.target.value)}
                className="min-h-[60px] border-2 border-primary/50 focus:border-primary text-sm"
              />
            </GTabsContent>

            <GTabsContent value="wifi" className="space-y-2 mt-3">
              <div className="space-y-2">
                <GLabel htmlFor="wifi-ssid" className={labelClass}>Network Name (SSID) *</GLabel>
                <GInput
                  id="wifi-ssid"
                  placeholder="My WiFi"
                  value={formData.wifiSSID}
                  onChange={(e) => handleInputChange("wifiSSID", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="wifi-password" className={labelClass}>Password</GLabel>
                <GInput
                  id="wifi-password"
                  type="password"
                  placeholder="Password"
                  value={formData.wifiPassword}
                  onChange={(e) => handleInputChange("wifiPassword", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <GLabel htmlFor="wifi-encryption" className={labelClass}>Encryption</GLabel>
                  <GSelect value={formData.wifiEncryption} onValueChange={(v) => handleInputChange("wifiEncryption", v)}>
                    <GSelectTrigger className="h-9 border-2 border-primary/50">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      <GSelectItem value="WPA">WPA</GSelectItem>
                      <GSelectItem value="WEP">WEP</GSelectItem>
                      <GSelectItem value="nopass">None</GSelectItem>
                    </GSelectContent>
                  </GSelect>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-primary/30 mt-6">
                  <GSwitch
                    id="wifi-hidden"
                    checked={formData.wifiHidden}
                    onCheckedChange={(v) => handleInputChange("wifiHidden", v)}
                    className="data-[state=checked]:bg-primary"
                  />
                  <GLabel htmlFor="wifi-hidden" className="text-sm cursor-pointer font-medium">Hidden Network</GLabel>
                </div>
              </div>
            </GTabsContent>

            <GTabsContent value="vcard" className="space-y-2 mt-3">
              <div className="space-y-2">
                <GLabel htmlFor="vcard-name" className={labelClass}>Full Name *</GLabel>
                <GInput
                  id="vcard-name"
                  placeholder="John Doe"
                  value={formData.vcardName}
                  onChange={(e) => handleInputChange("vcardName", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <GLabel htmlFor="vcard-phone" className={labelClass}>Phone</GLabel>
                  <GInput
                    id="vcard-phone"
                    placeholder="+1234567890"
                    value={formData.vcardPhone}
                    onChange={(e) => handleInputChange("vcardPhone", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="vcard-email" className={labelClass}>Email</GLabel>
                  <GInput
                    id="vcard-email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.vcardEmail}
                    onChange={(e) => handleInputChange("vcardEmail", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="vcard-company" className={labelClass}>Company</GLabel>
                <GInput
                  id="vcard-company"
                  placeholder="Company Name"
                  value={formData.vcardCompany}
                  onChange={(e) => handleInputChange("vcardCompany", e.target.value)}
                  className={inputClass}
                />
              </div>
            </GTabsContent>

            <GTabsContent value="email" className="space-y-2 mt-3">
              <div className="space-y-2">
                <GLabel htmlFor="email-to" className={labelClass}>Email Address *</GLabel>
                <GInput
                  id="email-to"
                  type="email"
                  placeholder="recipient@example.com"
                  value={formData.emailTo}
                  onChange={(e) => handleInputChange("emailTo", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="email-subject" className={labelClass}>Subject</GLabel>
                <GInput
                  id="email-subject"
                  placeholder="Email subject"
                  value={formData.emailSubject}
                  onChange={(e) => handleInputChange("emailSubject", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="email-body" className={labelClass}>Message</GLabel>
                <GTextarea
                  id="email-body"
                  placeholder="Message..."
                  value={formData.emailBody}
                  onChange={(e) => handleInputChange("emailBody", e.target.value)}
                  className="min-h-[60px] border-2 border-primary/50 focus:border-primary text-sm"
                />
              </div>
            </GTabsContent>

            <GTabsContent value="sms" className="space-y-2 mt-3">
              <div className="space-y-2">
                <GLabel htmlFor="sms-phone" className={labelClass}>Phone Number *</GLabel>
                <GInput
                  id="sms-phone"
                  placeholder="+1234567890"
                  value={formData.smsPhone}
                  onChange={(e) => handleInputChange("smsPhone", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="sms-message" className={labelClass}>Message</GLabel>
                <GTextarea
                  id="sms-message"
                  placeholder="SMS message..."
                  value={formData.smsMessage}
                  onChange={(e) => handleInputChange("smsMessage", e.target.value)}
                  className="min-h-[60px] border-2 border-primary/50 focus:border-primary text-sm"
                />
              </div>
            </GTabsContent>

            <GTabsContent value="whatsapp" className="space-y-2 mt-3">
              <div className="space-y-2">
                <GLabel htmlFor="whatsapp-phone" className={labelClass}>Phone Number *</GLabel>
                <GInput
                  id="whatsapp-phone"
                  placeholder="+1234567890"
                  value={formData.smsPhone}
                  onChange={(e) => handleInputChange("smsPhone", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="whatsapp-message" className={labelClass}>Message</GLabel>
                <GTextarea
                  id="whatsapp-message"
                  placeholder="Hello! I'd like to..."
                  value={formData.smsMessage}
                  onChange={(e) => handleInputChange("smsMessage", e.target.value)}
                  className="min-h-[60px] border-2 border-primary/50 focus:border-primary text-sm"
                />
              </div>
            </GTabsContent>

            <GTabsContent value="phone" className="space-y-2 mt-3">
              <GLabel htmlFor="phone-number" className={labelClass}>Phone Number *</GLabel>
              <GInput
                id="phone-number"
                placeholder="+1234567890"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className={inputClass}
              />
            </GTabsContent>

            <GTabsContent value="location" className="space-y-2 mt-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <GLabel htmlFor="location-lat" className={labelClass}>Latitude *</GLabel>
                  <GInput
                    id="location-lat"
                    placeholder="40.7128"
                    value={formData.locationLat}
                    onChange={(e) => handleInputChange("locationLat", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="location-lng" className={labelClass}>Longitude *</GLabel>
                  <GInput
                    id="location-lng"
                    placeholder="-74.0060"
                    value={formData.locationLng}
                    onChange={(e) => handleInputChange("locationLng", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </GTabsContent>

            <GTabsContent value="bulk" className="space-y-3 mt-3">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-xs font-semibold text-foreground">
                  🚀 Generate hundreds of QR codes at once! Enter URLs/text (one per line) or upload CSV.
                </p>
                {formData.logoImage && (
                  <p className="text-xs text-foreground mt-2 flex items-center gap-1">
                    <ImageIcon className="h-3 w-3" />
                    Logo will be added to all QR codes
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <GLabel htmlFor="bulk-text" className="text-sm font-medium">Enter URLs/Text (one per line)</GLabel>
                <GTextarea
                  id="bulk-text"
                  placeholder={"https://example.com/page1\nhttps://example.com/page2\nhttps://example.com/page3"}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  className="min-h-[120px] border-2 border-primary/50 focus:border-primary text-sm font-mono"
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
                <GLabel htmlFor="csv-upload" className="text-sm font-medium">Upload CSV File</GLabel>
                <GInput
                  id="csv-upload"
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleCSVUpload}
                  className="h-9 border-2 border-primary/50 text-xs file:mr-2 file:text-xs"
                  ref={csvInputRef}
                />
                <p className="text-xs text-muted-foreground">
                  CSV format: First column = URLs/Text to encode
                </p>
              </div>

            </GTabsContent>
          </GTabs>
        </GCard>

        <GCard className="p-4 border-2 border-primary/20">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2 text-primary">
            <Zap className="h-4 w-4" />
            Customize (Premium - FREE!)
          </h3>

          <div className="space-y-3">
            {formData.logoImage && (
              <p className="text-xs text-foreground mb-2 flex items-center gap-1">
                <ImageIcon className="h-3 w-3" />
                Logo will be added to all QR codes
              </p>
            )}    <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <GLabel className={labelClass}>Foreground</GLabel>
                <div className="flex gap-2">
                  <GInput
                    type="color"
                    value={isValidHexColor(formData.foregroundColor) ? formData.foregroundColor : "#000000"}
                    onChange={(e) => handleInputChange("foregroundColor", e.target.value)}
                    className="h-9 w-12 p-1 border-2 border-primary/50"
                  />
                  <GInput
                    value={formData.foregroundColor}
                    onChange={(e) => handleColorChange(e.target.value, "foregroundColor")}
                    className="h-9 flex-1 border-2 border-primary/50 text-xs"
                    placeholder="#000000"
                    maxLength={7}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <GLabel className={labelClass}>Background</GLabel>
                <div className="flex gap-2">
                  <GInput
                    type="color"
                    value={isValidHexColor(formData.backgroundColor) ? formData.backgroundColor : "#ffffff"}
                    onChange={(e) => handleInputChange("backgroundColor", e.target.value)}
                    className="h-9 w-12 p-1 border-2 border-primary/50"
                    disabled={formData.transparentBg}
                  />
                  <GInput
                    value={formData.backgroundColor}
                    onChange={(e) => handleColorChange(e.target.value, "backgroundColor")}
                    className="h-9 flex-1 border-2 border-primary/50 text-xs"
                    placeholder="#ffffff"
                    maxLength={7}
                    disabled={formData.transparentBg}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg bg-background border border-primary/30">
              <GSwitch
                id="transparent-bg"
                checked={formData.transparentBg}
                onCheckedChange={(v) => handleInputChange("transparentBg", v)}
                className="data-[state=checked]:bg-primary"
              />
              <GLabel htmlFor="transparent-bg" className="text-sm cursor-pointer font-medium">Transparent Background</GLabel>
            </div>

            <div className="space-y-2 p-3 rounded-lg bg-background border border-primary/20">
              <GLabel className={labelClass}>Size ({formData.size[0]}px)</GLabel>
              <GSlider
                min={100}
                max={1000}
                step={50}
                value={formData.size}
                onValueChange={(v) => handleInputChange("size", v)}
                className="py-4"
              />
            </div>

            <div className="space-y-2 p-3 rounded-lg bg-background border border-primary/20">
              <GLabel className={labelClass}>Margin ({formData.margin[0]})</GLabel>
              <GSlider
                min={0}
                max={10}
                step={1}
                value={formData.margin}
                onValueChange={(v) => handleInputChange("margin", v)}
                className="py-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <GLabel className={labelClass}>Error Correction</GLabel>
                <GSelect value={formData.errorCorrection} onValueChange={(v) => handleInputChange("errorCorrection", v as ErrorCorrectionLevel)}>
                  <GSelectTrigger className="h-9 border-2 border-primary/50">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="L">Low (7%)</GSelectItem>
                    <GSelectItem value="M">Medium (15%) {!formData.logoImage && "✓"}</GSelectItem>
                    <GSelectItem value="Q">Quartile (25%) {formData.logoImage && "✓ Best for logos"}</GSelectItem>
                    <GSelectItem value="H">High (30%)</GSelectItem>
                  </GSelectContent>
                </GSelect>
                {formData.logoImage && formData.errorCorrection === "L" && (
                  <p className="text-xs text-foreground">
                    ⚠️ Use Q or H error correction for better logo visibility
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <GLabel className={labelClass}>Download Format</GLabel>
                <GSelect value={formData.downloadFormat} onValueChange={(v) => handleInputChange("downloadFormat", v as DownloadFormat)}>
                  <GSelectTrigger className="h-9 border-2 border-primary/50">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="png">PNG (Recommended)</GSelectItem>
                    <GSelectItem value="svg">SVG (Premium - FREE!)</GSelectItem>
                    <GSelectItem value="jpg">JPG</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>
            </div>

            <div className="space-y-2">
              <GLabel className={labelClass}>
                <ImageIcon className="h-3 w-3 inline mr-1" />
                Add Logo (Premium - FREE!)
              </GLabel>
              <GInput
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="h-9 border-2 border-primary/50 text-xs file:mr-2 file:text-xs"
                ref={fileInputRef}
              />
              {formData.logoImage && (
                <div className="space-y-2 p-3 rounded-lg bg-background border border-primary/20 mt-2">
                  <div className="flex items-center justify-between">
                    <GLabel className="text-sm font-medium">Logo Size: {formData.logoSize[0]}%</GLabel>
                    <GButton
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        handleInputChange("logoImage", null)
                        if (fileInputRef.current) {
                          fileInputRef.current.value = ''
                        }
                      }}
                      className="h-6 text-xs text-foreground hover:text-foreground"
                    >
                      Remove
                    </GButton>
                  </div>
                  <GSlider
                    min={10}
                    max={35}
                    step={1}
                    value={formData.logoSize}
                    onValueChange={(v) => handleInputChange("logoSize", v)}
                    className="py-3 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                  />
                  <div className="mt-2 p-2 bg-muted rounded flex justify-center">
                    <img src={formData.logoImage} alt="Uploaded logo preview" loading="lazy" decoding="async" className="max-w-[60px] max-h-[60px] object-contain" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    ✓ Logo will appear in center of QR code
                  </p>
                </div>
              )}
            </div>



            {qrType === "bulk" && (
              <div className="pt-3 border-t border-border">
                <GButton
                  onClick={generateBulkQR}
                  disabled={bulkLoading || !bulkText.trim()}
                  isLoading={bulkLoading}
                  className="w-full h-10 text-sm bg-primary hover:bg-primary"
                >
                  {bulkLoading ? (
                    <>
                      Generating {bulkText.split('\n').filter(line => line.trim()).length} QR Codes...
                    </>
                  ) : (
                    <>
                      <ListOrdered className="mr-2 h-4 w-4" />
                      Generate Bulk QR Codes ({bulkText.split('\n').filter(line => line.trim()).length})
                    </>
                  )}
                </GButton>
                {bulkLoading && (
                  <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-primary/30">
                    <div className="flex items-center gap-2 mb-2">
                      <LoadingSpinner className="h-4 w-4" />
                      <p className="text-xs font-semibold text-foreground">
                        Generating QR codes... Please wait
                      </p>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-900/30 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(bulkQRCodes.length / bulkText.split('\n').filter(line => line.trim()).length) * 100}%`
                        }}
                      />
                    </div>
                    <p className="text-xs text-foreground mt-1 text-center">
                      {bulkQRCodes.length} / {bulkText.split('\n').filter(line => line.trim()).length} completed
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </GCard>
      </div>

      <div className="space-y-4">
        <GCard className="p-6 border-2 border-primary/20 sticky top-4 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-primary">
              <QrCode className="h-4 w-4" />
              {qrType === "bulk" ? `Bulk QR Codes (${bulkQRCodes.length})` : "Your QR Code"} {(loading || bulkLoading) && "Generating..."}
            </h3>
            {qrType === "bulk" && bulkQRCodes.length > 0 && (
              <GButton variant="default" size="sm" onClick={downloadBulkQR} className="h-8 text-xs bg-primary hover:bg-primary">
                <Archive className="h-3 w-3 mr-1.5" />
                Download ZIP ({bulkQRCodes.length} files)
              </GButton>
            )}
            {qrType !== "bulk" && qrImage && (
              <GButton variant="default" size="sm" onClick={downloadQR} className="h-8 text-xs">
                <Download className="h-3 w-3 mr-1.5" />
                Download
              </GButton>
            )}
          </div>

          {qrType === "bulk" ? (
            <div className="space-y-3">
              {bulkLoading && bulkQRCodes.length === 0 ? (
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
                          <img src={qr.image} alt={`Generated QR code ${index + 1}`} loading="lazy" decoding="async" className="w-20 h-20 shadow-sm rounded" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium mb-1">QR Code #{index + 1}</p>
                            <p className="text-xs text-muted-foreground truncate">{qr.text}</p>
                            <GButton
                              variant="outline"
                              size="sm"
                              className="mt-2 h-7 text-xs"
                              onClick={() => downloadIndividualQR(qr.image, index)}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Download PNG
                            </GButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mt-3">
                    <GButton
                      onClick={downloadBulkQR}
                      className="w-full h-9 text-sm bg-primary hover:bg-primary"
                    >
                      <Archive className="h-4 w-4 mr-2" />
                      Download All as ZIP ({bulkQRCodes.length} files)
                    </GButton>
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-500/30">
                      <p className="text-xs font-medium text-center text-heading-accent">
                        ✨ {bulkQRCodes.length} QR codes generated {formData.logoImage && "• Logo included"} • No Watermark • 100% Free
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
            <>
              <div className="flex justify-center items-center bg-muted p-8 rounded-lg min-h-[400px]">
                {loading ? (
                  <LoadingSpinner className="h-8 w-8" />
                ) : qrImage ? (
                  <img src={qrImage} alt="Generated QR code preview" loading="eager" decoding="async" className="max-w-full h-auto shadow-md rounded-lg" />
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
                  <p className="text-xs font-medium text-center text-heading-accent">
                    ✨ No Watermark • Unlimited Use • 100% Free
                  </p>
                </div>
              )}
            </>
          )}

          <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-primary/30">
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
        </GCard>
      </div>
    </div>
  )
}
