import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PomodoroTimer = dynamic(
  () => import("@/components/productivity/pomodoro-timer").then((mod) => mod.PomodoroTimer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Pomodoro Timer",
  description:
    "Free online Pomodoro timer with ambient sounds, task tracking, and customizable sessions. Stay focused with rain, cafe, and noise sounds. No signup needed.",
  metaTitle: "Free Pomodoro Timer Online - Focus Timer with Sounds",
  metaDescription:
    "Free online Pomodoro timer with ambient sounds, task tracking, and customizable sessions. Stay focused with rain, cafe, white noise & more. No signup needed.",
  path: "/fun-tools/pomodoro-timer",

  schemaOptions: {
    applicationCategory: "ProductivityApplication",
    description:
      "Free online Pomodoro focus timer with 8 ambient sounds (rain, cafe, brown/white/pink noise, fireplace, ocean, forest), task list with pomodoro estimates, customizable work/break durations, session tracking, keyboard shortcuts, browser notifications, and fullscreen focus mode.",
    featureList: [
      "Customizable Pomodoro (1-120 min), Short Break (1-30 min), Long Break (1-60 min)",
      "8 ambient sounds: Rain, Cafe, Brown Noise, White Noise, Pink Noise, Fireplace, Ocean, Forest",
      "Web Audio API procedural noise (zero file downloads)",
      "Task list with estimated pomodoros and completion tracking",
      "Estimated finish time based on remaining tasks",
      "Daily session counter with visual progress dots",
      "Browser Notification API alerts when timer completes",
      "Keyboard shortcuts: Space (start/pause), R (reset), S (skip), F (fullscreen)",
      "Fullscreen focus mode",
      "Auto-start next timer option",
      "LocalStorage persistence (settings, tasks, daily count)",
      "Color-coded modes: red (focus), green (short break), blue (long break)",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Focus Timer",
      "Study Timer",
      "Tomato Timer",
      "Productivity Timer",
      "25-Minute Timer",
    ],
  },

  header: {
    title: "Free Pomodoro Timer Online",
    description:
      "Stay focused with customizable work sessions, ambient sounds, and task tracking. Keyboard shortcuts, notifications, and fullscreen mode included.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Pomodoro Timer", href: "/fun-tools/pomodoro-timer" },
  ],

  content: {
    definition:
      "A Pomodoro Timer is a time management tool based on the Pomodoro Technique, which structures work into focused intervals (typically 25 minutes) separated by short breaks (5 minutes), with a longer break (15-30 minutes) after every 4 sessions — helping maintain focus, prevent burnout, and increase productivity.",

    quickAnswer:
      "Click Start to begin a 25-minute focus session. When the timer ends, take a 5-minute break. After 4 sessions, take a 15-minute long break. Add tasks to track your pomodoros, turn on ambient sounds for focus, and customize all durations in Settings. Keyboard shortcuts: Space to start/pause, R to reset, S to skip.",

    keyTakeaways: [
      "The Pomodoro Technique uses 25-minute focused work intervals with 5-minute breaks",
      "After 4 pomodoros, take a 15-30 minute long break to recharge",
      "Ambient sounds like rain, cafe noise, and brown noise can improve focus by masking distractions",
      "The technique is especially effective for students, remote workers, and people with ADHD",
      "Tracking tasks with pomodoro estimates helps you plan your day and predict finish times",
    ],

    overview:
      "This Pomodoro timer helps you work in focused intervals with built-in ambient sounds and task tracking. Start a 25-minute focus session (or customize to any duration), then take a 5-minute break. After 4 sessions, take a longer break. The timer includes 8 ambient sounds generated via Web Audio API (rain, cafe, white/brown/pink noise, fireplace, ocean, forest), a task list with pomodoro estimates and estimated finish time, session counter, keyboard shortcuts, browser notifications, and fullscreen focus mode. All settings and tasks are saved in your browser.",

    howToSteps: [
      "Click 'Start' or press Space to begin a 25-minute focus session. The timer counts down with a progress bar.",
      "When the timer ends, you'll get a browser notification. Take a 5-minute short break (or 15-minute long break after 4 sessions).",
      "Add tasks below the timer to track what you're working on. Each task shows estimated vs completed pomodoros.",
      "Turn on ambient sounds (rain, cafe, white noise, etc.) to help you focus. Adjust volume with the slider. Customize all durations in Settings.",
    ],

    features: [
      "Three timer modes: Focus (25 min default), Short Break (5 min), Long Break (15 min) — all customizable",
      "8 ambient sounds: Rain, Cafe, Brown Noise, White Noise, Pink Noise, Fireplace, Ocean, Forest",
      "Procedural noise generation via Web Audio API — zero file downloads, works instantly",
      "Task list with pomodoro estimates, completion tracking, and estimated finish time",
      "Daily pomodoro counter with visual dot progress",
      "Browser notifications when timer completes (even in background tabs)",
      "Keyboard shortcuts: Space (start/pause), R (reset), S (skip), F (fullscreen)",
      "Fullscreen distraction-free focus mode",
      "Auto-start next timer option for seamless workflow",
      "Color-coded modes: red for focus, green for short break, blue for long break",
      "Timer shows in browser tab title while running",
      "All settings and tasks persist via localStorage — no account needed",
    ],

    useCases: [
      "Students studying for exams with focused 25-minute study blocks",
      "Remote workers managing deep work sessions throughout the day",
      "Writers and creatives maintaining focus during long projects",
      "Developers coding in focused sprints with regular break reminders",
      "People with ADHD using structured intervals to maintain attention",
      "Anyone learning a new skill with consistent, timed practice sessions",
      "Freelancers tracking billable pomodoros per client task",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is the Pomodoro Technique?</h3>
          <p>
            The Pomodoro Technique was created by Francesco Cirillo in the late 1980s. The name comes
            from the Italian word for &quot;tomato&quot; — Cirillo used a tomato-shaped kitchen timer as a
            university student. The method is simple: work for 25 minutes (one &quot;pomodoro&quot;), take
            a 5-minute break, and after 4 pomodoros take a longer 15-30 minute break. This rhythm
            matches the brain&apos;s natural attention cycles and prevents mental fatigue.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Ambient Sounds Help You Focus</h3>
          <p>
            Research shows that moderate ambient noise (around 70 dB — like a coffee shop) can boost
            creative thinking and concentration. Nature sounds like rain and ocean waves reduce cortisol
            (the stress hormone) by up to 18%. Brown and pink noise are especially popular with people
            who have ADHD because they mask distracting sounds without being harsh. This timer generates
            all noise sounds procedurally using the Web Audio API — no files to download, no buffering,
            and they play instantly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tips for Effective Pomodoro Sessions</h3>
          <p>
            <strong>1.</strong> Before starting, write down your tasks and estimate how many pomodoros
            each will take. <strong>2.</strong> During a pomodoro, resist all interruptions — if
            something comes up, write it down and handle it during a break. <strong>3.</strong> During
            breaks, stand up, stretch, look away from screens, and hydrate. <strong>4.</strong> After
            4 pomodoros, your long break should be truly restful — walk, eat, or rest. <strong>5.</strong>{" "}
            If 25 minutes feels too short or too long, customize your durations — many people prefer
            50/10 or 45/15.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Pomodoro Technique for ADHD</h3>
          <p>
            Many people with ADHD find the Pomodoro Technique helpful because it breaks overwhelming tasks into manageable chunks, provides external structure, and builds in regular breaks to prevent hyperfocus burnout. The countdown creates a sense of urgency that can help initiate tasks (overcoming the &quot;starting problem&quot;), and ambient sounds mask distracting environmental noise. If 25 minutes feels too long, start with 15 and gradually increase as your concentration stamina builds.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Optimal Work/Break Ratios by Task Type</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Task type</th>
                <th className="text-left py-2 px-2 text-foreground">Suggested cycle</th>
                <th className="text-left py-2 px-2 text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Routine email / admin</td>
                <td className="py-2 px-2">15 / 5</td>
                <td className="py-2 px-2">Short cycles work for low-cognitive tasks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Most knowledge work</strong></td>
                <td className="py-2 px-2"><strong>25 / 5 (classic)</strong></td>
                <td className="py-2 px-2">Cirillo&apos;s original — proven sweet spot</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Writing / coding</td>
                <td className="py-2 px-2">50 / 10</td>
                <td className="py-2 px-2">Deep work needs longer flow state windows</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Studying / cramming</td>
                <td className="py-2 px-2">25 / 5 or 45 / 15</td>
                <td className="py-2 px-2">Frequent breaks aid memory consolidation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Creative ideation</td>
                <td className="py-2 px-2">45 / 15 + walk</td>
                <td className="py-2 px-2">Insight often comes during break, not focus</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Math / problem solving</td>
                <td className="py-2 px-2">52 / 17 (DeskTime ratio)</td>
                <td className="py-2 px-2">Highest productivity ratio per DeskTime study</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Repetitive (data entry, transcription)</td>
                <td className="py-2 px-2">90 / 20</td>
                <td className="py-2 px-2">Matches ultradian rhythm cycles</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Science: Why Timed Work Works</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Ultradian rhythms:</strong> Your brain operates in 90-120 minute cycles of high focus → fatigue. Pomodoros let you ride the peaks without crashing.</li>
            <li><strong>Parkinson&apos;s Law:</strong> Work expands to fill the time available. A 25-minute deadline forces tighter scoping and faster decisions.</li>
            <li><strong>Decision fatigue prevention:</strong> Predetermined breaks remove the &quot;should I take a break?&quot; decision, conserving willpower for actual work.</li>
            <li><strong>Memory consolidation:</strong> Short breaks help the hippocampus encode short-term memory into long-term storage — especially valuable for studying.</li>
            <li><strong>Anti-rumination effect:</strong> Anxious thoughts and worry need open mental space to spiral. Focused timer-tracked work crowds them out.</li>
            <li><strong>Visible progress feedback:</strong> Watching the countdown decrease creates a sense of forward motion that boosts dopamine.</li>
            <li><strong>Stopping problem solved:</strong> The hardest part of work is often stopping — pomodoros mandate stops, preventing burnout creep.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Pomodoro Timer vs Forest, Be Focused, Focus@Will</h3>
          <p>
            <strong>Forest (mobile app):</strong> gamifies pomodoros by planting virtual trees. Beautiful UX but requires app install and limited customization. <strong>Be Focused (Mac/iOS):</strong> integrates with task management; paid Pro version. <strong>Focus@Will:</strong> subscription-based ambient music curated for focus. <strong>This tool&apos;s advantages:</strong> (1) browser-based — no install, works on any device including locked-down work computers; (2) 8 ambient sounds built-in via Web Audio API (zero downloads); (3) fully customizable durations from 1-120 min; (4) free forever, no signup; (5) task tracking + estimated finish time without a paywall; (6) keyboard shortcuts for fast control. Trade-off: no cloud sync, no team collaboration, no statistics across devices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Ambient Sound Guide</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Brown noise:</strong> deepest, most relaxing — masks low-frequency office HVAC and traffic. Best for ADHD focus.</li>
            <li><strong>Pink noise:</strong> balanced lower frequencies — feels natural like rainfall, used in sleep studies for memory consolidation.</li>
            <li><strong>White noise:</strong> all frequencies equal — masks high-pitched distractions (chatter, clicking) but can sound harsh at length.</li>
            <li><strong>Rain:</strong> nature sound proven to reduce cortisol by ~18%. Steady drumming masks distractions without surprises.</li>
            <li><strong>Cafe ambience:</strong> ~70 dB has been shown to boost creative thinking (the &quot;coffee shop effect&quot; — University of Illinois study).</li>
            <li><strong>Ocean waves:</strong> meditative, calming — good for anxious focus or pre-work-break wind-down.</li>
            <li><strong>Forest sounds:</strong> birds + wind in trees — restorative for nature-deprived urban workers.</li>
            <li><strong>Fireplace:</strong> warm, intimate — good for evening focus sessions.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Browser Offline</h3>
          <p>
            All timer logic, task tracking, sound generation, and session counting runs in your browser. Nothing is sent to any server. LocalStorage persists your settings, task list, and daily session count locally — clear browser data to reset. The ambient sounds use the Web Audio API to generate noise procedurally (zero downloads, infinite duration). Once the page loads, it works fully offline — useful when you need to focus without WiFi distractions.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Most productivity experts suggest 8-12 pomodoros per day (about 4-6 hours of deep work). Quality matters more than quantity. Use the task list to plan your day and the estimated finish time to set realistic expectations.",

    faqs: [
      {
        question: "What is the Pomodoro Technique?",
        answer:
          "The Pomodoro Technique is a time management method created by Francesco Cirillo in the late 1980s. You work in focused 25-minute intervals (called 'pomodoros') followed by 5-minute breaks. After 4 pomodoros, take a longer 15-30 minute break. The name comes from the Italian word for 'tomato' — Cirillo used a tomato-shaped kitchen timer.",
      },
      {
        question: "How long is a Pomodoro session?",
        answer:
          "A standard Pomodoro is 25 minutes of focused work followed by a 5-minute break. However, you can customize this to any duration — many people prefer 30/5, 45/15, or 50/10 depending on their task and attention span.",
      },
      {
        question: "Does the Pomodoro Technique work for ADHD?",
        answer:
          "Yes, many people with ADHD find the Pomodoro Technique helpful because it breaks tasks into manageable chunks, provides external structure, and builds in regular breaks. The countdown creates urgency that helps overcome the 'starting problem'. If 25 minutes feels too long, start with 15.",
      },
      {
        question: "What should I do during Pomodoro breaks?",
        answer:
          "Stand up, stretch, get water, look away from screens, take a short walk, or do light breathing exercises. Avoid checking social media or starting new tasks — breaks should be truly restful to recharge your focus.",
      },
      {
        question: "What are the best sounds for focus and concentration?",
        answer:
          "Research shows that low-to-moderate ambient noise improves concentration. Rain sounds, cafe ambiance, brown noise, and nature sounds are most effective. Brown and pink noise are especially popular for ADHD because they mask distractions without being harsh.",
      },
      {
        question: "How many Pomodoros should I do per day?",
        answer:
          "Most productivity experts suggest 8-12 pomodoros (about 4-6 hours of focused work) per day. Quality matters more than quantity — even 4-6 well-focused pomodoros is an excellent day of deep work.",
      },
      {
        question: "Can I change the timer length?",
        answer:
          "Yes, all durations are fully customizable. Click Settings to adjust Focus time (1-120 min), Short Break (1-30 min), Long Break (1-60 min), and the number of pomodoros before a long break.",
      },
      {
        question: "Does the timer work in the background?",
        answer:
          "Yes. The timer continues running when you switch tabs or minimize the browser. You'll receive a browser notification when the timer completes. The remaining time also shows in the browser tab title.",
      },
      {
        question: "Is the Pomodoro Technique scientifically proven?",
        answer:
          "While no single clinical trial validates the technique as a whole, it aligns with well-established research on attention spans (20-50 minute focus windows), the spacing effect, and the cognitive benefits of regular breaks.",
      },
      {
        question: "What keyboard shortcuts are available?",
        answer:
          "Space to start/pause the timer, R to reset, S to skip to the next session, and F to toggle fullscreen focus mode.",
      },
    ],

    relatedTools: [
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Future Age Predictor", href: "/fun-tools/future-age" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "All Fun Tools", href: "/fun-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PomodoroTimerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PomodoroTimer />)} />
}
