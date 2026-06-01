import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 30

// ─── Types ───────────────────────────────────────────────────────────────
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
  dates: {
    created?: string
    updated?: string
    expires?: string
    registrarExpires?: string
    rdapUpdated?: string
  }
  registrar: {
    name?: string
    ianaId?: string
    url?: string
    abuseEmail?: string
    abusePhone?: string
  }
  contacts: Contact[]
  dnssec: { signed: boolean; label: string }
  servers: { registryUrl?: string; registrarUrl?: string }
  notices: Array<{ title: string; text: string }>
  redactedFields: string[]
}

// ─── IANA RDAP bootstrap (cached in module scope) ──────────────────────────
let bootstrapCache: { map: Map<string, string>; fetchedAt: number } | null = null
const BOOTSTRAP_TTL = 1000 * 60 * 60 * 24 // 24h

async function getRdapBase(tld: string): Promise<string | null> {
  const now = Date.now()
  if (!bootstrapCache || now - bootstrapCache.fetchedAt > BOOTSTRAP_TTL) {
    try {
      const res = await fetch("https://data.iana.org/rdap/dns.json", {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
      })
      const data = await res.json()
      const map = new Map<string, string>()
      for (const service of data.services || []) {
        const [tlds, urls] = service
        const base = (urls[0] || "").replace(/\/$/, "")
        for (const t of tlds) map.set(t.toLowerCase(), base)
      }
      bootstrapCache = { map, fetchedAt: now }
    } catch {
      if (!bootstrapCache) return null
    }
  }
  return bootstrapCache.map.get(tld.toLowerCase()) || null
}

// ─── vCard parsing ─────────────────────────────────────────────────────────
interface VcardFields {
  name?: string
  organization?: string
  email?: string
  phone?: string
  kind?: string
  address?: string
  countryCode?: string
}

function parseVcard(vcardArray: any): VcardFields {
  const out: VcardFields = {}
  if (!Array.isArray(vcardArray) || !Array.isArray(vcardArray[1])) return out

  for (const entry of vcardArray[1]) {
    if (!Array.isArray(entry)) continue
    const [key, params, , value] = entry
    switch (key) {
      case "fn":
        if (value) out.name = String(value)
        break
      case "kind":
        if (value) out.kind = String(value)
        break
      case "org":
        out.organization = Array.isArray(value) ? value.filter(Boolean).join(", ") : String(value)
        break
      case "email":
        out.email = Array.isArray(value) ? value[0] : String(value)
        break
      case "tel":
        out.phone = String(value).replace(/^tel:/, "")
        break
      case "adr": {
        if (params && typeof params.cc === "string") out.countryCode = params.cc
        if (params && typeof params.label === "string") {
          out.address = params.label.replace(/\n/g, ", ")
        } else if (Array.isArray(value)) {
          const parts = value
            .flat(Infinity)
            .filter((p: any) => typeof p === "string" && p.trim())
          if (parts.length) out.address = parts.join(", ")
        }
        break
      }
    }
  }
  return out
}

// ─── Extract contacts from an RDAP response ─────────────────────────────────
// Many registrars publish placeholder strings instead of omitting redacted data.
const REDACTION_RE = /redacted|redaction|not disclosed|data protected|privacy|gdpr|withheld/i

function isRedactedValue(v?: string): boolean {
  return !v || REDACTION_RE.test(v)
}

function extractContacts(data: any): Contact[] {
  const contacts: Contact[] = []
  for (const entity of data.entities || []) {
    const roles: string[] = Array.isArray(entity.roles) ? entity.roles : []
    const vcard = parseVcard(entity.vcardArray)
    const status = Array.isArray(entity.status) ? entity.status.join(", ") : undefined
    // Redacted when no real name AND no usable email.
    const redacted =
      isRedactedValue(vcard.name) && (isRedactedValue(vcard.email) || !vcard.email)
    for (const role of roles) {
      if (["registrant", "administrative", "technical", "billing"].includes(role)) {
        contacts.push({
          role,
          handle: entity.handle,
          name: vcard.name,
          organization: vcard.organization,
          email: vcard.email,
          phone: vcard.phone,
          kind: vcard.kind,
          status,
          address: vcard.address,
          countryCode: vcard.countryCode,
          redacted,
        })
      }
    }
  }
  return contacts
}

function getLink(data: any, rel: string): string | undefined {
  const link = (data.links || []).find((l: any) => l.rel === rel)
  return link?.href
}

function extractNotices(data: any): Array<{ title: string; text: string }> {
  const out: Array<{ title: string; text: string }> = []
  for (const group of [...(data.notices || []), ...(data.remarks || [])]) {
    const title = group.title || "Notice"
    const text = Array.isArray(group.description)
      ? group.description.filter(Boolean).join(" ")
      : String(group.description || "")
    if (text) out.push({ title, text })
  }
  return out
}

