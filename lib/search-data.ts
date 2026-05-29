// Comprehensive search data for all tools and pages on FastTools
export interface SearchItem {
  name: string
  description: string
  path: string
  category: string
}

export const searchItems: SearchItem[] = [
  // Main Pages
  { name: "Products", description: "Explore all our product categories and tools", path: "/products", category: "Pages" },
  { name: "API Docs", description: "Comprehensive API documentation for developers", path: "/api-docs", category: "Pages" },
  { name: "About Us", description: "Learn about FastTools and our mission", path: "/about", category: "Pages" },
  { name: "My Info", description: "View your digital footprint, IP address, and location information", path: "/my-info", category: "Pages" },

  { name: "FAQ", description: "Frequently asked questions about FastTools", path: "/faq", category: "Pages" },
  { name: "Privacy Policy", description: "Read our privacy policy and data handling practices", path: "/privacy-policy", category: "Pages" },
  { name: "Terms of Service", description: "Terms and conditions for using FastTools", path: "/terms", category: "Pages" },
  { name: "Cookie Preferences", description: "Manage your cookie preferences", path: "/cookie-preferences", category: "Pages" },

  // Calculator Tools
  { name: "ROAS Calculator", description: "Calculate Return on Ad Spend, ROI, and break-even points", path: "/ad-tools/roas-calculator", category: "Calculator" },
  { name: "BMI Calculator", description: "Calculate your Body Mass Index with detailed health insights", path: "/calculator/bmi-calculator", category: "Calculator" },
  { name: "Age Calculator", description: "Calculate exact age in years, months, weeks, days, hours, minutes, and seconds", path: "/calculator/age-calculator", category: "Calculator" },
  { name: "Percentage Calculator", description: "Calculate percentages, discounts, increases, decreases, and percentage differences", path: "/calculator/percentage-calculator", category: "Calculator" },
  { name: "Loan Calculator", description: "Calculate loan payments, total interest, amortization schedules", path: "/finance-tools/loan-calculator", category: "Calculator" },
  { name: "Mortgage Calculator", description: "Calculate monthly mortgage payments including principal, interest, taxes", path: "/finance-tools/mortgage-calculator", category: "Calculator" },
  { name: "Compound Interest Calculator", description: "Calculate investment growth with compound interest", path: "/finance-tools/compound-interest", category: "Calculator" },
  { name: "Retirement Calculator", description: "Plan your retirement with confidence", path: "/finance-tools/retirement-calculator", category: "Calculator" },
  { name: "Salary Calculator", description: "Convert between hourly, daily, weekly, monthly, and annual salary", path: "/calculator/salary-calculator", category: "Calculator" },
  { name: "Tax Calculator", description: "Calculate federal and state income taxes", path: "/finance-tools/tax-calculator", category: "Calculator" },
  { name: "Investment Calculator", description: "Calculate investment returns and compare options", path: "/finance-tools/investment-calculator", category: "Calculator" },
  { name: "GPA Calculator", description: "Calculate semester GPA, cumulative GPA, and weighted GPA", path: "/calculator/gpa-calculator", category: "Calculator" },
  { name: "Calorie Calculator", description: "Calculate daily calorie needs based on age, gender, activity level", path: "/calculator/calorie-calculator", category: "Calculator" },
  { name: "BMR Calculator", description: "Calculate your Basal Metabolic Rate", path: "/calculator/bmr-calculator", category: "Calculator" },
  { name: "Body Fat Calculator", description: "Estimate body fat percentage using multiple methods", path: "/calculator/body-fat-calculator", category: "Calculator" },
  { name: "Pregnancy Calculator", description: "Calculate due date, pregnancy timeline, and fetal development", path: "/calculator/pregnancy-calculator", category: "Calculator" },
  { name: "Love Calculator", description: "Calculate love compatibility percentage based on names", path: "/calculator/love-calculator", category: "Calculator" },
  { name: "Date Difference Calculator", description: "Calculate the exact difference between two dates", path: "/calculator/date-difference", category: "Calculator" },
  { name: "Time Duration Calculator", description: "Calculate the time duration between two times", path: "/calculator/time-duration", category: "Calculator" },
  { name: "Conversion Calculator", description: "Convert between 1000+ units instantly", path: "/calculator/conversion-calculator", category: "Calculator" },
  { name: "Concrete Calculator", description: "Calculate concrete volume, weight, materials, and cost", path: "/calculator/concrete-calculator", category: "Calculator" },
  { name: "IP Subnet Calculator", description: "Calculate IPv4 and IPv6 subnets with CIDR notation", path: "/calculator/ip-subnet-calculator", category: "Calculator" },
  { name: "Scientific Calculator", description: "Advanced scientific calculator with trigonometric and logarithmic functions", path: "/calculator/scientific-calculator", category: "Calculator" },
  { name: "Triangle Calculator", description: "Calculate triangle area, perimeter, angles, and heights", path: "/calculator/triangle-calculator", category: "Calculator" },
  { name: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions", path: "/calculator/fraction-calculator", category: "Calculator" },
  { name: "Standard Deviation Calculator", description: "Calculate standard deviation, variance, and mean", path: "/calculator/standard-deviation-calculator", category: "Calculator" },
  { name: "Pregnancy Conception Calculator", description: "Calculate your conception date with personalized guidance", path: "/calculator/pregnancy-conception-calculator", category: "Calculator" },
  { name: "Pace Calculator", description: "Calculate running pace, training zones, and race predictions", path: "/calculator/pace-calculator", category: "Calculator" },
  { name: "Sales Tax Calculator", description: "Calculate sales tax for all 50 US states", path: "/finance-tools/sales-tax-calculator", category: "Calculator" },
  { name: "Interest Rate Calculator", description: "Calculate real interest rates on loans", path: "/finance-tools/interest-rate-calculator", category: "Calculator" },
  { name: "Finance Calculator", description: "Professional finance calculator for time value of money", path: "/finance-tools/finance-calculator", category: "Calculator" },
  { name: "Inflation Calculator", description: "Calculate purchasing power and inflation rates", path: "/finance-tools/inflation-calculator", category: "Calculator" },
  { name: "Amortization Calculator", description: "Professional amortization calculator for loan payment analysis", path: "/finance-tools/amortization-calculator", category: "Calculator" },
  { name: "Payment Calculator", description: "Professional payment calculator for loan analysis", path: "/finance-tools/payment-calculator", category: "Calculator" },

  // AI Tools
  { name: "AI QR Code Generator", description: "Create stunning, branded QR codes with AI-powered customization", path: "/ai-tools/qr-generator", category: "AI" },
  { name: "AI Lyrics Generator", description: "Generate creative, original song lyrics for any genre", path: "/ai-tools/lyrics-generator", category: "AI" },
  { name: "AI Caption Generator", description: "Create engaging captions for social media posts automatically", path: "/ai-tools/caption-generator", category: "AI" },
  { name: "AI Pet Name Generator", description: "Discover unique, creative names for your pets using AI", path: "/ai-tools/pet-names", category: "AI" },
  { name: "AI Text Detector", description: "Free AI text detector to check if content was written by ChatGPT, Claude, Gemini, or AI. Analyzes burstiness, vocabulary, predictability patterns", path: "/ai-tools/ai-text-detector", category: "AI" },
  { name: "AI Code Detector", description: "Free AI code detector to check if code was written by GitHub Copilot, ChatGPT, Claude, or AI. Analyzes complexity, naming, error handling patterns", path: "/ai-tools/ai-code-detector", category: "AI" },
  { name: "AI Readability Analyzer", description: "Free readability analyzer with 7 algorithms: Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall. Grade level, audience match, reading time", path: "/ai-tools/ai-readability-analyzer", category: "AI" },

  // Converter Tools
  { name: "Currency Converter", description: "Real-time currency conversion for 150+ world currencies", path: "/converters/currency", category: "Converter" },
  { name: "Integer Base Converter", description: "Convert numbers between binary, octal, decimal, hex, and bases 2–64", path: "/converters/integer-base", category: "Converter" },
  { name: "Roman Numeral Converter", description: "Convert numbers to Roman numerals and back, 1–3,999,999", path: "/converters/roman-numeral", category: "Converter" },
  { name: "Base64 File Converter", description: "Free base64 file converter online. Base64 to PDF, image, excel, xml, docx, zip. File to base64 with preview.", path: "/converters/base64-file", category: "Converter" },
  { name: "Escape HTML Entities", description: "HTML escape online. Escape html entities list. html escape js, php, python. Unescape. Free.", path: "/web-tools/html-escape", category: "Web" },
  { name: "URL Parser", description: "url parser online. url parser js, python, java. url query string parser. url parser decode. Free.", path: "/web-tools/url-parser", category: "Web" },
  { name: "Device Information", description: "my device information online. device information pc, android, samsung. Screen size, user agent. Free.", path: "/web-tools/device-info", category: "Web" },
  { name: "Auth Generator", description: "basic auth generator online. basic auth generator decode. Bearer, API Key. convert basic auth to username:password. Free.", path: "/web-tools/auth-generator", category: "Web" },
  { name: "Outlook Safelink Decoder", description: "Decode Outlook SafeLink links to original URL. safelinks decoder o365, safe link decoder. Free.", path: "/web-tools/outlook-safelink-decoder", category: "Web" },
  { name: "URL Encoder Decoder", description: "Encode decode URL-formatted strings. URL encode, decode online. Percent-encoded. Free.", path: "/web-tools/url-encoder", category: "Web" },
  { name: "JSON to XML Converter", description: "JSON to XML converter online. Formatter, Python, Java, npm. XML to JSON. Free.", path: "/converters/json-xml", category: "Converter" },
  { name: "XML to JSON Converter", description: "XML to JSON converter online. Python, npm, Node.js. JSON to XML. Free.", path: "/converters/xml-json", category: "Converter" },
  { name: "TOML to YAML Converter", description: "TOML to YAML converter online. Hugo, Alacritty. YAML vs TOML. Free.", path: "/converters/toml-yaml", category: "Converter" },
  { name: "TOML to JSON Converter", description: "TOML to JSON converter online. toml2json CLI alternative. Python, npm. Free.", path: "/converters/toml-json", category: "Converter" },
  { name: "List Converter", description: "Text to list, comma separated list converter. Convert column to comma, list to columns. Array to list. Free.", path: "/converters/list-converter", category: "Converter" },
  { name: "JSON to TOML Converter", description: "JSON to TOML converter online. json2toml npm alternative. Python, CLI. TOML to JSON. Free.", path: "/converters/json-toml", category: "Converter" },
  { name: "YAML to TOML", description: "YAML to TOML online. Ansible convert YAML to TOML. TOML formatter, format TOML online. Free.", path: "/converters/yaml-toml", category: "Converter" },
  { name: "JSON to YAML Converter", description: "JSON to YAML converter online. Swagger, OpenAPI. For Python, VSCode. Free.", path: "/converters/json-yaml", category: "Converter" },
  { name: "YAML to JSON Converter", description: "YAML to JSON converter free. Swagger, OpenAPI YAML to JSON. Convert for Postman. YAML to JSON schema. Free.", path: "/converters/yaml-json", category: "Converter" },
  { name: "Text to Unicode", description: "Convert text to Unicode and Unicode to text. Parse text to Unicode code points and decode. Free.", path: "/converters/unicode", category: "Converter" },
  { name: "Text to ASCII Binary", description: "Text to ASCII binary converter online. Binary to text. ASCII to binary table, text to binary table. Binary alphabet. Free.", path: "/converters/ascii-binary", category: "Converter" },
  { name: "Text to NATO Alphabet", description: "Text to NATO alphabet converter online. NATO alphabet decoder, NATO translator to English. Military alphabet translator. Free.", path: "/converters/nato-phonetic", category: "Converter" },
  { name: "Text Case Converter", description: "Transform text between uppercase, lowercase, title case, camelCase", path: "/converters/text-case", category: "Converter" },
  { name: "Length Converter", description: "Convert between all major length units", path: "/converters/length", category: "Converter" },
  { name: "Temperature Converter", description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine", path: "/converters/temperature", category: "Converter" },
  { name: "File Size Converter", description: "Convert between bytes, KB, MB, GB, TB", path: "/converters/file-size", category: "Converter" },
  { name: "Timezone Converter", description: "Convert time between different time zones worldwide", path: "/converters/timezone", category: "Converter" },
  { name: "Currency Converter", description: "Convert between world currencies with real-time exchange rates", path: "/converters/currency", category: "Converter" },

  // Crypto Tools
  { name: "Crypto Tools", description: "Secure and free online crypto tools", path: "/crypto-tools", category: "Pages" },
  { name: "Bcrypt Generator", description: "Generate and verify secure Blowfish-based Bcrypt hashes with adjustable cost factors", path: "/crypto-tools/bcrypt", category: "Crypto" },
  { name: "Text Encrypt/Decrypt", description: "Securely encrypt and decrypt text using AES, TripleDES, Rabbit, or RC4 directly in your browser.", path: "/crypto-tools/encrypt-decrypt", category: "Crypto" },
  { name: "BIP39 Passphrase Generator", description: "Generate secure BIP39 mnemonic phrases and seed codes online. Convert entropy to mnemonic.", path: "/crypto-tools/bip39-generator", category: "Crypto" },
  { name: "HMAC Generator", description: "Calculate secure Hash-based Message Authentication Codes (HMAC) using SHA-256, MD5, SHA-512 and secret keys.", path: "/crypto-tools/hmac-generator", category: "Crypto" },
  { name: "Token Generator", description: "Generate secure random tokens, API keys, and passwords", path: "/crypto-tools/token-generator", category: "Crypto" },
  { name: "Password Generator", description: "Free password generator with entropy meter, HIBP breach checker, passphrase mode (Diceware), bulk generation. Cryptographically secure using crypto.getRandomValues().", path: "/crypto-tools/password-generator", category: "Crypto" },
  { name: "Hash Text Generator", description: "Generate secure cryptographic hashes (MD5, SHA1, SHA256) for any text", path: "/crypto-tools/hash-text", category: "Crypto" },
  { name: "UUID Generator", description: "Bulk generate secure random and time-based UUIDs (v4, v7)", path: "/crypto-tools/uuid-generator", category: "Crypto" },
  { name: "ULID Generator", description: "Generate Universally Unique Lexicographical Sortable Identifiers", path: "/crypto-tools/ulid-generator", category: "Crypto" },
  { name: "RSA Key Generator", description: "Generate secure RSA public and private key pairs (2048/4096-bit) in PEM format", path: "/crypto-tools/rsa-generator", category: "Crypto" },
  { name: "Password Strength Analyzer", description: "Analyze password strength, entropy, and estimated crack time using zxcvbn.", path: "/crypto-tools/password-strength-analyzer", category: "Crypto" },
  { name: "OTP Code Generator", description: "Free otp code generator, totp generator, totp qr code generator. Time-based OTP for 2FA.", path: "/crypto-tools/otp-generator", category: "Crypto" },

  // Developer Tools
  { name: "Color Palette Generator", description: "Free color palette generator. 7 harmony modes (complementary, analogous, triadic, tetradic, monochromatic), image extraction, WCAG contrast checker, export to CSS/Tailwind/SCSS/JSON.", path: "/dev-tools/color-palette", category: "Developer" },
  { name: "CSS Gradient Generator", description: "Free CSS gradient generator. Create linear, radial, and conic CSS gradients visually. Edit color stops, set angles, pick from 20+ presets, copy as CSS, Tailwind classes, or SCSS. linear-gradient radial-gradient conic-gradient tailwind gradient.", path: "/dev-tools/css-gradient-generator", category: "Developer" },
  { name: "Diff Checker", description: "Free online diff checker and text compare tool. Find differences between two texts side-by-side, inline, or unified view with character-level highlighting. Ignore whitespace/case options.", path: "/dev-tools/diff-checker", category: "Developer" },

  // Education Tools
  { name: "Education Tools", description: "Free education tools for students and researchers. Citation generators, study aids, academic writing helpers.", path: "/education-tools", category: "Pages" },
  { name: "Citation Generator", description: "Free citation generator for APA 7th, MLA 9th, Chicago 17th, and Harvard. Auto-fill from DOI (CrossRef) and ISBN (OpenLibrary). Build bibliographies, export as text or BibTeX.", path: "/education-tools/citation-generator", category: "Education" },
  { name: "Hex to RGB Converter", description: "Convert between HEX, RGB, HSL, and other color formats", path: "/dev-tools/hex-to-rgb", category: "Developer" },
  { name: "JSON Diff", description: "Compare two JSON objects and find differences. json diff online. json diff javascript, python, npm.", path: "/dev-tools/json-diff", category: "Developer" },
  { name: "JSON to CSV Converter", description: "Convert JSON data to CSV format", path: "/dev-tools/json-to-csv", category: "Developer" },
  { name: "SQL to JSON Converter", description: "Convert SQL INSERT statements to JSON format", path: "/dev-tools/sql-to-json", category: "Developer" },
  { name: "JWT Decoder", description: "Decode and inspect JSON Web Tokens securely", path: "/dev-tools/jwt-decoder", category: "Developer" },
  { name: "Unix Timestamp Converter", description: "Convert Unix/epoch timestamps to human dates and back in seconds, milliseconds, or microseconds. Live current epoch, UTC, ISO 8601.", path: "/dev-tools/timestamp-converter", category: "Developer" },
  { name: "Cron Expression Generator", description: "Free cron expression generator and crontab builder. Visual builder, 25+ presets, English descriptions, next 10 run times preview. Build cron jobs for Unix, Kubernetes, GitHub Actions, AWS.", path: "/dev-tools/cron-expression-generator", category: "Developer" },
  { name: "Base64 Encoder Decoder", description: "Encode and decode strings to Base64. URL-safe mode and file support", path: "/dev-tools/base64-encoder", category: "Developer" },
  { name: "MIME Types", description: "MIME types list. Convert MIME types to file extensions. mime types pdf, images, excel. mime-types npm alternative.", path: "/dev-tools/mime-types", category: "Developer" },
  { name: "Keycode Info", description: "Find javascript keycode, code, location and modifiers. keycode list, keyboard key codes, event keycode. keycode tester.", path: "/dev-tools/keycode-info", category: "Developer" },
  { name: "Slugify String", description: "Slugify string online. Make a string url, filename and id safe. slugify string url. slugify - npm alternative.", path: "/dev-tools/slugify-string", category: "Developer" },
  { name: "HTML WYSIWYG Editor", description: "Free html wysiwyg editor online. Online html editor with live HTML source. Rich text editor.", path: "/dev-tools/html-wysiwyg-editor", category: "Developer" },
  { name: "User-Agent Parser", description: "User agent parser online. Parse UA string to detect Browser, Engine, OS, CPU, Device. ua-parser-js alternative. Free.", path: "/dev-tools/user-agent-parser", category: "Developer" },
  { name: "HTTP Status Codes", description: "HTTP status codes list. http status codes 200, 404, 500 with examples. http status codes table. http methods. Free.", path: "/dev-tools/http-status-codes", category: "Developer" },
  { name: "Regex Tester", description: "Test regular expressions with live results", path: "/dev-tools/regex-tester", category: "Developer" },
  { name: "HTML Beautifier", description: "Format and beautify HTML code", path: "/dev-tools/html-beautifier", category: "Developer" },
  { name: "HTML to Markdown", description: "Convert HTML content to Markdown format", path: "/dev-tools/html-to-markdown", category: "Developer" },
  { name: "Markdown Previewer", description: "Preview Markdown content in real-time", path: "/dev-tools/markdown-previewer", category: "Developer" },

  { name: "Ovulation Calculator", description: "Free ovulation calculator. Find your fertile window, ovulation date, best days to conceive, pregnancy test date, and estimated due date. 6-cycle forecast with visual fertility calendar.", path: "/calculator/ovulation-calculator", category: "Calculator" },

  // Image Tools
  { name: "Background Remover", description: "Remove background from image for free with AI. Transparent PNG, color replacement, custom backgrounds. No signup, no watermark. 100% browser-based privacy.", path: "/image-tools/background-remover", category: "Image" },
  { name: "Image Cropper", description: "Free online image cropper. Crop JPG, PNG, WebP images with drag handles. Aspect ratio presets (1:1, 16:9, 4:3, 9:16), exact pixel input, rotate, flip. No signup, no watermark, 100% browser-based.", path: "/image-tools/image-cropper", category: "Image" },
  { name: "Image Resizer", description: "Resize images online for free. Custom dimensions, 50+ social media presets for Instagram, Facebook, LinkedIn, YouTube, TikTok. JPG, PNG, WebP. No quality loss.", path: "/image-tools/image-resizer", category: "Image" },
  { name: "Image to Text (OCR)", description: "Extract text from images with OCR technology", path: "/image-tools/image-to-text", category: "Image" },
  { name: "AI Image Detector", description: "Free AI image detector to check if a photo is AI-generated. Detects Midjourney, DALL-E, Stable Diffusion, Flux & deepfake images", path: "/image-tools/ai-image-detector", category: "Image" },

  // PDF Tools
  { name: "PDF to Word Converter", description: "Convert PDF to editable Word documents", path: "/pdf-tools/pdf-word-converter", category: "PDF" },
  { name: "PDF Compressor", description: "Reduce PDF file size efficiently", path: "/pdf-tools/pdf-compressor", category: "PDF" },
  { name: "PDF to Image", description: "Convert PDF pages to JPG and PNG images", path: "/pdf-tools/pdf-to-image", category: "PDF" },
  { name: "Sign PDF", description: "Add secure digital signatures to PDFs", path: "/pdf-tools/pdf-sign", category: "PDF" },
  { name: "PDF Signature Checker", description: "Verify PDF digital signatures, integrity, and signer identity.", path: "/pdf-tools/pdf-signature-checker", category: "PDF" },
  { name: "Merge PDF", description: "Combine multiple PDF files into one document", path: "/pdf-tools/pdf-splitter-merger", category: "PDF" },
  { name: "Split PDF", description: "Split PDF into separate files by page ranges", path: "/pdf-tools/pdf-splitter-merger", category: "PDF" },
  { name: "PDF Unlocker", description: "Remove password protection from PDF files", path: "/pdf-tools/pdf-unlocker", category: "PDF" },

  // SEO Tools
  { name: "Open Graph Meta Generator", description: "open graph meta generator online. open graph tag generator. open graph meta tags, image size. Free.", path: "/seo-tools/meta-tags", category: "SEO" },
  { name: "Keyword Density Checker", description: "Analyze keyword density in content", path: "/seo-tools/keyword-density", category: "SEO" },
  { name: "Schema Markup Generator", description: "Free JSON-LD schema markup generator for 11 types: Article, FAQ, Product, LocalBusiness, Event, Recipe, Organization, Person, HowTo, Breadcrumb, Video. Generate structured data for rich snippets.", path: "/seo-tools/schema-markup-generator", category: "SEO" },
  { name: "Lorem Ipsum Generator", description: "Generate placeholder text for design mockups", path: "/seo-tools/lorem-ipsum", category: "SEO" },
  { name: "Blog Title Generator", description: "Create catchy, SEO-friendly titles", path: "/seo-tools/blog-titles", category: "SEO" },
  { name: "Text Similarity Checker", description: "Check text similarity and detect duplicate content using SimHash", path: "/seo-tools/text-similarity-checker", category: "SEO" },
  { name: "Word Counter", description: "Free word counter and text analyzer. Word count, character count, reading time, speaking time, keyword density, Flesch readability score, social media character limits.", path: "/seo-tools/word-counter", category: "SEO" },


  // Social Media Tools
  { name: "YouTube Thumbnail Downloader", description: "Download YouTube thumbnails in HD", path: "/social-media-tools/youtube-thumbnail", category: "Social Media" },
  { name: "YouTube Tag Extractor", description: "Extract tags from any YouTube video", path: "/social-media-tools/youtube-tags", category: "Social Media" },



  { name: "Link in Bio Generator", description: "Create beautiful link-in-bio pages", path: "/social-media-tools/link-in-bio", category: "Social Media" },
  { name: "YouTube Channel Checker", description: "Check if your desired channel name is available", path: "/social-media-tools/channel-checker", category: "Social Media" },
  { name: "YouTube Channel Name Generator", description: "Generate catchy, unique names for your YouTube channel with AI", path: "/social-media-tools/youtube-channel-name-generator", category: "Social Media" },
  { name: "Hashtag Counter", description: "Count and extract hashtags from posts", path: "/social-media-tools/hashtag-counter", category: "Social Media" },
  { name: "Instagram DP Viewer", description: "View and download Instagram profile pictures in full size HD", path: "/social-media-tools/instagram-dp", category: "Social Media" },

  { name: "AI Paraphraser", description: "Free AI paraphrasing tool. Rewrite text in 7 modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand. Powered by AI.", path: "/ai-tools/ai-paraphraser", category: "AI" },
  { name: "AI Text Summarizer", description: "Free AI text summarizer. Summarize articles, essays, reports into paragraphs, bullet points, key takeaways, or TL;DR. Adjustable length. Powered by AI.", path: "/ai-tools/text-summarizer", category: "AI" },
  { name: "Text to Speech", description: "Free text to speech online. Convert text to natural speech with 50+ languages, adjustable speed, pitch, volume. Word highlighting. No signup.", path: "/ai-tools/text-to-speech", category: "AI" },
  { name: "DNS Lookup & SSL Checker", description: "Check DNS records (A, AAAA, MX, CNAME, TXT, NS, SOA) and verify SSL certificates for any domain. View issuer, expiry, TLS version.", path: "/web-tools/dns-ssl-checker", category: "Web" },
  { name: "WHOIS & Domain Lookup", description: "Free WHOIS / RDAP domain lookup. View registrar, creation and expiry dates, status codes, nameservers, DNSSEC, and contact info for any domain.", path: "/web-tools/whois-lookup", category: "Web" },
  { name: "Tax Bracket Calculator", description: "Calculate 2025-2026 US federal income tax by bracket. Marginal vs effective rate, bracket breakdown, all filing statuses.", path: "/finance-tools/tax-bracket-calculator", category: "Finance" },
  { name: "Startup Runway Calculator", description: "Free startup runway calculator. Calculate months of runway, burn rate, zero-cash date, fundraise timing. Revenue growth projections, burn multiple, industry benchmarks by stage.", path: "/finance-tools/startup-runway-calculator", category: "Finance" },

  // Finance Tools
  { name: "Invoice Generator", description: "Create professional invoices for your business", path: "/finance-tools/invoice-generator", category: "Finance" },
  { name: "PayPal Fee Calculator", description: "Calculate PayPal transaction fees", path: "/finance-tools/paypal-fee", category: "Finance" },
  { name: "Discount Calculator", description: "Calculate sale prices and savings", path: "/finance-tools/discount-calculator", category: "Finance" },
  { name: "Tip Calculator", description: "Calculate tips for restaurants and services", path: "/finance-tools/tip-calculator", category: "Finance" },
  { name: "Savings Goal Tracker", description: "Track your savings goals", path: "/finance-tools/savings-tracker", category: "Finance" },
  { name: "Retirement Planner", description: "Plan your retirement with compound interest", path: "/finance-tools/retirement-planner", category: "Finance" },
  { name: "Bill Splitter", description: "Split bills and expenses fairly", path: "/finance-tools/bill-splitter", category: "Finance" },
  { name: "Credit Card Payoff Calculator", description: "Calculate credit card debt payoff time", path: "/finance-tools/credit-card-payoff", category: "Finance" },

  // Fun Tools
  { name: "Fun Tools", description: "Entertaining tools for celebrations and social content", path: "/fun-tools", category: "Pages" },
  { name: "Future Age Predictor", description: "See how old you'll be on any future date", path: "/fun-tools/future-age", category: "Fun" },
  { name: "Birthday Countdown", description: "Countdown to your next birthday", path: "/fun-tools/birthday-countdown", category: "Fun" },
  { name: "Anniversary Calculator", description: "Calculate how long you've been together", path: "/fun-tools/anniversary", category: "Fun" },
  { name: "Pomodoro Timer", description: "Free online Pomodoro focus timer with ambient sounds (rain, cafe, white noise, brown noise), task tracking, customizable sessions, keyboard shortcuts, notifications. Study timer for students and remote workers.", path: "/fun-tools/pomodoro-timer", category: "Fun" },
  { name: "Countdown Timer & Stopwatch", description: "Free online countdown timer and stopwatch. Custom time input, 9 quick presets (1 min to 1 hr), alarm sound, circular progress ring, fullscreen mode, lap times with fastest/slowest tracking. Pomodoro timer online. timer online stopwatch.", path: "/fun-tools/countdown-timer", category: "Fun" },
  { name: "Wheel Spinner", description: "Free online wheel spinner and random name picker. Add names or options, spin the animated wheel, get a random winner. 8 built-in presets: Yes/No, Days of Week, Rock/Paper/Scissors, Heads/Tails, Months, Numbers 1-10. Remove winner mode, spin history. No login, no ads. spin the wheel random name picker decision wheel.", path: "/fun-tools/wheel-spinner", category: "Fun" },
  { name: "Meme Generator", description: "Free meme generator with 100+ templates, custom text overlay, drag-and-drop positioning, multiple fonts, and PNG download. No watermark, no signup.", path: "/fun-tools/meme-generator", category: "Fun" },

  // Security Tools
  { name: "Image Steganography", description: "Hide secret messages inside PNG/JPG images using LSB encoding with optional AES-GCM encryption", path: "/security-tools/image-steganography", category: "Security" },
]




