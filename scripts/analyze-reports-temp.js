const fs = require('fs');
const path = require('path');

const mobileReportPath = process.argv[2];
const desktopReportPath = process.argv[3];

function analyzeReport(filePath, type) {
    console.log(`\n--- ${type.toUpperCase()} REPORT ANALYSIS ---`);
    try {
        const report = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const categories = report.categories;
        console.log(`Scores: Perf ${categories.performance.score * 100}, A11y ${categories.accessibility.score * 100}, BP ${categories['best-practices'].score * 100}, SEO ${categories.seo.score * 100}`);

        console.log('\nTop Issues (Score < 1):');
        const audits = report.audits;
        const failedAudits = Object.values(audits)
            .filter(audit => audit.score !== null && audit.score < 1)
            .sort((a, b) => (a.score || 0) - (b.score || 0));

        failedAudits.forEach(audit => {
            console.log(`- [${audit.score}] ${audit.title}`);
            // console.log(`  ${audit.description}`);
            if (audit.displayValue) console.log(`  Value: ${audit.displayValue}`);
        });

    } catch (e) {
        console.error(`Error reading ${type} report:`, e.message);
    }
}

analyzeReport(mobileReportPath, 'mobile');
analyzeReport(desktopReportPath, 'desktop');
