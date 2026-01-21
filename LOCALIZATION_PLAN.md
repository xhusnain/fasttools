# Localization Implementation Plan

## Overview
This document outlines the step-by-step plan for implementing full localization across FastTools. The translation script (`npm run translate`) only handles `messages/*.json` files. Pages and components require manual updates.

## Current Status

### ✅ Completed
- Basic navigation translations (navbar, common UI elements)
- Language switcher implementation
- Locale routing configuration (`as-needed` prefix strategy)
- SEO metadata with hreflang tags
- Multilingual sitemap with alternates

### 📝 Translation Files
- **Location**: `messages/*.json`
- **Languages**: en, es, de, pt-BR, ar, zh-CN
- **Run translation**: `npm run translate`

## Manual Localization Plan

### Phase 1: Core Pages (Priority: High)

#### 1. Home Page (`app/[locale]/page.tsx`)
**Status**: ⚠️ Needs Translation Keys
- [ ] Extract hardcoded text to `messages/en.json`:
  - Hero section: "Build faster with", "premium tools."
  - Subtitle: "Access 1000+ free online tools..."
  - Search placeholder: "What tool are you looking for today?"
  - Popular tools section
- [ ] Add translation keys to JSON files
- [ ] Update component to use `useTranslations()`
- [ ] Run translation script
- [ ] Test all languages

**Example:**
```json
// messages/en.json
{
  "home": {
    "heroTitle": "Build faster with",
    "heroSubtitle": "premium tools.",
    "description": "Access 1000+ free online tools...",
    "searchPlaceholder": "What tool are you looking for today?",
    "popularTools": "Popular Tools"
  }
}
```

#### 2. Tool Pages
**Status**: ⚠️ Needs Translation Keys

**For each tool category page:**
- [ ] Create translation namespace (e.g., `tools.aiTools`, `tools.calculators`)
- [ ] Extract tool names, descriptions, button labels
- [ ] Update page components to use translations
- [ ] Run translation script

**Files to update:**
- `app/[locale]/ai-tools/page.tsx`
- `app/[locale]/calculators/page.tsx`
- `app/[locale]/converters/page.tsx`
- `app/[locale]/seo-tools/page.tsx`
- ... (all tool category pages)

#### 3. Individual Tool Pages
**Status**: ⚠️ Needs Translation Keys

**For each tool:**
- [ ] Extract tool-specific text:
  - Page title
  - Instructions
  - Button labels
  - Placeholder text
  - Error messages
  - Result labels
- [ ] Create translation keys
- [ ] Update component
- [ ] Run translation script

**Example structure:**
```json
{
  "tools": {
    "imageBackgroundRemover": {
      "title": "Image Background Remover",
      "description": "Remove backgrounds from images...",
      "uploadButton": "Upload Image",
      "downloadButton": "Download",
      "resetButton": "Reset"
    }
  }
}
```

### Phase 2: Blog & Guides (Priority: Medium)

#### 4. Blog Pages
**Status**: ⚠️ Needs Translation Keys

- [ ] Blog listing page:
  - Page title
  - "Read More" buttons
  - Category filters
  - Search functionality
- [ ] Blog post pages:
  - Meta descriptions (can keep English for SEO)
  - UI elements (share buttons, reading time, etc.)
  - Note: Blog content itself may stay English-only

**Files:**
- `app/[locale]/blog/page.tsx`
- `app/[locale]/blog/[slug]/page.tsx`
- `components/blog/*.tsx`

#### 5. Guide Pages
**Status**: ⚠️ Needs Translation Keys

- [ ] Guide listing page
- [ ] Individual guide pages
- [ ] Navigation breadcrumbs
- [ ] Table of contents

**Files:**
- `app/[locale]/guides/page.tsx`
- `app/[locale]/guides/[slug]/page.tsx`
- `components/guide/*.tsx`

### Phase 3: Utility Pages (Priority: Low)

#### 6. Static Pages
**Status**: ⚠️ Needs Translation Keys

- [ ] About page
- [ ] Contact page
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] FAQ page

**Files:**
- `app/[locale]/about/page.tsx`
- `app/[locale]/contact/page.tsx`
- `app/[locale]/privacy-policy/page.tsx`
- `app/[locale]/terms/page.tsx`
- `app/[locale]/faq/page.tsx`

### Phase 4: Components (Priority: Medium)

#### 7. Common Components
**Status**: ⚠️ Needs Translation Keys

Update components to use `useTranslations()`:
- [ ] Footer
- [ ] Cookie Consent
- [ ] Welcome Popup
- [ ] Error pages (404, 500)
- [ ] Loading states
- [ ] Empty states
- [ ] Form validation messages

**Files:**
- `components/common/footer.tsx`
- `components/common/cookie-consent.tsx`
- `components/common/welcome-popup.tsx`
- `app/[locale]/not-found.tsx`

## Implementation Steps for Each Page/Component

### Step-by-Step Process:

1. **Identify translatable text**
   - Find all hardcoded strings
   - Identify user-facing text (skip SEO metadata, schema)

2. **Add to messages/en.json**
   ```json
   {
     "pageName": {
       "section": {
         "key": "English text"
       }
     }
   }
   ```

3. **Update component**
   ```tsx
   'use client'; // If needed
   import { useTranslations } from 'next-intl';
   
   export function MyComponent() {
     const t = useTranslations('pageName.section');
     
     return <h1>{t('key')}</h1>;
   }
   ```

4. **For Server Components**
   ```tsx
   import { useTranslations } from 'next-intl/server';
   
   export async function MyServerComponent() {
     const t = await useTranslations('pageName.section');
     
     return <h1>{t('key')}</h1>;
   }
   ```

5. **Run translation**
   ```bash
   npm run translate
   ```

6. **Test**
   - Switch languages in browser
   - Verify all text is translated
   - Check RTL for Arabic

## Quick Reference

### Translation Hook Usage

**Client Components:**
```tsx
'use client';
import { useTranslations } from 'next-intl';

const t = useTranslations('namespace');
const text = t('key');
```

**Server Components:**
```tsx
import { useTranslations } from 'next-intl/server';

const t = await useTranslations('namespace');
const text = t('key');
```

**With Interpolation:**
```tsx
t('welcome', { name: 'User' }); // "Welcome, User"
```

### Translation File Structure

```json
{
  "common": {
    "navigation": "...",
    "actions": "..."
  },
  "home": {
    "hero": "...",
    "tools": "..."
  },
  "tools": {
    "toolName": {
      "title": "...",
      "description": "..."
    }
  }
}
```

## Notes

- **SEO Elements**: Keep in English (metadata, schema.org, canonical URLs)
- **Technical Terms**: May keep in English (API, JSON, etc.)
- **Brand Names**: Keep as-is (FastTools, ClickFortify, etc.)
- **URLs**: Keep English slugs (better for SEO)

## Priority Order

1. ✅ Navigation & Common UI (DONE)
2. 🔄 Home Page (IN PROGRESS)
3. ⏳ Popular Tools Pages
4. ⏳ Blog & Guides UI
5. ⏳ Static Pages
6. ⏳ Common Components

## Testing Checklist

For each translated page:
- [ ] Text displays correctly in all languages
- [ ] Arabic RTL layout works
- [ ] URLs update correctly when switching languages
- [ ] No broken translations (missing keys)
- [ ] SEO metadata is preserved (English)
- [ ] Schema.org JSON-LD is preserved (English)
