import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { text, platform = "instagram" } = await request.json()

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const geminiApiKey = process.env.GEMINI_API_KEY
    if (!geminiApiKey) {
      throw new Error("Gemini API key not found")
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`

    const platformContext = {
      instagram: "Instagram post",
      twitter: "Twitter post",
      facebook: "Facebook post",
      linkedin: "LinkedIn professional post",
      youtube: "YouTube video",
      tiktok: "TikTok video"
    }

    const prompt = `You are a social media expert specializing in viral hashtag strategies. Generate 15-20 highly relevant, trending hashtags for a ${platformContext[platform as keyof typeof platformContext] || "social media post"} with this content: "${text}"

CRITICAL REQUIREMENTS:
- Analyze the content deeply to understand the topic, mood, and target audience
- Generate hashtags that are CURRENTLY TRENDING and relevant to the content
- Mix popular hashtags (1M+ posts) with niche hashtags (10K-100K posts) for optimal reach
- Include platform-specific trending hashtags for ${platform}
- Use proper hashtag format with # symbol
- Return ONLY hashtags separated by spaces
- No explanations, descriptions, or additional text
- Focus on hashtags that will maximize engagement and reach

For dog content specifically, include trending pet hashtags like #dogsofinstagram #puppylove #doglife #petsofinstagram #doglovers #cutedogs #dogstagram #puppies #dogphotography #petlife #furbaby #dogmom #dogdad #rescuedog #dogtraining #dogcare #pets #animals #love #happiness

Example format: #hashtag1 #hashtag2 #hashtag3 #hashtag4`

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        }
      }),
    })

    if (!response.ok) {
      console.error("Gemini API error:", response.status, response.statusText)

      const fallbackHashtags = generateEnhancedFallbackHashtags(text, platform)
      return NextResponse.json({
        hashtags: fallbackHashtags,
        source: "fallback"
      })
    }

    const data = await response.json()

    let generatedText = ""
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      generatedText = data.candidates[0].content.parts[0].text || ""
    }

    const hashtags = extractHashtags(generatedText)

    if (hashtags.length === 0) {
      const fallbackHashtags = generateEnhancedFallbackHashtags(text, platform)
      return NextResponse.json({
        hashtags: fallbackHashtags,
        source: "fallback"
      })
    }

    return NextResponse.json({
      hashtags: hashtags,
      source: "gemini"
    })

  } catch (error) {
    console.error("Error generating hashtags:", error)

    const { text, platform = "instagram" } = await request.json()
    const fallbackHashtags = generateEnhancedFallbackHashtags(text, platform)

    return NextResponse.json({
      hashtags: fallbackHashtags,
      source: "fallback"
    })
  }
}

function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[\w]+/g
  const matches = text.match(hashtagRegex) || []
  return [...new Set(matches)]
}

