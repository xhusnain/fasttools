import { AnniversaryCalculator } from "@/components/calculators/anniversary-calculator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { getCurrentYear } from "@/lib/utils"
import { Heart, Calendar, Clock, Gift, ArrowRight, CheckCircle, HelpCircle, Star } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Anniversary Calculator",
  description: "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining. Perfect for couples celebrating their love!",
  metaTitle: `Anniversary Calculator (Years & Months) | Relationship Duration Tool ${getCurrentYear()}`,
  metaDescription: "FastTools Anniversary Calculator - Calculate how long you've been together in years, months, and days. See total months, next anniversary date, and days remaining.",
  path: "/fun-tools/anniversary",


  header: {
    title: `Anniversary Calculator – Calculate Relationship Duration (${getCurrentYear()})`,
    description: "Calculate how long you've been together and discover when your next anniversary is. Perfect for couples celebrating their love! Simply enter your relationship start date to see years, total months, days, and even seconds you've been together.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
  ],

  content: {
    overview: "Our Anniversary Calculator is the ultimate relationship duration tool for couples. Accurately calculate exactly how long you've been together in years, months, days, and even seconds. Whether you need a wedding anniversary calculator, a dating anniversary tracker, or simply want to know 'how many months have we been together?', this free tool does it all. Track upcoming milestone anniversaries, find your next anniversary date, and celebrate every special moment with our precise anniversary counter.",

    howToSteps: [
      "Enter Start Date: Select the date your relationship started (dating, wedding, or any other milestone) using the date picker.",
      "View Duration: Instantly see how long you've been together in years, months, days, hours, minutes, and seconds.",
      "Check Next Anniversary: See the date of your next anniversary and a countdown of days remaining.",
      "Discover Milestones: Explore upcoming milestone anniversaries like 1 year, 1000 days, or 10 years.",
      "Share Results: Use the share button to send your relationship duration and next anniversary to your partner or friends."
    ],

    features: [
      "Precise Duration Calculation: Calculate time together in years, months, days, hours, minutes, and seconds.",
      "Total Months Display: See exactly how many total months you've been together for 'monthsary' celebrations.",
      "Next Anniversary Countdown: See exactly how many days are left until your next anniversary.",
      "Milestone Tracking: Automatically identifies major upcoming milestones like silver or golden anniversaries.",
      "Leap Year Support: Accurately handles leap years and varying month lengths for precise calculations.",
      "Mobile Friendly: Works perfectly on all devices, so you can check your anniversary on the go.",
      "Privacy Focused: All calculations happen in your browser; no personal data is stored or shared.",
      "Instant Results: Get immediate calculations without any page reloads or waiting.",
      "Shareable Output: Easily copy and share your relationship stats with loved ones."
    ],

    useCases: [
      "Couples: Track dating or wedding anniversaries and plan celebrations.",
      "Event Planning: Determine exact dates for anniversary parties and booking venues.",
      "Gift Giving: Find out exactly how long you've been together to create personalized gifts.",
      "Social Media: Create accurate and detailed posts about your relationship milestones.",
      "Friendships: Celebrate 'friend-versaries' and long-term friendship milestones.",
      "Work Anniversaries: Calculate tenure and service awards for employees."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Celebrate Your Love: How to Use Our Relationship Anniversary Calculator
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every day spent with your partner is a milestone, but keeping track of the exact time can be a challenge. Whether you are nearing your first month or your 50th year, our relationship anniversary calculator is designed to help you celebrate every second of your journey together.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Why Track Your Relationship Milestones?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Knowing your "anniversary age" isn't just about marking a date on the calendar. It’s about reflecting on your growth as a couple. Our tool provides more than just a date; it breaks down your time together into:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Total Days
              </h4>
              <p className="text-sm text-muted-foreground">
                Perfect for celebrating specific number milestones like "1,000 days together."
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Weeks & Months
              </h4>
              <p className="text-sm text-muted-foreground">
                Great for "month-iversary" surprises and tracking shorter milestones.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Gift className="h-4 w-4 text-primary" />
                Upcoming Milestones
              </h4>
              <p className="text-sm text-muted-foreground">
                Never miss a "silver" or "golden" anniversary again.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            How the Calculator Works
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Simply enter the date your relationship began (your "first date" or the day you "made it official"). Our algorithm instantly processes the calendar data—including leap years—to give you an 100% accurate count of your time spent as a couple.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            Never Miss a Special Moment
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            From the paper anniversary (1 year) to the diamond jubilee (60 years), using a relationship calculator helps you plan ahead. Use these insights to book dinner reservations, buy the perfect symbolic gift, or simply send a sweet "Happy 500 Days" text to brighten your partner's morning.
          </p>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is the anniversary calculator?",
        answer: "Our anniversary calculator provides precise accuracy by calculating relationship duration in years, months, days, hours, minutes, and seconds. It also provides a 'Total Months' count for monthly celebrations. The calculation accounts for different month lengths, leap years, and handles edge cases like February 29th birthdays to ensure complete accuracy."
      },
      {
        question: "Can I use this calculator for any type of relationship?",
        answer: "Absolutely! Our anniversary calculator is designed to work for any type of relationship milestone. Whether you're celebrating a dating anniversary, engagement anniversary, wedding anniversary, friendship anniversary, or any other significant relationship milestone, the tool will calculate your time together accurately."
      },
      {
        question: "How does the calculator handle leap years and different month lengths?",
        answer: "Our anniversary calculator intelligently handles leap years and varying month lengths to ensure accurate calculations. The system automatically detects leap years and adjusts calculations accordingly, properly accounting for February 29th in leap years and February 28th in non-leap years."
      },
      {
        question: "Is my relationship information secure and private?",
        answer: "Your privacy and data security are our top priorities. All relationship information entered into our anniversary calculator is processed locally in your browser and is never stored on our servers or shared with third parties."
      },
      {
        question: "Can I share my anniversary results with friends and family?",
        answer: "Yes! Our anniversary calculator includes built-in sharing features that allow you to easily share your relationship milestone with friends and family. You can copy the anniversary text to share via text message, email, or social media platforms."
      },
      {
        question: "What happens if I enter a future start date by mistake?",
        answer: "Our anniversary calculator includes built-in validation to prevent future start dates from being entered. The date input field automatically restricts selection to dates up to today, ensuring you can only enter valid relationship start dates from the past."
      },
      {
        question: "Can I use this tool on mobile devices and tablets?",
        answer: "Yes! Our anniversary calculator is fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. The interface automatically adapts to different screen sizes, ensuring optimal viewing and functionality across all platforms."
      },
      {
        question: "How does the calculator determine the next anniversary date?",
        answer: "Our anniversary calculator intelligently determines your next anniversary by calculating the next occurrence of your relationship start date. The system looks at the current year and determines whether your anniversary date has already passed this year."
      },
      {
        question: "What time zone does the anniversary calculator use?",
        answer: "The anniversary calculator uses your local device time zone for all calculations, ensuring the anniversary calculations are accurate for your specific location. This means the relationship duration and next anniversary calculations will reflect the correct time based on where you are located."
      },
      {
        question: "How can I use the anniversary calculator for celebration planning?",
        answer: "Our anniversary calculator is an excellent resource for anniversary celebration planning. Use it to track how much time you have left to plan decorations, book venues, order gifts, and coordinate with family and friends."
      },
      {
        question: "Is there a limit to how far back I can calculate an anniversary?",
        answer: "There's no practical limit to how far back you can calculate an anniversary using our tool. Whether you're calculating anniversaries for relationships that started days ago, months ago, years ago, or even decades ago, the tool will provide accurate calculations."
      }
    ],

    relatedTools: [
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Future Age Calculator", href: "/fun-tools/future-age" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function AnniversaryPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AnniversaryCalculator />)} />
}
