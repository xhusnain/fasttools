"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GProgress } from "@/ui/gprogress"
import {
    ShieldCheck,
    ShieldAlert,
    ShieldQuestion,
    Type,
    BarChart3,
    Repeat,
    Sparkles,
    BookOpen,
    Gauge,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    Info,
    Copy,
    Trash2,
    ClipboardPaste,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────

interface TextSignal {
    name: string
    icon: React.ReactNode
    score: number // 0-100 (0 = human, 100 = AI)
    weight: number
    verdict: "human" | "ai" | "mixed" | "inconclusive"
    details: string[]
    description: string
}

interface TextAnalysisResult {
    signals: TextSignal[]
    overallScore: number
    verdict: "likely_human" | "likely_ai" | "mixed"
    verdictLabel: string
    verdictDescription: string
    stats: {
        wordCount: number
        sentenceCount: number
        paragraphCount: number
        avgWordsPerSentence: number
        readingLevel: string
    }
}

// ─── Text Utilities ──────────────────────────────────────────────────

function tokenize(text: string): string[] {
    return text.toLowerCase().match(/\b[a-z''-]+\b/g) || []
}

function getSentences(text: string): string[] {
    return text
        .split(/(?<=[.!?])\s+/)
        .map(s => s.trim())
        .filter(s => s.length > 3)
}

function getParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(p => p.length > 10)
}

function syllableCount(word: string): number {
    const w = word.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").match(/[aeiouy]{1,2}/g)
    return w ? w.length : 1
}

// ─── Signal 1: Sentence Length Burstiness ────────────────────────────

function analyzeBurstiness(sentences: string[]): TextSignal {
    const details: string[] = []

    if (sentences.length < 3) {
        return {
            name: "Sentence Burstiness",
            icon: <BarChart3 className="w-5 h-5" />,
            score: 50,
            weight: 0.20,
            verdict: "inconclusive",
            details: ["Not enough sentences to analyze burstiness (need at least 3)"],
            description: "Measures variation in sentence length — humans write with more variety",
        }
    }

    const lengths = sentences.map(s => tokenize(s).length)
    const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length
    const variance = lengths.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / lengths.length
    const stdDev = Math.sqrt(variance)
    const coeffOfVariation = mean > 0 ? stdDev / mean : 0

    // Consecutive sentence length differences
    let totalDiff = 0
    for (let i = 1; i < lengths.length; i++) {
        totalDiff += Math.abs(lengths[i] - lengths[i - 1])
    }
    const avgConsecutiveDiff = totalDiff / (lengths.length - 1)

    // Check for runs of similar-length sentences
    let longestRun = 1
    let currentRun = 1
    for (let i = 1; i < lengths.length; i++) {
        if (Math.abs(lengths[i] - lengths[i - 1]) <= 3) {
            currentRun++
            longestRun = Math.max(longestRun, currentRun)
        } else {
            currentRun = 1
        }
    }

    let score: number

    // Humans: high CV (0.5+), big consecutive diffs, short and long sentences mixed
    // AI: low CV (0.2-0.4), similar consecutive lengths, uniform patterns
    if (coeffOfVariation < 0.25) {
        score = 85
        details.push("Very uniform sentence lengths — strong AI writing indicator")
        details.push("Human writers naturally vary between short punchy sentences and longer complex ones")
    } else if (coeffOfVariation < 0.35) {
        score = 70
        details.push("Low sentence length variation — consistent with AI-generated text")
    } else if (coeffOfVariation < 0.45) {
        score = 50
        details.push("Moderate sentence length variation")
    } else if (coeffOfVariation > 0.6) {
        score = 15
        details.push("High sentence length variation — natural human writing pattern")
        details.push("Mix of short and long sentences indicates authentic voice")
    } else {
        score = 35
        details.push("Good sentence length variation — leans toward human writing")
    }

    // Long runs of similar-length sentences are AI-typical
    if (longestRun >= 5 && sentences.length >= 8) {
        score = Math.min(score + 15, 95)
        details.push(`${longestRun} consecutive sentences with similar length — AI pattern`)
    }

    // Very low consecutive diff means each sentence is roughly the same length as the previous
    if (avgConsecutiveDiff < 4 && sentences.length >= 5) {
        score = Math.min(score + 10, 95)
        details.push("Low consecutive sentence variation — AI tends to produce rhythmically uniform text")
    }

    details.push(`CV: ${coeffOfVariation.toFixed(2)} | Avg length: ${mean.toFixed(1)} words | Std dev: ${stdDev.toFixed(1)}`)

    return {
        name: "Sentence Burstiness",
        icon: <BarChart3 className="w-5 h-5" />,
        score,
        weight: 0.20,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Measures variation in sentence length — humans write with more variety",
    }
}

