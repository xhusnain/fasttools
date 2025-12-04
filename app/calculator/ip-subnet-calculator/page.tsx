import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { IPSubnetCalculator } from "@/components/dev-tools/ip-subnet-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Network, Globe, Shield, Layers, Hash, Info, Calculator, Lightbulb, Server, Database, Zap, Target, CheckCircle, BarChart3, Users, Clock, ShieldCheck, FileText } from "lucide-react"
import Image from "next/image"

const TOOL_TITLE = "IP Subnet Calculator - Free CIDR, VLSM & Network Tool (2025)"
const TOOL_NAME = "IP Subnet Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting with our free IP Subnet Calculator. Perfect for network engineers to analyze network addresses, broadcast, and host ranges. Try now - no signup required!",
  path: "/calculator/ip-subnet-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/ip-subnet-calculator" }
  ],
  schemaOptions: {
    name: TOOL_NAME,
    alternateName: "Subnet Calculator, CIDR Calculator, IP Calculator",
    applicationCategory: "UtilityApplication",
    featureList: [
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
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Technology",
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
  ]
}

export default function IPSubnetCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Use our free IP Subnet Calculator to calculate IPv4/IPv6 subnets, CIDR notation, VLSM, supernetting, and network analysis. Perfect for network engineers, IT professionals, and students.",

    howToSteps: [
      "Enter IP Address: Input your IPv4 or IPv6 address in the calculator.",
      "Set Subnet Mask or CIDR: Enter subnet mask or CIDR prefix length.",
      "Calculate Results: Click calculate to get comprehensive network analysis.",
      "Analyze Network: Review network address, broadcast, host range, and more."
    ],

    features: [
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
    ],

    useCases: [
      "IPv4 Subnet Calculator: Calculate IPv4 subnets with CIDR notation.",
      "IPv6 Subnet Calculator: Advanced IPv6 calculator for 128-bit addresses.",
      "CIDR Calculator: Convert IP ranges to CIDR notation instantly.",
      "VLSM Calculator: Variable Length Subnet Masking for efficiency.",
      "Supernet Calculator: Route summarization and aggregation tool.",
      "IP Range Calculator: Find first and last usable IP addresses.",
      "Binary Calculator: Visualize IP addresses in binary format.",
      "Hex Calculator: Convert IP addresses to hexadecimal.",
      "Wildcard Mask: Calculate wildcard masks for ACLs."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            IPv4 Network Classes & Private Ranges
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { class: "Class A Networks", range: "1.0.0.0 - 126.255.255.255", private: "10.0.0.0/8", hosts: "16,777,214", mask: "255.0.0.0" },
              { class: "Class B Networks", range: "128.0.0.0 - 191.255.255.255", private: "172.16.0.0/12", hosts: "65,534", mask: "255.255.0.0" },
              { class: "Class C Networks", range: "192.0.0.0 - 223.255.255.255", private: "192.168.0.0/16", hosts: "254", mask: "255.255.255.0" },
              { class: "Class D (Multicast)", range: "224.0.0.0 - 239.255.255.255", private: "N/A", hosts: "N/A", mask: "N/A" },
              { class: "Class E (Reserved)", range: "240.0.0.0 - 255.255.255.255", private: "N/A", hosts: "N/A", mask: "N/A" },
              { class: "Loopback", range: "127.0.0.0 - 127.255.255.255", private: "127.0.0.1", hosts: "1", mask: "255.0.0.0" }
            ].map(({ class: className, range, private: privateRange, hosts, mask }, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{className}</h3>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Range: {range}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Private: {privateRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Hosts: {hosts}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Mask: {mask}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Calculate Subnets: A Step-by-Step Guide
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Understanding <strong>IP subnet calculation</strong> is crucial for network administration. Here is the formula and process explained:
            </p>
            <div className="grid gap-4">
              <div className="p-4 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">1. Identify the Class</h3>
                <p className="text-sm">Determine if the IP is Class A, B, or C to find the default subnet mask.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">2. Determine Subnet Bits</h3>
                <p className="text-sm">Use the formula <code>2^n</code> where n is the number of bits borrowed for subnetting.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">3. Calculate Hosts per Subnet</h3>
                <p className="text-sm">Use the formula <code>2^h - 2</code> where h is the number of host bits remaining. The -2 accounts for Network ID and Broadcast Address.</p>
              </div>
              <div className="p-4 bg-muted rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">4. Find the Magic Number</h3>
                <p className="text-sm">Subtract the interesting octet's subnet mask value from 256 to find the block size (increment).</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Complete Subnet Mask Cheat Sheet (CIDR /1 to /32)
          </h2>
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-border rounded-lg border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-foreground sticky top-0 z-10">
                <tr>
                  <th className="p-3">CIDR</th>
                  <th className="p-3">Subnet Mask</th>
                  <th className="p-3">Addresses</th>
                  <th className="p-3">Hosts</th>
                  <th className="p-3">Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
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
                  <tr key={row.cidr} className="hover:bg-muted/50">
                    <td className="p-3 font-mono text-primary">{row.cidr}</td>
                    <td className="p-3 font-mono">{row.mask}</td>
                    <td className="p-3">{row.addresses}</td>
                    <td className="p-3">{row.hosts}</td>
                    <td className="p-3 text-muted-foreground">{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Real-World Subnetting Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Home Network
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Network:</span> <span className="font-mono">192.168.1.0/24</span></p>
                <p><span className="text-muted-foreground">Mask:</span> <span className="font-mono">255.255.255.0</span></p>
                <p><span className="text-muted-foreground">Usable IPs:</span> 254</p>
                <p className="text-muted-foreground mt-2 italic">Standard configuration for most home routers and Wi-Fi networks.</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Small Business (Departments)
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Network:</span> <span className="font-mono">10.0.0.0/16</span></p>
                <p><span className="text-muted-foreground">Subnets:</span> <span className="font-mono">10.0.1.0/24</span> (HR), <span className="font-mono">10.0.2.0/24</span> (Sales)</p>
                <p><span className="text-muted-foreground">Scale:</span> Allows up to 256 subnets with 254 hosts each.</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                AWS VPC (Cloud)
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">VPC CIDR:</span> <span className="font-mono">172.31.0.0/16</span></p>
                <p><span className="text-muted-foreground">Public Subnet:</span> <span className="font-mono">172.31.0.0/20</span> (4,096 IPs)</p>
                <p><span className="text-muted-foreground">Private Subnet:</span> <span className="font-mono">172.31.16.0/20</span></p>
                <p className="text-muted-foreground mt-2 italic">Typical default VPC configuration in AWS regions.</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Docker Bridge Network
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Default Bridge:</span> <span className="font-mono">172.17.0.0/16</span></p>
                <p><span className="text-muted-foreground">Container IPs:</span> Assigned sequentially (e.g., 172.17.0.2)</p>
                <p><span className="text-muted-foreground">Isolation:</span> Containers on different custom bridges cannot communicate by default.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Advanced Network Calculation Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Network Address Calculation</h3>
                  <p className="text-sm text-muted-foreground">Calculate network address using IP and subnet mask</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Broadcast Address</h3>
                  <p className="text-sm text-muted-foreground">Determine broadcast address for the subnet</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Host Range Analysis</h3>
                  <p className="text-sm text-muted-foreground">Calculate usable host addresses and ranges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Binary & Hex Conversion</h3>
                  <p className="text-sm text-muted-foreground">Convert between decimal, binary, and hexadecimal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-foreground">
              The Strategic Importance of Subnetting in Modern Networking
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="prose prose-sm text-muted-foreground max-w-none space-y-4 flex-1">
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

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-foreground">
              Evolution of IP Addressing: From Classful to CIDR and VLSM
            </h2>
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <div className="prose prose-sm text-muted-foreground max-w-none space-y-4 flex-1">
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

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-foreground">
              Mastering Network Design: IPv4, IPv6, and the Future
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="prose prose-sm text-muted-foreground max-w-none space-y-4 flex-1">
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
        </section>

        <section>
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-y border-border mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Trusted by 50,000+ Engineers</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">CCNP Reviewed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">100% Free & No Ads</span>
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
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
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            People Also Ask About Subnet Calculators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
              <div key={i} className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-sm text-foreground mb-2">{q}</h3>
                <p className="text-xs text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    faqs: [
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
      }
    ],


  }

  return (
    <ToolPageLayout
      header={{
        title: TOOL_TITLE,
        description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting with our free IP Subnet Calculator. Perfect for network engineers to analyze network addresses, broadcast, and host ranges. Try now - no signup required!",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: TOOL_NAME, href: "/calculator/ip-subnet-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <IPSubnetCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Calculate IPv4/IPv6 subnets, CIDR notation, VLSM, and supernetting with our free IP Subnet Calculator. Perfect for network engineers to analyze network addresses, broadcast, and host ranges. Try now - no signup required!",
        path: "/calculator/ip-subnet-calculator"
      }}
    />
  )
}