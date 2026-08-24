import { aiTextGenerator } from "./ai-text-generator"
import { PROMPTS } from "./prompts"
import {
    CaptionsRequest,
    HashtagsRequest,
    LyricsRequest,
    PetNameRequest,
    ChannelNameRequest,
    PromptGeneratorRequest
} from "@/types/ai.types"

function getGeneratedText(result: { text?: unknown }): string {
    if (typeof result.text === "string") return result.text
    if (result.text === null || result.text === undefined) return ""

    try {
        return JSON.stringify(result.text)
    } catch {
        return String(result.text)
    }
}

function stripMarkdownCodeFence(text: string): string {
    let cleaned = text.trim()

    if (cleaned.startsWith("```json")) {
        cleaned = cleaned.replace(/^```json\s*/, "").replace(/\s*```$/, "")
    } else if (cleaned.startsWith("```markdown")) {
        cleaned = cleaned.replace(/^```markdown\s*/, "").replace(/\s*```$/, "")
    } else if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```\s*/, "").replace(/\s*```$/, "")
    }

    return cleaned.trim()
}

function extractJsonArrayText(text: string): string {
    const cleaned = stripMarkdownCodeFence(text)
    // Balanced-bracket scan instead of a non-greedy regex: /\[[\s\S]*?\]/
    // stopped at the FIRST "]", so any bracket inside a caption string
    // truncated the array mid-JSON and the parse threw on every request.
    const start = cleaned.indexOf("[")
    if (start === -1) return cleaned
    let depth = 0
    let inString = false
    let escaped = false
    for (let i = start; i < cleaned.length; i++) {
        const ch = cleaned[i]
        if (escaped) { escaped = false; continue }
        if (ch === "\\") { escaped = true; continue }
        if (ch === '"') { inString = !inString; continue }
        if (inString) continue
        if (ch === "[") depth++
        else if (ch === "]") {
            depth--
            if (depth === 0) return cleaned.slice(start, i + 1)
        }
    }
    return cleaned.slice(start)
}

function extractJsonObjectText(text: string): string {
    const cleaned = stripMarkdownCodeFence(text)
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/)
    return jsonMatch ? jsonMatch[0] : cleaned
}

/**
 * Service function for generating social media captions
 */
