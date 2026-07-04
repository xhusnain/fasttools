import { getRegexVariantMetadata, renderRegexVariantPage } from "../regex-tester/language-variants"

export const metadata = getRegexVariantMetadata("java-regex-tester")

export default function JavaRegexTesterPage() {
  return renderRegexVariantPage("java-regex-tester")
}
