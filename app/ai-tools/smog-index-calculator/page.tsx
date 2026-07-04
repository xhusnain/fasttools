import { getFormulaVariantMetadata, renderFormulaVariantPage } from "../ai-readability-analyzer/formula-variants"

export const metadata = getFormulaVariantMetadata("smog-index-calculator")

export default function SmogIndexCalculatorPage() {
  return renderFormulaVariantPage("smog-index-calculator")
}
