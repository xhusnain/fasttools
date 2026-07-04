import { getRegexVariantMetadata, renderRegexVariantPage } from "../regex-tester/language-variants"

export const metadata = getRegexVariantMetadata("php-regex-tester")

export default function PhpRegexTesterPage() {
  return renderRegexVariantPage("php-regex-tester")
}
