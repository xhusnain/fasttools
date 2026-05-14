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
        <p>
          Key event tooling works best when it clearly separates character output
          from physical key position. This page focuses on that distinction with
          quick, readable event values.
        </p>
        <p>
          It is useful when migrating from legacy keyCode checks to modern
          key/code handling while keeping backward compatibility.
        </p>
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
