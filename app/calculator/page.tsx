import { Metadata } from 'next';
import React from 'react'
import Image from "next/image"
import { GToolCard } from "@/ui/gtool-card"

import {
  Calculator,
  Heart,
  Zap,
  Target,
  Users,
  Router,
  CalendarHeart

} from "lucide-react"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const tools = [
  {
    title: "IP Subnet Calculator",
    description: "Calculate subnet masks, network addresses, and host ranges. Essential tool for network engineers and IT professionals.",
    icon: Router,
    href: "/calculator/ip-subnet-calculator",
  },
  {
    title: "Pregnancy Conception Calculator",
    description: "Calculate optimal conception dates and fertile windows. Plan pregnancy with ovulation tracking.",
    icon: CalendarHeart,
    href: "/calculator/pregnancy-conception-calculator",
  },
  {
    title: "Love Calculator",
    description: "Fun compatibility calculator based on names. Entertainment tool for calculating love percentages.",
    icon: Heart,
    href: "/calculator/love-calculator",
  },
]

const toolConfig = createToolConfig({
  toolName: "Online Calculators",
  description:
    "Free online calculator hub — browser-based calculators for networking, conception planning, and fun compatibility scores. No signup, no install, mobile-friendly.",
  metaTitle:
    "Online Calculators — Love, Conception & IP Subnet",
  metaDescription:
    "Free online calculators: love compatibility, pregnancy conception date, and IP subnet / CIDR planning. Mobile-friendly, no signup — just answers.",
  itemList: {
    name: "Online Calculators",
    description:
      "Free calculators for networking, conception planning, and entertainment.",
    items: tools.map((tool) => ({
      name: tool.title,
      description: tool.description,
      url: tool.href,
    })),
  },
  path: "/calculator",
  breadcrumbs: [{ label: "Calculators", href: "/calculator" }],
  header: {
    title: "Online Calculators",
    description:
      "Focused calculators for network engineering, conception planning, and a bit of fun.",
    titleSize: "large",
    descriptionSize: "small",
    color: "blue",
  },
  content: {
    overview:
      "This category groups focused calculators for technical work and life planning. Use the IP Subnet Calculator for network design, the Pregnancy Conception Calculator for fertile-window planning, and the Love Calculator for lighthearted name compatibility. Choose a tool, enter your inputs, and get a fast breakdown you can use immediately.",
    howToSteps: [
      "Pick the calculator that matches your task (networking, conception planning, or fun).",
      "Enter values in the required fields and choose any optional settings.",
      "Review the instant output and supporting breakdown.",
      "Adjust inputs to compare scenarios and validate assumptions.",
      "Use the result for planning, study, reporting, or day-to-day decisions.",
    ],
    features: [
      "Three focused calculator pages in one category",
      "Browser-based calculations with no signup",
      "IPv4/IPv6 subnetting with CIDR and VLSM support",
      "Conception and fertile-window date planning",
      "Clear result formatting for quick interpretation",
      "Mobile-friendly interfaces",
    ],
    useCases: [
      "Subnetting and IP allocation for network engineers and students",
      "Planning VPC CIDR blocks for cloud deployments",
      "Estimating conception dates and fertile windows when planning a pregnancy",
      "Coordinating timelines with healthcare providers",
      "Sharing fun love-compatibility scores with friends",
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Free Online Calculators, In One Place</h2>
          <p className="text-muted-foreground leading-relaxed">
            FastTools hosts purpose-built calculators that are browser-based, run locally on your device, require no signup, and have no ads inside the calculator itself. This category focuses on three specialties: network subnetting for IT professionals, conception date planning for growing families, and a classic love compatibility game for entertainment.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Calculators (by category)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Networking &amp; Technical</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><a href="/calculator/ip-subnet-calculator" className="hover:text-foreground underline">IP Subnet / VPC CIDR Calculator</a> — subnet masks, host ranges, CIDR notation</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Pregnancy &amp; Family</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><a href="/calculator/pregnancy-conception-calculator" className="hover:text-foreground underline">Conception Date Calculator</a> — fertile windows and conception timing</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Just for Fun</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><a href="/calculator/love-calculator" className="hover:text-foreground underline">Love Calculator</a> — name-based compatibility scores</li>
                <li><a href="/fun-tools/future-age" className="hover:text-foreground underline">Future Age Calculator</a></li>
                <li><a href="/fun-tools/anniversary" className="hover:text-foreground underline">Anniversary Calculator</a></li>
                <li><a href="/fun-tools/birthday-countdown" className="hover:text-foreground underline">Birthday Countdown</a></li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Money &amp; Splitting</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><a href="/finance-tools/paypal-fee" className="hover:text-foreground underline">PayPal Fee Calculator</a></li>
                <li><a href="/finance-tools/bill-splitter" className="hover:text-foreground underline">Bill Splitter</a></li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Why FastTools Calculators vs Calculator.net or Omni?</h2>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
            <li><strong>Client-side privacy:</strong> Your inputs never leave your browser. Calculator.net and most competitors run calculations server-side.</li>
            <li><strong>No ads inside the calculator:</strong> Other free calculator sites surround the input fields with ad units. Ours don&apos;t — the calculator UI is clean.</li>
            <li><strong>Current data:</strong> Where calculators depend on published rates (like PayPal fees), we use the latest published numbers, not 2020 references.</li>
            <li><strong>Deep linking:</strong> Every calculator is its own page with focused content, FAQs, and worked examples — not a single mega-page with 50 calculators crammed into tabs.</li>
            <li><strong>Free with no &quot;Pro&quot; tier:</strong> No watermarks, no signup walls, no daily limits.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Calculator Workflows You Can Chain</h2>
          <p className="text-muted-foreground leading-relaxed">Some planning tasks pair naturally with other FastTools pages:</p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
            <li><strong>Network design:</strong> <a href="/calculator/ip-subnet-calculator" className="underline">IP Subnet Calculator</a> → <a href="/web-tools/whois-lookup" className="underline">WHOIS Lookup</a> for domain and IP research</li>
            <li><strong>Family milestones:</strong> <a href="/calculator/pregnancy-conception-calculator" className="underline">Conception Calculator</a> → <a href="/fun-tools/birthday-countdown" className="underline">Birthday Countdown</a> → <a href="/fun-tools/anniversary" className="underline">Anniversary Calculator</a></li>
            <li><strong>Date night fun:</strong> <a href="/calculator/love-calculator" className="underline">Love Calculator</a> → <a href="/finance-tools/bill-splitter" className="underline">Bill Splitter</a> for the dinner check</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Hub, Many Names</h2>
          <p className="text-sm text-muted-foreground">Different search phrasings, same page:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· free online calculator</li>
            <li>· online calculator hub</li>
            <li>· best free online calculators</li>
            <li>· subnet and conception calculator list</li>
            <li>· free advanced calculator</li>
            <li>· browser-based calculators</li>
            <li>· calculator without download</li>
            <li>· free online calculator no signup</li>
          </ul>
        </article>
      </div>
    ),
    aboutToolText:
      "This calculator category provides focused tools for network subnetting, conception planning, and fun compatibility scores. Each page is designed for quick input, clear output, and practical comparison workflows.",
    relatedTools: [
      { name: "Finance Tools", href: "/finance-tools" },
      { name: "Fun Tools", href: "/fun-tools" },
      { name: "Converters", href: "/converters" },
      { name: "SEO Tools", href: "/seo-tools" },
      { name: "Crypto Tools", href: "/crypto-tools" },
      { name: "Image Tools", href: "/image-tools" },
      { name: "PDF Tools", href: "/pdf-tools" },
      { name: "All Tools", href: "/all-tools" },
    ],
    faqs: [
      {
        question: "How do I calculate IP subnet masks and network addresses?",
        answer:
          "Our IP Subnet Calculator provides comprehensive network analysis for both IPv4 and IPv6 addresses. The calculator determines subnet masks, CIDR notation, network addresses, broadcast addresses, usable host ranges, and total host capacity. It supports Variable Length Subnet Masking (VLSM) for efficient IP allocation and supernetting calculations for route aggregation. Simply enter your IP address and subnet mask or CIDR notation to get complete network topology information.",
      },
      {
        question: "How do I calculate my conception date and fertile window?",
        answer:
          "Use our Pregnancy Conception Calculator to estimate conception dates and fertile windows. Enter your last menstrual period or expected due date, and the calculator works backward to identify the most likely conception window and ovulation timing. This helps you plan appointments, understand your timeline, and coordinate with healthcare providers. As with any date-based estimate, confirm specifics with your doctor.",
      },
      {
        question: "Is the Love Calculator accurate?",
        answer:
          "The Love Calculator is an entertainment tool. It generates a compatibility percentage from the names you enter using a consistent, repeatable algorithm — the same pair of names always produces the same score. It is meant for fun with friends and partners, not as genuine relationship advice.",
      },
      {
        question: "Are online calculators accurate and reliable?",
        answer:
          "Our calculators implement industry-standard formulas validated against authoritative sources. The IP Subnet Calculator follows RFC-defined addressing rules, and the conception calculator uses standard pregnancy dating conventions. However, always verify critical calculations — especially for medical decisions — against independent sources or professional consultation.",
      },
      {
        question: "How do online calculators work so fast?",
        answer:
          "Our calculators run entirely in your browser using optimized JavaScript. The browser's engine compiles and executes the calculations in milliseconds, so even detailed breakdowns like full subnet tables appear instantaneous. Because everything runs locally, your inputs never leave your device.",
      },
      {
        question: "What should I do if the calculator is not working?",
        answer:
          "If our online calculator isn't working, try these troubleshooting steps: (1) Refresh the page (Ctrl+R or Cmd+R), (2) Clear browser cache and cookies for our site, (3) Disable browser extensions that might interfere, (4) Try a different browser (Chrome, Firefox, Safari, Edge), (5) Check if JavaScript is enabled in your browser settings, (6) Ensure you have a stable internet connection, (7) Update your browser to the latest version. If issues persist, try accessing from a different device.",
      },
      {
        question: "Do I need to buy a physical calculator or can I use online tools?",
        answer:
          "For the tasks covered here — subnetting, conception date planning, and compatibility fun — online tools are the practical choice, since physical calculators don't handle dates or IP addressing well. Our web-based calculators are free, require no download or registration, and work on any device with a browser.",
      },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ToolsPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CalculatorGrid />)} />
}

function CalculatorGrid() {
  return (
    <div className="space-y-8">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-border shadow-md">
        <Image
          src="/images/calculator-hero.png"
          alt="Calculator Tools Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
          <Calculator className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium text-sm">Focused Tools</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium text-sm">1M+ Users</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium text-sm">Free Forever</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
          <Target className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium text-sm">Professional</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, index) => (
          <GToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={tool.icon}
            className="animate-fade-in-up"
          />
        ))}
      </div>
    </div>
  )
}
