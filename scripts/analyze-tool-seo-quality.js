#!/usr/bin/env node

/**
 * Tool SEO Quality Analyzer
 * 
 * Analyzes all tool pages against the YouTube Channel Checker standard
 * (which ranks on first page of Google) to identify content quality gaps
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

const OUTPUT_DIR = path.join(process.cwd(), 'seo-quality-analysis');
const BENCHMARK_PAGE = 'app/social-media-tools/channel-checker/page.tsx';

// Benchmark metrics from the top-ranking page
const BENCHMARK = {
  minContentLength: 10000, // ~1000 lines of content
  minFaqCount: 25,
  minSections: 10,
  hasVideoSchema: true,
  hasImages: true,
  hasTables: true,
  hasExamples: true,
  hasStepByStep: true,
  hasUseCases: true,
  hasRelatedTools: true,
  hasBreadcrumbs: true,
  hasRichAboutTool: true, // React component with multiple articles
};

/**
 * Discover all tool pages
 */
async function discoverToolPages() {
  const pages = [];
  const toolDirs = [
    'app/social-media-tools',
    'app/calculator',
    'app/finance-tools',
    'app/image-tools',
    'app/pdf-tools',
    'app/seo-tools',
    'app/dev-tools',
    'app/converters',
    'app/ai-tools',
    'app/ad-tools',
    'app/fun-tools',
    'app/festivals',
  ];

  for (const dir of toolDirs) {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) continue;

    try {
      await scanDirectory(fullPath, dir.replace('app/', '/'), pages);
    } catch (error) {
      console.error(`Error scanning ${dir}:`, error.message);
    }
  }

  return pages;
}

async function scanDirectory(dir, route, pages) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(route, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') {
        continue;
      }
      await scanDirectory(fullPath, routePath, pages);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      pages.push({
        filePath: fullPath,
        route: routePath.replace(/\\/g, '/'),
      });
    }
  }
}

/**
 * Analyze a single tool page
 */
