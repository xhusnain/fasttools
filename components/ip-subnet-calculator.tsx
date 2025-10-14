"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Calculator, 
  Copy, 
  Check, 
  Network, 
  Globe, 
  Shield, 
  Info, 
  AlertTriangle,
  BarChart3,
  Server,
  ChevronUp,
  ChevronDown,
  Binary as BinaryIcon,
  Hexagon as HexagonIcon,
  Target as TargetIcon
} from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type IPVersion = "ipv4" | "ipv6"
type CalculationType = "subnet" | "supernet" | "vlsm" | "flsm" | "cidr" | "wildcard"

interface SubnetResult {
  networkAddress: string
  broadcastAddress: string
  firstHost: string
  lastHost: string
  subnetMask: string
  wildcardMask: string
  networkClass: string
  cidrNotation: string
  totalHosts: number
  usableHosts: number
  networkBits: number
  hostBits: number
  binarySubnetMask: string
  binaryNetworkAddress: string
  binaryBroadcastAddress: string
  hexNetworkAddress: string
  hexBroadcastAddress: string
  reverseDNS: string
  networkRange: string
  subnetInfo: {
    network: string
    broadcast: string
    range: string
    hosts: number
  }
  advancedInfo: {
    vlsmCapable: boolean
    supernettingPossible: boolean
    privateNetwork: boolean
    reservedAddress: boolean
    multicastAddress: boolean
    linkLocal: boolean
    loopback: boolean
  }
}

interface IPSubnetCalculatorProps {
  defaultIP?: string
  defaultSubnetMask?: string
  defaultCIDR?: string
  isDetectingIP?: boolean
}

