// Theme types
export type ThemeMode = 'light' | 'dark';

// Oil price data types
export interface OilPriceData {
  date: string;
  price: number;
  change: number;
  percentChange: number;
}

export interface HistoricalData {
  date: string;
  value: number;
}

export interface PredictionData {
  date: string;
  predicted: number;
  actual?: number;
  lowerBound?: number;
  upperBound?: number;
}

export interface FactorInfluence {
  factor: string;
  influence: number;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  impact: 'high' | 'medium' | 'low';
}

// User preferences
export interface UserPreferences {
  theme: ThemeMode;
  dashboardLayout: string[];
  favoriteIndicators: string[];
}

// Dashboard widget types
export interface Widget {
  id: string;
  title: string;
  type: 'chart' | 'stats' | 'news' | 'prediction';
  size: 'small' | 'medium' | 'large';
}