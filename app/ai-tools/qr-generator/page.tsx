import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AiQrGenerator = dynamic(
  () => import("@/components/ai/ai-qr-generator").then((mod) => mod.AiQrGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "QR Code Generator",
  description:
    "Create QR codes for URLs, WiFi, vCards, messages, and location sharing with color/logo customization.",
  metaTitle: "QR Code Generator — Free Static QR Codes That Never Expire + Logo",
  metaDescription:
    "Free QR code generator with permanent static codes — no expiration. 9 types: URL, WiFi, vCard, email & more. Custom colors, logo, PNG/SVG.",
  path: "/ai-tools/qr-generator",

  header: {
    title: "Free QR Code Generator That Never Expires",
    description:
      "Create permanent QR codes that never expire — free static QR codes for URLs, WiFi, vCards, email, SMS, WhatsApp, phone, and GPS. Custom colors, logo embedding, PNG/SVG export. No signup, no subscription, no expiration date.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "QR Code Generator", href: "/ai-tools/qr-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Generate and customize QR codes for links, WiFi credentials, contacts, and messaging actions.",
    alternateName: [
      "QR Maker",
      "QR Code Creator",
      "WiFi QR Generator",
      "vCard QR Generator",
      "URL QR Code Maker",
    ],
    featureList: [
      "9 QR content types: URL, plain text, WiFi, vCard, email, SMS, WhatsApp, phone call, GPS coordinates",
      "Custom foreground / background colors with accessibility contrast check",
      "Logo embedding in the center (with auto error-correction level boost)",
      "PNG export (any size, transparent BG option) and SVG export (infinite resolution)",
      "Size controls: 200×200 up to 4096×4096 pixels",
      "Four error correction levels: L (7%), M (15%), Q (25%), H (30%) — higher = more logo room",
      "Bulk QR generation: paste a list of URLs / data, get a ZIP of QR codes",
      "Static codes — no server tracking, no expiration, no subscription required",
      "WiFi QR with SSID + password + auth type (WPA / WPA2 / open) — guests connect by scanning",
      "vCard QR with full contact info: name, phone, email, address, company, website",
      "100% client-side — your QR data never sent to any server",
      "Free forever, no signup, no watermark, no ads",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A QR code generator that never expires creates permanent, static QR codes that work forever without any server dependency or subscription. Unlike dynamic QR services, these free QR codes never expire and need no ongoing payment.",
    quickAnswer:
      "This is a free QR code generator that never expires. Choose a QR type (URL, WiFi, vCard, etc.), enter your data, customize colors and logo, then download as PNG or SVG. The generated QR code is static — it works permanently and never expires. No account, no subscription, no expiration date.",
    keyTakeaways: [
      "Free QR code generator that never expires — creates permanent static QR codes",
      "Supports 9 QR types: URL, WiFi, vCard, email, SMS, WhatsApp, phone, location, text",
      "Minimum print size: 2cm x 2cm for reliable scanning",
      "Use high error correction (H) when adding a logo to maintain scannability",
      "Export as SVG for print materials, PNG for digital use",
      "Always test QR codes on 2+ devices before publishing",
    ],
    overview:
      "This free QR code generator creates scannable codes for 9 different data types: website URLs, WiFi network credentials (SSID, password, encryption type), vCard contact cards (name, phone, email, address), email compose links, SMS pre-filled messages, WhatsApp click-to-chat links, phone dial shortcuts, GPS coordinates for location sharing, and plain text. Each QR code is fully customizable with foreground and background colors, optional center logo embedding, adjustable error correction levels (Low 7%, Medium 15%, Quartile 25%, High 30% data recovery), and configurable size and margin settings. Export as PNG for digital use (websites, social media, email signatures) or SVG for print materials (business cards, posters, packaging, menus, flyers) with pixel-perfect scaling at any size. All QR codes are static — they encode data directly and work permanently without any server dependency, redirect service, or expiration date. Minimum recommended print size: 2cm x 2cm (0.8 inches) for reliable scanning.",

    howToSteps: [
      "Select a QR code type: URL (website link), WiFi (network name, password, encryption), vCard (contact info), email, SMS, WhatsApp, phone number, GPS location, or plain text.",
      "Enter the required data — the live preview updates instantly so you can verify the QR code content before finalizing.",
      "Customize appearance: set foreground and background colors for brand consistency, upload a center logo (PNG/JPG), select error correction level (use H/High when adding logos), and adjust code size and quiet zone margin.",
      "Download as PNG (web, email, social media) or SVG (print materials, packaging, business cards), then test-scan with 2+ different phones before publishing to ensure reliable readability.",
    ],

    features: [
      "9 QR code types: URL, plain text, WiFi credentials, vCard contact card, email, SMS, WhatsApp, phone number, and GPS geolocation",
      "Custom color picker for foreground and background — match your brand colors for marketing consistency",
      "Logo embedding with adjustable scale — center your company logo, app icon, or profile picture inside the QR code",
      "4 error correction levels: Low (7%), Medium (15%), Quartile (25%), High (30%) — higher levels allow more design overlay while staying scannable",
      "PNG and SVG export formats — PNG for digital channels, SVG for lossless print scaling at any resolution",
      "Configurable QR code size (100-1000px) and quiet zone margin for optimal scan distance compatibility",
      "Bulk QR generation for creating multiple codes in a single workflow — ideal for inventory labels, multi-page menus, or event badge sets",
      "Instant live preview that updates as you type — verify content accuracy before downloading",
      "100% client-side generation — your data is never uploaded to any server",
    ],

    useCases: [
      "Restaurant digital menus — guests scan table QR codes to view menu, daily specials, and allergen info on their phones",
      "WiFi QR codes for hotels, offices, Airbnb rentals, and events — guests connect instantly without typing passwords",
      "Business cards with vCard QR codes — new contacts save your name, phone, email, company, and address with one scan",
      "Product packaging and labels — link to user manuals, warranty registration, recipe ideas, or authenticity verification",
      "Event badges and tickets — encode attendee info, session schedules, or check-in URLs for conference management",
      "Real estate signs and flyers — link to virtual tours, property details, and agent contact information",
      "Marketing campaigns — trackable URLs on posters, magazine ads, direct mail, and billboard advertising",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How QR Codes Work (Reed-Solomon Error Correction)</h3>
          <p>
            QR codes (Quick Response codes) are two-dimensional barcodes invented by Denso Wave in 1994 for automotive manufacturing tracking. They encode data in a matrix of black and white squares that smartphone cameras decode instantly. QR codes use <strong>Reed-Solomon error correction</strong> — the same algorithm used in CDs, DVDs, and deep-space communication — to remain scannable even when partially damaged, dirty, or obscured. This is why you can place a logo dead-center in a QR code: the error correction algorithm mathematically reconstructs the hidden data modules from the surrounding pattern. The four error correction levels control how much redundancy is added:
          </p>
          <table className="w-full border-collapse text-sm mt-3">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Level</th>
                <th className="text-left py-2 px-2 text-foreground">Recovery</th>
                <th className="text-left py-2 px-2 text-foreground">Data capacity</th>
                <th className="text-left py-2 px-2 text-foreground">Best use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>L (Low)</strong></td>
                <td className="py-2 px-2">~7%</td>
                <td className="py-2 px-2">Maximum</td>
                <td className="py-2 px-2">Clean digital display, no logo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">M (Medium)</td>
                <td className="py-2 px-2">~15%</td>
                <td className="py-2 px-2">High</td>
                <td className="py-2 px-2">Print materials, indoor use</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Q (Quartile)</td>
                <td className="py-2 px-2">~25%</td>
                <td className="py-2 px-2">Medium</td>
                <td className="py-2 px-2">Outdoor signage, small logos</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong>H (High)</strong></td>
                <td className="py-2 px-2">~30%</td>
                <td className="py-2 px-2">Lower</td>
                <td className="py-2 px-2"><strong>Logo embedding, outdoor + weathered conditions</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Static vs Dynamic QR Codes: Why Static Wins for Most Use Cases</h3>
          <p>
            <strong>Static QR codes</strong> (like this tool generates) encode data <em>directly into the QR pattern</em>. The data lives inside the code itself. They work permanently with no server, no subscription, no expiration. <strong>Dynamic QR codes</strong> (offered by paid services like QR Tiger, Beaconstac, GoQR.me) encode a short redirect URL that points to a service-controlled server — the server then redirects to your actual destination. This lets you change the destination after printing, but requires:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Monthly subscription</strong> — typically $5-$30/month per code</li>
            <li><strong>Active server dependency</strong> — if the service goes down or shuts down, every QR code stops working</li>
            <li><strong>Extra redirect hop</strong> — slower scan-to-destination time, especially on slow networks</li>
            <li><strong>Privacy concerns</strong> — the service can log every scan, learning where and when your code is used</li>
          </ul>
          <p className="mt-3">
            <strong>Choose static when:</strong> the destination is permanent (homepage, vCard, WiFi password), you don&apos;t want ongoing costs, you need maximum scan reliability, or you&apos;re putting the code on durable items (signs, packaging, business cards). <strong>Choose dynamic when:</strong> you need to change destinations later (campaign tracking, A/B testing), you want scan analytics, or you&apos;re running short-term marketing campaigns.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">QR Code Sizing for Print and Display</h3>
          <p>
            QR code size depends on <strong>scan distance</strong>. The general formula: <code>code size = scan distance ÷ 10</code>. So a code scanned from 1 meter away needs to be at least 10 cm. Some guidelines:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Business cards (15-30 cm scan):</strong> 1.5-3 cm minimum</li>
            <li><strong>Restaurant table tents (30-50 cm):</strong> 3-5 cm</li>
            <li><strong>Posters / wall flyers (1-2 m):</strong> 10-20 cm</li>
            <li><strong>Retail windows / storefronts (3-5 m):</strong> 30-50 cm</li>
            <li><strong>Billboards / large outdoor signage (10 m+):</strong> 1 m+</li>
            <li><strong>Vehicle wraps:</strong> 20-30 cm minimum (drivers scan from a distance with bumpy hands)</li>
          </ul>
          <p className="mt-3">
            For print, always export as <strong>SVG</strong> — vector format scales infinitely without pixelation. Use 300+ DPI when rasterizing to PNG for print.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Color, Contrast, and Logo Best Practices</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Contrast ratio:</strong> dark foreground on light background. Minimum contrast ratio 4:1; preferred 7:1+ (WCAG AAA). Avoid pastel-on-pastel combinations.</li>
            <li><strong>Invert at your peril:</strong> light QR code on dark background <em>can</em> work but many older Android scanners fail to recognize inverted codes</li>
            <li><strong>Quiet zone:</strong> always include the 4-module white margin around the code — scanners use it to find code boundaries</li>
            <li><strong>Logo size:</strong> keep logo under 20-25% of the QR area. With H-level error correction, you have ~30% recovery capacity to spend, but leave margin for damage/wear</li>
            <li><strong>Logo placement:</strong> dead center is standard. Position-detection patterns (the three large squares at corners) must remain clear</li>
            <li><strong>Test on multiple devices:</strong> iPhone iOS Camera, Android Google Lens, dedicated QR scanner apps. Different scanners have different tolerance levels</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">QR Code Use Cases Across Industries</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Restaurants:</strong> menu access (post-COVID standard), reservation links, customer reviews, WiFi access</li>
            <li><strong>Retail:</strong> product detail pages, video demos, manufacturer info, warranty registration</li>
            <li><strong>Events:</strong> ticket validation, schedule app, speaker bios, session feedback, networking vCards</li>
            <li><strong>Marketing:</strong> campaign landing pages, app downloads, social media follows, email signups</li>
            <li><strong>Real estate:</strong> property listing details, virtual tours, agent contact, financing calculators</li>
            <li><strong>Healthcare:</strong> patient check-in, appointment scheduling, telehealth links, vaccination cards (post-2020)</li>
            <li><strong>Manufacturing:</strong> equipment manuals, maintenance logs, parts catalogs (original 1994 use case)</li>
            <li><strong>Education:</strong> assignment submission, resource links, AR-enhanced textbooks, attendance tracking</li>
            <li><strong>Hospitality:</strong> room WiFi, check-in/out, room service ordering, local attraction info</li>
            <li><strong>Public transit:</strong> ticket validation, route info, fare payment integration</li>
            <li><strong>Cryptocurrency:</strong> Bitcoin / Ethereum wallet addresses for payment receipt</li>
            <li><strong>Personal:</strong> emergency contact card, pet ID tag, lost & found tags, business card replacement</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">WiFi QR Code Format (For Reference)</h3>
          <p>
            WiFi QR codes use a specific text format that mobile OS scanners recognize and offer to connect automatically:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`WIFI:T:WPA;S:NetworkName;P:Password;H:false;;`}</code>
          </pre>
          <p className="mt-3">
            Where <code>T</code> = security type (WPA / WEP / nopass), <code>S</code> = SSID, <code>P</code> = password, <code>H</code> = hidden network (true / false). The tool generates this format automatically when you select &quot;WiFi&quot; type. Most modern smartphones (iOS 11+, Android 10+) prompt users to join the network immediately on scan.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">vCard QR Format</h3>
          <p>
            vCard QR codes use the standard vCard 3.0 format which iPhone and Android both recognize as a contact:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`BEGIN:VCARD
VERSION:3.0
N:Doe;John
FN:John Doe
ORG:Acme Inc
TEL:+15551234567
EMAIL:john@acme.com
URL:https://acme.com
END:VCARD`}</code>
          </pre>
          <p className="mt-3">
            On scan, the phone offers to save the contact directly to the address book — perfect for business cards. The tool builds this format automatically from your form inputs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Tracking</h3>
          <p>
            Static QR codes don&apos;t track scans — the scanner just sees the encoded data (URL or text) and processes it locally. <strong>If you need scan analytics</strong>, you have two options: (1) put a tracked URL inside the static QR (e.g., a URL with UTM parameters that your analytics tool will log when visited); (2) use a managed redirect service (Bit.ly, Rebrandly, your own server) and put the redirect URL in the QR — your server logs the scan. <strong>Privacy advantage of static codes:</strong> the QR generator service (this tool, or anyone&apos;s) can&apos;t track scans because the data is encoded directly — they never see the scan event.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Always use error correction level H (High, 30%) when embedding a logo, and maintain a minimum 4:1 contrast ratio between foreground and background colors. For print, export SVG and scale to at least 2cm x 2cm — larger for outdoor signage where scan distance exceeds 30cm. Test the final file on both iPhone (iOS Camera) and Android (Google Lens) before publishing.",

    faqs: [
      {
        question: "What QR types can I generate?",
        answer:
          "You can create QR codes for URL, text, WiFi, vCard, email, SMS, WhatsApp, phone, and geolocation data.",
      },
      {
        question: "Should I download PNG or SVG?",
        answer:
          "Use PNG for quick digital publishing and SVG when you need sharp scaling for print or large-format materials.",
      },
      {
        question: "How large should a QR code be for print?",
        answer:
          "A common baseline is around 2 cm square or larger, depending on scan distance and camera quality.",
      },
      {
        question: "Can I add a logo in the center?",
        answer:
          "Yes. The tool supports logo uploads and size controls. Keep enough contrast and test the final scan path.",
      },
      {
        question: "Do QR codes from this generator ever expire?",
        answer:
          "No — this is a QR code generator that never expires. Static QR codes encode data directly into the code pattern with no server dependency. They work permanently and never expire, unlike dynamic QR codes from paid services that stop working if you cancel your subscription.",
      },
      {
        question: "Why should I use a QR code generator that never expires?",
        answer:
          "Many QR code services create dynamic codes that expire when your subscription ends. This free QR code generator creates static codes that never expire — once generated, they work forever with no ongoing cost. Perfect for business cards, product packaging, and permanent signage.",
      },
      {
        question: "What's the difference between static and dynamic QR codes?",
        answer:
          "Static QR codes encode data directly in the pattern — they work forever with no server needed. Dynamic QR codes encode a short URL that redirects through a paid service's server. Dynamic codes let you change destinations after printing, but stop working if you cancel your subscription or the service goes offline. For permanent destinations (homepage, vCard, WiFi), static is better; for short-term campaigns where you may swap destinations, dynamic codes work.",
      },
      {
        question: "How small can a QR code be and still scan?",
        answer:
          "Minimum 2 cm × 2 cm on print, and the rule of thumb is code size = scan distance ÷ 10. For business cards (scanned at ~15-30 cm), 1.5-3 cm works. For outdoor signage scanned from 1-2 meters, use 10-20 cm. For billboards, 50+ cm. Always test in the actual lighting/distance conditions you'll deploy in — fluorescent overhead lighting reflects off glossy paper and can defeat smaller codes.",
      },
      {
        question: "Can I scan a QR code without a special app?",
        answer:
          "Yes — every modern smartphone scans QR codes through the built-in camera app. iOS Camera (iOS 11+) and Google Lens (Android 10+) auto-detect QR codes and show a notification banner. No dedicated scanner app needed. Older devices may need a separate app like Google Lens or any free QR scanner from the app store.",
      },
      {
        question: "Can I put a logo in the center of my QR code?",
        answer:
          "Yes. Use error correction level H (30% recovery) and keep your logo under 20-25% of the total QR area. The Reed-Solomon error correction algorithm mathematically reconstructs the data behind the logo. Test the result on multiple devices (iPhone and Android) before printing — slightly larger logos may scan on some phones and fail on others.",
      },
      {
        question: "What QR code error correction level should I use?",
        answer:
          "Level L (7%) for clean digital displays, Level M (15%) for indoor print, Level Q (25%) for outdoor signage, Level H (30%) for logo embedding or weathered outdoor conditions. Higher error correction = larger code for the same data, so don't use H unless needed. For a logo-embedded code on print, H is the standard choice.",
      },
      {
        question: "Can I track who scans my QR code?",
        answer:
          "Static QR codes don't track scans — the scanner reads the encoded data locally. For analytics, either (1) put a URL with UTM tracking parameters in the QR code (your analytics tool logs the visit), or (2) use a managed redirect service (Bit.ly, your own short-link service) and put the redirect URL in the QR code — your service logs the scan. The QR generator itself can never track scans because the data is encoded directly in the pattern.",
      },
      {
        question: "Are QR codes from your tool free for commercial use?",
        answer:
          "Yes — completely free for any use, personal or commercial, no royalties, no attribution required. Use them on products, packaging, advertising, business cards, signage, books, or anywhere else. The QR code format itself is patent-free (Denso Wave released their patent rights for QR codes), and we don't claim any rights over codes you generate.",
      },
    ],

    additionalContent: [
      {
        heading: "Static vs Dynamic Planning",
        content:
          "For evergreen destinations (homepages, contact cards, basic WiFi access), static codes are often enough. If you need post-print destination control, consider a managed redirect strategy.",
      },
      {
        heading: "Pre-Publish QA Checklist",
        content:
          "Validate destination URL format, test with dark/light mode camera previews, and verify code clarity after compression in your final publishing channel.",
      },
    ],

    relatedTools: [
      { name: "TOTP QR Code Generator", href: "/crypto-tools/otp-generator" },
      { name: "OTP Code Generator", href: "/crypto-tools/otp-generator" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function QrGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiQrGenerator />
        </div>
      )}
    />
  )
}
