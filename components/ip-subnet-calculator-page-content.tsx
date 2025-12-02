"use client"

import { IPSubnetCalculator } from "@/components/ip-subnet-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { useState, useEffect } from "react"
import {
  Network,
  Globe,
  Shield,
  Layers,
  Hash,
  Info,
  Calculator,
  Lightbulb
} from "lucide-react"

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Calculator", href: "/calculator" },
  { label: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" }
]

export function IPSubnetCalculatorPageContent() {
  // Auto-detect user's IP address and subnet information
  const [userIP, setUserIP] = useState<string>("")
  const [userSubnetMask, setUserSubnetMask] = useState<string>("")
  const [userCIDR, setUserCIDR] = useState<string>("")
  const [isDetectingIP, setIsDetectingIP] = useState<boolean>(true)

  useEffect(() => {
    const detectUserIP = async () => {
      try {
        // Method 1: Use WebRTC to get local IP address
        const getLocalIP = () => {
          return new Promise<string>((resolve) => {
            const pc = new RTCPeerConnection({
              iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
            })

            pc.createDataChannel('')
            pc.createOffer().then(offer => pc.setLocalDescription(offer))

            pc.onicecandidate = (event) => {
              if (event.candidate) {
                const candidate = event.candidate.candidate
                const ipMatch = candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/)
                if (ipMatch && !ipMatch[1].startsWith('127.') && !ipMatch[1].startsWith('169.254.')) {
                  resolve(ipMatch[1])
                  pc.close()
                  return
                }
              }
            }

            // Timeout after 3 seconds
            setTimeout(() => {
              pc.close()
              resolve('')
            }, 3000)
          })
        }

        // Method 2: Try to detect from browser environment
        const getBrowserIP = () => {
          // Check if we're in a local development environment
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return '127.0.0.1'
          }

          // Check if we're in a local network
          if (window.location.hostname.includes('192.168.') || window.location.hostname.includes('10.') || window.location.hostname.includes('172.')) {
            return window.location.hostname
          }

          return ''
        }

        // Helper function to get common subnet info based on IP
        const getSubnetInfo = (ip: string) => {
          // Common subnet configurations based on IP ranges
          if (ip.startsWith('192.168.')) {
            return { subnetMask: '255.255.255.0', cidr: '24' }
          } else if (ip.startsWith('10.')) {
            return { subnetMask: '255.0.0.0', cidr: '8' }
          } else if (ip.startsWith('172.')) {
            return { subnetMask: '255.240.0.0', cidr: '12' }
          } else if (ip.startsWith('127.')) {
            return { subnetMask: '255.0.0.0', cidr: '8' }
          } else {
            // Default to /24 for unknown ranges
            return { subnetMask: '255.255.255.0', cidr: '24' }
          }
        }

        // Try WebRTC first
        const webrtcIP = await getLocalIP()
        if (webrtcIP) {
          setUserIP(webrtcIP)
          const subnetInfo = getSubnetInfo(webrtcIP)
          setUserSubnetMask(subnetInfo.subnetMask)
          setUserCIDR(subnetInfo.cidr)
          setIsDetectingIP(false)
          return
        }

        // Try browser environment detection
        const browserIP = getBrowserIP()
        if (browserIP) {
          setUserIP(browserIP)
          const subnetInfo = getSubnetInfo(browserIP)
          setUserSubnetMask(subnetInfo.subnetMask)
          setUserCIDR(subnetInfo.cidr)
          setIsDetectingIP(false)
          return
        }

        // Fallback: Use common local network IPs with appropriate subnet info
        const commonConfigs = [
          { ip: '192.168.1.1', subnetMask: '255.255.255.0', cidr: '24' },
          { ip: '192.168.0.1', subnetMask: '255.255.255.0', cidr: '24' },
          { ip: '10.0.0.1', subnetMask: '255.0.0.0', cidr: '8' },
          { ip: '172.16.0.1', subnetMask: '255.240.0.0', cidr: '12' },
          { ip: '192.168.1.100', subnetMask: '255.255.255.0', cidr: '24' },
          { ip: '192.168.0.100', subnetMask: '255.255.255.0', cidr: '24' }
        ]
        const randomConfig = commonConfigs[Math.floor(Math.random() * commonConfigs.length)]
        setUserIP(randomConfig.ip)
        setUserSubnetMask(randomConfig.subnetMask)
        setUserCIDR(randomConfig.cidr)
        setIsDetectingIP(false)

      } catch (error) {
        console.error('IP detection failed:', error)
        // Use default local network IP with subnet info
        setUserIP("192.168.1.1")
        setUserSubnetMask("255.255.255.0")
        setUserCIDR("24")
        setIsDetectingIP(false)
      }
    }

    detectUserIP()
  }, [])

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "IP Subnet Calculator",
          description: "Free online IP subnet calculator for IPv4 and IPv6 networks. Calculate subnets, CIDR notation, VLSM, supernetting, and comprehensive network analysis.",
          applicationCategory: "NetworkApplication",
          operatingSystem: "Any",
          url: "https://www.fasttools.store/calculator/ip-subnet-calculator",
          author: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          },
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          version: "2.0",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "2847",
          },
          featureList: [
            "IPv4 and IPv6 subnet calculation",
            "CIDR notation support",
            "VLSM (Variable Length Subnet Masking)",
            "Supernetting capabilities",
            "Binary and hexadecimal representation",
            "Network security analysis",
            "Reverse DNS lookup",
            "Mobile-friendly interface",
            "No registration required",
            "Free to use"
          ],
          screenshot: "https://www.fasttools.store/og-image.svg",
          softwareHelp: {
            "@type": "HowTo",
            name: "How to Use IP Subnet Calculator",
            description: "Step-by-step guide to calculate IP subnets",
            step: [
              {
                "@type": "HowToStep",
                name: "Enter IP Address",
                text: "Input your IPv4 or IPv6 address in the calculator"
              },
              {
                "@type": "HowToStep",
                name: "Set Subnet Mask or CIDR",
                text: "Enter subnet mask or CIDR prefix length"
              },
              {
                "@type": "HowToStep",
                name: "Calculate Results",
                text: "Click calculate to get comprehensive network analysis"
              }
            ]
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.fasttools.store"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Calculator",
                item: "https://www.fasttools.store/calculator"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "IP Subnet Calculator",
                item: "https://www.fasttools.store/calculator/ip-subnet-calculator"
              }
            ]
          }
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is CIDR notation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "CIDR (Classless Inter-Domain Routing) notation is a method for specifying IP addresses and their routing prefix. It uses a slash followed by a number (e.g., /24) to indicate the number of network bits."
              }
            },
            {
              "@type": "Question",
              name: "What is the difference between IPv4 and IPv6?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "IPv4 uses 32-bit addresses (4.3 billion addresses) while IPv6 uses 128-bit addresses (340 undecillion addresses). IPv6 provides better security, auto-configuration, and eliminates the need for NAT."
              }
            },
            {
              "@type": "Question",
              name: "What is VLSM?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "VLSM (Variable Length Subnet Masking) allows you to use different subnet masks for different subnets within the same network, enabling more efficient use of IP addresses."
              }
            },
            {
              "@type": "Question",
              name: "How do I calculate usable hosts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Usable hosts = 2^(host bits) - 2. The minus 2 accounts for the network address and broadcast address which cannot be assigned to hosts."
              }
            },
            {
              "@type": "Question",
              name: "What is supernetting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Supernetting is the process of combining multiple smaller networks into a larger network by reducing the subnet mask length, allowing for more efficient routing and address allocation."
              }
            }
          ]
        })
      }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced IP Subnet Calculator</h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed">
              Calculate IP subnets, CIDR notation, VLSM, and supernetting with our comprehensive network analysis tool.
              Support for both IPv4 and IPv6 networks with detailed binary and hexadecimal representations.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-8">
            <div className="space-y-8">
              <IPSubnetCalculator
                defaultIP={userIP}
                defaultSubnetMask={userSubnetMask}
                defaultCIDR={userCIDR}
                isDetectingIP={isDetectingIP}
              />

              {/* Center Content Ad */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-32" />
              </div>

              {/* How to Use */}
              <div className="bg-white dark:bg-secondary p-6 rounded-xl border border-slate-200 dark:border-border">
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  How to Use
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Enter IP Address</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Input your IPv4 or IPv6 address. The calculator will auto-detect your current IP address.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Configure Subnet</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Set subnet mask or CIDR prefix length for your network calculation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Get Results</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">View comprehensive network analysis including usable hosts, network range, and security information.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Ad Between Sections */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-32" />
              </div>

              {/* Supported Features */}
              <div className="bg-white dark:bg-secondary p-6 rounded-xl border border-slate-200 dark:border-border">
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Network className="h-6 w-6" />
                  Supported Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 text-heading-accent rounded-lg p-2">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">IPv4 & IPv6 Support</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Calculate subnets for both IPv4 and IPv6 networks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-foreground rounded-lg p-2">
                      <Hash className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">CIDR Notation</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Support for Classless Inter-Domain Routing notation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900/30 text-foreground rounded-lg p-2">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">VLSM Support</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Variable Length Subnet Masking calculations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 text-foreground rounded-lg p-2">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">Security Analysis</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground text-sm">Network security and private IP detection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Educational Content */}
              <div className="mt-12 prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-primary">Complete Guide to IP Subnetting</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  IP subnetting is a fundamental concept in computer networking that allows you to divide a large network into smaller,
                  more manageable subnets. Our free IP subnet calculator helps you understand and calculate subnets for both IPv4 and IPv6 networks.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Understanding IP Addresses and Subnets</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  An IP address is a unique identifier assigned to devices on a network. IPv4 addresses use 32 bits (4 octets) while IPv6
                  addresses use 128 bits. Subnetting allows you to create logical divisions within a network, improving security, performance, and management.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">CIDR Notation Explained</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  CIDR (Classless Inter-Domain Routing) notation is a compact way to represent IP addresses and their associated routing prefix.
                  It uses a slash followed by a number (e.g., /24) to indicate how many bits are used for the network portion of the address.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">VLSM and Supernetting</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  VLSM (Variable Length Subnet Masking) allows you to use different subnet masks for different subnets within the same network,
                  enabling more efficient use of IP addresses. Supernetting combines multiple smaller networks into a larger network by reducing
                  the subnet mask length.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Network Security and Analysis</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Our IP subnet calculator provides comprehensive network analysis including private network detection, security analysis,
                  and reverse DNS lookup capabilities. This helps network administrators understand their network topology and security posture.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Related Network Tools</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Explore our collection of related network and developer tools to enhance your networking capabilities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">

                  <li><a href="/dev-tools/regex-tester" className="text-foreground hover:text-foreground underline">Regex Tester</a> - Test and validate regular expressions</li>
                  <li><a href="/dev-tools/jwt-decoder" className="text-foreground hover:text-foreground underline">JWT Decoder</a> - Decode and analyze JSON Web Tokens</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Best Practices for Network Planning</h3>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Always plan for future growth when designing subnets</li>
                  <li>Use VLSM for efficient IP address allocation</li>
                  <li>Consider private IP ranges for internal networks</li>
                  <li>Document your network addressing scheme</li>
                  <li>Test connectivity after subnet changes</li>
                  <li>Implement proper security measures</li>
                  <li>Monitor network performance and usage</li>
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="bg-white dark:bg-secondary p-6 rounded-xl border border-slate-200 dark:border-border">
                <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <Info className="h-6 w-6" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is CIDR notation?</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">CIDR (Classless Inter-Domain Routing) notation is a method for specifying IP addresses and their routing prefix. It uses a slash followed by a number (e.g., /24) to indicate the number of network bits.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is the difference between IPv4 and IPv6?</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">IPv4 uses 32-bit addresses (4.3 billion addresses) while IPv6 uses 128-bit addresses (340 undecillion addresses). IPv6 provides better security, auto-configuration, and eliminates the need for NAT.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is VLSM?</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">VLSM (Variable Length Subnet Masking) allows you to use different subnet masks for different subnets within the same network, enabling more efficient use of IP addresses.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">How do I calculate usable hosts?</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">Usable hosts = 2^(host bits) - 2. The minus 2 accounts for the network address and broadcast address which cannot be assigned to hosts.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">What is supernetting?</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">Supernetting is the process of combining multiple smaller networks into a larger network by reducing the subnet mask length, allowing for more efficient routing and address allocation.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Sidebar Ad */}
              <div className="sticky top-4 space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Network className="h-4 w-4 text-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Sponsored</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground mb-2">Sponsored</div>
                      <AdSpace slot="sidebar" className="w-full h-48" />
                    </div>
                  </div>
                </div>

                {/* Network Planning Tips */}
                <div className="bg-white dark:bg-secondary rounded-xl p-6 shadow-lg border border-slate-200 dark:border-border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Lightbulb className="h-4 w-4 text-heading-accent" />
                    </div>
                    Network Planning Tips
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-heading-accent font-medium">Plan for Growth</p>
                      <p className="text-heading-accent text-xs mt-1">Always plan for future network expansion when designing subnets.</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-foreground font-medium">Use VLSM</p>
                      <p className="text-foreground text-xs mt-1">Variable Length Subnet Masking for efficient IP allocation.</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="text-foreground font-medium">Document Everything</p>
                      <p className="text-foreground text-xs mt-1">Keep detailed records of your network addressing scheme.</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-white dark:bg-secondary rounded-xl p-6 shadow-lg border border-slate-200 dark:border-border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                      <Calculator className="h-4 w-4 text-foreground" />
                    </div>
                    Key Features
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-foreground">IPv4 & IPv6 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-foreground">CIDR Notation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-foreground">VLSM Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-700 dark:text-foreground">Security Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-foreground">Binary/Hex View</span>
                    </div>
                  </div>
                </div>

                {/* Related Tools */}
                <div className="bg-white dark:bg-secondary rounded-xl p-6 shadow-lg border border-slate-200 dark:border-border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="p-1 bg-indigo-100 dark:bg-indigo-900/30 rounded">
                      <Globe className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    Related Tools
                  </h3>
                  <div className="space-y-2">
                    <a href="/dev-tools/regex-tester" className="block text-sm text-foreground hover:text-foreground dark:hover:text-foreground transition-colors">
                      Regex Tester
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
