import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { Code2, FileJson, Palette, Hash, FileCode, Braces, Database, Sparkles, Binary } from "lucide-react"

const devTools = [
  {
    title: "JWT Decoder",
    description: "Decode and inspect JWT tokens safely in your browser. Perfect for API development and authentication debugging.",
    href: "/dev-tools/jwt-decoder",
    icon: Code2,
    popular: true,
  },
  {
    title: "Base64 Encoder Decoder",
    description: "Encode and decode strings to Base64. URL-safe mode, file support. Perfect for data URIs and JWT debugging.",
    href: "/dev-tools/base64-encoder",
    icon: Binary,
    popular: true,
  },
  {
    title: "MIME Types",
    description: "MIME types list. Convert MIME types to file extensions and vice-versa. mime types pdf, images, excel. mime-types npm alternative.",
    href: "/dev-tools/mime-types",
    icon: FileCode,
    popular: true,
  },
  {
    title: "Keycode Info",
    description: "Find javascript keycode, code, location and modifiers of any key. keycode list, keyboard key codes, event keycode. keycode tester.",
    href: "/dev-tools/keycode-info",
    icon: Code2,
    popular: true,
  },
  {
    title: "Agent Skill Builder",
    description: "Generate custom SKILL.md files for Google Antigravity agents. Build, download, and share agent skills.",
    href: "/dev-tools/antigravity-skill-builder",
    icon: Sparkles,
    popular: true,
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions with live matching. Essential for data validation and text processing.",
    href: "/dev-tools/regex-tester",
    icon: Hash,
    popular: true,
  },
  {
    title: "SQL to JSON Converter",
    description: "Convert SQL INSERT statements to JSON format online free. Parse SQL data to JSON arrays instantly.",
    href: "/dev-tools/sql-to-json",
    icon: Database,
    popular: true,
  },
  {
    title: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format quickly and easily. Great for data analysis and API integration.",
    href: "/dev-tools/json-to-csv",
    icon: FileJson,
    popular: true,
  },
  {
    title: "HTML Beautifier",
    description: "Format and beautify HTML code for better readability. Essential for web development and code maintenance.",
    href: "/dev-tools/html-beautifier",
    icon: Braces,
    popular: true,
  },
  {
    title: "1000+ Free Color Palettes",
    description: "Explore 1000+ free color palettes with HEX codes for websites, branding & UI/UX design. 43 categories including aesthetic, pastel, vintage & modern themes.",
    href: "/dev-tools/color-palette",
    icon: Palette,
  },
  {
    title: "Hex to RGB Converter",
    description: "Convert hex colors to RGB values instantly. Perfect for CSS development and color manipulation.",
    href: "/dev-tools/hex-to-rgb",
    icon: Palette,
  },
  {
    title: "HTML to Markdown",
    description: "Convert HTML to Markdown format for documentation, content management, and technical writing.",
    href: "/dev-tools/html-to-markdown",
    icon: FileCode,
  },
  {
    title: "Markdown Previewer",
    description: "Live preview your Markdown content with real-time rendering. Perfect for documentation and blogging.",
    href: "/dev-tools/markdown-previewer",
    icon: FileCode,
  },
]