export async function generateCaptionsService(data: CaptionsRequest) {
    const { description, platform } = data

    if (!description?.trim()) {
        return {
            success: false,
            error: "Description is required",
            statusCode: 400
        }
    }

    const result = await aiTextGenerator.generateCaptions(description, platform, 5)

    if (!result.success) {
        console.error("Cloudflare AI Error:", result.error)

        if (result.error?.includes("quota")) {
            return {
                success: false,
                error: "AI service is experiencing high demand. Please wait a moment and try again.",
                statusCode: 503
            }
        }

        if (result.error?.includes("safety")) {
            return {
                success: false,
                error: "Content could not be generated due to safety guidelines. Please try a different description.",
                statusCode: 400
            }
        }

        return {
            success: false,
            error: "Oops! Something went wrong while generating captions. Please try again in a moment.",
            statusCode: 500
        }
    }

    try {
        const rawText = getGeneratedText(result)
        const jsonText = extractJsonArrayText(rawText)

        const captions = JSON.parse(jsonText)

        if (!Array.isArray(captions) || captions.length === 0) {
            throw new Error("Invalid response format")
        }

        return {
            success: true,
            data: { captions },
            statusCode: 200
        }
    } catch (parseError) {
        console.error("Failed to parse AI response:", parseError)
        console.error("Raw response:", getGeneratedText(result))
        // The model produced text but not clean JSON — salvage captions from
        // plain lines rather than failing the whole request.
        const salvaged = getGeneratedText(result)
            .split("\n")
            .map((line) => line
                .replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "")
                .trim()
                .replace(/^["'“]+|["'”],?$/g, ""))
            .filter((line) => line.length > 8 && !/^(here (are|is)|sure|okay|of course)/i.test(line) && !/^[\[\]{}",]*$/.test(line))
            .slice(0, 5)
        if (salvaged.length > 0) {
            return {
                success: true,
                data: { captions: salvaged },
                statusCode: 200
            }
        }
        return {
            success: false,
            error: "Failed to process AI response. Please try again.",
            statusCode: 500
        }
    }
}

/**
 * Service function for generating hashtags
 */
export async function generateHashtagsService(data: HashtagsRequest) {
    const { text, platform = "instagram" } = data

    if (!text || text.trim().length === 0) {
        return {
            success: false,
            error: "Text is required",
            statusCode: 400
        }
    }

    const platformContextMap = {
        instagram: "Instagram post",
        twitter: "Twitter post",
        facebook: "Facebook post",
        linkedin: "LinkedIn professional post",
        youtube: "YouTube video",
        tiktok: "TikTok video"
    }

    const platformContext = platformContextMap[platform as keyof typeof platformContextMap] || "social media post"
    const prompt = PROMPTS.hashtags(text, platform, platformContext)

    const response = await aiTextGenerator.generateText({
        prompt,
        temperature: 0.8,
        maxTokens: 200,
    })

    if (!response.success) {
        console.error("Cloudflare AI Error:", response.error)
        return {
            success: false,
            error: response.error || "Failed to generate hashtags. Please try again.",
            statusCode: 500
        }
    }

    const generatedText = getGeneratedText(response)
    const hashtags = extractHashtags(generatedText)

    if (hashtags.length === 0) {
        console.error("No hashtags extracted from AI response:", generatedText)
        return {
            success: false,
            error: "Failed to generate hashtags. Please try again.",
            statusCode: 500
        }
    }

    return {
        success: true,
        data: {
            hashtags: hashtags,
            source: "ai"
        },
        statusCode: 200
    }
}

/**
 * Service function for generating song lyrics
 */
export async function generateLyricsService(data: LyricsRequest) {
    const { theme, genre, mood, duration, language } = data

    if (!theme || theme.trim().length === 0) {
        return {
            success: false,
            error: "Song theme is required",
            statusCode: 400
        }
    }

    const selectedLanguage = language || "english"

    const getStructure = (minutes: number) => {
        if (minutes <= 2) {
            return "2 verses, 1 chorus (repeated), 1 bridge"
        } else if (minutes <= 3) {
            return "2 verses, 2 choruses, 1 bridge"
        } else if (minutes <= 4) {
            return "3 verses, 3 choruses, 1 bridge, 1 outro"
        } else {
            return "3 verses, 3 choruses, 1 pre-chorus, 1 bridge, 1 outro"
        }
    }

    const structure = duration ? getStructure(duration) : "2-3 verses, choruses, and a bridge"

    const getLanguageInstructions = (lang: string) => {
        const languageMap: { [key: string]: string } = {
            english: "Write lyrics in English. Use natural, flowing English language and idiomatic expressions.",
            spanish: "Escribe las letras en español. Usa lenguaje natural y expresiones idiomáticas del español. All lyrics must be in Spanish language.",
            french: "Écrivez les paroles en français. Utilisez un langage naturel et des expressions idiomatiques françaises. All lyrics must be in French language.",
            german: "Schreiben Sie die Texte auf Deutsch. Verwenden Sie natürliche Sprache und deutsche Redewendungen. All lyrics must be in German language.",
            italian: "Scrivi i testi in italiano. Usa un linguaggio naturale e espressioni idiomatiche italiane. All lyrics must be in Italian language.",
            portuguese: "Escreva as letras em português. Use linguagem natural e expressões idiomáticas portuguesas. All lyrics must be in Portuguese language.",
            russian: "Напишите тексты на русском языке. Используйте естественный язык и русские идиомы. All lyrics must be in Russian language.",
            japanese: "歌詞を日本語で書いてください。自然な日本語と慣用表現を使用してください。All lyrics must be in Japanese language.",
            korean: "가사를 한국어로 작성하세요. 자연스러운 한국어와 관용구를 사용하세요. All lyrics must be in Korean language.",
            chinese: "用中文写歌词。使用自然的中文语言和惯用表达。All lyrics must be in Chinese language.",
            arabic: "اكتب كلمات الأغنية باللغة العربية. استخدم اللغة الطبيعية والتعبيرات الاصطلاحية العربية. All lyrics must be in Arabic language.",
            hindi: "गीत हिंदी में लिखें। प्राकृतिक हिंदी भाषा और मुहावरों का उपयोग करें। All lyrics must be in Hindi language.",
            bengali: "গান বাংলায় লিখুন। প্রাকৃতিক বাংলা ভাষা এবং বাগধারা ব্যবহার করুন। All lyrics must be in Bengali language.",
            punjabi: "ਗੀਤ ਪੰਜਾਬੀ ਵਿੱਚ ਲਿਖੋ। ਕੁਦਰਤੀ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਤੇ ਮੁਹਾਵਰੇ ਵਰਤੋ। All lyrics must be in Punjabi language.",
            urdu: "اردو میں گانے لکھیں۔ قدرتی اردو زبان اور محاورے استعمال کریں۔ All lyrics must be in Urdu language.",
            turkish: "Şarkı sözlerini Türkçe yazın. Doğal Türkçe dil ve deyimler kullanın. All lyrics must be in Turkish language.",
            dutch: "Schrijf de teksten in het Nederlands. Gebruik natuurlijke Nederlandse taal en uitdrukkingen. All lyrics must be in Dutch language.",
            polish: "Napisz teksty po polsku. Używaj naturalnego języka polskiego i idiomów. All lyrics must be in Polish language.",
            swedish: "Skriv texterna på svenska. Använd naturligt svenskt språk och idiomatiska uttryck. All lyrics must be in Swedish language.",
            norwegian: "Skriv tekstene på norsk. Bruk naturlig norsk språk og idiomatiske uttrykk. All lyrics must be in Norwegian language.",
            danish: "Skriv teksterne på dansk. Brug naturligt dansk sprog og idiomatiske udtryk. All lyrics must be in Danish language.",
            finnish: "Kirjoita sanoitukset suomeksi. Käytä luonnollista suomen kieltä ja idiomeja. All lyrics must be in Finnish language.",
            greek: "Γράψτε τους στίχους στα ελληνικά. Χρησιμοποιήστε φυσική ελληνική γλώσσα και ιδιωματισμούς. All lyrics must be in Greek language.",
            hebrew: "כתוב את המילים בעברית. השתמש בשפה עברית טבעית וביטויים אידיומטיים. All lyrics must be in Hebrew language.",
            thai: "เขียนเนื้อเพลงเป็นภาษาไทย ใช้ภาษาไทยที่เป็นธรรมชาติและสำนวน All lyrics must be in Thai language.",
            vietnamese: "Viết lời bài hát bằng tiếng Việt. Sử dụng ngôn ngữ tự nhiên và thành ngữ tiếng Việt. All lyrics must be in Vietnamese language.",
            indonesian: "Tulis lirik dalam bahasa Indonesia. Gunakan bahasa Indonesia yang alami dan idiom. All lyrics must be in Indonesian language.",
            malay: "Tulis lirik dalam bahasa Melayu. Gunakan bahasa Melayu yang semula jadi dan simpulan bahasa. All lyrics must be in Malay language.",
            tagalog: "Isulat ang lyrics sa Tagalog. Gumamit ng natural na Tagalog at idyoma. All lyrics must be in Tagalog (Filipino) language.",
            swahili: "Andika maneno kwa Kiswahili. Tumia lugha ya asili ya Kiswahili na misemo. All lyrics must be in Swahili language.",
            czech: "Napište texty v češtině. Používejte přirozený český jazyk a idiomy. All lyrics must be in Czech language.",
            hungarian: "Írja a dalszövegeket magyarul. Használjon természetes magyar nyelvet és idiómákat. All lyrics must be in Hungarian language.",
            romanian: "Scrieți versurile în română. Folosiți limba română naturală și expresii idiomatice. All lyrics must be in Romanian language.",
            ukrainian: "Напишіть тексти українською. Використовуйте природну українську мову та ідіоми. All lyrics must be in Ukrainian language.",
            persian: "متن آهنگ را به فارسی بنویسید. از زبان طبیعی فارسی و اصطلاحات استفاده کنید. All lyrics must be in Persian language.",
            tamil: "பாடலை தமிழில் எழுதுங்கள். இயற்கையான தமிழ் மொழி மற்றும் சொற்றொடர்களைப் பயன்படுத்துங்கள். All lyrics must be in Tamil language.",
            telugu: "పాటను తెలుగులో రాయండి. సహజమైన తెలుగు భాష మరియు జాతీయాలను ఉపయోగించండి. All lyrics must be in Telugu language.",
            marathi: "गाणे मराठीत लिहा। नैसर्गिक मराठी भाषा आणि वाक्प्रचार वापरा। All lyrics must be in Marathi language.",
            gujarati: "ગીત ગુજરાતીમાં લખો. કુદરતી ગુજરાતી ભાષા અને મુહાવરાઓનો ઉપયોગ કરો. All lyrics must be in Gujarati language.",
            kannada: "ಹಾಡನ್ನು ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ. ನೈಸರ್ಗಿಕ ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಭಾಷಾಂತರಗಳನ್ನು ಬಳಸಿ. All lyrics must be in Kannada language.",
            malayalam: "പാട്ട് മലയാളത്തിൽ എഴുതുക. സ്വാഭാവിക മലയാളം ഭാഷയും പഴഞ്ചൊല്ലുകളും ഉപയോഗിക്കുക. All lyrics must be in Malayalam language.",
        }
        return languageMap[lang] || languageMap.english
    }

    const languageInstructions = getLanguageInstructions(selectedLanguage)
    const prompt = PROMPTS.lyrics(languageInstructions, selectedLanguage, theme, genre, mood, duration, structure)

    const response = await aiTextGenerator.generateText({
        prompt,
        maxTokens: 2500,
        temperature: 0.85,
    })

    if (!response.success) {
        console.error("AI Error:", response.error)
        return {
            success: false,
            error: response.error || "Something went wrong. Please try again later.",
            statusCode: 500
        }
    }

    let lyrics = getGeneratedText(response).trim()
    lyrics = lyrics.replace(/```[\w]*\n?/g, "")
    lyrics = lyrics.replace(/```/g, "")

    return {
        success: true,
        data: {
            lyrics,
            metadata: {
                theme,
                genre: genre || "General",
                mood: mood || "Balanced",
                duration: duration || "Standard",
                language: selectedLanguage,
                structure
            }
        },
        statusCode: 200
    }
}

/**
 * Service function for generating meme text
 */
export async function generateMemeService(data: { topic: string; style?: string }) {
    const { topic, style } = data

    if (!topic || topic.trim().length === 0) {
        return {
            success: false,
            error: "Topic is required",
            statusCode: 400
        }
    }

    const prompt = `Generate a funny meme text for the topic: "${topic}"${style ? ` in a ${style} style` : ""}.
    
Return ONLY a JSON object with this exact format:
{
  "top": "top text for the meme",
  "bottom": "bottom text for the meme"
}

Make it funny, relatable, and suitable for a classic meme format.`

    const response = await aiTextGenerator.generateText({
        prompt,
        maxTokens: 150,
        temperature: 0.9,
    })

    if (!response.success) {
        console.error("AI Error:", response.error)
        return {
            success: false,
            error: "Failed to generate meme",
            statusCode: 500
        }
    }

    try {
        const memeText = JSON.parse(extractJsonObjectText(getGeneratedText(response)))
        return {
            success: true,
            data: { memeText },
            statusCode: 200
        }
    } catch (error) {
        console.error("Failed to parse meme response:", error)
        return {
            success: false,
            error: "Failed to generate meme",
            statusCode: 500
        }
    }
}

/**
 * Service function for generating pet names
 */
export async function generatePetNamesService(data: PetNameRequest) {
    const { petType, gender, color, age, personality, breed, size, additionalInfo } = data

    if (!petType) {
        return {
            success: false,
            error: "Pet type is required",
            statusCode: 400
        }
    }

    const petContext = []
    petContext.push(`Pet Type: ${petType}`)
    if (gender && gender !== "any") petContext.push(`Gender: ${gender}`)
    if (color) petContext.push(`Color/Appearance: ${color}`)
    if (age && age !== "any") petContext.push(`Age: ${age}`)
    if (size && size !== "any") petContext.push(`Size: ${size}`)
    if (breed) petContext.push(`Breed: ${breed}`)
    if (personality) petContext.push(`Personality: ${personality}`)
    if (additionalInfo) petContext.push(`Additional Preferences: ${additionalInfo}`)

    const contextString = petContext.join("\n")
    const prompt = PROMPTS.petNames(contextString, gender, petType, color, personality, breed, age)

    // 40 names ≈ 1,400 output tokens. The previous 100-name/4000-token ask
    // took longer than Netlify's ~30s function limit and 502'd on every call.
    const result = await aiTextGenerator.generateText({
        prompt,
        temperature: 0.9,
        maxTokens: 1800,
    })

    const petNamesText = getGeneratedText(result)
    if (!result.success || !petNamesText) {
        return {
            success: false,
            error: result.error || "Something went wrong. Please try again later.",
            statusCode: 500
        }
    }

    const response = petNamesText
    let parsedNames

    try {
        const jsonMatch = response.match(/\{[\s\S]*\}/)
        if (!jsonMatch) {
            throw new Error("No JSON found in response")
        }

        parsedNames = JSON.parse(jsonMatch[0])
        const requiredCategories = ["traditional", "modern", "unique", "nature", "cultural", "celebrity", "food", "mythological"]

        for (const category of requiredCategories) {
            if (!parsedNames[category] || !Array.isArray(parsedNames[category])) {
                parsedNames[category] = []
            }
        }

        for (const category of requiredCategories) {
            parsedNames[category] = parsedNames[category].filter((name: any) =>
                name && name.name && name.meaning && name.origin
            )
        }

    } catch (parseError) {
        console.error("Error parsing AI response:", parseError)
        console.log("Raw response:", response)

        return {
            success: false,
            error: "Something went wrong. Please try again later.",
            statusCode: 500
        }
    }

    return {
        success: true,
        data: {
            names: parsedNames,
            metadata: {
                petType,
                gender,
                color,
                age,
                size,
                breed,
                totalNames: Object.values(parsedNames).reduce((sum: number, arr: any) => sum + arr.length, 0)
            }
        },
        statusCode: 200
    }
}

/**
 * Helper function to extract hashtags from text
 */
function extractHashtags(text: string): string[] {
    const hashtagRegex = /#[\w]+/g
    const matches = text.match(hashtagRegex) || []
    return [...new Set(matches)]
}

/**
 * Service function for generating YouTube channel names
 */
export async function generateChannelNamesService(data: ChannelNameRequest) {
    const { topic, keywords, tone, targetAudience } = data

    if (!topic || topic.trim().length === 0) {
        return {
            success: false,
            error: "Topic/Niche is required",
            statusCode: 400
        }
    }

    const prompt = PROMPTS.channelNames(topic, keywords, tone, targetAudience)

    const result = await aiTextGenerator.generateText({
        prompt,
        temperature: 0.95, // Higher creativity
        maxTokens: 4000,
    })

    const channelNamesText = getGeneratedText(result)
    if (!result.success || !channelNamesText) {
        return {
            success: false,
            error: result.error || "Failed to generate channel names. Please try again.",
            statusCode: 500
        }
    }

    try {
        const jsonText = stripMarkdownCodeFence(channelNamesText)

        const parsedNames = JSON.parse(jsonText)

        // Validate structure (basic check)
        if (typeof parsedNames !== 'object' || parsedNames === null) {
            throw new Error("Invalid JSON structure")
        }

        return {
            success: true,
            data: {
                suggestions: parsedNames,
                originalTopic: topic
            },
            statusCode: 200
        }

    } catch (parseError) {
        console.error("Error parsing AI response:", parseError)
        console.log("Raw response:", channelNamesText)

        return {
            success: false,
            error: "Failed to parse AI suggestions. Please try again.",
            statusCode: 500
        }
    }
}

/**
 * Service function for generating Antigravity Agent Skills
 */
export async function generateAgentSkillService(data: import("@/types/ai.types").AgentSkillRequest) {
    const { skillName, description } = data

    if (!description || description.trim().length === 0) {
        return {
            success: false,
            error: "Skill description is required",
            statusCode: 400
        }
    }

    const prompt = PROMPTS.agentSkill(skillName || "", description)

    const result = await aiTextGenerator.generateText({
        prompt,
        temperature: 0.7, // Balanced for technical accuracy and creativity
        maxTokens: 3000,
    })

    const agentSkillText = getGeneratedText(result)
    if (!result.success || !agentSkillText) {
        return {
            success: false,
            error: result.error || "Failed to generate agent skill. Please try again.",
            statusCode: 500
        }
    }

    let skillContent = agentSkillText.trim()

    // Clean up markdown code blocks if present (the prompt asks not to, but AI often disobeys)
    if (skillContent.startsWith('```markdown')) {
        skillContent = skillContent.replace(/^```markdown\s*/, '').replace(/\s*```$/, '')
    } else if (skillContent.startsWith('```')) {
        skillContent = skillContent.replace(/^```\s*/, '').replace(/\s*```$/, '')
    }

    return {
        success: true,
        data: {
            skillContent,
            metadata: {
                skillName: skillName || "custom-skill",
                generatedAt: new Date().toISOString()
            }
        },
        statusCode: 200
    }
}

/**
 * Service function for AI paraphrasing/rewriting text
 */
export async function generateParaphraseService(data: { text: string; mode: string }) {
    const { text, mode } = data

    if (!text?.trim()) {
        return { success: false, error: "Text is required", statusCode: 400 }
    }

    if (text.trim().length > 5000) {
        return { success: false, error: "Text must be under 5,000 characters", statusCode: 400 }
    }

    const modeInstructions: Record<string, string> = {
        standard: "Rewrite the text naturally while preserving the original meaning. Change sentence structure and vocabulary.",
        fluency: "Rewrite the text to improve grammar, clarity, and readability. Fix any awkward phrasing. Keep the meaning identical.",
        formal: "Rewrite the text in a formal, professional tone suitable for business communication or academic writing.",
        creative: "Rewrite the text creatively with varied vocabulary, engaging language, and a more expressive style while preserving the core meaning.",
        academic: "Rewrite the text in an academic, scholarly tone. Use precise terminology and complex sentence structures appropriate for research papers.",
        shorten: "Rewrite the text to be significantly shorter and more concise. Remove unnecessary words. Keep only the essential meaning.",
        expand: "Rewrite and expand the text with more detail, examples, and explanations. Make it more comprehensive while keeping the same core meaning.",
    }

    const instruction = modeInstructions[mode] || modeInstructions.standard

    const prompt = `You are a professional text rewriter. ${instruction}

IMPORTANT RULES:
- Output ONLY the rewritten text, nothing else
- Do NOT include any labels, headers, or explanations
- Do NOT start with "Here is" or "Here's" or any introduction
- Preserve the original language (if input is English, output English)
- Maintain paragraph breaks if the original has them

Text to rewrite:
${text}`

    const result = await aiTextGenerator.generateText({
        prompt,
        maxTokens: 2000,
        temperature: mode === "creative" ? 0.9 : mode === "formal" || mode === "academic" ? 0.5 : 0.7,
    })

    if (!result.success) {
        return { success: false, error: result.error || "Failed to paraphrase text", statusCode: 500 }
    }

    return {
        success: true,
        data: { paraphrasedText: getGeneratedText(result).trim() },
        statusCode: 200,
    }
}

/**
 * Service function for AI text summarization
 */
export async function generateSummaryService(data: { text: string; mode: string; lengthPercent: number }) {
    const { text, mode, lengthPercent = 30 } = data

    if (!text?.trim()) {
        return { success: false, error: "Text is required", statusCode: 400 }
    }

    if (text.trim().length > 10000) {
        return { success: false, error: "Text must be under 10,000 characters", statusCode: 400 }
    }

    const inputWordCount = text.trim().split(/\s+/).length
    const targetWords = Math.max(20, Math.round(inputWordCount * (lengthPercent / 100)))

    const modeInstructions: Record<string, string> = {
        paragraph: `Summarize the text into a concise paragraph of approximately ${targetWords} words. Write in flowing prose that captures the main ideas and key details.`,
        bullets: `Summarize the text as a bullet-point list of the most important points. Aim for approximately ${targetWords} words total. Use "- " prefix for each bullet point.`,
        keypoints: `Extract the top key takeaways from the text. Present them as numbered insights (1. 2. 3. etc). Aim for approximately ${targetWords} words total. Focus on actionable insights and critical information.`,
        tldr: "Summarize the entire text in exactly ONE sentence. Be concise but capture the core message. Maximum 30 words.",
    }

    const instruction = modeInstructions[mode] || modeInstructions.paragraph

    const prompt = `You are a professional text summarizer. ${instruction}

IMPORTANT RULES:
- Output ONLY the summary, nothing else
- Do NOT include any labels, headers, or introductions like "Here is" or "Summary:"
- Preserve the original language (if input is English, output English)
- Be accurate — do not add information that is not in the original text
- Focus on the most important ideas and key facts
- Maintain objectivity — do not add opinions

Text to summarize:
${text}`

    const result = await aiTextGenerator.generateText({
        prompt,
        maxTokens: mode === "tldr" ? 100 : Math.min(2000, targetWords * 3),
        temperature: 0.3,
    })

    if (!result.success) {
        return { success: false, error: result.error || "Failed to summarize text", statusCode: 500 }
    }

    return {
        success: true,
        data: { summary: getGeneratedText(result).trim() },
        statusCode: 200,
    }
}

const PROMPT_TARGET_MODELS: Record<string, { name: string; guidance: string }> = {
    sora: {
        name: "Sora 2 (OpenAI video generation)",
        guidance: `- Describe one continuous shot or a short sequence: subject, action, setting, time of day
- Specify camera work in film language: shot size, angle, movement (e.g. slow dolly-in, handheld tracking)
- Describe lighting and color palette concretely (e.g. golden-hour backlight, neon reflections on wet asphalt)
- Include physical detail that grounds realism: materials, weather, motion physics
- Audio is generated too — mention ambient sound or a short line of dialogue in quotes when it helps
- Keep each prompt 60-120 words of flowing prose, not a keyword list`,
    },
    veo: {
        name: "Veo 3 (Google video generation with native audio)",
        guidance: `- Structure: subject + action + scene + camera style + audio cues
- Veo 3 generates synchronized audio: describe ambient sound, effects, and put any spoken dialogue in quotes
- Specify camera behavior explicitly (aerial, POV, static tripod, slow pan) and shot composition
- Describe the visual style (cinematic, documentary, film grain) and lighting mood
- Prompts render as ~8 second clips, so scope the action to fit one beat
- Keep each prompt 60-120 words of flowing prose`,
    },
    midjourney: {
        name: "Midjourney (image generation)",
        guidance: `- Lead with the core subject and scene in concrete visual nouns, then style, lighting, composition, mood
- Comma-separated descriptive phrases work better than full sentences
- Name a medium or aesthetic when useful (35mm photo, oil painting, isometric 3D render)
- Specify lighting precisely (rim light, overcast softbox, harsh noon sun) and a color palette
- End each prompt with sensible parameters like --ar 16:9 --stylize 200 (vary aspect ratio to fit the concept)
- Avoid vague quality words like "beautiful, 4k, masterpiece" — describe what is actually in frame`,
    },
    "nano-banana": {
        name: "Nano Banana (Gemini image generation and editing)",
        guidance: `- Write conversational, specific instructions in full sentences — this model follows natural language, not keyword soup
- Describe the scene like a photographer: subject, pose, environment, lens feel, lighting
- For edits, state precisely what to change AND what must stay the same (faces, outfits, background)
- It excels at character consistency — reference "the same person/character" explicitly when relevant
- Mention text to render in the image inside quotes; it handles typography well
- Keep each prompt 40-100 words`,
    },
    general: {
        name: "modern AI models (ChatGPT, Claude, Gemini)",
        guidance: `- State the role, the task, the context, and the desired output format explicitly
- Include concrete constraints (length, tone, audience, structure) instead of vague adjectives
- Add one short example of the expected output shape when it helps
- Tell the model what to avoid as well as what to do
- Keep each prompt self-contained so it can be pasted as-is`,
    },
}

export async function generatePromptService(data: PromptGeneratorRequest) {
    const { idea, targetModel } = data

    if (!idea?.trim()) {
        return {
            success: false,
            error: "Describe your idea first",
            statusCode: 400
        }
    }

    const target = PROMPT_TARGET_MODELS[targetModel] || PROMPT_TARGET_MODELS.general
    const prompt = PROMPTS.promptGenerator(idea.trim().slice(0, 600), target.name, target.guidance)

    const result = await aiTextGenerator.generateText({
        prompt,
        maxTokens: 1500,
        temperature: 0.85,
    })

    if (!result.success) {
        return {
            success: false,
            error: result.error || "Failed to generate prompts. Please try again.",
            statusCode: 500
        }
    }

    const rawText = stripMarkdownCodeFence(getGeneratedText(result))

    const cleanPromptBlock = (block: string) =>
        block
            .trim()
            .replace(/^(?:prompt\s*\d+\s*[:.)-]?\s*)/i, "")
            .replace(/^["'“]+|["'”]+$/g, "")
            .trim()

    // Primary format: prompts separated by ### delimiter lines (splitting on
    // any #-heading line also absorbs "### Prompt 1"-style labels the model
    // sometimes adds despite instructions).
    const delimited = rawText
        .split(/^\s*#{2,}.*$/m)
        .map(cleanPromptBlock)
        .filter((block) => block.length > 40)
        .slice(0, 3)

    if (delimited.length >= 2) {
        return {
            success: true,
            data: { prompts: delimited },
            statusCode: 200
        }
    }

    // Fallback: the model returned a JSON array anyway.
    try {
        const parsed = JSON.parse(extractJsonArrayText(rawText))
        if (Array.isArray(parsed)) {
            const prompts = parsed
                .filter((item) => typeof item === "string")
                .map(cleanPromptBlock)
                .filter((item) => item.length > 40)
                .slice(0, 3)
            if (prompts.length > 0) {
                return {
                    success: true,
                    data: { prompts },
                    statusCode: 200
                }
            }
        }
    } catch {
        // fall through to blank-line salvage
    }

    const salvaged = rawText
        .split(/\n{2,}/)
        .map((block) => cleanPromptBlock(block.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "")))
        .filter((block) => block.length > 40)
        .slice(0, 3)

    if (salvaged.length > 0) {
        return {
            success: true,
            data: { prompts: salvaged },
            statusCode: 200
        }
    }

    console.error("Failed to parse prompt generator response:", rawText.slice(0, 300))
    return {
        success: false,
        error: "Failed to process AI response. Please try again.",
        statusCode: 500
    }
}
