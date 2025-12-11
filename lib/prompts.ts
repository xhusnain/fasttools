export const PROMPTS = {
  socialMediaCaptions: (description: string, platform: string, count: number, guidelines: string) => `You are a professional social media caption generator. Generate ${count} creative, engaging captions for a ${platform} post.

Image Description: "${description}"

Platform Guidelines: ${guidelines}

Requirements:
- Each caption should be unique and creative
- Include relevant emojis where appropriate
- Make them engaging and shareable
- Consider the platform's character limits and audience
- Use trending language and hashtags when relevant

IMPORTANT: Return ONLY a valid JSON array of strings. Do not include any markdown formatting, code blocks, or additional text. Just the raw JSON array like this: ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"]`,

  socialMediaCaptionsFallback: (description: string, platform: string) => `Generate 5 engaging ${platform} captions for an image with this description: "${description}"

Make them creative, engaging, and suitable for ${platform}. Include relevant emojis where appropriate.
Return ONLY a JSON array of strings, like: ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"]`,

  generalContent: (task: string, context: string, requirements: string) => `You are an AI assistant helping with: ${task}

Context: ${context}

${requirements ? `Requirements: ${requirements}` : ""}

Please provide a helpful, accurate, and engaging response.`,

  hashtags: (text: string, platform: string, platformContext: string) => `You are a social media expert specializing in viral hashtag strategies. Generate 15-20 highly relevant, trending hashtags for a ${platformContext} with this content: "${text}"

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

Example format: #hashtag1 #hashtag2 #hashtag3 #hashtag4`,

  petNames: (contextString: string, gender: string, petType: string, color?: string, personality?: string, breed?: string, age?: string) => `You are an expert pet naming consultant with deep knowledge of names from various cultures, languages, and traditions. Generate 100 unique and perfect pet names based on the following pet characteristics:

${contextString}

IMPORTANT INSTRUCTIONS:
1. Generate EXACTLY 100 names total, distributed across 8 categories
2. Each name MUST include: name, meaning, and origin
3. Make names appropriate for the pet type and characteristics
4. Consider the pet's gender, color, personality, and other traits
5. Provide diverse names from various cultures and languages
6. Keep names pronounceable and memorable
7. Include both popular and unique options
8. Make meanings accurate and relevant

CATEGORY DISTRIBUTION (Generate approximately these amounts):
- Traditional Names: 15 names (classic, timeless names)
- Modern Names: 15 names (contemporary, trendy names)
- Unique Names: 15 names (rare, creative, one-of-a-kind)
- Nature Names: 15 names (inspired by nature, elements, plants, animals)
- Cultural Names: 15 names (from various cultures: Japanese, Greek, Latin, Celtic, etc.)
- Celebrity Names: 10 names (inspired by famous people, characters, pop culture)
- Food Names: 10 names (cute food-inspired names)
- Mythological Names: 15 names (from mythology, legends, folklore)

RESPONSE FORMAT (CRITICAL - Follow exactly):
Return ONLY a valid JSON object with this exact structure:
{
  "traditional": [
    {"name": "Max", "meaning": "Greatest", "origin": "Latin"},
    ...
  ],
  "modern": [
    {"name": "Luna", "meaning": "Moon", "origin": "Latin"},
    ...
  ],
  "unique": [...],
  "nature": [...],
  "cultural": [...],
  "celebrity": [...],
  "food": [...],
  "mythological": [...]
}

SPECIFIC GUIDELINES:
- For ${gender !== "any" ? gender : "unisex"} pets, prioritize gender-appropriate names
- For ${petType}s, consider breed-specific naming traditions
${color ? `- Incorporate the pet's ${color} coloring when relevant` : ""}
${personality ? `- Reflect the personality traits: ${personality}` : ""}
${breed ? `- Consider ${breed} breed characteristics` : ""}
${age !== "any" ? `- Consider that this is a ${age} pet` : ""}

QUALITY STANDARDS:
- Each meaning must be accurate and insightful
- Origins should be specific (not just "Various" or "Unknown")
- Names should be easy to pronounce in English
- Avoid names that sound like common commands (sit, stay, no)
- Include a mix of short (1-2 syllables) and longer names
- Ensure cultural sensitivity and authenticity

Generate the 100 names now as a valid JSON object:`,

  channelNames: (name: string) => `Act as a creative branding expert. Generate 100 unique and catchy YouTube channel name suggestions based on the input name: "${name}".
The goal is to provide a diverse range of options suitable for different niches.

Organize the suggestions into the following specific categories (at least 10-15 names per category):
1. Tech & Gaming (Modern, edgy, futuristic)
2. Lifestyle & Vlogs (Personal, friendly, inviting)
3. Educational & How-To (Professional, knowledgeable, trustworthy)
4. Entertainment & Comedy (Fun, catchy, memorable)
5. Business & Professional (Serious, authoritative, sleek)
6. Catchy & Short (Punchy, 1-2 words, easy to remember, good for branding)
7. Unique & Abstract (Creative, metaphoric, distinct)
8. Official & Brand (Variations with TV, Official, HQ, etc.)

Return the result STRICTLY as a JSON object with this exact structure:
{
  "Tech & Gaming": ["Name1", "Name2", ...],
  "Lifestyle & Vlogs": ["Name3", "Name4", ...],
  ...
}

Do NOT include any markdown formatting (like \`\`\`json). Return ONLY the raw valid JSON string.`,

  lyrics: (languageInstructions: string, selectedLanguage: string, theme: string, genre: string | undefined, mood: string | undefined, duration: number | undefined, structure: string) => `You are a professional songwriter and lyricist with expertise in multiple languages.Generate original, creative, and emotionally resonant song lyrics based on the following specifications:

** LANGUAGE REQUIREMENT(MOST IMPORTANT):**
  ${languageInstructions}
CRITICAL: The ENTIRE song lyrics MUST be written in ${selectedLanguage.toUpperCase()}. Do not mix languages.Every word, every line, every section must be in ${selectedLanguage}.

** SONG SPECIFICATIONS:**
  - Theme / Topic: "${theme}"
    - Genre: ${genre || "General/Mixed"}
- Mood / Emotion: ${mood || "Balanced"}
- Approximate Duration: ${duration ? `${duration} minutes` : "Standard song length (3-4 minutes)"}
- Song Structure: ${structure}

** WRITING GUIDELINES:**
  1. Create original, unique lyrics that tell a story or convey deep emotions
2. Use vivid imagery, metaphors, and sensory details
3. Maintain consistent rhyme scheme appropriate for the ${genre || "chosen"} genre
4. Ensure lyrics flow naturally when sung
5. Make the chorus catchy, memorable, and repetitive
6. Build emotional progression throughout the song
7. Use genre - appropriate language, vocabulary, and themes
8. Include proper verse, chorus, and bridge labels
9. Make each section distinct yet cohesive with the overall song

  ** FORMAT REQUIREMENTS:**
    - Clearly label each section: [Verse 1], [Chorus], [Verse 2], [Bridge], etc.
- Use proper line breaks and spacing for readability
  - Make the chorus stand out with memorable hooks
    - Ensure the bridge provides contrast and emotional depth
      - End with a strong outro or final chorus

        ** GENRE - SPECIFIC NOTES:**
          ${genre === "hip-hop" || genre === "rap" ? "- Focus on rhythmic flow, internal rhymes, and wordplay\n- Use contemporary slang and cultural references\n- Create strong bars with clever punchlines" : ""}
${genre === "country" ? "- Use storytelling elements and rural imagery\n- Include relatable, down-to-earth language\n- Focus on personal experiences and emotions" : ""}
${genre === "pop" ? "- Keep lyrics simple, catchy, and universally relatable\n- Focus on memorable hooks and repetition\n- Use modern, contemporary language" : ""}
${genre === "rock" ? "- Use powerful, emotive language\n- Include themes of rebellion, freedom, or intensity\n- Create strong, anthemic choruses" : ""}
${genre === "R&B" || genre === "soul" ? "- Focus on love, relationships, and emotions\n- Use smooth, flowing language\n- Include sensual and romantic imagery" : ""}

Generate the complete song lyrics now.Make it professional, original, and ready to be set to music.`
}