const toolConfig = createToolConfig({
  toolName: "Free Developer Tools",
  description: "Free online developer tools: JWT decoder, regex tester, JSON to CSV converter, HTML beautifier & more. Essential coding utilities. No signup required.",
  metaTitle: "Free Developer Tools Online | JWT Decoder, Regex Tester & More",
  metaDescription: "Free online developer tools: JWT decoder, regex tester, JSON to CSV & more. Essential coding utilities for modern web development. No signup.",
  path: "/dev-tools",
  schemaOptions: {
    itemList: {
      name: "Developer Tools Collection - Chrome, Safari, React DevTools",
      description: "Free online developer tools for Chrome, Safari, Firefox, and Edge browsers. Includes React developer tools, JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, and essential coding utilities.",
      items: devTools.map(tool => ({
        name: tool.title,
        description: tool.description,
        url: tool.href
      }))
    }
  },

  header: {
    title: "Free Developer Tools - JWT, Regex, JSON to CSV & More",
    description: "Essential coding utilities for developers. Decode JWT, test regex, convert data, beautify code — all free, fast, and secure. No signup required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
  ],

  content: {
    overview: "Master chrome developer tools with our comprehensive guide. Learn how to open developer tools on chrome using multiple methods: chrome developer tools shortcut (F12 or Ctrl+Shift+I on Windows/Linux, Cmd+Option+I on Mac), chrome shortcut developer tools, or right-click and inspect with chrome developer tools. Access google chrome developer tools, chrome open developer tools, and developer tools google chrome across all platforms. Use chrome developer tools android, developer tools android chrome, developer tools mobile chrome, and how to open developer tools in chrome android mobile for mobile debugging. Features include chrome developer tools screenshot, chrome developer tools color picker, chrome developer tools enable, chrome developer tools on iphone, chrome developer tools ipad, and developer tools chrome ipad.",

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">Professional Developer Tools for Modern Web Development</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Our comprehensive collection of free developer tools is designed to streamline your coding workflow. From debugging authentication with our **JWT Decoder** to testing complex patterns with the **Regex Tester**, every tool runs entirely in your browser for maximum speed and data privacy.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you are a frontend developer working with **React**, a backend engineer managing **SQL databases**, or a full-stack developer needing quick data conversions, FastTools provides the essential utilities you need without any signup or software installation.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "What are developer tools?",
        answer: "Developer tools are built-in browser features that allow developers to inspect, debug, and analyze web pages and applications. They provide access to the HTML structure, CSS styling, JavaScript console, network activity, and performance metrics of any website. Features include DOM inspection, console logging, network monitoring, JavaScript debugging with breakpoints, performance profiling, and mobile device simulation."
      },
      {
        question: "How to open developer tools in Chrome?",
        answer: "Press F12, Ctrl+Shift+I (Windows/Linux), or Cmd+Option+I (Mac). Alternatively, right-click any element and select 'Inspect' or access through Chrome menu > More Tools > Developer Tools. On Android mobile, use remote debugging by connecting your device to a computer via USB and accessing chrome://inspect."
      },
      {
        question: "How to use developer tools in Chrome?",
        answer: "Key features include: 1) Elements tab - inspect/modify HTML/CSS, 2) Console tab - execute JavaScript and view errors, 3) Network tab - monitor requests, 4) Sources tab - debug JavaScript, 5) Performance tab - analyze load times, 6) Application tab - inspect cookies and storage."
      },
      {
        question: "Where is developer tools in Safari?",
        answer: "First enable it in Safari > Preferences > Advanced > check 'Show Develop menu in menu bar'. Then press Cmd+Option+I or access through Develop menu > Show Web Inspector."
      },
      {
        question: "Where is developer tools in Edge?",
        answer: "Press F12, Ctrl+Shift+I (Windows), or Cmd+Option+I (Mac). It works identically to Chrome DevTools since Edge is Chromium-based."
      },
      {
        question: "Where is developer tools in Firefox?",
        answer: "Press F12 or Ctrl+Shift+I (Windows/Linux), Cmd+Option+I (Mac). It appears as 'Web Developer Tools' in the menu."
      },
      {
        question: "Where is developer tools in Opera?",
        answer: "Press Ctrl+Shift+I or F12. Opera uses Chromium DevTools, so the interface is identical to Chrome."
      },
      {
        question: "Where is developer tools in Excel?",
        answer: "Go to File > Options > Customize Ribbon, then check 'Developer' in the right column under Main Tabs. This enables VBA programming, macros, and form controls."
      },
      {
        question: "Where is developer tools in Word?",
        answer: "Similar to Excel, go to File > Options > Customize Ribbon and enable 'Developer' tab for macros and advanced document automation."
      },
      {
        question: "Can you use developer tools on mobile?",
        answer: "Limited direct access exists. For iOS, connect to Mac Safari for remote inspection. For Android, use Chrome remote debugging via USB and chrome://inspect on desktop."
      },
      {
        question: "What is React developer tools?",
        answer: "A browser extension that adds React-specific debugging capabilities. It provides a 'Components' tab showing the React component hierarchy, props, state, and hooks, and a 'Profiler' tab for performance analysis."
      },
      {
        question: "How can developer tools be used by attackers?",
        answer: "Attackers can inspect page source, modify client-side validation, analyze network requests, manipulate cookies, and reverse engineer code. Always implement server-side validation and security measures."
      },
      {
        question: "Why are developer tools disabled?",
        answer: "Common causes include corporate IT policies, conflicting extensions, or corrupted browser settings. Try Incognito mode, disabling extensions, or resetting browser settings."
      },
      {
        question: "What tools do developers use?",
        answer: "Modern developers use IDEs (VS Code), version control (Git), browser DevTools, package managers (npm), build tools (Webpack), testing frameworks (Jest), containerization (Docker), and CI/CD platforms."
      },
      {
        question: "What are developer tools used for?",
        answer: "Debugging code, inspecting HTML/CSS, analyzing network performance, testing responsive designs, monitoring page load, examining storage, and learning from other websites."
      },
      {
        question: "What are developer tools in resume?",
        answer: "List skills like 'Chrome DevTools, React Developer Tools' and specific accomplishments like 'Reduced page load time using Performance profiler' or 'Debugged complex state issues'."
      },
      {
        question: "What is developer tools console?",
        answer: "A command-line interface for executing JavaScript, viewing errors/logs, and interacting with page variables. It's the primary tool for JavaScript debugging."
      },
      {
        question: "What is developer tools in AWS?",
        answer: "A suite of services including CodeCommit, CodeBuild, CodeDeploy, CodePipeline, and Cloud9 for building, testing, and deploying applications on AWS."
      },
      {
        question: "Where is developer tools services in Home Assistant?",
        answer: "Access Developer Tools from the sidebar. The Services tab allows calling any Home Assistant service for testing automations."
      },
      {
        question: "What are Google developer tools?",
        answer: "Includes Chrome DevTools, Google Cloud Platform, Firebase, Android Studio, Lighthouse, PageSpeed Insights, and Search Console."
      },
      {
        question: "How many developers use AI tools?",
        answer: "Over 92% of developers use or plan to use AI tools like GitHub Copilot and ChatGPT. There are approximately 27-28 million professional developers globally."
      },
      {
        question: "Developer tools benefits and best practices",
        answer: "Benefits include faster debugging, better code quality, and performance optimization. Best practices involve using console.table(), network throttling, and DOM breakpoints."
      },
      {
        question: "Common troubleshooting: Can't find developer tools",
        answer: "On Mac Safari, enable 'Show Develop menu'. If disabled, check IT policies or extensions. Use F12 or right-click 'Inspect' to open."
      },
      {
        question: "How many DevOps tools are there?",
        answer: "Hundreds, including Git, Jenkins, Docker, Kubernetes, Ansible, Prometheus, and Jira. Most developers use 10-15 core tools regularly."
      },
      {
        question: "Developer Tools Shortcuts - Complete Keyboard Guide",
        answer: "Universal: F12. Chrome/Edge/Opera: Ctrl+Shift+I (Win), Cmd+Option+I (Mac). Firefox: F12 or Ctrl+Shift+I. Safari: Cmd+Option+I."
      },
      {
        question: "How to Close Developer Tools",
        answer: "Press F12 again, click the X button, or use the close shortcut (Cmd+Option+I on Mac)."
      },
      {
        question: "No Developer Tools Found - Installation Errors Fixed",
        answer: "On Mac, run 'xcode-select --install' to fix missing Command Line Tools. This resolves errors like 'no developer tools were found requesting install'."
      },
      {
        question: "Mobile Browser with Developer Tools",
        answer: "Kiwi Browser (Android) supports extensions. Otherwise, use remote debugging via USB connection to a desktop browser."
      },
      {
        question: "Download Video & Screenshot with Developer Tools",
        answer: "Video: Inspect Network tab for media files. Screenshot: Use Device Mode or Run Command (Cmd+Shift+P) > 'Screenshot'."
      },
      {
        question: "Must Have Tools for Developers - Essential List",
        answer: "Chrome DevTools, VS Code, Git, Postman, Docker, npm, ESLint, Jest, React DevTools, and Figma."
      },
      {
        question: "AI for Developers Tools - Modern Development",
        answer: "GitHub Copilot, ChatGPT, Claude AI, and Tabnine assist with code generation, debugging, and documentation."
      },
      {
        question: "Chrome with Developer Tools - Advanced Usage",
        answer: "Use Panels: Elements (DOM), Console (JS), Sources (Debug), Network (Requests), Performance (Profile), Application (Storage)."
      },
      {
        question: "Near Tool Shop - Finding Developer Resources",
        answer: "Online: GitHub Marketplace, VS Code Marketplace, npm. Physical: Stores for peripherals like mechanical keyboards and monitors."
      },
      {
        question: "Developer Tools Safari vs Chrome vs Firefox",
        answer: "Safari: Best for iOS/Mac. Chrome: Best performance profiling and mobile Android debugging. Firefox: Best CSS/Grid tools."
      },
      {
        question: "Developer Tools VS Code - IDE Integration",
        answer: "VS Code integrates debugging (Ctrl+Shift+D) and extensions for React, Oracle, and more, creating a powerful dev environment."
      },
      {
        question: "Developer Tools Chrome Extension & Browser Extensions",
        answer: "Enhance DevTools with React DevTools, Redux DevTools, Vue DevTools, and Lighthouse."
      },
      {
        question: "Developer Tools and Services - Complete Ecosystem",
        answer: "Includes Cloud (AWS/Azure), CI/CD (GitHub Actions), Containers (Docker), and Frameworks (React/Angular)."
      },
      {
        question: "Developer Tools Android - Mobile Development",
        answer: "Android Studio, ADB, and Chrome Remote Debugging are essential for Android development."
      },
      {
        question: "Development Tools Examples - Real-World Usage",
        answer: "Frontend: Chrome DevTools. Backend: Postman, Docker. Full-stack: VS Code, Git, CI/CD pipelines."
      },
      {
        question: "Oracle Developer Tools vs Xcode - Platform Comparison",
        answer: "Oracle: Database dev in Visual Studio. Xcode: iOS/macOS dev with Simulator and Instruments."
      },
      {
        question: "Tools I Use as a Developer - Professional Toolkit",
        answer: "VS Code, Chrome DevTools, Git, Postman, Docker, Terminal, npm, and AI assistants like Copilot."
      }
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function DevToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {devTools.map((tool) => (
            <GToolCard
              key={`dev-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