// ─── Parse the registry response into the base result ───────────────────────
function parseRegistry(data: any, domain: string): WhoisResult {
  const result: WhoisResult = {
    domain: data.ldhName || domain,
    unicodeName: data.unicodeName && data.unicodeName !== data.ldhName ? data.unicodeName : undefined,
    registered: true,
    registryDomainId: data.handle,
    statuses: Array.isArray(data.status) ? data.status : [],
    nameservers: Array.isArray(data.nameservers)
      ? data.nameservers.map((ns: any) => ns.ldhName || ns.unicodeName).filter(Boolean)
      : [],
    dates: {},
    registrar: {},
    contacts: extractContacts(data),
    dnssec: {
      signed: !!data.secureDNS?.delegationSigned,
      label: data.secureDNS?.delegationSigned ? "Signed (DNSSEC enabled)" : "Unsigned",
    },
    servers: {
      registryUrl: getLink(data, "self"),
      registrarUrl: getLink(data, "related"),
    },
    notices: extractNotices(data),
    redactedFields: [],
  }

  for (const ev of data.events || []) {
    switch (ev.eventAction) {
      case "registration":
        result.dates.created = ev.eventDate
        break
      case "expiration":
        result.dates.expires = ev.eventDate
        break
      case "last changed":
        result.dates.updated = ev.eventDate
        break
      case "last update of RDAP database":
        result.dates.rdapUpdated = ev.eventDate
        break
    }
  }

  for (const r of data.redacted || []) {
    const label = r?.name?.type || r?.name?.description
    if (label) result.redactedFields.push(String(label))
  }

  // Registrar (from registry response)
  for (const entity of data.entities || []) {
    if ((entity.roles || []).includes("registrar")) {
      const vcard = parseVcard(entity.vcardArray)
      result.registrar.name = vcard.name || vcard.organization
      result.registrar.ianaId =
        (entity.publicIds || []).find((p: any) => /IANA/i.test(p.type || ""))?.identifier ||
        entity.handle
      result.registrar.url = getLink(entity, "self") || getLink(entity, "about")
      for (const sub of entity.entities || []) {
        if ((sub.roles || []).includes("abuse")) {
          const abuse = parseVcard(sub.vcardArray)
          result.registrar.abuseEmail = abuse.email
          result.registrar.abusePhone = abuse.phone
        }
      }
    }
  }

  return result
}

// ─── Merge the registrar response (fuller contacts) into the result ─────────
function mergeRegistrar(result: WhoisResult, data: any) {
  // Registrar's server usually has the un-redacted (or at least more complete)
  // contacts — prefer them when they add real data or more entries.
  const registrarContacts = extractContacts(data)
  const registrarHasReal = registrarContacts.some((c) => !c.redacted)
  const registryHasReal = result.contacts.some((c) => !c.redacted)
  if ((registrarHasReal && !registryHasReal) || registrarContacts.length > result.contacts.length) {
    result.contacts = registrarContacts
  }

  // Registrar name / abuse from the registrar's own record (authoritative).
  for (const entity of data.entities || []) {
    if ((entity.roles || []).includes("registrar")) {
      const vcard = parseVcard(entity.vcardArray)
      if (vcard.name || vcard.organization) {
        result.registrar.name = vcard.name || vcard.organization
      }
      for (const sub of entity.entities || []) {
        if ((sub.roles || []).includes("abuse")) {
          const abuse = parseVcard(sub.vcardArray)
          if (abuse.email) result.registrar.abuseEmail = abuse.email
          if (abuse.phone) result.registrar.abusePhone = abuse.phone
        }
      }
    }
  }

  for (const ev of data.events || []) {
    if (ev.eventAction === "registrar expiration") result.dates.registrarExpires = ev.eventDate
  }

  if (!result.servers.registrarUrl) result.servers.registrarUrl = getLink(data, "self")
  // Merge any additional notices/remarks from the registrar.
  const extra = extractNotices(data)
  const seen = new Set(result.notices.map((n) => n.title))
  for (const n of extra) if (!seen.has(n.title)) result.notices.push(n)
}

// ─── Fetch helper ───────────────────────────────────────────────────────────
async function fetchRdap(url: string): Promise<{ status: number; data: any | null }> {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/rdap+json, application/json" },
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
    })
    if (res.status === 404) return { status: 404, data: null }
    if (!res.ok) return { status: res.status, data: null }
    return { status: 200, data: await res.json() }
  } catch {
    return { status: 0, data: null }
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const { domain } = await request.json()
    if (!domain?.trim()) {
      return NextResponse.json({ error: "Domain is required" }, { status: 400 })
    }

    const cleanDomain = domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "")
      .replace(/:\d+$/, "")

    if (!/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(cleanDomain)) {
      return NextResponse.json({ error: "Invalid domain format" }, { status: 400 })
    }

    const tld = cleanDomain.split(".").pop() as string
    const base = await getRdapBase(tld)
    const endpoints = base
      ? [`${base}/domain/${cleanDomain}`, `https://rdap.org/domain/${cleanDomain}`]
      : [`https://rdap.org/domain/${cleanDomain}`]

    let registryData: any = null
    let notFound = false
    let lastStatus = 0

    for (const url of endpoints) {
      const { status, data } = await fetchRdap(url)
      lastStatus = status
      if (status === 404) {
        notFound = true
        break
      }
      if (data) {
        registryData = data
        break
      }
    }

    if (notFound) {
      return NextResponse.json({
        success: true,
        result: {
          domain: cleanDomain,
          registered: false,
          statuses: [],
          nameservers: [],
          dates: {},
          registrar: {},
          contacts: [],
          dnssec: { signed: false, label: "Unsigned" },
          servers: {},
          notices: [],
          redactedFields: [],
        },
      })
    }

    if (!registryData) {
      return NextResponse.json(
        { error: `Could not retrieve registration data (HTTP ${lastStatus || "timeout"}).` },
        { status: 502 }
      )
    }

    const result = parseRegistry(registryData, cleanDomain)

    // Second hop: query the registrar's RDAP server for full contact details.
    const registrarUrl = result.servers.registrarUrl
    if (registrarUrl && /^https?:\/\//.test(registrarUrl)) {
      const { data: registrarData } = await fetchRdap(registrarUrl)
      if (registrarData) mergeRegistrar(result, registrarData)
    }

    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Lookup failed" }, { status: 500 })
  }
}
