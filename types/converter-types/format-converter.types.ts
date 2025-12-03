export type Format = "html" | "markdown" | "json" | "yaml" | "xml" | "csv" | "toml" | "pdf"

export interface FormatOption {
    value: Format
    label: string
    description: string
    fileExtension: string
}
