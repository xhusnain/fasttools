import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RegexTester } from "@/components/regex-tester"

export const metadata: Metadata = {
  title: "Regex Tester - Test Regular Expressions Online | ToolifyHub",
  description:
    "Free online regex tester and debugger. Test your regular expressions with live matching and detailed results. Perfect for developers.",
  keywords: "regex tester, regular expression tester, regex debugger, regex builder, pattern matcher",
}

export default function RegexTesterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Regex Tester", href: "/dev-tools/regex-tester" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Regex Tester</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Test and debug your regular expressions with live matching
          </p>
        </div>

        <RegexTester />
      </div>
    </div>
  )
}
