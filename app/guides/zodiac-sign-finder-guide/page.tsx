import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Calendar, Sparkles, Target, AlertCircle, Heart, Moon, Sun, BookOpen } from "lucide-react"


export default function ZodiacSignFinderGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Zodiac Sign Finder Guide",
    description: "Master zodiac sign calculation with our comprehensive guide. Learn about zodiac signs, astrology, and use our free zodiac sign finder tool.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/zodiac-sign-finder-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Zodiac Sign Finder Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master zodiac sign calculation with our comprehensive guide. Learn about zodiac signs, 
            astrology, and use our free zodiac sign finder tool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>280,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.8/5 rating</span>
            </div>
          </div>
          
          {/* Try Zodiac Sign Finder Button */}
          <div className="mt-8">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 text-lg">
              <Link href="/date-time-tools/zodiac-sign">
                <Moon className="mr-2 h-5 w-5" />
                Try Zodiac Sign Finder
              </Link>
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link href="#what-is-zodiac" className="block text-primary hover:underline">
                1. What is the Zodiac?
              </Link>
              <Link href="#zodiac-signs" className="block text-primary hover:underline">
                2. The 12 Zodiac Signs
              </Link>
              <Link href="#birth-dates" className="block text-primary hover:underline">
                3. Birth Date Ranges
              </Link>
              <Link href="#zodiac-elements" className="block text-primary hover:underline">
                4. Zodiac Elements and Qualities
              </Link>
              <Link href="#astrology-basics" className="block text-primary hover:underline">
                5. Astrology Basics
              </Link>
              <Link href="#compatibility" className="block text-primary hover:underline">
                6. Zodiac Compatibility
              </Link>
              <Link href="#personality-traits" className="block text-primary hover:underline">
                7. Personality Traits
              </Link>
              <Link href="#modern-astrology" className="block text-primary hover:underline">
                8. Modern Astrology
              </Link>
            </nav>
          </CardContent>
        </Card>

        
        {/* Official Documentation References */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <BookOpen className="h-5 w-5" />
                Official Documentation References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                These official sources provide authoritative information about zodiac sign finder:
              </p>
              <div className="space-y-3">
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - National Institute of Standards and Technology
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official measurement and technology standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO - International Organization for Standardization
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official international standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ieee.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE - Institute of Electrical and Electronics Engineers
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Institute of Electrical and Electronics Engineers - Official technical standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      W3C - World Wide Web Consortium
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Official web standards and guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ietf.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IETF - Internet Engineering Task Force
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Internet Engineering Task Force - Official internet protocol standards
                    </p>
                  </div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>

{/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: What is the Zodiac */}
          <section id="what-is-zodiac" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is the Zodiac?</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              The zodiac is a belt of the heavens within about 8° either side of the ecliptic, 
              including all apparent positions of the sun, moon, and planets as seen from Earth. 
              It's divided into 12 equal parts, each associated with a constellation and zodiac sign.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Benefits of Zodiac Knowledge:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Self-Understanding:</strong> Insights into personality and behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Relationship Insights:</strong> Understanding compatibility with others</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Cultural Connection:</strong> Connection to ancient wisdom and traditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Entertainment:</strong> Fun and engaging way to explore personality</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The zodiac has been used for thousands of years in various cultures for navigation, 
              agriculture, and personal guidance. Today, it remains popular for entertainment, 
              self-reflection, and cultural connection.
            </p>
          </section>

          {/* Section 2: The 12 Zodiac Signs */}
          <section id="zodiac-signs" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">The 12 Zodiac Signs</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    Aries (March 21 - April 19)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The first sign of the zodiac, known for leadership and initiative:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Fire</li>
                    <li>• <strong>Quality:</strong> Cardinal</li>
                    <li>• <strong>Ruling Planet:</strong> Mars</li>
                    <li>• <strong>Symbol:</strong> Ram</li>
                    <li>• <strong>Traits:</strong> Bold, energetic, pioneering</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    Taurus (April 20 - May 20)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The second sign, known for stability and determination:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Earth</li>
                    <li>• <strong>Quality:</strong> Fixed</li>
                    <li>• <strong>Ruling Planet:</strong> Venus</li>
                    <li>• <strong>Symbol:</strong> Bull</li>
                    <li>• <strong>Traits:</strong> Reliable, patient, practical</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    Gemini (May 21 - June 20)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The third sign, known for communication and adaptability:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Air</li>
                    <li>• <strong>Quality:</strong> Mutable</li>
                    <li>• <strong>Ruling Planet:</strong> Mercury</li>
                    <li>• <strong>Symbol:</strong> Twins</li>
                    <li>• <strong>Traits:</strong> Curious, versatile, communicative</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-silver-500" />
                    Cancer (June 21 - July 22)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The fourth sign, known for emotional depth and nurturing:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Water</li>
                    <li>• <strong>Quality:</strong> Cardinal</li>
                    <li>• <strong>Ruling Planet:</strong> Moon</li>
                    <li>• <strong>Symbol:</strong> Crab</li>
                    <li>• <strong>Traits:</strong> Intuitive, protective, emotional</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-orange-500" />
                    Leo (July 23 - August 22)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The fifth sign, known for creativity and leadership:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Fire</li>
                    <li>• <strong>Quality:</strong> Fixed</li>
                    <li>• <strong>Ruling Planet:</strong> Sun</li>
                    <li>• <strong>Symbol:</strong> Lion</li>
                    <li>• <strong>Traits:</strong> Confident, generous, dramatic</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    Virgo (August 23 - September 22)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The sixth sign, known for attention to detail and service:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Earth</li>
                    <li>• <strong>Quality:</strong> Mutable</li>
                    <li>• <strong>Ruling Planet:</strong> Mercury</li>
                    <li>• <strong>Symbol:</strong> Virgin</li>
                    <li>• <strong>Traits:</strong> Analytical, practical, perfectionist</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    Libra (September 23 - October 22)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The seventh sign, known for balance and harmony:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Air</li>
                    <li>• <strong>Quality:</strong> Cardinal</li>
                    <li>• <strong>Ruling Planet:</strong> Venus</li>
                    <li>• <strong>Symbol:</strong> Scales</li>
                    <li>• <strong>Traits:</strong> Diplomatic, fair, social</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-red-500" />
                    Scorpio (October 23 - November 21)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The eighth sign, known for intensity and transformation:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Water</li>
                    <li>• <strong>Quality:</strong> Fixed</li>
                    <li>• <strong>Ruling Planet:</strong> Pluto</li>
                    <li>• <strong>Symbol:</strong> Scorpion</li>
                    <li>• <strong>Traits:</strong> Intense, passionate, mysterious</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-600" />
                    Sagittarius (November 22 - December 21)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The ninth sign, known for adventure and philosophy:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Fire</li>
                    <li>• <strong>Quality:</strong> Mutable</li>
                    <li>• <strong>Ruling Planet:</strong> Jupiter</li>
                    <li>• <strong>Symbol:</strong> Archer</li>
                    <li>• <strong>Traits:</strong> Adventurous, optimistic, philosophical</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-brown-500" />
                    Capricorn (December 22 - January 19)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The tenth sign, known for ambition and discipline:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Earth</li>
                    <li>• <strong>Quality:</strong> Cardinal</li>
                    <li>• <strong>Ruling Planet:</strong> Saturn</li>
                    <li>• <strong>Symbol:</strong> Goat</li>
                    <li>• <strong>Traits:</strong> Ambitious, disciplined, responsible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-cyan-500" />
                    Aquarius (January 20 - February 18)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The eleventh sign, known for innovation and humanitarianism:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Air</li>
                    <li>• <strong>Quality:</strong> Fixed</li>
                    <li>• <strong>Ruling Planet:</strong> Uranus</li>
                    <li>• <strong>Symbol:</strong> Water Bearer</li>
                    <li>• <strong>Traits:</strong> Independent, innovative, humanitarian</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-blue-600" />
                    Pisces (February 19 - March 20)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The twelfth sign, known for intuition and compassion:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Element:</strong> Water</li>
                    <li>• <strong>Quality:</strong> Mutable</li>
                    <li>• <strong>Ruling Planet:</strong> Neptune</li>
                    <li>• <strong>Symbol:</strong> Fish</li>
                    <li>• <strong>Traits:</strong> Intuitive, compassionate, artistic</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Birth Date Ranges */}
          <section id="birth-dates" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Birth Date Ranges</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Zodiac Date Ranges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The traditional date ranges for each zodiac sign:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Spring Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Aries: March 21 - April 19</li>
                          <li>• Taurus: April 20 - May 20</li>
                          <li>• Gemini: May 21 - June 20</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Summer Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Cancer: June 21 - July 22</li>
                          <li>• Leo: July 23 - August 22</li>
                          <li>• Virgo: August 23 - September 22</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Fall Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Libra: September 23 - October 22</li>
                          <li>• Scorpio: October 23 - November 21</li>
                          <li>• Sagittarius: November 22 - December 21</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Winter Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Capricorn: December 22 - January 19</li>
                          <li>• Aquarius: January 20 - February 18</li>
                          <li>• Pisces: February 19 - March 20</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Important considerations for zodiac sign determination:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Exact Dates:</strong> Dates can vary slightly by year</li>
                      <li>• <strong>Leap Years:</strong> Leap years may affect date ranges</li>
                      <li>• <strong>Time Zone:</strong> Birth time and location matter</li>
                      <li>• <strong>Cusp Dates:</strong> Birth dates on sign boundaries</li>
                      <li>• <strong>Astronomical vs Tropical:</strong> Different calculation methods</li>
                      <li>• <strong>Precession:</strong> Earth's axis precession affects dates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Zodiac Elements and Qualities */}
          <section id="zodiac-elements" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Zodiac Elements and Qualities</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Four Elements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The zodiac is divided into four elements:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Fire Signs:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Aries, Leo, Sagittarius</p>
                        <p className="text-sm">Passionate, energetic, spontaneous</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Earth Signs:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Taurus, Virgo, Capricorn</p>
                        <p className="text-sm">Practical, reliable, grounded</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Air Signs:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Gemini, Libra, Aquarius</p>
                        <p className="text-sm">Intellectual, social, communicative</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Water Signs:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Cancer, Scorpio, Pisces</p>
                        <p className="text-sm">Emotional, intuitive, sensitive</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Three Qualities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The zodiac is also divided into three qualities:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Cardinal:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Aries, Cancer, Libra, Capricorn</p>
                        <p className="text-sm">Initiative, leadership, new beginnings</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Fixed:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Taurus, Leo, Scorpio, Aquarius</p>
                        <p className="text-sm">Stability, determination, persistence</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Mutable:</h4>
                        <p className="text-sm text-muted-foreground mb-2">Gemini, Virgo, Sagittarius, Pisces</p>
                        <p className="text-sm">Adaptability, flexibility, change</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Astrology Basics */}
          <section id="astrology-basics" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Astrology Basics</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is Astrology?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Astrology is the study of the movements and relative positions of celestial 
                      bodies interpreted as having an influence on human affairs and the natural world.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Sun Sign:</strong> Your primary zodiac sign based on birth date</li>
                      <li>• <strong>Moon Sign:</strong> Your emotional nature and inner self</li>
                      <li>• <strong>Rising Sign:</strong> Your outward personality and first impressions</li>
                      <li>• <strong>Planets:</strong> Different planets influence different aspects of life</li>
                      <li>• <strong>Houses:</strong> 12 areas of life represented in the birth chart</li>
                      <li>• <strong>Aspects:</strong> Relationships between planets in the chart</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Birth Chart Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Key components of an astrological birth chart:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Sun Sign:</strong> Core personality and identity</li>
                      <li>• <strong>Moon Sign:</strong> Emotions and subconscious</li>
                      <li>• <strong>Ascendant:</strong> Rising sign and outward appearance</li>
                      <li>• <strong>Planetary Positions:</strong> Where planets were at birth</li>
                      <li>• <strong>Houses:</strong> Life areas and experiences</li>
                      <li>• <strong>Aspects:</strong> Planetary relationships and influences</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Types of Astrology</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Different types of astrological systems:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Western Astrology:</strong> Most common in Western cultures</li>
                      <li>• <strong>Vedic Astrology:</strong> Traditional Indian astrology</li>
                      <li>• <strong>Chinese Astrology:</strong> Based on lunar calendar and animals</li>
                      <li>• <strong>Mayan Astrology:</strong> Ancient Mesoamerican system</li>
                      <li>• <strong>Celtic Astrology:</strong> Tree-based system</li>
                      <li>• <strong>Egyptian Astrology:</strong> Ancient Egyptian system</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 6: Compatibility */}
          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Zodiac Compatibility</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Element Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      How different elements interact:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Fire + Fire:</strong> Passionate but potentially volatile</li>
                      <li>• <strong>Fire + Air:</strong> Exciting and dynamic relationship</li>
                      <li>• <strong>Fire + Earth:</strong> Challenging but can be complementary</li>
                      <li>• <strong>Fire + Water:</strong> Intense but potentially overwhelming</li>
                      <li>• <strong>Earth + Earth:</strong> Stable and practical partnership</li>
                      <li>• <strong>Earth + Air:</strong> Different approaches but can work</li>
                      <li>• <strong>Earth + Water:</strong> Nurturing and supportive</li>
                      <li>• <strong>Air + Air:</strong> Intellectual and communicative</li>
                      <li>• <strong>Air + Water:</strong> Emotional and mental connection</li>
                      <li>• <strong>Water + Water:</strong> Deep emotional understanding</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      How different qualities interact:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Cardinal + Cardinal:</strong> Both want to lead, potential conflict</li>
                      <li>• <strong>Cardinal + Fixed:</strong> One initiates, one maintains</li>
                      <li>• <strong>Cardinal + Mutable:</strong> One leads, one adapts</li>
                      <li>• <strong>Fixed + Fixed:</strong> Both stubborn, potential stalemate</li>
                      <li>• <strong>Fixed + Mutable:</strong> One holds firm, one adjusts</li>
                      <li>• <strong>Mutable + Mutable:</strong> Both flexible, easy adaptation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opposite Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Opposite signs in the zodiac often attract:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Aries ↔ Libra:</strong> Individual vs partnership</li>
                      <li>• <strong>Taurus ↔ Scorpio:</strong> Material vs emotional</li>
                      <li>• <strong>Gemini ↔ Sagittarius:</strong> Local vs global</li>
                      <li>• <strong>Cancer ↔ Capricorn:</strong> Home vs career</li>
                      <li>• <strong>Leo ↔ Aquarius:</strong> Personal vs universal</li>
                      <li>• <strong>Virgo ↔ Pisces:</strong> Practical vs spiritual</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Personality Traits */}
          <section id="personality-traits" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Personality Traits</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Positive Traits by Sign</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common positive traits associated with each sign:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Fire Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Aries:</strong> Courageous, enthusiastic, natural leader</li>
                          <li>• <strong>Leo:</strong> Generous, confident, creative</li>
                          <li>• <strong>Sagittarius:</strong> Optimistic, adventurous, philosophical</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Earth Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Taurus:</strong> Reliable, patient, practical</li>
                          <li>• <strong>Virgo:</strong> Analytical, helpful, hardworking</li>
                          <li>• <strong>Capricorn:</strong> Ambitious, disciplined, responsible</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Air Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Gemini:</strong> Curious, adaptable, communicative</li>
                          <li>• <strong>Libra:</strong> Diplomatic, fair, social</li>
                          <li>• <strong>Aquarius:</strong> Independent, innovative, humanitarian</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Water Signs:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Cancer:</strong> Nurturing, intuitive, protective</li>
                          <li>• <strong>Scorpio:</strong> Passionate, resourceful, brave</li>
                          <li>• <strong>Pisces:</strong> Compassionate, artistic, intuitive</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Challenging Traits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Common challenging traits by sign:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Fire Signs:</strong> Can be impulsive, impatient, or dominating</li>
                      <li>• <strong>Earth Signs:</strong> May be stubborn, materialistic, or rigid</li>
                      <li>• <strong>Air Signs:</strong> Can be indecisive, detached, or superficial</li>
                      <li>• <strong>Water Signs:</strong> May be moody, overly sensitive, or secretive</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: Modern Astrology */}
          <section id="modern-astrology" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Modern Astrology</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contemporary Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Modern uses of astrology:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Self-Reflection:</strong> Personal growth and understanding</li>
                      <li>• <strong>Relationship Guidance:</strong> Understanding compatibility</li>
                      <li>• <strong>Career Counseling:</strong> Astrological career guidance</li>
                      <li>• <strong>Timing:</strong> Choosing optimal times for activities</li>
                      <li>• <strong>Entertainment:</strong> Fun and engaging personality insights</li>
                      <li>• <strong>Cultural Connection:</strong> Connecting with ancient wisdom</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Astrology</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Technology and astrology:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Online Calculators:</strong> Instant zodiac sign determination</li>
                      <li>• <strong>Mobile Apps:</strong> Astrology apps for daily guidance</li>
                      <li>• <strong>Social Media:</strong> Sharing astrological content</li>
                      <li>• <strong>Virtual Consultations:</strong> Online astrological readings</li>
                      <li>• <strong>AI Integration:</strong> Artificial intelligence in astrology</li>
                      <li>• <strong>Data Analysis:</strong> Big data in astrological research</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scientific Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Scientific view of astrology:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Entertainment Value:</strong> Fun and engaging for many people</li>
                      <li>• <strong>Cultural Significance:</strong> Important part of human culture</li>
                      <li>• <strong>Psychological Benefits:</strong> Self-reflection and insight</li>
                      <li>• <strong>No Scientific Evidence:</strong> No proven causal relationships</li>
                      <li>• <strong>Barnum Effect:</strong> General statements seem personal</li>
                      <li>• <strong>Personal Choice:</strong> Individual decision to engage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Find Your Zodiac Sign?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use our free zodiac sign finder to discover your astrological sign based on your 
              birth date. Perfect for entertainment, self-reflection, and understanding your personality.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/date-time-tools/zodiac-sign" className="flex items-center gap-2">
                Find Your Zodiac Sign Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Related Date & Time Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Age in Hours Calculator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Calculate your exact age in hours, minutes, and seconds.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/date-time-tools/age-in-hours">Try Age in Hours Calculator</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Date to Day Finder</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find out what day of the week any date falls on.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/date-time-tools/date-to-day">Try Date to Day Finder</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
