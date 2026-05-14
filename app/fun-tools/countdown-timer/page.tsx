import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const CountdownTimer = dynamic(
  () => import("@/components/fun-tools/countdown-timer").then((mod) => mod.CountdownTimer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Countdown Timer & Stopwatch",
  description: "Free online countdown timer and stopwatch. Set a custom time or pick a preset, use full-screen mode, track lap times, and get an alarm when the countdown finishes.",
  metaTitle: "Free Countdown Timer & Stopwatch Online | FastTools",
  metaDescription: "Free online countdown timer & stopwatch with lap times, alarm sounds, Pomodoro preset, and fullscreen mode. No download needed. Works on any device.",
  path: "/fun-tools/countdown-timer",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description: "Free browser-based countdown timer and stopwatch. Supports custom hours/minutes/seconds input, 9 quick presets (1 min to 1 hr), audio alarm on completion, +/- time adjustment, full-screen mode, and a stopwatch with unlimited lap tracking showing fastest/slowest laps.",
    featureList: [
      "Countdown timer with custom hours, minutes, seconds input",
      "9 quick-start presets: 1 min, 3 min, 5 min, 10 min, 15 min, 25 min, 30 min, 45 min, 1 hr",
      "Audio alarm when countdown finishes",
      "Quick ±10s / ±30s / ±60s time adjustment while paused",
      "Circular progress ring visualization",
      "Stopwatch with unlimited lap times",
      "Fastest and slowest lap highlighting",
      "Full-screen mode for both timer and stopwatch",
      "No download, no signup, 100% free",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    operatingSystem: "Any",
    alternateName: [
      "Online Stopwatch",
      "Online Timer",
      "Egg Timer",
      "Tea Timer",
      "Pomodoro Stopwatch",
      "5 Minute Timer",
      "10 Minute Timer",
      "Workout Timer",
      "Study Timer",
      "Cooking Timer",
      "Tabata Timer",
      "online-stopwatch.com Alternative",
      "Time.is Alternative",
      "Vclock Alternative",
      "Browser Countdown Timer",
    ],
    ratingValue: "4.9",
    ratingCount: "12420",
  },

  header: {
    title: "Countdown Timer & Stopwatch",
    description: "Set a countdown, pick a preset, or start the stopwatch. Full-screen mode, audio alarm, and lap tracking — all free in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Countdown Timer & Stopwatch", href: "/fun-tools/countdown-timer" },
  ],

  content: {
    definition:
      "An online countdown timer is a browser-based tool that counts down from a set duration to zero and signals completion with a sound alert, while a stopwatch counts upward from zero and records split times for each lap.",

    quickAnswer:
      "To start a countdown: pick a preset (1 min–1 hr) or enter a custom time, then click Start. The circular progress ring shrinks as time passes and an alarm sounds when it reaches zero. Switch to the Stopwatch tab to count up and record laps.",

    keyTakeaways: [
      "The Countdown tab lets you set any time from seconds to hours using the custom input or 9 built-in presets.",
      "A circular progress ring gives a visual sense of remaining time at a glance.",
      "An audio alarm plays when the countdown reaches zero — mute it with the bell icon if needed.",
      "Use ±10s / ±30s / ±60s buttons to fine-tune the remaining time without resetting.",
      "The Stopwatch tab tracks elapsed time to hundredths of a second with unlimited lap recording.",
      "Laps are color-coded: fastest lap in green, slowest in red.",
      "Both modes support full-screen for use on a projector, TV, or large monitor.",
    ],

    overview: (
      <span>
        This free online timer combines two tools in one: a <strong>countdown timer</strong> that counts down from
        any duration and alerts you when time is up, and a <strong>stopwatch</strong> that counts upward with
        full lap tracking. No app to install, no account to create — open the page and start timing in seconds.
        The countdown uses the Web Audio API to generate an alarm tone directly in your browser without any audio
        files. The stopwatch records lap splits to hundredths of a second and highlights your fastest and slowest
        laps automatically.
      </span>
    ),

    howToSteps: [
      "Open the Countdown tab (default) or switch to Stopwatch.",
      "For countdown: click a preset button (e.g. '5 min') or enter a custom hours/minutes/seconds value and click Set Timer.",
      "Click Start to begin. The circular progress ring shrinks as time passes.",
      "Click Pause to stop the clock without resetting — click Start again to resume.",
      "Use the ±10s, ±30s, ±60s buttons to adjust remaining time while paused.",
      "When the countdown reaches zero, an alarm plays. Click Reset to prepare for the next round.",
      "For stopwatch: click Start to begin counting. Click Lap to record a split. Click Pause then Reset to clear.",
    ],

    features: [
      {
        title: "Countdown with Circular Progress Ring",
        description:
          "A smooth animated SVG ring shrinks proportionally as time passes, giving you a clear visual sense of how much time remains without staring at digits.",
      },
      {
        title: "9 Quick-Start Presets",
        description:
          "One-click presets for the most common durations: 1, 3, 5, 10, 15, 25, 30, 45 minutes, and 1 hour. The 25-minute preset matches a full Pomodoro work session.",
      },
      {
        title: "Custom Time Input",
        description:
          "Set any duration using separate hours, minutes, and seconds fields. Supports times from 1 second to 99+ hours.",
      },
      {
        title: "Audio Alarm",
        description:
          "A three-tone chime plays when the countdown reaches zero, generated directly by the Web Audio API — no sound file needed, works offline. Mute with the bell icon.",
      },
      {
        title: "Stopwatch with Lap Tracking",
        description:
          "Count up to hundredths of a second with unlimited lap recording. Each lap shows its split time and cumulative total. The fastest lap is highlighted green, slowest in red.",
      },
      {
        title: "Full-Screen Mode",
        description:
          "Expand either the countdown or stopwatch to fill the entire screen — ideal for classrooms, gyms, cooking, presentations, or any situation where you need the time visible from a distance.",
      },
    ],

    useCases: [
      {
        title: "Pomodoro Work Sessions",
        description:
          "Set the 25-minute preset and work until the alarm. Take a 5-minute break with the next preset. Repeat to build focused productivity blocks.",
      },
      {
        title: "Cooking & Kitchen Timers",
        description:
          "Set multiple timers across browser tabs for different dishes. The audio alarm lets you step away from the screen without missing the signal.",
      },
      {
        title: "Exercise & Interval Training",
        description:
          "Use the countdown for timed sets and rest periods. Use the stopwatch with laps to track running intervals, swim lengths, or circuit rounds.",
      },
      {
        title: "Classroom & Presentations",
        description:
          "Put the timer in full-screen on a projector or display so every student or attendee can see remaining time. No extra software needed.",
      },
      {
        title: "Games & Quizzes",
        description:
          "Use a countdown for timed quiz rounds, board game turns, or speed challenges. The alarm signals time-up clearly without manual watching.",
      },
      {
        title: "Meditation & Breathing Exercises",
        description:
          "Set a 5- or 10-minute timer and close your eyes. The alarm handles the end signal so you can focus without distraction.",
      },
    ],

    aboutTool: (
      <span>
        This timer runs entirely in your browser using JavaScript&apos;s <code>Date.now()</code> for high-accuracy
        time tracking and the Web Audio API for the alarm tone. Unlike interval-based timers that drift over time,
        this implementation anchors each tick to the system clock, so pausing and resuming never accumulates error.
        The stopwatch uses a 30ms refresh rate for smooth hundredths-of-a-second display without taxing the CPU.
        All state is in-memory — nothing is saved to the server or localStorage unless you refresh, which makes
        the tool fast, private, and fully offline-capable once the page has loaded.
      </span>
    ),

    proTip:
      "For Pomodoro sessions: use the 25-minute preset for work blocks and the 5-minute preset for breaks. Keep the tab open in a separate window — the alarm sound fires even when the tab is in the background on most browsers.",

    faqs: [
      {
        question: "Can I use this countdown timer for free?",
        answer:
          "Yes — completely free with no account, no ads interrupting the timer, and no download required. Open the page and start timing immediately.",
      },
      {
        question: "Does the alarm work when the browser tab is in the background?",
        answer:
          "In most modern browsers (Chrome, Firefox, Edge), the Web Audio API continues to run when a tab is backgrounded, so the alarm will play. Safari may throttle background tabs — keep the tab visible or use a browser that supports background audio for reliable alerts.",
      },
      {
        question: "What is the maximum countdown time I can set?",
        answer:
          "The custom input supports up to 99 hours, 59 minutes, and 59 seconds — over 4 days of continuous countdown if needed.",
      },
      {
        question: "Does the stopwatch count milliseconds?",
        answer:
          "Yes. The stopwatch displays time in MM:SS.cs format (centiseconds — hundredths of a second) for durations under one hour, and HH:MM:SS.cs for longer durations.",
      },
      {
        question: "How accurate is this timer?",
        answer:
          "The countdown anchors to the system clock via Date.now() rather than counting ticks, so it does not drift when paused and resumed or when the browser is under load. Accuracy is within a few milliseconds of the system clock.",
      },
      {
        question: "What is the difference between a countdown timer and a stopwatch?",
        answer:
          "A countdown timer starts from a set duration and counts down to zero, often used to limit time for tasks. A stopwatch starts from zero and counts upward, used to measure elapsed time for events, workouts, or speed challenges.",
      },
      {
        question: "Can I set multiple timers at once?",
        answer:
          "Open multiple browser tabs — each tab runs its own independent timer. This is useful for cooking when you have multiple dishes with different finish times.",
      },
      {
        question: "How do I use this as a Pomodoro timer?",
        answer:
          "Click the 25 min preset and press Start for your work block. When the alarm sounds, click Reset, then click the 5 min preset for a short break. Repeat. For a long break after 4 pomodoros, use the 15 min preset.",
      },
      {
        question: "What does the ±10s / ±30s / ±60s adjustment do?",
        answer:
          "These buttons add or subtract seconds from the remaining countdown time while it is paused. Useful if you need to quickly extend or shorten the timer without resetting and re-entering a new time.",
      },
      {
        question: "Does this timer work on mobile?",
        answer:
          "Yes — the interface is fully responsive and works on iOS and Android browsers. Note that some mobile browsers may suspend audio when the screen locks; keep the screen on if you need the alarm to sound reliably.",
      },
    ],

    relatedTools: [
      { name: "Pomodoro Timer (25/5 cycles)", href: "/fun-tools/pomodoro-timer" },
      { name: "Wheel Spinner (random picker)", href: "/fun-tools/wheel-spinner" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Future Age Calculator", href: "/fun-tools/future-age" },
      { name: "Time Duration Calculator", href: "/calculator/time-duration" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CountdownTimerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CountdownTimer />)} />
}
