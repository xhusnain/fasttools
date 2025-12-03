const fs = require('fs');
const path = require('path');

const uiDir = '/Users/husnainbabar/WebstormProjects/fasttools-client/ui';

const filesToUpdate = [
    'gaccordion.tsx',
    'galert.tsx',
    'gbadge.tsx',
    'gcheckbox.tsx',
    'ginput.tsx',
    'glabel.tsx',
    'gloader.tsx',
    'gprogress.tsx',
    'gselect.tsx',
    'gslider.tsx',
    'gswitch.tsx',
    'gtabs.tsx',
    'gtextarea.tsx',
    'gtoast.tsx',
    'gtooltip.tsx'
];

function updateFile(filename) {
    const filePath = path.join(uiDir, filename);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Simple heuristic: 
    // 1. Find "function ComponentName" or "const ComponentName"
    // 2. Replace with "function GComponentName" or "const GComponentName"
    // 3. Update export statement

    // Map of base names to G names
    const baseName = filename.replace(/^g|\.tsx$/g, ''); // e.g. "accordion"
    // Capitalize first letter
    const pascalName = baseName.charAt(0).toUpperCase() + baseName.slice(1); // "Accordion"
    const gName = 'G' + pascalName; // "GAccordion"

    // Replace definitions
    // function Accordion -> function GAccordion
    content = content.replace(new RegExp(`function ${pascalName}`, 'g'), `function ${gName}`);
    // const Accordion -> const GAccordion
    content = content.replace(new RegExp(`const ${pascalName}`, 'g'), `const ${gName}`);

    // Replace exports
    // export { Accordion } -> export { GAccordion }
    content = content.replace(new RegExp(`export { ${pascalName}`, 'g'), `export { ${gName}`);
    // export { Accordion, ... } -> export { GAccordion, ... }
    content = content.replace(new RegExp(`export {\n  ${pascalName}`, 'g'), `export {\n  ${gName}`);

    // Also handle sub-components like AccordionItem -> GAccordionItem
    // Regex to find any component starting with pascalName
    // e.g. AccordionItem -> GAccordionItem
    const subComponentRegex = new RegExp(`\\b${pascalName}([A-Z][a-zA-Z0-9]*)`, 'g');
    content = content.replace(subComponentRegex, `${gName}$1`);

    // Also handle displayName
    content = content.replace(new RegExp(`${pascalName}.displayName`, 'g'), `${gName}.displayName`);

    console.log(`Updating ${filename}`);
    fs.writeFileSync(filePath, content, 'utf8');
}

filesToUpdate.forEach(file => {
    updateFile(file);
});
