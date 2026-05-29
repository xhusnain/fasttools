"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  Building2,
  CalendarClock,
  CheckCircle,
  FileText,
  Globe,
  Loader2,
  Lock,
  Search,
  Server,
  ServerCog,
  Shield,
  User,
} from "lucide-react"

interface Contact {
  role: string
  handle?: string
  name?: string
  organization?: string
  email?: string
  phone?: string
  kind?: string
  status?: string
  address?: string
  countryCode?: string
  redacted?: boolean
}

interface WhoisResult {
  domain: string
  unicodeName?: string
  registered: boolean
  registryDomainId?: string
  statuses: string[]
  nameservers: string[]
  dates: { created?: string; updated?: string; expires?: string; registrarExpires?: string; rdapUpdated?: string }
  registrar: { name?: string; ianaId?: string; url?: string; abuseEmail?: string; abusePhone?: string }
  contacts: Contact[]
  dnssec: { signed: boolean; label: string }
  servers: { registryUrl?: string; registrarUrl?: string }
  notices: Array<{ title: string; text: string }>
  redactedFields: string[]
}

const ROLE_LABELS: Record<string, string> = {
  registrant: "Registrant",
  administrative: "Administrative Contact",
  technical: "Technical Contact",
  billing: "Billing Contact",
}

function formatDate(iso?: string): string {
  if (!iso) return "—"
  try {
    const d = new Date(iso)
    if (isNaN(d.getTime())) return iso
    return d.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })
  } catch {
    return iso
  }
}

