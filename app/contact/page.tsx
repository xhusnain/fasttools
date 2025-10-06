import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact FastTools - Get in Touch | Free Online Tools Support",
  description: "Contact fasttools.store for support, feedback, or questions about our free online tools including age calculator, BMI calculator, loan calculator, and more. We'd love to hear from you.",
  keywords: [
    "contact toolifyhub",
    "support",
    "feedback",
    "questions",
    "help",
    "customer service",
    "online tools support",
    "calculator support"
  ],
  openGraph: {
    title: "Contact FastTools - Get in Touch",
    description: "Contact fasttools.store for support, feedback, or questions about our free online tools.",
    type: "website",
    url: "https://fasttools.store/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FastTools - Get in Touch",
    description: "Contact fasttools.store for support, feedback, or questions about our free online tools.",
  },
  alternates: {
    canonical: "https://fasttools.store/contact",
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact fasttools.store",
    description: "Contact fasttools.store for support, feedback, or questions about our free online tools.",
    url: "https://fasttools.store/contact",
    mainEntity: {
      "@type": "Organization",
      name: "fasttools.store",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@fasttools.store",
        availableLanguage: "English",
        areaServed: "Worldwide"
      }
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://fasttools.store/contact"
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prefer email? Send us a message directly at:
                </p>
                <a href="mailto:hello@fasttools.store" className="text-primary hover:underline font-medium">
                  hello@fasttools.store
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We typically respond within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
