const fs = require('fs');
const path = require('path');

const projectRoot = '/Users/husnainbabar/WebstormProjects/fasttools-client';
const searchDirs = ['app', 'components', 'lib', 'ui'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

function consolidateImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Map of module path -> Set of imported items
    const importsMap = new Map();

    // Regex to find all UI imports
    // import { ... } from "@/ui/..."
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"](@\/ui\/[^'"]+)['"]/g;

    let match;
    let hasUIImports = false;

    // First pass: Collect all UI imports
    while ((match = importRegex.exec(content)) !== null) {
        hasUIImports = true;
        const [fullMatch, imports, modulePath] = match;

        if (!importsMap.has(modulePath)) {
            importsMap.set(modulePath, new Set());
        }

        const items = imports.split(',').map(i => i.trim()).filter(i => i);
        items.forEach(item => importsMap.get(modulePath).add(item));
    }

    if (!hasUIImports) return;

    // Second pass: Remove all UI imports
    let newContent = content.replace(importRegex, '');

    // Third pass: Add back consolidated imports
    // We want to add them back at the top, but where?
    // Ideally, we replace the *first* occurrence of any UI import with the consolidated block,
    // and remove the rest.

    // Let's try a different approach.
    // We will replace the imports in-place, but we need to be careful about order.
    // Actually, simply removing all and adding them back at the top (after "use client" or other imports) is risky.

    // Better approach:
    // 1. Find the first UI import line.
    // 2. Generate the consolidated import block.
    // 3. Replace the first UI import line with the block.
    // 4. Remove all other UI import lines.

    // Reset regex
    importRegex.lastIndex = 0;
    const firstMatch = importRegex.exec(content);

    if (!firstMatch) return; // Should not happen if hasUIImports is true

    const firstMatchIndex = firstMatch.index;
    const firstMatchLength = firstMatch[0].length;

    // Generate consolidated block
    let consolidatedBlock = '';
    for (const [modulePath, items] of importsMap.entries()) {
        const sortedItems = Array.from(items).sort().join(', ');
        consolidatedBlock += `import { ${sortedItems} } from "${modulePath}"\n`;
    }

    // Remove the trailing newline from the block to fit nicely
    consolidatedBlock = consolidatedBlock.trim();

    // Construct new content
    // Part before first match
    let partBefore = content.substring(0, firstMatchIndex);

    // Part after first match
    let partAfter = content.substring(firstMatchIndex + firstMatchLength);

    // Remove subsequent UI imports from partAfter
    // We need a regex that matches ONLY duplicate UI imports, but we are consolidating ALL of them.
    // So we should remove ALL UI imports from partAfter.

    const remainingImportsRegex = /import\s+{([^}]+)}\s+from\s+['"](@\/ui\/[^'"]+)['"]\s*/g;
    partAfter = partAfter.replace(remainingImportsRegex, '');

    // Combine
    const finalContent = partBefore + consolidatedBlock + '\n' + partAfter;

    // Check if we actually changed anything (other than whitespace/ordering)
    // This simple check might be enough
    if (finalContent.length !== content.length || finalContent !== content) {
        console.log(`Consolidating imports in ${filePath}`);
        fs.writeFileSync(filePath, finalContent, 'utf8');
    }
}

searchDirs.forEach(dir => {
    const fullDir = path.join(projectRoot, dir);
    if (fs.existsSync(fullDir)) {
        const files = getAllFiles(fullDir);
        files.forEach(file => {
            consolidateImports(file);
        });
    }
});
