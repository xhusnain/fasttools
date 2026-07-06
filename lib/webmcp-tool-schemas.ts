/**
 * WebMCP Tool Schema Registry
 *
 * Maps tool paths to their known input schemas and interaction modes.
 * The server-side API uses this to tell agents what inputs a tool expects
 * BEFORE they visit the page. Tools not in this registry still work
 * via client-side auto-discovery.
 */

export type InteractionMode = "button-click" | "realtime" | "generator" | "file-upload" | "api-dependent"

export interface ToolInputField {
    type: "text" | "number" | "date" | "textarea" | "select" | "radix-select" | "switch" | "toggle-group" | "file"
    label: string
    description?: string
    required?: boolean
    options?: string[]
    placeholder?: string
    defaultValue?: string
}

export interface ToolSchema {
    interactionMode: InteractionMode
    inputSchema?: Record<string, ToolInputField>
}

export const toolSchemas: Record<string, ToolSchema> = {
    // ── Calculator Tools (button-click) ──────────────────────────────
    "/calculator/bmi-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            weight: { type: "number", label: "Weight", description: "Body weight", required: true },
            height: { type: "number", label: "Height", description: "Body height", required: true },
        },
    },
    "/calculator/percentage-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            value1: { type: "number", label: "Value 1", required: true },
            value2: { type: "number", label: "Value 2", required: true },
        },
    },
    "/calculator/gpa-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            course: { type: "text", label: "Course Name" },
            grade: { type: "radix-select", label: "Grade", options: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"] },
            credits: { type: "number", label: "Credits", required: true },
        },
    },
    "/calculator/salary-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            salary: { type: "number", label: "Salary Amount", required: true },
            period: { type: "toggle-group", label: "Pay Period", options: ["Hourly", "Daily", "Weekly", "Bi-Weekly", "Monthly", "Annual"] },
        },
    },
    "/calculator/calorie-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            age: { type: "number", label: "Age", required: true },
            gender: { type: "toggle-group", label: "Gender", options: ["Male", "Female"] },
            weight: { type: "number", label: "Weight", required: true },
            height: { type: "number", label: "Height", required: true },
            activity: { type: "radix-select", label: "Activity Level", options: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extra Active"] },
        },
    },
    "/calculator/bmr-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            age: { type: "number", label: "Age", required: true },
            gender: { type: "toggle-group", label: "Gender", options: ["Male", "Female"] },
            weight: { type: "number", label: "Weight", required: true },
            height: { type: "number", label: "Height", required: true },
        },
    },
    "/calculator/body-fat-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            gender: { type: "toggle-group", label: "Gender", options: ["Male", "Female"] },
            weight: { type: "number", label: "Weight", required: true },
            height: { type: "number", label: "Height", required: true },
            waist: { type: "number", label: "Waist", required: true },
            neck: { type: "number", label: "Neck", required: true },
        },
    },
    "/calculator/age-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            birthdate: { type: "date", label: "Date of Birth", required: true },
        },
    },
    "/calculator/love-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            name1: { type: "text", label: "Your Name", required: true },
            name2: { type: "text", label: "Partner's Name", required: true },
        },
    },
    "/calculator/date-difference": {
        interactionMode: "button-click",
        inputSchema: {
            start_date: { type: "date", label: "Start Date", required: true },
            end_date: { type: "date", label: "End Date", required: true },
        },
    },
    "/calculator/scientific-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            expression: { type: "text", label: "Expression", description: "Math expression to evaluate" },
        },
    },
    "/calculator/fraction-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            numerator1: { type: "number", label: "Numerator 1", required: true },
            denominator1: { type: "number", label: "Denominator 1", required: true },
            operation: { type: "radix-select", label: "Operation", options: ["+", "-", "×", "÷"] },
            numerator2: { type: "number", label: "Numerator 2", required: true },
            denominator2: { type: "number", label: "Denominator 2", required: true },
        },
    },
    "/calculator/concrete-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            length: { type: "number", label: "Length", required: true },
            width: { type: "number", label: "Width", required: true },
            depth: { type: "number", label: "Depth", required: true },
        },
    },
    "/calculator/ip-subnet-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            ip_address: { type: "text", label: "IP Address", required: true, placeholder: "192.168.1.0" },
            subnet_mask: { type: "text", label: "Subnet Mask / CIDR", required: true, placeholder: "/24" },
        },
    },
    "/calculator/pregnancy-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            last_period: { type: "date", label: "Last Menstrual Period", required: true },
        },
    },

    // ── Finance Tools (button-click) ─────────────────────────────────
    "/finance-tools/loan-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            amount: { type: "number", label: "Loan Amount", required: true },
            interest_rate: { type: "number", label: "Interest Rate (%)", required: true },
            term: { type: "number", label: "Loan Term (years)", required: true },
        },
    },
    "/finance-tools/tip-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            bill_amount: { type: "number", label: "Bill Amount", required: true },
            tip_percentage: { type: "number", label: "Tip Percentage", required: true },
            split: { type: "number", label: "Split Between", defaultValue: "1" },
        },
    },
    "/finance-tools/discount-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            original_price: { type: "number", label: "Original Price", required: true },
            discount: { type: "number", label: "Discount (%)", required: true },
        },
    },
    "/finance-tools/paypal-fee": {
        interactionMode: "button-click",
        inputSchema: {
            amount: { type: "number", label: "Amount", required: true },
            transaction_type: { type: "radix-select", label: "Transaction Type", options: ["Domestic", "International"] },
        },
    },
    "/finance-tools/sales-tax-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            amount: { type: "number", label: "Amount", required: true },
            state: { type: "radix-select", label: "State" },
        },
    },
    "/finance-tools/bill-splitter": {
        interactionMode: "button-click",
        inputSchema: {
            total: { type: "number", label: "Total Bill", required: true },
            people: { type: "number", label: "Number of People", required: true },
            tip: { type: "number", label: "Tip (%)" },
        },
    },
    "/ad-tools/roas-calculator": {
        interactionMode: "button-click",
        inputSchema: {
            revenue: { type: "number", label: "Revenue", required: true },
            ad_spend: { type: "number", label: "Ad Spend", required: true },
        },
    },

    // ── Realtime Tools ───────────────────────────────────────────────
    "/converters/temperature": {
        interactionMode: "realtime",
        inputSchema: {
            value: { type: "number", label: "Temperature Value", required: true },
            from_unit: { type: "toggle-group", label: "From Unit", options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"] },
        },
    },
    "/converters/text-case": {
        interactionMode: "realtime",
        inputSchema: {
            text: { type: "textarea", label: "Input Text", required: true },
        },
    },
    "/converters/length": {
        interactionMode: "realtime",
        inputSchema: {
            value: { type: "number", label: "Value", required: true },
            from_unit: { type: "radix-select", label: "From Unit" },
            to_unit: { type: "radix-select", label: "To Unit" },
        },
    },
    "/converters/file-size": {
        interactionMode: "realtime",
        inputSchema: {
            value: { type: "number", label: "Value", required: true },
            from_unit: { type: "radix-select", label: "From Unit" },
            to_unit: { type: "radix-select", label: "To Unit" },
        },
    },
    "/dev-tools/jwt-decoder": {
        interactionMode: "realtime",
        inputSchema: {
            token: { type: "textarea", label: "JWT Token", required: true },
        },
    },
    "/dev-tools/regex-tester": {
        interactionMode: "realtime",
        inputSchema: {
            pattern: { type: "text", label: "Regex Pattern", required: true },
            test_string: { type: "textarea", label: "Test String", required: true },
            flags: { type: "text", label: "Flags", placeholder: "gi" },
        },
    },
    "/dev-tools/html-beautifier": {
        interactionMode: "realtime",
        inputSchema: {
            html: { type: "textarea", label: "HTML Code", required: true },
        },
    },
    "/dev-tools/html-to-markdown": {
        interactionMode: "realtime",
        inputSchema: {
            html: { type: "textarea", label: "HTML Content", required: true },
        },
    },
    "/dev-tools/markdown-previewer": {
        interactionMode: "realtime",
        inputSchema: {
            markdown: { type: "textarea", label: "Markdown Content", required: true },
        },
    },
    "/dev-tools/json-to-csv": {
        interactionMode: "realtime",
        inputSchema: {
            json: { type: "textarea", label: "JSON Data", required: true },
        },
    },
    "/dev-tools/sql-to-json": {
        interactionMode: "realtime",
        inputSchema: {
            sql: { type: "textarea", label: "SQL INSERT Statement", required: true },
        },
    },
    "/seo-tools/keyword-density": {
        interactionMode: "realtime",
        inputSchema: {
            text: { type: "textarea", label: "Content Text", required: true },
        },
    },
    "/crypto-tools/password-strength-analyzer": {
        interactionMode: "realtime",
        inputSchema: {
            password: { type: "text", label: "Password", required: true },
        },
    },
    "/crypto-tools/bcrypt": {
        interactionMode: "button-click",
        inputSchema: {
            text: { type: "text", label: "Text to Hash", required: true },
            rounds: { type: "number", label: "Cost Factor", defaultValue: "10" },
        },
    },
    "/crypto-tools/hmac-generator": {
        interactionMode: "realtime",
        inputSchema: {
            message: { type: "textarea", label: "Message", required: true },
            secret: { type: "text", label: "Secret Key", required: true },
            algorithm: { type: "radix-select", label: "Algorithm", options: ["SHA-256", "SHA-512", "MD5", "SHA-1"] },
        },
    },
    "/dev-tools/hex-to-rgb": {
        interactionMode: "realtime",
        inputSchema: {
            color: { type: "text", label: "Color Value", required: true, placeholder: "#FF5733" },
        },
    },

    // ── Generator Tools ──────────────────────────────────────────────
    "/crypto-tools/uuid-generator": {
        interactionMode: "generator",
        inputSchema: {
            version: { type: "toggle-group", label: "UUID Version", options: ["v4", "v7"] },
            count: { type: "number", label: "Count", defaultValue: "1" },
        },
    },
    "/crypto-tools/ulid-generator": {
        interactionMode: "generator",
        inputSchema: {
            count: { type: "number", label: "Count", defaultValue: "1" },
        },
    },
    "/crypto-tools/token-generator": {
        interactionMode: "generator",
        inputSchema: {
            length: { type: "number", label: "Token Length", defaultValue: "32" },
            type: { type: "radix-select", label: "Token Type", options: ["Alphanumeric", "Hex", "Base64", "Numeric"] },
        },
    },
    "/crypto-tools/rsa-generator": {
        interactionMode: "generator",
        inputSchema: {
            key_size: { type: "radix-select", label: "Key Size", options: ["2048", "4096"] },
        },
    },
    "/crypto-tools/otp-generator": {
        interactionMode: "generator",
        inputSchema: {
            secret: { type: "text", label: "Secret Key" },
        },
    },
    "/crypto-tools/bip39-generator": {
        interactionMode: "generator",
        inputSchema: {
            word_count: { type: "radix-select", label: "Word Count", options: ["12", "15", "18", "21", "24"] },
        },
    },
    "/seo-tools/lorem-ipsum": {
        interactionMode: "generator",
        inputSchema: {
            paragraphs: { type: "number", label: "Number of Paragraphs", defaultValue: "3" },
        },
    },
    "/seo-tools/blog-titles": {
        interactionMode: "generator",
        inputSchema: {
            topic: { type: "text", label: "Topic / Keyword", required: true },
        },
    },
    "/seo-tools/meta-tags": {
        interactionMode: "button-click",
        inputSchema: {
            title: { type: "text", label: "Page Title", required: true },
            description: { type: "textarea", label: "Page Description", required: true },
            url: { type: "text", label: "Page URL" },
            image: { type: "text", label: "Image URL" },
        },
    },

    // ── File Upload Tools ────────────────────────────────────────────
    "/pdf-tools/pdf-signature-checker": {
        interactionMode: "file-upload",
    },
    "/pdf-tools/pdf-splitter-merger": {
        interactionMode: "file-upload",
    },
    "/image-tools/image-to-text": {
        interactionMode: "file-upload",
    },

    // ── API-Dependent Tools ──────────────────────────────────────────
    "/converters/currency": {
        interactionMode: "api-dependent",
        inputSchema: {
            amount: { type: "number", label: "Amount", required: true },
            from_currency: { type: "radix-select", label: "From Currency" },
            to_currency: { type: "radix-select", label: "To Currency" },
        },
    },
    "/social-media-tools/youtube-thumbnail": {
        interactionMode: "api-dependent",
        inputSchema: {
            url: { type: "text", label: "YouTube URL", required: true },
        },
    },
    "/social-media-tools/youtube-tags": {
        interactionMode: "api-dependent",
        inputSchema: {
            url: { type: "text", label: "YouTube URL", required: true },
        },
    },

    // ── Fun / Misc Tools ─────────────────────────────────────────────
    "/fun-tools/future-age": {
        interactionMode: "button-click",
        inputSchema: {
            birthdate: { type: "date", label: "Date of Birth", required: true },
            future_date: { type: "date", label: "Future Date", required: true },
        },
    },
    "/fun-tools/birthday-countdown": {
        interactionMode: "button-click",
        inputSchema: {
            birthdate: { type: "date", label: "Date of Birth", required: true },
        },
    },
    "/fun-tools/anniversary": {
        interactionMode: "button-click",
        inputSchema: {
            start_date: { type: "date", label: "Anniversary Date", required: true },
        },
    },
    "/social-media-tools/hashtag-counter": {
        interactionMode: "realtime",
        inputSchema: {
            text: { type: "textarea", label: "Post Text", required: true },
        },
    },
}