function generateEnhancedFallbackHashtags(text: string, platform: string): string[] {
  const words = text.toLowerCase().split(/\s+/)
  const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'])

  const relevantWords = words
    .filter(word => word.length > 2 && !commonWords.has(word))
    .slice(0, 6)

  const baseHashtags = relevantWords.map(word => `#${word}`)

  const contentKeywords = text.toLowerCase()

  const isDogContent = contentKeywords.includes('dog') || contentKeywords.includes('dogs') || contentKeywords.includes('puppy') || contentKeywords.includes('puppies') || contentKeywords.includes('pet') || contentKeywords.includes('pets') || contentKeywords.includes('furbaby') || contentKeywords.includes('furbabies')

  const isBusiness = contentKeywords.includes('business') || contentKeywords.includes('work') || contentKeywords.includes('professional') || contentKeywords.includes('entrepreneur')
  const isLifestyle = contentKeywords.includes('life') || contentKeywords.includes('lifestyle') || contentKeywords.includes('daily') || contentKeywords.includes('motivation')
  const isTech = contentKeywords.includes('tech') || contentKeywords.includes('technology') || contentKeywords.includes('digital') || contentKeywords.includes('ai')
  const isFood = contentKeywords.includes('food') || contentKeywords.includes('cooking') || contentKeywords.includes('recipe') || contentKeywords.includes('meal')
  const isTravel = contentKeywords.includes('travel') || contentKeywords.includes('vacation') || contentKeywords.includes('trip') || contentKeywords.includes('adventure')
  const isFashion = contentKeywords.includes('fashion') || contentKeywords.includes('style') || contentKeywords.includes('outfit') || contentKeywords.includes('clothes')
  const isFitness = contentKeywords.includes('fitness') || contentKeywords.includes('workout') || contentKeywords.includes('gym') || contentKeywords.includes('exercise')

  let platformHashtags: string[] = []

  switch (platform) {
    case 'instagram':
      if (isDogContent) {
        platformHashtags = [
          '#dogsofinstagram', '#puppylove', '#doglife', '#petsofinstagram', '#doglovers',
          '#cutedogs', '#dogstagram', '#puppies', '#dogphotography', '#petlife',
          '#furbaby', '#dogmom', '#dogdad', '#rescuedog', '#dogtraining', '#dogcare',
          '#pets', '#animals', '#love', '#happiness', '#cute', '#adorable', '#instagood',
          '#photooftheday', '#dogsofinsta', '#puppy', '#doggo', '#doggie', '#petlove'
        ]
      } else {
        platformHashtags = [
          '#instagood', '#photooftheday', '#love', '#beautiful', '#happy', '#life',
          '#motivation', '#inspiration', '#lifestyle', '#fashion', '#style', '#ootd',
          ...(isBusiness ? ['#entrepreneur', '#business', '#success', '#motivation', '#goals'] : []),
          ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration', '#daily', '#life'] : []),
          ...(isTech ? ['#technology', '#innovation', '#digital', '#ai', '#tech'] : []),
          ...(isFood ? ['#food', '#foodie', '#delicious', '#cooking', '#recipe'] : []),
          ...(isTravel ? ['#travel', '#wanderlust', '#adventure', '#explore', '#vacation'] : []),
          ...(isFashion ? ['#fashion', '#style', '#ootd', '#outfit', '#trendy'] : []),
          ...(isFitness ? ['#fitness', '#workout', '#gym', '#exercise', '#health'] : [])
        ]
      }
      break
    case 'twitter':
      platformHashtags = [
        '#twitter', '#tweet', '#social', '#news', '#trending',
        ...(isDogContent ? ['#dogs', '#pets', '#animals', '#cute', '#love'] : []),
        ...(isBusiness ? ['#business', '#entrepreneur', '#startup', '#leadership'] : []),
        ...(isTech ? ['#tech', '#innovation', '#ai', '#digital'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#life', '#inspiration'] : [])
      ]
      break
    case 'tiktok':
      platformHashtags = [
        '#tiktok', '#fyp', '#viral', '#trending', '#foryou', '#foryoupage',
        ...(isDogContent ? ['#dogs', '#pets', '#cute', '#animals', '#dogsoftiktok'] : []),
        ...(isBusiness ? ['#entrepreneur', '#business', '#success', '#motivation'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration', '#life'] : []),
        ...(isTech ? ['#tech', '#innovation', '#digital', '#ai'] : [])
      ]
      break
    case 'linkedin':
      platformHashtags = [
        '#linkedin', '#professional', '#career', '#business', '#networking',
        ...(isDogContent ? ['#pets', '#animals', '#lifestyle', '#personal'] : []),
        ...(isBusiness ? ['#entrepreneur', '#leadership', '#success', '#business'] : []),
        ...(isTech ? ['#technology', '#innovation', '#digital', '#tech'] : []),
        ...(isLifestyle ? ['#motivation', '#inspiration', '#growth', '#development'] : [])
      ]
      break
    case 'youtube':
      platformHashtags = [
        '#youtube', '#video', '#content', '#creator', '#subscribe',
        ...(isDogContent ? ['#dogs', '#pets', '#animals', '#cute', '#dogvideos'] : []),
        ...(isBusiness ? ['#entrepreneur', '#business', '#success', '#motivation'] : []),
        ...(isTech ? ['#technology', '#innovation', '#tutorial', '#tech'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration', '#life'] : [])
      ]
      break
    case 'facebook':
      platformHashtags = [
        '#facebook', '#social', '#community', '#friends', '#life',
        ...(isDogContent ? ['#dogs', '#pets', '#animals', '#cute', '#love'] : []),
        ...(isBusiness ? ['#business', '#entrepreneur', '#success', '#motivation'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration', '#life'] : [])
      ]
      break
    default:
      platformHashtags = ['#social', '#content', '#post', '#share', '#community']
  }

  const allHashtags = [...baseHashtags, ...platformHashtags]
  return [...new Set(allHashtags)].slice(0, 20)
}