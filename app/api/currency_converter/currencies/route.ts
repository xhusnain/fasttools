import { NextRequest, NextResponse } from 'next/server'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

export async function GET() {
  try {
    const response = await fetch(`${FRANKFURTER_API_BASE}/currencies`)
    if (!response.ok) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }
    const currencies = await response.json().catch(() => null)
    if (!currencies) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }

    const formattedCurrencies = Object.entries(currencies).map(([code, name]) => ({
      code,
      name: name as string,
      symbol: getCurrencySymbol(code)
    }))

    return NextResponse.json({
      success: true,
      data: formattedCurrencies,
      count: formattedCurrencies.length
    })

  } catch (error) {
    console.error('Error fetching currencies:', error)
    return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
  }
}

function getCurrencySymbol(code: string): string {
  const symbols: Record<string, string> = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'CNY': '¥',
    'INR': '₹',
    'AUD': 'A$',
    'CAD': 'C$',
    'CHF': 'CHF',
    'SEK': 'kr',
    'NOK': 'kr',
    'DKK': 'kr',
    'PLN': 'zł',
    'CZK': 'Kč',
    'HUF': 'Ft',
    'RUB': '₽',
    'BRL': 'R$',
    'MXN': '$',
    'ZAR': 'R',
    'KRW': '₩',
    'SGD': 'S$',
    'HKD': 'HK$',
    'NZD': 'NZ$',
    'TRY': '₺',
    'ILS': '₪',
    'AED': 'د.إ',
    'SAR': '﷼',
    'QAR': '﷼',
    'KWD': 'د.ك',
    'BHD': 'د.ب',
    'OMR': '﷼',
    'JOD': 'د.ا',
    'LBP': 'ل.ل',
    'EGP': '£',
    'PKR': '₨',
    'BDT': '৳',
    'LKR': '₨',
    'NPR': '₨',
    'THB': '฿',
    'MYR': 'RM',
    'IDR': 'Rp',
    'PHP': '₱',
    'VND': '₫',
    'TWD': 'NT$',
    'ARS': '$',
    'CLP': '$',
    'COP': '$',
    'PEN': 'S/',
    'UYU': '$U',
    'BOB': 'Bs',
    'PYG': '₲',
    'RON': 'lei',
    'BGN': 'лв',
    'HRK': 'kn',
    'RSD': 'дин',
    'MKD': 'ден',
    'ALL': 'L',
    'ISK': 'kr',
    'MDL': 'L',
    'UAH': '₴',
    'BYN': 'Br',
    'KZT': '₸',
    'UZS': 'лв',
    'KGS': 'лв',
    'TJS': 'SM',
    'TMT': 'T',
    'AZN': '₼',
    'GEL': '₾',
    'AMD': '֏',
    'AFN': '؋',
    'IRR': '﷼',
    'IQD': 'ع.د',
    'YER': '﷼',
    'SYP': '£',
    'LYD': 'ل.د',
    'TND': 'د.ت',
    'DZD': 'د.ج',
    'MAD': 'د.م.',
    'ETB': 'Br',
    'KES': 'KSh',
    'UGX': 'USh',
    'TZS': 'TSh',
    'RWF': 'RF',
    'BIF': 'FBu',
    'DJF': 'Fdj',
    'SOS': 'S',
    'ERN': 'Nfk',
    'SDG': 'ج.س.',
    'SSP': '£',
    'CDF': 'FC',
    'AOA': 'Kz',
    'ZMW': 'ZK',
    'BWP': 'P',
    'SZL': 'L',
    'LSL': 'L',
    'NAD': 'N$',
    'MZN': 'MT',
    'MGA': 'Ar',
    'SCR': '₨',
    'MUR': '₨',
    'KMF': 'CF',
    'MVR': '.ރ',
    'BTN': 'Nu.',
    'MMK': 'K',
    'LAK': '₭',
    'KHR': '៛',
    'MOP': 'MOP$',
    'BND': 'B$',
    'FJD': 'FJ$',
    'PGK': 'K',
    'SBD': 'SI$',
    'VUV': 'Vt',
    'WST': 'WS$',
    'TOP': 'T$',
    'XPF': '₣'
  }

  return symbols[code] || code
}