// ─── Signal 2: Vocabulary Richness ───────────────────────────────────

function analyzeVocabulary(words: string[]): TextSignal {
    const details: string[] = []

    if (words.length < 30) {
        return {
            name: "Vocabulary Richness",
            icon: <BookOpen className="w-5 h-5" />,
            score: 50,
            weight: 0.15,
            verdict: "inconclusive",
            details: ["Need at least 30 words for vocabulary analysis"],
            description: "Analyzes word diversity, rare words, and repetitive patterns",
        }
    }

    // Type-Token Ratio (TTR) — unique words / total words
    const uniqueWords = new Set(words)
    const rawTTR = uniqueWords.size / words.length

    // Length-normalized TTR: TTR naturally drops with text length (Herdan's law)
    // At 100 words, human TTR ~0.70+; at 300 words, ~0.55+; at 500+, ~0.45+
    // Apply correction: compare to expected human TTR for this length
    // Expected human TTR ≈ 0.70 * (100/N)^0.15 for text of N words
    const expectedHumanTTR = 0.70 * Math.pow(100 / Math.max(words.length, 100), 0.15)
    const normalizedTTR = rawTTR / expectedHumanTTR // >1 = richer than typical human, <1 = less rich

    // Hapax legomena — words that appear exactly once
    const freqMap = new Map<string, number>()
    for (const w of words) {
        freqMap.set(w, (freqMap.get(w) || 0) + 1)
    }
    const hapaxCount = [...freqMap.values()].filter(v => v === 1).length
    const hapaxRatio = hapaxCount / words.length

    // Average word length
    const avgWordLength = words.reduce((a, w) => a + w.length, 0) / words.length

    // Repeated phrase detection (bigrams and trigrams)
    const bigrams = new Map<string, number>()
    const trigrams = new Map<string, number>()
    for (let i = 0; i < words.length - 1; i++) {
        const bi = `${words[i]} ${words[i + 1]}`
        bigrams.set(bi, (bigrams.get(bi) || 0) + 1)
        if (i < words.length - 2) {
            const tri = `${words[i]} ${words[i + 1]} ${words[i + 2]}`
            trigrams.set(tri, (trigrams.get(tri) || 0) + 1)
        }
    }

    const repeatedBigrams = [...bigrams.values()].filter(v => v >= 3).length
    const repeatedTrigrams = [...trigrams.values()].filter(v => v >= 2).length

    let score: number

    // normalizedTTR = rawTTR / expectedHumanTTR
    // <0.85 = less diverse than typical human writing (AI-like)
    // 0.85-1.0 = average (could be either)
    // >1.0 = more diverse than typical (human-like)
    if (normalizedTTR < 0.7) {
        score = 80
        details.push("Low vocabulary diversity — repetitive word usage typical of AI")
    } else if (normalizedTTR < 0.85) {
        score = 60
        details.push("Below-average vocabulary diversity for text length")
    } else if (normalizedTTR > 1.15) {
        score = 15
        details.push("Rich vocabulary diversity — indicates authentic human writing")
    } else if (normalizedTTR > 1.0) {
        score = 30
        details.push("Good vocabulary diversity — leans human")
    } else {
        score = 45
        details.push("Average vocabulary diversity for text length")
    }

    // Hapax ratio — humans use more one-off words
    if (hapaxRatio < 0.3) {
        score = Math.min(score + 10, 95)
        details.push("Low rare-word usage — AI recycles vocabulary more than humans")
    } else if (hapaxRatio > 0.55) {
        score = Math.max(score - 10, 5)
        details.push("High rare-word usage — diverse word choice typical of humans")
    }

    // Repeated phrases
    if (repeatedTrigrams >= 3) {
        score = Math.min(score + 15, 95)
        details.push(`${repeatedTrigrams} repeated 3-word phrases detected — AI pattern`)
    } else if (repeatedBigrams >= 5) {
        score = Math.min(score + 8, 90)
        details.push(`${repeatedBigrams} frequently repeated word pairs`)
    }

    details.push(`TTR: ${rawTTR.toFixed(3)} (normalized: ${normalizedTTR.toFixed(3)}) | Hapax ratio: ${hapaxRatio.toFixed(3)} | Avg word length: ${avgWordLength.toFixed(1)}`)

    return {
        name: "Vocabulary Richness",
        icon: <BookOpen className="w-5 h-5" />,
        score,
        weight: 0.15,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Analyzes word diversity, rare words, and repetitive patterns",
    }
}

