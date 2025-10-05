import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calculator,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  Calendar,
  Activity,
  DollarSign,
  Percent,
  Wallet,
} from "lucide-react"
import { AdSpace } from "@/components/ad-space"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  const tools = [
    {
      title: "Age Calculator",
      description:
        "Calculate your exact age in years, months, and days. Perfect for birthdays, anniversaries, age verification, and official documents.",
      icon: Calculator,
      href: "/tools/age-calculator",
      popular: true,
    },
    {
      title: "Date Difference Calculator",
      description:
        "Calculate the exact difference between two dates in years, months, days, weeks, and hours. Perfect for project planning.",
      icon: Calendar,
      href: "/tools/date-difference",
      popular: false,
    },
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index (BMI) to assess your weight category. Supports both metric and imperial units.",
      icon: Activity,
      href: "/tools/bmi-calculator",
      popular: true,
    },
    {
      title: "Loan EMI Calculator",
      description:
        "Calculate your monthly loan payment (EMI) for home loans, car loans, or personal loans with total interest breakdown.",
      icon: DollarSign,
      href: "/tools/loan-calculator",
      popular: true,
    },
    {
      title: "Percentage Calculator",
      description:
        "Calculate percentages quickly and easily. Perfect for discounts, tips, grades, statistics, and everyday math.",
      icon: Percent,
      href: "/tools/percentage-calculator",
      popular: false,
    },
    {
      title: "Time Duration Calculator",
      description:
        "Calculate the time duration between two times. Perfect for tracking work hours, meeting durations, and time management.",
      icon: Clock,
      href: "/tools/time-duration",
      popular: false,
    },
    {
      title: "Income Tax Calculator",
      description:
        "Calculate your estimated income tax based on your annual salary. Get your net salary and monthly take-home pay.",
      icon: Wallet,
      href: "/tools/tax-calculator",
      popular: false,
    },
    {
      title: "Compound Interest Calculator",
      description:
        "Calculate compound interest and see how your investment or savings grow over time with multiple compounding frequencies.",
      icon: TrendingUp,
      href: "/tools/compound-interest",
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col">
      <AdSpace slot="header" className="mb-0" />

      <section className="container mx-auto px-4 lg:px-6 py-20 md:py-32">
        <AdSpace slot="header" className="mb-12 h-24" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6500]/10 text-[#FF6500] text-sm font-medium mb-2 animate-fade-in border border-[#FF6500]/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Free Online Tools for Everyone</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] text-foreground animate-fade-in-up tracking-tight">
            Smart Tools for Everyday Tasks
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Access powerful, free online calculation tools designed to make your life easier. Fast, accurate, and always
            available when you need them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/tools">
                Browse All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-medium hover:bg-accent transition-all duration-200 bg-transparent border-2"
            >
              <Link href="/tools/age-calculator">Try Age Calculator</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Zap className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Lightning Fast</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  Get instant results with our optimized calculation tools. No waiting, no delays, just accurate
                  results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/20">
                  <Shield className="h-7 w-7 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">100% Free</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  All calculation tools are completely free to use. No hidden fees, no subscriptions, no registration
                  required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Clock className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Always Available</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  Access our online tools anytime, anywhere, from any device. Mobile-friendly and responsive design.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Lightning Fast</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Get instant results with our optimized calculation tools. No waiting, no delays, just accurate
                  results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in animation-delay-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 shadow-sm">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">100% Free</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  All calculation tools are completely free to use. No hidden fees, no subscriptions, no registration
                  required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in animation-delay-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Always Available</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Access our online tools anytime, anywhere, from any device. Mobile-friendly and responsive design.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Our Tools?</h2>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're committed to providing the best free online calculation tools with accuracy, speed, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-slide-in-left">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Accurate Calculations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our calculators use precise algorithms to ensure 100% accurate results every time. Perfect for
                  financial planning, health tracking, and official documents.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">User-Friendly Interface</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simple, intuitive design that anyone can use. No technical knowledge required. Just input your data
                  and get instant results.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-left animation-delay-100">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">SEO Optimized</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All our tools are built with SEO best practices, ensuring fast loading times, mobile responsiveness,
                  and excellent search engine rankings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right animation-delay-100">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">No Registration Needed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start using our tools immediately without creating an account. Your privacy is important to us, and we
                  don't collect unnecessary data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Tools Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A5A8A]/10 text-[#2A5A8A] text-sm font-medium mb-4 border border-[#2A5A8A]/20">
              <Shield className="h-4 w-4" />
              <span>100% Free & Public</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Public Tools for Everyone</h2>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our commitment to providing free, accessible tools for everyone. No registration, no hidden costs, just
              powerful calculators at your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-left">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Open Access</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  All our tools are publicly available without any barriers. No sign-up required, no email verification,
                  no payment walls. Just visit and start calculating immediately.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Privacy First</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Your data stays private. All calculations happen in your browser, and we don't store or track your
                  personal information. Use our tools with complete peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-left animation-delay-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Always Free</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  We believe essential tools should be free for everyone. No premium tiers, no feature limitations, no
                  trial periods. Every feature is available to every user, forever.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-right animation-delay-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Community Driven</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Built for the community, by the community. We continuously add new tools based on user feedback and
                  real-world needs. Your suggestions help us grow.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#FF6500]/5 via-[#2A5A8A]/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-[#FF6500]/10 animate-scale-in animation-delay-200">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium border border-border">
                <Sparkles className="h-4 w-4 text-[#FF6500]" />
                <span className="text-foreground">Trusted by Thousands Daily</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Join Our Growing Community</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Thousands of people use our public tools every day for personal finance, health tracking, project
                planning, and more. Be part of a community that values accessibility, accuracy, and simplicity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="/tools">
                    Explore All Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-11 text-sm font-medium hover:bg-accent transition-all bg-background/80 backdrop-blur-sm"
                >
                  <Link href="/tools/age-calculator">Start Calculating</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">All Calculation Tools</h2>
              <p className="text-base text-muted-foreground text-pretty">
                Choose from our collection of free online calculators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card
                  key={tool.href}
                  className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      {tool.popular && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary flex items-center gap-1 border border-secondary/20">
                          <Star className="h-3 w-3 fill-current" />
                          Popular
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
                    >
                      <Link href={tool.href}>
                        Use Tool
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-base text-muted-foreground text-pretty">
              Find answers to common questions about our free online calculation tools
            </p>
          </div>
          <FAQSection />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <AdSpace slot="footer" className="max-w-6xl mx-auto" />
      </section>

      <section className="bg-[#FF6500] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-base text-white/90 text-pretty">
              Try our free calculators now and discover how easy it is to get accurate results in seconds.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 text-sm font-medium shadow-lg hover:shadow-xl transition-all bg-white text-[#FF6500] hover:bg-white/90"
            >
              <Link href="/tools">
                Browse All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
