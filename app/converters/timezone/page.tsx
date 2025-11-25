import { TimezoneConverter } from "@/components/timezone-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { ToolContentEnhancement } from "@/components/tool-content-enhancement"
import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"
import Link from "next/link"

const baseMetadata = createMetadata({
  title: "Time Zone Converter | Free Convert Time Zones Worldwide",
  description:
    "Convert time between time zones worldwide with DST awareness. Ideal for scheduling international meetings, remote teamwork, and travel planning.",
  path: "/converters/timezone",
})

export const metadata: Metadata = {
  ...baseMetadata,
    "dst adjustments free online"
  ],
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Time Zone Converter",
      alternateName: "World Clock & Time Zone Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/timezone",
      description:
        "Convert time across global time zones with daylight saving awareness for meetings and travel.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "City/time zone list", 
        "DST handling", 
        "Copy results", 
        "Mobile friendly",
        "International meetings",
        "Remote team scheduling",
        "Travel planning",
        "Business hours overlap",
        "Calendar integration",
        "Multiple time zones"
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
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/converters/timezone",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "timezone converter, free timezone converter, time zone converter, world clock, time converter, international time, utc converter, meeting time converter",
      about: {
        "@type": "Thing",
        name: "Time Zone Conversion",
        description: "Free online tools for converting time between different time zones and scheduling international meetings"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function TimezoneConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs
          items={[
            { label: "Converters", href: "/converters" },
            { label: "Time Zone Converter", href: "/converters/timezone" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
              {/* Hero */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <GHeader
                  title="Time Zone Converter - Global Time & Meeting Planner"
                  description="Convert time zones with DST awareness. Plan international meetings in seconds."
                  titleSize="medium"
                  descriptionSize="small"
                />
              </div>

              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              {/* Tool */}
              <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
              <TimezoneConverter />
              </div>


              {/* Comprehensive Time Zone Conversion Guide */}
              <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow mb-6">
                <h2 className="text-xl font-bold mb-3 text-foreground">Complete Guide to Time Zone Conversion and International Time Management</h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Our free timezone converter and time zone converter provide instant conversions between time zones worldwide, making it the best timezone converter online for scheduling international meetings, coordinating remote teams, and planning travel. Whether you need to convert UTC to local time, local time to UTC, convert GMT to PST, convert EST to CET, convert CET to IST, convert SGT to PST, convert AEDT to IST, convert BST to IST, convert MST to EST, convert IST to EST, convert IST to PST, convert UTC to EST, convert UTC to PST, or convert UTC to GMT, this world clock and time converter handles all conversions with automatic daylight saving time adjustments. As a comprehensive UTC converter and international time tool, our meeting time converter helps schedule across time zones, supports remote team scheduling, and accounts for daylight saving time and DST adjustments automatically. The tool supports both 24 hour clock and 12 hour clock formats, provides military time conversion capabilities, and serves as a time difference calculator for planning international communications. Whether you need to convert date and time, use a city time converter, country time converter, or reference a time zone map, our world time zones list covers all major locations. Popular conversions like GMT to EST, EST to PST, PST to IST, and IST to GMT are handled instantly, while the time zones by country feature helps find the correct zone for any location. As a free online timezone converter, best timezone converter online, and timezone converter with live preview, our platform serves as both a time zone converter free online and world clock free online, providing comprehensive time conversion capabilities. The time converter free online, international time free online, UTC converter free online, GMT to EST free online, EST to PST free online, PST to IST free online, and IST to GMT free online features ensure accurate conversions for all your scheduling needs. The meeting time converter free online, schedule across time zones free online, remote team scheduling free online, and daylight saving time free online capabilities make this the ultimate tool for international time management and coordination.
                  </p>
                  </div>
              </div>

              {/* Comprehensive Content Enhancement */}
              <ToolContentEnhancement
                toolName="Time Zone Converter"
                toolDescription="Our free time zone converter helps you convert times between different time zones worldwide with automatic daylight saving time (DST) adjustments. Perfect for scheduling international meetings, coordinating remote teams, planning travel, and understanding time differences across global locations. Supports all major time zones including UTC, GMT, EST, PST, IST, and hundreds more."
                whatItIs="A time zone converter is an essential tool that transforms time values between different geographic time zones, accounting for time zone offsets, daylight saving time changes, and date transitions. This tool is crucial for professionals, travelers, and anyone working across international boundaries who need to coordinate schedules, plan meetings, or understand time differences between locations. Time zones exist because the Earth rotates, creating different local times in different regions. Our converter handles the complex calculations needed to accurately convert times while accounting for DST rules that vary by country and change over time."
                howItWorks={[
                  "Select your source time zone or city from the dropdown menu. You can search by city name, country, or time zone abbreviation (e.g., EST, PST, UTC, GMT).",
                  "Enter the date and time you want to convert. The converter will automatically account for daylight saving time based on the selected date.",
                  "Choose your destination time zone or city. The converter supports all major time zones worldwide, including those with half-hour and 45-minute offsets.",
                  "View the converted time instantly. The result shows the equivalent time in your destination time zone, including any date changes that occur when crossing time zone boundaries.",
                  "Copy the converted time to your clipboard or use it to schedule meetings. The converter also shows the time difference between zones and business hours overlap for team coordination."
                ]}
                useCases={[
                  "International Meeting Scheduling: Convert meeting times between different time zones to find suitable times for participants across multiple countries, ensuring everyone knows the correct local time for the meeting.",
                  "Remote Team Coordination: Find overlapping business hours between team members in different time zones, helping remote teams schedule collaborative work sessions and maintain effective communication.",
                  "Travel Planning: Convert departure and arrival times between your home time zone and destination, helping you plan flights, hotel check-ins, and activities while accounting for jet lag.",
                  "Business Hours Verification: Check when businesses, banks, or services are open in different time zones before making international calls or scheduling important communications.",
                  "Event Planning: Coordinate global events, webinars, and conferences by converting event times to all participant time zones, ensuring accurate scheduling for international audiences.",
                  "On-Call Scheduling: Plan on-call rotations and support schedules across multiple time zones, ensuring 24/7 coverage while respecting team members' local business hours.",
                  "Calendar Management: Convert calendar events between time zones when traveling or working with international colleagues, preventing scheduling conflicts and confusion."
                ]}
                whyChooseThis={[
                  "Automatic DST Handling: Automatically accounts for daylight saving time changes based on the selected date, eliminating manual calculations and preventing scheduling errors during DST transitions.",
                  "Comprehensive Time Zone Coverage: Supports all major time zones worldwide, including standard zones, DST zones, and regions with unusual offsets (half-hour, 45-minute offsets).",
                  "Date Change Awareness: Correctly handles date changes when converting across the International Date Line or when time differences cause the date to change, showing both time and date accurately.",
                  "City and Country Search: Search by city name, country, or time zone abbreviation, making it easy to find the exact time zone you need without memorizing UTC offsets.",
                  "Business Hours Overlap: Shows overlapping business hours between time zones, helping remote teams find the best meeting times that work for everyone.",
                  "Privacy and Security: All conversions happen locally in your browser—your scheduling data never leaves your device, ensuring complete privacy.",
                  "Mobile-Friendly Design: Works perfectly on smartphones, tablets, and desktop computers, allowing you to convert times anywhere, anytime."
                ]}
                relatedTools={[
                  { name: "Currency Converter", href: "/converters/currency" },
                  { name: "Date Difference Calculator", href: "/calculator/date-difference" },
                  { name: "Age Calculator", href: "/calculator/age-calculator" },
                  { name: "Length Converter", href: "/converters/length" }
                ]}
                faqs={[
                  {
                    question: "What's the difference between UTC and GMT, and which should I use?",
                    answer: "UTC (Coordinated Universal Time) is the modern atomic-time standard used by computers, APIs, and international systems. GMT (Greenwich Mean Time) is a historical solar-time reference. For scheduling, code, and technical applications, prefer UTC as it's more precise and doesn't vary. For human-friendly labels in communication, GMT is acceptable if the offset is clearly stated. In practice, UTC and GMT are often used interchangeably for most purposes, but UTC is the official standard."
                  },
                  {
                    question: "Does the converter handle future daylight saving time changes accurately?",
                    answer: "Yes, our converter uses authoritative time zone databases that include historical and projected DST rules. However, governments occasionally change DST policies with short notice. For meetings scheduled far in the future (more than a year), we recommend re-checking the conversion close to the event date, especially if a region has recently updated its DST legislation. The converter automatically applies the correct DST rules based on the selected date."
                  },
                  {
                    question: "How can I find overlapping work hours for teams in different time zones?",
                    answer: "Convert a candidate meeting time to both time zones and compare against typical business hours (usually 9 AM to 5 PM local time). Try several candidate times to find the widest overlap window. For fairness, rotate meeting times periodically so different team members don't always have to attend during off-hours. Our converter shows the time in both zones simultaneously, making it easy to identify suitable meeting windows."
                  },
                  {
                    question: "Why does my calendar show a different time than the converter?",
                    answer: "Calendars cache time zone settings per device and account. Ensure your calendar event is saved in UTC or in the organizer's time zone, and verify that all attendees' devices have automatic time zone updates enabled. Some calendar apps also have time zone display settings that can cause confusion. Always double-check critical meetings using our converter, especially for international events."
                  },
                  {
                    question: "What's the safest way to write times in emails and invitations?",
                    answer: "Include the local time, time zone abbreviation, and UTC equivalent. For example: '10:00 AM PT (UTC-7)' or '3:00 PM EST / 8:00 PM UTC'. Provide a clickable calendar link so recipients can view the event in their local time zone automatically. This prevents confusion and ensures everyone understands the correct meeting time regardless of their location."
                  },
                  {
                    question: "Do countries ever change their time zones suddenly?",
                    answer: "Yes, governments occasionally shift base time zone offsets or modify DST policies, sometimes with minimal notice. These changes can affect scheduling, especially for recurring meetings. Reconfirm times near any political changes or policy updates. For developers, avoid hard-coding time zone offsets in code—use time zone databases (like IANA Time Zone Database) that are regularly updated with these changes."
                  },
                  {
                    question: "How do I convert recurring meetings safely across time zones?",
                    answer: "Store the canonical event time in UTC in your calendar system, then let each client or calendar application render the local time using its current time zone rules. This prevents drift when DST transitions occur. For example, a meeting that's always at 2:00 PM EST will automatically adjust to 1:00 PM EST when DST ends, if stored correctly in UTC. Our converter helps you verify these conversions."
                  },
                  {
                    question: "What if a city has multiple names or spelling variations?",
                    answer: "Time zone databases maintain canonical zone identifiers even when city names change (e.g., 'Kiev' vs 'Kyiv'). If you're unsure about a city name, search by country or region instead. For technical integrations, prefer IANA time zone IDs (like 'America/New_York') over city names, as these are standardized and don't change with political or spelling updates."
                  },
                  {
                    question: "How should I handle time zones with half-hour or 45-minute offsets?",
                    answer: "Some regions use non-standard offsets like UTC+5:30 (India) or UTC+5:45 (Nepal). Always include the full offset including minutes (hours:minutes) in meeting invitations and documentation. Our converter handles these automatically, but when communicating times manually, specify the complete offset to avoid confusion. For example, write 'UTC+5:30' not just 'UTC+5' for Indian Standard Time."
                  },
                  {
                    question: "What are the best practices for travel and on-call schedules across time zones?",
                    answer: "Switch your devices to automatic time zone detection when traveling. Keep a UTC reference (watch or app) for critical scheduling. Specify coverage windows in UTC for on-call schedules to avoid confusion. Confirm local holidays and business days when planning critical calls or meetings. Use our converter to verify times before important international communications, and always include time zone information in written communications."
                  }
                ]}
              />
            </div>

            {/* Desktop Sidebar with AdSense */}
            <div className="hidden lg:block w-64 xl:w-72">
              <div className="sticky top-32 space-y-6">
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}