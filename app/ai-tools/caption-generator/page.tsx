import type { Metadata } from "next"
import { AiCaptionGenerator } from "@/components/social-media/ai-caption-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Sparkles, Instagram, MessageSquare, TrendingUp, Target, Lightbulb, Zap, Globe, Brain, CheckCircle, Hash, Users } from "lucide-react"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `AI Caption Generator ${currentYear} | Free Instagram & TikTok Captions`,
  description:
    `Generate viral social media captions with AI ${currentYear}. Free caption generator for Instagram, TikTok, Facebook & more. No sign up.`,
  path: "/ai-tools/caption-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Social Media & Marketing",
  applicationName: "FastTools - AI Caption Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Caption Generator",
    "mobile-web-app-capable": "yes",
    "application-name": `AI Caption Generator ${currentYear} - All Platforms`,
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "color-scheme": "dark light",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Social Media Managers, Influencers, Content Creators, Marketers, Businesses",
    "subject": "AI Social Media Caption Generation for All Platforms",
    "abstract": `Free AI-powered caption generator for all social media platforms. Generate viral captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest. Perfect for influencers, marketers, and content creators.`,
  },
}

export default function CaptionGeneratorPage() {
  const toolContent = {
    toolName: "AI Caption Generator",
    overview: `Generate viral social media captions with AI in ${currentYear}. Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest instantly. Free AI-powered tool perfect for influencers, marketers, and content creators. No sign up required.`,
    howToSteps: [
      "Enter a detailed description of your image, video, or content idea. Be specific about the mood, theme, or message.",
      "Select your target platform (Instagram, TikTok, LinkedIn, etc.) to optimize the caption format and length.",
      "Choose your desired tone (Professional, Funny, Inspirational, etc.) to match your brand voice.",
      "Click 'Generate Captions' to instantly receive 5 unique, creative options tailored to your needs.",
      "Copy your favorite caption or use the 'Regenerate' button to get more variations."
    ],
    features: [
      "AI-Powered Generation: Advanced AI creates engaging, platform-specific captions using emotional triggers and trending topics.",
      "7 Platforms Support: Optimized for Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube.",
      "Viral Templates: Access trending caption formats and viral content templates for maximum engagement.",
      "Instant Results: Generate 5 unique captions in seconds with no waiting time or processing delays.",
      "Brand Voice: Customize captions to match your brand voice and maintain consistency across platforms.",
      "Free Forever: Completely free with no registration required, usage limits, or hidden costs."
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Complete Guide to AI Caption Generation for Social Media
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our free <strong>AI caption generator</strong> is the ultimate tool for content creators, influencers, marketers, and businesses looking to create engaging social media captions instantly. As a leading <strong>AI content generator</strong> and <strong>AI writing assistant</strong>, our platform helps you generate viral captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest without any sign-up requirements.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The <strong>AI caption generator</strong> serves as both an <strong>AI content creator</strong> and <strong>AI writing tool</strong>, designed specifically for social media copywriting and digital content creation. Unlike traditional caption writing tools that require manual brainstorming, our <strong>AI-powered social media caption generator</strong> analyzes your content description and generates multiple caption variations optimized for each platform's unique audience and character limits.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Instagram className="h-6 w-6 text-primary" />
            Platform-Specific Caption Optimization
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Each social media platform has unique requirements, audience expectations, and best practices. Our AI adapts captions to maximize engagement on each platform:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Platform</th>
                  <th className="p-3 text-left">Optimal Length</th>
                  <th className="p-3 text-left">Best Practices</th>
                  <th className="p-3 text-left">Hashtag Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">Instagram</td>
                  <td className="p-3">125-150 characters (first line), up to 2,200 total</td>
                  <td className="p-3">Hook in first line, use line breaks, include CTA</td>
                  <td className="p-3">5-10 relevant hashtags</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">TikTok</td>
                  <td className="p-3">100-150 characters</td>
                  <td className="p-3">Short, punchy, use trending sounds context</td>
                  <td className="p-3">3-5 trending hashtags</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Facebook</td>
                  <td className="p-3">40-80 characters (optimal), up to 63,206</td>
                  <td className="p-3">Question hooks, emotional triggers</td>
                  <td className="p-3">1-3 hashtags maximum</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">LinkedIn</td>
                  <td className="p-3">150-300 characters</td>
                  <td className="p-3">Professional, value-driven, industry insights</td>
                  <td className="p-3">3-5 industry hashtags</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Twitter/X</td>
                  <td className="p-3">Under 280 characters</td>
                  <td className="p-3">Concise, witty, include mentions</td>
                  <td className="p-3">1-2 hashtags</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Pinterest</td>
                  <td className="p-3">200-300 characters</td>
                  <td className="p-3">Keyword-rich, descriptive, SEO-focused</td>
                  <td className="p-3">5-10 niche hashtags</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">YouTube</td>
                  <td className="p-3">125-200 characters</td>
                  <td className="p-3">Compelling, include timestamps, CTA</td>
                  <td className="p-3">3-5 relevant hashtags</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            Types of Captions: When to Use Each Style
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Different content types require different caption styles. Our AI generator adapts to your needs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Hash className="h-4 w-4 text-blue-500" />
                Instagram Reels Captions
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                The <strong>AI caption generator for reels</strong> creates captions optimized for short-form video content. These captions are:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Short and punchy (under 150 characters)</li>
                <li>Include trending hooks and questions</li>
                <li>Optimized for discoverability</li>
                <li>Include relevant hashtags automatically</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500" />
                Instagram Stories Captions
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                The <strong>caption generator for stories</strong> produces concise, engaging text perfect for temporary content:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Very short (under 50 characters)</li>
                <li>Casual and conversational</li>
                <li>Include emojis for visual appeal</li>
                <li>Quick CTAs and engagement prompts</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-green-500" />
                Photo Captions
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                The <strong>photo caption generator</strong> mode helps you create compelling narratives for image-based posts:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Descriptive and storytelling</li>
                <li>Context about the image</li>
                <li>Emotional connection</li>
                <li>Platform-appropriate length</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                Viral Caption Templates
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Access <strong>trending caption formats</strong> and <strong>viral content templates</strong> for maximum engagement:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Question hooks ("Did you know...?")</li>
                <li>Storytelling formats</li>
                <li>List-based captions</li>
                <li>Behind-the-scenes narratives</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            For Influencers, Businesses, and Agencies
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Content creators and influencers particularly benefit from our <strong>AI caption generator for businesses</strong>, as it helps maintain consistent brand voice across all platforms while saving hours of writing time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">For Influencers</h4>
              <p className="text-sm text-muted-foreground">
                The <strong>AI caption generator for influencers</strong> enables them to focus on creating visual content while the AI handles caption ideation and drafting. Maintain consistent voice across all platforms.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">For Businesses</h4>
              <p className="text-sm text-muted-foreground">
                Create professional captions for product launches, marketing campaigns, and brand storytelling. The <strong>AI caption generator for businesses</strong> ensures brand consistency.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2">For Agencies</h4>
              <p className="text-sm text-muted-foreground">
                The <strong>AI caption generator for agencies</strong> provides scalable content creation that maintains quality across multiple client accounts. Generate captions in bulk while maintaining each brand's unique voice.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Hash className="h-6 w-6 text-primary" />
            Hashtag Strategy and Optimization
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The <strong>AI caption generator with hashtags</strong> automatically suggests relevant hashtags based on your content, helping increase discoverability across platforms. Here's how hashtag strategy varies by platform:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Instagram Hashtag Strategy</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use 5-10 hashtags mixing:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li><strong>Broad hashtags:</strong> #fashion, #travel (high competition, high reach)</li>
                <li><strong>Niche hashtags:</strong> #sustainablefashion, #solotravel (lower competition, targeted reach)</li>
                <li><strong>Branded hashtags:</strong> #YourBrandName (build community)</li>
                <li><strong>Location hashtags:</strong> #NYCFashion, #ParisTravel (local discovery)</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">TikTok Hashtag Strategy</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Focus on 3-5 trending hashtags:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Mix trending (#fyp, #viral) with niche (#booktok, #cooking)</li>
                <li>Use hashtags with 1M-10M views for best reach</li>
                <li>Include challenge hashtags when relevant</li>
                <li>Research trending sounds and their associated hashtags</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">LinkedIn Hashtag Strategy</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Professional hashtags (3-5 recommended):
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Industry-specific: #DigitalMarketing, #SaaS</li>
                <li>Professional: #Leadership, #Innovation</li>
                <li>Broad: #Business, #Technology</li>
                <li>Avoid over-hashtagging (looks unprofessional)</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Caption Writing Best Practices
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these proven strategies to create captions that drive engagement:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Hook in the First Line</h4>
                <p className="text-sm text-muted-foreground">Instagram shows only the first 125 characters. Make them count with a question, bold statement, or intriguing hook that makes users want to read more.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Tell a Story</h4>
                <p className="text-sm text-muted-foreground">People connect with stories. Share behind-the-scenes moments, personal experiences, or customer success stories to build emotional connection.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Include a Clear CTA</h4>
                <p className="text-sm text-muted-foreground">Tell users what to do: "Double tap if you agree," "Comment your thoughts," "Save this post," or "Visit the link in bio." Clear CTAs increase engagement.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Use Line Breaks</h4>
                <p className="text-sm text-muted-foreground">Break up long captions with line breaks for better readability. Instagram allows up to 2,200 characters—use them strategically with proper formatting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Match Tone to Platform</h4>
                <p className="text-sm text-muted-foreground">LinkedIn = professional, TikTok = casual and fun, Instagram = polished but authentic. Our AI automatically adapts tone based on your platform selection.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Real-World Examples: Caption Types That Convert
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 1: Question Hook (Instagram)</h4>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-card p-2 rounded">
                "Ever wonder why some posts get thousands of likes while others barely get noticed? 👀<br/><br/>
                The secret isn't just the photo—it's the caption. A great caption tells a story, asks a question, and invites engagement.<br/><br/>
                What's your favorite type of caption? Drop it below! 👇<br/><br/>
                #SocialMediaTips #ContentCreator #InstagramGrowth"
              </p>
              <p className="text-xs text-muted-foreground">Why it works: Question hook, storytelling, clear CTA, relevant hashtags</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 2: Behind-the-Scenes (LinkedIn)</h4>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-card p-2 rounded">
                "Three months ago, we launched with zero customers. Today, we're celebrating 1,000 active users.<br/><br/>
                The journey wasn't easy—countless late nights, rejected pitches, and moments of doubt. But here's what I learned: persistence beats perfection every time.<br/><br/>
                What's your biggest business milestone this year?<br/><br/>
                #Entrepreneurship #StartupLife #BusinessGrowth"
              </p>
              <p className="text-xs text-muted-foreground">Why it works: Personal story, vulnerability, professional tone, industry hashtags</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Example 3: Trendy & Fun (TikTok)</h4>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-card p-2 rounded">
                "POV: You finally found the perfect caption after 30 minutes of staring at a blank screen 😅<br/><br/>
                Save this for later! 📌<br/><br/>
                #CaptionIdeas #ContentCreator #TikTokTips #FYP"
              </p>
              <p className="text-xs text-muted-foreground">Why it works: Relatable, short, includes trending hashtags, clear CTA</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            How AI Caption Generation Works
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our AI analyzes your content description using advanced natural language processing to understand context, tone, and platform requirements. The system then generates multiple caption variations, each optimized for engagement and discoverability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Context Analysis
              </h4>
              <p className="text-sm text-muted-foreground">
                The AI analyzes your description to understand the content type, mood, target audience, and key messages. This ensures captions are relevant and on-brand.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-500" />
                Platform Optimization
              </h4>
              <p className="text-sm text-muted-foreground">
                Each platform has unique requirements. The AI adapts caption length, tone, hashtag count, and style to match platform best practices automatically.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Engagement Optimization
              </h4>
              <p className="text-sm text-muted-foreground">
                Captions include proven engagement triggers: questions, emotional hooks, CTAs, and storytelling elements that encourage likes, comments, and shares.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Hash className="h-4 w-4 text-green-500" />
                Hashtag Intelligence
              </h4>
              <p className="text-sm text-muted-foreground">
                The AI suggests relevant hashtags based on content analysis, trending topics, and platform-specific hashtag strategies for maximum discoverability.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Advanced Features & Optimization
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Beyond basic caption generation, our tool includes advanced features for professional content creators:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Brand Voice Customization</h4>
              <p className="text-sm text-muted-foreground">
                Customize captions to match your brand voice—professional, casual, witty, inspirational, or educational. The AI learns your preferences and maintains consistency across all generated captions.
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Multiple Variations</h4>
              <p className="text-sm text-muted-foreground">
                Generate 5 unique caption variations per request, each with different approaches: question-based, story-driven, list format, or direct CTA. Choose the style that best fits your content.
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold mb-2">Emoji Integration</h4>
              <p className="text-sm text-muted-foreground">
                The AI automatically suggests relevant emojis based on your content and tone. Emojis increase engagement by 25% on average, making your posts more visually appealing and relatable.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            Pro Tips for Maximum Engagement
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Test Different Hooks</strong>
                <p className="text-sm text-muted-foreground">Generate multiple captions and A/B test different opening lines to see what resonates with your audience. Questions often outperform statements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Post at Optimal Times</strong>
                <p className="text-sm text-muted-foreground">Even great captions need timing. Post when your audience is most active. Use platform analytics to find your best posting times.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Engage with Comments</strong>
                <p className="text-sm text-muted-foreground">A great caption starts the conversation, but responding to comments keeps it going. Engagement signals boost your post's reach.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block">Use Analytics to Refine</strong>
                <p className="text-sm text-muted-foreground">Track which captions perform best. Look for patterns: do questions get more comments? Do stories get more saves? Use insights to improve future captions.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),
    faqs: [
      {
        question: "Is the AI caption generator free to use?",
        answer: "Yes, our AI caption generator is completely free to use with no registration required. You can generate unlimited captions for your social media posts across all 7 supported platforms."
      },
      {
        question: "What social media platforms does the AI caption generator support?",
        answer: "Our AI caption generator supports 7 major social media platforms: Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Pinterest, and YouTube. Each platform gets optimized captions tailored to their specific audience and character limits."
      },
      {
        question: "Can I use the generated captions commercially?",
        answer: "Yes, all captions generated by our AI are original and free from copyright restrictions. You can use them in your commercial social media marketing, business posts, and content creation without any limitations."
      },
      {
        question: "How do I make my captions more engaging?",
        answer: "Our AI automatically creates engaging captions using emotional triggers, relevant hashtags, calls-to-action, storytelling elements, and platform-specific best practices. You can also customize the generated captions to match your brand voice."
      },
      {
        question: "How many captions can I generate at once?",
        answer: "You can generate 5 unique, creative captions per request. Each caption is optimized for your chosen platform and includes different styles and approaches to give you variety in your content."
      },
      {
        question: "Do AI-generated captions sound robotic or can they be human-like?",
        answer: "Modern AI caption generators are designed to produce human-like text that sounds natural and engaging. They utilize advanced language models to generate captions that are casual, witty, inspirational, or professional depending on your needs. However, we recommend reviewing and editing the AI-generated captions to ensure they align perfectly with your unique voice and brand personality."
      },
      {
        question: "Can AI caption generators add hashtags and emojis automatically?",
        answer: "Yes! Our AI caption generator can automatically suggest relevant hashtags and emojis based on your content and context. This feature helps enhance engagement by making your posts more discoverable and relatable. The AI analyzes your content to recommend trending hashtags and appropriate emojis that match your post's tone and message."
      },
      {
        question: "How accurate and relevant are AI-generated captions?",
        answer: "The accuracy and relevance of AI-generated captions depend on the quality of the AI model and the specificity of your input. Our advanced AI system produces high-quality, contextually relevant captions, but we always recommend reviewing and customizing them to ensure they meet your standards and resonate perfectly with your target audience."
      },
      {
        question: "What makes a caption go viral on social media?",
        answer: "Viral captions typically include: (1) A strong hook in the first line, (2) Emotional triggers (surprise, curiosity, relatability), (3) A clear call-to-action, (4) Relevant trending hashtags, (5) Storytelling elements, and (6) Timing with current trends. Our AI incorporates these elements automatically."
      },
      {
        question: "How do I write captions that increase engagement?",
        answer: "High-engagement captions use: questions to prompt comments, storytelling to create connection, clear CTAs (like 'double tap' or 'comment below'), line breaks for readability, and relevant hashtags. Our AI generator includes all these elements based on platform best practices."
      },
      {
        question: "Can I customize the AI-generated captions?",
        answer: "Absolutely! While our AI generates high-quality captions, you should always review and customize them to match your unique voice, add personal touches, include specific details, or adjust the tone. The AI provides a strong foundation that you can refine."
      },
      {
        question: "What's the ideal caption length for Instagram?",
        answer: "Instagram captions can be up to 2,200 characters, but the first 125 characters are most important (shown in feed). Optimal length is 125-150 characters for the hook, with full captions ranging 200-500 characters. Longer captions (1,000+) work for storytelling posts."
      },
      {
        question: "How do I write captions for different content types?",
        answer: "Product posts: Focus on benefits and features. Behind-the-scenes: Share personal stories. Educational: Provide value and insights. Promotional: Create urgency with CTAs. Our AI adapts to your content description and generates appropriate captions for each type."
      },
      {
        question: "Should I use emojis in my captions?",
        answer: "Yes! Emojis increase engagement by 25% on average. Use 1-3 emojis per caption for best results. Our AI automatically suggests relevant emojis based on your content. Avoid overusing emojis (more than 5-7 can look unprofessional)."
      },
      {
        question: "How do I write captions for Instagram Reels?",
        answer: "Reels captions should be: (1) Short and punchy (under 150 characters), (2) Include trending hooks, (3) Use 3-5 trending hashtags, (4) Add a clear CTA, (5) Match the video's energy. Our AI caption generator for reels optimizes all these elements automatically."
      },
      {
        question: "What's the difference between Instagram post and story captions?",
        answer: "Post captions can be longer (up to 2,200 characters) and include hashtags. Story captions should be very short (under 50 characters), casual, and include emojis. Our tool generates both types—select 'Stories' as your platform for story-optimized captions."
      },
      {
        question: "How do I write professional captions for LinkedIn?",
        answer: "LinkedIn captions should be: (1) Professional but authentic, (2) Value-driven with insights, (3) 150-300 characters optimal, (4) Include industry hashtags (3-5), (5) Ask thought-provoking questions, (6) Share lessons learned. Our AI adapts tone for LinkedIn automatically."
      },
      {
        question: "Can I use the same caption across all platforms?",
        answer: "Not recommended. Each platform has different audiences, character limits, and best practices. Instagram allows longer captions, Twitter requires brevity, LinkedIn needs professionalism. Our AI generates platform-specific captions—use different versions for each platform."
      },
      {
        question: "How do hashtags affect caption performance?",
        answer: "Hashtags increase discoverability by 12.6% on average. Use 5-10 on Instagram, 3-5 on TikTok, 1-2 on Twitter, and 3-5 on LinkedIn. Mix broad and niche hashtags. Our AI suggests relevant hashtags based on your content and platform."
      },
      {
        question: "What tone should I use in my captions?",
        answer: "Tone depends on your brand and platform: Instagram = polished but authentic, TikTok = casual and fun, LinkedIn = professional, Twitter = witty and concise. Our AI lets you select tone (Professional, Funny, Inspirational, etc.) and adapts accordingly."
      },
      {
        question: "How do I write captions that drive sales?",
        answer: "Sales-driving captions include: (1) Problem-solution framing, (2) Social proof (testimonials, reviews), (3) Urgency (limited time, limited stock), (4) Clear value proposition, (5) Strong CTA with link. Our AI incorporates these elements when you describe promotional content."
      },
      {
        question: "What's the best way to end a caption?",
        answer: "End with a clear CTA: 'Comment below,' 'Save this post,' 'Share with someone who needs this,' 'Link in bio,' or 'Double tap if you agree.' Questions also work well. Our AI automatically includes appropriate CTAs based on your platform and content type."
      },
      {
        question: "How do I write captions for video content?",
        answer: "Video captions should: (1) Hook viewers in first line, (2) Describe what happens in the video, (3) Include timestamps for long videos, (4) Add context not visible in video, (5) Include CTA to watch/share. Our AI generates video-optimized captions when you select video content type."
      },
      {
        question: "Can I generate captions in different languages?",
        answer: "Currently, our AI caption generator supports English primarily. For other languages, you can generate English captions and translate them, or describe your content in the target language—the AI will attempt to generate captions in that language."
      },
      {
        question: "How do I maintain brand voice consistency?",
        answer: "Consistent brand voice comes from: (1) Using the same tone across all captions, (2) Recurring phrases or taglines, (3) Consistent emoji usage, (4) Similar CTA styles. Our AI learns from your tone selection and maintains consistency. Review and edit to perfect your unique voice."
      },
      {
        question: "What's the best time to post with AI-generated captions?",
        answer: "Posting time matters more than caption quality for initial reach. Best times: Instagram (11 AM-1 PM, 7-9 PM), TikTok (6-10 PM), LinkedIn (8-10 AM, 12-1 PM), Facebook (1-3 PM). Use platform analytics to find your audience's active hours."
      },
      {
        question: "How do I write captions for carousel posts?",
        answer: "Carousel captions should: (1) Explain what's in the carousel, (2) Encourage swiping ('Swipe to see more'), (3) Include value in each slide description, (4) End with CTA. Our AI generates carousel-optimized captions when you describe multi-image content."
      },
      {
        question: "Can I save and reuse AI-generated captions?",
        answer: "Yes! Copy any generated caption and save it in your notes app, content calendar, or caption library. You can also use similar captions as templates—modify them for different posts while maintaining your brand voice. Our tool generates unlimited captions, so save your favorites."
      },
      {
        question: "How do I write captions that get more comments?",
        answer: "Comments-driving captions use: (1) Questions (especially 'this or that' style), (2) Controversial but respectful statements, (3) Personal stories that invite sharing, (4) 'Tag someone who...' prompts, (5) Fill-in-the-blank formats. Our AI includes these engagement triggers automatically."
      },
      {
        question: "What's the difference between a caption and a bio?",
        answer: "Captions are post-specific text that appears with each piece of content. Bios are permanent profile descriptions (150 characters on Instagram). Our tool generates captions for posts. For bio optimization, describe your brand and we'll generate bio-appropriate text."
      },
      {
        question: "How do I write captions for user-generated content (UGC)?",
        answer: "UGC captions should: (1) Credit the original creator, (2) Explain why you're sharing it, (3) Add your perspective, (4) Encourage others to share, (5) Include relevant hashtags. Our AI generates UGC-appropriate captions when you describe reposted or shared content."
      },
      {
        question: "Can the AI generator help with Instagram Stories text?",
        answer: "Yes! Select 'Stories' as your platform and the AI generates concise, engaging text perfect for temporary content. Story captions are shorter (under 50 characters), more casual, and include emojis. Perfect for behind-the-scenes, quick updates, or polls."
      },
      {
        question: "How do I write captions that increase saves?",
        answer: "Save-worthy captions provide: (1) Educational value (tips, tutorials), (2) Inspirational quotes or stories, (3) Resource lists, (4) How-to guides, (5) Valuable information users want to reference later. Our AI identifies educational content and generates save-optimized captions."
      },
      {
        question: "What makes a caption authentic vs generic?",
        answer: "Authentic captions: (1) Share personal experiences, (2) Use your natural voice, (3) Include specific details, (4) Show vulnerability, (5) Tell real stories. Generic captions are vague and templated. Our AI provides a foundation—add personal touches to make it authentically yours."
      },
      {
        question: "How do I write captions for product launches?",
        answer: "Product launch captions should: (1) Create excitement and anticipation, (2) Highlight key features and benefits, (3) Include social proof (if available), (4) Create urgency (limited time/stock), (5) Clear CTA to purchase. Our AI generates launch-optimized captions when you describe promotional content."
      }
    ],
    relatedTools: [
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Pet Name Generator", href: "/ai-tools/pet-names" },

      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" }
    ],
    useCases: [
      "Content Creators generating engaging captions for YouTube, Instagram, TikTok",
      "Businesses creating professional captions for product launches and marketing",
      "Influencers maintaining consistent brand voice across all platforms",
      "Social Media Managers saving time by generating multiple caption options",
      "E-commerce brands creating product descriptions and promotional copy",
      "Real Estate agents showcasing properties with compelling descriptions"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free AI Caption Generator - Create Viral Social Media Captions Instantly",
        description: "Generate viral social media captions with AI in 2025! Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Boost engagement with our free AI-powered caption generator. No sign up required.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "Caption Generator", href: "/ai-tools/caption-generator" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiCaptionGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `AI Caption Generator ${currentYear} | Free Instagram & TikTok Captions`,
        description: `Generate viral social media captions with AI ${currentYear}. Free caption generator for Instagram, TikTok, Facebook & more. No sign up.`,
        path: "/ai-tools/caption-generator"
      }}
    />
  )
}