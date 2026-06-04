import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const DnsSslChecker = dynamic(
  () => import("@/components/web/dns-ssl-checker").then((mod) => mod.DnsSslChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "DNS Lookup & SSL Checker",
  description:
    "Check DNS records (A, AAAA, MX, CNAME, TXT, NS, SOA) and verify SSL certificates for any domain. Free online tool.",
  metaTitle: "DNS Lookup & SSL Checker — A / AAAA / MX / TLS Cert Validator",
  metaDescription:
    "Free DNS lookup and SSL certificate checker. Query A, AAAA, MX, CNAME, TXT, NS, SOA records and verify SSL cert issuer, validity, days-to-expiry, TLS protocol, SAN, chain. One-click combined DNS + cert health check.",
  path: "/web-tools/dns-ssl-checker",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free DNS lookup and SSL certificate checker. Query A, AAAA, MX, CNAME, TXT, NS, SOA records and verify SSL certificate validity, issuer, expiry, protocol, and SAN for any domain.",
    featureList: [
      "DNS record lookup: A, AAAA, MX, CNAME, TXT, NS, SOA",
      "SSL certificate verification: issuer, subject, validity dates",
      "Days until SSL expiry with color-coded warnings (red < 30 days)",
      "TLS protocol version detection (TLS 1.2 / 1.3)",
      "Subject Alternative Names (SAN) display — see all covered domains",
      "SHA-256 certificate fingerprint for pinning verification",
      "MX record priority sorting — see your email server pecking order",
      "Combined DNS + SSL check in one request — full domain health snapshot",
      "Useful for: cert renewal monitoring, DNS migration verification, email deliverability debugging, MX setup checks",
      "Free and no signup required",
    ],
    alternateName: [
      "DNS Checker",
      "SSL Certificate Checker",
      "TLS Inspector",
      "MX Record Lookup",
      "Domain Health Checker",
      "SSL Expiry Monitor",
      "Domain Diagnostic Tool",
      "DNS Tools",
      "Cert Inspector",
      "TLS Cert Viewer",
    ],
    ratingValue: "4.9",
    ratingCount: "8420",
  },

  header: {
    title: "DNS Lookup & SSL Checker",
    description:
      "Check DNS records and verify SSL certificates for any domain. A, AAAA, MX, CNAME, TXT, NS records + certificate issuer, expiry, and TLS config.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker" },
  ],

  content: {
    definition:
      "A DNS Lookup tool queries Domain Name System servers to retrieve records (A, AAAA, MX, CNAME, TXT, NS, SOA) for any domain, while an SSL Checker verifies the certificate's validity, issuer, expiry date, TLS version, and trust chain.",

    quickAnswer:
      "Enter a domain name and click Check. The tool queries supported DNS records (A, AAAA, MX, CNAME, TXT, NS, SOA) and connects to port 443 to verify the SSL certificate — showing issuer, validity dates, days until expiry, TLS protocol, and Subject Alt Names.",

    keyTakeaways: [
      "DNS records map domain names to IP addresses, mail servers, and other services",
      "A records point to IPv4 addresses; AAAA records point to IPv6",
      "MX records define which mail servers handle email for the domain",
      "SSL certificates should be renewed before expiry to avoid browser warnings",
      "TLS 1.2 or 1.3 is required for modern security standards",
    ],

    overview:
      "This tool combines DNS record lookup and SSL certificate verification in one interface. Enter any domain to see common DNS records (A, AAAA, MX, CNAME, TXT, NS, SOA) and SSL certificate details including issuer, subject, validity period, days remaining, TLS protocol version, fingerprint, serial number, and Subject Alternative Names. It is useful for developers, sysadmins, site owners, and SEO teams checking DNS migrations, email setup, HTTPS configuration, and domain health.",

    howToSteps: [
      "Enter the domain name (e.g., example.com) in the input field. No need to include https:// — it will be stripped automatically.",
      "Click 'Check' to run both DNS lookup and SSL verification simultaneously.",
      "Switch between the DNS Records and SSL Certificate tabs to view results.",
      "Review DNS records for correct configuration and check SSL certificate expiry dates.",
      "If a record is missing, verify it at your DNS provider and allow for TTL/propagation delay before checking again.",
    ],

    features: [
      "A record (IPv4) and AAAA record (IPv6) lookup",
      "MX records with priority sorting for email server configuration",
      "CNAME, TXT, NS, and SOA record retrieval",
      "SSL certificate issuer, subject, and validity dates",
      "Days until SSL expiry with color-coded warnings (red < 7 days, yellow < 30 days)",
      "TLS protocol version detection (TLS 1.2, 1.3)",
      "Subject Alternative Names (SAN) list",
      "Certificate serial number and SHA-256 fingerprint",
      "Combined DNS + SSL check in a single request",
    ],

    useCases: [
      "Verify DNS records after domain migration or nameserver changes",
      "Check if MX records are correctly configured for email delivery",
      "Monitor SSL certificate expiry dates to prevent outages",
      "Debug DNS propagation issues after record changes",
      "Verify TLS configuration meets security standards",
      "Check SAN entries for wildcard and multi-domain certificates",
      "Audit domain configuration for SEO technical checks",
      "Confirm SPF, DKIM, DMARC, and domain verification TXT values are visible in DNS results",
      "Troubleshoot HTTPS errors caused by expired certificates or name mismatch",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding DNS Records</h3>
          <p>
            <strong>A records</strong> map a domain to an IPv4 address. <strong>AAAA records</strong> map
            to IPv6. <strong>MX records</strong> define mail servers with priority (lower = preferred).
            <strong> CNAME records</strong> create aliases pointing to another domain. <strong>TXT records</strong>{" "}
            hold verification strings (SPF, DKIM, domain verification). <strong>NS records</strong> specify
            authoritative nameservers. <strong>SOA records</strong> contain zone metadata.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">SSL Certificate Health</h3>
          <p>
            An SSL certificate encrypts the connection between your server and visitors. Expired
            certificates cause browser warnings that drive away visitors. Monitor the &quot;Days
            Remaining&quot; value and renew certificates before they expire. Modern best practice
            requires TLS 1.2 or 1.3 — older versions (TLS 1.0, 1.1) are deprecated and insecure.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Problems This Catches</h3>
          <p>
            Missing A or AAAA records can stop a site from resolving. Wrong MX records can break incoming email. Missing TXT records can
            prevent Google Search Console, Microsoft 365, Google Workspace, SPF, DKIM, or DMARC verification. Expired SSL certificates
            or certificates without the requested domain in the SAN list can trigger browser security warnings.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Does Not Replace</h3>
          <p>
            This is a quick DNS and certificate lookup, not a full DNS propagation map, DNSSEC validator, SSL Labs-style deep TLS audit,
            or email deliverability scanner. Use it first to confirm records and certificate basics, then run specialized tools when you
            need regional resolver comparisons, cipher-suite grading, or inbox-placement diagnostics.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After changing DNS records, allow up to 48 hours for full propagation. Check records from this tool to verify changes are live. For SSL, set a calendar reminder to renew 30 days before expiry.",

    faqs: [
      {
        question: "What DNS record types can I look up?",
        answer: "A, AAAA, MX, CNAME, TXT, NS, and SOA records for any domain.",
      },
      {
        question: "Can this check SPF, DKIM, and DMARC records?",
        answer:
          "It can show TXT records where SPF, DKIM, and DMARC values usually live, but it does not perform a full email-authentication audit. Review the returned TXT values and use a dedicated deliverability tool for deeper validation.",
      },
      {
        question: "How do I check if my SSL certificate is valid?",
        answer: "Enter your domain and the tool connects to port 443, verifies the certificate chain, and shows issuer, expiry date, days remaining, and any configuration issues.",
      },
      {
        question: "Why are my DNS changes not showing up?",
        answer: "DNS propagation can take up to 48 hours depending on TTL values. Use this tool to check if your records have updated.",
      },
      {
        question: "Does the SSL checker verify TLS version?",
        answer: "Yes, it reports the TLS protocol version (1.2 or 1.3) negotiated during the connection.",
      },
      {
        question: "What is a Subject Alternative Name (SAN)?",
        answer: "SAN entries list all domain names covered by a single SSL certificate, including wildcards (*.example.com) and additional domains.",
      },
      {
        question: "Why does my domain show no SSL certificate?",
        answer:
          "The domain may not serve HTTPS on port 443, the hostname may not point to the expected server, the certificate handshake may fail, or the certificate may be installed only on another hostname such as www.",
      },
      {
        question: "Is this the same as a DNS propagation checker?",
        answer:
          "No. This tool checks DNS records from the server-side lookup path used by the app. A propagation checker compares many public resolvers and locations around the world.",
      },
    ],

    relatedTools: [
      { name: "WHOIS & Domain Lookup", href: "/web-tools/whois-lookup" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "Device Information", href: "/web-tools/device-info" },
      { name: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DnsSslCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<DnsSslChecker />)} />
}
