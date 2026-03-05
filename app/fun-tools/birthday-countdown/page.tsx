import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const BirthdayCountdown = dynamic(
  () => import("@/components/calculators/birthday-countdown").then(mod => mod.BirthdayCountdown),
  { loading: () => <ToolLoader /> }
)
import { Cake, Clock, Calendar, Gift, ArrowRight, CheckCircle, HelpCircle, Star } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Birthday Countdown",
  description: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
  metaTitle: `Birthday Countdown | Free Real-Time Timer`,
  metaDescription: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
  path: "/fun-tools/birthday-countdown",
  keywords: [
    "birthday countdown", "free birthday countdown", "birthday timer",
    "days until birthday", "countdown to birthday", "birthday counter",
    "happy birthday timer", "share birthday countdown", "birthday reminder",
    "next birthday date", "live countdown", "party countdown", "celebration timer",
    "birthday countdown timer", "birthday countdown clock", "birthday countdown online",
    "free birthday countdown timer", "birthday countdown widget", "birthday countdown app",
    "birthday countdown generator", "birthday countdown calculator",
    "birthday countdown full screen", "birthday countdown for WhatsApp",
    "birthday countdown free download", "birthday countdown share link",
    "birthday countdown tool", "online birthday countdown timer",
    "birthday countdown timer online free", "birthday countdown timer download",
    "birthday countdown timer app", "birthday countdown timer widget online",
    "birthday countdown timer full screen black background", "birthday countdown timer aesthetic"
  ],

  header: {
    title: "Birthday Countdown Timer - Real-Time Birthday Tracker",
    description: "Real-time countdown to your next birthday showing days, hours, minutes, and seconds. Share the excitement with friends and family! Simply enter your birth date and watch the seconds tick away until your special day.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
  ],

  content: {
    definition:
      "A Birthday Countdown Timer is a free tool that shows exactly how many days, hours, minutes, and seconds remain until your next birthday.",
    quickAnswer:
      "Enter your birth date to see a live countdown to your next birthday. Shows days, hours, minutes, and seconds remaining. Also displays your current age and what day of the week your birthday falls on this year.",
    keyTakeaways: [
      "Live countdown showing days, hours, minutes, and seconds to your next birthday",
      "Shows what day of the week your birthday falls on this year",
      "Displays your current age in years, months, and days",
      "Automatically switches to next year after your birthday passes",
      "Handles leap year birthdays (Feb 29) correctly",
    ],
    overview: "Our Birthday Countdown Timer is the ultimate way to build excitement for your special day. Whether you're counting down to your own birthday, a friend's, or a family member's, this tool provides a precise, real-time countdown. It handles leap years, time zones, and all the tricky date math automatically, so you can focus on the celebration. With instant sharing options, you can let everyone know exactly how long they have to get your gift ready!",

    howToSteps: [
      "Enter Birth Date: Select your birth date (day, month, and year) using the easy-to-use date picker.",
      "Start Countdown: The timer instantly calculates the time remaining until your next birthday.",
      "Watch Real-Time: See the days, hours, minutes, and seconds tick down live on your screen.",
      "Check Next Birthday: View the exact date and day of the week for your upcoming birthday.",
      "Share the Excitement: Use the share button to send your personal countdown link to friends and family."
    ],

    features: [
      "Live Real-Time Timer: Updates every second to show precise time remaining.",
      "Next Birthday Details: Shows the exact date and day of the week for your next celebration.",
      "Leap Year Smart: Automatically adjusts for leap years (February 29th birthdays).",
      "Time Zone Aware: Uses your local time zone for accurate countdowns wherever you are.",
      "Instant Sharing: Easily share your countdown on social media or via messaging apps.",
      "Mobile Optimized: Looks great and works perfectly on phones and tablets.",
      "No Registration: Start counting down immediately without creating an account.",
      "Privacy First: All calculations happen in your browser; no personal data is stored."
    ],

    useCases: [
      "Party Planning: Track time remaining to organize decorations, food, and guests.",
      "Social Media: Create excitement by sharing your countdown on Instagram, Facebook, or TikTok.",
      "Gift Reminders: Send the countdown to friends and family as a subtle (or not-so-subtle) hint.",
      "Surprise Parties: Coordinate with others to time the perfect surprise moment.",
      "Milestone Birthdays: Build anticipation for big ones like 18th, 21st, 30th, or 50th birthdays.",
      "New Year's Eve: Can also be used to count down to the New Year or other annual events."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Cake className="h-6 w-6 text-primary" />
            Why Use a Birthday Countdown?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Birthdays are special moments that deserve anticipation. A countdown timer transforms the waiting into an exciting event itself, making every second leading up to the celebration feel meaningful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Build Anticipation
              </h4>
              <p className="text-sm text-muted-foreground">
                Watching the seconds tick away creates a sense of excitement and urgency that makes the final arrival of your birthday even more rewarding.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Plan Perfectly
              </h4>
              <p className="text-sm text-muted-foreground">
                Know exactly how much time you have left to finish preparations. Whether it's baking a cake or buying a gift, the timer keeps you on track.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            Fun Birthday Facts
          </h2>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Most Common Birthday:</strong> September 9th is statistically the most common birthday in the US.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Least Common Birthday:</strong> February 29th (Leap Day) is the rarest, followed by December 25th.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Golden Birthday:</strong> When you turn the age of your birth day (e.g., turning 25 on the 25th).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Birthday Paradox:</strong> In a group of just 23 people, there's a 50% chance two share a birthday!</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is the birthday countdown timer?",
        answer: "Our birthday countdown timer provides precise accuracy down to the second, updating in real-time to show exactly how much time remains until your next birthday. The calculation accounts for leap years, different month lengths, and time zone considerations to ensure complete accuracy."
      },
      {
        question: "Can I share my birthday countdown with friends and family?",
        answer: "Absolutely! Our birthday countdown tool includes built-in sharing features that allow you to easily share your countdown with friends and family. You can copy the countdown text to share via text message, email, or social media platforms."
      },
      {
        question: "How does the tool handle leap year birthdays?",
        answer: "Our birthday countdown tool intelligently handles leap year birthdays (February 29th) by calculating the next occurrence of your birthday. If you were born on February 29th, the tool will count down to February 28th in non-leap years and February 29th in leap years."
      },
      {
        question: "Is my birth date information secure and private?",
        answer: "Your privacy and data security are our top priorities. All birth date information entered into our birthday countdown tool is processed locally in your browser and is never stored on our servers or shared with third parties."
      },
      {
        question: "Can I use this tool on mobile devices and tablets?",
        answer: "Yes! Our birthday countdown tool is fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. The interface automatically adapts to different screen sizes, ensuring optimal viewing and functionality across all platforms."
      },
      {
        question: "What happens if I enter a future birth date by mistake?",
        answer: "Our birthday countdown tool includes built-in validation to prevent future birth dates from being entered. The date input field automatically restricts selection to dates up to today, ensuring you can only enter valid birth dates from the past."
      },
      {
        question: "How often does the countdown update?",
        answer: "The birthday countdown timer updates every second in real-time, providing you with the most current and accurate countdown possible. You'll see the seconds tick down continuously, and the minutes, hours, and days will adjust automatically as time progresses."
      },
      {
        question: "Can I use this tool for someone else's birthday countdown?",
        answer: "Absolutely! Our birthday countdown tool can be used for anyone's birthday, not just your own. Simply enter the birth date of the person whose birthday you want to count down to, and the tool will calculate the exact time remaining until their next birthday."
      },
      {
        question: "What time zone does the countdown use?",
        answer: "The birthday countdown timer uses your local device time zone for all calculations, ensuring the countdown is accurate for your specific location. This means the countdown will reflect the correct time remaining based on where you are located."
      },
      {
        question: "How can I use the countdown for birthday party planning?",
        answer: "Our birthday countdown tool is an excellent resource for birthday party planning and organization. Use it to track how much time you have left to plan decorations, send invitations, order cakes, and coordinate with guests."
      },
      {
        question: "Is there a limit to how far in advance I can count down?",
        answer: "There's no practical limit to how far in advance you can count down to a birthday using our tool. Whether you're counting down days, weeks, months, or even years until someone's next birthday, the tool will provide accurate calculations."
      }
    ],

    relatedTools: [
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Future Age Calculator", href: "/fun-tools/future-age" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" }
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function BirthdayCountdownPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<BirthdayCountdown />)} />
}
