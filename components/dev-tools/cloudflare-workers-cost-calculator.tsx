"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Cloud, DollarSign, Server, Database,
  HardDrive, BarChart3, Zap, TrendingUp, Globe, Clock, Shield
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  CloudflareWorkersCostResult, PlanType, RequestsCost, CpuCost,
  KVCost, R2Cost, DurableObjectsCost, CostBreakdownItem, FreeTierUsage, ScalingProjection
} from "@/types/calculator-types/cloudflare-workers-cost.types"

// Cloudflare Workers Pricing (2026)
const PRICING = {
  free: {
    requestsIncluded: 100_000, // per day = ~3M/month
    requestsIncludedMonthly: 3_000_000,
    kvReadsIncluded: 100_000, // per day
    kvReadsIncludedMonthly: 3_000_000,
    kvWritesIncluded: 1_000, // per day
    cpuLimit: 10, // ms per invocation
  },
  paid: {
    baseFee: 5, // $5/month
    requestsIncluded: 10_000_000,
    requestCostPerMillion: 0.30,
    cpuCostPerMillionMs: 0.02, // $0.02 per million ms (Standard pricing)
    kv: {
      readsPerMillion: 0.50,
      writesPerMillion: 5.00,
      deletesPerMillion: 5.00,
      storagePerGB: 0.50,
      readsIncluded: 10_000_000,
      writesIncluded: 1_000_000,
      storageIncludedGB: 1,
    },
    r2: {
      storagePerGB: 0.015,
      classAPerMillion: 4.50, // PUT, POST, LIST
      classBPerMillion: 0.36, // GET, HEAD
      storageIncludedGB: 10,
      classAIncluded: 1_000_000,
      classBIncluded: 10_000_000,
      egressFree: true,
    },
    durableObjects: {
      requestsPerMillion: 0.15,
      durationPerMillionSeconds: 12.50, // wall-clock
      storagePerGB: 0.20,
      storedPerGBIncluded: 1,
      requestsIncluded: 1_000_000,
      durationIncludedHours: 400_000, // seconds
    }
  }
}

