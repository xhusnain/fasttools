import { HttpClient } from "../api/http-client";
import type {
  CurrencyList,
  ExchangeRates,
  ConversionResult,
  HistoricalRates,
  TimeSeriesData,
  Top10CurrenciesResponse,
} from "@/types/api.types";

const FRANKFURTER_API_BASE = "https://api.frankfurter.app";

export const CurrencyRepository = {
  getCurrencies: async (): Promise<CurrencyList> => {
    const response = await fetch(`${FRANKFURTER_API_BASE}/currencies`);
    if (!response.ok) {
      throw new Error("Failed to fetch currencies");
    }
    return response.json();
  },

  getLatestRates: async (base: string = "USD"): Promise<ExchangeRates> => {
    const response = await HttpClient.get<ExchangeRates>(`/currency_converter/latest?base=${base}`);
    return response.data;
  },

  convertCurrency: async (from: string, to: string, amount: number): Promise<ConversionResult> => {
    const response = await HttpClient.get<ConversionResult>(
      `/currency_converter/convert?from=${from}&to=${to}&amount=${amount}`
    );
    return response.data;
  },

  getHistoricalRates: async (
    date: string,
    base: string,
    symbols?: string
  ): Promise<HistoricalRates> => {
    const symbolsParam = symbols ? `&symbols=${symbols}` : "";
    const response = await HttpClient.get<HistoricalRates>(
      `/currency_converter/historical?date=${date}&base=${base}${symbolsParam}`
    );
    return response.data;
  },

  getTimeSeries: async (
    startDate: string,
    endDate: string,
    base: string,
    symbols?: string
  ): Promise<TimeSeriesData> => {
    const symbolsParam = symbols ? `&symbols=${symbols}` : "";
    const response = await HttpClient.get<TimeSeriesData>(
      `/currency_converter/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}${symbolsParam}`
    );
    return response.data;
  },

  getTop10Currencies: async (): Promise<Top10CurrenciesResponse> => {
    const response = await HttpClient.get<Top10CurrenciesResponse>("/currency_converter/top10");
    return response.data;
  },
};

