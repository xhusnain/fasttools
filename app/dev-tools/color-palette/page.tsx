import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ColorPaletteGenerator } from "@/components/color-palette-generator"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import { Palette, Shuffle, Lock, Copy, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - Color Palettes | Free 1000+ HEX Codes for Web Design",
  description:
    "FastTools Color Palettes - Explore 1000+ free color palettes for websites, branding, UI/UX & graphic design. 43 categories including aesthetic, pastel, vintage, modern & seasonal. Copy HEX codes instantly. Filter by theme, season, or color. Perfect for designers, developers & creatives.",
  keywords: [
    "fasttools",
    "fast tools",
    // Primary Keywords (20)
    "color palettes",
    "color palette",
    "color schemes",
    "color combinations",
    "color palette library",
    "beautiful color palettes",
    "color palette ideas",
    "hex color palette",
    "copy hex colors",
    "brand color palettes",
    "ui color palettes",
    "web design color palettes",
    "design color schemes",
    "gradient color palettes",
    "dark color palettes",
    "light color palettes",
    "modern color palettes",
    "color palette inspiration",
    "professional color palettes",
    "website color palettes",
    
    // Secondary Keywords (20)
    "red color palettes",
    "blue color palettes",
    "green color palettes",
    "purple color palettes",
    "yellow color palettes",
    "orange color palettes",
    "pink color palettes",
    "brown color palettes",
    "gemstone color palettes",
    "nature color palettes",
    "sunset color palettes",
    "ocean color palettes",
    "forest color palettes",
    "autumn color palettes",
    "winter color palettes",
    "spring color palettes",
    "summer color palettes",
    "pastel color palettes",
    "vibrant color palettes",
    "neutral color palettes",
    
    // Long-tail Keywords (40)
    "best color palettes for websites",
    "modern color palettes for web design",
    "professional color palette ideas",
    "color palette for branding",
    "color schemes for graphic design",
    "beautiful color combinations for design",
    "trendy color palettes 2025",
    "minimalist color palettes",
    "bold color palettes",
    "elegant color palettes",
    "earthy color palettes",
    "tropical color palettes",
    "monochromatic color palettes",
    "analogous color palettes",
    "complementary color palettes",
    "triadic color palettes",
    "warm color palettes",
    "cool color palettes",
    "jewel tone color palettes",
    "metallic color palettes",
    "sapphire color palettes",
    "emerald color palettes",
    "ruby color palettes",
    "amethyst color palettes",
    "topaz color palettes",
    "aquamarine color palettes",
    "garnet color palettes",
    "coral color palettes",
    "turquoise color palettes",
    "lavender color palettes",
    "crimson color palettes",
    "amber color palettes",
    "jade color palettes",
    "rose color palettes",
    "midnight color palettes",
    "dawn color palettes",
    "dusk color palettes",
    "twilight color palettes",
    "sunrise color palettes",
    "sunset color palettes",
    
    // High-Volume Specific Keywords (50)
    "color palette generator",
    "free color palette generator",
    "color scheme generator",
    "website color scheme",
    "logo color palette",
    "app color palette",
    "ui color scheme",
    "color palette for logo design",
    "hex color codes",
    "rgb color palette",
    "color picker palette",
    "color combinations for websites",
    "best color combinations",
    "color palette tool",
    "online color palette",
    "color palette maker",
    "design color palette",
    "graphic design color palette",
    "web color palette",
    "mobile app color palette",
    "landing page color palette",
    "ecommerce color palette",
    "color palette examples",
    "color palette templates",
    "ready made color palettes",
    "pre made color palettes",
    "instant color palettes",
    "quick color schemes",
    "color palette collection",
    "color scheme ideas",
    "color inspiration",
    "design inspiration colors",
    "trending color palettes",
    "popular color schemes",
    "viral color palettes",
    "aesthetic color palettes",
    "aesthetic color schemes",
    "aesthetic colors",
    "cute color palettes",
    "soft color palettes",
    "muted color palettes",
    "rich color palettes",
    "deep color palettes",
    "saturated color palettes",
    "desaturated color palettes",
    "color palette finder",
    "find color palette",
    "search color palettes",
    "browse color schemes",
    "explore color palettes",
    
    // Industry & Use Case Keywords (40)
    "corporate color palette",
    "business color scheme",
    "tech startup colors",
    "saas color palette",
    "fintech color scheme",
    "healthcare color palette",
    "education color scheme",
    "restaurant color palette",
    "cafe color scheme",
    "fashion color palette",
    "beauty brand colors",
    "fitness brand palette",
    "travel website colors",
    "real estate color palette",
    "portfolio color scheme",
    "photography website colors",
    "blog color palette",
    "magazine color scheme",
    "news website colors",
    "social media colors",
    "dashboard color palette",
    "admin panel colors",
    "crm color scheme",
    "productivity app colors",
    "gaming color palette",
    "streaming platform colors",
    "music app palette",
    "podcast website colors",
    "youtube channel colors",
    "instagram color palette",
    "facebook colors",
    "twitter color scheme",
    "linkedin colors",
    "tiktok color palette",
    "shopify store colors",
    "wordpress theme colors",
    "bootstrap color palette",
    "tailwind color scheme",
    "material ui colors",
    "chakra ui palette",
    
    // Color Theory & Design Keywords (30)
    "color harmony",
    "color wheel palette",
    "complementary colors",
    "split complementary palette",
    "tetradic color scheme",
    "square color palette",
    "analogous color scheme",
    "triadic color palette",
    "monochromatic scheme",
    "achromatic color palette",
    "color psychology",
    "color meaning",
    "color emotions",
    "warm vs cool colors",
    "color temperature",
    "color contrast",
    "color balance",
    "color composition",
    "60 30 10 rule colors",
    "primary color palette",
    "secondary color palette",
    "tertiary color palette",
    "accent color palette",
    "background colors",
    "foreground colors",
    "text color palette",
    "button color scheme",
    "hover state colors",
    "active state palette",
    "disabled state colors",
    
    // Specific Color Combinations (50)
    "black and gold palette",
    "black and white color scheme",
    "navy and gold palette",
    "pink and blue colors",
    "green and gold palette",
    "purple and gold colors",
    "red and black palette",
    "blue and orange scheme",
    "yellow and gray palette",
    "teal and coral colors",
    "mint and peach palette",
    "burgundy and cream colors",
    "sage and terracotta palette",
    "dusty rose palette",
    "millennial pink colors",
    "gen z color palette",
    "boho color palette",
    "farmhouse colors",
    "industrial color scheme",
    "scandinavian colors",
    "japanese color palette",
    "korean color scheme",
    "french color palette",
    "italian colors",
    "mexican color palette",
    "moroccan colors",
    "indian color scheme",
    "african color palette",
    "caribbean colors",
    "southwestern palette",
    "art deco colors",
    "mid century modern palette",
    "bohemian color scheme",
    "rustic color palette",
    "vintage color scheme",
    "retro 60s colors",
    "70s color palette",
    "80s neon colors",
    "90s color scheme",
    "y2k color palette",
    "cyberpunk colors",
    "synthwave palette",
    "vaporwave colors",
    "cottagecore palette",
    "dark academia colors",
    "light academia palette",
    "coastal grandmother colors",
    "grandmillennial palette",
    "maximalist colors",
    "eclectic color scheme",
    
    // Accessibility & Modern Design (30)
    "accessible color palette",
    "wcag color contrast",
    "ada compliant colors",
    "colorblind friendly palette",
    "high contrast colors",
    "low contrast palette",
    "dark mode colors",
    "light mode palette",
    "theme colors",
    "day night mode palette",
    "responsive design colors",
    "mobile friendly palette",
    "cross platform colors",
    "ios app colors",
    "android material colors",
    "windows app palette",
    "mac os colors",
    "web app color scheme",
    "pwa color palette",
    "progressive web app colors",
    "single page app palette",
    "multi page colors",
    "component library palette",
    "design system colors",
    "brand guidelines palette",
    "style guide colors",
    "design tokens palette",
    "css variables colors",
    "sass color palette",
    "less color scheme",
    
    // Action & Intent Keywords (20)
    "copy color codes",
    "download color palette",
    "save color scheme",
    "export palette",
    "share color palette",
    "color palette png",
    "color palette pdf",
    "color palette css",
    "color palette json",
    "color palette for figma",
    "color palette for adobe",
    "color palette for sketch",
    "color palette for canva",
    "color palette for photoshop",
    "color palette for illustrator",
    "color palette for xd",
    "color palette for invision",
    "color palette for framer",
    "procreate color palette",
    "affinity color scheme",
    
    // Alphabetical High-Ranking Keywords (200+)
    "color palettes aesthetic",
    "color palettes adobe",
    "color palettes analysis",
    "color palettes aseprite",
    "color palettes ai",
    "color palettes and hex codes",
    "color palettes and names",
    "color palettes architecture",
    "color palettes anime",
    "color palettes and seasons",
    "color palettes by season",
    "color palettes book",
    "color palettes by decade",
    "color palettes bright",
    "color palettes best",
    "color palettes based on skin tone",
    "color palettes benjamin moore",
    "color palettes based on names",
    "branding color palettes",
    "color palettes beige",
    "color palettes bedroom",
    "color palettes bloxburg",
    "color palettes canva",
    "color palettes clothing",
    "color palettes codes",
    "color palettes creatures of sonaria",
    "color palettes cos",
    "color palettes creator",
    "color palettes cute",
    "color palettes cmyk",
    "color palettes cool",
    "color palettes combinations",
    "color palettes complementary",
    "color palettes download",
    "color palettes design",
    "color palettes deep winter",
    "color palettes dark blue",
    "color palettes drawing",
    "color palettes deviantart",
    "color palettes dti",
    "color palettes data visualization",
    "color palettes dark mode",
    "dark green color palettes",
    "color palettes different",
    "color palettes dark theme",
    "color palettes dashboards",
    "color palettes d3",
    "color palettes examples",
    "color palettes earthy",
    "color palettes explained",
    "color palettes excel",
    "color palettes elegant",
    "emerald green color palettes",
    "color palettes for websites",
    "color palettes for branding",
    "color palettes for logos",
    "color palettes for google calendar",
    "color palettes for skin tone",
    "color palettes for procreate",
    "color palettes for family photos",
    "color palettes for home",
    "color palettes for clothing",
    "color palettes for weddings",
    "color palettes for interior design",
    "color palettes for house interior",
    "color palettes for pixel art",
    "color palettes for bedrooms",
    "color palettes from image",
    "color palettes generator from image",
    "color palettes generator free",
    "color palettes ggplot2",
    "color palettes generator from name",
    "color palettes google calendar",
    "color palettes ggplot",
    "color palettes generator from hex",
    "color palettes grey",
    "color palettes graphic design",
    "color palettes gradient",
    "color palettes google",
    "color palettes generator wheel",
    "color palettes generator minecraft",
    "color palettes hex codes",
    "color palettes hex",
    "color palettes horse life",
    "color palettes home decor",
    "color palettes html",
    "color palettes halloween",
    "color palettes hello kitty island adventure",
    "home color palettes",
    "color palettes house",
    "color palettes high contrast",
    "color palettes hair",
    "color palettes in r",
    "color palettes in seaborn",
    "color palettes ideas",
    "color palettes interior design",
    "color palettes in canva",
    "color palettes in movies",
    "color palettes in film",
    "color palettes in python",
    "color palettes in matplotlib",
    "color palettes inspiration",
    "color palettes in ggplot2",
    "color palettes in minecraft",
    "color palettes in ggplot",
    "color palettes ibis paint",
    "color palettes in procreate",
    "color palettes julia",
    "color palettes japanese",
    "color palettes japanese book",
    "color palettes jewel tone",
    "color palettes krita",
    "color palettes kitchen",
    "color palettes kids",
    "color palettes korean",
    "color palettes lospec",
    "color palettes list",
    "color palettes living room",
    "color palettes logo",
    "color palettes light",
    "color palettes luxury",
    "color palettes light blue",
    "color palettes lavender",
    "color palettes large",
    "color palettes minecraft",
    "color palettes meaning",
    "color palettes matplotlib",
    "color palettes maker",
    "color palettes matlab",
    "color palettes movies",
    "color palettes mc",
    "color palettes modern",
    "color palettes muted",
    "color palettes matching",
    "color palettes monochromatic",
    "color palettes material design",
    "color palettes with maroon",
    "color palettes names",
    "color palettes net",
    "color palettes nature",
    "color palettes neutral",
    "color palettes neon",
    "color palettes navy blue",
    "color palettes with navy",
    "color palettes name generator",
    "color palettes nice",
    "color palettes notes",
    "color palettes online",
    "color palettes on canva",
    "color palettes orange",
    "color palettes of blue",
    "color palettes of the decades",
    "color palettes ohuhu",
    "color palettes of famous paintings",
    "color palettes of green",
    "color palettes of 2025",
    "color palettes of 3",
    "color palettes of pink",
    "color palettes of red",
    "color palettes on pinterest",
    "color palettes of brown",
    "color palettes on procreate",
    "color palettes pixel art",
    "color palettes pinterest",
    "color palettes procreate",
    "color palettes python",
    "color palettes pink",
    "color palettes pastel",
    "color palettes purple",
    "color palettes people",
    "color palettes pixel",
    "color palettes procreate free",
    "color palettes picker",
    "color palettes pdf",
    "color palettes pantone",
    "color palettes professional",
    "color palettes popular",
    "color palettes quiz",
    "color palettes red",
    "color palettes reddit",
    "color palettes rgb",
    "color palettes rainbow",
    "color palettes retro",
    "color palettes rstudio",
    "color palettes random",
    "color palettes room",
    "color palettes r ggplot",
    "color palettes rcolorbrewer",
    "color palettes red and black",
    "color palettes red and blue",
    "color palettes seasons",
    "color palettes seaborn",
    "color palettes skin tone",
    "color palettes summer",
    "color palettes sns",
    "color palettes spring",
    "color palettes seasons test",
    "color palettes skin",
    "color palettes shades of blue color",
    "color palettes soft autumn",
    "color palettes scientific figures",
    "color palettes sherwin williams",
    "color palettes spring summer fall winter",
    "color palettes that go together",
    "color palettes tumblr",
    "color palettes types",
    "color palettes test",
    "color palettes that go with green",
    "color palettes that match",
    "color palettes trending",
    "color palettes that go with purple",
    "color palettes that go with brown",
    "color palettes that go with red",
    "color palettes that go with gray",
    "color palettes that go with navy blue",
    "color palettes that are color blind friendly",
    "color palettes that go with sage green",
    "color palettes that go with red brick",
    "color palettes ui",
    "color palettes ui design",
    "color palettes for ui ux",
    "color palettes unique",
    "color palettes ultrakill",
    "color palettes ux",
    "color palettes viridis",
    "color palettes vintage",
    "color palettes video games",
    "color palettes vibrant",
    "color palettes violet",
    "color palettes with hex codes",
    "color palettes website",
    "color palettes with green",
    "color palettes with red",
    "color palettes with blue",
    "color palettes with purple",
    "color palettes with orange",
    "color palettes with yellow",
    "color palettes with pink",
    "color palettes with gray",
    "color palettes with brown",
    "color palettes with black",
    "color palettes with codes",
    "color palettes with navy blue",
    "color palettes with sage green",
    "color palettes yellow",
    "color palettes yellow and blue",
    "color palettes yellow green",
    "color palettes 10 colors",
    "color palettes 12",
    "color palettes 16",
    "color palettes 12 seasons",
    "color palettes 2024",
    "color palettes 3 colors",
    "color palettes 4 colors",
    "color palettes 4 seasons",
    "color palettes 5 colors",
    "color palettes 6 colors",
    "color palettes 7 colors",
    "color palettes 8 colors",
    "color palettes 80s",
    "color palettes 8 bit",
    "color palettes websites",
    "pastel color palettes",
    "color palettes with gold",
    "best color palettes for websites",
    "color palettes images",
    
    // CSS Color Keywords (10)
    "css all colours",
    "css colours light grey",
    "css colours light blue",
    "css colours matplotlib",
    "css colours palette",
    "css colours w3schools",
    "css 3 colours",
    "css color palettes",
    "css color codes",
    "css color schemes"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/color-palette" },
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
  authors: [{ name: "FastTools", url: "https://www.fasttools.store" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "FastTools Color Palettes",
  referrer: "origin-when-cross-origin",
  category: "Design Tools",
  openGraph: {
    title: "1000+ Free Color Palettes & Schemes - HEX Codes for Web Design | FastTools",
    description: "Explore 1000+ free color palettes for websites, branding, UI/UX & graphic design. 43 categories including aesthetic, pastel, vintage, modern & seasonal. Copy HEX codes instantly.",
    url: "https://www.fasttools.store/dev-tools/color-palette",
    type: "website",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools - 1000+ Free Color Palettes with HEX Codes for Web Design, Branding & UI/UX",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1000+ Free Color Palettes & Schemes - HEX Codes for Web Design | FastTools",
    description: "Explore 1000+ free color palettes for websites, branding, UI/UX & graphic design. 43 categories including aesthetic, pastel, vintage, modern & seasonal. Copy HEX codes instantly.",
    images: ["https://www.fasttools.store/og-image.svg"],
    site: "@FastToolsStore",
    creator: "@FastToolsStore",
  },
}

export default function ColorPalettePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FastTools Color Palettes",
    alternateName: ["Color Palette Library", "Color Schemes Collection", "Design Color Palettes", "Free Color Palette Generator", "HEX Color Code Library"],
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    url: "https://www.fasttools.store/dev-tools/color-palette",
    description: "Explore 1000+ free color palettes for websites, branding, UI/UX and graphic design. 43 categories including aesthetic, pastel, vintage, modern and seasonal themes. Copy HEX codes instantly and filter by theme, season, or color.",
    inLanguage: "en",
    isAccessibleForFree: true,
    offers: { 
      "@type": "Offer", 
      price: "0", 
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    featureList: [
      "Thousands of pre-made color palettes",
      "Filter by category and theme",
      "Filter by color (red, blue, green, etc.)",
      "Gemstone and nature-inspired palettes",
      "Gradient color palettes",
      "Dark and light theme palettes",
      "Copy HEX codes instantly",
      "Professional design inspiration",
      "Brand color schemes",
      "UI/UX color palettes",
      "Web design color combinations",
      "Seasonal color palettes",
      "Jewel tone palettes",
      "Modern and minimalist palettes"
    ],
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    publisher: { 
      "@type": "Organization", 
      name: "FastTools", 
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.svg",
        width: 320,
        height: 80
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "4200",
      bestRating: "5",
      worstRating: "1"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    version: "2.0",
    softwareVersion: "2.0",
    downloadUrl: "https://www.fasttools.store/dev-tools/color-palette",
    screenshot: "https://www.fasttools.store/og-image.svg",
    keywords: "free color palettes, color schemes for websites, hex color codes, color palette generator, design color palettes, branding colors, ui ux color palettes, aesthetic color palettes, pastel color palettes, vintage color palettes, modern color palettes, seasonal color palettes, web design colors, graphic design palettes",
    about: {
      "@type": "Thing",
      name: "Color Palettes and Design Inspiration",
      description: "Comprehensive library of beautiful color palettes for design, branding, and web development"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FastTools",
      url: "https://www.fasttools.store"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
      <Breadcrumbs
        items={[
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Color Palettes", href: "/dev-tools/color-palette" },
        ]}
      />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-1 lg:flex-[2] space-y-4 sm:space-y-5 md:space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-3 sm:space-y-4 animate-fade-in-up">
                  <GHeader
                    title="1000+ Free Color Palettes & Schemes with HEX Codes"
                    description="Explore 1000+ free color palettes for websites, branding, UI/UX & graphic design. 43 categories including aesthetic, pastel, vintage, modern & seasonal themes. Filter by category, theme, or color. Copy HEX codes instantly. Perfect for designers, developers & creatives."
                    titleSize="medium"
                    descriptionSize="small"
                  />
                </div>

                {/* Mobile Ad Space */}
                <div className="lg:hidden">
                  <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
                </div>

                {/* Tool Container */}
                <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
                  <ColorPaletteGenerator />
                </div>

                {/* Content Sections */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">How to Use FastTools Color Palettes</h2>
                  <ol className="pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm text-muted-foreground leading-relaxed list-decimal">
                    <li>Browse through thousands of beautiful, pre-made color palettes organized by category and theme</li>
                    <li>Filter palettes by color (red, blue, green, purple, etc.) or theme (gemstone, nature, seasons, etc.)</li>
                    <li>Click on any color in a palette to copy its HEX code to your clipboard instantly</li>
                    <li>Explore gradient palettes, dark theme palettes, light theme palettes, and more categories</li>
                    <li>Find inspiration from jewel tone palettes like sapphire, emerald, ruby, amethyst, and topaz</li>
                    <li>Use the palettes for website design, branding, UI/UX projects, or graphic design work</li>
                  </ol>
                </div>

                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Color Palette Categories</h2>
                  <ul className="pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm text-muted-foreground leading-relaxed list-disc">
                    <li><strong>By Color:</strong> Browse red, blue, green, purple, yellow, orange, pink, brown color palettes and more</li>
                    <li><strong>Gemstone Palettes:</strong> Sapphire, emerald, ruby, amethyst, topaz, aquamarine, garnet, jade, opal themed palettes</li>
                    <li><strong>Nature Inspired:</strong> Ocean, forest, sunset, sunrise, tropical, autumn, winter, spring, summer palettes</li>
                    <li><strong>Theme Based:</strong> Dark theme, light theme, gradient, monochromatic, analogous, complementary palettes</li>
                    <li><strong>Design Styles:</strong> Modern, minimalist, bold, elegant, earthy, pastel, vibrant, neutral color schemes</li>
                    <li><strong>Time of Day:</strong> Dawn, dusk, twilight, midnight, morning, afternoon, evening color palettes</li>
                    <li><strong>Seasonal:</strong> Spring blossom, summer breeze, autumn harvest, winter frost color combinations</li>
                    <li><strong>Professional:</strong> Brand colors, UI palettes, web design schemes, material design palettes</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Color Palette Applications</h2>
                  <ul className="pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-sm text-muted-foreground leading-relaxed list-disc">
                    <li><strong>Web Design:</strong> Create stunning websites with professionally curated color schemes</li>
                    <li><strong>Brand Identity:</strong> Establish brand colors with our gemstone and nature-inspired palettes</li>
                    <li><strong>UI/UX Design:</strong> Design beautiful user interfaces with harmonious color combinations</li>
                    <li><strong>Graphic Design:</strong> Get instant color inspiration for posters, flyers, social media, and illustrations</li>
                    <li><strong>CSS & Development:</strong> Copy HEX codes for CSS variables, Tailwind config, or design systems</li>
                    <li><strong>App Design:</strong> Use modern and minimalist palettes for mobile and desktop applications</li>
                    <li><strong>Marketing Materials:</strong> Create eye-catching designs with vibrant or elegant color schemes</li>
                    <li><strong>Presentations:</strong> Make professional slides with cohesive color palettes</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Related Developer Tools</h2>
                  <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 text-sm">
                    <Link 
                      href="/dev-tools/hex-to-rgb"
                      className="block p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/50 transition-all no-underline"
                    >
                      <h3 className="font-semibold text-sm sm:text-base text-heading-accent mb-1">Color Converter</h3>
                      <p className="text-xs text-muted-foreground">Convert HEX to RGB, HSL formats</p>
                    </Link>
                    <Link 
                      href="/dev-tools/html-beautifier"
                      className="block p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/50 transition-all no-underline"
                    >
                      <h3 className="font-semibold text-sm sm:text-base text-heading-accent mb-1">HTML Beautifier</h3>
                      <p className="text-xs text-muted-foreground">Format and beautify HTML code</p>
                    </Link>
                    <Link 
                      href="/dev-tools/json-to-csv"
                      className="block p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/50 transition-all no-underline"
                    >
                      <h3 className="font-semibold text-sm sm:text-base text-heading-accent mb-1">JSON to CSV</h3>
                      <p className="text-xs text-muted-foreground">Convert JSON to CSV format</p>
                    </Link>
                    <Link 
                      href="/dev-tools"
                      className="block p-2.5 sm:p-3 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/50 transition-all no-underline"
                    >
                      <h3 className="font-semibold text-sm sm:text-base text-heading-accent mb-1">All Developer Tools</h3>
                      <p className="text-xs text-muted-foreground">Explore more dev tools</p>
                    </Link>
                  </div>
                </div>

                {/* Comprehensive Content Section - 4000+ Words */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Complete Guide to Color Palettes: Thousands of Beautiful Color Combinations</h2>
                  
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Welcome to FastTools Color Palettes, your comprehensive library of over 1,000 professionally curated color schemes designed for designers, developers, and creatives. Our extensive collection spans 43 unique categories, offering everything from timeless classic colors to cutting-edge modern palettes. Whether you're designing a website, creating a brand identity, developing a mobile app, or working on any creative project, you'll find the perfect color combination here.
                    </p>
                    
                    <p>
                      Color is one of the most powerful tools in design. It influences emotions, conveys meaning, establishes brand identity, and guides user behavior. The right color palette can make the difference between a design that resonates with your audience and one that falls flat. That's why we've assembled this massive collection of color palettes, each carefully selected to ensure harmony, visual appeal, and practical usability across different design contexts.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Understanding Color Categories: A Deep Dive</h3>

                    <h4 className="text-base font-semibold mt-4 mb-2 text-foreground">Primary Color Palettes: Red, Blue, Green, Yellow, Orange, Purple</h4>
                    <p>
                      Our primary color collections form the foundation of color design. <strong>Red color palettes</strong> range from vibrant scarlet and crimson to deep burgundy and wine shades. Red evokes passion, energy, urgency, and excitement—perfect for call-to-action buttons, food brands, and bold statements. With over 50 red palette variations including Scarlet Sunrise, Crimson Velvet, Cherry Red, Ruby Wine, and Fire Engine Red, you'll find the perfect shade for any project requiring warmth and intensity.
                    </p>

                    <p>
                      <strong>Blue color palettes</strong> are the most popular in web design, with over 60 variations including Navy Blue, Royal Blue, Sky Blue, Azure, Cerulean, and Sapphire Deep. Blue conveys trust, professionalism, calm, and reliability—which is why it's the dominant color for corporate websites, financial institutions, healthcare, and technology companies. From light pastels to deep navy shades, our blue collection covers every tone and mood.
                    </p>

                    <p>
                      <strong>Green color palettes</strong> represent growth, nature, health, and sustainability. Our 60+ green palettes include Forest Green, Emerald, Jade, Mint, Sage, and Lime variations. Green is perfect for environmental brands, health and wellness companies, organic products, and any design seeking to convey freshness and vitality. From deep forest tones to bright neon greens, this collection supports eco-friendly and natural design aesthetics.
                    </p>

                    <p>
                      <strong>Yellow color palettes</strong> bring sunshine, optimism, and energy to your designs. With 50+ variations including Canary Yellow, Lemon, Golden Hour, Honey, and Sunflower palettes, yellow adds warmth and positivity. Yellow works exceptionally well for children's brands, food products, creative industries, and any project needing cheerful, attention-grabbing colors.
                    </p>

                    <p>
                      <strong>Orange color palettes</strong> combine the energy of red with the happiness of yellow. Our 50+ orange collections include Tangerine, Mandarin, Pumpkin, Burnt Orange, and Sunset variations. Orange is excellent for creating friendly, approachable designs and works well for entertainment, sports, food service, and youth-oriented brands.
                    </p>

                    <p>
                      <strong>Purple color palettes</strong> exude luxury, creativity, and sophistication. With 50+ variations including Violet, Royal Purple, Lavender, Plum, and Amethyst, purple bridges the gap between warm and cool colors. Purple is ideal for beauty brands, luxury products, creative services, and designs targeting elegance and imagination.
                    </p>

                    <h4 className="text-base font-semibold mt-4 mb-2 text-foreground">Secondary Colors: Pink, Brown, and Neutral Tones</h4>
                    <p>
                      <strong>Pink color palettes</strong> offer 40+ romantic, playful, and modern options. From Hot Pink and Deep Pink to soft Cotton Candy and Blush tones, pink works beautifully for feminine brands, cosmetics, fashion, children's products, and modern tech companies looking to stand out. Pink has evolved beyond traditional associations to become a versatile color for bold, contemporary designs.
                    </p>

                    <p>
                      <strong>Brown color palettes</strong> provide 40+ earthy, warm, and natural options including Chocolate, Coffee, Caramel, Mahogany, and Walnut. Brown conveys reliability, earthiness, and organic quality—perfect for food brands, outdoor products, artisan goods, and designs seeking rustic authenticity.
                    </p>

                    <p>
                      <strong>Neutral color palettes</strong> are essential for every designer, with 60+ variations spanning white, gray, and black tones. Neutrals include Pure White, Snow White, Ivory, various Gray shades from Light to Charcoal, and Black variations from Jet to Midnight. Neutrals provide balance, sophistication, and timeless appeal—serving as the foundation for minimalist designs and perfect complements to bold color choices.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Gemstone-Inspired Color Palettes: Luxury and Elegance</h3>
                    <p>
                      Our gemstone collection features 100+ palettes inspired by precious stones, offering unparalleled luxury and sophistication. <strong>Sapphire palettes</strong> showcase deep, rich blues reminiscent of this precious gem. <strong>Emerald palettes</strong> present vibrant, jewel-toned greens. <strong>Ruby palettes</strong> deliver intense, passionate reds. <strong>Amethyst palettes</strong> offer regal purples. <strong>Topaz palettes</strong> bring warm golds and ambers. <strong>Aquamarine palettes</strong> feature serene blue-greens. <strong>Garnet palettes</strong> present deep burgundy reds. <strong>Jade palettes</strong> showcase various green tones. <strong>Opal palettes</strong> offer iridescent, multi-colored combinations.
                    </p>

                    <p>
                      These gemstone palettes are perfect for luxury brands, high-end products, jewelry websites, premium services, and any design requiring an upscale, sophisticated aesthetic. Each palette captures the essence of its namesake gem, translating physical beauty into digital color harmony.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Nature-Inspired Palettes: Bringing the Outdoors to Your Designs</h3>
                    <p>
                      Nature provides endless color inspiration, and our 50+ nature palettes capture diverse environments. <strong>Ocean palettes</strong> include Caribbean Blue, Pacific Blue, Azure Coast, and Coral Reef variations—perfect for marine businesses, travel sites, and coastal brands. <strong>Forest palettes</strong> feature deep greens, browns, and earth tones like Pine Forest, Rainforest Canopy, and Emerald Forest—ideal for outdoor brands and environmental organizations.
                    </p>

                    <p>
                      <strong>Desert palettes</strong> showcase warm sands, terracottas, and sun-baked earth tones. <strong>Mountain palettes</strong> feature cool grays, snowy whites, and sky blues. <strong>Tropical palettes</strong> burst with vibrant greens, bright florals, and sunny yellows—25 palettes including Tropical Paradise, Island Sunset, and Rainforest. These nature-inspired combinations help create authentic, organic designs that connect with audiences on an emotional level.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Seasonal Color Palettes: Capturing the Essence of Each Season</h3>
                    <p>
                      Each season has its distinctive color story, and our 100+ seasonal palettes capture these unique moods. <strong>Spring palettes</strong> feature fresh pastels, cherry blossoms, new greens, and optimistic colors that represent renewal and growth—25 variations including Spring Meadow, Cherry Blossom, and Spring Garden.
                    </p>

                    <p>
                      <strong>Summer palettes</strong> burst with brightness—sunny yellows, ocean blues, vibrant greens, and tropical tones. 25+ variations like Summer Sunshine, Summer Beach, and Summer Sky capture warmth, energy, and outdoor vitality perfect for vacation brands, outdoor products, and seasonal campaigns.
                    </p>

                    <p>
                      <strong>Autumn palettes</strong> showcase rich oranges, deep reds, golden yellows, and earthy browns—25 combinations including Autumn Leaves, Autumn Harvest, and Autumn Maple. These palettes evoke coziness, tradition, and natural beauty, ideal for fall campaigns, harvest themes, and warm, inviting designs.
                    </p>

                    <p>
                      <strong>Winter palettes</strong> feature crisp whites, icy blues, deep evergreens, and sophisticated silvers—25 variations like Winter Frost, Winter Ice, and Winter Snow. Winter colors convey elegance, clarity, and tranquility, perfect for luxury brands, tech products, and minimalist designs.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Time-Based Palettes: Capturing Different Moments of the Day</h3>
                    <p>
                      The quality of light changes throughout the day, and our 90+ time-based palettes reflect these transitions. <strong>Morning palettes</strong> feature soft pastels, gentle yellows, and awakening blues—30 variations like Early Dawn, Bright Morning, and Sunrise Coral that convey freshness, new beginnings, and optimism.
                    </p>

                    <p>
                      <strong>Afternoon palettes</strong> showcase bright, saturated colors at peak sunlight—25 combinations perfect for energetic, vibrant designs. <strong>Evening palettes</strong> include 35+ options featuring sunset oranges, twilight purples, and dusky blues like Golden Hour, Twilight Glow, and Purple Sunset—capturing romance, transition, and warmth.
                    </p>

                    <p>
                      <strong>Midnight palettes</strong> and night themes feature deep blues, rich purples, and mysterious darks—perfect for sophisticated, dramatic designs or dark mode interfaces.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Modern and Contemporary Color Palettes: Cutting-Edge Design</h3>
                    <p>
                      Our 30 modern palettes reflect current design trends and tech industry aesthetics. <strong>Tech Modern</strong> palettes feature sleek blacks, vibrant accent colors, and clean contrasts. <strong>Material Design</strong> palettes follow Google's design principles. <strong>iOS Modern</strong> and <strong>Android Modern</strong> palettes reflect mobile OS color systems. Collections include <strong>Silicon Valley</strong>, <strong>Digital Age</strong>, <strong>Smart Home</strong>, and brand-specific palettes inspired by companies like Apple, Google, Microsoft, Spotify, Netflix, Airbnb, and Uber.
                    </p>

                    <p>
                      <strong>Minimalist palettes</strong> emphasize simplicity with limited color selections, ample whitespace, and careful contrast. <strong>Scandinavian Modern</strong> palettes feature Nordic-inspired whites, grays, and natural wood tones. These contemporary collections are perfect for tech startups, SaaS products, modern apps, and forward-thinking brands.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Vintage and Retro Color Palettes: Timeless Nostalgia</h3>
                    <p>
                      Our 30 vintage and retro palettes transport you through design history. <strong>Retro 70s</strong> palettes feature earthy oranges, harvest golds, avocado greens, and burnt siennas. <strong>Retro 80s</strong> palettes burst with neon pinks, electric blues, and bold magentas. <strong>Retro 90s</strong> palettes showcase teal, purple, and vibrant color blocking.
                    </p>

                    <p>
                      <strong>Vintage Rose</strong>, <strong>Sepia Memories</strong>, <strong>Old Paper</strong>, and <strong>Victorian Era</strong> palettes evoke historical periods with aged, muted tones. <strong>Art Deco</strong> palettes feature luxurious golds, deep blacks, and geometric elegance. These nostalgic collections work beautifully for heritage brands, vintage-inspired designs, and projects seeking retro charm.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Neon and Electric Palettes: High Energy and Visibility</h3>
                    <p>
                      Our 25 neon palettes deliver maximum impact with 25 vibrant collections including <strong>Neon Nights</strong>, <strong>Electric Blue</strong>, <strong>Neon Pink</strong>, <strong>Neon Green</strong>, and <strong>Cyberpunk Neon</strong>. These ultra-bright palettes work for nightlife brands, gaming interfaces, music festivals, youth-oriented products, and any design requiring high visibility and energy.
                    </p>

                    <p>
                      <strong>Synthwave</strong> and <strong>Vaporwave</strong> palettes capture specific aesthetic movements combining neon colors with retro-futuristic vibes. <strong>Fluorescent</strong> and <strong>Glow Sticks</strong> palettes maximize brightness. These collections are perfect for standing out in crowded markets and capturing attention in digital spaces.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Corporate and Professional Palettes: Business Excellence</h3>
                    <p>
                      Our 25 corporate palettes establish professionalism and trust. <strong>Corporate Blue</strong> remains the business standard, conveying reliability and competence. <strong>Executive Gray</strong> adds sophistication and neutrality. <strong>Professional Navy</strong> delivers traditional authority.
                    </p>

                    <p>
                      Industry-specific collections include <strong>Banking Blue</strong>, <strong>Tech Corporate</strong>, <strong>Consulting Gray</strong>, <strong>Accounting Green</strong>, <strong>Legal Brief</strong>, <strong>Healthcare Teal</strong>, <strong>Education Navy</strong>, and <strong>Real Estate Brown</strong>. Each palette is carefully crafted for specific professional contexts, ensuring your design communicates the right message to business audiences.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Tropical and Island Palettes: Paradise Colors</h3>
                    <p>
                      Escape to paradise with our 25 tropical palettes featuring vibrant greens, ocean blues, sunset oranges, and floral pinks. <strong>Tropical Paradise</strong>, <strong>Caribbean Blue</strong>, <strong>Island Sunset</strong>, <strong>Palm Tree Green</strong>, and <strong>Hibiscus Pink</strong> capture island vibes.
                    </p>

                    <p>
                      <strong>Turquoise Lagoon</strong>, <strong>Coral Reef</strong>, <strong>Tiki Torch</strong>, and <strong>Rainforest</strong> palettes bring vacation feelings to your designs. These collections work beautifully for travel companies, resort websites, tropical products, beach brands, and any project needing exotic, carefree energy.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Nordic and Scandinavian Palettes: Minimalist Elegance</h3>
                    <p>
                      Our 20 Nordic palettes embody Scandinavian design philosophy with 20 clean, minimalist collections. <strong>Nordic White</strong> emphasizes purity and space. <strong>Scandinavian Blue</strong> adds cool sophistication. <strong>Arctic White</strong>, <strong>Winter Sky</strong>, and <strong>Ice Blue</strong> capture northern landscapes.
                    </p>

                    <p>
                      <strong>Pine Forest</strong>, <strong>Birch Wood</strong>, and <strong>Baltic Sea</strong> incorporate natural elements. These palettes perfect for modern interiors, tech products, minimalist brands, and designs emphasizing function and clarity.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Space and Cosmic Palettes: Otherworldly Colors</h3>
                    <p>
                      Journey beyond Earth with our 20 space-themed palettes. <strong>Deep Space</strong>, <strong>Nebula Cloud</strong>, and <strong>Galaxy Spiral</strong> capture cosmic mystery. <strong>Planet Mars</strong>, <strong>Jupiter Storm</strong>, <strong>Saturn Rings</strong>, <strong>Uranus Ice</strong>, and <strong>Neptune Blue</strong> represent our solar system.
                    </p>

                    <p>
                      <strong>Starlight</strong>, <strong>Solar Flare</strong>, <strong>Supernova</strong>, <strong>Meteor Shower</strong>, and <strong>Aurora Borealis</strong> capture celestial phenomena. These palettes work wonderfully for science fiction, astronomy, technology, gaming, and futuristic designs.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Mediterranean Palettes: Sun-Drenched Beauty</h3>
                    <p>
                      Our 30 Mediterranean palettes capture the essence of coastal Europe. <strong>Santorini Blue</strong> and <strong>Greek White</strong> evoke iconic island architecture. <strong>Tuscan Sun</strong>, <strong>Aegean Sea</strong>, <strong>Olive Grove</strong>, and <strong>Terracotta Tiles</strong> represent Italian and Greek landscapes.
                    </p>

                    <p>
                      <strong>Azure Coast</strong>, <strong>Provence Purple</strong>, <strong>Sicilian Orange</strong>, <strong>Amalfi Lemon</strong>, and <strong>Turkish Turquoise</strong> capture regional color stories. These warm, inviting palettes perfect for hospitality, travel, food service, and lifestyle brands seeking Mediterranean sophistication.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Dark and Light Theme Palettes: Interface Excellence</h3>
                    <p>
                      Essential for modern digital design, our dark and light palettes ensure excellent user experiences across viewing preferences. <strong>50+ dark palettes</strong> range from pure blacks to rich midnight blues, deep purples, and charcoal grays—perfect for dark mode interfaces, luxury websites, and reducing eye strain.
                    </p>

                    <p>
                      <strong>40+ light palettes</strong> feature whites, creams, soft pastels, and airy tones that create open, clean, accessible designs. These collections help you implement beautiful light/dark mode toggles while maintaining visual consistency.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Gradient Palettes: Smooth Color Transitions</h3>
                    <p>
                      Our 25+ gradient palettes showcase beautiful color transitions from <strong>Rainbow Gradient</strong> and <strong>Sunset to Night</strong> to <strong>Ocean Depths</strong> and <strong>Forest Canopy</strong>. Gradients add depth, dimension, and modern appeal to headers, backgrounds, buttons, and illustrations. These collections work particularly well for apps, modern websites, and creative projects.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Pastel Palettes: Soft and Gentle Colors</h3>
                    <p>
                      Our 20+ pastel collections offer soft, muted versions of vibrant colors—perfect for creating calm, approachable, and friendly designs. Pastels work beautifully for children's brands, wellness companies, feminine products, spring campaigns, and any project requiring gentle, soothing aesthetics.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Warm and Cool Palettes: Temperature in Design</h3>
                    <p>
                      Color temperature dramatically affects emotional response. Our <strong>60+ warm palettes</strong> feature reds, oranges, yellows, and warm browns that create inviting, energetic, passionate atmospheres. <strong>50+ cool palettes</strong> showcase blues, greens, and purples that convey calm, professionalism, and trust. Understanding and applying color temperature helps create designs that emotionally resonate with your audience.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Vibrant Palettes: Maximum Impact</h3>
                    <p>
                      Our 40+ vibrant palettes deliver saturated, high-energy colors that command attention and create memorable impressions. These bold combinations work for brands targeting youth markets, entertainment, sports, festivals, and any context requiring maximum visual impact.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Color Psychology and Emotional Impact</h3>
                    <p>
                      Understanding color psychology is crucial for effective design. Red increases heart rate and creates urgency—perfect for clearance sales and call-to-action buttons. Blue builds trust and reduces stress—ideal for banks and healthcare. Green represents growth and health—excellent for wellness and environmental brands. Yellow captures attention and conveys optimism—great for children's products and food. Purple suggests luxury and creativity—perfect for beauty and premium brands. Orange combines energy and approachability—wonderful for friendly, social brands.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">How to Choose the Right Color Palette</h3>
                    <p>
                      Selecting the perfect palette requires considering multiple factors. Start with your brand personality—are you traditional or innovative, playful or serious, luxury or accessible? Consider your target audience—different demographics respond to colors differently. Evaluate your industry—certain sectors have color conventions. Think about cultural context—colors have different meanings across cultures. Test accessibility—ensure sufficient contrast for readability. Consider versatility—your palette should work across different media and applications.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Using Color Palettes in Web Design</h3>
                    <p>
                      Implementing color palettes effectively in web design requires structure. Establish primary colors (1-2) for main brand elements, secondary colors (2-3) for variety and emphasis, accent colors (1-2) for calls-to-action and highlights, and neutral colors for backgrounds and text. Use our one-click HEX code copying to quickly integrate colors into your CSS, design systems, or Tailwind configuration. Consider creating CSS custom properties for easy theme switching and maintenance.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Color Accessibility and Contrast</h3>
                    <p>
                      Accessible design ensures everyone can use your product. Maintain WCAG 2.1 contrast ratios: 4.5:1 for normal text, 3:1 for large text, and 3:1 for UI components. Don't rely on color alone to convey information—use icons, text, and patterns. Test your chosen palettes with colorblindness simulators. Our diverse palette collection helps you find combinations that are both beautiful and accessible.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Color Trends and Future Directions</h3>
                    <p>
                      Design trends evolve, and our palette library stays current. Recent trends include digital lavenders and purples representing innovation, earthy terracottas and clay tones for authenticity, biotechnology greens suggesting sustainability, tech-inspired neons for digital products, and sophisticated neutrals for minimalism. Our Modern, Neon, and Contemporary categories reflect these trending aesthetics while our Classic and Vintage collections ensure timeless options remain available.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Industry-Specific Color Applications</h3>
                    <p>
                      Different industries have unique color requirements. Technology companies favor blues, grays, and accent colors (see our Tech Corporate and Silicon Valley palettes). Healthcare uses blues and greens for trust and calm. Food and beverage leverages reds, oranges, and yellows to stimulate appetite. Financial services employs blues, greens, and conservative tones. Education often uses primary colors or scholarly navy and burgundy. Our categorized collection helps you find industry-appropriate palettes quickly.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Creating Brand Identity with Color</h3>
                    <p>
                      Your color palette is fundamental to brand identity. Choose 1-2 primary brand colors that represent your core values. Select 2-3 supporting colors that complement your primaries. Include neutral colors for flexibility. Ensure your palette is distinctive in your market while remaining appropriate for your industry. Document your color system with HEX codes, RGB values, and usage guidelines. Our comprehensive palette library provides starting points for developing unique brand identities.
                    </p>

                    <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Conclusion: Your Complete Color Resource</h3>
                    <p>
                      FastTools Color Palettes offers 1,000+ professionally curated color combinations spanning 43 categories—from primary colors to specialized themes like gemstones, seasons, geographic regions, and design movements. Whether you're a designer seeking inspiration, a developer implementing themes, a brand manager establishing identity, or a creative exploring possibilities, our comprehensive library provides the perfect colors for every project. Start exploring today, copy HEX codes with one click, and bring your design visions to life with beautiful, harmonious color combinations.
                    </p>
                  </div>
                </div>

                {/* Frequently Asked Questions Section */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Frequently Asked Questions (FAQ)</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are color palettes?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Color palettes are carefully curated collections of colors that work harmoniously together, typically consisting of 3-8 colors used consistently across design projects to create visual cohesion and brand identity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">Are color palettes copyrighted?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Individual colors and simple color combinations generally cannot be copyrighted, though specific arrangements in unique creative works may have limited protection. However, brand-specific color combinations can be trademarked when associated with a particular company or product.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">Can color palettes be copyrighted?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Color palettes themselves typically cannot be copyrighted as they are considered functional design elements. You can freely use and create color combinations, though distinctive brand color schemes may be protected under trademark law when used in specific commercial contexts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">How do color palettes work?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Color palettes work by establishing a hierarchy of primary, secondary, and accent colors that create visual harmony through color theory principles like complementary, analogous, or triadic relationships. Designers typically use 60% primary color, 30% secondary color, and 10% accent color for balanced compositions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">Where are color palettes in Canva?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        In Canva, color palettes are located in the left sidebar under "Brand Kit" for brand colors, or you can access document colors and photo colors through the color picker tool when selecting any element's color. You can also create custom palettes by clicking the "+" icon in the color palette section.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">Where to find color palettes?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You can find color palettes on dedicated websites like FastTools Color Palettes (offering 1,000+ palettes), design inspiration sites like Dribbble and Behance, tools like Adobe Color and Coolors, or by extracting colors from images using online color palette generators.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are the color palettes for skin tones?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Skin tone color palettes are categorized by seasons (Spring, Summer, Autumn, Winter) and include warm tones (peachy, golden, coral) for warm skin undertones, cool tones (pink, blue, purple) for cool undertones, and neutral tones (beige, taupe, olive) for neutral undertones. These palettes help individuals choose flattering clothing and makeup colors.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are luxury color palettes?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Luxury color palettes typically feature rich, sophisticated colors like deep navy, burgundy, emerald green, gold, silver, black, and cream tones. These palettes often include metallic accents and jewel tones that convey elegance, exclusivity, and high-end quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are legacy color palettes in Warframe?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Legacy color palettes in Warframe are discontinued or special edition color packs that were previously available but are no longer sold in the in-game market. These palettes are retained by players who purchased them before they were removed and often become collector's items within the game community.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What color palettes can wear black?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Winter and Deep Autumn color palettes can typically wear black most effectively, as their deeper coloring and cool or neutral undertones are complemented by black's intensity. Spring and Light Summer palettes may find black too harsh and should opt for softer alternatives like charcoal or navy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What color palettes are there?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        There are numerous color palette types including monochromatic (single color in various shades), analogous (adjacent colors on the wheel), complementary (opposite colors), triadic (three equally spaced colors), tetradic (four colors in two complementary pairs), warm, cool, pastel, vibrant, neutral, gemstone, nature-inspired, seasonal, and many more specialized categories.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What do color palettes and hex codes mean?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Color palettes are collections of coordinated colors, while hex codes (like #FF5733) are six-digit alphanumeric codes that represent specific colors in digital design. Each hex code defines the exact amount of red, green, and blue in a color, allowing designers to reproduce colors consistently across different platforms and applications.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">How are color palettes and names related?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Color palette names like "Sunset Glow" or "Ocean Breeze" help designers quickly identify the mood, theme, and inspiration behind a color combination. These descriptive names make it easier to search, organize, and communicate color choices within design teams and client presentations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are color palettes like Catppuccin?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Catppuccin-style palettes are soft, pastel color schemes with muted, low-contrast tones designed for comfortable, eye-friendly interfaces. Similar palettes include Rosé Pine, Everforest, Gruvbox, and Tokyo Night—all featuring warm, cozy colors popular in modern UI themes and code editors.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are color palettes like Viridis?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Viridis-style palettes are perceptually uniform, colorblind-friendly color schemes designed for scientific data visualization. Similar palettes include Plasma, Inferno, Magma, Cividis, and Turbo—all offering smooth gradients with consistent brightness changes that maintain readability when printed in grayscale.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are color palettes like Pastel?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pastel-like color palettes feature soft, light, desaturated colors created by mixing white with pure hues. Similar styles include Soft Autumn, Kawaii colors, Cottagecore palettes, Baby colors, Macarons, Candy colors, and Light Academia—all perfect for gentle, calming, and approachable designs.
          </p>
        </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What are color palettes like Nord?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nord-style palettes are Arctic-inspired color schemes featuring cool blues, grays, and whites with occasional warm accent colors. Similar palettes include Dracula, One Dark, Solarized, Ayu, and Material Design—all popular for minimalist, modern interfaces and code editor themes.
                      </p>
        </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">What types of color palettes are like pastel?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Pastel-type palettes include Light Spring, Soft Summer, Baby Pastels, Kawaii colors, Ice Cream colors, Cotton Candy, Watercolor palettes, and Muted tones. These all share the characteristics of low saturation, high lightness, and gentle, soothing color combinations perfect for friendly, approachable designs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">How many color palettes should a website have?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A website typically needs one primary color palette consisting of 1-2 primary colors, 2-3 secondary colors, 1-2 accent colors, and neutral colors (white, black, grays). Some websites also implement a secondary palette for dark mode, making a total of 1-2 complete color systems sufficient for most web projects.
                      </p>
        </div>

                    <div>
                      <h3 className="text-base font-semibold mb-2 text-foreground">Are there free color palettes available?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Yes, FastTools offers over 1,000 free color palettes that you can browse, filter by category, and copy HEX codes instantly. Many other free resources exist including Adobe Color, Coolors, ColorHunt, and Paletton, all providing free access to thousands of color combinations for personal and commercial projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-32 space-y-8">
                  <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
