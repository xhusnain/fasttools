#!/usr/bin/env node
/**
 * Lighthouse Report Analyzer
 * Analyzes Lighthouse JSON reports and displays key metrics and issues
 * 
 * Usage: node scripts/analyze-lighthouse-reports.js <report1.json> [report2.json] ...
 * Example: node scripts/analyze-lighthouse-reports.js lighthouse-reports/page-mobile.json lighthouse-reports/page-desktop.json
 */

const fs = require('fs');

function analyzeReport(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const { categories, audits } = data;

    // Get scores
    const scores = {
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories['best-practices'].score * 100),
        seo: Math.round(categories.seo.score * 100)
    };

    // Get all failed audits (score < 1)
    const issues = [];

    for (const [key, audit] of Object.entries(audits)) {
        if (audit.score !== null && audit.score < 1) {
            const displayValue = audit.displayValue || '';
            issues.push({
                id: key,
                title: audit.title,
                score: audit.score,
                displayValue: displayValue
            });
        }
    }

    // Sort by score (worst first)
    issues.sort((a, b) => a.score - b.score);

    return { scores, issues };
}

function formatReport(filePath) {
    const reportType = filePath.includes('mobile') ? 'MOBILE' : 'DESKTOP';
    const analysis = analyzeReport(filePath);

    console.log(`\n--- ${reportType} REPORT ANALYSIS ---`);
    console.log(`Scores: Perf ${analysis.scores.performance}, A11y ${analysis.scores.accessibility}, BP ${analysis.scores.bestPractices}, SEO ${analysis.scores.seo}`);
    console.log('\nTop Issues (Score < 1):');

    // Show top 20 issues
    const topIssues = analysis.issues.slice(0, 20);

    for (const issue of topIssues) {
        const scoreStr = issue.score === 0 ? '[0]' : `[${issue.score.toFixed(2)}]`;
        console.log(`- ${scoreStr} ${issue.title}`);
        if (issue.displayValue) {
            console.log(`  Value: ${issue.displayValue}`);
        }
    }

    if (analysis.issues.length > 20) {
        console.log(`\n... and ${analysis.issues.length - 20} more issues`);
    }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
    console.error('❌ Usage: node scripts/analyze-lighthouse-reports.js <report1.json> [report2.json] ...');
    console.error('   Example: node scripts/analyze-lighthouse-reports.js lighthouse-reports/page-mobile.json');
    process.exit(1);
}

for (const reportPath of args) {
    if (!fs.existsSync(reportPath)) {
        console.error(`❌ File not found: ${reportPath}`);
        continue;
    }

    try {
        formatReport(reportPath);
    } catch (error) {
        console.error(`❌ Error analyzing ${reportPath}:`, error.message);
    }
}

console.log('');
