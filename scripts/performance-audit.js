#!/usr/bin/env node

/**
 * Performance Audit Script
 * 
 * This script discovers all pages in the Next.js app directory,
 * runs Lighthouse performance audits on each page, and generates
 * a comprehensive performance report.
 * 
 * Usage:
 *   npm run performance:audit
 *   npm run performance:audit -- --url http://localhost:3000
 *   npm run performance:audit -- --url https://www.fasttools.store
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.join(process.cwd(), 'performance-reports');
const CONCURRENT_REQUESTS = 3; // Limit concurrent Lighthouse runs

// Parse command line arguments
const args = process.argv.slice(2);
const urlArg = args.find(arg => arg.startsWith('--url='));
const baseUrl = urlArg ? urlArg.split('=')[1] : BASE_URL;

console.log(`🚀 Performance Audit Starting...`);
console.log(`📡 Base URL: ${baseUrl}`);
console.log(`📁 Output Directory: ${OUTPUT_DIR}\n`);

/**
 * Discover all page.tsx files in the app directory
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
          // Skip node_modules, .next, etc.
          if (entry.name.startsWith('.') || entry.name === 'node_modules') {
            continue;
          }
          await scanDirectory(fullPath, routePath);
        } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
          // Convert file path to URL path
          let urlPath = routePath
            .replace(/\\/g, '/') // Windows path fix
            .replace(/\/page\.tsx?$/, '') // Remove page.tsx
            .replace(/\[([^\]]+)\]/g, ':$1') // Convert [param] to :param for dynamic routes
            .replace(/^app\//, '/') // Remove app/ prefix
            || '/'; // Root path

          // Handle dynamic routes - we'll need to generate actual URLs
          if (urlPath.includes(':')) {
            // For dynamic routes, we'll skip them or handle specially
            // For now, we'll generate sample URLs
            urlPath = generateDynamicRouteUrl(urlPath);
          }

          // Ensure URL path starts with /
          const cleanUrlPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
          
          pages.push({
            filePath: fullPath,
            route: cleanUrlPath,
            url: `${baseUrl}${cleanUrlPath}`,
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
 * Generate sample URLs for dynamic routes
 */
function generateDynamicRouteUrl(route) {
  // Handle common dynamic route patterns
  if (route.includes('/blog/:')) {
    return '/blog/example-post'; // Sample blog post
  }
  if (route.includes('/guides/:')) {
    return '/guides/example-guide'; // Sample guide
  }
  if (route.includes('/live-tv/:')) {
    return '/live-tv'; // Skip complex dynamic routes for now
  }
  // Default: return root
  return '/';
}

/**
 * Run Lighthouse audit on a single URL
 */
async function runLighthouse(url, options = {}) {
  try {
    // Dynamic import for lighthouse
    const lighthouse = (await import('lighthouse')).default;
    const chromeLauncher = await import('chrome-launcher');

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
    options.port = chrome.port;

    const result = await lighthouse(url, {
      ...options,
      onlyCategories: ['performance'],
      output: 'json',
    });

    await chrome.kill();

    // Extract Core Web Vitals and key metrics
    const metrics = result.lhr.audits;
    const categories = result.lhr.categories;

    return {
      url,
      score: Math.round(categories.performance.score * 100),
      metrics: {
        // Core Web Vitals
        lcp: {
          value: metrics['largest-contentful-paint']?.numericValue,
          score: metrics['largest-contentful-paint']?.score,
          displayValue: metrics['largest-contentful-paint']?.displayValue,
        },
        fid: {
          value: metrics['max-potential-fid']?.numericValue,
          score: metrics['max-potential-fid']?.score,
          displayValue: metrics['max-potential-fid']?.displayValue,
        },
        cls: {
          value: metrics['cumulative-layout-shift']?.numericValue,
          score: metrics['cumulative-layout-shift']?.score,
          displayValue: metrics['cumulative-layout-shift']?.displayValue,
        },
        // Other important metrics
        fcp: {
          value: metrics['first-contentful-paint']?.numericValue,
          displayValue: metrics['first-contentful-paint']?.displayValue,
        },
        tti: {
          value: metrics['interactive']?.numericValue,
          displayValue: metrics['interactive']?.displayValue,
        },
        tbt: {
          value: metrics['total-blocking-time']?.numericValue,
          displayValue: metrics['total-blocking-time']?.displayValue,
        },
        speedIndex: {
          value: metrics['speed-index']?.numericValue,
          displayValue: metrics['speed-index']?.displayValue,
        },
      },
      opportunities: result.lhr.audits['render-blocking-resources']?.details?.items?.slice(0, 5) || [],
    };
  } catch (error) {
    console.error(`❌ Error auditing ${url}:`, error.message);
    return {
      url,
      error: error.message,
      score: 0,
    };
  }
}

