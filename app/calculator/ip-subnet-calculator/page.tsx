import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const IPSubnetCalculator = dynamic(() => import("@/components/dev-tools/ip-subnet-calculator").then(mod => mod.IPSubnetCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Network, Globe, Shield, Info, Database, Zap, Target, CheckCircle, Users, Clock, ShieldCheck, FileText, Brain, BookOpen } from "lucide-react"
import { GTable } from "@/ui/gtable"
import Image from "next/image"

const TOOL_TITLE = "IP Subnet & VPC CIDR Calculator — VLSM, IPv4 / IPv6 / AWS / GCP"
const TOOL_NAME = "IP Subnet Calculator"

const baseMetadata = createMetadata({
  title: "IP Subnet & VPC CIDR Calculator — VLSM, IPv4 / IPv6 / AWS / GCP",
  description: "Free IP subnet and VPC CIDR calculator for IPv4 and IPv6 networks. Plan AWS, GCP, or Azure VPC ranges, compute subnet masks, network/broadcast addresses, usable host counts, wildcard masks, VLSM, supernetting, and binary/hex conversions.",
  path: "/calculator/ip-subnet-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" }
  ],
  schemaOptions: {
    name: TOOL_NAME,
    alternateName: [
      "Subnet Calculator",
      "CIDR Calculator",
      "IP Calculator",
      "IPv4 Calculator",
      "IPv6 Calculator",
      "VPC CIDR Planner",
      "VLSM Calculator",
      "Supernetting Tool",
      "Network Mask Calculator",
      "Subnet Mask Calculator",
      "AWS VPC Planner",
      "GCP VPC Planner",
      "Azure VNet Planner",
      "Wildcard Mask Calculator",
      "Network Address Calculator",
    ],
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
}

export default function IPSubnetCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition:
      "An IP subnet calculator derives network address, broadcast address, subnet mask, CIDR prefix, host range, and usable host count from an IP address and subnet.",
    quickAnswer:
      "Enter an IPv4 or IPv6 address with a CIDR prefix or subnet mask to calculate the network address, broadcast address, usable host range, wildcard mask, and total hosts. Use it for VLSM planning, firewall rules, AWS VPCs, and network exams.",
    keyTakeaways: [
      "CIDR prefix length controls subnet size and host capacity",
      "IPv4 /24 usually means 256 total addresses and 254 usable hosts",
      "Network and broadcast addresses are not usable host addresses in typical IPv4 subnets",
      "VLSM helps allocate different subnet sizes efficiently",
      "Private IPv4 ranges include 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16",
    ],
    overview: "Calculate IPv4 and IPv6 subnets, CIDR prefix lengths, subnet masks, network addresses, broadcast addresses, usable host ranges, and wildcard masks with our free IP subnet calculator. Supporting VLSM (Variable Length Subnet Masking) for efficient IP allocation, supernetting for route aggregation, private/public IP detection (RFC 1918), multicast identification, and binary/hexadecimal conversions, this tool automates the complex binary math required for network planning, AWS VPC design, firewall ACL configuration, and CCNA/CCNP certification study.",

    howToSteps: [
      "Enter IP Address: Input any IPv4 address (e.g., 192.168.1.100) or IPv6 address (e.g., 2001:db8::1) in the calculator.",
      "Set Subnet Mask or CIDR: Choose a subnet mask from the dropdown (e.g., 255.255.255.0) or enter a CIDR prefix length (e.g., /24). The tool converts between formats automatically.",
      "Calculate Results: Click calculate to instantly compute network address, broadcast address, usable host range, total hosts, wildcard mask, binary representation, and hexadecimal conversion.",
      "Analyze Network: Review the full subnet analysis including network class, private/public IP status, VLSM breakdown, and supernet aggregation possibilities for your network design."
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
      "Network Planning: Design and document enterprise LAN/WAN subnet schemes with proper CIDR allocation for departments, servers, and IoT devices.",
      "Cloud VPC Design: Plan AWS VPC, Azure VNet, or GCP VPC CIDR blocks and subnet allocations for public, private, and database tiers.",
      "VLSM Optimization: Allocate different-sized subnets within the same network (e.g., /30 for P2P links, /24 for user LANs) to maximize IP address efficiency.",
      "Firewall ACL Configuration: Generate wildcard masks and IP ranges for access control lists on Cisco, Juniper, and other network equipment.",
      "Route Aggregation: Calculate supernets to summarize contiguous subnets into a single routing entry, reducing routing table size.",
      "Certification Study: Practice subnetting problems for CCNA, CCNP, CompTIA Network+, and other networking certification exams.",
      "Troubleshooting: Verify whether two IP addresses are on the same subnet, check broadcast domains, and validate network configurations.",
      "IPv6 Migration: Calculate IPv6 /48, /64, and custom prefix subnets for dual-stack and IPv6-only network deployments.",
      "Security Auditing: Identify private (RFC 1918) vs. public IPs and detect multicast addresses in network scans."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Network className="h-6 w-6 text-primary" />
            What is an IP Subnet? Understanding Network Subnetting
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            An IP subnet is a logical subdivision of an IP network. The practice of dividing a network into two or more networks is called subnetting. This process increases network efficiency, enhances security, and simplifies management by breaking down large networks into smaller, more manageable segments. Subnetting is essential for modern network design, allowing network engineers to optimize IP address allocation, reduce broadcast traffic, and implement security boundaries between different network segments.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our IP Subnet Calculator automates the complex binary mathematics required for subnetting, helping network engineers, IT professionals, and students quickly plan and verify network configurations. Whether you're designing a home network, configuring enterprise infrastructure, setting up cloud VPCs, or preparing for network certifications, our calculator provides instant, accurate subnet calculations with support for both IPv4 and IPv6 addresses, CIDR notation, and VLSM (Variable Length Subnet Masking).
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: CIDR vs. VLSM in Modern Networking
          </h2>
          <div className="p-6 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 rounded-2xl border border-indigo-500/20 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
              "While often used interchangeably, CIDR and VLSM serve different purposes. CIDR (Classless Inter-Domain Routing) is primarily used for **route aggregation** on the public internet to keep backbone routing tables small. VLSM (Variable Length Subnet Masking), on the other hand, is used **internally** within an organization to allocate IP space efficiently by creating subnets of different sizes. Mastering both is essential for modern cloud architecture, where IP exhaustion is a constant risk even in private VPCs."
            </p>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-2">— FastTools Network Engineering Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            IPv4 Network Classes & Private IP Ranges: Complete Reference
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding IPv4 network classes and private IP ranges is fundamental for network design and security:
          </p>
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Complete Subnet Mask Cheat Sheet: CIDR Reference Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quick reference for common CIDR notation and subnet masks:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-left">CIDR</th>
                  <th className="p-3 text-left">Subnet Mask</th>
                  <th className="p-3 text-left">Addresses</th>
                  <th className="p-3 text-left">Hosts</th>
                  <th className="p-3 text-left">Class Equivalent</th>
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
                  { cidr: "/24", mask: "255.255.255.0", addresses: "256", hosts: "254", class: "Class C" },
                  { cidr: "/20", mask: "255.255.240.0", addresses: "4,096", hosts: "4,094", class: "Class B" },
                  { cidr: "/16", mask: "255.255.0.0", addresses: "65,536", hosts: "65,534", class: "Class B" },
                  { cidr: "/8", mask: "255.0.0.0", addresses: "16,777,216", hosts: "16,777,214", class: "Class A" }
                ].map((row) => (
                  <tr key={row.cidr} className="hover:bg-muted/50 transition-colors">
                    <td className="p-3 font-mono text-primary font-bold">{row.cidr}</td>
                    <td className="p-3 font-mono">{row.mask}</td>
                    <td className="p-3 text-muted-foreground">{row.addresses}</td>
                    <td className="p-3 text-muted-foreground">{row.hosts}</td>
                    <td className="p-3 text-sm italic">{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Real-World Subnetting Examples: Practical Applications
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding real-world subnetting examples helps you apply subnetting principles in practice:
          </p>
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
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How to Use the IP Subnet Calculator: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to calculate IP subnets accurately:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter IP Address</h4>
                <p className="text-sm text-muted-foreground">Input your IPv4 or IPv6 address in the calculator. The calculator accepts standard IP address formats (e.g., 192.168.1.1 for IPv4).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Set Subnet Mask or CIDR</h4>
                <p className="text-sm text-muted-foreground">Enter subnet mask (e.g., 255.255.255.0) or CIDR prefix length (e.g., /24). CIDR notation is more common in modern networking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Calculate Results</h4>
                <p className="text-sm text-muted-foreground">Click calculate to get comprehensive network analysis including network address, broadcast address, usable host range, and total hosts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Analyze Network</h4>
                <p className="text-sm text-muted-foreground">Review network address, broadcast address, host range, and binary/hexadecimal representations for complete network understanding.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
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
        </article>

        <article className="space-y-6">
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Network Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our IP subnet calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All subnet calculations happen directly in your browser using JavaScript. Your IP addresses, subnet masks, and calculation results never leave your device or get transmitted to our servers. No data is sent over the internet during calculations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage or Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your network data. There's no database of your IP calculations, no analytics on your usage, and no way for us to access your IP addresses or subnet information. Your privacy is completely protected while using our tool.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Safe for Enterprise Use</h4>
                <p className="text-sm text-muted-foreground">You can use the calculator with confidence for enterprise network planning, cloud VPC design, and security analysis. All calculations happen locally, ensuring your network topology and IP addressing schemes remain private and secure.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
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
                <p className="text-[10px] text-muted-foreground">Version.1.0 • IPv6 Ready</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
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
        </article>
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
      },
      {
        question: "How do I calculate subnet mask from IP address?",
        answer: "The subnet mask depends on your network configuration, not just the IP address. For Class A networks, default mask is 255.0.0.0 (/8). Class B uses 255.255.0.0 (/16). Class C uses 255.255.255.0 (/24). With CIDR, you can use any prefix length. Use our calculator to determine the appropriate subnet mask based on your network requirements and number of needed hosts."
      },
      {
        question: "What is my subnet mask? How to find it?",
        answer: "To find your subnet mask, on Windows open Command Prompt and type 'ipconfig'. On Mac/Linux, open Terminal and type 'ifconfig' or 'ip addr'. The subnet mask appears next to your IP address. Alternatively, use our subnet calculator by entering your IP address—it will show common subnet masks used with that IP range."
      },
      {
        question: "How to calculate network address from IP and subnet mask?",
        answer: "To calculate network address, perform a bitwise AND operation between the IP address and subnet mask in binary form. Convert both to binary, perform AND operation (1 AND 1 = 1, all else = 0), then convert back to decimal. This gives you the network address. Our calculator performs this automatically—just enter your IP and subnet mask to get instant results."
      },
      {
        question: "How to calculate broadcast address?",
        answer: "The broadcast address is the last address in a subnet, where all host bits are set to 1. To calculate it manually, take the network address, set all host bits to 1, and convert to decimal. For example, in 192.168.1.0/24, the broadcast is 192.168.1.255. Our calculator automatically calculates broadcast addresses for any subnet."
      },
      {
        question: "How many hosts can a /24 subnet have?",
        answer: "A /24 subnet (255.255.255.0) has 256 total IP addresses, with 254 usable hosts. The formula is 2^8 - 2 = 254, where 8 is the number of host bits (32 - 24 = 8). The -2 accounts for the network address (first IP) and broadcast address (last IP). This is the most common subnet size for small networks."
      },
      {
        question: "What is a /28 subnet? How many hosts?",
        answer: "A /28 subnet has a subnet mask of 255.255.255.240. It provides 16 total IP addresses (2^4), with 14 usable hosts (16 - 2). This subnet size is perfect for small departments, point-to-point links, or VLANs that need just a few IP addresses. Common in VLSM designs where different subnets need different sizes."
      },
      {
        question: "How to calculate CIDR notation?",
        answer: "CIDR notation is written as IP address followed by a forward slash and number (e.g., 192.168.1.0/24). The number after the slash represents the number of network bits. To calculate CIDR from subnet mask, count the consecutive 1s in the binary subnet mask. For example, 255.255.255.0 has 24 network bits, so it's /24. Our calculator converts between subnet masks and CIDR notation automatically."
      },
      {
        question: "What is the difference between subnet mask and CIDR?",
        answer: "Subnet mask (e.g., 255.255.255.0) and CIDR (e.g., /24) represent the same information in different formats. Subnet mask uses dotted decimal notation, while CIDR uses prefix length notation. CIDR is more concise and commonly used in modern networking, routing protocols, and cloud configurations. Both indicate how many bits are used for the network portion of an IP address."
      },
      {
        question: "How to subnet a network? Step by step guide.",
        answer: "To subnet a network: 1) Determine number of subnets needed, 2) Calculate subnet bits using 2^n formula, 3) Calculate host bits remaining (32 - network bits - subnet bits), 4) Calculate usable hosts per subnet (2^host_bits - 2), 5) Calculate subnet mask, 6) Calculate network addresses for each subnet. Our calculator automates this entire process—enter your requirements and get instant subnetting results."
      },
      {
        question: "What is VLSM and how does it work?",
        answer: "VLSM (Variable Length Subnet Masking) allows different subnets within the same network to have different subnet masks, enabling efficient IP address allocation. Unlike fixed-length subnetting, VLSM lets you create subnets of various sizes based on actual needs. For example, a point-to-point link uses /30 (2 hosts), while a LAN uses /24 (254 hosts). This maximizes IP space utilization and is essential for modern network design."
      },
      {
        question: "How to calculate supernet or route aggregation?",
        answer: "Supernetting combines multiple contiguous subnets into a single larger network. To calculate supernet, find the common network bits in all subnets, then create a CIDR block that encompasses them all. For example, 192.168.1.0/24 and 192.168.2.0/24 can be aggregated as 192.168.0.0/16. This reduces routing table size and improves network efficiency. Our calculator supports supernetting calculations."
      },
      {
        question: "What are private IP addresses? Which ranges?",
        answer: "Private IP addresses are non-routable on the public internet, used for internal networks. RFC 1918 defines three ranges: 10.0.0.0/8 (10.0.0.0 to 10.255.255.255), 172.16.0.0/12 (172.16.0.0 to 172.31.255.255), and 192.168.0.0/16 (192.168.0.0 to 192.168.255.255). These addresses are reused across different private networks and are not globally unique. Our calculator automatically identifies private IP addresses."
      },
      {
        question: "How to convert binary IP address to decimal?",
        answer: "To convert binary IP to decimal, split the 32-bit binary into four 8-bit octets. Convert each octet from binary to decimal. For example, 11000000.10101000.00000001.00000001 = 192.168.1.1. Each binary position represents a power of 2 (rightmost is 2^0, leftmost is 2^7). Sum the positions with 1s. Our calculator shows IP addresses in binary, decimal, and hexadecimal formats for comprehensive understanding."
      },
      {
        question: "What is wildcard mask? How to calculate it?",
        answer: "A wildcard mask is the inverse of a subnet mask, used in ACLs (Access Control Lists) and routing protocols like OSPF. To calculate wildcard mask, subtract each octet of the subnet mask from 255. For example, subnet mask 255.255.255.0 has wildcard mask 0.0.0.255. In binary, wildcard mask uses 0s where bits must match and 1s where bits can vary. Our calculator provides wildcard masks for any subnet."
      },
      {
        question: "How many subnets can I create from a /24 network?",
        answer: "The number of subnets depends on how many bits you borrow from the host portion. For a /24 network (8 host bits), if you borrow 2 bits for subnetting, you get 2^2 = 4 subnets, each with 2^6 - 2 = 62 hosts. Borrowing 3 bits gives 2^3 = 8 subnets with 30 hosts each. Our calculator helps you determine optimal subnetting based on your requirements."
      },
      {
        question: "What is the default gateway and how to calculate it?",
        answer: "The default gateway is typically the first usable IP address in a subnet (network address + 1). For example, in subnet 192.168.1.0/24, the default gateway is usually 192.168.1.1. However, it can be any usable IP in the subnet, though the first or last usable IP is most common. Our calculator shows the usable IP range, and the first IP is commonly used as the gateway."
      },
      {
        question: "How to use subnet calculator for AWS VPC?",
        answer: "For AWS VPC, use CIDR notation (e.g., 172.31.0.0/16). Our calculator helps you plan VPC CIDR blocks and subnet allocation. AWS supports /16 to /28 CIDR blocks for VPCs. Use VLSM to create subnets of different sizes (e.g., /20 for public subnets, /20 for private subnets within a /16 VPC). Our calculator shows host ranges, which helps plan subnet CIDRs for your VPC architecture."
      },
      {
        question: "How to check if two IPs are in the same subnet?",
        answer: "To check if two IPs are in the same subnet, calculate the network address for both IPs using the same subnet mask. If both IPs produce the same network address, they're in the same subnet. Our calculator makes this easy—enter both IPs with the same subnet mask, and if they show the same network address, they're on the same subnet."
      },
      {
        question: "What is the maximum number of hosts in a subnet?",
        answer: "The maximum number of usable hosts depends on the subnet mask. With a /8 subnet (Class A), you can have 16,777,214 usable hosts (2^24 - 2). However, in practice, subnets are much smaller for manageability. A /24 subnet has 254 usable hosts, which is common for most networks. Our calculator shows the maximum hosts for any subnet size."
      },
      {
        question: "How to calculate first and last usable IP address?",
        answer: "The first usable IP is the network address + 1, and the last usable IP is the broadcast address - 1. For example, in 192.168.1.0/24, network is 192.168.1.0, first usable is 192.168.1.1, last usable is 192.168.1.254, and broadcast is 192.168.1.255. Our calculator automatically shows the first and last usable IP addresses for any subnet."
      },
      {
        question: "What is point-to-point subnet? Best CIDR for P2P links?",
        answer: "Point-to-point (P2P) links connect exactly two devices (e.g., routers). The best CIDR for P2P links is /30 (255.255.255.252), which provides 4 IPs: network address, broadcast address, and 2 usable IPs (one for each end). Some networks use /31 (255.255.255.254) which provides 2 IPs total, but this is less common. Our calculator helps you plan P2P subnets efficiently."
      },
      {
        question: "How to calculate subnet for class A, B, C networks?",
        answer: "Class A uses /8 (255.0.0.0), Class B uses /16 (255.255.0.0), and Class C uses /24 (255.255.255.0) as default masks. However, with CIDR, you can subnet these classes into smaller networks. For example, a Class A network can be subnetted into multiple /24 subnets. Our calculator supports all network classes and shows how CIDR notation works with each class."
      },
      {
        question: "Is subnet calculator free to use?",
        answer: "Yes, our subnet calculator is completely free with no charges, subscriptions, or registration required. You can perform unlimited subnet calculations, access all features (IPv4/IPv6, CIDR, VLSM, binary/hex conversion), and use the tool for personal, educational, commercial, or professional purposes without any cost. All features are available without limitations."
      },
      {
        question: "Can I use subnet calculator on mobile devices?",
        answer: "Yes! Our subnet calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. The calculator is optimized for touch screens, making it easy to enter IP addresses and subnet masks on the go. You can use it for network planning, troubleshooting, or certification exam preparation, wherever you are."
      },
      {
        question: "How accurate is the subnet calculator?",
        answer: "Our subnet calculator is highly accurate, using precise binary arithmetic and standard networking formulas. The calculations match industry-standard methods used by network equipment and protocols. Results are suitable for production network planning, cloud VPC design, and professional use. The calculator follows RFC standards for IP addressing and subnetting."
      },
      {
        question: "What is a VPC CIDR and how do I plan one in AWS or GCP?",
        answer: "A VPC CIDR is the IP range that defines your cloud Virtual Private Cloud. AWS supports VPC CIDRs from /16 (65,536 IPs) to /28 (16 IPs); GCP supports /8 to /29; Azure supports /2 to /29. Use a private RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16) for non-routable internal traffic. A typical 3-tier app with multi-AZ HA needs a /22 (1,024 IPs) split into 6 subnets (3 public, 3 private). Use this calculator to plan the subnet split before you provision."
      },
      {
        question: "Why does AWS reserve 5 IP addresses per subnet?",
        answer: "AWS reserves the first 4 and the last 1 IP of every VPC subnet: .0 (network), .1 (VPC router), .2 (DNS), .3 (future use), and .255/.254 (broadcast equivalent). This means a /24 subnet (256 IPs) gives you 251 usable IPs in AWS, not 254. GCP reserves 4 (network, gateway, second-to-last, broadcast). Azure reserves 5 (similar to AWS). Plan VPC sizing with these reservations in mind — our calculator displays usable host count using standard subnetting rules; subtract 5 for AWS planning."
      },
      {
        question: "What's the maximum and minimum VPC CIDR size for each cloud?",
        answer: "AWS: /16 max (65,536 IPs) down to /28 min (16 IPs). GCP: /8 max (16,777,216 IPs) down to /29 min (8 IPs). Azure: /2 max (just over 1 billion IPs) down to /29 min (8 IPs). For most production workloads, AWS users pick a /16 VPC and subnet it into /24s; GCP users often go with a /16 or /20 primary range plus secondary ranges for GKE pods."
      },
      {
        question: "How do I split a /16 into subnets for multi-AZ HA?",
        answer: "Take a 10.0.0.0/16 (65,536 IPs). For a 3-AZ deployment, split into six /20 subnets: 10.0.0.0/20 (public AZ-a), 10.0.16.0/20 (public AZ-b), 10.0.32.0/20 (public AZ-c), 10.0.128.0/20 (private AZ-a), 10.0.144.0/20 (private AZ-b), 10.0.160.0/20 (private AZ-c). Each /20 has 4,094 usable IPs. Reserve the upper half (10.0.128.0/17) for future expansion."
      }
    ],

    relatedTools: [
      { name: "Conversion Calculator", href: "/calculator/conversion-calculator" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Text to ASCII Binary", href: "/converters/ascii-binary" },
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "IP Subnet Calculator — CIDR, VLSM & Network Analysis",
        description: "Free IPv4/IPv6 subnet calculator with CIDR notation, subnet mask computation, network/broadcast address identification, usable host range analysis, wildcard mask generation, VLSM variable-length subnetting, supernetting route aggregation, and binary/hexadecimal IP conversions for network engineers and IT professionals.",
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
        title: "IP Subnet Calculator — Calculate CIDR, VLSM & Network Masks Free",
        description: "Free IP subnet calculator for IPv4 and IPv6 networks. Compute CIDR notation, subnet masks, network/broadcast addresses, usable host ranges, wildcard masks, VLSM subnetting, supernetting, and binary/hex conversions instantly.",
        path: "/calculator/ip-subnet-calculator"
      }}
    />
  )
}
