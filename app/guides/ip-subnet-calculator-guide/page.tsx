"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { ArrowRight, CheckCircle, Star, Users, Shield, Zap, Code, Network, Calculator, Target, AlertCircle, BookOpen, ExternalLink, Globe, Hash, Layers, Search, Key, Palette, Hexagon } from "lucide-react"

export default function IPSubnetCalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete IP Subnet Calculator Guide: Master Network Subnetting from Basics to Advanced | FastTools",
    description: "Master IP subnetting with our comprehensive guide. Learn subnet calculation, CIDR notation, VLSM, supernetting, and network design. Includes manual calculation methods and 50+ expert resources.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/ip-subnet-calculator-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630
    },
    mainEntity: {
      "@type": "WebApplication",
      name: "IP Subnet Calculator",
      description: "Advanced IP subnet calculator supporting IPv4/IPv6, CIDR notation, VLSM, supernetting, and comprehensive network analysis",
      url: "https://fasttools.store/tools/ip-subnet-calculator",
      applicationCategory: "NetworkApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      featureList: [
        "IPv4 and IPv6 subnet calculation",
        "CIDR notation support",
        "VLSM and supernetting",
        "Binary and hexadecimal representation",
        "Network security analysis",
        "Real-time validation"
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Network className="h-4 w-4" />
                  <span>Complete IP Subnetting Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                  IP Subnet Calculator Guide: Master Network Subnetting from Basics to Advanced
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Master IP subnetting with our comprehensive guide. Learn subnet calculation, CIDR notation, VLSM, supernetting, 
                  and network design. Includes manual calculation methods and expert resources for students and professionals.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Free Calculator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Network className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Network Focused</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Target className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Accurate Results</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Table of Contents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Link href="#what-is-subnetting" className="block text-primary hover:underline">
                      1. What is IP Subnetting?
                    </Link>
                    <Link href="#subnetting-basics" className="block text-primary hover:underline">
                      2. Subnetting Basics
                    </Link>
                    <Link href="#manual-calculation" className="block text-primary hover:underline">
                      3. Manual Subnet Calculation
                    </Link>
                    <Link href="#cidr-notation" className="block text-primary hover:underline">
                      4. CIDR Notation
                    </Link>
                    <Link href="#vlsm-supernetting" className="block text-primary hover:underline">
                      5. VLSM & Supernetting
                    </Link>
                    <Link href="#ipv4-ipv6" className="block text-primary hover:underline">
                      6. IPv4 vs IPv6
                    </Link>
                    <Link href="#network-design" className="block text-primary hover:underline">
                      7. Network Design
                    </Link>
                    <Link href="#security-considerations" className="block text-primary hover:underline">
                      8. Security Considerations
                    </Link>
                    <Link href="#best-practices" className="block text-primary hover:underline">
                      9. Best Practices
                    </Link>
                    <Link href="#troubleshooting" className="block text-primary hover:underline">
                      10. Troubleshooting
                    </Link>
                    <Link href="#expert-resources" className="block text-primary hover:underline">
                      11. Expert Resources
                    </Link>
                  </nav>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-32" />
              </div>

              {/* What is IP Subnetting */}
              <section id="what-is-subnetting" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Network className="h-8 w-8 text-blue-600" />
                  What is IP Subnetting?
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    IP subnetting is the process of dividing a larger network into smaller, more manageable sub-networks (subnets). 
                    This technique allows network administrators to optimize IP address allocation, improve network performance, 
                    and enhance security by creating logical network segments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Target className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100">Efficient IP Usage</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Optimize IP address allocation by creating subnets that match your actual host requirements, 
                        reducing IP address waste and improving network efficiency.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <Shield className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-green-900 dark:text-green-100">Enhanced Security</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Isolate network segments to contain security breaches, implement access controls, 
                        and create secure zones for sensitive data and applications.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                          <Zap className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-purple-900 dark:text-purple-100">Improved Performance</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Reduce network congestion by limiting broadcast domains, improving routing efficiency, 
                        and enabling better traffic management across network segments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Subnetting Basics */}
              <section id="subnetting-basics" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  Subnetting Basics: Understanding IP Addresses and Subnet Masks
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                    <h3 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">IP Address Structure</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      An IP address consists of two parts: the network portion and the host portion. The subnet mask determines 
                      which bits represent the network and which represent the host.
                    </p>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                      <h4 className="font-semibold mb-4 text-green-900 dark:text-green-100">Example: 192.168.1.100/24</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded">192.168.1.100</span>
                          <span className="text-slate-600 dark:text-slate-400">IP Address</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded">255.255.255.0</span>
                          <span className="text-slate-600 dark:text-slate-400">Subnet Mask</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded">/24</span>
                          <span className="text-slate-600 dark:text-slate-400">CIDR Notation</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold mb-3 text-green-900 dark:text-green-100">Network Portion</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                          The first 24 bits (192.168.1) identify the network
                        </p>
                        <div className="font-mono text-sm bg-green-100 dark:bg-green-900/30 p-3 rounded">
                          11000000.10101000.00000001
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold mb-3 text-green-900 dark:text-green-100">Host Portion</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                          The last 8 bits (100) identify the specific host
                        </p>
                        <div className="font-mono text-sm bg-green-100 dark:bg-green-900/30 p-3 rounded">
                          01100100
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Manual Calculation */}
              <section id="manual-calculation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Calculator className="h-8 w-8 text-orange-600" />
                  Manual Subnet Calculation: Step-by-Step Process
                </h2>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    While our IP subnet calculator automates the process, understanding manual calculation is crucial for 
                    network professionals and students. Here's how to calculate subnets manually:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Step 1: Convert IP Address to Binary</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Example: 192.168.1.100</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>192 = 11000000</div>
                            <div>168 = 10101000</div>
                            <div>1 = 00000001</div>
                            <div>100 = 01100100</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            Binary: 11000000.10101000.00000001.01100100
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Step 2: Apply Subnet Mask</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Subnet Mask: 255.255.255.0 (/24)</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>255 = 11111111</div>
                            <div>255 = 11111111</div>
                            <div>255 = 11111111</div>
                            <div>0 = 00000000</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            Binary: 11111111.11111111.11111111.00000000
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Step 3: Calculate Network Address</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Perform AND operation between IP and subnet mask:</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>IP: 11000000.10101000.00000001.01100100</div>
                            <div>Mask: 11111111.11111111.11111111.00000000</div>
                            <div className="border-t pt-1">Network: 11000000.10101000.00000001.00000000</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            Network Address: 192.168.1.0
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Step 4: Calculate Broadcast Address</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Set all host bits to 1:</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>Network: 11000000.10101000.00000001.00000000</div>
                            <div>Host bits: 00000000.00000000.00000000.11111111</div>
                            <div className="border-t pt-1">Broadcast: 11000000.10101000.00000001.11111111</div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            Broadcast Address: 192.168.1.255
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-100">Step 5: Calculate Usable Host Range</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Usable hosts exclude network and broadcast addresses:</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>First Host: 192.168.1.1</div>
                            <div>Last Host: 192.168.1.254</div>
                            <div>Total Hosts: 2^8 - 2 = 254</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CIDR Notation */}
              <section id="cidr-notation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Hash className="h-8 w-8 text-purple-600" />
                  CIDR Notation: Understanding Classless Inter-Domain Routing
                </h2>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    CIDR (Classless Inter-Domain Routing) notation provides a compact way to represent subnet masks. 
                    It uses a slash followed by the number of network bits to define the subnet.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">/24 (255.255.255.0)</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        Most common subnet mask for small networks
                      </p>
                      <div className="font-mono text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                        254 usable hosts
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">/16 (255.255.0.0)</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        Large networks with many hosts
                      </p>
                      <div className="font-mono text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                        65,534 usable hosts
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">/8 (255.0.0.0)</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        Very large networks or ISP allocations
                      </p>
                      <div className="font-mono text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                        16,777,214 usable hosts
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-100">CIDR Conversion Table</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-purple-200 dark:border-purple-700">
                            <th className="text-left py-2 px-3">CIDR</th>
                            <th className="text-left py-2 px-3">Subnet Mask</th>
                            <th className="text-left py-2 px-3">Host Bits</th>
                            <th className="text-left py-2 px-3">Usable Hosts</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-2">
                          <tr className="border-b border-purple-100 dark:border-purple-800">
                            <td className="py-2 px-3 font-mono">/30</td>
                            <td className="py-2 px-3 font-mono">255.255.255.252</td>
                            <td className="py-2 px-3">2</td>
                            <td className="py-2 px-3">2</td>
                          </tr>
                          <tr className="border-b border-purple-100 dark:border-purple-800">
                            <td className="py-2 px-3 font-mono">/28</td>
                            <td className="py-2 px-3 font-mono">255.255.255.240</td>
                            <td className="py-2 px-3">4</td>
                            <td className="py-2 px-3">14</td>
                          </tr>
                          <tr className="border-b border-purple-100 dark:border-purple-800">
                            <td className="py-2 px-3 font-mono">/24</td>
                            <td className="py-2 px-3 font-mono">255.255.255.0</td>
                            <td className="py-2 px-3">8</td>
                            <td className="py-2 px-3">254</td>
                          </tr>
                          <tr className="border-b border-purple-100 dark:border-purple-800">
                            <td className="py-2 px-3 font-mono">/20</td>
                            <td className="py-2 px-3 font-mono">255.255.240.0</td>
                            <td className="py-2 px-3">12</td>
                            <td className="py-2 px-3">4,094</td>
                          </tr>
                          <tr className="border-b border-purple-100 dark:border-purple-800">
                            <td className="py-2 px-3 font-mono">/16</td>
                            <td className="py-2 px-3 font-mono">255.255.0.0</td>
                            <td className="py-2 px-3">16</td>
                            <td className="py-2 px-3">65,534</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ad Space */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-32" />
              </div>

              {/* VLSM & Supernetting */}
              <section id="vlsm-supernetting" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="h-8 w-8 text-indigo-600" />
                  VLSM & Supernetting: Advanced Subnetting Techniques
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-2xl font-bold mb-4 text-indigo-900 dark:text-indigo-100">Variable Length Subnet Masking (VLSM)</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      VLSM allows you to use different subnet masks for different subnets within the same network, 
                      enabling more efficient IP address allocation.
                    </p>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                      <h4 className="font-semibold mb-4 text-indigo-900 dark:text-indigo-100">VLSM Example: 192.168.1.0/24</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <span className="font-semibold">Sales Department</span>
                          <span className="font-mono text-sm">/26 (62 hosts)</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <span className="font-semibold">Marketing Department</span>
                          <span className="font-mono text-sm">/27 (30 hosts)</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <span className="font-semibold">IT Department</span>
                          <span className="font-mono text-sm">/28 (14 hosts)</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <span className="font-semibold">Point-to-Point Links</span>
                          <span className="font-mono text-sm">/30 (2 hosts)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Supernetting (Route Aggregation)</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      Supernetting combines multiple smaller networks into a larger one, reducing routing table size 
                      and improving network efficiency.
                    </p>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold mb-4 text-blue-900 dark:text-blue-100">Supernetting Example</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Individual Networks:</p>
                          <div className="font-mono text-sm space-y-1">
                            <div>192.168.1.0/24</div>
                            <div>192.168.2.0/24</div>
                            <div>192.168.3.0/24</div>
                            <div>192.168.4.0/24</div>
                          </div>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">Supernetted Network:</p>
                          <div className="font-mono text-sm font-semibold">192.168.0.0/22</div>
                          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                            Combines 4 /24 networks into 1 /22 network
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* IPv4 vs IPv6 */}
              <section id="ipv4-ipv6" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="h-8 w-8 text-teal-600" />
                  IPv4 vs IPv6: Understanding the Differences
                </h2>
                
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-teal-200 dark:border-teal-800">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold mb-4 text-teal-900 dark:text-teal-100">IPv4 (Internet Protocol Version 4)</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">32-bit address space</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">4.3 billion addresses</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Dotted decimal notation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Example: 192.168.1.1</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Subnet masks: /0 to /32</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold mb-4 text-teal-900 dark:text-teal-100">IPv6 (Internet Protocol Version 6)</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">128-bit address space</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">340 undecillion addresses</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">Hexadecimal notation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">Example: 2001:db8::1</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          <span className="text-sm">Prefix lengths: /0 to /128</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-white dark:bg-slate-800 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                    <h3 className="text-xl font-bold mb-4 text-teal-900 dark:text-teal-100">IPv6 Subnetting Example</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">IPv6 Address: 2001:db8:1234:5678::/64</p>
                        <div className="font-mono text-sm space-y-1">
                          <div>Network: 2001:db8:1234:5678::</div>
                          <div>First Host: 2001:db8:1234:5678::1</div>
                          <div>Last Host: 2001:db8:1234:5678::ffff:ffff:ffff:ffff</div>
                          <div>Total Hosts: 2^64 = 18,446,744,073,709,551,616</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Network Design */}
              <section id="network-design" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-red-600" />
                  Network Design: Planning Your Subnet Architecture
                </h2>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-red-200 dark:border-red-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    Effective network design requires careful planning of subnet architecture. Consider current needs, 
                    future growth, security requirements, and management simplicity.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <Users className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-red-900 dark:text-red-100">User Requirements</h3>
                      </div>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                        <li>• Current host count</li>
                        <li>• Expected growth rate</li>
                        <li>• Application requirements</li>
                        <li>• Performance needs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-red-900 dark:text-red-100">Security Zones</h3>
                      </div>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                        <li>• DMZ networks</li>
                        <li>• Internal networks</li>
                        <li>• Management networks</li>
                        <li>• Guest networks</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <Zap className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-red-900 dark:text-red-100">Performance</h3>
                      </div>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                        <li>• Broadcast domain size</li>
                        <li>• Routing efficiency</li>
                        <li>• Traffic patterns</li>
                        <li>• QoS requirements</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">Sample Network Design</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">Core Infrastructure</h4>
                          <div className="font-mono text-sm space-y-1">
                            <div>10.0.0.0/8 - Management</div>
                            <div>10.1.0.0/16 - Servers</div>
                            <div>10.2.0.0/16 - Network Equipment</div>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <h4 className="font-semibold mb-2 text-red-900 dark:text-red-100">User Networks</h4>
                          <div className="font-mono text-sm space-y-1">
                            <div>192.168.1.0/24 - Sales</div>
                            <div>192.168.2.0/24 - Marketing</div>
                            <div>192.168.3.0/24 - IT</div>
                            <div>192.168.4.0/24 - Guest</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Considerations */}
              <section id="security-considerations" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  Security Considerations: Protecting Your Network
                </h2>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    Proper subnetting enhances network security by creating logical boundaries, enabling access controls, 
                    and isolating sensitive systems from potential threats.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Network Segmentation</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Isolate critical systems</li>
                          <li>• Separate user and server networks</li>
                          <li>• Create DMZ for public services</li>
                          <li>• Implement guest network isolation</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Access Control</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Implement VLANs for logical separation</li>
                          <li>• Use ACLs to control traffic flow</li>
                          <li>• Apply firewall rules between subnets</li>
                          <li>• Monitor inter-subnet communication</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Threat Containment</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Limit blast radius of attacks</li>
                          <li>• Isolate compromised systems</li>
                          <li>• Implement network monitoring</li>
                          <li>• Use intrusion detection systems</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-green-200 dark:border-green-700">
                        <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Compliance</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Meet regulatory requirements</li>
                          <li>• Implement data classification</li>
                          <li>• Ensure audit trail capabilities</li>
                          <li>• Maintain security documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-600" />
                  Best Practices: Optimizing Your Subnet Design
                </h2>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">Planning Phase</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Document current and future requirements</li>
                          <li>• Plan for 20-30% growth</li>
                          <li>• Use consistent subnet sizes where possible</li>
                          <li>• Reserve IP ranges for future use</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">Implementation</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Start with largest subnets first</li>
                          <li>• Use VLSM for efficient allocation</li>
                          <li>• Implement gradually to minimize disruption</li>
                          <li>• Test thoroughly before full deployment</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">Management</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Maintain detailed IP documentation</li>
                          <li>• Use IPAM tools for tracking</li>
                          <li>• Monitor subnet utilization</li>
                          <li>• Regular network audits</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                        <h3 className="text-xl font-bold mb-4 text-yellow-900 dark:text-yellow-100">Troubleshooting</h3>
                        <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                          <li>• Keep network diagrams updated</li>
                          <li>• Document all changes</li>
                          <li>• Use consistent naming conventions</li>
                          <li>• Implement monitoring and alerting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                  Troubleshooting: Common Subnetting Issues
                </h2>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-red-200 dark:border-red-800">
                  <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">Common Problems and Solutions</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Hosts Can't Communicate</h4>
                          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 ml-4">
                            <li>• Check if hosts are in the same subnet</li>
                            <li>• Verify subnet mask configuration</li>
                            <li>• Ensure default gateway is correct</li>
                            <li>• Check for IP address conflicts</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Routing Issues</h4>
                          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 ml-4">
                            <li>• Verify route table entries</li>
                            <li>• Check for overlapping subnets</li>
                            <li>• Ensure proper supernetting</li>
                            <li>• Validate next-hop addresses</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">IP Address Exhaustion</h4>
                          <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 ml-4">
                            <li>• Implement VLSM for better efficiency</li>
                            <li>• Consider IPv6 migration</li>
                            <li>• Use NAT for private networks</li>
                            <li>• Reclaim unused IP addresses</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">Diagnostic Commands</h3>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Windows Commands</h4>
                          <div className="font-mono text-sm space-y-1">
                            <div>ipconfig /all</div>
                            <div>ping [destination]</div>
                            <div>tracert [destination]</div>
                            <div>route print</div>
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Linux Commands</h4>
                          <div className="font-mono text-sm space-y-1">
                            <div>ip addr show</div>
                            <div>ping [destination]</div>
                            <div>traceroute [destination]</div>
                            <div>ip route show</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Expert Resources */}
              <section id="expert-resources" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <ExternalLink className="h-8 w-8 text-blue-600" />
                  Expert Resources: 50+ Top Networking References
                </h2>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    Enhance your subnetting knowledge with these expert resources from top networking authorities, 
                    educational institutions, and industry leaders.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Official Documentation & Standards</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://tools.ietf.org/html/rfc950" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            RFC 950 - Internet Standard Subnetting Procedure
                          </a>
                          <a href="https://tools.ietf.org/html/rfc1878" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            RFC 1878 - Variable Length Subnet Table
                          </a>
                          <a href="https://tools.ietf.org/html/rfc4632" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            RFC 4632 - Classless Inter-domain Routing (CIDR)
                          </a>
                          <a href="https://tools.ietf.org/html/rfc4291" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            RFC 4291 - IP Version 6 Addressing Architecture
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.iana.org/assignments/ipv4-address-space/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            IANA IPv4 Address Space Registry
                          </a>
                          <a href="https://www.iana.org/assignments/ipv6-address-space/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            IANA IPv6 Address Space Registry
                          </a>
                          <a href="https://www.iana.org/assignments/ipv6-unicast-address-assignments/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            IANA IPv6 Unicast Address Assignments
                          </a>
                          <a href="https://www.iana.org/assignments/ipv4-recovered-address-space/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            IANA IPv4 Recovered Address Space
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Industry Leaders & Vendors</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Cisco - Understanding IP Addressing and Subnetting
                          </a>
                          <a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-4.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Cisco - Subnetting Examples
                          </a>
                          <a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-5.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Cisco - VLSM Design Guide
                          </a>
                          <a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-6.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Cisco - IPv6 Addressing Guide
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.juniper.net/documentation/en_US/junos/topics/concept/ipv6-address-types-overview.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Juniper - IPv6 Address Types Overview
                          </a>
                          <a href="https://www.juniper.net/documentation/en_US/junos/topics/concept/ipv4-address-types-overview.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Juniper - IPv4 Address Types Overview
                          </a>
                          <a href="https://www.arista.com/en/um-eos/eos-section-4-2-ip-addressing-and-subnetting" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Arista - IP Addressing and Subnetting
                          </a>
                          <a href="https://www.hpe.com/us/en/servers/networking.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            HPE - Networking Solutions
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Educational Resources</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://www.geeksforgeeks.org/introduction-of-subnetting/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            GeeksforGeeks - Introduction to Subnetting
                          </a>
                          <a href="https://www.geeksforgeeks.org/subnetting-in-computer-networks/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            GeeksforGeeks - Subnetting in Computer Networks
                          </a>
                          <a href="https://www.geeksforgeeks.org/variable-length-subnet-mask-vlsm/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            GeeksforGeeks - Variable Length Subnet Mask (VLSM)
                          </a>
                          <a href="https://www.geeksforgeeks.org/ipv6-addressing/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            GeeksforGeeks - IPv6 Addressing
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.tutorialspoint.com/ipv4/ipv4_subnetting.htm" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            TutorialsPoint - IPv4 Subnetting
                          </a>
                          <a href="https://www.tutorialspoint.com/ipv6/ipv6_subnetting.htm" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            TutorialsPoint - IPv6 Subnetting
                          </a>
                          <a href="https://www.studytonight.com/computer-networks/subnetting" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            StudyTonight - Subnetting
                          </a>
                          <a href="https://www.javatpoint.com/ipv4-subnetting" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            JavaTpoint - IPv4 Subnetting
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Professional Networks & Communities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://www.networkworld.com/article/2225422/subnetting-made-easy.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Network World - Subnetting Made Easy
                          </a>
                          <a href="https://www.techtarget.com/searchnetworking/definition/subnetting" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            TechTarget - Subnetting Definition
                          </a>
                          <a href="https://www.comparitech.com/net-admin/subnetting-guide/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Comparitech - Subnetting Guide
                          </a>
                          <a href="https://www.lifewire.com/subnetting-basics-818385" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Lifewire - Subnetting Basics
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.reddit.com/r/networking/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Reddit - r/networking Community
                          </a>
                          <a href="https://www.reddit.com/r/ccna/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Reddit - r/ccna Community
                          </a>
                          <a href="https://www.reddit.com/r/ccnp/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Reddit - r/ccnp Community
                          </a>
                          <a href="https://www.reddit.com/r/ipv6/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Reddit - r/ipv6 Community
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Practice & Certification Resources</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://www.subnettingpractice.com/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            SubnettingPractice.com - Practice Exercises
                          </a>
                          <a href="https://www.subnetting.net/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Subnetting.net - Practice Tests
                          </a>
                          <a href="https://www.9tut.com/subnetting-tutorial" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            9Tut - Subnetting Tutorial
                          </a>
                          <a href="https://www.certbros.com/subnetting/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            CertBros - Subnetting Guide
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.cybrary.it/course/ccna/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Cybrary - CCNA Course
                          </a>
                          <a href="https://www.udemy.com/topic/subnetting/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Udemy - Subnetting Courses
                          </a>
                          <a href="https://www.coursera.org/learn/computer-networking" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Coursera - Computer Networking Course
                          </a>
                          <a href="https://www.edx.org/learn/networking" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            edX - Networking Courses
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Tools & Calculators</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <a href="https://www.subnet-calculator.com/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Subnet-Calculator.com - Online Calculator
                          </a>
                          <a href="https://www.calculator.net/ip-subnet-calculator.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Calculator.net - IP Subnet Calculator
                          </a>
                          <a href="https://www.subnetting.org/" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Subnetting.org - Calculator & Guide
                          </a>
                          <a href="https://www.whatismyipaddress.com/subnet-calculator" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            WhatIsMyIPAddress - Subnet Calculator
                          </a>
                        </div>
                        <div className="space-y-2">
                          <a href="https://www.solarwinds.com/free-tools/advanced-subnet-calculator" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            SolarWinds - Advanced Subnet Calculator
                          </a>
                          <a href="https://www.manageengine.com/products/oputils/subnet-calculator.html" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            ManageEngine - Subnet Calculator
                          </a>
                          <a href="https://www.paessler.com/tools/subnet-calculator" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            Paessler - Subnet Calculator
                          </a>
                          <a href="https://www.dnsstuff.com/subnet-calculator" className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                            DNSstuff - Subnet Calculator
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Master IP Subnetting?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Use our free IP subnet calculator to practice subnetting and verify your calculations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/tools/ip-subnet-calculator">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                        <Calculator className="mr-2 h-5 w-5" />
                        Try IP Subnet Calculator
                      </Button>
                    </Link>
                    <Link href="/tools">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                        <ArrowRight className="mr-2 h-5 w-5" />
                        Explore More Tools
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="sticky top-4 space-y-6">
                {/* Quick Access */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Access</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/tools/ip-subnet-calculator" className="block">
                      <Button className="w-full justify-start" variant="outline">
                        <Calculator className="mr-2 h-4 w-4" />
                        IP Subnet Calculator
                      </Button>
                    </Link>
                    <Link href="/dev-tools" className="block">
                      <Button className="w-full justify-start" variant="outline">
                        <Code className="mr-2 h-4 w-4" />
                        Developer Tools
                      </Button>
                    </Link>
                    <Link href="/tools" className="block">
                      <Button className="w-full justify-start" variant="outline">
                        <Target className="mr-2 h-4 w-4" />
                        All Tools
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Ad Space */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Network className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Sponsored</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                      <AdSpace slot="sidebar" className="w-full h-48" />
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">IPv4 & IPv6 Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">CIDR Notation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">VLSM & Supernetting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Binary & Hex View</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Real-time Validation</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Tools */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/dev-tools/hex-to-rgb" className="block">
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Hexagon className="mr-2 h-4 w-4" />
                        Hex to RGB Converter
                      </Button>
                    </Link>
                    <Link href="/dev-tools/color-palette" className="block">
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Palette className="mr-2 h-4 w-4" />
                        Color Palette Generator
                      </Button>
                    </Link>
                    <Link href="/dev-tools/regex-tester" className="block">
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Search className="mr-2 h-4 w-4" />
                        Regex Tester
                      </Button>
                    </Link>
                    <Link href="/dev-tools/jwt-decoder" className="block">
                      <Button className="w-full justify-start" variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        JWT Decoder
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