/**
 * Run audits with concurrency limit
 */
async function runAuditsWithLimit(pages, limit = CONCURRENT_REQUESTS) {
  const results = [];
  const queue = [...pages];
  let active = 0;

  return new Promise((resolve) => {
    function processNext() {
      if (queue.length === 0 && active === 0) {
        resolve(results);
        return;
      }

      if (active >= limit || queue.length === 0) {
        return;
      }

      const page = queue.shift();
      active++;

      console.log(`🔍 Auditing: ${page.url} (${pages.length - queue.length}/${pages.length})`);

      runLighthouse(page.url)
        .then((result) => {
          results.push({ ...result, route: page.route });
          active--;
          processNext();
        })
        .catch((error) => {
          results.push({
            url: page.url,
            route: page.route,
            error: error.message,
            score: 0,
          });
          active--;
          processNext();
        });
    }

    // Start processing
    for (let i = 0; i < limit; i++) {
      processNext();
    }
  });
}

/**
 * Generate performance report
 */
function generateReport(results) {
  const timestamp = new Date().toISOString();
  const reportPath = path.join(OUTPUT_DIR, `performance-report-${Date.now()}.json`);
  const summaryPath = path.join(OUTPUT_DIR, `performance-summary-${Date.now()}.txt`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Calculate statistics
  const successful = results.filter(r => !r.error);
  const failed = results.filter(r => r.error);
  const scores = successful.map(r => r.score).filter(s => s !== undefined);
  
  const stats = {
    total: results.length,
    successful: successful.length,
    failed: failed.length,
    averageScore: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
    minScore: scores.length > 0 ? Math.min(...scores) : 0,
    maxScore: scores.length > 0 ? Math.max(...scores) : 0,
  };

  // Core Web Vitals analysis
  const lcpScores = successful
    .map(r => r.metrics?.lcp?.value)
    .filter(v => v !== undefined && v !== null);
  const clsScores = successful
    .map(r => r.metrics?.cls?.value)
    .filter(v => v !== undefined && v !== null);
  const fidScores = successful
    .map(r => r.metrics?.fid?.value)
    .filter(v => v !== undefined && v !== null);

  const cwvStats = {
    lcp: {
      average: lcpScores.length > 0 ? Math.round(lcpScores.reduce((a, b) => a + b, 0) / lcpScores.length) : 0,
      good: lcpScores.filter(v => v < 2500).length,
      needsImprovement: lcpScores.filter(v => v >= 2500 && v < 4000).length,
      poor: lcpScores.filter(v => v >= 4000).length,
    },
    cls: {
      average: clsScores.length > 0 ? (clsScores.reduce((a, b) => a + b, 0) / clsScores.length).toFixed(3) : 0,
      good: clsScores.filter(v => v < 0.1).length,
      needsImprovement: clsScores.filter(v => v >= 0.1 && v < 0.25).length,
      poor: clsScores.filter(v => v >= 0.25).length,
    },
    fid: {
      average: fidScores.length > 0 ? Math.round(fidScores.reduce((a, b) => a + b, 0) / fidScores.length) : 0,
      good: fidScores.filter(v => v < 100).length,
      needsImprovement: fidScores.filter(v => v >= 100 && v < 300).length,
      poor: fidScores.filter(v => v >= 300).length,
    },
  };

  // Sort results by score (worst first)
  const sortedResults = [...results].sort((a, b) => (a.score || 0) - (b.score || 0));

  // Generate JSON report
  const jsonReport = {
    timestamp,
    baseUrl,
    stats,
    coreWebVitals: cwvStats,
    results: sortedResults,
  };

  fs.writeFileSync(reportPath, JSON.stringify(jsonReport, null, 2));

  // Generate text summary
  let summary = `
╔══════════════════════════════════════════════════════════════╗
║           PERFORMANCE AUDIT REPORT                           ║
╚══════════════════════════════════════════════════════════════╝

Generated: ${new Date(timestamp).toLocaleString()}
Base URL: ${baseUrl}

📊 OVERALL STATISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Pages: ${stats.total}
Successful Audits: ${stats.successful}
Failed Audits: ${stats.failed}
Average Performance Score: ${stats.averageScore}/100
Min Score: ${stats.minScore}/100
Max Score: ${stats.maxScore}/100

🎯 CORE WEB VITALS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LCP (Largest Contentful Paint):
  Average: ${cwvStats.lcp.average}ms
  Good (< 2.5s): ${cwvStats.lcp.good} pages
  Needs Improvement (2.5s - 4.0s): ${cwvStats.lcp.needsImprovement} pages
  Poor (> 4.0s): ${cwvStats.lcp.poor} pages

CLS (Cumulative Layout Shift):
  Average: ${cwvStats.cls.average}
  Good (< 0.1): ${cwvStats.cls.good} pages
  Needs Improvement (0.1 - 0.25): ${cwvStats.cls.needsImprovement} pages
  Poor (> 0.25): ${cwvStats.cls.poor} pages

FID/INP (First Input Delay):
  Average: ${cwvStats.fid.average}ms
  Good (< 100ms): ${cwvStats.fid.good} pages
  Needs Improvement (100ms - 300ms): ${cwvStats.fid.needsImprovement} pages
  Poor (> 300ms): ${cwvStats.fid.poor} pages

🔴 WORST PERFORMING PAGES (Bottom 10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  sortedResults.slice(0, 10).forEach((result, index) => {
    const lcp = result.metrics?.lcp?.displayValue || 'N/A';
    const cls = result.metrics?.cls?.displayValue || 'N/A';
    const fid = result.metrics?.fid?.displayValue || 'N/A';
    summary += `${index + 1}. ${result.route || result.url}\n`;
    summary += `   Score: ${result.score || 0}/100 | LCP: ${lcp} | CLS: ${cls} | FID: ${fid}\n`;
    if (result.error) {
      summary += `   Error: ${result.error}\n`;
    }
    summary += `\n`;
  });

  summary += `
✅ BEST PERFORMING PAGES (Top 10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  [...sortedResults].reverse().slice(0, 10).forEach((result, index) => {
    const lcp = result.metrics?.lcp?.displayValue || 'N/A';
    const cls = result.metrics?.cls?.displayValue || 'N/A';
    const fid = result.metrics?.fid?.displayValue || 'N/A';
    summary += `${index + 1}. ${result.route || result.url}\n`;
    summary += `   Score: ${result.score || 0}/100 | LCP: ${lcp} | CLS: ${cls} | FID: ${fid}\n\n`;
  });

  summary += `
📄 Full JSON report saved to: ${reportPath}
`;

  fs.writeFileSync(summaryPath, summary);
  console.log(summary);

  return { reportPath, summaryPath, stats, cwvStats };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('📋 Discovering pages...\n');
    const pages = await discoverPages('app');
    console.log(`✅ Found ${pages.length} pages\n`);

    if (pages.length === 0) {
      console.log('❌ No pages found. Make sure the app directory exists.');
      process.exit(1);
    }

    console.log('🚀 Starting performance audits...\n');
    const results = await runAuditsWithLimit(pages, CONCURRENT_REQUESTS);

    console.log('\n📊 Generating report...\n');
    const report = generateReport(results);

    console.log(`\n✅ Performance audit complete!`);
    console.log(`📄 Summary: ${report.summaryPath}`);
    console.log(`📄 Full Report: ${report.reportPath}\n`);

    // Exit with error code if average score is too low
    if (report.stats.averageScore < 50) {
      console.log('⚠️  Warning: Average performance score is below 50!');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { discoverPages, runLighthouse, generateReport };