// ─── Signal 3: Predictability / Perplexity Proxy ─────────────────────

function analyzePredictability(words: string[], sentences: string[]): TextSignal {
    const details: string[] = []

    if (words.length < 50) {
        return {
            name: "Predictability Analysis",
            icon: <Gauge className="w-5 h-5" />,
            score: 50,
            weight: 0.25,
            verdict: "inconclusive",
            details: ["Need at least 50 words for predictability analysis"],
            description: "Estimates text predictability — AI text is more formulaic and predictable",
        }
    }

    // Common AI filler/transition phrases (including inflected forms)
    const aiTransitions = [
        // Transitions
        "additionally", "furthermore", "moreover", "in addition",
        "it is important to note", "it is worth noting", "it's worth noting",
        "in today's world", "in today's digital age", "in the modern world",
        "on the other hand", "having said that", "that being said",
        "in conclusion", "to summarize", "in summary", "all in all",
        "first and foremost", "last but not least",
        "it's important to", "it is essential to", "it is crucial to",
        "plays a crucial role", "plays a vital role", "plays an important role",
        "wide range of", "a variety of", "a plethora of",
        "in order to", "due to the fact that",
        "not merely", "not just", "it is not merely",
        // AI buzzwords (base + inflected)
        "leverage", "leveraging", "leveraged",
        "utilize", "utilizing", "utilized",
        "facilitate", "facilitating", "facilitated",
        "implement", "implementing", "implemented",
        "comprehensive", "robust", "seamless", "cutting-edge",
        "game-changer", "groundbreaking", "revolutionary",
        "delve", "delve into", "dive into",
        "landscape", "realm", "paradigm",
        "tapestry", "multifaceted", "nuanced",
        "embark", "navigate", "foster", "fostering",
        "streamline", "streamlining", "optimize", "optimizing",
        "enhance", "enhancing", "enhanced",
        // More AI-typical vocabulary
        "proactive", "proactively", "ecosystem",
        "democratization", "cognitive", "structural",
        "increasingly", "fundamentally", "dramatically",
        "underscore", "underscores", "underscoring",
        "pivotal", "invaluable", "indispensable",
        "reshaping", "redefining", "transformative",
        "harness", "harnessing", "harnessed",
        "empower", "empowering", "empowered",
        "holistic", "synergy", "synergies",
        "ubiquitous", "burgeoning", "proliferation",
    ]

    const textLower = words.join(" ")
    let aiPhraseCount = 0
    const foundPhrases: string[] = []

    for (const phrase of aiTransitions) {
        const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi")
        const matches = textLower.match(regex)
        if (matches) {
            aiPhraseCount += matches.length
            if (foundPhrases.length < 5) foundPhrases.push(phrase)
        }
    }

    const aiPhraseDensity = aiPhraseCount / (words.length / 100) // per 100 words

    // Sentence starter diversity — AI repeats same starters
    const starters = sentences.map(s => {
        const words = tokenize(s)
        return words.slice(0, 2).join(" ")
    })
    const uniqueStarters = new Set(starters)
    const starterDiversity = sentences.length > 0 ? uniqueStarters.size / sentences.length : 1

    // Check for formulaic paragraph structures
    // AI loves: "Topic sentence. Supporting detail. Supporting detail. Transition."
    const paragraphs = getParagraphs(words.join(" "))
    let formulaicParagraphs = 0
    for (const p of paragraphs) {
        const pSentences = getSentences(p)
        if (pSentences.length >= 3 && pSentences.length <= 5) {
            const pLengths = pSentences.map(s => tokenize(s).length)
            const pMean = pLengths.reduce((a, b) => a + b, 0) / pLengths.length
            const pCV = Math.sqrt(pLengths.reduce((a, b) => a + Math.pow(b - pMean, 2), 0) / pLengths.length) / pMean
            if (pCV < 0.3) formulaicParagraphs++
        }
    }

    let score: number

    // High AI phrase density + low starter diversity + formulaic structure = AI
    if (aiPhraseDensity > 3) {
        score = 85
        details.push(`High AI phrase density (${aiPhraseDensity.toFixed(1)} per 100 words) — strong AI indicator`)
        if (foundPhrases.length > 0) {
            details.push(`AI-typical phrases found: "${foundPhrases.slice(0, 3).join('", "')}"`)
        }
    } else if (aiPhraseDensity > 1.5) {
        score = 65
        details.push(`Moderate AI phrase density (${aiPhraseDensity.toFixed(1)} per 100 words)`)
        if (foundPhrases.length > 0) {
            details.push(`Phrases like: "${foundPhrases.slice(0, 2).join('", "')}"`)
        }
    } else if (aiPhraseDensity > 0.5) {
        score = 45
        details.push(`Low AI phrase density (${aiPhraseDensity.toFixed(1)} per 100 words)`)
    } else {
        score = 20
        details.push("Minimal AI-typical phrasing — natural language patterns")
    }

    // Sentence starter diversity — only reduce score when AI phrase density is low
    if (starterDiversity < 0.5 && sentences.length >= 6) {
        score = Math.min(score + 15, 95)
        details.push(`Low sentence-starter diversity (${(starterDiversity * 100).toFixed(0)}%) — AI repeats opening patterns`)
    } else if (starterDiversity > 0.8 && aiPhraseDensity < 1.0) {
        // Only give human credit for starter diversity if AI phrases are also low
        score = Math.max(score - 10, 5)
        details.push(`High sentence-starter diversity (${(starterDiversity * 100).toFixed(0)}%) — varied openings`)
    } else if (starterDiversity > 0.8) {
        details.push(`High sentence-starter diversity (${(starterDiversity * 100).toFixed(0)}%) — but offset by AI phrase signals`)
    }

    // Formulaic paragraph structure
    if (formulaicParagraphs >= 2 && paragraphs.length >= 3) {
        score = Math.min(score + 10, 95)
        details.push(`${formulaicParagraphs} formulaic paragraphs (uniform sentence lengths within paragraphs)`)
    }

    details.push(`AI phrases: ${aiPhraseCount} | Starter diversity: ${(starterDiversity * 100).toFixed(0)}%`)

    return {
        name: "Predictability Analysis",
        icon: <Gauge className="w-5 h-5" />,
        score,
        weight: 0.25,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Estimates text predictability — AI text is more formulaic and predictable",
    }
}

