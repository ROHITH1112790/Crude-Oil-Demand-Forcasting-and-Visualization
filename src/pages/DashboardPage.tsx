import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { LineChart } from '../components/charts/LineChart';
import { PriceOverview } from '../components/dashboard/PriceOverview';
import { FactorInfluenceChart } from '../components/dashboard/FactorInfluenceChart';
import { NewsCard } from '../components/dashboard/NewsCard';
import { StatCard } from '../components/dashboard/StatCard';
import { 
  currentOilPrice, 
  historicalPriceData, 
  factorInfluences, 
  newsItems,
  dashboardStats
} from '../data/mockData';

const DashboardPage: React.FC = () => {
  // Prepare data for the price chart
  const priceChartData = {
    labels: historicalPriceData.map(item => {
      const date = new Date(item.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'Crude Oil Price',
        data: historicalPriceData.map(item => item.value),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Real-time crude oil market insights and price analytics
            </p>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <StatCard 
                key={index}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                isPositive={stat.isPositive}
              />
            ))}
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1">
              <PriceOverview data={currentOilPrice} />
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-subtle p-5">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Price History (30 Days)</h2>
                <LineChart data={priceChartData} height={300} />
              </div>
            </div>
          </div>
          
          {/* Secondary Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <FactorInfluenceChart factors={factorInfluences} />
            </div>
            
            <div>
              <NewsCard newsItems={newsItems.slice(0, 3)} />
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default DashboardPage;