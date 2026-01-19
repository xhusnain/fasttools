import type {
  CurrencyList,
  ExchangeRates,
  ConversionResult,
  HistoricalRates,
  TimeSeriesData,
  Top10CurrenciesResponse,
} from "@/types/api.types";

const FRANKFURTER_API_BASE = "https://api.frankfurter.dev/v1";

export const CurrencyRepository = {
  getCurrencies: async (): Promise<CurrencyList> => {
    const response = await fetch(`${FRANKFURTER_API_BASE}/currencies`);
    if (!response.ok) throw new Error("Failed to fetch currencies");
    return response.json();
  },

  getLatestRates: async (base: string = "USD"): Promise<ExchangeRates> => {
    const response = await fetch(`${FRANKFURTER_API_BASE}/latest?base=${base}`);
    if (!response.ok) throw new Error("Failed to fetch latest rates");
    return response.json();
  },

  convertCurrency: async (from: string, to: string, amount: number): Promise<ConversionResult> => {
    const response = await fetch(`${FRANKFURTER_API_BASE}/latest?amount=${amount}&from=${from}&to=${to}`);
    if (!response.ok) throw new Error("Failed to convert currency");

    const data = await response.json();
    const rate = data.rates[to];

    if (!rate) throw new Error("Currency not supported");

    return {
      from,
      to,
      amount,
      result: rate, // Frankfurter returns the total converted value for the given amount
      rate: rate / amount, // Calculate unit rate
      date: data.date
    };
  },

  getHistoricalRates: async (
    date: string,
    base: string,
    symbols?: string
  ): Promise<HistoricalRates> => {
    const symbolsParam = symbols ? `&symbols=${symbols}` : "";
    const response = await fetch(`${FRANKFURTER_API_BASE}/${date}?base=${base}${symbolsParam}`);
    if (!response.ok) throw new Error("Failed to fetch historical rates");
    return response.json();
  },

  getTimeSeries: async (
    startDate: string,
    endDate: string,
    base: string,
    symbols?: string
  ): Promise<TimeSeriesData> => {
    const symbolsParam = symbols ? `&symbols=${symbols}` : "";
    const response = await fetch(`${FRANKFURTER_API_BASE}/${startDate}..${endDate}?base=${base}${symbolsParam}`);
    if (!response.ok) throw new Error("Failed to fetch time series");
    return response.json();
  },

  getTop10Currencies: async (): Promise<Top10CurrenciesResponse> => {
    const TOP_10_CURRENCIES = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD'];
    const base = 'USD';
    const days = 10;

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    const [timeSeriesResponse, latestResponse] = await Promise.all([
      fetch(`${FRANKFURTER_API_BASE}/${startDateStr}..${endDateStr}?base=${base}&symbols=${TOP_10_CURRENCIES.join(',')}`),
      fetch(`${FRANKFURTER_API_BASE}/latest?base=${base}&symbols=${TOP_10_CURRENCIES.join(',')}`)
    ]);

    if (!timeSeriesResponse.ok || !latestResponse.ok) {
      throw new Error('Service Unavailable');
    }

    const timeSeriesData = await timeSeriesResponse.json();
    const latestData = await latestResponse.json();

    const currencyStats = TOP_10_CURRENCIES.map(currency => {
      if (currency === base) {
        return {
          code: currency,
          name: getCurrencyName(currency),
          rate: 1.0000,
          currentRate: 1.0000,
          change: 0.0000,
          changePercent: 0.00,
          trend: 'stable' as const,
          minRate: 1.0000,
          maxRate: 1.0000,
          avgRate: 1.0000,
          symbol: getCurrencySymbol(currency)
        };
      }

      const rates = Object.values(timeSeriesData.rates).map((dayRates: any) => dayRates[currency]).filter((rate: any) => rate !== undefined) as number[];

      if (rates.length === 0) {
        return {
          code: currency,
          name: getCurrencyName(currency),
          rate: 0,
          currentRate: 0,
          change: 0,
          changePercent: 0,
          trend: 'stable' as const,
          minRate: 0,
          maxRate: 0,
          avgRate: 0,
          symbol: getCurrencySymbol(currency)
        };
      }

      const currentRate = latestData.rates[currency] || rates[rates.length - 1];
      const previousRate = rates[rates.length - 2] || rates[0];
      const change = currentRate - previousRate;
      const changePercent = (change / previousRate) * 100;

      let trend: 'up' | 'down' | 'stable' = 'stable';
      if (changePercent > 0.5) trend = 'up';
      else if (changePercent < -0.5) trend = 'down';

      const minRate = Math.min(...rates);
      const maxRate = Math.max(...rates);
      const avgRate = rates.reduce((a, b) => a + b, 0) / rates.length;

      return {
        code: currency,
        name: getCurrencyName(currency),
        currentRate: Number(currentRate.toFixed(4)), // Match component expectation 'currentRate' vs 'rate'
        rate: Number(currentRate.toFixed(4)), // Keep 'rate' for backward compat if needed
        change: Number(change.toFixed(4)),
        changePercent: Number(changePercent.toFixed(2)),
        trend,
        minRate: Number(minRate.toFixed(4)),
        maxRate: Number(maxRate.toFixed(4)),
        avgRate: Number(avgRate.toFixed(4)),
        symbol: getCurrencySymbol(currency)
      };
    });

    currencyStats.sort((a, b) => b.rate - a.rate);

    return {
      currencies: currencyStats,
      base,
      date: latestData.date
    };
  },
};

// Helper functions (could be moved to a utils file but kept here for self-containment as requested)
function getCurrencySymbol(code: string): string {
  const symbols: Record<string, string> = {
    'USD': '$', 'EUR': '€', 'JPY': '¥', 'GBP': '£', 'AUD': 'A$', 'CAD': 'C$', 'CHF': 'CHF', 'CNY': '¥',
    'HKD': 'HK$', 'NZD': 'NZ$'
  };
  return symbols[code] || code;
}

function getCurrencyName(code: string): string {
  const names: Record<string, string> = {
    'USD': 'US Dollar', 'EUR': 'Euro', 'JPY': 'Japanese Yen', 'GBP': 'British Pound Sterling',
    'AUD': 'Australian Dollar', 'CAD': 'Canadian Dollar', 'CHF': 'Swiss Franc', 'CNY': 'Chinese Yuan',
    'HKD': 'Hong Kong Dollar', 'NZD': 'New Zealand Dollar'
  };
  return names[code] || code;
}

