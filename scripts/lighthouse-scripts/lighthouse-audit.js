/**
 * Lighthouse Audit Script
 * Scans pages in the Next.js app and generates Lighthouse reports
 */

const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');
const config = require('./lighthouse-config');

// Configuration
const BASE_URL = process.env.LIGHTHOUSE_BASE_URL || 'http://localhost:3000';
const REPORTS_DIR = path.join(process.cwd(), 'lighthouse-reports');
const APP_DIR = path.join(process.cwd(), 'app');

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

/**
 * Discover all page routes from the Next.js app directory
 */
function discoverPages() {
  const pages = [];

  function scanDirectory(dir, basePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);

      // Skip special Next.js directories
      if (entry.name.startsWith('_') ||
        entry.name === 'api' ||
        entry.name === 'layout.tsx' ||
        entry.name === 'layout.js' ||
        entry.name === 'error.tsx' ||
        entry.name === 'error.js' ||
        entry.name === 'loading.tsx' ||
        entry.name === 'loading.js' ||
        entry.name === 'not-found.tsx' ||
        entry.name === 'not-found.js') {
        continue;
      }

      if (entry.isDirectory()) {
        // Check if this directory contains a page file
        const hasPageFile = fs.readdirSync(fullPath).some(file =>
          file === 'page.tsx' || file === 'page.js'
        );

        if (hasPageFile) {
          // Convert directory path to URL path
          const urlPath = '/' + relativePath.replace(/\\/g, '/');
          pages.push(urlPath === '/(root)' ? '/' : urlPath.replace('/(root)/', '/'));
        }

        // Recursively scan subdirectories
        scanDirectory(fullPath, relativePath);
      }
    }
  }

  scanDirectory(APP_DIR);

  // Always include root if not already present
  if (!pages.includes('/')) {
    pages.unshift('/');
  }

  return pages.sort();
}

/**
 * Run Lighthouse audit on a single URL
 */
