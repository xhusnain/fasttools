"use client"

import { useState, useEffect, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"

import {
  Calculator,
  History,
  Copy,
  RotateCcw
} from "lucide-react"



export function ScientificCalculator({ history, setHistory, clearHistory, copyResult, currentDisplay, setCurrentDisplay }: ScientificCalculatorProps) {
  const display = currentDisplay
  const setDisplay = setCurrentDisplay
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [memory, setMemory] = useState(0)
  const [angleMode, setAngleMode] = useState<'deg' | 'rad'>('deg')
  const [isShift, setIsShift] = useState(false)
  const [isSecond, setIsSecond] = useState(false)
  const [dataSet, setDataSet] = useState<number[]>([])
  const [lastAnswer, setLastAnswer] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const calculatorRef = useRef<HTMLDivElement>(null)


  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Keyboard functionality
  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase()

    // Prevent default for calculator keys
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '=', 'enter', 'escape', 'backspace', 'delete'].includes(key)) {
      event.preventDefault()
    }

    // Numbers
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
      handleNumber(key)
    }
    // Decimal point
    else if (key === '.') {
      handleDecimal()
    }
    // Basic operations
    else if (key === '+') {
      handleOperation('+')
    }
    else if (key === '-') {
      handleOperation('-')
    }
    else if (key === '*') {
      handleOperation('×')
    }
    else if (key === '/') {
      handleOperation('÷')
    }
    // Equals
    else if (key === '=' || key === 'enter') {
      handleEquals()
    }
    // Clear
    else if (key === 'escape' || key === 'c') {
      handleClear()
    }
    // Backspace
    else if (key === 'backspace' || key === 'delete') {
      handleBackspace()
    }
    // Scientific functions
    else if (key === 's' && event.shiftKey) {
      handleScientificFunction('sin')
    }
    else if (key === 'c' && event.shiftKey) {
      handleScientificFunction('cos')
    }
    else if (key === 't' && event.shiftKey) {
      handleScientificFunction('tan')
    }
    else if (key === 'l' && event.shiftKey) {
      handleScientificFunction('ln')
    }
    else if (key === 'g' && event.shiftKey) {
      handleScientificFunction('log')
    }
    else if (key === 'p' && event.shiftKey) {
      handleScientificFunction('π')
    }
    else if (key === 'e' && event.shiftKey) {
      handleScientificFunction('e')
    }
    else if (key === 'r' && event.shiftKey) {
      handleScientificFunction('√')
    }
    else if (key === 'x' && event.shiftKey) {
      handleOperation('xy')
    }
    else if (key === 'n' && event.shiftKey) {
      handleScientificFunction('n!')
    }
    // Parentheses
    else if (key === '(') {
      setDisplay(display + '(')
    }
    else if (key === ')') {
      setDisplay(display + ')')
    }
    // Percentage
    else if (key === '%') {
      handleOperation('%')
    }
  }

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [display, operation, previousValue, waitingForOperand])

  // Auto-focus calculator on mount
  useEffect(() => {
    if (calculatorRef.current) {
      calculatorRef.current.focus()
    }
  }, [])

  const formatDisplay = (value: string) => {
    if (value === "Error" || value === "Infinity" || value === "-Infinity" || value === "NaN") {
      return value
    }
    const num = parseFloat(value)
    if (isNaN(num)) return value
    if (Math.abs(num) >= 1e15 || (Math.abs(num) < 1e-10 && num !== 0)) {
      return num.toExponential(6)
    }
    return num.toString()
  }

  const handleNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const handleOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setPreviousValue(newValue)
      setDisplay(String(newValue))
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+": return firstValue + secondValue
      case "-": return firstValue - secondValue
      case "×": return firstValue * secondValue
      case "÷": return secondValue !== 0 ? firstValue / secondValue : 0
      case "%": return firstValue % secondValue
      case "xy": return Math.pow(firstValue, secondValue)
      case "y√x": return Math.pow(firstValue, 1 / secondValue)
      case "log": return Math.log(secondValue) / Math.log(firstValue)
      default: return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      const calculation = `${previousValue} ${operation} ${inputValue} = ${newValue}`

      setHistory(prev => [calculation, ...prev.slice(0, 9)])
      setLastAnswer(newValue)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
    setIsShift(false)
    setIsSecond(false)
    setDataSet([])
  }

  const handleBackspace = () => {
    setDisplay(display.length === 1 ? "0" : display.slice(0, -1))
  }

  const handleMemory = (action: string) => {
    const currentValue = parseFloat(display)

    switch (action) {
      case "M+":
        setMemory(memory + currentValue)
        break
      case "M-":
        setMemory(memory - currentValue)
        break
      case "MR":
        setDisplay(String(memory))
        setWaitingForOperand(true)
        break
      case "MC":
        setMemory(0)
        break
    }
  }


  const handleScientificFunction = (func: string) => {
    const inputValue = parseFloat(display)
    let result: number

    try {
      switch (func) {
        case "sin": result = Math.sin(angleMode === 'deg' ? inputValue * Math.PI / 180 : inputValue); break
        case "cos": result = Math.cos(angleMode === 'deg' ? inputValue * Math.PI / 180 : inputValue); break
        case "tan": result = Math.tan(angleMode === 'deg' ? inputValue * Math.PI / 180 : inputValue); break
        case "sin⁻¹": result = angleMode === 'deg' ? Math.asin(inputValue) * 180 / Math.PI : Math.asin(inputValue); break
        case "cos⁻¹": result = angleMode === 'deg' ? Math.acos(inputValue) * 180 / Math.PI : Math.acos(inputValue); break
        case "tan⁻¹": result = angleMode === 'deg' ? Math.atan(inputValue) * 180 / Math.PI : Math.atan(inputValue); break
        case "sinh": result = Math.sinh(inputValue); break
        case "cosh": result = Math.cosh(inputValue); break
        case "tanh": result = Math.tanh(inputValue); break
        case "sinh⁻¹": result = Math.asinh(inputValue); break
        case "cosh⁻¹": result = Math.acosh(inputValue); break
        case "tanh⁻¹": result = Math.atanh(inputValue); break
        case "ln": result = Math.log(inputValue); break
        case "log": result = Math.log10(inputValue); break
        case "log₂": result = Math.log2(inputValue); break
        case "x²": result = inputValue * inputValue; break
        case "x³": result = inputValue * inputValue * inputValue; break
        case "√": result = Math.sqrt(inputValue); break
        case "∛": result = Math.cbrt(inputValue); break
        case "eˣ": result = Math.exp(inputValue); break
        case "10ˣ": result = Math.pow(10, inputValue); break
        case "n!": result = factorial(inputValue); break
        case "nCr": result = combination(inputValue, parseFloat(prompt("Enter r:") || "0")); break
        case "nPr": result = permutation(inputValue, parseFloat(prompt("Enter r:") || "0")); break
        case "Γ": result = gamma(inputValue); break
        case "erf": result = errorFunction(inputValue); break
        case "erfc": result = 1 - errorFunction(inputValue); break
        case "π": result = Math.PI; break
        case "e": result = Math.E; break
        case "φ": result = (1 + Math.sqrt(5)) / 2; break
        case "1/x": result = 1 / inputValue; break
        case "±": result = -inputValue; break
        case "Ans": result = lastAnswer; break
        case "RND": result = Math.random(); break
        case "DATA":
          setDataSet([...dataSet, inputValue])
          setDisplay("Data added")
          return
        case "mean": result = dataSet.length > 0 ? dataSet.reduce((a, b) => a + b) / dataSet.length : 0; break
        case "std": result = standardDeviation(dataSet); break
        case "var": result = variance(dataSet); break
        case "SHOW_DATA":
          setDisplay(`Data: [${dataSet.join(", ")}]`)
          return
        case "CLR_DATA":
          setDataSet([])
          setDisplay("Data cleared")
          return
        default: result = inputValue; break
      }

      if (isNaN(result) || !isFinite(result)) {
        setDisplay("Error")
      } else {
        const calculation = `${func}(${inputValue}) = ${result}`
        setHistory(prev => [calculation, ...prev.slice(0, 9)])
        setDisplay(String(result))
        setWaitingForOperand(true)
      }
    } catch (error) {
      setDisplay("Error")
    }
  }

  const factorial = (n: number): number => {
    if (n < 0 || n !== Math.floor(n)) return NaN
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const combination = (n: number, r: number): number => {
    if (n < 0 || r < 0 || r > n || n !== Math.floor(n) || r !== Math.floor(r)) return NaN
    return factorial(n) / (factorial(r) * factorial(n - r))
  }

  const permutation = (n: number, r: number): number => {
    if (n < 0 || r < 0 || r > n || n !== Math.floor(n) || r !== Math.floor(r)) return NaN
    return factorial(n) / factorial(n - r)
  }

  const gamma = (x: number): number => {
    if (x <= 0) return NaN
    if (x === 1) return 1
    if (x < 1) return gamma(x + 1) / x
    const p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7]
    let g = 7
    while (x < g) g--
    x -= g
    let a = p[0]
    for (let i = 1; i < p.length; i++) {
      a += p[i] / (x + i)
    }
    const t = x + g + 0.5
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a
  }

  const errorFunction = (x: number): number => {
    const a1 = 0.254829592
    const a2 = -0.284496736
    const a3 = 1.421413741
    const a4 = -1.453152027
    const a5 = 1.061405429
    const p = 0.3275911

    const sign = x >= 0 ? 1 : -1
    x = Math.abs(x)

    const t = 1.0 / (1.0 + p * x)
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)

    return sign * y
  }

  const standardDeviation = (arr: number[]): number => {
    if (arr.length === 0) return 0
    const mean = arr.reduce((a, b) => a + b) / arr.length
    const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length
    return Math.sqrt(variance)
  }

  const variance = (arr: number[]): number => {
    if (arr.length === 0) return 0
    const mean = arr.reduce((a, b) => a + b) / arr.length
    return arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length
  }

  return (
    <div
      ref={calculatorRef}
      tabIndex={0}
      className="space-y-4 focus:outline-none"
      onKeyDown={(e) => {
        // Handle focus for keyboard navigation
        if (e.key === 'Tab') {
          e.preventDefault()
        }
      }}
    >

      {/* Calculator Display */}
      <GCard className="bg-card border-border">
        <GCardHeader className="pb-2 px-3 sm:px-6">
          <div className="flex items-center justify-between">
            <GCardTitle className="flex items-center gap-1.5 text-base">
              <Calculator className="h-3.5 w-3.5 text-foreground" />
              Scientific Calculator
            </GCardTitle>
            <div className="flex gap-2">
              <GBadge variant={angleMode === 'deg' ? 'default' : 'secondary'} className="text-[10px] h-6 bg-primary/10 text-foreground border-primary/20">
                {angleMode}
              </GBadge>
              <GBadge variant={isShift ? 'default' : 'secondary'} className="text-[10px] h-6 bg-secondary text-muted-foreground border-border">
                SHIFT
              </GBadge>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-3 px-3 sm:px-6">
          {/* Main Display */}
          <div className="bg-muted border border-border rounded-lg p-3 sm:p-3 text-right">
            <div className="text-2xl sm:text-xl md:text-2xl font-mono font-bold min-h-[3rem] sm:min-h-[2.5rem] break-all text-foreground">
              {formatDisplay(display)}
            </div>
            <div className="text-sm sm:text-xs text-muted-foreground mt-1">
              {operation && previousValue !== null && `${previousValue} ${operation}`}
            </div>
            <div className="text-xs sm:text-[10px] text-heading-accent mt-2 flex items-center justify-end gap-1">
              <svg className="h-3 w-3 sm:h-2.5 sm:w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              Keyboard ready
            </div>
          </div>

          {/* Memory Controls */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="text-sm sm:text-xs font-medium text-muted-foreground">Memory: {memory}</div>
            <div className="flex gap-2 sm:gap-1.5">
              <GButton size="sm" variant="outline" onClick={() => handleMemory("M+")} className="text-xs sm:text-[10px] h-8 sm:h-7 px-3 sm:px-2 border-border bg-card text-foreground hover:bg-secondary">
                M+
              </GButton>
              <GButton size="sm" variant="outline" onClick={() => handleMemory("M-")} className="text-xs sm:text-[10px] h-8 sm:h-7 px-3 sm:px-2 border-border bg-card text-foreground hover:bg-secondary">
                M-
              </GButton>
              <GButton size="sm" variant="outline" onClick={() => handleMemory("MR")} className="text-xs sm:text-[10px] h-8 sm:h-7 px-3 sm:px-2 border-border bg-card text-foreground hover:bg-secondary">
                MR
              </GButton>
              <GButton size="sm" variant="outline" onClick={() => handleMemory("MC")} className="text-xs sm:text-[10px] h-8 sm:h-7 px-3 sm:px-2 border-border bg-card text-foreground hover:bg-secondary">
                MC
              </GButton>
            </div>
          </div>
        </GCardContent>
      </GCard>

      {/* Calculator Grid */}
      <GCard className="bg-card border-border">
        <GCardContent className="p-4 sm:p-3 md:p-4">
          <div className="space-y-3">
            {/* Mode Indicators */}
            <div className="flex justify-between items-center flex-wrap gap-2 text-sm sm:text-xs">
              <div className="flex gap-2">
                <GBadge variant={angleMode === 'deg' ? 'default' : 'secondary'} className="text-xs sm:text-[10px] h-6 sm:h-5 bg-primary/10 text-foreground border-primary/20 px-2 sm:px-1.5">
                  {angleMode}
                </GBadge>
                <GBadge variant="outline" className="text-xs sm:text-[10px] h-6 sm:h-5 border-border bg-muted text-muted-foreground px-2 sm:px-1.5">
                  Data: {dataSet.length}
                </GBadge>
              </div>
              <div className="text-muted-foreground text-sm sm:text-xs">
                Memory: {memory.toFixed(2)}
              </div>
            </div>

            {/* Scientific Functions Grid - Standard Calculator Layout */}
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5 sm:gap-2 text-xs">
              {/* Row 1 - Scientific Functions Row 1 */}
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("sin")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                sin
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("cos")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                cos
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("tan")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                tan
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("ln")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ln
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("log")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                log
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("eˣ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                eˣ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("10ˣ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                10ˣ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("x²")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                x²
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("x³")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                x³
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("√")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                √x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("∛")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ∛x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("xy")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                xʸ
              </GButton>

              {/* Row 2 - Scientific Functions Row 2 */}
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("sin⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                sin⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("cos⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                cos⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("tan⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                tan⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("log₂")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                log₂
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("log")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                logₓ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("y√x")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ʸ√x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("n!")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                n!
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("nCr")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                nCr
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("nPr")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                nPr
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("Γ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                Γ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("erf")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                erf
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("erfc")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                erfc
              </GButton>

              {/* Row 3 - Scientific Functions Row 3 */}
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("sinh")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                sinh
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("cosh")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                cosh
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("tanh")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                tanh
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("sinh⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                sinh⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("cosh⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                cosh⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("tanh⁻¹")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                tanh⁻¹
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("DATA")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                DATA
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("mean")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                mean
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("std")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                std
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("var")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                var
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("SHOW_DATA")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                Show
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("CLR_DATA")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                Clear
              </GButton>

              {/* Row 4 - Constants & Special Functions */}
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("π")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                π
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("e")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                e
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("φ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                φ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("1/x")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                1/x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("±")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ±
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => setAngleMode(angleMode === 'deg' ? 'rad' : 'deg')} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                Deg/Rad
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => setDisplay(display + "(")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                (
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => setDisplay(display + ")")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                )
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("Ans")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                Ans
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("RND")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                RND
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => setDisplay(display + "e")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                EXP
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("%")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                %
              </GButton>

              {/* Row 5 - Number Pad: 7, 8, 9 + Operations */}
              <GButton variant="outline" size="sm" onClick={() => handleNumber("7")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                7
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("8")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                8
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("9")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                9
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("+")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                +
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("-")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                -
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("×")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ×
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("÷")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ÷
              </GButton>
              <GButton variant="outline" size="sm" onClick={handleBackspace} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ⌫
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("sin")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                sin
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("cos")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                cos
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("tan")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                tan
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("ln")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ln
              </GButton>

              {/* Row 6 - Number Pad: 4, 5, 6 + Functions */}
              <GButton variant="outline" size="sm" onClick={() => handleNumber("4")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                4
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("5")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                5
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("6")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                6
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("log")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                log
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("eˣ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                eˣ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("10ˣ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                10ˣ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("x²")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                x²
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("x³")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                x³
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("√")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                √x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("∛")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ∛x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("xy")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                xʸ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleOperation("y√x")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ʸ√x
              </GButton>

              {/* Row 7 - Number Pad: 1, 2, 3 + Bottom Row */}
              <GButton variant="outline" size="sm" onClick={() => handleNumber("1")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                1
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("2")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                2
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("3")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                3
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleNumber("0")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                0
              </GButton>
              <GButton variant="outline" size="sm" onClick={handleDecimal} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                .
              </GButton>
              <GButton variant="destructive" size="sm" onClick={handleClear} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap bg-destructive hover:bg-destructive/90 text-destructive-foreground border-destructive">
                AC
              </GButton>
              <GButton variant="default" size="sm" onClick={handleEquals} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground border-primary">
                =
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("π")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                π
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("e")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                e
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("φ")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                φ
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("1/x")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                1/x
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => handleScientificFunction("±")} className="h-10 sm:h-9 text-xs sm:text-[11px] px-2 sm:px-1.5 whitespace-nowrap border-border bg-card text-foreground hover:bg-secondary">
                ±
              </GButton>
            </div>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}