"use client"

import { Calculator } from "lucide-react"

interface ExampleCardProps {
  title: string
  exampleText: string
  description: string
  startDate: string
  endDate: string
  highlightColor?: string
}

export function ExampleCard({ title, exampleText, description, startDate, endDate, highlightColor = "border-border" }: ExampleCardProps) {
  const handleTryExample = () => {
    window.dispatchEvent(new CustomEvent('setDateDifference', {
      detail: { startDate, endDate }
    }))
    
    const calculatorElement = document.querySelector('[data-calculator="date-difference"]')
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className={`p-4 bg-card rounded-lg border ${highlightColor}`}>
      <h3 className="font-semibold text-heading-accent mb-3">{title}</h3>
      <div className="bg-primary/5 p-3 rounded-lg mb-2">
        <p className="text-base font-semibold text-foreground" dangerouslySetInnerHTML={{ __html: exampleText }} />
      </div>
      <p className={`text-xs mb-3 ${highlightColor.includes('heading-accent') ? 'text-heading-accent' : 'text-muted-foreground'}`}>{description}</p>
      <button
        onClick={handleTryExample}
        className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
      >
        <Calculator className="h-4 w-4" />
        Try This Example →
      </button>
    </div>
  )
}

