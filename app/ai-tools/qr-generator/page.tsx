import type { Metadata } from "next"
import { AiQrGenerator } from "@/components/ai/ai-qr-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { QrCode, Sparkles, Target, BookOpen, Shield, Download, Zap, Globe, Smartphone } from "lucide-react"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `QR Code Generator ${currentYear} | Free WiFi, vCard & Logo QR Codes`,
  description:
    `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
  path: "/ai-tools/qr-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Free QR Code Generator - No Sign Up, No Expiration",
  category: "Utilities & Productivity",
  applicationName: "FastTools - Free QR Code Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "QR Code Generator",
    "application-name": "Free QR Code Generator",
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Business Owners, Marketers, Event Planners, Individuals",
    "subject": "Free QR Code Generation for WiFi, vCard, URL, and more",
    "abstract": `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
  },

}

export default function QrGeneratorPage() {
  const toolContent = {
    toolName: "QR Code Generator",
    overview: `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up. Our advanced tool allows you to generate high-quality, scannable QR codes for various purposes, from business cards to restaurant menus, all completely free.`,
    howToSteps: [
      "Select the type of QR code you want to create (URL, WiFi, vCard, Email, etc.) from the tabs.",
      "Enter the required information (website link, network details, contact info) into the input fields.",
      "Customize your QR code by choosing colors, adding a logo, or adjusting the design style.",
      "Preview your QR code to ensure it looks exactly how you want it.",
      "Click 'Download' to save your high-resolution QR code in PNG or SVG format instantly."
    ],
    features: [
      "Multiple Types: Generate QR codes for URLs, WiFi, vCards, Email, SMS, WhatsApp, and more.",
      "Customization: Personalize colors, add logos, and choose from different patterns and frames.",
      "High Resolution: Download print-ready QR codes in PNG and SVG formats.",
      "No Expiration: Your generated QR codes will never expire and work forever.",
      "Privacy Focused: All processing happens in your browser; no data is stored on our servers.",
      "100% Free: Unlimited generation with no watermarks, sign-ups, or hidden fees."
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <QrCode className="h-6 w-6 text-primary" />
            Comprehensive QR Code Generator: Create Professional Codes Instantly
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our <strong>free QR code generator</strong> is a powerful, professional-grade tool designed for both personal and business use. Whether you need a simple URL code for a flyer, a WiFi QR code for your home network, a vCard for networking events, or a custom-branded code for marketing campaigns, our platform handles it all with ease. We support a comprehensive range of data types including URLs, text, email, SMS, phone numbers, geolocation, WiFi credentials, and more.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Unlike many QR code generators that require registration, subscriptions, or impose expiration dates, our tool is completely free, unlimited, and generates codes that work forever. All processing happens locally in your browser, ensuring your data remains private and secure. With support for logo embedding, custom colors, multiple design styles, and high-resolution downloads in PNG and SVG formats, you can create professional QR codes that match your brand identity perfectly.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            QR Code Types: Complete Guide to All Supported Formats
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our generator supports multiple QR code types, each designed for specific use cases. Understanding these types helps you choose the right format for your needs:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">QR Code Type</th>
                  <th className="p-3 text-left">Use Case</th>
                  <th className="p-3 text-left">Required Information</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">URL/Website</td>
                  <td className="p-3">Direct users to websites, landing pages, or online content</td>
                  <td className="p-3">Website URL (https://example.com)</td>
                  <td className="p-3">Marketing campaigns, flyers, business cards, product packaging</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">WiFi Network</td>
                  <td className="p-3">Share WiFi credentials for instant connection</td>
                  <td className="p-3">Network name (SSID), password, security type (WPA/WPA2)</td>
                  <td className="p-3">Homes, offices, cafes, hotels, events, restaurants</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">vCard/Contact</td>
                  <td className="p-3">Share contact information for easy saving</td>
                  <td className="p-3">Name, phone, email, address, company, website</td>
                  <td className="p-3">Business cards, networking events, email signatures, resumes</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Email</td>
                  <td className="p-3">Open email client with pre-filled recipient and subject</td>
                  <td className="p-3">Email address, subject line (optional), body (optional)</td>
                  <td className="p-3">Customer support, feedback forms, contact pages, newsletters</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">SMS</td>
                  <td className="p-3">Open messaging app with pre-filled number and message</td>
                  <td className="p-3">Phone number, message text (optional)</td>
                  <td className="p-3">Customer service, appointment reminders, marketing campaigns</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Phone Number</td>
                  <td className="p-3">Initiate phone call directly from QR scan</td>
                  <td className="p-3">Phone number with country code</td>
                  <td className="p-3">Business cards, support pages, emergency contacts</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Location/Geolocation</td>
                  <td className="p-3">Open maps app with specific location</td>
                  <td className="p-3">Latitude and longitude coordinates or address</td>
                  <td className="p-3">Event venues, store locations, real estate, tourism</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Text/Plain Text</td>
                  <td className="p-3">Display text message when scanned</td>
                  <td className="p-3">Any text content (up to 2,953 characters)</td>
                  <td className="p-3">Instructions, messages, notes, information sharing</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">WhatsApp</td>
                  <td className="p-3">Open WhatsApp chat with pre-filled message</td>
                  <td className="p-3">Phone number, message text (optional)</td>
                  <td className="p-3">Customer support, business communication, marketing</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Customization & Branding: Make Your QR Codes Stand Out
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Stand out with branded QR codes that reflect your business identity. Our advanced customization options allow you to create professional, eye-catching codes that enhance your marketing materials:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <QrCode className="h-4 w-4 text-blue-500" />
                Logo Embedding
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Add your company logo or brand icon to the center of your QR code:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Upload custom logo images (PNG, JPG, SVG)</li>
                <li>Choose from popular social media icons</li>
                <li>Automatic size optimization for scannability</li>
                <li>Maintains code functionality with logo</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Color Customization
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Match your brand colors perfectly:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Custom foreground and background colors</li>
                <li>Hex color code support for precise matching</li>
                <li>Color contrast optimization for scannability</li>
                <li>Gradient and pattern options</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-green-500" />
                Design Patterns
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Choose from various design styles:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Square, rounded, or dot patterns</li>
                <li>Frame styles and borders</li>
                <li>Eye (finder pattern) customization</li>
                <li>Error correction levels (L, M, Q, H)</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Download className="h-4 w-4 text-orange-500" />
                Export Options
              </h4>
              <p className="text-sm text-muted-foreground mb-2">Download in multiple formats:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>PNG: High-resolution for digital use</li>
                <li>SVG: Vector format for unlimited scaling</li>
                <li>Print-ready resolutions (300 DPI+)</li>
                <li>Transparent background option</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Create the Perfect QR Code: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow this comprehensive guide to create professional, scannable QR codes that enhance your marketing and communication:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Choose Your QR Code Type</h4>
                <p className="text-sm text-muted-foreground">Select the appropriate type based on your goal. For websites, choose URL. For networking, use vCard. For WiFi sharing, select WiFi. Each type has specific fields optimized for that use case, ensuring the best user experience when scanned.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Information</h4>
                <p className="text-sm text-muted-foreground">Fill in all required fields accurately. For URLs, use the full address including https://. For WiFi codes, ensure the network name (SSID) and password are correct. Double-check contact information in vCards to avoid errors that could frustrate users.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Customize Design & Branding</h4>
                <p className="text-sm text-muted-foreground">Upload your logo, select brand colors, and choose a design pattern that matches your style. Ensure sufficient contrast between foreground and background colors for optimal scannability. Test different error correction levels if you're adding a large logo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Preview & Test</h4>
                <p className="text-sm text-muted-foreground">Always preview your QR code before downloading. Test it with multiple QR code scanner apps on different devices (iPhone, Android) to ensure it works correctly. Verify that all information is accurate and the code scans quickly and reliably.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Download in Appropriate Format</h4>
                <p className="text-sm text-muted-foreground">Choose PNG for digital use (websites, social media, emails) or SVG for print materials (business cards, flyers, posters). SVG files scale infinitely without quality loss, making them perfect for large-format printing. PNG files work best for online sharing and smaller print sizes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">6</div>
              <div>
                <h4 className="font-semibold text-foreground">Place Strategically</h4>
                <p className="text-sm text-muted-foreground">Position your QR code where it's easily accessible and visible. Include clear instructions (e.g., "Scan to connect to WiFi" or "Scan for menu"). Ensure adequate white space around the code (quiet zone) and avoid placing it in areas that might get damaged or obscured.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Best Practices for QR Code Success
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these proven best practices to ensure your QR codes are effective, scannable, and deliver the desired user experience:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Size & Resolution</h4>
              <p className="text-sm text-muted-foreground">QR codes should be at least 2cm x 2cm (0.8" x 0.8") for reliable scanning. For print materials, use 300 DPI or higher resolution. Larger codes are easier to scan, especially from a distance. For digital use, ensure the code is large enough to be easily tapped on mobile screens.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Contrast & Colors</h4>
              <p className="text-sm text-muted-foreground">Maintain high contrast between the QR code and background. Dark codes on light backgrounds (or vice versa) scan best. While colored codes look attractive, ensure sufficient contrast. Test your colored codes before finalizing to confirm scannability across different devices and lighting conditions.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Quiet Zone</h4>
              <p className="text-sm text-muted-foreground">Leave adequate white space (quiet zone) around your QR code—at least 4 modules on all sides. This space is essential for scanners to identify and decode the code correctly. Avoid placing text, graphics, or borders too close to the code.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Error Correction</h4>
              <p className="text-sm text-muted-foreground">Use higher error correction levels (M, Q, or H) when adding logos or custom designs. Higher error correction allows up to 30% of the code to be obscured while remaining scannable. Level L (low) works for simple codes without logos, but M or higher is recommended for branded codes.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Clear Call-to-Action</h4>
              <p className="text-sm text-muted-foreground">Always include text near your QR code explaining what users will get when they scan. Examples: "Scan to view menu," "Scan to connect WiFi," or "Scan to save contact." This increases scan rates and improves user experience by setting clear expectations.</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Test Before Distribution</h4>
              <p className="text-sm text-muted-foreground">Test your QR code with multiple scanner apps (native camera apps, dedicated QR scanners) on both iOS and Android devices. Verify the code works in different lighting conditions and from various distances. Test the destination URL or action to ensure it functions correctly.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Real-World Use Cases: How Businesses Use QR Codes
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            QR codes have become essential tools across industries. Here are proven use cases that demonstrate their versatility and effectiveness:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-blue-500" />
                Restaurants & Hospitality
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Digital menus: Contactless menu viewing on customer phones</li>
                <li>WiFi sharing: Instant network access for guests</li>
                <li>Feedback forms: Quick access to review platforms</li>
                <li>Loyalty programs: Easy sign-up and point tracking</li>
                <li>Payment links: Direct access to online ordering</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-500" />
                Marketing & Advertising
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Product information: Detailed specs and reviews</li>
                <li>Campaign tracking: Measure engagement and conversions</li>
                <li>Social media: Direct links to profiles and content</li>
                <li>Promotions: Exclusive discounts and offers</li>
                <li>Event registration: Quick sign-up for webinars and events</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-green-500" />
                Business & Networking
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Business cards: Instant contact saving via vCard</li>
                <li>Email signatures: Professional contact sharing</li>
                <li>Resumes: Link to portfolio and LinkedIn</li>
                <li>Office WiFi: Secure network access for visitors</li>
                <li>Documentation: Quick access to manuals and guides</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-500" />
                Retail & E-commerce
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Product details: Specifications, reviews, videos</li>
                <li>Price comparison: Link to online store</li>
                <li>Warranty registration: Easy product activation</li>
                <li>Customer support: Direct access to help resources</li>
                <li>Inventory tracking: Internal warehouse management</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Unlike many QR code generators that store your information on their servers, our tool processes everything locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Local Processing</h4>
                <p className="text-sm text-muted-foreground">All QR code generation happens in your browser. Your URLs, contact information, WiFi passwords, and other data never leave your device or get transmitted to our servers.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your information. There's no database of your QR codes, no analytics on your usage, and no way for us to access your data.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't use cookies, tracking pixels, or analytics to monitor your usage. Your browsing remains completely private while using our tool.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Static Codes</h4>
                <p className="text-sm text-muted-foreground">All generated QR codes are static, meaning they contain the data directly encoded in the image. There's no redirect service or tracking links—just direct, secure access to your content.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            File Formats & Quality: Choosing the Right Export
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding the difference between file formats helps you choose the right option for your specific use case:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Format</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Resolution</th>
                  <th className="p-3 text-left">Scalability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">PNG</td>
                  <td className="p-3">Digital use, websites, social media, emails</td>
                  <td className="p-3">High resolution (up to 3000x3000px)</td>
                  <td className="p-3">Fixed size, quality loss when enlarged</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">SVG</td>
                  <td className="p-3">Print materials, large formats, professional design</td>
                  <td className="p-3">Vector (infinite resolution)</td>
                  <td className="p-3">Scales infinitely without quality loss</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>PNG Format:</strong> Perfect for digital use where file size matters. PNG files work well on websites, in emails, on social media, and for smaller print jobs. They maintain high quality at their native resolution but may pixelate if enlarged significantly.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>SVG Format:</strong> Ideal for professional printing and large-format applications. SVG files are vector-based, meaning they can be scaled to any size—from business cards to billboards—without losing quality. They're also smaller in file size for simple designs and work perfectly in design software like Adobe Illustrator or InDesign.
          </p>
        </article>
      </div>
    ),
    faqs: [
      {
        question: "Is this QR code generator truly free?",
        answer: "Yes, our QR code generator is 100% free to use with no hidden costs, subscriptions, or limits. You can generate unlimited QR codes for any purpose without watermarks, expiration dates, or registration requirements. All features, including logo embedding and customization, are completely free."
      },
      {
        question: "Do the QR codes expire?",
        answer: "No, the QR codes generated with our tool are static and do not expire. They will work forever as long as the information you encoded (like the website URL) remains valid. Unlike dynamic QR codes from paid services, our static codes contain the data directly in the image, so they never expire or require ongoing subscriptions."
      },
      {
        question: "Can I add my logo to the QR code?",
        answer: "Absolutely! You can upload your own logo image (PNG, JPG, or SVG) or choose from a library of popular social media icons to embed in the center of your QR code. Our tool automatically optimizes logo size to maintain scannability while allowing you to brand your codes professionally."
      },
      {
        question: "What formats can I download?",
        answer: "You can download your QR codes in high-quality PNG format for digital use (websites, social media, emails) and SVG format for professional printing and unlimited scaling. PNG files are perfect for online sharing, while SVG files are ideal for large-format printing and design work."
      },
      {
        question: "Is there a limit to how many scans my QR code can get?",
        answer: "There are no scan limits whatsoever. Your QR codes can be scanned an unlimited number of times by an unlimited number of users. Since our codes are static and don't rely on redirect services, there's no infrastructure that could impose limits on scanning."
      },
      {
        question: "Can I generate a QR code for WiFi?",
        answer: "Yes, our tool includes a dedicated WiFi QR code generator. Simply enter your network name (SSID), password, and security type (WPA/WPA2), and guests can connect instantly by scanning the code with their smartphone camera. No need to manually enter WiFi credentials."
      },
      {
        question: "What types of QR codes can I create?",
        answer: "Our generator supports multiple QR code types including URLs/websites, WiFi networks, vCard/contact information, email addresses, SMS messages, phone numbers, geolocation coordinates, plain text, and WhatsApp messages. Each type is optimized for its specific use case."
      },
      {
        question: "Can I customize the colors of my QR code?",
        answer: "Yes! You can customize both the foreground and background colors of your QR code to match your brand. Use hex color codes for precise color matching. We recommend maintaining high contrast between colors to ensure optimal scannability across different devices and lighting conditions."
      },
      {
        question: "Do I need to create an account to use this tool?",
        answer: "No account creation is required. Our QR code generator works completely without registration. Simply visit the page, create your QR code, and download it—all without signing up or providing any personal information."
      },
      {
        question: "Are my QR codes tracked or monitored?",
        answer: "No, we don't track, monitor, or store any information about your QR codes or scans. Since our codes are static and generated locally in your browser, there's no tracking infrastructure. Your privacy is completely protected."
      },
      {
        question: "Can I use QR codes for business purposes?",
        answer: "Absolutely! Our QR code generator is perfect for business use. Many businesses use our tool for marketing campaigns, business cards, product packaging, restaurant menus, event registration, customer support, and more. All features are free for commercial use."
      },
      {
        question: "What's the difference between static and dynamic QR codes?",
        answer: "Static QR codes (like ours) contain the data directly encoded in the image and never expire. Dynamic QR codes use a redirect service and can be edited after creation but typically require paid subscriptions and may expire. Our static codes are free forever and work independently of any service."
      },
      {
        question: "Can I generate QR codes in bulk?",
        answer: "Yes, you can generate unlimited QR codes one at a time. Simply create each code, download it, and repeat. While we don't have a bulk upload feature, you can quickly generate multiple codes by entering different information for each one."
      },
      {
        question: "What size should my QR code be?",
        answer: "QR codes should be at least 2cm x 2cm (0.8' x 0.8') for reliable scanning. For print materials, use 300 DPI or higher resolution. Larger codes are easier to scan from a distance. For digital use, ensure the code is large enough to be easily tapped on mobile screens."
      },
      {
        question: "Can I create a QR code for a contact card (vCard)?",
        answer: "Yes! Our vCard QR code generator allows you to create contact cards that can be instantly saved to smartphones. Enter name, phone, email, address, company, website, and other contact details. When scanned, the contact information is automatically saved to the user's phone."
      },
      {
        question: "What happens if I make a mistake in my QR code?",
        answer: "If you make a mistake, simply generate a new QR code with the corrected information. Since codes are generated instantly and free, you can create as many versions as needed until you get it right. Always test your QR code before printing or distributing it widely."
      },
      {
        question: "Can I create QR codes for social media profiles?",
        answer: "Yes! You can create QR codes that link directly to any social media profile (Instagram, Facebook, LinkedIn, Twitter, TikTok, etc.). Simply use the URL type and enter the full profile URL. You can also add social media icons as logos in your QR code design."
      },
      {
        question: "Are QR codes safe to use?",
        answer: "Yes, QR codes are safe when generated from trusted sources like our tool. Since our codes are static and generated locally, they can't be modified after creation. Always verify the destination when scanning QR codes from unknown sources, and ensure you're using a reputable generator for creating your own codes."
      },
      {
        question: "Can I print QR codes on different materials?",
        answer: "Yes, QR codes can be printed on virtually any material including paper, plastic, metal, fabric, and more. Ensure sufficient contrast and size for the material. For materials that might get damaged (like outdoor signs), consider using higher error correction levels and larger sizes."
      },
      {
        question: "What is error correction and why does it matter?",
        answer: "Error correction allows QR codes to remain scannable even if part of the code is damaged or obscured. Levels range from L (low, ~7% recovery) to H (high, ~30% recovery). Higher levels are essential when adding logos or custom designs, as they allow more of the code to be covered while maintaining functionality."
      },
      {
        question: "Can I create QR codes for email addresses?",
        answer: "Yes! Our email QR code generator creates codes that open the user's email client with a pre-filled recipient address, subject line, and optional message body. Perfect for customer support, feedback forms, contact pages, and marketing campaigns."
      },
      {
        question: "Do QR codes work offline?",
        answer: "QR codes themselves work offline—the image can be scanned without internet. However, the action triggered by scanning (like opening a website) requires internet connectivity. For offline use, create text-based QR codes that display information directly when scanned."
      },
      {
        question: "Can I create QR codes for phone numbers?",
        answer: "Yes! Our phone number QR code generator creates codes that initiate a phone call directly when scanned. Simply enter the phone number with country code (e.g., +1 for US), and scanning will open the dialer with the number ready to call."
      },
      {
        question: "What's the quiet zone in QR codes?",
        answer: "The quiet zone is the white space required around a QR code (at least 4 modules on all sides) that allows scanners to identify and decode the code correctly. Always leave adequate space around your QR code and avoid placing text, graphics, or borders too close to it."
      },
      {
        question: "Can I create QR codes for locations?",
        answer: "Yes! Our location/geolocation QR code generator creates codes that open maps applications with a specific location. You can enter coordinates (latitude/longitude) or a physical address. When scanned, it opens Google Maps, Apple Maps, or other map apps with the location marked."
      },
      {
        question: "Are there any restrictions on what I can encode?",
        answer: "You can encode any valid data for each QR code type. URLs must be properly formatted, phone numbers should include country codes, and text can be up to 2,953 characters depending on error correction level. We don't restrict content, but ensure you're not encoding illegal or harmful information."
      },
      {
        question: "Can I create QR codes for WhatsApp?",
        answer: "Yes! Our WhatsApp QR code generator creates codes that open WhatsApp with a pre-filled phone number and optional message. Perfect for customer support, business communication, and marketing campaigns. Users can start a conversation instantly by scanning."
      },
      {
        question: "What's the maximum data capacity of a QR code?",
        answer: "QR code capacity varies by type and error correction level. Numeric data can hold up to 7,089 characters, alphanumeric up to 4,296 characters, binary up to 2,953 bytes, and Kanji up to 1,817 characters. Most practical uses (URLs, contact info) fit comfortably within these limits."
      },
      {
        question: "Can I create QR codes for SMS messages?",
        answer: "Yes! Our SMS QR code generator creates codes that open the messaging app with a pre-filled phone number and optional message text. Users can send the message instantly by scanning. Great for customer service, appointment reminders, and marketing campaigns."
      },
      {
        question: "Do QR codes work on all smartphones?",
        answer: "Yes, modern smartphones (iPhone and Android) have built-in QR code scanning in their camera apps. Simply open the camera and point it at a QR code—no additional app needed. Older devices may require a dedicated QR scanner app, which are available free in app stores."
      },
      {
        question: "Can I create QR codes with transparent backgrounds?",
        answer: "Yes! When downloading in PNG format, you can choose a transparent background option. This is perfect for placing QR codes on colored backgrounds, images, or designs where you want the code to blend seamlessly with your layout."
      },
      {
        question: "What's the difference between PNG and SVG formats?",
        answer: "PNG is a raster format (pixel-based) perfect for digital use and smaller prints. SVG is a vector format (mathematical) that scales infinitely without quality loss, ideal for large-format printing and professional design work. Choose PNG for websites/emails, SVG for print materials."
      }
    ],
    relatedTools: [
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Pet Name Generator", href: "/ai-tools/pet-names" },
      { name: "Link in Bio", href: "/social-media-tools/link-in-bio" }
    ],
    useCases: [
      "Restaurants creating digital menus",
      "Businesses sharing contact info via vCards",
      "Event organizers managing check-ins",
      "Marketers tracking campaign engagement",
      "Retailers providing product details",
      "Homeowners sharing WiFi access easily"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free QR Code Generator - WiFi, vCard, URL & More",
        description: "Create unlimited, customizable QR codes for free. Support for WiFi, vCard, URL, Email, and more. Add logos, colors, and download in high resolution. No sign up required.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "QR Generator", href: "/ai-tools/qr-generator" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiQrGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `QR Code Generator ${currentYear} | Free WiFi, vCard & Logo QR Codes`,
        description: `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
        path: "/ai-tools/qr-generator"
      }}
    />
  )
}
