// "When did I conceive if my due date is in [month]?" variant pages.
//
// Same cluster strategy as youtube-thumbnail/[slug] and how-old-will-i-be/[slug]:
// the conception calculator is this site's least-linked PROVEN winner (165 impr,
// see docs/seo/2026-07-deep-fix/), and due-month questions are the narrow
// answer-shaped slice. Each page answers in sentence 1 with the month's real
// conception window (due date − 266 days); the per-day table is computed in
// [slug]/page.tsx. Windows below use non-leap reference years (±1 day in leap
// years — the calculator gives exact dates).

export interface ConceptionVariantConfig {
  slug: string
  monthName: string
  monthIndex: number // 0-based due month
  conceptionWindow: string // human summary, e.g. "April 10 – May 10 of the previous year"
  metaTitle: string
  metaDescription: string
  headerDescription: string
  quickAnswer: string
  overviewText: string
  keywords: string[]
  aboutHeading: string
  aboutBody: string
  faqOverrides: Array<{ question: string; answer: string }>
}

export const conceptionVariants: Record<string, ConceptionVariantConfig> = {
  "due-in-january": {
    slug: "due-in-january",
    monthName: "January",
    monthIndex: 0,
    conceptionWindow: "April 10 – May 10 of the previous year",
    metaTitle: "Due in January — When Did I Conceive? (April–May, Exact Dates)",
    metaDescription:
      "Due date in January? You conceived between about April 10 and May 10 of the previous year (due date − 266 days). Day-by-day table + exact calculator with fertile window.",
    headerDescription:
      "A January due date means conception around mid-April to mid-May of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in January, you most likely conceived between April 10 and May 10 of the previous year — your due date minus 266 days (38 weeks). Due January 1 → conceived around April 10; due January 15 → around April 24; due January 31 → around May 10. The window spans ±5 days because sperm survive up to 5 days.",
    overviewText:
      "January babies are conceived in the spring of the previous year. This page reverse-calculates the conception date for every January due date using the standard formula (due date − 266 days), shows the day-by-day table, and explains why the true answer is a window rather than a single day. For an estimate matched to your cycle, enter your exact due date in the calculator.",
    keywords: [
      "when did i conceive if due in january",
      "due date january when did i conceive",
      "conception date for january due date",
      "due in january conceived when",
    ],
    aboutHeading: "What a January Due Date Says About Conception",
    aboutBody:
      "A January due date puts conception in mid-spring of the previous year — roughly the mid-April-to-mid-May window. Two practical notes for January babies: first, a due date near January 1 can swing the birth year itself, which matters for tax dependents (a child born December 31 counts for the full prior tax year; a January 1 baby does not). Second, in most US school districts a January birthday lands mid-school-year, making these kids among the older half of their eventual class. If your due date sits in the first week of January, treat both the late-December and early-January scenarios as live possibilities — full term spans weeks 37–42.",
    faqOverrides: [
      {
        question: "If my due date is January 15, when did I conceive?",
        answer:
          "Around April 24 of the previous year — January 15 minus 266 days. The realistic window is about April 19–29, because ovulation timing varies and sperm can survive up to 5 days before fertilization.",
      },
      {
        question: "Could a January due date mean a December birth?",
        answer:
          "Yes. Full term is 37–42 weeks, so a due date in the first week of January frequently ends in a late-December delivery. Only about 1 in 20 babies arrives exactly on the due date; most come within a week either side.",
      },
    ],
  },

  "due-in-february": {
    slug: "due-in-february",
    monthName: "February",
    monthIndex: 1,
    conceptionWindow: "May 11 – June 7 of the previous year",
    metaTitle: "Due in February — When Did I Conceive? (May–June, Exact Dates)",
    metaDescription:
      "Due date in February? Conception was between about May 11 and June 7 of the previous year (due date − 266 days). Full day-by-day table + exact conception calculator.",
    headerDescription:
      "A February due date means conception in mid-May to early June of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in February, you most likely conceived between May 11 and June 7 of the previous year — your due date minus 266 days. Due February 1 → conceived around May 11; due February 14 → around May 24; due February 28 → around June 7. Add ±5 days for the fertile window.",
    overviewText:
      "February due dates trace back to late spring of the previous year. This page maps every February due date to its likely conception date with the standard due-date-minus-266-days formula, including the leap-year wrinkle February brings, and the calculator refines it with your cycle details.",
    keywords: [
      "when did i conceive if due in february",
      "due date february when did i conceive",
      "conception date for february due date",
      "due february 29 conception date",
    ],
    aboutHeading: "February Due Dates and the Leap-Year Wrinkle",
    aboutBody:
      "February is the only due month whose length changes: 28 days, or 29 in leap years. A due date of February 29 (possible only every four years) maps to conception around June 8 of the previous year — and if baby arrives on the due date itself, you get the rarest birthday there is, shared by roughly 1 in 1,461 people. More practically, February due dates cluster their conceptions around the May–June transition, when the previous year's spring cycle timing tends to be well documented for people tracking ovulation — which makes the LMP method comparatively reliable here.",
    faqOverrides: [
      {
        question: "If my due date is February 14, when did I conceive?",
        answer:
          "Around May 24 of the previous year — February 14 minus 266 days. The realistic window is about May 19–29 accounting for sperm survival and ovulation variation.",
      },
      {
        question: "What if my due date is February 29?",
        answer:
          "February 29 minus 266 days lands on about June 8 of the previous year. Leap-day due dates are handled correctly by the calculator — and note only about 5% of babies arrive exactly on their due date, so a leap-day birthday remains a long shot even with a Feb 29 EDD.",
      },
    ],
  },

  "due-in-march": {
    slug: "due-in-march",
    monthName: "March",
    monthIndex: 2,
    conceptionWindow: "June 8 – July 8 of the previous year",
    metaTitle: "Due in March — When Did I Conceive? (June–July, Exact Dates)",
    metaDescription:
      "Due date in March? Conception was between about June 8 and July 8 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A March due date means conception in early June to early July of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in March, you most likely conceived between June 8 and July 8 of the previous year — your due date minus 266 days. Due March 1 → conceived around June 8; due March 15 → around June 22; due March 31 → around July 8. The fertile window adds ±5 days.",
    overviewText:
      "March due dates point back to early summer of the previous year. Below you'll find the conception date for every March due date via the due-date-minus-266-days formula, plus the table of exact dates and the calculator for a cycle-adjusted answer.",
    keywords: [
      "when did i conceive if due in march",
      "due date march when did i conceive",
      "conception date for march due date",
    ],
    aboutHeading: "March Due Dates: Early-Summer Conceptions",
    aboutBody:
      "A March due date maps conception to the first weeks of the previous summer — early June through early July. One thing worth knowing: because gestational age is counted from the last menstrual period (about two weeks before conception), your medical chart will date the pregnancy from late May–June even though fertilization happened in June–July. If you're reconstructing events from a positive test, remember home tests usually turn positive 12–15 days after conception, so a March-due pregnancy typically tested positive in late June or July of the previous year.",
    faqOverrides: [
      {
        question: "If my due date is March 15, when did I conceive?",
        answer:
          "Around June 22 of the previous year — March 15 minus 266 days, with a realistic window of about June 17–27.",
      },
      {
        question: "When would a March-due pregnancy have tested positive?",
        answer:
          "Home pregnancy tests usually turn positive 12–15 days after conception. For a March due date (conceived June–early July), that means a positive test in late June or July of the previous year.",
      },
    ],
  },

  "due-in-april": {
    slug: "due-in-april",
    monthName: "April",
    monthIndex: 3,
    conceptionWindow: "July 9 – August 7 of the previous year",
    metaTitle: "Due in April — When Did I Conceive? (July–August, Exact Dates)",
    metaDescription:
      "Due date in April? Conception was between about July 9 and August 7 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "An April due date means conception in mid-July to early August of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in April, you most likely conceived between July 9 and August 7 of the previous year — your due date minus 266 days. Due April 1 → conceived around July 9; due April 15 → around July 23; due April 30 → around August 7. Allow ±5 days for the fertile window.",
    overviewText:
      "April due dates trace to midsummer of the previous year. This page gives the likely conception date for every April due date (due date − 266 days), a day-by-day reference table, and the calculator for an exact, cycle-aware answer.",
    keywords: [
      "when did i conceive if due in april",
      "due date april when did i conceive",
      "conception date for april due date",
    ],
    aboutHeading: "April Due Dates: Midsummer Conceptions",
    aboutBody:
      "April-due pregnancies begin in the July–August heat of the previous year — peak vacation season, which is why 'honeymoon babies' and 'holiday-trip babies' so often have spring due dates. Reconstructing the timeline: a first missed period for this group typically fell in late July or August, a positive test shortly after, and the 20-week anatomy scan around Thanksgiving–early December. If you conceived while traveling across time zones, don't worry about the math — conception dating uses calendar dates, and a day's uncertainty is already inside the ±5-day fertile window.",
    faqOverrides: [
      {
        question: "If my due date is April 15, when did I conceive?",
        answer:
          "Around July 23 of the previous year — April 15 minus 266 days, with a realistic window of about July 18–28.",
      },
      {
        question: "Does summer travel or time zones affect conception dating?",
        answer:
          "No meaningfully. Conception dating works in calendar dates, and the inherent ±5-day fertile window is far larger than any time-zone effect. Enter your due date in the calculator; the window it returns already covers that uncertainty.",
      },
    ],
  },

  "due-in-may": {
    slug: "due-in-may",
    monthName: "May",
    monthIndex: 4,
    conceptionWindow: "August 8 – September 7 of the previous year",
    metaTitle: "Due in May — When Did I Conceive? (August–September, Exact Dates)",
    metaDescription:
      "Due date in May? Conception was between about August 8 and September 7 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A May due date means conception in August to early September of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in May, you most likely conceived between August 8 and September 7 of the previous year — your due date minus 266 days. Due May 1 → conceived around August 8; due May 15 → around August 22; due May 31 → around September 7. The fertile window spans ±5 days.",
    overviewText:
      "May due dates point to late summer of the previous year. Below: the conception date for every May due date using due date − 266 days, the exact-date table, and the calculator for a personalized window.",
    keywords: [
      "when did i conceive if due in may",
      "due date may when did i conceive",
      "conception date for may due date",
    ],
    aboutHeading: "May Due Dates: Late-Summer Conceptions",
    aboutBody:
      "May babies were conceived in the August–early-September stretch of the previous year. Timeline landmarks for this group: the first trimester ran through the autumn, the 20-week anatomy scan landed around Christmas–New Year, and the third trimester coincided with spring. One planning note — a May due date usually means the final weeks of pregnancy overlap tax season and, for teachers and students, the end of the school year, which is why May is a popular 'planned' due month in education households.",
    faqOverrides: [
      {
        question: "If my due date is May 15, when did I conceive?",
        answer:
          "Around August 22 of the previous year — May 15 minus 266 days, with a realistic window of about August 17–27.",
      },
      {
        question: "My ultrasound moved my May due date. Which conception date is right?",
        answer:
          "Trust the ultrasound-based date, especially from a first-trimester scan (accurate to ±3–5 days). Re-enter the revised due date in the calculator; conception is always about 266 days before whichever due date your clinician currently uses.",
      },
    ],
  },

  "due-in-june": {
    slug: "due-in-june",
    monthName: "June",
    monthIndex: 5,
    conceptionWindow: "September 8 – October 7 of the previous year",
    metaTitle: "Due in June — When Did I Conceive? (September–October, Exact Dates)",
    metaDescription:
      "Due date in June? Conception was between about September 8 and October 7 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A June due date means conception in September to early October of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in June, you most likely conceived between September 8 and October 7 of the previous year — your due date minus 266 days. Due June 1 → conceived around September 8; due June 15 → around September 22; due June 30 → around October 7. Allow ±5 days for the fertile window.",
    overviewText:
      "June due dates trace back to early autumn of the previous year. This page maps each June due date to its likely conception date (due date − 266 days), with the full table and the calculator for an exact answer.",
    keywords: [
      "when did i conceive if due in june",
      "due date june when did i conceive",
      "conception date for june due date",
    ],
    aboutHeading: "June Due Dates: Early-Autumn Conceptions",
    aboutBody:
      "A June due date puts conception in September or the first week of October of the previous year. Early autumn is one of the higher-conception periods in the northern hemisphere, so June is a busy birth month in many countries. Timeline-wise, this group's first trimester ran through the holiday season — the common 'we found out just before Christmas' story — with the anatomy scan in late January–February and a spring third trimester ending just as summer starts.",
    faqOverrides: [
      {
        question: "If my due date is June 15, when did I conceive?",
        answer:
          "Around September 22 of the previous year — June 15 minus 266 days, with a realistic window of about September 17–27.",
      },
      {
        question: "Why do doctors say I got pregnant two weeks before I conceived?",
        answer:
          "Because gestational age counts from the first day of your last menstrual period, about two weeks before ovulation and conception. For a June due date, the chart dates the pregnancy from late August–September even though fertilization happened in September–October. Both describe the same pregnancy.",
      },
    ],
  },

  "due-in-july": {
    slug: "due-in-july",
    monthName: "July",
    monthIndex: 6,
    conceptionWindow: "October 8 – November 7 of the previous year",
    metaTitle: "Due in July — When Did I Conceive? (October–November, Exact Dates)",
    metaDescription:
      "Due date in July? Conception was between about October 8 and November 7 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A July due date means conception in October to early November of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in July, you most likely conceived between October 8 and November 7 of the previous year — your due date minus 266 days. Due July 1 → conceived around October 8; due July 15 → around October 22; due July 31 → around November 7. The fertile window adds ±5 days.",
    overviewText:
      "July due dates point back to mid-autumn of the previous year. Below is the conception date for every July due date via the standard formula, the day-by-day table, and the calculator for a cycle-adjusted result.",
    keywords: [
      "when did i conceive if due in july",
      "due date july when did i conceive",
      "conception date for july due date",
    ],
    aboutHeading: "July Due Dates: Mid-Autumn Conceptions",
    aboutBody:
      "July-due pregnancies began in the October–early-November window of the previous year. For school-age planning, July birthdays sit near many countries' school-entry cutoffs (September 1 in much of the US, so July children are among the youngest in their class; August 31 in England makes them nearly the youngest). If a summer-vs-autumn school start matters to your family planning, the conception window here — Halloween season, roughly — is the one that produces those cusp birthdays.",
    faqOverrides: [
      {
        question: "If my due date is July 15, when did I conceive?",
        answer:
          "Around October 22 of the previous year — July 15 minus 266 days, with a realistic window of about October 17–27.",
      },
      {
        question: "Will my July baby be young for their school year?",
        answer:
          "In US districts with a September 1 cutoff, yes — a July birthday is among the youngest in the class. In England (August 31 cutoff) July children are nearly the youngest. Cutoffs vary by state and country, so check your local rule.",
      },
    ],
  },

  "due-in-august": {
    slug: "due-in-august",
    monthName: "August",
    monthIndex: 7,
    conceptionWindow: "November 8 – December 8 of the previous year",
    metaTitle: "Due in August — When Did I Conceive? (November–December, Exact Dates)",
    metaDescription:
      "Due date in August? Conception was between about November 8 and December 8 of the previous year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "An August due date means conception in November to early December of the previous year. Find your exact date below.",
    quickAnswer:
      "If your due date is in August, you most likely conceived between November 8 and December 8 of the previous year — your due date minus 266 days. Due August 1 → conceived around November 8; due August 15 → around November 22; due August 31 → around December 8. Allow ±5 days for the fertile window.",
    overviewText:
      "August due dates trace to late autumn of the previous year — the run-up to the holidays. This page computes the conception date for every August due date, shows the exact-date table, and links the calculator for a personalized window.",
    keywords: [
      "when did i conceive if due in august",
      "due date august when did i conceive",
      "conception date for august due date",
    ],
    aboutHeading: "August Due Dates: Thanksgiving-Season Conceptions",
    aboutBody:
      "An August due date maps to conception around Thanksgiving through early December in the previous year — the start of the holiday conception season that peaks a few weeks later. August is also consistently among the top birth months in the US. For school planning, August birthdays sit right on the September-1 kindergarten cutoff used by many states: born in August, a child is either the very youngest in their class or (if 'redshirted') the oldest — a decision debated by parents every year.",
    faqOverrides: [
      {
        question: "If my due date is August 15, when did I conceive?",
        answer:
          "Around November 22 of the previous year — August 15 minus 266 days, with a realistic window of about November 17–27.",
      },
      {
        question: "Why are so many babies due in August?",
        answer:
          "August (with September) tops US birth statistics most years, reflecting the November–December conception peak — more time indoors and holiday togetherness are the usual explanations. Your individual due date is unaffected by the statistics; it's simply your conception date plus about 266 days.",
      },
    ],
  },

  "due-in-september": {
    slug: "due-in-september",
    monthName: "September",
    monthIndex: 8,
    conceptionWindow: "December 9 of the previous year – January 7 of the same year",
    metaTitle: "Due in September — When Did I Conceive? (December–January, Exact Dates)",
    metaDescription:
      "Due date in September? Conception was between about December 9 and January 7 (due date − 266 days) — the holiday season. Day-by-day table + exact conception calculator.",
    headerDescription:
      "A September due date means conception around the holidays — December to early January. Find your exact date below.",
    quickAnswer:
      "If your due date is in September, you most likely conceived between December 9 (of the previous year) and January 7 — your due date minus 266 days. Due September 1 → conceived around December 9; due September 15 → around December 23; due September 30 → around January 7. Add ±5 days for the fertile window.",
    overviewText:
      "September due dates come from the holiday season: December conceptions dominate, spilling into the first week of January. That's exactly why September is the United States' peak birth month. Below, every September due date is mapped to its conception date, with the exact-date table and the calculator for a cycle-aware answer.",
    keywords: [
      "when did i conceive if due in september",
      "due date september when did i conceive",
      "conception date for september due date",
      "september baby conceived in december",
    ],
    aboutHeading: "September Due Dates: The Holiday-Conception Peak",
    aboutBody:
      "September is the most common birth month in the US, and this window is the reason: a September due date means conception in mid-December to early January — Christmas and New Year. September 9 has repeatedly ranked as the single most common birthday in US data, corresponding to conception around December 17. There's also a school-calendar bonus driving planned September babies: with the widespread September-1 kindergarten cutoff, a September birthday makes a child the oldest in their class, which some research links to small persistent advantages in school sports and academics.",
    faqOverrides: [
      {
        question: "If my due date is September 15, when did I conceive?",
        answer:
          "Around December 23 of the previous year — September 15 minus 266 days, with a realistic window of about December 18–28. Yes: right around Christmas.",
      },
      {
        question: "Is it true most birthdays are in September?",
        answer:
          "In the US, yes — September consistently tops the birth-month statistics, driven by December holiday conceptions. September 9 has ranked as the most common single birthday in several analyses of US birth data.",
      },
    ],
  },

  "due-in-october": {
    slug: "due-in-october",
    monthName: "October",
    monthIndex: 9,
    conceptionWindow: "January 8 – February 7 of the same year",
    metaTitle: "Due in October — When Did I Conceive? (January–February, Exact Dates)",
    metaDescription:
      "Due date in October? Conception was between about January 8 and February 7 of the same year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "An October due date means conception in January to early February of the same year. Find your exact date below.",
    quickAnswer:
      "If your due date is in October, you most likely conceived between January 8 and February 7 of the same year — your due date minus 266 days. Due October 1 → conceived around January 8; due October 15 → around January 22; due October 31 → around February 7. The fertile window spans ±5 days.",
    overviewText:
      "October is the first due month whose conception window falls entirely in the same calendar year — early January through the first week of February. This page maps every October due date to its conception date, including the New-Year window, with the table and calculator below.",
    keywords: [
      "when did i conceive if due in october",
      "due date october when did i conceive",
      "conception date for october due date",
    ],
    aboutHeading: "October Due Dates: New-Year Conceptions",
    aboutBody:
      "October-due pregnancies begin in the January–early-February window of the same year — the tail of the holiday conception peak, which keeps October among the busier US birth months. A quirk of this window: it's the first one that doesn't cross a year boundary, so the 'conceived last year or this year?' confusion that January–September due dates create simply doesn't apply. A Halloween due date (October 31) maps to conception around February 7 — and note that only ~5% of babies arrive on their exact due date, so an actual Halloween birthday remains unlikely even then.",
    faqOverrides: [
      {
        question: "If my due date is October 15, when did I conceive?",
        answer:
          "Around January 22 of the same year — October 15 minus 266 days, with a realistic window of about January 17–27.",
      },
      {
        question: "If I'm due October 31, will my baby be born on Halloween?",
        answer:
          "Probably not — only about 5% of babies arrive exactly on their due date, and most come within a week either side. A due date of October 31 means conception around February 7 and a likely birth anywhere in late October to early November.",
      },
    ],
  },

  "due-in-november": {
    slug: "due-in-november",
    monthName: "November",
    monthIndex: 10,
    conceptionWindow: "February 8 – March 9 of the same year",
    metaTitle: "Due in November — When Did I Conceive? (February–March, Exact Dates)",
    metaDescription:
      "Due date in November? Conception was between about February 8 and March 9 of the same year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A November due date means conception in February to early March of the same year. Find your exact date below.",
    quickAnswer:
      "If your due date is in November, you most likely conceived between February 8 and March 9 of the same year — your due date minus 266 days. Due November 1 → conceived around February 8; due November 14 → around February 21; due November 30 → around March 9. Allow ±5 days for the fertile window.",
    overviewText:
      "November due dates trace to late winter of the same year — February into early March, Valentine's season included. Below is the conception date for every November due date, the exact-date table (leap years shift February dates by one day), and the calculator for a personalized answer.",
    keywords: [
      "when did i conceive if due in november",
      "due date november when did i conceive",
      "conception date for november due date",
      "valentines baby due november",
    ],
    aboutHeading: "November Due Dates: Valentine's-Season Conceptions",
    aboutBody:
      "A November due date points to conception around Valentine's Day through early March. The pattern is real enough to show in the data: mid-November sees a small birth bump about 38 weeks after February 14. This is also the window where leap years matter most — in a leap year, conception dates computed across February 29 shift by one day versus the table on this page, which uses a non-leap reference. The calculator handles the leap-year arithmetic exactly, so use it if your dates land near the end of February.",
    faqOverrides: [
      {
        question: "If my due date is November 14, when did I conceive?",
        answer:
          "Around February 21 of the same year — November 14 minus 266 days, with a realistic window of about February 16–26. A conception on Valentine's Day itself (February 14) corresponds to a due date around November 7.",
      },
      {
        question: "Do leap years change my conception date?",
        answer:
          "By one day at most. If the 266-day span crosses February 29, the computed conception date shifts a day compared with non-leap years. The calculator above accounts for this automatically — the tables on this page use a non-leap reference year.",
      },
    ],
  },

  "due-in-december": {
    slug: "due-in-december",
    monthName: "December",
    monthIndex: 11,
    conceptionWindow: "March 10 – April 9 of the same year",
    metaTitle: "Due in December — When Did I Conceive? (March–April, Exact Dates)",
    metaDescription:
      "Due date in December? Conception was between about March 10 and April 9 of the same year (due date − 266 days). Day-by-day table + exact conception date calculator.",
    headerDescription:
      "A December due date means conception in mid-March to early April of the same year. Find your exact date below.",
    quickAnswer:
      "If your due date is in December, you most likely conceived between March 10 and April 9 of the same year — your due date minus 266 days. Due December 1 → conceived around March 10; due December 15 → around March 24; due December 31 → around April 9. The fertile window adds ±5 days.",
    overviewText:
      "December due dates come from early spring of the same year — mid-March through the first days of April. This page maps every December due date to its likely conception date, covers the Christmas-and-New-Year birth quirks, and links the calculator for an exact, cycle-adjusted window.",
    keywords: [
      "when did i conceive if due in december",
      "due date december when did i conceive",
      "conception date for december due date",
      "christmas baby conception date",
    ],
    aboutHeading: "December Due Dates: Spring Conceptions and Year-End Quirks",
    aboutBody:
      "A December due date means a spring conception — mid-March to early April. Two year-end quirks make this month unusual. First, December 25 and January 1 are among the least common birthdays in US data, largely because hospitals schedule fewer inductions and C-sections on holidays — so December-due babies cluster just before and after the holidays. Second, the tax angle is real: a baby born on December 31 counts as a dependent for the entire year, while a January 1 arrival waits a full year for that credit — one reason late-December due dates get watched closely.",
    faqOverrides: [
      {
        question: "If my due date is December 15, when did I conceive?",
        answer:
          "Around March 24 of the same year — December 15 minus 266 days, with a realistic window of about March 19–29.",
      },
      {
        question: "Will my baby be born before or after New Year?",
        answer:
          "With a late-December due date it's genuinely uncertain — full term spans weeks 37–42, so both December and January births are plausible. Statistically, fewer deliveries happen on December 25 and January 1 themselves because scheduled inductions avoid holidays; the days just around them are busier.",
      },
    ],
  },
}
