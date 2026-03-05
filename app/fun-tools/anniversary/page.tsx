import { Metadata } from 'next';
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AnniversaryCalculator = dynamic(
  () => import("@/components/calculators/anniversary-calculator").then(mod => mod.AnniversaryCalculator),
  { loading: () => <ToolLoader /> }
)
import { Heart, Calendar, Clock, Gift, ArrowRight, CheckCircle, HelpCircle, Star } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Love Days Counter & Anniversary Calculator",
  description: "Calculate exactly how long you've been together in years, months, and days with this relationship anniversary calculator.",
  metaTitle: "Anniversary Calculator - Love Days Counter",
  metaDescription: "Free love days counter and dating calculator. Track exactly how long you've been together. Perfect for checking your relationship days count.",
  path: "/fun-tools/anniversary",
  keywords: [
    "love days counter", "dating calculator", "relationship days counter", "how long have we been together",
    "love counter", "anniversary calculator", "couple tracker", "days since we met"
  ],


  schemaOptions: {
    applicationCategory: "LifestyleApplication",
    description: "Free relationship anniversary calculator to track how long you've been together in years, months, days, hours, minutes and seconds.",
    featureList: [
      "Precise duration calculation (years, months, days, hours, minutes, seconds)",
      "Total months display for monthsary celebrations",
      "Next anniversary countdown",
      "Milestone tracking (silver, golden, diamond anniversaries)",
      "Leap year support",
      "Shareable results",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "Love Days Counter & Anniversary Calculator",
    description: "Calculate exactly how long you've been together. See your love days count, total months, and years since your special date.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
  ],

  content: {
    overview: "Our **Love Days Counter** (also known as a **Dating Calculator**) is the ultimate relationship tracker. Accurately calculate exactly how long you've been together in years, months, and days. Whether you need a wedding anniversary calculator or simply want to check your **love days count**, this free tool does it all. Track upcoming 'monthsaries', find your next big milestone, and celebrate every moment with our precise **relationship counter**.",

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

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            When Was Your First Date? Use Our Dating Anniversary Calculator
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            How long has it been since that magic first spark? Whether you’ve been official for three months or three years, our dating anniversary calculator helps you track the exact age of your love story. Instead of guessing the weeks, let our tool do the math so you can focus on the celebration.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">Track Every Romantic Milestone</h3>
          <p className="text-base text-muted-foreground mb-4">
            Dating is a journey of "firsts." Our calculator goes beyond just years. Enter your start date to see your progress in:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>The "Monthsary":</strong> Perfect for couples who love celebrating every month together.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Total Day Count:</strong> Discover when you hit your 100th, 500th, or 1,000th day of dating.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Days Until Next Anniversary:</strong> A real-time countdown to your big day.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">Why Use a Dating Calculator?</h3>
          <p className="text-base text-muted-foreground">
            In a new relationship, time flies. You might remember the month you met, but do you know the exact day you became "official"? Using a dating anniversary tracker ensures you never miss a chance to be romantic. It’s the ultimate tool for planning surprises, ordering personalized gifts, or simply reminiscing about your first kiss.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            Celebrate Your Forever: The Ultimate Marriage Anniversary Calculator
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your wedding day was just the beginning. Whether you are approaching your first year of marriage or your fiftieth, our marriage anniversary calculator provides an instant, accurate breakdown of every moment you’ve spent as a married couple.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">Why Use a Marriage Anniversary Tracker?</h3>
          <p className="text-base text-muted-foreground mb-4">
            As years pass, it becomes harder to keep track of the exact time elapsed. Our tool does the heavy lifting, calculating your time together down to the very day. It is the perfect resource for:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Traditional Gift Planning:</strong> Discover if your upcoming anniversary is the Paper, Wood, or Tin milestone.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Counting Your Blessings:</strong> See your marriage duration in total years, months, weeks, and days.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Anniversary Countdowns:</strong> Get an exact count of how many days remain until your next big celebration.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">How Our Calculator Works</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            To get your results, simply input the date of your wedding ceremony. Our marriage calculator accounts for leap years and different month lengths to ensure 100% accuracy. Within seconds, you’ll have a complete timeline of your marital journey.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">Honor Your Commitment</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Every year of marriage is a testament to love and partnership. From the Silver Anniversary (25 years) to the Golden Anniversary (50 years), knowing your exact milestone helps you plan the perfect party, vow renewal, or sentimental gift.
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

export const metadata: Metadata = {
  ...toolConfig.metadata,
  title: `Relationship Anniversary Calculator - Years, Months, Days`
}

export default function AnniversaryPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AnniversaryCalculator />)} />
}
