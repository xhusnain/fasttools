import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"

import {
  Search,
  CheckCircle,
  Zap,
  Globe,
  Eye,
  Compass,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "About Us",
  description: "Discover FastTools, the comprehensive free online tools platform with 1000+ AI, converter, calculator, SEO and productivity utilities.",
  path: "/about",
})

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About FastTools - Leading Free Online Tools Platform",
    description: "Discover FastTools, the world's most comprehensive free online tools platform. Access 1000+ professional tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
    url: "https://www.fasttools.store/about",
    mainEntity: {
      "@type": "Organization",
      name: "FastTools",
      alternateName: "fasttools.store",
      description: "FastTools is the world's leading free online tools platform, offering 1000+ professional digital tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Trusted by millions of users worldwide.",
      url: "https://www.fasttools.store",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@fasttools.store",
        availableLanguage: "English"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      },
      sameAs: [
        "https://x.com/ZamanIsmail7",
        "https://www.facebook.com/profile.php?id=61582711433268",
        "https://www.youtube.com/@fasttools_official",
        "https://www.linkedin.com/company/fasttools/?viewAsMember=true"
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.fasttools.store/about"
        }
      ]
    }
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fasttools.store/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.fasttools.store/about"
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "About", href: "/about" },
            ]}
          />

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Unveiling Our Identity, Vision and Values"
                description="We're passionate about digital innovation. With years of experience in the industry, we've established ourselves as leaders in providing high-quality online productivity solutions."
                titleSize="medium"
                descriptionSize="small"
                color="blue"
              />
            </div>

            {/* Why FastTools Section */}
            <div className="bg-card border border-border/30 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Why Choose FastTools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Hard to Find Tools */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">Hard to Find</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    Searching for reliable online tools is frustrating. Most results are broken links, outdated tools, or hidden behind paywalls. We've done the hard work of finding and curating only the best tools.
                  </p>
                </div>

                {/* Tools That Work */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">Tools That Actually Work</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    Every tool on FastTools is tested and verified to work perfectly. No broken features, no error messages, no wasted time. Just reliable, professional-grade tools ready to use instantly.
                  </p>
                </div>

                {/* All in One Place */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">All in One Place</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    Why waste hours searching across dozens of websites? We've consolidated 1000+ essential tools into one unified platform. Calculators, converters, generators, and more - all accessible instantly.
                  </p>
                </div>

                {/* Trusted Worldwide */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">Trusted Worldwide</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    Used by millions across 190+ countries. From students and freelancers to Fortune 500 companies, FastTools delivers the same reliable, professional tools to everyone - completely free, forever.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Story Section */}
            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">Our Story: Building the World's Most Comprehensive Free Tools Platform</h2>

              <div className="space-y-6 text-foreground text-base md:text-lg leading-relaxed">
                <p>
                  FastTools was born in 2024 from a simple but powerful observation: finding reliable, genuinely free online tools shouldn't be this hard. We noticed that millions of people worldwide struggle daily with broken links, fake free tools that require credit cards, outdated software, and cluttered interfaces filled with advertisements. Something had to change.
                </p>

                <p>
                  As digital professionals, we experienced these frustrations firsthand. Whether we needed a quick currency converter during international business calls, an image compression tool before uploading files, or a precise loan calculator for financial planning, the search process was consistently tedious. Most free tools either didn't work properly, required registration that led to spam, or were clearly inferior versions meant to upsell premium subscriptions.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">Why We Decided to Consolidate Everything in One Place</h3>

                <p>
                  The problem wasn't just about individual tools - it was about the entire ecosystem. Users were forced to bookmark dozens of different websites, remember which tool worked for which task, and constantly deal with broken or removed tools. This fragmentation killed productivity and created unnecessary frustration for everyone from students completing assignments to professionals managing complex projects.
                </p>

                <p>
                  We realized that what the digital world truly needed was a unified platform where every tool genuinely worked, every tool was completely free forever, and every tool was accessible instantly without registration or hidden costs. FastTools represents our commitment to solving this problem once and for all.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">The Tools That Actually Work Philosophy</h3>

                <p>
                  Every single tool on FastTools goes through rigorous testing before being included in our platform. We don't aggregate broken links or outdated tools. Instead, we build, maintain, and continuously improve each tool to ensure it delivers professional-grade results every single time. When you need to convert currency during an important transaction, compress an image for a client presentation, or calculate loan payments for a major purchase, you shouldn't have to worry about whether the tool will work correctly.
                </p>

                <p>
                  Our commitment to "tools that actually work" extends beyond just functionality. We also focus on user experience, ensuring that every interface is clean, intuitive, and fast-loading. No one should wait 30 seconds for a simple calculator to load or struggle to find the right button in a confusing interface.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">Free Forever, Without Compromise</h3>

                <p>
                  The "free" in many "free tools" comes with invisible costs: your data is collected, your inbox is filled with promotions, you're pressured to upgrade to premium versions, or worse - you enter your credit card for a "free trial" that automatically charges you later. FastTools rejects this model entirely.
                </p>

                <p>
                  Our tools are completely free forever, with absolutely no hidden costs, no data collection, no mandatory registration, and no upsells. We believe that quality productivity tools should be accessible to everyone, regardless of budget. Whether you're a student struggling to pay for software licenses, a startup operating on a shoestring budget, or a Fortune 500 company looking to cut unnecessary expenses, FastTools serves you with the same high-quality, completely free tools.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">How FastTools Serves Millions Across 190+ Countries</h3>

                <p>
                  From its founding in 2024, FastTools has grown rapidly to serve millions of users across 190+ countries. This global reach reflects universal need for reliable, accessible productivity tools. A student in India calculating GPA needs the same accurate formula as a university applicant in the United States. A freelancer in Brazil converting currency needs the same real-time exchange rates as an international trader in Singapore. FastTools delivers this consistency.
                </p>

                <p>
                  Our platform has processed over 50 million tasks to date, saving users countless hours of searching, testing, and troubleshooting. More importantly, we've saved users millions of dollars in software licensing costs, subscription fees, and premium tool purchases. Every calculation performed, every file converted, every task completed represents time and money saved for someone somewhere in the world.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">The Future: Continuous Innovation Without Cost</h3>

                <p>
                  Our work is far from complete. We continuously add new tools based on user feedback and emerging needs. From AI-powered content generators that help creators save hours of writing time, to advanced financial calculators that help families make better decisions, to developer utilities that streamline coding workflows - we're building the tools that today's digital world actually needs.
                </p>

                <p>
                  Looking forward, FastTools remains committed to our founding principle: quality digital tools should be free, accessible, and reliable for everyone, everywhere. We'll never introduce mandatory registration, never collect unnecessary user data, never show intrusive advertisements, and never compromise on the quality of our tools. This isn't just our business model - it's our promise to every user who trusts FastTools for their productivity needs.
                </p>

                <p className="text-lg md:text-xl font-semibold text-foreground mt-8">
                  Join millions of users worldwide who have made FastTools their trusted partner for digital productivity. Explore our tools, and experience the difference that genuine, reliable, completely free online tools can make in your daily work and life.
                </p>
              </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-heading-accent">Vision</h2>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  To lead the way in digital productivity by delivering innovative, sustainable, and accessible solutions that empower millions of users worldwide.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Compass className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-heading-accent">Mission</h2>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  To leverage our expertise, resources, and technology to create online tools that exceed industry standards and provide exceptional value to users everywhere.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground font-bold rounded-lg hover:bg-primary transition-colors text-lg"
              >
                View Our Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
