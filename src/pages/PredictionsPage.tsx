import React, { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card } from '../components/ui/Card';
import { PredictionChart } from '../components/charts/PredictionChart';
import { Button } from '../components/ui/Button';
import { historicalPriceData, predictionData, factorInfluences } from '../data/mockData';
import { Calendar, SlidersHorizontal as SliderHorizontal, RefreshCw } from 'lucide-react';

const PredictionsPage: React.FC = () => {
  const [predictionRange, setPredictionRange] = useState<number>(14);
  const [confidenceLevel, setConfidenceLevel] = useState<number>(80);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Function to simulate recalculating predictions
  const recalculatePredictions = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Crude Oil Price Predictions
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Advanced forecasting models to predict future price movements
            </p>
          </div>
          
          {/* Controls Section */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-subtle p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="prediction-range" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Prediction Range
                </label>
                <div className="flex items-center">
                  <select
                    id="prediction-range"
                    className="input"
                    value={predictionRange}
                    onChange={(e) => setPredictionRange(Number(e.target.value))}
                  >
                    <option value="7">7 Days</option>
                    <option value="14">14 Days</option>
                    <option value="30">30 Days</option>
                    <option value="90">90 Days</option>
                  </select>
                  <Calendar className="ml-2 text-slate-500" size={20} />
                </div>
              </div>
              
              <div>
                <label htmlFor="confidence-level" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Confidence Level: {confidenceLevel}%
                </label>
                <div className="flex items-center">
                  <input
                    id="confidence-level"
                    type="range"
                    min="50"
                    max="99"
                    step="1"
                    value={confidenceLevel}
                    onChange={(e) => setConfidenceLevel(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer dark:bg-slate-700"
                  />
                  <SliderHorizontal className="ml-2 text-slate-500" size={20} />
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="primary" 
                  onClick={recalculatePredictions}
                  isLoading={isLoading}
                  icon={<RefreshCw size={16} />}
                  className="w-full"
                >
                  Recalculate Predictions
                </Button>
              </div>
            </div>
          </div>
          
          {/* Prediction Chart */}
          <Card className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Price Forecast</h2>
            <PredictionChart 
              historicalData={historicalPriceData.slice(-30)} 
              predictionData={predictionData.slice(0, predictionRange)}
              height={450}
            />
            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              <p>
                This prediction is based on our advanced machine learning models taking into account historical prices, market factors, and current trends.
                The shaded area represents the {confidenceLevel}% confidence interval.
              </p>
            </div>
          </Card>
          
          {/* Prediction Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card title="Prediction Details">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-semibold text-slate-900 dark:text-white mb-2">Methodology</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Our prediction system uses a combination of time series analysis, machine learning models, and fundamental analysis to forecast crude oil prices.
                      The primary models employed include ARIMA, LSTM neural networks, and ensemble methods that incorporate market sentiment and technical indicators.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-md font-semibold text-slate-900 dark:text-white mb-2">Key Predictions</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center text-accent-800 dark:text-accent-300 text-xs mr-2 mt-0.5">1</span>
                        <span>Short-term (7 days): <span className="font-medium">${(predictionData[6].predicted).toFixed(2)}</span> with slight upward pressure due to current supply constraints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center text-accent-800 dark:text-accent-300 text-xs mr-2 mt-0.5">2</span>
                        <span>Medium-term (14 days): <span className="font-medium">${(predictionData[13].predicted).toFixed(2)}</span> with increased volatility expected from upcoming OPEC+ meeting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center text-accent-800 dark:text-accent-300 text-xs mr-2 mt-0.5">3</span>
                        <span>Expected price floor: <span className="font-medium">${(Math.min(...predictionData.map(d => d.lowerBound || d.predicted))).toFixed(2)}</span> based on production costs and technical support levels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center text-accent-800 dark:text-accent-300 text-xs mr-2 mt-0.5">4</span>
                        <span>Expected price ceiling: <span className="font-medium">${(Math.max(...predictionData.map(d => d.upperBound || d.predicted))).toFixed(2)}</span> constrained by demand elasticity and alternative energy sources</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-md font-semibold text-slate-900 dark:text-white mb-2">Model Accuracy</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">7-Day Accuracy</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">94.8%</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">14-Day Accuracy</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">91.2%</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-500 dark:text-slate-400">30-Day Accuracy</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">87.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card title="Market Factors">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Current market factors affecting the prediction:
                  </p>
                  
                  <div className="space-y-4">
                    {factorInfluences.map((factor, index) => (
                      <div key={index} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-slate-800 dark:text-slate-200">{factor.factor}</h4>
                          <span className={`text-sm ${factor.influence > 0 ? 'text-success-600' : 'text-danger-600'}`}>
                            {factor.influence > 0 ? '+' : ''}{factor.influence.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {factor.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Note: These factors are constantly monitored and our prediction models are updated accordingly.
                    </p>
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

export default PredictionsPage;