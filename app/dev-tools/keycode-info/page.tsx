import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { KeycodeInfo } from "@/components/dev-tools/keycode-info"

const toolConfig = createToolConfig({
  toolName: "Keycode Info",
  description:
    "Keycode info. Find the javascript keycode, code, location and modifiers of any pressed key. keycode list, keyboard key codes, event keycode. keycode online, keycode tester. Free.",
  metaTitle: "Keycode Info - JavaScript Keycode, Event Keycode, Keyboard Key Codes",
  metaDescription:
    "Keycode info tool. Find javascript keycode, code, location and modifiers of any key. keycode list, keyboard key codes, event keycode. keycode online, keycode tester. Free.",
  path: "/dev-tools/keycode-info",

  header: {
    title: "Keycode info",
    description:
      "Find the javascript keycode, code, location and modifiers of any pressed key.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Keycode Info", href: "/dev-tools/keycode-info" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Keycode info. Find javascript keycode, keyboard key codes, event keycode, code, location and modifiers of any pressed key.",
    alternateName: [
      "Keycode Info",
      "JavaScript Keycode Tool",
      "Keycode Tester",
      "Keyboard Key Codes",
      "Event Keycode",
    ],
    featureList: [
      "keycode info - Real-time key capture",
      "javascript keycode (keyCode property)",
      "KeyboardEvent code and key",
      "key location (standard, left, right, numpad)",
      "Modifier keys (Shift, Ctrl, Alt, Meta)",
      "keycode list reference",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Keycode info helps developers find the javascript keycode, KeyboardEvent code, key, location and modifiers of any pressed key. Use this keycode tester to get keyboard key codes for event handlers. keycode online, keycode list, event keycode. javascript keycode list for addEventListener('keydown'). keycode info html, keycode java reference. Free keycode generator for web development.",

    howToSteps: [
      "Click or focus the capture area, then press any key on your keyboard.",
      "View Key (character), Keycode (numeric), Code (physical key), Location (0–3), and Modifiers (Shift, Ctrl, Alt, Meta).",
      "Copy any value with the copy button for use in your code.",
    ],

    features: [
      "keycode info: Real-time display of Key, Keycode, Code, Location, Modifiers",
      "javascript keycode: keyCode property (legacy, still widely used)",
      "KeyboardEvent code: Physical key (e.g. ShiftLeft, KeyA)",
      "keyboard key codes: Numeric codes for keydown/keyup handlers",
      "keycode list: Test any key to build your own reference",
      "event keycode: Perfect for addEventListener keydown/keyup",
      "keycode tester: Verify key codes across browsers",
    ],

    useCases: [
      "keycode info html: Find key codes for HTML onkeydown, onkeypress handlers",
      "javascript keycode list: Build keyboard shortcuts, detect Escape (27), Enter (13)",
      "event keycode: Debug KeyboardEvent.keyCode in React, Vue, vanilla JS",
      "keycode tester: Test modifier combinations (Ctrl+Shift, Meta+Key)",
      "keyboard key codes: Reference for games, accessibility, form validation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Keycode info displays JavaScript KeyboardEvent properties: key (character
          value), keyCode (deprecated but still used), code (physical key like
          KeyA, ShiftLeft), location (0=standard, 1=left, 2=right, 3=numpad), and
          modifiers (Shift, Ctrl, Alt, Meta). Use this keycode tester for
          keycode online lookup. keyboard key codes, event keycode, javascript
          keycode list. keycode info html for onkeydown. Free keycode generator
          for developers.
        </p>
      </div>
    ),

    proTip:
      "keyCode is deprecated—prefer key and code for new code. But many codebases still use keyCode; this tool shows both.",

    faqs: [
      {
        question: "What is keycode info?",
        answer:
          "Keycode info is a tool that shows the javascript keycode, KeyboardEvent code, key, location and modifiers when you press any key. Use it as a keycode tester or keycode online reference.",
      },
      {
        question: "What is the javascript keycode for Enter?",
        answer:
          "Enter keycode is 13. Code is 'Enter'. Use this keycode info tool to verify keyboard key codes for any key.",
      },
      {
        question: "Where can I find a keycode list?",
        answer:
          "Press keys in this keycode info tool to build your keycode list. Common codes: Escape 27, Enter 13, Tab 9, Shift 16, Ctrl 17, Alt 18.",
      },
      {
        question: "What is event keycode?",
        answer:
          "event.keyCode (or KeyboardEvent.keyCode) is the numeric code of the pressed key. Deprecated but still used. This keycode tester shows keycode, code, and key.",
      },
      {
        question: "How to use keycode info html?",
        answer:
          "Use onkeydown='handleKey(event)' and read event.keyCode or event.code. This keycode info tool helps you find the right values for your keycode info html handlers.",
      },
      {
        question: "Is there a keycode generator?",
        answer:
          "This keycode info tool acts as a keycode generator—press any key to get its keycode, code, and modifiers for use in your code.",
      },
    ],

    additionalContent: [
      {
        heading: "keyboard key codes — Common values",
        content:
          "Escape: 27, Enter: 13, Tab: 9, Space: 32, Backspace: 8. Modifiers: Shift 16, Ctrl 17, Alt 18, Meta 91 (Windows) or 224 (Mac). Letters A–Z: 65–90. Use this keycode tester to verify.",
      },
      {
        heading: "keycode info html and javascript keycode list",
        content:
          "For keycode info html use onkeydown/onkeyup. For addEventListener, pass (event) => { console.log(event.keyCode, event.code) }. This tool provides a keycode list for any key.",
      },
    ],

    relatedTools: [
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
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