export function IPSubnetCalculator({ 
  defaultIP = "", 
  defaultSubnetMask = "",
  defaultCIDR = "",
  isDetectingIP = false 
}: IPSubnetCalculatorProps) {
  const [ipAddress, setIPAddress] = useState(defaultIP)
  const [subnetMask, setSubnetMask] = useState(defaultSubnetMask)
  const [prefixLength, setPrefixLength] = useState(defaultCIDR)
  const [ipVersion, setIPVersion] = useState<IPVersion>("ipv4")
  const [calculationType, setCalculationType] = useState<CalculationType>("subnet")
  const [result, setResult] = useState<SubnetResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showBinary, setShowBinary] = useState(false)
  const [showHex, setShowHex] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [validationError, setValidationError] = useState<string>("")
  const [subnetMaskError, setSubnetMaskError] = useState<string>("")
  const [cidrError, setCidrError] = useState<string>("")
  const calculateButtonRef = useRef<HTMLButtonElement>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Update IP address, subnet mask, and CIDR when props change (no auto-calculate)
  useEffect(() => {
    if (defaultIP && defaultIP !== ipAddress && !hasUserInteracted) {
      setIPAddress(defaultIP)
    }
    if (defaultSubnetMask && defaultSubnetMask !== subnetMask && !hasUserInteracted) {
      setSubnetMask(defaultSubnetMask)
    }
    if (defaultCIDR && defaultCIDR !== prefixLength && !hasUserInteracted) {
      setPrefixLength(defaultCIDR)
    }
  }, [defaultIP, defaultSubnetMask, defaultCIDR, hasUserInteracted])

  // Auto-calculate only once on initial load with default values
  useEffect(() => {
    if (defaultIP && (defaultSubnetMask || defaultCIDR) && !hasUserInteracted && !result) {
      console.log('Auto-calculating with:', { defaultIP, defaultSubnetMask, defaultCIDR })
      // Single auto-calculation on initial load
      const timer = setTimeout(() => {
        console.log('Attempting auto-calculation...')
        try {
          calculateSubnet()
        } catch (error) {
          console.error('Auto-calculation failed:', error)
          setIsCalculating(false)
        }
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [defaultIP, defaultSubnetMask, defaultCIDR]) // Remove hasUserInteracted and result from dependencies

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }
  }, [])

  const validateIPAddress = (ip: string, version: IPVersion): boolean => {
    if (version === "ipv4") {
      const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      return ipv4Regex.test(ip)
    } else {
      const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
      return ipv6Regex.test(ip) || ipv6Regex.test(ip.replace(/::/g, ":::"))
    }
  }

  const validateAndGetErrorMessage = (ip: string, version: IPVersion): string => {
    if (!ip.trim()) return ""
    
    if (version === "ipv4") {
      const octets = ip.split('.')
      if (octets.length !== 4) {
        return "IPv4 address must have exactly 4 octets (e.g., 192.168.1.1)"
      }
      
      for (let i = 0; i < octets.length; i++) {
        const octet = parseInt(octets[i])
        if (isNaN(octet) || octet < 0 || octet > 255) {
          return `Invalid octet ${i + 1}: "${octets[i]}" must be between 0 and 255`
        }
      }
      
      return ""
    } else {
      // IPv6 validation would go here
      return ""
    }
  }

  const validateSubnetMask = (mask: string, version: IPVersion): string => {
    if (!mask.trim()) return ""
    
    if (version === "ipv4") {
      const octets = mask.split('.')
      if (octets.length !== 4) {
        return "Subnet mask must have exactly 4 octets (e.g., 255.255.255.0)"
      }
      
      for (let i = 0; i < octets.length; i++) {
        const octet = parseInt(octets[i])
        if (isNaN(octet) || octet < 0 || octet > 255) {
          return `Invalid octet ${i + 1}: "${octets[i]}" must be between 0 and 255`
        }
      }
      
      // Check if it's a valid subnet mask (contiguous 1s followed by 0s)
      const binary = octets.map(octet => parseInt(octet).toString(2).padStart(8, '0')).join('')
      if (!/^1*0*$/.test(binary)) {
        return "Invalid subnet mask: must be contiguous 1s followed by 0s"
      }
      
      return ""
    } else {
      // IPv6 validation would go here
      return ""
    }
  }

  const validateCIDR = (cidr: string, version: IPVersion): string => {
    if (!cidr.trim()) return ""
    
    const cidrNum = parseInt(cidr)
    if (isNaN(cidrNum)) {
      return "CIDR must be a number"
    }
    
    if (version === "ipv4") {
      if (cidrNum < 0 || cidrNum > 32) {
        return "IPv4 CIDR must be between 0 and 32"
      }
    } else {
      if (cidrNum < 0 || cidrNum > 128) {
        return "IPv6 CIDR must be between 0 and 128"
      }
    }
    
    return ""
  }

  const ipToBinary = (ip: string): string => {
    return ip.split('.').map(octet => 
      parseInt(octet).toString(2).padStart(8, '0')
    ).join('.')
  }

  const binaryToIP = (binary: string): string => {
    return binary.split('.').map(bin => 
      parseInt(bin, 2).toString()
    ).join('.')
  }

  const ipToHex = (ip: string): string => {
    return ip.split('.').map(octet => 
      parseInt(octet).toString(16).padStart(2, '0').toUpperCase()
    ).join('.')
  }

  const getNetworkClass = (ip: string): string => {
    const firstOctet = parseInt(ip.split('.')[0])
    if (firstOctet >= 1 && firstOctet <= 126) return "Class A"
    if (firstOctet >= 128 && firstOctet <= 191) return "Class B"
    if (firstOctet >= 192 && firstOctet <= 223) return "Class C"
    if (firstOctet >= 224 && firstOctet <= 239) return "Class D (Multicast)"
    if (firstOctet >= 240 && firstOctet <= 255) return "Class E (Reserved)"
    return "Unknown"
  }

  const isPrivateIP = (ip: string): boolean => {
    const octets = ip.split('.').map(Number)
    const [a, b, c, d] = octets
    
    return (
      (a === 10) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 127) ||
      (a === 169 && b === 254)
    )
  }

  const calculateSubnet = () => {
    if (!ipAddress || (!subnetMask && !prefixLength)) {
      setIsCalculating(false)
      return
    }

    setIsCalculating(true)
    
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
    }
    
    // Set a timeout to prevent infinite loading
    loadingTimeoutRef.current = setTimeout(() => {
      console.log('Loading timeout reached, clearing loading state')
      setIsCalculating(false)
    }, 3000) // 3 second timeout
    
    setTimeout(() => {
      if (!validateIPAddress(ipAddress, ipVersion)) {
        setResult(null)
        setIsCalculating(false)
        return
      }

      let mask = subnetMask
      let cidr = prefixLength

      if (subnetMask && !prefixLength) {
        // Convert subnet mask to CIDR
        const maskOctets = subnetMask.split('.').map(Number)
        cidr = maskOctets.reduce((acc, octet) => {
          return acc + octet.toString(2).split('1').length - 1
        }, 0).toString()
      } else if (prefixLength && !subnetMask) {
        // Convert CIDR to subnet mask
        const cidrNum = parseInt(cidr)
        const maskNum = (0xFFFFFFFF << (32 - cidrNum)) >>> 0
        mask = [
          (maskNum >>> 24) & 0xFF,
          (maskNum >>> 16) & 0xFF,
          (maskNum >>> 8) & 0xFF,
          maskNum & 0xFF
        ].join('.')
      }

      const ipOctets = ipAddress.split('.').map(Number)
      const maskOctets = mask.split('.').map(Number)
      
      const networkOctets = ipOctets.map((octet, index) => 
        octet & maskOctets[index]
      )
      
      const broadcastOctets = ipOctets.map((octet, index) => 
        octet | (~maskOctets[index] & 0xFF)
      )

      const networkAddress = networkOctets.join('.')
      const broadcastAddress = broadcastOctets.join('.')
      
      const firstHost = [...networkOctets]
      firstHost[3] += 1
      const firstHostAddress = firstHost.join('.')
      
      const lastHost = [...broadcastOctets]
      lastHost[3] -= 1
      const lastHostAddress = lastHost.join('.')
      
      const wildcardMask = maskOctets.map(octet => ~octet & 0xFF).join('.')
      
      const totalHosts = Math.pow(2, 32 - parseInt(cidr))
      const usableHosts = Math.max(0, totalHosts - 2)
      
      const networkClass = getNetworkClass(ipAddress)
      const privateNetwork = isPrivateIP(ipAddress)
      
      const binarySubnetMask = ipToBinary(mask)
      const binaryNetworkAddress = ipToBinary(networkAddress)
      const binaryBroadcastAddress = ipToBinary(broadcastAddress)
      
      const hexNetworkAddress = ipToHex(networkAddress)
      const hexBroadcastAddress = ipToHex(broadcastAddress)
      
      const reverseDNS = `${ipOctets.reverse().join('.')}.in-addr.arpa`
      
      setResult({
        networkAddress,
        broadcastAddress,
        firstHost: firstHostAddress,
        lastHost: lastHostAddress,
        subnetMask: mask,
        wildcardMask,
        networkClass,
        cidrNotation: `/${cidr}`,
        totalHosts,
        usableHosts,
        networkBits: parseInt(cidr),
        hostBits: 32 - parseInt(cidr),
        binarySubnetMask,
        binaryNetworkAddress,
        binaryBroadcastAddress,
        hexNetworkAddress,
        hexBroadcastAddress,
        reverseDNS,
        networkRange: `${firstHostAddress} - ${lastHostAddress}`,
        subnetInfo: {
          network: networkAddress,
          broadcast: broadcastAddress,
          range: `${firstHostAddress} - ${lastHostAddress}`,
          hosts: usableHosts
        },
        advancedInfo: {
          vlsmCapable: parseInt(cidr) >= 24,
          supernettingPossible: parseInt(cidr) <= 16,
          privateNetwork: privateNetwork,
          reservedAddress: ipAddress.startsWith('127.') || ipAddress.startsWith('169.254.'),
          multicastAddress: ipOctets[0] >= 224 && ipOctets[0] <= 239,
          linkLocal: ipAddress.startsWith('169.254.'),
          loopback: ipAddress.startsWith('127.')
        }
      })
      
      setIsCalculating(false)
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
        loadingTimeoutRef.current = null
      }
    }, 600)
  }

  const copyResult = () => {
    if (!result) return

    let text = `IP Subnet Calculator Results:\n`
    text += `IP Address: ${ipAddress}\n`
    text += `Subnet Mask: ${result.subnetMask}\n`
    text += `CIDR Notation: ${result.cidrNotation}\n`
    text += `Network Address: ${result.networkAddress}\n`
    text += `Broadcast Address: ${result.broadcastAddress}\n`
    text += `First Host: ${result.firstHost}\n`
    text += `Last Host: ${result.lastHost}\n`
    text += `Total Hosts: ${result.totalHosts}\n`
    text += `Usable Hosts: ${result.usableHosts}\n`
    text += `Network Class: ${result.networkClass}\n`
    text += `Wildcard Mask: ${result.wildcardMask}\n`
    text += `Reverse DNS: ${result.reverseDNS}\n`

    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const clearForm = () => {
    setIPAddress("")
    setSubnetMask("")
    setPrefixLength("")
    setResult(null)
    setShowAdvanced(false)
    setShowBinary(false)
    setShowHex(false)
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator Card */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Network className="h-5 w-5 text-primary" />
            </div>
            Advanced IP Subnet Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate IPv4 and IPv6 subnets with advanced network analysis and CIDR notation support.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* IP Version Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label className="text-sm font-medium">IP Version</Label>
              <Select value={ipVersion} onValueChange={(value: IPVersion) => {
                setIPVersion(value)
                setHasUserInteracted(true)
                // Clear validation errors when switching IP versions
                setValidationError("")
                setSubnetMaskError("")
                setCidrError("")
                // Clear form when switching versions
                setIPAddress("")
                setSubnetMask("")
                setPrefixLength("")
                setResult(null)
              }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ipv4">IPv4 (32-bit)</SelectItem>
                  <SelectItem value="ipv6">IPv6 (128-bit)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">Calculation Type</Label>
              <Select value={calculationType} onValueChange={(value: CalculationType) => {
                setCalculationType(value)
                setHasUserInteracted(true)
                // Clear results when changing calculation type
                setResult(null)
                setIsCalculating(false)
              }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="subnet">Subnet Calculation</SelectItem>
                  <SelectItem value="supernet">Supernet Calculation</SelectItem>
                  <SelectItem value="vlsm">VLSM (Variable Length)</SelectItem>
                  <SelectItem value="flsm">FLSM (Fixed Length)</SelectItem>
                  <SelectItem value="cidr">CIDR Analysis</SelectItem>
                  <SelectItem value="wildcard">Wildcard Mask</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* IP Address Input */}
          <div>
            <Label htmlFor="ip-address" className="text-sm font-medium">
              IP Address {ipVersion === "ipv4" ? "(e.g., 192.168.1.1)" : "(e.g., 2001:db8::1)"}
              {isDetectingIP && (
                <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Detecting your IP...
                </span>
              )}
            </Label>
            <Input
              id="ip-address"
              type="text"
              value={ipAddress}
              onChange={(e) => {
                const value = e.target.value
                setIPAddress(value)
                setHasUserInteracted(true)
                setIsCalculating(false) // Clear loading state when user types
                
                // Validate and show error message
                const errorMessage = validateAndGetErrorMessage(value, ipVersion)
                setValidationError(errorMessage)
                
                // Clear any pending timeouts
                if (loadingTimeoutRef.current) {
                  clearTimeout(loadingTimeoutRef.current)
                  loadingTimeoutRef.current = null
                }
              }}
              placeholder={isDetectingIP ? "Detecting your IP address..." : (ipVersion === "ipv4" ? "192.168.1.1" : "2001:db8::1")}
              className="mt-1"
              disabled={isDetectingIP}
            />
            {defaultIP && !isDetectingIP && (
              <p className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                <Check className="h-3 w-3" />
                Your IP address has been auto-detected
              </p>
            )}
            {validationError && (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                {validationError}
              </p>
            )}
          </div>

          {/* Subnet Configuration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="subnet-mask" className="text-sm font-medium">Subnet Mask</Label>
              <Input
                id="subnet-mask"
                type="text"
                value={subnetMask}
                onChange={(e) => {
                  const value = e.target.value
                  setSubnetMask(value)
                  setHasUserInteracted(true)
                  setIsCalculating(false) // Clear loading state when user types
                  
                  // Validate subnet mask
                  const errorMessage = validateSubnetMask(value, ipVersion)
                  setSubnetMaskError(errorMessage)
                }}
                placeholder="255.255.255.0"
                className="mt-1"
              />
              {subnetMaskError && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  {subnetMaskError}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="prefix-length" className="text-sm font-medium">CIDR Prefix Length</Label>
              <Input
                id="prefix-length"
                type="number"
                value={prefixLength}
                onChange={(e) => {
                  const value = e.target.value
                  setPrefixLength(value)
                  setHasUserInteracted(true)
                  setIsCalculating(false) // Clear loading state when user types
                  
                  // Validate CIDR
                  const errorMessage = validateCIDR(value, ipVersion)
                  setCidrError(errorMessage)
                }}
                placeholder="24"
                min="0"
                max={ipVersion === "ipv4" ? "32" : "128"}
                className="mt-1"
              />
              {cidrError && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  {cidrError}
                </p>
              )}
            </div>
          </div>

          {/* Advanced Options */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Advanced Options</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showAdvanced ? "Hide" : "Show"} Advanced
              </Button>
            </div>
            
            {showAdvanced && (
              <div className="space-y-4">
                {/* Debug Information */}
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Current State Debug:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><strong>IP Version:</strong> {ipVersion}</div>
                    <div><strong>Calculation Type:</strong> {calculationType}</div>
                    <div><strong>IP Address:</strong> {ipAddress || "Empty"}</div>
                    <div><strong>Subnet Mask:</strong> {subnetMask || "Empty"}</div>
                    <div><strong>CIDR:</strong> {prefixLength || "Empty"}</div>
                    <div><strong>User Interacted:</strong> {hasUserInteracted ? "Yes" : "No"}</div>
                    <div><strong>Has Result:</strong> {result ? "Yes" : "No"}</div>
                    <div><strong>Is Calculating:</strong> {isCalculating ? "Yes" : "No"}</div>
                    <div><strong>IP Error:</strong> {validationError || "None"}</div>
                    <div><strong>Mask Error:</strong> {subnetMaskError || "None"}</div>
                    <div><strong>CIDR Error:</strong> {cidrError || "None"}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="show-binary"
                    checked={showBinary}
                    onChange={(e) => setShowBinary(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-primary rounded"
                  />
                  <Label htmlFor="show-binary" className="text-sm">Show Binary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="show-hex"
                    checked={showHex}
                    onChange={(e) => setShowHex(e.target.checked)}
                    className="form-checkbox h-4 w-4 text-primary rounded"
                  />
                  <Label htmlFor="show-hex" className="text-sm">Show Hexadecimal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="show-reverse-dns"
                    className="form-checkbox h-4 w-4 text-primary rounded"
                    defaultChecked
                  />
                  <Label htmlFor="show-reverse-dns" className="text-sm">Reverse DNS</Label>
                </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button ref={calculateButtonRef} onClick={() => {
              setHasUserInteracted(true)
              calculateSubnet()
            }} disabled={isCalculating || !!validationError || !!subnetMaskError || !!cidrError} className="flex-1">
              {isCalculating ? <LoadingSpinner size="sm" className="mr-2" /> : <Calculator className="mr-2 h-4 w-4" />}
              Calculate Subnet
            </Button>
            <Button variant="outline" onClick={clearForm} className="w-full sm:w-auto">
              Clear
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                console.log('Current State:', {
                  ipAddress,
                  subnetMask,
                  prefixLength,
                  ipVersion,
                  calculationType,
                  validationError,
                  subnetMaskError,
                  cidrError,
                  hasUserInteracted,
                  result: !!result
                })
              }} 
              className="w-full sm:w-auto"
            >
              Debug State
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <Card className="shadow-lg border-primary/20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-primary-800 dark:text-primary-200">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              Subnet Calculation Results
            </CardTitle>
            <CardDescription className="text-base text-primary-700 dark:text-primary-300">
              Complete network analysis and subnet information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Network Address</span>
                </div>
                <div className="text-lg font-bold text-blue-900 dark:text-blue-100 font-mono">
                  {result.networkAddress}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">Broadcast Address</span>
                </div>
                <div className="text-lg font-bold text-green-900 dark:text-green-100 font-mono">
                  {result.broadcastAddress}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Usable Hosts</span>
                </div>
                <div className="text-lg font-bold text-orange-900 dark:text-orange-100">
                  {result.usableHosts.toLocaleString()}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Network Class</span>
                </div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">
                  {result.networkClass}
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Network Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">First Host:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.firstHost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Last Host:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.lastHost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subnet Mask:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.subnetMask}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">CIDR Notation:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.cidrNotation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Wildcard Mask:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.wildcardMask}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Network Statistics
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Hosts:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.totalHosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Network Bits:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.networkBits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Host Bits:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">{result.hostBits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Reverse DNS:</span>
                    <span className="font-mono text-gray-900 dark:text-gray-100 text-xs">{result.reverseDNS}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Information */}
            {showBinary && (
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BinaryIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  Binary Representation
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Network Address:</span>
                    <span className="text-gray-900 dark:text-gray-100">{result.binaryNetworkAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Broadcast Address:</span>
                    <span className="text-gray-900 dark:text-gray-100">{result.binaryBroadcastAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subnet Mask:</span>
                    <span className="text-gray-900 dark:text-gray-100">{result.binarySubnetMask}</span>
                  </div>
                </div>
              </div>
            )}

            {showHex && (
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <HexagonIcon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  Hexadecimal Representation
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Network Address:</span>
                    <span className="text-gray-900 dark:text-gray-100">{result.hexNetworkAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Broadcast Address:</span>
                    <span className="text-gray-900 dark:text-gray-100">{result.hexBroadcastAddress}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Network Analysis */}
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <TargetIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                Advanced Network Analysis
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.privateNetwork ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm">Private Network: {result.advancedInfo.privateNetwork ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.vlsmCapable ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <span className="text-sm">VLSM Capable: {result.advancedInfo.vlsmCapable ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.supernettingPossible ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm">Supernetting: {result.advancedInfo.supernettingPossible ? 'Yes' : 'No'}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.multicastAddress ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                    <span className="text-sm">Multicast: {result.advancedInfo.multicastAddress ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.loopback ? 'bg-purple-500' : 'bg-gray-500'}`}></div>
                    <span className="text-sm">Loopback: {result.advancedInfo.loopback ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${result.advancedInfo.linkLocal ? 'bg-orange-500' : 'bg-gray-500'}`}></div>
                    <span className="text-sm">Link Local: {result.advancedInfo.linkLocal ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button onClick={copyResult} className="flex-1">
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Results
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

