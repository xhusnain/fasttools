"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, Users, HelpCircle, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
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
      <div className="min-h-screen bg-background">
        {/* Clean Hero Section */}
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you</p>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for contacting us! We'll get back to you soon.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="h-12 px-8"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name" 
                          className={`w-full h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 ${
                            errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                        />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com" 
                          className={`w-full h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 ${
                            errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?" 
                        className={`w-full h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 ${
                          errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                      />
                      {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more..." 
                        className={`w-full min-h-[120px] bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 resize-none ${
                          errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                        }`}
                      />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
                  <p className="text-muted-foreground">Other ways to reach us</p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                      <a 
                        href="mailto:hello@fasttools.store" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        hello@fasttools.store
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-secondary-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  {/* Help */}
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Need Help?</h3>
                      <p className="text-muted-foreground mb-3">Browse our free tools collection</p>
                      <Button asChild variant="outline" size="sm">
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