// ─── Signal 4: Repetition Patterns ───────────────────────────────────

function analyzeRepetition(text: string, sentences: string[]): TextSignal {
    const details: string[] = []

    if (sentences.length < 3) {
        return {
            name: "Repetition Patterns",
            icon: <Repeat className="w-5 h-5" />,
            score: 50,
            weight: 0.15,
            verdict: "inconclusive",
            details: ["Not enough text for repetition analysis"],
            description: "Detects repeated structures, parallel phrasing, and list-like patterns",
        }
    }

    // Check for structural repetition — sentences with same structure
    // Simplified: check if sentences start with similar patterns
    const starterPatterns = sentences.map(s => {
        const words = tokenize(s)
        if (words.length >= 3) return `${words[0]} ${words[1]}`
        return words[0] || ""
    })

    const starterFreq = new Map<string, number>()
    for (const s of starterPatterns) {
        starterFreq.set(s, (starterFreq.get(s) || 0) + 1)
    }
    const repeatedStarters = [...starterFreq.values()].filter(v => v >= 3).length

    // Check for list-like patterns — AI loves bullet-point style prose
    const listPatterns = sentences.filter(s => {
        const t = s.trim()
        return /^\d+[.)]\s/.test(t) || /^[-•*]\s/.test(t) || /^(first|second|third|fourth|fifth|next|then|finally|lastly),?\s/i.test(t)
    }).length
    const listRatio = listPatterns / sentences.length

    // Parallel structure detection — similar sentence openings in sequence
    let parallelCount = 0
    for (let i = 1; i < sentences.length; i++) {
        const prev = tokenize(sentences[i - 1])
        const curr = tokenize(sentences[i])
        if (prev.length >= 3 && curr.length >= 3) {
            if (prev[0] === curr[0] && prev[1] === curr[1]) parallelCount++
            else if (prev[0] === curr[0] && prev.length > 5 && curr.length > 5) {
                const prevEnd = prev.slice(-2).join(" ")
                const currEnd = curr.slice(-2).join(" ")
                if (prevEnd === currEnd) parallelCount++
            }
        }
    }
    const parallelRatio = parallelCount / (sentences.length - 1)

    // "This... This... This..." pattern — common in AI
    const consecutiveRepeats = (() => {
        let maxRepeat = 0
        let currentRepeat = 1
        for (let i = 1; i < starterPatterns.length; i++) {
            if (starterPatterns[i] === starterPatterns[i - 1] && starterPatterns[i].length > 2) {
                currentRepeat++
                maxRepeat = Math.max(maxRepeat, currentRepeat)
            } else {
                currentRepeat = 1
            }
        }
        return maxRepeat
    })()

    // Paragraph-level structural repetition — AI paragraphs tend to have similar sentence counts
    const textParagraphs = getParagraphs(text)
    let paragraphStructureScore = 0
    if (textParagraphs.length >= 3) {
        const paraSentenceCounts = textParagraphs.map(p => getSentences(p).length)
        const paraCountMean = paraSentenceCounts.reduce((a, b) => a + b, 0) / paraSentenceCounts.length
        const paraCountStd = Math.sqrt(paraSentenceCounts.reduce((a, b) => a + Math.pow(b - paraCountMean, 2), 0) / paraSentenceCounts.length)
        const paraCV = paraCountMean > 0 ? paraCountStd / paraCountMean : 0

        // Low CV = all paragraphs similar length — AI pattern
        if (paraCV < 0.2 && paraSentenceCounts.every(c => c >= 3)) {
            paragraphStructureScore = 25
            details.push(`Uniform paragraph structure — ${paraSentenceCounts.length} paragraphs all ~${Math.round(paraCountMean)} sentences`)
        } else if (paraCV < 0.35) {
            paragraphStructureScore = 15
            details.push("Similar paragraph lengths — somewhat formulaic structure")
        }
    }

    let score: number

    if (parallelRatio > 0.3 || consecutiveRepeats >= 4) {
        score = 85
        details.push("High structural repetition — AI generates parallel sentence structures")
        if (consecutiveRepeats >= 3) {
            details.push(`${consecutiveRepeats} consecutive sentences with identical openings`)
        }
    } else if (parallelRatio > 0.15 || repeatedStarters >= 2) {
        score = 65
        details.push("Moderate structural repetition — somewhat formulaic")
    } else if (parallelRatio < 0.05 && repeatedStarters === 0 && paragraphStructureScore === 0) {
        score = 15
        details.push("Low structural repetition — natural varied writing style")
    } else if (paragraphStructureScore > 0) {
        score = Math.max(40, paragraphStructureScore + 25)
    } else {
        score = 40
        details.push("Some structural patterns present")
    }

    // Add paragraph structure bonus
    if (paragraphStructureScore > 0 && score < 60) {
        score = Math.min(score + paragraphStructureScore, 85)
    }

    if (listRatio > 0.3 && sentences.length >= 5) {
        score = Math.min(score + 10, 90)
        details.push(`${(listRatio * 100).toFixed(0)}% list-like sentences — AI frequently generates enumerated content`)
    }

    details.push(`Parallel ratio: ${(parallelRatio * 100).toFixed(1)}% | Repeated starters: ${repeatedStarters} | List ratio: ${(listRatio * 100).toFixed(0)}%`)

    return {
        name: "Repetition Patterns",
        icon: <Repeat className="w-5 h-5" />,
        score,
        weight: 0.15,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Detects repeated structures, parallel phrasing, and list-like patterns",
    }
}

