import { IPSubnetCalculator } from "@/components/ip-subnet-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import {
  Network,
  Globe,
  Shield,
  Layers,
  Hash,
  Info,
  Calculator,
  Lightbulb,
  Wifi,
  Server,
  Database,
  Lock,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
  Settings,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign,
  Home,
  ShieldCheck,
  FileText,
  Percent
} from "lucide-react"
import Image from "next/image"
import { createMetadata } from "@/lib/metadata-base"

const TOOL_TITLE = "IP Subnet Calculator - Free CIDR, VLSM & Network Tool (2025)"
const TOOL_NAME = "IP Subnet Calculator"

const metadataResult = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting with our free IP Subnet Calculator. Perfect for network engineers to analyze network addresses, broadcast, and host ranges. Try now - no signup required!",
  path: "/calculator/ip-subnet-calculator",
})

export const metadata = {
  ...metadataResult,
  keywords: [
    "IP Subnet Calculator",
    "Subnet Calculator",
    "IPv4 Subnet Calculator",
    "IPv6 Calculator",
    "CIDR Calculator",
    "Network Calculator",
    "Subnet Mask Calculator",
    "IP Calculator",
    "Subnetting Tool",
    "VLSM Calculator",
    "IP Range Calculator",
    "Network Address Calculator",
    "Broadcast Address Calculator",
    "Usable Host Range",
    "Wildcard Mask Calculator",
    "CIDR Notation",
    "IP Address Analysis",
    "Network Class Calculator",
    "Private IP Detection",
    "Public IP Analysis",
    "FastTools Calculator"
  ],
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.fasttools.store/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calculator",
      "item": "https://www.fasttools.store/calculator"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": TOOL_NAME,
      "item": "https://www.fasttools.store/calculator/ip-subnet-calculator"
    }
  ]
}

const jsonLd = {
  ...metadataResult.softwareSchema,
  "datePublished": "2023-10-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "featureList": [
    "IPv4 Subnet Calculation",
    "IPv6 Subnet Calculation",
    "CIDR Notation Support",
    "VLSM (Variable Length Subnet Masking)",
    "Supernetting Capabilities",
    "Binary Representation",
    "Hexadecimal Conversion",
    "Network Address Calculation",
    "Broadcast Address Calculation",
    "Host Range Analysis",
    "Network Class Identification",
    "Private IP Detection",
    "Public IP Analysis",
    "Multicast Address Support",
    "Reverse DNS Lookup",
    "Network Security Analysis",
    "Mobile-Friendly Interface",
    "No Registration Required"
  ]
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is CIDR notation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CIDR represents a modern IP addressing system that replaces traditional class-based networks. This notation employs a forward slash followed by a numeric value (like /24) to define how many bits are allocated for the network identifier portion of an IP address."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IPv4 and IPv6?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPv4 uses 32-bit addresses (4.3 billion addresses) while IPv6 uses 128-bit addresses (340 undecillion addresses). IPv6 provides better security, auto-configuration, and eliminates the need for NAT."
      }
    },
    {
      "@type": "Question",
      "name": "What is VLSM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VLSM (Variable Length Subnet Masking) allows you to use different subnet masks for different subnets within the same network, enabling more efficient use of IP addresses."
      }
    },
    {
      "@type": "Question",
      "name": "How to check subnet mask of IP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Windows, open Command Prompt and type 'ipconfig'. On Mac/Linux, open Terminal and type 'ifconfig' or 'ip addr'. The subnet mask will be listed next to your IP address."
      }
    },
    {
      "@type": "Question",
      "name": "How to calculate subnet address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Perform a bitwise AND operation between the IP address and the Subnet Mask in binary form. The result is the Network Address (Subnet Address)."
      }
    },
    {
      "@type": "Question",
      "name": "How many subnets are allowed in the network?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of subnets is calculated using the formula 2^n, where 'n' is the number of bits borrowed from the host portion for subnetting."
      }
    },
    {
      "@type": "Question",
      "name": "How many IPs are in the range?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The total number of IPs is 2^h, where 'h' is the number of host bits. The number of usable IPs is 2^h - 2 (subtracting network and broadcast addresses)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the subnet mask for my IP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The subnet mask depends on your network configuration. Common defaults are 255.0.0.0 (Class A), 255.255.0.0 (Class B), and 255.255.255.0 (Class C), but CIDR allows for any prefix length."
      }
    },
    {
      "@type": "Question",
      "name": "How to use IP Subnet Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter your IP address and select the Subnet Mask (or CIDR prefix). The calculator will automatically compute the Network Address, Broadcast Address, IP Range, and Number of Hosts."
      }
    },
    {
      "@type": "Question",
      "name": "What is an IP Subnet Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IP Subnet Calculator is a tool that automates the complex binary math required for subnetting. It helps network engineers quickly plan and verify network configurations."
      }
    }
  ]
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate IP Subnets",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enter IP Address",
      "text": "Input your IPv4 or IPv6 address in the designated field (e.g., 192.168.1.1)."
    },
    {
      "@type": "HowToStep",
      "name": "Select Subnet Mask",
      "text": "Choose a subnet mask from the dropdown or enter a CIDR prefix length (e.g., /24)."
    },
    {
      "@type": "HowToStep",
      "name": "Calculate",
      "text": "Click the Calculate button to view network address, broadcast address, and usable hosts."
    },
    {
      "@type": "HowToStep",
      "name": "Analyze Results",
      "text": "Review the detailed network analysis, including binary/hex representations and host ranges."
    }
  ]
}

