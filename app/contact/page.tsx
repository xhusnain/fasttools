"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, Users, HelpCircle, Send, CheckCircle } from "lucide-react"
import { useState } from "react"
import Head from "next/head"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact fasttools.store",
    description: "Contact fasttools.store for support, feedback, or questions about our free online tools.",
    url: "https://www.fasttools.store/contact",
    mainEntity: {
      "@type": "Organization",
      name: "fasttools.store",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "fasttools.store@outlook.com",
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
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.fasttools.store/contact"
        }
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | Get Help & Support | FastTools</title>
        <meta name="description" content="Contact FastTools for support, feedback, or questions about our free online tools. Get help with calculators, converters, AI tools, and more." />
        <meta name="keywords" content="contact fasttools, support, help, feedback, customer service, online tools support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fasttools.store/contact" />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        {/* Clean Hero Section */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
                We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Contact Form */}
              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">Fill out the form and we'll get back to you</p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Thank You!</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      Thanks for contacting us! We'll get back to you soon.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name" 
                          className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${
                            errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                        />
                        {errors.name && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com" 
                          className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${
                            errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                        />
                        {errors.email && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?" 
                        className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${
                          errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                      />
                      {errors.subject && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more..." 
                        className={`w-full min-h-[100px] sm:min-h-[120px] bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 resize-none text-sm ${
                          errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                      />
                      {errors.message && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-10 sm:h-12 bg-primary hover:bg-primary/90 text-white font-semibold disabled:opacity-50 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">Other ways to reach us</p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-lg">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">Send us an email anytime</p>
                      <a 
                        href="mailto:fasttools.store@outlook.com" 
                        className="text-primary hover:text-primary/80 font-medium text-xs sm:text-sm break-all"
                      >
                        fasttools.store@outlook.com
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-lg">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Response Time</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  {/* Help */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-lg">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Need Help?</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">Browse our free tools collection</p>
                      <Button asChild variant="outline" size="sm" className="h-8 sm:h-9 text-xs sm:text-sm">
                        <a href="/">Explore Tools</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
