import { getRegexVariantMetadata, renderRegexVariantPage } from "../regex-tester/language-variants"

export const metadata = getRegexVariantMetadata("golang-regex-tester")

export default function GolangRegexTesterPage() {
  return renderRegexVariantPage("golang-regex-tester")
}
