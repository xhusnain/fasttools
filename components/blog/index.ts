export const toFixedWithoutZeros = (num: number, precision: number) =>
    num.toFixed(precision).replace(/\.0+$/, '')

export const formatNumberAbbreviation = (
    value: number,
    decimalFormat = false,
    fraction = 2
) => {
    if (isNaN(value) || !value) {
        return '0'
    }
    const suffixes = ['', 'K', 'M', 'B', 'T']
    const index = Math.floor(Math.log10(value) / 3)
    const result = value / Math.pow(1000, index)
    return decimalFormat
        ? Math.trunc(result) + suffixes[index]
        : toFixedWithoutZeros(Number(result.toFixed(fraction)), fraction) +
        suffixes[index]
}

export const formatSpend = (
    value?: number,
    format = false,
    decimalValues = true
) => {
    if (value === 0) return '$0'
    if (!value) return ''
    if (!decimalValues)
        return `$${formatNumberAbbreviation(Number(value), false).toLocaleString()}`
    if (format)
        return `$${formatNumberAbbreviation(Number(value)).toLocaleString()}`
    return `$${value.toLocaleString()}`
}