function daysUntil(iso?: string): number | null {
  if (!iso) return null
  const d = new Date(iso)
  if (isNaN(d.getTime())) return null
  return Math.floor((d.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

function Field({ label, value, mono }: { label: string; value?: string; mono?: boolean }) {
  if (!value) return null
  return (
    <div>
      <span className="text-muted-foreground text-xs">{label}</span>
      <p className={cn("font-medium break-words", mono && "font-mono text-sm")}>{value}</p>
    </div>
  )
}

function LinkField({ label, href }: { label: string; href?: string }) {
  if (!href) return null
  return (
    <div>
      <span className="text-muted-foreground text-xs">{label}</span>
      <p className="font-mono text-sm break-all">
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {href}
        </a>
      </p>
    </div>
  )
}

export function WhoisLookup() {
  const [domain, setDomain] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<WhoisResult | null>(null)

  const handleLookup = async () => {
    if (!domain.trim()) return
    setIsLoading(true)
    setError("")
    setResult(null)
    try {
      const response = await fetch("/api/whois", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domain.trim() }),
      })
      const data = await response.json()
      if (data.success) setResult(data.result)
      else setError(data.error || "Lookup failed")
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const expiryDays = result?.registered ? daysUntil(result.dates.expires) : null

  return (
    <div className="space-y-6">
      {/* Search */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" /> WHOIS & Domain Lookup
          </GCardTitle>
          <GCardDescription>
            Enter any domain to view its full registration record — registrar, dates, status,
            nameservers, contacts, and DNSSEC.
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
                <>
                  <Search className="h-4 w-4 mr-1.5" /> Lookup
                </>
              )}
            </GButton>
          </div>
          {error && (
            <div className="mt-3 text-sm text-red-500 bg-red-500/10 rounded-lg p-3">{error}</div>
          )}
        </GCardContent>
      </GCard>

      {/* Not registered */}
      {result && !result.registered && (
        <GCard>
          <GCardContent className="flex items-center gap-3 py-6">
            <CheckCircle className="h-7 w-7 text-green-500 shrink-0" />
            <div>
              <p className="font-semibold">
                <span className="font-mono">{result.domain}</span> appears to be available
              </p>
              <p className="text-sm text-muted-foreground">
                No registration record was found in the registry — this domain may be unregistered.
              </p>
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Registered results */}
      {result && result.registered && (
        <div className="space-y-4">
          {/* Status banner */}
          <GCard>
            <GCardContent className="flex items-center gap-3 py-4">
              <CheckCircle className="h-6 w-6 text-blue-500 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold font-mono">{result.domain}</p>
                <p className="text-sm text-muted-foreground">
                  Registered
                  {expiryDays !== null &&
                    ` — expires in ${expiryDays.toLocaleString()} day${expiryDays === 1 ? "" : "s"}`}
                  {result.registrar.name && ` · ${result.registrar.name}`}
                </p>
              </div>
            </GCardContent>
          </GCard>

          {/* Domain Information */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Globe className="h-4 w-4" /> Domain Information
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Field label="Domain Name" value={result.domain} mono />
              <Field label="Internationalized Name (IDN)" value={result.unicodeName} mono />
              <Field label="Registry Domain ID" value={result.registryDomainId} mono />
              {result.statuses.length > 0 && (
                <div className="sm:col-span-2">
                  <span className="text-muted-foreground text-xs">Domain Status</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {result.statuses.map((s, i) => (
                      <GBadge key={i} variant="outline" className="text-xs font-mono">
                        {s}
                      </GBadge>
                    ))}
                  </div>
                </div>
              )}
            </GCardContent>
          </GCard>

          {/* Dates */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <CalendarClock className="h-4 w-4" /> Dates
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Field label="Created" value={formatDate(result.dates.created)} />
              <div>
                <span className="text-muted-foreground text-xs">Registry Expiration</span>
                <p
                  className={cn(
                    "font-medium",
                    expiryDays !== null && expiryDays < 30 ? "text-red-500" : ""
                  )}
                >
                  {formatDate(result.dates.expires)}
                  {expiryDays !== null && expiryDays < 30 && ` (${expiryDays} days!)`}
                </p>
              </div>
              {result.dates.registrarExpires && (
                <Field label="Registrar Expiration" value={formatDate(result.dates.registrarExpires)} />
              )}
              <Field label="Last Updated" value={formatDate(result.dates.updated)} />
              <Field label="RDAP DB Updated" value={formatDate(result.dates.rdapUpdated)} />
            </GCardContent>
          </GCard>

          {/* Contacts */}
          {result.contacts.length > 0 && (
            <GCard>
              <GCardHeader className="pb-3">
                <GCardTitle className="text-base flex items-center gap-2">
                  <User className="h-4 w-4" /> Contact Information
                </GCardTitle>
                <GCardDescription>
                  Personal contact data is often redacted by registries under ICANN privacy rules (GDPR).
                </GCardDescription>
              </GCardHeader>
              <GCardContent className="space-y-4">
                {result.contacts.map((c, i) => (
                  <div key={i} className="border border-border rounded-lg p-3">
                    <GLabel className="flex items-center gap-2 mb-2">
                      <GBadge className="bg-primary text-primary-foreground text-xs">
                        {ROLE_LABELS[c.role] || c.role}
                      </GBadge>
                      {c.redacted && (
                        <span className="text-xs text-muted-foreground">redacted for privacy</span>
                      )}
                    </GLabel>
                    {c.redacted ? (
                      <p className="text-sm text-muted-foreground italic">
                        The registry redacted this contact&apos;s details in compliance with data-protection rules.
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Field label="Handle" value={c.handle} mono />
                        <Field label="Name" value={c.name} />
                        <Field label="Organization" value={c.organization} />
                        <Field label="Email" value={c.email} mono />
                        <Field label="Phone" value={c.phone} mono />
                        <Field label="Kind" value={c.kind} />
                        <Field label="Status" value={c.status} />
                        <Field label="Country (ISO-3166)" value={c.countryCode} mono />
                        <div className="sm:col-span-2">
                          <Field label="Mailing Address" value={c.address} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </GCardContent>
            </GCard>
          )}

          {/* Registrar */}
          {(result.registrar.name || result.registrar.ianaId) && (
            <GCard>
              <GCardHeader className="pb-3">
                <GCardTitle className="text-base flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> Registrar Information
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <Field label="Registrar Name" value={result.registrar.name} />
                <Field label="IANA ID" value={result.registrar.ianaId} mono />
                <Field label="Abuse Email" value={result.registrar.abuseEmail} mono />
                <Field label="Abuse Phone" value={result.registrar.abusePhone} mono />
                <div className="sm:col-span-2">
                  <LinkField label="About the Registrar" href={result.registrar.url} />
                </div>
              </GCardContent>
            </GCard>
          )}

          {/* Nameservers */}
          {result.nameservers.length > 0 && (
            <GCard>
              <GCardHeader className="pb-3">
                <GCardTitle className="text-base flex items-center gap-2">
                  <Server className="h-4 w-4" /> Nameservers
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-1">
                {result.nameservers.map((ns, i) => (
                  <div key={i} className="bg-muted rounded px-3 py-2 font-mono text-sm">
                    {ns}
                  </div>
                ))}
              </GCardContent>
            </GCard>
          )}

          {/* DNSSEC */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Lock className="h-4 w-4" /> DNSSEC Information
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="flex items-center gap-2 text-sm">
                {result.dnssec.signed ? (
                  <Shield className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                )}
                <span className="font-medium">Delegation Signed: {result.dnssec.label}</span>
              </div>
            </GCardContent>
          </GCard>

          {/* Authoritative Servers */}
          {(result.servers.registryUrl || result.servers.registrarUrl) && (
            <GCard>
              <GCardHeader className="pb-3">
                <GCardTitle className="text-base flex items-center gap-2">
                  <ServerCog className="h-4 w-4" /> Authoritative Servers
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-3 text-sm">
                <LinkField label="Registry RDAP Server" href={result.servers.registryUrl} />
                <LinkField label="Registrar RDAP Server" href={result.servers.registrarUrl} />
              </GCardContent>
            </GCard>
          )}

          {/* Notices & Remarks */}
          {result.notices.length > 0 && (
            <GCard>
              <GCardHeader className="pb-3">
                <GCardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Notices & Remarks
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-3 text-sm">
                {result.notices.map((n, i) => (
                  <details key={i} className="rounded-lg border border-border p-3">
                    <summary className="cursor-pointer font-medium">{n.title}</summary>
                    <p className="mt-2 text-muted-foreground whitespace-pre-wrap text-xs leading-relaxed">
                      {n.text}
                    </p>
                  </details>
                ))}
              </GCardContent>
            </GCard>
          )}

          {/* Redaction notice */}
          {result.redactedFields.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Redacted by registry: {result.redactedFields.join(", ")}. Where possible, fuller
              details were retrieved from the registrar&apos;s RDAP server.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
