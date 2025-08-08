import React from 'react';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { OilPriceData } from '../../types';

interface PriceOverviewProps {
  data: OilPriceData;
}

export const PriceOverview: React.FC<PriceOverviewProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <Card className="h-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Crude Oil Price</h2>
          <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <Clock size={14} className="mr-1" />
            {formatDate(data.date)}
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
          <div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">${data.price.toFixed(2)}</span>
            <div className={`flex items-center mt-1 ${data.change > 0 ? 'text-success-600' : 'text-danger-600'}`}>
              {data.change > 0 ? <TrendingUp size={18} className="mr-1" /> : <TrendingDown size={18} className="mr-1" />}
              <span className="font-medium">{data.change > 0 ? '+' : ''}{data.change.toFixed(2)}</span>
              <span className="ml-1">({data.change > 0 ? '+' : ''}{data.percentChange.toFixed(2)}%)</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-md overflow-hidden">
              <div className="relative h-full">
                {/* Price history visualization (simplified) */}
                <div className="absolute inset-0 flex items-end">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = 30 + Math.random() * 70;
                    return (
                      <div 
                        key={i} 
                        className={`w-full h-[${height}%] ${data.change > 0 ? 'bg-success-500' : 'bg-danger-500'} opacity-${70 + Math.floor(Math.random() * 30)}`}
                        style={{ 
                          height: `${height}%`,
                          opacity: 0.7 + (Math.random() * 0.3)
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md">
            <p className="text-slate-500 dark:text-slate-400 mb-1">Open</p>
            <p className="font-medium text-slate-900 dark:text-white">${(data.price - Math.random() * 0.5).toFixed(2)}</p>
          </div>
          
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md">
            <p className="text-slate-500 dark:text-slate-400 mb-1">High</p>
            <p className="font-medium text-slate-900 dark:text-white">${(data.price + Math.random() * 0.8).toFixed(2)}</p>
          </div>
          
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md">
            <p className="text-slate-500 dark:text-slate-400 mb-1">Low</p>
            <p className="font-medium text-slate-900 dark:text-white">${(data.price - Math.random() * 1.2).toFixed(2)}</p>
          </div>
          
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-md">
            <p className="text-slate-500 dark:text-slate-400 mb-1">Volume</p>
            <p className="font-medium text-slate-900 dark:text-white">{(Math.random() * 10 + 40).toFixed(1)}M</p>
          </div>
        </div>
      </div>
    </Card>
  );
};