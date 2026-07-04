import { getRegexVariantMetadata, renderRegexVariantPage } from "../regex-tester/language-variants"

export const metadata = getRegexVariantMetadata("python-regex-tester")

export default function PythonRegexTesterPage() {
  return renderRegexVariantPage("python-regex-tester")
}