// ─── Signal 5: Stylistic Naturalness ─────────────────────────────────

function analyzeStyle(text: string, words: string[], sentences: string[]): TextSignal {
    const details: string[] = []

    if (words.length < 30) {
        return {
            name: "Stylistic Analysis",
            icon: <Sparkles className="w-5 h-5" />,
            score: 50,
            weight: 0.25,
            verdict: "inconclusive",
            details: ["Need more text for stylistic analysis"],
            description: "Checks for natural voice markers — contractions, informal language, personal tone",
        }
    }

    // Contraction usage — humans use more contractions
    const contractions = (text.match(/\b(i'm|i've|i'll|i'd|we're|we've|we'll|we'd|they're|they've|they'll|they'd|you're|you've|you'll|you'd|he's|she's|it's|that's|there's|here's|what's|who's|how's|can't|won't|don't|doesn't|didn't|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|couldn't|wouldn't|shouldn't|mustn't|let's|ain't)\b/gi) || []).length
    const contractionRate = contractions / (words.length / 100) // per 100 words

    // First person usage — humans use "I" and personal references more in many contexts
    const firstPerson = (text.match(/\b(I|me|my|mine|myself|we|us|our|ours)\b/g) || []).length
    const firstPersonRate = firstPerson / (words.length / 100)

    // Exclamations, questions, interjections — humans use more
    const exclamations = (text.match(/!/g) || []).length
    const questions = (text.match(/\?/g) || []).length
    const interjections = (text.match(/\b(oh|wow|well|yeah|huh|hmm|whoa|oops|ugh|yep|nah|hey|damn|gosh)\b/gi) || []).length
    const expressiveness = exclamations + questions + interjections

    // Passive voice detection — AI overuses passive
    const passivePatterns = (text.match(/\b(is|are|was|were|be|been|being)\s+(being\s+)?\w+ed\b/gi) || []).length
    const passiveRate = passivePatterns / (sentences.length || 1)

    // Hedging language — AI hedges a lot
    const hedges = (text.match(/\b(might|may|could|perhaps|possibly|potentially|arguably|generally|typically|usually|often|sometimes|somewhat|relatively|fairly|quite|rather)\b/gi) || []).length
    const hedgeRate = hedges / (words.length / 100)

    // Sentence-ending variety — humans end with more variety
    const endings = sentences.map(s => s.trim().slice(-1))
    const endingCounts = { period: 0, exclamation: 0, question: 0, other: 0 }
    for (const e of endings) {
        if (e === ".") endingCounts.period++
        else if (e === "!") endingCounts.exclamation++
        else if (e === "?") endingCounts.question++
        else endingCounts.other++
    }
    const periodDominance = sentences.length > 0 ? endingCounts.period / sentences.length : 1

    let score: number

    // Build score from multiple style indicators
    let humanSignals = 0
    let aiSignals = 0

    if (contractionRate > 2) { humanSignals += 2; details.push("Frequent contractions — natural human speech patterns") }
    else if (contractionRate > 0.5) { humanSignals += 1; details.push("Some contractions present") }
    else if (contractionRate === 0 && words.length >= 150) {
        // Zero contractions in 150+ words is a very strong AI signal
        aiSignals += 3
        details.push("Zero contractions in long text — very strong AI indicator (humans almost always use contractions)")
    }
    else { aiSignals += 1; details.push("Few/no contractions — AI tends to use formal expanded forms") }

    if (firstPersonRate > 3) { humanSignals += 1; details.push("Personal voice (first-person usage)") }
    else if (firstPersonRate === 0 && words.length >= 200) {
        aiSignals += 1; details.push("No first-person pronouns — impersonal AI writing style")
    }
    if (expressiveness >= 3) { humanSignals += 1; details.push("Expressive punctuation and interjections") }

    if (passiveRate > 0.4) { aiSignals += 2; details.push(`High passive voice (${(passiveRate * 100).toFixed(0)}% of sentences) — AI overuses passive constructions`) }
    else if (passiveRate < 0.15) {
        // Low passive is slightly human, but AI can also produce low-passive text
        humanSignals += 0.5; details.push("Low passive voice — direct, active writing")
    }

    if (hedgeRate > 3) { aiSignals += 2; details.push(`High hedging language (${hedgeRate.toFixed(1)} per 100 words) — AI over-qualifies statements`) }
    else if (hedgeRate > 1.5) { aiSignals += 1; details.push("Moderate hedging language") }
    else if (hedgeRate < 0.3 && words.length >= 200) {
        // Very low hedging in long text is slightly human, but not strong
        humanSignals += 0.5; details.push("Direct, confident language — low hedging")
    } else {
        humanSignals += 1; details.push("Direct, confident language — low hedging")
    }

    if (periodDominance === 1 && sentences.length >= 10) {
        // 100% periods in 10+ sentences is a strong AI signal
        aiSignals += 2; details.push("Only period endings — monotonous punctuation in long text")
    } else if (periodDominance > 0.95 && sentences.length >= 5) {
        aiSignals += 1; details.push("Only period endings — monotonous punctuation")
    } else if (periodDominance < 0.8) {
        humanSignals += 1; details.push("Varied punctuation — natural writing rhythm")
    }

    const totalSignals = humanSignals + aiSignals
    if (totalSignals > 0) {
        score = Math.round((aiSignals / totalSignals) * 100)
    } else {
        score = 50
    }

    details.push(`Contractions: ${contractionRate.toFixed(1)}/100w | Passive: ${(passiveRate * 100).toFixed(0)}% | Hedging: ${hedgeRate.toFixed(1)}/100w`)

    return {
        name: "Stylistic Analysis",
        icon: <Sparkles className="w-5 h-5" />,
        score,
        weight: 0.25,
        verdict: score <= 30 ? "human" : score >= 65 ? "ai" : "mixed",
        details,
        description: "Checks for natural voice markers — contractions, informal language, personal tone",
    }
}

