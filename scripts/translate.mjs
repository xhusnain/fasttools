import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || "c64b9be052fb497f7b1a3121316d4d9f";
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || "***REMOVED***";
const MODEL = '@cf/meta/m2m100-1.2b';

const TARGET_LANGUAGES = ['es', 'de', 'pt-BR', 'ar', 'zh-CN'];
const SOURCE_LANGUAGE = 'en';
const MESSAGES_DIR = path.join(rootDir, 'messages');

const LANG_MAP = {
  'es': 'spanish',
  'de': 'german',
  'pt-BR': 'portuguese',
  'ar': 'arabic',
  'zh-CN': 'chinese'
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function translateText(text, targetLang) {
  const languageName = LANG_MAP[targetLang];
  const sourceLangName = 'english';

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${MODEL}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          source_lang: sourceLangName,
          target_lang: languageName,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Cloudflare API error: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    if (result.success && result.result && result.result.translated_text) {
      return result.result.translated_text;
    }
    throw new Error(`Unexpected response format: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error(`Translation error for "${text}" to ${targetLang}:`, error.message);
    throw error;
  }
}

function deepMergeKeys(obj1, obj2) {
  const result = { ...obj1 };
  for (const key in obj2) {
    if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
      result[key] = deepMergeKeys(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}

function findMissingKeys(sourceObj, targetObj, prefix = '') {
  const missing = {};
  for (const key in sourceObj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof sourceObj[key] === 'object' && sourceObj[key] !== null && !Array.isArray(sourceObj[key])) {
      const nestedMissing = findMissingKeys(
        sourceObj[key],
        targetObj[key] || {},
        fullKey
      );
      Object.assign(missing, nestedMissing);
    } else if (!targetObj.hasOwnProperty(key) || !targetObj[key]) {
      missing[fullKey] = sourceObj[key];
    }
  }
  return missing;
}

function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

async function translateFile(lang) {
  const sourcePath = path.join(MESSAGES_DIR, `${SOURCE_LANGUAGE}.json`);
  const targetPath = path.join(MESSAGES_DIR, `${lang}.json`);

  if (!fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    return;
  }

  const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
  let targetData = {};

  if (fs.existsSync(targetPath)) {
    targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  }

  const missingKeys = findMissingKeys(sourceData, targetData);

  if (Object.keys(missingKeys).length === 0) {
    console.log(`✅ ${lang} is up to date`);
    return;
  }

  console.log(`🌐 Translating ${Object.keys(missingKeys).length} missing keys for: ${lang}...`);

  for (const [keyPath, value] of Object.entries(missingKeys)) {
    try {
      console.log(`  Translating: ${keyPath}`);
      const translated = await translateText(String(value), lang);
      setNestedValue(targetData, keyPath, translated);
      
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`  ⚠️  Failed to translate ${keyPath}, keeping original`);
      setNestedValue(targetData, keyPath, value);
    }
  }

  function sortKeys(obj, reference) {
    const sorted = {};
    for (const key in reference) {
      if (obj.hasOwnProperty(key)) {
        if (typeof reference[key] === 'object' && reference[key] !== null && !Array.isArray(reference[key])) {
          sorted[key] = sortKeys(obj[key], reference[key]);
        } else {
          sorted[key] = obj[key];
        }
      }
    }
    for (const key in obj) {
      if (!reference.hasOwnProperty(key)) {
        sorted[key] = obj[key];
      }
    }
    return sorted;
  }

  const sortedData = sortKeys(targetData, sourceData);
  fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2));
  console.log(`✨ Successfully updated ${lang}.json`);
}

async function scanFiles() {
  const appDir = path.join(rootDir, 'app');
  const componentsDir = path.join(rootDir, 'components');

  console.log('📁 Scanning project files for translatable content...');

  const filesToCheck = [];
  
  function walkDir(dir, baseDir = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(baseDir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        walkDir(fullPath, relativePath);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
        filesToCheck.push(fullPath);
      }
    }
  }

  walkDir(appDir, 'app');
  walkDir(componentsDir, 'components');

  console.log(`Found ${filesToCheck.length} files to check`);
  return filesToCheck;
}

async function main() {
  ensureDir(MESSAGES_DIR);

  const sourcePath = path.join(MESSAGES_DIR, `${SOURCE_LANGUAGE}.json`);
  if (!fs.existsSync(sourcePath)) {
    console.log(`Creating initial ${SOURCE_LANGUAGE}.json file...`);
    fs.writeFileSync(sourcePath, JSON.stringify({
      common: {
        welcome: "Welcome",
        home: "Home",
        about: "About",
        contact: "Contact"
      }
    }, null, 2));
  }

  await scanFiles();

  for (const lang of TARGET_LANGUAGES) {
    await translateFile(lang);
  }

  console.log('\n✅ Translation process completed!');
}

main().catch(console.error);
