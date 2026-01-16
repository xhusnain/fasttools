#!/usr/bin/env node

/**
 * SEO Code Analyzer
 * 
 * Analyzes all pages in the codebase for common technical SEO issues
 * without needing to run Lighthouse (much faster)
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const OUTPUT_DIR = path.join(process.cwd(), 'seo-analysis');
const ISSUES = [];

/**
 * Discover all page files
 */
async function discoverPages(appDir = 'app') {
  const pages = [];
  const appPath = path.join(process.cwd(), appDir);

  async function scanDirectory(dir, route = '') {
    try {
      const entries = await readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const routePath = path.join(route, entry.name);

        if (entry.isDirectory()) {
          if (entry.name.startsWith('.') || entry.name === 'node_modules') {
            continue;
          }
          await scanDirectory(fullPath, routePath);
        } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
          let urlPath = routePath
            .replace(/\\/g, '/')
            .replace(/\/page\.tsx?$/, '')
            .replace(/^app\//, '/')
            || '/';

          pages.push({
            filePath: fullPath,
            route: urlPath.startsWith('/') ? urlPath : `/${urlPath}`,
          });
        }
      }
    } catch (error) {
      console.error(`Error scanning ${dir}:`, error.message);
    }
  }

  await scanDirectory(appPath);
  return pages;
}

/**
 * Analyze a single page file
 */
async function analyzePage(page) {
  const issues = [];
  let content;

  try {
    content = await readFile(page.filePath, 'utf-8');
  } catch (error) {
    issues.push({
      type: 'error',
      message: `Cannot read file: ${error.message}`,
    });
    return { page, issues };
  }

  // Check for metadata export
  if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
    issues.push({
      type: 'critical',
      message: 'Missing metadata export',
      fix: 'Add export const metadata or generateMetadata function',
    });
  }

  // Check for title
  if (!content.includes('title:') && !content.includes('generateMetadata')) {
    issues.push({
      type: 'critical',
      message: 'Missing title in metadata',
      fix: 'Add title to metadata',
    });
  }

  // Check for description
  if (!content.includes('description:') && !content.includes('generateMetadata')) {
    issues.push({
      type: 'critical',
      message: 'Missing description in metadata',
      fix: 'Add description to metadata (150-160 characters)',
    });
  }

  // Check for createMetadata usage (good pattern)
  if (content.includes('createMetadata')) {
    // Check if ogImage is provided
    if (!content.includes('ogImage') && !content.includes('ogImage:')) {
      issues.push({
        type: 'high',
        message: 'Missing custom OG image',
        fix: 'Add ogImage property to createMetadata for better social sharing',
      });
    }

    // Check for breadcrumbs
    if (!content.includes('breadcrumbs') && page.route !== '/') {
      issues.push({
        type: 'medium',
        message: 'Missing breadcrumbs',
        fix: 'Add breadcrumbs array to createMetadata for better navigation',
      });
    }

    // Check for FAQs
    if (!content.includes('faqs') && !content.includes('faqs:')) {
      issues.push({
        type: 'medium',
        message: 'Missing FAQs schema',
        fix: 'Add faqs array to createMetadata for rich snippets',
      });
    }
  }

  // Check for structured data
  if (!content.includes('schema') && !content.includes('Schema') && !content.includes('createMetadata')) {
    issues.push({
      type: 'high',
      message: 'Missing structured data',
      fix: 'Add structured data (JSON-LD) or use createMetadata with schemaOptions',
    });
  }

  // Check for images without alt text (basic check)
  const imageMatches = content.match(/<img[^>]*>/gi) || [];
  imageMatches.forEach((img, index) => {
    if (!img.includes('alt=') && !img.includes('alt =')) {
      issues.push({
        type: 'high',
        message: `Image ${index + 1} missing alt text`,
        fix: 'Add alt attribute to all images',
      });
    }
  });

  // Check for GImage usage (should have alt)
  const gImageMatches = content.match(/<GImage[^>]*>/gi) || [];
  gImageMatches.forEach((img, index) => {
    if (!img.includes('alt=') && !img.includes('alt =')) {
      issues.push({
        type: 'high',
        message: `GImage component ${index + 1} missing alt prop`,
        fix: 'Add alt prop to GImage component',
      });
    }
  });

  // Check for heading structure (h1 should exist)
  if (!content.includes('<h1') && !content.includes('h1 className') && !content.includes('GHeader')) {
    issues.push({
      type: 'medium',
      message: 'Missing H1 heading',
      fix: 'Add H1 heading to page for better SEO',
    });
  }

  // Check for canonical URL (should be handled by createMetadata, but verify)
  if (content.includes('createMetadata') && !content.includes('path:')) {
    issues.push({
      type: 'medium',
      message: 'Missing path in createMetadata',
      fix: 'Add path property to createMetadata for canonical URL',
    });
  }

  return { page, issues };
}

/**
 * Generate report
 */
