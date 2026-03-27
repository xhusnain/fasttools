import { aiTextGenerator } from "./ai-text-generator"
import { PROMPTS } from "./prompts"
import {
    CaptionsRequest,
    HashtagsRequest,
    LyricsRequest,
    PetNameRequest,
    ChannelNameRequest
} from "@/types/ai.types"

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
        let jsonText = result.text.trim()

        if (jsonText.includes('```json')) {
            const match = jsonText.match(/```json\s*([\s\S]*?)\s*```/)
            if (match) {
                jsonText = match[1].trim()
            }
        } else if (jsonText.includes('```')) {
            const match = jsonText.match(/```\s*([\s\S]*?)\s*```/)
            if (match) {
                jsonText = match[1].trim()
            }
        }

        const jsonMatch = jsonText.match(/\[[\s\S]*?\]/)
        if (jsonMatch) {
            jsonText = jsonMatch[0]
        }

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
        console.error("Raw response:", result.text)
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

    const generatedText = response.text || ""
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

    let lyrics = response.text.trim()
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
        const memeText = JSON.parse(response.text)
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

    const result = await aiTextGenerator.generateText({
        prompt,
        temperature: 0.9,
        maxTokens: 4000,
    })

    if (!result.success || !result.text) {
        return {
            success: false,
            error: result.error || "Something went wrong. Please try again later.",
            statusCode: 500
        }
    }

    const response = result.text
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

    if (!result.success || !result.text) {
        return {
            success: false,
            error: result.error || "Failed to generate channel names. Please try again.",
            statusCode: 500
        }
    }

    try {
        let jsonText = result.text.trim()

        // Clean up markdown code blocks if present
        if (jsonText.startsWith('```json')) {
            jsonText = jsonText.replace(/^```json\s*/, '').replace(/\s*```$/, '')
        } else if (jsonText.startsWith('```')) {
            jsonText = jsonText.replace(/^```\s*/, '').replace(/\s*```$/, '')
        }

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
        console.log("Raw response:", result.text)

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

    if (!result.success || !result.text) {
        return {
            success: false,
            error: result.error || "Failed to generate agent skill. Please try again.",
            statusCode: 500
        }
    }

    let skillContent = result.text.trim()

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
        data: { paraphrasedText: result.text.trim() },
        statusCode: 200,
    }
}
