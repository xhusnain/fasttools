"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GProgress } from "@/ui/gprogress"
import {
    BookOpen,
    BarChart3,
    GraduationCap,
    Gauge,
    ArrowRight,
    ChevronDown,
    ChevronUp,
    Info,
    Copy,
    Trash2,
    ClipboardPaste,
    Target,
    Users,
    Check,
    Brain,
    Glasses,
    TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────

interface ReadabilityScore {
    name: string
    fullName: string
    score: number
    gradeLevel: string
    icon: React.ReactNode
    description: string
    interpretation: string
    color: string
}

interface TextStats {
    characters: number
    words: number
    sentences: number
    paragraphs: number
    syllables: number
    polysyllableWords: number
    complexWords: number
    avgWordsPerSentence: number
    avgSyllablesPerWord: number
    avgCharPerWord: number
    longSentences: number
    shortSentences: number
    uniqueWords: number
    vocabularyDensity: number
}

interface AudienceMatch {
    label: string
    icon: React.ReactNode
    match: "excellent" | "good" | "fair" | "poor"
    note: string
}

interface ReadabilityResult {
    scores: ReadabilityScore[]
    overallGrade: number
    overallLabel: string
    readingTime: string
    speakingTime: string
    stats: TextStats
    audienceMatches: AudienceMatch[]
    suggestions: string[]
}

// ─── Text Utilities ──────────────────────────────────────────────────

function countSyllables(word: string): number {
    const w = word.toLowerCase().replace(/[^a-z]/g, "")
    if (w.length <= 2) return 1
    let count = 0
    const vowels = "aeiouy"
    let prevVowel = false
    for (let i = 0; i < w.length; i++) {
        const isVowel = vowels.includes(w[i])
        if (isVowel && !prevVowel) count++
        prevVowel = isVowel
    }
    // Silent e
    if (w.endsWith("e") && count > 1) count--
    // -le ending
    if (w.endsWith("le") && w.length > 2 && !vowels.includes(w[w.length - 3])) count++
    // -ed ending (not adding syllable for most cases)
    if (w.endsWith("ed") && count > 1 && !w.endsWith("ted") && !w.endsWith("ded")) count--
    return Math.max(1, count)
}

function getWords(text: string): string[] {
    return text.match(/\b[a-zA-Z''-]+\b/g) || []
}

function getSentences(text: string): string[] {
    return text
        .split(/(?<=[.!?])\s+/)
        .map(s => s.trim())
        .filter(s => {
            const words = s.match(/\b[a-zA-Z]+\b/g)
            return words && words.length >= 2
        })
}

function getParagraphs(text: string): string[] {
    return text
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(p => p.length > 10)
}

// Dale-Chall easy word list (3000 most common — subset of ~750 high-frequency words)
const DALE_CHALL_EASY = new Set([
    "a", "able", "about", "above", "across", "act", "add", "afraid", "after", "again",
    "age", "ago", "agree", "air", "all", "almost", "along", "already", "also", "always",
    "am", "among", "an", "and", "anger", "animal", "answer", "any", "appear", "apple",
    "are", "area", "arm", "around", "art", "as", "ask", "at", "attention", "away",
    "back", "bad", "ball", "bank", "base", "be", "beat", "beautiful", "because", "become",
    "bed", "been", "before", "began", "begin", "behind", "believe", "below", "beside", "best",
    "better", "between", "big", "bird", "bit", "black", "blood", "blow", "blue", "board",
    "boat", "body", "bone", "book", "both", "bottom", "box", "boy", "brain", "break",
    "bring", "brother", "brown", "build", "burn", "bus", "business", "busy", "but", "buy",
    "by", "call", "came", "can", "car", "care", "carry", "case", "cat", "catch",
    "cause", "center", "certain", "chair", "chance", "change", "check", "child", "children", "choose",
    "church", "circle", "city", "class", "clean", "clear", "close", "clothes", "cloud", "cold",
    "color", "come", "common", "company", "complete", "consider", "contain", "continue", "control", "cook",
    "cool", "corner", "cost", "could", "count", "country", "course", "cover", "cross", "cry",
    "cup", "cut", "dance", "danger", "dark", "daughter", "day", "dead", "dear", "death",
    "decide", "deep", "did", "die", "different", "dinner", "direction", "discover", "do", "doctor",
    "does", "dog", "dollar", "done", "door", "double", "down", "draw", "dream", "dress",
    "drink", "drive", "drop", "dry", "during", "each", "ear", "early", "earth", "east",
    "eat", "edge", "eight", "either", "else", "end", "enemy", "enough", "enter", "even",
    "evening", "ever", "every", "example", "except", "excite", "excuse", "expect", "experience", "explain",
    "eye", "face", "fact", "fail", "fall", "family", "far", "farm", "fast", "fat",
    "father", "fear", "feel", "feet", "fell", "few", "field", "fight", "fill", "final",
    "find", "fine", "finger", "finish", "fire", "first", "fish", "fit", "five", "floor",
    "fly", "follow", "food", "foot", "for", "force", "foreign", "forest", "forget", "form",
    "forward", "found", "four", "free", "fresh", "friend", "from", "front", "full", "fun",
    "game", "garden", "gate", "gave", "general", "get", "girl", "give", "glad", "glass",
    "go", "god", "gold", "gone", "good", "got", "govern", "grass", "great", "green",
    "grew", "ground", "group", "grow", "guess", "gun", "had", "hair", "half", "hall",
    "hand", "happen", "happy", "hard", "has", "hat", "have", "he", "head", "hear",
    "heart", "heat", "heavy", "held", "help", "her", "here", "high", "hill", "him",
    "his", "hit", "hold", "hole", "home", "hope", "horse", "hot", "hotel", "hour",
    "house", "how", "however", "hundred", "hunt", "hurry", "hurt", "husband", "i", "ice",
    "idea", "if", "important", "in", "inch", "include", "increase", "indeed", "inside", "instead",
    "interest", "into", "iron", "is", "island", "it", "its", "job", "join", "joy",
    "jump", "just", "keep", "kept", "key", "kill", "kind", "king", "kitchen", "knew",
    "knock", "know", "land", "language", "large", "last", "late", "laugh", "law", "lay",
    "lead", "learn", "least", "leave", "left", "leg", "less", "let", "letter", "lie",
    "life", "lift", "light", "like", "line", "list", "listen", "little", "live", "long",
    "look", "lose", "lost", "lot", "love", "low", "luck", "made", "main", "make",
    "man", "many", "map", "mark", "market", "matter", "may", "me", "meal", "mean",
    "measure", "meat", "meet", "member", "men", "middle", "might", "mile", "milk", "million",
    "mind", "mine", "minute", "miss", "money", "month", "moon", "more", "morning", "most",
    "mother", "mountain", "mouth", "move", "much", "music", "must", "my", "name", "nation",
    "nature", "near", "necessary", "neck", "need", "never", "new", "news", "next", "nice",
    "night", "nine", "no", "noise", "none", "nor", "north", "nose", "not", "note",
    "nothing", "notice", "now", "number", "of", "off", "offer", "office", "often", "oh",
    "oil", "old", "on", "once", "one", "only", "open", "or", "order", "other",
    "our", "out", "outside", "over", "own", "page", "paint", "pair", "paper", "part",
    "particular", "party", "pass", "past", "pay", "people", "perhaps", "period", "person", "picture",
    "piece", "place", "plan", "plant", "play", "please", "point", "poor", "position", "possible",
    "power", "prepare", "present", "president", "press", "pretty", "price", "print", "private", "probably",
    "problem", "produce", "promise", "protect", "prove", "provide", "public", "pull", "push", "put",
    "question", "quick", "quiet", "quite", "race", "rain", "raise", "ran", "reach", "read",
    "ready", "real", "reason", "receive", "record", "red", "remember", "repeat", "reply", "report",
    "rest", "result", "return", "rich", "ride", "right", "ring", "rise", "river", "road",
    "rock", "roll", "room", "round", "row", "rule", "run", "safe", "said", "sail",
    "salt", "same", "sand", "sat", "save", "saw", "say", "school", "sea", "seat",
    "second", "see", "seem", "sell", "send", "sentence", "separate", "serve", "set", "seven",
    "several", "shall", "shape", "she", "ship", "short", "should", "shoulder", "shout", "show",
    "shut", "sick", "side", "sight", "sign", "silver", "simple", "since", "sing", "sir",
    "sister", "sit", "six", "size", "skin", "sleep", "slow", "small", "smell", "smile",
    "smoke", "snow", "so", "soft", "sold", "soldier", "some", "son", "song", "soon",
    "sort", "sound", "south", "space", "speak", "special", "speed", "spend", "spoke", "spot",
    "spring", "stand", "star", "start", "state", "station", "stay", "step", "stick", "still",
    "stock", "stone", "stood", "stop", "store", "story", "straight", "strange", "street", "strong",
    "student", "study", "such", "sudden", "summer", "sun", "suppose", "sure", "surprise", "sweet",
    "swim", "table", "tail", "take", "talk", "tall", "teach", "team", "tell", "ten",
    "test", "than", "thank", "that", "the", "their", "them", "then", "there", "these",
    "they", "thick", "thin", "thing", "think", "third", "this", "those", "though", "thought",
    "thousand", "three", "through", "throw", "tie", "till", "time", "tiny", "to", "today",
    "together", "told", "tomorrow", "tonight", "too", "took", "top", "touch", "toward", "town",
    "trade", "train", "travel", "tree", "trouble", "true", "trust", "try", "turn", "twelve",
    "twenty", "two", "type", "uncle", "under", "understand", "until", "up", "upon", "us",
    "use", "usual", "valley", "value", "very", "visit", "voice", "wait", "walk", "wall",
    "want", "war", "warm", "wash", "watch", "water", "way", "we", "wear", "weather",
    "week", "well", "went", "were", "west", "what", "wheel", "when", "where", "whether",
    "which", "while", "white", "who", "whole", "whose", "why", "wide", "wife", "wild",
    "will", "win", "wind", "window", "winter", "wish", "with", "without", "woman", "women",
    "wonder", "wood", "word", "work", "world", "worry", "would", "write", "wrong", "yard",
    "year", "yes", "yet", "you", "young",
])

// ─── Readability Formulas ────────────────────────────────────────────

function fleschKincaidGrade(avgWordsPerSentence: number, avgSyllablesPerWord: number): number {
    return 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59
}

function fleschReadingEase(avgWordsPerSentence: number, avgSyllablesPerWord: number): number {
    return 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord
}

function gunningFogIndex(avgWordsPerSentence: number, complexWordPercent: number): number {
    return 0.4 * (avgWordsPerSentence + complexWordPercent)
}

function colemanLiauIndex(avgCharPer100Words: number, avgSentencesPer100Words: number): number {
    return 0.0588 * avgCharPer100Words - 0.296 * avgSentencesPer100Words - 15.8
}

function smogIndex(polysyllableCount: number, sentenceCount: number): number {
    if (sentenceCount === 0) return 0
    return 3 + Math.sqrt(polysyllableCount * (30 / sentenceCount))
}

function ariIndex(avgCharPerWord: number, avgWordsPerSentence: number): number {
    return 4.71 * avgCharPerWord + 0.5 * avgWordsPerSentence - 21.43
}

function daleChallScore(words: string[], avgWordsPerSentence: number): number {
    const difficultWords = words.filter(w => !DALE_CHALL_EASY.has(w.toLowerCase())).length
    const percentDifficult = (difficultWords / Math.max(words.length, 1)) * 100
    let raw = 0.1579 * percentDifficult + 0.0496 * avgWordsPerSentence
    if (percentDifficult > 5) raw += 3.6365
    return raw
}

// Convert various scores to US grade levels
function gradeToLabel(grade: number): string {
    if (grade <= 1) return "Kindergarten"
    if (grade <= 5) return `${Math.round(grade)}th Grade`
    if (grade <= 8) return `${Math.round(grade)}th Grade (Middle School)`
    if (grade <= 12) return `${Math.round(grade)}th Grade (High School)`
    if (grade <= 16) return "College Level"
    return "Graduate/Professional"
}

function fleschEaseToLabel(score: number): string {
    if (score >= 90) return "Very Easy (5th Grade)"
    if (score >= 80) return "Easy (6th Grade)"
    if (score >= 70) return "Fairly Easy (7th Grade)"
    if (score >= 60) return "Standard (8th-9th Grade)"
    if (score >= 50) return "Fairly Difficult (10th-12th)"
    if (score >= 30) return "Difficult (College)"
    return "Very Difficult (Graduate)"
}

function fleschEaseToGrade(score: number): number {
    if (score >= 90) return 5
    if (score >= 80) return 6
    if (score >= 70) return 7
    if (score >= 60) return 8.5
    if (score >= 50) return 11
    if (score >= 30) return 14
    return 17
}

function scoreColor(grade: number): string {
    if (grade <= 6) return "text-green-500"
    if (grade <= 9) return "text-blue-500"
    if (grade <= 12) return "text-yellow-500"
    if (grade <= 16) return "text-orange-500"
    return "text-red-500"
}

// ─── Analysis Engine ─────────────────────────────────────────────────

function analyzeReadability(text: string): ReadabilityResult {
    const words = getWords(text)
    const sentences = getSentences(text)
    const paragraphs = getParagraphs(text)

    const wordCount = words.length
    const sentenceCount = Math.max(sentences.length, 1)
    const paragraphCount = Math.max(paragraphs.length, 1)

    // Syllable analysis
    const syllableCounts = words.map(countSyllables)
    const totalSyllables = syllableCounts.reduce((a, b) => a + b, 0)
    const polysyllableWords = syllableCounts.filter(s => s >= 3).length
    const complexWords = words.filter(w => countSyllables(w) >= 3 && !w.endsWith("ing") && !w.endsWith("ed") && !w.endsWith("es")).length

    // Character analysis (letters only)
    const letterCount = words.join("").replace(/[^a-zA-Z]/g, "").length

    // Averages
    const avgWordsPerSentence = wordCount / sentenceCount
    const avgSyllablesPerWord = totalSyllables / Math.max(wordCount, 1)
    const avgCharPerWord = letterCount / Math.max(wordCount, 1)
    const avgCharPer100Words = (letterCount / Math.max(wordCount, 1)) * 100
    const avgSentencesPer100Words = (sentenceCount / Math.max(wordCount, 1)) * 100

    // Sentence length distribution
    const sentenceLengths = sentences.map(s => (s.match(/\b[a-zA-Z]+\b/g) || []).length)
    const longSentences = sentenceLengths.filter(l => l > 25).length
    const shortSentences = sentenceLengths.filter(l => l < 8).length

    // Vocabulary
    const uniqueWords = new Set(words.map(w => w.toLowerCase())).size
    const vocabularyDensity = uniqueWords / Math.max(wordCount, 1)

    const complexWordPercent = (complexWords / Math.max(wordCount, 1)) * 100

    // ─── Calculate all 7 scores ───

    // 1. Flesch-Kincaid Grade Level
    const fkGrade = Math.max(0, fleschKincaidGrade(avgWordsPerSentence, avgSyllablesPerWord))

    // 2. Flesch Reading Ease
    const freScore = Math.min(100, Math.max(0, fleschReadingEase(avgWordsPerSentence, avgSyllablesPerWord)))

    // 3. Gunning Fog Index
    const fogScore = Math.max(0, gunningFogIndex(avgWordsPerSentence, complexWordPercent))

    // 4. Coleman-Liau Index
    const clScore = Math.max(0, colemanLiauIndex(avgCharPer100Words, avgSentencesPer100Words))

    // 5. SMOG Index
    const smogScore = Math.max(0, smogIndex(polysyllableWords, sentenceCount))

    // 6. Automated Readability Index (ARI)
    const ariScore = Math.max(0, ariIndex(avgCharPerWord, avgWordsPerSentence))

    // 7. Dale-Chall Readability Score
    const dcScore = Math.max(0, daleChallScore(words, avgWordsPerSentence))

    const scores: ReadabilityScore[] = [
        {
            name: "Flesch-Kincaid",
            fullName: "Flesch-Kincaid Grade Level",
            score: Math.round(fkGrade * 10) / 10,
            gradeLevel: gradeToLabel(fkGrade),
            icon: <GraduationCap className="h-4 w-4" />,
            description: "Estimates the US school grade level needed to understand the text. Based on sentence length and syllable count.",
            interpretation: fkGrade <= 8 ? "Accessible to most readers" : fkGrade <= 12 ? "Requires high school reading level" : "Advanced reading level required",
            color: scoreColor(fkGrade),
        },
        {
            name: "Reading Ease",
            fullName: "Flesch Reading Ease",
            score: Math.round(freScore * 10) / 10,
            gradeLevel: fleschEaseToLabel(freScore),
            icon: <Glasses className="h-4 w-4" />,
            description: "Scores 0-100 where higher = easier to read. Used by the US military, insurance, and government agencies. 60-70 is standard.",
            interpretation: freScore >= 60 ? "Good readability for general audiences" : freScore >= 30 ? "May be too complex for casual readers" : "Highly complex — academic or technical level",
            color: scoreColor(fleschEaseToGrade(freScore)),
        },
        {
            name: "Gunning Fog",
            fullName: "Gunning Fog Index",
            score: Math.round(fogScore * 10) / 10,
            gradeLevel: gradeToLabel(fogScore),
            icon: <BookOpen className="h-4 w-4" />,
            description: "Measures years of formal education needed. Ideal for business writing: 7-8 for wide audiences, 12+ for academic text.",
            interpretation: fogScore <= 10 ? "Clear and accessible writing" : fogScore <= 14 ? "Appropriate for educated readers" : "Very demanding — simplify if possible",
            color: scoreColor(fogScore),
        },
        {
            name: "Coleman-Liau",
            fullName: "Coleman-Liau Index",
            score: Math.round(clScore * 10) / 10,
            gradeLevel: gradeToLabel(clScore),
            icon: <BarChart3 className="h-4 w-4" />,
            description: "Uses character count instead of syllables, making it more reliable for technical text. Designed for automated assessment.",
            interpretation: clScore <= 9 ? "Suitable for general audiences" : clScore <= 13 ? "High school to college level" : "Graduate-level complexity",
            color: scoreColor(clScore),
        },
        {
            name: "SMOG",
            fullName: "SMOG Index",
            score: Math.round(smogScore * 10) / 10,
            gradeLevel: gradeToLabel(smogScore),
            icon: <Brain className="h-4 w-4" />,
            description: "Simple Measure of Gobbledygook — counts polysyllabic words. Widely used in healthcare to ensure patient materials are understandable.",
            interpretation: smogScore <= 8 ? "Readable for wide audiences" : smogScore <= 12 ? "Appropriate for educated readers" : "Requires specialized knowledge",
            color: scoreColor(smogScore),
        },
        {
            name: "ARI",
            fullName: "Automated Readability Index",
            score: Math.round(ariScore * 10) / 10,
            gradeLevel: gradeToLabel(ariScore),
            icon: <TrendingUp className="h-4 w-4" />,
            description: "Uses characters per word and words per sentence. Originally designed for real-time readability monitoring on typewriters.",
            interpretation: ariScore <= 8 ? "Easy to understand" : ariScore <= 12 ? "Standard academic reading" : "Advanced and demanding",
            color: scoreColor(ariScore),
        },
        {
            name: "Dale-Chall",
            fullName: "Dale-Chall Readability",
            score: Math.round(dcScore * 10) / 10,
            gradeLevel: dcScore <= 5 ? "4th Grade or below" : dcScore <= 6 ? "5th-6th Grade" : dcScore <= 7 ? "7th-8th Grade" : dcScore <= 8 ? "9th-10th Grade" : dcScore <= 9 ? "11th-12th Grade" : "College Level",
            icon: <Target className="h-4 w-4" />,
            description: "Compares words against a list of 3,000 common English words. Words not on the list are 'difficult'. Most accurate for lower reading levels.",
            interpretation: dcScore <= 6 ? "Uses mostly common vocabulary" : dcScore <= 8 ? "Mix of common and advanced vocabulary" : "Heavy use of uncommon words",
            color: dcScore <= 6 ? "text-green-500" : dcScore <= 8 ? "text-yellow-500" : "text-red-500",
        },
    ]

    // Overall grade — weighted average of grade-level algorithms
    const gradeScores = [fkGrade, fogScore, clScore, smogScore, ariScore]
    const overallGrade = gradeScores.reduce((a, b) => a + b, 0) / gradeScores.length

    const overallLabel = overallGrade <= 6
        ? "Easy"
        : overallGrade <= 9
            ? "Standard"
            : overallGrade <= 12
                ? "Advanced"
                : overallGrade <= 16
                    ? "College"
                    : "Graduate"

    // Reading & speaking time
    const readingMinutes = Math.ceil(wordCount / 238) // avg adult reading speed
    const speakingMinutes = Math.ceil(wordCount / 150) // avg speaking speed

    const readingTime = readingMinutes <= 1 ? "< 1 min" : `~${readingMinutes} min`
    const speakingTime = speakingMinutes <= 1 ? "< 1 min" : `~${speakingMinutes} min`

    // Audience matching
    const audienceMatches: AudienceMatch[] = [
        {
            label: "General Public",
            icon: <Users className="h-4 w-4" />,
            match: overallGrade <= 8 ? "excellent" : overallGrade <= 10 ? "good" : overallGrade <= 12 ? "fair" : "poor",
            note: overallGrade <= 8 ? "Text is accessible to most adults" : overallGrade <= 10 ? "Some readers may struggle" : "Too complex for general audiences",
        },
        {
            label: "Students (K-12)",
            icon: <GraduationCap className="h-4 w-4" />,
            match: overallGrade <= 6 ? "excellent" : overallGrade <= 9 ? "good" : overallGrade <= 12 ? "fair" : "poor",
            note: `Suitable for grade ${Math.min(12, Math.max(1, Math.round(overallGrade)))} and above`,
        },
        {
            label: "Business / Marketing",
            icon: <Target className="h-4 w-4" />,
            match: overallGrade <= 9 ? "excellent" : overallGrade <= 12 ? "good" : "fair",
            note: overallGrade <= 9 ? "Ideal for web copy and emails" : "Consider simplifying for broader reach",
        },
        {
            label: "Academic / Technical",
            icon: <Brain className="h-4 w-4" />,
            match: overallGrade >= 12 ? "excellent" : overallGrade >= 9 ? "good" : "fair",
            note: overallGrade >= 12 ? "Appropriate for academic writing" : "May be too simple for academic context",
        },
    ]

    // Actionable suggestions
    const suggestions: string[] = []
    if (avgWordsPerSentence > 20) suggestions.push(`Average sentence length is ${Math.round(avgWordsPerSentence)} words. Aim for 15-20 words for better readability.`)
    if (longSentences > sentenceCount * 0.3) suggestions.push(`${longSentences} of ${sentenceCount} sentences exceed 25 words. Break up long sentences.`)
    if (complexWordPercent > 15) suggestions.push(`${Math.round(complexWordPercent)}% of words have 3+ syllables. Use simpler alternatives where possible.`)
    if (avgSyllablesPerWord > 1.7) suggestions.push(`Average syllables per word is ${avgSyllablesPerWord.toFixed(1)}. Try replacing multi-syllable words with shorter ones.`)
    if (vocabularyDensity < 0.4) suggestions.push(`Vocabulary diversity is low (${(vocabularyDensity * 100).toFixed(0)}%). Use more varied word choices.`)
    if (paragraphCount === 1 && wordCount > 100) suggestions.push("Text is a single block. Break it into paragraphs for easier scanning.")
    if (shortSentences > sentenceCount * 0.5) suggestions.push("Many very short sentences. Mix in some medium-length sentences for better flow.")
    if (suggestions.length === 0) suggestions.push("Your text has good readability. No major improvements needed.")

    return {
        scores,
        overallGrade: Math.round(overallGrade * 10) / 10,
        overallLabel,
        readingTime,
        speakingTime,
        stats: {
            characters: text.length,
            words: wordCount,
            sentences: sentenceCount,
            paragraphs: paragraphCount,
            syllables: totalSyllables,
            polysyllableWords,
            complexWords,
            avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
            avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100,
            avgCharPerWord: Math.round(avgCharPerWord * 10) / 10,
            longSentences,
            shortSentences,
            uniqueWords,
            vocabularyDensity: Math.round(vocabularyDensity * 1000) / 1000,
        },
        audienceMatches,
        suggestions,
    }
}

// ─── Component ───────────────────────────────────────────────────────

export function AIReadabilityAnalyzer() {
    const [text, setText] = useState("")
    const [result, setResult] = useState<ReadabilityResult | null>(null)
    const [expandedScore, setExpandedScore] = useState<number | null>(null)
    const [copied, setCopied] = useState(false)

    const analyze = useCallback(() => {
        if (text.trim().length < 50) return
        setResult(analyzeReadability(text))
        setExpandedScore(null)
    }, [text])

    const handlePaste = useCallback(async () => {
        try {
            const clip = await navigator.clipboard.readText()
            if (clip) setText(clip)
        } catch { /* clipboard denied */ }
    }, [])

    const handleCopyReport = useCallback(() => {
        if (!result) return
        const lines = [
            "READABILITY ANALYSIS REPORT",
            `Overall Grade Level: ${result.overallGrade} (${result.overallLabel})`,
            `Words: ${result.stats.words} | Sentences: ${result.stats.sentences} | Reading Time: ${result.readingTime}`,
            "",
            "SCORES:",
            ...result.scores.map(s => `  ${s.fullName}: ${s.score} — ${s.gradeLevel}`),
            "",
            "SUGGESTIONS:",
            ...result.suggestions.map(s => `  • ${s}`),
        ]
        navigator.clipboard.writeText(lines.join("\n"))
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }, [result])

    const matchColor = (m: AudienceMatch["match"]) => {
        switch (m) {
            case "excellent": return "bg-green-500/20 text-green-400 border-green-500/30"
            case "good": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
            case "fair": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            case "poor": return "bg-red-500/20 text-red-400 border-red-500/30"
        }
    }

    const gradeColor = (grade: number) => {
        if (grade <= 6) return "from-green-500 to-green-600"
        if (grade <= 9) return "from-blue-500 to-blue-600"
        if (grade <= 12) return "from-yellow-500 to-yellow-600"
        if (grade <= 16) return "from-orange-500 to-orange-600"
        return "from-red-500 to-red-600"
    }

    const progressColor = (grade: number) => {
        if (grade <= 6) return "bg-green-500"
        if (grade <= 9) return "bg-blue-500"
        if (grade <= 12) return "bg-yellow-500"
        if (grade <= 16) return "bg-orange-500"
        return "bg-red-500"
    }

    return (
        <div className="space-y-6">
            {/* Input Area */}
            <GCard className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-400" />
                        Paste Your Text
                    </h2>
                    <span className="text-xs text-muted-foreground">
                        {text.length > 0 ? `${getWords(text).length} words` : "Min 50 characters"}
                    </span>
                </div>
                <GTextarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your article, essay, blog post, email, or any text here to analyze its readability across 7 different algorithms..."
                    className="min-h-[200px] font-mono text-sm"
                />
                <div className="flex flex-wrap gap-2">
                    <GButton
                        onClick={analyze}
                        disabled={text.trim().length < 50}
                        className="gap-2"
                    >
                        <Gauge className="h-4 w-4" />
                        Analyze Readability
                    </GButton>
                    <GButton variant="outline" onClick={handlePaste} className="gap-2">
                        <ClipboardPaste className="h-4 w-4" />
                        Paste
                    </GButton>
                    <GButton
                        variant="outline"
                        onClick={() => { setText(""); setResult(null) }}
                        disabled={!text}
                        className="gap-2"
                    >
                        <Trash2 className="h-4 w-4" />
                        Clear
                    </GButton>
                </div>
            </GCard>

            {/* Results */}
            {result && (
                <>
                    {/* Overall Score Card */}
                    <GCard className="p-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Big Score Circle */}
                            <div className="flex-shrink-0">
                                <div className={cn(
                                    "w-32 h-32 rounded-full flex flex-col items-center justify-center bg-gradient-to-br",
                                    gradeColor(result.overallGrade)
                                )}>
                                    <span className="text-3xl font-bold text-white">{result.overallGrade}</span>
                                    <span className="text-xs text-white/80 font-medium">Grade Level</span>
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-2">
                                <h3 className="text-2xl font-bold text-foreground">
                                    {result.overallLabel} Readability
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Average across 5 grade-level algorithms. Your text requires approximately a
                                    {" "}<strong>{gradeToLabel(result.overallGrade)}</strong> reading level.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                                    <span>{result.stats.words} words</span>
                                    <span>{result.stats.sentences} sentences</span>
                                    <span>{result.readingTime} read</span>
                                    <span>{result.speakingTime} speak</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <GButton
                                    variant="outline"
                                    onClick={handleCopyReport}
                                    className="gap-2"
                                >
                                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    {copied ? "Copied!" : "Copy Report"}
                                </GButton>
                            </div>
                        </div>
                    </GCard>

                    {/* Algorithm Score Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.scores.map((score, i) => (
                            <GCard key={score.name} className="overflow-hidden">
                                <button
                                    className="w-full p-4 text-left"
                                    onClick={() => setExpandedScore(expandedScore === i ? null : i)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className={score.color}>{score.icon}</span>
                                            <span className="font-semibold text-foreground text-sm">{score.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={cn("text-lg font-bold", score.color)}>
                                                {score.score}
                                            </span>
                                            {expandedScore === i ? (
                                                <ChevronUp className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{score.gradeLevel}</p>
                                    <div className="mt-2">
                                        <GProgress
                                            value={score.name === "Reading Ease"
                                                ? score.score
                                                : Math.min(100, (score.score / 20) * 100)
                                            }
                                            className="h-1.5"
                                            indicatorClassName={progressColor(
                                                score.name === "Reading Ease"
                                                    ? fleschEaseToGrade(score.score)
                                                    : score.score
                                            )}
                                        />
                                    </div>
                                </button>
                                {expandedScore === i && (
                                    <div className="px-4 pb-4 border-t border-border pt-3 space-y-2">
                                        <p className="text-xs text-muted-foreground">{score.description}</p>
                                        <div className="flex items-start gap-2 text-xs">
                                            <ArrowRight className="h-3 w-3 mt-0.5 text-blue-400 flex-shrink-0" />
                                            <span className="text-foreground">{score.interpretation}</span>
                                        </div>
                                    </div>
                                )}
                            </GCard>
                        ))}
                    </div>

                    {/* Audience Match */}
                    <GCard className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-purple-400" />
                            Audience Match
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {result.audienceMatches.map((aud) => (
                                <div
                                    key={aud.label}
                                    className={cn(
                                        "rounded-lg border p-3 flex items-start gap-3",
                                        matchColor(aud.match)
                                    )}
                                >
                                    <div className="mt-0.5">{aud.icon}</div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{aud.label}</span>
                                            <span className="text-xs capitalize px-1.5 py-0.5 rounded bg-black/20">
                                                {aud.match}
                                            </span>
                                        </div>
                                        <p className="text-xs opacity-80 mt-0.5">{aud.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GCard>

                    {/* Text Statistics */}
                    <GCard className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-cyan-400" />
                            Text Statistics
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {[
                                { label: "Characters", value: result.stats.characters.toLocaleString() },
                                { label: "Words", value: result.stats.words.toLocaleString() },
                                { label: "Sentences", value: result.stats.sentences.toLocaleString() },
                                { label: "Paragraphs", value: result.stats.paragraphs.toLocaleString() },
                                { label: "Syllables", value: result.stats.syllables.toLocaleString() },
                                { label: "Unique Words", value: result.stats.uniqueWords.toLocaleString() },
                                { label: "Avg Words/Sentence", value: result.stats.avgWordsPerSentence.toString() },
                                { label: "Avg Syllables/Word", value: result.stats.avgSyllablesPerWord.toString() },
                                { label: "Avg Chars/Word", value: result.stats.avgCharPerWord.toString() },
                                { label: "Complex Words", value: result.stats.complexWords.toLocaleString() },
                                { label: "Long Sentences (25+)", value: result.stats.longSentences.toString() },
                                { label: "Vocabulary Density", value: `${(result.stats.vocabularyDensity * 100).toFixed(1)}%` },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-muted/50 rounded-lg p-3 text-center">
                                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </GCard>

                    {/* Suggestions */}
                    <GCard className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Info className="h-5 w-5 text-yellow-400" />
                            Improvement Suggestions
                        </h3>
                        <div className="space-y-2">
                            {result.suggestions.map((suggestion, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <ArrowRight className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                                    <span>{suggestion}</span>
                                </div>
                            ))}
                        </div>
                    </GCard>
                </>
            )}
        </div>
    )
}
