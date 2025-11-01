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
  FileText,
  Percent
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastTools - IP Subnet Calculator | Free IPv4 IPv6 CIDR Calculator",
  description: "FastTools IP Subnet Calculator - Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting. Perfect for network engineers, IT professionals, and students. Fast, accurate, easy to use.",
  keywords: [
    "fasttools",
    "fast tools",
    "ip subnet calculator",
    "ipv4 subnet creator",
    "subnet calculator",
    "ipv4 calculator",
    "ipv6 calculator",
    "cidr calculator",
    "subnet mask calculator",
    "ip address calculator",
    "ip range calculator",
      "vlsm calculator",
      "network calculator",
      "wildcard mask calculator",
      "ip subnetting calculator",
    "network subnet calculator",
      "cidr notation calculator",
    "broadcast address calculator",
    "host range calculator",
    "network class calculator",
    "private ip calculator",
      "public ip calculator"
  ],
  openGraph: {
    title: "Free Online IP Subnet Calculator | IPv4 IPv6 CIDR Network Calculator | FastTools",
    description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting. Perfect for network engineers, IT professionals, and students. Fast, accurate, and easy to use online.",
    type: "website",
    url: "https://www.fasttools.store/calculator/ip-subnet-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-ip-subnet-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online IP Subnet Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online IP Subnet Calculator | IPv4 IPv6 CIDR Network Calculator | FastTools",
    description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting. Perfect for network engineers, IT professionals, and students. Fast, accurate, and easy to use online.",
    images: ["https://www.fasttools.store/og-ip-subnet-calculator.jpg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/ip-subnet-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "FastTools Network Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Online IP Subnet Calculator",
  "description": "Calculate IPv4 and IPv6 subnets, CIDR notation, VLSM, supernetting, and comprehensive network analysis with our advanced IP subnet calculator.",
  "url": "https://www.fasttools.store/calculator/ip-subnet-calculator",
  "applicationCategory": "NetworkApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
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
    }
  ]
}