function generateReport(allResults) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const timestamp = Date.now();
  const jsonPath = path.join(OUTPUT_DIR, `seo-analysis-${timestamp}.json`);
  const txtPath = path.join(OUTPUT_DIR, `seo-analysis-${timestamp}.txt`);

  // Calculate statistics
  const totalPages = allResults.length;
  const pagesWithIssues = allResults.filter(r => r.issues.length > 0);
  const criticalIssues = allResults.flatMap(r => r.issues.filter(i => i.type === 'critical'));
  const highIssues = allResults.flatMap(r => r.issues.filter(i => i.type === 'high'));
  const mediumIssues = allResults.flatMap(r => r.issues.filter(i => i.type === 'medium'));

  // Group issues by type
  const issuesByType = {};
  allResults.forEach(result => {
    result.issues.forEach(issue => {
      if (!issuesByType[issue.type]) {
        issuesByType[issue.type] = [];
      }
      issuesByType[issue.type].push({
        page: result.page.route,
        message: issue.message,
        fix: issue.fix,
      });
    });
  });

  // Generate JSON report
  const jsonReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages,
      pagesWithIssues: pagesWithIssues.length,
      pagesWithoutIssues: totalPages - pagesWithIssues.length,
      totalIssues: criticalIssues.length + highIssues.length + mediumIssues.length,
      criticalIssues: criticalIssues.length,
      highIssues: highIssues.length,
      mediumIssues: mediumIssues.length,
    },
    issuesByType,
    allResults: allResults.map(r => ({
      route: r.page.route,
      filePath: r.page.filePath,
      issues: r.issues,
      issueCount: r.issues.length,
    })),
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));

  // Generate text report
  let txtReport = `
╔══════════════════════════════════════════════════════════════╗
║              SEO CODE ANALYSIS REPORT                        ║
╚══════════════════════════════════════════════════════════════╝

Generated: ${new Date().toLocaleString()}

📊 SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Pages Analyzed: ${totalPages}
Pages With Issues: ${pagesWithIssues.length}
Pages Without Issues: ${totalPages - pagesWithIssues.length}

Total Issues Found: ${criticalIssues.length + highIssues.length + mediumIssues.length}
  🔴 Critical: ${criticalIssues.length}
  🟠 High Priority: ${highIssues.length}
  🟡 Medium Priority: ${mediumIssues.length}

🔴 CRITICAL ISSUES (${criticalIssues.length})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  if (criticalIssues.length === 0) {
    txtReport += '✅ No critical issues found!\n\n';
  } else {
    criticalIssues.slice(0, 20).forEach((issue, index) => {
      txtReport += `${index + 1}. ${issue.page || 'Unknown'}\n`;
      txtReport += `   Issue: ${issue.message}\n`;
      txtReport += `   Fix: ${issue.fix}\n\n`;
    });
    if (criticalIssues.length > 20) {
      txtReport += `... and ${criticalIssues.length - 20} more critical issues\n\n`;
    }
  }

  txtReport += `
🟠 HIGH PRIORITY ISSUES (${highIssues.length})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  if (highIssues.length === 0) {
    txtReport += '✅ No high priority issues found!\n\n';
  } else {
    highIssues.slice(0, 20).forEach((issue, index) => {
      txtReport += `${index + 1}. ${issue.page || 'Unknown'}\n`;
      txtReport += `   Issue: ${issue.message}\n`;
      txtReport += `   Fix: ${issue.fix}\n\n`;
    });
    if (highIssues.length > 20) {
      txtReport += `... and ${highIssues.length - 20} more high priority issues\n\n`;
    }
  }

  txtReport += `
📋 PAGES WITH MOST ISSUES (Top 10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  const sortedByIssues = [...allResults]
    .filter(r => r.issues.length > 0)
    .sort((a, b) => b.issues.length - a.issues.length)
    .slice(0, 10);

  sortedByIssues.forEach((result, index) => {
    txtReport += `${index + 1}. ${result.page.route}\n`;
    txtReport += `   Issues: ${result.issues.length}\n`;
    result.issues.slice(0, 3).forEach(issue => {
      txtReport += `   - [${issue.type.toUpperCase()}] ${issue.message}\n`;
    });
    if (result.issues.length > 3) {
      txtReport += `   ... and ${result.issues.length - 3} more\n`;
    }
    txtReport += `\n`;
  });

  txtReport += `
📄 Full JSON report: ${jsonPath}
`;

  fs.writeFileSync(txtPath, txtReport);
  console.log(txtReport);

  return { jsonPath, txtPath, summary: jsonReport.summary };
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 SEO Code Analysis Starting...\n');

  try {
    console.log('📋 Discovering pages...');
    const pages = await discoverPages('app');
    console.log(`✅ Found ${pages.length} pages\n`);

    console.log('🔍 Analyzing pages...\n');
    const results = [];
    
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      process.stdout.write(`\rAnalyzing: ${i + 1}/${pages.length} - ${page.route}`);
      const result = await analyzePage(page);
      results.push(result);
    }
    
    console.log('\n\n📊 Generating report...\n');
    const report = generateReport(results);

    console.log(`\n✅ SEO analysis complete!`);
    console.log(`📄 Summary: ${report.txtPath}`);
    console.log(`📄 Full Report: ${report.jsonPath}\n`);

    // Exit with error code if critical issues found
    if (report.summary.criticalIssues > 0) {
      console.log(`⚠️  Warning: ${report.summary.criticalIssues} critical issues found!`);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { discoverPages, analyzePage, generateReport };
