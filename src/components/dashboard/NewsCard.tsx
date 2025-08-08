import React from 'react';
import { ExternalLink, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '../ui/Card';
import { NewsItem } from '../../types';
import { Badge } from '../ui/Badge';

interface NewsCardProps {
  newsItems: NewsItem[];
}

export const NewsCard: React.FC<NewsCardProps> = ({ newsItems }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp size={14} className="text-success-500" />;
      case 'negative':
        return <TrendingDown size={14} className="text-danger-500" />;
      default:
        return <Minus size={14} className="text-slate-500" />;
    }
  };
  
  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'high':
        return <Badge variant="danger" size="sm">High Impact</Badge>;
      case 'medium':
        return <Badge variant="warning" size="sm">Medium</Badge>;
      default:
        return <Badge variant="secondary" size="sm">Low</Badge>;
    }
  };

  return (
    <Card title="Market News" className="h-full">
      <div className="space-y-6">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Latest news and developments affecting crude oil markets
        </p>
        
        <div className="space-y-5 divide-y divide-slate-200 dark:divide-slate-800">
          {newsItems.map((item) => (
            <div key={item.id} className="pt-5 first:pt-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getSentimentIcon(item.sentiment)}
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.source}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-500">{formatDate(item.date)}</span>
                </div>
                {getImpactBadge(item.impact)}
              </div>
              
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {item.summary}
              </p>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Read more <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};