async function auditPage(url, options = {}) {
  const { formFactor = 'mobile', savePath = null } = options;

  console.log(`\n🔍 Auditing: ${url} (${formFactor})`);

  let chrome;
  try {
    // Launch Chrome
    chrome = await chromeLauncher.launch({
      chromeFlags: config.chromeFlags,
    });

    // Select configuration
    const lighthouseConfig = formFactor === 'desktop' ? config.desktop : config.mobile;

    // Run Lighthouse
    const runnerResult = await lighthouse(url, {
      port: chrome.port,
      ...lighthouseConfig.settings,
    }, lighthouseConfig);

    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

    // Save reports
    const urlPath = new URL(url).pathname;
    const sanitizedPath = urlPath === '/' ? 'home' : urlPath.replace(/\//g, '-').slice(1);
    const baseFilename = savePath || `${sanitizedPath}-${formFactor}-${timestamp}`;

    // Save HTML report
    const htmlPath = path.join(REPORTS_DIR, `${baseFilename}.html`);
    fs.writeFileSync(htmlPath, runnerResult.report);

    // Save JSON report
    const jsonPath = path.join(REPORTS_DIR, `${baseFilename}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(runnerResult.lhr, null, 2));

    // Extract scores
    const scores = {
      performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
      accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
      seo: Math.round(runnerResult.lhr.categories.seo.score * 100),
    };

    console.log(`✅ Performance: ${scores.performance}`);
    console.log(`✅ Accessibility: ${scores.accessibility}`);
    console.log(`✅ Best Practices: ${scores.bestPractices}`);
    console.log(`✅ SEO: ${scores.seo}`);
    console.log(`📄 Reports saved to: ${baseFilename}.{html,json}`);

    return {
      url,
      scores,
      htmlPath,
      jsonPath,
      lhr: runnerResult.lhr,
    };
  } catch (error) {
    console.error(`❌ Error auditing ${url}:`, error.message);
    return {
      url,
      error: error.message,
      scores: {
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
      },
    };
  } finally {
    if (chrome) {
      await chrome.kill();
    }
  }
}

/**
 * Generate HTML summary report
 */
function generateSummaryReport(results, formFactor) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const summaryPath = path.join(REPORTS_DIR, `summary-${formFactor}-${timestamp}.html`);

  const getScoreColor = (score) => {
    if (score >= 90) return '#0cce6b';
    if (score >= 50) return '#ffa400';
    return '#ff4e42';
  };

  const getScoreClass = (score) => {
    if (score >= 90) return 'score-good';
    if (score >= 50) return 'score-average';
    return 'score-poor';
  };

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lighthouse Audit Summary - ${formFactor}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    .container {
      max-width: 1400px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }
    
    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 2rem;
      background: #f7f9fc;
    }
    
    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    
    .stat-label {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .table-container {
      padding: 2rem;
      overflow-x: auto;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e1e8ed;
    }
    
    th {
      background: #f7f9fc;
      font-weight: 600;
      color: #1a202c;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
    }
    
    tr:hover {
      background: #f7f9fc;
    }
    
    .page-url {
      font-family: 'Monaco', 'Courier New', monospace;
      color: #667eea;
      font-weight: 500;
    }
    
    .score {
      font-weight: bold;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      display: inline-block;
      min-width: 50px;
      text-align: center;
    }
    
    .score-good {
      background: #d4edda;
      color: #155724;
    }
    
    .score-average {
      background: #fff3cd;
      color: #856404;
    }
    
    .score-poor {
      background: #f8d7da;
      color: #721c24;
    }
    
    .report-link {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
    }
    
    .report-link:hover {
      text-decoration: underline;
    }
    
    footer {
      padding: 1.5rem 2rem;
      background: #f7f9fc;
      text-align: center;
      color: #666;
      font-size: 0.9rem;
    }
    
    .error {
      color: #dc3545;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🚦 Lighthouse Audit Summary</h1>
      <p class="subtitle">Generated on ${new Date().toLocaleString()} • ${formFactor.toUpperCase()} Mode</p>
    </header>
    
    <div class="stats">
      <div class="stat-card">
        <div class="stat-label">Total Pages</div>
        <div class="stat-value">${results.length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Avg Performance</div>
        <div class="stat-value">${Math.round(results.reduce((sum, r) => sum + (r.scores?.performance || 0), 0) / results.length)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Avg Accessibility</div>
        <div class="stat-value">${Math.round(results.reduce((sum, r) => sum + (r.scores?.accessibility || 0), 0) / results.length)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Avg SEO</div>
        <div class="stat-value">${Math.round(results.reduce((sum, r) => sum + (r.scores?.seo || 0), 0) / results.length)}</div>
      </div>
    </div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Performance</th>
            <th>Accessibility</th>
            <th>Best Practices</th>
            <th>SEO</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          ${results.map(result => `
            <tr>
              <td class="page-url">${result.url}</td>
              ${result.error ? `
                <td colspan="6" class="error">Error: ${result.error}</td>
              ` : `
                <td><span class="score ${getScoreClass(result.scores.performance)}">${result.scores.performance}</span></td>
                <td><span class="score ${getScoreClass(result.scores.accessibility)}">${result.scores.accessibility}</span></td>
                <td><span class="score ${getScoreClass(result.scores.bestPractices)}">${result.scores.bestPractices}</span></td>
                <td><span class="score ${getScoreClass(result.scores.seo)}">${result.scores.seo}</span></td>
                <td><a href="${path.basename(result.htmlPath)}" class="report-link" target="_blank">View Report →</a></td>
              `}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <footer>
      Generated by Lighthouse ${require('lighthouse/package.json').version} • 
      Reports saved to: lighthouse-reports/
    </footer>
  </div>
</body>
</html>
  `;

  fs.writeFileSync(summaryPath, html);
  console.log(`\n📊 Summary report saved to: ${path.basename(summaryPath)}`);

  return summaryPath;
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  // Determine form factor
  const formFactor = args.includes('--desktop') || process.env.LIGHTHOUSE_FORM_FACTOR === 'desktop'
    ? 'desktop'
    : 'mobile';

  console.log('🚀 Lighthouse Audit Tool');
  console.log(`📱 Form Factor: ${formFactor.toUpperCase()}\n`);

  if (command === '--page' || command === '-p') {
    // Single page audit
    const pagePath = args[1];
    if (!pagePath) {
      console.error('❌ Please provide a page path. Example: --page /about');
      process.exit(1);
    }

    const url = `${BASE_URL}${pagePath}`;
    await auditPage(url, { formFactor });

  } else if (command === '--all' || command === '-a' || !command) {
    // Full project audit
    console.log('🔎 Discovering pages...');
    const pages = discoverPages();
    console.log(`📄 Found ${pages.length} pages:\n${pages.map(p => `  - ${p}`).join('\n')}\n`);

    console.log('🏃 Running audits...');
    const results = [];

    for (const page of pages) {
      const url = `${BASE_URL}${page}`;
      const result = await auditPage(url, { formFactor });
      results.push(result);

      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Generate summary report
    generateSummaryReport(results, formFactor);

    console.log('\n✨ All audits completed!');
    console.log(`📁 Reports location: ${REPORTS_DIR}`);

  } else if (command === '--help' || command === '-h') {
    console.log(`
Usage: node scripts/lighthouse-scripts/lighthouse-audit.js [command] [options]

Commands:
  --all, -a              Audit all pages in the project (default)
  --page <path>, -p      Audit a single page (e.g., --page /about)
  --help, -h             Show this help message

Options:
  --desktop              Run audit in desktop mode (default: mobile)

Environment Variables:
  LIGHTHOUSE_BASE_URL    Base URL to audit (default: http://localhost:3000)
  LIGHTHOUSE_FORM_FACTOR Form factor: mobile or desktop (default: mobile)

Examples:
  node scripts/lighthouse-scripts/lighthouse-audit.js --all
  node scripts/lighthouse-scripts/lighthouse-audit.js --page /about
  node scripts/lighthouse-scripts/lighthouse-audit.js --page / --desktop
  node scripts/lighthouse-scripts/lighthouse-audit.js --all --desktop
    `);
  } else {
    console.error(`❌ Unknown command: ${command}`);
    console.log('Run with --help for usage information');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { auditPage, discoverPages, generateSummaryReport };
