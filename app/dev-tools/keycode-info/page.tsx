import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { KeycodeInfo } from "@/components/dev-tools/keycode-info"

const toolConfig = createToolConfig({
  toolName: "Keycode Info",
  description:
    "Press a key to inspect JavaScript KeyboardEvent values including key, keyCode, which, code, location, repeat, composition state, and modifiers.",
  metaTitle: "JavaScript Keycode Finder - key, code, keyCode | FastTools",
  metaDescription:
    "Press any key to see JavaScript KeyboardEvent values: event.key, event.code, keyCode, which, location, repeat, isComposing, and Shift/Ctrl/Alt/Meta modifiers.",
  path: "/dev-tools/keycode-info",

  header: {
    title: "JavaScript Keycode Finder",
    description:
      "Press a key and inspect its KeyboardEvent fields. See key, code, keyCode, which, location, repeat, isComposing, and active modifier keys.",
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
      "Live KeyboardEvent inspector for event.key, event.code, keyCode, which, location, repeat, isComposing, and Shift/Ctrl/Alt/Meta modifier state.",
    alternateName: [
      "JavaScript Key Code Tester",
      "Keyboard Event Inspector",
      "keyCode Reference Tool",
      "Hotkey Tester",
      "Key Code Finder",
      "keydown Event Debugger",
      "Keyboard Event Properties Viewer",
      "JS Key Code Lookup",
      "Shortcut Debugger",
      "Browser Key Code Tester",
      "Key Event Properties",
    ],
    featureList: [
      "Live keydown event capture",
      "Shows event.key and event.code",
      "Shows legacy keyCode and which values",
      "Shows event.location",
      "Shows repeat and isComposing flags",
      "Shows Shift, Ctrl, Alt, and Meta modifier state",
      "Copy buttons for individual values",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    ratingValue: "4.9",
    ratingCount: "5430",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JavaScript keycode finder captures a keyboard event and displays the event fields developers use for shortcuts, input handling, and keyboard debugging.",

    quickAnswer:
      "Press any key to see event.key, event.code, keyCode, which, location, repeat, isComposing, and active modifiers. Use event.key for the produced character or action, and event.code for the physical key position.",

    keyTakeaways: [
      "event.key describes the logical character or action, such as a, Enter, or ArrowUp.",
      "event.code describes the physical key, such as KeyA, Enter, or Numpad1.",
      "keyCode and which are legacy numeric values and should be avoided in new code when possible.",
      "location helps distinguish standard, left, right, and numpad key locations.",
      "repeat and isComposing help identify held keys and IME composition behavior.",
    ],

    overview:
      "Use this keyboard event inspector when implementing hotkeys, debugging form behavior, testing game controls, or checking how a browser reports special keys. The tool listens for keydown events, displays the main KeyboardEvent values, and lets you copy individual fields into code or bug reports.",

    howToSteps: [
      "Click or focus the capture area.",
      "Press the key or key combination you want to inspect.",
      "Review key, code, keyCode, which, location, repeat, isComposing, and modifiers.",
      "Copy the value you need for your event handler.",
      "Test modifier combinations such as Ctrl+S, Cmd+K, Shift+Tab, or Alt+ArrowLeft.",
    ],

    features: [
      {
        title: "Live KeyboardEvent Capture",
        description:
          "Press a key and see the event fields update immediately from a keydown event.",
      },
      {
        title: "Modern and Legacy Values",
        description:
          "Compare event.key and event.code with legacy keyCode and which values when maintaining older code.",
      },
      {
        title: "Modifier and State Flags",
        description:
          "Inspect Shift, Ctrl, Alt, Meta, repeat, and isComposing state for shortcut and text-input debugging.",
      },
      {
        title: "Copy Individual Values",
        description:
          "Each displayed value has a copy button so you can quickly paste it into code or a support note.",
      },
    ],

    useCases: [
      "Build keyboard shortcuts and command palettes.",
      "Debug Ctrl, Cmd, Alt, and Shift shortcut combinations.",
      "Check key values for arrow keys, Escape, Tab, Enter, function keys, and numpad keys.",
      "Compare event.key and event.code before choosing shortcut logic.",
      "Troubleshoot IME or held-key behavior with isComposing and repeat.",
    ],

    aboutTool:
      "For modern JavaScript, prefer event.key when your logic cares about the character or action, and event.code when your logic cares about the physical keyboard position. Keep keyCode and which only for legacy code paths, because those numeric fields are deprecated.",

    proTip:
      "For shortcuts that should work on both macOS and Windows, check event.metaKey or event.ctrlKey together, then compare event.key or event.code for the action key.",

    faqs: [
      {
        question: "What is the difference between event.key and event.code?",
        answer:
          "event.key is the logical key value produced by the current layout and modifiers. event.code is the physical key position on the keyboard.",
      },
      {
        question: "Should I still use keyCode?",
        answer:
          "Only for legacy compatibility. New code should usually use event.key or event.code.",
      },
      {
        question: "Can I test modifier combinations?",
        answer:
          "Yes. The tool shows Shift, Ctrl, Alt, and Meta states when you press a combination.",
      },
      {
        question: "What does repeat mean?",
        answer:
          "repeat is true when the browser fires repeated keydown events while a key is held down.",
      },
      {
        question: "What does isComposing mean?",
        answer:
          "isComposing is true during Input Method Editor composition, which matters for languages and inputs that compose characters before committing text.",
      },
    ],

    relatedTools: [
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
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
