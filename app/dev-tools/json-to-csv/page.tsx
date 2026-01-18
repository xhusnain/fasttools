import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const JSONToCSV = dynamic(
  () => import("@/components/dev-tools/json-to-csv").then(mod => mod.JSONToCSV),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON to CSV Converter",
  description: "Convert JSON to CSV online free with instant download. Transform JSON data to Excel-ready CSV format. Supports nested JSON & arrays. Best for developers.",
  metaTitle: "JSON to CSV Converter - Convert JSON to CSV Online (Free)",
  metaDescription: "Free online JSON to CSV Converter. Convert JSON files instantly. Fast, accurate, and no signup required.",
  path: "/dev-tools/json-to-csv",

  header: {
    title: "JSON to CSV Converter - Convert JSON to CSV Online Free",
    description: "Convert JSON to CSV online free with instant download. Transform JSON data, arrays, and nested objects into Excel-ready CSV format. Supports custom delimiters, UTF-8 encoding, and handles complex JSON structures. Best converter for developers and data analysts.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
  ],

  content: {
    overview: "Convert JSON to CSV online free with our instant converter tool. Transform JSON data, arrays, and nested objects into Excel-ready CSV format. Supports custom delimiters, header controls, and handles complex JSON structures. Perfect for developers, data analysts, and anyone working with structured data.",

    howToSteps: [
      "Paste your JSON data or upload a JSON file",
      "Choose your preferred delimiter (comma or semicolon)",
      "Toggle header row inclusion based on your needs",
      "Preview the CSV output in real-time",
      "Download the CSV file or copy to clipboard"
    ],

    features: [
      "Delimiter Options: Choose between comma (,) or semicolon (;) separators for regional compatibility",
      "Header Row Control: Include or exclude column headers based on your requirements",
      "Nested JSON Support: Automatically flattens nested objects into CSV columns",
      "Array Handling: Converts JSON arrays to properly formatted CSV rows",
      "Instant Download: One-click download to save CSV files directly",
      "Copy to Clipboard: Quick copy for pasting into spreadsheets",
      "No File Size Limits: Convert large JSON files without restrictions",
      "UTF-8 Encoding: Full support for special characters and international text"
    ],

    useCases: [
      "Data Migration: Convert API responses to CSV for database imports",
      "Excel Integration: Transform JSON data into Excel-compatible CSV format",
      "Data Analysis: Convert JSON datasets for analysis in spreadsheet applications",
      "Reporting: Generate CSV reports from JSON API responses",
      "Backup & Export: Save JSON data as CSV for archival purposes",
      "Testing & Debugging: Verify JSON data structure by converting to readable CSV"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Convert JSON to CSV with Programming Languages</h3>
        <p className="mb-4">
          Our online converter provides instant results, but you can also convert JSON to CSV programmatically using Python, JavaScript, Node.js, Java, PHP, Go, Rust, and other languages.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Python JSON to CSV:</h4>
            <p>Use the pandas library with json_normalize() or the built-in csv module to convert JSON files to CSV. Python code for JSON to CSV is simple: read JSON with json.load(), write CSV with csv.DictWriter(). Python pandas json to CSV conversion handles nested structures elegantly. Python script to convert JSON to CSV can process large files efficiently. You can write JSON to CSV in Python without pandas using the standard library.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">JavaScript & Node.js:</h4>
            <p>Convert JSON to CSV in JavaScript using libraries like json2csv or Papa Parse. Node.js JSON to CSV conversion is perfect for backend processing. Use npm packages like json2csv or csv-writer to convert JSON to CSV with headers. JavaScript functions can handle JSON arrays and convert them to downloadable CSV files in the browser.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Java & Kotlin:</h4>
            <p>Use libraries like Jackson, Gson, or OpenCSV to convert JSON to CSV in Java. Java examples typically involve parsing JSON with ObjectMapper and writing CSV with CSVWriter. Kotlin JSON to CSV conversion follows similar patterns with enhanced syntax.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">PHP & Ruby:</h4>
            <p>PHP JSON to CSV conversion uses json_decode() and fputcsv(). Ruby converts JSON to CSV with the CSV library and JSON.parse(). Both languages offer simple solutions for JSON to CSV transformation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Go, Rust & C#:</h4>
            <p>Go JSON to CSV uses encoding/json and encoding/csv packages. Rust leverages serde_json and csv crates. C# JSON to CSV conversion employs Newtonsoft.Json and CsvHelper libraries for robust data transformation.</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">JSON vs CSV: Understanding the Differences</h3>
        <p className="mb-4">
          JSON (JavaScript Object Notation) is a flexible, hierarchical data format that supports nested structures, arrays, and complex data types. CSV (Comma-Separated Values) is a flat, tabular format ideal for spreadsheets and simple data storage. JSON is better for APIs and complex data, while CSV excels in simplicity and Excel compatibility.
        </p>

        <h4 className="font-semibold mb-2">When to Use JSON:</h4>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>API responses and web services</li>
          <li>Configuration files</li>
          <li>Nested or hierarchical data structures</li>
          <li>Data with multiple data types (strings, numbers, booleans, arrays, objects)</li>
        </ul>

        <h4 className="font-semibold mb-2">When to Use CSV:</h4>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Excel and spreadsheet imports</li>
          <li>Simple tabular data</li>
          <li>Data analysis and reporting</li>
          <li>Database imports with flat structures</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Advanced JSON to CSV Techniques</h3>

        <h4 className="font-semibold mb-2">Handling Nested JSON:</h4>
        <p className="mb-3">
          Nested JSON objects must be flattened for CSV conversion. Our tool automatically flattens nested structures using dot notation (e.g., user.address.city becomes a column header). For deeply nested JSON, consider pre-processing with JSONPath or restructuring before conversion.
        </p>

        <h4 className="font-semibold mb-2">JSON Arrays to CSV:</h4>
        <p className="mb-3">
          Arrays of JSON objects convert naturally to CSV rows. Each object becomes a row, and consistent keys across objects form column headers. Handle missing keys gracefully by filling with empty values.
        </p>

        <h4 className="font-semibold mb-2">Tools & Libraries:</h4>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><strong>Python:</strong> pandas (pd.read_json, to_csv), csv module, json library</li>
          <li><strong>JavaScript/Node.js:</strong> json2csv, Papa Parse, csv-writer</li>
          <li><strong>Command Line:</strong> jq (JSON processor), csvkit</li>
          <li><strong>Excel:</strong> Power Query, Data Import features</li>
          <li><strong>Online Tools:</strong> Our converter, ConvertCSV, JSON-CSV converters</li>
        </ul>
        <h4 className="font-semibold mb-2">Quick Code Snippets</h4>
        <div className="space-y-4">
          <div className="bg-muted p-3 rounded-md overflow-x-auto">
            <p className="text-xs font-semibold mb-1 text-primary">Python (pandas)</p>
            <pre className="text-xs font-mono">
              {`import pandas as pd
df = pd.read_json('data.json')
df.to_csv('output.csv', index=False)`}
            </pre>
          </div>
          <div className="bg-muted p-3 rounded-md overflow-x-auto">
            <p className="text-xs font-semibold mb-1 text-primary">JavaScript (Node.js)</p>
            <pre className="text-xs font-mono">
              {`const { Parser } = require('json2csv');
const fs = require('fs');
const json = require('./data.json');
const csv = new Parser().parse(json);
fs.writeFileSync('output.csv', csv);`}
            </pre>
          </div>
        </div>
      </>
    ),

    proTip: "Validate your JSON structure before converting to avoid errors. For deeply nested JSON, flatten objects for clearer CSV columns. Use semicolon delimiter for European Excel compatibility, and always check UTF-8 encoding for special characters.",

    faqs: [
      {
        question: "How to convert JSON to CSV in Excel?",
        answer: "Open Excel, go to Data > Get Data > From File > From JSON. Select your JSON file, Excel will display a preview. Click 'Load' to import. Alternatively, use our online converter to get CSV format, then open directly in Excel. For complex JSON, use Power Query to transform nested structures before loading."
      },
      {
        question: "How to convert JSON to CSV in Python?",
        answer: "Use pandas: import pandas as pd; df = pd.read_json('data.json'); df.to_csv('output.csv', index=False). Without pandas, use the csv and json modules: import json, csv; with open('data.json') as f: data = json.load(f); with open('output.csv', 'w') as csvfile: writer = csv.DictWriter(csvfile, fieldnames=data[0].keys()); writer.writeheader(); writer.writerows(data)."
      },
      {
        question: "Can you convert JSON to CSV?",
        answer: "Yes, JSON can be converted to CSV easily. JSON arrays of objects convert naturally to CSV rows, with object keys becoming column headers. Nested JSON requires flattening. Use our online converter for instant conversion, or programmatically with Python (pandas), JavaScript (json2csv), or other languages."
      },
      {
        question: "How to download JSON to CSV?",
        answer: "Use our online converter: paste JSON data, click convert, then download the generated CSV file. Programmatically, read JSON, convert to CSV format, and write to file. In Python: df.to_csv('output.csv'). In JavaScript: use json2csv library and fs.writeFile() to save CSV."
      },
      {
        question: "How to convert CSV to JSON in React?",
        answer: "Use the Papa Parse library in React: import Papa from 'papaparse'; Papa.parse(csvFile, {header: true, complete: (results) => {console.log(results.data)}}). This parses CSV to JSON objects. For JSONto CSV in React, use json2csv: import {parse} from 'json2csv'; const csv = parse(jsonData); then create a downloadable blob."
      },
      {
        question: "How to convert CSV to JSON file?",
        answer: "In Python: import pandas as pd; df = pd.read_csv('data.csv'); df.to_json('output.json', orient='records'). In JavaScript/Node.js, use Papa Parse or csv-parser for CSV to JSON. Online tools like our converter can also handle CSV to JSON conversion with instant download."
      },
      {
        question: "What code converts JSON to CSV?",
        answer: "Python: pandas.read_json().to_csv(). JavaScript: use json2csv library. Java: Jackson + OpenCSV. PHP: json_decode() + fputcsv(). The approach varies by language but follows a pattern: parse JSON, iterate through data, write CSV rows with headers from JSON keys."
      },
      {
        question: "How to convert JSON to CSV locally?",
        answer: "Use command-line tools like jq combined with csvkit, or write scripts in Python/JavaScript. For browsers, use our online converter which processes locally without uploading data. Desktop applications like Excel, LibreOffice Calc, or programming IDEs with JSON/CSV plugins also work offline."
      },
      {
        question: "What is a CSV to JSON example?",
        answer: "CSV input: 'name,age\\nJohn,30\\nJane,25' converts to JSON: [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. The CSV header row becomes JSON object keys, and each CSV row becomes a JSON object in an array."
      },
      {
        question: "Can Excel convert JSON to CSV?",
        answer: "Yes! Excel 2016+ supports JSON import via Data > Get Data > From JSON. Excel loads JSON, transforms it with Power Query, and you can save as CSV. For complex nested JSON, Power Query allows flattening and restructuring before saving to CSV format."
      },
      {
        question: "How to convert JSON to CSV in Visual Studio Code?",
        answer: "Install extensions like 'Rainbow CSV' or 'JSON to CSV'. Select JSON text, open Command Palette (Ctrl+Shift+P), search for 'Convert JSON to CSV'. Alternatively, use integrated terminal to run Python/Node.js scripts for conversion. Extensions often provide one-click conversion features."
      },
      {
        question: "What is JSON to CSV data conversion?",
        answer: "JSON to CSV conversion transforms hierarchical JSON data into flat tabular CSV format. JSON objects become CSV rows, JSON keys become CSV column headers. Nested structures are flattened, arrays are expanded, and the output is compatible with spreadsheets and databases."
      },
      {
        question: "Can we convert CSV file to JSON?",
        answer: "Yes, CSV to JSON conversion is straightforward. CSV headers become JSON object keys, and each row becomes a JSON object. Tools like pandas (Python), Papa Parse (JavaScript), or online converters handle this easily. The reverse process (JSON to CSV) is equally simple."
      },
      {
        question: "Why use JSON over CSV?",
        answer: "JSON supports nested structures, arrays, mixed data types, and hierarchical relationships. It's ideal for APIs, configuration files, and complex data. JSON is more flexible for representing real-world data structures. CSV is simpler but limited to flat tables without nesting or type information."
      },
      {
        question: "Why is JSON better than CSV?",
        answer: "JSON preserves data types (strings, numbers, booleans, null), supports nested objects and arrays, represents hierarchical data naturally, and is the standard for web APIs. CSV is better for simplicity and spreadsheet compatibility, but JSON excels in flexibility and structure representation."
      },
      {
        question: "How to use pandas to convert JSON to CSV?",
        answer: "import pandas as pd; df = pd.read_json('data.json'); df.to_csv('output.csv', index=False). For nested JSON, use pd.json_normalize(): df = pd.json_normalize(data); df.to_csv('output.csv'). Pandas handles complex JSON structures and provides extensive data manipulation options before CSV export."
      },
      {
        question: "How to convert JSON to CSV in Python (py)?",
        answer: "Method 1 (pandas): pd.read_json('file.json').to_csv('output.csv', index=False). Method 2 (standard library): import json, csv; with open('data.json') as f: data=json.load(f); with open('out.csv','w') as csvfile: writer=csv.DictWriter(csvfile, data[0].keys()); writer.writeheader(); writer.writerows(data)."
      },
      {
        question: "Can CSV be converted to JSON if necessary?",
        answer: "Absolutely! CSV to JSON is a common operation. In Python: pd.read_csv('file.csv').to_json('output.json', orient='records'). JavaScript: use Papa Parse. The conversion is lossless for flat data, and you can structure the JSON output as an array of objects or other formats."
      },
      {
        question: "How to flatten JSON to CSV?",
        answer: "Use pandas json_normalize() in Python: pd.json_normalize(nested_json).to_csv('flat.csv'). This flattens nested objects using dot notation (e.g., 'user.address.city'). For JavaScript, libraries like flat or manual recursive flattening functions work. Our online tool automatically flattens nested JSON."
      },
      {
        question: "How to convert JSON to CSV in PowerShell?",
        answer: "Get-Content data.json | ConvertFrom-Json | Export-Csv output.csv -NoTypeInformation. For complex JSON, pipe through Select-Object to specify properties: Get-Content data.json | ConvertFrom-Json | Select-Object name, age | Export-Csv output.csv -NoTypeInformation."
      },
      {
        question: "How to convert JSON to CSV in Google Sheets?",
        answer: "Use IMPORTDATA function for JSON URLs or copy-paste JSON and use Apps Script. Custom function: function jsonToCsv(json) { var data = JSON.parse(json); return data.map(row => Object.values(row).join(','))}. Alternatively, convert JSON to CSV with our tool, then import CSV to Google Sheets."
      },
      {
        question: "What is the easiest way to convert JSON to CSV?",
        answer: "Use our free online JSON to CSV converter - paste JSON, click convert, download CSV. No installation, no coding required. For programmers, Python pandas (pd.read_json().to_csv()) is simplest. Both methods handle nested JSON and provide instant results."
      },
      {
        question: "What is JSON CSV?",
        answer: "JSON CSV refers to converting between JSON and CSV formats. It's not a hybrid format but a conversion process. JSON is structured hierarchical data, CSV is flat tabular data. Tools and libraries facilitate transforming JSON to CSV and vice versa for different use cases."
      },
      {
        question: "Is JSON the same as CSV?",
        answer: "No. JSON is a hierarchical format supporting nested objects, arrays, and data types. CSV is a flat, tabular format with rows and columns, no nesting, and all data as text. JSON is for complex structured data and APIs; CSV is for spreadsheets and simple datasets."
      },
      {
        question: "What are the benefits of JSON over CSV?",
        answer: "JSON benefits: supports nested structures, preserves data types, represents arrays and objects, ideal for APIs, human-readable, and flexible. CSV benefits: simpler format, Excel-compatible, smaller file size for flat data, universal support. Choose based on data complexity and use case."
      }
    ],

    relatedTools: [
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function JSONToCSVPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JSONToCSV />
        </div>
      )}
    />
  )
}
