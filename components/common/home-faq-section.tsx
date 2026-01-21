'use client';

import { GHeader } from "@/ui/gheader"
import { useTranslations } from 'next-intl';

const faqNumbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

export function HomeFAQSection() {
  const t = useTranslations('faq');
  
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 md:mb-12">
          <GHeader
            title={t('title')}
            description={t('description')}
            titleSize="large"
            descriptionSize="medium"
            color="green"
            as="h2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2">
          {faqNumbers.map((number) => (
            <div
              key={number}
              className="group relative bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden p-6 sm:p-8"
            >
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none">
                <span className="text-9xl font-black text-primary">{number}</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 pr-4">
                  {t(`items.${number}.question`)}
                </h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  {t(`items.${number}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