// ─── Main Analysis ───────────────────────────────────────────────────

function analyzeText(text: string): TextAnalysisResult {
    const words = tokenize(text)
    const sentences = getSentences(text)
    const paragraphs = getParagraphs(text)

    // Run all signals
    const burstinessSignal = analyzeBurstiness(sentences)
    const vocabularySignal = analyzeVocabulary(words)
    const predictabilitySignal = analyzePredictability(words, sentences)
    const repetitionSignal = analyzeRepetition(text, sentences)
    const styleSignal = analyzeStyle(text, words, sentences)

    const signals = [burstinessSignal, vocabularySignal, predictabilitySignal, repetitionSignal, styleSignal]

    // Weighted score
    let overallScore = Math.round(signals.reduce((sum, s) => sum + s.score * s.weight, 0))

    // Cross-signal boosting: when strong signals are present, boost overall
    const strongAISignals = signals.filter(s => s.score >= 80).length
    const strongHumanSignals = signals.filter(s => s.score <= 20).length

    // If 2+ signals strongly indicate AI, boost score toward AI
    if (strongAISignals >= 2 && overallScore < 65) {
        const boost = Math.min((strongAISignals - 1) * 8, 15)
        overallScore = Math.min(overallScore + boost, 85)
    }
    // If 2+ signals strongly indicate human, boost toward human
    if (strongHumanSignals >= 2 && overallScore > 35) {
        const boost = Math.min((strongHumanSignals - 1) * 8, 15)
        overallScore = Math.max(overallScore - boost, 15)
    }

    // High burstiness (>85) is one of the strongest individual signals
    // If burstiness is very high but overall is mixed, nudge toward AI
    if (burstinessSignal.score >= 85 && overallScore >= 40 && overallScore < 65) {
        overallScore = Math.min(overallScore + 5, 70)
    }

    // Readability (Flesch-Kincaid Grade Level)
    const totalSyllables = words.reduce((a, w) => a + syllableCount(w), 0)
    const avgWordsPerSentence = sentences.length > 0 ? words.length / sentences.length : 0
    const avgSyllablesPerWord = words.length > 0 ? totalSyllables / words.length : 0
    const fkGrade = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59
    const readingLevel = fkGrade <= 6 ? "Elementary" : fkGrade <= 8 ? "Middle School" : fkGrade <= 12 ? "High School" : fkGrade <= 16 ? "College" : "Graduate"

    let verdict: TextAnalysisResult["verdict"]
    let verdictLabel: string
    let verdictDescription: string

    if (overallScore >= 65) {
        verdict = "likely_ai"
        verdictLabel = "Likely AI-Generated"
        verdictDescription = "Multiple linguistic signals suggest this text was generated by AI. The writing shows patterns typical of language models — uniform sentence structure, predictable phrasing, and formulaic style."
    } else if (overallScore <= 35) {
        verdict = "likely_human"
        verdictLabel = "Likely Human-Written"
        verdictDescription = "Linguistic analysis suggests this text was written by a human. The writing shows natural variation in sentence length, diverse vocabulary, personal voice, and unpredictable phrasing."
    } else {
        verdict = "mixed"
        verdictLabel = "Mixed Signals"
        verdictDescription = "The analysis shows mixed signals. This could be human-written text that follows a formal style, AI text that has been edited by a human, or a collaboration between human and AI."
    }

    return {
        signals,
        overallScore,
        verdict,
        verdictLabel,
        verdictDescription,
        stats: {
            wordCount: words.length,
            sentenceCount: sentences.length,
            paragraphCount: paragraphs.length,
            avgWordsPerSentence: parseFloat(avgWordsPerSentence.toFixed(1)),
            readingLevel,
        },
    }
}

