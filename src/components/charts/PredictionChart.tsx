import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { PredictionData, HistoricalData } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PredictionChartProps {
  historicalData: HistoricalData[];
  predictionData: PredictionData[];
  title?: string;
  height?: number;
  className?: string;
}

export const PredictionChart: React.FC<PredictionChartProps> = ({
  historicalData,
  predictionData,
  title = 'Price Prediction',
  height = 350,
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const textColor = isDark ? '#CBD5E1' : '#334155';
  const gridColor = isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)';
  
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Combine historical and prediction data for visualization
  const historicalDates = historicalData.map(d => formatDate(d.date));
  const historicalValues = historicalData.map(d => d.value);
  
  const predictionDates = predictionData.map(d => formatDate(d.date));
  const predictionValues = predictionData.map(d => d.predicted);
  const lowerBounds = predictionData.map(d => d.lowerBound || null);
  const upperBounds = predictionData.map(d => d.upperBound || null);
  
  // Determine where historical data ends and prediction begins
  const cutoffIndex = historicalDates.length - 1;
  
  const chartData = {
    labels: [...historicalDates, ...predictionDates],
    datasets: [
      {
        label: 'Historical',
        data: [...historicalValues, ...Array(predictionDates.length).fill(null)],
        borderColor: isDark ? '#60A5FA' : '#3B82F6',
        backgroundColor: isDark ? 'rgba(96, 165, 250, 0.05)' : 'rgba(59, 130, 246, 0.05)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5,
        tension: 0.3,
      },
      {
        label: 'Prediction',
        data: [...Array(historicalDates.length).fill(null), ...predictionValues],
        borderColor: isDark ? '#F59E0B' : '#F59E0B',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 5,
        borderDash: [5, 5],
        tension: 0.3,
      },
      {
        label: 'Upper Bound',
        data: [...Array(historicalDates.length).fill(null), ...upperBounds],
        borderColor: 'rgba(245, 158, 11, 0.3)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [3, 3],
        tension: 0.3,
        fill: '+1',
      },
      {
        label: 'Lower Bound',
        data: [...Array(historicalDates.length).fill(null), ...lowerBounds],
        borderColor: 'rgba(245, 158, 11, 0.3)',
        backgroundColor: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.1)',
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [3, 3],
        tension: 0.3,
        fill: '-1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
          filter: (item: any) => {
            // Hide the bounds from the legend
            return !['Upper Bound', 'Lower Bound'].includes(item.text);
          },
        },
      },
      title: {
        display: !!title,
        text: title,
        color: textColor,
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: '600',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
        titleColor: isDark ? '#CBD5E1' : '#1E293B',
        bodyColor: isDark ? '#CBD5E1' : '#334155',
        borderColor: isDark ? '#334155' : '#E2E8F0',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 4,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += '$' + context.parsed.y.toFixed(2);
            }
            return label;
          }
        }
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: cutoffIndex,
            xMax: cutoffIndex,
            borderColor: isDark ? 'rgba(203, 213, 225, 0.5)' : 'rgba(100, 116, 139, 0.5)',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              display: true,
              content: 'Today',
              position: 'start',
              backgroundColor: isDark ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              color: textColor,
              font: {
                size: 12,
              },
              padding: 4,
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
          minRotation: 45,
          callback: function(value: any, index: number) {
            // Show fewer x-axis labels for clarity
            return index % 3 === 0 ? chartData.labels[index] : '';
          }
        },
        border: {
          color: gridColor,
        },
      },
      y: {
        grid: {
          color: gridColor,
          drawBorder: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          callback: function(value: any) {
            return '$' + value;
          },
        },
        border: {
          dash: [4, 4],
          color: gridColor,
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className={`chart-container relative ${className}`} style={{ height }}>
      <Line data={chartData} options={options} />
      <div className="absolute bottom-2 right-2">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Prediction based on historical data and market factors
        </span>
      </div>
    </div>
  );
};