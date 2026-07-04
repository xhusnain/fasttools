import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const AiQrGenerator = dynamic(
  () => import("@/components/ai/ai-qr-generator").then((mod) => mod.AiQrGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "WiFi QR Code Generator",
  description:
    "Create a QR code guests scan to join your WiFi — no typing the password. SSID, password, WPA/WEP/open, hidden networks. Generated in your browser; credentials never uploaded.",
  metaTitle: "WiFi QR Code Generator — Scan to Connect, Free & Private",
  metaDescription:
    "Generate a WiFi QR code: guests point their camera and join your network — no password typing. Supports WPA/WPA2/WPA3, hidden SSIDs. 100% in-browser; your password never leaves your device.",
  path: "/ai-tools/wifi-qr-code-generator",

  header: {
    title: "WiFi QR Code Generator",
    description:
      "Enter your network name and password to get a QR code that connects any modern phone to your WiFi when scanned. Generated locally — your credentials are never sent anywhere.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "QR Generator", href: "/ai-tools/qr-generator" },
    { label: "WiFi QR Code Generator", href: "/ai-tools/wifi-qr-code-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "WiFi QR code generator using the standard WIFI: payload format — SSID, password, WPA/WEP/nopass encryption, hidden-network flag. Client-side generation with PNG/SVG/JPG download.",
    alternateName: [
      "WiFi QR Code Maker",
      "QR Code for WiFi Password",
      "Scan to Connect WiFi QR",
      "Guest WiFi QR Code Generator",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A WiFi QR code encodes your network's name, password, and security type in the standard WIFI: format that phone cameras understand — scanning it joins the network directly, with no password typed or revealed.",
    quickAnswer:
      "Enter your network name (SSID), password, and security type above, then download the QR code — anyone who scans it with a phone camera joins your WiFi instantly. iPhones (iOS 11+) and Android phones (10+) support this natively in the camera app. Generation happens in your browser; your password is never uploaded.",
    keyTakeaways: [
      "One scan connects — guests never see or type the password",
      "Works natively with iPhone and Android cameras, no app needed",
      "Supports WPA/WPA2/WPA3, WEP, open networks, and hidden SSIDs",
      "Generated 100% client-side — your WiFi password never leaves your device",
      "Print it: the code keeps working until you change the network name or password",
    ],
    overview:
      "The 'what's your WiFi password?' ritual — spelling out Tr0ub4dor&3 letter by letter — has a standard solution: the WIFI: QR payload, understood natively by iOS and Android cameras. This generator builds that code from your SSID, password, and security type, entirely in your browser (worth caring about: a WiFi QR literally contains your password, so a generator that uploads it server-side is handing your credentials to a stranger). Download as PNG or SVG, print it, frame it by the guest room — every scan is one less recitation.",

    howToSteps: [
      "The generator above is already set to WiFi mode — enter your network name (SSID) exactly as it appears.",
      "Enter the password and pick the security type (WPA/WPA2/WPA3 for almost every modern router).",
      "Tick 'hidden network' only if your router doesn't broadcast the SSID.",
      "Download (PNG for print, SVG for scaling) and place it where guests need it.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What's Inside a WiFi QR Code</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The payload is a simple standardized string:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm overflow-x-auto">
            WIFI:T:WPA;S:MyNetwork;P:MySecretPassword;H:false;;
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            T is the security type (WPA covers WPA/WPA2/WPA3-Personal; WEP for legacy; nopass for
            open networks), S the network name, P the password, H whether the SSID is hidden. Because
            the password is right there in plain text, two consequences follow: generate the code on
            a tool that runs locally (this one does — try it offline), and treat the printed code
            with the same care as a written-down password. Anyone who scans it is on your network.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Device Support</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Device</th>
                  <th className="p-3 text-left">How to scan</th>
                  <th className="p-3 text-left">Since</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">iPhone / iPad</td><td className="p-3">Native Camera app → tap the join banner</td><td className="p-3">iOS 11 (2017)</td></tr>
                <tr><td className="p-3 font-semibold">Android</td><td className="p-3">Camera or Google Lens → tap to connect</td><td className="p-3">Android 10 native; earlier via Lens</td></tr>
                <tr><td className="p-3 font-semibold">Windows laptop</td><td className="p-3">Camera app QR mode, or type the password the old way</td><td className="p-3">Windows 11 camera app</td></tr>
                <tr><td className="p-3 font-semibold">macOS</td><td className="p-3">No native scanner — share from a connected iPhone instead</td><td className="p-3">—</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Printing Tips That Affect Scanning</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Size: 3×3 cm is the practical minimum for a code scanned at arm&apos;s length; go bigger
            for wall-mounted signs (rule of thumb — scanning distance ÷ 10 = minimum code width).
            Contrast: dark modules on a light background; avoid printing on glossy laminate that
            glares under kitchen lights. Leave the quiet zone — the white border around the code —
            intact; cropping it is the most common reason printed codes stop scanning. And after any
            router password change, reprint: the old code fails silently and guests will assume
            your WiFi is broken, not the sign.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Guest-Network Etiquette (the Better Setup)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The nicest use of a WiFi QR code is pairing it with your router&apos;s guest network:
            guests get internet, your primary network (with its NAS, cameras, and smart devices)
            stays isolated, and you can rotate the guest password — and reprint the code — without
            re-pairing your own devices. Cafés and Airbnbs run on exactly this pattern: guest SSID,
            simple rotated password, QR on the wall.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Scanning a code that contains a password you can't see requires trust — so test your own code before printing: scan it with your phone while standing next to the router, and again from where the sign will hang. Two minutes now saves every guest the 'it doesn't work' conversation later.",

    faqs: [
      {
        question: "How do I make a QR code for my WiFi password?",
        answer:
          "Enter your network name (SSID), password, and security type in the generator above — it builds the standard WIFI: payload and renders the QR code, which you can download as PNG or SVG and print. The whole process runs in your browser, so the password is never transmitted.",
      },
      {
        question: "Does it work with WPA3?",
        answer:
          "Yes — select WPA in the generator. The WIFI: format's WPA type covers WPA, WPA2, and WPA3-Personal; phones negotiate the strongest security the router offers when they connect. WEP exists for legacy networks, and 'no password' for open ones.",
      },
      {
        question: "Can people see my password from the QR code?",
        answer:
          "Yes — the password is encoded in the QR payload in plain text, and any QR reader app can display it (that's how the phone joins the network). A WiFi QR code is a convenience for sharing a password, not a way to keep it secret. Use a guest network if you want to share access without exposing your main credentials.",
      },
      {
        question: "Does the QR code stop working if I change my password?",
        answer:
          "Immediately — the code is a snapshot of the SSID + password at generation time. Change either and you need a new code. Nothing expires otherwise: a printed WiFi QR works for years as long as the credentials stay the same.",
      },
      {
        question: "How do I share WiFi for a hidden network?",
        answer:
          "Enable the 'hidden network' option before generating — it sets the H:true flag so phones know to probe for the SSID instead of waiting to see it broadcast. Note that hidden SSIDs add no real security (the name is visible to anyone with a WiFi sniffer) while making connections flakier; a strong password matters far more.",
      },
      {
        question: "Is it safe to generate a WiFi QR code online?",
        answer:
          "Only if the generation is client-side. This tool builds the code in your browser with JavaScript — your credentials never reach a server, which you can verify by loading the page and then going offline before generating. Avoid generators that create the image server-side; they receive your password by design.",
      },
    ],

    relatedTools: [
      { name: "QR Code Generator (all types)", href: "/ai-tools/qr-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Password Strength Checker", href: "/crypto-tools/password-strength-checker" },
      { name: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WifiQrCodeGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiQrGenerator defaultQrType="wifi" />)} />
}
