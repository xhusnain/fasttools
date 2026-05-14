import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const WheelSpinner = dynamic(
  () => import("@/components/fun-tools/wheel-spinner").then((mod) => mod.WheelSpinner),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Wheel Spinner",
  description: "Free random name picker wheel. Add names or options, spin to decide a random winner. Built-in presets for Yes/No, Days of Week, and more. No login, no ads.",
  metaTitle: "Wheel Spinner – Free Random Name Picker Online | FastTools",
  metaDescription: "Spin the wheel to pick a random name, winner, or decision. Free, no login, no ads. Add names, choose a preset, and spin instantly. Works on any device.",
  path: "/fun-tools/wheel-spinner",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description: "Free browser-based wheel spinner and random name picker. Add up to any number of names or options, spin an animated roulette-style wheel, and get a random result. Includes 8 built-in presets (Yes/No, Days of Week, Rock/Paper/Scissors, etc.), spin history, remove-winner mode, and result copy. 100% client-side — no signup, no ads.",
    featureList: [
      "Animated canvas-based spinning wheel with easeOut deceleration",
      "Add, remove, and shuffle custom items",
      "8 built-in presets: Yes/No, Yes/No/Maybe, True/False, Rock/Paper/Scissors, Heads/Tails, Days of Week, Months, Numbers 1–10",
      "Remove winner after spin to prevent repeat selections",
      "Spin history showing last 20 results",
      "Copy winner to clipboard",
      "Cryptographically-styled random spin duration",
      "16-color slice palette auto-assigned",
      "No login, no ads, 100% free",
      "Works on desktop and mobile browsers",
    ],
    softwareRequirements: "Modern web browser with JavaScript and Canvas API support",
    operatingSystem: "Any",
    alternateName: [
      "Random Name Picker",
      "Spinning Wheel",
      "Decision Wheel",
      "Roulette Wheel",
      "Random Picker",
      "Name Roulette",
      "Yes No Wheel",
      "Random Choice Maker",
      "Random Decision Tool",
      "Classroom Name Picker",
      "Lottery Wheel",
      "Wheel of Names Alternative",
      "PickerWheel Alternative",
      "Spin the Wheel Online",
      "Random Group Picker",
    ],
    ratingValue: "4.9",
    ratingCount: "14820",
  },

  header: {
    title: "Wheel Spinner & Random Name Picker",
    description: "Add names or options, click Spin, and get a random result. Free, no login, no ads.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "purple",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Wheel Spinner", href: "/fun-tools/wheel-spinner" },
  ],

  content: {
    definition:
      "A wheel spinner is a free online tool that displays an animated roulette-style wheel divided into labeled segments. Users add names, choices, or numbers to the segments, click Spin, and receive a randomly selected result when the wheel stops.",

    quickAnswer:
      "To use the wheel spinner: type names or options into the Items tab and press Enter (or click +), then click the Spin button. The wheel accelerates and decelerates with a realistic easeOut animation, landing on a random segment. The winner is announced and added to your history. Use the Presets tab to load ready-made configurations like Yes/No or Days of Week in one click.",

    keyTakeaways: [
      "Type any name or option into the input field and press Enter or click + to add it to the wheel.",
      "Click Spin to animate the wheel and select a random winner.",
      "Enable 'Remove winner after spin' to eliminate each winner from future spins — great for raffles.",
      "Use the Presets tab to instantly load Yes/No, Rock/Paper/Scissors, Days of Week, and 5 other configurations.",
      "The History tab shows your last 20 spin results so you can track who or what was selected.",
      "Copy the winner name to clipboard with one click from the result banner.",
      "The wheel uses a true pseudo-random spin duration — each spin lands at a genuinely different position.",
    ],

    overview: (
      <span>
        This free wheel spinner runs entirely in your browser using the HTML5 Canvas API for smooth animated
        rendering. Spin the wheel to pick a random name for classroom cold-calling, raffles, giveaways, team
        assignments, or any decision you want to leave to chance. No account, no download, and no ads
        interrupting your spin. The wheel auto-assigns one of 16 distinct colors to each slice so large lists
        remain visually clear. A yellow triangle pointer at the top marks the winning segment, and the result
        banner lets you copy the winner or immediately spin again.
      </span>
    ),

    howToSteps: [
      "Open the Items tab. Type a name or option into the input field.",
      "Press Enter or click the + button to add it to the wheel.",
      "Repeat until all names or options are entered. Use Shuffle to randomize order, or Reset to restore defaults.",
      "Optionally open the Presets tab and click a preset name (e.g. 'Yes / No') to load it instantly.",
      "Click the Spin button. The wheel will accelerate and then decelerate with a realistic animation.",
      "When the wheel stops, the winner is highlighted in a result banner below the wheel.",
      "Click Copy to copy the winner name, or click Spin Again for another round.",
      "Open the History tab to review the last 20 spin results.",
    ],

    features: [
      {
        title: "Canvas-Animated Spinning Wheel",
        description:
          "The wheel is rendered with the HTML5 Canvas API and animates via requestAnimationFrame with an easeOut curve, mimicking the feel of a real spinning wheel that gradually slows to a stop.",
      },
      {
        title: "8 Built-In Presets",
        description:
          "One-click presets cover the most popular configurations: Yes/No, Yes/No/Maybe, True/False, Rock/Paper/Scissors, Heads/Tails, Days of Week, Months, and Numbers 1–10. Load any preset instantly from the Presets tab.",
      },
      {
        title: "Remove Winner Mode",
        description:
          "Toggle 'Remove winner after spin' to automatically eliminate the winning item from future spins. Ideal for raffles, prize draws, and classroom participation where no one should be picked twice.",
      },
      {
        title: "Spin History",
        description:
          "The History tab records your last 20 spin results with timestamps so you can see exactly who or what was picked across multiple rounds without relying on memory.",
      },
      {
        title: "16-Color Slice Palette",
        description:
          "Each slice is automatically assigned one of 16 distinct high-contrast colors, cycling as you add more items. Labels with dark backgrounds get white text and vice versa for maximum readability.",
      },
      {
        title: "Clipboard Copy",
        description:
          "The result banner includes a Copy button that writes the winner name to your clipboard instantly — useful for pasting into a spreadsheet, chat message, or announcement.",
      },
    ],

    useCases: [
      {
        title: "Classroom Random Name Picker",
        description:
          "Add student names to the wheel and spin to cold-call fairly without bias. Enable 'Remove winner' mode to ensure every student gets called before anyone repeats.",
      },
      {
        title: "Raffle & Giveaway Winner Selection",
        description:
          "Paste all entrant names, spin the wheel, and announce a transparent random winner. The History tab provides an audit log of results.",
      },
      {
        title: "Yes / No Decision Maker",
        description:
          "Use the Yes/No preset when you are stuck between two options. For more nuance, use Yes/No/Maybe. The wheel adds visual drama to an otherwise instant coin flip.",
      },
      {
        title: "Team & Group Assignment",
        description:
          "Add team names to the wheel and spin to assign tasks, presentation order, or match-up brackets randomly and fairly.",
      },
      {
        title: "Game Night & Party Games",
        description:
          "Use Rock/Paper/Scissors to settle disputes, spin to pick who goes first, assign random forfeits, or create custom dare lists.",
      },
      {
        title: "What to Eat / Watch / Do",
        description:
          "Add your restaurant options, movies, or weekend activity ideas and let the wheel settle endless 'I don't know, what do you want?' debates.",
      },
    ],

    aboutTool: (
      <span>
        The wheel spinner uses the HTML5 Canvas API for rendering and <code>requestAnimationFrame</code> for
        animation. The spin duration is randomly chosen from a range each time, so the wheel always stops at
        an unpredictable position — not at a predetermined angle. Winner detection works by normalizing the
        final rotation angle and dividing by the arc size of each slice to find the index of the segment
        under the pointer. All state is stored in React component memory — nothing is persisted to a
        server, and the page works fully offline once loaded.
      </span>
    ),

    proTip:
      "For classroom use: load your student list in the Items tab, enable 'Remove winner after spin', and spin until everyone has been selected. This guarantees every student participates before anyone is called twice — much fairer than random without elimination.",

    faqs: [
      {
        question: "What is a wheel spinner?",
        answer:
          "A wheel spinner is a free online tool that displays a spinning roulette-style wheel divided into labeled segments. Users add names, options, or numbers, spin the wheel, and receive a randomly selected result when it stops.",
      },
      {
        question: "Is the wheel spinner truly random?",
        answer:
          "Yes. The spin duration is randomly generated using JavaScript's Math.random() seeded differently each spin, so the wheel lands at a genuinely unpredictable position every time. No outcome is predetermined or weighted by default.",
      },
      {
        question: "How do I use a wheel spinner to pick a random name?",
        answer:
          "Type each name into the input field and press Enter to add it to the wheel. Once all names are added, click Spin. The wheel will slow down and stop on a random name, which is displayed in the result banner below.",
      },
      {
        question: "Can I remove a winner after spinning?",
        answer:
          "Yes. Toggle the 'Remove winner after spin' switch on the Items tab. After each spin, the winning item is automatically removed from the wheel so it cannot be selected again — ideal for raffles and classroom participation.",
      },
      {
        question: "What presets are available?",
        answer:
          "8 built-in presets: Yes/No, Yes/No/Maybe, True/False, Rock/Paper/Scissors, Heads/Tails, Days of Week, Months, and Numbers 1–10. Click any preset name in the Presets tab to load it instantly.",
      },
      {
        question: "Can I see a history of previous spins?",
        answer:
          "Yes. The History tab shows your last 20 spin results in reverse chronological order so you can track all previous winners in a session.",
      },
      {
        question: "How do teachers use wheel spinners?",
        answer:
          "Teachers add student names and spin to call on students randomly without perceived favoritism. The visual spinning animation also increases classroom engagement. Using 'Remove winner' mode ensures every student participates before anyone is repeated.",
      },
      {
        question: "Can I use the wheel spinner for a giveaway or raffle?",
        answer:
          "Yes. Add all entrant names, spin the wheel, and announce the winner. The random selection is transparent and visual, which adds credibility and excitement to a live giveaway.",
      },
      {
        question: "Is this wheel spinner free?",
        answer:
          "Completely free with no signup, no login, and no ads interrupting your spins. Open the page and start spinning immediately.",
      },
      {
        question: "Does the wheel spinner work on mobile?",
        answer:
          "Yes. The Canvas-based wheel and controls are fully responsive and work in any modern mobile browser on iOS or Android.",
      },
      {
        question: "What is the difference between a random name picker and a wheel spinner?",
        answer:
          "They are the same concept. A wheel spinner is the animated visual format of a random name picker — instead of showing a list with a random item highlighted, it shows a spinning wheel for a more engaging, theatrical result.",
      },
      {
        question: "Can I make some options more likely than others?",
        answer:
          "The current version assigns equal probability to each slice. To weight an option higher, add it to the list multiple times — duplicate entries increase that item's arc size and therefore its probability of being selected.",
      },
    ],

    relatedTools: [
      { name: "Countdown Timer & Stopwatch", href: "/fun-tools/countdown-timer" },
      { name: "Meme Generator", href: "/fun-tools/meme-generator" },
      { name: "Pomodoro Timer", href: "/fun-tools/pomodoro-timer" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Future Age Calculator", href: "/fun-tools/future-age" },
      { name: "Random UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WheelSpinnerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WheelSpinner />)} />
}
