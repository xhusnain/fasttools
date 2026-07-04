// Keyword-cluster variant pages for the Future Age Calculator.
//
// Mirrors the proven youtube-thumbnail/[slug] and instagram-dp/[slug] strategy:
// one underlying tool, per-year answer-first landing pages that each own a
// distinct question query GSC already shows us matching (see
// docs/seo/2026-07-deep-fix/01-gsc-data-2026-07-03.md):
//   - "if i am 11 now how old will i be in 2050"  → 642 impressions
//   - "how old will someone be in 2040"           → 311 impressions
// Each variant answers its question in sentence 1 (quickAnswer) and ships
// unique copy; the age tables are computed in [slug]/page.tsx from targetYear.

export interface AgeVariantConfig {
  slug: string
  targetYear: number
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  definition: string
  quickAnswer: string
  overviewText: string
  keywords: string[]
  keyTakeaways: string[]
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqOverrides: Array<{ question: string; answer: string }>
}

export const ageVariants: Record<string, AgeVariantConfig> = {
  "in-2030": {
    slug: "in-2030",
    targetYear: 2030,
    toolName: "How Old Will I Be in 2030",
    metaTitle: "How Old Will I Be in 2030? — Instant Answer + Age Calculator",
    metaDescription:
      "How old will I be in 2030? Take 2030 minus your birth year (minus 1 if your birthday hasn't passed). Born 2000 → 30, born 1990 → 40. Full age table + exact-date calculator.",
    headerTitle: "How Old Will I Be in 2030?",
    headerDescription:
      "2030 minus your birth year — minus one if your birthday hasn't happened yet that year. Use the calculator for the exact answer in years, months, and days.",
    definition:
      "Your age in 2030 is 2030 minus your birth year, reduced by one if the date you're asking about falls before your birthday in 2030. Someone born in 2000 turns 30 in 2030; someone born in 1965 turns 65.",
    quickAnswer:
      "Subtract your birth year from 2030: born in 2000 you'll be 30, born in 1995 → 35, born in 1990 → 40, born in 1980 → 50, born in 1965 → 65. If your birthday hasn't happened yet on the 2030 date you care about, subtract one. Enter your exact birth date in the calculator for the answer to the day.",
    overviewText:
      "2030 is close enough to plan for concretely — it's the decade milestone people set savings targets, career goals, and retirement dates against. This page answers \"how old will I be in 2030?\" instantly: the tables below cover every birth year and every current age, and the calculator gives your exact age in years, months, and days on any date in 2030. Everything runs in your browser; your birth date is never uploaded.",
    keywords: [
      "how old will i be in 2030",
      "age in 2030",
      "how old will i be in 2030 calculator",
      "if i was born in 2000 how old will i be in 2030",
      "2030 age calculator",
    ],
    keyTakeaways: [
      "Age in 2030 = 2030 − birth year (subtract 1 if your birthday hasn't passed yet that year)",
      "Born 2000 → 30 · born 1990 → 40 · born 1980 → 50 · born 1965 → 65 in 2030",
      "The full-retirement Social Security cohort of 2030 is roughly those born 1963–1968",
      "Calculator gives the exact answer in years, months, and days for any date in 2030",
      "100% client-side — your birth date never leaves your browser",
    ],
    aboutSections: [
      {
        heading: "Why 2030 Is the Year People Plan Against",
        body: "2030 is the nearest round-decade milestone, and it shows up everywhere personal planning does: savings goals (\"net worth by 2030\"), fitness and career five-year plans, and retirement timing. If you were born between 1963 and 1968, 2030 is the window where you cross the US Social Security full-retirement ages of 66–67 — knowing your exact month matters for claiming strategy. For everyone else, the number is mostly a reality check: the gap between now and 2030 is small enough to count in birthdays.",
      },
      {
        heading: "The Off-By-One Trap",
        body: "The most common mistake in year-based age math is forgetting the birthday rule. \"2030 minus 1995\" gives 35, but a person born in November 1995 is still 34 for most of 2030 — they only turn 35 on their November birthday. If you need the age on a specific 2030 date (a wedding, a graduation, January 1), use the calculator above with the exact date rather than the year subtraction shortcut.",
      },
    ],
    proTip:
      "Planning something for a specific date in 2030? Enter that exact date in the calculator, not just the year — ages change mid-year on birthdays, and the years-months-days output tells you whether the date lands before or after yours.",
    faqOverrides: [
      {
        question: "How old will I be in 2030?",
        answer:
          "2030 minus your birth year, minus one if your birthday hasn't happened yet on the date in question. Born in 2005 → 25 in 2030. Born in 2000 → 30. Born in 1990 → 40. Born in 1980 → 50. Born in 1970 → 60. The calculator above gives the exact answer in years, months, and days for any date in 2030.",
      },
      {
        question: "If I was born in 2000, how old will I be in 2030?",
        answer:
          "30 — on your birthday in 2030. Before that day you're still 29. Someone born January 2000 is 30 for almost all of 2030; someone born December 2000 is 29 for almost all of it.",
      },
      {
        question: "Who reaches retirement age in 2030?",
        answer:
          "In the US, people born 1963–1964 reach Social Security full retirement age (67) around 2030–2031, and those born around 1968 hit the early-claiming age of 62. Many private and state pensions in Europe use 65–67, which lands on those born 1963–1965. Enter your birth date above to see your exact age on any planned retirement date in 2030.",
      },
    ],
  },

  "in-2040": {
    slug: "in-2040",
    targetYear: 2040,
    toolName: "How Old Will I Be in 2040",
    metaTitle: "How Old Will I Be in 2040? — Instant Answer + Age Calculator",
    metaDescription:
      "How old will someone be in 2040? 2040 minus their birth year (minus 1 before their birthday). Born 2000 → 40, born 2022 → 18. Age table for every birth year + exact calculator.",
    headerTitle: "How Old Will I Be in 2040?",
    headerDescription:
      "2040 minus your birth year — minus one before your birthday that year. Works for anyone: enter any birth date to get the exact age in years, months, and days.",
    definition:
      "A person's age in 2040 is 2040 minus their birth year, reduced by one if the date in question falls before their birthday that year. A child born in 2022 turns 18 in 2040; someone born in 2000 turns 40.",
    quickAnswer:
      "To find how old you — or anyone — will be in 2040, subtract the birth year from 2040: born in 2010 → 30, born in 2000 → 40, born in 1990 → 50, born in 1975 → 65. A baby born in 2022 turns 18 in 2040. Subtract one if the birthday hasn't passed yet on the date you care about; the calculator gives it to the day.",
    overviewText:
      "\"How old will someone be in 2040?\" is usually a question about other people — your kids at graduation, your parents at a milestone, a partner at retirement. This page answers it for any birth year: the tables below map every birth year and every current age to an age in 2040, and the calculator computes the exact years-months-days for a specific birth date and target date. It works both for yourself and for anyone else whose birth date you know.",
    keywords: [
      "how old will i be in 2040",
      "how old will someone be in 2040",
      "age in 2040",
      "2040 age calculator",
      "how old will my child be in 2040",
    ],
    keyTakeaways: [
      "Age in 2040 = 2040 − birth year (subtract 1 if the birthday hasn't passed yet that year)",
      "Works for anyone: a baby born 2022 turns 18 in 2040; born 2000 → 40; born 1975 → 65",
      "Third-person planning is the top use: kids' graduation, parents' milestones, partner's retirement",
      "Calculator handles exact dates, leap years, and gives years + months + days",
      "100% client-side — no birth date ever leaves your browser",
    ],
    aboutSections: [
      {
        heading: "How Old Will Someone Else Be in 2040?",
        body: "The same rule works for any person: 2040 minus their birth year, minus one before their birthday. That makes this page useful for family planning — a child born in 2022 turns 18 in 2040 (graduating high school), one born in 2026 turns 14, a parent born in 1970 turns 70, and a partner born in 1975 hits the classic retirement age of 65. Enter their birth date instead of yours in the calculator to get their exact age on any 2040 date.",
      },
      {
        heading: "2040 as a Planning Horizon",
        body: "Fourteen years out, 2040 is the horizon used by college-savings plans (a 529 opened for a newborn today matures right around 2040), 15-year mortgages signed in the mid-2020s, and mid-career pension projections. The age math is the anchor: knowing you'll be 52 — not \"about 50\" — when the mortgage clears, or that your child will be 18 — not \"college age\" — in September 2040, turns an abstract horizon into a date you can plan against.",
      },
    ],
    proTip:
      "Asking about someone else? The calculator doesn't care whose birth date you enter — use your child's or parent's date of birth to get their exact age on any date in 2040, down to the day.",
    faqOverrides: [
      {
        question: "How old will someone be in 2040?",
        answer:
          "2040 minus their birth year, minus one if their birthday hasn't happened yet on the date in question. Born 2022 → 18. Born 2010 → 30. Born 2000 → 40. Born 1990 → 50. Born 1975 → 65. Born 1960 → 80. Enter their exact birth date above for the answer in years, months, and days.",
      },
      {
        question: "How old will my child be in 2040?",
        answer:
          "Subtract their birth year from 2040. A child born in 2020 turns 20 in 2040; born in 2024 → 16; born in 2026 → 14. For a school-year answer (\"what grade?\"), remember US kids typically start kindergarten the year they turn 5–6, so a child born in 2022 is in the high-school class of ~2040–2041.",
      },
      {
        question: "How old will I be in 2040 if I am 25 now?",
        answer:
          "About 39 — add the years between now and 2040 to your current age (in 2026 that's 14 years, so 25 + 14 = 39), and subtract one if your birthday in 2040 hasn't come around yet on the date you mean. The exact answer depends on your birth date; the calculator above gives it precisely.",
      },
    ],
  },

  "in-2050": {
    slug: "in-2050",
    targetYear: 2050,
    toolName: "How Old Will I Be in 2050",
    metaTitle: "How Old Will I Be in 2050? — If I'm 11 Now, I'll Be 35 (Calculator)",
    metaDescription:
      "How old will I be in 2050? If you're 11 in 2026 you'll be 35 in 2050. Add (2050 − current year) to your age, or subtract your birth year from 2050. Full table + exact calculator.",
    headerTitle: "How Old Will I Be in 2050?",
    headerDescription:
      "Add the years between now and 2050 to your current age — an 11-year-old in 2026 will be 35. Enter your birth date for the exact answer in years, months, and days.",
    definition:
      "Your age in 2050 is 2050 minus your birth year, reduced by one if the date in question falls before your birthday that year. Equivalently: your current age plus the number of years between now and 2050.",
    quickAnswer:
      "If you are 11 now (in 2026), you will be 35 in 2050 — add the 24 years between 2026 and 2050 to your current age, and subtract one if your birthday hasn't happened yet that year. Born in 2015 → 35 in 2050, born in 2000 → 50, born in 1990 → 60. The calculator gives your exact age to the day.",
    overviewText:
      "\"How old will I be in 2050?\" is the most-asked future-age question on the web — usually phrased from a current age: \"if I am 11 now…\", \"if I am 13…\". The shortcut: add the gap between the current year and 2050 to your current age. From 2026 that gap is 24 years, so an 11-year-old will be 35, a 13-year-old 37, a 25-year-old 49. The tables below cover every current age and birth year, and the calculator computes your exact mid-century age in years, months, and days from your birth date — entirely in your browser.",
    keywords: [
      "how old will i be in 2050",
      "if i am 11 now how old will i be in 2050",
      "age in 2050",
      "2050 age calculator",
      "how old will i be in 2050 if i was born in 2010",
    ],
    keyTakeaways: [
      "From 2026, add 24 years to your current age: 11 now → 35 in 2050; 13 now → 37; 25 now → 49",
      "Or: age in 2050 = 2050 − birth year (subtract 1 before your birthday that year)",
      "Today's school kids will be mid-career adults in 2050; millennials will be at retirement's edge",
      "Calculator handles exact dates and leap years — answer in years, months, and days",
      "100% client-side — your birth date never leaves your browser",
    ],
    aboutSections: [
      {
        heading: "If I Am 11 Now, How Old Will I Be in 2050?",
        body: "35 — if \"now\" is 2026 and your birthday has already happened this year. The math: 2050 − 2026 = 24 years from now, and 11 + 24 = 35. If your birthday hasn't come around yet in 2050 on the date you mean, you'd still be 34. The same one-line trick answers every version of this question: a 9-year-old will be 33 in 2050, a 12-year-old 36, a 15-year-old 39, a 17-year-old 41. And it keeps working for any future year — that same 11-year-old will be about 85 in 2100.",
      },
      {
        heading: "What 2050 Means at Each Age",
        body: "2050 is the year most long-range public planning points at — net-zero pledges, urban plans, population projections (the UN expects ~9.7 billion people). Personally, it's further than it feels: today's primary-schoolers will be established adults in their mid-30s, today's 25-year-olds will be pushing 50 with 2050 marking their peak earning years, and anyone born before 1985 will be at or past today's retirement ages. If you're asking for a school assignment about \"you in 2050,\" the tables above give the number; the calculator gives the exact date you hit it.",
      },
    ],
    proTip:
      "The quick trick for any \"if I am X now\" question: add (2050 minus the current year) to X. In 2026 that's +24. No birth date needed for the rough answer — but enter one above and you'll get the exact day you reach that age.",
    faqOverrides: [
      {
        question: "If I am 11 now, how old will I be in 2050?",
        answer:
          "35, if \"now\" is 2026 — the gap from 2026 to 2050 is 24 years, and 11 + 24 = 35. You'd be 34 on 2050 dates before your birthday. An easy check: an 11-year-old in 2026 was born around 2014–2015, and 2050 − 2015 = 35.",
      },
      {
        question: "How old will I be in 2050 if I was born in 2010?",
        answer:
          "40 — on your birthday in 2050. Before it you're 39. Born in 2005 → 45; born in 2012 → 38; born in 2015 → 35. Subtract your birth year from 2050 and knock one off before your birthday.",
      },
      {
        question: "How old will I be in 2050 if I am 13 now?",
        answer:
          "37, counting from 2026 (13 + 24). A 12-year-old will be 36, a 14-year-old 38. If your birthday falls late in the year, you'll be one less for most of 2050. Enter your exact birth date in the calculator above for the day-precise answer.",
      },
      {
        question: "Will I be retired by 2050?",
        answer:
          "Only if you were born around 1983–1988 or earlier. US Social Security full retirement age is 67, so the 2050 retirement cohort is roughly the 1983 birth-year class. Anyone born in the 1990s will be in their 50s in 2050 — close, but still working by today's rules.",
      },
    ],
  },
}