async function analyzeToolPage(page) {
  const metrics = {
    route: page.route,
    filePath: page.filePath,
    contentLength: 0,
    faqCount: 0,
    sectionCount: 0,
    hasVideoSchema: false,
    hasImages: false,
    hasTables: false,
    hasExamples: false,
    hasStepByStep: false,
    hasUseCases: false,
    hasRelatedTools: false,
    hasBreadcrumbs: false,
    hasRichAboutTool: false,
    aboutToolType: 'none', // 'string', 'react', 'none'
    issues: [],
    score: 0,
  };

  try {
    const content = await readFile(page.filePath, 'utf-8');
    metrics.contentLength = content.length;

    // Count FAQs
    const faqMatches = content.match(/faqs:\s*\[/gi) || [];
    if (faqMatches.length > 0) {
      // Try to count FAQ items
      const faqArrayMatch = content.match(/faqs:\s*\[([^\]]+)\]/s);
      if (faqArrayMatch) {
        const faqContent = faqArrayMatch[1];
        metrics.faqCount = (faqContent.match(/question:/g) || []).length;
      }
    }

    // Count sections (H2 headings in aboutTool)
    const h2Matches = content.match(/<h2[^>]*>/gi) || [];
    metrics.sectionCount = h2Matches.length;

    // Check for video schema
    metrics.hasVideoSchema = /video:\s*\{/.test(content) || /VideoObject/.test(content);

    // Check for images
    metrics.hasImages = /<GImage|\.png|\.jpg|\.jpeg|\.webp|heroImage/.test(content);

    // Check for tables
    metrics.hasTables = /<GTable|<\/table>|itemListElement/.test(content);

    // Check for examples
    metrics.hasExamples = /example|Example|EXAMPLE/.test(content);

    // Check for step-by-step guides
    metrics.hasStepByStep = /howToSteps|step-by-step|Step-by-Step|step by step/i.test(content);

    // Check for use cases
    metrics.hasUseCases = /useCases|use cases|Use Cases/.test(content);

    // Check for related tools
    metrics.hasRelatedTools = /relatedTools|related tools|Related Tools/.test(content);

    // Check for breadcrumbs
    metrics.hasBreadcrumbs = /breadcrumbs:\s*\[/.test(content);

    // Check aboutTool type and richness
    if (/aboutTool:\s*\(/.test(content)) {
      metrics.aboutToolType = 'react';
      metrics.hasRichAboutTool = true;
    } else if (/aboutTool:\s*`/.test(content) || /aboutTool:\s*"/.test(content)) {
      metrics.aboutToolType = 'string';
      const aboutToolMatch = content.match(/aboutTool:\s*[`"]([^`"]+)[`"]/s);
      if (aboutToolMatch && aboutToolMatch[1].length > 500) {
        metrics.hasRichAboutTool = true;
      }
    }

    // Calculate score (0-100)
    let score = 0;
    const maxScore = 100;
    const pointsPerMetric = maxScore / Object.keys(BENCHMARK).length;

    if (metrics.contentLength >= BENCHMARK.minContentLength) score += pointsPerMetric;
    if (metrics.faqCount >= BENCHMARK.minFaqCount) score += pointsPerMetric;
    if (metrics.sectionCount >= BENCHMARK.minSections) score += pointsPerMetric;
    if (metrics.hasVideoSchema === BENCHMARK.hasVideoSchema) score += pointsPerMetric;
    if (metrics.hasImages === BENCHMARK.hasImages) score += pointsPerMetric;
    if (metrics.hasTables === BENCHMARK.hasTables) score += pointsPerMetric;
    if (metrics.hasExamples === BENCHMARK.hasExamples) score += pointsPerMetric;
    if (metrics.hasStepByStep === BENCHMARK.hasStepByStep) score += pointsPerMetric;
    if (metrics.hasUseCases === BENCHMARK.hasUseCases) score += pointsPerMetric;
    if (metrics.hasRelatedTools === BENCHMARK.hasRelatedTools) score += pointsPerMetric;
    if (metrics.hasBreadcrumbs === BENCHMARK.hasBreadcrumbs) score += pointsPerMetric;
    if (metrics.hasRichAboutTool === BENCHMARK.hasRichAboutTool) score += pointsPerMetric;

    metrics.score = Math.round(score);

    // Identify issues
    if (metrics.contentLength < BENCHMARK.minContentLength) {
      metrics.issues.push(`Content too short: ${metrics.contentLength} chars (need ${BENCHMARK.minContentLength}+)`);
    }
    if (metrics.faqCount < BENCHMARK.minFaqCount) {
      metrics.issues.push(`Too few FAQs: ${metrics.faqCount} (need ${BENCHMARK.minFaqCount}+)`);
    }
    if (metrics.sectionCount < BENCHMARK.minSections) {
      metrics.issues.push(`Too few sections: ${metrics.sectionCount} (need ${BENCHMARK.minSections}+)`);
    }
    if (!metrics.hasVideoSchema && BENCHMARK.hasVideoSchema) {
      metrics.issues.push('Missing video schema');
    }
    if (!metrics.hasImages && BENCHMARK.hasImages) {
      metrics.issues.push('Missing images');
    }
    if (!metrics.hasTables && BENCHMARK.hasTables) {
      metrics.issues.push('Missing tables');
    }
    if (!metrics.hasExamples && BENCHMARK.hasExamples) {
      metrics.issues.push('Missing examples');
    }
    if (!metrics.hasStepByStep && BENCHMARK.hasStepByStep) {
      metrics.issues.push('Missing step-by-step guide');
    }
    if (!metrics.hasUseCases && BENCHMARK.hasUseCases) {
      metrics.issues.push('Missing use cases');
    }
    if (!metrics.hasRelatedTools && BENCHMARK.hasRelatedTools) {
      metrics.issues.push('Missing related tools');
    }
    if (!metrics.hasBreadcrumbs && BENCHMARK.hasBreadcrumbs) {
      metrics.issues.push('Missing breadcrumbs');
    }
    if (!metrics.hasRichAboutTool && BENCHMARK.hasRichAboutTool) {
      metrics.issues.push('Missing rich aboutTool content (need React component with multiple articles)');
    }

  } catch (error) {
    metrics.issues.push(`Error reading file: ${error.message}`);
  }

  return metrics;
}

/**
 * Generate report
 */
function generateReport(allMetrics) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const timestamp = Date.now();
  const jsonPath = path.join(OUTPUT_DIR, `tool-seo-quality-${timestamp}.json`);
  const txtPath = path.join(OUTPUT_DIR, `tool-seo-quality-${timestamp}.txt`);

  // Sort by score
  const sorted = [...allMetrics].sort((a, b) => b.score - a.score);

  // Calculate statistics
  const totalPages = allMetrics.length;
  const avgScore = Math.round(allMetrics.reduce((sum, m) => sum + m.score, 0) / totalPages);
  const excellent = allMetrics.filter(m => m.score >= 80).length;
  const good = allMetrics.filter(m => m.score >= 60 && m.score < 80).length;
  const needsWork = allMetrics.filter(m => m.score < 60).length;

  // Generate JSON report
  const jsonReport = {
    timestamp: new Date().toISOString(),
    benchmark: BENCHMARK,
    summary: {
      totalPages,
      avgScore,
      excellent,
      good,
      needsWork,
    },
    pages: sorted,
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2));

  // Generate text report
  let txtReport = `
╔══════════════════════════════════════════════════════════════╗
║         TOOL PAGE SEO QUALITY ANALYSIS REPORT                ║
║     (Compared to YouTube Channel Checker - First Page Rank)   ║
╚══════════════════════════════════════════════════════════════╝

Generated: ${new Date().toLocaleString()}

📊 SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Tool Pages Analyzed: ${totalPages}
Average SEO Quality Score: ${avgScore}/100

Score Distribution:
  🟢 Excellent (80-100): ${excellent} pages
  🟡 Good (60-79): ${good} pages
  🔴 Needs Work (0-59): ${needsWork} pages

BENCHMARK STANDARDS (from YouTube Channel Checker):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Content Length: ${BENCHMARK.minContentLength.toLocaleString()}+ characters
✓ FAQs: ${BENCHMARK.minFaqCount}+ questions
✓ Sections: ${BENCHMARK.minSections}+ H2 sections
✓ Video Schema: ${BENCHMARK.hasVideoSchema ? 'Yes' : 'No'}
✓ Images: ${BENCHMARK.hasImages ? 'Yes' : 'No'}
✓ Tables: ${BENCHMARK.hasTables ? 'Yes' : 'No'}
✓ Examples: ${BENCHMARK.hasExamples ? 'Yes' : 'No'}
✓ Step-by-Step: ${BENCHMARK.hasStepByStep ? 'Yes' : 'No'}
✓ Use Cases: ${BENCHMARK.hasUseCases ? 'Yes' : 'No'}
✓ Related Tools: ${BENCHMARK.hasRelatedTools ? 'Yes' : 'No'}
✓ Breadcrumbs: ${BENCHMARK.hasBreadcrumbs ? 'Yes' : 'No'}
✓ Rich AboutTool: ${BENCHMARK.hasRichAboutTool ? 'Yes (React component)' : 'No'}

🏆 TOP PERFORMING PAGES (Score 80+)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  sorted.filter(m => m.score >= 80).slice(0, 10).forEach((metric, index) => {
    txtReport += `${index + 1}. ${metric.route} - Score: ${metric.score}/100\n`;
    txtReport += `   Content: ${metric.contentLength.toLocaleString()} chars | FAQs: ${metric.faqCount} | Sections: ${metric.sectionCount}\n\n`;
  });

  txtReport += `
🔴 PAGES NEEDING MOST IMPROVEMENT (Score < 60)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  sorted.filter(m => m.score < 60).slice(0, 20).forEach((metric, index) => {
    txtReport += `${index + 1}. ${metric.route} - Score: ${metric.score}/100\n`;
    txtReport += `   Content: ${metric.contentLength.toLocaleString()} chars | FAQs: ${metric.faqCount} | Sections: ${metric.sectionCount}\n`;
    txtReport += `   Issues:\n`;
    metric.issues.slice(0, 5).forEach(issue => {
      txtReport += `     - ${issue}\n`;
    });
    txtReport += `\n`;
  });

  txtReport += `
📋 ALL PAGES (Sorted by Score)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  sorted.forEach((metric, index) => {
    const emoji = metric.score >= 80 ? '🟢' : metric.score >= 60 ? '🟡' : '🔴';
    txtReport += `${emoji} ${(index + 1).toString().padStart(3, ' ')}. ${metric.route.padEnd(50)} Score: ${metric.score.toString().padStart(3, ' ')}/100\n`;
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
  console.log('🔍 Tool SEO Quality Analysis Starting...\n');
  console.log(`📊 Benchmark: ${BENCHMARK_PAGE}\n`);

  try {
    console.log('📋 Discovering tool pages...');
    const pages = await discoverToolPages();
    console.log(`✅ Found ${pages.length} tool pages\n`);

    console.log('🔍 Analyzing pages against benchmark...\n');
    const results = [];
    
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      process.stdout.write(`\rAnalyzing: ${i + 1}/${pages.length} - ${page.route}`);
      const result = await analyzeToolPage(page);
      results.push(result);
    }
    
    console.log('\n\n📊 Generating report...\n');
    const report = generateReport(results);

    console.log(`\n✅ Analysis complete!`);
    console.log(`📄 Summary: ${report.txtPath}`);
    console.log(`📄 Full Report: ${report.jsonPath}\n`);

    console.log(`\n💡 Next Steps:`);
    console.log(`   1. Review pages with score < 60`);
    console.log(`   2. Add rich content, FAQs, and sections to match benchmark`);
    console.log(`   3. Ensure all pages have breadcrumbs, images, and structured data\n`);

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { discoverToolPages, analyzeToolPage, generateReport };
