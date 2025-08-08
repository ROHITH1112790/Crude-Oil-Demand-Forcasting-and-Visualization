import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FactorInfluence } from '../../types';

interface FactorInfluenceChartProps {
  factors: FactorInfluence[];
}

export const FactorInfluenceChart: React.FC<FactorInfluenceChartProps> = ({ factors }) => {
  const getScaledValue = (value: number): number => {
    // Scale the influence value to a percentage width (0-100)
    return Math.abs(value) * 100;
  };
  
  const getVariant = (value: number): string => {
    if (value > 0.6) return 'success';
    if (value > 0.3) return 'accent';
    if (value > 0) return 'warning';
    if (value > -0.3) return 'secondary';
    if (value > -0.6) return 'warning';
    return 'danger';
  };

  return (
    <Card title="Market Influence Factors" className="h-full">
      <div className="space-y-6">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Factors affecting crude oil price movements and their relative influence
        </p>
        
        <div className="space-y-5">
          {factors.map((factor) => (
            <div key={factor.factor} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{factor.factor}</span>
                  <Badge 
                    variant={getVariant(factor.influence)}
                    size="sm"
                    className="ml-2"
                  >
                    {factor.influence > 0 ? '+' : ''}{factor.influence.toFixed(2)}
                  </Badge>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {Math.abs(factor.influence * 100).toFixed(0)}% impact
                </span>
              </div>
              
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${factor.influence > 0 ? 'bg-success-500' : 'bg-danger-500'} rounded-full`}
                  style={{ width: `${getScaledValue(factor.influence)}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};