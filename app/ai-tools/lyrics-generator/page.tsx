import type { Metadata } from "next"
import { AiLyricsGenerator } from "@/components/social-media/ai-lyrics-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `Best Free AI Lyrics Generator ${currentYear} | 40+ Languages`,
  description:
    `Generate song lyrics with AI in ${currentYear}! Free multilingual lyrics generator supporting 40+ languages. All genres, moods & durations. No sign up.`,
  path: "/ai-tools/lyrics-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Music & Entertainment",
  applicationName: "FastTools - AI Lyrics Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Lyrics Generator",
    "application-name": "AI Lyrics Generator - 40+ Languages",
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Musicians, Songwriters, Artists, Music Producers",
    "subject": "AI Song Lyrics Generation in Multiple Languages",
    "abstract": `Free AI-powered lyrics generator supporting 40+ languages including English, Spanish, Hindi, Urdu, Arabic, Chinese, Japanese, Korean and more. Generate original song lyrics for any genre, mood, and duration.`,
  },
}

export default function LyricsGeneratorPage() {
  const toolContent = {
    toolName: "AI Lyrics Generator",
    overview: `Generate creative and original song lyrics with AI in ${currentYear}! Perfect for songwriters, musicians, and music creators. No sign up required. Unlimited generations. 100% free forever. Our advanced AI lyrics generator supports song creation in over 40 languages, making it the most comprehensive multilingual lyrics generator available online.`,
    howToSteps: [
      "Enter your song theme, topic, or creative inspiration into the input field.",
      "Select your preferred music genre (pop, rock, hip-hop, country, R&B, etc.) to match your style.",
      "Choose the mood or emotion you want to convey (happy, sad, energetic, romantic) for the right tone.",
      "Specify the song structure (verse, chorus, bridge, pre-chorus) to get a complete composition.",
      "Click 'Generate Lyrics' to get AI-powered suggestions instantly.",
      "Review multiple options, select your favorite, and customize the lyrics to match your unique vision."
    ],
    features: [
      "Multilingual Support: Generate lyrics in 40+ languages including English, Spanish, Hindi, Urdu, Arabic, Chinese, Japanese, and Korean.",
      "Genre Versatility: Support for all major genres like Pop, Rap, Rock, Country, R&B, Jazz, Folk, Electronic, and more.",
      "Mood Customization: Choose from various moods such as Happy, Sad, Energetic, Melancholic, Romantic, and Intense.",
      "Song Structure: Create complete songs with verses, choruses, bridges, pre-choruses, and outros.",
      "Rhyme Optimization: AI-optimized rhyme schemes (AABB, ABAB, ABCB) for natural flow and musicality.",
      "100% Original: Every lyric generated is unique and copyright-free for commercial use."
    ],
    aboutTool: `
      ### AI-Powered Lyrics Generation Features
      Generate lyrics for pop, rock, hip-hop, rap, country, R&B, jazz, folk, electronic, blues, and more. Our AI understands the unique characteristics and conventions of each musical style. Create lyrics based on specific themes (love, heartbreak, celebration, struggle) and moods (happy, sad, energetic, mellow). Perfect for expressing any emotion through music.

      ### Why Choose Our AI Lyrics Generator?
      Creating compelling song lyrics can be one of the most challenging aspects of music composition. Writer's block, repetitive themes, and finding the right words to express emotions are common struggles for songwriters. Our AI lyrics generator helps you overcome these challenges by providing instant creative inspiration, exploring new lyrical directions, and generating original content that resonates with your audience. Whether you're a professional songwriter, aspiring musician, recording artist, or creative hobbyist, our tool provides the structure, inspiration, and quality needed to create memorable songs that connect with listeners.

      ### Songwriting Tips and Best Practices
      To create compelling song lyrics that connect emotionally with your audience and stand the test of time, consider these proven songwriting techniques:
      - **Start with a strong hook:** Create a memorable opening line or phrase that captures attention immediately.
      - **Use vivid imagery:** Incorporate sensory details (sight, sound, touch, taste, smell) to paint pictures with words.
      - **Show, don't tell:** Use specific examples and stories rather than abstract statements.
      - **Create emotional resonance:** Draw from personal experiences to add authenticity and depth.
      - **Maintain consistent rhyme schemes:** Establish a pattern (AABB, ABAB, ABCB) and stick with it for cohesion.

      ### Multilingual Song Lyrics Generator
      Our advanced AI lyrics generator supports song creation in over 40 languages, making it the most comprehensive multilingual lyrics generator available online. Whether you need an **English song generator**, **Spanish lyrics generator**, **Hindi song generator**, or lyrics in any other language, our AI delivers authentic, culturally-appropriate content that resonates with native speakers worldwide.
    `,
    faqs: [
      {
        question: "Is the AI lyrics generator free to use?",
        answer: "Yes, our AI lyrics generator is completely free to use with no registration, subscription, or hidden fees required. You can generate unlimited lyrics for your songs without any cost. Whether you're creating one song or an entire album, there are no limits on usage."
      },
      {
        question: "Can I use the generated lyrics commercially?",
        answer: "Absolutely! All lyrics generated by our AI are 100% original and free from copyright restrictions. You can use them in your commercial music projects, albums, singles, performances, or any other professional application without licensing fees or attribution requirements. The lyrics become yours to use as you see fit."
      },
      {
        question: "How many languages can the AI write lyrics in?",
        answer: "Our AI supports 40+ languages including English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, Hindi, Urdu, Punjabi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Turkish, Vietnamese, Indonesian, Thai, Tagalog, Malay, Persian, Hebrew, Dutch, Polish, Swedish, Norwegian, Danish, Finnish, Greek, Czech, Hungarian, Romanian, Ukrainian, and Swahili. Each language receives culturally-appropriate, native-quality lyrics."
      },
      {
        question: "Can the AI generate lyrics in Hindi, Urdu, or other Indian languages?",
        answer: "Yes! Our AI supports all major Indian languages including Hindi, Urdu, Punjabi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, and Malayalam. The AI understands the cultural context, poetic traditions, and musical styles of each language. For Hindi and Urdu, it can create lyrics for Bollywood songs, ghazals, qawwali, and contemporary Indian pop with authentic expressions and proper language structure."
      },
      {
        question: "What music genres does the AI support?",
        answer: "Our AI supports all major music genres including pop, rock, hip-hop, rap, country, R&B, jazz, folk, electronic, blues, and many more specialized styles. You can specify your preferred genre for tailored lyrics."
      },
      {
        question: "How original are the AI-generated lyrics?",
        answer: "Our AI creates completely original lyrics based on your input. Each generation produces unique content using advanced language models trained on diverse musical styles, ensuring no plagiarism or copyright issues."
      },
      {
        question: "Can I customize the generated lyrics?",
        answer: "Absolutely! The AI-generated lyrics serve as a creative starting point. You can edit, modify, and personalize them to match your unique style, voice, and artistic vision."
      }
    ],
    relatedTools: [
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "Pet Name Generator", href: "/ai-tools/pet-names" },

      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" }
    ],
    useCases: [
      "Songwriters overcoming writer's block",
      "Musicians exploring new genres and styles",
      "Content creators needing original background music lyrics",
      "Language learners practicing songwriting in different languages",
      "Producers looking for vocal hooks and toplines",
      "Poets seeking inspiration for rhythmic writing"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free AI Song Lyrics Generator - Create Original Lyrics for Any Genre",
        description: "Generate creative and original song lyrics with AI in 2025! Perfect for songwriters, musicians, and music creators. No sign up required. Unlimited generations. 100% free forever.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiLyricsGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `Best Free AI Lyrics Generator ${currentYear} | 40+ Languages`,
        description: `Generate song lyrics with AI in ${currentYear}! Free multilingual lyrics generator supporting 40+ languages. All genres, moods & durations. No sign up.`,
        path: "/ai-tools/lyrics-generator"
      }}
    />
  )
}
