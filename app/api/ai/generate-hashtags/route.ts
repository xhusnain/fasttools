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

    // Using Hugging Face Inference API with a better model for hashtag generation
    const model = "microsoft/DialoGPT-large" // Better model for hashtag generation
    const apiUrl = `https://api-inference.huggingface.co/models/${model}`
    
    // Enhanced prompt for better hashtag generation
    const platformContext = {
      instagram: "Instagram post about",
      twitter: "Twitter post about", 
      facebook: "Facebook post about",
      linkedin: "LinkedIn professional post about",
      youtube: "YouTube video about",
      tiktok: "TikTok video about"
    }
    
    const prompt = `You are a social media expert. Generate 15-20 relevant, trending hashtags for a ${platformContext[platform as keyof typeof platformContext] || "social media post about"}: "${text}". 

Requirements:
- Generate hashtags that are relevant to the content
- Include mix of popular and niche hashtags
- Use proper hashtag format with # symbol
- Return ONLY hashtags separated by spaces
- No explanations or additional text
- Focus on ${platform}-specific trending hashtags

Example format: #hashtag1 #hashtag2 #hashtag3`
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGINGFACE_API_TOKEN || "***REMOVED***"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 100,
          temperature: 0.7,
          do_sample: true,
        },
      }),
    })

    if (!response.ok) {
      // Fallback to a simple hashtag generation if API fails
      const fallbackHashtags = generateFallbackHashtags(text, platform)
      return NextResponse.json({
        hashtags: fallbackHashtags,
        source: "fallback"
      })
    }

    const data = await response.json()
    
    // Extract hashtags from the response
    let generatedText = ""
    if (Array.isArray(data) && data.length > 0) {
      generatedText = data[0].generated_text || ""
    } else if (data.generated_text) {
      generatedText = data.generated_text
    }

    // Parse hashtags from the generated text
    const hashtags = extractHashtags(generatedText)
    
    // If no hashtags found, use fallback
    if (hashtags.length === 0) {
      const fallbackHashtags = generateFallbackHashtags(text, platform)
      return NextResponse.json({
        hashtags: fallbackHashtags,
        source: "fallback"
      })
    }

    return NextResponse.json({
      hashtags: hashtags,
      source: "huggingface"
    })

  } catch (error) {
    console.error("Error generating hashtags:", error)
    
    // Fallback hashtag generation
    const { text, platform = "instagram" } = await request.json()
    const fallbackHashtags = generateFallbackHashtags(text, platform)
    
    return NextResponse.json({
      hashtags: fallbackHashtags,
      source: "fallback"
    })
  }
}

function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[\w]+/g
  const matches = text.match(hashtagRegex) || []
  return [...new Set(matches)] // Remove duplicates
}

function generateFallbackHashtags(text: string, platform: string): string[] {
  const words = text.toLowerCase().split(/\s+/)
  const commonWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'])
  
  // Extract relevant keywords from content
  const relevantWords = words
    .filter(word => word.length > 2 && !commonWords.has(word))
    .slice(0, 8) // Limit to 8 hashtags from content
  
  const baseHashtags = relevantWords.map(word => `#${word}`)
  
  // Enhanced platform-specific hashtags based on content analysis
  const contentKeywords = text.toLowerCase()
  const isBusiness = contentKeywords.includes('business') || contentKeywords.includes('work') || contentKeywords.includes('professional')
  const isLifestyle = contentKeywords.includes('life') || contentKeywords.includes('lifestyle') || contentKeywords.includes('daily')
  const isTech = contentKeywords.includes('tech') || contentKeywords.includes('technology') || contentKeywords.includes('digital')
  const isFood = contentKeywords.includes('food') || contentKeywords.includes('cooking') || contentKeywords.includes('recipe')
  const isTravel = contentKeywords.includes('travel') || contentKeywords.includes('vacation') || contentKeywords.includes('trip')
  
  let platformHashtags: string[] = []
  
  switch (platform) {
    case 'instagram':
      platformHashtags = [
        '#instagood', '#photooftheday', '#love', '#beautiful', '#happy',
        ...(isBusiness ? ['#entrepreneur', '#business', '#success'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration'] : []),
        ...(isTech ? ['#technology', '#innovation', '#digital'] : []),
        ...(isFood ? ['#food', '#foodie', '#delicious'] : []),
        ...(isTravel ? ['#travel', '#wanderlust', '#adventure'] : [])
      ]
      break
    case 'twitter':
      platformHashtags = [
        '#twitter', '#tweet', '#social', '#news', '#trending',
        ...(isBusiness ? ['#business', '#entrepreneur', '#startup'] : []),
        ...(isTech ? ['#tech', '#innovation', '#AI'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#life'] : [])
      ]
      break
    case 'tiktok':
      platformHashtags = [
        '#tiktok', '#fyp', '#viral', '#trending', '#foryou',
        ...(isBusiness ? ['#entrepreneur', '#business', '#success'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration'] : []),
        ...(isTech ? ['#tech', '#innovation', '#digital'] : [])
      ]
      break
    case 'linkedin':
      platformHashtags = [
        '#linkedin', '#professional', '#career', '#business', '#networking',
        ...(isBusiness ? ['#entrepreneur', '#leadership', '#success'] : []),
        ...(isTech ? ['#technology', '#innovation', '#digital'] : []),
        ...(isLifestyle ? ['#motivation', '#inspiration', '#growth'] : [])
      ]
      break
    case 'youtube':
      platformHashtags = [
        '#youtube', '#video', '#content', '#creator', '#subscribe',
        ...(isBusiness ? ['#entrepreneur', '#business', '#success'] : []),
        ...(isTech ? ['#technology', '#innovation', '#tutorial'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration'] : [])
      ]
      break
    case 'facebook':
      platformHashtags = [
        '#facebook', '#social', '#community', '#friends', '#life',
        ...(isBusiness ? ['#business', '#entrepreneur', '#success'] : []),
        ...(isLifestyle ? ['#lifestyle', '#motivation', '#inspiration'] : [])
      ]
      break
    default:
      platformHashtags = ['#social', '#content', '#post', '#share', '#community']
  }
  
  // Combine and limit hashtags
  const allHashtags = [...baseHashtags, ...platformHashtags]
  return [...new Set(allHashtags)].slice(0, 20) // Remove duplicates and limit
}