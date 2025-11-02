import { NextResponse } from "next/server"
import { geminiAPI } from "@/lib/gemini-api"

export async function POST(req: Request) {
  try {
    const { theme, genre, mood, duration, language } = await req.json()

    // Validate required fields
    if (!theme || theme.trim().length === 0) {
      return NextResponse.json(
        { error: "Song theme is required" },
        { status: 400 }
      )
    }

    // Default to English if no language specified
    const selectedLanguage = language || "english"

    // Calculate approximate structure based on duration
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
    
    // Get language-specific instructions
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
        hebrew: "כתוב את המילים בעברית. השתמש בשפה עברית טבעית ובביטויים אידיומטיים. All lyrics must be in Hebrew language.",
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
    
    // Create a production-level prompt for Gemini
    const prompt = `You are a professional songwriter and lyricist with expertise in multiple languages. Generate original, creative, and emotionally resonant song lyrics based on the following specifications:

**LANGUAGE REQUIREMENT (MOST IMPORTANT):**
${languageInstructions}
CRITICAL: The ENTIRE song lyrics MUST be written in ${selectedLanguage.toUpperCase()}. Do not mix languages. Every word, every line, every section must be in ${selectedLanguage}.

**SONG SPECIFICATIONS:**
- Theme/Topic: "${theme}"
- Genre: ${genre || "General/Mixed"}
- Mood/Emotion: ${mood || "Balanced"}
- Approximate Duration: ${duration ? `${duration} minutes` : "Standard song length (3-4 minutes)"}
- Song Structure: ${structure}

**WRITING GUIDELINES:**
1. Create original, unique lyrics that tell a story or convey deep emotions
2. Use vivid imagery, metaphors, and sensory details
3. Maintain consistent rhyme scheme appropriate for the ${genre || "chosen"} genre
4. Ensure lyrics flow naturally when sung
5. Make the chorus catchy, memorable, and repetitive
6. Build emotional progression throughout the song
7. Use genre-appropriate language, vocabulary, and themes
8. Include proper verse, chorus, and bridge labels
9. Make each section distinct yet cohesive with the overall song

**FORMAT REQUIREMENTS:**
- Clearly label each section: [Verse 1], [Chorus], [Verse 2], [Bridge], etc.
- Use proper line breaks and spacing for readability
- Make the chorus stand out with memorable hooks
- Ensure the bridge provides contrast and emotional depth
- End with a strong outro or final chorus

**GENRE-SPECIFIC NOTES:**
${genre === "hip-hop" || genre === "rap" ? "- Focus on rhythmic flow, internal rhymes, and wordplay\n- Use contemporary slang and cultural references\n- Create strong bars with clever punchlines" : ""}
${genre === "country" ? "- Use storytelling elements and rural imagery\n- Include relatable, down-to-earth language\n- Focus on personal experiences and emotions" : ""}
${genre === "pop" ? "- Keep lyrics simple, catchy, and universally relatable\n- Focus on memorable hooks and repetition\n- Use modern, contemporary language" : ""}
${genre === "rock" ? "- Use powerful, emotive language\n- Include themes of rebellion, freedom, or intensity\n- Create strong, anthemic choruses" : ""}
${genre === "R&B" || genre === "soul" ? "- Focus on love, relationships, and emotions\n- Use smooth, flowing language\n- Include sensual and romantic imagery" : ""}

Generate the complete song lyrics now. Make it professional, original, and ready to be set to music.`

    // Call Gemini API
    const response = await geminiAPI.generateText({
      prompt,
      maxTokens: 2500,
      temperature: 0.85, // Higher temperature for more creativity
      model: "gemini-2.0-flash-lite"
    })

    if (!response.success) {
      console.error("Gemini API Error:", response.error)
      // Return user-friendly error (already sanitized by gemini-api.ts)
      return NextResponse.json(
        { error: response.error || "Something went wrong. Please try again later." },
        { status: 500 }
      )
    }

    // Clean up the response
    let lyrics = response.text.trim()
    
    // Remove markdown code blocks if present
    lyrics = lyrics.replace(/```[\w]*\n?/g, "")
    lyrics = lyrics.replace(/```/g, "")
    
    return NextResponse.json({ 
      lyrics,
      success: true,
      metadata: {
        theme,
        genre: genre || "General",
        mood: mood || "Balanced",
        duration: duration || "Standard",
        language: selectedLanguage,
        structure
      }
    })

  } catch (error) {
    console.error("Error generating lyrics:", error)
    // Always return generic error messages to users
    // Never expose internal error details
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again later.",
        success: false
      },
      { status: 500 }
    )
  }
}
