#!/usr/bin/env node
/**
 * Simple YAML to .env converter
 * Usage: node scripts/yaml-to-env.js production.env.yaml .env.production
 */

const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2] || 'production.env.yaml';
const outputFile = process.argv[3] || '.env.production';

if (!fs.existsSync(inputFile)) {
  console.error(`Error: ${inputFile} not found`);
  process.exit(1);
}

try {
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  const envVars = [];
  
  let inEnvironment = false;
  let indentLevel = 0;
  
  for (const line of lines) {
    // Skip comments and empty lines
    if (line.trim().startsWith('#') || line.trim() === '') {
      continue;
    }
    
    // Check if we're in the environment section
    if (line.trim().startsWith('environment:')) {
      inEnvironment = true;
      continue;
    }
    
    if (inEnvironment) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      // Check if we've left the environment section (new top-level key)
      if (!trimmed.startsWith('#') && !line.startsWith(' ') && !line.startsWith('\t')) {
        break;
      }
      
      // Parse YAML key-value pairs (simple parser)
      const match = trimmed.match(/^([^:]+):\s*"?([^"]*)"?$/);
      if (match) {
        const key = match[1].trim();
        let value = match[2].trim();
        
        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        envVars.push(`${key}=${value}`);
      }
    }
  }
  
  const envContent = envVars.join('\n') + '\n';
  fs.writeFileSync(outputFile, envContent);
  
  console.log(`✓ Converted ${inputFile} to ${outputFile}`);
  console.log(`✓ Found ${envVars.length} environment variables`);
} catch (error) {
  console.error(`Error converting YAML to .env:`, error.message);
  process.exit(1);
}

