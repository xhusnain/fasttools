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

function cleanupImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    // Regex to find imports from @/ui/...
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]@\/ui\/([^'"]+)['"]/g;

    updatedContent = updatedContent.replace(importRegex, (match, imports, moduleName) => {
        // imports is like " GButton, GButton as GButton "
        let items = imports.split(',').map(i => i.trim()).filter(i => i);
        let uniqueItems = new Set();
        let cleanedItems = [];

        items.forEach(item => {
            // Normalize "A as A" to "A"
            let cleanItem = item;
            if (item.includes(' as ')) {
                const [name, alias] = item.split(' as ').map(s => s.trim());
                if (name === alias) {
                    cleanItem = name;
                }
            }

            if (!uniqueItems.has(cleanItem)) {
                uniqueItems.add(cleanItem);
                cleanedItems.push(cleanItem);
            }
        });

        if (cleanedItems.length !== items.length || items.some(i => i.includes(' as ') && i.split(' as ')[0].trim() === i.split(' as ')[1].trim())) {
            hasChanges = true;
            return `import { ${cleanedItems.join(', ')} } from "@/ui/${moduleName}"`;
        }
        return match;
    });

    if (hasChanges) {
        console.log(`Cleaning imports in ${filePath}`);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
    }
}

searchDirs.forEach(dir => {
    const fullDir = path.join(projectRoot, dir);
    if (fs.existsSync(fullDir)) {
        const files = getAllFiles(fullDir);
        files.forEach(file => {
            cleanupImports(file);
        });
    }
});
