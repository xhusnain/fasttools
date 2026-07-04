import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const WhoisLookup = dynamic(
  () => import("@/components/web/whois-lookup").then((mod) => mod.WhoisLookup),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "WHOIS & Domain Lookup",
  description:
    "Free WHOIS lookup tool. Check any domain's registration data — registrar, creation/expiry dates, status, nameservers, and DNSSEC. Powered by live RDAP data.",
  metaTitle: "WHOIS Lookup — Domain Registration & Expiry",
  metaDescription:
    "Free WHOIS & RDAP domain lookup. Find a domain's registrar, registration and expiry dates, registry ID, status codes, nameservers, DNSSEC, and contact info. Instant, accurate registry data — no signup.",
  path: "/web-tools/whois-lookup",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free WHOIS and RDAP domain lookup tool. Query any domain to see its registrar, IANA ID, creation and expiration dates, domain status codes, nameservers, DNSSEC status, and public contact records straight from the registry.",
    featureList: [
      "WHOIS / RDAP domain registration lookup for any TLD",
      "Registrar name and IANA Registrar ID",
      "Domain creation, last-updated, and expiration dates",
      "Days-until-expiry with red warning under 30 days",
      "EPP domain status codes (clientTransferProhibited, pendingDelete, etc.)",
      "Nameserver (NS) listing",
      "DNSSEC delegation-signed status",
      "Registry Domain ID",
      "Registrant / Administrative / Technical / Billing contact records",
      "GDPR / ICANN redaction-aware contact display",
      "Registrar abuse contact email and phone",
      "Internationalized Domain Name (IDN / Unicode) support",
      "Live data via official IANA RDAP bootstrap — modern WHOIS replacement",
      "Free, no signup, no API key required",
    ],
    alternateName: [
      "WHOIS Lookup",
      "Domain Lookup",
      "RDAP Lookup",
      "Domain WHOIS Checker",
      "Domain Registration Lookup",
    ],
  },

  header: {
    title: "WHOIS & Domain Lookup",
    description:
      "Look up any domain's registration data — registrar, dates, status codes, nameservers, and DNSSEC — using live RDAP data from the registry.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "WHOIS & Domain Lookup", href: "/web-tools/whois-lookup" },
  ],

  content: {
    definition:
      "A WHOIS lookup retrieves the public registration record of a domain name — including its registrar, creation and expiration dates, status codes, nameservers, and DNSSEC status — using RDAP (Registration Data Access Protocol), the modern, standardized replacement for the legacy WHOIS protocol.",

    quickAnswer:
      "Enter a domain name and click Lookup. The tool queries the domain's official registry via RDAP and returns its registrar, registration and expiry dates, registry domain ID, EPP status codes, nameservers, DNSSEC status, and any public contact information.",

    keyTakeaways: [
      "WHOIS shows who registered a domain, when, through which registrar, and when it expires",
      "RDAP is the official successor to WHOIS — structured, accurate, and free to query",
      "Personal contact details are usually redacted under ICANN/GDPR privacy rules",
      "Domain status codes (e.g. clientTransferProhibited) reveal lock and transfer state",
      "Expiry dates help you catch renewals before a domain drops or someone else grabs it",
    ],

    overview:
      "This WHOIS & Domain Lookup tool pulls a domain's registration record directly from its authoritative registry using RDAP — the IETF/ICANN standard that replaces legacy WHOIS. Enter any domain to see the registrar and IANA ID, creation/updated/expiry dates, registry domain ID, EPP status codes, nameservers, DNSSEC status, and the public portion of registrant, administrative, and technical contacts. Used by developers, domain investors, security analysts, and brand-protection teams to verify ownership, monitor expiry, and audit domain configuration.",

    howToSteps: [
      "Type a domain name (e.g. example.com) into the input field. Protocol, www, and paths are stripped automatically.",
      "Click 'Lookup' to query the domain's registry over RDAP.",
      "Review the categorized results: Domain Information, Dates, Registrar, Nameservers, DNSSEC, and Contacts.",
      "Check the expiry date and status codes — a red expiry warning appears when fewer than 30 days remain.",
    ],

    features: [
      "Registrar name and IANA Registrar ID",
      "Creation, last-updated, and expiration dates with days-to-expiry",
      "EPP domain status codes (transfer/delete locks)",
      "Registry Domain ID",
      "Nameserver (NS) listing",
      "DNSSEC delegation-signed status",
      "Registrant / Administrative / Technical / Billing contacts (privacy-aware)",
      "Registrar abuse email and phone",
      "Internationalized Domain Name (IDN) support",
      "Works across virtually every TLD via the IANA RDAP bootstrap",
    ],

    useCases: [
      "Check when a domain expires so you can renew (or back-order) in time",
      "Verify the registrar and ownership status before buying or transferring a domain",
      "Investigate suspicious or phishing domains for security and abuse reporting",
      "Confirm DNSSEC is enabled for a domain you manage",
      "Audit domain status codes to ensure transfer/delete locks are in place",
      "Look up nameservers when debugging DNS or migrations",
      "Research domain age and history for SEO and acquisition decisions",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">WHOIS vs. RDAP</h3>
          <p>
            <strong>WHOIS</strong> is the decades-old protocol for querying domain registration
            data, but its free-text output is inconsistent across registries and is being phased
            out. <strong>RDAP (Registration Data Access Protocol)</strong> is its official
            replacement — it returns structured JSON, supports secure access and
            internationalization, and is mandated by ICANN. This tool queries RDAP directly using
            the authoritative IANA bootstrap registry, so the data you see comes straight from the
            registry responsible for each TLD.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why contact data is redacted</h3>
          <p>
            Since GDPR and ICANN&apos;s Temporary Specification, most registries{" "}
            <strong>redact personal contact details</strong> (registrant name, email, address) from
            public records to protect privacy. You&apos;ll still see the registrar, dates, status
            codes, nameservers, and DNSSEC — and a registrar abuse contact for reporting. Non-public
            data can only be requested through ICANN&apos;s RDRS for legitimate, lawful purposes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding status codes</h3>
          <p>
            EPP status codes describe a domain&apos;s state.{" "}
            <strong>clientTransferProhibited</strong> means the registrar has locked the domain
            against transfers (a good anti-hijacking measure).{" "}
            <strong>addPeriod</strong> marks a freshly registered domain.{" "}
            <strong>pendingDelete</strong> and <strong>redemptionPeriod</strong> indicate a domain
            on its way to expiry and potential re-registration.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Availability and registry limits</h3>
          <p>
            If the registry returns no RDAP record, the tool can report that a domain appears
            available. Treat that as a lookup signal, not a final purchase guarantee. Registrars
            may reserve names, mark names as premium, delay updates, or apply their own pricing
            and eligibility rules. Some registries can also throttle repeated RDAP requests.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Set a reminder ~30 days before a domain's expiry date — registrars don't always auto-renew, and lapsed domains can be snapped up the moment they drop. Also enable clientTransferProhibited and DNSSEC on domains you own to harden them against hijacking.",

    faqs: [
      {
        question: "What is a WHOIS lookup?",
        answer:
          "A WHOIS lookup retrieves a domain's public registration record — its registrar, creation and expiry dates, status codes, nameservers, and DNSSEC status. This tool uses RDAP, the modern standardized replacement for the legacy WHOIS protocol.",
      },
      {
        question: "What is the difference between WHOIS and RDAP?",
        answer:
          "WHOIS returns inconsistent free-text data and is being deprecated. RDAP returns structured JSON, supports authentication and internationalized domains, and is the official ICANN-mandated successor. This tool queries RDAP for accurate, machine-readable results.",
      },
      {
        question: "Why can't I see the owner's name and email?",
        answer:
          "Under GDPR and ICANN privacy rules, registries redact personal contact details from public records. You'll still see the registrar, dates, status, nameservers, and DNSSEC, plus a registrar abuse contact. Non-public data requires a formal request through ICANN's RDRS.",
      },
      {
        question: "How do I check when a domain expires?",
        answer:
          "Enter the domain and look at the 'Expires' field under Dates. The tool also shows days remaining and highlights the date in red when fewer than 30 days are left.",
      },
      {
        question: "Can I check if a domain is available to register?",
        answer:
          "Yes. If no registration record exists in the registry, the tool reports the domain as available (unregistered). Confirm final availability and pricing at a registrar, as some names are premium or reserved.",
      },
      {
        question: "Why does the result differ from my registrar?",
        answer:
          "RDAP data comes from the registry or registrar RDAP service and can lag behind account dashboards, renewal actions, pending transfers, premium-name rules, or registrar-specific availability checks. Use this lookup for public registration facts, then confirm purchase or renewal details inside your registrar account.",
      },
      {
        question: "Can RDAP or WHOIS lookups be rate limited?",
        answer:
          "Yes. This page is free to use and does not require an API key, but registries and RDAP services can throttle repeated automated requests. If a lookup fails temporarily, wait and try again.",
      },
      {
        question: "Does this work for all domain extensions (TLDs)?",
        answer:
          "It works for virtually every TLD that publishes RDAP — which now covers all gTLDs (.com, .net, .org, .tech, .dev, .io, and more) and many ccTLDs, resolved automatically via the IANA RDAP bootstrap.",
      },
      {
        question: "What does clientTransferProhibited mean?",
        answer:
          "It's an EPP status code indicating the registrar has locked the domain to prevent unauthorized transfers. It's a recommended security setting for domains you own.",
      },
    ],

    relatedTools: [
      { name: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "Device Information", href: "/web-tools/device-info" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WhoisLookupPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WhoisLookup />)} />
}
