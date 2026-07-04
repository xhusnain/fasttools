import { getRegexVariantMetadata, renderRegexVariantPage } from "../regex-tester/language-variants"

export const metadata = getRegexVariantMetadata("ruby-regex-tester")

export default function RubyRegexTesterPage() {
  return renderRegexVariantPage("ruby-regex-tester")
}
