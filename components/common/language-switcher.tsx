'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useTransition } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }
    
    // Get current pathname from window (includes full path)
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : pathname || '/';
    
    // Extract path without locale prefix (pathname from next-intl already does this, but window.location.pathname includes it)
    let pathWithoutLocale = pathname || '/';
    if (typeof window !== 'undefined') {
      // Remove locale prefix from window pathname if present
      const localeMatch = currentPath.match(/^\/(es|de|pt-BR|ar|zh-CN)(\/.*)?$/);
      if (localeMatch) {
        pathWithoutLocale = localeMatch[2] || '/';
      } else {
        pathWithoutLocale = currentPath;
      }
    }
    
    // For 'as-needed', English has no prefix, others have prefix
    let newPath: string;
    if (newLocale === 'en') {
      // English: no prefix
      newPath = pathWithoutLocale || '/';
    } else {
      // Other languages: add locale prefix
      newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    }
    
    // Preserve search params if any
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    
    // Use full page navigation to ensure language change takes effect
    window.location.href = `${newPath}${search}${hash}`;
  };

  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="Change language"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          className="min-w-[180px] bg-popover border border-border rounded-lg shadow-lg p-1 z-50"
        >
          {languages.map((lang) => (
            <DropdownMenuPrimitive.Item
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer outline-none",
                "hover:bg-accent focus:bg-accent transition-colors",
                locale === lang.code && "bg-accent font-medium"
              )}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1">{lang.name}</span>
              {locale === lang.code && (
                <span className="text-xs">✓</span>
              )}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
