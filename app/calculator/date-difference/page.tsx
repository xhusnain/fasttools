import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { DateDifferenceCalculator } from "@/components/date-difference-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Calculate Days Between Dates - Free Date Difference Calculator",
  description:
    "Calculate exact days, weeks, months & years between any two dates. Includes business days, leap years & multiple formats. Free, no signup required! ✓",
  path: "/calculator/date-difference",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Date Difference Calculator", href: "/calculator/date-difference" }
  ],
  schemaOptions: {
    name: "Date Difference Calculator",
    alternateName: "Days Between Dates Calculator",
    applicationCategory: "UtilityApplication",
    featureList: [
      "Calculate date differences in years, months, days",
      "Business days calculation with weekend options",
      "Multiple date format support (US, EU, ISO)",
      "Leap year handling",
      "Time zone support",
      "Free to use with no registration"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Date & Time",
}

export default function DateDifferencePage() {
  const toolContent = {
    toolName: "Date Difference Calculator",
    overview: "Calculate exact days, weeks, months & years between any two dates. Includes business days, leap years & multiple formats. Free, no signup required!",

    howToSteps: [
      "Select Format: Choose US (MM/DD/YYYY), EU (DD/MM/YYYY), or ISO (YYYY-MM-DD) date format.",
      "Enter Start Date: Pick your first date using the date picker or type it manually.",
      "Enter End Date: Pick your second date - this is the date you want to calculate to.",
      "Choose Options: Select business days only and Saturday options if needed.",
      "Get Results: See days, months, years, and weeks instantly displayed below."
    ],

    features: [
      "Calculate date differences in years, months, days",
      "Business days calculation with weekend options",
      "Multiple date format support (US, EU, ISO)",
      "Leap year handling",
      "Time zone support",
      "Free to use with no registration"
    ],

    useCases: [
      "Project Management: Calculate project timelines, milestone dates, and delivery schedules.",
      "Contract Management: Determine contract durations, renewal dates, and payment schedules.",
      "Financial Planning: Calculate investment periods, loan durations, and interest accrual periods.",
      "Event Planning: Track time remaining until important events, holidays, birthdays, and special occasions.",
      "Personal Milestones: Track personal achievements, anniversaries, and life milestones.",
      "Academic Planning: Track semester lengths, assignment deadlines, and academic calendar periods."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Why Calculate Days Between Dates?</h2>
          <p className="text-muted-foreground mb-4">
            Need to calculate days between dates? Whether you're planning events, tracking deadlines, or counting days until your vacation, our calculator makes it instant and accurate.
            Calculate days for project timelines, legal contracts, or personal milestones. Our days between dates calculator handles everything automatically - no manual counting needed.
            Use it as a days until calculator for countdowns, or calculate days between any two dates for planning. Free, instant, and 100% accurate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How Do Date Difference Calculators Work?</h2>
          <p className="text-muted-foreground mb-4">
            Date difference calculators use sophisticated algorithms to compute the exact time span between two dates. The process involves converting both dates to a standardized format (typically UTC). Then, the system performs precise mathematical calculations that account for leap years, varying month lengths, and calendar complexities.
          </p>
          <p className="text-muted-foreground mb-4">
            In simple terms, these calculators transform complex date arithmetic into instant, accurate results. They handle edge cases that manual calculations often miss, such as leap year transitions and month-end scenarios.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">Step 1: Date Normalization</h3>
              <p className="text-sm text-muted-foreground">The calculator converts both input dates to a standardized internal format, handling different time zones and date formats automatically.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-heading-accent-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">Step 2: Component Extraction</h3>
              <p className="text-sm text-heading-accent">The system extracts year, month, and day components from both dates, preparing them for arithmetic operations.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">Step 3: Leap Year Calculation</h3>
              <p className="text-sm text-muted-foreground">The algorithm identifies and accounts for all leap years within the date range, ensuring February 29th is properly handled.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">Step 4: Precise Arithmetic</h3>
              <p className="text-sm text-muted-foreground">The calculator performs date arithmetic, handling month-end transitions, year boundaries, and varying month lengths with mathematical precision.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">What Are the Different Methods for Calculating Date Differences?</h2>
          <p className="text-muted-foreground mb-4">
            There are several approaches to calculating date differences, each suited to different scenarios. Understanding these methods helps you choose the right calculation type for your needs.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">Calendar Days Calculation</h3>
              <p className="text-sm text-muted-foreground mb-2">This method counts all days including weekends and holidays. It's ideal for personal milestones, event planning, and general time tracking.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-heading-accent-border">
              <h3 className="font-semibold text-heading-accent mb-2">Business Days Calculation</h3>
              <p className="text-sm text-heading-accent mb-2">Excludes weekends and optionally holidays. Perfect for project management, contract durations, and professional deadline tracking.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">Year-Month-Day Breakdown</h3>
              <p className="text-sm text-muted-foreground mb-2">Provides a detailed breakdown showing years, months, and days separately. Useful for age calculations and precise duration tracking.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">Time Zone Aware Calculation</h3>
              <p className="text-sm text-muted-foreground mb-2">Converts dates to UTC before calculation, ensuring accuracy across different time zones. Essential for international business and global projects.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why Should You Use a Date Difference Calculator?</h2>
          <p className="text-muted-foreground mb-4">
            Using a dedicated date difference calculator offers numerous advantages over manual calculations or simple spreadsheet formulas. These tools eliminate human error and provide instant, accurate results.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>100% Accuracy:</strong> Handles leap years, varying month lengths, and all edge cases automatically.</li>
            <li><strong>Time Savings:</strong> Get instant results instead of spending time on manual calculations.</li>
            <li><strong>Error Prevention:</strong> Eliminates human errors in date arithmetic and calendar calculations.</li>
            <li><strong>Multiple Formats:</strong> Supports US, EU, and ISO date formats for international compatibility.</li>
            <li><strong>Business Day Options:</strong> Calculate working days excluding weekends and holidays for professional use.</li>
            <li><strong>Free & Accessible:</strong> No cost, no registration required - use anytime, anywhere.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How Can You Ensure Accurate Date Calculations?</h2>
          <p className="text-muted-foreground mb-4">
            Following best practices ensures you get accurate and reliable results from date difference calculations. Here are essential tips to maximize accuracy.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Use Consistent Time Zones:</strong> Always work in UTC or the same timezone for both dates to ensure accurate calculations.</li>
            <li><strong>Account for Leap Years:</strong> Our calculator automatically accounts for leap years, but understanding their impact helps you verify results for accuracy.</li>
            <li><strong>Choose the Right Calculation Method:</strong> Select calendar days for personal milestones or business days for professional planning.</li>
            <li><strong>Validate Date Inputs:</strong> Double-check that dates are entered correctly and in the intended format.</li>
            <li><strong>Handle Edge Cases:</strong> Be aware of month-end and year-end scenarios.</li>
            <li><strong>Verify Results:</strong> For critical calculations, cross-reference results with multiple calculation methods or tools.</li>
          </ul>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What is a Date Difference Calculator and how does it work?",
        answer: "A Date Difference Calculator is a specialized tool that computes the exact number of days, months, years, hours, minutes, and seconds between two specified dates. It uses sophisticated algorithms to handle complex date arithmetic, accounting for leap years, varying month lengths, and time zone differences. The calculator works by converting both dates to a standardized format (typically UTC), then performing precise mathematical calculations to determine the exact time span between them."
      },
      {
        question: "How do leap years affect date difference calculations?",
        answer: "Leap years significantly impact date calculations by adding an extra day (February 29th) every four years. Our calculator automatically accounts for leap years using the standard Gregorian calendar rules: a year is a leap year if it's divisible by 4, except for century years which require special handling. This leap year handling is crucial for accurate calculations, especially when spanning multiple years or when one of the dates falls on February 29th."
      },
      {
        question: "Can I calculate business days only, excluding weekends and holidays?",
        answer: "Yes, our calculator offers comprehensive business day calculations that exclude weekends (Saturday and Sunday) and can optionally exclude holidays. This feature is essential for project management, contract duration calculations, and deadline tracking. The business day calculation uses sophisticated algorithms to count only working days, automatically skipping weekends and providing options to exclude specific holidays or holiday periods."
      },
      {
        question: "How does the calculator handle different time zones and daylight saving time?",
        answer: "Our calculator automatically handles time zone differences by converting all input dates to Coordinated Universal Time (UTC) before performing calculations. This ensures consistent and accurate results regardless of the time zones of the input dates. The system accounts for daylight saving time transitions, which can affect calculations when dates span DST change periods."
      },
      {
        question: "What date formats are supported by the calculator?",
        answer: "Our calculator supports multiple international date formats to accommodate users worldwide. These include US format (MM/DD/YYYY), European format (DD/MM/YYYY), ISO 8601 format (YYYY-MM-DD), and various other regional formats. The calculator automatically detects the format being used and converts it to a standardized internal format for accurate calculations."
      },
      {
        question: "How accurate are the calculations for historical dates?",
        answer: "Our calculator provides highly accurate results for dates within the Gregorian calendar system (post-1582). For historical dates before the Gregorian calendar adoption, calculations may vary due to the transition from the Julian calendar. The calculator handles this transition period by applying the appropriate calendar rules for the specific time period."
      },
      {
        question: "Can I use this calculator for legal and official purposes?",
        answer: "Yes, our calculator is designed to provide legally accurate date calculations suitable for official documents, contracts, legal proceedings, and government applications. The calculations follow standard mathematical principles and calendar rules recognized internationally. However, for critical legal matters, we recommend consulting with legal professionals to ensure compliance with specific jurisdictional requirements."
      },
      {
        question: "How does the calculator handle month-end and year-end edge cases?",
        answer: "The calculator uses sophisticated algorithms to handle month-end and year-end transitions correctly. When calculating differences that span month boundaries, the system properly accounts for varying month lengths (28-31 days) and ensures accurate day counting. For year-end transitions, the calculator correctly handles leap year considerations and maintains accuracy across year boundaries."
      },
      {
        question: "What's the difference between including and excluding the end date?",
        answer: "Including or excluding the end date significantly affects the calculation result. By default, our calculator excludes the end date, meaning if you calculate from January 1st to January 3rd, the result is 2 days. If you include the end date, the same calculation would show 3 days. This distinction is crucial for different use cases. For project management, excluding the end date is typically preferred as it represents working days."
      },
      {
        question: "Can I use this calculator to compare dates between family members or relationships?",
        answer: "Yes, our date difference calculator can help you determine the exact time span between any two dates, including birth dates of family members. Simply enter the two dates you want to compare, and the calculator will show you the precise difference in years, months, and days. This is useful for tracking time gaps between family events, understanding generational differences, or planning family-related milestones."
      },
      {
        question: "What calendar system does the calculator use?",
        answer: "Our calculator uses the Gregorian calendar, which is the standard calendar system used internationally. This ensures consistency and accuracy for most everyday date calculations and professional applications. The calculator supports multiple date input formats (US, EU, and ISO) to accommodate different regional preferences, making it accessible to users worldwide while maintaining calculation accuracy."
      },
      {
        question: "Are there any calculation limitations I should be aware of?",
        answer: "Our calculator is designed for standard date calculations using the Gregorian calendar. For calculations involving very old historical dates (before 1582), there may be slight differences due to calendar system changes. The calculator is optimized for dates from the 1600s onwards. For most practical purposes including business planning, personal use, legal documentation, and professional applications, our calculator provides highly accurate and reliable results."
      },
      {
        question: "Is this calculator suitable for financial planning and business calculations?",
        answer: "Yes, the calculator is well-suited for financial planning tasks. The business days calculation option allows you to exclude weekends, which is essential for calculating payment periods, contract durations, and project timelines in professional settings. When planning financial matters, you can use business days mode to get more accurate working day counts for interest calculations, payment schedules, and deadline tracking."
      },
      {
        question: "Can I calculate date differences for very long time periods?",
        answer: "Yes, our calculator can handle date ranges spanning many years, decades, or even longer periods. The system properly accounts for leap years and calendar variations throughout the entire date range to maintain accuracy. This capability makes the calculator useful for historical research, long-term project planning, and any scenario where you need to calculate the exact duration between dates that are far apart."
      },
      {
        question: "When should I use calendar days versus business days?",
        answer: "Use calendar days when you need the total time span including all days, such as for personal milestones, event planning, or general date tracking. Use business days when you need to exclude weekends, which is essential for professional project timelines, contract terms, and work-related deadline calculations. Our calculator gives you the flexibility to choose between these calculation modes based on your specific needs."
      },
      {
        question: "How does the calculator handle date ranges that cross multiple years with leap years?",
        answer: "The calculator automatically detects and accounts for all leap years within your selected date range. When your calculation spans multiple years, the system applies the correct number of days for each year, including proper handling of leap year variations. This ensures accurate results regardless of how many leap years fall within your date range, making the calculator reliable for calculations spanning any period."
      },
      {
        question: "How precise are the calculation results?",
        answer: "Our calculator provides results showing years, months, days, weeks, hours, minutes, and seconds for maximum detail. The calculations use precise date arithmetic to ensure accuracy down to the day level. For most practical applications, this level of precision is more than sufficient. The detailed breakdown helps you understand exactly how much time has passed between your selected dates."
      },
      {
        question: "Is this calculator suitable for academic or research work?",
        answer: "Yes, our calculator uses standard date calculation methods that align with established mathematical principles. The results can be useful for research, academic projects, and documentation where accurate date differences are needed. While the calculator provides reliable results, for specialized academic applications requiring specific calendar systems or historical date conversions, you may want to consult with subject matter experts."
      },
      {
        question: "How is my data and privacy protected when using this calculator?",
        answer: "Your privacy is important to us. All date calculations happen directly in your web browser on your device. We don't collect, store, or transmit any of your date inputs or calculation results to external servers. This means you can use the calculator with confidence, even for sensitive dates like birth dates or confidential project timelines. Your information stays on your device and is never shared with us or third parties."
      },
      {
        question: "How can I check if the calculator results are correct?",
        answer: "You can verify the calculator's results by testing it with dates where you already know the difference, or by comparing results with other date calculation tools. The calculator uses standard date arithmetic methods that are widely accepted and used in calendar calculations. For important or critical applications, we recommend double-checking results with alternative calculation methods or consulting relevant documentation."
      }
    ],

    relatedTools: [
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Date Difference Calculator",
        description: "Calculate exact days, weeks, months & years between any two dates. Includes business days, leap years & multiple formats. Free, no signup required!",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Date Difference Calculator", href: "/calculator/date-difference" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <DateDifferenceCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Calculate Days Between Dates - Free Date Difference Calculator",
        description: "Calculate exact days, weeks, months & years between any two dates. Includes business days, leap years & multiple formats. Free, no signup required! ✓",
        path: "/calculator/date-difference"
      }}
    />
  )
}
