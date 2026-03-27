"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  CheckCircle,
  Globe,
  Loader2,
  Lock,
  Search,
  Server,
  Shield,
  XCircle,
} from "lucide-react"

interface DnsRecords {
  A?: string[]
  AAAA?: string[]
  MX?: Array<{ priority: number; exchange: string }>
  CNAME?: string[]
  TXT?: string[][]
  NS?: string[]
  SOA?: { nsname: string; hostmaster: string; serial: number; refresh: number; retry: number; expire: number; minttl: number } | null
}

interface SslInfo {
  valid: boolean
  issuer: string
  subject: string
  validFrom: string
  validTo: string
  daysRemaining: number
  protocol: string
  serialNumber: string
  fingerprint: string
  subjectAltNames: string[]
  error?: string
}

export function DnsSslChecker() {
  const [domain, setDomain] = useState("")
  const [activeTab, setActiveTab] = useState("dns")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [dnsRecords, setDnsRecords] = useState<DnsRecords | null>(null)
  const [sslInfo, setSslInfo] = useState<SslInfo | null>(null)
  const [checkedDomain, setCheckedDomain] = useState("")

  const handleLookup = async () => {
    if (!domain.trim()) return
    setIsLoading(true)
    setError("")
    setDnsRecords(null)
    setSslInfo(null)

    try {
      const response = await fetch("/api/dns-ssl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim(), type: "both" }),
      })

      const result = await response.json()

      if (result.success) {
        setDnsRecords(result.dns || null)
        setSslInfo(result.ssl || null)
        setCheckedDomain(result.domain)
      } else {
        setError(result.error || "Lookup failed")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const hasResults = dnsRecords || sslInfo

  return (
    <div className="space-y-6">
      {/* Search */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" /> DNS Lookup & SSL Checker
          </GCardTitle>
          <GCardDescription>
            Enter a domain to check DNS records and SSL certificate details.
          </GCardDescription>
        </GCardHeader>
        <GCardContent>
          <div className="flex gap-3">
            <div className="flex-1">
              <GInput
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.com"
                onKeyDown={(e) => e.key === "Enter" && handleLookup()}
              />
            </div>
            <GButton onClick={handleLookup} disabled={isLoading || !domain.trim()}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <><Search className="h-4 w-4 mr-1.5" /> Check</>
              )}
            </GButton>
          </div>
          {error && (
            <div className="mt-3 text-sm text-red-500 bg-red-500/10 rounded-lg p-3">{error}</div>
          )}
        </GCardContent>
      </GCard>

      {/* Results */}
      {hasResults && (
        <GTabs value={activeTab} onValueChange={setActiveTab}>
          <GTabsList className="grid w-full grid-cols-2">
            <GTabsTrigger value="dns" className="flex items-center gap-1.5">
              <Server className="h-4 w-4" /> DNS Records
            </GTabsTrigger>
            <GTabsTrigger value="ssl" className="flex items-center gap-1.5">
              <Lock className="h-4 w-4" /> SSL Certificate
            </GTabsTrigger>
          </GTabsList>

          {/* DNS Tab */}
          <GTabsContent value="dns" className="mt-4 space-y-4">
            {dnsRecords && (
              <>
                <GCard>
                  <GCardHeader className="pb-3">
                    <GCardTitle className="text-base">DNS Records for {checkedDomain}</GCardTitle>
                  </GCardHeader>
                  <GCardContent className="space-y-4">
                    {/* A Records */}
                    {dnsRecords.A && dnsRecords.A.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-blue-500 text-white text-xs">A</GBadge> IPv4 Address
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.A.map((ip, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm">{ip}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* AAAA Records */}
                    {dnsRecords.AAAA && dnsRecords.AAAA.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-purple-500 text-white text-xs">AAAA</GBadge> IPv6 Address
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.AAAA.map((ip, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm break-all">{ip}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* MX Records */}
                    {dnsRecords.MX && dnsRecords.MX.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-green-500 text-white text-xs">MX</GBadge> Mail Exchange
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.MX.map((mx, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm flex justify-between">
                              <span>{mx.exchange}</span>
                              <span className="text-muted-foreground">Priority: {mx.priority}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* NS Records */}
                    {dnsRecords.NS && dnsRecords.NS.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-orange-500 text-white text-xs">NS</GBadge> Name Servers
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.NS.map((ns, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm">{ns}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CNAME Records */}
                    {dnsRecords.CNAME && dnsRecords.CNAME.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-teal-500 text-white text-xs">CNAME</GBadge> Canonical Name
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.CNAME.map((cn, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm">{cn}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TXT Records */}
                    {dnsRecords.TXT && dnsRecords.TXT.length > 0 && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-yellow-600 text-white text-xs">TXT</GBadge> Text Records
                        </GLabel>
                        <div className="space-y-1">
                          {dnsRecords.TXT.map((txt, i) => (
                            <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-xs break-all">{txt.join("")}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SOA Record */}
                    {dnsRecords.SOA && (
                      <div>
                        <GLabel className="flex items-center gap-1.5 mb-2">
                          <GBadge className="bg-red-500 text-white text-xs">SOA</GBadge> Start of Authority
                        </GLabel>
                        <div className="bg-muted rounded px-3 py-2 font-mono text-sm space-y-1">
                          <div>Primary NS: {dnsRecords.SOA.nsname}</div>
                          <div>Admin: {dnsRecords.SOA.hostmaster}</div>
                          <div>Serial: {dnsRecords.SOA.serial}</div>
                        </div>
                      </div>
                    )}
                  </GCardContent>
                </GCard>
              </>
            )}
          </GTabsContent>

          {/* SSL Tab */}
          <GTabsContent value="ssl" className="mt-4 space-y-4">
            {sslInfo && (
              <GCard>
                <GCardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {sslInfo.error ? (
                      <XCircle className="h-6 w-6 text-red-500" />
                    ) : sslInfo.valid ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    )}
                    <div>
                      <GCardTitle className="text-base">
                        SSL Certificate for {checkedDomain}
                      </GCardTitle>
                      <GCardDescription>
                        {sslInfo.error
                          ? `Error: ${sslInfo.error}`
                          : sslInfo.valid
                            ? `Valid — ${sslInfo.daysRemaining} days remaining`
                            : "Certificate is invalid or expired"
                        }
                      </GCardDescription>
                    </div>
                  </div>
                </GCardHeader>
                {!sslInfo.error && (
                  <GCardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Subject</span>
                        <p className="font-mono font-medium">{sslInfo.subject}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Issuer</span>
                        <p className="font-mono font-medium">{sslInfo.issuer}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Valid From</span>
                        <p className="font-medium">{sslInfo.validFrom}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Valid Until</span>
                        <p className={cn("font-medium", sslInfo.daysRemaining < 30 ? "text-red-500" : "")}>
                          {sslInfo.validTo}
                          {sslInfo.daysRemaining < 30 && ` (${sslInfo.daysRemaining} days!)`}
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Protocol</span>
                        <p className="font-mono font-medium">{sslInfo.protocol}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Days Remaining</span>
                        <p className={cn("font-bold text-lg", sslInfo.daysRemaining > 30 ? "text-green-500" : sslInfo.daysRemaining > 7 ? "text-yellow-500" : "text-red-500")}>
                          {sslInfo.daysRemaining}
                        </p>
                      </div>
                      {sslInfo.subjectAltNames.length > 0 && (
                        <div className="sm:col-span-2">
                          <span className="text-muted-foreground">Subject Alt Names (SAN)</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {sslInfo.subjectAltNames.slice(0, 20).map((san, i) => (
                              <GBadge key={i} variant="outline" className="text-xs font-mono">{san}</GBadge>
                            ))}
                            {sslInfo.subjectAltNames.length > 20 && (
                              <GBadge variant="outline" className="text-xs">+{sslInfo.subjectAltNames.length - 20} more</GBadge>
                            )}
                          </div>
                        </div>
                      )}
                      {sslInfo.fingerprint && (
                        <div className="sm:col-span-2">
                          <span className="text-muted-foreground">Fingerprint (SHA-256)</span>
                          <p className="font-mono text-xs break-all mt-1">{sslInfo.fingerprint}</p>
                        </div>
                      )}
                    </div>
                  </GCardContent>
                )}
              </GCard>
            )}
          </GTabsContent>
        </GTabs>
      )}
    </div>
  )
}
