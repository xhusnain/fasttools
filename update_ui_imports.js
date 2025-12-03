const fs = require('fs');
const path = require('path');

const projectRoot = '/Users/husnainbabar/WebstormProjects/fasttools-client';
const searchDirs = ['app', 'components', 'lib', 'ui'];

const componentMap = {
    // Global components (old) -> New UI components
    '@/components/globalcomponents/gbutton': { path: '@/ui/gbutton', names: { 'GButton': 'GButton' } },
    '@/components/globalcomponents/gcard': { path: '@/ui/gtool-card', names: { 'GCard': 'GToolCard' } }, // Renamed!
    '@/components/globalcomponents/gheader': { path: '@/ui/gheader', names: { 'GHeader': 'GHeader' } },
    '@/components/globalcomponents/gmessage': { path: '@/ui/gmessage', names: { 'GMessage': 'GMessage' } },

    // Shadcn components (old) -> New UI components
    '@/components/ui/accordion': { path: '@/ui/gaccordion', names: { 'Accordion': 'GAccordion', 'AccordionItem': 'GAccordionItem', 'AccordionTrigger': 'GAccordionTrigger', 'AccordionContent': 'GAccordionContent' } },
    '@/components/ui/alert': { path: '@/ui/galert', names: { 'Alert': 'GAlert', 'AlertTitle': 'GAlertTitle', 'AlertDescription': 'GAlertDescription' } },
    '@/components/ui/badge': { path: '@/ui/gbadge', names: { 'Badge': 'GBadge' } },
    '@/components/ui/button': { path: '@/ui/gbutton', names: { 'Button': 'GButton', 'buttonVariants': 'buttonVariants' } }, // Merged
    '@/components/ui/card': { path: '@/ui/gcard', names: { 'Card': 'GCard', 'CardHeader': 'GCardHeader', 'CardFooter': 'GCardFooter', 'CardTitle': 'GCardTitle', 'CardDescription': 'GCardDescription', 'CardContent': 'GCardContent' } },
    '@/components/ui/checkbox': { path: '@/ui/gcheckbox', names: { 'Checkbox': 'GCheckbox' } },
    '@/components/ui/input': { path: '@/ui/ginput', names: { 'Input': 'GInput' } },
    '@/components/ui/label': { path: '@/ui/glabel', names: { 'Label': 'GLabel' } },
    '@/components/ui/loader': { path: '@/ui/gloader', names: { 'Loader': 'GLoader' } },
    '@/components/ui/progress': { path: '@/ui/gprogress', names: { 'Progress': 'GProgress' } },
    '@/components/ui/select': { path: '@/ui/gselect', names: { 'Select': 'GSelect', 'SelectGroup': 'GSelectGroup', 'SelectValue': 'GSelectValue', 'SelectTrigger': 'GSelectTrigger', 'SelectContent': 'GSelectContent', 'SelectLabel': 'GSelectLabel', 'SelectItem': 'GSelectItem', 'SelectSeparator': 'GSelectSeparator' } },
    '@/components/ui/slider': { path: '@/ui/gslider', names: { 'Slider': 'GSlider' } },
    '@/components/ui/switch': { path: '@/ui/gswitch', names: { 'Switch': 'GSwitch' } },
    '@/components/ui/tabs': { path: '@/ui/gtabs', names: { 'Tabs': 'GTabs', 'TabsList': 'GTabsList', 'TabsTrigger': 'GTabsTrigger', 'TabsContent': 'GTabsContent' } },
    '@/components/ui/textarea': { path: '@/ui/gtextarea', names: { 'Textarea': 'GTextarea' } },
    '@/components/ui/toast': { path: '@/ui/gtoast', names: { 'Toast': 'GToast', 'ToastProvider': 'GToastProvider', 'ToastViewport': 'GToastViewport', 'ToastTitle': 'GToastTitle', 'ToastDescription': 'GToastDescription', 'ToastClose': 'GToastClose', 'ToastAction': 'GToastAction' } },
    '@/components/ui/tooltip': { path: '@/ui/gtooltip', names: { 'Tooltip': 'GTooltip', 'TooltipTrigger': 'GTooltipTrigger', 'TooltipContent': 'GTooltipContent', 'TooltipProvider': 'GTooltipProvider' } },
};

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

function updateImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;

    for (const [oldPath, { path: newPath, names }] of Object.entries(componentMap)) {
        // Regex to match import statement
        // import { A, B as C } from "oldPath"
        // We need to parse the import names and rename them in the code too.

        const importRegex = new RegExp(`import\\s+{([^}]+)}\\s+from\\s+['"]${oldPath}['"]`, 'g');

        updatedContent = updatedContent.replace(importRegex, (match, imports) => {
            hasChanges = true;

            // imports is like " Button, buttonVariants "
            let newImports = imports.split(',').map(i => i.trim()).filter(i => i);
            let renamedImports = [];

            newImports.forEach(imp => {
                // Handle "A as B"
                let name = imp;
                let alias = null;
                if (imp.includes(' as ')) {
                    [name, alias] = imp.split(' as ').map(s => s.trim());
                }

                if (names[name]) {
                    const newName = names[name];
                    // If we have an alias, we keep it but map from newName
                    // e.g. import { Button as MyBtn } -> import { GButton as MyBtn }
                    if (alias) {
                        renamedImports.push(`${newName} as ${alias}`);
                    } else {
                        // If no alias, we need to rename usages in the file!
                        // But wait, if we change "import { Button }" to "import { GButton }",
                        // we must replace all "Button" usages with "GButton" in the file.
                        // This is complex to do safely with regex.

                        // Strategy: Use "as" to alias it back if we want to minimize code changes?
                        // No, the goal is to use GButton everywhere.

                        // So we import { GButton } and then replace usages.
                        renamedImports.push(newName);

                        // Replace usages in the rest of the file content (excluding this import line which we are replacing)
                        // We will do a second pass replacement for usages.
                    }
                } else {
                    // Unknown export, keep as is (might be error if it doesn't exist in new file)
                    renamedImports.push(name);
                }
            });

            return `import { ${renamedImports.join(', ')} } from "${newPath}"`;
        });
    }

    // Second pass: Replace usages of renamed components
    // We need to be careful not to replace substrings.
    // e.g. "Button" -> "GButton"

    for (const [oldPath, { names }] of Object.entries(componentMap)) {
        for (const [oldName, newName] of Object.entries(names)) {
            if (oldName === newName) continue;

            // Only replace if the file actually imported this component from the old path.
            // We can check if the file content WAS importing it.
            // But we already replaced the import statement.

            // Let's assume if we find "Button" as a whole word, and we know we updated imports, we should update usage.
            // But wait, what if there is a local variable named Button?
            // Ideally we should have tracked which files imported what.

            // Simplified approach:
            // If the file content contains the NEW import path (meaning we updated it),
            // then we replace usages.

            // Check if we updated this specific import path
            // This logic is a bit flawed because we are doing it in one go.

            // Let's rely on the fact that we just updated the import line.
            // But we can't easily access that context here.

            // Let's do a global replace for the component names, BUT only if the file imports them.
            // We can check if the file contains `from "@/ui/..."` (the new path).

            // Actually, `updatedContent` already has the new import paths.
            // So if `updatedContent` includes `from "@/ui/gbutton"`, we can safely replace `Button` with `GButton`.

            // Exception: `buttonVariants` -> `buttonVariants` (no change)

            const newImportPath = componentMap[oldPath].path;
            if (updatedContent.includes(`"${newImportPath}"`) || updatedContent.includes(`'${newImportPath}'`)) {
                // Replace usages
                // \bButton\b -> GButton
                // <Button -> <GButton
                // </Button> -> </GButton>

                const usageRegex = new RegExp(`\\b${oldName}\\b`, 'g');
                updatedContent = updatedContent.replace(usageRegex, newName);
            }
        }
    }

    if (hasChanges) {
        console.log(`Updating imports in ${filePath}`);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
    }
}

searchDirs.forEach(dir => {
    const fullDir = path.join(projectRoot, dir);
    if (fs.existsSync(fullDir)) {
        const files = getAllFiles(fullDir);
        files.forEach(file => {
            updateImports(file);
        });
    }
});
