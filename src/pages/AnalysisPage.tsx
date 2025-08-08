import React, { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card } from '../components/ui/Card';
import { LineChart } from '../components/charts/LineChart';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { historicalPriceData } from '../data/mockData';
import { Calendar, Filter, Download, Info } from 'lucide-react';

const AnalysisPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>(['price']);
  
  // Technical indicators
  const indicators = [
    { id: 'price', name: 'Price', color: '#3B82F6' },
    { id: 'ma', name: 'Moving Avg (50)', color: '#EC4899' },
    { id: 'ema', name: 'EMA (20)', color: '#8B5CF6' },
    { id: 'bollinger', name: 'Bollinger Bands', color: '#10B981' },
    { id: 'rsi', name: 'RSI', color: '#F59E0B' },
  ];
  
  // Toggle indicator selection
  const toggleIndicator = (id: string) => {
    if (selectedIndicators.includes(id)) {
      setSelectedIndicators(selectedIndicators.filter(item => item !== id));
    } else {
      setSelectedIndicators([...selectedIndicators, id]);
    }
  };
  
  // Prepare chart data based on selected indicators
  const getChartData = () => {
    const dates = historicalPriceData.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    
    const datasets = [];
    
    // Base price data
    if (selectedIndicators.includes('price')) {
      datasets.push({
        label: 'Price',
        data: historicalPriceData.map(item => item.value),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: false,
        tension: 0.3,
      });
    }
    
    // Simple Moving Average (50-day)
    if (selectedIndicators.includes('ma')) {
      // Simplified calculation for demo
      const movingAvg = historicalPriceData.map((item, index, array) => {
        if (index < 5) return null;
        const subset = array.slice(index - 5, index);
        const sum = subset.reduce((acc, curr) => acc + curr.value, 0);
        return sum / 5;
      });
      
      datasets.push({
        label: 'Moving Avg (50)',
        data: movingAvg,
        borderColor: '#EC4899',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
        borderDash: [],
        pointRadius: 0,
        fill: false,
      });
    }
    
    // Exponential Moving Average (20-day)
    if (selectedIndicators.includes('ema')) {
      // Simplified calculation for demo
      const ema = historicalPriceData.map((item, index, array) => {
        if (index === 0) return item.value;
        const k = 2 / (5 + 1);
        return item.value * k + (array[index - 1].value * (1 - k));
      });
      
      datasets.push({
        label: 'EMA (20)',
        data: ema,
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
      });
    }
    
    // Bollinger Bands
    if (selectedIndicators.includes('bollinger')) {
      // Simplified calculation for demo
      const middle = historicalPriceData.map((item, index, array) => {
        if (index < 5) return null;
        const subset = array.slice(index - 5, index);
        const sum = subset.reduce((acc, curr) => acc + curr.value, 0);
        return sum / 5;
      });
      
      const stdDev = historicalPriceData.map((item, index, array) => {
        if (index < 5) return null;
        const subset = array.slice(index - 5, index);
        const avg = subset.reduce((acc, curr) => acc + curr.value, 0) / 5;
        const squareDiffs = subset.map(val => Math.pow(val.value - avg, 2));
        const avgSquareDiff = squareDiffs.reduce((acc, curr) => acc + curr, 0) / 5;
        return Math.sqrt(avgSquareDiff);
      });
      
      datasets.push({
        label: 'Bollinger Middle',
        data: middle,
        borderColor: '#10B981',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
        borderDash: [],
        pointRadius: 0,
        fill: false,
      });
      
      datasets.push({
        label: 'Bollinger Upper',
        data: middle.map((val, i) => val !== null ? val + (stdDev[i] * 2) : null),
        borderColor: 'rgba(16, 185, 129, 0.5)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
      });
      
      datasets.push({
        label: 'Bollinger Lower',
        data: middle.map((val, i) => val !== null ? val - (stdDev[i] * 2) : null),
        borderColor: 'rgba(16, 185, 129, 0.5)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 1,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: 3,
      });
    }
    
    // RSI
    if (selectedIndicators.includes('rsi')) {
      // Simplified RSI calculation for demo
      const rsi = historicalPriceData.map((item, index, array) => {
        if (index === 0) return 50; // arbitrary starting point
        const change = item.value - array[index - 1].value;
        const randomFactor = Math.random() * 5 - 2.5; // Add some randomness for demo
        let newRsi = 50 + (change * 10) + randomFactor;
        if (newRsi > 100) newRsi = 100;
        if (newRsi < 0) newRsi = 0;
        return newRsi;
      });
      
      // Create a separate chart data structure for RSI
      const rsiData = {
        labels: dates,
        datasets: [
          {
            label: 'RSI',
            data: rsi,
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            fill: true,
            tension: 0.3,
          }
        ]
      };
      
      // For demo, we're just putting RSI on the same chart with a modified scale
      datasets.push({
        label: 'RSI (Scaled)',
        data: rsi.map(val => (val / 100 * 30) + 60), // Scale to make it visible on same chart
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderDash: [3, 3],
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        yAxisID: 'y1',
      });
    }
    
    return {
      labels: dates,
      datasets,
    };
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Analysis</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Analyze historical price patterns and technical indicators
            </p>
          </div>
          
          {/* Controls Section */}
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Time Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={timeRange === '7d' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setTimeRange('7d')}
                    >
                      7D
                    </Button>
                    <Button
                      variant={timeRange === '30d' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setTimeRange('30d')}
                    >
                      30D
                    </Button>
                    <Button
                      variant={timeRange === '90d' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setTimeRange('90d')}
                    >
                      90D
                    </Button>
                    <Button
                      variant={timeRange === '1y' ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setTimeRange('1y')}
                    >
                      1Y
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Calendar size={14} />}
                    >
                      Custom
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Technical Indicators
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {indicators.map(indicator => (
                      <Button
                        key={indicator.id}
                        variant={selectedIndicators.includes(indicator.id) ? 'secondary' : 'outline'}
                        size="sm"
                        onClick={() => toggleIndicator(indicator.id)}
                      >
                        <span 
                          className="inline-block w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: indicator.color }}
                        ></span>
                        {indicator.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="md"
                  icon={<Filter size={16} />}
                >
                  More Filters
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  icon={<Download size={16} />}
                >
                  Export
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Chart Section */}
          <Card className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Price Analysis</h2>
              <Badge variant="primary" size="sm">WTI Crude</Badge>
            </div>
            <LineChart data={getChartData()} height={400} />
          </Card>
          
          {/* Analysis Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card title="Technical Analysis Summary">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Info size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Market Condition</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        The current market is showing a <span className="font-medium text-success-600">bullish trend</span> with strong momentum indicators. RSI is at 67, indicating buying pressure but not yet overbought. Moving averages suggest continued upward movement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Support Levels</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Strong Support</span>
                          <span className="font-medium text-slate-900 dark:text-white">$78.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Support</span>
                          <span className="font-medium text-slate-900 dark:text-white">$80.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Weak Support</span>
                          <span className="font-medium text-slate-900 dark:text-white">$81.45</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Resistance Levels</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Weak Resistance</span>
                          <span className="font-medium text-slate-900 dark:text-white">$83.10</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Resistance</span>
                          <span className="font-medium text-slate-900 dark:text-white">$84.75</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Strong Resistance</span>
                          <span className="font-medium text-slate-900 dark:text-white">$86.30</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-md font-semibold text-slate-900 dark:text-white mb-3">Technical Signals</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">MACD</p>
                        <Badge variant="success" className="mt-1">Bullish</Badge>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">RSI</p>
                        <Badge variant="accent" className="mt-1">Neutral</Badge>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Stochastic</p>
                        <Badge variant="success" className="mt-1">Bullish</Badge>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">ADX</p>
                        <Badge variant="success" className="mt-1">Strong</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card title="Pattern Recognition">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Detected chart patterns and formations:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 dark:text-slate-200">
                          Cup and Handle
                        </h4>
                        <Badge variant="success" size="sm">Bullish</Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Formed over the past 20 days, suggesting potential continuation of uptrend.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 dark:text-slate-200">
                          Golden Cross
                        </h4>
                        <Badge variant="success" size="sm">Bullish</Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        50-day MA crossed above the 200-day MA, signaling potential for sustained uptrend.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-slate-800 dark:text-slate-200">
                          Support Bounce
                        </h4>
                        <Badge variant="accent" size="sm">Neutral</Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Price bounced from support at $80.20, confirming this as a valid support level.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Patterns
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default AnalysisPage;