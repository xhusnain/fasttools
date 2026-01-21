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

// Rate limiting and quota management
const MAX_RETRIES = 3;
const INITIAL_DELAY = 500; // ms between requests
const MAX_DELAY = 30000; // Max delay for exponential backoff
const RATE_LIMIT_DELAY = 60000; // 1 minute delay on 429 errors
let totalRequests = 0;
let rateLimitHit = false;

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

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateText(text, targetLang, retryCount = 0) {
  const languageName = LANG_MAP[targetLang];
  const sourceLangName = 'english';

  try {
    // Check if we've hit rate limits
    if (rateLimitHit) {
      throw new Error('Rate limit exceeded. Please try again later or upgrade your Cloudflare plan.');
    }

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

    totalRequests++;

    // Handle rate limiting (429) and quota errors
    if (response.status === 429) {
      rateLimitHit = true;
      const retryAfter = response.headers.get('Retry-After') || '60';
      console.error(`\n⚠️  Rate limit hit! (HTTP 429)`);
      console.error(`   Retry-After: ${retryAfter} seconds`);
      console.error(`   Total requests made: ${totalRequests}`);
      console.error(`   Stopping translation to avoid further quota usage.`);
      throw new Error(`RATE_LIMIT_EXCEEDED: Cloudflare rate limit reached. Please try again in ${retryAfter} seconds or upgrade your plan.`);
    }

    // Handle other quota/limit errors
    if (response.status === 402 || response.status === 403) {
      rateLimitHit = true;
      console.error(`\n⚠️  Quota exceeded or access denied! (HTTP ${response.status})`);
      console.error(`   Total requests made: ${totalRequests}`);
      console.error(`   Please check your Cloudflare account limits or upgrade your plan.`);
      throw new Error(`QUOTA_EXCEEDED: Cloudflare quota limit reached. Please upgrade your plan.`);
    }

    if (!response.ok) {
      const errorText = await response.text();
      const error = new Error(`Cloudflare API error: ${response.status} ${errorText}`);
      error.status = response.status;
      throw error;
    }

    const result = await response.json();
    
    // Check for API errors in response
    if (result.success === false) {
      const errorMsg = result.errors?.[0]?.message || 'Unknown Cloudflare API error';
      if (errorMsg.includes('quota') || errorMsg.includes('limit') || errorMsg.includes('rate')) {
        rateLimitHit = true;
        console.error(`\n⚠️  Quota/Limit error: ${errorMsg}`);
        console.error(`   Total requests made: ${totalRequests}`);
        throw new Error(`QUOTA_EXCEEDED: ${errorMsg}`);
      }
      throw new Error(`Cloudflare API error: ${errorMsg}`);
    }

    if (result.result && result.result.translated_text) {
      return result.result.translated_text;
    }
    
    throw new Error(`Unexpected response format: ${JSON.stringify(result)}`);
  } catch (error) {
    // Retry logic for non-fatal errors
    if (retryCount < MAX_RETRIES && !rateLimitHit && error.status !== 429 && error.status !== 402 && error.status !== 403) {
      const delay = Math.min(INITIAL_DELAY * Math.pow(2, retryCount), MAX_DELAY);
      console.log(`  ⚠️  Retrying in ${delay}ms... (attempt ${retryCount + 1}/${MAX_RETRIES})`);
      await sleep(delay);
      return translateText(text, targetLang, retryCount + 1);
    }
    
    // Stop if we hit rate limits or quota
    if (error.message.includes('RATE_LIMIT_EXCEEDED') || error.message.includes('QUOTA_EXCEEDED')) {
      throw error; // Don't retry, stop immediately
    }
    
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

  const missingKeysCount = Object.keys(missingKeys).length;
  console.log(`🌐 Translating ${missingKeysCount} missing keys for: ${lang}...`);
  console.log(`   Total requests so far: ${totalRequests}`);

  for (const [keyPath, value] of Object.entries(missingKeys)) {
    try {
      // Check if we've hit rate limits before making request
      if (rateLimitHit) {
        console.error(`\n⚠️  Stopping translation for ${lang} due to rate limit/quota.`);
        console.error(`   Progress saved: ${Object.keys(targetData).length} keys translated.`);
        break;
      }

      console.log(`  Translating: ${keyPath} (${totalRequests + 1} total requests)`);
      const translated = await translateText(String(value), lang);
      setNestedValue(targetData, keyPath, translated);
      
      // Delay between requests to avoid hitting rate limits
      await sleep(INITIAL_DELAY);
    } catch (error) {
      // Stop immediately on rate limit/quota errors
      if (error.message.includes('RATE_LIMIT_EXCEEDED') || error.message.includes('QUOTA_EXCEEDED')) {
        console.error(`\n❌ ${error.message}`);
        console.error(`   Stopping translation process to prevent further quota usage.`);
        console.error(`   Please wait before running the script again or upgrade your Cloudflare plan.`);
        
        // Save progress before exiting
        const sortedData = sortKeys(targetData, sourceData);
        fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2));
        throw error;
      }
      
      console.error(`  ⚠️  Failed to translate ${keyPath}, keeping original`);
      setNestedValue(targetData, keyPath, value);
    }
  }

  // Only save if we didn't hit rate limits
  if (!rateLimitHit) {
    const sortedData = sortKeys(targetData, sourceData);
    fs.writeFileSync(targetPath, JSON.stringify(sortedData, null, 2));
    console.log(`✨ Successfully updated ${lang}.json`);
  }
}


async function main() {
  console.log('🚀 Starting translation process...');
  console.log(`📊 Cloudflare Workers AI Limits Monitor Active`);
  console.log(`   Model: ${MODEL}`);
  console.log(`   Languages: ${TARGET_LANGUAGES.join(', ')}`);
  console.log(`   Only translating: messages/${SOURCE_LANGUAGE}.json → messages/*.json\n`);

  ensureDir(MESSAGES_DIR);

  const sourcePath = path.join(MESSAGES_DIR, `${SOURCE_LANGUAGE}.json`);
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Source file not found: ${sourcePath}`);
    console.error(`   Please create messages/${SOURCE_LANGUAGE}.json first.`);
    process.exit(1);
  }

  try {
    for (const lang of TARGET_LANGUAGES) {
      if (rateLimitHit) {
        console.log(`\n⚠️  Skipping remaining languages due to rate limit/quota.`);
        break;
      }
      await translateFile(lang);
    }

    if (!rateLimitHit) {
      console.log('\n✅ Translation process completed!');
      console.log(`📊 Total API requests: ${totalRequests}`);
      console.log(`\n💡 Note: This script only translates messages/*.json files.`);
      console.log(`   Pages and components need manual translation updates.`);
    } else {
      console.log('\n⚠️  Translation process stopped due to rate limits/quota.');
      console.log(`📊 Total API requests made: ${totalRequests}`);
      console.log(`💡 Tip: Wait some time before running again or upgrade your Cloudflare plan.`);
      process.exit(1);
    }
  } catch (error) {
    if (error.message.includes('RATE_LIMIT_EXCEEDED') || error.message.includes('QUOTA_EXCEEDED')) {
      console.error(`\n❌ ${error.message}`);
      process.exit(1);
    }
    throw error;
  }
}

main().catch(console.error);
