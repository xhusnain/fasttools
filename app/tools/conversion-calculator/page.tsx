import { ConversionCalculator } from "@/components/conversion-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Calculator, Ruler, Thermometer, DollarSign, Clock, Weight, Volume, Square, Gauge, Zap, Globe, Target, TrendingUp, BookOpen, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Conversion Calculator | Free Online Unit Converter | FastTools",
  description:
    "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions. Free online tool with real-time data.",
  keywords: [
    // Primary Keywords (20)
    "conversion calculator",
    "unit converter",
    "online converter",
    "free converter",
    "unit conversion",
    "measurement converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "currency converter",
    "time converter",
    "area converter",
    "volume converter",
    "speed converter",
    "power converter",
    "energy converter",
    "pressure converter",
    "conversion tool",
    "converter online",
    "free conversion calculator",
    
    // Secondary Keywords (20)
    "metric converter",
    "imperial converter",
    "unit calculator",
    "measurement tool",
    "conversion table",
    "unit conversion tool",
    "conversion formula",
    "conversion chart",
    "unit converter online",
    "conversion calculator online",
    "free unit converter",
    "online unit converter",
    "conversion tool online",
    "unit conversion calculator",
    "measurement conversion",
    "conversion utility",
    "unit converter tool",
    "conversion app",
    "conversion website",
    "conversion platform",
    
    // Long-tail Keywords (20)
    "free online conversion calculator",
    "best unit converter online",
    "comprehensive conversion calculator",
    "advanced unit converter tool",
    "multi-unit conversion calculator",
    "universal conversion calculator",
    "all-in-one conversion tool",
    "complete unit converter",
    "professional conversion calculator",
    "scientific unit converter",
    "engineering conversion tool",
    "academic conversion calculator",
    "business conversion tool",
    "travel conversion calculator",
    "cooking conversion tool",
    "construction conversion calculator",
    "medical unit converter",
    "sports conversion tool",
    "weather conversion calculator",
    "technology conversion tool",
    
    // Additional SEO Keywords
    "conversion utilities",
    "measurement tools",
    "unit conversion services",
    "conversion platform",
    "digital conversion tools",
    "conversion solutions",
    "unit conversion website",
    "conversion calculator app",
    "online conversion services",
    "conversion tool collection",
    
    // Trending PDF & File Conversion Keywords
    "pdf converter",
    "pdf",
    "pdf to pdf converter",
    "pdf word converter",
    "converter pdf",
    "pdf to word",
    "pdf converter online",
    "converter mp3",
    "mp3",
    "converter youtube",
    "youtube converter",
    "jpg converter",
    "currency converter",
    "online converter",
    "free converter",
    "youtube mp3",
    "youtube mp3 converter",
    "youtube.com",
    "converter video",
    "video converter",
    "jpg to pdf",
    "converter excel",
    "pdf to jpg",
    "image converter",
    "mp4 converter",
    "online pdf converter",
    
    // Trending Text & Content Keywords
    "text message",
    "text free",
    "speech to text",
    "meaning in text",
    "image to text",
    "text generator",
    "text book",
    "font text",
    "text to pdf",
    "video to text",
    "text to video",
    "text to voice",
    "audio to text",
    "text editor",
    "bold text",
    "in text citation",
    "text style",
    "text from image",
    "open text",
    "text now",
    "compare text",
    "ai text generator",
    "coinbase",
    "coinbase with",
    "robinhood se",
    
    // Rising Trending Keywords
    "dwts text number",
    "robinhood se",
    "dancing with the stars",
    "dwts vote text",
    "dwts vote",
    "dancing with the stars vote",
    "dancing with the stars number",
    "kvonig von d",
    "robinhood security",
    "young republic",
    "robinhood security",
    "how to vote",
    "dwts number",
    "grvonleger",
    "what number",
    "ez pass scam",
    "e zpass final",
    "e zpass text",
    "ezpass scam",
    "unverified app",
    "e zpass text",
    "e zpass final",
    
    // Enhanced Conversion Keywords
    "pdf conversion",
    "file converter",
    "document converter",
    "format converter",
    "media converter",
    "audio converter",
    "video converter",
    "image converter",
    "text converter",
    "data converter",
    "unit converter",
    "measurement converter",
    "currency converter",
    "temperature converter",
    "length converter",
    "weight converter",
    "volume converter",
    "area converter",
    "speed converter",
    "power converter",
    "energy converter",
    "pressure converter",
    "time converter",
    "date converter",
    "number converter",
    "base converter",
    "hex converter",
    "binary converter",
    "decimal converter",
    "octal converter",
    "ascii converter",
    "unicode converter",
    "url converter",
    "color converter",
    "rgb converter",
    "hex color converter",
    "hsl converter",
    "cmyk converter",
    "pantone converter",
    "gradient converter",
    "font converter",
    "text case converter",
    "case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "sentence case converter",
    "camelCase converter",
    "snake_case converter",
    "kebab-case converter",
    "pascal case converter",
    "dot case converter",
    "swap case converter",
    "inverse case converter",
    "alternating case converter",
    "random case converter",
    "studly case converter",
    "sponge case converter",
    "vaporwave case converter",
    "zalgo case converter",
    "wingdings converter",
    "emoji converter",
    "symbol converter",
    "special character converter",
    "accent converter",
    "diacritic converter",
    "unicode converter",
    "utf converter",
    "ascii converter",
    "binary converter",
    "hex converter",
    "octal converter",
    "decimal converter",
    "base64 converter",
    "url encoder",
    "url decoder",
    "html encoder",
    "html decoder",
    "xml converter",
    "json converter",
    "csv converter",
    "excel converter",
    "word converter",
    "powerpoint converter",
    "presentation converter",
    "spreadsheet converter",
    "database converter",
    "sql converter",
    "mysql converter",
    "postgresql converter",
    "sqlite converter",
    "oracle converter",
    "mssql converter",
    "access converter",
    "dbf converter",
    "dbf to csv",
    "csv to dbf",
    "excel to csv",
    "csv to excel",
    "json to csv",
    "csv to json",
    "xml to json",
    "json to xml",
    "yaml converter",
    "toml converter",
    "ini converter",
    "cfg converter",
    "conf converter",
    "properties converter",
    "env converter",
    "dotenv converter",
    "dockerfile converter",
    "docker compose converter",
    "kubernetes converter",
    "helm converter",
    "terraform converter",
    "ansible converter",
    "puppet converter",
    "chef converter",
    "vagrant converter",
    "packer converter",
    "consul converter",
    "vault converter",
    "nomad converter",
    "traefik converter",
    "nginx converter",
    "apache converter",
    "iis converter",
    "caddy converter",
    "haproxy converter",
    "envoy converter",
    "istio converter",
    "linkerd converter",
    "consul connect converter",
    "service mesh converter",
    "microservices converter",
    "api gateway converter",
    "load balancer converter",
    "reverse proxy converter",
    "cdn converter",
    "cloudflare converter",
    "aws converter",
    "azure converter",
    "gcp converter",
    "digital ocean converter",
    "linode converter",
    "vultr converter",
    "heroku converter",
    "netlify converter",
    "vercel converter",
    "github pages converter",
    "gitlab pages converter",
    "bitbucket converter",
    "git converter",
    "svn converter",
    "mercurial converter",
    "bazaar converter",
    "fossil converter",
    "darcs converter",
    "monotone converter",
    "arch converter",
    "bitkeeper converter",
    "clearcase converter",
    "perforce converter",
    "tfs converter",
    "vss converter",
    "cvs converter",
    "rcs converter",
    "sccs converter",
    "pvcs converter",
    "dimensions converter",
    "harvest converter",
    "synergy converter",
    "telelogic converter",
    "rational converter",
    "ibm converter",
    "microsoft converter",
    "oracle converter",
    "sap converter",
    "salesforce converter",
    "workday converter",
    "servicenow converter",
    "jira converter",
    "confluence converter",
    "bamboo converter",
    "fisheye converter",
    "crucible converter",
    "crowd converter",
    "bitbucket converter",
    "stash converter",
    "bamboo converter",
    "fisheye converter",
    "crucible converter",
    "crowd converter",
    "bitbucket converter",
    "stash converter"
  ],
  openGraph: {
    title: "Advanced Conversion Calculator | Free Online Unit Converter",
    description: "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
    type: "website",
    url: "https://www.fasttools.store/tools/conversion-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Conversion Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Conversion Calculator | Free Online Unit Converter",
    description: "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/tools/conversion-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ConversionCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Conversion Calculator", href: "/tools/conversion-calculator" },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Conversion Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Convert between 1000+ units instantly with our comprehensive conversion calculator. Features: length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions. Perfect for students, professionals, travelers, and everyday calculations.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-4 lg:gap-8">
          <div className="space-y-4 lg:space-y-6">
            <ConversionCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Recommended</div>
                    <AdSpace slot="content" className="w-full h-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* How to Use Section */}
            <div className="mt-12 space-y-8">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  How to Use Our Advanced Conversion Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">1. Select Category</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Choose from 12+ conversion categories</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">2. Choose Units</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">Select from and to units</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">3. Enter Value</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Input the value to convert</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">4. Get Results</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300">View instant conversion results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Categories */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Calculator className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  Conversion Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { category: "Length", icon: Ruler, desc: "Meters, feet, inches, kilometers, miles", example: "1 meter = 3.281 feet" },
                    { category: "Weight", icon: Weight, desc: "Kilograms, pounds, ounces, tons", example: "1 kg = 2.205 pounds" },
                    { category: "Temperature", icon: Thermometer, desc: "Celsius, Fahrenheit, Kelvin", example: "0°C = 32°F" },
                    { category: "Currency", icon: DollarSign, desc: "USD, EUR, GBP, JPY, INR", example: "1 USD = 0.85 EUR" },
                    { category: "Time", icon: Clock, desc: "Seconds, minutes, hours, days", example: "1 hour = 3600 seconds" },
                    { category: "Area", icon: Square, desc: "Square meters, square feet, acres", example: "1 m² = 10.764 ft²" },
                    { category: "Volume", icon: Volume, desc: "Liters, gallons, cubic meters", example: "1 liter = 0.264 gallons" },
                    { category: "Speed", icon: Gauge, desc: "km/h, mph, m/s, knots", example: "1 km/h = 0.621 mph" },
                    { category: "Power", icon: Zap, desc: "Watts, horsepower, kilowatts", example: "1 kW = 1.341 HP" },
                    { category: "Energy", icon: Globe, desc: "Joules, calories, kWh, BTU", example: "1 kWh = 3412 BTU" },
                    { category: "Pressure", icon: Target, desc: "Pascal, bar, psi, atm", example: "1 bar = 14.504 psi" },
                    { category: "Data", icon: Calculator, desc: "Bytes, KB, MB, GB, TB", example: "1 GB = 1024 MB" }
                  ].map(({ category, icon: Icon, desc, example }) => (
                    <div key={category} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">{category}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{desc}</p>
                      <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  Common Use Cases for Conversion Calculator
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Professional & Business</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Engineering calculations and measurements</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>International business and currency conversion</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Scientific research and data analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Construction and architectural planning</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Education & Personal</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Student homework and assignments</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Travel planning and currency exchange</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Cooking and recipe conversions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Fitness and health measurements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How accurate are the conversion calculations?",
                      a: "Our calculator uses precise mathematical formulas and provides results accurate to 6 decimal places for most conversions, ensuring professional-grade accuracy."
                    },
                    {
                      q: "Do you support real-time currency conversion?",
                      a: "Yes, our currency converter uses live exchange rates updated every few minutes to provide the most current conversion values."
                    },
                    {
                      q: "Can I convert between different measurement systems?",
                      a: "Absolutely! Our calculator supports metric, imperial, US customary, and international measurement systems with seamless conversion between them."
                    },
                    {
                      q: "Is there a limit on the number of conversions?",
                      a: "No limits! You can perform unlimited conversions for free. Our tool is designed for both single conversions and bulk conversion needs."
                    },
                    {
                      q: "How do I convert historical currency values?",
                      a: "While we focus on current rates, you can use our calculator with historical exchange rates by inputting the specific rate you need."
                    }
                  ].map(({ q, a }, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 text-sm sm:text-base">{q}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Sticky Sidebar Container */}
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Top Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* Conversion Tips */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Calculator className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Conversion Tips</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Quick Length</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 break-all">1 meter ≈ 3.28 feet</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-xs sm:text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Temperature</div>
                    <div className="text-xs text-green-700 dark:text-green-300 break-all">°C to °F: ×1.8 + 32</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Weight</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 break-all">1 kg = 2.205 lbs</div>
                  </div>
                </div>
              </div>

              {/* Conversion Formulas */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <Calculator className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Key Formulas</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-200">Length</span>
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 break-all">1 ft = 0.3048 m</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-green-800 dark:text-green-200">Area</span>
                    </div>
                    <div className="text-xs text-green-700 dark:text-green-300 break-all">1 m² = 10.764 ft²</div>
                  </div>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-200">Volume</span>
                    </div>
                    <div className="text-xs text-purple-700 dark:text-purple-300 break-all">1 L = 0.264 gal</div>
                  </div>
                </div>
              </div>

              {/* Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Recommended</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
