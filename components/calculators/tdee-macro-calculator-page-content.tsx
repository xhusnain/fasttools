"use client"

import { TDEEMacroCalculator } from "@/components/calculators/tdee-macro-calculator"
import { Shield, ExternalLink } from "lucide-react"

export function TDEEMacroCalculatorPageContent() {
  return (
    <div className="space-y-12 pb-12">
      <TDEEMacroCalculator />

      {/* E-E-A-T: Medical Attribution Section */}
      <section className="bg-card border border-green-500/30 dark:border-green-500/20 rounded-xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-green-500/10 dark:bg-green-500/20 rounded-lg flex-shrink-0">
            <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-green-600 dark:text-green-400 text-lg">
              Evidence-Based Calculations
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This calculator uses peer-reviewed BMR equations from published research. The{" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/15883556/" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 dark:text-green-400 underline inline-flex items-center gap-1 hover:text-green-500">
                Mifflin-St Jeor equation
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              is recommended by the{" "}
              <a href="https://www.academy.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 dark:text-green-400 underline inline-flex items-center gap-1 hover:text-green-500">
                Academy of Nutrition and Dietetics
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              as the most accurate for estimating BMR in healthy adults. Activity multipliers are based on the{" "}
              <a href="https://www.fao.org/3/y5686e/y5686e07.htm" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 dark:text-green-400 underline inline-flex items-center gap-1 hover:text-green-500">
                FAO/WHO/UNU guidelines
                <ExternalLink className="h-3 w-3" />
              </a>.
              These are estimates — individual results may vary by ±10-15%. Consult a registered dietitian or healthcare provider before making significant dietary changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
