"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GProgress } from "@/ui/gprogress"
import {
    ShieldCheck,
    ShieldAlert,
    ShieldQuestion,
    Code2,
    BarChart3,
    ShieldBan,
    MessageSquareText,
    Variable,
    Ruler,
    Info,
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    Copy,
    Trash2,
    ClipboardPaste,
    ArrowRight,
    FileCode,
    Check,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────

interface CodeSignal {
    name: string
    icon: React.ReactNode
    score: number // 0-100 (0 = human, 100 = AI)
    weight: number
    verdict: "human" | "ai" | "mixed" | "inconclusive"
    details: string[]
    description: string
}

interface CodeAnalysisResult {
    signals: CodeSignal[]
    overallScore: number
    verdict: "likely_human" | "likely_ai" | "mixed"
    verdictLabel: string
    verdictDescription: string
    language: string
    stats: {
        totalLines: number
        codeLines: number
        commentLines: number
        blankLines: number
        functions: number
        avgLineLength: number
        maxNesting: number
    }
}

// ─── Language Detection ─────────────────────────────────────────────

type DetectedLang = "javascript" | "typescript" | "python" | "java" | "cpp" | "go" | "rust" | "csharp" | "php" | "ruby" | "swift" | "kotlin" | "unknown"

function detectLanguage(code: string): DetectedLang {
    const lines = code.split("\n")
    const text = code.toLowerCase()

    // TypeScript
    if (/\b(interface|type\s+\w+\s*=|:\s*(string|number|boolean|void|any|never)\b|<\w+>|as\s+\w+)/m.test(code)) return "typescript"
    // Rust
    if (/\b(fn\s+\w+|let\s+mut\s|impl\s|pub\s+fn|->|::new\(\)|&str|Vec<|Option<|Result<)/m.test(code)) return "rust"
    // Go
    if (/\b(func\s+\w+|package\s+\w+|import\s*\(|:=|fmt\.|go\s+func|chan\s)/m.test(code)) return "go"
    // Swift
    if (/\b(func\s+\w+|var\s+\w+\s*:|let\s+\w+\s*:|guard\s+let|if\s+let|@objc|import\s+UIKit|import\s+SwiftUI)/m.test(code)) return "swift"
    // Kotlin
    if (/\b(fun\s+\w+|val\s+\w+|var\s+\w+|companion\s+object|data\s+class|sealed\s+class|when\s*\()/m.test(code)) return "kotlin"
    // Python
    if (/\b(def\s+\w+|class\s+\w+.*:|import\s+\w+|from\s+\w+\s+import|if\s+__name__|self\.|elif\s)/m.test(code)) return "python"
    // Java
    if (/\b(public\s+(static\s+)?class|private\s+\w+|protected\s+\w+|System\.out|void\s+main|@Override|import\s+java\.)/m.test(code)) return "java"
    // C#
    if (/\b(using\s+System|namespace\s+\w+|public\s+class|private\s+\w+|Console\.Write|async\s+Task)/m.test(code) && text.includes("using ")) return "csharp"
    // C++
    if (/\b(#include|std::|cout|cin|nullptr|template\s*<|class\s+\w+\s*{|virtual\s)/m.test(code)) return "cpp"
    // PHP
    if (/(<\?php|\$\w+|function\s+\w+\s*\(|echo\s|namespace\s+\w+\\)/m.test(code)) return "php"
    // Ruby
    if (/\b(def\s+\w+|end$|puts\s|require\s|class\s+\w+\s*<|attr_accessor|do\s*\|)/m.test(code)) return "ruby"
    // JavaScript (last — broadest patterns)
    if (/\b(const\s+\w+|let\s+\w+|var\s+\w+|function\s+\w+|=>\s*{|require\(|module\.exports|console\.log)/m.test(code)) return "javascript"

    return "unknown"
}

function languageLabel(lang: DetectedLang): string {
    const labels: Record<DetectedLang, string> = {
        javascript: "JavaScript", typescript: "TypeScript", python: "Python",
        java: "Java", cpp: "C/C++", go: "Go", rust: "Rust", csharp: "C#",
        php: "PHP", ruby: "Ruby", swift: "Swift", kotlin: "Kotlin", unknown: "Unknown",
    }
    return labels[lang]
}

// ─── Code Utilities ─────────────────────────────────────────────────

function getCodeLines(code: string): string[] {
    return code.split("\n")
}

function isCommentLine(line: string, lang: DetectedLang): boolean {
    const trimmed = line.trim()
    if (trimmed.startsWith("//") || trimmed.startsWith("#") || trimmed.startsWith("*") || trimmed.startsWith("/*") || trimmed.startsWith("*/")) return true
    if ((lang === "python" || lang === "ruby") && trimmed.startsWith("#")) return true
    if (trimmed.startsWith("<!--") || trimmed.startsWith("-->")) return true
    return false
}

function isBlankLine(line: string): boolean {
    return line.trim().length === 0
}

function getIndentLevel(line: string): number {
    const match = line.match(/^(\s*)/)
    if (!match) return 0
    const whitespace = match[1]
    // Convert tabs to 4 spaces for consistency
    return whitespace.replace(/\t/g, "    ").length
}

function getNestingDepth(code: string, lang: DetectedLang): number {
    const lines = getCodeLines(code)
    let maxDepth = 0
    let currentDepth = 0

    if (lang === "python") {
        // Python uses indentation for nesting
        let baseIndent = -1
        for (const line of lines) {
            if (isBlankLine(line) || isCommentLine(line, lang)) continue
            const indent = getIndentLevel(line)
            if (baseIndent < 0) baseIndent = indent
            const level = Math.floor((indent - baseIndent) / 4)
            maxDepth = Math.max(maxDepth, level)
        }
    } else {
        // Brace-based languages
        for (const line of lines) {
            if (isCommentLine(line, lang)) continue
            for (const ch of line) {
                if (ch === "{") { currentDepth++; maxDepth = Math.max(maxDepth, currentDepth) }
                else if (ch === "}") { currentDepth = Math.max(0, currentDepth - 1) }
            }
        }
    }
    return maxDepth
}

function countFunctions(code: string, lang: DetectedLang): number {
    let count = 0
    const patterns: RegExp[] = []

    switch (lang) {
        case "python":
            patterns.push(/^\s*def\s+\w+/gm)
            patterns.push(/^\s*async\s+def\s+\w+/gm)
            break
        case "javascript": case "typescript":
            patterns.push(/\bfunction\s+\w+/g)
            patterns.push(/\b(const|let|var)\s+\w+\s*=\s*(async\s+)?(\([^)]*\)|[a-zA-Z_]\w*)\s*=>/g)
            patterns.push(/\b(const|let|var)\s+\w+\s*=\s*(async\s+)?function/g)
            // Method-like patterns (exclude control flow: if/else/for/while/switch/catch)
            patterns.push(/\b(?!if|else|for|while|switch|catch|return|throw|new|typeof|await|do)\w+\s*\([^)]*\)\s*\{/g)
            break
        case "java": case "csharp": case "kotlin":
            patterns.push(/\b(public|private|protected|static|void|int|string|boolean|fun|suspend)\s+\w+\s*\(/g)
            break
        case "go":
            patterns.push(/\bfunc\s+/g)
            break
        case "rust":
            patterns.push(/\b(pub\s+)?fn\s+\w+/g)
            break
        case "cpp":
            patterns.push(/\b\w+\s+\w+\s*\([^)]*\)\s*(const\s*)?\{/g)
            patterns.push(/\b\w+::\w+\s*\(/g)
            break
        case "php":
            patterns.push(/\bfunction\s+\w+/g)
            break
        case "ruby":
            patterns.push(/\bdef\s+\w+/g)
            break
        case "swift":
            patterns.push(/\bfunc\s+\w+/g)
            break
        default:
            patterns.push(/\bfunction\s+\w+/g)
            patterns.push(/\bdef\s+\w+/g)
            patterns.push(/\bfunc\s+\w+/g)
    }

    for (const pattern of patterns) {
        const matches = code.match(pattern)
        if (matches) count += matches.length
    }

    return Math.max(count, 1) // At least 1 (treat whole code as one unit)
}

// ─── Signal 1: Complexity Analysis ──────────────────────────────────

function analyzeComplexity(code: string, lang: DetectedLang): CodeSignal {
    const details: string[] = []
    const lines = getCodeLines(code)
    const codeOnlyLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))

    if (codeOnlyLines.length < 5) {
        return {
            name: "Complexity Analysis",
            icon: <BarChart3 className="w-5 h-5" />,
            score: 50,
            weight: 0.25,
            verdict: "inconclusive",
            details: ["Not enough code to analyze complexity (need at least 5 lines)"],
            description: "Analyzes cyclomatic complexity, nesting depth, and function size",
        }
    }

    const funcCount = countFunctions(code, lang)
    const maxNesting = getNestingDepth(code, lang)
    const linesPerFunction = codeOnlyLines.length / funcCount

    // Cyclomatic complexity — count decision points
    const decisionKeywords = /\b(if|else\s*if|elif|else|for|while|switch|case|catch|\?\?|&&|\|\||ternary)\b/g
    const decisionMatches = code.match(decisionKeywords) || []
    const cyclomaticComplexity = (decisionMatches.length / funcCount) + 1

    // Guard clauses — early returns
    const earlyReturns = (code.match(/^\s*(return|throw|continue|break)\b/gm) || []).length
    const totalReturns = (code.match(/\b(return|throw)\b/g) || []).length
    const guardClauseRatio = totalReturns > 0 ? earlyReturns / totalReturns : 0

    // Ternary and inline conditionals (human-like complexity)
    const ternaryCount = (code.match(/\?[^?].*:/g) || []).length

    let score: number

    // Human code: higher complexity (avg 3.97), deeper nesting, longer functions
    // AI code: lower complexity (avg 1.8-2.5), shallow nesting, shorter functions
    if (cyclomaticComplexity < 2 && maxNesting <= 2 && linesPerFunction < 10) {
        score = 80
        details.push("Very low complexity — flat, simple code typical of AI generation")
        details.push("AI code averages complexity of 1.8-2.5 vs human average of 3.97")
    } else if (cyclomaticComplexity < 3 && maxNesting <= 3) {
        score = 65
        details.push("Low complexity — consistent with AI-generated code patterns")
    } else if (cyclomaticComplexity < 3 && maxNesting > 3) {
        // Low complexity per function but deep nesting = many simple functions in a large file
        // This is common in AI-generated components with many small handler functions
        score = 55
        details.push("Low per-function complexity despite deep nesting — AI generates many simple functions")
    } else if (cyclomaticComplexity > 5 && maxNesting >= 4) {
        score = 15
        details.push("High complexity with deep nesting — typical of human-written code")
        details.push("Complex branching logic suggests human problem-solving approach")
    } else if (cyclomaticComplexity > 4) {
        score = 30
        details.push("Moderate-high complexity — leans toward human authorship")
    } else {
        score = 50
        details.push("Average complexity level")
    }

    // Short functions are AI-typical
    if (linesPerFunction < 8 && funcCount >= 2) {
        score = Math.min(score + 10, 90)
        details.push(`Short functions (avg ${linesPerFunction.toFixed(1)} lines) — AI generates concise, isolated functions`)
    } else if (linesPerFunction > 20) {
        score = Math.max(score - 10, 5)
        details.push(`Long functions (avg ${linesPerFunction.toFixed(1)} lines) — human tendency for complex, evolving functions`)
    }

    // Low guard clause usage is AI-typical
    if (guardClauseRatio < 0.15 && totalReturns >= 3) {
        score = Math.min(score + 8, 90)
        details.push("Few guard clauses — AI prefers nested if-else over early returns")
    } else if (guardClauseRatio > 0.4 && totalReturns >= 3) {
        score = Math.max(score - 8, 5)
        details.push("Frequent guard clauses — defensive human coding style")
    }

    details.push(`Complexity: ${cyclomaticComplexity.toFixed(1)} | Max nesting: ${maxNesting} | Lines/function: ${linesPerFunction.toFixed(1)} | Functions: ${funcCount}`)

    return {
        name: "Complexity Analysis",
        icon: <BarChart3 className="w-5 h-5" />,
        score,
        weight: 0.25,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Analyzes cyclomatic complexity, nesting depth, and function size",
    }
}

// ─── Signal 2: Error Handling & Safety ──────────────────────────────

function analyzeErrorHandling(code: string, lang: DetectedLang): CodeSignal {
    const details: string[] = []
    const lines = getCodeLines(code)
    const codeLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))

    if (codeLines.length < 5) {
        return {
            name: "Error Handling & Safety",
            icon: <ShieldBan className="w-5 h-5" />,
            score: 50,
            weight: 0.20,
            verdict: "inconclusive",
            details: ["Not enough code for error handling analysis"],
            description: "Checks for defensive coding patterns — null checks, try-catch, validation",
        }
    }

    const totalCodeLines = codeLines.length

    // Try-catch / error handling blocks
    const tryCatchCount = (code.match(/\b(try\s*{|try:|except|catch\s*\(|rescue|defer\s+func|\.catch\(|\.unwrap\(\)|\.expect\()/g) || []).length
    const tryCatchDensity = tryCatchCount / (totalCodeLines / 100)

    // Null/undefined/nil checks
    const nullChecks = (code.match(/\b(null|undefined|nil|None|nullptr)\b/g) || []).length
    const optionalChaining = (code.match(/\?\./g) || []).length
    const nullCoalescing = (code.match(/\?\?|or\s+None|getOrDefault|unwrap_or/g) || []).length
    const totalNullSafety = nullChecks + optionalChaining + nullCoalescing
    const nullSafetyDensity = totalNullSafety / (totalCodeLines / 100)

    // Input validation patterns
    const validationPatterns = (code.match(/\b(typeof|instanceof|isNaN|isFinite|Array\.isArray|\.length\s*[><=!]|\.size\s*[><=!]|assert|validate|check|verify)\b/gi) || []).length
    const validationDensity = validationPatterns / (totalCodeLines / 100)

    // Boundary condition checks
    const boundaryChecks = (code.match(/\b(<=?\s*0|>=?\s*\w+\.length|\.length\s*-\s*1|index\s*[<>]|bounds|overflow|underflow|empty|isEmpty)/g) || []).length

    // Error propagation — explicit error returns (Go style), Result types (Rust)
    const errorReturns = (code.match(/\b(return\s+(err|error|nil,\s*err)|Err\(|Error\(|raise\s|throw\s+new)/g) || []).length

    let score: number

    const totalDefensivePatterns = tryCatchCount + totalNullSafety + validationPatterns + boundaryChecks + errorReturns
    const defensiveDensity = totalDefensivePatterns / (totalCodeLines / 100)

    // AI code: fewer defensive patterns (75% more logic errors, missing null checks)
    // Human code: more defensive coding, guard clauses, error handling
    if (defensiveDensity < 1.0 && totalCodeLines >= 15) {
        score = 75
        details.push("Minimal defensive coding — AI often omits error handling and validation")
        details.push("Research shows AI code has 75% more logic errors than human code")
    } else if (defensiveDensity < 2.5) {
        score = 60
        details.push("Light error handling — somewhat consistent with AI-generated patterns")
    } else if (defensiveDensity > 6) {
        score = 15
        details.push("Extensive defensive coding — thorough error handling typical of experienced humans")
    } else if (defensiveDensity > 4) {
        score = 30
        details.push("Good defensive coding — leans toward human authorship")
    } else {
        score = 45
        details.push("Moderate error handling coverage")
    }

    // No try-catch in significant code is suspicious
    if (tryCatchCount === 0 && totalCodeLines >= 20) {
        score = Math.min(score + 10, 90)
        details.push("No error handling blocks — AI frequently omits try-catch/except")
    }

    // No null safety in code that accesses properties/methods
    const propertyAccess = (code.match(/\.\w+/g) || []).length
    if (totalNullSafety === 0 && propertyAccess >= 10) {
        score = Math.min(score + 8, 90)
        details.push("No null safety despite property access — AI trusts inputs without validation")
    }

    details.push(`Try-catch: ${tryCatchCount} | Null safety: ${totalNullSafety} | Validation: ${validationPatterns} | Boundary: ${boundaryChecks} | Density: ${defensiveDensity.toFixed(1)}/100 lines`)

    return {
        name: "Error Handling & Safety",
        icon: <ShieldBan className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Checks for defensive coding patterns — null checks, try-catch, validation",
    }
}

// ─── Signal 3: Comment Patterns ─────────────────────────────────────

function analyzeComments(code: string, lang: DetectedLang): CodeSignal {
    const details: string[] = []
    const lines = getCodeLines(code)
    const codeLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))
    const commentLines = lines.filter(l => isCommentLine(l, lang))

    if (codeLines.length < 5) {
        return {
            name: "Comment Patterns",
            icon: <MessageSquareText className="w-5 h-5" />,
            score: 50,
            weight: 0.15,
            verdict: "inconclusive",
            details: ["Not enough code for comment analysis"],
            description: "Analyzes comment density, generic phrases, and AI-typical documentation",
        }
    }

    const commentRatio = commentLines.length / (commentLines.length + codeLines.length)

    // Extract comment text
    const commentTexts = commentLines.map(l => {
        return l.trim()
            .replace(/^\/\/\s*/, "")
            .replace(/^#\s*/, "")
            .replace(/^\/\*\s*/, "")
            .replace(/^\*\s*/, "")
            .replace(/\*\/$/, "")
            .trim()
    }).filter(t => t.length > 3)

    // AI-typical generic comment phrases
    const genericPatterns = [
        /^(this|the)\s+(function|method|class|module|component)\s+(is|does|will|returns|handles|creates|initializes|processes)/i,
        /^(initialize|init|setup|set up|configure|create|define|declare|handle|process|validate|check|update|get|set|fetch|load|parse|render|display|format|convert|transform|calculate|compute)/i,
        /^(helper|utility|main|entry|base|default|primary|core)\s+(function|method|class|handler)/i,
        /^(TODO|FIXME|HACK|NOTE|XXX|WARN):/i,
        /^(returns?|params?|args?|throws?|see|since|version|author|deprecated)\s/i,
        /^(import|export|require|include)\s+(necessary|required|needed)/i,
        /^(here we|now we|first we|then we|next we|finally we)/i,
        /^(step \d|phase \d)/i,
        /^(the following|below is|above is)/i,
    ]

    let genericCount = 0
    let specificCount = 0

    for (const text of commentTexts) {
        let isGeneric = false
        for (const pattern of genericPatterns) {
            if (pattern.test(text)) { isGeneric = true; break }
        }
        // Very short comments (1-2 words) are usually generic
        if (text.split(/\s+/).length <= 2) isGeneric = true
        if (isGeneric) genericCount++
        else specificCount++
    }

    const genericRatio = commentTexts.length > 0 ? genericCount / commentTexts.length : 0

    // Inline comments vs block comments
    const inlineComments = lines.filter(l => {
        const trimmed = l.trim()
        return !trimmed.startsWith("//") && !trimmed.startsWith("#") && !trimmed.startsWith("/*") &&
            (l.includes("//") || (l.includes("#") && (lang === "python" || lang === "ruby")))
    }).length

    // Decorative comment separators — very AI-typical pattern
    // e.g., "// ─── Section Name ───", "// ============", "// ----------"
    const decorativeHeaders = commentLines.filter(l => {
        const t = l.trim()
        return /^(\/\/|#)\s*[─━═\-=~*]{3,}/.test(t) || /[─━═\-=~*]{3,}\s*$/.test(t)
    }).length

    let score: number

    // AI: higher comment density with generic explanatory comments
    // Human: fewer comments, more specific/contextual, inline comments
    if (commentRatio > 0.35 && genericRatio > 0.6) {
        score = 80
        details.push("High comment density with generic descriptions — strong AI code pattern")
        details.push("AI tends to over-explain with 'This function does X' style comments")
    } else if (commentRatio > 0.25 && genericRatio > 0.4) {
        score = 65
        details.push("Moderate-high commenting with generic patterns")
    } else if (commentRatio < 0.05 && codeLines.length >= 15) {
        score = 25
        details.push("Minimal comments — experienced developers let code speak for itself")
    } else if (commentRatio < 0.15 && genericRatio < 0.3 && specificCount >= 2) {
        score = 20
        details.push("Sparse, specific comments — human developers add contextual notes")
    } else if (genericRatio > 0.7 && commentTexts.length >= 3) {
        score = 70
        details.push("Mostly generic/formulaic comments — AI documentation pattern")
    } else {
        score = 45
        details.push("Average commenting patterns")
    }

    // No comments at all in short code — AI sometimes generates clean code without comments
    if (commentTexts.length === 0 && codeLines.length >= 10 && codeLines.length <= 30) {
        score = 55
        details.push("No comments in moderate code — could be either clean human or minimal AI")
    }

    // Decorative section headers are a strong AI pattern
    if (decorativeHeaders >= 3) {
        score = Math.min(score + 20, 90)
        details.push(`${decorativeHeaders} decorative section headers (// ───) — very common AI code organization pattern`)
    } else if (decorativeHeaders >= 1) {
        score = Math.min(score + 10, 85)
        details.push(`Decorative comment separators detected — AI-typical code organization`)
    }

    details.push(`Comment ratio: ${(commentRatio * 100).toFixed(0)}% | Generic: ${genericCount}/${commentTexts.length} | Inline: ${inlineComments}`)

    return {
        name: "Comment Patterns",
        icon: <MessageSquareText className="w-5 h-5" />,
        score,
        weight: 0.15,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Analyzes comment density, generic phrases, and AI-typical documentation",
    }
}

// ─── Signal 4: Naming & Vocabulary ──────────────────────────────────

function analyzeNaming(code: string, lang: DetectedLang): CodeSignal {
    const details: string[] = []
    const lines = getCodeLines(code)
    const codeLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))

    if (codeLines.length < 5) {
        return {
            name: "Naming & Vocabulary",
            icon: <Variable className="w-5 h-5" />,
            score: 50,
            weight: 0.20,
            verdict: "inconclusive",
            details: ["Not enough code for naming analysis"],
            description: "Analyzes variable naming patterns, genericness, and code vocabulary diversity",
        }
    }

    // Extract identifiers (variable names, function names)
    const identifiers: string[] = []

    // Variable declarations
    const varPatterns = [
        /\b(?:const|let|var|int|float|double|string|bool|boolean|char)\s+(\w+)/g,
        /\b(?:def|fun|func|fn)\s+(\w+)/g,
        /(\w+)\s*=/g,
    ]

    for (const pattern of varPatterns) {
        let match
        const pat = new RegExp(pattern.source, pattern.flags)
        while ((match = pat.exec(code)) !== null) {
            if (match[1] && match[1].length > 1 && !/^(if|else|for|while|return|class|function|const|let|var|import|export|from|true|false|null|undefined|this|self|new|try|catch|throw|switch|case|break|continue|default|public|private|protected|static|void|int|float|double|string|bool|boolean|char|async|await|yield|def|fun|func|fn|val|mut|pub|use|mod|impl|struct|enum|trait|type|interface|package|namespace|using|include|require|extends|implements|abstract|final|override|virtual)$/.test(match[1])) {
                identifiers.push(match[1])
            }
        }
    }

    // AI-typical generic variable names
    const genericNames = new Set([
        "result", "data", "item", "items", "value", "values", "temp", "tmp",
        "output", "input", "response", "request", "res", "req", "ret",
        "arr", "list", "obj", "str", "num", "val", "idx", "key",
        "element", "elements", "entry", "entries", "record", "records",
        "count", "total", "sum", "index", "length", "size",
        "callback", "handler", "listener", "fn", "cb",
        "config", "options", "params", "args", "props",
        "error", "err", "msg", "message",
        "current", "previous", "next", "prev",
        "x", "y", "z", "i", "j", "k", "n", "m",
    ])

    let genericCount = 0
    let domainSpecificCount = 0
    const uniqueIdentifiers = new Set<string>()

    for (const id of identifiers) {
        uniqueIdentifiers.add(id.toLowerCase())
        // Check for generic naming
        const lower = id.toLowerCase()
        // Also check parts of camelCase/snake_case names
        const parts = lower.split(/[_A-Z]/).map(p => p.toLowerCase()).filter(p => p.length > 0)
        const isGeneric = genericNames.has(lower) || (parts.length === 1 && genericNames.has(parts[0]))

        if (isGeneric) genericCount++
        else domainSpecificCount++
    }

    const genericRatio = identifiers.length > 0 ? genericCount / identifiers.length : 0
    const identifierDiversity = identifiers.length > 0 ? uniqueIdentifiers.size / identifiers.length : 1

    // Naming convention consistency — AI is more consistent
    let camelCaseCount = 0
    let snakeCaseCount = 0
    let pascalCaseCount = 0
    for (const id of uniqueIdentifiers) {
        if (id.includes("_")) snakeCaseCount++
        else if (id[0] === id[0].toUpperCase() && id.length > 1) pascalCaseCount++
        else camelCaseCount++
    }
    const totalNamed = camelCaseCount + snakeCaseCount + pascalCaseCount
    const dominantConvention = Math.max(camelCaseCount, snakeCaseCount, pascalCaseCount)
    const conventionConsistency = totalNamed > 0 ? dominantConvention / totalNamed : 1

    // Average identifier length — AI tends toward descriptive but formulaic names
    const avgNameLength = identifiers.length > 0
        ? identifiers.reduce((a, b) => a + b.length, 0) / identifiers.length
        : 0

    let score: number

    // AI: generic names, high consistency, moderate length
    // Human: domain-specific names, some inconsistency, varied length
    if (genericRatio > 0.6 && identifiers.length >= 5) {
        score = 75
        details.push("High generic variable naming — AI defaults to 'result', 'data', 'item' patterns")
    } else if (genericRatio > 0.4) {
        score = 60
        details.push("Moderate generic naming — somewhat typical of AI-generated code")
    } else if (genericRatio < 0.2 && domainSpecificCount >= 5) {
        score = 15
        details.push("Domain-specific naming — reflects deep understanding of the problem space")
    } else if (genericRatio < 0.3) {
        score = 30
        details.push("Good domain-specific naming — leans human")
    } else {
        score = 45
        details.push("Average naming patterns")
    }

    // Very high naming consistency is AI-typical (humans are messier)
    // In large codebases (50+ unique identifiers), near-perfect consistency is very suspicious
    if (conventionConsistency > 0.95 && uniqueIdentifiers.size >= 50) {
        score = Math.min(score + 20, 90)
        details.push(`Near-perfect naming consistency (${(conventionConsistency * 100).toFixed(0)}%) across ${uniqueIdentifiers.size} identifiers — very strong AI indicator`)
    } else if (conventionConsistency > 0.95 && uniqueIdentifiers.size >= 8) {
        score = Math.min(score + 12, 90)
        details.push("Perfect naming convention consistency — AI is more uniform than human developers")
    } else if (conventionConsistency < 0.7 && uniqueIdentifiers.size >= 8) {
        score = Math.max(score - 8, 5)
        details.push("Mixed naming conventions — typical of real-world human codebases")
    }

    // Low identifier diversity (reusing same variable names)
    // In large files, very low diversity is a strong AI signal
    if (identifierDiversity < 0.3 && identifiers.length >= 50) {
        score = Math.min(score + 18, 90)
        details.push(`Very low identifier diversity (${identifierDiversity.toFixed(2)}) in ${identifiers.length} identifiers — heavy variable reuse typical of AI`)
    } else if (identifierDiversity < 0.5 && identifiers.length >= 10) {
        score = Math.min(score + 10, 90)
        details.push("Low identifier diversity — repetitive variable reuse")
    }

    details.push(`Generic: ${genericCount}/${identifiers.length} (${(genericRatio * 100).toFixed(0)}%) | Diversity: ${identifierDiversity.toFixed(2)} | Convention: ${(conventionConsistency * 100).toFixed(0)}% consistent | Avg name length: ${avgNameLength.toFixed(1)}`)

    return {
        name: "Naming & Vocabulary",
        icon: <Variable className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Analyzes variable naming patterns, genericness, and code vocabulary diversity",
    }
}

// ─── Signal 5: Style Uniformity ─────────────────────────────────────

function analyzeStyleUniformity(code: string, lang: DetectedLang): CodeSignal {
    const details: string[] = []
    const lines = getCodeLines(code)
    const codeLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))

    if (codeLines.length < 5) {
        return {
            name: "Style Uniformity",
            icon: <Ruler className="w-5 h-5" />,
            score: 50,
            weight: 0.20,
            verdict: "inconclusive",
            details: ["Not enough code for style analysis"],
            description: "Measures line length variation, indentation consistency, and code density",
        }
    }

    // Line length variation — AI produces more uniform line lengths
    const lineLengths = codeLines.map(l => l.length)
    const avgLineLength = lineLengths.reduce((a, b) => a + b, 0) / lineLengths.length
    const lineLengthVariance = lineLengths.reduce((a, b) => a + Math.pow(b - avgLineLength, 2), 0) / lineLengths.length
    const lineLengthCV = avgLineLength > 0 ? Math.sqrt(lineLengthVariance) / avgLineLength : 0

    // Indentation level variation
    const indentLevels = codeLines.map(l => getIndentLevel(l))
    const avgIndent = indentLevels.reduce((a, b) => a + b, 0) / indentLevels.length
    const indentVariance = indentLevels.reduce((a, b) => a + Math.pow(b - avgIndent, 2), 0) / indentLevels.length
    const indentStdDev = Math.sqrt(indentVariance)

    // Blank line patterns — AI uses regular spacing
    const blankLinePositions: number[] = []
    lines.forEach((l, i) => { if (isBlankLine(l)) blankLinePositions.push(i) })
    let blankLineRegularity = 0
    if (blankLinePositions.length >= 2) {
        const gaps: number[] = []
        for (let i = 1; i < blankLinePositions.length; i++) {
            gaps.push(blankLinePositions[i] - blankLinePositions[i - 1])
        }
        const gapMean = gaps.reduce((a, b) => a + b, 0) / gaps.length
        const gapStd = Math.sqrt(gaps.reduce((a, b) => a + Math.pow(b - gapMean, 2), 0) / gaps.length)
        blankLineRegularity = gapMean > 0 ? gapStd / gapMean : 0
    }

    // Statement density — code lines per logical block
    const semiColons = (code.match(/;/g) || []).length
    const statementDensity = codeLines.length > 0 ? semiColons / codeLines.length : 0

    // Trailing whitespace, mixed tabs/spaces (human messiness)
    const trailingWhitespace = lines.filter(l => /\s+$/.test(l) && l.trim().length > 0).length
    const mixedIndentation = lines.some(l => /^\t/.test(l)) && lines.some(l => /^ /.test(l))

    let score: number

    // AI: low line length CV (uniform), regular blank lines, consistent indentation
    // Human: high CV (varied), irregular spacing, some inconsistency
    if (lineLengthCV < 0.35 && codeLines.length >= 10) {
        score = 75
        details.push("Very uniform line lengths — AI generates consistently formatted code")
    } else if (lineLengthCV < 0.5) {
        score = 60
        details.push("Low line length variation — somewhat consistent with AI patterns")
    } else if (lineLengthCV > 0.8) {
        score = 15
        details.push("High line length variation — natural human coding rhythm")
    } else if (lineLengthCV > 0.65) {
        score = 30
        details.push("Good line length variation — leans human")
    } else {
        score = 45
        details.push("Average line length variation")
    }

    // Regular blank line spacing
    if (blankLineRegularity < 0.3 && blankLinePositions.length >= 3) {
        score = Math.min(score + 10, 90)
        details.push("Regular blank line spacing — AI produces evenly spaced code blocks")
    } else if (blankLineRegularity > 0.8) {
        score = Math.max(score - 5, 5)
        details.push("Irregular blank line spacing — organic human formatting")
    }

    // Low indentation variance means flat, uniform code
    if (indentStdDev < 2 && codeLines.length >= 15) {
        score = Math.min(score + 8, 90)
        details.push("Low indentation variance — flat, uniform code structure")
    }

    // Mixed indentation = human messiness
    if (mixedIndentation) {
        score = Math.max(score - 10, 5)
        details.push("Mixed tabs/spaces — typical of real-world human code")
    }

    // Trailing whitespace = human messiness (linters catch this)
    if (trailingWhitespace > 2) {
        score = Math.max(score - 5, 5)
        details.push("Trailing whitespace found — common in human-edited code")
    }

    // In large files (200+ lines), check for uniform code block sizes
    // AI generates functions/blocks of similar sizes
    if (codeLines.length >= 100) {
        // Split code into blocks by blank lines and check if blocks are uniformly sized
        const blocks: number[] = []
        let blockSize = 0
        for (const line of lines) {
            if (isBlankLine(line)) {
                if (blockSize > 2) blocks.push(blockSize)
                blockSize = 0
            } else {
                blockSize++
            }
        }
        if (blockSize > 2) blocks.push(blockSize)

        if (blocks.length >= 5) {
            const blockMean = blocks.reduce((a, b) => a + b, 0) / blocks.length
            const blockStd = Math.sqrt(blocks.reduce((a, b) => a + Math.pow(b - blockMean, 2), 0) / blocks.length)
            const blockCV = blockMean > 0 ? blockStd / blockMean : 0

            if (blockCV < 0.4) {
                score = Math.min(score + 15, 85)
                details.push(`Uniform code block sizes (${blocks.length} blocks, CV ${blockCV.toFixed(2)}) — AI generates evenly sized sections`)
            }
        }
    }

    details.push(`Line length CV: ${lineLengthCV.toFixed(2)} | Indent std: ${indentStdDev.toFixed(1)} | Blank line regularity: ${blankLineRegularity.toFixed(2)} | Avg line: ${avgLineLength.toFixed(0)} chars`)

    return {
        name: "Style Uniformity",
        icon: <Ruler className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Measures line length variation, indentation consistency, and code density",
    }
}

// ─── Main Analysis ──────────────────────────────────────────────────

function analyzeCode(code: string): CodeAnalysisResult {
    const lang = detectLanguage(code)
    const lines = getCodeLines(code)
    const codeLines = lines.filter(l => !isBlankLine(l) && !isCommentLine(l, lang))
    const commentLines = lines.filter(l => isCommentLine(l, lang))
    const blankLines = lines.filter(l => isBlankLine(l))

    const complexitySignal = analyzeComplexity(code, lang)
    const errorHandlingSignal = analyzeErrorHandling(code, lang)
    const commentSignal = analyzeComments(code, lang)
    const namingSignal = analyzeNaming(code, lang)
    const styleSignal = analyzeStyleUniformity(code, lang)

    const signals = [complexitySignal, errorHandlingSignal, commentSignal, namingSignal, styleSignal]

    // Weighted score
    let overallScore = Math.round(signals.reduce((sum, s) => sum + s.score * s.weight, 0))

    // Large codebase uniformity bonus — AI generates large files with repetitive patterns
    // Check for many functions with similar structure (similar line counts)
    if (codeLines.length >= 100) {
        // In large AI-generated files, the sheer uniformity of structure is a signal
        // Check if multiple signals lean AI even slightly
        const aiLeaning = signals.filter(s => s.score >= 50).length
        if (aiLeaning >= 3) {
            overallScore = Math.min(overallScore + 8, 85)
        }
    }

    // Cross-signal boosting
    const strongAISignals = signals.filter(s => s.score >= 75).length
    const strongHumanSignals = signals.filter(s => s.score <= 25).length

    if (strongAISignals >= 3 && overallScore < 70) {
        overallScore = Math.min(overallScore + 10, 80)
    } else if (strongAISignals >= 2 && overallScore < 65) {
        overallScore = Math.min(overallScore + 7, 72)
    }

    if (strongHumanSignals >= 3 && overallScore > 30) {
        overallScore = Math.max(overallScore - 10, 20)
    } else if (strongHumanSignals >= 2 && overallScore > 35) {
        overallScore = Math.max(overallScore - 7, 28)
    }

    // Stats
    const avgLineLength = codeLines.length > 0
        ? codeLines.reduce((a, l) => a + l.length, 0) / codeLines.length
        : 0

    let verdict: CodeAnalysisResult["verdict"]
    let verdictLabel: string
    let verdictDescription: string

    if (overallScore >= 65) {
        verdict = "likely_ai"
        verdictLabel = "Likely AI-Generated"
        verdictDescription = "Multiple code patterns suggest this was generated by AI (Copilot, ChatGPT, Claude). The code shows low complexity, uniform formatting, generic naming, and minimal defensive coding typical of AI-generated code."
    } else if (overallScore <= 35) {
        verdict = "likely_human"
        verdictLabel = "Likely Human-Written"
        verdictDescription = "Code patterns suggest human authorship. The code shows varied complexity, domain-specific naming, defensive coding practices, and natural style variation typical of human developers."
    } else {
        verdict = "mixed"
        verdictLabel = "Mixed Signals"
        verdictDescription = "The analysis shows mixed signals. This could be human code that follows clean-code practices, AI code that was edited by a developer, or a human-AI collaboration."
    }

    return {
        signals,
        overallScore,
        verdict,
        verdictLabel,
        verdictDescription,
        language: languageLabel(lang),
        stats: {
            totalLines: lines.length,
            codeLines: codeLines.length,
            commentLines: commentLines.length,
            blankLines: blankLines.length,
            functions: countFunctions(code, lang),
            avgLineLength: parseFloat(avgLineLength.toFixed(1)),
            maxNesting: getNestingDepth(code, lang),
        },
    }
}

// ─── UI Component ───────────────────────────────────────────────────

export function AICodeDetector() {
    const [code, setCode] = useState("")
    const [result, setResult] = useState<CodeAnalysisResult | null>(null)
    const [expandedSignals, setExpandedSignals] = useState<Set<number>>(new Set())
    const [copied, setCopied] = useState(false)

    function handleAnalyze() {
        if (code.trim().length < 30) return
        const r = analyzeCode(code)
        setResult(r)
        setExpandedSignals(new Set(r.signals.map((_, i) => i)))
    }

    function handleClear() {
        setCode("")
        setResult(null)
        setExpandedSignals(new Set())
    }

    async function handlePaste() {
        try {
            const clipboard = await navigator.clipboard.readText()
            setCode(clipboard)
            setResult(null)
        } catch { /* clipboard denied */ }
    }

    function toggleSignal(index: number) {
        setExpandedSignals(prev => {
            const next = new Set(prev)
            if (next.has(index)) next.delete(index)
            else next.add(index)
            return next
        })
    }

    const lineCount = code.split("\n").length
    const charCount = code.length
    const isReady = code.trim().length >= 30

    const verdictColors: Record<string, string> = {
        likely_human: "text-green-500",
        likely_ai: "text-red-500",
        mixed: "text-yellow-500",
    }

    const verdictIcons: Record<string, React.ReactNode> = {
        likely_human: <ShieldCheck className="w-8 h-8" />,
        likely_ai: <ShieldAlert className="w-8 h-8" />,
        mixed: <ShieldQuestion className="w-8 h-8" />,
    }

    const verdictBg: Record<string, string> = {
        likely_human: "bg-green-500/10 border-green-500/30",
        likely_ai: "bg-red-500/10 border-red-500/30",
        mixed: "bg-yellow-500/10 border-yellow-500/30",
    }

    const signalVerdictColor: Record<string, string> = {
        human: "text-green-500",
        ai: "text-red-500",
        mixed: "text-yellow-500",
        inconclusive: "text-muted-foreground",
    }

    const signalVerdictBg: Record<string, string> = {
        human: "bg-green-500/10",
        ai: "bg-red-500/10",
        mixed: "bg-yellow-500/10",
        inconclusive: "bg-muted/50",
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6">
            {/* Input Area */}
            <GCard className="p-5">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-primary" />
                            Paste Your Code
                        </h2>
                        <div className="flex gap-2">
                            <GButton size="sm" variant="outline" onClick={handlePaste} className="gap-1.5">
                                <ClipboardPaste className="w-3.5 h-3.5" />
                                Paste
                            </GButton>
                            {code && (
                                <GButton size="sm" variant="outline" onClick={handleClear} className="gap-1.5">
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Clear
                                </GButton>
                            )}
                        </div>
                    </div>

                    <textarea
                        value={code}
                        onChange={(e) => { setCode(e.target.value); setResult(null) }}
                        placeholder="Paste the code you want to analyze here... (minimum 30 characters)"
                        className="w-full min-h-[260px] resize-y text-sm font-mono bg-muted/50 border border-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/50"
                        spellCheck={false}
                    />

                    <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground space-x-3">
                            <span>{charCount} characters</span>
                            <span>{lineCount} lines</span>
                            {result && (
                                <span className="text-primary font-medium">Detected: {result.language}</span>
                            )}
                            {!isReady && code.length > 0 && (
                                <span className="text-yellow-500">Need at least 30 characters</span>
                            )}
                        </div>
                        <GButton onClick={handleAnalyze} disabled={!isReady} className="gap-2">
                            <ArrowRight className="w-4 h-4" />
                            Detect AI Code
                        </GButton>
                    </div>
                </div>
            </GCard>

            {/* Results */}
            {result && (
                <div className="space-y-5">
                    {/* Verdict */}
                    <GCard className={cn("p-5 border-2", verdictBg[result.verdict])}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className={cn("p-3 rounded-full", verdictBg[result.verdict], verdictColors[result.verdict])}>
                                {verdictIcons[result.verdict]}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className={cn("text-2xl font-bold", verdictColors[result.verdict])}>
                                        {result.verdictLabel}
                                    </h2>
                                    <span className={cn("text-sm font-mono px-3 py-1 rounded-full", verdictBg[result.verdict], verdictColors[result.verdict])}>
                                        Score: {result.overallScore}/100
                                    </span>
                                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                        {result.language}
                                    </span>
                                </div>
                                <p className="text-muted-foreground mt-1">{result.verdictDescription}</p>
                            </div>
                        </div>

                        {/* Score Bar */}
                        <div className="mt-4 space-y-1">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Human</span>
                                <span>AI-Generated</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        "h-full rounded-full transition-all duration-1000",
                                        result.overallScore >= 65 ? "bg-red-500" :
                                            result.overallScore <= 35 ? "bg-green-500" : "bg-yellow-500"
                                    )}
                                    style={{ width: `${result.overallScore}%` }}
                                />
                            </div>
                        </div>
                    </GCard>

                    {/* Code Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                        {[
                            { label: "Total Lines", value: result.stats.totalLines },
                            { label: "Code Lines", value: result.stats.codeLines },
                            { label: "Comments", value: result.stats.commentLines },
                            { label: "Blank Lines", value: result.stats.blankLines },
                            { label: "Functions", value: result.stats.functions },
                            { label: "Avg Line", value: `${result.stats.avgLineLength}` },
                            { label: "Max Nesting", value: result.stats.maxNesting },
                        ].map(stat => (
                            <GCard key={stat.label} className="p-3 text-center">
                                <p className="text-lg font-bold">{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </GCard>
                        ))}
                    </div>

                    {/* Signal Breakdown */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Info className="w-5 h-5 text-muted-foreground" />
                            Signal Breakdown
                        </h3>

                        {result.signals.map((signal, index) => (
                            <GCard key={signal.name} className="overflow-hidden">
                                <button
                                    onClick={() => toggleSignal(index)}
                                    className="w-full p-4 flex items-center gap-4 text-left hover:bg-muted/50 transition-colors"
                                >
                                    <div className={cn("p-2 rounded-lg", signalVerdictBg[signal.verdict])}>
                                        <span className={signalVerdictColor[signal.verdict]}>{signal.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-medium">{signal.name}</span>
                                            <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", signalVerdictBg[signal.verdict], signalVerdictColor[signal.verdict])}>
                                                {signal.verdict === "human" ? "Human" : signal.verdict === "ai" ? "AI Detected" : signal.verdict === "mixed" ? "Mixed" : "Inconclusive"}
                                            </span>
                                            <span className="text-xs text-muted-foreground">(weight: {(signal.weight * 100).toFixed(0)}%)</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-0.5">{signal.description}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={cn("font-mono text-sm font-bold hidden sm:block", signalVerdictColor[signal.verdict])}>
                                            {signal.score}/100
                                        </span>
                                        {expandedSignals.has(index) ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                                    </div>
                                </button>

                                {expandedSignals.has(index) && (
                                    <div className="px-4 pb-4 pt-0 border-t">
                                        <div className="mt-3 space-y-1.5">
                                            {signal.details.map((detail, di) => (
                                                <p key={di} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="text-muted-foreground/50 mt-1">&#8226;</span>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full", signal.score >= 65 ? "bg-red-500" : signal.score <= 30 ? "bg-green-500" : "bg-yellow-500")}
                                                style={{ width: `${signal.score}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </GCard>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <GCard className="p-4 bg-muted/30 border-muted">
                        <div className="flex gap-3 items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-muted-foreground space-y-1">
                                <p className="font-medium text-foreground">Disclaimer</p>
                                <p>
                                    No AI code detector is 100% accurate. This tool uses statistical heuristic analysis of code patterns — not machine learning. Results may vary based on coding style, language, and team conventions. Clean human code following strict linting rules can resemble AI patterns. AI code edited by humans may appear more human-written. Always use professional judgment alongside automated analysis.
                                </p>
                            </div>
                        </div>
                    </GCard>
                </div>
            )}
        </div>
    )
}
