// lib/adsense-validator.ts
import React from 'react'

export interface ContentData {
    toolName: string
    overview: string
    howToSteps: string[]
    features: string[]
    aboutTool: string | React.ReactNode
    aboutToolText?: string
    proTip?: string
    useCases?: string[]
    faqs: Array<{ question: string; answer: string }>
    metaTitle?: string
    metaDescription?: string
}

export type ValidationCategory = 'CONTENT' | 'POLICY' | 'SEO' | 'TECHNICAL'

export interface ValidationResult {
    type: 'CRITICAL' | 'WARNING' | 'SUCCESS'
    category: ValidationCategory
    message: string
    fix?: string
}

export function validateAdSenseCompliance(data: ContentData): ValidationResult[] {
    const results: ValidationResult[] = []

    const aboutToolText = data.aboutToolText || (typeof data.aboutTool === 'string' ? data.aboutTool : "")

    const fullText = [
        data.overview,
        aboutToolText,
        data.proTip || "",
        ...data.howToSteps,
        ...data.features,
        ...data.useCases || [],
        ...data.faqs.map(f => f.question + " " + f.answer)
    ].join(" ")

    const lowerText = fullText.toLowerCase()
    const wordCount = fullText.split(/\s+/).length


    if (wordCount < 1500) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: `Content Too Short: ${wordCount}/1500 words`,
            fix: `Add ~${1500 - wordCount} more words to reach the minimum target.`
        })
    } else if (wordCount > 2000) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: `Content Too Long: ${wordCount}/2000 words`,
            fix: 'Reduce content length to stay under 2000 words.'
        })
    } else {
        results.push({
            type: 'SUCCESS',
            category: 'CONTENT',
            message: `Perfect Length: ${wordCount} words (Range: 1500-2000)`,
        })
    }


    if (data.howToSteps.length < 5) {
        results.push({
            type: 'WARNING',
            category: 'CONTENT',
            message: `Guide Steps: ${data.howToSteps.length}/5`,
            fix: 'Expand the "How-To" section to at least 5 detailed steps.'
        })
    }
    if (data.faqs.length < 5) {
        results.push({
            type: 'WARNING',
            category: 'CONTENT',
            message: `FAQ Count: ${data.faqs.length}/5`,
            fix: 'Add more FAQs to cover user intent fully.'
        })
    }


    if (!data.metaTitle || data.metaTitle.length < 10) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: 'Missing or Short Title',
            fix: 'A descriptive title is essential for user understanding.'
        })
    }
    if (!data.metaDescription || data.metaDescription.length < 50) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: 'Missing or Short Description',
            fix: 'Provide a comprehensive summary of the tool.'
        })
    }


    if (lowerText.includes('lorem ipsum') || lowerText.includes('dolor sit amet')) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: 'Placeholder Text Detected',
            fix: 'Remove all "Lorem Ipsum" text before publishing.'
        })
    }


    if (data.overview === aboutToolText && data.overview.length > 50) {
        results.push({
            type: 'CRITICAL',
            category: 'CONTENT',
            message: 'Duplicate Sections Detected',
            fix: 'The "Overview" and "About" sections are identical. Rewrite one.'
        })
    }



    const policyRules = [

        {
            category: 'Adult Content',
            patterns: [/\b(porn|xxx|sex|nude|erotic|fetish|incest|bestiality)\b/i, /\b(adult only|18\+|mature content)\b/i]
        },

        {
            category: 'Gambling',
            patterns: [/\b(casino|betting|poker|slots|roulette|blackjack|bookmaker|wager|lottery)\b/i, /\b(online gambling|real money)\b/i]
        },

        {
            category: 'Dangerous/Derogatory',
            patterns: [/\b(hate|racism|suicide|kill|bomb|explosive|terrorist|nazi|supremacy)\b/i, /\b(self-harm|eating disorder)\b/i]
        },

        {
            category: 'Illegal Content',
            patterns: [/\b(fake id|counterfeit|forgery|passport sale|driver license sale)\b/i, /\b(drug|cocaine|heroin|meth|cannabis|marijuana|weed)\b/i]
        },

        {
            category: 'IP Abuse',
            patterns: [/\b(torrent|warez|crack|serial key|keygen|pirated|stream free|watch free)\b/i, /\b(movie download|free download)\b/i]
        },

        {
            category: 'Hacking',
            patterns: [/\b(hack|exploit|cheat engine|aimbot|wallhack|ddos|botnet|phishing)\b/i]
        },

        {
            category: 'Misrepresentation',
            patterns: [/\b(miracle cure|guaranteed profit|get rich quick|instant weight loss)\b/i, /\b(crypto scam|investment scheme)\b/i]
        },

        {
            category: 'Weapons',
            patterns: [/\b(gun|rifle|pistol|ammo|ammunition|silencer|knives|sword)\b/i, /\b(weapon sale|buy weapon)\b/i]
        }
    ]

    policyRules.forEach(rule => {
        rule.patterns.forEach(pattern => {
            if (pattern.test(fullText)) {
                const match = fullText.match(pattern)
                const term = match ? match[0] : 'Restricted Term'
                results.push({
                    type: 'WARNING',
                    category: 'POLICY',
                    message: `Potential Policy Violation: "${term}"`,
                    fix: `Review usage of "${term}". Ensure compliance with ${rule.category} policies.`
                })
            }
        })
    })



    const toolNameLower = data.toolName.toLowerCase()


    if (data.metaTitle) {
        const titleLength = data.metaTitle.length
        const titleLower = data.metaTitle.toLowerCase()


        if (titleLength < 40 || titleLength > 70) {
            results.push({
                type: 'CRITICAL',
                category: 'SEO',
                message: `Title Length Critical: ${titleLength} chars`,
                fix: 'Title must be between 50-60 characters for optimal display.'
            })
        } else if (titleLength < 50 || titleLength > 60) {
            results.push({
                type: 'WARNING',
                category: 'SEO',
                message: `Title Length Suboptimal: ${titleLength} chars`,
                fix: 'Aim for exactly 50-60 characters.'
            })
        } else {
            results.push({
                type: 'SUCCESS',
                category: 'SEO',
                message: `Title Length Perfect: ${titleLength} chars`,
            })
        }


        if (!titleLower.includes(toolNameLower)) {
            results.push({
                type: 'CRITICAL',
                category: 'SEO',
                message: 'Title Missing Keyword',
                fix: `Include "${data.toolName}" naturally in the title tag.`
            })
        }
    } else {
        results.push({
            type: 'CRITICAL',
            category: 'SEO',
            message: 'Missing Meta Title',
            fix: 'Add a unique, descriptive title tag.'
        })
    }


    if (data.metaDescription) {
        const descLength = data.metaDescription.length
        const descLower = data.metaDescription.toLowerCase()


        if (descLength < 100 || descLength > 180) {
            results.push({
                type: 'CRITICAL',
                category: 'SEO',
                message: `Description Length Critical: ${descLength} chars`,
                fix: 'Description must be 130-160 characters.'
            })
        } else if (descLength < 130 || descLength > 160) {
            results.push({
                type: 'WARNING',
                category: 'SEO',
                message: `Description Length Suboptimal: ${descLength} chars`,
                fix: 'Aim for exactly 130-160 characters.'
            })
        } else {
            results.push({
                type: 'SUCCESS',
                category: 'SEO',
                message: `Description Length Perfect: ${descLength} chars`,
            })
        }


        if (!descLower.includes(toolNameLower)) {
            results.push({
                type: 'WARNING',
                category: 'SEO',
                message: 'Description Missing Keyword',
                fix: `Include "${data.toolName}" in the meta description.`
            })
        }
    } else {
        results.push({
            type: 'CRITICAL',
            category: 'SEO',
            message: 'Missing Meta Description',
            fix: 'Add a compelling meta description (130-160 chars).'
        })
    }


    const first100Words = fullText.split(/\s+/).slice(0, 100).join(" ").toLowerCase()

    if (!first100Words.includes(toolNameLower)) {
        results.push({
            type: 'CRITICAL',
            category: 'SEO',
            message: 'Primary Keyword Missing in Intro',
            fix: `Ensure "${data.toolName}" appears in the first 100 words.`
        })
    }

    // D. KEYWORD DENSITY
    const keywordRegex = new RegExp(data.toolName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    const keywordCount = (fullText.match(keywordRegex) || []).length
    const density = (keywordCount / wordCount) * 100

    if (density > 2.5) {
        results.push({
            type: 'CRITICAL',
            category: 'SEO',
            message: `Keyword Stuffing: ${density.toFixed(1)}% density`,
            fix: 'Reduce usage of the tool name. Use synonyms.'
        })
    }

    return results
}