import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const LoveCalculator = dynamic(() => import("@/components/calculators/love-calculator").then(mod => mod.LoveCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Heart, Brain, Percent, Shield, BookOpen, Users } from "lucide-react"
import { GTable } from "@/ui/gtable"

const baseMetadata = createMetadata({
  title: "Love Calculator - Relationship Compatibility Test",
  description:
    "Test name-based relationship compatibility and love percentage. Fun, private, and instant.",
  path: "/calculator/love-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Love Calculator", href: "/calculator/love-calculator" }
  ],
  schemaOptions: {
    name: "Love Calculator",
    alternateName: "Love Compatibility Calculator, Love Percentage Calculator, Love Meter",
    applicationCategory: "EntertainmentApplication",
    featureList: [
      "Enter two names for an instant compatibility percentage",
      "Works for couples, crushes, friends, and celebrity pairings",
      "Shareable results for social media",
      "Runs entirely in your browser — nothing is stored",
      "Free, no signup, mobile friendly"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Entertainment",
}

export default function LoveCalculatorPage() {
  const toolContent = {
    toolName: "Love Calculator",
    definition:
      "A love calculator is an entertainment tool that turns two names into a playful compatibility score and relationship message.",
    quickAnswer:
      "Enter two names to get a fun love percentage and compatibility message. The result is for entertainment, sharing, and party games, not a real relationship assessment.",
    keyTakeaways: [
      "The score is generated from the letters in both names — it's a game, not science",
      "Use it for fun with friends, social posts, and party ice-breakers",
      "Name-based compatibility does not predict real relationship success",
      "Communication, respect, values, and trust matter more than any score",
      "Share the result only when both people are comfortable with it",
    ],
    overview: "Enter two names and get an instant compatibility percentage you can laugh about and share. The score is derived from the letters in both names, so the same pair always gets the same result — but it's a game, not a verdict on your relationship.",

    howToSteps: [
      "Enter Names: Enter first person's name and second person's name.",
      "Click Calculate: Click the calculate button to see your match.",
      "Get Results: See the compatibility percentage and message, then share it if you like."
    ],

    features: [
      "Love Percentage",
      "Compatibility Message",
      "Instant Results",
      "Social Sharing",
      "Consistent Scores",
      "Fun & Entertaining",
      "Mobile Friendly",
      "No Signup",
      "Private (runs in your browser)"
    ],

    useCases: [
      "Couples: A playful test for dating, long-term, or married pairs.",
      "Crushes: A low-stakes ice-breaker or conversation starter.",
      "Friends: Compare scores across a friend group at a party.",
      "Entertainment: Test celebrity couples, fictional characters, or random pairings for social posts."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            What This Tool Is (and Isn't)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A love calculator takes two names and returns a compatibility percentage between 0 and 100. It belongs to the same family of games as FLAMES and MASH — fun to play, easy to share, and completely unscientific. There is no research showing that the letters in two people's names predict anything about how well they get along.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            That honesty is worth stating up front, because the tool is genuinely fun when you treat it that way: as an ice-breaker with a crush, a party game with friends, or a quick laugh testing celebrity couples. What it can't do is tell you whether a real relationship will work — that depends on how two people actually treat each other, not on their names.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            How the Score Is Calculated
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The algorithm is deterministic: the same two names always produce the same percentage. In broad strokes, it works like this:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">The classic letter-value method</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div><strong>Step 1:</strong> Convert each letter to a number (A=1, B=2, … Z=26)</div>
                <div><strong>Step 2:</strong> Sum the values for both names</div>
                <div><strong>Step 3:</strong> Mix in shared letters — names with more letters in common score differently</div>
                <div><strong>Step 4:</strong> Map the combined value onto a 0–100 scale</div>
              </div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Why every site gives a different number</h3>
              <p className="text-sm text-muted-foreground">
                There is no standard formula. Each site picks its own arbitrary math — some count occurrences of the letters in the word &quot;LOVE&quot;, some use numerology-style digit reduction, some just hash the names. Enter the same couple on five different sites and you'll get five different percentages, which is itself a good reminder that the number is arbitrary.
              </p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Small input changes matter, too: &quot;Katherine + Sam&quot; and &quot;Katie + Sam&quot; will usually score differently, because the letters are different. If your score disappoints, try a nickname — that's the level of seriousness this deserves.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Percent className="h-6 w-6 text-primary" />
            What the Percentage Ranges Mean
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The result comes with a label based on where it lands:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Percentage</th>
                  <th className="p-3 text-left">Label</th>
                  <th className="p-3 text-left">Vibe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">91% - 100%</td><td className="p-3">Perfect Match</td><td className="p-3 text-muted-foreground">Soulmate territory — screenshot-worthy.</td></tr>
                <tr><td className="p-3 font-semibold">61% - 90%</td><td className="p-3">Great Match</td><td className="p-3 text-muted-foreground">Strong connection, solid bragging rights.</td></tr>
                <tr><td className="p-3 font-semibold">31% - 60%</td><td className="p-3">Moderate Match</td><td className="p-3 text-muted-foreground">Room to grow — or to retest with nicknames.</td></tr>
                <tr><td className="p-3 font-semibold">0% - 30%</td><td className="p-3">Challenging Match</td><td className="p-3 text-muted-foreground">Opposites attract, allegedly.</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Where Name-Matching Games Come From
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Name-based matchmaking games are much older than the internet. Schoolyards around the world have played <strong>FLAMES</strong> for generations: cross out the letters the two names share, count what's left, and cycle through F-L-A-M-E-S (Friends, Lovers, Affectionate, Marriage, Enemies, Siblings) to land on a prediction. American sleepovers had <strong>MASH</strong> (Mansion, Apartment, Shack, House). Further back, numerology traditions like Gematria assigned numbers to letters and read meaning into the sums — the same letter-to-number trick modern compatibility games still use.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Online versions took off in the early 2000s and have stayed popular for the same reason the paper games did: they give two people an excuse to talk about whether they'd be a good match. The pencil-and-paper math just moved into the browser.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            What Actually Predicts Relationship Success
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Since we've been clear the score is a game, here's the real answer. Decades of relationship research — most famously by the Gottman Institute — point to factors that have nothing to do with names:
          </p>
          <ul className="text-base text-muted-foreground space-y-2 list-disc ml-6">
            <li><strong>How you argue:</strong> Contempt, stonewalling, and criticism during conflict predict breakups far better than how often couples fight.</li>
            <li><strong>Responding to bids:</strong> Turning toward a partner's small attempts at connection — a comment, a joke, a touch — is strongly associated with lasting relationships.</li>
            <li><strong>Shared values and goals:</strong> Alignment on money, family, and lifestyle reduces the chronic friction that erodes couples over time.</li>
            <li><strong>Repair after conflict:</strong> Couples who can de-escalate and apologize recover; couples who let resentment compound don't.</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            If a percentage on a screen prompts a fun conversation about any of that, it has done more for your relationship than the number ever could.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy: Names Never Leave Your Browser
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Everything runs client-side in JavaScript. The names you enter are never sent to a server, never logged, and never stored — close the tab and they're gone. There's no account, no tracking of your inputs, and no database of who tested whom. Test your crush's name with confidence; nobody will know but you.
          </p>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How does the score work?",
        answer: "The calculator converts the letters of both names into numbers, factors in shared letters, and maps the result onto a 0-100 scale. It's deterministic — the same two names always give the same percentage — but the formula is arbitrary and made for entertainment."
      },
      {
        question: "Is the result accurate?",
        answer: "No, and it isn't meant to be. There's no scientific link between the letters in two names and how compatible the people are. Treat the percentage as a party game, not a relationship assessment."
      },
      {
        question: "Why do different websites give different percentages for the same names?",
        answer: "Because there's no standard formula. Every site invents its own math — letter values, numerology reductions, or simple hashes — so the same couple can score 34% on one site and 89% on another. That inconsistency is the clearest proof the numbers are just for fun."
      },
      {
        question: "What's the difference between this and FLAMES?",
        answer: "FLAMES is the classic pencil-and-paper game that predicts a relationship type (Friends, Lovers, Affectionate, Marriage, Enemies, Siblings) by crossing out shared letters and counting the remainder. This tool outputs a percentage instead of a category. Both are name games — neither is a real compatibility measure."
      },
      {
        question: "Does it work for friendships and same-gender couples?",
        answer: "Yes. The math only looks at letters, so it works identically for any two names: romantic partners of any gender, friends, siblings, coworkers, pets, or fictional characters."
      },
      {
        question: "What's a good score?",
        answer: "Results are labeled Perfect Match (91-100%), Great Match (61-90%), Moderate Match (31-60%), and Challenging Match (0-30%). But a low score means nothing about a real relationship — plenty of happy couples would 'fail' a name game, and that's fine."
      },
      {
        question: "Can it predict marriage or whether we'll stay together?",
        answer: "No. Relationship outcomes depend on communication, trust, shared values, and how couples handle conflict — none of which a name algorithm can see. Don't make any real decision based on a percentage."
      },
      {
        question: "Do nicknames change the result?",
        answer: "Yes. 'Katherine + Sam' and 'Katie + Sam' contain different letters, so they score differently. There's no 'correct' version of a name to use — pick whichever gives the funnier result."
      },
      {
        question: "Can I test celebrity couples or fictional characters?",
        answer: "Absolutely — it's one of the most popular uses. Testing famous pairs, TV couples, or unlikely combinations makes for good social media content and group entertainment."
      },
      {
        question: "Is it free and private?",
        answer: "Yes. There's no cost, no signup, and no limit on how many pairs you test. All calculations run locally in your browser, so the names you enter are never transmitted or stored anywhere."
      }
    ],

    relatedTools: [
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Future Age Predictor", href: "/fun-tools/future-age" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Love Calculator & Compatibility Test",
        description: "Enter two names to estimate relationship and friendship compatibility in a fun, private way.",
        titleSize: "large",
        descriptionSize: "medium",
        color: "pink"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Love Calculator", href: "/calculator/love-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <LoveCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Love Calculator - Compatibility Test",
        description: "Test name-based compatibility and love percentage instantly with this fun and private love calculator.",
        path: "/calculator/love-calculator"
      }}
    />
  )
}