export default function IPSubnetCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="bg-black">
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
                title="Free Online IP Subnet Calculator"
                description="Use our free IP Subnet Calculator to calculate IPv4/IPv6 subnets, CIDR notation, VLSM, supernetting, and network analysis. Perfect for network engineers, IT professionals, and students."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-slate-700 rounded-xl shadow-sm bg-black" />
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
                <IPSubnetCalculator />

                {/* How to Use */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mt-6 md:mt-8 mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                    How to Use Our IP Subnet Calculator
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <span className="text-white font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Enter IP Address</h3>
                          <p className="text-xs text-slate-400">Input your IPv4 or IPv6 address in the calculator</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <span className="text-white font-bold text-xs">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Set Subnet Mask or CIDR</h3>
                          <p className="text-xs text-slate-400">Enter subnet mask or CIDR prefix length</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <span className="text-white font-bold text-xs">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Calculate Results</h3>
                          <p className="text-xs text-slate-400">Click calculate to get comprehensive network analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <span className="text-white font-bold text-xs">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Analyze Network</h3>
                          <p className="text-xs text-slate-400">Review network address, broadcast, host range, and more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Network Types */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Network className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                    Supported Network Types & Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "IPv4 Subnet Calculator", icon: Globe, desc: "Calculate IPv4 subnets with CIDR notation", example: "192.168.1.0/24" },
                      { type: "IPv6 Subnet Calculator", icon: Server, desc: "Calculate IPv6 subnets and prefixes", example: "2001:db8::/64" },
                      { type: "CIDR Calculator", icon: Hash, desc: "Classless Inter-Domain Routing notation", example: "/24, /16, /8" },
                      { type: "VLSM Calculator", icon: Layers, desc: "Variable Length Subnet Masking", example: "Different masks per subnet" },
                      { type: "Supernet Calculator", icon: Target, desc: "Combine multiple networks", example: "Route aggregation" },
                      { type: "Network Analysis", icon: BarChart3, desc: "Comprehensive network analysis", example: "Host count, ranges" },
                      { type: "Binary Calculator", icon: Database, desc: "Binary representation of IPs", example: "11000000.10101000" },
                      { type: "Hex Calculator", icon: Zap, desc: "Hexadecimal IP conversion", example: "C0A80100" },
                      { type: "Security Analysis", icon: Shield, desc: "Network security assessment", example: "Private vs public IPs" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className="h-3 w-3 text-white" />
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">{type}</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-1">{desc}</p>
                        <p className="text-xs text-orange-400 font-mono bg-orange-500/10 px-1.5 py-0.5 rounded">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Classes */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
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
                      <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle className="h-3 w-3 text-white" />
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">{className}</h3>
                        </div>
                        <div className="text-xs text-orange-400 space-y-0.5">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                            <span>Range: {range}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                            <span>Private: {privateRange}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                            <span>Hosts: {hosts}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                            <span>Mask: {mask}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Target className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                    Advanced Network Calculation Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Network className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Network Address Calculation</h3>
                          <p className="text-xs text-slate-400">Calculate network address using IP and subnet mask</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Shield className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Broadcast Address</h3>
                          <p className="text-xs text-slate-400">Determine broadcast address for the subnet</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Users className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Host Range Analysis</h3>
                          <p className="text-xs text-slate-400">Calculate usable host addresses and ranges</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Database className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Binary & Hex Conversion</h3>
                          <p className="text-xs text-slate-400">Convert between decimal, binary, and hexadecimal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      {
                        question: "What is CIDR notation?",
                        answer: "CIDR represents a modern IP addressing system that replaces traditional class-based networks. This notation employs a forward slash followed by a numeric value (like /24) to define how many bits are allocated for the network identifier portion of an IP address."
                      },
                      {
                        question: "What is the difference between IPv4 and IPv6?",
                        answer: "IPv4 uses 32-bit addresses (4.3 billion addresses) while IPv6 uses 128-bit addresses (340 undecillion addresses). IPv6 provides better security, auto-configuration, and eliminates the need for NAT."
                      },
                      {
                        question: "What is VLSM?",
                        answer: "VLSM (Variable Length Subnet Masking) allows you to use different subnet masks for different subnets within the same network, enabling more efficient use of IP addresses."
                      },
                      {
                        question: "How do I calculate usable hosts?",
                        answer: "Usable hosts = 2^(host bits) - 2. The minus 2 accounts for the network address and broadcast address which cannot be assigned to hosts."
                      },
                      {
                        question: "What is supernetting?",
                        answer: "Supernetting is the process of combining multiple smaller networks into a larger network by reducing the subnet mask length, allowing for more efficient routing and address allocation."
                      },
                      {
                        question: "What are private IP addresses?",
                        answer: "Private IP addresses are reserved ranges that cannot be routed on the internet: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They are used for internal networks and require NAT for internet access."
                      },
                      {
                        question: "How do I convert CIDR prefix notation to subnet mask format?",
                        answer: "The CIDR prefix number determines the subnet mask. A /24 prefix converts to 255.255.255.0, where the numeric value specifies network bit allocation. Remaining bits beyond this prefix define the host address space within that subnet."
                      },
                      {
                        question: "What is the difference between network and broadcast addresses?",
                        answer: "The network address is the first address in a subnet (all host bits are 0), while the broadcast address is the last address (all host bits are 1). Neither can be assigned to hosts."
                      },
                      {
                        question: "How do I calculate wildcard mask?",
                        answer: "Wildcard masks represent the complement of subnet masks through bitwise inversion. When your subnet mask is 255.255.255.0, the corresponding wildcard mask becomes 0.0.0.255. These masks are essential for OSPF, EIGRP routing configurations and Cisco access control list implementations."
                      },
                      {
                        question: "What is the purpose of subnetting?",
                        answer: "Subnetting divides a large network into smaller, manageable subnets. It improves security, reduces broadcast traffic, optimizes routing, and allows for better network organization and management."
                      },
                      {
                        question: "How do I determine the number of subnets?",
                        answer: "Calculate subnet quantity using the formula: 2 raised to the power of subnet bits. Subnet bits represent the count of bits borrowed from the host address space to segment your network into multiple smaller logical divisions."
                      },
                      {
                        question: "What is the difference between classful and classless addressing?",
                        answer: "Classful networking enforces rigid class boundaries (Class A: /8, Class B: /16, Class C: /24) with fixed subnet masks. Classless addressing breaks these constraints, permitting arbitrary prefix lengths anywhere from /8 to /30, enabling precise address space utilization and eliminating wasteful allocations."
                      },
                      {
                        question: "How do I calculate network address?",
                        answer: "Network address = IP address AND subnet mask. This operation results in the network portion of the address with all host bits set to zero."
                      },
                      {
                        question: "What is the maximum number of hosts in a subnet?",
                        answer: "Host capacity follows the formula: 2 to the power of available host bits, minus two reserved addresses. These two reserved addresses are the network identifier (all host bits zero) and broadcast address (all host bits one). A /24 network provides 256 total addresses minus 2, yielding 254 assignable host addresses."
                      },
                      {
                        question: "How do I convert between decimal and binary IP addresses?",
                        answer: "Each octet (8 bits) is converted separately. For example, 192 = 11000000 in binary. Our calculator automatically shows both decimal and binary representations for easy conversion."
                      },
                      {
                        question: "What are the benefits of IP subnetting?",
                        answer: "IP subnetting provides efficient IP usage by optimizing address allocation, enhanced security through network segmentation and access controls, and improved performance by reducing broadcast domains and improving routing efficiency."
                      },
                      {
                        question: "How do I manually calculate subnets step by step?",
                        answer: "Step 1: Convert IP address to binary. Step 2: Apply subnet mask. Step 3: Calculate network address using AND operation. Step 4: Calculate broadcast address by setting all host bits to 1. Step 5: Calculate usable host range excluding network and broadcast addresses."
                      },
                      {
                        question: "What is the CIDR conversion table for common subnet masks?",
                        answer: "/30 = 255.255.255.252 (2 hosts), /28 = 255.255.255.240 (14 hosts), /24 = 255.255.255.0 (254 hosts), /20 = 255.255.240.0 (4,094 hosts), /16 = 255.255.0.0 (65,534 hosts)."
                      },
                      {
                        question: "How does VLSM improve IP address efficiency?",
                        answer: "VLSM allows different subnet masks for different subnets within the same network, enabling more efficient IP address allocation. For example, a sales department can use /26 (62 hosts) while IT uses /28 (14 hosts) from the same /24 network."
                      },
                      {
                        question: "What is the difference between IPv4 and IPv6 subnetting?",
                        answer: "IPv4 subnetting utilizes 32-bit addresses with decimal subnet masks (e.g., 255.255.255.0), whereas IPv6 employs 128-bit addresses with hexadecimal prefix notation. The IPv6 address space exceeds IPv4 by trillions of times, incorporates built-in IPsec encryption, supports automatic address configuration, and removes network address translation requirements."
                      },
                      {
                        question: "How do I design a network with proper subnetting?",
                        answer: "Consider user requirements (current and future host count), security zones (DMZ, internal, management, guest networks), and performance needs (broadcast domain size, routing efficiency). Plan for 20-30% growth and use consistent subnet sizes where possible."
                      },
                      {
                        question: "What are the security benefits of subnetting?",
                        answer: "Subnetting enhances security through network segmentation (isolate critical systems), access control (implement VLANs and ACLs), threat containment (limit blast radius of attacks), and compliance (meet regulatory requirements and maintain audit trails)."
                      },
                      {
                        question: "What are the best practices for subnet design?",
                        answer: "Planning: Document requirements, plan for growth, use consistent sizes, reserve IP ranges. Implementation: Start with largest subnets, use VLSM, implement gradually, test thoroughly. Management: Maintain documentation, use IPAM tools, monitor utilization, conduct regular audits."
                      },
                      {
                        question: "How do I troubleshoot common subnetting problems?",
                        answer: "For hosts that can't communicate: Check if hosts are in same subnet, verify subnet mask configuration, ensure default gateway is correct, check for IP conflicts. For routing issues: Verify route table entries, check for overlapping subnets, ensure proper supernetting, validate next-hop addresses."
                      },
                      {
                        question: "What diagnostic commands help with subnet troubleshooting?",
                        answer: "Windows: ipconfig /all, ping [destination], tracert [destination], route print. Linux: ip addr show, ping [destination], traceroute [destination], ip route show. These commands help verify IP configuration, test connectivity, trace routing paths, and display routing tables."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">{faq.question}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Tools */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
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
                        className="p-2 md:p-3 bg-black rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors group hover:border-green-500/50"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-white group-hover:text-green-500" />
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm group-hover:text-green-500">{name}</h3>
                        </div>
                        <p className="text-xs text-slate-400 group-hover:text-slate-300">{desc}</p>
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
                      <span className="text-xs text-slate-400 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-slate-700 rounded-xl shadow-sm bg-black" />
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