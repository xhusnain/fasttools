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
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How the Wheel Picks a Random Result</h3>
          <p>
            The wheel spinner uses the HTML5 Canvas API for rendering and <code>requestAnimationFrame</code> for animation. On each spin, a random duration (typically 4–7 seconds) is chosen, the wheel accelerates briefly, then decelerates with an <strong>easeOut cubic curve</strong> — the same curve real-world physics produces when a spinning object decelerates due to friction. The final rotation angle is unpredictable because the random duration determines exactly when the wheel stops. Winner detection works by normalizing the final rotation angle modulo 360°, then dividing by the arc size of each slice (360° ÷ number of items) to find the index of the segment under the pointer. All state lives in React component memory — nothing persists to a server, and the page works fully offline once loaded.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Wheel Spinner vs Coin Flip vs Dice Roll</h3>
          <p>
            For binary decisions (yes/no, do it / don&apos;t), a coin flip is statistically equivalent. For 3-6 options, dice work. But the wheel has three advantages: <strong>(1) visual drama</strong> — watching the wheel spin builds anticipation in a way that &quot;heads&quot; or a single die roll never does, which is huge for live audiences (classrooms, streams, parties); <strong>(2) any number of options</strong> — 2, 5, 20, 100 — coins and dice can&apos;t scale; <strong>(3) custom labels</strong> — &quot;Pizza,&quot; &quot;Sushi,&quot; &quot;Burgers&quot; instead of abstract numbers. For decisions where the visual experience matters (streaming, classroom engagement, group consensus), the wheel wins.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Wheel Spinner vs Excel RAND, Python random, Lottery Apps</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Method</th>
                <th className="text-left py-2 px-2 text-foreground">Visual?</th>
                <th className="text-left py-2 px-2 text-foreground">Trust factor</th>
                <th className="text-left py-2 px-2 text-foreground">Setup time</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Wheel Spinner (this)</strong></td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">High — visible animation</td>
                <td className="py-2 px-2">Seconds</td>
                <td className="py-2 px-2"><strong>Public decisions, streams, classrooms, raffles</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Excel RAND / RANDBETWEEN</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2">Medium — invisible math</td>
                <td className="py-2 px-2">Minutes</td>
                <td className="py-2 px-2">Spreadsheet data sampling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Python random.choice</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2">Medium — script-only</td>
                <td className="py-2 px-2">Code required</td>
                <td className="py-2 px-2">Automation, large datasets</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Coin flip (real)</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">High</td>
                <td className="py-2 px-2">Seconds</td>
                <td className="py-2 px-2">Binary in-person decisions</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Lottery app</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Medium</td>
                <td className="py-2 px-2">Account signup</td>
                <td className="py-2 px-2">Cash lotteries (different use case)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Use Cases Beyond the Obvious</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Twitch / YouTube live streams:</strong> use the wheel on-screen to pick viewer-submitted prompts, giveaway winners, &quot;Wheel of Misfortune&quot; punishment selections, or chat-suggested challenges</li>
            <li><strong>Hiring panels:</strong> randomize the order presenters speak to remove any &quot;first impression&quot; bias</li>
            <li><strong>Stand-ups / scrum meetings:</strong> spin to pick who shares first — adds energy to a routine meeting and ensures rotation</li>
            <li><strong>Couples / families:</strong> &quot;Who picks tonight&apos;s movie?&quot; — spin to settle a fair winner without lengthy debate</li>
            <li><strong>Trivia hosts:</strong> spin to pick the player to answer the next question, with &quot;Remove winner&quot; to ensure equal participation</li>
            <li><strong>Kids&apos; chores:</strong> add chores to the wheel; spin assigns daily duty fairly so no one feels singled out</li>
            <li><strong>Decision paralysis:</strong> when you genuinely can&apos;t pick between options of equal value, externalizing the choice reduces fatigue</li>
            <li><strong>Improv / writing prompts:</strong> add prompts, spin to get a topic to write about for the next 10 minutes</li>
            <li><strong>Restaurant menu:</strong> add menu items you keep meaning to try; spin to pick what to order tonight</li>
            <li><strong>Workout selection:</strong> spin between cardio / strength / yoga / rest to break decision fatigue at the gym</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why &quot;Remove Winner&quot; Mode Matters</h3>
          <p>
            Naive random selection (with replacement) means the same person can be picked twice in a row, leading to &quot;why is it always Sarah?&quot; complaints in classrooms. <strong>Remove Winner mode</strong> implements <em>random selection without replacement</em>: each winner is taken off the wheel for the rest of the session, guaranteeing every entrant gets selected before anyone repeats. Mathematically: with N entries, in N spins you select N unique winners — perfect for fair classroom cold-calling, raffles, prize distribution, presentation order assignment, or any scenario where repetition feels unfair. After all N are selected, you can reset the wheel to start a fresh round.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tips for Live Streams and Classrooms</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Pre-load items in advance</strong> — paste student rosters / viewer names before going live so you don&apos;t fumble during the moment</li>
            <li><strong>Use the History tab for transparency</strong> — show that previous winners weren&apos;t fake; legitimacy matters for audience trust</li>
            <li><strong>Combine with overlay tools</strong> — capture the wheel in OBS as a browser source for clean stream layouts</li>
            <li><strong>Save common lists</strong> — keep an alphabetized class roster in a text file; paste it line-by-line for repeated use</li>
            <li><strong>Add &quot;Spin again&quot; as an option</strong> — yes, you can put &quot;SPIN AGAIN&quot; as one of the wheel items for chaotic fun</li>
            <li><strong>Use color-themed lists</strong> — for branding, the 16-color palette cycles consistently so brand colors land in predictable positions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Offline</h3>
          <p>
            Every spin runs in your browser using JavaScript and the Canvas API. The names, options, or any data you add are not sent to any server, not logged, not stored. After the page loads, you can disconnect from the internet and the wheel continues to work fully — useful for classroom use without WiFi. Saved state lives only in your tab&apos;s memory; closing the tab clears everything (no cookies, no localStorage beyond optional settings).
          </p>
        </div>
      </div>
    ),

    proTip:
      "For classroom use: load your student list, enable 'Remove winner after spin', and spin until everyone has been selected. Guarantees every student participates before anyone is called twice — far fairer than random with replacement. For live streams, pre-load items before going live and combine the page with OBS Browser Source for a clean overlay. For decision-paralysis use, write all options on the wheel even if some seem 'wrong' — the act of externalizing the choice reduces fatigue, and a 'wrong' winner still gives you the gut-check answer (you'll feel relief or disappointment, which tells you what you actually wanted).",

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
      { name: "Pomodoro Timer", href: "/fun-tools/pomodoro-timer" },
      { name: "Meme Generator", href: "/fun-tools/meme-generator" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Future Age Predictor", href: "/fun-tools/future-age" },
      { name: "Love Calculator", href: "/calculator/love-calculator" },
      { name: "All Fun Tools", href: "/fun-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WheelSpinnerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WheelSpinner />)} />
}