// ─── UI Component ────────────────────────────────────────────────────

export function AITextDetector() {
    const [text, setText] = useState("")
    const [result, setResult] = useState<TextAnalysisResult | null>(null)
    const [expandedSignals, setExpandedSignals] = useState<Set<number>>(new Set())

    function handleAnalyze() {
        if (text.trim().length < 50) return
        const r = analyzeText(text)
        setResult(r)
        setExpandedSignals(new Set(r.signals.map((_, i) => i)))
    }

    function handleClear() {
        setText("")
        setResult(null)
        setExpandedSignals(new Set())
    }

    async function handlePaste() {
        try {
            const clipboard = await navigator.clipboard.readText()
            setText(clipboard)
            setResult(null)
        } catch { /* clipboard access denied */ }
    }

    function toggleSignal(index: number) {
        setExpandedSignals(prev => {
            const next = new Set(prev)
            if (next.has(index)) next.delete(index)
            else next.add(index)
            return next
        })
    }

    const wordCount = tokenize(text).length
    const charCount = text.length
    const isReady = text.trim().length >= 50

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
                            <Type className="w-5 h-5 text-primary" />
                            Paste or Type Text
                        </h2>
                        <div className="flex gap-2">
                            <GButton size="sm" variant="outline" onClick={handlePaste} className="gap-1.5">
                                <ClipboardPaste className="w-3.5 h-3.5" />
                                Paste
                            </GButton>
                            {text && (
                                <GButton size="sm" variant="outline" onClick={handleClear} className="gap-1.5">
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Clear
                                </GButton>
                            )}
                        </div>
                    </div>

                    <GTextarea
                        value={text}
                        onChange={(e) => { setText(e.target.value); setResult(null) }}
                        placeholder="Paste the text you want to analyze here... (minimum 50 characters)"
                        className="min-h-[200px] resize-y text-sm"
                    />

                    <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground space-x-3">
                            <span>{charCount} characters</span>
                            <span>{wordCount} words</span>
                            {!isReady && text.length > 0 && (
                                <span className="text-yellow-500">Need at least 50 characters</span>
                            )}
                        </div>
                        <GButton onClick={handleAnalyze} disabled={!isReady} className="gap-2">
                            <ArrowRight className="w-4 h-4" />
                            Detect AI Text
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

                    {/* Text Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {[
                            { label: "Words", value: result.stats.wordCount },
                            { label: "Sentences", value: result.stats.sentenceCount },
                            { label: "Paragraphs", value: result.stats.paragraphCount },
                            { label: "Avg Words/Sentence", value: result.stats.avgWordsPerSentence },
                            { label: "Reading Level", value: result.stats.readingLevel },
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
                                    No AI text detector is 100% accurate. This tool uses statistical analysis of linguistic patterns — not machine learning. Results may vary based on writing style, genre, and language. Formal academic writing can trigger AI signals. AI text edited by humans may appear more human. Always use critical judgment alongside automated analysis.
                                </p>
                            </div>
                        </div>
                    </GCard>
                </div>
            )}
        </div>
    )
}
