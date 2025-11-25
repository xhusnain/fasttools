import { TimezoneConverter } from "@/components/timezone-converter"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const currentYear = new Date().getFullYear()
const pageTitle = `Time Zone Converter - Global Time & Meeting Planner ${currentYear}`
const pageDescription = "Convert time zones instantly with our free Time Zone Converter. Plan international meetings and travel with accurate, DST-aware global time conversions."

const toolConfig = createToolConfig({
  toolName: "Time Zone Converter",
  description: "Convert time between time zones worldwide with DST awareness. Ideal for scheduling international meetings, remote teamwork, and travel planning.",
  metaTitle: pageTitle,
  metaDescription: pageDescription,
  path: "/converters/timezone",

  header: {
    title: pageTitle,
    description: pageDescription,
    titleSize: "large",
    descriptionSize: "medium",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Time Zone Converter", href: "/converters/timezone" },
  ],

  content: {
    overview: "Precision matters. Our Time Zone Converter is engineered for professionals, travelers, and global teams who demand accuracy. Powered by the authoritative IANA Time Zone Database, this tool delivers instant, reliable conversions between any two points on Earth, automatically accounting for complex Daylight Saving Time (DST) rules and date line crossings. Whether you're scheduling a board meeting across three continents or planning a call home, trust this tool to keep you perfectly synchronized.",

    howToSteps: [
      "Select your source location. Search by city, country, or standard time zone abbreviation (e.g., 'New York', 'London', 'EST').",
      "Set your reference date and time. The tool instantly calculates the corresponding time in your target destination, factoring in specific DST rules for that exact date.",
      "Add multiple destinations (optional). Compare times across several cities simultaneously to find the perfect meeting slot.",
      "Verify the date difference. Look for the '+1 day' or '-1 day' indicators to ensure you don't miss a meeting due to the International Date Line.",
      "Share or Copy. Use the generated link to share the exact conversion with attendees, eliminating confusion."
    ],

    features: [
      "Powered by the IANA Time Zone Database for industrial-grade accuracy",
      "Real-time DST detection and automatic adjustment",
      "International Date Line awareness with day-change alerts",
      "100% Client-Side Privacy: Your schedule data never leaves your browser",
      "Support for fractional time zones (e.g., India, Nepal, parts of Australia)",
      "Business hours overlap visualization",
      "Mobile-optimized for on-the-go travel planning",
      "Instant search for over 100,000 cities and time zones",
      "One-click copy to clipboard for easy scheduling",
      "Shareable URLs for precise time coordination"
    ],

    useCases: [
      "Global Board Meetings: Coordinate C-suite executives across London, New York, and Tokyo without error.",
      "Remote Team Syncs: Find the 'Golden Hour' where business hours overlap for distributed teams.",
      "Flight Connections: Verify landing times in local time to arrange pickups and check-ins.",
      "Webinar Planning: Announce event times in UTC and major local zones with confidence.",
      "Trading & Finance: Track market opening bells in NYSE, LSE, and HKSE relative to your local time.",
      "Digital Nomad Lifestyle: Manage client deadlines while hopping between time zones.",
      "Family Calls: Call home at a reasonable hour, avoiding the dreaded 3 AM wake-up.",
      "Medication Schedules: Maintain strict dosing intervals while traveling across time zones."
    ],

    aboutTool: `Time is more than just a number on a clock; it's the framework of our global society. This Time Zone Converter is designed to bridge the gap between local solar time and the standardized civil time we use for coordination.

Why Trust This Tool?
We rely on the IANA Time Zone Database (tz database), the same authoritative source used by Unix systems, Java, and Oracle. This ensures that even the most recent political changes to time zone boundaries or DST rules are reflected in your conversions. Furthermore, all calculations happen directly in your browser. We do not track your location or store your queries, guaranteeing 100% privacy.

A Brief History of Standard Time
Before 1879, every town kept its own "local mean time" based on the sun's position. This made railway scheduling impossible. Sir Sandford Fleming, a Canadian engineer, proposed the system of standard time zones we use today, dividing the world into 24 hourly sectors.

Solar Time vs. Standard Time
While our clocks follow "Standard Time" (political boundaries), "Solar Time" is determined by the sun. This is why noon on the clock doesn't always match the sun's highest point. Our tool handles these civil complexities so you don't have to.`,

    proTip: "The '24-Hour Rule': When scheduling across the International Date Line (e.g., US to Australia), always reference the day of the week, not just the date. Tuesday morning in Sydney is often Monday afternoon in Los Angeles.",

    faqs: [
      {
        question: "How accurate is this Time Zone Converter?",
        answer: "Extremely accurate. We utilize the IANA Time Zone Database, which is updated regularly to reflect real-world political changes, DST shifts, and leap seconds. This is the gold standard for digital timekeeping."
      },
      {
        question: "Why do you need the date for a time conversion?",
        answer: "Daylight Saving Time (DST) rules change throughout the year. Converting '10:00 AM' in London to New York depends entirely on whether it's summer (BST) or winter (GMT). By providing the date, we ensure the correct offset is applied."
      },
      {
        question: "What is UTC and how is it different from GMT?",
        answer: "UTC (Coordinated Universal Time) is the scientific time standard based on atomic clocks. GMT (Greenwich Mean Time) is a historic solar standard. For most practical purposes, they are identical, but UTC is the preferred term for technical and international precision."
      },
      {
        question: "Does this tool handle the International Date Line?",
        answer: "Yes. If your conversion crosses the date line (e.g., flying from California to Japan), our tool explicitly indicates if the result is '+1 day' or '-1 day', preventing 'arriving yesterday' confusion."
      },
      {
        question: "Can I use this for fractional time zones like India?",
        answer: "Absolutely. Many converters struggle with non-hourly offsets, but we fully support India (UTC+5:30), Nepal (UTC+5:45), and others, ensuring precise minute-level accuracy."
      },
      {
        question: "Is my location data shared?",
        answer: "No. We prioritize your privacy. All time zone calculations are performed locally on your device using JavaScript. Your location and search history are never sent to our servers."
      }
    ],

    relatedTools: [
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Length Converter", href: "/converters/length" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function TimezoneConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TimezoneConverter />)} />
}