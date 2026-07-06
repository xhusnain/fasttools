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
  { name: "Salary Calculator", description: "Convert between hourly, daily, weekly, monthly, and annual salary", path: "/calculator/salary-calculator", category: "Calculator" },
  { name: "Tax Calculator", description: "Calculate federal and state income taxes", path: "/finance-tools/tax-calculator", category: "Calculator" },
  { name: "Investment Calculator", description: "Calculate investment returns and compare options", path: "/finance-tools/investment-calculator", category: "Calculator" },
  { name: "GPA Calculator", description: "Calculate semester GPA, cumulative GPA, and weighted GPA", path: "/calculator/gpa-calculator", category: "Calculator" },
  { name: "Calorie Calculator", description: "Calculate daily calorie needs based on age, gender, activity level", path: "/calculator/calorie-calculator", category: "Calculator" },
  { name: "BMR Calculator", description: "Calculate your Basal Metabolic Rate", path: "/calculator/bmr-calculator", category: "Calculator" },
  { name: "Body Fat Calculator", description: "Estimate body fat percentage using multiple methods", path: "/calculator/body-fat-calculator", category: "Calculator" },
  { name: "TDEE & Macro Calculator", description: "Calculate total daily energy expenditure and macro targets for fitness goals", path: "/calculator/tdee-macro-calculator", category: "Calculator" },
  { name: "Biological Age Calculator", description: "Estimate biological age from lifestyle, health, and fitness indicators", path: "/calculator/biological-age-calculator", category: "Calculator" },
  { name: "Cortisol Peak Calculator", description: "Estimate cortisol peak timing for sleep, exercise, and wellness planning", path: "/calculator/cortisol-peak-calculator", category: "Calculator" },
  { name: "Pregnancy Calculator", description: "Calculate due date, pregnancy timeline, and fetal development", path: "/calculator/pregnancy-calculator", category: "Calculator" },
  { name: "Love Calculator", description: "Calculate love compatibility percentage based on names", path: "/calculator/love-calculator", category: "Calculator" },
  { name: "Date Difference Calculator", description: "Calculate the exact difference between two dates", path: "/calculator/date-difference", category: "Calculator" },
  { name: "Conversion Calculator", description: "Convert between 1000+ units instantly", path: "/calculator/conversion-calculator", category: "Calculator" },
  { name: "Concrete Calculator", description: "Calculate concrete volume, weight, materials, and cost", path: "/calculator/concrete-calculator", category: "Calculator" },
  { name: "IP Subnet Calculator", description: "Calculate IPv4 and IPv6 subnets with CIDR notation", path: "/calculator/ip-subnet-calculator", category: "Calculator" },
  { name: "Scientific Calculator", description: "Advanced scientific calculator with trigonometric and logarithmic functions", path: "/calculator/scientific-calculator", category: "Calculator" },
  { name: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions", path: "/calculator/fraction-calculator", category: "Calculator" },
  { name: "Pregnancy Conception Calculator", description: "Calculate your conception date with personalized guidance", path: "/calculator/pregnancy-conception-calculator", category: "Calculator" },
  { name: "Sales Tax Calculator", description: "Calculate sales tax for all 50 US states", path: "/finance-tools/sales-tax-calculator", category: "Calculator" },
  { name: "Interest Rate Calculator", description: "Calculate real interest rates on loans", path: "/finance-tools/interest-rate-calculator", category: "Calculator" },
  { name: "Payment Calculator", description: "Professional payment calculator for loan analysis", path: "/finance-tools/payment-calculator", category: "Calculator" },

  // AI Tools
  { name: "AI QR Code Generator", description: "Create stunning, branded QR codes with AI-powered customization", path: "/ai-tools/qr-generator", category: "AI" },
  { name: "AI Lyrics Generator", description: "Generate creative, original song lyrics for any genre", path: "/ai-tools/lyrics-generator", category: "AI" },
  { name: "AI Caption Generator", description: "Create engaging captions for social media posts automatically", path: "/ai-tools/caption-generator", category: "AI" },
  { name: "AI Pet Name Generator", description: "Discover unique, creative names for your pets using AI", path: "/ai-tools/pet-names", category: "AI" },
  { name: "AI Text Detector", description: "Free AI text detector to check if content was written by ChatGPT, Claude, Gemini, or AI. Analyzes burstiness, vocabulary, predictability patterns", path: "/ai-tools/ai-text-detector", category: "AI" },
  { name: "AI Code Detector", description: "Free AI code detector to check if code was written by GitHub Copilot, ChatGPT, Claude, or AI. Analyzes complexity, naming, error handling patterns", path: "/ai-tools/ai-code-detector", category: "AI" },
  { name: "AI Readability Analyzer", description: "Free readability analyzer with 7 algorithms: Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall. Grade level, audience match, reading time", path: "/ai-tools/ai-readability-analyzer", category: "AI" },
  { name: "AI API Cost Calculator", description: "Estimate OpenAI, Claude, Gemini, and LLM API costs from token usage", path: "/ai-tools/ai-api-cost-calculator", category: "AI" },

  // Converter Tools
  { name: "Currency Converter", description: "Real-time currency conversion for 150+ world currencies", path: "/converters/currency", category: "Converter" },
  { name: "Text Case Converter", description: "Transform text between uppercase, lowercase, title case, camelCase", path: "/converters/text-case", category: "Converter" },
  { name: "Length Converter", description: "Convert between all major length units", path: "/converters/length", category: "Converter" },
  { name: "Temperature Converter", description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine", path: "/converters/temperature", category: "Converter" },
  { name: "File Size Converter", description: "Convert between bytes, KB, MB, GB, TB", path: "/converters/file-size", category: "Converter" },
  { name: "Timezone Converter", description: "Convert time between different time zones worldwide", path: "/converters/timezone", category: "Converter" },
  { name: "Currency Converter", description: "Convert between world currencies with real-time exchange rates", path: "/converters/currency", category: "Converter" },

  // Crypto Tools
  { name: "Crypto Tools", description: "Secure and free online crypto tools", path: "/crypto-tools", category: "Pages" },
  { name: "Bcrypt Generator", description: "Generate and verify secure Blowfish-based Bcrypt hashes with adjustable cost factors", path: "/crypto-tools/bcrypt", category: "Crypto" },
  { name: "BIP39 Passphrase Generator", description: "Generate and validate BIP39 mnemonic phrases for testing and wallet recovery workflows.", path: "/crypto-tools/bip39-generator", category: "Crypto" },
  { name: "HMAC Generator", description: "Calculate secure Hash-based Message Authentication Codes (HMAC) using SHA-256, MD5, SHA-512 and secret keys.", path: "/crypto-tools/hmac-generator", category: "Crypto" },
  { name: "Token Generator", description: "Generate secure random tokens, API keys, and passwords", path: "/crypto-tools/token-generator", category: "Crypto" },
  { name: "UUID Generator", description: "Bulk generate secure random and time-based UUIDs (v4, v7)", path: "/crypto-tools/uuid-generator", category: "Crypto" },
  { name: "ULID Generator", description: "Generate Universally Unique Lexicographical Sortable Identifiers", path: "/crypto-tools/ulid-generator", category: "Crypto" },
  { name: "RSA Key Generator", description: "Generate secure RSA public and private key pairs (2048/4096-bit) in PEM format", path: "/crypto-tools/rsa-generator", category: "Crypto" },
  { name: "Password Strength Analyzer", description: "Analyze password strength, entropy, and estimated crack time using zxcvbn.", path: "/crypto-tools/password-strength-analyzer", category: "Crypto" },
  { name: "OTP Code Generator", description: "Free otp code generator, totp generator, totp qr code generator. Time-based OTP for 2FA.", path: "/crypto-tools/otp-generator", category: "Crypto" },

  // Developer Tools

  // Education Tools
  { name: "Hex to RGB Converter", description: "Convert between HEX, RGB, HSL, and other color formats", path: "/dev-tools/hex-to-rgb", category: "Developer" },
  { name: "JSON to CSV Converter", description: "Convert JSON data to CSV format", path: "/dev-tools/json-to-csv", category: "Developer" },
  { name: "SQL to JSON Converter", description: "Convert SQL INSERT statements to JSON format", path: "/dev-tools/sql-to-json", category: "Developer" },
  { name: "JWT Decoder", description: "Decode and inspect JSON Web Tokens securely", path: "/dev-tools/jwt-decoder", category: "Developer" },
  { name: "Unix Timestamp Converter", description: "Convert Unix/epoch timestamps to human dates and back in seconds, milliseconds, or microseconds. Live current epoch, UTC, ISO 8601.", path: "/dev-tools/timestamp-converter", category: "Developer" },
  { name: "MIME Types", description: "MIME types list. Convert MIME types to file extensions. mime types pdf, images, excel. mime-types npm alternative.", path: "/dev-tools/mime-types", category: "Developer" },
  { name: "Regex Tester", description: "Test regular expressions with live results", path: "/dev-tools/regex-tester", category: "Developer" },
  { name: "HTML Beautifier", description: "Format and beautify HTML code", path: "/dev-tools/html-beautifier", category: "Developer" },
  { name: "HTML to Markdown", description: "Convert HTML content to Markdown format", path: "/dev-tools/html-to-markdown", category: "Developer" },
  { name: "Markdown Previewer", description: "Preview Markdown content in real-time", path: "/dev-tools/markdown-previewer", category: "Developer" },


  // Image Tools
  { name: "Background Remover", description: "Remove background from image for free with AI. Transparent PNG, color replacement, custom backgrounds. No signup, no watermark. 100% browser-based privacy.", path: "/image-tools/background-remover", category: "Image" },
  { name: "Image Compressor", description: "Compress JPG, PNG, and WebP images with quality and size controls", path: "/image-tools/image-compressor", category: "Image" },
  { name: "Image to Text (OCR)", description: "Extract text from images with OCR technology", path: "/image-tools/image-to-text", category: "Image" },
  { name: "AI Image Detector", description: "Free AI image detector to check if a photo is AI-generated. Detects Midjourney, DALL-E, Stable Diffusion, Flux & deepfake images", path: "/image-tools/ai-image-detector", category: "Image" },

  // PDF Tools
  { name: "PDF Signature Checker", description: "Verify PDF digital signatures, integrity, and signer identity.", path: "/pdf-tools/pdf-signature-checker", category: "PDF" },
  { name: "Merge PDF", description: "Combine multiple PDF files into one document", path: "/pdf-tools/pdf-splitter-merger", category: "PDF" },
  { name: "Split PDF", description: "Split PDF into separate files by page ranges", path: "/pdf-tools/pdf-splitter-merger", category: "PDF" },

  // SEO Tools
  { name: "Open Graph Meta Generator", description: "open graph meta generator online. open graph tag generator. open graph meta tags, image size. Free.", path: "/seo-tools/meta-tags", category: "SEO" },
  { name: "Keyword Density Checker", description: "Analyze keyword density in content", path: "/seo-tools/keyword-density", category: "SEO" },
  { name: "Lorem Ipsum Generator", description: "Generate placeholder text for design mockups", path: "/seo-tools/lorem-ipsum", category: "SEO" },
  { name: "Blog Title Generator", description: "Create catchy, SEO-friendly titles", path: "/seo-tools/blog-titles", category: "SEO" },


  // Social Media Tools
  { name: "YouTube Thumbnail Downloader", description: "Download YouTube thumbnails in HD", path: "/social-media-tools/youtube-thumbnail", category: "Social Media" },
  { name: "YouTube Tag Extractor", description: "Extract tags from any YouTube video", path: "/social-media-tools/youtube-tags", category: "Social Media" },



  { name: "Link in Bio Generator", description: "Create beautiful link-in-bio pages", path: "/social-media-tools/link-in-bio", category: "Social Media" },
  { name: "YouTube Channel Checker", description: "Check if your desired channel name is available", path: "/social-media-tools/channel-checker", category: "Social Media" },
  { name: "YouTube Channel Name Generator", description: "Generate catchy, unique names for your YouTube channel with AI", path: "/social-media-tools/youtube-channel-name-generator", category: "Social Media" },
  { name: "Hashtag Counter", description: "Count and extract hashtags from posts", path: "/social-media-tools/hashtag-counter", category: "Social Media" },
  { name: "Instagram DP Viewer", description: "View and download Instagram profile pictures in full size HD", path: "/social-media-tools/instagram-dp", category: "Social Media" },
  { name: "Instagram Profile Picture Viewer", description: "View, zoom, and save full-size Instagram profile pictures", path: "/social-media-tools/instagram-profile-picture-viewer", category: "Social Media" },
  { name: "Influencer Rate Calculator", description: "Estimate creator rates from followers, engagement, platform, and campaign type", path: "/social-media-tools/influencer-rate-calculator", category: "Social Media" },
  { name: "TikTok Engagement Calculator", description: "Calculate TikTok engagement rate from views, likes, comments, shares, and followers", path: "/social-media-tools/tiktok-engagement-calculator", category: "Social Media" },

  { name: "AI Paraphraser", description: "Free AI paraphrasing tool. Rewrite text in 7 modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand. Powered by AI.", path: "/ai-tools/ai-paraphraser", category: "AI" },
  { name: "WHOIS & Domain Lookup", description: "Free WHOIS / RDAP domain lookup. View registrar, creation and expiry dates, status codes, nameservers, DNSSEC, and contact info for any domain.", path: "/web-tools/whois-lookup", category: "Web" },

  // Finance Tools
  { name: "Invoice Generator", description: "Create professional invoices for your business", path: "/finance-tools/invoice-generator", category: "Finance" },
  { name: "Auto Loan Calculator", description: "Estimate monthly car payments, total interest, and auto loan payoff schedule", path: "/finance-tools/auto-loan-calculator", category: "Finance" },
  { name: "PayPal Fee Calculator", description: "Calculate PayPal transaction fees", path: "/finance-tools/paypal-fee", category: "Finance" },
  { name: "PayPal G&S Fee Calculator", description: "Calculate PayPal Goods and Services fees, seller net, and gross-up amount", path: "/finance-tools/paypal-goods-and-services-fee-calculator", category: "Finance" },
  { name: "Discount Calculator", description: "Calculate sale prices and savings", path: "/finance-tools/discount-calculator", category: "Finance" },
  { name: "Tip Calculator", description: "Calculate tips for restaurants and services", path: "/finance-tools/tip-calculator", category: "Finance" },
  { name: "Savings Goal Tracker", description: "Track your savings goals", path: "/finance-tools/savings-tracker", category: "Finance" },
  { name: "Home Affordability Calculator", description: "Estimate how much house you can afford from income, debt, and down payment", path: "/finance-tools/home-affordability-calculator", category: "Finance" },
  { name: "Quarterly Tax Estimator", description: "Estimate 1099 quarterly tax payments with self-employment tax and safe harbor checks", path: "/finance-tools/quarterly-tax-estimator", category: "Finance" },
  { name: "Retirement Planner", description: "Plan your retirement with compound interest", path: "/finance-tools/retirement-planner", category: "Finance" },
  { name: "Bill Splitter", description: "Split bills and expenses fairly", path: "/finance-tools/bill-splitter", category: "Finance" },
  { name: "Credit Card Payoff Calculator", description: "Calculate credit card debt payoff time", path: "/finance-tools/credit-card-payoff", category: "Finance" },
  { name: "Salary Calculator", description: "Convert salary between hourly, weekly, monthly, and annual pay", path: "/finance-tools/salary-calculator", category: "Finance" },
  { name: "SaaS Churn Calculator", description: "Calculate customer churn, revenue churn, retention, and CLV for SaaS teams", path: "/finance-tools/saas-churn-calculator", category: "Finance" },
  { name: "SaaS Payback Calculator", description: "Calculate CAC payback period, gross-margin payback, and SaaS efficiency metrics", path: "/finance-tools/saas-payback-calculator", category: "Finance" },

  // Fun Tools
  { name: "Fun Tools", description: "Entertaining tools for celebrations and social content", path: "/fun-tools", category: "Pages" },
  { name: "Future Age Predictor", description: "See how old you'll be on any future date", path: "/fun-tools/future-age", category: "Fun" },
  { name: "Birthday Countdown", description: "Countdown to your next birthday", path: "/fun-tools/birthday-countdown", category: "Fun" },
  { name: "Anniversary Calculator", description: "Calculate how long you've been together", path: "/fun-tools/anniversary", category: "Fun" },
  { name: "Pomodoro Timer", description: "Free online Pomodoro focus timer with ambient sounds (rain, cafe, white noise, brown noise), task tracking, customizable sessions, keyboard shortcuts, notifications. Study timer for students and remote workers.", path: "/fun-tools/pomodoro-timer", category: "Fun" },

  // Security Tools
]
