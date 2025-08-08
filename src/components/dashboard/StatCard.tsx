import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/Card';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  isPositive,
  className = '',
}) => {
  return (
    <Card className={`h-full ${className}`}>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</h3>
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">{value}</span>
          <div className={`flex items-center text-sm ${isPositive ? 'text-success-600' : 'text-danger-600'}`}>
            {isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
            <span>{change}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};