export function CloudflareWorkersCostCalculator() {
  const [plan, setPlan] = useState<PlanType>("paid")

  // Requests
  const [requestsPerDay, setRequestsPerDay] = useState("100000")
  const [avgCpuMs, setAvgCpuMs] = useState("5")

  // KV
  const [kvReadsPerDay, setKvReadsPerDay] = useState("0")
  const [kvWritesPerDay, setKvWritesPerDay] = useState("0")
  const [kvStorageGB, setKvStorageGB] = useState("0")

  // R2
  const [r2StorageGB, setR2StorageGB] = useState("0")
  const [r2ClassAOps, setR2ClassAOps] = useState("0")
  const [r2ClassBOps, setR2ClassBOps] = useState("0")

  // Durable Objects
  const [doRequests, setDoRequests] = useState("0")
  const [doWallClockHours, setDoWallClockHours] = useState("0")
  const [doStorageGB, setDoStorageGB] = useState("0")

  const [result, setResult] = useState<CloudflareWorkersCostResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculateCost = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const dailyRequests = Number.parseFloat(requestsPerDay) || 0
      const monthlyRequests = dailyRequests * 30
      const cpuMs = Number.parseFloat(avgCpuMs) || 5
      const p = PRICING.paid

      // Base fee
      const basePlatformFee = plan === "paid" ? p.baseFee : 0

      // Requests cost
      const billableRequests = Math.max(0, monthlyRequests - p.requestsIncluded)
      const requestsTotal = (billableRequests / 1_000_000) * p.requestCostPerMillion
      const requestsCost: RequestsCost = {
        totalRequests: monthlyRequests,
        billableRequests,
        includedRequests: p.requestsIncluded,
        costPerMillion: p.requestCostPerMillion,
        total: plan === "free" ? 0 : Number.parseFloat(requestsTotal.toFixed(2))
      }

      // CPU cost (Standard pricing)
      const totalCpuMs = monthlyRequests * cpuMs
      const totalCpuSeconds = totalCpuMs / 1000
      const cpuTotal = (totalCpuMs / 1_000_000) * p.cpuCostPerMillionMs
      const cpuCost: CpuCost = {
        avgCpuTimeMs: cpuMs,
        totalCpuTimeSeconds: Math.round(totalCpuSeconds),
        billableCpuTime: totalCpuMs,
        costPerMillionMs: p.cpuCostPerMillionMs,
        total: plan === "free" ? 0 : Number.parseFloat(cpuTotal.toFixed(2))
      }

      // KV cost
      const kvMonthlyReads = (Number.parseFloat(kvReadsPerDay) || 0) * 30
      const kvMonthlyWrites = (Number.parseFloat(kvWritesPerDay) || 0) * 30
      const kvGB = Number.parseFloat(kvStorageGB) || 0
      const kvBillableReads = Math.max(0, kvMonthlyReads - p.kv.readsIncluded)
      const kvBillableWrites = Math.max(0, kvMonthlyWrites - p.kv.writesIncluded)
      const kvBillableStorage = Math.max(0, kvGB - p.kv.storageIncludedGB)
      const kvReadCost = (kvBillableReads / 1_000_000) * p.kv.readsPerMillion
      const kvWriteCost = (kvBillableWrites / 1_000_000) * p.kv.writesPerMillion
      const kvStorageCost = kvBillableStorage * p.kv.storagePerGB
      const kvCost: KVCost = {
        reads: kvMonthlyReads,
        writes: kvMonthlyWrites,
        deletes: 0,
        storedGB: kvGB,
        readCost: plan === "free" ? 0 : Number.parseFloat(kvReadCost.toFixed(2)),
        writeCost: plan === "free" ? 0 : Number.parseFloat(kvWriteCost.toFixed(2)),
        storageCost: plan === "free" ? 0 : Number.parseFloat(kvStorageCost.toFixed(2)),
        total: plan === "free" ? 0 : Number.parseFloat((kvReadCost + kvWriteCost + kvStorageCost).toFixed(2))
      }

      // R2 cost
      const r2GB = Number.parseFloat(r2StorageGB) || 0
      const r2A = (Number.parseFloat(r2ClassAOps) || 0) * 30
      const r2B = (Number.parseFloat(r2ClassBOps) || 0) * 30
      const r2BillableStorage = Math.max(0, r2GB - p.r2.storageIncludedGB)
      const r2BillableA = Math.max(0, r2A - p.r2.classAIncluded)
      const r2BillableB = Math.max(0, r2B - p.r2.classBIncluded)
      const r2StorCost = r2BillableStorage * p.r2.storagePerGB
      const r2ACost = (r2BillableA / 1_000_000) * p.r2.classAPerMillion
      const r2BCost = (r2BillableB / 1_000_000) * p.r2.classBPerMillion
      const r2Cost: R2Cost = {
        storedGB: r2GB,
        classAOps: r2A,
        classBOps: r2B,
        egressGB: 0,
        storageCost: Number.parseFloat(r2StorCost.toFixed(2)),
        classACost: Number.parseFloat(r2ACost.toFixed(2)),
        classBCost: Number.parseFloat(r2BCost.toFixed(2)),
        total: Number.parseFloat((r2StorCost + r2ACost + r2BCost).toFixed(2))
      }

      // Durable Objects cost
      const doReq = (Number.parseFloat(doRequests) || 0) * 30
      const doHours = Number.parseFloat(doWallClockHours) || 0
      const doGB = Number.parseFloat(doStorageGB) || 0
      const doBillableReq = Math.max(0, doReq - p.durableObjects.requestsIncluded)
      const doBillableDuration = Math.max(0, doHours * 3600 - p.durableObjects.durationIncludedHours)
      const doBillableStorage = Math.max(0, doGB - p.durableObjects.storedPerGBIncluded)
      const doReqCost = (doBillableReq / 1_000_000) * p.durableObjects.requestsPerMillion
      const doDurCost = (doBillableDuration / 1_000_000) * p.durableObjects.durationPerMillionSeconds * 1_000_000 / 1 // per million seconds
      const doStorCost = doBillableStorage * p.durableObjects.storagePerGB
      // Simplified DO duration cost
      const doActualDurCost = (doBillableDuration / 1_000_000) * p.durableObjects.durationPerMillionSeconds
      const durableObjectsCost: DurableObjectsCost = {
        requests: doReq,
        wallClockHours: doHours,
        storedGB: doGB,
        requestCost: Number.parseFloat(doReqCost.toFixed(2)),
        durationCost: Number.parseFloat(doActualDurCost.toFixed(2)),
        storageCost: Number.parseFloat(doStorCost.toFixed(2)),
        total: Number.parseFloat((doReqCost + doActualDurCost + doStorCost).toFixed(2))
      }

      const totalMonthlyCost = plan === "free" ? 0 : basePlatformFee + requestsCost.total + cpuCost.total + kvCost.total + r2Cost.total + durableObjectsCost.total

      // Cost breakdown
      const items = [
        { label: "Platform Fee", amount: basePlatformFee, color: "bg-gray-500" },
        { label: "Requests", amount: requestsCost.total, color: "bg-blue-500" },
        { label: "CPU Time", amount: cpuCost.total, color: "bg-purple-500" },
        { label: "KV Store", amount: kvCost.total, color: "bg-green-500" },
        { label: "R2 Storage", amount: r2Cost.total, color: "bg-orange-500" },
        { label: "Durable Objects", amount: durableObjectsCost.total, color: "bg-red-500" },
      ].filter(i => i.amount > 0)
      const costBreakdown: CostBreakdownItem[] = items.map(i => ({
        ...i,
        percentage: totalMonthlyCost > 0 ? (i.amount / totalMonthlyCost) * 100 : 0
      }))

      // Free tier usage
      const freeTierUsage: FreeTierUsage = {
        requestsUsed: monthlyRequests,
        requestsLimit: PRICING.free.requestsIncludedMonthly,
        requestsPercent: Math.min(100, (monthlyRequests / PRICING.free.requestsIncludedMonthly) * 100),
        kvReadsUsed: kvMonthlyReads,
        kvReadsLimit: PRICING.free.kvReadsIncludedMonthly,
        kvReadsPercent: PRICING.free.kvReadsIncludedMonthly > 0 ? Math.min(100, (kvMonthlyReads / PRICING.free.kvReadsIncludedMonthly) * 100) : 0,
      }

      // Scaling projection
      const calcScaled = (reqs: number): number => {
        const billable = Math.max(0, reqs - p.requestsIncluded)
        const reqCost = (billable / 1_000_000) * p.requestCostPerMillion
        const cpu = (reqs * cpuMs / 1_000_000) * p.cpuCostPerMillionMs
        return p.baseFee + reqCost + cpu
      }
      const scalingProjection: ScalingProjection[] = [
        { label: "Hobby", requests: "1M", monthlyCost: calcScaled(1_000_000), costPerRequest: (calcScaled(1_000_000) / 1_000_000 * 1000).toFixed(4) },
        { label: "Startup", requests: "10M", monthlyCost: calcScaled(10_000_000), costPerRequest: (calcScaled(10_000_000) / 10_000_000 * 1000).toFixed(4) },
        { label: "Growth", requests: "100M", monthlyCost: calcScaled(100_000_000), costPerRequest: (calcScaled(100_000_000) / 100_000_000 * 1000).toFixed(4) },
        { label: "Scale", requests: "1B", monthlyCost: calcScaled(1_000_000_000), costPerRequest: (calcScaled(1_000_000_000) / 1_000_000_000 * 1000).toFixed(4) },
      ].map(s => ({ ...s, monthlyCost: Number.parseFloat(s.monthlyCost.toFixed(2)) }))

      const costPerMillionRequests = monthlyRequests > 0 ? (totalMonthlyCost / monthlyRequests) * 1_000_000 : 0

      setResult({
        totalMonthlyCost: Number.parseFloat(totalMonthlyCost.toFixed(2)),
        planType: plan,
        basePlatformFee,
        requestsCost,
        cpuCost,
        kvCost,
        r2Cost,
        durableObjectsCost,
        costBreakdown,
        freeTierUsage,
        annualCost: Number.parseFloat((totalMonthlyCost * 12).toFixed(2)),
        costPerMillionRequests: Number.parseFloat(costPerMillionRequests.toFixed(2)),
        scalingProjection
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Cloudflare Workers Cost Estimate`,
      `================================`,
      `Plan: ${result.planType === "free" ? "Free" : "Workers Paid ($5/mo)"}`,
      `Requests: ${(Number.parseFloat(requestsPerDay) * 30).toLocaleString()}/month`,
      ``,
      `Monthly Cost: $${result.totalMonthlyCost.toFixed(2)}`,
      `Annual Cost: $${result.annualCost.toFixed(2)}`,
      `Cost per 1M requests: $${result.costPerMillionRequests.toFixed(2)}`,
      ``,
      result.requestsCost.total > 0 ? `Requests: $${result.requestsCost.total}` : "",
      result.cpuCost.total > 0 ? `CPU Time: $${result.cpuCost.total}` : "",
      result.kvCost.total > 0 ? `KV Store: $${result.kvCost.total}` : "",
      result.r2Cost.total > 0 ? `R2 Storage: $${result.r2Cost.total}` : "",
      result.durableObjectsCost.total > 0 ? `Durable Objects: $${result.durableObjectsCost.total}` : "",
      ``,
      `Generated by FastTools Cloudflare Workers Cost Calculator`
    ].filter(Boolean)
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(amount)

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cloud className="h-6 w-6 text-foreground" />
            </div>
            Cloudflare Workers Cost Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Estimate monthly costs for Workers, KV, R2, and Durable Objects based on your usage
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Plan Selection */}
          <div className="space-y-3">
            <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Shield className="h-4 w-4" /> Plan
            </GLabel>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPlan("free")}
                aria-pressed={plan === "free"}
                className={`p-3 rounded-lg border transition-all text-left ${plan === "free" ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"}`}
              >
                <div className="text-sm font-medium">Free</div>
                <div className={`text-xs ${plan === "free" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>100K req/day, 10ms CPU</div>
              </button>
              <button
                type="button"
                onClick={() => setPlan("paid")}
                aria-pressed={plan === "paid"}
                className={`p-3 rounded-lg border transition-all text-left ${plan === "paid" ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"}`}
              >
                <div className="text-sm font-medium">Workers Paid — $5/mo</div>
                <div className={`text-xs ${plan === "paid" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>10M req included, 30s CPU</div>
              </button>
            </div>
          </div>

          {/* Workers Requests */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Globe className="h-4 w-4" /> Workers Requests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="requestsPerDay" className="text-sm font-semibold text-heading-accent">Requests Per Day</GLabel>
                <GInput id="requestsPerDay" type="number" value={requestsPerDay} onChange={(e) => setRequestsPerDay(e.target.value)} placeholder="100000" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                <div className="text-xs text-muted-foreground">≈ {((Number.parseFloat(requestsPerDay) || 0) * 30 / 1_000_000).toFixed(1)}M/month</div>
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="avgCpuMs" className="text-sm font-semibold text-heading-accent">Avg CPU Time (ms)</GLabel>
                <GInput id="avgCpuMs" type="number" step="0.1" value={avgCpuMs} onChange={(e) => setAvgCpuMs(e.target.value)} placeholder="5" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                <div className="text-xs text-muted-foreground">Free: max 10ms | Paid: max 30s</div>
              </div>
            </div>
          </div>

          {/* Advanced Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
          >
            {showAdvanced ? "Hide" : "Show"} KV, R2 & Durable Objects
            <svg className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showAdvanced && (
            <>
              {/* KV */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                  <Database className="h-4 w-4" /> Workers KV
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Reads/Day</GLabel>
                    <GInput type="number" value={kvReadsPerDay} onChange={(e) => setKvReadsPerDay(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Writes/Day</GLabel>
                    <GInput type="number" value={kvWritesPerDay} onChange={(e) => setKvWritesPerDay(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Storage (GB)</GLabel>
                    <GInput type="number" step="0.1" value={kvStorageGB} onChange={(e) => setKvStorageGB(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                </div>
              </div>

              {/* R2 */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                  <HardDrive className="h-4 w-4" /> R2 Object Storage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Storage (GB)</GLabel>
                    <GInput type="number" step="0.1" value={r2StorageGB} onChange={(e) => setR2StorageGB(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Class A Ops/Day</GLabel>
                    <GInput type="number" value={r2ClassAOps} onChange={(e) => setR2ClassAOps(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                    <div className="text-xs text-muted-foreground">PUT, POST, LIST</div>
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Class B Ops/Day</GLabel>
                    <GInput type="number" value={r2ClassBOps} onChange={(e) => setR2ClassBOps(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                    <div className="text-xs text-muted-foreground">GET, HEAD</div>
                  </div>
                </div>
              </div>

              {/* Durable Objects */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                  <Server className="h-4 w-4" /> Durable Objects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Requests/Day</GLabel>
                    <GInput type="number" value={doRequests} onChange={(e) => setDoRequests(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Wall-Clock Hours/Mo</GLabel>
                    <GInput type="number" value={doWallClockHours} onChange={(e) => setDoWallClockHours(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Storage (GB)</GLabel>
                    <GInput type="number" step="0.1" value={doStorageGB} onChange={(e) => setDoStorageGB(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </>
          )}

          <GButton
            onClick={calculateCost}
            disabled={isCalculating}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculating...</>
            ) : (
              <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate Monthly Cost</>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Total Cost */}
          <GCard className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><DollarSign className="h-4 w-4 text-foreground" /></div>
                Monthly Cost Estimate
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Estimated Monthly Cost</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{formatCurrency(result.totalMonthlyCost)}</div>
                <div className="text-sm text-muted-foreground mt-2">
                  {result.planType === "free" ? "Free tier" : `Workers Paid · ${formatCurrency(result.annualCost)}/year`}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <Globe className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{(result.requestsCost.totalRequests / 1_000_000).toFixed(1)}M</div>
                  <div className="text-xs text-muted-foreground">Requests/mo</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <DollarSign className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">${result.costPerMillionRequests.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">Per 1M requests</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <Clock className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{(result.cpuCost.totalCpuTimeSeconds / 3600).toFixed(1)}h</div>
                  <div className="text-xs text-muted-foreground">CPU Time/mo</div>
                </div>
              </div>

              {/* Cost Breakdown */}
              {result.costBreakdown.length > 0 && (
                <div className="p-3 bg-muted rounded-lg border border-border">
                  <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                    <BarChart3 className="h-3.5 w-3.5" /> Cost Breakdown
                  </h4>
                  <div className="space-y-1.5">
                    {result.costBreakdown.map(item => (
                      <div key={item.label} className="flex items-center gap-2 text-xs">
                        <span className="w-32 text-muted-foreground">{item.label}</span>
                        <div className="flex-1 bg-border rounded-full h-2">
                          <div className={`${item.color} h-2 rounded-full`} style={{ width: `${Math.max(2, item.percentage)}%` }} />
                        </div>
                        <span className="w-16 text-right font-medium text-foreground">{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Free Tier Usage */}
              {result.planType === "free" && (
                <div className="p-3 bg-muted rounded-lg border border-border">
                  <h4 className="text-xs font-semibold text-heading-accent mb-2">Free Tier Usage</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Requests</span>
                        <span className={`font-medium ${result.freeTierUsage.requestsPercent > 100 ? "text-red-500" : "text-foreground"}`}>
                          {(result.freeTierUsage.requestsUsed / 1_000_000).toFixed(1)}M / {(result.freeTierUsage.requestsLimit / 1_000_000).toFixed(0)}M
                          {result.freeTierUsage.requestsPercent > 100 && " — OVER LIMIT"}
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div className={`h-2 rounded-full ${result.freeTierUsage.requestsPercent > 100 ? "bg-red-500" : result.freeTierUsage.requestsPercent > 80 ? "bg-yellow-500" : "bg-green-500"}`}
                          style={{ width: `${Math.min(100, result.freeTierUsage.requestsPercent)}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Scaling Projection */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><TrendingUp className="h-4 w-4 text-foreground" /></div>
                Scaling Projection (Workers Paid, {avgCpuMs}ms CPU)
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Scale</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Requests/mo</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Monthly Cost</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Cost/1K Req</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.scalingProjection.map(s => (
                      <tr key={s.label} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{s.label}</td>
                        <td className="py-2 px-2 text-right text-foreground">{s.requests}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(s.monthlyCost)}</td>
                        <td className="py-2 px-2 text-right text-foreground">${s.costPerRequest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Projection based on Workers requests + CPU time only (excludes KV, R2, DO). Actual costs depend on usage patterns.
              </p>
            </GCardContent>
          </GCard>

          {/* Pricing Reference */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <h4 className="text-xs font-semibold text-heading-accent mb-2">Cloudflare Workers Pricing Reference</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px]">
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">Requests</div>
                  <div className="text-muted-foreground">$0.30 / million (10M free)</div>
                </div>
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">CPU Time</div>
                  <div className="text-muted-foreground">$0.02 / million ms</div>
                </div>
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">KV Reads</div>
                  <div className="text-muted-foreground">$0.50 / million (10M free)</div>
                </div>
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">KV Writes</div>
                  <div className="text-muted-foreground">$5.00 / million (1M free)</div>
                </div>
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">R2 Storage</div>
                  <div className="text-muted-foreground">$0.015/GB (10GB free)</div>
                </div>
                <div className="p-2 bg-muted rounded border border-border">
                  <div className="font-medium text-foreground">R2 Egress</div>
                  <div className="text-muted-foreground">FREE (zero egress fees)</div>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
