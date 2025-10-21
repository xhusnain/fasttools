import { LoremIpsumGenerator } from "@/components/lorem-ipsum-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { FileText, Globe, Calculator, ArrowRight, Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Lorem Ipsum Generator | Placeholder Text, Dummy Text Generator | FastTools",
  description:
    "Professional Lorem Ipsum generator for designers and developers. Create placeholder text, dummy content, and filler text for mockups, prototypes, and design layouts instantly.",
  keywords:
    "lorem ipsum generator, free lorem ipsum generator, online lorem ipsum generator, dummy text generator, placeholder text generator, random text generator, lorem ipsum text generator, generate lorem ipsum online, lorem ipsum creator, lorem ipsum tool, lorem ipsum paragraph generator, lorem ipsum sentence generator, lorem ipsum word generator, lorem ipsum text online, generate lorem ipsum paragraphs, generate lorem ipsum sentences, generate lorem ipsum words, custom lorem ipsum generator, editable lorem ipsum generator, html lorem ipsum generator, ai lorem ipsum generator, ai dummy text generator, intelligent lorem ipsum tool, ai placeholder text generator, smart lorem ipsum generator, lorem ipsum generator ai powered, automated lorem ipsum text tool, machine learning lorem ipsum generator, lorem ipsum generator 2025, next.js lorem ipsum example, lorem ipsum generator for designers, lorem ipsum generator for developers, lorem ipsum generator for figma, lorem ipsum generator for canva, lorem ipsum plugin for wordpress, lorem ipsum chrome extension, lorem ipsum generator for website, lorem ipsum generator for apps, lorem ipsum generator for web design, lorem ipsum filler text generator, funny lorem ipsum generator, hipster ipsum generator, bacon ipsum generator, cupcake ipsum generator, gangsta lorem ipsum, creative lorem ipsum generator, hipster lorem ipsum text, custom style lorem ipsum, fake latin text generator, cool lorem ipsum alternatives, generate dummy text for website, generate lorem ipsum text for design, free lorem ipsum text tool, best lorem ipsum generator online, how to generate lorem ipsum text, create placeholder text online, generate random latin text, generate content filler text, lorem ipsum generator with copy option, lorem ipsum generator with character count, what is lorem ipsum, lorem ipsum meaning, lorem ipsum history, lorem ipsum origin, lorem ipsum latin translation, lorem ipsum dummy content, placeholder text for design, sample text generator, mockup text generator, text filler generator, filler text generator, placeholder content generator, mockup text generator, design placeholder text, wireframe text generator, prototype text generator, ui placeholder text, ux placeholder text, figma placeholder text, sketch placeholder text, adobe xd placeholder text, web design placeholder text, print design placeholder text, magazine layout text, brochure text generator, landing page placeholder text, blog placeholder text, content placeholder generator, sample text generator, latin text generator, greeked text generator, typography test text, spacing test content, responsive design text, accessibility placeholder text, alt text placeholder, metadata placeholder text, seo placeholder text, social media placeholder text, email template placeholder text, newsletter placeholder text, presentation placeholder text, document placeholder text, pdf placeholder text, word document placeholder text, google docs placeholder text, notion placeholder text, confluence placeholder text, slack placeholder text, discord placeholder text, telegram placeholder text, whatsapp placeholder text, facebook placeholder text, instagram placeholder text, twitter placeholder text, linkedin placeholder text, pinterest placeholder text, youtube placeholder text, tiktok placeholder text, snapchat placeholder text, twitch placeholder text, reddit placeholder text, tumblr placeholder text, medium placeholder text, substack placeholder text, ghost placeholder text, wordpress placeholder text, shopify placeholder text, wix placeholder text, squarespace placeholder text, weebly placeholder text, webflow placeholder text, drupal placeholder text, joomla placeholder text, magento placeholder text, prestashop placeholder text, opencart placeholder text, woocommerce placeholder text, bigcommerce placeholder text, shopify plus placeholder text, volusion placeholder text, 3dcart placeholder text, ecwid placeholder text, gumroad placeholder text, selz placeholder text, paddle placeholder text, stripe placeholder text, paypal placeholder text, square placeholder text, quickbooks placeholder text, xero placeholder text, freshbooks placeholder text, wave placeholder text, zoho placeholder text, hubspot placeholder text, salesforce placeholder text, mailchimp placeholder text, constant contact placeholder text, aweber placeholder text, getresponse placeholder text, convertkit placeholder text, drip placeholder text, activecampaign placeholder text, infusionsoft placeholder text, clickfunnels placeholder text, leadpages placeholder text, unbounce placeholder text, instapage placeholder text, landingi placeholder text, wishpond placeholder text, optimizely placeholder text, vwo placeholder text, google optimize placeholder text, hotjar placeholder text, crazy egg placeholder text, mouseflow placeholder text, fullstory placeholder text, logrocket placeholder text, mixpanel placeholder text, amplitude placeholder text, kissmetrics placeholder text, heap placeholder text, segment placeholder text, tealium placeholder text, adobe analytics placeholder text, google analytics placeholder text, facebook pixel placeholder text, google tag manager placeholder text, google ads placeholder text, facebook ads placeholder text, instagram ads placeholder text, linkedin ads placeholder text, twitter ads placeholder text, pinterest ads placeholder text, snapchat ads placeholder text, tiktok ads placeholder text, youtube ads placeholder text, amazon ads placeholder text, bing ads placeholder text, yahoo ads placeholder text, duckduckgo ads placeholder text, baidu ads placeholder text, yandex ads placeholder text, naver ads placeholder text, daum ads placeholder text, qwant ads placeholder text, ecosia ads placeholder text, startpage ads placeholder text, swisscows ads placeholder text, searx ads placeholder text, gigablast ads placeholder text, mojeek ads placeholder text, yippy ads placeholder text, wolframalpha ads placeholder text",
  openGraph: {
    title: "Free Lorem Ipsum Generator | Placeholder Text, Dummy Text Generator | FastTools",
    description: "Professional Lorem Ipsum generator for designers and developers. Create placeholder text, dummy content, and filler text for mockups and prototypes instantly.",
    url: "https://www.fasttools.store/seo-tools/lorem-ipsum",
    type: "website",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Lorem Ipsum Generator - Placeholder Text, Dummy Text Generator",
      },
    ],
  },
}

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <FileText className="h-4 w-4 animate-pulse" />
                  <span>Professional Lorem Ipsum Generator</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Lorem Ipsum Generator
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Create professional placeholder text for design mockups, prototypes, and content layouts. Generate dummy text that helps you focus on design structure without distracting content.
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">Instant</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">Design Ready</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Calculator className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">Professional</span>
                  </div>
                </div>
          </div>

              {/* Mobile/Tablet Ad - Top of Page */}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
          </div>

          <LoremIpsumGenerator />

              {/* Mobile/Tablet Ad - After Tool */}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* Content Sections */}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Understanding Lorem Ipsum and Design Workflow</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Lorem Ipsum serves as neutral placeholder text that allows designers and developers to focus on layout, typography, and visual hierarchy without being distracted by actual content. This classical Latin text has been the industry standard for over five centuries, providing a consistent foundation for design work across all mediums.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">The Purpose of Placeholder Text</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Placeholder text helps designers visualize how real content will flow through their layouts. It maintains realistic text density and spacing while keeping focus on structural elements like navigation, imagery placement, and overall composition. This approach is essential for creating user interfaces that work well with actual content when it's ready.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Modern Design Applications</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Today's designers use Lorem Ipsum across digital platforms including web design, mobile app development, print layouts, and presentation design. It's particularly valuable during the wireframing and prototyping phases, where content structure matters more than specific messaging. Our generator provides flexible options for different design contexts and content requirements.
                  </p>
          </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Best Practices for Using Placeholder Text</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Effective use of Lorem Ipsum requires understanding when and how to apply it throughout the design process. Strategic placement helps stakeholders focus on design decisions rather than content details.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Design Phase Applications</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Use placeholder text during wireframing to establish content hierarchy and spacing relationships. In prototyping, it helps test responsive behavior and typography scaling. For client presentations, it keeps focus on visual design rather than content approval. Always replace placeholder text with actual content before final delivery or launch.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Content Strategy Integration</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    While Lorem Ipsum handles visual layout, consider how your design will accommodate different content lengths and types. Test layouts with both short and long placeholder text to ensure flexibility. Use placeholder text that matches your expected content structure—paragraphs for articles, shorter text for navigation, etc.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Team Collaboration Benefits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Placeholder text facilitates smoother collaboration between designers, developers, and content creators. It allows each team member to work on their specialty without waiting for others. Designers can iterate on layouts, developers can build responsive systems, and content creators can focus on messaging—all simultaneously. This parallel workflow accelerates project timelines and improves final quality.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Search className="h-4 w-4 text-accent" />
                    </div>
                    Common Questions About Lorem Ipsum
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What is Lorem Ipsum and why do designers use it?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Lorem Ipsum is placeholder text derived from classical Latin literature, specifically from Cicero's "De finibus bonorum et malorum" written in 45 BC. Designers use it because it provides realistic text density and character distribution without distracting from the visual design. The text has no meaning in modern context, so viewers focus on layout, typography, and visual hierarchy rather than trying to read and understand the content. It's been the industry standard since the 1500s when printers used it to demonstrate typefaces. Today, it's essential for wireframing, prototyping, and design presentations where you need to show how content will look without having the actual content ready. The consistent character patterns help designers test spacing, line heights, and responsive behavior across different screen sizes.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How much Lorem Ipsum text should I use in my designs?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The amount of Lorem Ipsum text depends on your design's purpose and the type of content you're representing. For web design mockups, use enough text to fill 2-3 screen heights to test scrolling behavior and content flow. For print layouts, fill the entire content area to see how text wraps and flows around images. For mobile app designs, use shorter paragraphs that fit comfortably on smaller screens. Always consider your target content length—if you're designing a blog post layout, use several paragraphs; for a product description, use 2-3 sentences. The key is to represent realistic content density without overwhelming the design. Our generator lets you specify exact word counts, paragraph numbers, or character limits to match your specific design needs. Remember that too much placeholder text can make designs look cluttered, while too little won't properly test your layout's behavior with real content.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is it okay to use Lorem Ipsum in final designs or production websites?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">No, Lorem Ipsum should never appear in final designs or production websites. It's strictly a design tool for development and prototyping phases. Using Lorem Ipsum in production creates several problems: it confuses users who might think it's real content, it hurts SEO because search engines can't understand meaningless Latin text, it looks unprofessional and suggests incomplete work, and it fails accessibility standards since screen readers will read meaningless content to visually impaired users. Always replace Lorem Ipsum with actual, meaningful content before launching any project. If you're waiting for final content, use temporary but meaningful placeholder text that describes what will go there (like "Product description coming soon" or "Blog post title here"). This approach maintains professionalism while clearly indicating that real content is pending. Our generator is designed for design and development phases only—never for final production use.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the difference between Lorem Ipsum and other placeholder text?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Lorem Ipsum is classical Latin text with specific character frequency patterns that closely match English text, making it ideal for typography testing. Other placeholder text options include "Greeked text" (random Latin-looking characters), "Bacon Ipsum" (bacon-themed placeholder text), "Hipster Ipsum" (hipster-themed text), and custom placeholder text you create yourself. Lorem Ipsum remains the gold standard because it has realistic word lengths, sentence structures, and character distributions that closely mirror real content. Other themed placeholder texts can be distracting during design work because people naturally try to read them. Lorem Ipsum's meaningless nature keeps focus on design elements. However, for client presentations where you want to show personality or brand alignment, themed placeholder text might be more appropriate. Our generator focuses on classic Lorem Ipsum because it's the most versatile and universally accepted option for professional design work.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I choose the right amount of Lorem Ipsum for different design contexts?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Choose Lorem Ipsum length based on your design context and content type. For website headers and navigation, use short phrases (5-10 words). For blog post previews or article excerpts, use 1-2 sentences (15-30 words). For full article layouts, use 3-5 paragraphs (150-300 words). For product descriptions, use 2-3 sentences (20-50 words). For social media posts, use short phrases that fit character limits. For email templates, use paragraph-length text that matches your content blocks. For print layouts, fill entire content areas to test text flow and spacing. For mobile app screens, use shorter text that fits comfortably without scrolling. Always consider your target audience's reading habits and device constraints. Test your layouts with both short and long text versions to ensure flexibility. Our generator provides options for different contexts, from single sentences to multiple paragraphs, helping you match your placeholder text to your specific design needs.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can Lorem Ipsum help with responsive design testing?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Lorem Ipsum is invaluable for responsive design testing because it helps you see how text behaves across different screen sizes and orientations. Use it to test how paragraphs reflow on mobile devices, how line lengths change on different screen widths, and how text scaling affects readability. Test with longer paragraphs to see how text wraps on narrow screens and shorter paragraphs to see how they expand on wide screens. Lorem Ipsum helps identify potential issues with text overflow, awkward line breaks, and spacing problems that might not be obvious with shorter placeholder text. It's particularly useful for testing typography scaling, ensuring your font sizes work well across all devices. Use different amounts of Lorem Ipsum for different breakpoints—more text for desktop layouts, less for mobile. This approach helps you create designs that work beautifully regardless of screen size or content length. Our generator's flexible options make it easy to create text blocks of various lengths for comprehensive responsive testing.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Should I use Lorem Ipsum in client presentations?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Using Lorem Ipsum in client presentations depends on your client's familiarity with design processes and the presentation's purpose. For design-savvy clients who understand the design process, Lorem Ipsum is perfectly acceptable and keeps focus on visual design rather than content. For less design-aware clients, consider using meaningful placeholder text that describes what will go there (like "Your company's mission statement" or "Product benefits list"). This approach helps clients visualize the final result better. For early-stage presentations focused on layout and structure, Lorem Ipsum is ideal. For later-stage presentations where content strategy is important, use more descriptive placeholders. Always explain to clients that Lorem Ipsum is temporary and will be replaced with real content. Some clients prefer to see actual content even in early stages, so be prepared to accommodate their preferences. The key is maintaining professionalism while keeping focus on the design elements you're presenting. Our generator helps you create appropriate placeholder text for any presentation context.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How does Lorem Ipsum help with typography and spacing decisions?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Lorem Ipsum is essential for typography and spacing decisions because it provides realistic text density and character patterns that closely match real content. It helps you establish proper line heights, paragraph spacing, and character spacing that will work well with actual content. The consistent character frequency in Lorem Ipsum makes it ideal for testing font readability, ensuring your chosen typefaces are legible at different sizes. It helps you see how text blocks create visual rhythm and hierarchy in your layouts. Use Lorem Ipsum to test different font weights, sizes, and styles to see how they work together. It's particularly valuable for testing color contrast and text legibility against different backgrounds. The realistic word lengths help you establish proper margins, padding, and content widths that accommodate natural text flow. Our generator's various length options let you test typography decisions across different content scenarios, from short headlines to long-form articles, ensuring your typography choices work well in all contexts.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are common mistakes when using Lorem Ipsum?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Common Lorem Ipsum mistakes include using too much text that overwhelms the design, using too little text that doesn't properly test layout behavior, forgetting to replace it with real content before launch, using it in contexts where meaningful placeholder text would be better, and not considering how it will look across different devices and screen sizes. Another mistake is using Lorem Ipsum for content that has specific formatting requirements (like lists, tables, or structured data) where it doesn't represent the actual content structure. Some designers use Lorem Ipsum that's too short or too long for their intended content type, making it ineffective for testing purposes. Others forget to test with different amounts of text to ensure their designs are flexible. The biggest mistake is leaving Lorem Ipsum in production websites or final designs, which creates professional and technical problems. Always use Lorem Ipsum strategically during design phases and replace it completely before any public launch. Our generator helps avoid these mistakes by providing appropriate text lengths and clear guidance on proper usage.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I make Lorem Ipsum more effective for my specific design needs?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Make Lorem Ipsum more effective by customizing it to match your specific design context and content requirements. Use different amounts of text for different sections of your design—short phrases for navigation, medium paragraphs for content blocks, longer text for article layouts. Test your designs with both short and long Lorem Ipsum to ensure flexibility. Consider your target content type and use Lorem Ipsum that represents realistic content density for that type. For example, if you're designing a news website, use longer paragraphs; for a product catalog, use shorter descriptions. Use Lorem Ipsum to test different typography treatments, spacing relationships, and responsive behaviors. Combine Lorem Ipsum with other design elements like images, buttons, and navigation to see how text interacts with these elements. Test your color schemes and contrast ratios using Lorem Ipsum to ensure readability. Use it to establish consistent spacing patterns that will work well with real content. Our generator's flexible options help you create Lorem Ipsum that's perfectly tailored to your specific design needs and testing requirements.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is Lorem Ipsum useful for accessibility testing?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Lorem Ipsum has limited usefulness for accessibility testing because it's meaningless text that doesn't provide semantic value to screen readers or other assistive technologies. However, it can help test some accessibility aspects like text contrast ratios, font size scalability, and keyboard navigation through text-heavy layouts. For comprehensive accessibility testing, you should use meaningful placeholder text that describes what content will go there, as this better represents how assistive technologies will interact with your final content. Lorem Ipsum can help test visual accessibility (contrast, sizing, spacing) but not semantic accessibility (meaningful content structure). When testing with screen readers, use descriptive placeholder text instead of Lorem Ipsum. For color contrast testing, Lorem Ipsum works well because you're testing visual contrast rather than content meaning. For testing keyboard navigation through text-heavy areas, Lorem Ipsum can be useful to see how users navigate through content blocks. Remember that accessibility is about meaningful content, so always test with real or meaningful placeholder content when possible. Our generator is designed for visual design testing rather than accessibility testing.</p>
                    </div>
                  </div>
                  <div className="mt-6 block xl:hidden">
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
            <div className="hidden lg:block w-72">
              <div className="sticky top-32 space-y-6">
              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
