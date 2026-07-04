import { getFormulaVariantMetadata, renderFormulaVariantPage } from "../ai-readability-analyzer/formula-variants"

export const metadata = getFormulaVariantMetadata("gunning-fog-index-calculator")

export default function GunningFogIndexCalculatorPage() {
  return renderFormulaVariantPage("gunning-fog-index-calculator")
}
