export interface SearchBarProps {
    className?: string
    inputClassName?: string
    autoFocus?: boolean
    placeholder?: string
    onBlur?: () => void
    variant?: "default" | "pill"
}
