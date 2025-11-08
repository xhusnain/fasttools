import { NextRequest, NextResponse } from 'next/server'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

const TOP_10_CURRENCIES = [
  'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD'
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const base = searchParams.get('base') || 'USD'
    const days = parseInt(searchParams.get('days') || '10')

    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(endDate.getDate() - days)

    const startDateStr = startDate.toISOString().split('T')[0]
    const endDateStr = endDate.toISOString().split('T')[0]

    const timeSeriesResponse = await fetch(
      `${FRANKFURTER_API_BASE}/${startDateStr}..${endDateStr}?base=${base}&symbols=${TOP_10_CURRENCIES.join(',')}`
    )
    if (!timeSeriesResponse.ok) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }
    const timeSeriesData = await timeSeriesResponse.json().catch(() => null)
    if (!timeSeriesData) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }

    const latestResponse = await fetch(
      `${FRANKFURTER_API_BASE}/latest?base=${base}&symbols=${TOP_10_CURRENCIES.join(',')}`
    )
    if (!latestResponse.ok) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }
    const latestData = await latestResponse.json().catch(() => null)
    if (!latestData) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }

    const currencyStats = TOP_10_CURRENCIES.map(currency => {

        if (currency === base) {
          return {
            currency,
            currentRate: 1.0000,
            change: 0.0000,
            changePercent: 0.00,
            minRate: 1.0000,
            maxRate: 1.0000,
            avgRate: 1.0000,
            trend: 'stable',
            symbol: getCurrencySymbol(currency),
            name: getCurrencyName(currency)
          }
        }

        const rates = Object.values(timeSeriesData.rates).map((dayRates: any) => dayRates[currency]).filter(rate => rate !== undefined)

        if (rates.length === 0) {
          return {
            currency,
            currentRate: 0,
            change: 0,
            changePercent: 0,
            minRate: 0,
            maxRate: 0,
            avgRate: 0,
            trend: 'stable'
          }
        }

        const currentRate = latestData.rates[currency] || rates[rates.length - 1]
        const previousRate = rates[rates.length - 2] || rates[0]
        const change = currentRate - previousRate
        const changePercent = (change / previousRate) * 100
        const minRate = Math.min(...rates)
        const maxRate = Math.max(...rates)
        const avgRate = rates.reduce((sum, rate) => sum + rate, 0) / rates.length

        let trend = 'stable'
        if (changePercent > 0.5) trend = 'up'
        else if (changePercent < -0.5) trend = 'down'

        return {
          currency,
          currentRate: Number(currentRate.toFixed(4)),
          change: Number(change.toFixed(4)),
          changePercent: Number(changePercent.toFixed(2)),
          minRate: Number(minRate.toFixed(4)),
          maxRate: Number(maxRate.toFixed(4)),
          avgRate: Number(avgRate.toFixed(4)),
          trend,
          symbol: getCurrencySymbol(currency),
          name: getCurrencyName(currency)
        }
      })

    currencyStats.sort((a, b) => b.currentRate - a.currentRate)

    return NextResponse.json({
      success: true,
      data: {
        currencies: currencyStats,
        baseCurrency: base,
        dateRange: {
          start: startDateStr,
          end: endDateStr,
          days: days
        },
        lastUpdated: latestData.date
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching top 10 currencies data:', error)
    return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
  }
}

function getCurrencySymbol(code: string): string {
  const symbols: Record<string, string> = {
    'USD': '$',
    'EUR': '€',
    'JPY': '¥',
    'GBP': '£',
    'AUD': 'A$',
    'CAD': 'C$',
    'CHF': 'CHF',
    'CNY': '¥',
    'SEK': 'kr',
    'NZD': 'NZ$',
    'INR': '₹',
    'BRL': 'R$',
    'MXN': '$',
    'ZAR': 'R',
    'KRW': '₩',
    'SGD': 'S$',
    'HKD': 'HK$',
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

function getCurrencyName(code: string): string {
  const names: Record<string, string> = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'JPY': 'Japanese Yen',
    'GBP': 'British Pound Sterling',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'SEK': 'Swedish Krona',
    'NZD': 'New Zealand Dollar',
    'INR': 'Indian Rupee',
    'BRL': 'Brazilian Real',
    'MXN': 'Mexican Peso',
    'ZAR': 'South African Rand',
    'KRW': 'South Korean Won',
    'SGD': 'Singapore Dollar',
    'HKD': 'Hong Kong Dollar',
    'TRY': 'Turkish Lira',
    'ILS': 'Israeli Shekel',
    'AED': 'UAE Dirham',
    'SAR': 'Saudi Riyal',
    'QAR': 'Qatari Riyal',
    'KWD': 'Kuwaiti Dinar',
    'BHD': 'Bahraini Dinar',
    'OMR': 'Omani Rial',
    'JOD': 'Jordanian Dinar',
    'LBP': 'Lebanese Pound',
    'EGP': 'Egyptian Pound',
    'PKR': 'Pakistani Rupee',
    'BDT': 'Bangladeshi Taka',
    'LKR': 'Sri Lankan Rupee',
    'NPR': 'Nepalese Rupee',
    'THB': 'Thai Baht',
    'MYR': 'Malaysian Ringgit',
    'IDR': 'Indonesian Rupiah',
    'PHP': 'Philippine Peso',
    'VND': 'Vietnamese Dong',
    'TWD': 'Taiwan Dollar',
    'ARS': 'Argentine Peso',
    'CLP': 'Chilean Peso',
    'COP': 'Colombian Peso',
    'PEN': 'Peruvian Sol',
    'UYU': 'Uruguayan Peso',
    'BOB': 'Bolivian Boliviano',
    'PYG': 'Paraguayan Guarani',
    'RON': 'Romanian Leu',
    'BGN': 'Bulgarian Lev',
    'HRK': 'Croatian Kuna',
    'RSD': 'Serbian Dinar',
    'MKD': 'Macedonian Denar',
    'ALL': 'Albanian Lek',
    'ISK': 'Icelandic Krona',
    'MDL': 'Moldovan Leu',
    'UAH': 'Ukrainian Hryvnia',
    'BYN': 'Belarusian Ruble',
    'KZT': 'Kazakhstani Tenge',
    'UZS': 'Uzbekistani Som',
    'KGS': 'Kyrgyzstani Som',
    'TJS': 'Tajikistani Somoni',
    'TMT': 'Turkmenistani Manat',
    'AZN': 'Azerbaijani Manat',
    'GEL': 'Georgian Lari',
    'AMD': 'Armenian Dram',
    'AFN': 'Afghan Afghani',
    'IRR': 'Iranian Rial',
    'IQD': 'Iraqi Dinar',
    'YER': 'Yemeni Rial',
    'SYP': 'Syrian Pound',
    'LYD': 'Libyan Dinar',
    'TND': 'Tunisian Dinar',
    'DZD': 'Algerian Dinar',
    'MAD': 'Moroccan Dirham',
    'ETB': 'Ethiopian Birr',
    'KES': 'Kenyan Shilling',
    'UGX': 'Ugandan Shilling',
    'TZS': 'Tanzanian Shilling',
    'RWF': 'Rwandan Franc',
    'BIF': 'Burundian Franc',
    'DJF': 'Djiboutian Franc',
    'SOS': 'Somali Shilling',
    'ERN': 'Eritrean Nakfa',
    'SDG': 'Sudanese Pound',
    'SSP': 'South Sudanese Pound',
    'CDF': 'Congolese Franc',
    'AOA': 'Angolan Kwanza',
    'ZMW': 'Zambian Kwacha',
    'BWP': 'Botswana Pula',
    'SZL': 'Swazi Lilangeni',
    'LSL': 'Lesotho Loti',
    'NAD': 'Namibian Dollar',
    'MZN': 'Mozambican Metical',
    'MGA': 'Malagasy Ariary',
    'SCR': 'Seychellois Rupee',
    'MUR': 'Mauritian Rupee',
    'KMF': 'Comorian Franc',
    'MVR': 'Maldivian Rufiyaa',
    'BTN': 'Bhutanese Ngultrum',
    'MMK': 'Myanmar Kyat',
    'LAK': 'Lao Kip',
    'KHR': 'Cambodian Riel',
    'MOP': 'Macanese Pataca',
    'BND': 'Brunei Dollar',
    'FJD': 'Fijian Dollar',
    'PGK': 'Papua New Guinean Kina',
    'SBD': 'Solomon Islands Dollar',
    'VUV': 'Vanuatu Vatu',
    'WST': 'Samoan Tala',
    'TOP': 'Tongan Paʻanga',
    'XPF': 'CFP Franc'
  }

  return names[code] || code
}
