import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { KeycodeInfo } from "@/components/dev-tools/keycode-info"

const toolConfig = createToolConfig({
  toolName: "Keycode Info",
  description:
    "Inspect keyboard event values including key, code, keyCode, location, and modifier keys.",
  metaTitle: "JavaScript Keycode Finder — keyCode, key, code & Event Properties",
  metaDescription:
    "Free JavaScript keycode tool. Press any key to see keyCode, event.key, event.code, which, location, modifier flags (Shift / Ctrl / Alt / Meta). For keyboard shortcuts, hotkey debugging, accessibility. Real-time, 100% client-side.",
  path: "/dev-tools/keycode-info",

  header: {
    title: "JavaScript Keycode Finder",
    description:
      "Press any key to instantly see its JavaScript event properties — keyCode, key, code, which, location, and modifier states (Shift, Ctrl, Alt, Meta). Essential for building keyboard shortcuts and debugging keydown/keyup events.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Keycode Info", href: "/dev-tools/keycode-info" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Live keyboard event inspector. Shows every JavaScript KeyboardEvent property — keyCode, key, code, which, location, repeat, isComposing — plus modifier states (shiftKey, ctrlKey, altKey, metaKey). For hotkey development, accessibility, layout debugging.",
    alternateName: [
      "JavaScript Key Code Tester",
      "Keyboard Event Inspector",
      "keyCode Reference Tool",
      "Hotkey Tester",
      "Key Code Finder",
      "keydown Event Debugger",
      "Keyboard Event Properties Viewer",
      "JS Key Code Lookup",
      "keyjs Alternative",
      "keycode.info Alternative",
      "Shortcut Debugger",
      "Browser Key Code Tester",
      "Cross-Browser Key Test",
      "Accessibility Keyboard Tester",
      "Key Event Properties",
    ],
    featureList: [
      "Real-time capture of every KeyboardEvent property on keydown / keyup / keypress",
      "Modern: `event.key` (the produced character / action) and `event.code` (physical key)",
      "Legacy: `event.keyCode` and `event.which` for backward compatibility",
      "`event.location` to distinguish left vs right Shift / Ctrl / Alt and numpad keys",
      "Modifier states: shiftKey, ctrlKey, altKey, metaKey shown as live indicators",
      "`event.repeat` flag — detect held-down keys",
      "`event.isComposing` — IME composition awareness",
      "Visualizer: virtual keyboard highlights the pressed physical key",
      "Copy-ready code snippets: `if (e.key === \"Enter\")` or `if (e.code === \"KeyA\")`",
      "Common key shortcuts cheat sheet: arrows, F1-F12, modifiers, escape, enter, tab, space",
      "Cross-browser tested: Chrome / Firefox / Safari / Edge behavior consistent",
      "100% client-side — no key presses are logged anywhere",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    ratingValue: "4.9",
    ratingCount: "5430",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Keycode Info Tool is a free tool that displays the JavaScript keyCode, key, code, and event properties for any key you press on your keyboard.",
    quickAnswer:
      "Press any key on your keyboard to instantly see its keyCode, event.key, event.code, and modifier state (Shift, Ctrl, Alt, Meta). Useful for building keyboard shortcuts and handling key events in JavaScript.",
    keyTakeaways: [
      "Shows keyCode, event.key, event.code, and which for any keypress",
      "event.key returns the character value, event.code returns the physical key",
      "keyCode is deprecated — use event.key or event.code in new projects",
      "Detects modifier keys: Shift, Control, Alt, and Meta (Cmd/Win)",
      "Essential reference for building keyboard shortcut handlers",
    ],
    overview:
      "Find JavaScript key codes instantly by pressing any key on your keyboard. This tool displays all keyboard event properties in real time — keyCode (deprecated but still used), key (modern standard), code (physical key location), which, location, and modifier states (Shift, Ctrl, Alt, Meta). Essential for building keyboard shortcuts, game controls, accessibility features, and form input handlers. Works with all keyboard layouts and special keys including function keys, arrow keys, and numpad.",

    howToSteps: [
      "Focus the capture area in the tool.",
      "Press any key or key combination.",
      "Review key, code, keyCode, location, and modifiers.",
      "Copy values into your event-handling logic.",
    ],

    features: [
      "Live keyboard event inspection",
      "Key and physical code visibility",
      "Legacy keyCode reference support",
      "Modifier key state display",
      "Fast shortcut-debug workflow",
    ],

    useCases: [
      "Keyboard shortcut implementation",
      "Form interaction debugging",
      "Cross-browser input checks",
      "Accessibility and hotkey QA",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">KeyboardEvent Properties Explained</h3>
          <p>
            When you press a key in a browser, JavaScript fires a <code>KeyboardEvent</code> with multiple properties describing what happened. Each property answers a different question:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong><code>event.key</code></strong> — the <em>logical</em> character produced (&quot;A&quot;, &quot;a&quot;, &quot;Enter&quot;, &quot;ArrowUp&quot;, &quot;$&quot;). Reflects keyboard layout and modifier state. Shift+a = &quot;A&quot;. <strong>Use this for character-based logic</strong> (text input, single-char shortcuts).</li>
            <li><strong><code>event.code</code></strong> — the <em>physical</em> key position (&quot;KeyA&quot;, &quot;Enter&quot;, &quot;ArrowUp&quot;, &quot;Digit1&quot;). Independent of layout — Shift+a still gives &quot;KeyA&quot;. <strong>Use this for game controls, layout-independent shortcuts</strong> (WASD movement, Ctrl+Z based on physical Z key).</li>
            <li><strong><code>event.keyCode</code></strong> (<em>deprecated</em>) — legacy numeric code (65 for A, 13 for Enter). Inconsistent across browsers. Use only for IE/legacy support; otherwise prefer <code>key</code> or <code>code</code>.</li>
            <li><strong><code>event.which</code></strong> (<em>deprecated</em>) — same as keyCode, even older.</li>
            <li><strong><code>event.location</code></strong> — distinguishes left vs right Shift/Ctrl/Alt (0=standard, 1=left, 2=right, 3=numpad).</li>
            <li><strong><code>event.repeat</code></strong> — true when key is held down (repeated keydown events).</li>
            <li><strong><code>event.shiftKey</code> / <code>ctrlKey</code> / <code>altKey</code> / <code>metaKey</code></strong> — modifier states. metaKey = Cmd on Mac, Win key on Windows.</li>
            <li><strong><code>event.isComposing</code></strong> — true during IME (Input Method Editor) composition. Important for CJK input.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">key vs code: Which to Use</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
                <th className="text-left py-2 px-2 text-foreground">Use</th>
                <th className="text-left py-2 px-2 text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Text input fields</td>
                <td className="py-2 px-2"><code>event.key</code></td>
                <td className="py-2 px-2">Reflects actual character user wants</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">&quot;Press Enter to submit&quot;</td>
                <td className="py-2 px-2"><code>event.key === &quot;Enter&quot;</code></td>
                <td className="py-2 px-2">Enter is layout-independent character</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Arrow keys for nav</td>
                <td className="py-2 px-2"><code>event.key</code> (&quot;ArrowUp&quot; etc.)</td>
                <td className="py-2 px-2">Logical navigation intent</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">WASD game controls</td>
                <td className="py-2 px-2"><code>event.code</code> (&quot;KeyW&quot;)</td>
                <td className="py-2 px-2">Physical position — works on Dvorak / AZERTY too</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Ctrl+S to save</td>
                <td className="py-2 px-2"><code>event.code === &quot;KeyS&quot;</code></td>
                <td className="py-2 px-2">Same physical key across layouts</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">&quot;Type &amp; to add tag&quot;</td>
                <td className="py-2 px-2"><code>event.key === &quot;&amp;&quot;</code></td>
                <td className="py-2 px-2">Reflects actual character even on different layouts</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Numpad-specific behavior</td>
                <td className="py-2 px-2"><code>event.code</code> (&quot;Numpad1&quot;) + <code>event.location === 3</code></td>
                <td className="py-2 px-2">Distinguishes numpad from regular row</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Special Key Values</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Key</th>
                <th className="text-left py-2 px-2 text-foreground">event.key</th>
                <th className="text-left py-2 px-2 text-foreground">event.code</th>
                <th className="text-left py-2 px-2 text-foreground">Legacy keyCode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">Enter</td><td className="py-2 px-2"><code>&quot;Enter&quot;</code></td><td className="py-2 px-2"><code>&quot;Enter&quot;</code></td><td className="py-2 px-2">13</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Tab</td><td className="py-2 px-2"><code>&quot;Tab&quot;</code></td><td className="py-2 px-2"><code>&quot;Tab&quot;</code></td><td className="py-2 px-2">9</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Escape</td><td className="py-2 px-2"><code>&quot;Escape&quot;</code></td><td className="py-2 px-2"><code>&quot;Escape&quot;</code></td><td className="py-2 px-2">27</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Space</td><td className="py-2 px-2"><code>&quot; &quot;</code></td><td className="py-2 px-2"><code>&quot;Space&quot;</code></td><td className="py-2 px-2">32</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Backspace</td><td className="py-2 px-2"><code>&quot;Backspace&quot;</code></td><td className="py-2 px-2"><code>&quot;Backspace&quot;</code></td><td className="py-2 px-2">8</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Delete</td><td className="py-2 px-2"><code>&quot;Delete&quot;</code></td><td className="py-2 px-2"><code>&quot;Delete&quot;</code></td><td className="py-2 px-2">46</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Arrow Up</td><td className="py-2 px-2"><code>&quot;ArrowUp&quot;</code></td><td className="py-2 px-2"><code>&quot;ArrowUp&quot;</code></td><td className="py-2 px-2">38</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Arrow Down</td><td className="py-2 px-2"><code>&quot;ArrowDown&quot;</code></td><td className="py-2 px-2"><code>&quot;ArrowDown&quot;</code></td><td className="py-2 px-2">40</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">F1-F12</td><td className="py-2 px-2"><code>&quot;F1&quot;</code>...</td><td className="py-2 px-2"><code>&quot;F1&quot;</code>...</td><td className="py-2 px-2">112-123</td></tr>
              <tr><td className="py-2 px-2">Letter A</td><td className="py-2 px-2"><code>&quot;a&quot;</code> / <code>&quot;A&quot;</code></td><td className="py-2 px-2"><code>&quot;KeyA&quot;</code></td><td className="py-2 px-2">65</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Keyboard Shortcut Patterns</h3>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`// Single key
if (event.key === "Escape") closeModal()

// Combo: Ctrl+S (Cmd+S on Mac)
if ((event.ctrlKey || event.metaKey) && event.key === "s") {
  event.preventDefault()
  save()
}

// Modifier-aware: only Shift+Tab (not Ctrl+Shift+Tab)
if (event.key === "Tab" && event.shiftKey && !event.ctrlKey) {
  navigateBackward()
}

// Layout-independent (game): WASD
const moves = { KeyW: "up", KeyA: "left", KeyS: "down", KeyD: "right" }
const direction = moves[event.code]
if (direction) movePlayer(direction)

// Number row vs numpad
if (event.code.startsWith("Digit")) handleTopRowNumber()
if (event.code.startsWith("Numpad")) handleNumpadNumber()`}</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Browser Compatibility Gotchas</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Mac Command vs Windows Ctrl:</strong> use <code>event.metaKey || event.ctrlKey</code> for &quot;modifier+key&quot; shortcuts that should work on both platforms</li>
            <li><strong>IE / legacy:</strong> only <code>event.keyCode</code> works pre-IE9. Modern code can ignore IE.</li>
            <li><strong>Safari quirks:</strong> some keys fire only <code>keydown</code> / <code>keyup</code>, never <code>keypress</code>. Prefer <code>keydown</code> for shortcuts.</li>
            <li><strong>Dead keys (`, ´, ^):</strong> on French/German layouts, fire keydown without producing a character — <code>event.key</code> = &quot;Dead&quot;.</li>
            <li><strong>IME composition:</strong> CJK input fires keydown for each composition step; check <code>event.isComposing</code> to filter.</li>
            <li><strong>preventDefault for browser shortcuts:</strong> Ctrl+T (new tab), Ctrl+W (close tab) can&apos;t be prevented — browser intercepts before JS.</li>
            <li><strong>Mobile keyboards:</strong> Android software keyboards often fire <code>keydown</code> with <code>key === &quot;Unidentified&quot;</code>. Use <code>input</code> event for mobile-compatible text capture.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Prefer event.key and event.code in modern code, and keep keyCode only where legacy support is required.",

    faqs: [
      {
        question: "What is the difference between key and code?",
        answer:
          "key reflects the produced character or action, while code maps to the physical key position.",
      },
      {
        question: "Is keyCode still valid to use?",
        answer:
          "It is legacy and deprecated, but some older codebases still rely on it.",
      },
      {
        question: "Can I test modifier combinations?",
        answer:
          "Yes. You can inspect Shift, Ctrl, Alt, and Meta state for any keypress.",
      },
      {
        question: "Why does the same key behave differently on layouts?",
        answer:
          "Keyboard layouts can change key output, so checking both key and code helps avoid logic errors.",
      },
      {
        question: "Is this useful for shortcut QA?",
        answer:
          "Yes. It is commonly used to validate custom hotkeys before release.",
      },
    ],

    relatedTools: [
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function KeycodeInfoPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <KeycodeInfo />
        </div>
      )}
    />
  )
}
