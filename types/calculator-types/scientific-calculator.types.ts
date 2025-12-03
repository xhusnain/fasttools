export interface ScientificCalculatorProps {
    history: string[]
    setHistory: (history: string[] | ((prev: string[]) => string[])) => void
    clearHistory: () => void
    copyResult: () => void
    currentDisplay: string
    setCurrentDisplay: (display: string) => void
}
