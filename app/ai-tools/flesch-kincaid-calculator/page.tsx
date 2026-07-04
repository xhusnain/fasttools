import { getFormulaVariantMetadata, renderFormulaVariantPage } from "../ai-readability-analyzer/formula-variants"

export const metadata = getFormulaVariantMetadata("flesch-kincaid-calculator")

export default function FleschKincaidCalculatorPage() {
  return renderFormulaVariantPage("flesch-kincaid-calculator")
}
