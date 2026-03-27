import { NextRequest, NextResponse } from "next/server"
import dns from "dns/promises"
import https from "https"
import tls from "tls"

export const runtime = "nodejs"
export const maxDuration = 30

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

async function lookupDns(domain: string): Promise<DnsRecords> {
  const records: DnsRecords = {}

  const queries = [
    dns.resolve4(domain).then(r => { records.A = r }).catch(() => {}),
    dns.resolve6(domain).then(r => { records.AAAA = r }).catch(() => {}),
    dns.resolveMx(domain).then(r => { records.MX = r.sort((a, b) => a.priority - b.priority) }).catch(() => {}),
    dns.resolveCname(domain).then(r => { records.CNAME = r }).catch(() => {}),
    dns.resolveTxt(domain).then(r => { records.TXT = r }).catch(() => {}),
    dns.resolveNs(domain).then(r => { records.NS = r }).catch(() => {}),
    dns.resolveSoa(domain).then(r => { records.SOA = r }).catch(() => {}),
  ]

  await Promise.all(queries)
  return records
}

async function checkSsl(domain: string): Promise<SslInfo> {
  return new Promise((resolve) => {
    const socket = tls.connect(443, domain, { servername: domain, timeout: 10000 }, () => {
      const cert = socket.getPeerCertificate()
      const protocol = socket.getProtocol() || "unknown"

      if (!cert || !cert.subject) {
        socket.destroy()
        resolve({ valid: false, issuer: "", subject: "", validFrom: "", validTo: "", daysRemaining: 0, protocol: "", serialNumber: "", fingerprint: "", subjectAltNames: [], error: "No certificate found" })
        return
      }

      const validTo = new Date(cert.valid_to)
      const now = new Date()
      const daysRemaining = Math.floor((validTo.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

      const subjectAltNames = cert.subjectaltname
        ? cert.subjectaltname.split(", ").map((s: string) => s.replace("DNS:", ""))
        : []

      socket.destroy()
      resolve({
        valid: daysRemaining > 0 && socket.authorized,
        issuer: cert.issuer ? Object.values(cert.issuer).join(", ") : "",
        subject: cert.subject?.CN || "",
        validFrom: cert.valid_from,
        validTo: cert.valid_to,
        daysRemaining,
        protocol,
        serialNumber: cert.serialNumber || "",
        fingerprint: cert.fingerprint256 || cert.fingerprint || "",
        subjectAltNames,
      })
    })

    socket.on("error", (err) => {
      socket.destroy()
      resolve({ valid: false, issuer: "", subject: "", validFrom: "", validTo: "", daysRemaining: 0, protocol: "", serialNumber: "", fingerprint: "", subjectAltNames: [], error: err.message })
    })

    socket.setTimeout(10000, () => {
      socket.destroy()
      resolve({ valid: false, issuer: "", subject: "", validFrom: "", validTo: "", daysRemaining: 0, protocol: "", serialNumber: "", fingerprint: "", subjectAltNames: [], error: "Connection timed out" })
    })
  })
}

export async function POST(request: NextRequest) {
  try {
    const { domain, type } = await request.json()

    if (!domain?.trim()) {
      return NextResponse.json({ error: "Domain is required" }, { status: 400 })
    }

    // Clean domain (remove protocol, path, etc.)
    const cleanDomain = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "").replace(/:\d+$/, "")

    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanDomain)) {
      return NextResponse.json({ error: "Invalid domain format" }, { status: 400 })
    }

    const result: { dns?: DnsRecords; ssl?: SslInfo } = {}

    if (type === "dns" || type === "both") {
      result.dns = await lookupDns(cleanDomain)
    }

    if (type === "ssl" || type === "both") {
      result.ssl = await checkSsl(cleanDomain)
    }

    return NextResponse.json({ success: true, domain: cleanDomain, ...result })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Lookup failed" }, { status: 500 })
  }
}
