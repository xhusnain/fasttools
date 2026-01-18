"use client"

import { useState } from "react"
import { ScientificCalculator } from "@/components/calculators/scientific-calculator"

interface ScientificCalculatorWrapperProps {
    children: React.ReactNode
}

export function ScientificCalculatorWrapper({ children }: ScientificCalculatorWrapperProps) {
    const [history, setHistory] = useState<string[]>([])
    const [currentDisplay, setCurrentDisplay] = useState("0")

    const clearHistory = () => {
        setHistory([])
    }

    const copyResult = () => {
        void navigator.clipboard.writeText(currentDisplay)
    }

    return (
        <div className="space-y-6">
            <ScientificCalculator
                history={history}
                setHistory={setHistory}
                clearHistory={clearHistory}
                copyResult={copyResult}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
            />

            {children}
        </div>
    )
}
