import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Sun, Coffee, Dumbbell, Brain, Clock, Moon, Activity,
  CheckCircle, AlertTriangle, Lightbulb, Heart, Sunrise, Eye
} from "lucide-react"

const CortisolCalculator = dynamic(
  () => import("@/components/calculators/cortisol-calculator").then(mod => mod.CortisolCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Cortisol Peak Time Calculator — Best Time to Drink Coffee"
const TOOL_NAME = "Cortisol Peak Time Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "When should you drink coffee? Free cortisol calculator — enter your wake-up time to find optimal caffeine windows, workout timing, focus blocks & ideal bedtime. Science-based.",
  path: "/calculator/cortisol-peak-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/cortisol-peak-calculator" }
  ],
  schemaOptions: {
    name: "Cortisol Peak Time Calculator | Caffeine Timing & Circadian Rhythm Optimiser",
    alternateName: "Cortisol Calculator, When to Drink Coffee Calculator, Caffeine Timing Calculator, Circadian Rhythm Calculator",
    applicationCategory: "HealthApplication",
    featureList: [
      "Calculate cortisol peak times from wake-up time",
      "Optimal caffeine windows (when coffee works best)",
      "Caffeine cut-off time for sleep protection",
      "Peak exercise and workout timing",
      "Deep focus and productivity windows",
      "Melatonin onset and ideal bedtime",
      "24-hour cortisol curve visualisation",
      "Personalised daily schedule with 8 recommendations",
      "Quick wake-up time presets",
      "Copy schedule to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculator",
}

export default function CortisolPeakCalculatorPage() {
  const toolContent = {
    toolName: "Cortisol Peak Time Calculator — Time Your Coffee, Workouts & Sleep",
    overview: "Enter your wake-up time and get a complete personalised schedule: when cortisol peaks and dips, the best times to drink coffee, optimal workout windows, deep focus blocks, and your ideal bedtime — all based on your body's natural cortisol rhythm.",

    definition: "Cortisol is the body's primary stress and alertness hormone, following a predictable 24-hour cycle called the cortisol circadian rhythm. It peaks 30 minutes after waking (the Cortisol Awakening Response) and gradually declines throughout the day, reaching its lowest point around midnight.",

    quickAnswer: "If you wake at 7:00 AM, your cortisol peaks at ~7:30 AM. Wait until 8:30-9:30 AM for your first coffee (when cortisol dips). Best workout window: 9:00-11:00 AM. No caffeine after 3:00 PM. Ideal bedtime: 11:00 PM. This calculator personalises these times to your exact wake-up time.",

    keyTakeaways: [
      "Cortisol surges 50-75% within 30 minutes of waking (Cortisol Awakening Response) — drinking coffee during this peak builds caffeine tolerance and increases jitters",
      "The optimal first coffee is 90-120 minutes after waking, when cortisol naturally dips and caffeine has maximum effect",
      "Caffeine has a 5-7 hour half-life — a 3:00 PM coffee still has half its caffeine in your system at 8-10 PM",
      "The best workout window is 2-4 hours after waking when cortisol, testosterone, and body temperature align for peak performance",
      "Melatonin onset begins ~14.5 hours after waking — bright lights and screens after this point suppress sleep quality"
    ],

    howToSteps: [
      "Enter your wake-up time using the time picker or select a quick preset (5:00 AM to 10:00 AM).",
      "Click Calculate to generate your personalised cortisol-based daily schedule.",
      "Review your optimal caffeine windows, workout timing, focus blocks, and ideal bedtime.",
      "Copy your schedule to clipboard to save it or share with friends."
    ],

    features: [
      "Cortisol Awakening Response (CAR): Calculates your exact CAR peak time — the 30-minute post-wake cortisol surge.",
      "Optimal Caffeine Windows: Two best coffee windows when cortisol dips and caffeine is most effective.",
      "Caffeine Cut-Off Time: Exact time to stop caffeine to protect sleep quality (based on 5-7hr half-life).",
      "Peak Exercise Window: When cortisol + testosterone + body temperature align for maximum training performance.",
      "Deep Focus Blocks: Two cognitive peak windows for your most demanding mental work.",
      "Sleep Timing: Melatonin onset time and ideal bedtime calculated from your wake time.",
      "24-Hour Cortisol Curve: Visual bar chart showing relative cortisol levels hour by hour.",
      "Daily Schedule: 8 time-stamped recommendations from wake to bedtime."
    ],

    useCases: [
      "Coffee Optimisation: Stop wasting your first cup during a cortisol peak — time it for maximum effect.",
      "Workout Planning: Schedule strength training and HIIT during your body's natural performance peak.",
      "Productivity Scheduling: Block deep work during cortisol-supported focus windows, meetings during dips.",
      "Sleep Improvement: Understand when melatonin kicks in and why late caffeine destroys sleep quality.",
      "Shift Workers: Calculate adjusted cortisol rhythms for non-standard wake times.",
      "Biohacking: Use cortisol timing as the foundation for stacking other optimisations (light exposure, cold plunge, supplements).",
      "Health Education: Understand why you feel energised or sluggish at specific times of day."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Sun className="h-6 w-6 text-primary" />
            What is Cortisol and Why Does Timing Matter?
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              <strong>Cortisol</strong> is a steroid hormone produced by the adrenal glands. Often called the &quot;stress hormone,&quot; it actually plays a critical role in <strong>wakefulness, energy, focus, and metabolism</strong>. Your body follows a predictable 24-hour cortisol rhythm:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 text-center">
                <Sunrise className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">Morning Peak</div>
                <div className="text-xs text-muted-foreground mt-1">Cortisol surges 50-75% within 30 min of waking. This is the Cortisol Awakening Response (CAR).</div>
              </div>
              <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center">
                <Activity className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">Gradual Decline</div>
                <div className="text-xs text-muted-foreground mt-1">After the morning peak, cortisol drops steadily with small bumps at noon and late afternoon.</div>
              </div>
              <div className="p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5 text-center">
                <Moon className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-foreground">Night Low</div>
                <div className="text-xs text-muted-foreground mt-1">Cortisol reaches its lowest ~midnight, allowing melatonin to dominate for deep sleep.</div>
              </div>
            </div>
            <p>
              <strong>Why timing matters:</strong> When you align your activities — caffeine, exercise, deep work, sleep — with your cortisol rhythm instead of fighting it, you get more energy, better focus, stronger workouts, and deeper sleep. Most people unknowingly sabotage their rhythm by drinking coffee during their cortisol peak.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Coffee className="h-6 w-6 text-primary" />
            Why You Should Delay Your Morning Coffee
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              This is the most counterintuitive finding in chronobiology: <strong>drinking coffee immediately after waking is the worst time for caffeine</strong>. Here&apos;s why:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                <h3 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Coffee at Wake-Up (Bad)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Cortisol is already at its peak (CAR)</li>
                  <li>Caffeine + high cortisol = amplified jitters and anxiety</li>
                  <li>Body builds caffeine tolerance faster</li>
                  <li>Cortisol production decreases over time (dependency)</li>
                  <li>You &quot;need&quot; coffee to feel normal instead of alert</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Coffee 90-120 Min After Waking (Best)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Cortisol has naturally dropped from CAR peak</li>
                  <li>Caffeine fills the energy gap as cortisol dips</li>
                  <li>Maximum alertness boost per mg of caffeine</li>
                  <li>Less tolerance buildup over time</li>
                  <li>Smoother energy without the crash</li>
                </ul>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg border border-border mt-2">
              <h3 className="font-semibold text-heading-accent mb-2">The Science</h3>
              <p className="text-sm text-muted-foreground">
                Caffeine blocks adenosine receptors (the &quot;sleepy&quot; signal). When cortisol is already high, there&apos;s minimal adenosine to block — so caffeine has little effect beyond increasing anxiety. When cortisol drops 90+ minutes later, adenosine starts building up — and <em>that&apos;s</em> when caffeine is most effective at blocking it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Dumbbell className="h-6 w-6 text-primary" />
            Cortisol and Exercise: The Performance Window
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The 2-4 hour window after waking is your <strong>biological performance peak</strong>. Three hormonal factors converge:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Factor</th>
                    <th className="p-3">Status at 2-4hrs Post-Wake</th>
                    <th className="p-3">Exercise Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Cortisol</td>
                    <td className="p-3 text-yellow-500 font-semibold">Elevated (post-CAR)</td>
                    <td className="p-3 text-muted-foreground">Mobilises fat and glucose for fuel, anti-inflammatory</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Testosterone</td>
                    <td className="p-3 text-green-500 font-semibold">Near daily peak</td>
                    <td className="p-3 text-muted-foreground">Supports muscle protein synthesis, strength, recovery</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Body Temperature</td>
                    <td className="p-3 text-blue-500 font-semibold">Rising</td>
                    <td className="p-3 text-muted-foreground">Improved nerve conduction, muscle elasticity, reaction time</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Evening workouts (5-7 PM) also have benefits — body temperature peaks in late afternoon, making it ideal for flexibility and endurance. But for strength, HIIT, and fat burning, the morning cortisol window is superior.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Brain className="h-6 w-6 text-primary" />
            Cortisol, Focus, and Deep Work Scheduling
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Cortisol directly supports <strong>sustained attention and cognitive performance</strong>. When cortisol is moderately elevated (not peak, not low), your brain is in an optimal state for deep, focused work. The two best windows are:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                <h3 className="font-semibold text-purple-500 mb-2">Window 1: 1-3 Hours After Waking</h3>
                <p className="text-sm text-muted-foreground">
                  Post-CAR clarity. Cortisol supports alertness without the jittery peak. Best for: writing, coding, strategic thinking, creative work.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                <h3 className="font-semibold text-purple-500 mb-2">Window 2: 5-7 Hours After Waking</h3>
                <p className="text-sm text-muted-foreground">
                  Late morning focus zone. Cortisol is moderate and stable. Best for: analytical work, problem-solving, learning new material.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Pro tip:</strong> Schedule meetings, emails, and admin tasks during your <em>low</em> cortisol periods (afternoon). Reserve your cortisol-supported windows for cognitively demanding work that requires sustained attention.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Moon className="h-6 w-6 text-primary" />
            Cortisol, Melatonin, and Sleep Quality
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Cortisol and melatonin have an <strong>inverse relationship</strong> — as cortisol falls in the evening, melatonin rises to prepare your body for sleep. Disrupting this handoff is the #1 cause of poor sleep quality:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Sleep Disruptor</th>
                    <th className="p-3">How It Wrecks Sleep</th>
                    <th className="p-3">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Late Caffeine</td>
                    <td className="p-3 text-muted-foreground">Blocks adenosine, delays sleep onset by 40+ min, reduces deep sleep by 20%</td>
                    <td className="p-3 text-green-500">No caffeine after 8 hours post-wake</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Bright Lights</td>
                    <td className="p-3 text-muted-foreground">Blue light suppresses melatonin production by up to 50%</td>
                    <td className="p-3 text-green-500">Dim lights 2-3 hours before bed</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Late Exercise</td>
                    <td className="p-3 text-muted-foreground">Intense exercise spikes cortisol, fights melatonin onset</td>
                    <td className="p-3 text-green-500">No HIIT within 3 hours of bedtime</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Stress / Screens</td>
                    <td className="p-3 text-muted-foreground">Elevates cortisol when it should be declining, delays REM sleep</td>
                    <td className="p-3 text-green-500">Wind-down routine 1 hour before bed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            Advanced Cortisol Optimisation Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Sunrise className="h-5 w-5" />
                Morning Light Exposure
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Get 10+ min of bright light within 30 min of waking</li>
                <li>Outdoor sunlight is 10-100x brighter than indoor</li>
                <li>Light exposure amplifies CAR and sets your circadian clock</li>
                <li>Cloudy days still provide 10,000+ lux (vs 500 lux indoors)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Stress and Cortisol Dysregulation
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Chronic stress flattens the cortisol curve (high all day)</li>
                <li>Signs: wired at night, exhausted in the morning</li>
                <li>Fix: consistent wake time, light exposure, exercise timing</li>
                <li>Meditation and breathwork lower afternoon cortisol 20-30%</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Cold Exposure Timing
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Cold showers spike cortisol + norepinephrine (200-300%)</li>
                <li>Best in the morning to amplify natural CAR</li>
                <li>Avoid cold exposure in the evening (disrupts sleep)</li>
                <li>1-3 min cold water is sufficient for hormonal response</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Consistent Wake Time
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>The single most impactful change for cortisol rhythm</li>
                <li>Same wake time ±30 min, including weekends</li>
                <li>Social jet lag (2+ hour weekend shift) disrupts CAR for days</li>
                <li>Consistency trains a stronger, more predictable rhythm</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "The most impactful change you can make is NOT delaying coffee — it's getting bright light within 10 minutes of waking. Sunlight exposure amplifies your CAR by 50-100%, making you more alert naturally and setting your entire circadian rhythm for the day. Do this before checking your phone.",

    faqs: [
      {
        question: "What is cortisol and what does it do?",
        answer: "Cortisol is a steroid hormone produced by the adrenal glands that plays a key role in wakefulness, energy metabolism, immune function, and stress response. It follows a 24-hour rhythm: peaking 30 minutes after waking (Cortisol Awakening Response), declining throughout the day, and reaching its lowest point around midnight. Despite being called the 'stress hormone,' cortisol is essential for normal alertness, focus, and energy."
      },
      {
        question: "When does cortisol peak after waking?",
        answer: "Cortisol peaks approximately 30 minutes after waking in a phenomenon called the Cortisol Awakening Response (CAR). During CAR, cortisol levels surge 50-75% above baseline. This is your body's natural alarm system — it mobilises energy, increases alertness, and prepares you for the day. The peak lasts roughly 30-60 minutes before cortisol begins its gradual decline."
      },
      {
        question: "Why should I wait 90 minutes to drink coffee?",
        answer: "During the first 90 minutes after waking, cortisol is at its highest (CAR). Caffeine during this peak: (1) Provides minimal extra alertness since cortisol already has you alert; (2) Increases jitters and anxiety due to cortisol + caffeine stacking; (3) Builds caffeine tolerance faster; (4) Can reduce your body's natural cortisol production over time. Waiting 90 minutes means caffeine fills the natural energy dip as cortisol falls — giving you maximum effect per cup."
      },
      {
        question: "What is the best time to drink coffee based on cortisol?",
        answer: "The best coffee windows are 90-180 minutes after waking (first window) and 5.5-7 hours after waking (second window). These align with natural cortisol dips where caffeine is most effective. For someone waking at 7:00 AM: first coffee at 8:30-10:00 AM, second coffee at 12:30-2:00 PM. Stop all caffeine 8+ hours before bedtime to protect sleep quality."
      },
      {
        question: "When should I stop drinking caffeine?",
        answer: "Stop caffeine at least 8 hours before bedtime — ideally 10 hours for optimal sleep. Caffeine has a half-life of 5-7 hours, meaning half the caffeine from a 3:00 PM coffee is still in your system at 8-10 PM. Research shows even caffeine consumed 6 hours before bed reduces total sleep time by over 1 hour and significantly reduces deep sleep (slow-wave sleep), even if you don't feel it."
      },
      {
        question: "What is the best time to work out based on cortisol?",
        answer: "The optimal exercise window is 2-4 hours after waking. At this point, cortisol is elevated (providing energy mobilisation), testosterone is near its daily peak (supporting strength and recovery), and body temperature is rising (improving muscle function and reducing injury risk). This combination makes it the best time for strength training, HIIT, and high-performance exercise. Evening workouts (5-7 PM) are also effective for endurance and flexibility."
      },
      {
        question: "How does cortisol affect sleep?",
        answer: "Cortisol and melatonin have an inverse relationship. As cortisol drops in the evening, melatonin rises to trigger sleepiness. Anything that artificially elevates cortisol at night — late caffeine, intense exercise, stress, bright screens — suppresses melatonin and disrupts sleep onset, reduces deep sleep, and fragments sleep architecture. Cortisol should be at its lowest during your sleep window."
      },
      {
        question: "Does the cortisol rhythm change for night shift workers?",
        answer: "Yes. Night shift workers often have a disrupted or inverted cortisol rhythm. The body tries to maintain the light-based rhythm even when work schedules conflict. To partially adapt: maintain a consistent 'wake' time (even if it's 6 PM), get bright light immediately upon waking, avoid light before sleep (blackout curtains), and use this calculator with your actual wake-up time to plan caffeine and activity timing."
      },
      {
        question: "Can I reset my cortisol rhythm?",
        answer: "Yes. The three most powerful resets: (1) Consistent wake time (±30 minutes, including weekends) — this is the single most impactful change; (2) Morning bright light exposure within 30 minutes of waking — sunlight triggers cortisol production and sets your circadian clock; (3) Regular meal timing — eating within 1-2 hours of waking reinforces cortisol rhythm. Most people notice improvement within 3-7 days of consistent practice."
      },
      {
        question: "What is the Cortisol Awakening Response (CAR)?",
        answer: "CAR is a 50-75% surge in cortisol that occurs within 30 minutes of waking up. It's triggered by light exposure and the physical act of becoming upright. CAR serves several functions: mobilises glucose for brain fuel, increases alertness and cognitive function, activates the immune system, and prepares the body for the day's physical demands. A strong CAR is associated with better health outcomes; a blunted CAR is linked to burnout, depression, and chronic fatigue."
      },
      {
        question: "Does morning sunlight really affect cortisol?",
        answer: "Yes, significantly. Bright light (especially sunlight at 10,000+ lux) within 30 minutes of waking amplifies your CAR by 50-100%, increases serotonin production (which converts to melatonin at night), and synchronises your suprachiasmatic nucleus (master circadian clock). Even 10 minutes of outdoor light on a cloudy day provides more circadian signal than an hour of indoor lighting. This is the single most impactful free biohack available."
      },
      {
        question: "How does stress affect the cortisol rhythm?",
        answer: "Chronic stress flattens the cortisol curve — instead of a high morning peak and low evening trough, cortisol stays moderately elevated all day. Symptoms: feeling 'wired but tired,' difficulty falling asleep despite exhaustion, brain fog in the morning, and energy spikes at night. Long-term cortisol dysregulation is associated with weight gain (especially abdominal), immune suppression, anxiety, and insomnia. The fix is restoring the rhythm through consistent timing, not just 'reducing stress.'"
      },
      {
        question: "Should I take cortisol supplements?",
        answer: "No. Cortisol supplements (hydrocortisone) are prescription medications for specific conditions like adrenal insufficiency. Healthy individuals should not supplement cortisol — it can suppress your body's natural production. Instead, optimise your natural cortisol rhythm through: consistent wake times, morning light exposure, timed exercise, strategic caffeine use, and stress management. These lifestyle interventions are more effective and safer than any supplement."
      },
      {
        question: "How does cold exposure affect cortisol?",
        answer: "Cold exposure (cold showers, ice baths) causes a sharp spike in cortisol and norepinephrine (200-300% increase). When done in the morning, this amplifies your natural CAR and boosts alertness for hours. However, cold exposure in the evening can elevate cortisol when it should be declining, potentially disrupting sleep. Best practice: 1-3 minutes of cold water in the morning, avoid within 3 hours of bedtime."
      },
      {
        question: "Is this calculator based on real science?",
        answer: "Yes. The cortisol timing model is based on published chronobiology and endocrinology research, including: the Cortisol Awakening Response (CAR) documented by Pruessner et al., circadian cortisol rhythm research by Weitzman et al., caffeine-cortisol interaction studies by Lovallo et al., and exercise timing research from the Journal of Endocrinology. However, individual cortisol rhythms vary — this calculator provides general guidance based on average circadian patterns. Consult a healthcare provider for personalised medical advice."
      },
      {
        question: "What affects individual cortisol rhythm variation?",
        answer: "Several factors create individual variation: (1) Chronotype — early birds have earlier, stronger CAR; night owls have a delayed, flatter curve; (2) Age — CAR amplitude decreases with age; (3) Sleep quality — poor sleep blunts the next morning's CAR; (4) Genetics — clock gene variants affect rhythm timing; (5) Season — CAR is stronger in summer with more morning light; (6) Medications — birth control, corticosteroids, and some antidepressants alter cortisol patterns."
      },
      {
        question: "How does alcohol affect cortisol and sleep?",
        answer: "Alcohol initially suppresses cortisol but triggers a rebound spike 2-4 hours later (often at 2-3 AM). This cortisol rebound is why you wake up in the middle of the night after drinking. Alcohol also suppresses REM sleep and reduces deep sleep by 20-40%. Even 1-2 drinks within 3 hours of bedtime measurably disrupts sleep architecture. For best cortisol rhythm, avoid alcohol within 3-4 hours of bedtime."
      },
      {
        question: "Can I use this for intermittent fasting timing?",
        answer: "Yes. Cortisol timing aligns well with intermittent fasting. Since cortisol mobilises stored energy in the morning, your body is naturally primed for a fasted state. Many people find it easy to delay eating until 2-4 hours after waking (when cortisol drops and true hunger emerges). A common approach: wake at 7 AM, first meal at 10-11 AM, last meal by 7 PM. This aligns eating with natural cortisol-supported digestion windows."
      },
      {
        question: "Does meditation lower cortisol?",
        answer: "Yes. Research shows regular meditation reduces cortisol by 20-30%, particularly afternoon and evening levels — which is exactly when you want cortisol lower. Even 10 minutes of mindfulness meditation shows measurable cortisol reduction. The best timing for meditation is during the afternoon trough (8-10 hours after waking) to support the natural evening decline and prepare for better sleep. Morning meditation is also beneficial for managing the CAR if you're prone to morning anxiety."
      },
      {
        question: "How does cortisol relate to weight gain?",
        answer: "Chronically elevated cortisol promotes fat storage, especially visceral (abdominal) fat, by: (1) Increasing appetite and cravings for high-calorie foods; (2) Promoting insulin resistance; (3) Breaking down muscle tissue for energy (reducing metabolic rate); (4) Directing fat storage to the abdomen. Fixing the cortisol rhythm — not just 'reducing cortisol' — is key. The goal is a strong morning peak (energy) with a low evening trough (recovery). This calculator helps you structure your day to achieve this pattern."
      },
      {
        question: "What time should I take supplements like vitamin D, magnesium, or ashwagandha?",
        answer: "Align supplements with your cortisol rhythm: Vitamin D — morning (it supports cortisol production and mimics sunlight signalling). Magnesium — evening, 1-2 hours before bed (supports GABA, lowers cortisol, improves sleep quality). Ashwagandha — evening (shown to reduce evening cortisol by 30% in clinical trials). Omega-3s — with your largest meal for absorption. Caffeine-containing supplements — follow the same timing rules as coffee (90+ min after waking, 8+ hours before bed)."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "Time Duration Calculator", href: "/calculator/time-duration" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Cortisol Peak Time Calculator",
        description: "Enter your wake-up time to find the best times for coffee, workouts, deep focus & sleep — based on your cortisol rhythm.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: TOOL_NAME, href: "/calculator/cortisol-peak-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CortisolCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "When should you drink coffee? Free cortisol calculator — enter your wake-up time to find optimal caffeine windows, workout timing, focus blocks & ideal bedtime. Science-based.",
        path: "/calculator/cortisol-peak-calculator"
      }}
    />
  )
}
