#!/usr/bin/env node

/**
 * Batch SEO Fix Script
 * 
 * Automatically adds breadcrumbs and optimizes metadata for pages
 * that are missing them based on the SEO analysis
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Pages that need breadcrumbs added
const PAGES_NEEDING_BREADCRUMBS = {
  '/blog': { label: 'Blog', href: '/blog' },
  '/blog/archive': [
    { label: 'Blog', href: '/blog' },
    { label: 'Archive', href: '/blog/archive' }
  ],
  '/blog/category/[slug]': [
    { label: 'Blog', href: '/blog' },
    { label: 'Category', href: '/blog/category' }
  ],
  '/guides': { label: 'Guides', href: '/guides' },
  '/ai-tools': { label: 'AI Tools', href: '/ai-tools' },
  '/calculator': { label: 'Calculator', href: '/calculator' },
  '/converters': { label: 'Converters', href: '/converters' },
  '/dev-tools': { label: 'Dev Tools', href: '/dev-tools' },
  '/finance-tools': { label: 'Finance Tools', href: '/finance-tools' },
  '/image-tools': { label: 'Image Tools', href: '/image-tools' },
  '/pdf-tools': { label: 'PDF Tools', href: '/pdf-tools' },
  '/seo-tools': { label: 'SEO Tools', href: '/seo-tools' },
  '/social-media-tools': { label: 'Social Media Tools', href: '/social-media-tools' },
  '/fun-tools': { label: 'Fun Tools', href: '/fun-tools' },
  '/downloaders': { label: 'Downloaders', href: '/downloaders' },
  '/products': { label: 'Products', href: '/products' },
  '/api-docs': { label: 'API Docs', href: '/api-docs' },
  '/festivals': { label: 'Festivals', href: '/festivals' },
  '/live-tv': { label: 'Live TV', href: '/live-tv' },
  '/my-info': { label: 'My Info', href: '/my-info' },
  '/dmca': { label: 'DMCA', href: '/dmca' },
  '/about': { label: 'About', href: '/about' },
  '/contact': { label: 'Contact', href: '/contact' },
  '/faq': { label: 'FAQ', href: '/faq' },
  '/privacy-policy': { label: 'Privacy Policy', href: '/privacy-policy' },
  '/terms': { label: 'Terms', href: '/terms' },
  '/cookie-preferences': { label: 'Cookie Preferences', href: '/cookie-preferences' },
};

// Category to breadcrumb mapping for tool pages
const CATEGORY_BREADCRUMBS = {
  'calculator': [
    { label: 'Calculator', href: '/calculator' }
  ],
  'ai-tools': [
    { label: 'AI Tools', href: '/ai-tools' }
  ],
  'converters': [
    { label: 'Converters', href: '/converters' }
  ],
  'dev-tools': [
    { label: 'Dev Tools', href: '/dev-tools' }
  ],
  'finance-tools': [
    { label: 'Finance Tools', href: '/finance-tools' }
  ],
  'image-tools': [
    { label: 'Image Tools', href: '/image-tools' }
  ],
  'pdf-tools': [
    { label: 'PDF Tools', href: '/pdf-tools' }
  ],
  'seo-tools': [
    { label: 'SEO Tools', href: '/seo-tools' }
  ],
  'social-media-tools': [
    { label: 'Social Media Tools', href: '/social-media-tools' }
  ],
  'fun-tools': [
    { label: 'Fun Tools', href: '/fun-tools' }
  ],
  'ad-tools': [
    { label: 'Ad Tools', href: '/ad-tools' }
  ],
  'festivals': [
    { label: 'Festivals', href: '/festivals' }
  ],
};

/**
 * Generate breadcrumbs for a tool page based on its path
 */
function generateBreadcrumbsForTool(route) {
  const parts = route.split('/').filter(Boolean);
  
  if (parts.length === 0 || parts[0] === '') {
    return [];
  }

  const category = parts[0];
  const toolName = parts[parts.length - 1];

  if (CATEGORY_BREADCRUMBS[category]) {
    return [
      ...CATEGORY_BREADCRUMBS[category],
      { label: toolName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), href: route }
    ];
  }

  return [{ label: toolName, href: route }];
}

/**
 * Add breadcrumbs to a page file
 */
async function addBreadcrumbsToPage(filePath, breadcrumbs) {
  try {
    let content = await readFile(filePath, 'utf-8');
    
    // Check if breadcrumbs already exist
    if (content.includes('breadcrumbs:') || content.includes('breadcrumbs =')) {
      return { success: false, reason: 'Breadcrumbs already exist' };
    }

    // Find createMetadata call
    const metadataMatch = content.match(/createMetadata\s*\(\s*\{([^}]+)\}\s*\)/s);
    if (!metadataMatch) {
      return { success: false, reason: 'createMetadata not found' };
    }

    // Convert breadcrumbs to string
    const breadcrumbsStr = Array.isArray(breadcrumbs) 
      ? JSON.stringify(breadcrumbs, null, 2).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n')
      : JSON.stringify([breadcrumbs], null, 2).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n');

    // Add breadcrumbs before the closing brace
    const beforeBrace = metadataMatch[1].trim();
    const newMetadataContent = beforeBrace + (beforeBrace.endsWith(',') ? '' : ',') + '\n  breadcrumbs: ' + breadcrumbsStr;

    content = content.replace(
      /createMetadata\s*\(\s*\{([^}]+)\}\s*\)/s,
      `createMetadata({\n  ${newMetadataContent}\n})`
    );

    await writeFile(filePath, content, 'utf-8');
    return { success: true };
  } catch (error) {
    return { success: false, reason: error.message };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🔧 Batch SEO Fix Starting...\n');

  const results = {
    fixed: [],
    skipped: [],
    errors: []
  };

  // Process category pages
  for (const [route, breadcrumbs] of Object.entries(PAGES_NEEDING_BREADCRUMBS)) {
    const filePath = path.join(process.cwd(), 'app', route.replace(/^\/+/, ''), 'page.tsx');
    
    // Handle dynamic routes
    const actualPath = route.includes('[') 
      ? filePath.replace(/\[slug\]/g, '[slug]').replace(/\[country\]/g, '[country]').replace(/\[channelId\]/g, '[channelId]')
      : filePath;

    if (fs.existsSync(actualPath)) {
      console.log(`Processing: ${route}`);
      const result = await addBreadcrumbsToPage(actualPath, breadcrumbs);
      
      if (result.success) {
        results.fixed.push(route);
        console.log(`  ✅ Added breadcrumbs`);
      } else {
        results.skipped.push({ route, reason: result.reason });
        console.log(`  ⏭️  Skipped: ${result.reason}`);
      }
    } else {
      results.errors.push({ route, reason: 'File not found' });
      console.log(`  ❌ File not found: ${actualPath}`);
    }
  }

  console.log('\n📊 Summary:');
  console.log(`✅ Fixed: ${results.fixed.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  console.log(`❌ Errors: ${results.errors.length}`);

  if (results.fixed.length > 0) {
    console.log('\n✅ Fixed pages:');
    results.fixed.forEach(route => console.log(`  - ${route}`));
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { addBreadcrumbsToPage, generateBreadcrumbsForTool };
