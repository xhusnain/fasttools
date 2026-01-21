"use client"

import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GTextarea } from "@/ui/gtextarea"
import { GAccordion, GAccordionContent, GAccordionItem, GAccordionTrigger } from "@/ui/gaccordion"

import { Mail, MessageSquare, Clock, Users, HelpCircle, Send, CheckCircle, ChevronDown } from "lucide-react"
import { useState } from "react"
import type { ContactFormData, ContactFormErrors } from "@/types"
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired')
    }
    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailInvalid')
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('subjectRequired')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    name: "Contact FastTools",
    description: "Get in touch with FastTools for support, feedback, or any questions about our free online tools. We are here to help you with our calculators, converters, and AI-powered utilities.",
    url: "https://www.fasttools.store/contact",
    mainEntity: {
      "@type": "Organization",
      name: "FastTools",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@fasttools.store",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        {/* Clean Hero Section */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                {t('pageTitle')} <span className="text-primary">{t('pageTitleUs')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{t('sendMessageTitle')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('sendMessageDesc')}</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-12 bg-card border border-border rounded-lg">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{t('thankYou')}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
                      {t('thankYouMessage')}
                    </p>
                    <GButton
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                    >
                      {t('sendAnother')}
                    </GButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <GLabel htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                          {t('name')} <span className="text-destructive">*</span>
                        </GLabel>
                        <GInput
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t('namePlaceholder')}
                          className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                            }`}
                        />
                        {errors.name && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <GLabel htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                          {t('email')} <span className="text-destructive">*</span>
                        </GLabel>
                        <GInput
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t('emailPlaceholder')}
                          className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${errors.email ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                            }`}
                        />
                        {errors.email && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <GLabel htmlFor="subject" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        {t('subject')} <span className="text-destructive">*</span>
                      </GLabel>
                      <GInput
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t('subjectPlaceholder')}
                        className={`w-full h-10 sm:h-12 bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 text-sm ${errors.subject ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                      />
                      {errors.subject && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <GLabel htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                        {t('message')} <span className="text-destructive">*</span>
                      </GLabel>
                      <GTextarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('messagePlaceholder')}
                        className={`w-full min-h-[120px] sm:min-h-[150px] bg-card border text-foreground placeholder:text-muted-foreground focus:ring-1 resize-none text-sm ${errors.message ? 'border-destructive focus:border-destructive focus:ring-destructive' : 'border-border focus:border-primary focus:ring-primary'
                          }`}
                      />
                      {errors.message && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>

                    <GButton type="submit" className="w-full" disabled={isSubmitting} isLoading={isSubmitting}>
                      {isSubmitting ? t('sending') : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('sendMessage')}
                        </>
                      )}
                    </GButton>
                  </form>
                )}
              </div>

              {/* Contact Information & FAQ */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{t('getInTouch')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('getInTouchDesc')}</p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-card border border-border rounded-lg">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('emailUsTitle')}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">{t('emailUsDesc')}</p>
                      <a
                        href="mailto:support@fasttools.store"
                        className="text-primary hover:text-primary/80 font-medium text-xs sm:text-sm break-all"
                      >
                        support@fasttools.store
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-card border border-border rounded-lg">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t('responseTimeTitle')}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{t('responseTimeDesc')}</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-10">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">{t('faqTitle')}</h3>
                  <GAccordion type="single" collapsible className="w-full">
                    <GAccordionItem value="item-0">
                      <GAccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                        {t('faq1Q')}
                      </GAccordionTrigger>
                      <GAccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t('faq1A')}
                      </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-1">
                      <GAccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                        {t('faq2Q')}
                      </GAccordionTrigger>
                      <GAccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t('faq2A')}
                      </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-2">
                      <GAccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                        {t('faq3Q')}
                      </GAccordionTrigger>
                      <GAccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t('faq3A')}
                      </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-3">
                      <GAccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                        {t('faq4Q')}
                      </GAccordionTrigger>
                      <GAccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t('faq4A')}
                      </GAccordionContent>
                    </GAccordionItem>
                  </GAccordion>
                </div>
              </div>

              {/* Additional Static Content for SEO */}
              <div className="lg:col-span-5 mt-12 grid md:grid-cols-2 gap-8 pt-12 border-t border-border">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{t('whyContactTitle')}</h2>
                  <div className="prose prose-sm text-muted-foreground">
                    <p className="mb-4">
                      {t('whyContactP1')}
                    </p>
                    <p>
                      {t('whyContactP2')}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{t('businessTitle')}</h2>
                  <div className="prose prose-sm text-muted-foreground">
                    <p className="mb-4">
                      {t('businessP1')}
                    </p>
                    <p>
                      {t('businessP2')}
                    </p>
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
