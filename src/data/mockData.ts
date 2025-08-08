import { OilPriceData, HistoricalData, PredictionData, FactorInfluence, NewsItem } from '../types';

// Current oil price data
export const currentOilPrice: OilPriceData = {
  date: new Date().toISOString().split('T')[0],
  price: 85.32,
  change: 1.23,
  percentChange: 1.51,
};

// Historical price data (past 30 days)
export const historicalPriceData: HistoricalData[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (30 - i));
  
  // Start with base value and add some randomness
  const baseValue = 80;
  const trend = i / 10; // Slight upward trend
  const volatility = Math.random() * 4 - 2; // Random fluctuation between -2 and 2
  
  return {
    date: date.toISOString().split('T')[0],
    value: baseValue + trend + volatility,
  };
});

// Prediction data for next 14 days
export const predictionData: PredictionData[] = Array.from({ length: 14 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i + 1);
  
  const lastPrice = historicalPriceData[historicalPriceData.length - 1].value;
  const trend = 0.15 * i; // Upward trend
  const volatility = 1.5; // Prediction volatility
  const predicted = lastPrice + trend + (Math.random() * volatility - volatility / 2);
  
  return {
    date: date.toISOString().split('T')[0],
    predicted: Number(predicted.toFixed(2)),
    lowerBound: Number((predicted - volatility * 1.5).toFixed(2)),
    upperBound: Number((predicted + volatility * 1.5).toFixed(2)),
  };
});

// Factor influence data
export const factorInfluences: FactorInfluence[] = [
  {
    factor: 'OPEC+ Production',
    influence: 0.85,
    description: 'Recent OPEC+ meeting resulted in commitment to production cuts'
  },
  {
    factor: 'US Inventories',
    influence: -0.65,
    description: 'Crude oil inventories rose by 4.2 million barrels last week'
  },
  {
    factor: 'Global Demand',
    influence: 0.55,
    description: 'Economic recovery in Asia driving increased demand'
  },
  {
    factor: 'USD Strength',
    influence: -0.40,
    description: 'Dollar strengthened against major currencies this week'
  },
  {
    factor: 'Geopolitical Tensions',
    influence: 0.75,
    description: 'Ongoing conflicts in oil-producing regions creating uncertainty'
  },
  {
    factor: 'Weather Events',
    influence: 0.25,
    description: 'Hurricane season affecting Gulf of Mexico production'
  },
];

// News data
export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'OPEC+ Announces Extended Production Cuts Through Q3',
    source: 'Energy News Today',
    date: '2025-06-10',
    summary: 'OPEC+ members agreed to extend production cuts of 1.5 million barrels per day through the third quarter of 2025, signaling continued efforts to stabilize global oil markets.',
    url: '#',
    sentiment: 'positive',
    impact: 'high'
  },
  {
    id: '2',
    title: 'US Crude Inventories Rise for Third Consecutive Week',
    source: 'Oil Market Report',
    date: '2025-06-08',
    summary: 'U.S. crude oil inventories increased by 4.2 million barrels last week, exceeding analyst expectations and putting downward pressure on prices.',
    url: '#',
    sentiment: 'negative',
    impact: 'medium'
  },
  {
    id: '3',
    title: 'China\'s Manufacturing Activity Expands, Boosting Oil Demand Outlook',
    source: 'Global Economy Insights',
    date: '2025-06-05',
    summary: 'China\'s manufacturing PMI rose to 52.8 in May, indicating expansion and potentially increasing oil demand from the world\'s largest importer.',
    url: '#',
    sentiment: 'positive',
    impact: 'medium'
  },
  {
    id: '4',
    title: 'Tensions in Middle East Escalate, Oil Transit Concerns Rise',
    source: 'World Affairs Daily',
    date: '2025-06-03',
    summary: 'Escalating tensions in the Strait of Hormuz have raised concerns about potential disruptions to oil transport routes, adding a risk premium to crude prices.',
    url: '#',
    sentiment: 'negative',
    impact: 'high'
  },
  {
    id: '5',
    title: 'Renewable Energy Investments Reached Record High in Q1 2025',
    source: 'Clean Energy Report',
    date: '2025-06-01',
    summary: 'Global investments in renewable energy hit $120 billion in Q1 2025, potentially accelerating the long-term transition away from fossil fuels.',
    url: '#',
    sentiment: 'negative',
    impact: 'low'
  },
];

// Dashboard stats
export const dashboardStats = [
  {
    label: 'WTI Crude',
    value: '$85.32',
    change: '+1.51%',
    isPositive: true,
  },
  {
    label: 'Brent Crude',
    value: '$87.45',
    change: '+1.34%',
    isPositive: true,
  },
  {
    label: 'Natural Gas',
    value: '$2.97',
    change: '-0.34%',
    isPositive: false,
  },
  {
    label: 'RBOB Gasoline',
    value: '$2.67',
    change: '+2.12%',
    isPositive: true,
  },
];