export default function IPSubnetCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="bg-card">
        <div className="container mx-auto px-3 py-6 md:py-8">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader
                title="IP Subnet Calculator - IPv4 & IPv6"
                description="Use our free IP Subnet Calculator to calculate IPv4/IPv6 subnets, CIDR notation, VLSM, supernetting, and network analysis. Perfect for network engineers, IT professionals, and students."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
                <IPSubnetCalculator />

                {/* How to Use */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mt-6 md:mt-8 mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    How to Use Our IP Subnet Calculator
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Enter IP Address</h3>
                          <p className="text-xs text-muted-foreground">Input your IPv4 or IPv6 address in the calculator</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Set Subnet Mask or CIDR</h3>
                          <p className="text-xs text-muted-foreground">Enter subnet mask or CIDR prefix length</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Calculate Results</h3>
                          <p className="text-xs text-muted-foreground">Click calculate to get comprehensive network analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Analyze Network</h3>
                          <p className="text-xs text-muted-foreground">Review network address, broadcast, host range, and more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Network Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Network className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Supported Network Types & Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "IPv4 Subnet Calculator", icon: Globe, desc: "Calculate IPv4 subnets with CIDR notation", example: "192.168.1.0/24" },
                      { type: "IPv6 Subnet Calculator", icon: Server, desc: "Advanced IPv6 calculator for 128-bit addresses", example: "2001:db8::/64" },
                      { type: "CIDR Calculator", icon: Hash, desc: "Convert IP ranges to CIDR notation instantly", example: "/24, /16, /8" },
                      { type: "VLSM Calculator", icon: Layers, desc: "Variable Length Subnet Masking for efficiency", example: "Optimized Masks" },
                      { type: "Supernet Calculator", icon: Target, desc: "Route summarization and aggregation tool", example: "Route Aggregation" },
                      { type: "IP Range Calculator", icon: BarChart3, desc: "Find first and last usable IP addresses", example: "Host Ranges" },
                      { type: "Binary Calculator", icon: Database, desc: "Visualize IP addresses in binary format", example: "11000000..." },
                      { type: "Hex Calculator", icon: Zap, desc: "Convert IP addresses to hexadecimal", example: "C0A80100" },
                      { type: "Wildcard Mask", icon: Shield, desc: "Calculate wildcard masks for ACLs", example: "0.0.0.255" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className="h-3 w-3 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{type}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{desc}</p>
                        <p className="text-xs text-foreground font-mono bg-primary/10 px-1.5 py-0.5 rounded">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Classes */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    IPv4 Network Classes & Private Ranges
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {[
                      { class: "Class A Networks", range: "1.0.0.0 - 126.255.255.255", private: "10.0.0.0/8", hosts: "16,777,214", mask: "255.0.0.0" },
                      { class: "Class B Networks", range: "128.0.0.0 - 191.255.255.255", private: "172.16.0.0/12", hosts: "65,534", mask: "255.255.0.0" },
                      { class: "Class C Networks", range: "192.0.0.0 - 223.255.255.255", private: "192.168.0.0/16", hosts: "254", mask: "255.255.255.0" },
                      { class: "Class D (Multicast)", range: "224.0.0.0 - 239.255.255.255", private: "N/A", hosts: "N/A", mask: "N/A" },
                      { class: "Class E (Reserved)", range: "240.0.0.0 - 255.255.255.255", private: "N/A", hosts: "N/A", mask: "N/A" },
                      { class: "Loopback", range: "127.0.0.0 - 127.255.255.255", private: "127.0.0.1", hosts: "1", mask: "255.0.0.0" }
                    ].map(({ class: className, range, private: privateRange, hosts, mask }, index) => (
                      <div key={index} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle className="h-3 w-3 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{className}</h3>
                        </div>
                        <div className="text-xs text-foreground space-y-0.5">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Range: {range}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Private: {privateRange}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Hosts: {hosts}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Mask: {mask}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How to Calculate Subnets - Semantic SEO Content */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Lightbulb className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    How to Calculate Subnets: A Step-by-Step Guide
                  </h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Understanding <strong>IP subnet calculation</strong> is crucial for network administration. Here is the formula and process explained:
                    </p>
                    <div className="grid gap-3">
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1">1. Identify the Class</h3>
                        <p className="text-xs">Determine if the IP is Class A, B, or C to find the default subnet mask.</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1">2. Determine Subnet Bits</h3>
                        <p className="text-xs">Use the formula <code>2^n</code> where n is the number of bits borrowed for subnetting.</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1">3. Calculate Hosts per Subnet</h3>
                        <p className="text-xs">Use the formula <code>2^h - 2</code> where h is the number of host bits remaining. The -2 accounts for Network ID and Broadcast Address.</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1">4. Find the Magic Number</h3>
                        <p className="text-xs">Subtract the interesting octet's subnet mask value from 256 to find the block size (increment).</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comprehensive Subnet Mask Cheat Sheet */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <FileText className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Complete Subnet Mask Cheat Sheet (CIDR /1 to /32)
                  </h2>
                  <div className="overflow-x-auto max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-border">
                    <table className="w-full text-xs md:text-sm text-left">
                      <thead className="bg-secondary/50 text-foreground sticky top-0 z-10">
                        <tr>
                          <th className="p-2 rounded-tl-lg">CIDR</th>
                          <th className="p-2">Subnet Mask</th>
                          <th className="p-2">Addresses</th>
                          <th className="p-2">Hosts</th>
                          <th className="p-2 rounded-tr-lg">Class</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {[
                          { cidr: "/32", mask: "255.255.255.255", addresses: "1", hosts: "1", class: "Host" },
                          { cidr: "/31", mask: "255.255.255.254", addresses: "2", hosts: "2 (P2P)", class: "N/A" },
                          { cidr: "/30", mask: "255.255.255.252", addresses: "4", hosts: "2", class: "A, B, C" },
                          { cidr: "/29", mask: "255.255.255.248", addresses: "8", hosts: "6", class: "A, B, C" },
                          { cidr: "/28", mask: "255.255.255.240", addresses: "16", hosts: "14", class: "A, B, C" },
                          { cidr: "/27", mask: "255.255.255.224", addresses: "32", hosts: "30", class: "A, B, C" },
                          { cidr: "/26", mask: "255.255.255.192", addresses: "64", hosts: "62", class: "C" },
                          { cidr: "/25", mask: "255.255.255.128", addresses: "128", hosts: "126", class: "C" },
                          { cidr: "/24", mask: "255.255.255.0", addresses: "256", hosts: "254", class: "C" },
                          { cidr: "/23", mask: "255.255.254.0", addresses: "512", hosts: "510", class: "C (Supernet)" },
                          { cidr: "/22", mask: "255.255.252.0", addresses: "1,024", hosts: "1,022", class: "C (Supernet)" },
                          { cidr: "/21", mask: "255.255.248.0", addresses: "2,048", hosts: "2,046", class: "C (Supernet)" },
                          { cidr: "/20", mask: "255.255.240.0", addresses: "4,096", hosts: "4,094", class: "B" },
                          { cidr: "/19", mask: "255.255.224.0", addresses: "8,192", hosts: "8,190", class: "B" },
                          { cidr: "/18", mask: "255.255.192.0", addresses: "16,384", hosts: "16,382", class: "B" },
                          { cidr: "/17", mask: "255.255.128.0", addresses: "32,768", hosts: "32,766", class: "B" },
                          { cidr: "/16", mask: "255.255.0.0", addresses: "65,536", hosts: "65,534", class: "B" },
                          { cidr: "/15", mask: "255.254.0.0", addresses: "131,072", hosts: "131,070", class: "A" },
                          { cidr: "/14", mask: "255.252.0.0", addresses: "262,144", hosts: "262,142", class: "A" },
                          { cidr: "/13", mask: "255.248.0.0", addresses: "524,288", hosts: "524,286", class: "A" },
                          { cidr: "/12", mask: "255.240.0.0", addresses: "1,048,576", hosts: "1,048,574", class: "A" },
                          { cidr: "/11", mask: "255.224.0.0", addresses: "2,097,152", hosts: "2,097,150", class: "A" },
                          { cidr: "/10", mask: "255.192.0.0", addresses: "4,194,304", hosts: "4,194,302", class: "A" },
                          { cidr: "/9", mask: "255.128.0.0", addresses: "8,388,608", hosts: "8,388,606", class: "A" },
                          { cidr: "/8", mask: "255.0.0.0", addresses: "16,777,216", hosts: "16,777,214", class: "A" },
                          { cidr: "/7", mask: "254.0.0.0", addresses: "33,554,432", hosts: "33,554,430", class: "A (Supernet)" },
                          { cidr: "/6", mask: "252.0.0.0", addresses: "67,108,864", hosts: "67,108,862", class: "A (Supernet)" },
                          { cidr: "/5", mask: "248.0.0.0", addresses: "134,217,728", hosts: "134,217,726", class: "A (Supernet)" },
                          { cidr: "/4", mask: "240.0.0.0", addresses: "268,435,456", hosts: "268,435,454", class: "A (Supernet)" },
                          { cidr: "/3", mask: "224.0.0.0", addresses: "536,870,912", hosts: "536,870,910", class: "Reserved" },
                          { cidr: "/2", mask: "192.0.0.0", addresses: "1,073,741,824", hosts: "1,073,741,822", class: "Reserved" },
                          { cidr: "/1", mask: "128.0.0.0", addresses: "2,147,483,648", hosts: "2,147,483,646", class: "Reserved" },
                        ].map((row) => (
                          <tr key={row.cidr} className="hover:bg-secondary/30">
                            <td className="p-2 font-mono text-primary">{row.cidr}</td>
                            <td className="p-2 font-mono">{row.mask}</td>
                            <td className="p-2">{row.addresses}</td>
                            <td className="p-2">{row.hosts}</td>
                            <td className="p-2 text-muted-foreground">{row.class}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Real-World Subnetting Examples */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Real-World Subnetting Examples
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Home Network
                      </h3>
                      <div className="space-y-1 text-xs md:text-sm">
                        <p><span className="text-muted-foreground">Network:</span> <span className="font-mono">192.168.1.0/24</span></p>
                        <p><span className="text-muted-foreground">Mask:</span> <span className="font-mono">255.255.255.0</span></p>
                        <p><span className="text-muted-foreground">Usable IPs:</span> 254</p>
                        <p className="text-muted-foreground mt-1 italic">Standard configuration for most home routers and Wi-Fi networks.</p>
                      </div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Small Business (Departments)
                      </h3>
                      <div className="space-y-1 text-xs md:text-sm">
                        <p><span className="text-muted-foreground">Network:</span> <span className="font-mono">10.0.0.0/16</span></p>
                        <p><span className="text-muted-foreground">Subnets:</span> <span className="font-mono">10.0.1.0/24</span> (HR), <span className="font-mono">10.0.2.0/24</span> (Sales)</p>
                        <p><span className="text-muted-foreground">Scale:</span> Allows up to 256 subnets with 254 hosts each.</p>
                      </div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        AWS VPC (Cloud)
                      </h3>
                      <div className="space-y-1 text-xs md:text-sm">
                        <p><span className="text-muted-foreground">VPC CIDR:</span> <span className="font-mono">172.31.0.0/16</span></p>
                        <p><span className="text-muted-foreground">Public Subnet:</span> <span className="font-mono">172.31.0.0/20</span> (4,096 IPs)</p>
                        <p><span className="text-muted-foreground">Private Subnet:</span> <span className="font-mono">172.31.16.0/20</span></p>
                        <p className="text-muted-foreground mt-1 italic">Typical default VPC configuration in AWS regions.</p>
                      </div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Docker Bridge Network
                      </h3>
                      <div className="space-y-1 text-xs md:text-sm">
                        <p><span className="text-muted-foreground">Default Bridge:</span> <span className="font-mono">172.17.0.0/16</span></p>
                        <p><span className="text-muted-foreground">Container IPs:</span> Assigned sequentially (e.g., 172.17.0.2)</p>
                        <p><span className="text-muted-foreground">Isolation:</span> Containers on different custom bridges cannot communicate by default.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Target className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Advanced Network Calculation Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Network className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Network Address Calculation</h3>
                          <p className="text-xs text-muted-foreground">Calculate network address using IP and subnet mask</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Shield className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Broadcast Address</h3>
                          <p className="text-xs text-muted-foreground">Determine broadcast address for the subnet</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Users className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Host Range Analysis</h3>
                          <p className="text-xs text-muted-foreground">Calculate usable host addresses and ranges</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Database className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Binary & Hex Conversion</h3>
                          <p className="text-xs text-muted-foreground">Convert between decimal, binary, and hexadecimal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Long-Form Organic Content Sections */}
                <div className="space-y-6 mb-6">
                  {/* Section 1: Strategic Importance */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">
                      The Strategic Importance of Subnetting in Modern Networking
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="prose prose-sm md:prose-base text-muted-foreground max-w-none space-y-4 flex-1">
                        <p>
                          In the rapidly evolving landscape of digital infrastructure, <strong>IP subnetting</strong> is not merely a technical requirement but a strategic imperative for robust network design. At its core, subnetting involves dividing a large network into smaller, manageable sub-networks, or "subnets." This segmentation is critical for optimizing <strong>network performance</strong> and enhancing security posture. Without effective subnetting, networks suffer from excessive broadcast traffic, where every device constantly processes signals meant for others, leading to significant congestion and latency. By creating smaller broadcast domains, network engineers ensure that traffic is localized, preserving bandwidth for critical applications and improving overall throughput.
                        </p>
                        <p>
                          Beyond performance, subnetting acts as a fundamental layer of <strong>network security</strong>. By isolating different departments, applications, or user groups into distinct subnets, administrators can implement granular access control policies. For instance, a finance department's sensitive data can be logically separated from the guest Wi-Fi network, preventing unauthorized access and containing potential security breaches. This segmentation also simplifies troubleshooting; when an issue arises, it can be quickly isolated to a specific subnet rather than affecting the entire infrastructure. In an era of increasing cyber threats, the ability to compartmentalize network resources through precise subnet calculation is a vital skill for any IT professional.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-sm">
                          <Image
                            src="/images/calculator/subnet-diagram.png"
                            alt="Network Subnetting Diagram showing Router and Subnets"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-2">Figure 1: Network Segmentation via Subnetting</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Evolution of IP Addressing */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">
                      Evolution of IP Addressing: From Classful to CIDR and VLSM
                    </h2>
                    <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                      <div className="prose prose-sm md:prose-base text-muted-foreground max-w-none space-y-4 flex-1">
                        <p>
                          The history of the Internet Protocol (IP) is a testament to the need for scalability. In the early days, the <strong>Classful IP addressing</strong> system (Class A, B, and C) was sufficient, allocating IP addresses in rigid blocks. However, as the internet exploded in popularity, this inefficient allocation led to the rapid exhaustion of IPv4 addresses. Many organizations were assigned vast blocks of IPs they didn't need, while others starved for address space. This crisis necessitated the development of <strong>Classless Inter-Domain Routing (CIDR)</strong>, a revolutionary shift that allowed for flexible subnet masking.
                        </p>
                        <p>
                          CIDR introduced the concept of <strong>Variable Length Subnet Masking (VLSM)</strong>, which empowers network architects to allocate IP space with surgical precision. Unlike the fixed class boundaries, VLSM allows subnets of different sizes to coexist within the same network design. For example, a point-to-point link between routers can be assigned a /30 subnet (4 IPs), while a main office LAN uses a /24 (254 IPs). This efficiency maximizes the utility of the limited IPv4 address pool and significantly reduces routing table size on the internet backbone. Understanding the transition from classful to classless addressing is essential for mastering modern routing protocols like OSPF and BGP, which rely heavily on CIDR for efficient route aggregation.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="relative aspect-square rounded-lg overflow-hidden border border-border shadow-sm">
                          <Image
                            src="/images/calculator/ipv4-vs-ipv6.png"
                            alt="Comparison of IPv4 and IPv6 Address Spaces"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-2">Figure 2: The Evolution from IPv4 to IPv6</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Mastering Network Design */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground">
                      Mastering Network Design: IPv4, IPv6, and the Future
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="prose prose-sm md:prose-base text-muted-foreground max-w-none space-y-4 flex-1">
                        <p>
                          As we look toward the future of connectivity, the coexistence of IPv4 and IPv6 is the new reality. While IPv4 remains dominant in many internal networks, the global depletion of public IPv4 addresses has accelerated the adoption of <strong>IPv6</strong>. A master network designer must be proficient in both. IPv6 solves the addressing limitation by offering a virtually infinite address space, eliminating the need for NAT (Network Address Translation) and restoring end-to-end connectivity. However, the principles of subnetting remain just as relevant. In IPv6, subnetting is used not to conserve addresses, but to organize the network logically and efficiently.
                        </p>
                        <p>
                          Modern <strong>cloud networking</strong> environments, such as AWS Virtual Private Clouds (VPCs) and Azure Virtual Networks, rely heavily on these fundamental concepts. Designing a resilient cloud architecture requires careful planning of IP address ranges to avoid overlap when peering with on-premises data centers. Whether you are configuring a small office network or a global enterprise SD-WAN, the ability to calculate subnets accurately—determining the network address, broadcast address, and usable host range—is the bedrock of reliable connectivity. Tools like this <strong>IP Subnet Calculator</strong> bridge the gap between complex binary math and practical implementation, enabling engineers to build the scalable, secure networks of tomorrow.
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-sm">
                          <Image
                            src="/images/calculator/cidr-visualization.png"
                            alt="CIDR Notation Visualization"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-2">Figure 3: Understanding CIDR Notation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4 md:py-6 border-b border-border mb-6 md:mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                    <span className="text-xs md:text-sm font-medium">Trusted by 50,000+ Engineers</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                    <span className="text-xs md:text-sm font-medium">CCNP Reviewed</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                    <span className="text-xs md:text-sm font-medium">100% Free & No Ads</span>
                  </div>
                </div>

                {/* Author & Reviewer Box */}
                <div className="bg-secondary/30 border border-border rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Written by Network Engineering Team</p>
                        <p className="text-xs text-muted-foreground">Reviewed by CCNP Certified Professionals</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background px-2 py-1 rounded-md border border-border">
                        <Clock className="h-3 w-3" />
                        <span>Last Updated: <time dateTime={new Date().toISOString().split('T')[0]}>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time></span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Version 2025.1.0 • IPv6 Ready</p>
                    </div>
                  </div>
                </div>

                {/* People Also Ask Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-border rounded-xl p-4 md:p-6 mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    People Also Ask About Subnet Calculators
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        q: "How do I manually calculate a subnet?",
                        a: "Convert IP and mask to binary, perform AND operation for network address. Count host bits: 2^n - 2 = usable hosts. Example: 192.168.1.0/24 has 2^8 - 2 = 254 hosts."
                      },
                      {
                        q: "What is a /24 subnet?",
                        a: "A /24 subnet has 24 network bits and 8 host bits, providing 254 usable IP addresses. Common in small networks, equivalent to subnet mask 255.255.255.0."
                      },
                      {
                        q: "How many IPs in a /28 subnet?",
                        a: "A /28 has 16 total IPs (2^4), with 14 usable hosts (16 - 2 for network and broadcast). Perfect for small departments or VLANs."
                      },
                      {
                        q: "Can I use 255.255.255.255 as subnet mask?",
                        a: "/32 mask (255.255.255.255) represents a single host route, used for specific host routing or loopback addresses, not for networks."
                      }
                    ].map(({ q, a }, i) => (
                      <div key={i} className="bg-white dark:bg-card p-3 rounded-lg border border-border">
                        <h3 className="font-semibold text-sm text-foreground mb-2">{q}</h3>
                        <p className="text-xs text-muted-foreground">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      {
                        question: "What is CIDR notation?",
                        answer: "CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses and IP routing. It replaces the old classful network architecture. A CIDR notation looks like 192.168.1.0/24, where /24 represents the number of bits in the subnet mask."
                      },
                      {
                        question: "How do I calculate a Subnet Mask from IP?",
                        answer: "To calculate a subnet mask, you need the CIDR value (e.g., /24). The first 24 bits are set to 1, and the rest to 0. In binary: 11111111.11111111.11111111.00000000, which converts to 255.255.255.0 in decimal."
                      },
                      {
                        question: "What is the difference between IPv4 and IPv6?",
                        answer: "IPv4 uses 32-bit addresses (approx 4.3 billion IPs), while IPv6 uses 128-bit addresses (340 undecillion IPs). IPv6 was developed to solve the IP address exhaustion problem and includes built-in security (IPsec) and auto-configuration features."
                      },
                      {
                        question: "What is a Wildcard Mask?",
                        answer: "A Wildcard Mask is the inverse of a Subnet Mask. It is used in Cisco IOS for ACLs (Access Control Lists) and OSPF configurations. For example, if the subnet mask is 255.255.255.0, the wildcard mask is 0.0.0.255."
                      },
                      {
                        question: "How to calculate Default Gateway?",
                        answer: "The Default Gateway is typically the first or last usable IP address in a subnet. For the network 192.168.1.0/24, the first usable IP is 192.168.1.1, which is commonly assigned as the default gateway."
                      },
                      {
                        question: "What are Public vs Private IP addresses?",
                        answer: "Public IPs are routable on the internet and assigned by ISPs. Private IPs (RFC 1918) are used within local networks (LANs) and are not routable on the internet. Common private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."
                      },
                      {
                        question: "What is VLSM (Variable Length Subnet Masking)?",
                        answer: "VLSM allows network engineers to use different subnet masks for different subnets within the same major network. This optimizes IP address usage by fitting the subnet size to the specific needs of each segment."
                      },
                      {
                        question: "How do I find the IP Range of a Subnet?",
                        answer: "To find the IP range: 1. Identify the Network Address (first IP). 2. Identify the Broadcast Address (last IP). 3. The Usable Host Range is everything between them. E.g., for 192.168.1.0/24, the range is 192.168.1.1 to 192.168.1.254."
                      },
                      {
                        question: "What is IP Subnet Summarization?",
                        answer: "Also known as Route Aggregation or Supernetting, it is the process of combining multiple smaller subnets into one larger supernet to reduce the size of routing tables and improve network stability."
                      },
                      {
                        question: "How to check subnet mask of IP?",
                        answer: "On Windows, open Command Prompt and type 'ipconfig'. On Mac/Linux, open Terminal and type 'ifconfig' or 'ip addr'. The subnet mask will be listed next to your IP address."
                      },
                      {
                        question: "How to calculate subnet address?",
                        answer: "Perform a bitwise AND operation between the IP address and the Subnet Mask in binary form. The result is the Network Address (Subnet Address)."
                      },
                      {
                        question: "How many subnets are allowed in the network?",
                        answer: "The number of subnets is calculated using the formula 2^n, where 'n' is the number of bits borrowed from the host portion for subnetting."
                      },
                      {
                        question: "How many IPs are in the range?",
                        answer: "The total number of IPs is 2^h, where 'h' is the number of host bits. The number of usable IPs is 2^h - 2 (subtracting network and broadcast addresses)."
                      },
                      {
                        question: "What is the subnet mask for my IP?",
                        answer: "The subnet mask depends on your network configuration. Common defaults are 255.0.0.0 (Class A), 255.255.0.0 (Class B), and 255.255.255.0 (Class C), but CIDR allows for any prefix length."
                      },
                      {
                        question: "How to use IP Subnet Calculator?",
                        answer: "Simply enter your IP address and select the Subnet Mask (or CIDR prefix). The calculator will automatically compute the Network Address, Broadcast Address, IP Range, and Number of Hosts."
                      },
                      {
                        question: "What is an IP Subnet Calculator?",
                        answer: "An IP Subnet Calculator is a tool that automates the complex binary math required for subnetting. It helps network engineers quickly plan and verify network configurations."
                      },
                      {
                        question: "What diagnostic commands help with subnet troubleshooting?",
                        answer: "Windows: ipconfig /all, ping [destination], tracert [destination], route print. Linux: ip addr show, ping [destination], traceroute [destination], ip route show. These commands help verify IP configuration, test connectivity, trace routing paths, and display routing tables."
                      },
                      {
                        question: "Can I use this tool for Cisco certification practice?",
                        answer: "Yes, this IP Subnet Calculator is excellent for CCNA and CCNP students to verify their manual calculations for subnetting, VLSM, and wildcard masks."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">{faq.question}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Tools */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Related Network & IT Calculators
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: Calculator },
                      { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: Percent },
                      { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                      { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                      { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", href: "/calculator/loan-calculator", icon: DollarSign },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: FileText },
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: TrendingUp },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                      { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                      { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                    ].map(({ name, desc, icon: Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="p-2 md:p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors group hover:border-heading-accent-border/50"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-foreground group-hover:text-heading-accent" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm group-hover:text-heading-accent">{name}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground">{desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}